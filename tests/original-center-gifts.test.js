import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {LocalProfiles,PROFILE_BANK_KEY} from '../src/local-services.js';
import {CenterService,newCenterState} from '../src/center-model.js';
import {receiveOriginalCenterGift,installOriginalProfileUI} from '../src/original-profile-ui.js';
import {newSave} from '../src/model.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
const options={clock:()=>Date.UTC(2026,8,7),rng:()=>0};
async function fixture(beforeWrite=async()=>{},{legacy=false}={}){
 const bank={version:1,active:0,updatedAt:'fixture',slots:[newSave(data,4),null,null],center:newCenterState()},values=new Map([[PROFILE_BANK_KEY,JSON.stringify(bank)]]);
 if(legacy){delete bank.center;values.set(PROFILE_BANK_KEY,JSON.stringify(bank));}
 const storage={getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v)};
 let disk={revision:1,bank},writes=0;
 const request=async(_url,config={})=>{
  if(config.method!=='PUT')return {ok:true,headers:{get:()=> 'application/json'},json:async()=>structuredClone(disk)};
  const incoming=JSON.parse(config.body),status=await beforeWrite(++writes,incoming)??200;
  if(status!==200)return {ok:false,status};
  assert.equal(incoming.revision,disk.revision);disk={revision:disk.revision+1,bank:incoming.bank};return {ok:true,json:async()=>({revision:disk.revision})};
 };
 const profiles=new LocalProfiles(data,storage,request,{eventTarget:null});await profiles.initialize();
 const app={data,profiles,save:profiles.current,hasProfile:true,renderAll(){this.renders=(this.renders??0)+1;}};app.battle={save:app.save,party:[...app.save.pokemon]};
 return {app,profiles,get disk(){return disk;},get writes(){return writes;}};
}

test('first game gift initializes legacy Center state only after the original profile save succeeds',async()=>{
 const f=await fixture(undefined,{legacy:true});assert.equal(f.profiles.bank.center,undefined);
 await receiveOriginalCenterGift(f.app,{kind:'daily'},options);assert.equal(f.profiles.bank.center.inbox.length,1);assert.equal(f.writes,3);
 const failed=await fixture(async()=>503,{legacy:true});await assert.rejects(receiveOriginalCenterGift(failed.app,{kind:'daily'},options),/could not save/);
 assert.equal(failed.profiles.bank.center,undefined);assert.equal(failed.disk.bank.center,undefined);assert.equal(failed.writes,1);
});

test('original gift waits for both profile and gift commits while retaining live game references',async()=>{
 const releases=[],arrivals=[];let arrived;
 const signal=()=>new Promise(resolve=>{arrived=resolve;});let next=signal();
 const f=await fixture(async number=>{arrivals.push(number);arrived();await new Promise(resolve=>releases.push(resolve));});
 const save=f.app.save,pokemon=save.pokemon[0],initialMoney=f.disk.bank.slots[0].money;save.money=4321;let completed=false;
 const receiving=receiveOriginalCenterGift(f.app,{kind:'daily'},options).then(result=>{completed=true;return result;});
 await next;assert.equal(completed,false);assert.equal(f.disk.bank.slots[0].money,initialMoney);assert.equal(f.profiles.bank.center.inbox.length,0);
 next=signal();releases.shift()();await next;assert.equal(completed,false);assert.equal(f.disk.bank.slots[0].money,4321);assert.equal(f.profiles.bank.center.inbox.length,0);
 releases.shift()();const result=await receiving;
 assert.deepEqual(arrivals,[1,2]);assert.equal(result.pokemon.shiny,1);assert.equal(f.profiles.bank.center.inbox.length,1);assert.equal(f.profiles.current.pokemon.length,1);
 assert.equal(f.app.save,save);assert.equal(f.app.battle.save,save);assert.equal(f.app.save.pokemon[0],pokemon);assert.equal(f.app.battle.party[0],pokemon);assert(f.app.save.dex.shiny.includes(result.pokemon.speciesId));assert.equal(f.app.renders,1);
});

test('game and Center daily/weekly buttons share cooldowns and deliver exclusively to Pick Up',async()=>{
 const f=await fixture(),center=new CenterService(data,f.profiles,options);
 await receiveOriginalCenterGift(f.app,{kind:'daily'},options);
 await assert.rejects(center.perform('mysteryGift',{kind:'daily'}),/already claimed/);
 const weekly=await center.perform('mysteryGift',{kind:'weekly'});assert.equal(weekly.pokemon.shiny,2);
 await assert.rejects(receiveOriginalCenterGift(f.app,{kind:'weekly'},options),/already claimed/);
 assert.equal(f.profiles.bank.center.inbox.length,2);assert.equal(f.app.save.pokemon.length,1);assert.equal(f.profiles.current.pokemon.length,1);
});

test('failed gift persistence leaves cooldown/prize unclaimed and retry grants one gift',async()=>{
 let fail=true;const f=await fixture(async number=>fail&&number===2?503:200),save=f.app.save,pokemon=save.pokemon[0];
 await assert.rejects(receiveOriginalCenterGift(f.app,{kind:'weekly'},options),/could not save/);
 assert.equal(f.profiles.bank.center.inbox.length,0);assert.equal(f.profiles.bank.center.wallets[0].mysteryWeekly,'');assert.equal(f.app.save,save);assert.equal(f.app.save.pokemon[0],pokemon);
 fail=false;await receiveOriginalCenterGift(f.app,{kind:'weekly'},options);assert.equal(f.profiles.bank.center.inbox.length,1);assert.equal(f.profiles.bank.center.inbox[0].pokemon.shiny,2);
});

test('runtime MissingNo code uses the Center redemption record without adding a direct game copy',async()=>{
 const f=await fixture(),center=new CenterService(data,f.profiles,options);
 const result=await receiveOriginalCenterGift(f.app,{kind:'code',code:'ptdicu'},options);assert.equal(result.pokemon.speciesId,1010);assert.equal(f.app.save.pokemon.length,1);
 await assert.rejects(center.perform('giftCode',{code:'ptdicu'}),/already been claimed/);assert.deepEqual(f.profiles.bank.center.wallets[0].giftCodes,['ptdicu']);
});

test('source gift controls retain waiting, completed, used, and database-error frames',async()=>{
 class Element{constructor(){this.children=[];this.style={};this.classList={add(){},remove(){}};this.isConnected=true;this.open=true;this.dataset={};}append(...children){this.children.push(...children);}replaceChildren(...children){this.children=children;}setAttribute(){}remove(){}}
 const old={document:globalThis.document,fetch:globalThis.fetch,cancelAnimationFrame:globalThis.cancelAnimationFrame,requestAnimationFrame:globalThis.requestAnimationFrame};
 const nodes=Object.fromEntries(['#modal','#modal-content','#modal-close'].map(key=>[key,new Element()]));globalThis.document={head:new Element(),createElement:()=>new Element(),querySelector:key=>nodes[key]};globalThis.fetch=()=>new Promise(()=>{});globalThis.cancelAnimationFrame=()=>{};globalThis.requestAnimationFrame=()=>0;
 try{
  let fail=false;const f=await fixture(async()=>fail?503:200),app=f.app,noop=()=>{},back=()=>{};Object.assign(app,{openModal:noop,store:noop,closeModal:noop,stopOriginalStory:noop,openCampaign:noop,openMainMenu:noop,originalBack:back,toast:message=>{app.message=message;},openOriginalScreen:()=>nodes['#modal-content']});installOriginalProfileUI(app);
  const open=()=>{app.openGifts();return app.originalProfileView;};let view=open();let pending=view.controls().find(c=>c.path==='find_daily_butt').action();
  assert.equal(view.clip.currentLabel,'wait');assert(view.controls().every(c=>c.disabled));assert.notEqual(app.originalBack,back);await pending;
  assert.equal(view.clip.currentLabel,'dailyDone');assert.equal(app.originalBack,back);assert.match(app.message,/PokéCenter Pick Up/);
  view=open();await view.controls().find(c=>c.path==='find_daily_butt').action();assert.equal(view.clip.currentLabel,'error_used');
  view=open();await view.controls().find(c=>c.path==='find_butt').action();assert.equal(view.clip.currentLabel,'weeklyDone');
  fail=true;view=open();await view.controls().find(c=>c.path==='find_butt').action();assert.equal(view.clip.currentLabel,'error_database');assert.equal(app.originalBack,back);
 }finally{Object.assign(globalThis,old);}
});
