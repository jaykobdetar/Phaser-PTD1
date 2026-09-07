import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape506(ctx,ctrans,frame,ratio,time){var pathData="M 18861 -6542 L 18861 -5542 17861 -5542 17861 -6542 18861 -6542 M 13739 -5542 L 13739 -6542 14739 -6542 14739 -5542 13739 -5542 M 14739 -1639 L 13739 -1639 13739 -2639 14739 -2639 14739 -1639 M 18861 -2599 L 18861 -1599 17861 -1599 17861 -2599 18861 -2599 M 23926 -6501 L 23926 -5501 22926 -5501 22926 -6501 23926 -6501 M 23926 -2558 L 23926 -1558 22926 -1558 22926 -2558 23926 -2558 M 418 -5501 L -582 -5501 -582 -6501 418 -6501 418 -5501 M 400 -1639 L -600 -1639 -600 -2639 400 -2639 400 -1639 M 9982 -5542 L 8982 -5542 8982 -6542 9982 -6542 9982 -5542 M 8982 -2639 L 9982 -2639 9982 -1639 8982 -1639 8982 -2639 M 9982 1862 L 8982 1862 8982 862 9982 862 9982 1862 M 418 1862 L -582 1862 -582 862 418 862 418 1862 M 22926 903 L 23926 903 23926 1903 22926 1903 22926 903 M 18861 1862 L 17861 1862 17861 862 18861 862 18861 1862 M -8305 -6542 L -8305 -5542 -9305 -5542 -9305 -6542 -8305 -6542 M -8260 -2639 L -8260 -1639 -9260 -1639 -9260 -2639 -8260 -2639 M -8260 1862 L -9260 1862 -9260 862 -8260 862 -8260 1862 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 14739 1862 L 13739 1862 13739 862 14739 862 14739 1862 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite507(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(507,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,467.65,329.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape506",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape506,sprite507});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-467.65,-329.5);}else{ctx.transform(1,0,0,1,-467.65+(clip?.x??0),-329.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite507(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
