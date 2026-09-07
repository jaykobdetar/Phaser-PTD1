import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1648(ctx,ctrans,frame,ratio,time){var pathData="M 191 -191 Q 270 -112 270 0 270 112 191 191 112 270 0 270 -112 270 -191 191 -270 112 -270 0 -270 -112 -191 -191 -112 -270 0 -270 112 -270 191 -191";var grd=ctx.createLinearGradient(-170.0,170.0,172.0,-172.0);grd.addColorStop(0,tocolor(ctrans.apply([102,102,102,1])));grd.addColorStop(0.5764705882352941,tocolor(ctrans.apply([255,255,255,1])));grd.addColorStop(1,tocolor(ctrans.apply([102,102,102,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1649(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1649,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,13.5,13.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1648",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1648,sprite1649});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-13.5,-13.5);}else{ctx.transform(1,0,0,1,-13.5+(clip?.x??0),-13.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1649(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
