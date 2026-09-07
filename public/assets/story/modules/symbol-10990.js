import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape10989(ctx,ctrans,frame,ratio,time){var pathData="M 259 -1501 L 1259 -1501 1259 -501 259 -501 259 -1501 M 2579 -1501 L 3579 -1501 3579 -501 2579 -501 2579 -1501 M 6121 -1501 L 6121 -501 5121 -501 5121 -1501 6121 -1501 M 3579 3093 L 2579 3093 2579 2093 3579 2093 3579 3093 M 6121 3093 L 5121 3093 5121 2093 6121 2093 6121 3093 M 1259 3093 L 259 3093 259 2093 1259 2093 1259 3093 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite10990(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(10990,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,-10.55,77.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape10989",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape10989,sprite10990});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,10.55,-77.45);}else{ctx.transform(1,0,0,1,10.55+(clip?.x??0),-77.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite10990(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
