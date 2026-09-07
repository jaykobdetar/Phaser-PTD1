import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1721(ctx,ctrans,frame,ratio,time){var pathData="M 35 0 Q 295 133 405 360 401 654 0 690 456 455 35 0";ctx.fillStyle=tocolor(ctrans.apply([255,51,153,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1722(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1722,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1721",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1723(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1723,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,17.05,17.25);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1722",canvas,ctx,[0.05,0.0,0.0,0.05,-8.0,-17.25],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1722",canvas,ctx,[-0.022936248779296876,0.03995437622070312,-0.03995437622070312,-0.022936248779296876,19.8,-0.2],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1722",canvas,ctx,[-0.021015167236328125,-0.03660736083984375,0.03660736083984375,-0.021015167236328125,-7.7,14.65],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1722",canvas,ctx,[0.03840560913085937,0.0,0.0,0.03840560913085937,-7.75,-13.25],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1721,sprite1722,sprite1723});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-17.05,-17.25);}else{ctx.transform(1,0,0,1,-17.05+(clip?.x??0),-17.25+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1723(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
