import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1334(ctx,ctrans,frame,ratio,time){var pathData="M 0 -262 Q 100 -262 172 -198 L 185 -186 209 -159 Q 262 -91 262 0 262 109 185 185 L 138 224 95 246 Q 51 262 0 262 -69 262 -124 232 L -164 205 -186 185 Q -262 109 -262 0 -262 -109 -186 -186 L -169 -201 -127 -230 Q -70 -262 0 -262";ctx.fillStyle=tocolor(ctrans.apply([255,0,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 0 -262 Q -136 -324 -199 -460 -28 -505 0 -262";ctx.fillStyle=tocolor(ctrans.apply([0,102,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 0 -262 Q -136 -324 -199 -460 -28 -505 0 -262 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([0,0,0,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1335(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1335,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1334",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1336(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1336,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,27.2,23.85);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1335",canvas,ctx,[0.05,0.0,0.0,0.05,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1335",canvas,ctx,[-0.02485809326171875,0.0433013916015625,-0.0433013916015625,-0.02485809326171875,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1335",canvas,ctx,[-0.02485809326171875,-0.0433013916015625,0.0433013916015625,-0.02485809326171875,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1335",canvas,ctx,[0.05,0.0,0.0,0.05,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1334,sprite1335,sprite1336});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-27.2,-23.85);}else{ctx.transform(1,0,0,1,-27.2+(clip?.x??0),-23.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1336(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
