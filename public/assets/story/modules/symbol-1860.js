import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
var imageObj1858=document.createElement("img");imageObj1858.src=new URL("../bitmaps/7a64502c9a75a4c5c17e8947.png",import.meta.url).href;function image1858(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 0 320 320 320 320 0 0 0";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,0,0);ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj1858);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function shape1859(ctx,ctrans,frame,ratio,time){var pathData="M -445 -445 L 445 -445 445 445 -445 445 -445 -445";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(55.625,0,0,55.625,-445,-445);ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj1858);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1860(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1860,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,22.25,22.25);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1859",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{image1858,shape1859,sprite1860});
await Promise.all([imageObj1858].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-22.25,-22.25);}else{ctx.transform(1,0,0,1,-22.25+(clip?.x??0),-22.25+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1860(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
