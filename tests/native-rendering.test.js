import test from 'node:test';
import assert from 'node:assert/strict';
import {NativeBattleView} from '../src/native-battle-view.js';
import {createMoveDisplay} from '../src/move-native-display.js';

function fixture(){
 const display=createMoveDisplay({symbols:{},byName:{}}),world=new display.Sprite(),runtime={world,tick:0};
 let uploads=0,draws=0;
 const view=Object.assign(Object.create(NativeBattleView.prototype),{app:{battle:{moveRuntime:runtime}},scene:{},artRevision:0,visualState:[],nextVisualState:[],canvas:{width:800,height:480},ctx:{setTransform(){},clearRect(){},translate(){}},texture:{refresh(){uploads++;}},x:0,y:0,draw(){draws++;}});
 const actor=new display.Sprite();actor.fighter={uid:'actor',team:'tower',npc:false};world.addChild(actor);
 const child=new display.Sprite();child.symbolId=10;actor.addChild(child);
 return{view,display,world,runtime,actor,child,get uploads(){return uploads;},get draws(){return draws;}};
}

test('native upload reuse detects same-tick interaction and nested source text changes',()=>{
 const f=fixture();f.view.render();assert.equal(f.uploads,1);
 for(let i=0;i<60;i++)f.view.render();assert.equal(f.uploads,1);
 const changes=[()=>{f.actor.x+=.25;},()=>{f.actor.alpha=.3;},()=>{f.child.rotation=19;},()=>{f.child.visible=false;},()=>{f.child.visible=true;},()=>{f.child.currentFrame=2;},()=>{f.child.text='MISS';},()=>{f.child.textColor=0xff9900;},()=>{f.child.textFormat={size:20};},()=>{f.child.textFormat.size=25;},()=>{f.child.transform.colorTransform={color:0x990000,amount:.6};},()=>{f.child.transform.colorTransform.amount=.2;},()=>{f.child.filters=[{kind:'glow',color:0xffffff,blurX:3}];},()=>{f.child.filters[0].blurX=8;},()=>{f.view.scene.pokemonCheckUid='other';},()=>{f.view.scene.captureUid='actor';}];
 for(const [i,change]of changes.entries()){change();f.view.render();assert.equal(f.uploads,i+2);f.view.render();assert.equal(f.uploads,i+2);}
 assert.equal(f.runtime.tick,0,'Input refreshes do not advance the source clock');
});

test('native upload reuse invalidates for source time, late artwork, tree order and empty world',()=>{
 const f=fixture(),second=new f.display.Sprite();second.x=11;f.world.addChild(second);f.view.render();
 f.runtime.tick++;f.view.render();assert.equal(f.uploads,2);
 f.view.artRevision++;f.view.render();assert.equal(f.uploads,3);
 f.world.removeChild(second);f.world.addChildAt(second,0);f.view.render();assert.equal(f.uploads,4);
 f.world.removeChild(f.actor);f.world.removeChild(second);f.view.render();assert.equal(f.uploads,5);
 f.view.render();assert.equal(f.uploads,5);
 assert(f.view.visualState.length<10);
});

test('native comparison buffers release removed graph values and retry an interrupted paint',()=>{
 const f=fixture();for(let i=0;i<2000;i++){const node=new f.display.Sprite();node.fighter={uid:'retired-'+i};f.world.addChild(node);}f.view.render();
 f.world.children.splice(1);f.view.render();f.view.render();
 assert(f.view.visualState.length<100);assert(f.view.nextVisualState.length<100);
 assert(!f.view.visualState.some(value=>typeof value==='object'&&value!==null),'Retired fighter objects must not be retained by comparison');
 f.actor.x++;const draw=f.view.draw;f.view.draw=()=>{throw Error('fixture paint failed');};assert.throws(()=>f.view.render(),/fixture paint failed/);
 const uploads=f.uploads;f.view.draw=draw;f.view.render();assert.equal(f.uploads,uploads+1);
});

test('tint canvases reuse dimensions with least-recently-used entry and retained-byte limits',()=>{
 const previous=globalThis.document;let created=0;globalThis.document={createElement(){created++;return{width:0,height:0};}};
 try{
  const view=Object.assign(Object.create(NativeBattleView.prototype),{tintCanvases:new Map(),tintBytes:0});
  const first=view.tintCanvasFor(32,32);view.tintCanvasFor(40,40);view.tintCanvasFor(48,48);view.tintCanvasFor(64,64);
  assert.equal(view.tintCanvasFor(32,32),first);assert.equal(created,4);
  view.tintCanvasFor(80,80);assert.equal(view.tintCanvases.size,4);assert(view.tintCanvases.has('32x32'));assert(!view.tintCanvases.has('40x40'));
  view.tintCanvasFor(500,500);assert(view.tintBytes<=1024*1024);assert(view.tintCanvases.size<=4);
  const keys=[...view.tintCanvases.keys()],bytes=view.tintBytes;const huge=view.tintCanvasFor(2048,2048);
  assert.equal(huge.width,2048);assert.deepEqual([...view.tintCanvases.keys()],keys);assert.equal(view.tintBytes,bytes);assert.equal(view.tintCanvas,null,'Oversized canvases must not be retained through the compatibility pointer');
 }finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});
