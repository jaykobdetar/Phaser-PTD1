import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape475(ctx,ctrans,frame,ratio,time){var pathData="M 2138 -1360 L 1138 -1360 1138 -2360 2138 -2360 2138 -1360 M 319 -1360 L -681 -1360 -681 -2360 319 -2360 319 -1360 M -4501 -8480 L -4501 -7480 -5501 -7480 -5501 -8480 -4501 -8480 M -1721 -5441 L -1721 -4441 -2721 -4441 -2721 -5441 -1721 -5441 M -3101 -4441 L -4101 -4441 -4101 -5441 -3101 -5441 -3101 -4441 M -1721 -4000 L -1721 -3000 -2721 -3000 -2721 -4000 -1721 -4000 M -5460 -6760 L -4460 -6760 -4460 -5760 -5460 -5760 -5460 -6760";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 2938 -6100 L 2938 -5100 1938 -5100 1938 -6100 2938 -6100 M 5778 -2260 L 4778 -2260 4778 -3260 5778 -3260 5778 -2260 M 4778 -1281 L 5778 -1281 5778 -281 4778 -281 4778 -1281 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([204,153,255,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite476(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(476,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,277.45,426.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape475",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape475,sprite476});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-277.45,-426.4);}else{ctx.transform(1,0,0,1,-277.45+(clip?.x??0),-426.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite476(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
