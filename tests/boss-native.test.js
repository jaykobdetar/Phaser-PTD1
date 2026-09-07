import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Battle } from '../src/battle.js';
import { ReverseBattle } from '../src/reverse-battle.js';
import { initializeStageHooks } from '../src/stage-hooks.js';
import { createWave, getStage } from '../src/waves-runtime.js';
import { newSave, makePokemon, followPath } from '../src/model.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
const options={seed:1,rng:()=>.5};
function battle(id=1){return new Battle(data,getStage(id),newSave(data,1),()=>{},options);}

test('native Mewtwo uses original Amnesia/Barrier effect states and heals at30%HP',()=>{
  const b=new ReverseBattle(data,getStage(26),newSave(data,1),()=>{},options);
  const mewtwo=b.towers.find(f=>f.speciesId===150);assert(b.moveRuntime);b.start();
  for(let i=0;i<200;i++)b.tick();assert.notEqual(b.state,'error');
  assert.equal(mewtwo.selectedMove,196);assert.equal(mewtwo.modifiers.specialDefense,4);assert.equal(mewtwo.modifiers.defense,4);
  assert.equal(b.moveRuntime.actor(mewtwo).myProfile.myAI.sourceClass,'class_92');
  mewtwo.hp=1;b.tick();assert.equal(mewtwo.selectedMove,115);
  for(let i=0;i<200;i++)b.tick();assert(mewtwo.hp>mewtwo.maxHp*.3);assert.equal(mewtwo.selectedMove,196);
  assert.deepEqual([...b.warnings],[]);
});

test('native Zapdos completes DrillPeck and Thunder source states before changingmoves',()=>{
  const b=battle(30);initializeStageHooks(b);const spot=b.level.spots.find(s=>!b.towers.some(t=>t.spotIndex===s.index));b.place(b.save.party[0],spot.index);
  const tower=b.towers.find(t=>!t.npc);tower.maxHp=tower.hp=100000;
  let original;const wave=createWave(30,{seed:1,onSpawn:p=>{if(p.num===145)original=p;}});
  for(let i=0;i<300&&!original;i++)wave.tick();assert(original);b.spawn(original);
  const bird=b.enemies[0],actor=b.moveRuntime.actor(bird),seen=new Set();
  for(let i=0;i<650&&tower.alive;i++){
    seen.add(bird.selectedMove);b.moveRuntime.tickBeforeMovement(bird);b.moveRuntime.tickAfterMovement(bird);b.attack(bird,b.towers);b.moveRuntime.tickWorld();
  }
  assert.equal(actor.myProfile.myAI.sourceClass,'class_93');assert(seen.has(405));assert(seen.has(406));
  assert(b.moveRuntime.events.some(e=>e.kind==='damage'&&e.target===tower));
});

test('source NPC list is friendly support, excluded from enemy targets and XP',()=>{
  const b=battle(3);initializeStageHooks(b);const spot=b.level.spots.find(s=>!b.towers.some(t=>t.spotIndex===s.index));b.place(b.save.party[0],spot.index);
  const ally=b.towers.find(t=>t.npc),player=b.towers.find(t=>!t.npc),actor=b.moveRuntime.actor(ally);
  assert.equal(actor.myProfile.id,-1);assert(actor.my_Parent.npcTowerList.includes(actor));
  assert.deepEqual(actor.my_Parent.get_Friendly_List().map(a=>a.fighter),[player]);
});

test('native faint clears a tower spot and source damage awards only saved contributors',()=>{
  const b=battle();b.place(b.save.party[0],b.level.spots[0].index);const tower=b.towers[0];
  b.moveRuntime.actor(tower).take_Damage(tower.maxHp+1,null,1,false);
  assert.equal(tower.alive,false);assert.equal(tower.placed,false);assert.equal(tower.spotIndex,null);
  const next=makePokemon(data,4,5);b.save.pokemon.push(next);b.save.party[b.save.party.indexOf(null)]=next.uid;assert(b.place(next.uid,b.level.spots[0].index));
});

test('attack movement multipliers stop travelers and two reversals retain the full route',()=>{
  const b=battle();b.place(b.save.party[0],b.level.spots[0].index);b.start();for(let i=0;i<130;i++)b.wave.tick();
  const enemy=b.enemies[0],actor=b.moveRuntime.actor(enemy);assert(enemy);const before=[enemy.x,enemy.y];
  actor.modAttackSpeed=0;b.tick();assert.deepEqual([enemy.x,enemy.y],before);
  const route=[{x:0,y:0,direction:'right',reverseDirection:'left'},{x:10,y:0,direction:'front',reverseDirection:'left'},{x:10,y:10,direction:'front',reverseDirection:'back'}];
  const p={x:5,y:0,point:1,outward:true,path:route,originalPath:route};
  b.turnAround(p);assert.equal(p.direction,'left');b.turnAround(p);assert.equal(p.direction,'right');assert.equal(p.path,route);assert.equal(p.point,1);
  followPath(p,7);assert.deepEqual([p.x,p.y,p.point],[12,0,2]);
});

test('native campaign combat and supporting effects run across recovered stages without adapter errors',()=>{
  for(const id of [1,3,5,14,20,23,25,26,27,28,30,37,38,39,41,42]){
    const save=newSave(data,6);save.pokemon[0].level=100;const stage=getStage(id),errors=[];
    const b=stage.mode==='invasion'?new ReverseBattle(data,stage,save,(t,d)=>{if(t==='error')errors.push(d.error);},options):new Battle(data,stage,save,(t,d)=>{if(t==='error')errors.push(d.error);},options);
    if(stage.mode!=='invasion'){initializeStageHooks(b);const spot=stage.spots.find(s=>!b.towers.some(t=>t.spotIndex===s.index));if(spot)b.place(save.party[0],spot.index);}
    b.start();if(stage.mode==='invasion')b.launch(save.party[0]);
    for(let i=0;i<1500&&b.state==='running';i++)b.tick();
    assert.deepEqual(errors,[],`stage${id}: ${errors.map(e=>e.stack).join('\n')}`);assert.notEqual(b.state,'error',`stage${id}`);
  }
});

test('Champion stage multiplies party base HP20 without persisting the battle modifier',()=>{
 const save=newSave(data,1);save.pokemon[0].level=100;const before=structuredClone(save.pokemon),b=new Battle(data,getStage(41),save,()=>{},options);initializeStageHooks(b);assert(b.place(save.party[0],1));const tower=b.towers[0];
 const base=data.species[tower.speciesId].stats.hp;assert.equal(tower.stats.hp,base*20);assert.equal(tower.maxHp,Math.floor(2*base*20*tower.level/100)+10+tower.level);assert.equal(b.moveRuntime.actor(tower).myProfile.base_HP,base*20);
 assert.deepEqual(save.pokemon,before);b.dispose();const next=new Battle(data,getStage(42),save,()=>{},options);next.place(save.party[0],getStage(42).spots[0].index);assert(next.towers[0].maxHp<tower.maxHp);next.dispose();
});

test('stage14 Spearow and stage32 all-candy gift expose exact story facts',()=>{
 const save=newSave(data,21),b=new Battle(data,getStage(14),save,()=>{},options);initializeStageHooks(b);assert(b.place(save.party[0],3));assert.equal(b.stageFacts.spearowUid,save.party[0]);
 for(const [lost,claimed,expected]of [[false,false,true],[true,false,false],[false,true,false]]){
  const save=newSave(data,1);if(claimed)save.originalExtraInfo=[29];const c=new Battle(data,getStage(32),save,()=>{},options);initializeStageHooks(c);if(lost)c.candies[0].state='lost';c.state='running';c.finish(true);assert.equal(c.stageFacts.var_556,expected);c.dispose();
 }
 b.dispose();
});

test('recalling and replacing creates fresh combat state while retaining remaining HP',()=>{
 const b=battle();b.place(b.save.party[0],b.level.spots[0].index);const old=b.towers[0],actor=b.moveRuntime.actor(old);old.hp-=5;old.modifiers.attack=2;old.cooldown=300;const hp=old.hp;assert(b.recall(old.uid));assert(!b.moveRuntime.world.children.includes(actor));assert(b.place(old.uid,b.level.spots[1].index));const next=b.towers[0];assert.notEqual(next,old);assert.equal(next.hp,hp);assert.equal(next.modifiers.attack,undefined);assert.equal(next.cooldown,data.moves[next.selectedMove].initialCooldownFrames);assert.deepEqual(next.effects,{});b.dispose();
});

test('Elite Four phase HP boosts use source base-stat factors10/10/18 and reset each battle',()=>{
 const save=newSave(data,1);save.pokemon[0].level=100;const before=structuredClone(save.pokemon);
 for(const [stage,multiplier]of [['class_953',10],['class_955',10],['class_958',18]]){
  const level=getStage(stage),b=new Battle(data,level,save,()=>{},options);b.place(save.party[0],level.spots[0].index);const f=b.towers[0],base=data.species[f.speciesId].stats.hp;assert.equal(f.maxHp,Math.floor(2*base*multiplier*f.level/100)+10+f.level);assert.equal(b.moveRuntime.actor(f).myProfile.base_HP,base*multiplier);b.dispose();assert.deepEqual(save.pokemon,before);
 }
});

test('all original starters can defend OaksLab from each spot without normal travelers attacking them',()=>{
 for(const speciesId of [1,4,7])for(const spot of [1,2,3,4]){
  const save=newSave(data,speciesId);let enemyDamage=0;const b=new Battle(data,getStage(1),save,(type,d)=>{if(type==='damage'&&d.source?.team==='enemy'&&d.target?.team==='tower')enemyDamage+=d.amount;},{seed:13,rng:()=>.8});initializeStageHooks(b);assert(b.place(save.party[0],spot));assert(b.start());
  for(let i=0;i<3000&&b.state==='running';i++)b.tick();assert.equal(b.state,'won',`starter${speciesId},spot${spot}`);assert.equal(enemyDamage,0);assert.equal(b.stats.captured,0);assert.equal(save.pokemon[0].level,5);assert(b.remainingCandy>0);b.dispose();
 }
});

test('Garys native potion heals eligible named spots and ignores spot3',()=>{
 const b=battle(30);initializeStageHooks(b);b.place(b.save.party[0],2);const target=b.towers.find(f=>!f.npc),gary=b.towers.find(f=>f.npc);target.hp=1;
 for(let i=0;i<180;i++){for(const f of b.towers)if(f.alive&&f.placed){b.tickBeforeMovement(f);b.attack(f,[]);}b.moveRuntime.tickWorld();}
 assert.equal(target.hp,target.maxHp);b.recall(target.uid);b.place(target.uid,3);const excluded=b.towers.find(f=>!f.npc);excluded.hp=1;
 for(let i=0;i<180;i++){for(const f of b.towers)if(f.alive&&f.placed){b.tickBeforeMovement(f);b.attack(f,[]);}b.moveRuntime.tickWorld();}
 assert.equal(excluded.hp,1);assert(gary.alive);b.dispose();
});

test('native TowerTeleport reservations free correctly after recall and faint',()=>{
 const b=battle();b.place(b.save.party[0],1);let f=b.towers[0],a=b.moveRuntime.actor(f);const spell=new b.moveRuntime.classes.class_181(a);spell.do_Attack(a);assert.notEqual(f.spotIndex,1);const destination=a.currentSpot;assert(destination.full);b.recall(f.uid);assert.equal(destination.full,false);
 b.place(f.uid,destination.source.index);f=b.towers[0];a=b.moveRuntime.actor(f);assert.equal(a.currentSpot.full,true);a.take_Damage(f.maxHp+1,null,1,false);assert.equal(destination.full,false);b.dispose();
});

test('avoid-red-HP source targeting treats catchable shiny travelers as weakened immediately',()=>{
 const b=battle();b.place(b.save.party[0],1);b.start();for(let i=0;i<130;i++)b.wave.tick();const original={...b.enemies[0].original,shiny:1};b.spawn(original);const shiny=b.enemies.at(-1);assert.equal(shiny.hp,shiny.maxHp);assert.equal(b.moveRuntime.actor(shiny).weakened,true);b.dispose();
});

test('native training heals existing HP capacity; evolution preserves ability until redeployment',()=>{
 const save=newSave(data,11),b=new Battle(data,getStage(1),save,()=>{},options);const p=save.pokemon[0];p.level=9;b.place(p.uid,1);const f=b.towers[0],a=b.moveRuntime.actor(f),ability=a.myAbility,maxHp=f.maxHp;f.hp=1;
 p.level=10;b.syncPokemon(p);assert.equal(f.hp,maxHp);assert.equal(f.maxHp,maxHp);assert.equal(a.myAbility,ability);
 f.hp=5;p.speciesId=12;b.syncPokemon(p);assert.equal(a.gfx.symbolName,'poke_012');assert.equal(a.myAbility,ability);assert.equal(f.hp,5);assert.equal(f.maxHp,maxHp);assert.deepEqual(f.typeIds,data.species[12].typeIds);
 b.recall(p.uid);b.place(p.uid,1);const next=b.towers[0],newActor=b.moveRuntime.actor(next);assert.notEqual(newActor.myAbility.sourceClass,ability.sourceClass);assert.equal(next.hp,5);assert.equal(next.maxHp,Math.floor(2*data.species[12].stats.hp*p.level/100)+p.level+10);
 newActor.take_Damage(next.maxHp+1,null,1,false);p.level=11;b.syncPokemon(p);assert.equal(next.alive,false);assert.equal(next.hp,0);assert.equal(b.place(p.uid,2),false);b.dispose();
});

test('source Encore prevents player move selection until the native effect ends',()=>{
 for(const invasion of [false,true]){
  const save=newSave(data,1),p=save.pokemon[0];p.moves=[1,2];p.selectedMove=1;
  const b=invasion?new ReverseBattle(data,getStage(26),save,()=>{},options):new Battle(data,getStage(1),save,()=>{},options);
  if(invasion){b.start();b.launch(p.uid);}else b.place(p.uid,1);
  const f=invasion?b.enemies[0]:b.towers[0],a=b.moveRuntime.actor(f),oldAttack=a.myAttack;
  const encore=new b.moveRuntime.classes.class_797(a,2);a.add_Effect(encore);assert(b.isMoveLocked(f));
  p.selectedMove=2;b.syncPokemon(p);assert.equal(p.selectedMove,1);assert.equal(f.selectedMove,1);assert.equal(a.myAttack,oldAttack);
  for(let i=0;i<3;i++)b.tickBeforeMovement(f);assert.equal(b.isMoveLocked(f),false);
  p.selectedMove=2;b.syncPokemon(p);b.tickBeforeMovement(f);assert.equal(f.selectedMove,2);assert.notEqual(a.myAttack,oldAttack);b.dispose();
 }
});
