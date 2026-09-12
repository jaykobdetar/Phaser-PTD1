import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Battle} from '../src/battle.js';
import {newSave} from '../src/model.js';
import {StoryRuntime} from '../src/story-runtime.js';
import {storyWinController} from '../src/story-data-stage.js';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url)));
const data=read('../public/data/game-data.json');data.timelines=read('../public/data/story-timelines.json');
const levels=read('../public/data/levels.json').levels;
// Exercise the production movie directly, so the game-fix regression suite
// can be applied to a main build without installing any bot tooling.
function resolveWin(data,level,save,battle){
 const rt=new StoryRuntime(data,{timelines:data.timelines,save,level,battle,stageFlags:battle.stageFacts,rng:()=>.5});
 rt.open(storyWinController(level));
 for(let frame=0;frame<10000&&!rt.closed;frame++){
  rt.tick();if(frame%5)continue;
  const names=['butt_hitmonlee',!save.pokemon.some(p=>p.speciesId===138)?'butt_omanyte':'butt_kabuto','butt_next','butt_end','butt_close'];
  const control=names.map(name=>rt.controls.find(c=>c.name===name)).find(Boolean);
  if(control)rt.click(control.clip);
 }
 assert.equal(rt.closed,true,'original reward movie reaches its closing control');
}

function finish(save,id,won=true){
 const level=levels.find(l=>l.id===id),battle=new Battle(data,level,save,()=>{});
 battle.state='running';battle.finish(won);
 return {battle,level};
}
for(const [id,species]of [[26,106],[32,138],[33,138]])test(`stage ${id} exposes its level1 reward only on first clear`,()=>{
 const save=newSave(data,1);save.unlocked=id;
 const first=finish(save,id);assert.equal(first.battle.stageFacts.var_334,true);
 resolveWin(data,first.level,save,first.battle,{won:true});
 assert.deepEqual(save.pokemon.filter(p=>p.speciesId===species).map(p=>p.level),[1]);
 first.battle.dispose();
 const replay=finish(save,id);assert.equal(replay.battle.stageFacts.var_334,false);
 resolveWin(data,replay.level,save,replay.battle,{won:true});
 assert.equal(save.pokemon.filter(p=>p.speciesId===species).length,1);replay.battle.dispose();
});
test('the two first-clear fossil choices can supply both fossil families',()=>{
 const save=newSave(data,1);save.unlocked=32;
 for(const id of [32,33]){const x=finish(save,id);resolveWin(data,x.level,save,x.battle,{won:true});x.battle.dispose();}
 assert.deepEqual(save.pokemon.filter(p=>[138,140].includes(p.speciesId)).map(p=>p.speciesId).sort(),[138,140]);
});
test('a first-clear loss grants no reward and leaves the next win eligible',()=>{
 const save=newSave(data,1);save.unlocked=26;
 const loss=finish(save,26,false);assert.notEqual(loss.battle.stageFacts.var_334,true);assert.equal(save.unlocked,26);loss.battle.dispose();
 const win=finish(save,26);assert.equal(win.battle.stageFacts.var_334,true);win.battle.dispose();
});
test('Fuchsia first-clear item gate is passed to its original reward movie',()=>{
 const save=newSave(data,1);save.unlocked=27;
 const x=finish(save,27);assert.equal(x.battle.stageFacts.var_334,true);
 resolveWin(data,x.level,save,x.battle,{won:true});assert.equal(save.inventory[8],1);x.battle.dispose();
});
