import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1451(ctx,ctrans,frame,ratio,time){var pathData="M -142 144 Q -285 -27 -146 -144 L 296 -7 -142 144";ctx.fillStyle=tocolor(ctrans.apply([255,153,51,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M -142 144 L 296 -7 -146 -144 Q -285 -27 -142 144 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([153,51,0,1]));ctx.lineWidth=2.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1452(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1452,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,11.75,8.2);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1451",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1451,sprite1452});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-11.75,-8.2);}else{ctx.transform(1,0,0,1,-11.75+(clip?.x??0),-8.2+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1452(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
