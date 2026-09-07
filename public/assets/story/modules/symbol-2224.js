import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape2222(ctx,ctrans,frame,ratio,time){var pathData="M -30 -57 Q -45 -41 -67 -41 -89 -41 -105 -57 -120 -72 -120 -94 -120 -116 -105 -132 -89 -147 -67 -147 -45 -147 -30 -132 -14 -116 -14 -94 -14 -72 -30 -57";ctx.fillStyle=tocolor(ctrans.apply([204,204,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 133 -134 Q 189 -78 189 0 189 78 133 133 78 189 0 189 -78 189 -134 133 -189 78 -189 0 -189 -78 -134 -134 -78 -189 0 -189 78 -189 133 -134 M -30 -57 Q -14 -72 -14 -94 -14 -116 -30 -132 -45 -147 -67 -147 -89 -147 -105 -132 -120 -116 -120 -94 -120 -72 -105 -57 -89 -41 -67 -41 -45 -41 -30 -57";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([153,102,0,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.0115966796875,0,0,0.0115966796875,0,0);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([255,255,255,1])));grd.addColorStop(1,tocolor(ctrans.apply([153,102,0,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M 133 -134 Q 189 -78 189 0 189 78 133 133 78 189 0 189 -78 189 -134 133 -189 78 -189 0 -189 -78 -134 -134 -78 -189 0 -189 78 -189 133 -134 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([102,51,0,1]));ctx.lineWidth=2.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite2223(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2223,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape2222",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite2224(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2224,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,13.9,13.9);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite2223",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break;case 1:place("sprite2223",canvas,ctx,[0.0554840087890625,0.0,0.0,0.0554840087890625,0.0,0.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,84)),1,(0+time)%1,0,time);break;case 2:place("sprite2223",canvas,ctx,[0.06096954345703125,0.0,0.0,0.06096954345703125,0.0,0.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,172)),1,(0+time)%1,0,time);break;case 3:place("sprite2223",canvas,ctx,[0.06645431518554687,0.0,0.0,0.06645431518554687,0.0,0.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,256)),1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape2222,sprite2223,sprite2224});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-13.9,-13.9);}else{ctx.transform(1,0,0,1,-13.9+(clip?.x??0),-13.9+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite2224(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
