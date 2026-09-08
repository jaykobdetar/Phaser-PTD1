import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {setImmediate as nextTurn} from 'node:timers/promises';
import {createMoveRuntime} from '../src/move-native.js';
const data=JSON.parse(readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
const timelines=JSON.parse(readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
function fixture(options={},onEmit=()=>{}){
  const battle={data,rng:()=>.5,towers:[],enemies:[],candies:[],level:{spots:[],paths:{}},save:{pokemon:[],party:[],settings:{}},emit:onEmit};
  const runtime=createMoveRuntime(battle,{timelines,...options});
  const fighter=uid=>({uid,speciesId:19,team:'enemy',level:10,x:100,y:100,hp:100,maxHp:100,moves:[1],selectedMove:1,cooldown:0,alive:true,placed:true,modifiers:{},effects:{},direction:'front'});
  return {battle,runtime,fighter};
}

async function memoryProbe(){
  const x=fixture(),refs=[];let callbacks=0;x.battle.emit=()=>{callbacks++;};
  function retire(uid){
    const f=x.fighter(uid),a=x.runtime.actor(f);x.battle.enemies.push(f);
    a.take_Damage(1,null,1,false);a.take_Healing(1);
    x.runtime.detach(f);x.battle.enemies.length=0;
    return {fighter:new WeakRef(f),actor:new WeakRef(a)};
  }
  for(let i=0;i<4000;i++)refs.push(retire(`retired-${i}`));
  for(let i=0;i<5;i++){await nextTurn();global.gc();}
  const retained=refs.filter(row=>row.fighter.deref()).length,retainedActors=refs.filter(row=>row.actor.deref()).length;
  assert.equal(x.runtime.world.children.length,0);
  assert.equal(x.runtime.events.length,256);assert.equal(x.runtime.diagnosticEventCount,8000);assert.equal(callbacks,8000);
  assert.equal(retained,128);assert.equal(retainedActors,128,'only the most recent diagnostic window retains detached actors');
  assert.equal(refs[0].fighter.deref(),undefined);assert.equal(refs[0].actor.deref(),undefined);
  const count=x.runtime.diagnosticEventCount;x.runtime.dispose();assert.equal(x.runtime.events.length,0);assert.equal(x.runtime.diagnosticEventCount,count);
  return {fighters:refs.length,retained,retainedActors,callbacks};
}

// The GC assertion runs in-process with node --expose-gc; no child process is
// needed, so the regression also works in sandboxes that prohibit spawning.
test('long battles release retired fighter graphs outside the bounded diagnostic window',{skip:typeof global.gc!=='function'},async()=>{
  const result=await memoryProbe();
  assert.equal(result.fighters,4000);assert.equal(result.retainedActors,128);assert.equal(result.callbacks,8000);
});

  test('long diagnostic histories preserve chronological recent records and the total event count',()=>{
    const x=fixture(),f=x.fighter('one-fighter'),a=x.runtime.actor(f);x.battle.save.settings.damageText=false;
    for(let i=0;i<4000;i++){a.take_Damage(1,null,1,false);a.take_Healing(1);}
    assert.equal(x.runtime.events.length,256);assert.equal(x.runtime.diagnosticEventCount,8000);
    assert(x.runtime.events.every((row,i)=>row.kind===(i%2?'heal':'damage')));x.runtime.dispose();
  });

  test('disabling diagnostic storage preserves damage, healing, source traces and callback behavior',()=>{
    const run=limit=>{
      const callbacks=[],x=fixture({diagnosticEventLimit:limit},(type,value)=>callbacks.push({type,uid:value.target?.uid,amount:value.amount,native:value.native})),f=x.fighter('same-fighter'),a=x.runtime.actor(f);
      for(let i=0;i<10;i++){a.take_Damage(3,null,1,false);a.take_Healing(2);x.runtime.classes.path_effect.prototype.onCollision(a);x.runtime.tickBeforeMovement(f);x.runtime.tickWorld();}
      return {x,hp:f.hp,snapshot:x.runtime.snapshot(),callbacks};
    };
    const off=run(0),on=run(4);
    assert.equal(off.x.runtime.events.length,0);assert.equal(on.x.runtime.events.length,4);
    assert.equal(off.x.runtime.diagnosticEventCount,30);assert.equal(on.x.runtime.diagnosticEventCount,30);
    assert.deepEqual(on.x.runtime.events.map(row=>row.kind),['trace','damage','heal','trace']);
    assert.equal(off.hp,on.hp);assert.deepEqual(off.callbacks,on.callbacks);assert.deepEqual(off.snapshot,on.snapshot);
    assert.equal(on.x.runtime.events.at(-2).target.uid,'same-fighter');
    off.x.runtime.dispose();on.x.runtime.dispose();
  });

  test('diagnostic limits are explicit bounded integers and disposal leaves callbacks inactive',()=>{
    for(const diagnosticEventLimit of [-1,1.5,Infinity,65537,'4'])assert.throws(()=>fixture({diagnosticEventLimit}),/diagnosticEventLimit/);
    const emitted=[],x=fixture({diagnosticEventLimit:1},type=>emitted.push(type)),f=x.fighter('retired'),a=x.runtime.actor(f);
    a.take_Damage(1,null,1,false);assert.equal(x.runtime.events.length,1);x.runtime.dispose();const count=x.runtime.diagnosticEventCount,callbacks=emitted.length;
    a.take_Damage(1,null,1,false);a.take_Healing(1);
    assert.equal(x.runtime.events.length,0);assert.equal(x.runtime.diagnosticEventCount,count);assert.equal(emitted.length,callbacks);
  });
