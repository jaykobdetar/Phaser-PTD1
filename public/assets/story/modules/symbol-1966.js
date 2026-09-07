import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1965(ctx,ctrans,frame,ratio,time){var pathData="M 440 -65 L 420 280 180 485 520 275 555 -150 440 -65 M 590 -230 L 260 -55 -60 -240 340 -660 -60 -240 260 -55 590 -230 590 260 100 610 260 -55 100 610 -320 460 -590 40 -385 -35 -252 -336 -60 -240 -20 -870 -60 -240 -252 -336 -385 -35 -590 40 -500 -460 -20 -870 340 -660 590 -230 M -60 -240 L -320 460 -60 -240 M -252 -336 L -500 -460 -252 -336";ctx.fillStyle=tocolor(ctrans.apply([102,204,255,0.6392157]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 440 -65 L 555 -150 520 275 180 485 420 280 440 -65";ctx.fillStyle=tocolor(ctrans.apply([255,255,255,0.6]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 340 -660 L -60 -240 260 -55 590 -230 M -20 -870 L -60 -240 -252 -336 -385 -35 -590 40 M -320 460 L -60 -240 M 100 610 L 260 -55 M -500 -460 L -252 -336";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([196,236,255,0.5882353]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1966(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1966,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,30.0,44.0);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1965",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1965,sprite1966});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-30.0,-44.0);}else{ctx.transform(1,0,0,1,-30.0+(clip?.x??0),-44.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1966(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
