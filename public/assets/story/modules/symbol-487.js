import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape486(ctx,ctrans,frame,ratio,time){var pathData="M 9237 -9260 L 10237 -9260 10237 -8260 9237 -8260 9237 -9260 M 658 -9260 L 1658 -9260 1658 -8260 658 -8260 658 -9260 M 4398 -9260 L 5398 -9260 5398 -8260 4398 -8260 4398 -9260 M 10237 -5799 L 9237 -5799 9237 -6799 10237 -6799 10237 -5799 M 10237 -141 L 10237 859 9237 859 9237 -141 10237 -141 M 7138 -141 L 7138 859 6138 859 6138 -141 7138 -141 M -5901 -8540 L -6901 -8540 -6901 -9540 -5901 -9540 -5901 -8540 M -2720 -8260 L -2720 -9260 -1720 -9260 -1720 -8260 -2720 -8260 M -1721 -4441 L -2721 -4441 -2721 -5441 -1721 -5441 -1721 -4441 M -2141 -2581 L -2141 -1581 -3141 -1581 -3141 -2581 -2141 -2581 M -3441 1059 L -3441 2059 -4441 2059 -4441 1059 -3441 1059 M -5520 2059 L -6520 2059 -6520 1059 -5520 1059 -5520 2059 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite487(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(487,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,347.45,479.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape486",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape486,sprite487});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-347.45,-479.4);}else{ctx.transform(1,0,0,1,-347.45+(clip?.x??0),-479.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite487(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
