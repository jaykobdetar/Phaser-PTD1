import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape63(ctx,ctrans,frame,ratio,time){var pathData="M 119 -5948 L -881 -5948 -881 -6948 119 -6948 119 -5948 M 119 -4340 L -881 -4340 -881 -5340 119 -5340 119 -4340 M 119 -2840 L -881 -2840 -881 -3840 119 -3840 119 -2840 M 119 -1240 L -881 -1240 -881 -2240 119 -2240 119 -1240 M 119 -7449 L -881 -7449 -881 -8449 119 -8449 119 -7449 M 119 -641 L 119 359 -881 359 -881 -641 119 -641 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite64(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(64,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,46.45,424.85);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape63",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape63,sprite64});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-46.45,-424.85);}else{ctx.transform(1,0,0,1,-46.45+(clip?.x??0),-424.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite64(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
