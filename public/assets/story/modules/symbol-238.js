import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape237(ctx,ctrans,frame,ratio,time){var pathData="M 16000 -2702 L 16000 -1702 15000 -1702 15000 -2702 16000 -2702 M 1999 -2702 L 1999 -1702 999 -1702 999 -2702 1999 -2702 M 7690 -1702 L 7690 -2702 8690 -2702 8690 -1702 7690 -1702 M 10710 2319 L 10710 1319 11710 1319 11710 2319 10710 2319 M 5019 1319 L 5019 2319 4019 2319 4019 1319 5019 1319 M 17249 2319 L 18249 2319 18249 3319 17249 3319 17249 2319 M 13989 5399 L 13989 6399 12989 6399 12989 5399 13989 5399 M 17249 9918 L 17249 8918 18249 8918 18249 9918 17249 9918 M -3462 -2702 L -3462 -1702 -4462 -1702 -4462 -2702 -3462 -2702 M -3022 2319 L -4022 2319 -4022 1319 -3022 1319 -3022 2319 M -7080 5198 L -7080 6198 -8080 6198 -8080 5198 -7080 5198 M -3022 10098 L -4022 10098 -4022 9098 -3022 9098 -3022 10098 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite238(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(238,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,406.4,137.5);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape237",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape237,sprite238});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-406.4,-137.5);}else{ctx.transform(1,0,0,1,-406.4+(clip?.x??0),-137.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite238(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
