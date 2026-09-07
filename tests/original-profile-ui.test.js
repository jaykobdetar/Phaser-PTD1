import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {installOriginalOnboardingUI} from '../src/original-onboarding-ui.js';
import {StoryClip} from '../src/story-data-clip.js';
import {newSave,makePokemon} from '../src/model.js';
import {createProfilePopup} from '../src/profile-source.js';
import {moveStorageParty,moveStorageGrid,partySelectionChapter,installOriginalProfileUI,fillSourceDex,sourceMysteryCode} from '../src/original-profile-ui.js';
import {claimAchievement} from '../src/achievements.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
const fixture=(species=1)=>{const save=newSave(data,species);save.money=50000;save.unlocked=42;save.inventory={1:2,2:2,3:2,4:2,5:2};return {save,p:save.pokemon[0]};};
function end(p,label='end',max=800){for(let i=0;i<max&&p.clip.currentLabel!==label;i++)p.tick();assert.equal(p.clip.currentLabel,label);}
test('source party drag preserves six slot identities; occupied destination returns to storage',()=>{
 const {save,p}=fixture(),other=makePokemon(data,4,5);save.pokemon.push(other);save.party=[p.uid,other.uid,null,null,null,null];assert(moveStorageParty(save,p.uid,5));assert.deepEqual(save.party,[null,other.uid,null,null,null,p.uid]);moveStorageParty(save,p.uid,1);assert.deepEqual(save.party,[null,p.uid,null,null,null,null]);assert(save.pokemon.includes(other));moveStorageParty(save,p.uid);assert.deepEqual(save.party,Array(6).fill(null));
 assert.deepEqual([1,5,6,11,12,15,16,20,21,25,26,30,31,36,37,42].map(partySelectionChapter),[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]);
});
test('source release confirmation allows last Pokémon and leaves null party slots',()=>{
 const {save,p}=fixture();let back=false;const popup=createProfilePopup(data,save,p,'popups_Release_Poke',{onBack:()=>back=true});end(popup);popup.click('butt_yes');assert(back);assert.deepEqual(save.pokemon,[]);assert.deepEqual(save.party,Array(6).fill(null));
});
test('source storage grid uses original pokeList indices and vacates exact party slots',()=>{
 const {save,p}=fixture(),b=makePokemon(data,4,5),c=makePokemon(data,7,5);save.pokemon.push(b,c);save.party=[null,p.uid,null,null,null,null];
 assert(moveStorageGrid(save,c.uid,0));assert.deepEqual(save.pokemon.map(p=>p.uid),[c.uid,b.uid,p.uid]);assert.equal(save.party[1],p.uid);
 assert(moveStorageGrid(save,p.uid,1));assert.deepEqual(save.pokemon.map(p=>p.uid),[c.uid,p.uid,b.uid]);assert.deepEqual(save.party,Array(6).fill(null));
});
test('achievement Pokémon retain source reward extra tags',()=>{
 for(const [id,species,extra]of [[1,95,4],[2,120,5],[3,72,3],[6,107,153]]){const {save}=fixture();save.challengeCompleted=3;save.achievements=Object.fromEntries((id===1?[100,101,102,103]:[id]).map(k=>[k,1]));const r=claimAchievement(data,save,id);assert(r.ok);assert.equal(r.pokemon.speciesId,species);assert.equal(r.pokemon.originalExtra,extra);assert.equal(r.pokemon.shiny,1);}
});
test('source item is consumed before evolution; cancellation leaves species unchanged',()=>{
 const {save,p}=fixture(25);let next;const popup=createProfilePopup(data,save,p,'popups_Items',{onOpen:name=>next=name});end(popup);popup.click('use_butt');assert.equal(save.inventory[3],1);assert.equal(p.whichStone,3);assert.equal(next,'popups_Evolve');assert.equal(p.speciesId,25);
 let checked=false;const evolution=createProfilePopup(data,save,p,next,{onLearn:()=>checked=true});end(evolution,'end_evolve');evolution.click('stop_evolving_butt');assert(checked);assert.equal(p.speciesId,25);assert.equal(save.inventory[3],1);
});
test('source TM/relearn charge before offer and preserve unmodified four moves',()=>{
 for(const [name,cost]of [['popups_TM',10000],['popups_Relearn',1000]]){const {save,p}=fixture();p.level=40;p.moves=[1,5,14,17];let offered;const popup=createProfilePopup(data,save,p,name,{onLearn:id=>offered=id});end(popup);const id=popup.runtime.controller.currentMove;assert(data.moves[id]);popup.click('relearn_butt');assert.equal(save.money,50000-cost);assert.equal(offered,id);assert.deepEqual(p.moves,[1,5,14,17]);}
});
test('source profile replacement supports repeated swap until Done',()=>{
 const {save,p}=fixture();p.moves=[1,5,14,17];let closed=false;const popup=createProfilePopup(data,save,p,'popups_Replace_Move',{moveId:26,onClose:()=>closed=true});end(popup,'end_replace_move');popup.click('actual.change_Move_screen.attack_1');assert.equal(p.moves[0],26);popup.click('actual.change_Move_screen.attack_2');assert.equal(p.moves[1],1);assert(!closed);popup.click('done_butt');assert(closed);
});
test('source profile evolution mutates only on almost_done_evolving',()=>{
 const {save,p}=fixture();p.level=16;const popup=createProfilePopup(data,save,p,'popups_Evolve');end(popup,'end_evolve');assert.equal(p.speciesId,1);for(let i=0;i<600&&popup.clip.actual.currentLabel!=='almost_done_evolving';i++)popup.tick();assert.equal(p.speciesId,2);
});
test('selected move slot survives replacement and all Eevee stones have distinct controls',()=>{
 const {save,p}=fixture();p.moves=[1,5,14,17];p.selectedMove=14;const popup=createProfilePopup(data,save,p,'popups_Replace_Move',{moveId:26});end(popup,'end_replace_move');popup.click('actual.change_Move_screen.attack_3');assert.equal(p.selectedMove,26);
 const eevee=fixture(133),items=createProfilePopup(data,eevee.save,eevee.p,'popups_Items');end(items);const uses=items.controls.filter(c=>c.name==='use_butt');assert.equal(uses.length,3);assert.equal(new Set(uses.map(c=>c.path)).size,3);items.click('actual.item_2.use_butt');assert.equal(eevee.p.whichStone,4);assert.equal(eevee.save.inventory[4],1);
});
test('party selection preserves selected stage through details, tutorial and chapter Back',()=>{
 class Element {constructor(){this.children=[];this.style={};this.classList={add(){},remove(){}};this.isConnected=true;this.open=true;this.dataset={};}append(...x){this.children.push(...x);}replaceChildren(...x){this.children=x;}setAttribute(){}remove(){}}
 const old={document:globalThis.document,fetch:globalThis.fetch,cancelAnimationFrame:globalThis.cancelAnimationFrame,requestAnimationFrame:globalThis.requestAnimationFrame};
 const nodes=Object.fromEntries(['#modal','#modal-content','#modal-close'].map(k=>[k,new Element()]));globalThis.document={head:new Element(),createElement:()=>new Element(),querySelector:k=>nodes[k]};globalThis.fetch=()=>new Promise(()=>{});globalThis.cancelAnimationFrame=()=>{};globalThis.requestAnimationFrame=()=>0;
 try{
  const {save,p}=fixture(),events=[],noop=()=>{};const app={data,save,levels:[{id:1},{id:6}],battle:{dispose(){this.disposed=true;},syncPokemon:noop},openModal:noop,store:noop,renderAll:noop,closeModal:noop,stopOriginalStory:noop,openCampaign:noop,openMainMenu:noop,openOriginalChapter:(...args)=>events.push(['chapter',...args]),openChallenges:()=>events.push(['challenges']),loadLevel:(...args)=>events.push(['level',...args]),loadChallenge:id=>events.push(['challenge',id]),toast:message=>{throw Error(message);},openOriginalScreen:()=>nodes['#modal-content'],openOriginalPopup:()=>nodes['#modal-content']};
  installOriginalProfileUI(app);const click=path=>{const view=app.originalProfileView,c=view.controls().find(c=>c.path===path||c.key===path);assert(c,path);c.action(view.clip,{});};
  app.chooseLevelParty(6);assert.equal(app.pendingPartyLevel.id,6);click('block_1');assert.equal(app.originalProfileView.clip.symbolName,'gfx_screen_poke_check_big');const moneyFields=[...app.originalProfileView.clip.childrenByDepth.values()].filter(c=>c.name==='money_you');assert.equal(moneyFields.length,2);assert.equal(moneyFields.find(c=>c.meta.id===11652).text,data.timelines.textFields[11652].initialText);assert.match(moneyFields.find(c=>c.meta.id===11652).text,/Your Money/);assert.equal(moneyFields.find(c=>c.meta.id===11653).text,String(save.money));assert(moneyFields.every(c=>c.visible));click('back_butt');assert.equal(app.pendingPartyLevel.id,6);click('start_butt');assert.deepEqual(events.pop(),['level',6,false]);assert.equal(app.pendingPartyLevel,null);
  app.chooseLevelParty(6);click('back_butt');assert.deepEqual(events.pop(),['chapter',2,false]);app.chooseChallengeParty(4);click('start_butt');assert.deepEqual(events.pop(),['challenge',4]);app.chooseChallengeParty(5);click('back_butt');assert.deepEqual(events.pop(),['challenges']);
  save.unlocked=1;save.party=Array(6).fill(null);app.chooseLevelParty(1);assert.equal(app.originalProfileView.clip.alpha,.5);assert.equal(app.originalProfileView.controls().length,1);click('party-tutorial-close');assert.equal(app.originalProfileView.clip.alpha,1);assert.equal(app.originalProfileView.controls().find(c=>c.path==='start_butt').disabled,true);
 }finally{Object.assign(globalThis,old);}
});

test('Oak completion leaves starter in storage and empty-profile recovery preserves campaign progress',()=>{
 const {save}=fixture();save.pokemon=[];save.party=Array(6).fill(null);save.unlocked=20;let complete,chapters=0,stored=0;
 const app={data,save,store:()=>stored++,openOriginalCampaign:()=>chapters++,loadLevel(){},beginOriginalTutorial:options=>{complete=options.onComplete;},profiles:{bank:{active:0},create(_slot,value){this.current=value;return value;},save(value){this.current=value;}},battle:{dispose(){} }};
 installOriginalOnboardingUI(app);app.resumeOriginalStarter();save.pokemon.push(makePokemon(data,4,5));complete();assert.equal(app.save.unlocked,20);assert.equal(chapters,1);assert.deepEqual(save.party,Array(6).fill(null));assert(stored);
 app.createOriginalProfile(1,'Chosen name');app.save.pokemon.push(makePokemon(data,7,5));complete();assert.equal(app.save.trainer,'Chosen name');assert.equal(app.save.money,0);assert.equal(app.save.pokemon[0].speciesId,7);assert.deepEqual(app.save.party,Array(6).fill(null));assert.equal(chapters,2);
});

test('original Dex uses forty rows, three caught indicators and four-page bounds',()=>{
 const {save}=fixture();save.dex={normal:[1,151],shiny:[1],shadow:[1]};const clip=new StoryClip(data.timelines,'gfx_screen_pokedex');clip.gotoAndStop('my_collection');fillSourceDex(clip,data,save,1);assert.equal(clip.poke_1.poke_name.text,'Bulbasaur');assert(clip.poke_1.pokeball.visible&&clip.poke_1.pokeball_shiny.visible&&clip.poke_1.pokeball_shadow.visible);assert.equal(clip.poke_2.poke_name.visible,false);assert.equal(clip.butt_left.visible,false);
 fillSourceDex(clip,data,save,4);assert.equal(clip.poke_31.poke_name.text,'Mew');assert.equal(clip.poke_32.visible,false);assert.equal(clip.butt_right.visible,false);
});
test('original ptdicu gift is repeatable MissingNo with exact level and moves',()=>{
 const {save}=fixture();const before=save.pokemon.length;assert.equal(sourceMysteryCode(data,save,'').frame,null);assert.equal(sourceMysteryCode(data,save,'5231').frame,'error_recognized');const first=sourceMysteryCode(data,save,'PTD ICU');assert.equal(first.frame,'pokeDone');assert.equal(first.pokemon.speciesId,1010);assert.equal(first.pokemon.level,1);assert.deepEqual(first.pokemon.moves,[31,422]);sourceMysteryCode(data,save,'ptdicu');assert.equal(save.pokemon.length,before+2);
});
