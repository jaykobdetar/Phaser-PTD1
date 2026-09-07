import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape470(ctx,ctrans,frame,ratio,time){var pathData="M 5559 -4540 L 5559 -3540 4559 -3540 4559 -4540 5559 -4540 M 5638 -781 L 5638 219 4638 219 4638 -781 5638 -781 M 12398 -4540 L 12398 -3540 11398 -3540 11398 -4540 12398 -4540 M 8478 -4540 L 8478 -3540 7478 -3540 7478 -4540 8478 -4540 M 8478 -739 L 8478 261 7478 261 7478 -739 8478 -739 M 12378 -781 L 12378 219 11378 219 11378 -781 12378 -781 M 3738 2179 L 2738 2179 2738 1179 3738 1179 3738 2179 M -4001 -4580 L -4001 -3580 -5001 -3580 -5001 -4580 -4001 -4580 M -4041 -781 L -4041 219 -5041 219 -5041 -781 -4041 -781 M -161 -3641 L -161 -2641 -1161 -2641 -1161 -3641 -161 -3641 M -161 -781 L -161 219 -1161 219 -1161 -781 -161 -781 M -3041 3118 L -4041 3118 -4041 2118 -3041 2118 -3041 3118 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite471(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(471,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,254.45,231.4);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape470",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape470,sprite471});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-254.45,-231.4);}else{ctx.transform(1,0,0,1,-254.45+(clip?.x??0),-231.4+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite471(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
