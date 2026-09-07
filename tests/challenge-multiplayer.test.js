import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {newSave} from '../src/model.js';import {ChallengeBattle,ChallengeInvasion} from '../src/challenge-battle.js';import {LocalVersus,LocalCoop} from '../src/local-multiplayer.js';import {claimAchievement} from '../src/achievements.js';
const read=n=>JSON.parse(fs.readFileSync(new URL('../public/data/'+n,import.meta.url)));const data=read('game-data.json');data.timelines=read('story-timelines.json');const levels=read('levels.json');
test('six challenges have original routes and start in their native engine',()=>{for(const level of levels.variants.filter(l=>l.challengeId)){const s=newSave(data,25);s.challengeCompleted=6;const Engine=level.mode==='invasion'?ChallengeInvasion:ChallengeBattle;const b=new Engine(data,level,s);assert(Object.keys(level.paths).length>0);if(level.challengeId!==3&&level.mode!=='invasion'){const slot=level.spots.find(s=>!b.towers.some(t=>t.spotIndex===s.index));b.place(b.party[0].uid,slot.index);}assert(b.start(),`Challenge ${level.challengeId} did not start`);for(let i=0;i<100;i++)b.tick();assert.notEqual(b.state,'error',JSON.stringify([...b.warnings]));assert.equal(s.unlocked,1);b.dispose?.();}});
test('challenge rewards update challenge progress once and retain campaign party',()=>{for(const id of [1,2,6]){const s=newSave(data,1),party=[...s.party],level=levels.variants.find(l=>l.challengeId===id),Engine=id===2?ChallengeInvasion:ChallengeBattle,b=new Engine(data,level,s);b.state='running';b.finish(true);assert.equal(s.unlocked,1);assert.deepEqual(s.completed,[]);assert.deepEqual(s.party,party);assert.equal(s.challengeCompleted,id);assert(id===2?s.inventory[6]===1:s.pokemon.length===2);b.state='running';b.finish(true);assert(id===2?s.inventory[6]===1:s.pokemon.length===2);}});
test('versus players have source teams and share one battlefield',()=>{const s=newSave(data,1),before=JSON.stringify(s),level=levels.variants.find(l=>l.className==='multi_level_1_1'),b=new LocalVersus(data,level,s);assert.equal(b.party[0].speciesId,6);assert(b.place(b.party[0].uid,level.spots[0].index));assert(b.start());b.switchPlayer(1);assert.equal(b.party[0].speciesId,9);assert(b.launch(b.party[0].uid,Object.keys(level.paths)[0]));assert.equal(b.energy,780);for(let i=0;i<100;i++)b.tick();assert.notEqual(b.state,'error');assert.equal(JSON.stringify(s),before);});
test('co-op uses two original teams without campaign mutation',()=>{const s=newSave(data,1),before=JSON.stringify(s),level=levels.variants.find(l=>l.className==='multi_level_2'),b=new LocalCoop(data,level,s);assert.equal(b.party.length,6);assert.equal(b.visibleParty.length,3);assert(b.place(b.visibleParty[0].uid,2));b.switchPlayer(1);assert(b.place(b.visibleParty[0].uid,3));assert(b.start());for(let i=0;i<100;i++)b.tick();assert.notEqual(b.state,'error');assert.equal(JSON.stringify(s),before);});
test('achievement rewards obey source claim counters',()=>{const s=newSave(data,1);s.challengeCompleted=3;s.achievements={100:1,101:1,102:1,103:1};for(let i=0;i<3;i++)assert(claimAchievement(data,s,1).ok);assert(!claimAchievement(data,s,1).ok);assert.equal(s.pokemon.length,4);assert.equal(s.achievements[103],4);});

test('challenge3 captures remain temporary while global earnings survive abandonment',()=>{
 const save=newSave(data,1),owned=structuredClone(save.pokemon),party=[...save.party],level=levels.variants.find(l=>l.challengeId===3),b=new ChallengeBattle(data,level,save,()=>{},{seed:1,rng:()=>.5});
 assert(b.start());for(let i=0;i<500&&!b.enemies.length;i++)b.tick();const enemy=b.enemies.find(e=>b.canCapture(e));assert(enemy);const original=structuredClone(enemy.original);
 const result=b.capture(enemy.uid);assert(result.ok);assert(result.profile.temporary);assert.equal(b.party.length,6);assert.equal(b.partyMembers.length,1);assert.deepEqual(save.pokemon,owned);assert.deepEqual(save.party,party);
 const money=save.money;b.spawn(original);const defeated=b.enemies.at(-1);b.defeat(defeated);assert.equal(save.money,money+(original.reward??data.species[original.num].reward));
 b.save.money-=5;const earned=save.money;b.awardAchievement(3);assert.equal(save.achievements[3],1);b.dispose();b.tick();assert.equal(save.money,earned);assert.deepEqual(save.pokemon,owned);assert.equal(save.challengeCompleted,0);
});

test('invasion challenge uses native source moves and isolated forcedparty across relaunch',()=>{
 const save=newSave(data,1),party=[...save.party],owned=structuredClone(save.pokemon),level=levels.variants.find(l=>l.challengeId===2),errors=[],b=new ChallengeInvasion(data,level,save,(t,d)=>{if(t==='error')errors.push(d.error);},{seed:1,rng:()=>.5});
 assert(b.start());const profile=b.party[0];assert(b.launch(profile.uid));const first=b.enemies[0];
 for(let i=0;i<1000&&b.state==='running';i++)b.tick();assert.deepEqual(errors,[]);assert.notEqual(b.state,'error');
 if(first.alive)b.defeat(first);assert(b.available(profile.uid));assert.deepEqual(save.party,party);assert.deepEqual(save.pokemon,owned);
 const before=save.money;b.dispose();const frame=b.frame;b.tick();assert.equal(b.frame,frame);assert.equal(save.money,before);assert.equal(b.moveRuntime.world.children.length,0);
 const again=new ChallengeInvasion(data,level,save,()=>{},{seed:1,rng:()=>.5});assert(again.start());assert(again.launch(again.party[0].uid));assert.equal(again.enemies[0].hp,again.enemies[0].maxHp);assert.deepEqual(again.enemies[0].effects,{});again.dispose();
});

test('local versus halfspeed uses original integer stat through native actors and leaves campaign unchanged',()=>{
 const save=newSave(data,1),before=JSON.stringify(save),level=levels.variants.find(l=>l.className==='multi_level_1_1'),errors=[],b=new LocalVersus(data,level,save,(t,d)=>{if(t==='error')errors.push(d.error);},{seed:1,rng:()=>.5});
 assert(b.place(b.party[0].uid,level.spots[0].index));assert(b.start());b.switchPlayer(1);assert(b.launch(b.party[0].uid,Object.keys(level.paths)[0]));const attacker=b.enemies[0],actor=b.moveRuntime.actor(attacker),expected=Math.trunc(data.species[attacker.speciesId].stats.speed*.5);
 assert.equal(actor.myProfile.speed,expected);const pos={x:attacker.x,y:attacker.y};b.tick();assert(Math.abs(Math.hypot(attacker.x-pos.x,attacker.y-pos.y)-expected/10)<1e-7);
 for(let i=0;i<1200&&b.state==='running';i++)b.tick();assert.deepEqual(errors,[]);assert.equal(JSON.stringify(save),before);b.dispose();assert.equal(JSON.stringify(save),before);
});

test('local co-op survives one team fainting and loses after all six faint, excluding Gary',()=>{
 const save=newSave(data,1),before=JSON.stringify(save),level=levels.variants.find(l=>l.className==='multi_level_2'),b=new LocalCoop(data,level,save,()=>{},{seed:1,rng:()=>.5});
 for(const side of [0,1]){b.switchPlayer(side);for(const p of b.visibleParty){const spot=level.spots.find(s=>!b.towers.some(t=>t.spotIndex===s.index));assert(b.place(p.uid,spot.index));}}
 assert(b.start());for(const tower of b.towers.filter(t=>!t.npc&&t.owner===0))b.moveRuntime.actor(tower).take_Damage(tower.maxHp+1,null,1,false);b.tick();assert.equal(b.state,'running');
 for(const tower of b.towers.filter(t=>!t.npc&&t.owner===1))b.moveRuntime.actor(tower).take_Damage(tower.maxHp+1,null,1,false);b.tick();assert.equal(b.state,'lost');assert(b.towers.some(t=>t.npc&&t.alive));assert.equal(JSON.stringify(save),before);b.dispose();
});
