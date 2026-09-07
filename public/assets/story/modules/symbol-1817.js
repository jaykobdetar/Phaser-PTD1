import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1815(ctx,ctrans,frame,ratio,time){var pathData="M -260 768 Q 683 505 -108 -65 295 133 405 360 401 654 -260 768";ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1816(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1816,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1817(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1817,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,17.75,15.75);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1816",canvas,ctx,[0.03840560913085937,0.0,0.0,0.03840560913085937,-7.75,-13.25],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1815,sprite1816,sprite1817});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-17.75,-15.75);}else{ctx.transform(1,0,0,1,-17.75+(clip?.x??0),-15.75+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1817(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
