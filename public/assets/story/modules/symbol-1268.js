import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function sprite1267(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1267,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1215",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function shape1215(ctx,ctrans,frame,ratio,time){var pathData="M 27 244 Q 0 202 0 143 0 84 27 42 53 0 91 0 129 0 155 42 182 84 182 143 182 202 155 244 129 286 91 286 53 286 27 244";drawPath(ctx,pathData,false);ctx.fillStyle=tocolor(ctrans.apply([153,102,0,1]));ctx.fill("evenodd");ctx.save();ctx.clip();ctx.transform(0.00885009765625,0,0,0.00885009765625,91,143);var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);grd.addColorStop(0,tocolor(ctrans.apply([255,204,153,1])));grd.addColorStop(1,tocolor(ctrans.apply([153,102,0,1])));ctx.fillStyle=grd;ctx.fillRect(-16384,-16384,32768,32768);ctx.restore();var pathData="M 27 244 Q 0 202 0 143 0 84 27 42 53 0 91 0 129 0 155 42 182 84 182 143 182 202 155 244 129 286 91 286 53 286 27 244 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([153,102,0,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite1268(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1268,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,9.15,55.7);var clips=[];var frame_cnt=8;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1267",canvas,ctx,[0.05,0.0,0.0,0.05,-4.55,-55.2],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1267",canvas,ctx,[0.02485809326171875,0.0433013916015625,-0.0433013916015625,0.02485809326171875,3.95,-47.2],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1267",canvas,ctx,[-0.02485809326171875,0.0433013916015625,-0.0433013916015625,-0.02485809326171875,8.45,-31.8],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1267",canvas,ctx,[-0.05,0.0,0.0,-0.05,4.55,-15.9],ctrans,1,(0+time)%1,0,time);break;case 4:place("sprite1267",canvas,ctx,[-0.02485809326171875,-0.0433013916015625,0.0433013916015625,-0.02485809326171875,-3.95,-7.2],ctrans,1,(0+time)%1,0,time);break;case 5:place("sprite1267",canvas,ctx,[0.02485809326171875,-0.0433013916015625,0.0433013916015625,0.02485809326171875,-8.45,-6.0],ctrans,1,(0+time)%1,0,time);break;case 6:place("sprite1267",canvas,ctx,[0.05,0.0,0.0,0.05,-4.55,-5.2],ctrans,1,(0+time)%1,0,time);break;case 7:break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{sprite1267,shape1215,sprite1268});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-9.15,-55.7);}else{ctx.transform(1,0,0,1,-9.15+(clip?.x??0),-55.7+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1268(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
