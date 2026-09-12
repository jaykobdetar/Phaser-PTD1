import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createMoveRuntime,SOURCE_MOVE_CLASSES,SOURCE_MANIFEST} from '../src/move-native.js';
import {Battle} from '../src/battle.js';
import {createMoveDisplay} from '../src/move-native-display.js';
import {nativeMoveFidelity,NATIVE_MOVE_IDS,DAMAGE_ONLY_FALLBACK_MOVE_IDS} from '../src/move-fidelity.js';

const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
const timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
function seeded(seed){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function fixture(id,{species=1,targetSpecies=19,rng=()=>.5,sourceHp=2000,targetHp=2000,sourceTeam='tower',targetTeam='enemy',level=30,maxHp=2000,extraAlly=false}={}){
 const f=(sid,team,x,moves,uid)=>({speciesId:sid,team,x,y:100,level,hp:team===sourceTeam?sourceHp:targetHp,maxHp,moves,selectedMove:moves[0],uid,cooldown:0,alive:true,placed:true,modifiers:{},effects:{},attackers:new Set(),direction:'front',point:1,spotIndex:team==='tower'?0:null,path:[{x:0,y:100,name:'wp_0_right_left',direction:'right',reverseDirection:'left'},{x:600,y:100,name:'wp_1_right_left',direction:'right',reverseDirection:'left'}]});
 const source=f(species,sourceTeam,100,[id,1,5,14],'source'),target=f(targetSpecies,targetTeam,180,[1],'target');
 const towers=[source,target].filter(f=>f.team==='tower'),enemies=[source,target].filter(f=>f.team==='enemy');
 if(extraAlly){const ally=f(7,'tower',120,[1],'ally');ally.spotIndex=1;towers.push(ally);}
 const emitted=[];const battle={data,rng,towers,enemies,level:{spots:[{index:0,x:100,y:100},{index:1,x:80,y:80},{index:2,x:300,y:100}],paths:{},candyCount:3},candies:[{state:'ground',x:350,y:100},{state:'lost',x:400,y:100},{state:'ground',x:430,y:100}],save:{party:['source'],pokemon:[source],money:0},emit(type,event){emitted.push({type,...event});},defeat(f){f.alive=false;},recall(uid){const a=this.towers.find(f=>f.uid===uid);if(a){a.placed=false;a.spotIndex=null;}},turnAround(f){f.turnedAround=!f.turnedAround;},removePartyMember(f){this.save.party=this.save.party.filter(uid=>uid!==f.uid);this.recall(f.uid);}};
 const invoked=new Set(),runtime=createMoveRuntime(battle,{timelines,onInvoke:(c,m)=>invoked.add(c+'.'+m)});
 const step=(count=1)=>{for(let i=0;i<count;i++){for(const f of [...towers,...enemies]){runtime.tickFighter(f);runtime.collide(f);}runtime.tickWorld();}};
 const cast=(who=source)=>{who.cooldown=0;runtime.attack(who,who.team==='tower'?enemies:towers);};
 const native=runtime.actor(source),opponent=runtime.actor(target);
 return{source,target,battle,runtime,native,opponent,step,cast,emitted,invoked};
}

test('all 433 source move classes execute with exact dependency classes in two branch scenarios',()=>{
 assert.equal(Object.keys(SOURCE_MOVE_CLASSES).length,433);
 const failures=[];const invoked=new Set(),executed=new Set();
 for(const scenario of [0,1])for(const [key,sourceClass]of Object.entries(SOURCE_MOVE_CLASSES)){
  const id=Number(key);const x=fixture(id,{species:scenario?94:4,targetSpecies:scenario?9:19,sourceHp:scenario?300:2000,targetHp:scenario?300:2000,rng:()=>scenario?.001:.5});
  try{
   if(scenario){x.opponent.add_Effect(new x.runtime.classes.class_200(x.opponent,7));x.opponent.add_Effect(new x.runtime.classes.class_808(x.opponent,50));x.opponent.add_Effect(new x.runtime.classes.class_800(x.opponent,50));}
   x.cast();x.step(800);
   assert.ok(Number.isFinite(x.source.hp)&&Number.isFinite(x.target.hp),'finite HP');
   if(x.invoked.has(sourceClass+'.do_Attack')||SOURCE_MANIFEST.moves[id].inheritance.some(c=>x.invoked.has(c+'.do_Attack')))executed.add(id);
   for(const name of x.invoked)invoked.add(name);
  }catch(error){failures.push(`${id} ${data.moves[id].name}, scenario ${scenario}: ${error.message}`);}
 }
 assert.deepEqual(failures,[]);
 assert.equal(executed.size,433,'every original attack body executes in at least one branch scenario');
 assert.ok(invoked.size>3000,'source method execution covers more than 3,000 method implementations');
});

test('integer damage, STAB, critical rolls and physical defense are source values',()=>{
 const x=fixture(1,{species:19,targetSpecies:1,level:5,rng:()=>.5});
 assert.equal(x.native.myAttack.method_3(x.opponent),9);
 const critical=fixture(1,{species:19,targetSpecies:1,level:5,rng:()=>0});
 assert.equal(critical.native.myAttack.method_3(critical.opponent),18);
 const ghost=fixture(1,{species:19,targetSpecies:92,level:5,rng:()=>.5});
 assert.equal(ghost.native.myAttack.method_3(ghost.opponent),0);
});

test('projectile damage happens on source arrival tick, not at attack launch',()=>{
 const x=fixture(10,{species:4,targetSpecies:1,rng:()=>.5});
 x.cast();assert.equal(x.target.hp,2000);assert.ok(x.native.effect_List.some(e=>e.sourceClass==='class_245'));
 x.step(1);assert.equal(x.target.hp,2000);
 x.step(20);assert.ok(x.target.hp<2000);
 assert.equal(x.emitted.filter(e=>e.type==='damage'&&e.target===x.target).length,1);
});

test('Growl quarter attack, opposing boost cancellation and original buff expiry',()=>{
 const x=fixture(5,{rng:()=>.5});x.cast();assert.equal(x.target.modifiers.attack,.25);
 const duration=x.opponent.check_Effects(x.runtime.classes.class_802).var_614;assert.equal(duration,1800);
 x.step(1801);assert.equal(x.target.modifiers.attack,1);
 const y=fixture(5);y.opponent.add_Effect(new y.runtime.classes.class_805(y.opponent,1800));assert.equal(y.target.modifiers.attack,2);
 y.cast();assert.equal(y.target.modifiers.attack,1);assert.equal(y.opponent.check_Effects(y.runtime.classes.class_802),null);
});

test('Sleep Powder deals no direct damage and sleep lasts the original 72 ticks',()=>{
 const x=fixture(26,{rng:()=>.5});x.cast();x.step(18);
 assert.equal(x.target.hp,2000);assert.ok(x.opponent.check_Effects(x.runtime.classes.class_791));assert.equal(x.target.modifiers.speed,.0001);
 x.step(100);assert.equal(x.opponent.check_Effects(x.runtime.classes.class_791),null);assert.equal(x.target.modifiers.speed,1);
});

test('Substitute uses the original HP threshold, then Endure saves one lethal hit',()=>{
 const x=fixture(213,{maxHp:100,sourceHp:100,targetHp:100});x.cast();assert.equal(x.source.hp,75);
 assert.ok(x.native.check_Effects(x.runtime.classes.class_195));x.native.take_Damage(20,null,1);assert.equal(x.source.hp,75);
 x.native.take_Damage(10,null,1);assert.equal(x.source.hp,75);assert.equal(x.native.check_Effects(x.runtime.classes.class_195),null);
 x.native.add_Effect(new x.runtime.classes.class_196(x.native));x.native.take_Damage(1000,null,1);assert.equal(x.source.hp,1);assert.equal(x.native.check_Effects(x.runtime.classes.class_196),null);
});

test('Rest heals completely, cures statuses, and leaves the source 36-tick sleep',()=>{
 const x=fixture(143,{maxHp:100,sourceHp:20,targetHp:100});x.native.add_Effect(new x.runtime.classes.class_200(x.native,3));x.cast();
 assert.equal(x.source.hp,100);assert.equal(x.native.check_Effects(x.runtime.classes.class_200),null);assert.ok(x.native.check_Effects(x.runtime.classes.class_791));
 x.step(37);assert.equal(x.native.check_Effects(x.runtime.classes.class_791),null);
});

test('Mirror Move copies target move1, even when a different move is selected',()=>{
 const x=fixture(78);x.target.moves=[14,1];x.target.selectedMove=1;x.cast();assert.equal(x.source.modifiers.defense,4);assert.equal(x.target.hp,2000);
});

test('Transform copies original species data and moves for 720 ticks, then restores',()=>{
 const x=fixture(56,{species:132,targetSpecies:4,rng:()=>.5});x.cast();
 assert.equal(x.native.myProfile.transformed,true);assert.equal(x.native.myProfile.tnum,4);assert.equal(x.native.myAttack.var_7,'Tackle');assert.deepEqual(x.source.typeIds,[4]);
 x.step(722);assert.equal(x.native.myProfile.transformed,false);assert.deepEqual(x.source.typeIds,[5]);assert.equal(x.native.myAttack.var_7,'Transform');
});

test('weather replacement and dynamic Thunder accuracy use source field identities',()=>{
 const x=fixture(111);x.cast();assert.equal(x.runtime.pathEffects[0].sourceClass,'class_854');x.runtime.collide(x.source);
 x.source.moves=[202];x.source.selectedMove=202;x.runtime.resetAttack(x.source);assert.equal(x.native.myAttack.get_Accurary(),10000);
 x.source.moves=[411];x.source.selectedMove=411;x.runtime.resetAttack(x.source);x.cast();assert.equal(x.runtime.pathEffects.length,1);assert.equal(x.runtime.pathEffects[0].sourceClass,'class_856');
});

test('Guts, Keen Eye, Inner Focus and Shed Skin run the original ability classes',()=>{
 const guts=fixture(1,{species:19});guts.native.add_Effect(new guts.runtime.classes.class_200(guts.native,1));guts.step();assert.equal(guts.source.modifiers.attack,2);
 const eye=fixture(17,{targetSpecies:16});eye.cast();assert.equal(eye.target.modifiers.accuracy??1,1);
 const focus=fixture(19,{targetSpecies:41,rng:()=>0});focus.cast();focus.step(40);assert.equal(focus.opponent.check_Effects(focus.runtime.classes.class_793),null);
 const shed=fixture(1,{species:11,rng:()=>0});shed.native.add_Effect(new shed.runtime.classes.class_200(shed.native,1));shed.step(18);assert.equal(shed.native.check_Effects(shed.runtime.classes.class_200),null);
});

test('Selfdestruct removes only its active party member after the source animation',()=>{
 const x=fixture(144);x.cast();assert.deepEqual(x.battle.save.party,['source']);x.step(100);assert.deepEqual(x.battle.save.party,[]);assert.equal(x.battle.save.pokemon.length,1);assert.equal(x.source.placed,false);
});

test('Teleport chooses an unoccupied original spot and updates placement',()=>{
 const x=fixture(116);x.cast();assert.equal(x.source.spotIndex,2);assert.equal(x.source.x,300);assert.equal(x.source.y,100);
});

test('Sleep Talk is permitted during sleep and delegates another original move',()=>{
 const x=fixture(342,{rng:seeded(31)});x.native.add_Effect(new x.runtime.classes.class_791(x.native,72));x.cast();assert.ok([...x.invoked].some(name=>name.endsWith('.do_Attack')&&!name.startsWith('class_422.')));
});

test('native timeline end labels, stop actions, child source placement and geometry survive',()=>{
 const d=createMoveDisplay(timelines),root=new d.Sprite(),clip=new d.MovieClip('do_Leer');root.addChild(clip);
 assert.equal(clip.currentFrame,1);assert.equal(clip.currentLabel,null);assert.ok(d.snapshot(root)[0].children[0].sourcePlacement.matrix);
 for(let i=0;i<10;i++)d.advance(root);
 assert.equal(clip.currentFrame,11);assert.equal(clip.currentLabel,'end');assert.equal(clip.playing,false);assert.deepEqual(clip.localBounds(),[0,0,0,0]);
});

test('native unknown IDs and missing timeline metadata fail explicitly',()=>{
 assert.throws(()=>createMoveRuntime({data}),/timeline metadata/);
 const x=fixture(1);x.source.moves=[999];x.source.selectedMove=999;assert.throws(()=>x.runtime.resetAttack(x.source),/Unknown original move 999/);
});

test('all supported move IDs have source evidence; no generic damage fallback remains',()=>{
 assert.equal(NATIVE_MOVE_IDS.size,433);assert.equal(DAMAGE_ONLY_FALLBACK_MOVE_IDS.size,0);
 for(const move of Object.values(data.moves)){const fidelity=nativeMoveFidelity(move);assert.equal(fidelity.mode,'native-source');assert.equal(fidelity.sourceClass,move.sourceClass);assert.match(SOURCE_MANIFEST.classes[fidelity.sourceClass].sha256,/^[a-f0-9]{64}$/);}
 assert.equal(nativeMoveFidelity({id:999}).supported,false);
});

test('ordinary travelers retain source var107=false; only explicit attack-enabled enemies attack',()=>{
 const x=fixture(1,{sourceTeam:'enemy',targetTeam:'tower'});assert.equal(x.native.myProfile.var_107,false);assert.equal(x.native.myProfile.runAway,true);assert.equal(x.native.myProfile.canCapture,true);assert.equal(x.native.myProfile.var_655,1);
 x.cast();x.step(30);assert.equal(x.target.hp,2000);
 x.native.myProfile.var_107=true;x.cast();x.step(30);assert.ok(x.target.hp<2000);
});

test('source Zapdos AI alternates the completed multi-phase moves',()=>{
 const x=fixture(405,{species:145,targetSpecies:6,sourceTeam:'enemy',targetTeam:'tower'});x.source.moves=[405,406];x.native.myProfile.myAI=new x.runtime.classes.class_93();
 x.source.cooldown=18;x.step(18);assert.equal(x.native.myAttack.var_237,'waiting');
 x.step(91);assert.equal(x.source.selectedMove,406);assert.equal(x.native.myAttack.sourceClass,'class_566');
 x.step(300);assert.ok(x.invoked.has('class_121.do_Attack'));assert.ok(x.invoked.has('class_566.do_Attack'));assert.ok(x.target.hp<2000);
});

test('native candy pickup uses the actual source candy and current Pokémon geometry',()=>{
 const x=fixture(1);x.battle.level.backgroundSymbolId=19;x.battle.level.candies=[{name:'candy_1'}];const candy={id:0,x:100,y:100};
 assert.equal(x.runtime.candyCollision(x.source,candy),true);candy.x=1000;assert.equal(x.runtime.candyCollision(x.source,candy),false);
});

test('recall abandonment does not resolve a pending source-owned projectile',()=>{
 const x=fixture(10);x.cast();const hp=x.target.hp;x.runtime.detach(x.source,{abandon:true});assert.equal(x.target.hp,hp);assert.ok(!x.runtime.snapshot().some(node=>node.fighterUid==='source'));
});

test('disposing every move cancels callbacks, pending damage and party removal',()=>{
 const failures=[];
 for(const id of Object.keys(SOURCE_MOVE_CLASSES).map(Number)){
  const x=fixture(id,{rng:()=>.001});x.cast();const beforeEvents=x.emitted.length,beforeParty=[...x.battle.save.party],hp=x.target.hp;
  const errors=x.runtime.dispose();if(errors.length)failures.push(`${id}: ${errors.join('; ')}`);
  assert.deepEqual(x.runtime.snapshot(),[]);assert.equal(x.runtime.pathEffects.length,0);assert.equal(x.runtime.disposed,true);assert.equal(x.runtime.ready(x.source),false);
  x.runtime.tickWorld();x.runtime.tickFighter(x.source);x.runtime.attack(x.source);
  assert.equal(x.target.hp,hp);assert.equal(x.emitted.length,beforeEvents);assert.deepEqual(x.battle.save.party,beforeParty);
 }
 assert.deepEqual(failures,[]);
});


test('native direction and evolution graphics follow host changes without replacing active behavior',()=>{
 const x=fixture(1,{sourceTeam:'enemy',targetTeam:'tower'});x.source.direction='left';x.runtime.tickBeforeMovement(x.source);assert.equal(x.native.gfx.currentLabel,'left');
 const firstFrame=x.native.gfx.currentFrame;x.runtime.tickBeforeMovement(x.source);assert.equal(x.native.gfx.currentFrame,firstFrame);
 x.runtime.tickWorld();const advanced=x.native.gfx.currentFrame;x.runtime.tickBeforeMovement(x.source);assert.equal(x.native.gfx.currentFrame,advanced);
 x.source.direction='back';x.runtime.tickAfterMovement(x.source);assert.equal(x.native.gfx.currentLabel,'back');
 const y=fixture(1,{species:19});const ability=y.native.myAbility,attack=y.native.myAttack,graphic=y.native.gfx;y.native.add_Effect(new y.runtime.classes.class_805(y.native,100));const effect=y.native.effect_List[0];
 y.source.speciesId=20;y.runtime.refreshGraphic(y.source);assert.notEqual(y.native.gfx,graphic);assert.equal(graphic.parent,null);assert.equal(y.native.myAbility,ability);assert.equal(y.native.myAttack,attack);assert.equal(y.native.effect_List[0],effect);assert.equal(y.source.modifiers.attack,2);
});

test('enemy Mirror Move can copy Earthquake without casting its owner to a tower',()=>{
 const x=fixture(78,{species:22,targetSpecies:75,sourceTeam:'enemy',targetTeam:'tower'});
 x.opponent.myProfile.move1=194;
 assert.doesNotThrow(()=>{x.native.myAttack.do_Attack(x.opponent);x.step(30);});
 assert.ok(x.target.hp<2000,'copied Earthquake damages the opposing tower');
});

for(const moveId of [297,246])test(`projectile ${moveId} stops if defeat cleanup disposes its active effect`,()=>{
 const x=fixture(moveId,{targetHp:1});
 x.battle.defeat=target=>{target.alive=false;x.native.end_All_Effects();};
 assert.doesNotThrow(()=>{x.cast();x.step(50);});
 assert.equal(x.target.alive,false);assert.equal(x.native.effect_List.length,0);
});

test('effect interruption waits for nested damage and defeat bookkeeping to finish',()=>{
 const x=fixture(246,{targetHp:1});let completed=false;
 x.battle.defeat=target=>{target.alive=false;x.native.end_All_Effects();x.native.take_Damage(1,null);completed=true;};
 x.cast();x.step(50);
 assert.equal(completed,true,'nested cleanup must not unwind the defeat callback early');
});


test('enemy Mirror Move copying Whirlwind leaves a stationary tower in place without a path crash',()=>{
 const x=fixture(78,{species:22,targetSpecies:12,sourceTeam:'enemy',targetTeam:'tower'});
 delete x.target.path;
 x.battle.turnAround=Battle.prototype.turnAround;
 x.opponent.myProfile.move1=36;
 const before={x:x.target.x,y:x.target.y,placed:x.target.placed,spot:x.target.spotIndex};
 assert.doesNotThrow(()=>{x.native.myAttack.do_Attack(x.opponent);x.step(300);});
 assert.deepEqual({x:x.target.x,y:x.target.y,placed:x.target.placed,spot:x.target.spotIndex},before);
 assert.equal(x.target.path,undefined);
 assert.ok(x.invoked.has('class_345.remove_Me'),'execute the real delayed Whirlwind reversal');
});


test('disposed projectile cleanup preserves independent defeat errors',()=>{
 const x=fixture(246,{targetHp:1}),failure=new Error('independent defeat failure');
 x.battle.defeat=target=>{target.alive=false;x.native.end_All_Effects();throw failure;};
 x.cast();assert.throws(()=>x.step(50),error=>error===failure);
});
