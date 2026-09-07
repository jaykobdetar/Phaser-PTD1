import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape40(ctx,ctrans,frame,ratio,time){var pathData="M 2698 -3489 L 3698 -3489 3698 -2489 2698 -2489 2698 -3489 M 3698 -309 L 3698 691 2698 691 2698 -309 3698 -309 M -7098 -3529 L -6098 -3529 -6098 -2529 -7098 -2529 -7098 -3529 M -1961 -1569 L -961 -1569 -961 -569 -1961 -569 -1961 -1569 M -6078 -349 L -6078 651 -7078 651 -7078 -349 -6078 -349 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite41(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(41,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,357.3,178.85);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape40",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape40,sprite41});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-357.3,-178.85);}else{ctx.transform(1,0,0,1,-357.3+(clip?.x??0),-178.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite41(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
