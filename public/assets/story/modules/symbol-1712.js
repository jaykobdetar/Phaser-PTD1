import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1710(ctx,ctrans,frame,ratio,time){var pathData="M 312 -11 L 151 139 -153 139 -313 -8 -131 -139 136 -137 312 -11";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([0,102,255,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0247650146484375,0,0,0.0247650146484375,92,11);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([255,255,255,1])));grd.addColorStop(0.5254901960784314,tocolor(ctrans.apply([0,102,255,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1711(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1711,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1712(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1712,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,15.65,6.95);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1711",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1710,sprite1711,sprite1712});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-15.65,-6.95);}else{ctx.transform(1,0,0,1,-15.65+(clip?.x??0),-6.95+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1712(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
