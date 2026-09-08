import test from 'node:test';
import assert from 'node:assert/strict';
import {syncCanvasHelpers} from '../tools/sync-canvas-helpers.mjs';
import {createCanvasTools,clearCanvasCaches,canvasCacheStats} from '../public/assets/story/canvas-tools.js';
import {createCanvasTools as before} from './fixtures/canvas-tools-v1.1.1.js';
import {SOURCE_TEXT} from '../public/assets/story/text-data.js';
import {recordingContext,renderText} from './canvas-test-context.js';
const canvas={width:800,height:480};

test('cached paths retain exact source operations after transformed strokes and morph ratios',()=>{
 clearCanvasCaches();const path='M -0.05 1.25 L 20 30 Q 5 -7 41.75 23.5 Z',morph='M -0.05 4 1.25 6 L 20 9 30 8 Q 5 12 -7 -4 41.75 33 23.5 32';
 for(const matrix of [[1,0,0,1,0,0],[0.05,0.01,-0.02,0.08,33.125,-13.875],[-0.1,0,0,-0.2,3,7]])for(const mode of ['NONE','NORMAL','VERTICAL','HORIZONTAL']){
  const traces=[];for(const factory of [before,createCanvasTools]){const ctx=recordingContext(),tools=factory(canvas,{}, {},{});ctx._matrix=matrix.slice();
   for(const stroke of [false,true,false,true,false]){tools.drawPath(ctx,path,stroke,mode);for(const ratio of [0,1,12345.5,65535])tools.drawMorphPath(ctx,morph,ratio,stroke,mode);}
   traces.push(ctx.trace);
  }assert.deepEqual(traces[1],traces[0],`${matrix}/${mode}`);
 }
 assert.equal(canvasCacheStats().paths.entries,2);assert.ok(canvasCacheStats().paths.hits>100);
});

test('indexed placement retains nearest ties, hidden consumption, nesting and next-render source mutations',()=>{
 function run(factory){const ctx=recordingContext(),events=[],registry={},tools=factory(canvas,registry,{},{}),identity=new tools.cxform(0,0,0,0,255,255,255,255);
  registry.shape7=(c,ct,frame)=>events.push([7,frame,c._matrix.slice(),ct.a_mult]);registry.shape9=(c,ct,frame)=>events.push([9,frame,c._matrix.slice(),ct.a_mult]);
  const children=[{symbolId:7,x:10,y:5,currentFrame:2},{symbolId:9,x:7,y:5,currentFrame:5},{symbolId:7,x:0,y:5,currentFrame:3,visible:false},{symbolId:7,x:10,y:5,currentFrame:4,alpha:0.4,authoredAlpha:0.8}];
  const root={symbolId:1,childrenByDepth:new Map(children.map((c,i)=>[i,c]))};
  registry.sprite2=()=>{tools.enterSprite(2,0);for(let i=0;i<3;i++)tools.place('shape7',canvas,ctx,[1,0,0,1,100,100],identity,0,0,0,0);tools.leaveSprite();};
  const render=()=>{tools.setRoot(root);tools.enterSprite(1,0);for(const id of [7,9,7,7,2])tools.place(id===2?'sprite2':'shape'+id,canvas,ctx,[1,0,0,1,5,5],identity,0,0,0,0);tools.leaveSprite();};
  root.childrenByDepth.set(10,{symbolId:2,currentFrame:1,x:5,y:5,children:children.map(c=>({...c,visible:true}))});render();
  root.childrenByDepth.delete(0);children[2].visible=true;children[2].x=5;root.childrenByDepth.set(12,{symbolId:7,x:6,y:5,currentFrame:8});render();
  return {events,trace:ctx.trace};
 }assert.deepEqual(run(createCanvasTools),run(before));
});

test('cached layouts preserve every source text field and live color, size, alpha and transform changes',()=>{
 clearCanvasCaches();const pairs=[before,createCanvasTools].map(factory=>{const ctx=recordingContext(),registry={};for(const id of Object.keys(SOURCE_TEXT.fonts))registry['font'+id]=(c,ch,color)=>c.trace.push(['glyph',Number(id),ch,color]);for(const id of Object.keys(SOURCE_TEXT.fields))registry['text'+id]=c=>c.trace.push(['originalText',id]);return {ctx,tools:factory(canvas,registry,{},{})};});
 for(const [id,field]of Object.entries(SOURCE_TEXT.fields)){
  for(const properties of [{text:'Pokémon 123\r\nLong wrapping words A B',textColor:0x009933},{text:'Pokémon 123\r\nLong wrapping words A B',textFormat:{color:0xaa3300},alpha:0.25,x:1.5,y:-3},{text:'Pokémon 123\r\nLong wrapping words A B',textColor:0x3344aa,textFormat:{size:10.5},matrix:[1,0.03,-0.05,1,3,4]},{text:field.initialText.replace(/\r\n?/g,'\n').replace(/\n$/,'')}]){
   for(const pair of pairs){pair.ctx.trace.length=0;renderText(pair.tools,canvas,pair.ctx,id,properties,new pair.tools.cxform(1,2,3,0,254,230,219,201));}
   assert.deepEqual(pairs[1].ctx.trace,pairs[0].ctx.trace,`source field ${id}`);
  }
 }assert.ok(canvasCacheStats().text.hits>=Object.keys(SOURCE_TEXT.fields).length);assert.ok(canvasCacheStats().text.evictions>0);
});

test('shared path/text caches evict within both budgets and oversized entries remain uncached',()=>{
 clearCanvasCaches();const ctx=recordingContext(false),id=Object.keys(SOURCE_TEXT.fields)[0],fontId=SOURCE_TEXT.fields[id].renderFontId??SOURCE_TEXT.fields[id].fontId,tools=createCanvasTools(canvas,{['font'+fontId]:()=>{}},{},{});
 for(let i=0;i<2300;i++)tools.drawPath(ctx,`M ${i} 0 L 10 10 Z`,false);
 for(let i=0;i<600;i++)renderText(tools,canvas,ctx,id,{text:'value '+i});
 for(const cache of Object.values(canvasCacheStats())){assert.ok(cache.evictions>0);assert.ok(cache.entries<=cache.maxEntries);assert.ok(cache.estimatedBytes<=cache.maxBytes);}
 const prior=canvasCacheStats();tools.drawPath(ctx,'M 1 2 '+'L 3 4 '.repeat(50000),false);renderText(tools,canvas,ctx,id,{text:'a'.repeat(20000)});
 assert.equal(canvasCacheStats().paths.entries,prior.paths.entries);assert.equal(canvasCacheStats().text.entries,prior.text.entries);
 const other=createCanvasTools(canvas,{},{},{});other.drawPath(ctx,'M 2299 0 L 10 10 Z',false);assert.equal(canvasCacheStats().paths.hits,prior.paths.hits+1);
 clearCanvasCaches();assert.equal(canvasCacheStats().paths.entries,0);assert.equal(canvasCacheStats().text.entries,0);
});

test('project-local maintained helper sources exactly reproduce committed runtime sections',()=>{
 assert.doesNotThrow(()=>syncCanvasHelpers({check:true}));
});
