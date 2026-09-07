import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1227(ctx,ctrans,frame,ratio,time){var pathData="M 440 -560 L 440 -300 -347 375 -346 175 -347 375 -459 470 -459 280 -346 175 440 -560 M 440 -110 L 440 140 -170 660 -350 660 440 -110";ctx.fillStyle=tocolor(ctrans.apply([204,204,204,0.56078434]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 440 -560 L 440 -300 440 -110 440 140 440 660 520 585 520 -605 440 -560 -340 -560 -459 -560 -360 -605 520 -605 M -346 175 L -347 375 -350 660 -170 660 Q 135 635 440 660 M -459 280 L -459 -560 M -346 175 L -340 -560 M -459 280 L -459 470 -459 660 -350 660";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([153,153,153,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1228(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1228,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,23.45,30.75);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1227",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1227,sprite1228});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-23.45,-30.75);}else{ctx.transform(1,0,0,1,-23.45+(clip?.x??0),-30.75+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1228(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
