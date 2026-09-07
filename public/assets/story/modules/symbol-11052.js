import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
var imageObj11050=document.createElement("img");imageObj11050.src=new URL("../bitmaps/067fbe73a7a19d68c046fe07.png",import.meta.url).href;function image11050(ctx,ctrans,frame,ratio,time){var pathData="M 0 0 L 0 480 480 480 480 0 0 0";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(20,0,0,20,0,0);ctx.transform(1.0416666666666667,0,0,1.0416666666666667,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj11050);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function shape11051(ctx,ctrans,frame,ratio,time){var pathData="M -720 -720 L 720 -720 720 720 -720 720 -720 -720";drawPath(ctx,pathData,false);ctx.save();ctx.clip();ctx.transform(60,0,0,60,-720,-720);ctx.transform(1.0416666666666667,0,0,1.0416666666666667,-0.5,-0.5);var fimg=ctrans.applyToImage(imageObj11050);var pat=ctx.createPattern(fimg,"repeat");ctx.fillStyle=pat;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore()}function sprite11052(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(11052,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,36.0,36.0);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape11051",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{image11050,shape11051,sprite11052});
await Promise.all([imageObj11050].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-36.0,-36.0);}else{ctx.transform(1,0,0,1,-36.0+(clip?.x??0),-36.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite11052(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
