import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape831(ctx,ctrans,frame,ratio,time){var pathData="M 5624 -2051 L 4624 -2051 4624 -3051 5624 -3051 5624 -2051 M 4624 -1661 L 5624 -1661 5624 -661 4624 -661 4624 -1661 M 5624 -271 L 5624 729 4624 729 4624 -271 5624 -271 M 4624 2252 L 4624 1252 5624 1252 5624 2252 4624 2252 M -8123 -3241 L -8123 -2241 -9123 -2241 -9123 -3241 -8123 -3241 M -8123 -407 L -8123 593 -9123 593 -9123 -407 -8123 -407 M -8123 -1824 L -8123 -824 -9123 -824 -9123 -1824 -8123 -1824 M -4621 -2182 L -4621 -3182 -3621 -3182 -3621 -2182 -4621 -2182 M -4621 -681 L -4621 -1681 -3621 -1681 -3621 -681 -4621 -681 M -8123 1010 L -8123 2010 -9123 2010 -9123 1010 -8123 1010 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 802 -2141 L -198 -2141 -198 -3141 802 -3141 802 -2141 M 802 -681 L -198 -681 -198 -1681 802 -1681 802 -681 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite832(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(832,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,458.55,164.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape831",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape831,sprite832});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-458.55,-164.45);}else{ctx.transform(1,0,0,1,-458.55+(clip?.x??0),-164.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite832(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
