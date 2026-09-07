import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape992(ctx,ctrans,frame,ratio,time){var pathData="M 1111 -5380 L 1111 -4380 111 -4380 111 -5380 1111 -5380 M 3011 -1878 L 4011 -1878 4011 -878 3011 -878 3011 -1878 M 4011 2282 L 3011 2282 3011 1282 4011 1282 4011 2282 M 3011 4461 L 4011 4461 4011 5461 3011 5461 3011 4461 M 1111 5461 L 111 5461 111 4461 1111 4461 1111 5461 M -5360 -8680 L -5360 -7680 -6360 -7680 -6360 -8680 -5360 -8680 M -7041 -10250 L -7041 -9250 -8041 -9250 -8041 -10250 -7041 -10250 M -8681 -8680 L -8681 -7680 -9681 -7680 -9681 -8680 -8681 -8680 M -7041 -8680 L -7041 -7680 -8041 -7680 -8041 -8680 -7041 -8680 M -9169 -4380 L -9169 -5380 -8169 -5380 -8169 -4380 -9169 -4380 M -2989 -5380 L -1989 -5380 -1989 -4380 -2989 -4380 -2989 -5380 M -5109 -5380 L -5109 -4380 -6109 -4380 -6109 -5380 -5109 -5380 M -6109 4461 L -5109 4461 -5109 5461 -6109 5461 -6109 4461 M -1989 5421 L -2989 5421 -2989 4421 -1989 4421 -1989 5421 M -9169 4478 L -8169 4478 -8169 5478 -9169 5478 -9169 4478 Z";var scaleMode="NORMAL";ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));ctx.lineWidth=4.8;ctx.lineCap="round";ctx.lineJoin="round";drawPath(ctx,pathData,true,scaleMode)}function sprite993(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(993,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,486.45,514.9);var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape992",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape992,sprite993});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-486.45,-514.9);}else{ctx.transform(1,0,0,1,-486.45+(clip?.x??0),-514.9+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite993(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
