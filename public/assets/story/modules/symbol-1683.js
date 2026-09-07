import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1681(ctx,ctrans,frame,ratio,time){var pathData="M 35 0 Q 295 133 405 360 401 654 0 690 456 455 35 0";ctx.fillStyle=tocolor(ctrans.apply([153,0,153,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1682(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1682,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1681",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1683(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1683,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,17.85,17.35);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1682",canvas,ctx,[0.05,0.0,0.0,0.05,-8.0,-17.25],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1682",canvas,ctx,[-0.02485809326171875,0.0433013916015625,-0.0433013916015625,-0.02485809326171875,22.1,-0.15],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1682",canvas,ctx,[-0.02485809326171875,-0.0433013916015625,0.0433013916015625,-0.02485809326171875,-7.8,17.35],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1682",canvas,ctx,[0.05,0.0,0.0,0.05,-8.0,-17.25],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1681,sprite1682,sprite1683});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-17.85,-17.35);}else{ctx.transform(1,0,0,1,-17.85+(clip?.x??0),-17.35+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1683(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
