import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);
function shape1354(ctx,ctrans,frame,ratio,time){var pathData="M 272 -273 Q 272 -205 244 -176 229 -161 182 -144 139 -128 120 -102 92 -62 92 24 92 98 167 235 L 242 373 Q 242 401 191 442 140 483 106 483 65 483 38 448 17 419 17 392 L 1 377 Q -24 404 -74 429 -141 463 -204 463 L -249 458 -251 368 Q -251 282 -174 224 -98 167 -98 124 L -97 25 Q -99 -66 -109 -117 -129 -215 -204 -248 -241 -264 -251 -273 -271 -292 -271 -334 -271 -436 -221 -470 -147 -520 12 -378 L 43 -404 Q 66 -426 91 -430 L 201 -430 Q 255 -391 268 -346 272 -330 272 -273 M 225 -325 Q 220 -346 192 -383 L 92 -380 50 -341 Q 30 -325 6 -325 -11 -325 -56 -364 L -133 -430 Q -228 -495 -228 -330 -228 -294 -207 -279 L -158 -261 Q -82 -241 -68 -158 -58 -100 -58 24 -58 163 -75 194 -85 212 -208 322 L -208 418 Q -179 412 -88 369 L 1 328 Q 44 328 58 368 L 66 423 98 428 152 401 191 374 119 248 Q 47 127 47 25 47 -96 137 -162 L 199 -209 Q 227 -237 227 -275 L 225 -325";ctx.fillStyle=tocolor(ctrans.apply([51,51,51,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd");var pathData="M 225 -325 L 227 -275 Q 227 -237 199 -209 L 137 -162 Q 47 -96 47 25 47 127 119 248 L 191 374 152 401 98 428 66 423 58 368 Q 44 328 1 328 L -88 369 Q -179 412 -208 418 L -208 322 Q -85 212 -75 194 -58 163 -58 24 -58 -100 -68 -158 -82 -241 -158 -261 L -207 -279 Q -228 -294 -228 -330 -228 -495 -133 -430 L -56 -364 Q -11 -325 6 -325 30 -325 50 -341 L 92 -380 192 -383 Q 220 -346 225 -325";ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));drawPath(ctx,pathData,false);ctx.fill("evenodd")}function sprite1355(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1355,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
var clips=[];var frame_cnt=1;frame=frame%frame_cnt;switch(frame){case 0:place("shape1354",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);break}
}finally{tools.leaveSprite();}
}function sprite1356(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1356,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{
ctx.save();ctx.transform(1,0,0,1,27.75,24.15);var clips=[];var frame_cnt=4;frame=frame%frame_cnt;switch(frame){case 0:place("sprite1355",canvas,ctx,[0.05,0.0,0.0,0.05,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 1:place("sprite1355",canvas,ctx,[-0.02485809326171875,0.0433013916015625,-0.0433013916015625,-0.02485809326171875,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 2:place("sprite1355",canvas,ctx,[-0.02485809326171875,-0.0433013916015625,0.0433013916015625,-0.02485809326171875,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break;case 3:place("sprite1355",canvas,ctx,[0.05,0.0,0.0,0.05,-0.05,0.0],ctrans,1,(0+time)%1,0,time);break}ctx.restore()
}finally{tools.leaveSprite();}
}
Object.assign(registry,{shape1354,sprite1355,sprite1356});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-27.75,-24.15);}else{ctx.transform(1,0,0,1,-27.75+(clip?.x??0),-24.15+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1356(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
