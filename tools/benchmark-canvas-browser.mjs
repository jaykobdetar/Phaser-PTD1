/** Compare this checkout against a frozen release served on another local port.
 * Usage: node tools/benchmark-canvas-browser.mjs BASELINE_ORIGIN CURRENT_ORIGIN REPORT
 * Uses installed playwright/playwright-core, or PTD_PLAYWRIGHT_MODULE. Optionally
 * set PTD_BROWSER_EXECUTABLE. One browser page runs at a time; modules are loaded
 * in batches to bound memory. Neither app startup nor save endpoints are used. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const [baselineOrigin,currentOrigin,reportPath='canvas-optimization-report.json']=process.argv.slice(2);
if(!baselineOrigin||!currentOrigin)throw new Error('Supply baseline origin, current origin, and optional report path');
const require=createRequire(import.meta.url);let module=process.env.PTD_PLAYWRIGHT_MODULE;
if(!module)for(const name of ['playwright','playwright-core']){try{module=require.resolve(name);break;}catch{}}
if(!module)throw new Error('Install Playwright or set PTD_PLAYWRIGHT_MODULE');
const lib=await import(module.startsWith('file:')?module:pathToFileURL(resolve(module)).href);
const browser=await (lib.chromium??lib.default.chromium).launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage'],...(process.env.PTD_BROWSER_EXECUTABLE?{executablePath:process.env.PTD_BROWSER_EXECUTABLE}:{})});
const report={description:'Exact SHA-256 of unscaled 800×480 Canvas RGBA; every root and source stop/action/end frame, plus changed dynamic text. No app state or saves.',baselineOrigin,currentOrigin,runs:[],differences:[],errors:[]};
async function pageAt(origin){
 const page=await browser.newPage({viewport:{width:800,height:480}});
 page.on('pageerror',e=>report.errors.push({origin,error:e.message}));
 await page.route('**/__canvas_audit__',route=>route.fulfill({contentType:'text/html',body:'<!doctype html><title>Canvas parity audit</title>'}));
 await page.goto(new URL('/__canvas_audit__',origin).href);
 return page;
}
try{
 for(const origin of [baselineOrigin,currentOrigin]){
  let page=await pageAt(origin);
  const names=await page.evaluate(async()=>Object.keys((await fetch('/assets/story/manifest.json').then(r=>r.json())).symbols));
  await page.close();const run={origin,roots:names.length,cases:[],drawMs:0,warmDrawMs:0,cacheBatches:[]};report.runs.push(run);
  for(let start=0;start<names.length;start+=24){
   page=await pageAt(origin);
   const result=await page.evaluate(async names=>{
    const {StoryClip}=await import('/src/story-data-clip.js');
    const [timelines,manifest,helpers]=await Promise.all([fetch('/data/story-timelines.json').then(r=>r.json()),fetch('/assets/story/manifest.json').then(r=>r.json()),import('/assets/story/canvas-tools.js')]);
    helpers.clearCanvasCaches?.();
    const canvas=document.createElement('canvas');canvas.width=800;canvas.height=480;
    const ctx=canvas.getContext('2d',{willReadFrequently:true}),cases=[];let drawMs=0,warmDrawMs=0;
    const digest=async()=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',ctx.getImageData(0,0,800,480).data)),n=>n.toString(16).padStart(2,'0')).join('');
    for(const name of names){
     const spec=manifest.symbols[name],renderer=await (await import('/'+spec.module)).createRenderer(canvas),meta=timelines.symbols[spec.id];
     const frames=[...new Set([1,spec.frames,...Object.values(meta.labels??{}),...Object.keys(meta.actions??{}).map(Number)])];
     async function sample(clip,kind){let begin=performance.now();renderer.render(clip);drawMs+=performance.now()-begin;const hash=await digest();begin=performance.now();renderer.render(clip);warmDrawMs+=performance.now()-begin;const warmHash=await digest();cases.push({name,kind,hash,...(hash===warmHash?{}:{warmHash})});}
     for(const frame of frames){const clip=new StoryClip(timelines,spec.id);clip.gotoAndStop(frame);await sample(clip,`frame:${frame}`);}
     const clip=new StoryClip(timelines,spec.id);let changed=0;
     const visit=node=>{if(node.text!==undefined){node.text='Pokémon 123\r\nHeal +50 XP! Long wrapping words';node.textColor=changed%2?0x009933:0x663399;node.textFormat={size:changed%2?10.5:16,color:0x990000};changed++;}for(const child of node.childrenByDepth.values())visit(child);};
     visit(clip);if(changed){await sample(clip,'dynamic');const recolor=node=>{if(node.text!==undefined){node.textColor=0xcc3300;node.alpha=0.75;}for(const child of node.childrenByDepth.values())recolor(child);};recolor(clip);await sample(clip,'dynamic-recolor');}
    }
    return {cases,drawMs,warmDrawMs,cache:helpers.canvasCacheStats?.()??null};
   },names.slice(start,start+24));
   run.cases.push(...result.cases);run.drawMs+=result.drawMs;run.warmDrawMs+=result.warmDrawMs;run.cacheBatches.push(result.cache);
   await page.close();console.log(`${origin}: ${Math.min(start+24,names.length)}/${names.length} roots, ${run.cases.length} pixel cases`);
  }
 }
 const [before,after]=report.runs;assert.equal(after.roots,before.roots);
 const expected=new Map(before.cases.map(c=>[`${c.name}/${c.kind}`,c]));
 for(const actual of after.cases){const key=`${actual.name}/${actual.kind}`,prior=expected.get(key);if(!prior||prior.hash!==actual.hash)report.differences.push({key,before:prior?.hash,after:actual.hash});expected.delete(key);}
 for(const key of expected.keys())report.differences.push({key,error:'Missing current case'});
 report.unstable=report.runs.flatMap(run=>run.cases.filter(c=>c.warmHash).map(c=>({origin:run.origin,...c})));
 report.summary={roots:after.roots,cases:after.cases.length,differences:report.differences.length,unstable:report.unstable.length,beforeDrawMs:before.drawMs,afterDrawMs:after.drawMs,beforeWarmDrawMs:before.warmDrawMs,afterWarmDrawMs:after.warmDrawMs};
 assert.equal(report.differences.length,0,'Canvas pixels differ');assert.equal(report.unstable.length,0,'Cold and warm pixels differ');assert.deepEqual(report.errors,[]);
}finally{fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report.summary??report.errors,null,2));await browser.close();}
