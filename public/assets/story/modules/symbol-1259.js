import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1257(ctx,ctrans,frame,ratio,time){var pathData="M 1107 346 Q 1394 381 1377 606 1580 1019 1187 1246 825 1683 397 1356 -120 1252 57 876 -114 512 227 306 312 10 547 16 905 -73 1107 346";ctx.fillStyle=tocolor(ctrans.apply([204,102,153,0.7058824]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1258(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1258,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1257",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1259(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1259,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,56.15,58.1);var clips=[];var frame_cnt=9;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1258",canvas,ctx,[0.05,0.0,0.0,0.05,-36.15,-37.4],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break;case 1:place("sprite1258",canvas,ctx,[0.05,0.0,0.0,0.05,-36.15,-37.4],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,128)),1,(0+time)%1,0,time);break;case 2:place("sprite1258",canvas,ctx,[0.05,0.0,0.0,0.05,-36.15,-37.4],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,256)),1,(0+time)%1,0,time);break;case 3:place("sprite1258",canvas,ctx,[0.05461044311523437,0.0,0.0,0.05461044311523437,-39.5,-40.85],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,212)),1,(0+time)%1,0,time);break;case 4:place("sprite1258",canvas,ctx,[0.05922088623046875,0.0,0.0,0.05922088623046875,-42.8,-44.3],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,172)),1,(0+time)%1,0,time);break;case 5:place("sprite1258",canvas,ctx,[0.06383056640625,0.0,0.0,0.06383056640625,-46.15,-47.75],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,128)),1,(0+time)%1,0,time);break;case 6:place("sprite1258",canvas,ctx,[0.0684417724609375,0.0,0.0,0.0684417724609375,-49.5,-51.2],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,84)),1,(0+time)%1,0,time);break;case 7:place("sprite1258",canvas,ctx,[0.07305221557617188,0.0,0.0,0.07305221557617188,-52.8,-54.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,44)),1,(0+time)%1,0,time);break;case 8:place("sprite1258",canvas,ctx,[0.07766265869140625,0.0,0.0,0.07766265869140625,-56.15,-58.1],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1257,sprite1258,sprite1259});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-56.15,-58.1);}else{ctx.transform(1,0,0,1,-56.15+(clip?.x??0),-58.1+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1259(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
