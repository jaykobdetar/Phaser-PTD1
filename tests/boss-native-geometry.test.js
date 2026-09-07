import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {newSave,makePokemon} from '../src/model.js';
import {Battle} from '../src/battle.js';
import {getStage} from '../src/waves-runtime.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
function fixture({team='enemy',shiny=0,canCapture=true,scale=1,hp=100}={}){
 const b=new Battle(data,getStage(1),newSave(data,1)),f=b.fighter(makePokemon(data,19,30,{shiny}),{uid:'geometry',team,x:200,y:200,placed:true,scale,canCapture,original:{canCapture}});f.hp=hp;f.maxHp=100;(team==='tower'?b.towers:b.enemies).push(f);return{b,f,a:b.moveRuntime.actor(f)};
}
test('native life bars use original attachment, constructor positioning, and capture/shiny frames',()=>{
 for(const [options,frame]of [[{},1],[{hp:20},3],[{shiny:1},3],[{canCapture:false,shiny:1},4],[{team:'tower',shiny:1},1]]){
  const {b,f,a}=fixture({...options,scale:2});assert.equal(a.lifeBar.parent,a);assert.equal(a.lifeBar.currentFrame,frame);assert.equal(a.lifeBar.scaleX,f.hp/f.maxHp);assert.equal(a.lifeBar.x,-a.lifeBar.width/2);assert.equal(a.lifeBar.y,-a.gfx.height/4-10);assert.equal(b.moveRuntime.snapshot().find(s=>s.fighterUid===f.uid).children.some(c=>c.symbolName==='gfx_life_bar'),true);b.dispose();
 }
 const {b,a}=fixture({team:'tower',hp:20});a.take_Healing(30);assert.equal(a.lifeBar.scaleX,.5);assert.equal(a.lifeBar.currentFrame,1);assert.equal(a.lifeBar.x,-a.lifeBar.width/2);a.take_Damage(40,null,0,false);assert.equal(a.lifeBar.currentFrame,3);assert.equal(a.lifeBar.scaleX,.1);b.dispose();
});
test('Pokeball point includes the enemy life bar while potion collision uses only Pokemon graphic',()=>{
 const {b,f,a}=fixture();const bar=a.lifeBar.globalBounds(),point={x:(bar[0]+bar[2])/2,y:bar[1]+1};
 assert.equal(a.gfx.hitTestPoint(point.x,point.y),false);assert.equal(b.moveRuntime.captureHit(f,point),true);
 const edge=a.gfx.globalBounds(),y=(edge[1]+edge[3])/2;
 for(const which of [1,2,3])for(const scale of [1,2,4]){
  assert.equal(b.moveRuntime.potionCollision(f,{x:edge[2]+36*scale-.01,y,scale,which}),true);
  assert.equal(b.moveRuntime.potionCollision(f,{x:edge[2]+36*scale+.01,y,scale,which}),false);
 }
 b.dispose();assert.equal(b.moveRuntime.captureHit(f,point),false);assert.equal(b.moveRuntime.potionCollision(f,{x:200,y:200}),false);
});
test('carried candy contributes to the whole-actor capture rectangle at the carrier origin',()=>{
 const {b,f,a}=fixture({scale:.1,hp:1}),point={x:f.x+14,y:f.y+14};assert.equal(a.hitTestPoint(point.x,point.y),false);
 f.candy=b.candies[0];Object.assign(f.candy,{state:'carried',carrier:f.uid,x:f.x,y:f.y});assert.equal(b.moveRuntime.captureHit(f,point),true);
 f.candy=null;assert.equal(b.moveRuntime.captureHit(f,point),false);b.dispose();
});
