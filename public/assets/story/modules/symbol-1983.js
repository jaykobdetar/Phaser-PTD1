import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
var imageObj1980=document.createElement("img");imageObj1980.src=new URL("../bitmaps/5057250f96164acc81e12b15.png",import.meta.url).href;function image1980(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 0 640 640 640 640 0 0 0";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,0,0);ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj1980);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function shape1981(ctx,ctrans,frame,ratio,time){var pathData="M -320 -320 L 320 -320 320 320 -320 320 -320 -320";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,-320,-320);ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj1980);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite1982(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1982,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1981",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1983(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1983,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,24.0,24.0);var clips=[];var frame_cnt=5;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1982",canvas,ctx,[0.028125,0.0,0.0,0.028125,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1982",canvas,ctx,[0.04375,0.0,0.0,0.04375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1982",canvas,ctx,[0.059375,0.0,0.0,0.059375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1982",canvas,ctx,[0.075,0.0,0.0,0.075,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 4:break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{image1980,shape1981,sprite1982,sprite1983});
await Promise.all([imageObj1980].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-24.0,-24.0);}else{ctx.transform(1,0,0,1,-24.0+(clip?.x??0),-24.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1983(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
