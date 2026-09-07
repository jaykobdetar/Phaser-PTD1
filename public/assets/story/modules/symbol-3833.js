import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape3382(ctx,ctrans,frame,ratio,time){var pathData="M 7402 1167 L 8447 1167 8447 2487 7402 2487 7402 1167";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(54.99969482421875,0,0,54.99969482421875,7402,1167);ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj3083);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}var imageObj3083=document.createElement("img");imageObj3083.src=new URL("../bitmaps/c2d5a264076de39561316430.png",import.meta.url).href;function image3083(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 0 480 380 480 380 0 0 0";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,0,0);ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj3083);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite3833(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3833,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,-370.1,-58.35);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape3382",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape3382,image3083,sprite3833});
await Promise.all([imageObj3083].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,370.1,58.35);}else{ctx.transform(1,0,0,1,370.1+(clip?.x??0),58.35+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite3833(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
