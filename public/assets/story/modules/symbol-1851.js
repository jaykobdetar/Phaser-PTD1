import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1850(ctx,ctrans,frame,ratio,time){var pathData="M 138 -134 Q 195 -77 195 4 195 85 138 142 81 199 0 199 -81 199 -138 142 -195 85 -195 4 -195 -77 -138 -134 -81 -191 0 -191 81 -191 138 -134";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([255,255,51,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.011962890625,0,0,0.011962890625,0,4);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0.5490196078431373,tocolor(ctrans.apply([255,204,0,1])));grd.addColorStop(1,tocolor(ctrans.apply([255,255,51,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1851(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1851,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,9.75,9.55);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1850",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1850,sprite1851});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-9.75,-9.55);}else{ctx.transform(1,0,0,1,-9.75+(clip?.x??0),-9.55+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1851(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
