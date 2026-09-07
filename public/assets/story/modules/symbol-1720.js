import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1718(ctx,ctrans,frame,ratio,time){var pathData="M 489 -489 Q 692 -286 692 0 692 287 489 490 287 692 0 692 -286 692 -489 490 -691 287 -691 0 -691 -286 -489 -489 -286 -691 0 -691 287 -691 489 -489";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([0,255,204,0.5019608]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.07598876953125,0,0,0.07598876953125,520,-160);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([153,255,0,0.5019608])));grd.addColorStop(1,tocolor(ctrans.apply([0,255,204,0.5019608])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1719(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1719,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1720(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1720,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,28.55,28.55);var clips=[];var frame_cnt=5;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1719",canvas,ctx,[0.01237335205078125,0.0,0.0,0.01237335205078125,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1719",canvas,ctx,[0.019602203369140626,0.0,0.0,0.019602203369140626,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1719",canvas,ctx,[0.026830291748046874,0.0,0.0,0.026830291748046874,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1719",canvas,ctx,[0.03405914306640625,0.0,0.0,0.03405914306640625,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1719",canvas,ctx,[0.0412872314453125,0.0,0.0,0.0412872314453125,0.0,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1718,sprite1719,sprite1720});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-28.55,-28.55);}else{ctx.transform(1,0,0,1,-28.55+(clip?.x??0),-28.55+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1720(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
