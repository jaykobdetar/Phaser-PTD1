import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Battle} from '../src/battle.js';
import {SafariBattle} from '../src/safari-battle.js';
import {newSave,makePokemon,validateSave,MAX_COLLECTION_SIZE} from '../src/model.js';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url)));
const data=read('../public/data/game-data.json'),levels=read('../public/data/levels.json').levels;
for(const [Engine,id]of [[Battle,1],[SafariBattle,29]])test(`${Engine.name} rejects capture at capacity without consuming the enemy or corrupting the save`,()=>{
 const save=newSave(data,1);
 for(let i=save.pokemon.length;i<MAX_COLLECTION_SIZE-1;i++)save.pokemon.push(makePokemon(data,19,5));
 const b=new Engine(data,levels.find(l=>l.id===id),save,()=>{});
 b.state='running';
 const add=uid=>{const e=b.fighter({speciesId:19,level:5,moves:[1]},{uid,team:'enemy',canCapture:true});e.hp=1;b.enemies.push(e);return e;};
 try {
  assert.equal(b.capture(add('last-slot').uid).ok,true);
  assert.equal(save.pokemon.length,MAX_COLLECTION_SIZE);
  const blocked=add('full-storage'),before=structuredClone(save),captured=b.stats.captured;
  const result=b.capture(blocked.uid);
  assert.equal(result.ok,false);assert.match(result.message,/collection is full/i);
  assert.equal(b.enemies.includes(blocked),true);assert.equal(blocked.alive,true);
  assert.equal(b.stats.captured,captured);assert.deepEqual(save,before);
  assert.doesNotThrow(()=>validateSave(save,data));
 }finally{b.dispose();}
});
