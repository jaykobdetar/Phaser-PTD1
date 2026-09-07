import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {setOriginalPartyBlockState} from '../src/original-hud.js';
import {StoryClip} from '../src/story-data-clip.js';
import {createCanvasTools} from '../public/assets/story/canvas-tools.js';
const timelines=JSON.parse(readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));

test('source party states keep occupied cards opaque and only empty slots half transparent',()=>{
 const hud=new StoryClip(timelines,'gfx_ui_Level'),block=hud.block_1,profile={uid:'party-one'};
 for(const [fighter,bg] of [[null,1],[{alive:true,placed:false},1],[{alive:true,placed:true},2],[{alive:false,placed:false},3]]){
  setOriginalPartyBlockState(block,profile,fighter);assert.equal(block.currentFrame,1);assert.equal(block.alpha,1);assert.equal(block.bg.currentFrame,bg);assert.equal(block.authoredAlpha,72/256);
 }
 setOriginalPartyBlockState(block,null,null);assert.equal(block.currentFrame,4);assert.equal(block.alpha,.5);
 setOriginalPartyBlockState(block,profile,{alive:true,placed:false},{reverse:true});assert.equal(block.currentFrame,1);assert.equal(block.bg.currentFrame,2);assert.equal(block.alpha,1);
});

function renderedAlpha({alpha=1,authoredAlpha,parentAlpha=1}){
 let result;
 const ctx={save(){},restore(){},transform(){},beginPath(){},rect(){},clip(){}},registry={font982(_ctx,_ch,color){result=Number(color.slice(color.lastIndexOf(',')+1,-1));}},tools=createCanvasTools({},registry,{},{});
 const child={symbolId:1399,currentFrame:1,text:'X',alpha,authoredAlpha},parent={symbolId:1400,childrenByDepth:new Map([[1,child]])};
 tools.setRoot(parent);tools.enterSprite(parent.symbolId,0);
 const source= new tools.cxform(0,0,0,0,255,255,255,255*parentAlpha).merge(new tools.sourceCxform(0,0,0,0,256,256,256,72));
 tools.place('text1399',{},ctx,[.05,0,0,.05,0,0],source,1,0,0,0);tools.leaveSprite();return result;
}

test('explicit card alpha replaces its authored dimming and preserves the parent HUD fade',()=>{
 assert.equal(renderedAlpha({alpha:1,authoredAlpha:72/256}),1);
 assert.equal(renderedAlpha({alpha:.5,authoredAlpha:72/256}),.5);
 assert.equal(renderedAlpha({alpha:1,authoredAlpha:72/256,parentAlpha:.3}),.3);
 assert.equal(renderedAlpha({alpha:.5,authoredAlpha:72/256,parentAlpha:.3}),.15);
 assert.equal(renderedAlpha({alpha:1}),72/256,'an untouched movie must retain its authored transparency');
});
