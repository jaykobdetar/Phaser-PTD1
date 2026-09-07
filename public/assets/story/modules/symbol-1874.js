import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function sprite1872(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1872,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1873(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1873,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1872",canvas,ctx,[0.4362945556640625,0.0,0.0,0.4362945556640625,378.0,-204.0],ctrans,1,(0+time)%1,0,time);place("sprite1872",canvas,ctx,[0.4828033447265625,0.0,0.0,0.4828033447265625,273.0,173.0],ctrans,1,(0+time)%1,0,time);place("sprite1872",canvas,ctx,[0.4362945556640625,0.0,0.0,0.4362945556640625,-378.0,-211.0],ctrans,1,(0+time)%1,0,time);place("sprite1872",canvas,ctx,[0.4828033447265625,0.0,0.0,0.4828033447265625,-273.0,166.0],ctrans,1,(0+time)%1,0,time);break}
}finally{tools.leaveSprite();}
}function shape1871(ctx,ctrans,frame,ratio,time){var pathData="M 193 -590 L 93 435 218 435 218 530 93 530 Q 134 791 -24 780 -86 776 -67 545 L -217 545 -217 445 -74 437 -132 -560 28 -780 193 -590";ctx.fillStyle=tocolor(ctrans.apply([0,204,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 193 -590 L 93 435 218 435 218 530 93 530 Q 134 791 -24 780 -86 776 -67 545 L -217 545 -217 445 -74 437 -132 -560 28 -780 193 -590 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,102,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1874(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1874,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,24.7,48.4);var clips=[];var frame_cnt=9;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.7],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-2.25],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,220)),1,(0+time)%1,0,time);break;case 2:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-5.15],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,182)),1,(0+time)%1,0,time);break;case 3:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-8.1],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,146)),1,(0+time)%1,0,time);break;case 4:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-11.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,110)),1,(0+time)%1,0,time);break;case 5:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-13.95],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,74)),1,(0+time)%1,0,time);break;case 6:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-16.85],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,36)),1,(0+time)%1,0,time);break;case 7:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-19.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break;case 8:place("sprite1873",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,-19.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{sprite1872,sprite1873,shape1871,sprite1874});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-24.7,-48.4);}else{ctx.transform(1,0,0,1,-24.7+(clip?.x??0),-48.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1874(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
