import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
var imageObj10930=document.createElement("img");imageObj10930.src=new URL("../bitmaps/f13b8f7c8103e6bbf3c69183.png",import.meta.url).href;function image10930(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 0 280 280 280 280 0 0 0";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,0,0);ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj10930);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function shape10931(ctx,ctrans,frame,ratio,time){var pathData="M 6449 2808 L 6449 3368 5889 3368 5889 2808 6449 2808";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(40,0,0,40,5889,2808);ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj10930);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite10932(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(10932,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,14.0,28.0);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape10931",canvas,ctx,[0.05,0.0,0.0,0.05,-308.45,-168.4],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{image10930,shape10931,sprite10932});
await Promise.all([imageObj10930].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-14.0,-28.0);}else{ctx.transform(1,0,0,1,-14.0+(clip?.x??0),-28.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite10932(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
