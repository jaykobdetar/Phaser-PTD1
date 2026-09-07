import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape275(ctx,ctrans,frame,ratio,time){var pathData="M -7003 -421 L -7003 579 -8003 579 -8003 -421 -7003 -421 M -1580 -2661 L -2580 -2661 -2580 -3661 -1580 -3661 -1580 -2661 M -2821 1279 L -2821 279 -1821 279 -1821 1279 -2821 1279 M -1821 1959 L -1821 2959 -2821 2959 -2821 1959 -1821 1959 M -5501 6900 L -4501 6900 -4501 7900 -5501 7900 -5501 6900 M -4021 6900 L -3021 6900 -3021 7900 -4021 7900 -4021 6900 M -6963 3560 L -6963 4560 -7963 4560 -7963 3560 -6963 3560 M -7963 5760 L -7963 4760 -6963 4760 -6963 5760 -7963 5760 M -2080 9281 L -1080 9281 -1080 10281 -2080 10281 -2080 9281 M 1139 2899 L 1139 1899 2139 1899 2139 2899 1139 2899 M 2941 6261 L 3941 6261 3941 7261 2941 7261 2941 6261 M 2941 4980 L 3941 4980 3941 5980 2941 5980 2941 4980 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite276(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(276,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,402.55,185.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape275",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape275,sprite276});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-402.55,-185.45);}else{ctx.transform(1,0,0,1,-402.55+(clip?.x??0),-185.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite276(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
