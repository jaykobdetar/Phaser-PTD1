import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {CenterUI} from '../src/center-ui.js';
import {makePokemon,newSave} from '../src/model.js';
import {newCenterState} from '../src/center-model.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url))),time=Date.UTC(2026,0,1);
function fixture(count=5000){
 const p=makePokemon(data,25,25,{uid:'template'}),pokemon=(prefix,i)=>({...p,uid:prefix+i,nickname:'Fixture '+i,moves:[...p.moves]}),bank={active:0,slots:[newSave(data,1),newSave(data,7),null],center:newCenterState()};
 bank.slots[0].pokemon=Array.from({length:count},(_,i)=>pokemon('roster-',i));bank.slots[0].party=Array(6).fill(null);
 const state=bank.center;state.listings=Array.from({length:count},(_,i)=>({id:'listing-'+i,owner:i%2,pokemon:pokemon('listed-',i),status:'open',price:1,wishlist:[],createdAt:time}));state.offers=Array.from({length:count},(_,i)=>({id:'offer-'+i,owner:0,targetId:'listing-1',listingIds:['listing-0'],status:'pending'}));state.inbox=Array.from({length:count},(_,i)=>({id:'inbox-'+i,owner:0,pokemon:pokemon('inbox-',i),createdAt:time}));state.giveaways=Array.from({length:count},(_,i)=>({id:'giveaway-'+i,owner:0,title:'Giveaway '+i,pokemon:[pokemon('prize-',i)],createdAt:time,endsAt:time+2*86400000,status:'open',participants:[],winners:[]}));state.notifications=Array.from({length:2000},(_,i)=>({id:'notice-'+i,owner:0,createdAt:time,text:'Fixture notice',read:false}));state.transferVaults[2]=Array.from({length:count},(_,i)=>({id:'archive-'+i,owner:0,pokemon:pokemon('archive-',i),createdAt:time,gender:'male'}));state.tags=Object.fromEntries(bank.slots[0].pokemon.map(p=>[p.uid,'hacked']));
 const service={bank,state,get active(){return bank.active;},get profile(){return bank.slots[bank.active];},clock:()=>time};return new CenterUI({data,sprites:{},service,dialog:{open:false}});
}
const count=(html,pattern)=>(html.match(pattern)??[]).length;
test('large variable-size views render at most 24 cards or 50 table rows with bounded navigation',()=>{
 const ui=fixture();
 for(const [name,html,limit] of [
  ['collection',ui.collection(),24],['conversion',ui.conversion('conversion'),24],['tags',ui.conversion('tags'),24],['pickup',ui.pickup(),24],['trades',ui.trades('trades'),24],['my-trades',ui.trades('my-trades'),24],['search',ui.trades('search'),24],['trainer-adoptions',ui.adoption('trainer-adoptions'),24],['archive',ui.transfer(),24],['offers',ui.offersTable(ui.state.offers),0],['giveaways',ui.giveaways('giveaways'),0],['notifications',ui.notifications(),0]
 ]){
  assert(count(html,/class="pokemon-card/g)<=limit,name);assert(count(html,/<tr>/g)<=51,name);assert(count(html,/class="notification /g)<=50,name);assert(count(html,/data-ui="page"/g)<=7,name);assert(html.length<100000,name);assert.match(html,/data-page-scope=/,name);
 }
 const pickup=ui.pickup();assert.doesNotMatch(pickup,/inbox-4999/);assert.match(pickup,/&quot;all&quot;:true/);
});
test('every record is reachable; shrinking results clamps pages and collection selection survives page changes',async()=>{
 const ui=fixture(),ids=[];for(let page=1;page<=209;page++){ui.pages.conversion=page;ids.push(...ui.pageRows('conversion',ui.profile.pokemon).map(p=>p.uid));}
 assert.equal(ids.length,5000);assert.equal(new Set(ids).size,5000);assert.equal(ids.at(-1),'roster-4999');
 ui.pages.conversion=209;assert.equal(ui.pageRows('conversion',ui.profile.pokemon.slice(0,3)).length,3);assert.equal(ui.pages.conversion,1);
 ui.selection.add('roster-0');ui.render=()=>{};const button={dataset:{ui:'page',scope:'collection',page:'2'}};await ui.click({preventDefault(){},target:{closest:selector=>selector==='[data-ui]'?button:null}});assert.equal(ui.filters.page,2);assert(ui.selection.has('roster-0'));
});
test('picker selection survives pages and filters, enforces the total limit, and submits all selected IDs',()=>{
 const ui=fixture();assert.equal(count(ui.pokemonPicker('uids',[],{limit:20}),/class="pokemon-card/g),24);const picker=ui.pickers.get('uids');
 assert(ui.choosePicker('uids','roster-0'));picker.page=209;assert.match(ui.pickerContent('uids'),/roster-4999/);assert(ui.choosePicker('uids','roster-4999'));
 picker.query='Fixture 4999';picker.page=209;const filtered=ui.pickerContent('uids');assert.equal(picker.page,1);assert.equal(count(filtered,/class="pokemon-card/g),1);assert.match(filtered,/2 selected \/ 20/);
 const form={querySelectorAll:()=>[{dataset:{picker:'uids'}}]};assert.deepEqual(ui.pickerValues(form,'uids'),['roster-0','roster-4999']);
 for(let i=1;i<=18;i++)assert(ui.choosePicker('uids','roster-'+i));assert.equal(ui.choosePicker('uids','roster-19'),false);assert.equal(picker.selected.size,20);assert(ui.choosePicker('uids','roster-0',false));assert(ui.choosePicker('uids','roster-19'));
 picker.query='';picker.page=1;assert.doesNotMatch(ui.pickerContent('uids'),/value="roster-0" data-picker-choice checked/);
});
test('large trade dropdown and offer picker remain bounded and retain selections off-page',()=>{
 const ui=fixture();ui.modal=(_title,html)=>{ui.modalHTML=html;};ui.listingDialog('roster-4999');assert(count(ui.modalHTML,/<option /g)<35);assert.match(ui.modalHTML,/Selected: Fixture 4999/);assert.deepEqual([...ui.pickers.get('uid').selected],['roster-4999']);assert(ui.choosePicker('uid','roster-1'));assert.deepEqual([...ui.pickers.get('uid').selected],['roster-1']);
 ui.offerDialog('listing-1');assert.equal(count(ui.modalHTML,/class="pokemon-card/g),24);for(let i=0;i<6;i++)assert(ui.choosePicker('listingIds','listing-'+(2*i)));assert.equal(ui.choosePicker('listingIds','listing-12'),false);assert.equal(ui.pickers.get('listingIds').selected.size,6);
});
test('small lists retain all cards without pagination or picker toolbars',()=>{
 const ui=fixture(3);assert.equal(count(ui.conversion('conversion'),/class="pokemon-card/g),3);assert.doesNotMatch(ui.conversion('conversion'),/data-page-scope=/);const html=ui.pokemonPicker();assert.equal(count(html,/class="pokemon-card/g),3);assert.doesNotMatch(html,/picker-toolbar|data-picker-count|data-page-scope=/);
});
test('filters reset page cursors while a dialog search only resets its own page and preserves choices',async()=>{
 const ui=fixture(),previous=globalThis.FormData;try{globalThis.FormData=class{constructor(){return new Map([['query','Fixture 4999']]);}};ui.pages={search:5,conversion:5};ui.filters.page=5;ui.render=()=>{};const form={dataset:{form:'filter'},reportValidity:()=>true};await ui.submit({preventDefault(){},target:{closest:()=>form}});assert.equal(ui.filters.page,1);assert.deepEqual(ui.pages,{});
 }finally{globalThis.FormData=previous;}
 ui.pokemonPicker('uids',['roster-0']);ui.pickers.get('uids').page=5;ui.pickerHost=()=>({querySelector:()=>({value:'4999'})});let rendered;ui.renderPicker=name=>{rendered=name;};ui.filterPicker('uids');assert.equal(ui.pickers.get('uids').page,1);assert.equal(ui.pickers.get('uids').query,'4999');assert(ui.pickers.get('uids').selected.has('roster-0'));assert.equal(rendered,'uids');
});
test('giveaway ticks update only cancellation text/availability until settlement changes state',async()=>{
 const ui=fixture(1),g=ui.state.giveaways[0],previous=globalThis.location;globalThis.location={hash:'#/giveaway/'+g.id};let now=time+1000,renders=0,settles=0;ui.service.clock=()=>now;
 const text={dataset:{giveawayCountdown:g.id},textContent:''},cancel={dataset:{giveawayCancel:g.id},hidden:false,disabled:false},focus={name:'Join control stays mounted'};ui.root={querySelectorAll:selector=>selector==='[data-giveaway-countdown]'?[text]:[cancel],focus};ui.render=()=>renders++;ui.lockControls=()=>{};ui.service.perform=async(type)=>{assert.equal(type,'settleGiveaways');settles++;g.status='ended';};
 try{await ui.tickGiveaway();assert.match(text.textContent,/Cancellation available/);assert.equal(renders,0);assert.equal(ui.root.focus,focus);now=time+86400000;await ui.tickGiveaway();assert.match(text.textContent,/period has ended/);assert.equal(cancel.hidden,true);assert.equal(cancel.disabled,true);assert.equal(renders,0);assert.equal(settles,0);
  now=g.endsAt;ui.dialog.open=true;await ui.tickGiveaway();assert.equal(settles,0);ui.dialog.open=false;await ui.tickGiveaway();assert.equal(settles,1);assert.equal(renders,1);await ui.tickGiveaway();assert.equal(settles,1);assert.equal(renders,1);
 }finally{if(previous===undefined)delete globalThis.location;else globalThis.location=previous;}
});
