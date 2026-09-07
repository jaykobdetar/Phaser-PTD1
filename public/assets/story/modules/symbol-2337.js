import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape2336(ctx,ctrans,frame,ratio,time){var pathData="M 123 -108 L 199 -66 30 132 -103 125 123 -108";ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -103 125 L -230 98 -280 -22 -110 -132 80 -132 123 -108 199 -66 280 -22 190 98 Q 116 127 30 132 L -103 125 123 -108 M 199 -66 L 30 132";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite2337(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2337,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,14.5,7.1);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape2336",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape2336,sprite2337});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-14.5,-7.1);}else{ctx.transform(1,0,0,1,-14.5+(clip?.x??0),-7.1+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite2337(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
