import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape670(ctx,ctrans,frame,ratio,time){var pathData="M 37 -10121 L -963 -10121 -963 -11121 37 -11121 37 -10121 M 215 -1222 L -785 -1222 -785 -2222 215 -2222 215 -1222 M -4145 -10121 L -5145 -10121 -5145 -11121 -4145 -11121 -4145 -10121 M -9543 -4161 L -10543 -4161 -10543 -5161 -9543 -5161 -9543 -4161 M -9543 -5801 L -10543 -5801 -10543 -6801 -9543 -6801 -9543 -5801 M -5486 -5119 L -4486 -5119 -4486 -4119 -5486 -4119 -5486 -5119 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite671(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(671,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,529.55,558.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape670",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape670,sprite671});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-529.55,-558.45);}else{ctx.transform(1,0,0,1,-529.55+(clip?.x??0),-558.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite671(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
