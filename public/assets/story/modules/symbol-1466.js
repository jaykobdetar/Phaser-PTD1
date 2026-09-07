import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1464(ctx,ctrans,frame,ratio,time){var pathData="M 231 39 L 233 73 Q 233 174 165 246 97 318 0 318 -97 318 -165 246 -233 174 -233 73 L -232 55 Q -1 224 231 39";ctx.fillStyle=tocolor(ctrans.apply([153,153,153,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -232 55 Q -227 -41 -167 -171 -102 -314 -5 -317 92 -320 163 -174 221 -52 231 39 -1 224 -232 55";ctx.fillStyle=tocolor(ctrans.apply([204,204,204,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -232 55 Q -227 -41 -167 -171 -102 -314 -5 -317 92 -320 163 -174 221 -52 231 39 L 233 73 Q 233 174 165 246 97 318 0 318 -97 318 -165 246 -233 174 -233 73 L -232 55 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([51,51,51,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1465(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1465,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1464",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1466(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1466,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,20.35,20.05);var clips=[];var frame_cnt=8;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1465",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1465",canvas,ctx,[0.031137847900390626,0.03901824951171875,-0.03901824951171875,0.031137847900390626,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1465",canvas,ctx,[-0.01105804443359375,0.048724365234375,-0.048724365234375,-0.01105804443359375,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1465",canvas,ctx,[-0.045037841796875,0.021567535400390626,-0.021567535400390626,-0.045037841796875,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1465",canvas,ctx,[-0.045037841796875,-0.021567535400390626,0.021567535400390626,-0.045037841796875,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 5:place("sprite1465",canvas,ctx,[-0.01105804443359375,-0.048724365234375,0.048724365234375,-0.01105804443359375,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 6:place("sprite1465",canvas,ctx,[0.031137847900390626,-0.03901824951171875,0.03901824951171875,0.031137847900390626,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break;case 7:place("sprite1465",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-0.05],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1464,sprite1465,sprite1466});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-20.35,-20.05);}else{ctx.transform(1,0,0,1,-20.35+(clip?.x??0),-20.05+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1466(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
