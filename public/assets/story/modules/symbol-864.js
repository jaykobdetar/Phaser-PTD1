import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape863(ctx,ctrans,frame,ratio,time){var pathData="M 3741 2993 L 2741 2993 2741 1993 3741 1993 3741 2993 M 2741 5192 L 3741 5192 3741 6192 2741 6192 2741 5192 M 3741 4631 L 2741 4631 2741 3631 3741 3631 3741 4631 M -1300 3491 L -1300 4491 -2300 4491 -2300 3491 -1300 3491 M -6221 2993 L -7221 2993 -7221 1993 -6221 1993 -6221 2993 M -6221 6192 L -7221 6192 -7221 5192 -6221 5192 -6221 6192 M -6221 4631 L -7221 4631 -7221 3631 -6221 3631 -6221 4631";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M -1300 6792 L -2300 6792 -2300 5792 -1300 5792 -1300 6792 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([153,102,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite864(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(864,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,363.45,-97.25);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape863",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape863,sprite864});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-363.45,97.25);}else{ctx.transform(1,0,0,1,-363.45+(clip?.x??0),97.25+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite864(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
