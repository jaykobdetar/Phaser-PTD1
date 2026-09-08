import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {LocalProfiles,PROFILE_BANK_KEY} from '../src/local-services.js';
import {CenterService,newCenterState,assertCenterOwnership,matchesWishlist} from '../src/center-model.js';
import {ADOPTION_CATALOG,DAILY_PRIZES,CORNER_REWARDS} from '../src/center-catalog.js';
import {newSave,makePokemon} from '../src/model.js';

const data=JSON.parse(readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
const DAY=86400000,START=Date.UTC(2026,0,5,12),copy=value=>structuredClone(value);
const normalized=name=>name.toLowerCase().replace(/[^a-z0-9]/g,'');
const moveIds=new Map(Object.values(data.moves).map(move=>[normalized(move.name),move.id]));
function initialBank(rows=[[1,64,93,67,75,25],[4,35,63,25],[7,10,13,16]]){
  return {version:1,active:0,updatedAt:'fixture',center:newCenterState(),slots:rows.map((species,slot)=>{
    if(!species)return null;
    const save=newSave(data,species[0]);
    save.savedAt='fixture';save.trainer=`Trainer ${slot+1}`;save.money=5000000;save.badges=8;save.completed=[30];
    save.pokemon=species.map((id,index)=>makePokemon(data,id,25,{uid:`fixture-${slot}-${index}`,nickname:`Name ${slot}-${index}`}));
    save.party=[...save.pokemon.slice(0,6).map(p=>p.uid),...Array(Math.max(0,6-species.length)).fill(null)];
    return save;
  })};
}
async function fixture({bank=initialBank(),rng=()=>.5}={}){
  const values=new Map([[PROFILE_BANK_KEY,JSON.stringify(bank)]]);
  const storage={getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};
  const profiles=new LocalProfiles(data,storage,null,{eventTarget:null,locks:null});await profiles.initialize();
  let time=START,random=rng;
  const service=new CenterService(data,profiles,{clock:()=>time,rng:()=>random()});await service.initialize();
  return {service,profiles,values,storage,setTime:v=>{time=v;},setRng:v=>{random=v;},
    async mutate(fn){await profiles.transact(fn);},async select(slot){await service.perform('selectProfile',{slot});}};
}
async function rejectsUnchanged(f,type,payload,pattern){
  const before=copy(f.profiles.bank),stored=[...f.values];
  await assert.rejects(f.service.perform(type,payload),pattern);
  assert.deepEqual(f.profiles.bank,before);assert.deepEqual([...f.values],stored);
}
async function listing(f,slot,index,extra={}){
  await f.select(slot);return (await f.service.perform('createListing',{uid:`fixture-${slot}-${index}`,...extra})).listing;
}
function custody(bank){
  const state=bank.center;
  return [...bank.slots.filter(Boolean).flatMap(s=>s.pokemon),...state.listings.filter(r=>r.status==='open').map(r=>r.pokemon),
    ...state.inbox.map(r=>r.pokemon),...state.giveaways.filter(r=>r.status==='open').flatMap(r=>r.pokemon),
    ...Object.values(state.transferVaults).flat().map(r=>r.pokemon)].map(p=>p.uid).sort();
}

test('all 260 adoptions resolve source moves, shadow move placement and persistent unique ownership',async()=>{
  assert.equal(Object.keys(data.species).length,164);
  const f=await fixture({bank:initialBank([Object.keys(data.species).map(Number),[4],[7]])});
  await f.mutate(bank=>{bank.center.wallets[0].credits=100000;});
  const initial=custody(f.service.bank).length,uids=new Set(custody(f.service.bank));
  for(const row of ADOPTION_CATALOG){
    const before=f.service.wallet.credits,{pokemon}=await f.service.perform('adopt',{id:row.id});
    assert.equal(pokemon.speciesId,row.speciesId,row.id);assert.equal(pokemon.level,row.level,row.id);
    assert.equal(pokemon.shiny,{regular:0,shiny:1,shadow:2}[row.variant],row.id);
    let expected=row.moves.map(name=>moveIds.get(normalized(name)));
    if(row.variant==='shadow')expected=[368,...expected.filter(id=>id!==368)].slice(0,4);
    assert.deepEqual(pokemon.moves,expected,row.id);assert.equal(pokemon.selectedMove,expected[0],row.id);
    assert.equal(f.service.wallet.credits,before-row.cost,row.id);assert(!uids.has(pokemon.uid));uids.add(pokemon.uid);
    assertCenterOwnership(f.service.bank);
  }
  assert.equal(custody(f.service.bank).length,initial+260);
  const restored=new LocalProfiles(data,f.storage,null,{eventTarget:null,locks:null});await restored.initialize();
  assert.deepEqual(restored.bank,f.profiles.bank);assertCenterOwnership(restored.bank);
});

test('overlapping offers cancel atomically on wishlist auto-accept and evolve traded Pokémon once',async()=>{
  const f=await fixture(),start=custody(f.service.bank),a=await listing(f,0,1),b=await listing(f,0,2);
  const first=await listing(f,1,0),second=await listing(f,1,1),third=await listing(f,2,0);
  await f.select(0);
  const pending1=await f.service.perform('makeOffer',{targetId:second.id,listingIds:[a.id]});
  const pending2=await f.service.perform('makeOffer',{targetId:third.id,listingIds:[a.id,b.id]});
  await rejectsUnchanged(f,'makeOffer',{targetId:third.id,listingIds:[b.id,a.id]},/already made/);
  await f.select(1);await f.service.perform('editListing',{id:first.id,wishlist:[[{speciesId:93},{speciesId:64}]]});
  await f.select(0);const result=await f.service.perform('makeOffer',{targetId:first.id,listingIds:[a.id,b.id]});
  assert.equal(result.autoAccepted,true);
  assert.equal(f.service.state.offers.find(r=>r.id===pending1.offer.id).status,'cancelled');
  assert.equal(f.service.state.offers.find(r=>r.id===pending2.offer.id).status,'cancelled');
  assert.deepEqual(custody(f.service.bank),start);
  assert.deepEqual(f.service.state.inbox.filter(r=>r.owner===1).map(r=>r.pokemon.speciesId).sort((a,b)=>a-b),[65,94]);
  assert.equal(f.service.state.inbox.find(r=>r.pokemon.uid===a.pokemon.uid).pokemon.nickname,'Name 0-1');
  await rejectsUnchanged(f,'acceptOffer',{id:result.offer.id},/no longer pending/);
  const ids=f.service.state.inbox.filter(r=>r.owner===0).map(r=>r.id);await f.service.perform('claim',{ids,slot:2});
  assert(f.service.bank.slots[2].pokemon.some(p=>p.uid===first.pokemon.uid));
  await rejectsUnchanged(f,'claim',{ids,slot:2},/already claimed/);assertCenterOwnership(f.service.bank);
});

test('wishlist matching is bijective across repeated species, forms and level ranges; hacked acceptance is explicit',()=>{
  const a=makePokemon(data,25,10,{uid:'a',shiny:0}),b=makePokemon(data,25,20,{uid:'b',shiny:1});
  const groups=[[{speciesId:25,shiny:-1,minLevel:1,maxLevel:100},{speciesId:25,shiny:0,minLevel:1,maxLevel:10}]];
  assert(matchesWishlist(groups,[a,b],data));assert(!matchesWishlist(groups,[b,b],data));
  assert(!matchesWishlist(groups,[a,b],data,{state:{tags:{a:'hacked'}}}));
  assert(matchesWishlist(groups,[a,b],data,{allowHacked:true,state:{tags:{a:'hacked'}}}));
});

test('manual offer review enforces both owners and keeps listings available after cancel or decline',async()=>{
  const f=await fixture(),start=custody(f.service.bank),target=await listing(f,0,0),offered=await listing(f,1,0);
  const first=(await f.service.perform('makeOffer',{targetId:target.id,listingIds:[offered.id]})).offer;
  await f.select(2);await rejectsUnchanged(f,'acceptOffer',{id:first.id},/Only the trade owner/);
  await rejectsUnchanged(f,'declineOffer',{id:first.id},/Only the trade owner/);
  await f.select(0);await rejectsUnchanged(f,'cancelOffer',{id:first.id},/Only the offering trainer/);
  await f.select(1);await f.service.perform('cancelOffer',{id:first.id});await rejectsUnchanged(f,'cancelOffer',{id:first.id},/no longer pending/);
  const second=(await f.service.perform('makeOffer',{targetId:target.id,listingIds:[offered.id]})).offer;
  await f.select(0);await f.service.perform('declineOffer',{id:second.id});
  assert(f.service.state.listings.every(r=>r.status==='open'));assert.equal(f.service.state.inbox.length,0);
  await f.select(1);const third=(await f.service.perform('makeOffer',{targetId:target.id,listingIds:[offered.id]})).offer;
  await f.select(0);await f.service.perform('acceptOffer',{id:third.id});
  assert.equal(f.service.state.offers.find(r=>r.id===third.id).status,'accepted');
  assert.deepEqual(custody(f.service.bank),start);assertCenterOwnership(f.service.bank);
});

test('tag restrictions reject manual offers and are checked again after the target listing changes',async()=>{
  for(const marker of ['center-tag','source-tag']){
    const f=await fixture();
    await f.mutate(bank=>{if(marker==='center-tag')bank.center.tags['fixture-1-0']='hacked';else bank.slots[1].pokemon[0].myTag='H';});
    const target=await listing(f,0,0),offered=await listing(f,1,0),start=custody(f.service.bank);
    await rejectsUnchanged(f,'makeOffer',{targetId:target.id,listingIds:[offered.id]},/Tagged Pokémon are not allowed/);
    assert.equal(f.service.state.offers.length,0);
    await f.select(0);await f.service.perform('editListing',{id:target.id,allowHacked:true});
    await f.select(1);const {offer,autoAccepted}=await f.service.perform('makeOffer',{targetId:target.id,listingIds:[offered.id]});
    assert.equal(autoAccepted,undefined);assert.equal(offer.status,'pending');
    await f.select(0);await f.service.perform('editListing',{id:target.id,allowHacked:false});
    await rejectsUnchanged(f,'acceptOffer',{id:offer.id},/Tagged Pokémon are not allowed/);
    assert.equal(f.service.state.offers[0].status,'pending');assert.equal(f.service.state.inbox.length,0);
    assert.deepEqual(custody(f.service.bank),start);
    await f.service.perform('editListing',{id:target.id,allowHacked:true});
    await f.service.perform('acceptOffer',{id:offer.id});
    assert.equal(f.service.state.offers[0].status,'accepted');assert.deepEqual(custody(f.service.bank),start);
  }
});

test('listing recall and one-way transfer archives retain custody without duplication',async()=>{
  const f=await fixture(),start=custody(f.service.bank),a=await listing(f,0,3),b=await listing(f,1,0);
  await f.select(1);const offer=await f.service.perform('makeOffer',{targetId:a.id,listingIds:[b.id]});
  await f.select(2);await rejectsUnchanged(f,'recallListing',{id:a.id},/Only the owner/);
  await f.select(0);await f.service.perform('recallListing',{id:a.id});
  assert.equal(f.service.state.offers.find(r=>r.id===offer.offer.id).status,'cancelled');
  const pickup=f.service.state.inbox.find(r=>r.pokemon.uid===a.pokemon.uid);
  await f.service.perform('claim',{ids:[pickup.id]});
  assert.equal(f.service.profile.pokemon.find(p=>p.uid===a.pokemon.uid).speciesId,67,'recall is not a trade evolution');
  await f.service.perform('transfer',{target:2,uids:[a.pokemon.uid],gender:'male'});
  const vault=f.service.state.transferVaults[2][0];assert.equal(vault.gender,'male');assert.deepEqual(custody(f.service.bank),start);
  await rejectsUnchanged(f,'transfer',{target:2,uids:[a.pokemon.uid],gender:'male'},/not found/i);
  await rejectsUnchanged(f,'returnTransfer',{target:2,id:vault.id},/Unknown Center action/);
  assert(!f.service.profile.pokemon.some(p=>p.uid===a.pokemon.uid));
  assert(!f.service.state.inbox.some(r=>r.pokemon.uid===a.pokemon.uid));
  assert.deepEqual(custody(f.service.bank),start);assertCenterOwnership(f.service.bank);
});

test('transfer destinations preserve owners, attributes and gender through backup import with no reverse action',async()=>{
  const f=await fixture(),start=custody(f.service.bank),original=copy(f.service.profile.pokemon[0]);
  await rejectsUnchanged(f,'transfer',{target:2,uids:[original.uid],gender:'unknown'},/valid transfer gender/);
  await rejectsUnchanged(f,'transfer',{target:2,uids:[original.uid]},/valid transfer gender/);
  await rejectsUnchanged(f,'transfer',{target:2,uids:[original.uid,original.uid],gender:'female'},/distinct/);
  await rejectsUnchanged(f,'transfer',{target:3,uids:['fixture-1-0'],gender:'male'},/not found/i);
  await f.service.perform('transfer',{target:2,uids:[original.uid],gender:'female'});
  await f.select(1);await f.service.perform('transfer',{target:3,uids:['fixture-1-0'],gender:'genderless'});
  const saved=copy(f.service.bank),first=saved.center.transferVaults[2][0],second=saved.center.transferVaults[3][0];
  assert.equal(first.owner,0);assert.equal(second.owner,1);assert.deepEqual(first.pokemon,original);
  assert.equal(first.gender,'female');assert.equal(second.gender,'genderless');assert.deepEqual(custody(saved),start);
  assert(!saved.slots[0].party.includes(original.uid));
  const malformed=copy(saved);malformed.center.transferVaults[2][0].gender='unknown';
  await rejectsUnchanged(f,'importBank',{bank:malformed},/valid transfer gender/);
  await f.service.perform('importBank',{bank:saved});await f.service.refresh();
  assert.deepEqual(f.service.state.transferVaults,saved.center.transferVaults);
  for(const slot of [0,1,2]){
    await f.select(slot);await rejectsUnchanged(f,'returnTransfer',{target:2,id:first.id},/Unknown Center action/);
  }
  assert.deepEqual(custody(f.service.bank),start);assertCenterOwnership(f.service.bank);
});

test('insufficient funds and capped recipient balances roll back purchases and trainer settlement',async()=>{
  const f=await fixture(),a=await listing(f,0,0,{price:20});await f.select(1);
  for(const [type,payload]of [['adoptListing',{id:a.id}],['adopt',{id:'battle-1'}],['buyReward',{id:'corner-1'}],['spin',{machine:1}],['convert',{uid:'fixture-1-0',form:'shiny'}]]){
    await rejectsUnchanged(f,type,payload,/Not enough/);
  }
  await f.mutate(bank=>{bank.center.wallets[1].credits=100;bank.center.wallets[0].credits=999999999;});
  await rejectsUnchanged(f,'adoptListing',{id:a.id},/balance limit/);
  await f.mutate(bank=>{bank.center.wallets[0].credits=0;});
  await f.service.perform('adoptListing',{id:a.id});assert.equal(f.service.state.wallets[0].credits,20);assert.equal(f.service.wallet.credits,80);
  await rejectsUnchanged(f,'adoptListing',{id:a.id},/no longer available/);
  await f.mutate(bank=>{bank.slots[1].money=0;});await rejectsUnchanged(f,'dailyGift',{tier:'common'},/Not enough/);
});

test('every daily-gift weighted interval boundary matches published probabilities',async()=>{
  const f=await fixture();let tick=0;
  for(const [name,tier]of Object.entries(DAILY_PRIZES)){
    let lower=0;
    for(const expected of tier.outcomes){
      for(const sample of [lower,lower+expected.weight-1]){
        f.setTime(START+(tick++)*DAY);f.setRng(()=>sample/100000);
        const money=f.service.profile.money,before=f.service.wallet[expected.currency==='icu'?'credits':expected.currency];
        const result=await f.service.perform('dailyGift',{tier:name});
        assert.deepEqual(result.reward,{currency:expected.currency==='icu'?'credits':expected.currency,amount:expected.amount},`${name}: ${sample}`);
        assert.equal(f.service.profile.money,money-tier.cost);assert.equal(f.service.wallet[result.reward.currency],before+expected.amount);
      }
      lower+=expected.weight;
    }
  }
});

test('gift progression gates reject before spending and daily limits survive reload and backward clocks',async()=>{
  const f=await fixture();await f.mutate(bank=>{bank.slots[0].badges=2;bank.slots[0].completed=[];});
  await rejectsUnchanged(f,'dailyGift',{tier:'uncommon'},/3 badges/);await rejectsUnchanged(f,'dailyGift',{tier:'rare'},/Route 17/);
  await f.service.perform('dailyGift',{tier:'common'});
  await rejectsUnchanged(f,'dailyGift',{tier:'uncommon'},/already been opened/);
  await f.service.refresh();await rejectsUnchanged(f,'dailyGift',{tier:'common'},/already been opened/);
  f.setTime(START-DAY);await rejectsUnchanged(f,'dailyGift',{tier:'common'},/already been opened/);
  f.setTime(START+DAY);await f.mutate(bank=>{bank.slots[0].badges=3;});await f.service.perform('dailyGift',{tier:'uncommon'});
  f.setTime(START+2*DAY);await f.mutate(bank=>{bank.slots[0].completed=[30];});await f.service.perform('dailyGift',{tier:'rare'});
});

test('free credits and badge bonuses are granted once; game gifts enforce UTC daily and Monday weekly boundaries',async()=>{
  const f=await fixture({rng:()=>0});const first=await f.service.perform('dailyCredits');
  assert.deepEqual(first.reward,{credits:50,casino:500});await rejectsUnchanged(f,'dailyCredits',{},/already been claimed/);
  f.setTime(START+DAY);assert.deepEqual((await f.service.perform('dailyCredits')).reward,{credits:10,casino:500});
  const daily=await f.service.perform('mysteryGift',{kind:'daily'}),weekly=await f.service.perform('mysteryGift',{kind:'weekly'});
  assert.equal(daily.pokemon.shiny,1);assert.equal(weekly.pokemon.shiny,2);assert.equal(weekly.pokemon.moves[0],368);
  await rejectsUnchanged(f,'mysteryGift',{kind:'daily'},/already claimed/);await rejectsUnchanged(f,'mysteryGift',{kind:'weekly'},/already claimed/);
  f.setTime(START+2*DAY);await f.service.perform('mysteryGift',{kind:'daily'});await rejectsUnchanged(f,'mysteryGift',{kind:'weekly'},/already claimed/);
  f.setTime(START+7*DAY);await f.service.perform('mysteryGift',{kind:'weekly'});
});

test('MissingNo gift codes preserve source compatibility and reject repeat claims',async()=>{
  const f=await fixture();const current=await f.service.perform('giftCode',{code:' PTDOOO '});
  assert.equal(current.pokemon.speciesId,1010);assert.equal(current.pokemon.shiny,0);
  await rejectsUnchanged(f,'giftCode',{code:'ptdooo'},/already been claimed/);
  const source=await f.service.perform('giftCode',{code:'ptdicu'});
  assert.equal(source.pokemon.speciesId,1010,'supplied screen_MysteryGift.as:131 and method_384');
  assert.equal(source.pokemon.shiny,0);
});

test('conversion preserves identity and unrelated attributes, uses alternative prices and cleans all tagged forms',async()=>{
  const f=await fixture();await f.mutate(bank=>{bank.center.wallets[0].credits=100;bank.center.wallets[0].casino=5000000;bank.center.tags['fixture-0-0']='hacked';bank.slots[0].pokemon[0].myTag='h';});
  const original=copy(f.service.profile.pokemon[0]);
  await f.service.perform('convert',{uid:original.uid,form:'shiny',currency:'casino'});
  const converted=f.service.profile.pokemon[0];assert.equal(converted.uid,original.uid);assert.equal(converted.nickname,original.nickname);
  assert.deepEqual(converted.moves,original.moves);assert.equal(converted.level,original.level);assert.equal(converted.shiny,1);assert.equal(converted.myTag,'n');
  assert.equal(f.service.wallet.casino,4250000);assert.equal(f.service.wallet.credits,100);assert(!f.service.state.tags[original.uid]);
  await rejectsUnchanged(f,'convert',{uid:original.uid,form:'shadow'},/Only regular/);
  await f.service.perform('convert',{uid:'fixture-0-1',form:'shadow',currency:'icu'});
  assert.equal(f.service.profile.pokemon[1].moves[0],368);await rejectsUnchanged(f,'convert',{uid:'fixture-0-1',form:'shiny'},/Only regular/);
  await f.mutate(bank=>{bank.slots[0].pokemon[0].myTag='h';bank.center.tags['fixture-0-1']='hacked';});
  await rejectsUnchanged(f,'convertAll',{currency:'casino'},/not available/);
  const before=f.service.wallet.credits;await f.service.perform('convertAll',{currency:'icu'});assert.equal(f.service.wallet.credits,before-10);
  assert(f.service.profile.pokemon.every(p=>p.myTag==='n'));assert.deepEqual(f.service.state.tags,{});
  assert.equal(f.service.profile.pokemon[0].shiny,1);assert.equal(f.service.profile.pokemon[1].shiny,2);
  await rejectsUnchanged(f,'convertAll',{},/No Hacked tag/);
});

test('all Corner rewards are functional; regular shininess uses the one-percent boundary and eggs are unevolved',async()=>{
  const f=await fixture({rng:()=>0});await f.mutate(bank=>{bank.center.wallets[0].casino=10000000;});
  const evolved=new Set(Object.values(data.species).flatMap(s=>s.evolutions.map(e=>e.to)));
  for(const row of CORNER_REWARDS){
    const {pokemon}=await f.service.perform('buyReward',{id:row.id});
    assert.equal(pokemon.level,1);assert.equal(pokemon.shiny,row.variant==='shadow'?2:1);
    if(row.kind==='egg'){assert(pokemon.speciesId<=151);assert(!evolved.has(pokemon.speciesId));}else assert.equal(pokemon.speciesId,row.speciesId);
  }
  f.setRng(()=>.009999);assert.equal((await f.service.perform('buyReward',{id:'corner-1'})).pokemon.shiny,1);
  f.setRng(()=>.01);assert.equal((await f.service.perform('buyReward',{id:'corner-1'})).pokemon.shiny,0);
});

test('slots count all five published winning lines, exclude verticals, and enforce 50 daily spins',async()=>{
  const f=await fixture({rng:()=>0});await f.mutate(bank=>{bank.center.wallets[0].casino=10000;});
  const perfect=await f.service.perform('spin',{machine:9});assert.equal(perfect.wins.length,5);assert.equal(perfect.amount,150000);assert.equal(f.service.wallet.casino,159950);
  // Three columns of matching 7/BAR/Arbok are not winning lines.
  let index=0;f.setRng(()=>[0,1/7+.00001,2/7+.00001][(index++)%3]);
  const vertical=await f.service.perform('spin',{machine:1});assert.equal(vertical.wins.length,0);assert.equal(vertical.amount,0);
  f.setRng(()=>.999999);for(let i=2;i<50;i++)await f.service.perform('spin',{machine:1});
  await rejectsUnchanged(f,'spin',{machine:1},/all 50/);assert.equal(f.service.wallet.spins,50);
  f.setTime(START-DAY);await rejectsUnchanged(f,'spin',{machine:1},/clock has not advanced/);
  f.setTime(START+DAY);const next=await f.service.perform('spin',{machine:1});assert.equal(next.remaining,49);
});

test('giveaway settlement is deterministic, distributes custody once and refunds empty or cancelled events',async()=>{
  const f=await fixture({rng:()=>0}),start=custody(f.service.bank);
  const giveaway=(await f.service.perform('createGiveaway',{uids:['fixture-0-1','fixture-0-2','fixture-0-3'],title:'Fixture prizes',winnerType:'per-pokemon',endsAt:START+DAY})).giveaway;
  await rejectsUnchanged(f,'joinGiveaway',{id:giveaway.id},/host cannot/);
  await f.select(1);await f.service.perform('joinGiveaway',{id:giveaway.id});await rejectsUnchanged(f,'joinGiveaway',{id:giveaway.id},/already entered/);
  await f.select(2);await f.service.perform('joinGiveaway',{id:giveaway.id});
  f.setTime(START+DAY);await f.service.perform('settleGiveaways');
  const ended=f.service.state.giveaways[0];assert.equal(ended.status,'ended');assert.deepEqual(ended.winners,[{owner:2,pokemonUids:['fixture-0-1','fixture-0-3']},{owner:1,pokemonUids:['fixture-0-2']}]);
  const inboxBefore=copy(f.service.state.inbox);await f.service.perform('settleGiveaways');assert.deepEqual(f.service.state.inbox,inboxBefore);assert.deepEqual(custody(f.service.bank),start);
  await f.select(0);const empty=(await f.service.perform('createGiveaway',{uids:['fixture-0-4'],title:'No entrants',endsAt:START+2*DAY})).giveaway;
  f.setTime(START+2*DAY);await f.service.perform('settleGiveaways');assert(f.service.state.inbox.some(r=>r.owner===0&&r.pokemon.uid==='fixture-0-4'));
  const cancelled=(await f.service.perform('createGiveaway',{uids:['fixture-0-5'],title:'Cancelled',endsAt:START+3*DAY})).giveaway;
  await f.service.perform('cancelGiveaway',{id:cancelled.id});await rejectsUnchanged(f,'cancelGiveaway',{id:cancelled.id},/ended/);
  assert.equal(f.service.state.giveaways.find(r=>r.id===empty.id).status,'ended');assert.deepEqual(custody(f.service.bank),start);assertCenterOwnership(f.service.bank);
});

test('giveaways enforce 20 prizes, 1–30 days and the 24-hour cancellation window',async()=>{
  const f=await fixture({bank:initialBank([Array.from({length:21},(_,i)=>i+1),[4],[7]])});
  const payload={uids:['fixture-0-0'],title:'Limits',winnerType:'single',endsAt:START+2*DAY};
  await rejectsUnchanged(f,'createGiveaway',{...payload,uids:f.service.profile.pokemon.map(p=>p.uid)},/Invalid giveaway Pokémon/);
  await rejectsUnchanged(f,'createGiveaway',{...payload,endsAt:START+DAY-1},/end time/);
  await rejectsUnchanged(f,'createGiveaway',{...payload,endsAt:START+30*DAY+1},/end time/);
  await rejectsUnchanged(f,'createGiveaway',{...payload,winnerType:'anything'},/winner type/);
  const first=(await f.service.perform('createGiveaway',payload)).giveaway;
  f.setTime(START+DAY-1);await f.service.perform('cancelGiveaway',{id:first.id});
  const second=(await f.service.perform('createGiveaway',{...payload,uids:['fixture-0-1'],endsAt:START+4*DAY})).giveaway;
  f.setTime(second.createdAt+DAY);await rejectsUnchanged(f,'cancelGiveaway',{id:second.id},/first 24 hours/);
  assert.equal(f.service.state.giveaways.find(r=>r.id===second.id).status,'open');
});

test('single-winner giveaways award all prizes together and per-Pokémon winners do not repeat while entrants suffice',async()=>{
  for(const winnerType of ['single','per-pokemon']){
    const f=await fixture({rng:()=>0}),uids=['fixture-0-0','fixture-0-1'];
    const row=(await f.service.perform('createGiveaway',{uids,title:winnerType,winnerType,endsAt:START+DAY})).giveaway;
    await f.select(1);await f.service.perform('joinGiveaway',{id:row.id});await f.select(2);await f.service.perform('joinGiveaway',{id:row.id});
    f.setTime(START+DAY);await f.service.perform('settleGiveaways');const result=f.service.state.giveaways[0];
    assert.equal(result.winnerType,winnerType);
    assert.deepEqual(result.winners,winnerType==='single'?[{owner:2,pokemonUids:uids}]:[{owner:2,pokemonUids:[uids[0]]},{owner:1,pokemonUids:[uids[1]]}]);
  }
});

test('avatar changes enforce source rewards and 19 styles while keeping legacy avatars readable',async()=>{
  const f=await fixture();await rejectsUnchanged(f,'avatar',{style:3,gender:'boy'},/Achievement 4/);
  await rejectsUnchanged(f,'avatar',{style:4,gender:'girl'},/Achievement 5/);
  await rejectsUnchanged(f,'avatar',{style:100,gender:'boy'},/Invalid avatar/);
  await f.mutate(bank=>{bank.slots[0].achievements[4]=1;bank.slots[0].achievements[5]=2;});
  await rejectsUnchanged(f,'avatar',{style:3,gender:'boy'},/Achievement 4/);
  await f.service.perform('avatar',{style:4,gender:'girl'});assert.deepEqual(f.service.profile.avatar,{style:4,gender:'girl'});
  await f.mutate(bank=>{bank.slots[0].achievements[5]=0;});await f.service.perform('avatar',{style:4,gender:'girl'});
  await rejectsUnchanged(f,'avatar',{style:4,gender:'boy'},/Achievement 5/);
  await f.mutate(bank=>{bank.slots[0].achievements[4]=2;});await f.service.perform('avatar',{style:3,gender:'boy'});
  for(const style of [9,12,15]){await f.service.perform('avatar',{style,gender:'girl'});assert.deepEqual(f.service.profile.avatar,{style,gender:'boy'});}
  await f.mutate(bank=>{bank.slots[1].avatar={style:100,gender:'girl'};});await f.service.refresh();
  assert.deepEqual(f.service.bank.slots[1].avatar,{style:100,gender:'girl'});
});

test('malformed imported Center metadata and duplicate custody reject without replacing the bank',async()=>{
  const f=await fixture();const a=await listing(f,0,0);const base=copy(f.service.bank);
  const cases=[
    b=>{b.center.wallets[0].credits=-1;},b=>{b.center.wallets[0].spins=51;},b=>{b.center.listings[0].owner=4;},
    b=>{b.center.wallets[0].dailyDay='not-a-date';},
    b=>{b.center.listings[0].pokemon.moves=[-1];},b=>{b.center.listings[0].status='sold-maybe';},
    b=>{b.center.inbox.push({id:'external-inbox',owner:0,createdAt:START,pokemon:copy(a.pokemon),source:'duplicate'});},
    b=>{b.center.offers.push({id:'external-offer',owner:1,createdAt:START,targetId:a.id,listingIds:['missing'],status:'pending'});},
    b=>{b.center.giveaways.push({id:'external-giveaway',owner:0,createdAt:START,title:'bad',pokemon:[copy(a.pokemon)],endsAt:-1,participants:[],status:'open',winners:[]});},
  ];
  for(const mutate of cases){const imported=copy(base);mutate(imported);await rejectsUnchanged(f,'importBank',{bank:imported});}
});

test('imported Center sequence cannot collide with a pre-existing record on the next command',async()=>{
  const f=await fixture();await listing(f,0,0);const imported=copy(f.service.bank);imported.center.nextId=1;
  const before=copy(f.service.bank);
  try{await f.service.perform('importBank',{bank:imported});}catch{assert.deepEqual(f.service.bank,before);return;}
  await f.service.perform('renameProfile',{name:'After import'});
  await f.service.perform('dailyCredits');assertCenterOwnership(f.service.bank);
});

test('sequence validation reserves IDs in every roster, escrow, historical record and reference',async()=>{
  const f=await fixture(),base=copy(f.service.bank),pokemon=makePokemon(data,25,1,{uid:'center-pc-700'});
  const record={id:'imported-record',owner:0,createdAt:START};
  const places=[
    b=>{b.slots[2].pokemon[0]=copy(pokemon);b.slots[2].party[0]=pokemon.uid;},
    b=>{b.center.listings.push({...record,pokemon:copy(pokemon),status:'recalled',price:0,wishlist:[],allowHacked:false});},
    b=>{b.center.inbox.push({...record,pokemon:copy(pokemon),source:'fixture'});},
    b=>{b.center.giveaways.push({...record,title:'Fixture',pokemon:[copy(pokemon)],endsAt:START,status:'ended',participants:[],winners:[]});},
    b=>{b.center.transferVaults[2].push({...record,pokemon:copy(pokemon),gender:'male'});},
    b=>{b.center.transferVaults[3].push({...record,pokemon:copy(pokemon),gender:'male'});},
    b=>{b.center.notifications.push({...record,id:'pc-700',text:'Fixture',read:false,route:'home'});},
    b=>{b.center.history.push({...record,id:'pc-700',text:'Fixture',type:'fixture'});},
    b=>{b.center.offers.push({...record,targetId:'pc-700',listingIds:['external-listing'],status:'cancelled'});},
    b=>{b.center.offers.push({...record,targetId:'external-listing',listingIds:['pc-700'],status:'cancelled'});},
    b=>{b.center.giveaways.push({...record,title:'Fixture',pokemon:[],endsAt:START,status:'ended',participants:[],winners:[{owner:0,pokemonUids:[pokemon.uid]}]});},
    b=>{b.center.tags[pokemon.uid]='hacked';},
  ];
  for(const place of places){
    const imported=copy(base);imported.center.nextId=700;place(imported);
    await rejectsUnchanged(f,'importBank',{bank:imported},/sequence must follow/);
  }
  const valid=copy(base);valid.slots[2].pokemon[0]=copy(pokemon);valid.slots[2].party[0]=pokemon.uid;
  valid.center.nextId=701;valid.center.wallets[0].credits=1;
  await f.service.perform('importBank',{bank:valid});
  assert.equal((await f.service.perform('adopt',{id:'battle-1'})).pokemon.uid,'center-pc-701');
  assertCenterOwnership(f.service.bank);
});

test('all cooldown fields reject malformed or impossible dates and accept leap days',async()=>{
  const f=await fixture(),base=copy(f.service.bank);
  const fields=['dailyDay','spinsDay','freeDay','mysteryDaily','mysteryWeekly'];
  for(const field of fields){
    for(const value of ['not-a-date','2026-02-29','2026-13-01','2026-01-32','2026-01-01 extra',20260101]){
      const imported=copy(base);imported.center.wallets[0][field]=value;
      await rejectsUnchanged(f,'importBank',{bank:imported},/Invalid .*date/);
    }
  }
  const valid=copy(base);for(const field of fields)valid.center.wallets[0][field]='2024-02-29';
  await f.service.perform('importBank',{bank:valid});
  for(const field of fields)assert.equal(f.service.wallet[field],'2024-02-29');
});

test('account Pokédex migrates every history and custody source and mirrors only the first 151 species',async()=>{
  const bank=initialBank([[1],[4],[7]]),record=(id,pokemon)=>({id,owner:0,createdAt:START,pokemon});
  bank.center.dex={normal:[151],shiny:[150],shadow:[149]};
  bank.slots[0].dex.normal=[25,243];bank.slots[1].dex.shiny=[40];bank.slots[2].dex.shadow=[14];
  bank.center.inbox.push({...record('inbox',makePokemon(data,35,1,{uid:'dex-inbox',shiny:1})),source:'fixture'});
  bank.center.listings.push({...record('listing',makePokemon(data,65,1,{uid:'dex-listing',shiny:2})),price:0,wishlist:[],allowHacked:false,status:'recalled'});
  bank.center.giveaways.push({...record('giveaway',[makePokemon(data,50,1,{uid:'dex-giveaway',shiny:1})]),title:'Historical',endsAt:START+DAY,status:'ended',participants:[],winners:[]});
  bank.center.transferVaults[2].push({...record('vault',makePokemon(data,71,1,{uid:'dex-vault',shiny:2})),gender:'female'});
  const f=await fixture({bank});
  assert.deepEqual(f.service.state.dex,{normal:[1,4,7,25,151],shiny:[35,40,50,150],shadow:[14,65,71,149]});
  for(const profile of f.service.bank.slots)for(const form of ['normal','shiny','shadow']){
    for(const species of f.service.state.dex[form])assert(profile.dex[form].includes(species));
  }
  assert(f.service.bank.slots[0].dex.normal.includes(243));assert(!f.service.bank.slots[1].dex.normal.includes(243));
});

test('unclaimed rewards, trade evolution, conversion and release keep cumulative account discoveries',async()=>{
  const f=await fixture({bank:initialBank([[1,64],[4,93],[7]])});await f.mutate(bank=>{bank.center.wallets[0].credits=100;});
  await f.service.perform('adopt',{id:'common-1'});assert(f.service.state.dex.shiny.includes(10));
  await f.service.perform('abandonInbox',{ids:f.service.state.inbox.map(r=>r.id)});assert(f.service.state.dex.shiny.includes(10));
  const a=await listing(f,0,1),b=await listing(f,1,1);const offer=(await f.service.perform('makeOffer',{targetId:a.id,listingIds:[b.id]})).offer;
  await f.select(0);await f.service.perform('acceptOffer',{id:offer.id});
  for(const species of [64,65,93,94])assert(f.service.state.dex.normal.includes(species));
  await f.service.perform('convert',{uid:'fixture-0-0',form:'shadow'});
  assert(f.service.state.dex.normal.includes(1));assert(f.service.state.dex.shadow.includes(1));
  await f.service.perform('abandon',{uid:'fixture-0-0'});assert(f.service.state.dex.shadow.includes(1));
  await f.service.perform('claim',{ids:f.service.state.inbox.filter(r=>r.owner===0).map(r=>r.id)});
  assert(f.service.profile.dex.normal.includes(94));assert(f.service.bank.slots[2].dex.shiny.includes(10));
});

test('older imports and game profile replacement cannot erase prior account Pokédex history',async()=>{
  const f=await fixture({bank:initialBank([[1],[4],[7]])});await f.mutate(bank=>{bank.center.wallets[0].credits=10;});
  await f.service.perform('adopt',{id:'common-1'});await f.service.perform('abandonInbox',{ids:f.service.state.inbox.map(r=>r.id)});
  const legacy=initialBank([[25],null,null]);delete legacy.center;
  await f.service.perform('importBank',{bank:legacy});
  assert.deepEqual(f.service.state.dex.shiny,[10]);for(const species of [1,4,7,25])assert(f.service.state.dex.normal.includes(species));
  const replacement=newSave(data,35);replacement.pokemon[0].uid='replacement-profile';replacement.party[0]='replacement-profile';
  f.profiles.save(replacement);await f.profiles.pending;
  assert(f.service.state.dex.normal.includes(35));assert.deepEqual(f.service.state.dex.shiny,[10]);
  assert(f.service.profile.dex.shiny.includes(10));
  const invalid=copy(f.service.bank);invalid.center.dex.normal.push(243);
  await rejectsUnchanged(f,'importBank',{bank:invalid},/account Pokédex species/);
});

test('indexed offer ownership validation retains open-row and error behavior',()=>{
  const bank=initialBank([[1],[4],null]);
  const row=(id,owner,uid,status='open')=>({id,owner,pokemon:makePokemon(data,25,5,{uid}),status,price:0,wishlist:[],allowHacked:false,createdAt:START});
  bank.center.listings=[row('target',0,'owned-target'),row('offered',1,'owned-offered')];
  bank.center.offers=[{id:'offer',owner:1,targetId:'target',listingIds:['offered'],status:'pending',createdAt:START}];
  assert.doesNotThrow(()=>assertCenterOwnership(bank));
  for(const mutate of [b=>b.center.listings[0].status='accepted',b=>b.center.listings[1].status='recalled',b=>b.center.listings[1].owner=0,b=>b.center.offers[0].targetId='missing',b=>b.center.offers[0].listingIds=['missing'],b=>b.center.offers[0].owner=0]){
    const changed=copy(bank);mutate(changed);
    assert.throws(()=>assertCenterOwnership(changed),{message:'An offer refers to an unavailable trade.'});
  }
  const historical=copy(bank);historical.center.offers[0].status='cancelled';historical.center.offers[0].listingIds=['missing'];
  assert.doesNotThrow(()=>assertCenterOwnership(historical));
  // Full bank validation rejects duplicate record IDs separately. This direct
  // validator preserves the former first-target/any-owned-row behavior too.
  const duplicates=copy(bank);duplicates.center.listings.unshift(row('offered',0,'duplicate-offered'));duplicates.center.listings.push(row('target',1,'duplicate-target'));
  assert.doesNotThrow(()=>assertCenterOwnership(duplicates));
  const changed=copy(duplicates);changed.center.listings.unshift(changed.center.listings.pop());
  assert.throws(()=>assertCenterOwnership(changed),{message:'An offer refers to an unavailable trade.'});
});
