import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape823(ctx,ctrans,frame,ratio,time){var pathData="M 3041 -2921 L 3041 -1921 2041 -1921 2041 -2921 3041 -2921 M 420 -1921 L -580 -1921 -580 -2921 420 -2921 420 -1921 M 4642 -2921 L 5642 -2921 5642 -1921 4642 -1921 4642 -2921 M 5642 1634 L 4642 1634 4642 634 5642 634 5642 1634 M 3041 580 L 3041 1580 2041 1580 2041 580 3041 580 M -8583 -2921 L -8583 -1921 -9583 -1921 -9583 -2921 -8583 -2921 M -7043 -2921 L -6043 -2921 -6043 -1921 -7043 -1921 -7043 -2921 M -4941 -1921 L -4941 -2921 -3941 -2921 -3941 -1921 -4941 -1921 M -6043 1634 L -7043 1634 -7043 634 -6043 634 -6043 1634 M -9583 634 L -8583 634 -8583 1634 -9583 1634 -9583 634 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 419 1634 L -581 1634 -581 634 419 634 419 1634 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M -2761 1634 L -2761 634 -1761 634 -1761 1634 -2761 1634 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M -3941 1634 L -4941 1634 -4941 634 -3941 634 -3941 1634 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite824(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(824,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,481.55,148.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape823",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape823,sprite824});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-481.55,-148.45);}else{ctx.transform(1,0,0,1,-481.55+(clip?.x??0),-148.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite824(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
