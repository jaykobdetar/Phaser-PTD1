import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape878(ctx,ctrans,frame,ratio,time){var pathData="M 1558 -2949 L 1558 -1949 558 -1949 558 -2949 1558 -2949 M 1401 2571 L 1401 3571 401 3571 401 2571 1401 2571 M 1401 5192 L 401 5192 401 4192 1401 4192 1401 5192 M 1401 9492 L 1401 10492 401 10492 401 9492 1401 9492 M 1370 11109 L 1370 12109 370 12109 370 11109 1370 11109 M 1370 12949 L 1370 13949 370 13949 370 12949 1370 12949 M -4241 -2949 L -4241 -1949 -5241 -1949 -5241 -2949 -4241 -2949 M -5019 2571 L -4019 2571 -4019 3571 -5019 3571 -5019 2571 M -4019 5233 L -5019 5233 -5019 4233 -4019 4233 -4019 5233 M -3969 11109 L -3969 12109 -4969 12109 -4969 11109 -3969 11109 M -3969 10492 L -4969 10492 -4969 9492 -3969 9492 -3969 10492 M -3969 13949 L -4969 13949 -4969 12949 -3969 12949 -3969 13949 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite879(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(879,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,264.45,149.85);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape878",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape878,sprite879});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-264.45,-149.85);}else{ctx.transform(1,0,0,1,-264.45+(clip?.x??0),-149.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite879(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
