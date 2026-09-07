import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1911(ctx,ctrans,frame,ratio,time){var pathData="M 225 -225 Q 319 -131 319 0 319 131 225 225 131 319 0 319 -131 319 -225 225 -319 131 -319 0 -319 -131 -225 -225 -131 -319 0 -319 131 -319 225 -225";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([51,255,255,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0195770263671875,0,0,0.0195770263671875,0,0);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0.4549019607843137,tocolor(ctrans.apply([0,153,255,1])));grd.addColorStop(1,tocolor(ctrans.apply([51,255,255,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1912(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1912,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,15.95,15.95);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("shape1911",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break;case 1:place("shape1911",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break;case 2:place("shape1911",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break;case 3:place("shape1911",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1911,sprite1912});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-15.95,-15.95);}else{ctx.transform(1,0,0,1,-15.95+(clip?.x??0),-15.95+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1912(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
