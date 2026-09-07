import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape571(ctx,ctrans,frame,ratio,time){var pathData="M 379 -10560 L -621 -10560 -621 -11560 379 -11560 379 -10560 M 2899 -6059 L 2899 -5059 1899 -5059 1899 -6059 2899 -6059 M 579 -6980 L -421 -6980 -421 -7980 579 -7980 579 -6980 M -4460 -11500 L -3460 -11500 -3460 -10500 -4460 -10500 -4460 -11500 M -7681 -4360 L -7681 -3360 -8681 -3360 -8681 -4360 -7681 -4360 M -3261 -6140 L -3261 -5140 -4261 -5140 -4261 -6140 -3261 -6140";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 2738 -11560 L 2738 -10560 1738 -10560 1738 -11560 2738 -11560 M -3261 -7980 L -3261 -6980 -4261 -6980 -4261 -7980 -3261 -7980 M -8681 -5860 L -7681 -5860 -7681 -4860 -8681 -4860 -8681 -5860 M -1290 -4900 L -1290 -5900 -290 -5900 -290 -4900 -1290 -4900 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([51,153,255,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite572(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(572,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,436.45,580.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape571",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape571,sprite572});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-436.45,-580.4);}else{ctx.transform(1,0,0,1,-436.45+(clip?.x??0),-580.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite572(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
