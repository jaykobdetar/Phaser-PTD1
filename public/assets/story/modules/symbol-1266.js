import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1265(ctx,ctrans,frame,ratio,time){var pathData="M 307 -9 L -220 173 Q -391 -33 -224 -172 L 307 -9";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([153,153,153,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0246124267578125,0,0,0.0246124267578125,-97,8);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([255,255,255,1])));grd.addColorStop(1,tocolor(ctrans.apply([153,153,153,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M 307 -9 L -224 -172 Q -391 -33 -220 173 L 307 -9 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));ctx.lineWidth=2.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1266(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1266,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,16.35,9.6);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1265",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1265,sprite1266});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-16.35,-9.6);}else{ctx.transform(1,0,0,1,-16.35+(clip?.x??0),-9.6+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1266(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
