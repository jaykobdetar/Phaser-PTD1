import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function sprite1840(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1840,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function shape1839(ctx,ctrans,frame,ratio,time){var pathData="M 381 267 Q 169 192 46 314 171 145 185 -94 188 167 381 267";ctx.fillStyle=tocolor(ctrans.apply([153,153,153,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 381 267 L 450 296 M 46 314 L 2 368 M 381 267 Q 169 192 46 314 171 145 185 -94 188 167 381 267 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1842(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1842,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,31.2,23.8);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,16.7,-5.0],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-21.7,-18.6],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,0.7,-11.5],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-30.8,-9.5],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-11.45,-7.0],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-20.45,-2.0],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-2.7,-2.8],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,12.05,5.25],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-12.8,3.5],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,-27.8,7.5],ctrans,1,(0+time)%1,0,time);place("sprite1840",canvas,ctx,[0.05,0.0,0.0,0.05,1.2,12.5],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{sprite1840,shape1839,sprite1842});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-31.2,-23.8);}else{ctx.transform(1,0,0,1,-31.2+(clip?.x??0),-23.8+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1842(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
