import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape665(ctx,ctrans,frame,ratio,time){var pathData="M 8098 -9801 L 9098 -9801 9098 -8801 8098 -8801 8098 -9801 M 3998 -9801 L 4998 -9801 4998 -8801 3998 -8801 3998 -9801 M 1796 -4259 L 1796 -5259 2796 -5259 2796 -4259 1796 -4259 M 1796 -742 L 1796 -1742 2796 -1742 2796 -742 1796 -742 M -4662 -8462 L -4662 -7462 -5662 -7462 -5662 -8462 -4662 -8462 M -500 -8462 L -500 -7462 -1500 -7462 -1500 -8462 -500 -8462 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite666(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(666,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,285.5,492.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape665",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape665,sprite666});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-285.5,-492.45);}else{ctx.transform(1,0,0,1,-285.5+(clip?.x??0),-492.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite666(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
