import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export function syncCanvasHelpers({check=false}={}){
const runtime=path.join(root,'public/assets/story/canvas-tools.js');
const names=['cache','dynamic-text','finish-root','placement'];
const sources=Object.fromEntries(names.map(name=>[name,fs.readFileSync(path.join(root,`tools/canvas/${name}.js`),'utf8').trimEnd()]));
const block=name=>`// BEGIN maintained Canvas ${name}\n${sources[name]}\n// END maintained Canvas ${name}`;
let generated=fs.readFileSync(runtime,'utf8');
for(const name of names){
 const start=`// BEGIN maintained Canvas ${name}`,end=`// END maintained Canvas ${name}`;
 const a=generated.indexOf(start),b=generated.indexOf(end,a);
 if(a<0||b<0)throw new Error(`Missing maintained section: ${name}`);
 generated=generated.slice(0,a)+block(name)+generated.slice(b+end.length);
}
if((generated.match(/var parts = sourcePathParts\(p, doStroke\);/g)??[]).length!==2)throw new Error('Both JPEXS path helpers must use stroke-safe sourcePathParts');
if(check){
 if(generated!==fs.readFileSync(runtime,'utf8'))throw new Error('Canvas helper sources differ: run node tools/sync-canvas-helpers.mjs');
}else{fs.writeFileSync(runtime,generated);}
return generated;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const check=process.argv.includes('--check');syncCanvasHelpers({check});console.log(check?'Canvas helper sources match the runtime.':'Canvas helper runtime synchronized.');
}
