/** CPU-only helper benchmark; real Canvas pixel/timing comparisons use the
 * separate benchmark-canvas-browser.mjs harness. No app data is written. */
import fs from 'node:fs';
import {performance} from 'node:perf_hooks';
import {createCanvasTools,clearCanvasCaches,canvasCacheStats} from '../public/assets/story/canvas-tools.js';
import {createCanvasTools as before} from '../tests/fixtures/canvas-tools-v1.1.1.js';
import {recordingContext,renderText} from '../tests/canvas-test-context.js';
import {SOURCE_TEXT} from '../public/assets/story/text-data.js';
const canvas={width:800,height:480};
const module=fs.readFileSync(new URL('../public/assets/story/modules/symbol-1401.js',import.meta.url),'utf8');
const paths=[...module.matchAll(/pathData\s*=\s*"([^"]+)"/g)].map(m=>m[1]).filter(p=>p.length>100).slice(0,32);
if(!paths.length)throw new Error('No recovered glyph paths found');
const timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url),'utf8'));
const fixture=Object.values(timelines.symbols).flatMap(s=>Object.values(s.namedFrames??{}).map(children=>({s,children}))).sort((a,b)=>b.children.length-a.children.length)[0];
function pathRun(factory){const ctx=recordingContext(false),tools=factory(canvas,{}, {},{});return ()=>{for(let n=0;n<1000;n++)for(const path of paths)tools.drawPath(ctx,path,false,'NORMAL');};}
function textRun(factory){const ctx=recordingContext(false),id=Object.keys(SOURCE_TEXT.fields).find(id=>SOURCE_TEXT.fields[id].wordWrap),field=SOURCE_TEXT.fields[id],font=field.renderFontId??field.fontId,tools=factory(canvas,{['font'+font]:()=>{}},{},{});return ()=>{for(let n=0;n<5000;n++)renderText(tools,canvas,ctx,id,{text:'Pokémon 123\nLong wrapping words A B. Heal +50 XP! More words for the next line.',textColor:n%2?0x009933:0x663399});};}
function placementRun(factory){const ctx=recordingContext(false),registry={},tools=factory(canvas,registry,{},{}),identity=new tools.cxform(0,0,0,0,255,255,255,255);const root={symbolId:-1,childrenByDepth:new Map(fixture.children.map((entry,i)=>[i,{symbolId:entry.id,currentFrame:1,x:entry.matrix[4],y:entry.matrix[5]}]))};for(const entry of fixture.children)registry['shape'+entry.id]=()=>{};return ()=>{for(let n=0;n<2000;n++){tools.setRoot(root);tools.enterSprite(-1,0);for(const entry of fixture.children)tools.place('shape'+entry.id,canvas,ctx,[1,0,0,1,entry.matrix[4],entry.matrix[5]],identity,0,0,0,0);tools.leaveSprite();}};}
const report={description:'Node CPU helper microbenchmarks using no-op Canvas operations; medians of 7 alternating-order warm rounds. Browser benchmark measures actual pixels/drawing separately.',fixtures:{paths:paths.length,pathCharacters:paths.reduce((n,p)=>n+p.length,0),placementRoot:fixture.s.names?.[0]??fixture.s.id,placementChildren:fixture.children.length},results:{}};
for(const [name,setup]of Object.entries({paths:pathRun,text:textRun,placement:placementRun})){
 clearCanvasCaches();const runs={before:setup(before),after:setup(createCanvasTools)},samples={before:[],after:[]};runs.before();runs.after();
 for(let round=0;round<7;round++)for(const label of round%2?['after','before']:['before','after']){const start=performance.now();runs[label]();samples[label].push(performance.now()-start);}
 const median=values=>[...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];const prior=median(samples.before),current=median(samples.after);
 report.results[name]={beforeMs:prior,afterMs:current,reductionPercent:(prior-current)/prior*100,samples,cache:canvasCacheStats()};
}
if(process.argv[2])fs.writeFileSync(process.argv[2],JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
