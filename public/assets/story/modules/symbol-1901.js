import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1899(ctx,ctrans,frame,ratio,time){var pathData="M 523 523 L -522 523 -522 -522 523 -522 523 523";ctx.fillStyle=tocolor(ctrans.apply([255,204,204,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1900(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1900,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1899",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1901(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1901,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,27.5,27.5);var clips=[];var frame_cnt=8;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1900",canvas,ctx,[0.0375,0.0,0.0,0.0375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1900",canvas,ctx,[0.02335357666015625,0.029264068603515624,-0.0292633056640625,0.02335357666015625,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1900",canvas,ctx,[-0.00829315185546875,0.03654403686523437,-0.03654403686523437,-0.00829315185546875,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1900",canvas,ctx,[-0.033779144287109375,0.01617584228515625,-0.01617584228515625,-0.033779144287109375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1900",canvas,ctx,[-0.033779144287109375,-0.01617584228515625,0.01617584228515625,-0.033779144287109375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 5:place("sprite1900",canvas,ctx,[-0.00829315185546875,-0.03654403686523437,0.03654403686523437,-0.00829315185546875,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 6:place("sprite1900",canvas,ctx,[0.02335357666015625,-0.0292633056640625,0.029264068603515624,0.02335357666015625,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 7:place("sprite1900",canvas,ctx,[0.0375,0.0,0.0,0.0375,0.0,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1899,sprite1900,sprite1901});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-27.5,-27.5);}else{ctx.transform(1,0,0,1,-27.5+(clip?.x??0),-27.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1901(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
