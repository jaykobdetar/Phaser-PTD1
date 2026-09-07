import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape11053(ctx,ctrans,frame,ratio,time){var pathData="M 1980 -1901 Q 2800 -1114 2800 0 2800 1114 1980 1900 1160 2688 0 2688 -1160 2688 -1980 1900 -2800 1114 -2800 0 -2800 -1114 -1980 -1901 -1160 -2687 0 -2687 1160 -2687 1980 -1901";ctx.fillStyle=tocolor(ctrans.apply([51,153,255,0.49803922]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function shape11054(ctx,ctrans,frame,ratio,time){var pathData="M 891 -777 L 266 -17 972 689 696 965 17 285 -589 1022 -890 774 -260 8 -951 -682 -675 -958 -11 -294 590 -1025 891 -777";ctx.fillStyle=tocolor(ctrans.apply([255,0,0,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 891 -777 L 266 -17 972 689 696 965 17 285 -589 1022 -890 774 -260 8 -951 -682 -675 -958 -11 -294 590 -1025 891 -777 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([127,0,0,1]));ctx.lineWidth=1.0;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite11055(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(11055,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,140.0,134.35);var clips=[];var frame_cnt=2;frame=frame%frame_cnt;switch(frame){case 0:place("shape11053",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break;case 1:place("shape11054",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape11053,shape11054,sprite11055});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-140.0,-134.35);}else{ctx.transform(1,0,0,1,-140.0+(clip?.x??0),-134.35+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite11055(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
