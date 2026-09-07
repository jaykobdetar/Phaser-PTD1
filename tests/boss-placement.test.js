import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {Battle} from '../src/battle.js';
import {ChallengeBattle} from '../src/challenge-battle.js';
import {getStage} from '../src/waves-runtime.js';
import {newSave,makePokemon} from '../src/model.js';
import {initializeStageHooks} from '../src/stage-hooks.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
const options={seed:1,rng:()=>.5};
function create(id=1,team=[1,4]){
 const save=newSave(data,team[0]);save.pokemon=team.map(id=>makePokemon(data,id,30));save.party=save.pokemon.map(p=>p.uid);
 return new Battle(data,getStage(id),save,()=>{},options);
}
test('source type-only spots reject incompatible placement and allow either matching type',()=>{
 for(const [stage,spot,typeSpecies]of [[8,8,74],[20,11,1],[24,8,12],[31,7,7],[34,7,7]]){
  const b=create(stage,[4,typeSpecies]);initializeStageHooks(b);assert.equal(b.place(b.party[0].uid,spot),false,`stage${stage}`);assert.equal(b.place(b.party[1].uid,spot),true,`stage${stage}`);b.dispose();
 }
});
test('native start begins source waves with no deployed party and no placeholder actor',()=>{
 const b=create();assert.equal(b.start(),false);assert(b.start({allowEmpty:true}));assert.equal(b.towers.length,0);for(let i=0;i<130;i++)b.tick();assert(b.enemies.length>0);b.dispose();
 const c=new ChallengeBattle(data,getStage('class_950'),newSave(data,1),()=>{},options);assert(c.start({allowEmpty:true}));assert.equal(c.towers.length,0);c.dispose();
});
test('reposition drag retains actor/effects/HP/cooldown and resets only source profile modifiers',()=>{
 const b=create(),p=b.party[0];b.place(p.uid,1);b.start();const f=b.towers[0],a=b.moveRuntime.actor(f),attack=a.myAttack,ability=a.myAbility;
 const effect=new b.moveRuntime.classes.class_797(a,792);a.add_Effect(effect);f.hp=5;f.cooldown=44;f.modifiers.attack=3;f.modifiers.defense=2;a.myProfile.var_655=20;a.myProfile.transformed=true;a.myProfile.crit_Chance=24;
 const drag=b.beginTowerDrag(p.uid);assert.equal(drag.tower,f);assert.equal(drag.originSpotIndex,1);assert.equal(f.spotIndex,1);assert(f.placed);assert.equal(b.state,'paused');assert.equal(a.myAttack,attack);assert.equal(a.myAbility,ability);assert(a.effect_List.includes(effect));assert.equal(f.hp,5);assert.equal(f.cooldown,44);assert.equal(f.modifiers.attack,1);assert.equal(a.myProfile.crit_Chance,6);assert.equal(a.myProfile.var_655,1);assert.equal(a.myProfile.transformed,false);
 const s=b.level.spots.find(s=>s.index===2);f.x=s.x;f.y=s.y;assert(b.towerDragSpots().some(s=>s.index===2));const result=b.endTowerDrag(p.uid,2);assert(result.placed);assert.equal(b.moveRuntime.actor(f),a);assert.equal(a.myAttack,attack);assert(a.effect_List.includes(effect));assert.equal(f.hp,5);assert.equal(f.spotIndex,2);assert.equal(b.state,'running');assert.equal(a.yourRange.visible,false);b.dispose();
});
test('occupied destination swaps existing actors without reconstructing effects or rechecking displaced type',()=>{
 const b=create(8,[74,1]),[first,second]=b.party;b.place(first.uid,8);b.place(second.uid,1);b.start();const f=b.towers.find(t=>t.uid===first.uid),g=b.towers.find(t=>t.uid===second.uid),a=b.moveRuntime.actor(f),other=b.moveRuntime.actor(g);g.hp=7;
 assert(b.beginTowerDrag(first.uid));assert.equal(b.moveRuntime.world.children.at(-1),a);const result=b.endTowerDrag(first.uid,1);assert.equal(result.swapped,second.uid);assert.equal(f.spotIndex,1);assert.equal(g.spotIndex,8);assert.equal(g.hp,7);assert.equal(b.moveRuntime.actor(f),a);assert.equal(b.moveRuntime.actor(g),other);assert.deepEqual(b.moveRuntime.world.children.slice(-2),[other,a]);assert.equal(b.isSpotEligible(g,8),false);b.dispose();
});
test('new party drag to an occupied spot recalls occupant; invalid drop recalls dragged actor',()=>{
 const b=create(),[first,second]=b.party;b.place(first.uid,1);b.start();const original=b.towers[0],oldActor=b.moveRuntime.actor(original);original.hp=4;
 assert(b.beginTowerDrag(second.uid));const result=b.endTowerDrag(second.uid,1);assert.deepEqual(result.recalled,[first.uid]);assert.equal(original.placed,false);assert.equal(original.hp,4);assert(!b.moveRuntime.world.children.includes(oldActor));
 const dragged=b.towers.find(f=>f.uid===second.uid);assert(b.beginTowerDrag(second.uid));dragged.x=-9999;dragged.y=-9999;assert.deepEqual(b.towerDragSpots(),[]);const ended=b.endTowerDrag(second.uid,null);assert.equal(ended.placed,false);assert.deepEqual(ended.recalled,[second.uid]);assert.equal(dragged.spotIndex,null);assert.equal(dragged.placed,false);assert.equal(b.state,'running');b.dispose();
});
test('native drag rejects NPC spots and fires original placement quest hooks',()=>{
 const b=create(3,[1]);initializeStageHooks(b);const p=b.party[0];p.moves=[224,1];p.selectedMove=1;b.start({allowEmpty:true});const npc=b.towers.find(f=>f.npc);assert.equal(b.beginTowerDrag(npc.uid),false);assert.equal(b.isSpotEligible(p,npc.spotIndex),false);assert(b.beginTowerDrag(p.uid));assert(b.endTowerDrag(p.uid,3).placed);assert.equal(b.stageHooks.cutOpened,true);b.dispose();
});
test('large source Pokémon drag graphics scale to70 and restore on drop',()=>{
 const b=create(1,[143]);b.start({allowEmpty:true});const drag=b.beginTowerDrag(b.party[0].uid),a=b.moveRuntime.actor(drag.tower);assert(a._dragScale);assert(Math.abs(Math.max(a.gfx.width,a.gfx.height)-70)<1e-7);b.endTowerDrag(drag.uid,1);assert.equal(a.gfx.scaleX,1);assert.equal(a.gfx.scaleY,1);assert.equal(a._dragScale,undefined);b.dispose();
});
