import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape380(ctx,ctrans,frame,ratio,time){var pathData="M -7319 -6501 L -6319 -6501 -6319 -5501 -7319 -5501 -7319 -6501 M -7319 -2719 L -6319 -2719 -6319 -1719 -7319 -1719 -7319 -2719 M -7319 -4599 L -6319 -4599 -6319 -3599 -7319 -3599 -7319 -4599 M -1522 -5549 L -522 -5549 -522 -4549 -1522 -4549 -1522 -5549 M -1581 -2719 L -1581 -3719 -581 -3719 -581 -2719 -1581 -2719 M -6319 -8469 L -6319 -7469 -7319 -7469 -7319 -8469 -6319 -8469 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite381(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(381,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,368.35,425.85);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape380",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape380,sprite381});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-368.35,-425.85);}else{ctx.transform(1,0,0,1,-368.35+(clip?.x??0),-425.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite381(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
