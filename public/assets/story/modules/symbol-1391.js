import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1387(ctx,ctrans,frame,ratio,time){var pathData="M 497 1512 Q 178 1253 0 0 645 928 497 1512";var grd=ctx.createLinearGradient(210.25,477.75,423.75,1274.25);grd.addColorStop(0,tocolor(ctrans.apply([102,0,153,1])));grd.addColorStop(1,tocolor(ctrans.apply([153,153,204,1])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1388(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1388,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1387",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function shape1389(ctx,ctrans,frame,ratio,time){var pathData="M 165 -42 L 77 41 77 171 -7 81 -123 161 -80 28 -165 -67 -43 -52 -3 -172 47 -42 165 -42";ctx.fillStyle=tocolor(ctrans.apply([255,51,102,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1390(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1390,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1389",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1391(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1391,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,44.0,88.3);var clips=[];var frame_cnt=6;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-44.0,-58.0],ctrans,1,(0+time)%1,0,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,32.0,-60.95],ctrans,1,(0+time)%1,0,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,20.05,-88.3],ctrans,1,(0+time)%1,0,time);place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-30.85,-86.85],ctrans,1,(0+time)%1,0,time);place("sprite1390",canvas,ctx,[0.078125,0.0,0.0,0.078125,-4.15,-69.4],ctrans,1,(0+time)%1,0,time);break;case 1:break;case 2:place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-44.0,-58.0],ctrans,1,(0+time)%1,2,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,32.0,-60.95],ctrans,1,(0+time)%1,2,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,20.05,-88.3],ctrans,1,(0+time)%1,2,time);place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-30.85,-86.85],ctrans,1,(0+time)%1,2,time);place("sprite1390",canvas,ctx,[0.0625,0.0,0.0,0.0625,-1.6,-41.0],ctrans,1,(0+time)%1,2,time);break;case 3:break;case 4:place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-44.0,-58.0],ctrans,1,(0+time)%1,4,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,32.0,-60.95],ctrans,1,(0+time)%1,4,time);place("sprite1388",canvas,ctx,[0.0433013916015625,0.024999237060546874,-0.024999237060546874,0.0433013916015625,20.05,-88.3],ctrans,1,(0+time)%1,4,time);place("sprite1388",canvas,ctx,[0.05,0.0,0.0,0.05,-30.85,-86.85],ctrans,1,(0+time)%1,4,time);place("sprite1390",canvas,ctx,[0.05,0.0,0.0,0.05,0.35,-0.6],ctrans,1,(0+time)%1,4,time);break;case 5:break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1387,sprite1388,shape1389,sprite1390,sprite1391});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-44.0,-88.3);}else{ctx.transform(1,0,0,1,-44.0+(clip?.x??0),-88.3+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1391(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
