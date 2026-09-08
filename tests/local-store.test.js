import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {LocalProfiles,PROFILE_BANK_KEY,PROFILE_BACKUP_PREFIX} from '../src/local-services.js';
import {newSave,makePokemon,persist,SAVE_KEY} from '../src/model.js';
import {newCenterState} from '../src/center-model.js';
import {recordOwned} from '../src/profile-features.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
// Execute the real App.store method without booting Phaser or a browser DOM.
const source=fs.readFileSync(new URL('../src/main.js',import.meta.url),'utf8'),start=source.indexOf('  store() {'),end=source.indexOf('  showProfileConflict()',start);
assert(start>=0&&end>start);const createStore=new Function('persist','recordOwned','$',`return ({${source.slice(start,end)}}).store;`);
const copy=structuredClone;
function storage(values){
 let cap=Infinity;const bytes=()=>[...values].reduce((sum,[key,value])=>sum+key.length+value.length,0);
 return {values,get cap(){return cap;},set cap(value){cap=value;},bytes,getItem:key=>values.get(key)??null,setItem(key,value){const previous=values.has(key)?key.length+values.get(key).length:0;if(bytes()-previous+key.length+value.length>cap)throw new DOMException('Synthetic byte-cap quota','QuotaExceededError');values.set(key,value);}};
}
async function fixture({disk=true,displaced=false}={}){
 const original=newSave(data,1),bank={version:1,active:0,updatedAt:'fixture',slots:[original,null,null],center:newCenterState()},draft=copy(original);
 if(displaced){draft.trainer='Displaced draft';draft.pokemon=Array.from({length:100},(_,i)=>makePokemon(data,25,5,{uid:'retained-'+i}));draft.party=['retained-0',null,null,null,null,null];}
 const bankRaw=JSON.stringify(bank),mirrorRaw=JSON.stringify(draft),s=storage(new Map([[PROFILE_BANK_KEY,bankRaw],[SAVE_KEY,mirrorRaw]]));
 let remote={revision:1,bank:copy(bank)},fail=false,writeGate=null,writes=0;
 if(displaced){remote.bank.slots[0].money=999;s.cap=s.bytes();}
 const request=async(_url,options={})=>{
  if(options.method!=='PUT')return {ok:true,headers:{get:()=> 'application/json'},json:async()=>copy(remote)};
  writes++;if(writeGate)await writeGate();if(fail)return {ok:false,status:503};
  const incoming=JSON.parse(options.body);assert.equal(incoming.revision,remote.revision);remote={revision:remote.revision+1,bank:incoming.bank};return {ok:true,json:async()=>({revision:remote.revision})};
 };
 const profiles=new LocalProfiles(data,s,disk?request:null,{eventTarget:null});await profiles.initialize();
 const status={},app={hasProfile:true,profiles,save:copy(profiles.current)};
 app.store=createStore(value=>persist(value,s),recordOwned,()=>status);
 return {app,profiles,s,status,bankRaw,mirrorRaw,get remote(){return remote;},get writes(){return writes;},set fail(value){fail=value;},set writeGate(value){writeGate=value;}};
}

test('real App.store cannot replace a large displaced mirror while its backup is blocked, even when a smaller mirror would fit',async()=>{
 const f=await fixture({displaced:true});assert.equal(f.profiles.deferredBackups.length,2);assert.equal(f.s.getItem(SAVE_KEY),f.mirrorRaw);
 assert(JSON.stringify(f.app.save).length<f.mirrorRaw.length,'The dangerous replacement would fit by freeing space');
 f.app.save.money=1000;assert.equal(f.app.store(),true);await f.profiles.pending;
 assert.equal(f.remote.bank.slots[0].money,1000);assert.equal(f.profiles.lastError,null);assert.equal(f.status.textContent,'Saved on this device');
 assert.equal(f.s.getItem(SAVE_KEY),f.mirrorRaw);assert.equal(f.s.getItem(PROFILE_BANK_KEY),f.bankRaw);assert.equal(f.profiles.deferredBackups.length,2);
 f.s.cap=Infinity;f.app.save.money=1001;assert.equal(f.app.store(),true);await f.profiles.pending;
 const backups=[...f.s.values].filter(([key])=>key.startsWith(PROFILE_BACKUP_PREFIX)).map(([,value])=>value);
 assert(backups.includes(f.mirrorRaw));assert(backups.includes(f.bankRaw));assert.equal(f.profiles.deferredBackups.length,0);
 assert.equal(JSON.parse(f.s.getItem(SAVE_KEY)).money,1001);assert.equal(JSON.parse(f.s.getItem(PROFILE_BANK_KEY)).slots[0].money,1001);
});

test('normal browser and disk App.store synchronously preserve the latest draft before queued bank persistence',async()=>{
 for(const disk of [false,true]){
  const f=await fixture({disk}),previous=f.s.getItem(PROFILE_BANK_KEY);f.app.save.money=1234;
  assert.equal(f.app.store(),true);assert.equal(JSON.parse(f.s.getItem(SAVE_KEY)).money,1234);assert.equal(f.s.getItem(PROFILE_BANK_KEY),previous);assert(f.app.save.savedAt);
  await f.profiles.pending;assert.equal(JSON.parse(f.s.getItem(PROFILE_BANK_KEY)).slots[0].money,1234);assert.equal(f.status.textContent,'Saved on this device');assert.equal(f.profiles.lastError,null);
  if(disk)assert.equal(f.remote.bank.slots[0].money,1234);
 }
});

test('held disk acknowledgment retains the synchronous game draft for interrupted navigation recovery',async()=>{
 const f=await fixture();let release,arrived;const requested=new Promise(resolve=>{arrived=resolve;});f.writeGate=async()=>{arrived();await new Promise(resolve=>{release=resolve;});};
 f.app.save.money=2468;assert.equal(f.app.store(),true);await requested;
 assert.equal(JSON.parse(f.s.getItem(SAVE_KEY)).money,2468);assert.notEqual(f.remote.bank.slots[0].money,2468);assert.equal(f.status.textContent,'Saving…');
 release();await f.profiles.pending;assert.equal(f.remote.bank.slots[0].money,2468);assert.equal(f.status.textContent,'Saved on this device');
});

test('repeated offline/full-cache saves retain original displaced records without queueing every failed autosave',async()=>{
 const f=await fixture({displaced:true});f.fail=true;const originals=f.profiles.deferredBackups.map(entry=>entry.raw);
 for(let i=0;i<30;i++){f.app.save.money=1000+i;assert.equal(f.app.store(),true);await f.profiles.pending;assert(f.profiles.lastError);assert.deepEqual(f.profiles.deferredBackups.map(entry=>entry.raw),originals);}
 assert.equal(f.profiles.bank.slots[0].money,1029);assert.equal(f.s.getItem(SAVE_KEY),f.mirrorRaw);assert.equal(f.s.getItem(PROFILE_BANK_KEY),f.bankRaw);assert.equal(f.profiles.deferredBackups.length,2);
});

test('App.store retains its valid single-save fallback without a profile manager',()=>{
 const s=storage(new Map()),status={},app={hasProfile:true,save:newSave(data,1)};app.store=createStore(value=>persist(value,s),recordOwned,()=>status);
 assert.equal(app.store(),true);assert.equal(JSON.parse(s.getItem(SAVE_KEY)).pokemon[0].speciesId,1);assert.equal(status.textContent,'Saved on this device');
});
