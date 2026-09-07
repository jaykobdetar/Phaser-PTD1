import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape827(ctx,ctrans,frame,ratio,time){var pathData="M 800 -632 L -200 -632 -200 -1632 800 -1632 800 -632 M -8003 -3241 L -7003 -3241 -7003 -2241 -8003 -2241 -8003 -3241 M -8003 -1824 L -7003 -1824 -7003 -824 -8003 -824 -8003 -1824 M -7003 -407 L -7003 593 -8003 593 -8003 -407 -7003 -407 M -3821 -3182 L -2821 -3182 -2821 -2182 -3821 -2182 -3821 -3182 M -3821 -1681 L -2821 -1681 -2821 -681 -3821 -681 -3821 -1681 M -2000 -1632 L -1000 -1632 -1000 -632 -2000 -632 -2000 -1632 M -2000 2491 L -2000 3491 -3000 3491 -3000 2491 -2000 2491 M -6421 3491 L -6421 2491 -5421 2491 -5421 3491 -6421 3491 M -3721 2491 L -3721 3491 -4721 3491 -4721 2491 -3721 2491 M -7003 1010 L -7003 2010 -8003 2010 -8003 1010 -7003 1010 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite828(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(828,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,402.55,164.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape827",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape827,sprite828});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-402.55,-164.45);}else{ctx.transform(1,0,0,1,-402.55+(clip?.x??0),-164.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite828(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
