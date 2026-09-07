/** Render the live, original move display list into a Phaser CanvasTexture. */
export class NativeBattleView {
 constructor(scene,bounds){
  this.scene=scene;this.app=scene.app;this.entries=new Map();this.dead=false;
  const margin=260;this.x=bounds.sourceBounds.xMin-margin;this.y=bounds.sourceBounds.yMin-margin;
  this.key=`native-combat-${scene.game.getTime?.()??Date.now()}-${Math.random()}`;
  this.texture=scene.textures.createCanvas(this.key,bounds.width+margin*2,bounds.height+margin*2);
  this.canvas=this.texture.canvas;this.ctx=this.canvas.getContext('2d');
  this.image=scene.add.image(this.x,this.y,this.key).setOrigin(0).setDepth(6);
  this.ready=fetch('assets/story/manifest.json').then(r=>r.json()).then(m=>{this.manifest=m;this.byId=Object.fromEntries(Object.values(m.symbols).map(e=>[e.id,e]));return m.symbols.do_damageText?this.load(m.symbols.do_damageText.id):undefined;}).catch(error=>this.report(error));
 }
 report(error){if(!this.dead){console.error('Original artwork:',error);this.app.toast(`Original artwork: ${error.message}`);}}
 async load(id){
  if(this.entries.has(id)||!this.byId?.[id])return;
  const meta=this.byId[id],entry={meta,ready:false};this.entries.set(id,entry);
  try{const module=await import(/* @vite-ignore */ new URL(meta.module,document.baseURI).href);if(this.dead)return;
   const [x0,y0,x1,y1]=meta.bounds;entry.canvas=document.createElement('canvas');entry.canvas.width=Math.max(1,Math.ceil(x1-x0)+4);entry.canvas.height=Math.max(1,Math.ceil(y1-y0)+4);entry.renderer=await module.createRenderer(entry.canvas);entry.ready=true;
  }catch(error){entry.error=error;this.report(error);}
 }
 adapter(node,root=false){
  const m=node.localMatrix(),p=node.sourcePlacement;
  return {symbolId:node.symbolId,currentFrame:node.currentFrame??1,alpha:root?1:node.alpha??1,visible:node.visible!==false,
   x:m[4],y:m[5],scaleX:node.scaleX??1,scaleY:node.scaleY??1,rotation:node.rotation??0,name:node.name,
   text:node.text,textColor:node.textColor,textFormat:node.textFormat,
   matrix:m,sourcePlacement:p,sourceMatrix:p?.matrix,clock:{frame:this.app.battle.moveRuntime?.tick??0},
   childrenByDepth:new Map((node.children??[]).filter(c=>c.sourcePlacement).map((c,i)=>[c.sourcePlacement?.depth??i,this.adapter(c)]))};
 }
 render(){
  if(this.dead)return;
  const runtime=this.app.battle.moveRuntime;if(!runtime)return;
  const ctx=this.ctx;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,this.canvas.width,this.canvas.height);ctx.translate(-this.x,-this.y);ctx.imageSmoothingEnabled=false;
  for(const child of runtime.world.children??[])if(child.fighter?.uid!==this.scene.captureUid)this.draw(child);
  this.texture.refresh();
 }
 drawFighterTo(ctx,fighter,x,y){
  const previous=this.ctx;ctx.save();ctx.translate(x-fighter.x,y-fighter.y);this.ctx=ctx;this.draw(this.app.battle.moveRuntime.actor(fighter));this.ctx=previous;ctx.restore();
 }
 draw(node){
  if(node.visible===false||node.alpha<=0)return;
  const ctx=this.ctx,m=node.localMatrix();ctx.save();ctx.transform(...m);ctx.globalAlpha*=node.alpha??1;
  if(this.scene.pokemonCheckUid&&node.fighter?.team==='tower'&&!node.fighter.npc&&node.fighter.uid!==this.scene.pokemonCheckUid)ctx.globalAlpha*=.2;
  const color=node.transform?.colorTransform;const glow=node.filters?.find(f=>f.kind==='glow');if(glow){ctx.shadowColor=`#${glow.color.toString(16).padStart(6,'0')}`;ctx.shadowBlur=glow.blurX??6;}
  const pokemon=this.app.assets.pokemon[node.symbolName];
  if(pokemon){
    let frame=0;for(let i=0;i<pokemon.sourceFrames.length;i++)if(pokemon.sourceFrames[i]<=(node.currentFrame??1))frame=i;
    const image=this.scene.textures.get(node.symbolName).getSourceImage();const x=pokemon.sourceBounds.xMin,y=pokemon.sourceBounds.yMin;
    if(color?.amount>0){
      this.tintCanvas??=document.createElement('canvas');this.tintCanvas.width=pokemon.frameWidth;this.tintCanvas.height=pokemon.frameHeight;const tint=this.tintCanvas.getContext('2d');tint.drawImage(image,frame*pokemon.frameWidth,0,pokemon.frameWidth,pokemon.frameHeight,0,0,pokemon.frameWidth,pokemon.frameHeight);tint.globalCompositeOperation='source-atop';tint.globalAlpha=color.amount;tint.fillStyle=`#${(color.color??0).toString(16).padStart(6,'0')}`;tint.fillRect(0,0,pokemon.frameWidth,pokemon.frameHeight);ctx.drawImage(this.tintCanvas,x,y);
    }else ctx.drawImage(image,frame*pokemon.frameWidth,0,pokemon.frameWidth,pokemon.frameHeight,x,y,pokemon.frameWidth,pokemon.frameHeight);
  }else if(node.symbolId&&this.byId?.[node.symbolId]){
    const entry=this.entries.get(node.symbolId);if(!entry)this.load(node.symbolId);
    else if(entry.ready){const clip=this.adapter(node,true);clip.x=-entry.meta.bounds[0]+2;clip.y=-entry.meta.bounds[1]+2;entry.renderer.render(clip);ctx.drawImage(entry.canvas,entry.meta.bounds[0]-2,entry.meta.bounds[1]-2);}
  }
  // Named timeline children are already drawn by their exported parent. Dynamic
  // children (effects attached by ActionScript) need their own display-list pass.
  const rendered=Boolean(pokemon||this.byId?.[node.symbolId]);
  for(const child of node.children??[])if(!rendered||!child.sourcePlacement)this.draw(child);
  ctx.restore();
 }
 destroy(){this.dead=true;this.image?.destroy();this.scene.textures.remove(this.key);this.entries.clear();}
}
