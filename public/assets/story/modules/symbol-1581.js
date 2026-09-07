import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1579(ctx,ctrans,frame,ratio,time){var pathData="M 1 215 Q 64 -163 401 125 738 -163 797 213 820 356 401 666 -18 356 1 215";ctx.fillStyle=tocolor(ctrans.apply([83,0,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1580(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1580,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1579",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1581(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1581,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,18.6,13.65);var clips=[];var frame_cnt=10;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1580",canvas,ctx,[0.01278228759765625,0.0,0.0,0.01278228759765625,-3.75,-1.25],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1580",canvas,ctx,[0.031391143798828125,0.0,0.0,0.031391143798828125,-11.2,-7.45],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,212)),1,(0+time)%1,0,time);break;case 4:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,172)),1,(0+time)%1,0,time);break;case 5:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,128)),1,(0+time)%1,0,time);break;case 6:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,84)),1,(0+time)%1,0,time);break;case 7:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,44)),1,(0+time)%1,0,time);break;case 8:place("sprite1580",canvas,ctx,[0.05,0.0,0.0,0.05,-18.6,-13.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break;case 9:break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1579,sprite1580,sprite1581});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-18.6,-13.65);}else{ctx.transform(1,0,0,1,-18.6+(clip?.x??0),-13.65+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1581(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
