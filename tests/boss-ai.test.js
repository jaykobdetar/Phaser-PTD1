import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Battle } from '../src/battle.js';
import { ReverseBattle } from '../src/reverse-battle.js';
import { initializeBossAI, tickBossAI } from '../src/boss-ai.js';
import { initializeStageHooks } from '../src/stage-hooks.js';
import { newSave, makePokemon } from '../src/model.js';
import { createWave, getStage } from '../src/waves-runtime.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));

test('Mewtwo source AI chooses Amnesia, Barrier, offense and Recover by effect state/30%HP',()=>{
  const b=new ReverseBattle(data,getStage(26),newSave(data,1),()=>{},{rng:()=>.5});
  const p=b.towers.find(p=>p.speciesId===150);assert(p);assert.equal(initializeBossAI(p).sourceClass,'class_92');
  assert.equal(p.cooldown,data.moves[p.selectedMove].initialCooldownFrames);
  tickBossAI(b,p);assert.equal(p.selectedMove,337);
  p.effects.amnesia={sourceClass:'class_803'};tickBossAI(b,p);assert.equal(p.selectedMove,197);
  p.effects.barrier={sourceClass:'class_808'};tickBossAI(b,p);assert.equal(p.selectedMove,196);
  p.hp=Math.floor(p.maxHp*.3);tickBossAI(b,p);assert.equal(p.selectedMove,115);
  p.hp=p.maxHp;tickBossAI(b,p);assert.equal(p.selectedMove,196);
});
test('Zapdos switches only after its exact current attack sequence reports end',()=>{
  let original;const wave=createWave(30,{seed:1,onSpawn:p=>{if(p.num===145)original=p;}});
  for(let i=0;i<10000&&!original;i++)wave.tick();assert(original);
  const b=new Battle(data,getStage(30),newSave(data,1),()=>{},{rng:()=>.5});b.spawn(original);
  const p=b.enemies[0];tickBossAI(b,p);assert.equal(p.selectedMove,405);
  p.moveState={phase:'end'};tickBossAI(b,p);assert.equal(p.selectedMove,406);assert.equal(original.moveSelected,2);
  p.moveState={phase:'attack'};tickBossAI(b,p);assert.equal(p.selectedMove,406);
  p.moveState={phase:'end'};tickBossAI(b,p);assert.equal(p.selectedMove,405);
});
test('source stage achievements track deployed levels/types and source choice priority',()=>{
  const save=newSave(data,1);save.pokemon[0].level=20;
  const b=new Battle(data,getStage(10),save,()=>{});initializeStageHooks(b);b.place(save.party[0],1);b.state='running';b.finish(true);
  assert.equal(save.achievements[8],1);assert.equal(save.achievements[3],undefined);
  const other=newSave(data,4);other.pokemon[0].level=40;const c=new Battle(data,getStage(10),other,()=>{});initializeStageHooks(c);c.place(other.party[0],1);c.state='running';c.finish(true);
  assert.equal(other.achievements[8],undefined);assert.equal(other.achievements[3],1);
});
test('legendary wave contexts use live save flags, type eligibility and selected version',()=>{
  const save=newSave(data,25);save.gameVersion=2;
  save.pokemon=Array.from({length:6},(_,i)=>makePokemon(data,25,100,{uid:'p'+i,shiny:1}));save.party=save.pokemon.map(p=>p.uid);
  const b=new Battle(data,getStage(37),save,()=>{},{seed:1});b.place(save.party[0],1);assert(b.start());
  let legendary;
  for(let i=0;i<500&&!legendary;i++){b.wave.tick();legendary=b.enemies.find(p=>p.speciesId===145);}
  assert(legendary);b.defeat(legendary);
  assert.deepEqual(b.stageFacts.legendary,{speciesId:145,form:1,eligible:true,sourceFlag:'var_695'});
  save.originalExtraInfo=[21];const repeat=new Battle(data,getStage(37),save,()=>{},{seed:1});repeat.place(save.party[0],1);assert(repeat.start());
  let bird;for(let i=0;i<500&&!bird;i++){repeat.wave.tick();bird=repeat.enemies.find(p=>p.speciesId===145);}
  repeat.defeat(bird);assert.equal(repeat.stageFacts.legendary.eligible,false);
});
