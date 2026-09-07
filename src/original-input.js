import {StoryClip} from './story-data-clip.js';
import {createOriginalRenderer} from './original-story-ui.js';
import {potionWhich} from './original-hud.js';
const inside=(p,b)=>p.x>=b[0]&&p.y>=b[1]&&p.x<=b[2]&&p.y<=b[3];
const overlap=(a,b)=>a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];

/** screen_Level input: source stage coordinates, immediate drag, original keys. */
export function installOriginalInput(app){
 const keys=new Set();let pan=null,carry=0;const rendererCache=new Map();
 const point=event=>{const r=document.querySelector('#flash-frame').getBoundingClientRect();return {x:(event.clientX-r.left)*800/r.width,y:(event.clientY-r.top)*480/r.height};};
 const playable=()=>app.scene?.ready&&app.battle?.state==='running'&&!app.isModalOpen&&!app.activeDrag;
 const canvas=()=>{let c=document.querySelector('#flash-drag canvas');if(!c){c=document.createElement('canvas');c.width=800;c.height=480;document.querySelector('#flash-drag').append(c);}return c;};
 function renderDrag(){
  const drag=app.activeDrag,c=canvas(),ctx=c.getContext('2d');ctx.clearRect(0,0,800,480);if(!drag?.clip)return;
  if(drag.kind==='ball'&&drag.target){const p=app.scene.worldToStage(drag.target);app.scene.nativeView?.drawFighterTo(ctx,drag.target,p.x,p.y);}
  drag.renderer?.render(drag.clip,{clear:false});
 }
 function moveDrag(event){
  const drag=app.activeDrag;if(!drag)return;if(event){drag.pointer=point(event);event.preventDefault?.();}
  const p={...drag.pointer},scene=app.scene,b=drag.battle;
  if(drag.kind==='tower'){
   const world=scene.stageToWorld(p);drag.tower.x=world.x;drag.tower.y=world.y-drag.offset;
   drag.spots=b.towerDragSpots(drag.uid);scene.render();return;
  }
  p.y-=drag.offset;drag.clip.x=p.x;drag.clip.y=p.y;const previousTarget=drag.target;drag.target=null;
  if(drag.kind==='ball'){
   const world=scene.stageToWorld(p);
   drag.target=b.enemies.find(e=>{if(!b.canCapture(e))return false;const anchor=scene.worldToStage(e),testPoint=e===previousTarget?{x:e.x+p.x-anchor.x,y:e.y+p.y-anchor.y}:world;return b.moveRuntime.captureHit(e,testPoint);});
   drag.clip.gotoAndStop(drag.target?2:1);scene.captureUid=drag.target?.uid;scene.render();
  }else{
   const world=scene.stageToWorld(p);
   drag.target=b.towers.find(t=>t.placed&&t.alive&&!t.npc&&t.hp<t.maxHp&&b.moveRuntime.potionCollision(t,{...world,scale:1/scene.cameras.main.zoom,which:potionWhich(b.save)}));drag.clip.alpha=drag.target?1:.5;
  }
  renderDrag();
 }
 function endDrag(event,cancel=false){
  const drag=app.activeDrag;if(!drag)return;if(event&&!cancel)moveDrag(event);
  app.activeDrag=null;app.scene.captureUid=null;document.querySelector('#flash-frame').classList.remove('original-dragging');canvas().getContext('2d').clearRect(0,0,800,480);
  if(drag.battle===app.battle){
   if(drag.kind==='tower')drag.battle.endTowerDrag(drag.uid,!cancel&&drag.spots?.length===1?drag.spots[0].index:null);
   else{
    let captured=false;
    if(!cancel&&drag.target){if(drag.kind==='ball')captured=drag.battle.capture(drag.target.uid).ok;else drag.battle.usePotion(drag.target.uid);}
    if(!captured&&drag.battle.state==='paused')drag.battle.state='running';
   }
  }
  app.renderAll();app.scene?.render();
 }
 app.cancelOriginalDrag=()=>endDrag(null,true);
 app.partyPointerDown=(event,uid)=>{
  if(!playable())return;const b=app.battle;
  if(b.level.mode==='invasion'&&!b.canPlace){
   const actor=b.enemies.find(t=>t.partyUid===uid&&t.alive);if(actor)app.openBattlePokemon(actor);else {b.launch?.(uid,document.querySelector('#path-select').value||['p','2','3','4'].filter(key=>key in b.level.paths)[0]);app.renderAll();}return;
  }
  const t=b.towers.find(t=>t.uid===uid&&t.placed);if(t){app.openBattlePokemon(t);return;}
  app.beginOriginalTowerDrag(uid,event);
 };
 app.beginOriginalTowerDrag=(uid,event)=>{
  if(!playable())return false;const drag=app.battle.beginTowerDrag(uid);if(!drag)return false;
  app.selectedUid=uid;keys.clear();pan=null;app.activeDrag={...drag,kind:'tower',battle:app.battle,pointer:point(event),offset:event.pointerType==='touch'?65:0};
  document.querySelector('#flash-frame').classList.add('original-dragging');moveDrag(event);app.renderAll();return true;
 };
 app.beginOriginalItemDrag=(kind,event)=>{
  if(!playable()||app.battle.level.mode==='invasion'||app.battle.isMultiplayer||kind==='potion'&&app.battle.potions<=0)return;
  const symbol=kind==='ball'?'gfx_pokeball':'gfx_potion_drag'+(['','_2','_3'][potionWhich(app.battle.save)-1]);
  const clip=new StoryClip(app.data.timelines,symbol);clip.gotoAndStop(1);keys.clear();pan=null;
  const drag={kind,battle:app.battle,clip,pointer:point(event),offset:event.pointerType==='touch'?100:0};app.activeDrag=drag;app.battle.state='paused';
  document.querySelector('#flash-frame').classList.add('original-dragging');
  if(!rendererCache.has(symbol))rendererCache.set(symbol,createOriginalRenderer(canvas(),symbol));rendererCache.get(symbol).then(renderer=>{drag.renderer=renderer;if(app.activeDrag===drag)renderDrag();});moveDrag(event);app.renderAll();
 };
 document.querySelector('#game').addEventListener('pointerdown',event=>{
  if(event.button!==0||!playable())return;const p=point(event),world=app.scene.stageToWorld(p),b=app.battle;
  if(b.level.mode!=='invasion'||b.canPlace){const t=b.towers.find(t=>t.placed&&t.alive&&!t.npc&&Math.abs(t.x-world.x)<=25&&Math.abs(t.y-world.y)<=25);if(t){app.beginOriginalTowerDrag(t.uid,event);return;}}
  pan={pointer:p,x:app.scene.sourceX,y:app.scene.sourceY};event.preventDefault();
 });
 document.addEventListener('pointermove',event=>{if(app.activeDrag)moveDrag(event);else if(pan){const p=point(event);app.scene.moveSourceMap(pan.x+p.x-pan.pointer.x,pan.y+p.y-pan.pointer.y);event.preventDefault();}},{passive:false});
 document.addEventListener('pointerup',event=>{pan=null;endDrag(event);});document.addEventListener('pointercancel',()=>{pan=null;endDrag(null,true);});
 window.addEventListener('blur',()=>{keys.clear();pan=null;endDrag(null,true);});
 window.addEventListener('keyup',event=>keys.delete(event.code));
 window.addEventListener('keydown',event=>{
  if(app.isModalOpen||app.activeDrag||!app.scene?.ready||!['running','paused'].includes(app.battle.state)||['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))return;
  const key=event.key.toLowerCase();if(/^[1-4]$/.test(key)){app.save.settings.speed=Number(key);app.store();app.renderHUD();event.preventDefault();}
  const zoom={'0':1,'9':.75,'8':.5,'7':.25};if(key in zoom){app.scene.zoomTo(zoom[key]);event.preventDefault();}
  if(['Escape','Space','KeyP'].includes(event.code)){if(!event.repeat)app.play();event.preventDefault();}
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyW','KeyA','KeyS','KeyD'].includes(event.code)){keys.add(event.code);event.preventDefault();}
 });
 app.tickOriginalInput=delta=>{
  if(app.isModalOpen){keys.clear();pan=null;return;}carry+=Math.min(delta,250);
  while(carry>=1000/21){carry-=1000/21;const scene=app.scene,drag=app.activeDrag,step=Math.trunc(20/app.save.settings.speed)*app.save.settings.speed;let dx=0,dy=0;
   if(drag){const p=drag.pointer;if(!(drag.kind==='ball'&&drag.target)){if(p.x<=60)dx=step;else if(p.x>=(drag.kind==='tower'?720:750))dx=-step;if(p.y<=60)dy=step;else if(p.y>=420)dy=-step;}}
   else if(app.battle.state==='running'){if(keys.has('ArrowLeft')||keys.has('KeyA'))dx=step;if(keys.has('ArrowRight')||keys.has('KeyD'))dx=-step;if(keys.has('ArrowUp')||keys.has('KeyW'))dy=step;if(keys.has('ArrowDown')||keys.has('KeyS'))dy=-step;}
   if(dx||dy){scene.moveSourceMap(scene.sourceX+dx,scene.sourceY+dy);if(drag)moveDrag();}
  }
 };
}
