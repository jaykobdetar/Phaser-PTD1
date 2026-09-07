/** Build-time, restricted AS3 compiler for the supplied PTD decompiler output.
 * Run: node src/move-compile-source.js /absolute/path/to/scripts/code
 * The generated browser module contains ordinary static functions: no eval.
 * It preserves class identity, virtual dispatch, private member namespaces,
 * constructor-before-super ordering, int/uint assignments and return coercion.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {createHash} from 'node:crypto';

const here=path.dirname(fileURLToPath(import.meta.url));
const sourceDir=process.argv[2];
if(!sourceDir) throw new Error('Pass the original scripts/code directory.');
const source=new Map(fs.readdirSync(sourceDir).filter(n=>n.endsWith('.as')).map(n=>[n.slice(0,-3),fs.readFileSync(path.join(sourceDir,n),'utf8').replaceAll('\r','')]));
const tokenPattern=/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\/|[A-Za-z_$][\w$]*|[^A-Za-z_$]/g;
function block(text,start,open='{',close='}') {
 let depth=0,quote=null,escape=false;
 for(let i=start;i<text.length;i++){
  const c=text[i];
  if(quote){if(escape)escape=false;else if(c==='\\')escape=true;else if(c===quote)quote=null;continue;}
  if(c==='"'||c==="'"){quote=c;continue;}
  if(c===open)depth++;else if(c===close&&!--depth)return {body:text.slice(start+1,i),end:i+1};
 }
 throw new Error('Unbalanced source block');
}
function parse(name,text){
 const head=text.match(/\bclass\s+(\w+)(?:\s+extends\s+(\w+))?/);
 const result={name,parent:head?.[2]??null,fields:[],methods:{},source:`code/${name}.as`};
 const re=/(?:override\s+)?(public|private|internal|protected)\s+(static\s+)?(?:function\s+(\w+)\s*\(([^)]*)\)\s*(?::\s*([\w.<>]+))?\s*\{|(var|const)\s+(\w+)\s*:\s*([\w.<>]+)\s*(=)?)/g;
 let m;
 while((m=re.exec(text))){
  const [,access,stat,method,params,returnType,,field,type,equals]=m;
  if(method){const b=block(text,re.lastIndex-1);result.methods[method]={access,static:!!stat,params,returnType:returnType??null,body:b.body};re.lastIndex=b.end;}
  else {
   const begin=re.lastIndex;let end=begin;
   if(equals){let q=null,d=0;for(;end<text.length;end++){const c=text[end];if(q){if(c==='\\')end++;else if(c===q)q=null;}else if(c==='"'||c==="'")q=c;else if(c==='{'||c==='['||c==='(')d++;else if(c==='}'||c===']'||c===')')d--;else if(c===';'&&!d)break;}}
   result.fields.push({name:field,type,access,static:!!stat,value:equals?text.slice(begin,end).trim():null});
   re.lastIndex=equals?end+1:begin;
  }
 }
 return result;
}
const all=new Map([...source].map(([n,s])=>[n,parse(n,s)]));
const moveMap=Object.fromEntries([...source.get('finder_Attacks').matchAll(/(\d+)\s*:\s*(class_\d+)/g)].map(m=>[m[1],m[2]]));
const profileDefaults=Object.fromEntries(all.get('profile_poke').fields.filter(f=>!f.static).map(f=>[f.name,f.value==null?({int:0,uint:0,Number:null,Boolean:false}[f.type]??null):JSON.parse(f.value)]));
const chosen=new Set([...Object.values(moveMap),'attack','effects','path_effect','ability','ability_Utility','class_14','class_92','class_93']);
const permittedRoot=new Set(['attack','effects','path_effect','ability','class_14']);
function isBehavior(n){let d=all.get(n),seen=new Set();while(d&&!seen.has(d.name)){if(permittedRoot.has(d.name))return true;seen.add(d.name);d=all.get(d.parent);}return false;}
for(let changed=true;changed;){changed=false;for(const name of [...chosen]){
 for(const dep of source.get(name).match(/\b(?:class_\d+|attack|effects|path_effect|ability)\b/g)??[]){if(isBehavior(dep)&&!chosen.has(dep)){chosen.add(dep);changed=true;}}
 const p=all.get(name).parent;if(p&&isBehavior(p)&&!chosen.has(p)){chosen.add(p);changed=true;}
}}
const actorMethods=['receive_Experience','reset_Attack','set_Speed','new_Hit_Me','check_If_He_Hit_Me','method_281','method_90','add_Effect','remove_Effect','end_All_Effects','method_440','take_Healing','take_Damage','method_76','checkEnemy','method_169','method_178','method_151','method_405','method_255','method_97','method_92','check_Effects','method_183','check_Path_Effects','method_87','method_401'];
const actor=all.get('poke');actor.methods=Object.fromEntries(actorMethods.map(n=>[n,actor.methods[n]]));actor.parent='Sprite';chosen.add('poke');
const tower=all.get('poke_Tower');tower.methods=Object.fromEntries(['reset_Attack','checkEnemy','method_292','set_Direction'].map(n=>[n,tower.methods[n]]));chosen.add('poke_Tower');
const displayMembers=new Set('x y width height scaleX scaleY rotation alpha visible parent transform addChild addChildAt removeChild removeChildAt contains getChildAt getChildIndex numChildren hitTestObject localToGlobal globalToLocal'.split(' '));
const external=new Set('Math Number String Boolean Array Object NaN Infinity undefined int uint trace Point Color GlowFilter Sprite MovieClip TextFormat Sound SoundChannel SoundTransform sound_manager finder_Graphic finder_Poke_Info finder_Attacks finder_Exp screen_Level profile_poke spot candy class_1 main'.split(' '));
const symbols=new Set();const globals=new Set();
for(const name of chosen)for(const m of source.get(name).matchAll(/\bnew\s+(\w+)\s*\(/g))if(!chosen.has(m[1])&&!external.has(m[1])&&!/^_loc\d+_$/.test(m[1]))symbols.add(m[1]);
function chain(name){const out=[];while(all.has(name)&&!out.includes(name)){out.push(name);name=all.get(name).parent;}return out;}
function bindings(def){
 const map=new Map([...displayMembers].map(n=>[n,'this.'+n]));
 for(const n of chain(def.name).reverse()){
  const d=all.get(n);for(const f of d.fields){if(n!==def.name&&f.access==='private')continue;const key=f.access==='private'?`$${n}$${f.name}`:f.name;map.set(f.name,f.static?`C.${n}.${key}`:`this.${key}`);}
  for(const [name,m]of Object.entries(d.methods)){if(name===n||n!==def.name&&m.access==='private')continue;const key=m.access==='private'?`$${n}$${name}`:name;map.set(name,m.static?`C.${n}.${key}`:`this.${key}`);}
 }
 return map;
}
function qualify(body,def,locals){
 const bind=bindings(def);let out='';
 for(const match of body.matchAll(tokenPattern)){
  let t=match[0];const before=body.slice(0,match.index).trimEnd().at(-1),after=body.slice(match.index+t.length).trimStart()[0];
  if(/^[A-Za-z_$][\w$]*$/.test(t)){
   if(before==='.'&&bind.has(t)&&bind.get(t).includes('$')&&/\bthis\s*\.\s*$/.test(body.slice(0,match.index)))t=bind.get(t).slice(5);
   else if(before!=='.'&&!(after===':'&&(before==='{'||before===','))&&!locals.has(t)){
    if(bind.has(t))t=bind.get(t);
    else if(chosen.has(t))t='C.'+t;
    else if(external.has(t)){globals.add(t);t='E.'+t;}
    else if((symbols.has(t)||source.has(t))&&!/^(?:param\d+|_loc\d+_)$/.test(t)){symbols.add(t);t='S.'+t;}
   }
  }
  out+=t;
 }
 return out;
}
function transform(body,def,params='',returnType=null){
 const typed=[...params.matchAll(/(\w+)\s*:\s*([\w.<>]+)/g),...body.matchAll(/\bvar\s+(\w+)\s*:\s*([\w.<>]+)/g)];
 const ints=new Map(typed.filter(m=>m[2]==='int'||m[2]==='uint').map(m=>[m[1],m[2]]));
 const locals=new Set([...params.split(',').map(p=>p.trim().match(/^(\w+)/)?.[1]),...[...body.matchAll(/\bvar\s+(\w+)/g)].map(m=>m[1])]);
 body=body.replace(/for\s+each\s*\(var\s+(\w+)(?:\s*:\s*[\w.<>]+)?\s+in\s+([^)]*)\)/g,'for (var $1 of $2)');
 body=body.replace(/\bvar\s+(\w+)\s*:\s*[\w.<>]+/g,'var $1');
 body=body.replace(/\b([\w.]+)\.sortOn\s*\(/g,'E.sortOn($1,');
 body=body.replace(/new\s+Vector\.<[^>]+>\s*\(/g,'new Array(');
 body=body.replace(/\b([\w.]+(?:\([^;]*?\))?)\s+as\s+(\w+)/g,'E.as($1,$2)');
 body=body.replace(/\bis\s+(\w+)/g,'instanceof $1');
 body=body.replace(/\bsuper\.(\w+)\s*\(/g,(_m,n)=>`C.${def.parent}.prototype.${n}.call(this,`);
 body=body.replace(/\bsuper\s*\(/g,()=>def.parent?`C.${def.parent}.__construct.call(this,`:'E.superBase.call(this,');
 body=body.replace(/\.call\(this,\s*\)/g,'.call(this)');
 // Decompiler emits semicolon-terminated assignments, without nested assignment
 // expressions. Coercion is required after compound assignment as well.
 for(const [name,type]of ints){
  const re=new RegExp('(?<![\\w.])('+name+')\\s*(=|\\+=|-=|\\*=|/=|%=|\\|=|&=|\\^=)\\s*(?!=)([^;]+);','g');
  body=body.replace(re,(_m,n,op,rhs)=>`${n} = E.${type}(${op==='='?'':n+' '+op.slice(0,-1)+' '}(${rhs}));`);
 }
 if(returnType==='int'||returnType==='uint')body=body.replace(/\breturn\s+([^;]+);/g,(_m,v)=>`return E.${returnType}(${v});`);
 body=qualify(body,def,locals);
 let paramText=params.replace(/:\s*[\w.<>]+/g,'');
 const paramCoerce=[...params.matchAll(/(\w+)\s*:\s*(int|uint)\b/g)].map(m=>`${m[1]}=E.${m[2]}(${m[1]});`).join('');
 return {body:paramCoerce+body,params:paramText};
}
function emitFunction(m,d){const x=transform(m.body,d,m.params,m.returnType);const code=`function(${x.params}){${x.body}\n}`;try{new vm.Script('('+code+')');}catch(e){throw new Error(`${d.name}: ${e.message}\n${code}`);}return code;}
const entries=[];const manifest={moves:{},classes:{},actorMethods};
for(const name of [...chosen].sort()){
 const def=all.get(name);const fields=def.fields.map(f=>{
  const key=f.access==='private'?`$${name}$${f.name}`:f.name;
  const initial=f.value==null?({int:'0',uint:'0',Number:'NaN',Boolean:'false'}[f.type]??'null'):f.value;
  const value=qualify(initial,def,new Set());
  return `{name:${JSON.stringify(key)},type:${JSON.stringify(f.type)},static:${f.static},init:function(){return (${value});}}`;
 });
 const methods=Object.entries(def.methods).filter(([n])=>n!==name).map(([n,m])=>`{name:${JSON.stringify(m.access==='private'?`$${name}$${n}`:n)},static:${m.static},run:${emitFunction(m,def)}}`);
 const constructor=def.methods[name]?emitFunction(def.methods[name],def):'function(){}';
 entries.push(`${JSON.stringify(name)}:{parent:${JSON.stringify(def.parent)},fields:[${fields}],construct:${constructor},methods:[${methods}]}`);
 manifest.classes[name]={source:def.source,sha256:createHash('sha256').update(source.get(name)).digest('hex'),parent:def.parent,methods:Object.keys(def.methods),fields:def.fields.map(f=>({name:f.name,type:f.type,static:f.static,access:f.access}))};
}
for(const [id,name]of Object.entries(moveMap))manifest.moves[id]={sourceClass:name,inheritance:chain(name),source:`code/${name}.as`};
const output=`/* Generated from the supplied Flash game's ActionScript. See move-compile-source.js. */\nexport const SOURCE_MOVE_CLASSES=${JSON.stringify(moveMap)};\nexport const SOURCE_PROFILE_DEFAULTS=${JSON.stringify(profileDefaults)};\nexport const SOURCE_SYMBOLS=${JSON.stringify([...symbols].sort())};\nexport const SOURCE_GLOBALS=${JSON.stringify([...globals].sort())};\nexport const SOURCE_MANIFEST=${JSON.stringify(manifest)};\nexport function sourceDefinitions(C,E,S){return {\n${entries.join(',\n')}\n};}\n`;
new vm.Script(output.replace(/^export /gm,''));
fs.writeFileSync(path.join(here,'move-source-generated.js'),output);
console.log(JSON.stringify({moves:Object.keys(moveMap).length,behaviorClasses:chosen.size,symbols:symbols.size,globals:[...globals].sort(),bytes:output.length}));
