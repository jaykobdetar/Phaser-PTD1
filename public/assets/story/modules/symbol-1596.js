import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1595(ctx,ctrans,frame,ratio,time){var pathData="M 25 -100 L 319 -9 98 68 25 -100 98 68 -33 113 -161 157 -228 180 Q -398 -23 -250 -164 L -233 -180 -130 -148 25 -100 M -161 157 L -250 -164 -161 157 M -130 -148 L -33 113 -130 -148";ctx.fillStyle=tocolor(ctrans.apply([153,153,153,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 98 68 L 319 -9 25 -100 -130 -148 -233 -180 -250 -164 Q -398 -23 -228 180 L -161 157 -33 113 98 68";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([51,51,51,1]));ctx.lineWidth=2.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode);var pathData="M 25 -100 L 98 68 M -33 113 L -130 -148 M -250 -164 L -161 157";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([51,51,51,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1596(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1596,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,16.95,10.0);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1595",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1595,sprite1596});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-16.95,-10.0);}else{ctx.transform(1,0,0,1,-16.95+(clip?.x??0),-10.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1596(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
