import test from 'node:test';
import assert from 'node:assert/strict';
import {CenterUI} from '../src/center-ui.js';

const renderInventory = profile => new CenterUI({
  service:{profile},data:{},sprites:{},icons:{}
}).inventory();
const itemMarkup = (html,key) => html.match(new RegExp(`<article[^>]+data-center-item="${key}"[^>]*>([\\s\\S]*?)</article>`))?.[1];

test('Center inventory displays recorded rod counts and keeps unknown imported items visible',()=>{
  const html=renderInventory({inventory:{6:1,7:3,8:2}});
  assert.match(itemMarkup(html,'oldRod'),/Old Rod<\/strong><span>Owned: 1/);
  assert.match(itemMarkup(html,'superRod'),/Super Rod<\/strong><span>Owned: 2/);
  assert.match(itemMarkup(html,'item-7'),/Item 7<\/strong><span>Owned: 3/);
});

test('Center inventory does not imply Ice Stone or Silph Scope ownership from progress or unknown IDs',()=>{
  const html=renderInventory({inventory:{7:3,9:2},badges:8,completed:Array.from({length:42},(_,i)=>i+1),challengeCompleted:7});
  for(const key of ['icestone','silphScope']){
    const row=itemMarkup(html,key);
    assert.match(row,/<span>Unavailable<\/span>/);
    assert.doesNotMatch(row,/Owned:/);
  }
  assert.match(itemMarkup(html,'item-9'),/Item 9<\/strong><span>Owned: 2/);
});

test('offer table preserves first matching listing, status actions, missing references and escaping',()=>{
  const rows=[{id:'target',owner:0,pokemon:{nickname:'First <target>'}},{id:'target',owner:1,pokemon:{nickname:'Wrong target'}},{id:'give',owner:1,pokemon:{nickname:'Offered & named'}}];
  const ui=new CenterUI({data:{},sprites:{},service:{active:0,bank:{active:0,slots:[{trainer:'Receiver'},{trainer:'Sender'},null]},state:{listings:rows}}});
  const html=ui.offersTable([{id:'offer',targetId:'target',owner:1,listingIds:['give','missing'],status:'pending'}]);
  assert.match(html,/Offered &amp; named, missing/);
  assert.match(html,/data-action="ui:accept-offer"/);
  assert.match(html,/data-action="declineOffer"/);
  assert.doesNotMatch(html,/data-action="cancelOffer"/);
  assert.doesNotMatch(html,/Wrong target/);
});

test('malformed encoded hashes safely use Home while valid routes retain decoding',()=>{
  const previous=globalThis.location,ui=new CenterUI({service:{},data:{},sprites:{}});
  try{
    for(const hash of ['#/%','#/settings/%E0%A4%A','#/%ZZ']){globalThis.location={hash};assert.deepEqual(ui.route,['home']);}
    globalThis.location={hash:'#/giveaway/Caf%C3%A9'};assert.deepEqual(ui.route,['giveaway','Café']);
    globalThis.location={hash:'#/unknown'};assert.deepEqual(ui.route,['unknown']);
  }finally{if(previous===undefined)delete globalThis.location;else globalThis.location=previous;}
});

test('unchanged focus refresh preserves inline drafts but still redraws changed custody or display context',async()=>{
  const previous=globalThis.location;
  globalThis.location={hash:'#/settings'};
  try{
    let bank={active:0,slots:[{trainer:'Saved',pokemon:[{uid:'one',level:5}]},null,null],center:{}},refreshes=0,renders=0,settlements=0;
    const service={get bank(){return bank;},async refresh(){refreshes++;bank=structuredClone(bank);}};
    const ui=new CenterUI({service,data:{},sprites:{}}),field={value:'Unsaved nickname'},locks=[];
    ui.displayContext=()=> 'same-day-and-timezone';ui.renderedDisplayContext=ui.displayContext();
    ui.lockControls=value=>locks.push(value);ui.settleDue=async()=>{settlements++;};
    ui.render=()=>{renders++;field.value='Saved';ui.renderedDisplayContext=ui.displayContext();};
    await ui.refresh();assert.equal(field.value,'Unsaved nickname');assert.equal(renders,0);assert.equal(refreshes,1);assert.equal(settlements,1);assert.deepEqual(locks,[true,false]);assert.equal(ui.busy,false);
    service.refresh=async()=>{bank={...bank,active:1};};await ui.refresh();assert.equal(renders,1);
    service.refresh=async()=>{bank=structuredClone(bank);bank.slots[0].pokemon[0].level++;};await ui.refresh();assert.equal(renders,2);
    service.refresh=async()=>{bank=structuredClone(bank);};ui.conflict='Stale account';await ui.refresh();assert.equal(renders,3);assert.equal(ui.conflict,null);
    ui.displayContext=()=> 'next-day-or-new-timezone';await ui.refresh();assert.equal(renders,4);
    globalThis.location={hash:'#/giveaway/example'};let countdownUpdates=0;ui.updateGiveawayCountdown=()=>countdownUpdates++;await ui.refresh();assert.equal(renders,4);assert.equal(countdownUpdates,1);
  }finally{if(previous===undefined)delete globalThis.location;else globalThis.location=previous;}
});

test('focus refresh preserves failure reporting and rejects overlapping refresh work',async()=>{
  const error=new Error('Save unavailable');let refreshes=0,reported;
  const ui=new CenterUI({service:{bank:{active:0},async refresh(){refreshes++;throw error;}},data:{},sprites:{}});
  ui.lockControls=()=>{};ui.showConflict=({error})=>{reported=error;};ui.settleDue=async()=>{};
  await ui.refresh();assert.equal(reported,error);assert.equal(ui.busy,false);assert.equal(refreshes,1);
  ui.busy=true;await ui.refresh();assert.equal(refreshes,1);
});
