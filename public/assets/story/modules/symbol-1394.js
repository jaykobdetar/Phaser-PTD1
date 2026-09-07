import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1392(ctx,ctrans,frame,ratio,time){var pathData="M 6 365 Q -20 6 -411 0 -15 -28 25 -366 8 4 412 23 -9 25 6 365";ctx.fillStyle=tocolor(ctrans.apply([0,0,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1393(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1393,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1394(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1394,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,12.15,29.25);var clips=[];var frame_cnt=5;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1393",canvas,ctx,[0.023300933837890624,0.0,0.0,0.023300933837890624,8.4,-11.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1393",canvas,ctx,[0.02997589111328125,0.0,0.0,0.02997589111328125,8.4,-11.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1393",canvas,ctx,[0.03665084838867187,0.0,0.0,0.03665084838867187,8.35,-11.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1393",canvas,ctx,[0.043325042724609374,0.0,0.0,0.043325042724609374,8.35,-11.0],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1393",canvas,ctx,[0.05,0.0,0.0,0.05,8.4,-10.95],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1392,sprite1393,sprite1394});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-12.15,-29.25);}else{ctx.transform(1,0,0,1,-12.15+(clip?.x??0),-29.25+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1394(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
