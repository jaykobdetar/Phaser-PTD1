import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {LocalProfiles,PROFILE_BANK_KEY,PROFILE_BACKUP_PREFIX,validateBank} from '../src/local-services.js';
import {newSave,SAVE_KEY} from '../src/model.js';
import {newCenterState,CenterService} from '../src/center-model.js';
const data=JSON.parse(readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
const copy=value=>structuredClone(value);
const initialBank=()=>({version:1,active:0,slots:[newSave(data,1),newSave(data,4),null],updatedAt:'fixture',center:{version:1,transfers:0,history:[]}});
function storage(bank=initialBank()){
  const values=new Map(bank?[[PROFILE_BANK_KEY,JSON.stringify(bank)]]:[]);
  return {values,getItem:key=>values.get(key)??null,setItem(key,value){values.set(key,value);}};
}
function lockManager(){
  let tail=Promise.resolve();
  return {calls:0,request(name,options,run){this.calls++;assert.equal(name,PROFILE_BANK_KEY);assert.equal(options.mode,'exclusive');const next=tail.then(run);tail=next.catch(()=>{});return next;}};
}
function disk(bank=initialBank()){
  let state={revision:8,bank:copy(bank)},writes=0,fail=false;
  const request=async(_url,options={})=>{
    if(options.method==='PUT'){
      if(fail)return {ok:false,status:503};
      const value=JSON.parse(options.body);
      if(value.revision!==state.revision)return {ok:false,status:409};
      state={revision:state.revision+1,bank:copy(value.bank)};writes++;
      return {ok:true,status:200,json:async()=>({revision:state.revision})};
    }
    return {ok:true,status:200,headers:{get:()=> 'application/json'},json:async()=>copy(state)};
  };
  return {request,get state(){return copy(state);},get writes(){return writes;},set fail(value){fail=value;}};
}
function validateCenter(center){
  if(center.version!==1||!Number.isSafeInteger(center.transfers)||center.transfers<0||!Array.isArray(center.history))throw Error('Invalid Center transaction state.');
  return copy(center);
}
const options={validateCenter,eventTarget:null};

test('initialization uses the disk bank and retains the displaced browser bank exactly',async()=>{
  const browser=initialBank(),remote=initialBank();remote.slots[0]=newSave(data,25);remote.center.transfers=3;
  const s=storage(browser),raw=s.getItem(PROFILE_BANK_KEY),d=disk(remote),p=new LocalProfiles(data,s,d.request,options);
  await p.initialize();assert.equal(p.current.pokemon[0].speciesId,25);assert.equal(p.bank.center.transfers,3);assert.equal(p.serverRevision,8);
  assert.equal(s.getItem(p.lastBackup.key),raw);assert(p.lastBackup.key.startsWith(PROFILE_BACKUP_PREFIX));
  p.save(p.current);await p.pending;assert.equal(d.state.bank.slots[0].pokemon[0].speciesId,25);assert.equal(d.state.bank.center.transfers,3);
});

test('a last-second current-profile draft is backed up before authoritative reload replaces its mirror',async()=>{
  const bank=initialBank(),s=storage(bank),d=disk(bank),draft=copy(bank.slots[0]);draft.money=12345;
  const raw=JSON.stringify(draft);s.setItem(SAVE_KEY,raw);
  const p=new LocalProfiles(data,s,d.request,options);await p.initialize();
  assert.equal(p.current.money,bank.slots[0].money);assert.equal(s.getItem(p.lastBackup.key),raw);assert.equal(p.lastBackup.reason,'reload-replaced-profile-draft');
  assert.equal(JSON.parse(s.getItem(SAVE_KEY)).money,bank.slots[0].money);
});

test('a stale game client cannot replace a completed Center change in shared browser storage',async()=>{
  const s=storage(),locks=lockManager(),events=[];
  const game=new LocalProfiles(data,s,null,{...options,locks,onConflict:e=>events.push(e)}),center=new LocalProfiles(data,s,null,{...options,locks});
  await game.initialize();await center.initialize();const stale=copy(game.current);
  await center.transact(bank=>{bank.center.transfers++;const a=bank.slots[0].pokemon[0],b=bank.slots[1].pokemon[0];bank.slots[0].pokemon=[b];bank.slots[0].party=[b.uid,null,null,null,null,null];bank.slots[1].pokemon=[a];bank.slots[1].party=[a.uid,null,null,null,null,null];return {ok:true};});
  const committed=s.getItem(PROFILE_BANK_KEY);
  assert.throws(()=>game.save(stale),{code:'PROFILE_CONFLICT'});assert.equal(s.getItem(PROFILE_BANK_KEY),committed);assert.equal(events.length,1);
  await game.refresh();assert.equal(game.status,'browser');assert.equal(game.current.pokemon[0].speciesId,4);assert.equal(game.bank.center.transfers,1);
});

test('disk CAS rejects stale clients even when their browsers have separate storage',async()=>{
  const d=disk(),a=new LocalProfiles(data,storage(d.state.bank),d.request,options),b=new LocalProfiles(data,storage(d.state.bank),d.request,options);
  await a.initialize();await b.initialize();await a.transact(bank=>{bank.center.transfers++;});const committed=d.state;
  b.current.money++;b.save(b.current);await b.pending;
  assert.equal(b.status,'conflict');assert.equal(b.lastError.code,'PROFILE_CONFLICT');assert.deepEqual(d.state,committed);assert.equal(d.writes,1);
  await b.refresh();assert.equal(b.bank.center.transfers,1);assert.equal(b.serverRevision,9);
});

test('thrown, rejected, asynchronous, and invalid mutations leave bank and persistence unchanged',async()=>{
  const s=storage(),d=disk(JSON.parse(s.getItem(PROFILE_BANK_KEY))),p=new LocalProfiles(data,s,d.request,options);await p.initialize();
  const beforeBank=copy(p.bank),beforeStorage=s.getItem(PROFILE_BANK_KEY),beforeDisk=d.state;
  for(const mutate of [
    bank=>{bank.slots[0].money=999;throw Error('Not permitted');},
    bank=>{bank.center.transfers=99;return {ok:false,reason:'Offer was canceled'};},
    async bank=>{bank.center.transfers=99;},
    bank=>{bank.center.transfers=-1;},
    bank=>{bank.slots[0].pokemon[0].speciesId=-1;},
  ]){
    await assert.rejects(p.transact(mutate));assert.deepEqual(p.bank,beforeBank);assert.equal(s.getItem(PROFILE_BANK_KEY),beforeStorage);assert.deepEqual(d.state,beforeDisk);
  }
  assert.equal(d.writes,0);await p.transact(bank=>{bank.center.transfers++;});assert.equal(p.bank.center.transfers,1);
});

test('storage quota and server failures do not expose half of a transaction',async()=>{
  for(const useDisk of [false,true]){
    const s=storage(),d=disk(JSON.parse(s.getItem(PROFILE_BANK_KEY))),p=new LocalProfiles(data,s,useDisk?d.request:null,options);await p.initialize();
    const before=copy(p.bank),raw=s.getItem(PROFILE_BANK_KEY),server=d.state;
    if(useDisk)d.fail=true;else s.setItem=()=>{throw Error('Quota exceeded');};
    await assert.rejects(p.transact(bank=>{bank.slots[0].money=0;bank.slots[1].money=100;bank.center.history.push('accepted');}));
    assert.deepEqual(p.bank,before);assert.equal(s.getItem(PROFILE_BANK_KEY),raw);assert.deepEqual(d.state,server);
  }
});

test('two concurrent browser commands serialize and the stale intent must refresh before retrying',async()=>{
  const s=storage(),locks=lockManager(),a=new LocalProfiles(data,s,null,{...options,locks}),b=new LocalProfiles(data,s,null,{...options,locks});await a.initialize();await b.initialize();
  const add=bank=>{bank.center.transfers++;};
  const results=await Promise.allSettled([a.transact(add),b.transact(add)]);
  assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(results.find(r=>r.status==='rejected').reason.code,'PROFILE_CONFLICT');
  assert.equal(JSON.parse(s.getItem(PROFILE_BANK_KEY)).center.transfers,1);assert(locks.calls>=4);
  await b.refresh();const result=await b.transact(add);assert.equal(result.bank.center.transfers,2);
});

test('queued legacy writes retain their own snapshots and transaction commands wait for them',async()=>{
  const s=storage(),d=disk(JSON.parse(s.getItem(PROFILE_BANK_KEY))),p=new LocalProfiles(data,s,d.request,options);await p.initialize();
  p.current.money=10;p.save(p.current);p.current.money=20;p.save(p.current);
  const result=await p.transact(bank=>{assert.equal(bank.slots[0].money,20);bank.center.transfers++;return 'committed';});
  assert.equal(result.result,'committed');assert.equal(result.bank.slots[0].money,20);assert.equal(d.state.bank.center.transfers,1);assert.equal(d.writes,3);
});

test('normal game writes are blocked while a transaction is queued and cannot erase its Center state',async()=>{
  const s=storage(),p=new LocalProfiles(data,s,null,options);await p.initialize();
  const transaction=p.transact(bank=>{bank.center.transfers++;});
  assert.throws(()=>p.save(p.current),{code:'PROFILE_BUSY'});await transaction;
  const imported=copy(p.bank);delete imported.center;p.bank=imported;p.write();await p.pending;
  assert.equal(p.bank.center.transfers,1);assert.equal(JSON.parse(s.getItem(PROFILE_BANK_KEY)).center.transfers,1);
});

test('the Center validator is optional for legacy banks and preserves normalized Center extensions',()=>{
  const bank=initialBank();bank.center=newCenterState();const normalized=validateBank(bank,data);
  assert.deepEqual(normalized.center.dex.normal,[1,4]);assert.deepEqual(normalized.center.wallets,bank.center.wallets);
  let called=0;const result=validateBank(bank,data,{validateCenter:(center)=>{called++;return {...center,normalized:true};}});
  assert.equal(called,1);assert.equal(result.center.normalized,true);delete bank.center;assert(!('center'in validateBank(bank,data)));
  for(const center of [[],null,42,{version:2}])assert.throws(()=>validateBank({...bank,center},data));
});

test('game saves and older imports preserve accepted account Dex history across all profiles',async()=>{
  const bank=initialBank();bank.center=newCenterState();bank.center.dex={normal:[25],shiny:[150],shadow:[151]};
  const s=storage(bank),p=new LocalProfiles(data,s,null,{eventTarget:null});await p.initialize();
  assert.deepEqual(p.bank.center.dex,{normal:[1,4,25],shiny:[150],shadow:[151]});
  assert(p.bank.slots[1].dex.normal.includes(25));assert(p.bank.slots[0].dex.shiny.includes(150));
  await p.transact(draft=>{draft.center=newCenterState();draft.slots=[newSave(data,7),null,null];});
  assert.deepEqual(p.bank.center.dex,{normal:[1,4,7,25],shiny:[150],shadow:[151]});
  assert.deepEqual(p.current.dex.normal,[1,4,7,25]);
  const fresh=newSave(data,39);p.save(fresh);await p.pending;
  assert.deepEqual(p.bank.center.dex.normal,[1,4,7,25,39]);assert.deepEqual(p.current.dex.shadow,[151]);
  const accepted=copy(p.bank.center.dex);
  await assert.rejects(p.transact(draft=>{draft.center.dex.normal.push(149);throw Error('Rejected import');}));
  assert.deepEqual(p.committedBank.center.dex,accepted);
  const reopened=new LocalProfiles(data,s,null,{eventTarget:null});await reopened.initialize();
  assert.deepEqual(reopened.bank.center.dex,accepted);assert.deepEqual(reopened.current.dex,p.current.dex);
});

test('concurrent automatic giveaway settlement commits one prize and rejects the stale client',async()=>{
  const bank=initialBank();bank.center=newCenterState();let now=Date.UTC(2026,8,7);const s=storage(bank),locks=lockManager(),conflicts=[];
  const a=new LocalProfiles(data,s,null,{eventTarget:null,locks}),b=new LocalProfiles(data,s,null,{eventTarget:null,locks,onConflict:e=>conflicts.push(e.error.code)});
  await a.initialize();const first=new CenterService(data,a,{clock:()=>now,rng:()=>0}),uid=a.current.party[0];
  const created=await first.perform('createGiveaway',{uids:[uid],title:'Concurrent settlement',endsAt:now+86400000});
  await first.perform('selectProfile',{slot:1});await first.perform('joinGiveaway',{id:created.giveaway.id});await b.initialize();
  const second=new CenterService(data,b,{clock:()=>now,rng:()=>0});now+=86400001;
  const results=await Promise.allSettled([first.perform('settleGiveaways'),second.perform('settleGiveaways')]);
  assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(results.find(r=>r.status==='rejected').reason.code,'PROFILE_CONFLICT');assert.deepEqual(conflicts,['PROFILE_CONFLICT']);
  const saved=JSON.parse(s.getItem(PROFILE_BANK_KEY));assert.equal(saved.center.giveaways[0].status,'ended');
  assert.equal(saved.center.inbox.length,1);assert.equal(saved.center.inbox[0].owner,1);assert.equal(saved.center.inbox[0].pokemon.uid,uid);assert.equal(saved.slots[0].pokemon.length,0);
  await b.refresh();await second.perform('settleGiveaways');assert.equal(b.bank.center.inbox.length,1);
});

test('storage notifications flag external changes once and dispose removes the listener',async()=>{
  const listeners=new Set(),eventTarget={addEventListener:(_type,f)=>listeners.add(f),removeEventListener:(_type,f)=>listeners.delete(f)};
  const s=storage(),events=[],conflicts=[],p=new LocalProfiles(data,s,null,{...options,eventTarget,onExternalChange:e=>events.push(e),onConflict:e=>conflicts.push(e)});await p.initialize();
  const external=copy(p.bank);external.center.transfers=4;const raw=JSON.stringify(external);s.setItem(PROFILE_BANK_KEY,raw);
  for(const listener of listeners)listener({key:PROFILE_BANK_KEY,newValue:raw,storageArea:s});
  assert.equal(events.length,1);assert.equal(conflicts.length,1);assert.equal(events[0].bank.center.transfers,4);assert.equal(p.bank.center.transfers,0);
  p.dispose();assert.equal(listeners.size,0);
});

test('a disk-committed transaction remains successful if only its browser mirror fails',async()=>{
  const s=storage(),d=disk(JSON.parse(s.getItem(PROFILE_BANK_KEY))),p=new LocalProfiles(data,s,d.request,options);await p.initialize();s.setItem=()=>{throw Error('Cache full');};
  const result=await p.transact(bank=>{bank.center.transfers++;});assert.equal(result.bank.center.transfers,1);assert.equal(d.state.bank.center.transfers,1);assert.equal(p.status,'disk');assert(p.cacheError);assert.equal(d.writes,1);
});

test('a full browser cache still loads the authoritative disk bank without replacing its displaced records',async()=>{
  const stale=initialBank(),remote=initialBank();remote.center.transfers=4;
  const s=storage(stale),raw=s.getItem(PROFILE_BANK_KEY),d=disk(remote);s.setItem=()=>{throw Error('Cache full');};
  const p=new LocalProfiles(data,s,d.request,options);await p.initialize();assert.equal(p.bank.center.transfers,4);assert.equal(s.getItem(PROFILE_BANK_KEY),raw);assert(p.cacheError);
  await p.transact(bank=>{bank.center.transfers++;});assert.equal(d.state.bank.center.transfers,5);assert.equal(s.getItem(PROFILE_BANK_KEY),raw);
});

test('refresh of an empty active slot leaves its previous mirror intact without duplicate backups',async()=>{
  const s=storage(),p=new LocalProfiles(data,s,null,options);await p.initialize();const mirror=s.getItem(SAVE_KEY);
  await p.transact(bank=>{bank.slots=[null,null,null];});
  for(let i=0;i<5;i++)await p.refresh();
  assert.equal(s.getItem(SAVE_KEY),mirror);assert.equal([...s.values.keys()].filter(k=>k.startsWith(PROFILE_BACKUP_PREFIX)).length,0);
  const reopened=new LocalProfiles(data,s,null,options);await reopened.initialize();assert.equal(reopened.current,null);assert.equal(s.getItem(SAVE_KEY),mirror);
  assert.equal([...s.values.keys()].filter(k=>k.startsWith(PROFILE_BACKUP_PREFIX)).length,0);
});

test('full-cache authoritative refresh preserves old browser records and succeeds after disk initialization',async()=>{
  const old=initialBank(),remote=initialBank();remote.center.transfers=4;const s=storage(old),raw=s.getItem(PROFILE_BANK_KEY),mirror=JSON.stringify(old.slots[0]);s.setItem(SAVE_KEY,mirror);
  const d=disk(remote),p=new LocalProfiles(data,s,d.request,options);s.setItem=()=>{throw Error('Cache full');};
  await p.initialize();await p.refresh();assert.equal(p.bank.center.transfers,4);assert.equal(p.status,'disk');assert.equal(p.lastError,null);
  assert.equal(s.getItem(PROFILE_BANK_KEY),raw);assert.equal(s.getItem(SAVE_KEY),mirror);assert(p.cacheError);
});

test('refresh cannot discard an in-memory-only draft when its backup cannot be saved',async()=>{
  const s=storage(),d=disk(),p=new LocalProfiles(data,s,d.request,options);await p.initialize();p.bank.center.transfers=5;
  const draft=copy(p.bank);s.setItem=()=>{throw Error('Cache full');};
  await assert.rejects(p.refresh(),/Cache full/);assert.deepEqual(p.bank,draft);assert.equal(d.state.bank.center.transfers,0);
});

test('cache recovery backs up deferred browser bank and profile drafts before replacing either record',async()=>{
  const old=initialBank(),remote=initialBank();remote.center.transfers=4;const s=storage(old),raw=s.getItem(PROFILE_BANK_KEY),draft=copy(old.slots[0]);draft.money=98765;const mirror=JSON.stringify(draft);s.setItem(SAVE_KEY,mirror);
  const d=disk(remote),p=new LocalProfiles(data,s,d.request,options),set=s.setItem;let full=true;s.setItem=(key,value)=>{if(full)throw Error('Cache full');return set(key,value);};
  await p.initialize();await p.refresh();assert.equal(s.getItem(PROFILE_BANK_KEY),raw);assert.equal(s.getItem(SAVE_KEY),mirror);
  full=false;await p.transact(bank=>{bank.center.transfers++;});
  const backups=[...s.values].filter(([key])=>key.startsWith(PROFILE_BACKUP_PREFIX)).map(([,value])=>value);
  assert(backups.includes(raw));assert(backups.includes(mirror));assert.equal(new Set(backups).size,backups.length);
  assert.equal(JSON.parse(s.getItem(PROFILE_BANK_KEY)).center.transfers,5);assert.equal(JSON.parse(s.getItem(SAVE_KEY)).money,remote.slots[0].money);assert.equal(p.deferredBackups.length,0);
});

test('delayed storage events do not invalidate a newer accepted bank but new changes still conflict',async()=>{
  const s=storage(),events=[],p=new LocalProfiles(data,s,null,{...options,onConflict:e=>events.push(e)});await p.initialize();
  const earlier=copy(p.bank);earlier.center.transfers=1;const latest=copy(earlier);latest.center.transfers=2;s.setItem(PROFILE_BANK_KEY,JSON.stringify(latest));await p.refresh();
  p.storageListener({key:PROFILE_BANK_KEY,storageArea:s,newValue:JSON.stringify(earlier)});assert.equal(p.status,'browser');assert.equal(events.length,0);
  const next=copy(latest);next.center.transfers=3;s.setItem(PROFILE_BANK_KEY,JSON.stringify(next));
  p.storageListener({key:PROFILE_BANK_KEY,storageArea:s,newValue:JSON.stringify(earlier)});assert.equal(p.status,'conflict');assert.equal(events[0].bank.center.transfers,3);
});

test('legacy writes validate one isolated bank including retained Center state before queuing',async()=>{
  const s=storage(),p=new LocalProfiles(data,s,null,options);await p.initialize();const validate=p.validate.bind(p);let validations=0;p.validate=input=>{validations++;return validate(input);};
  const imported=copy(p.bank);delete imported.center;p.bank=imported;p.write();assert.equal(validations,1);
  p.bank.center.transfers=99;await p.pending;assert.equal(p.bank.center.transfers,0);assert.equal(JSON.parse(s.getItem(PROFILE_BANK_KEY)).center.transfers,0);
  p.bank.center.transfers=-1;assert.throws(()=>p.write(),/Invalid Center/);assert.equal(JSON.parse(s.getItem(PROFILE_BANK_KEY)).center.transfers,0);
});
