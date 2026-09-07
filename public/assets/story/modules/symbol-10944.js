import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape10943(ctx,ctrans,frame,ratio,time){var pathData="M 2240 -3921 L 3240 -3921 3240 -2921 2240 -2921 2240 -3921 M 2240 -2466 L 3240 -2466 3240 -1466 2240 -1466 2240 -2466 M 3982 -1200 L 4982 -1200 4982 -200 3982 -200 3982 -1200 M 6322 -1180 L 7322 -1180 7322 -180 6322 -180 6322 -1180 M 7282 3175 L 6282 3175 6282 2175 7282 2175 7282 3175 M 3962 2221 L 4962 2221 4962 3221 3962 3221 3962 2221 M 3080 3655 L 3080 4655 2080 4655 2080 3655 3080 3655 M 3080 5536 L 3080 6536 2080 6536 2080 5536 3080 5536 M -7092 -1200 L -6092 -1200 -6092 -200 -7092 -200 -7092 -1200 M -4941 -1180 L -3941 -1180 -3941 -180 -4941 -180 -4941 -1180 M -2001 -2466 L -2001 -1466 -3001 -1466 -3001 -2466 -2001 -2466 M -3001 -2881 L -3001 -3881 -2001 -3881 -2001 -2881 -3001 -2881 M -2001 3735 L -2001 4735 -3001 4735 -3001 3735 -2001 3735 M -6072 3175 L -7072 3175 -7072 2175 -6072 2175 -6072 3175 M -4941 2221 L -3941 2221 -3941 3221 -4941 3221 -4941 2221 M -2001 5662 L -2001 6662 -3001 6662 -3001 5662 -2001 5662 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite10944(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(10944,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,357.0,198.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape10943",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape10943,sprite10944});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-357.0,-198.45);}else{ctx.transform(1,0,0,1,-357.0+(clip?.x??0),-198.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite10944(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
