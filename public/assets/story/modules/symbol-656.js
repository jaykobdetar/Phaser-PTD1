import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape655(ctx,ctrans,frame,ratio,time){var pathData="M 5879 -5141 L 6879 -5141 6879 -4141 5879 -4141 5879 -5141 M 898 -6659 L 1898 -6659 1898 -5659 898 -5659 898 -6659 M 360 -5659 L -640 -5659 -640 -6659 360 -6659 360 -5659 M 2670 -2540 L 1670 -2540 1670 -3540 2670 -3540 2670 -2540 M 1050 -2540 L 50 -2540 50 -3540 1050 -3540 1050 -2540 M 4290 -2540 L 3290 -2540 3290 -3540 4290 -3540 4290 -2540 M -7960 -8640 L -7960 -7640 -8960 -7640 -8960 -8640 -7960 -8640 M -8960 -10340 L -7960 -10340 -7960 -9340 -8960 -9340 -8960 -10340 M -7960 -6060 L -8960 -6060 -8960 -7060 -7960 -7060 -7960 -6060 M -8960 -5141 L -7960 -5141 -7960 -4141 -8960 -4141 -8960 -5141 M -2262 -5659 L -2262 -6659 -1262 -6659 -1262 -5659 -2262 -5659 M -1450 1060 L -2450 1060 -2450 60 -1450 60 -1450 1060 M -3270 1060 L -4270 1060 -4270 60 -3270 60 -3270 1060 M -4922 60 L -4922 1060 -5922 1060 -5922 60 -4922 60 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite656(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(656,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,450.4,519.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape655",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape655,sprite656});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-450.4,-519.4);}else{ctx.transform(1,0,0,1,-450.4+(clip?.x??0),-519.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite656(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
