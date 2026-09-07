import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape660(ctx,ctrans,frame,ratio,time){var pathData="M 360 -8962 L -640 -8962 -640 -9962 360 -9962 360 -8962 M 4138 -5461 L 3138 -5461 3138 -6461 4138 -6461 4138 -5461 M -6481 -9020 L -6481 -8020 -7481 -8020 -7481 -9020 -6481 -9020 M -7403 -6141 L -6403 -6141 -6403 -5141 -7403 -5141 -7403 -6141 M -11372 -1680 L -10372 -1680 -10372 -680 -11372 -680 -11372 -1680 M -2583 -5199 L -3583 -5199 -3583 -6199 -2583 -6199 -2583 -5199 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite661(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(661,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,571.0,500.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape660",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape660,sprite661});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-571.0,-500.5);}else{ctx.transform(1,0,0,1,-571.0+(clip?.x??0),-500.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite661(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
