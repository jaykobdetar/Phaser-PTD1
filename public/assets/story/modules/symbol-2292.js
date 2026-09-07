import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape2291(ctx,ctrans,frame,ratio,time){var pathData="M 268 -114 Q 379 -66 379 0 379 66 268 113 157 160 0 160 -157 160 -268 113 -379 66 -379 0 -379 -66 -268 -114 -157 -160 0 -160 157 -160 268 -114";ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.6509804]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite2292(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2292,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,18.95,8.0);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape2291",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape2291,sprite2292});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-18.95,-8.0);}else{ctx.transform(1,0,0,1,-18.95+(clip?.x??0),-8.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite2292(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
