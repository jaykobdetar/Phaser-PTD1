import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape198(ctx,ctrans,frame,ratio,time){var pathData="M 2611 -2681 L 1611 -2681 1611 -3681 2611 -3681 2611 -2681 M 5721 1152 L 4721 1152 4721 152 5721 152 5721 1152 M 5441 7153 L 5441 8153 4441 8153 4441 7153 5441 7153 M 341 4802 L -659 4802 -659 3802 341 3802 341 4802 M 339 11009 L -661 11009 -661 10009 339 10009 339 11009 M 1119 14448 L 2119 14448 2119 15448 1119 15448 1119 14448 M 7118 14448 L 8118 14448 8118 15448 7118 15448 7118 14448 M 14043 9711 L 14043 10711 13043 10711 13043 9711 14043 9711 M 14043 14448 L 14043 15448 13043 15448 13043 14448 14043 14448 M -1179 202 L -179 202 -179 1202 -1179 1202 -1179 202 M -3861 1152 L -4861 1152 -4861 152 -3861 152 -3861 1152 M -6981 202 L -6981 1202 -7981 1202 -7981 202 -6981 202 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite199(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(199,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,401.45,186.45);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape198",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape198,sprite199});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-401.45,-186.45);}else{ctx.transform(1,0,0,1,-401.45+(clip?.x??0),-186.45+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite199(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
