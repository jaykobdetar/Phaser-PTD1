import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Battle } from '../src/battle.js';
import { abilityFor, abilityAccuracy, abilityDamage, abilityOnSandstorm, tickAbility } from '../src/abilities.js';
import { newSave, makePokemon, damage, followPath } from '../src/model.js';
import { getStage } from '../src/waves-runtime.js';
const data = JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json', import.meta.url)));
function battle() { return new Battle(data, getStage(1), newSave(data, 1), () => {}, { rng: () => .29 }); }
function fighter(b, id, extra = {}) { return b.fighter(makePokemon(data, id, 30, { moves: [1], selectedMove: 1 }), { team: 'tower', placed: true, x: 0, y: 0, ...extra }); }

test('source ability table has precisely the nine original behaviors, not modern abilities', () => {
  for (const [id, name] of [[1,'overgrow'],[4,'blaze'],[7,'torrent'],[12,'compoundeyes'],[19,'guts'],[11,'shed-skin'],[27,'sand-veil'],[41,'inner-focus'],[107,'keen-eye']]) assert.equal(abilityFor({speciesId:id}), name);
  assert.equal(abilityFor({speciesId:25}), null); assert.equal(abilityFor({speciesId:150}), null);
  assert.equal(abilityAccuracy({speciesId:12}, 75), 97); assert.equal(abilityAccuracy({speciesId:25},75), 75);
});
test('starter ability threshold and integer multiplier match source classes397..399', () => {
  const p = {speciesId:4, hp:10,maxHp:32};
  assert.equal(abilityDamage(p, 13, {typeId:4}),19);
  assert.equal(abilityDamage({...p,hp:11}, 13, {typeId:4}),13);
  assert.equal(abilityDamage(p,13,{typeId:3}),13);
});
test('Keen Eye and Inner Focus block hostile effects but permit self-inflicted effects', () => {
  const b=battle(), source=fighter(b,25), bird=fighter(b,16), bat=fighter(b,41);
  const accuracy={kind:'modifier',target:'target',stat:'accuracy',multiplier:1/3,key:'accuracy-down',durationFrames:360};
  b.applyEffect(accuracy,source,bird,data.moves[3]); assert.equal(bird.effects['accuracy-down'],undefined);
  b.applyEffect(accuracy,bird,bird,data.moves[3]); assert.equal(bird.modifiers.accuracy,1/3);
  const flinch={kind:'status',target:'target',status:'flinch',durationFrames:18};
  b.applyEffect(flinch,source,bat,data.moves[1]); assert.equal(bat.effects.flinch,undefined);
  b.applyEffect(flinch,bat,bat,data.moves[1]); assert(bat.effects.flinch);
});
test('Shed Skin checks every18 ticks and cures first source status; Guts grants source attackx2', () => {
  const b=battle(), snake=fighter(b,23), rat=fighter(b,19);
  for(const target of [snake,rat]) for(const status of ['burn','poison']) b.applyEffect({kind:'status',target:'target',status,durationFrames:216},target,target,data.moves[1]);
  for(let i=0;i<17;i++)tickAbility(b,snake);assert(snake.effects.burn);
  tickAbility(b,snake);assert.equal(snake.effects.burn,undefined);assert(snake.effects.poison);
  tickAbility(b,rat);assert.equal(rat.modifiers.attack,2);assert.equal(rat.effects['attack-up'].left,1800);
  tickAbility(b,rat);assert.equal(rat.modifiers.attack,2);
});
test('Sand Veil is sandstorm immunity and source evasionx3, with opposition cancellation', () => {
  const b=battle(), sand=fighter(b,27), other=fighter(b,25);
  assert.equal(abilityOnSandstorm(b,other),false);
  b.applyEffect({kind:'modifier',target:'target',stat:'evasion',multiplier:1/3,key:'evasion-down',durationFrames:1800},other,sand,data.moves[1]);
  assert(abilityOnSandstorm(b,sand));assert.equal(sand.modifiers.evasion,1);assert.equal(sand.effects['evasion-up'],undefined);
  assert(abilityOnSandstorm(b,sand));assert.equal(sand.modifiers.evasion,3);abilityOnSandstorm(b,sand);assert.equal(sand.modifiers.evasion,3);
});
test('damage handles source screens, physical-defense attacks, starter ability and discrete critical roll', () => {
  const b=battle(), source=fighter(b,4), target=fighter(b,1);source.hp=source.maxHp;
  const move={...data.moves[1],power:70,typeId:4,physical:true,category:'Physical'};
  const plain=damage(data,source,target,move,()=>.99).amount;
  target.effects.reflect={sourceClass:'class_821'};assert.equal(damage(data,source,target,move,()=>.99).amount,Math.floor(plain/2));
  target.effects={};source.hp=Math.floor(source.maxHp/3);assert.equal(damage(data,source,target,move,()=>.99).amount,Math.floor(plain*1.5));
  source.hp=source.maxHp;source.criticalChance=6.5;assert.equal(damage(data,source,target,move,()=>.06).critical,false);assert.equal(damage(data,source,target,move,()=>.05).critical,true);
});
test('source cardinal movement preserves overshoot, one turn per tick, final-marker timing', () => {
  const p={x:0,y:0,point:1,outward:true,path:[{x:0,y:0,direction:'right',reverseDirection:'left'},{x:10,y:1,direction:'front',reverseDirection:'left'},{x:10,y:10,direction:'front',reverseDirection:'back'}]};
  assert.equal(followPath(p,7),false);assert.deepEqual([p.x,p.y,p.point],[7,0,1]);
  assert.equal(followPath(p,7),false);assert.deepEqual([p.x,p.y,p.point,p.direction],[14,0,2,'front']);
  assert.equal(followPath(p,12),false);assert.deepEqual([p.x,p.y,p.point],[14,12,3]);
  assert.equal(followPath(p,12),true);assert.deepEqual([p.x,p.y,p.point],[14,24,4]);
});
test('all nine source target modes and protected-target filtering are available', () => {
  const b=battle(), p=fighter(b,25), weak=fighter(b,1,{team:'enemy',uid:'weak',hp:5,maxHp:100}), fast=fighter(b,100,{team:'enemy',uid:'fast',hp:90,maxHp:100,candy:{}});
  p.selectedMove=1;
  p.target='fastest';assert.equal(b.selectTargets(p,[weak,fast])[0],fast);
  p.target='slowest';assert.equal(b.selectTargets(p,[fast,weak])[0],weak);
  p.target='weakest';assert.equal(b.selectTargets(p,[fast,weak])[0],weak);
  p.target='strongest';assert.equal(b.selectTargets(p,[weak,fast])[0],fast);
  p.target='candy';assert.equal(b.selectTargets(p,[weak,fast])[0],fast);
  p.target='no-candy';assert.equal(b.selectTargets(p,[fast,weak])[0],weak);
  weak.effects.protect={sourceClass:'class_794'};p.target='first';assert.deepEqual(b.selectTargets(p,[weak,fast]),[fast]);
});
