import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape2116(ctx,ctrans,frame,ratio,time){var pathData="M 500 40 Q 670 174 840 0 L 1379 1960 Q 690 2731 0 1960 L 500 40";var grd=ctx.createLinearGradient(689.0,2000.5,689.0,135.5);grd.addColorStop(0,tocolor(ctrans.apply([255,153,204,0.49803922])));grd.addColorStop(1,tocolor(ctrans.apply([255,255,255,0.0])));ctx.fillStyle=grd;drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite2117(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2117,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape2116",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite2118(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2118,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,34.0,83.0);var clips=[];var frame_cnt=6;frame=frame%frame_cnt;switch(frame){case 0:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.00468902587890625,-34.0,-29.9],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.013751220703125,-34.0,-40.55],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.02281341552734375,-34.0,-51.15],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.0318756103515625,-34.0,-61.75],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.04093780517578125,-34.0,-72.4],ctrans,1,(0+time)%1,0,time);break;case 5:place("sprite2117",canvas,ctx,[0.05,0.0,0.0,0.05,-34.0,-83.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape2116,sprite2117,sprite2118});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-34.0,-83.0);}else{ctx.transform(1,0,0,1,-34.0+(clip?.x??0),-83.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite2118(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
