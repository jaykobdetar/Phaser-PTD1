import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1120(ctx,ctrans,frame,ratio,time){var pathData="M 165 -42 L 77 41 77 171 -7 81 -123 161 -80 28 -165 -67 -43 -52 -3 -172 47 -42 165 -42";ctx.fillStyle=tocolor(ctrans.apply([255,255,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1121(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1121,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1120",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1870(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1870,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,9.45,9.5);var clips=[];var frame_cnt=5;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1121",canvas,ctx,[0.054998779296875,0.0,0.0,0.054998779296875,0.0,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1121",canvas,ctx,[0.0,0.054998779296875,-0.054998779296875,0.0,-0.05,-0.05],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1121",canvas,ctx,[-0.054998779296875,0.0,0.0,-0.054998779296875,0.0,-0.1],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1121",canvas,ctx,[0.0,-0.054998779296875,0.054998779296875,0.0,0.05,-0.05],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1121",canvas,ctx,[0.054998779296875,0.0,0.0,0.054998779296875,0.0,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1120,sprite1121,sprite1870});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-9.45,-9.5);}else{ctx.transform(1,0,0,1,-9.45+(clip?.x??0),-9.5+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1870(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
