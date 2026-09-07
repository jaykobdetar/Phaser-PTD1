import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1224(ctx,ctrans,frame,ratio,time){var pathData="M 35 0 Q 295 133 405 360 401 654 0 690 456 455 35 0";ctx.fillStyle=tocolor(ctrans.apply([0,204,51,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1225(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1225,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1224",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function shape1645(ctx,ctrans,frame,ratio,time){var pathData="M 314 -315 Q 445 -184 445 0 445 184 314 314 184 445 0 445 -184 445 -315 314 -445 184 -445 0 -445 -184 -315 -315 -184 -445 0 -445 184 -445 314 -315";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([51,0,51,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.027587890625,0,0,0.027587890625,0,0);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([204,0,153,1])));grd.addColorStop(1,tocolor(ctrans.apply([51,0,51,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1646(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1646,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1647(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1647,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,17.05,18.0);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1646",canvas,ctx,[0.03988800048828125,0.0,0.0,0.03988800048828125,1.25,-0.25],ctrans,1,(0+time)%1,0,time);place("sprite1225",canvas,ctx,[0.05,0.0,0.0,0.05,-8.0,-17.25],ctrans.merge(new tools.sourceCxform(72,0,72,0,0,0,0,256)),1,(0+time)%1,0,time);break;case 1:place("sprite1646",canvas,ctx,[0.03988800048828125,0.0,0.0,0.03988800048828125,1.25,-0.25],ctrans,1,(0+time)%1,0,time);place("sprite1225",canvas,ctx,[-0.022936248779296876,0.03995437622070312,-0.03995437622070312,-0.022936248779296876,19.8,-0.2],ctrans.merge(new tools.sourceCxform(65,0,65,0,0,0,0,256)),1,(0+time)%1,0,time);break;case 2:place("sprite1646",canvas,ctx,[0.03988800048828125,0.0,0.0,0.03988800048828125,1.25,-0.25],ctrans,1,(0+time)%1,0,time);place("sprite1225",canvas,ctx,[-0.021015167236328125,-0.03660736083984375,0.03660736083984375,-0.021015167236328125,-7.7,14.65],ctrans.merge(new tools.sourceCxform(58,0,58,0,0,0,0,256)),1,(0+time)%1,0,time);break;case 3:place("sprite1646",canvas,ctx,[0.03988800048828125,0.0,0.0,0.03988800048828125,1.25,-0.25],ctrans,1,(0+time)%1,0,time);place("sprite1225",canvas,ctx,[0.03840560913085937,0.0,0.0,0.03840560913085937,-7.75,-13.25],ctrans.merge(new tools.sourceCxform(51,0,51,0,0,0,0,256)),1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1224,sprite1225,shape1645,sprite1646,sprite1647});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-17.05,-18.0);}else{ctx.transform(1,0,0,1,-17.05+(clip?.x??0),-18.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1647(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
