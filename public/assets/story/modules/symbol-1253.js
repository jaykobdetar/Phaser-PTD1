import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1252(ctx,ctrans,frame,ratio,time){var pathData="M 205 -6 L -146 115 Q -260 -22 -149 -115 L 205 -6";ctx.fillStyle=tocolor(ctrans.apply([204,204,204,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 205 -6 L -149 -115 Q -260 -22 -146 115 L 205 -6 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,204,255,1]));ctx.lineWidth=2.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1253(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1253,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,11.2,6.75);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1252",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1252,sprite1253});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-11.2,-6.75);}else{ctx.transform(1,0,0,1,-11.2+(clip?.x??0),-6.75+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1253(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
