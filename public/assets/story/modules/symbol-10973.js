import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape10972(ctx,ctrans,frame,ratio,time){var pathData="M 199 -2742 L -801 -2742 -801 -3742 199 -3742 199 -2742 M 5080 -2661 L 4080 -2661 4080 -3661 5080 -3661 5080 -2661 M 4301 -1001 L 5301 -1001 5301 -1 4301 -1 4301 -1001 M -4462 -3742 L -3462 -3742 -3462 -2742 -4462 -2742 -4462 -3742 M 11243 3059 L 11243 4059 10243 4059 10243 3059 11243 3059 M 7202 4059 L 6202 4059 6202 3059 7202 3059 7202 4059 M 139 1219 L 139 219 1139 219 1139 1219 139 1219 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 11183 -862 L 11183 138 10183 138 10183 -862 11183 -862 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite10973(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(10973,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,225.5,189.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape10972",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape10972,sprite10973});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-225.5,-189.5);}else{ctx.transform(1,0,0,1,-225.5+(clip?.x??0),-189.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite10973(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
