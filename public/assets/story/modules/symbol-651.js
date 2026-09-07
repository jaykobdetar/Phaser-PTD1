import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape650(ctx,ctrans,frame,ratio,time){var pathData="M 2960 -10160 L 2960 -9160 1960 -9160 1960 -10160 2960 -10160 M 1380 -8340 L 1380 -7340 380 -7340 380 -8340 1380 -8340 M 1579 1860 L 1579 2860 579 2860 579 1860 1579 1860 M -1140 -8400 L -1140 -7400 -2140 -7400 -2140 -8400 -1140 -8400 M -7200 -8060 L -7200 -7060 -8200 -7060 -8200 -8060 -7200 -8060 M -7381 -2800 L -6381 -2800 -6381 -1800 -7381 -1800 -7381 -2800 M -7381 -4241 L -6381 -4241 -6381 -3241 -7381 -3241 -7381 -4241 M -6381 -260 L -6381 740 -7381 740 -7381 -260 -6381 -260 M -6061 5259 L -7061 5259 -7061 4259 -6061 4259 -6061 5259";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M -4769 5299 L -4769 4299 -3769 4299 -3769 5299 -4769 5299 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([51,153,255,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite651(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(651,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,412.4,510.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape650",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape650,sprite651});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-412.4,-510.4);}else{ctx.transform(1,0,0,1,-412.4+(clip?.x??0),-510.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite651(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
