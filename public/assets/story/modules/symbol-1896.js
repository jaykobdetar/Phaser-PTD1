import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1894(ctx,ctrans,frame,ratio,time){var pathData="M 381 267 Q 169 192 46 314 171 145 185 -94 188 167 381 267";ctx.fillStyle=tocolor(ctrans.apply([102,102,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 381 267 L 450 296 M 46 314 L 2 368 M 381 267 Q 169 192 46 314 171 145 185 -94 188 167 381 267 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([102,0,255,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1895(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1895,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1896(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1896,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,18.1,19.65);var clips=[];var frame_cnt=8;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1895",canvas,ctx,[0.05,0.0,0.0,0.05,-9.75,-9.55],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1895",canvas,ctx,[0.031137847900390626,0.03901824951171875,-0.03901824951171875,0.031137847900390626,1.15,-13.65],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1895",canvas,ctx,[-0.01105804443359375,0.048724365234375,-0.048724365234375,-0.01105804443359375,11.15,-7.75],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1895",canvas,ctx,[-0.045037841796875,0.021567535400390626,-0.021567535400390626,-0.045037841796875,12.75,3.85],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1895",canvas,ctx,[-0.045037841796875,-0.021567535400390626,0.021567535400390626,-0.045037841796875,4.85,12.25],ctrans,1,(0+time)%1,0,time);break;case 5:place("sprite1895",canvas,ctx,[-0.01105804443359375,-0.048724365234375,0.048724365234375,-0.01105804443359375,-6.85,11.25],ctrans,1,(0+time)%1,0,time);break;case 6:place("sprite1895",canvas,ctx,[0.031137847900390626,-0.03901824951171875,0.03901824951171875,0.031137847900390626,-13.25,1.55],ctrans,1,(0+time)%1,0,time);break;case 7:place("sprite1895",canvas,ctx,[0.05,0.0,0.0,0.05,-9.75,-9.55],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1894,sprite1895,sprite1896});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-18.1,-19.65);}else{ctx.transform(1,0,0,1,-18.1+(clip?.x??0),-19.65+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1896(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
