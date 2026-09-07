import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape525(ctx,ctrans,frame,ratio,time){var pathData="M 2620 -9400 L 2620 -8400 1620 -8400 1620 -9400 2620 -9400 M 6431 -8400 L 5431 -8400 5431 -9400 6431 -9400 6431 -8400 M 6431 -6583 L 6431 -5583 5431 -5583 5431 -6583 6431 -6583 M 5431 -2642 L 5431 -3642 6431 -3642 6431 -2642 5431 -2642 M 6431 -741 L 6431 259 5431 259 5431 -741 6431 -741 M 4471 2042 L 5471 2042 5471 3042 4471 3042 4471 2042 M 1620 2042 L 2620 2042 2620 3042 1620 3042 1620 2042 M -4181 -9400 L -3181 -9400 -3181 -8400 -4181 -8400 -4181 -9400 M -1222 -9400 L -222 -9400 -222 -8400 -1222 -8400 -1222 -9400 M -3141 3042 L -4141 3042 -4141 2042 -3141 2042 -3141 3042 M -300 3042 L -1300 3042 -1300 2042 -300 2042 -300 3042 M -6041 3042 L -7041 3042 -7041 2042 -6041 2042 -6041 3042 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite526(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(526,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,354.45,472.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape525",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape525,sprite526});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-354.45,-472.4);}else{ctx.transform(1,0,0,1,-354.45+(clip?.x??0),-472.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite526(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
