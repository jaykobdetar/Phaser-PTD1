import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape809(ctx,ctrans,frame,ratio,time){var pathData="M 3057 -9281 L 3057 -8281 2057 -8281 2057 -9281 3057 -9281 M 2977 -3482 L 2977 -2482 1977 -2482 1977 -3482 2977 -3482 M 1855 -683 L 1855 317 855 317 855 -683 1855 -683 M -6946 -442 L -6946 558 -7946 558 -7946 -442 -6946 -442 M -1506 -6758 L -1506 -7758 -506 -7758 -506 -6758 -1506 -6758 M -3243 -442 L -3243 558 -4243 558 -4243 -442 -3243 -442 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite810(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(810,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,399.7,466.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape809",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape809,sprite810});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-399.7,-466.45);}else{ctx.transform(1,0,0,1,-399.7+(clip?.x??0),-466.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite810(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
