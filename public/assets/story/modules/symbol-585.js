import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape584(ctx,ctrans,frame,ratio,time){var pathData="M 13422 -3360 L 12422 -3360 12422 -4360 13422 -4360 13422 -3360 M 13382 -7760 L 12382 -7760 12382 -8760 13382 -8760 13382 -7760 M 8381 -8760 L 8381 -7760 7381 -7760 7381 -8760 8381 -8760 M 3941 -8760 L 3941 -7760 2941 -7760 2941 -8760 3941 -8760 M 9060 -4320 L 9060 -3320 8060 -3320 8060 -4320 9060 -4320 M 301 -7760 L -699 -7760 -699 -8760 301 -8760 301 -7760 M 11422 3740 L 11422 2740 12422 2740 12422 3740 11422 3740 M 4601 2740 L 5601 2740 5601 3740 4601 3740 4601 2740 M -1759 2740 L -759 2740 -759 3740 -1759 3740 -1759 2740 M -5482 3740 L -6482 3740 -6482 2740 -5482 2740 -5482 3740 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite585(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(585,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,326.5,440.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape584",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape584,sprite585});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-326.5,-440.4);}else{ctx.transform(1,0,0,1,-326.5+(clip?.x??0),-440.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite585(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
