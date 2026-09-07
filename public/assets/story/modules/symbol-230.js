import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape229(ctx,ctrans,frame,ratio,time){var pathData="M 659 -2422 L -341 -2422 -341 -3422 659 -3422 659 -2422 M -4462 -3422 L -3462 -3422 -3462 -2422 -4462 -2422 -4462 -3422 M -1400 -2422 L -2400 -2422 -2400 -3422 -1400 -3422 -1400 -2422 M -1400 1099 L -1400 2099 -2400 2099 -2400 1099 -1400 1099 M -341 1099 L 659 1099 659 2099 -341 2099 -341 1099 M -3462 1099 L -3462 2099 -4462 2099 -4462 1099 -3462 1099 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite230(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(230,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,225.5,173.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape229",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape229,sprite230});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-225.5,-173.5);}else{ctx.transform(1,0,0,1,-225.5+(clip?.x??0),-173.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite230(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
