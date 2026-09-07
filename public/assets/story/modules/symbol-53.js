import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape52(ctx,ctrans,frame,ratio,time){var pathData="M -881 -7989 L -881 -6989 -1881 -6989 -1881 -7989 -881 -7989 M -1881 -5708 L -881 -5708 -881 -4708 -1881 -4708 -1881 -5708 M -881 -2380 L -1881 -2380 -1881 -3380 -881 -3380 -881 -2380 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite53(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(53,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,96.45,401.85);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape52",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape52,sprite53});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-96.45,-401.85);}else{ctx.transform(1,0,0,1,-96.45+(clip?.x??0),-401.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite53(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
