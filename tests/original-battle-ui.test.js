import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {Battle} from '../src/battle.js';
import {ReverseBattle} from '../src/reverse-battle.js';
import {newSave,makePokemon,xpRequired,levelCost} from '../src/model.js';
import {getStage} from '../src/waves-runtime.js';
import {createBattlePokemonCheck,battlePokemonEligibility,battleControlBounds} from '../src/original-battle-ui.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
function fixture(species=1,level=5,moves=null){
 const save=newSave(data,species),p=makePokemon(data,species,level);save.pokemon=[p];save.party=[p.uid];save.money=10000;if(moves){p.moves=moves;p.selectedMove=moves[0];}
 const b=new Battle(data,getStage(1),save,()=>{},{rng:()=>.5});b.place(p.uid,b.level.spots[0].index);b.state='running';const f=b.towers[0],m=createBattlePokemonCheck(data,b,f);return {save,p,b,f,m,a:b.moveRuntime.actor(f)};
}
function advance(m,label,max=800){for(let i=0;i<max&&!m.closed&&m.clip.currentLabel!==label&&m.clip.actual?.currentLabel!==label;i++)m.tick();assert.equal(m.clip.actual?.currentLabel??m.clip.currentLabel,label);}
test('source check exposes only moves, nine targets, training and Done at original coordinates',()=>{
 const {m,b}=fixture();assert(m.ok);assert.equal(b.state,'paused');assert.equal(m.clip.block_current.visible,false);assert.equal(m.controls.length,15);
 const done=battleControlBounds(m.clip.done_butt);assert(Math.abs(done.x-691.85)<.01);assert(Math.abs(done.y-422.35)<.01);
 assert(!m.controls.some(c=>/recall|potion/i.test(c.label)));m.click('done_butt');assert(m.closed);assert.equal(b.state,'running');
});
test('selection changes original attack immediately; all nine target modes persist',()=>{
 const {m,p,f,a}=fixture(1,5,[1,5]);assert(m.chooseMove(2));assert.equal(p.selectedMove,5);assert.equal(a.myAttack.var_7,data.moves[5].name);
 for(let i=1;i<=9;i++){assert(m.chooseTarget(i));assert.equal(a.myProfile.targetType,i);assert.equal(f.target,p.target);}
});
test('Encore locks move selection; transformed selection does not alter saved moves',()=>{
 const {m,p,a,b}=fixture(132,5,[56,1]);a.add_Effect(new b.moveRuntime.classes.class_797(a));assert.equal(m.chooseMove(2),false);
 a.end_All_Effects();a.myProfile.transformed=true;a.myProfile.tmove1=5;a.myProfile.tmove2=14;a.myProfile.tmoveSelected=1;
 assert(m.chooseMove(2));assert.equal(a.myProfile.tmoveSelected,2);assert.equal(p.selectedMove,56);assert.deepEqual(p.moves,[56,1]);
});
test('exact paid training heals existing capacity, preserves effects, then returns to battle',()=>{
 const {m,p,b,f,a,save}=fixture(1,5);p.experience=xpRequired(p.level);const before=f.maxHp;f.hp=1;a.add_Effect(new b.moveRuntime.classes.class_808(a,500));const cost=levelCost(p.level);
 assert(m.train());assert.equal(p.level,6);assert.equal(p.experience,0);assert.equal(save.money,10000-cost);assert.equal(f.hp,before);assert.equal(f.maxHp,before);assert(a.check_Effects(b.moveRuntime.classes.class_808));assert(m.closed);assert.equal(b.state,'running');
});
test('learned move uses original timeline and closes on source click',()=>{
 const {m,p,b}=fixture(1,6,[1,5]);p.experience=xpRequired(6);assert(m.train());assert.equal(m.phase,'learned');assert(p.moves.includes(data.species[1].learnset.find(e=>e.level===7).moveId));
 assert.equal(m.click(),true);assert.equal(m.closed,false);advance(m,'end_learn_move');m.click();assert(m.closed);assert.equal(b.state,'running');
});
test('full moves use original offer and repeated replacement swap until Done',()=>{
 const {m,p}=fixture(1,6,[1,5,14,17]);p.experience=xpRequired(6);m.train();assert.equal(m.phase,'trying');advance(m,'end_trying_learn_move');m.click('learn_butt');assert.equal(m.phase,'replace');advance(m,'end_replace_move');
 const learned=data.species[1].learnset.find(e=>e.level===7).moveId,old=p.moves[0];m.click('actual.change_Move_screen.attack_1');assert.equal(p.moves[0],learned);assert.equal(m.closed,false);m.click('actual.change_Move_screen.attack_2');assert.equal(p.moves[1],old);m.click('actual.done_butt');assert(m.closed);
});
test('evolution changes species at the original animation event and then checks learned move',()=>{
 const {m,p}=fixture(1,15,[1,5]);p.experience=xpRequired(15);m.train();assert.equal(m.phase,'evolve');assert.equal(p.speciesId,1);advance(m,'almost_done_evolving');assert.equal(p.speciesId,2);advance(m,'done_evolving');m.click();assert(m.closed);
});
test('original multiplayer disables checks; reverse Check2 has no target/training controls',()=>{
 const {b,f}=fixture();for(const className of ['multi_level_1_0','multi_level_1_1','multi_level_2']){b.level={...b.level,className};assert.equal(battlePokemonEligibility(b,f).ok,false);}
 const save=newSave(data,1),r=new ReverseBattle(data,getStage(26),save,()=>{},{rng:()=>.5});r.start();r.launch(save.party[0]);const enemy=r.enemies.find(f=>f.playerControlled);const m=createBattlePokemonCheck(data,r,enemy);assert(m.ok);assert.equal(m.sourceClass,'popups_Poke_Check2');assert.equal(m.controls.length,5);assert.equal(m.chooseTarget(2),false);assert.equal(m.train(),false);
});
test('replacing selected slot three keeps the new move selected in the live actor',()=>{
 const {m,p,a}=fixture(1,6,[1,5,14,17]);m.chooseMove(3);p.experience=xpRequired(6);m.train();advance(m,'end_trying_learn_move');m.click('learn_butt');advance(m,'end_replace_move');m.click('actual.change_Move_screen.attack_3');const learned=data.species[1].learnset.find(e=>e.level===7).moveId;assert.equal(p.selectedMove,learned);assert.equal(a.myAttack.var_7,data.moves[learned].name);
});
