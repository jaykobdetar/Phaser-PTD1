import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


var imageObj4152 = document.createElement("img");
imageObj4152.src=new URL("../bitmaps/9ef0012666e266aedc107b6d.png",import.meta.url).href;
function image4152(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 580 460 580 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0344827586206897,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4152);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3279(ctx,ctrans,frame,ratio,time){
	var pathData="M 7320 -1379 Q 7520 -1379 7520 -1179 L 7520 1180 Q 7520 1380 7320 1380 L -7319 1380 Q -7519 1380 -7519 1180 L -7519 -1179 Q -7519 -1379 -7319 -1379 L 7320 -1379";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.8039216]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 7320 -1379 L -7319 -1379 Q -7519 -1379 -7519 -1179 L -7519 1180 Q -7519 1380 -7319 1380 L 7320 1380 Q 7520 1380 7520 1180 L 7520 -1179 Q 7520 -1379 7320 -1379 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,1]));
	ctx.lineWidth=3.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite3280(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3280,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3279",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape3282(ctx,ctrans,frame,ratio,time){
	var pathData="M 15039 8479 Q 15239 8479 15239 8679 L 15239 8935 Q 15239 9135 15039 9135 L 13999 9135 Q 13799 9135 13799 8935 L 13799 8679 Q 13799 8479 13999 8479 L 15039 8479";
	var grd=ctx.createLinearGradient(14519.0,8479.0,14519.0,9135.0);
	grd.addColorStop(0,tocolor(ctrans.apply([0,204,51,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([0,32,16,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([103,216,191,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([103,216,191,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function shape3284(ctx,ctrans,frame,ratio,time){
	var pathData="M 520 -328 Q 720 -328 720 -128 L 720 128 Q 720 328 520 328 L -520 328 Q -720 328 -720 128 L -720 -128 Q -720 -328 -520 -328 L 520 -328";
	var grd=ctx.createLinearGradient(0.0,-328.0,0.0,328.0);
	grd.addColorStop(0,tocolor(ctrans.apply([255,0,0,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([153,0,0,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([103,216,191,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([103,216,191,1])));
	ctx.fillStyle = grd;
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

var imageObj3308 = document.createElement("img");
imageObj3308.src=new URL("../bitmaps/f13b8f7c8103e6bbf3c69183.png",import.meta.url).href;
function image3308(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 280 280 280 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3308);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2380 = document.createElement("img");
imageObj2380.src=new URL("../bitmaps/5b9f339f186865c9d4acb80e.png",import.meta.url).href;
function image2380(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2380);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2381(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2380);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2382 = document.createElement("img");
imageObj2382.src=new URL("../bitmaps/81a285c4d491bf31fb9ea4b5.png",import.meta.url).href;
function image2382(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2382);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2383(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2382);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2384 = document.createElement("img");
imageObj2384.src=new URL("../bitmaps/f44c8c41ea45907ae20c3622.png",import.meta.url).href;
function image2384(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2384);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2385(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -742 L 594 -742 594 662 -594 662 -594 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-742);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2384);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2386 = document.createElement("img");
imageObj2386.src=new URL("../bitmaps/130e6473aca2b7c429928d5c.png",import.meta.url).href;
function image2386(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2386);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2387(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -822 L 486 -822 486 690 -486 690 -486 -822";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-822);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2386);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2388 = document.createElement("img");
imageObj2388.src=new URL("../bitmaps/33ec74aa6ea40a7b986277ba.png",import.meta.url).href;
function image2388(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2388);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2389(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -702 L 486 -702 486 702 -486 702 -486 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-702);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2388);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2390 = document.createElement("img");
imageObj2390.src=new URL("../bitmaps/c6a832cf56d95ba648236313.png",import.meta.url).href;
function image2390(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2390);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2391(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2390);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2392 = document.createElement("img");
imageObj2392.src=new URL("../bitmaps/6fcf162fafde7ab021cdeaa2.png",import.meta.url).href;
function image2392(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2392);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2393(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -722 L 594 -722 594 682 -594 682 -594 -722";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-722);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2392);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2394 = document.createElement("img");
imageObj2394.src=new URL("../bitmaps/6cd6ea36919c303cb974934c.png",import.meta.url).href;
function image2394(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2394);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2395(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -782 L 486 -782 486 676 -486 676 -486 -782";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-782);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2394);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2396 = document.createElement("img");
imageObj2396.src=new URL("../bitmaps/7b8482341cab8be4219f8ae9.png",import.meta.url).href;
function image2396(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 640 580 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2396);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2397(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -903 L 864 -903 864 663 -864 663 -864 -903";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-903);
	ctx.transform(1.03125,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2396);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2398 = document.createElement("img");
imageObj2398.src=new URL("../bitmaps/f27c52794a99b3624ce1edc4.png",import.meta.url).href;
function image2398(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 640 580 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2398);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2399(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -870 L 864 -870 864 696 -864 696 -864 -870";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-870);
	ctx.transform(1.03125,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2398);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2400 = document.createElement("img");
imageObj2400.src=new URL("../bitmaps/6d596e6bd9e9cf1923935e2d.png",import.meta.url).href;
function image2400(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2400);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2401(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2400);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2402 = document.createElement("img");
imageObj2402.src=new URL("../bitmaps/7e07b90b00071a79ca382c29.png",import.meta.url).href;
function image2402(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 360 500 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2402);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2403(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -675 L 486 -675 486 675 -486 675 -486 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-675);
	ctx.transform(1.0555555555555556,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2402);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2404 = document.createElement("img");
imageObj2404.src=new URL("../bitmaps/97a70cf2d8601b38d9c9bd94.png",import.meta.url).href;
function image2404(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2404);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2405(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 567 -567 567 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2404);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2406 = document.createElement("img");
imageObj2406.src=new URL("../bitmaps/d3db8b4fdc9a49c299c250dc.png",import.meta.url).href;
function image2406(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2406);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2407(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 567 -567 567 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2406);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2408 = document.createElement("img");
imageObj2408.src=new URL("../bitmaps/d0e90cb30cbcaf27d07d86b2.png",import.meta.url).href;
function image2408(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 340 460 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2408);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2409(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -621 L 459 -621 459 621 -459 621 -459 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-621);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2408);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2410 = document.createElement("img");
imageObj2410.src=new URL("../bitmaps/abcca091db24514e1b33be4c.png",import.meta.url).href;
function image2410(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 340 460 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2410);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2411(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -621 L 459 -621 459 621 -459 621 -459 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-621);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2410);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2412 = document.createElement("img");
imageObj2412.src=new URL("../bitmaps/060d769472c0dceea5260620.png",import.meta.url).href;
function image2412(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2412);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2413(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -810 L 486 -810 486 756 -486 756 -486 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-810);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2412);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2414 = document.createElement("img");
imageObj2414.src=new URL("../bitmaps/c2af77ca11320e0be24fc977.png",import.meta.url).href;
function image2414(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 420 520 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2414);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2415(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 675 -567 675 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2414);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2416 = document.createElement("img");
imageObj2416.src=new URL("../bitmaps/8207503d7bb1a4b20d5347ea.png",import.meta.url).href;
function image2416(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2416);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2417(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 729 -567 729 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2416);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2418 = document.createElement("img");
imageObj2418.src=new URL("../bitmaps/d620e9ff52f7e4bc1498b5f4.png",import.meta.url).href;
function image2418(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 400 580 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2418);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2419(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -729 L 540 -729 540 837 -540 837 -540 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-729);
	ctx.transform(1.05,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2418);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2420 = document.createElement("img");
imageObj2420.src=new URL("../bitmaps/a575dfb761cf6585c6d39a10.png",import.meta.url).href;
function image2420(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 380 580 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2420);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2421(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 837 -513 837 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2420);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2422 = document.createElement("img");
imageObj2422.src=new URL("../bitmaps/8fae93f9a4f35d54eabb968f.png",import.meta.url).href;
function image2422(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 520 520 520 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0384615384615385,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2422);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2423(ctx,ctrans,frame,ratio,time){
	var pathData="M -702 -609 L 702 -609 702 795 -702 795 -702 -609";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-702,-609);
	ctx.transform(1.0384615384615385,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2422);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2424 = document.createElement("img");
imageObj2424.src=new URL("../bitmaps/125dd9a244693255c9e02825.png",import.meta.url).href;
function image2424(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2424);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2425(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -729 L 540 -729 540 729 -540 729 -540 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-729);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2424);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2426 = document.createElement("img");
imageObj2426.src=new URL("../bitmaps/88a0f1b17f596bac479314bd.png",import.meta.url).href;
function image2426(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 380 560 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2426);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2427(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 783 -513 783 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2426);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2428 = document.createElement("img");
imageObj2428.src=new URL("../bitmaps/81bf964f76b97491539e367d.png",import.meta.url).href;
function image2428(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2428);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2429(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 729 -486 729 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2428);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2430 = document.createElement("img");
imageObj2430.src=new URL("../bitmaps/2b441f72f53902c6c863f586.png",import.meta.url).href;
function image2430(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2430);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2431(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 729 -486 729 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2430);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2432 = document.createElement("img");
imageObj2432.src=new URL("../bitmaps/6f6be7f72d638f8ba99e3f18.png",import.meta.url).href;
function image2432(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 280 500 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2432);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2433(ctx,ctrans,frame,ratio,time){
	var pathData="M -378 -689 L 378 -689 378 661 -378 661 -378 -689";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-378,-689);
	ctx.transform(1.0714285714285714,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2432);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2434 = document.createElement("img");
imageObj2434.src=new URL("../bitmaps/079f6732f58a9267f8e043e5.png",import.meta.url).href;
function image2434(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 440 620 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2434);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2435(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -876 L 594 -876 594 798 -594 798 -594 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-876);
	ctx.transform(1.0454545454545454,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2434);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2436 = document.createElement("img");
imageObj2436.src=new URL("../bitmaps/8d5761f8b09e4f21126e4e72.png",import.meta.url).href;
function image2436(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 440 600 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2436);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2437(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -876 L 594 -876 594 744 -594 744 -594 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-876);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2436);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2438 = document.createElement("img");
imageObj2438.src=new URL("../bitmaps/19b93f276a15de4163e91313.png",import.meta.url).href;
function image2438(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2438);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2439(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -729 L 540 -729 540 729 -540 729 -540 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-729);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2438);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2440 = document.createElement("img");
imageObj2440.src=new URL("../bitmaps/11d8051cb99b61aafa2b9f09.png",import.meta.url).href;
function image2440(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2440);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2441(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 837 -486 837 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2440);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2442 = document.createElement("img");
imageObj2442.src=new URL("../bitmaps/d278c41adc8e1c1b5ef89788.png",import.meta.url).href;
function image2442(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2442);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2443(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -729 L 540 -729 540 729 -540 729 -540 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-729);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2442);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2444 = document.createElement("img");
imageObj2444.src=new URL("../bitmaps/ebb48ca03c1e6f8d2f96bff1.png",import.meta.url).href;
function image2444(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2444);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2445(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 837 -486 837 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2444);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2446 = document.createElement("img");
imageObj2446.src=new URL("../bitmaps/80d6782ca7357fdcef1b95ea.png",import.meta.url).href;
function image2446(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2446);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2447(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -729 L 540 -729 540 675 -540 675 -540 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-729);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2446);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2448 = document.createElement("img");
imageObj2448.src=new URL("../bitmaps/af5e30e0c35d04c58449dabb.png",import.meta.url).href;
function image2448(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2448);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2449(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 675 -486 675 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2448);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite2450(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2450,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 38;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape2381",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape2381",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape2381",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape2381",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape2383",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape2385",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,40.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape2387",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,20.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape2389",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape2391",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape2393",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,20.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape2395",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,33.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape2397",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,60.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape2399",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape2401",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape2403",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape2405",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape2407",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape2409",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape2411",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape2413",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape2415",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape2417",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape2419",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape2421",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 24:
			place("shape2423",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-120.0],ctrans,1,0,0,time);
			break;
		case 25:
			place("shape2425",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 26:
			place("shape2427",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 27:
			place("shape2429",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 28:
			place("shape2431",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 29:
			place("shape2433",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-40.0],ctrans,1,0,0,time);
			break;
		case 30:
			place("shape2435",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,39.0],ctrans,1,0,0,time);
			break;
		case 31:
			place("shape2437",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,39.0],ctrans,1,0,0,time);
			break;
		case 32:
			place("shape2439",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-18.0],ctrans,1,0,0,time);
			break;
		case 33:
			place("shape2441",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-108.0],ctrans,1,0,0,time);
			break;
		case 34:
			place("shape2443",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 35:
			place("shape2445",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-54.0],ctrans,1,0,0,time);
			break;
		case 36:
			place("shape2447",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 37:
			place("shape2449",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-54.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite5643(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5643,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4632 = document.createElement("img");
imageObj4632.src=new URL("../bitmaps/523b091bfaea094b45795b4e.png",import.meta.url).href;
function image4632(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 580 460 580 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0344827586206897,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4632);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4633(ctx,ctrans,frame,ratio,time){
	var pathData="M 1728 0 L 1728 1656 -360 1656 -360 0 1728 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-71.99951171875,0,0,71.99951171875,1728,0);
	ctx.transform(1.0344827586206897,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4632);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4634(ctx,ctrans,frame,ratio,time){
	var pathData="M 1728 0 L 1728 1656 -360 1656 -360 0 1728 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-71.99951171875,0,0,71.99951171875,1728,0);
	ctx.transform(1.0344827586206897,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4152);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4635(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4635,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 14;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape4633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape4634",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj2592 = document.createElement("img");
imageObj2592.src=new URL("../bitmaps/5e63ae1f48536ddf92e757b4.png",import.meta.url).href;
function image2592(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2592);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2593(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 702 -594 702 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2592);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2594 = document.createElement("img");
imageObj2594.src=new URL("../bitmaps/12bb37a9d9115d9c131d7785.png",import.meta.url).href;
function image2594(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 660 640 660 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.0303030303030303,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2594);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2595(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -1071 L 864 -1071 864 711 -864 711 -864 -1071";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-1071);
	ctx.transform(1.03125,0,0,1.0303030303030303,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2594);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2596 = document.createElement("img");
imageObj2596.src=new URL("../bitmaps/fad04150e6006b7656b2dc51.png",import.meta.url).href;
function image2596(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2596);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2597(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2596);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2598 = document.createElement("img");
imageObj2598.src=new URL("../bitmaps/91a7a3aa877542649aed13bd.png",import.meta.url).href;
function image2598(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2598);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2599(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -742 L 594 -742 594 662 -594 662 -594 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-742);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2598);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2600 = document.createElement("img");
imageObj2600.src=new URL("../bitmaps/fc3516a1006d25a9996777b5.png",import.meta.url).href;
function image2600(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2600);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2601(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -762 L 486 -762 486 696 -486 696 -486 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-762);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2600);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2602 = document.createElement("img");
imageObj2602.src=new URL("../bitmaps/0a9ccbf8adfb7435a1a01d1b.png",import.meta.url).href;
function image2602(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2602);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2603(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -822 L 486 -822 486 744 -486 744 -486 -822";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-822);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2602);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2604 = document.createElement("img");
imageObj2604.src=new URL("../bitmaps/2a04e8993df0d9fbd99b8efb.png",import.meta.url).href;
function image2604(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 400 500 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2604);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2605(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -662 L 540 -662 540 688 -540 688 -540 -662";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-662);
	ctx.transform(1.05,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2604);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2606 = document.createElement("img");
imageObj2606.src=new URL("../bitmaps/70cc1446bc59c1c6297b1a1b.png",import.meta.url).href;
function image2606(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2606);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2607(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -762 L 594 -762 594 696 -594 696 -594 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-762);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2606);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2608 = document.createElement("img");
imageObj2608.src=new URL("../bitmaps/74ccc7e94a11ecb221059b79.png",import.meta.url).href;
function image2608(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2608);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2609(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -722 L 486 -722 486 682 -486 682 -486 -722";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-722);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2608);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2610 = document.createElement("img");
imageObj2610.src=new URL("../bitmaps/0c3167c4925cc557737e8f16.png",import.meta.url).href;
function image2610(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 640 620 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2610);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2611(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -984 L 864 -984 864 690 -864 690 -864 -984";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-984);
	ctx.transform(1.03125,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2610);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2612 = document.createElement("img");
imageObj2612.src=new URL("../bitmaps/320f3a1421fd2f6858f39cd0.png",import.meta.url).href;
function image2612(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2612);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2613(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 567 -567 567 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2612);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2614 = document.createElement("img");
imageObj2614.src=new URL("../bitmaps/a3d70d0915d7e96d2097f4cf.png",import.meta.url).href;
function image2614(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2614);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2615(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 567 -567 567 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2614);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2616 = document.createElement("img");
imageObj2616.src=new URL("../bitmaps/744a5798b1ab8b2695eb86d3.png",import.meta.url).href;
function image2616(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 440 500 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2616);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2617(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -675 L 594 -675 594 675 -594 675 -594 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-675);
	ctx.transform(1.0454545454545454,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2616);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2618 = document.createElement("img");
imageObj2618.src=new URL("../bitmaps/1ea9c258eed4d8a6a415a088.png",import.meta.url).href;
function image2618(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2618);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2619(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 729 -486 729 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2618);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2620 = document.createElement("img");
imageObj2620.src=new URL("../bitmaps/acfed1616c98a684d55d1d1b.png",import.meta.url).href;
function image2620(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 340 460 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2620);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2621(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -621 L 459 -621 459 621 -459 621 -459 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-621);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2620);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4669(ctx,ctrans,frame,ratio,time){
	var pathData="M 4927 3267 L 4927 4107 4087 4107 4087 3267 4927 3267";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4087,3267);
	ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3308);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2622 = document.createElement("img");
imageObj2622.src=new URL("../bitmaps/49fbce580f52ce18f020c601.png",import.meta.url).href;
function image2622(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 340 460 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2622);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2623(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -621 L 459 -621 459 621 -459 621 -459 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-621);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2622);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2624 = document.createElement("img");
imageObj2624.src=new URL("../bitmaps/356839fba86afe0384f37d1e.png",import.meta.url).href;
function image2624(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2624);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2625(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -810 L 486 -810 486 756 -486 756 -486 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-810);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2624);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2626 = document.createElement("img");
imageObj2626.src=new URL("../bitmaps/76659d75a769782870b9c6af.png",import.meta.url).href;
function image2626(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2626);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2627(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 729 -567 729 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2626);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2628 = document.createElement("img");
imageObj2628.src=new URL("../bitmaps/c6989edc664b8253b282c042.png",import.meta.url).href;
function image2628(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2628);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2629(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 729 -567 729 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2628);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2630 = document.createElement("img");
imageObj2630.src=new URL("../bitmaps/71ff98ae7baaa7c64d3334ab.png",import.meta.url).href;
function image2630(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2630);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2631(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 783 -594 783 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2630);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2632 = document.createElement("img");
imageObj2632.src=new URL("../bitmaps/4642d660d2c0e90f11f0892f.png",import.meta.url).href;
function image2632(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 380 580 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2632);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5705 = document.createElement("img");
imageObj5705.src=new URL("../bitmaps/b7f59035026cb9c1aad32a4f.png",import.meta.url).href;
function image5705(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 5920 7680 5920 7680 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0026041666666667,0,0,1.0033783783783783,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5705);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2633(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 837 -513 837 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2632);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5706(ctx,ctrans,frame,ratio,time){
	var pathData="M 21600 -6660 L 21600 11100 -1440 11100 -1440 -6660 21600 -6660";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-1440,-6660);
	ctx.transform(1.0026041666666667,0,0,1.0033783783783783,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5705);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2634 = document.createElement("img");
imageObj2634.src=new URL("../bitmaps/4c1c1f19f81ce0ed40057c3f.png",import.meta.url).href;
function image2634(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 480 560 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2634);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2635(ctx,ctrans,frame,ratio,time){
	var pathData="M -648 -729 L 648 -729 648 783 -648 783 -648 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-648,-729);
	ctx.transform(1.0416666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2634);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5707(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font3055(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font3055(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,778.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1012.0,380.0);
	font3055(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1152.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1269.0,380.0);
	font3055(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1549.0,380.0);
	font3055(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1643.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1877.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2111.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2228.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,380.0);
	font3055(ctx,"-",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2485.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2602.0,380.0);
	font3055(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2882.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3116.0,380.0);
	font3055(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3350.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3467.0,380.0);
	font3055(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3701.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3818.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4052.0,380.0);
	font3055(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4169.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4286.0,380.0);
	font3055(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4590.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4824.0,380.0);
	font3055(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5034.0,380.0);
	font3055(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5244.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5361.0,380.0);
	font3055(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5618.0,380.0);
	font3055(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5852.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6086.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6320.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6554.0,380.0);
	font3055(ctx,"l",textColor);
	ctx.restore();
}

var imageObj2636 = document.createElement("img");
imageObj2636.src=new URL("../bitmaps/cbbf0aa3925a0bf0b3985d4a.png",import.meta.url).href;
function image2636(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2636);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5708(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,278.0,362.0);
	font3055(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,567.0,362.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,790.0,362.0);
	font3055(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,990.0,362.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
}

function shape2637(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 729 -594 729 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2636);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5709(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1293.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1503.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1737.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1971.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2205.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2299.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2533.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2650.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2884.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3118.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3235.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3469.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3609.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3843.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4077.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4311.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4545.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4662.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4896.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5130.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5270.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5504.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5621.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5831.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6065.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6415.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6649.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6953.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7187.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7421.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7561.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7795.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7912.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8029.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

var imageObj2638 = document.createElement("img");
imageObj2638.src=new URL("../bitmaps/c6e14d3eb05d4b3e907f484a.png",import.meta.url).href;
function image2638(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2638);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5710(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,278.0,362.0);
	font3055(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,567.0,362.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,790.0,362.0);
	font3055(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,990.0,362.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
}

function shape2639(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 837 -486 837 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2638);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5711(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1222.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1456.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1690.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1924.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2275.0,380.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2555.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2789.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3093.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3327.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3467.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3584.0,380.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3864.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3958.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4192.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4426.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4543.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4660.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4777.0,380.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5081.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5315.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5665.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5899.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6016.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6250.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6367.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6484.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6601.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6835.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7069.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7186.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7280.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7514.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7748.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7982.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8216.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8450.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8684.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8824.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9034.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9151.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9385.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9479.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9619.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9853.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9970.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10087.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10204.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

var imageObj2640 = document.createElement("img");
imageObj2640.src=new URL("../bitmaps/d6cee49e61d7ac8ee7011750.png",import.meta.url).href;
function image2640(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2640);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5712(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,380.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1479.0,380.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1759.0,380.0);
	font982(ctx,"D",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2063.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2390.0,380.0);
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2670.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,217.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,451.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,685.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,919.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1153.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1363.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1597.0,889.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1854.0,889.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2134.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2414.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2694.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2974.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3254.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3534.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3814.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4094.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function shape2641(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 729 -486 729 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2640);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5713(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,278.0,362.0);
	font3055(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,567.0,362.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,790.0,362.0);
	font3055(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,990.0,362.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
}

var imageObj2642 = document.createElement("img");
imageObj2642.src=new URL("../bitmaps/60c1686ea2f10d7eb5ac54c6.png",import.meta.url).href;
function image2642(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2642);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5714(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1433.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1901.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2135.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2462.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2579.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2696.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2776.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3126.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3243.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3477.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3711.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3851.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4085.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4202.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4319.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4553.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4670.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4880.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5114.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5348.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5465.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5699.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5839.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6073.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6190.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6400.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6634.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6868.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,217.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,451.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,685.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,919.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1153.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1363.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1690.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1807.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2041.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2181.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2415.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2625.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2742.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2976.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3093.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3210.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3420.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3654.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3888.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4005.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4122.0,889.0);
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4402.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4636.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4870.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5104.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5198.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5432.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5666.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5783.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5993.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6227.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6461.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6578.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6812.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,216,64,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6929.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7279.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7513.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7723.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7933.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8167.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8401.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8635.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function shape2643(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 729 -486 729 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2642);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5715(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1246.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1596.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1946.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2296.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2413.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2530.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

var imageObj2644 = document.createElement("img");
imageObj2644.src=new URL("../bitmaps/13d8972091b125fb86951cac.png",import.meta.url).href;
function image2644(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 280 500 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2644);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5716(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,278.0,362.0);
	font3055(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,567.0,362.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,790.0,362.0);
	font3055(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,990.0,362.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
}

function shape2645(ctx,ctrans,frame,ratio,time){
	var pathData="M -378 -729 L 378 -729 378 621 -378 621 -378 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-378,-729);
	ctx.transform(1.0714285714285714,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2644);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5717(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1714.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2416.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3562.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3679.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4170.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4404.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4638.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4872.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5082.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5549.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5783.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6017.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6368.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7023.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7491.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8076.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8193.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8403.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8637.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8731.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9082.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9292.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9526.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9760.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9900.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10017.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10134.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10274.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10368.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10602.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10836.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11070.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11280.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11397.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11631.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11865.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12099.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12179.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12296.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12413.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12507.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12741.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12951.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13185.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13279.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13419.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13653.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13770.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,14120.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,77.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,311.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,545.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,639.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,873.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1107.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1224.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1341.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1458.0,889.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1738.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1878.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1972.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2206.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2440.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2557.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2907.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3141.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3258.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3468.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3702.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4052.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4286.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4403.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4497.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4731.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5175.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5269.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5409.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5503.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5737.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5971.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6088.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6205.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6345.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6439.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6673.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6907.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7141.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7351.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7468.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7585.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7702.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7819.0,889.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8123.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8473.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8823.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8940.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9057.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

var imageObj2646 = document.createElement("img");
imageObj2646.src=new URL("../bitmaps/74d099f23c0076cb3f1baa6f.png",import.meta.url).href;
function image2646(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 440 600 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2646);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5718(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1714.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2416.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3562.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3679.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4170.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4404.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4638.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4872.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5082.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5549.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5783.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6017.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6368.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7023.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7491.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8076.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8193.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8403.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8637.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8731.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9082.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9292.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9526.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9760.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9877.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10111.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10251.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10485.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10719.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10953.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11187.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11304.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11421.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11655.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11772.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12006.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12474.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12708.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12825.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12942.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13082.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13176.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13410.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13644.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13878.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,545.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,662.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,896.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1130.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1247.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1341.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1551.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1668.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2018.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2252.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2462.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2696.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2813.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2930.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3164.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3398.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3515.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3725.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3959.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4193.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4427.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4661.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4778.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4895.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5129.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5246.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5480.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5714.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5831.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6135.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6369.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6509.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6626.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6860.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7070.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7187.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7304.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7421.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7538.0,889.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8192.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8542.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8659.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8776.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function shape2647(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -876 L 594 -876 594 744 -594 744 -594 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-876);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2646);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5719(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1714.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2416.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3562.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3679.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4170.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4404.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4638.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4872.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5082.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5549.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5783.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6017.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6368.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7023.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7491.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8076.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8193.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8403.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8637.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8731.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9082.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9292.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9526.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9760.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9877.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10111.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10251.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10485.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10719.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10953.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11187.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11304.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11421.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11655.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11889.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12123.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12357.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12474.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12591.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12731.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12825.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13059.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13293.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13527.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13737.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,545.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,662.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,779.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1013.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1247.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1457.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1574.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1808.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2299.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2649.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2883.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3093.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3327.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3444.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3561.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3795.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4029.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4146.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4356.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4590.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4824.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5058.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5292.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5409.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5526.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5760.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5877.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6111.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6345.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6462.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6766.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7000.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7140.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7491.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7701.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7818.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7935.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8052.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8169.0,889.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8473.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8823.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9173.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9290.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9407.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

var imageObj2648 = document.createElement("img");
imageObj2648.src=new URL("../bitmaps/a5b88e848b7523571db5b422.png",import.meta.url).href;
function image2648(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 440 600 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2648);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5720(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1714.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2416.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3562.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3679.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4170.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4404.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4638.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4872.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5082.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5549.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5783.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6017.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6368.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7023.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7491.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8076.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8193.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8403.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8637.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8731.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9082.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9292.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9526.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9760.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9877.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10111.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10251.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10485.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10719.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10953.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11187.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11304.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11421.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11655.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11772.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12076.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12310.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12450.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12567.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12801.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13011.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13128.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13245.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13385.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13479.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13713.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13947.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,14181.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,545.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,662.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,896.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,990.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1084.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1201.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1411.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1645.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1879.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2019.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2136.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2253.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2393.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2487.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2721.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2955.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3189.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3399.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3516.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3866.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4100.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4310.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4427.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4544.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4778.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5012.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5129.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5433.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5667.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5807.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5924.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6158.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6368.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6602.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6836.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6976.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7093.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7443.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7677.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7794.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7911.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8145.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8262.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8379.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8473.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8707.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8941.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9058.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9175.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9292.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9409.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9526.0,889.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9830.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10180.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10530.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10647.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10764.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function shape2649(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -876 L 594 -876 594 744 -594 744 -594 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-876);
	ctx.transform(1.0454545454545454,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2648);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5721(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"Z",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1433.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1901.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2135.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2462.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2672.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2906.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3000.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3234.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3351.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3585.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3819.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4708.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4802.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5036.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5153.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5270.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5364.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5598.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5832.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5949.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6066.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6416.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6650.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6767.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7001.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7235.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7539.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

var imageObj2650 = document.createElement("img");
imageObj2650.src=new URL("../bitmaps/c7a02fd2f6d2990e8a62aa38.png",import.meta.url).href;
function image2650(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2650);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5722(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1761.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1878.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1995.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2112.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2229.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2346.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2426.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2776.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2893.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3127.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3361.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3455.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3689.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3923.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4040.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4134.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4368.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function shape2651(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -735 L 594 -735 594 723 -594 723 -594 -735";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-735);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2650);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5723(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,303.0,362.0);
	font3055(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,570.0,362.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,793.0,362.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
}

var imageObj2652 = document.createElement("img");
imageObj2652.src=new URL("../bitmaps/0f6e9409243f840d3806d37a.png",import.meta.url).href;
function image2652(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2652);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2653(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -843 L 486 -843 486 723 -486 723 -486 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-843);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2652);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2654 = document.createElement("img");
imageObj2654.src=new URL("../bitmaps/d29e13d7cde3ab7bc2338250.png",import.meta.url).href;
function image2654(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2654);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2655(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -735 L 594 -735 594 777 -594 777 -594 -735";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-735);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2654);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2656 = document.createElement("img");
imageObj2656.src=new URL("../bitmaps/c6f350b329d6fe902b2aefe9.png",import.meta.url).href;
function image2656(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2656);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2657(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -843 L 486 -843 486 723 -486 723 -486 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-843);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2656);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2658 = document.createElement("img");
imageObj2658.src=new URL("../bitmaps/3acf109665d1cda5a6f85b7d.png",import.meta.url).href;
function image2658(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2658);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2659(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -735 L 594 -735 594 669 -594 669 -594 -735";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-735);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2658);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2660 = document.createElement("img");
imageObj2660.src=new URL("../bitmaps/1392a551bbabea7d1d51b317.png",import.meta.url).href;
function image2660(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2660);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2661(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -843 L 486 -843 486 723 -486 723 -486 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-843);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2660);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2665 = document.createElement("img");
imageObj2665.src=new URL("../bitmaps/f9d32fadf11f433b32a824c7.png",import.meta.url).href;
function image2665(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2665);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2666(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 756 -594 756 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2665);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2667 = document.createElement("img");
imageObj2667.src=new URL("../bitmaps/930f93fa7dfebe5487152267.png",import.meta.url).href;
function image2667(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2667);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2668(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 756 -594 756 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2667);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2669 = document.createElement("img");
imageObj2669.src=new URL("../bitmaps/e96adaf9af95392ac72a6a3e.png",import.meta.url).href;
function image2669(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2669);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2670(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2669);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2671 = document.createElement("img");
imageObj2671.src=new URL("../bitmaps/1b5a4fe967d73a96a96fcf1c.png",import.meta.url).href;
function image2671(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2671);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2672(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2671);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2673 = document.createElement("img");
imageObj2673.src=new URL("../bitmaps/d82b9a60ae2317c1a66a63fe.png",import.meta.url).href;
function image2673(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2673);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2674(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 756 -540 756 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2673);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2675 = document.createElement("img");
imageObj2675.src=new URL("../bitmaps/733355d823d9e918e347f7c5.png",import.meta.url).href;
function image2675(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 400 560 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2675);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2676(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 810 -540 810 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2675);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2677 = document.createElement("img");
imageObj2677.src=new URL("../bitmaps/bc349cffab13cb67071845a3.png",import.meta.url).href;
function image2677(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2677);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2678(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -742 L 594 -742 594 716 -594 716 -594 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-742);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2677);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2679 = document.createElement("img");
imageObj2679.src=new URL("../bitmaps/2437cc840ec435fd43d5e1b1.png",import.meta.url).href;
function image2679(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2679);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2680(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -742 L 594 -742 594 716 -594 716 -594 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-742);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2679);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2681 = document.createElement("img");
imageObj2681.src=new URL("../bitmaps/5e93abc6bcedc0444816d2ff.png",import.meta.url).href;
function image2681(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 320 560 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2681);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2682(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -762 L 378 -762 378 750 -486 750 -486 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-762);
	ctx.transform(1.0625,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2681);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2683 = document.createElement("img");
imageObj2683.src=new URL("../bitmaps/72967ed129936b579dd3185c.png",import.meta.url).href;
function image2683(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 320 560 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2683);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2684(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -762 L 378 -762 378 750 -486 750 -486 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-762);
	ctx.transform(1.0625,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2683);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2685 = document.createElement("img");
imageObj2685.src=new URL("../bitmaps/0f944af409a71a42b42a2f4a.png",import.meta.url).href;
function image2685(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2685);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2686(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -822 L 540 -822 540 798 -486 798 -486 -822";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-822);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2685);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2687 = document.createElement("img");
imageObj2687.src=new URL("../bitmaps/1f6b92d48276c0c1a1022f89.png",import.meta.url).href;
function image2687(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2687);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2688(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -822 L 540 -822 540 798 -486 798 -486 -822";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-822);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2687);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2689 = document.createElement("img");
imageObj2689.src=new URL("../bitmaps/33df03582455f182ba4d633f.png",import.meta.url).href;
function image2689(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2689);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2690(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -662 L 540 -662 540 796 -540 796 -540 -662";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-662);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2689);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2691 = document.createElement("img");
imageObj2691.src=new URL("../bitmaps/cea62bb1c60fb57fec1abfe3.png",import.meta.url).href;
function image2691(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 400 540 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2691);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2692(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -662 L 540 -662 540 796 -540 796 -540 -662";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-662);
	ctx.transform(1.05,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2691);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2693 = document.createElement("img");
imageObj2693.src=new URL("../bitmaps/af135399f847e65be2bf4de2.png",import.meta.url).href;
function image2693(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2693);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2694(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -762 L 594 -762 594 750 -594 750 -594 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-762);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2693);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2695 = document.createElement("img");
imageObj2695.src=new URL("../bitmaps/7cb368f7cdd9bbbd85016d2e.png",import.meta.url).href;
function image2695(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2695);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2696(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -762 L 594 -762 594 750 -594 750 -594 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-762);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2695);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2697 = document.createElement("img");
imageObj2697.src=new URL("../bitmaps/5dd549cb17499c36b8fb2067.png",import.meta.url).href;
function image2697(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 320 540 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2697);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2698(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -722 L 432 -722 432 736 -432 736 -432 -722";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-722);
	ctx.transform(1.0625,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2697);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2699 = document.createElement("img");
imageObj2699.src=new URL("../bitmaps/983cba1597b859ed2ff57df4.png",import.meta.url).href;
function image2699(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 320 540 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2699);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2700(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -722 L 432 -722 432 736 -432 736 -432 -722";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-722);
	ctx.transform(1.0625,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2699);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2701 = document.createElement("img");
imageObj2701.src=new URL("../bitmaps/4107449fede4903299b5554d.png",import.meta.url).href;
function image2701(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 640 640 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2701);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2702(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -984 L 864 -984 864 744 -864 744 -864 -984";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-984);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2701);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2703 = document.createElement("img");
imageObj2703.src=new URL("../bitmaps/16fcc8c6446a1303c9b16ba3.png",import.meta.url).href;
function image2703(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 640 640 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2703);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2704(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -1031 L 864 -1031 864 697 -864 697 -864 -1031";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-1031);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2703);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2705 = document.createElement("img");
imageObj2705.src=new URL("../bitmaps/8b496e7b8c895840a5137aaf.png",import.meta.url).href;
function image2705(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 640 640 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2705);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2706(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -984 L 864 -984 864 744 -864 744 -864 -984";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-984);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2705);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2707 = document.createElement("img");
imageObj2707.src=new URL("../bitmaps/fc9873cfc3e0f5a1c4e0ca8b.png",import.meta.url).href;
function image2707(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 640 640 640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2707);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2708(ctx,ctrans,frame,ratio,time){
	var pathData="M -864 -984 L 864 -984 864 744 -864 744 -864 -984";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-864,-984);
	ctx.transform(1.03125,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2707);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2709 = document.createElement("img");
imageObj2709.src=new URL("../bitmaps/3cb94f45d6e7211b0ea8c419.png",import.meta.url).href;
function image2709(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2709);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2710(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2709);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2711 = document.createElement("img");
imageObj2711.src=new URL("../bitmaps/dc7a6cd4508b5c56b219d93d.png",import.meta.url).href;
function image2711(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2711);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2712(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2711);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2713 = document.createElement("img");
imageObj2713.src=new URL("../bitmaps/7ad5f278da012c889ae73ab6.png",import.meta.url).href;
function image2713(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2713);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2714(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 729 -594 729 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2713);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2715 = document.createElement("img");
imageObj2715.src=new URL("../bitmaps/c915e52dfe7b2f208cdc1355.png",import.meta.url).href;
function image2715(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2715);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2716(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 729 -594 729 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2715);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2717 = document.createElement("img");
imageObj2717.src=new URL("../bitmaps/4cc44cfa172bc8c53e4f2d74.png",import.meta.url).href;
function image2717(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 380 580 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2717);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2718(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -783 L 513 -783 513 783 -513 783 -513 -783";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-783);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2717);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2719 = document.createElement("img");
imageObj2719.src=new URL("../bitmaps/99ed1478a871fc13a5419da9.png",import.meta.url).href;
function image2719(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 380 580 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2719);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2720(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -783 L 513 -783 513 783 -513 783 -513 -783";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-783);
	ctx.transform(1.0526315789473684,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2719);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2721 = document.createElement("img");
imageObj2721.src=new URL("../bitmaps/00d0c812000ffe37c16332d9.png",import.meta.url).href;
function image2721(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2721);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2722(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 675 -459 675 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2721);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2723 = document.createElement("img");
imageObj2723.src=new URL("../bitmaps/47e7f23f568d4c69f5b4842a.png",import.meta.url).href;
function image2723(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2723);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2724(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 675 -459 675 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2723);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2725 = document.createElement("img");
imageObj2725.src=new URL("../bitmaps/a5189f8241c292875ab3a09f.png",import.meta.url).href;
function image2725(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2725);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2726(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2725);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2727 = document.createElement("img");
imageObj2727.src=new URL("../bitmaps/0010d4a551fe568729b7e258.png",import.meta.url).href;
function image2727(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2727);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2728(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2727);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2729 = document.createElement("img");
imageObj2729.src=new URL("../bitmaps/bde5441171e6a0a016f2586e.png",import.meta.url).href;
function image2729(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 320 600 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2729);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2730(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -810 L 432 -810 432 810 -432 810 -432 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-810);
	ctx.transform(1.0625,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2729);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2731 = document.createElement("img");
imageObj2731.src=new URL("../bitmaps/e49437e7921bfc1ae9e2f8d9.png",import.meta.url).href;
function image2731(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 320 600 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2731);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2732(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -810 L 432 -810 432 810 -432 810 -432 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-810);
	ctx.transform(1.0625,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2731);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2733 = document.createElement("img");
imageObj2733.src=new URL("../bitmaps/d195e690eb51f5011954a925.png",import.meta.url).href;
function image2733(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2733);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2734(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -756 L 567 -756 567 756 -567 756 -567 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-756);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2733);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2735 = document.createElement("img");
imageObj2735.src=new URL("../bitmaps/b6b3f1417614f32e916dd598.png",import.meta.url).href;
function image2735(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2735);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2736(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 783 -567 783 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2735);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2737 = document.createElement("img");
imageObj2737.src=new URL("../bitmaps/b996469785e509c206c1e280.png",import.meta.url).href;
function image2737(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2737);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2738(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -756 L 567 -756 567 756 -567 756 -567 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-756);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2737);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2739 = document.createElement("img");
imageObj2739.src=new URL("../bitmaps/4bceb2cbad381ddd9548fbcf.png",import.meta.url).href;
function image2739(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2739);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2740(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -729 L 567 -729 567 783 -567 783 -567 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-729);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2739);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2741 = document.createElement("img");
imageObj2741.src=new URL("../bitmaps/1b44a8533fa311a5de5415e1.png",import.meta.url).href;
function image2741(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2741);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2742(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 837 -594 837 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2741);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2743 = document.createElement("img");
imageObj2743.src=new URL("../bitmaps/8f455a0dcab4121184d8f165.png",import.meta.url).href;
function image2743(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2743);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2744(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 837 -594 837 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2743);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2745 = document.createElement("img");
imageObj2745.src=new URL("../bitmaps/3abd4835c9cffb95a76128d8.png",import.meta.url).href;
function image2745(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2745);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2746(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 891 -513 891 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2745);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2747 = document.createElement("img");
imageObj2747.src=new URL("../bitmaps/e10869a333837621b091c217.png",import.meta.url).href;
function image2747(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2747);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2748(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 891 -513 891 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2747);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2749 = document.createElement("img");
imageObj2749.src=new URL("../bitmaps/b8d99071118b7175f6422f95.png",import.meta.url).href;
function image2749(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 480 580 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2749);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2750(ctx,ctrans,frame,ratio,time){
	var pathData="M -648 -729 L 648 -729 648 837 -648 837 -648 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-648,-729);
	ctx.transform(1.0416666666666667,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2749);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2751 = document.createElement("img");
imageObj2751.src=new URL("../bitmaps/93046d77c49205769fe1688a.png",import.meta.url).href;
function image2751(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 480 580 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2751);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2752(ctx,ctrans,frame,ratio,time){
	var pathData="M -648 -729 L 648 -729 648 837 -648 837 -648 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-648,-729);
	ctx.transform(1.0416666666666667,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2751);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2753 = document.createElement("img");
imageObj2753.src=new URL("../bitmaps/871d25ca33c4b3b7ff2e1d8c.png",import.meta.url).href;
function image2753(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2753);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2754(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 783 -594 783 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2753);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2755 = document.createElement("img");
imageObj2755.src=new URL("../bitmaps/77b85fdde07ee11f0304b946.png",import.meta.url).href;
function image2755(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2755);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2756(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 783 -594 783 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2755);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2757 = document.createElement("img");
imageObj2757.src=new URL("../bitmaps/d2dafe0305b44b4b9af71573.png",import.meta.url).href;
function image2757(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2757);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2758(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 891 -513 891 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2757);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2759 = document.createElement("img");
imageObj2759.src=new URL("../bitmaps/50954056c4937018fd7b3001.png",import.meta.url).href;
function image2759(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2759);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2760(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -729 L 513 -729 513 891 -513 891 -513 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-729);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2759);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2761 = document.createElement("img");
imageObj2761.src=new URL("../bitmaps/77bf9b8218b467f10ef301e0.png",import.meta.url).href;
function image2761(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2761);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2762(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 783 -486 783 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2761);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2763 = document.createElement("img");
imageObj2763.src=new URL("../bitmaps/42f058f98377745cb50fbe25.png",import.meta.url).href;
function image2763(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2763);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2764(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 783 -486 783 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2763);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2765 = document.createElement("img");
imageObj2765.src=new URL("../bitmaps/9285ad6c363d986f72bbeca9.png",import.meta.url).href;
function image2765(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2765);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2766(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 783 -486 783 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2765);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2767 = document.createElement("img");
imageObj2767.src=new URL("../bitmaps/a7b21470e0405390b6f822c6.png",import.meta.url).href;
function image2767(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2767);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2768(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -729 L 486 -729 486 783 -486 783 -486 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-729);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2767);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2769 = document.createElement("img");
imageObj2769.src=new URL("../bitmaps/8ccb6febf1cdf8180bf1a222.png",import.meta.url).href;
function image2769(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 280 520 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2769);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2770(ctx,ctrans,frame,ratio,time){
	var pathData="M -378 -729 L 378 -729 378 675 -378 675 -378 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-378,-729);
	ctx.transform(1.0714285714285714,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2769);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2771 = document.createElement("img");
imageObj2771.src=new URL("../bitmaps/081bedcb3eb12f28065fc21d.png",import.meta.url).href;
function image2771(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 280 520 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2771);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2772(ctx,ctrans,frame,ratio,time){
	var pathData="M -378 -729 L 378 -729 378 675 -378 675 -378 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-378,-729);
	ctx.transform(1.0714285714285714,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2771);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2773 = document.createElement("img");
imageObj2773.src=new URL("../bitmaps/2f15298d289f1e7c2d6a6ed6.png",import.meta.url).href;
function image2773(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 400 620 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2773);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2774(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -876 L 540 -876 540 798 -540 798 -540 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-876);
	ctx.transform(1.05,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2773);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2775 = document.createElement("img");
imageObj2775.src=new URL("../bitmaps/6915414151890bccc5e434f6.png",import.meta.url).href;
function image2775(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 400 620 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2775);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2776(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -876 L 540 -876 540 798 -540 798 -540 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-876);
	ctx.transform(1.05,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2775);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2777 = document.createElement("img");
imageObj2777.src=new URL("../bitmaps/0c509eeed70745b8d0e446c4.png",import.meta.url).href;
function image2777(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 420 620 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2777);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2778(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -876 L 567 -876 567 798 -567 798 -567 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-876);
	ctx.transform(1.0476190476190477,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2777);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2779 = document.createElement("img");
imageObj2779.src=new URL("../bitmaps/a11619dcacd4f5d206dd1d3e.png",import.meta.url).href;
function image2779(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 420 620 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2779);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2780(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -876 L 567 -876 567 798 -567 798 -567 -876";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-876);
	ctx.transform(1.0476190476190477,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2779);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2781 = document.createElement("img");
imageObj2781.src=new URL("../bitmaps/484a588941ef15de6aa882ba.png",import.meta.url).href;
function image2781(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2781);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2782(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 783 -594 783 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2781);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2783 = document.createElement("img");
imageObj2783.src=new URL("../bitmaps/4072c540a53005982cf76cab.png",import.meta.url).href;
function image2783(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2783);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2784(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 783 -594 783 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2783);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2785 = document.createElement("img");
imageObj2785.src=new URL("../bitmaps/123ac624bdcb08da2ae34439.png",import.meta.url).href;
function image2785(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2785);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2786(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2785);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2787 = document.createElement("img");
imageObj2787.src=new URL("../bitmaps/67e39c1cd66bfe6672a2d1bd.png",import.meta.url).href;
function image2787(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2787);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2788(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2787);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2789 = document.createElement("img");
imageObj2789.src=new URL("../bitmaps/ff17048961b4488775a28d4b.png",import.meta.url).href;
function image2789(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2789);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2790(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 837 -594 837 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2789);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2791 = document.createElement("img");
imageObj2791.src=new URL("../bitmaps/13613250aa7fa1d82f1cb321.png",import.meta.url).href;
function image2791(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2791);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2792(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 837 -594 837 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2791);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2793 = document.createElement("img");
imageObj2793.src=new URL("../bitmaps/371fa5e5caf036f26e0524a4.png",import.meta.url).href;
function image2793(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2793);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text3817(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,290.0,362.0);
	font3055(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,557.0,362.0);
	font3055(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,757.0,362.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,846.0,362.0);
	font3055(ctx,"p",textColor);
	ctx.restore();
}

function shape2794(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2793);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3818(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3818,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3284",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("text3817",canvas,ctx,[1.0,0.0,0.0,1.0,-680.0,-223.0],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.65966796875,0.0,0.0,0.859161376953125,0.0,0.0],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj2795 = document.createElement("img");
imageObj2795.src=new URL("../bitmaps/a77662c521b0be4d4d1b5760.png",import.meta.url).href;
function image2795(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2795);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2796(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2795);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2797 = document.createElement("img");
imageObj2797.src=new URL("../bitmaps/9a302e3bcdedb8cb8ef088fc.png",import.meta.url).href;
function image2797(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2797);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2798(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 729 -594 729 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2797);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2799 = document.createElement("img");
imageObj2799.src=new URL("../bitmaps/19e97d1c9f89df02981e2ec1.png",import.meta.url).href;
function image2799(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2799);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2800(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -729 L 594 -729 594 729 -594 729 -594 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-729);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2799);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2801 = document.createElement("img");
imageObj2801.src=new URL("../bitmaps/4e746741dee19931f8023e45.png",import.meta.url).href;
function image2801(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2801);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2802(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2801);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2803 = document.createElement("img");
imageObj2803.src=new URL("../bitmaps/5bb2f36bb9a41224c621e937.png",import.meta.url).href;
function image2803(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 380 600 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2804(ctx,ctrans,frame,ratio,time){
	var pathData="M -513 -843 L 513 -843 513 777 -513 777 -513 -843";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-513,-843);
	ctx.transform(1.0526315789473684,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite2805(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2805,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 843;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape2666",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape2668",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 24:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 25:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 26:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 27:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 28:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 29:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 30:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 31:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 32:
			place("shape2670",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 33:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 34:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 35:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 36:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 37:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 38:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 39:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 40:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 41:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 42:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 43:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 44:
			place("shape2672",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 45:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 46:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 47:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 48:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 49:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 50:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 51:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 52:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 53:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 54:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 55:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 56:
			place("shape2674",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 57:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 58:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 59:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 60:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 61:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 62:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 63:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 64:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 65:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 66:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 67:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 68:
			place("shape2676",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 69:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 70:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 71:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 72:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 73:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 74:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 75:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 76:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 77:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 78:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 79:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 80:
			place("shape2678",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 81:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 82:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 83:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 84:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 85:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 86:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 87:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 88:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 89:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 90:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 91:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 92:
			place("shape2680",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 93:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 94:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 95:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 96:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 97:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 98:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 99:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 100:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 101:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 102:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 103:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 104:
			place("shape2682",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 105:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 106:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 107:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 108:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 109:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 110:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 111:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 112:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 113:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 114:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 115:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 116:
			place("shape2684",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 117:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 118:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 119:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 120:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 121:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 122:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 123:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 124:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 125:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 126:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 127:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 128:
			place("shape2686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 129:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 130:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 131:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 132:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 133:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 134:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 135:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 136:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 137:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 138:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 139:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 140:
			place("shape2688",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 141:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 142:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 143:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 144:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 145:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 146:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 147:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 148:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 149:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 150:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 151:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 152:
			place("shape2690",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 153:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 154:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 155:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 156:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 157:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 158:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 159:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 160:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 161:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 162:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 163:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 164:
			place("shape2692",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 165:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 166:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 167:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 168:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 169:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 170:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 171:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 172:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 173:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 174:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 175:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 176:
			place("shape2694",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 177:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 178:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 179:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 180:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 181:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 182:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 183:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 184:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 185:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 186:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 187:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 188:
			place("shape2696",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 189:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 190:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 191:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 192:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 193:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 194:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 195:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 196:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 197:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 198:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 199:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 200:
			place("shape2698",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 201:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 202:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 203:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 204:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 205:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 206:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 207:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 208:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 209:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 210:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 211:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 212:
			place("shape2700",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 213:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 214:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 215:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 216:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 217:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 218:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 219:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 220:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 221:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 222:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 223:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 224:
			place("shape2702",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 225:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 226:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 227:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 228:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 229:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 230:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 231:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 232:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 233:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 234:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 235:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 236:
			place("shape2704",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 237:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 238:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 239:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 240:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 241:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 242:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 243:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 244:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 245:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 246:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 247:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 248:
			place("shape2706",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 249:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 250:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 251:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 252:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 253:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 254:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 255:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 256:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 257:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 258:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 259:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 260:
			place("shape2708",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 261:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 262:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 263:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 264:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 265:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 266:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 267:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 268:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 269:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 270:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 271:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 272:
			place("shape2710",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 273:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 274:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 275:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 276:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 277:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 278:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 279:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 280:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 281:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 282:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 283:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 284:
			place("shape2712",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 285:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 286:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 287:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 288:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 289:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 290:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 291:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 292:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 293:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 294:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 295:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 296:
			place("shape2714",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 297:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 298:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 299:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 300:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 301:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 302:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 303:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 304:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 305:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 306:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 307:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 308:
			place("shape2716",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 309:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 310:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 311:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 312:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 313:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 314:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 315:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 316:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 317:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 318:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 319:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 320:
			place("shape2718",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 321:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 322:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 323:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 324:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 325:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 326:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 327:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 328:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 329:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 330:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 331:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 332:
			place("shape2720",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 333:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 334:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 335:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 336:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 337:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 338:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 339:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 340:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 341:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 342:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 343:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 344:
			place("shape2722",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 345:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 346:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 347:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 348:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 349:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 350:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 351:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 352:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 353:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 354:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 355:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 356:
			place("shape2724",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 357:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 358:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 359:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 360:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 361:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 362:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 363:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 364:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 365:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 366:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 367:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 368:
			place("shape2726",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 369:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 370:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 371:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 372:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 373:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 374:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 375:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 376:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 377:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 378:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 379:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 380:
			place("shape2728",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 381:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 382:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 383:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 384:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 385:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 386:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 387:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 388:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 389:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 390:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 391:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 392:
			place("shape2730",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 393:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 394:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 395:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 396:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 397:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 398:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 399:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 400:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 401:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 402:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 403:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 404:
			place("shape2732",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 405:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 406:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 407:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 408:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 409:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 410:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 411:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 412:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 413:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 414:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 415:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 416:
			place("shape2734",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 417:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 418:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 419:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 420:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 421:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 422:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 423:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 424:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 425:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 426:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 427:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 428:
			place("shape2736",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 429:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 430:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 431:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 432:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 433:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 434:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 435:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 436:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 437:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 438:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 439:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 440:
			place("shape2738",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 441:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 442:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 443:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 444:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 445:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 446:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 447:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 448:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 449:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 450:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 451:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 452:
			place("shape2740",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 453:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 454:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 455:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 456:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 457:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 458:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 459:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 460:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 461:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 462:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 463:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 464:
			place("shape2742",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 465:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 466:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 467:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 468:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 469:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 470:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 471:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 472:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 473:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 474:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 475:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 476:
			place("shape2744",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 477:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 478:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 479:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 480:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 481:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 482:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 483:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 484:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 485:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 486:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 487:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 488:
			place("shape2746",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 489:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 490:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 491:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 492:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 493:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 494:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 495:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 496:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 497:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 498:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 499:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 500:
			place("shape2748",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 501:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 502:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 503:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 504:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 505:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 506:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 507:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 508:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 509:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 510:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 511:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 512:
			place("shape2750",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 513:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 514:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 515:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 516:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 517:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 518:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 519:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 520:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 521:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 522:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 523:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 524:
			place("shape2752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 525:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 526:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 527:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 528:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 529:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 530:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 531:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 532:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 533:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 534:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 535:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 536:
			place("shape2754",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 537:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 538:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 539:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 540:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 541:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 542:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 543:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 544:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 545:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 546:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 547:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 548:
			place("shape2756",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 549:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 550:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 551:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 552:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 553:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 554:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 555:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 556:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 557:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 558:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 559:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 560:
			place("shape2758",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 561:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 562:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 563:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 564:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 565:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 566:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 567:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 568:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 569:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 570:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 571:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 572:
			place("shape2760",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 573:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 574:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 575:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 576:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 577:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 578:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 579:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 580:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 581:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 582:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 583:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 584:
			place("shape2762",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 585:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 586:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 587:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 588:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 589:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 590:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 591:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 592:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 593:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 594:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 595:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 596:
			place("shape2764",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 597:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 598:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 599:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 600:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 601:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 602:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 603:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 604:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 605:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 606:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 607:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 608:
			place("shape2766",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 609:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 610:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 611:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 612:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 613:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 614:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 615:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 616:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 617:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 618:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 619:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 620:
			place("shape2768",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 621:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 622:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 623:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 624:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 625:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 626:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 627:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 628:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 629:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 630:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 631:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 632:
			place("shape2770",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 633:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 634:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 635:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 636:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 637:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 638:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 639:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 640:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 641:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 642:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 643:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 644:
			place("shape2772",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 645:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 646:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 647:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 648:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 649:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 650:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 651:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 652:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 653:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 654:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 655:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 656:
			place("shape2774",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 657:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 658:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 659:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 660:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 661:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 662:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 663:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 664:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 665:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 666:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 667:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 668:
			place("shape2776",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 669:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 670:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 671:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 672:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 673:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 674:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 675:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 676:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 677:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 678:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 679:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 680:
			place("shape2778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 681:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 682:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 683:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 684:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 685:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 686:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 687:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 688:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 689:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 690:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 691:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 692:
			place("shape2780",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 693:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 694:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 695:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 696:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 697:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 698:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 699:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 700:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 701:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 702:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 703:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 704:
			place("shape2782",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 705:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 706:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 707:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 708:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 709:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 710:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 711:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 712:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 713:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 714:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 715:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 716:
			place("shape2784",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 717:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 718:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 719:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 720:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 721:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 722:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 723:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 724:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 725:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 726:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 727:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 728:
			place("shape2786",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 729:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 730:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 731:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 732:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 733:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 734:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 735:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 736:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 737:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 738:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 739:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 740:
			place("shape2788",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 741:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 742:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 743:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 744:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 745:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 746:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 747:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 748:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 749:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 750:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 751:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 752:
			place("shape2790",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 753:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 754:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 755:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 756:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 757:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 758:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 759:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 760:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 761:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 762:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 763:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 764:
			place("shape2792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 765:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 766:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 767:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 768:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 769:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 770:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 771:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 772:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 773:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 774:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 775:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 776:
			place("shape2794",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 777:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 778:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 779:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 780:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 781:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 782:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 783:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 784:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 785:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 786:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 787:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 788:
			place("shape2796",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 789:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 790:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 791:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 792:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 793:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 794:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 795:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 796:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 797:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 798:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 799:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 800:
			place("shape2798",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 801:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 802:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 803:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 804:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 805:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 806:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 807:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 808:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 809:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 810:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 811:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 812:
			place("shape2800",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 813:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 814:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 815:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 816:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 817:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 818:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 819:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 820:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 821:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 822:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 823:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 824:
			place("shape2802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 825:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 826:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 827:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 828:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 829:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 830:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 831:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 832:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 833:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 834:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 835:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 836:
			place("shape2804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 837:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 838:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 839:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 840:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 841:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 842:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj2806 = document.createElement("img");
imageObj2806.src=new URL("../bitmaps/39dadbac76388564996e29d2.png",import.meta.url).href;
function image2806(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2806);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2807(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 702 -594 702 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2806);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2808 = document.createElement("img");
imageObj2808.src=new URL("../bitmaps/1ebe95e987f9b58b32388cfe.png",import.meta.url).href;
function image2808(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 380 520 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2808);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2809(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -702 L 653 -702 653 702 -373 702 -373 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-702);
	ctx.transform(1.0526315789473684,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2808);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2810 = document.createElement("img");
imageObj2810.src=new URL("../bitmaps/c1deaf3cfb4909262a7e10d5.png",import.meta.url).href;
function image2810(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2810);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2811(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -742 L 761 -742 761 716 -373 716 -373 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-742);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2810);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2812 = document.createElement("img");
imageObj2812.src=new URL("../bitmaps/9cb6e2e369296fd6182d07b4.png",import.meta.url).href;
function image2812(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 300 540 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2812);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2813(ctx,ctrans,frame,ratio,time){
	var pathData="M -313 -742 L 497 -742 497 716 -313 716 -313 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-313,-742);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2812);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2814 = document.createElement("img");
imageObj2814.src=new URL("../bitmaps/7aef7e7d3c15faddcfd685dc.png",import.meta.url).href;
function image2814(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 520 520 520 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0384615384615385,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2814);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2815(ctx,ctrans,frame,ratio,time){
	var pathData="M -702 -702 L 702 -702 702 702 -702 702 -702 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-702,-702);
	ctx.transform(1.0384615384615385,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2814);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2816 = document.createElement("img");
imageObj2816.src=new URL("../bitmaps/81288dbc889e9b35abedb163.png",import.meta.url).href;
function image2816(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 380 520 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2816);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2817(ctx,ctrans,frame,ratio,time){
	var pathData="M -473 -702 L 553 -702 553 702 -473 702 -473 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-473,-702);
	ctx.transform(1.0526315789473684,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2816);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2818 = document.createElement("img");
imageObj2818.src=new URL("../bitmaps/32b69827fd4591283efe90f2.png",import.meta.url).href;
function image2818(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2818);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2819(ctx,ctrans,frame,ratio,time){
	var pathData="M -533 -762 L 601 -762 601 696 -533 696 -533 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-533,-762);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2818);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2820 = document.createElement("img");
imageObj2820.src=new URL("../bitmaps/c90c8ebf074d6e594a7bebbe.png",import.meta.url).href;
function image2820(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 300 540 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2820);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2821(ctx,ctrans,frame,ratio,time){
	var pathData="M -425 -762 L 385 -762 385 696 -425 696 -425 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-425,-762);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2820);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2822 = document.createElement("img");
imageObj2822.src=new URL("../bitmaps/e0be349767cdcc1f980d45ff.png",import.meta.url).href;
function image2822(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 360 600 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2822);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2823(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 546 -957 546 663 -426 663 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2822);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2824 = document.createElement("img");
imageObj2824.src=new URL("../bitmaps/a1520a540b1d7d955af9ac8a.png",import.meta.url).href;
function image2824(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 460 600 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2824);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2825(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 816 -957 816 663 -426 663 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0434782608695652,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2824);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2826 = document.createElement("img");
imageObj2826.src=new URL("../bitmaps/8cea75964b900807d38b0aba.png",import.meta.url).href;
function image2826(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2826);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2827(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 594 -567 594 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2826);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2828 = document.createElement("img");
imageObj2828.src=new URL("../bitmaps/e451c86d193d2b0c44d6486b.png",import.meta.url).href;
function image2828(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2828);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2829(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 594 -567 594 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2828);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2830 = document.createElement("img");
imageObj2830.src=new URL("../bitmaps/7a81833f3c7214a2ca279e8b.png",import.meta.url).href;
function image2830(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 400 500 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2830);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2831(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -675 L 540 -675 540 675 -540 675 -540 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-675);
	ctx.transform(1.05,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2830);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2832 = document.createElement("img");
imageObj2832.src=new URL("../bitmaps/8b5ac8b5b45a68b0e74f083d.png",import.meta.url).href;
function image2832(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 480 500 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2832);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2833(ctx,ctrans,frame,ratio,time){
	var pathData="M -648 -675 L 648 -675 648 675 -648 675 -648 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-648,-675);
	ctx.transform(1.0416666666666667,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2832);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2834 = document.createElement("img");
imageObj2834.src=new URL("../bitmaps/c2f39ad54f2eb64bf4aa2db1.png",import.meta.url).href;
function image2834(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 360 460 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2834);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2835(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -621 L 486 -621 486 621 -486 621 -486 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-621);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2834);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2836 = document.createElement("img");
imageObj2836.src=new URL("../bitmaps/c6cecf826eabee317b97d431.png",import.meta.url).href;
function image2836(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 360 460 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2836);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2837(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -621 L 486 -621 486 621 -486 621 -486 -621";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-621);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2836);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2838 = document.createElement("img");
imageObj2838.src=new URL("../bitmaps/d622cfe005d8af086158b2cf.png",import.meta.url).href;
function image2838(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 400 560 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2838);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2839(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -756 L 540 -756 540 756 -540 756 -540 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-756);
	ctx.transform(1.05,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2838);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2840 = document.createElement("img");
imageObj2840.src=new URL("../bitmaps/3193b74b230fb5b58681ab29.png",import.meta.url).href;
function image2840(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2840);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2841(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 702 -486 702 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2840);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2842 = document.createElement("img");
imageObj2842.src=new URL("../bitmaps/522da2edf57461311f591ef9.png",import.meta.url).href;
function image2842(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2842);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2843(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 702 -486 702 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2842);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2844 = document.createElement("img");
imageObj2844.src=new URL("../bitmaps/c5d501a973a948971ad9be99.png",import.meta.url).href;
function image2844(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 460 520 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2844);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2845(ctx,ctrans,frame,ratio,time){
	var pathData="M 621 -729 L 621 675 -621 675 -621 -729 621 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,621,-729);
	ctx.transform(1.0434782608695652,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2844);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2846 = document.createElement("img");
imageObj2846.src=new URL("../bitmaps/b27edb8a0ffc068e63ff9540.png",import.meta.url).href;
function image2846(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 540 540 540 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.037037037037037,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2846);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2847(ctx,ctrans,frame,ratio,time){
	var pathData="M -729 -789 L 729 -789 729 669 -729 669 -729 -789";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-729,-789);
	ctx.transform(1.037037037037037,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2846);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2848 = document.createElement("img");
imageObj2848.src=new URL("../bitmaps/9fac0fa3215655e64f0248db.png",import.meta.url).href;
function image2848(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 480 600 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2848);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2849(ctx,ctrans,frame,ratio,time){
	var pathData="M 648 -1049 L 648 571 -648 571 -648 -1049 648 -1049";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,648,-1049);
	ctx.transform(1.0416666666666667,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2848);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2850 = document.createElement("img");
imageObj2850.src=new URL("../bitmaps/70b50efb590f85de1ad0c11d.png",import.meta.url).href;
function image2850(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 420 520 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2850);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2851(ctx,ctrans,frame,ratio,time){
	var pathData="M 567 -769 L 567 635 -567 635 -567 -769 567 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,567,-769);
	ctx.transform(1.0476190476190477,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2850);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2852 = document.createElement("img");
imageObj2852.src=new URL("../bitmaps/083b2829b3ef61bf3dc64e37.png",import.meta.url).href;
function image2852(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 500 520 500 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.04,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2852);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2853(ctx,ctrans,frame,ratio,time){
	var pathData="M 675 -729 L 675 675 -675 675 -675 -729 675 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,675,-729);
	ctx.transform(1.04,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2852);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2854 = document.createElement("img");
imageObj2854.src=new URL("../bitmaps/84fcbc089f73df2d9fdd8563.png",import.meta.url).href;
function image2854(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2854);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2855(ctx,ctrans,frame,ratio,time){
	var pathData="M -440 -769 L 640 -769 640 635 -440 635 -440 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-440,-769);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2854);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2856 = document.createElement("img");
imageObj2856.src=new URL("../bitmaps/43fa29f0d51c98372a5cae82.png",import.meta.url).href;
function image2856(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2856);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2857(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -729 L 621 -729 621 675 -459 675 -459 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-729);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2856);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2858 = document.createElement("img");
imageObj2858.src=new URL("../bitmaps/47440f6241fb41c88eb2a5a5.png",import.meta.url).href;
function image2858(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 300 520 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2858);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2859(ctx,ctrans,frame,ratio,time){
	var pathData="M -405 -729 L 405 -729 405 675 -405 675 -405 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-405,-729);
	ctx.transform(1.0666666666666667,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2858);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2860 = document.createElement("img");
imageObj2860.src=new URL("../bitmaps/5b921552735f0c33fc491e74.png",import.meta.url).href;
function image2860(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 360 620 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2860);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2861(ctx,ctrans,frame,ratio,time){
	var pathData="M -419 -1009 L 553 -1009 553 665 -419 665 -419 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-419,-1009);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2860);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2862 = document.createElement("img");
imageObj2862.src=new URL("../bitmaps/e0addd22188bdb95ecdcefef.png",import.meta.url).href;
function image2862(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 360 620 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2862);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2863(ctx,ctrans,frame,ratio,time){
	var pathData="M -419 -1009 L 553 -1009 553 665 -419 665 -419 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-419,-1009);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2862);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2864 = document.createElement("img");
imageObj2864.src=new URL("../bitmaps/f103a621afdc9950f13f0c05.png",import.meta.url).href;
function image2864(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2864);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2865(ctx,ctrans,frame,ratio,time){
	var pathData="M 556 -950 L 556 616 -416 616 -416 -950 556 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,556,-950);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2864);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2866 = document.createElement("img");
imageObj2866.src=new URL("../bitmaps/99aa019a23910c65306776ed.png",import.meta.url).href;
function image2866(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2866);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2867(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 764 -920 764 646 -424 646 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2866);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2868 = document.createElement("img");
imageObj2868.src=new URL("../bitmaps/ecce319118ebdc758972eb99.png",import.meta.url).href;
function image2868(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2868);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2869(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 556 -950 556 562 -416 562 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2868);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2870 = document.createElement("img");
imageObj2870.src=new URL("../bitmaps/b70df9328ca44d3aa3b14822.png",import.meta.url).href;
function image2870(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2870);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2871(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 764 -920 764 592 -424 592 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2870);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2872 = document.createElement("img");
imageObj2872.src=new URL("../bitmaps/19eb0c9d82aa59cf1492ac87.png",import.meta.url).href;
function image2872(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 380 540 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2872);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2873(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 610 -950 610 508 -416 508 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2872);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2874 = document.createElement("img");
imageObj2874.src=new URL("../bitmaps/a4c6d1aac7dbad5ebab1db97.png",import.meta.url).href;
function image2874(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 460 540 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2874);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2875(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 818 -920 818 538 -424 538 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2874);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2877 = document.createElement("img");
imageObj2877.src=new URL("../bitmaps/3602de835fe0a4f073652e8c.png",import.meta.url).href;
function image2877(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2877);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2878(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 756 -594 756 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2877);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2879 = document.createElement("img");
imageObj2879.src=new URL("../bitmaps/081601d93d8f1aab0caeab22.png",import.meta.url).href;
function image2879(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 440 540 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2879);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2880(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 756 -594 756 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2879);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2881 = document.createElement("img");
imageObj2881.src=new URL("../bitmaps/0a1e86fda8cc66decde06dba.png",import.meta.url).href;
function image2881(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 420 480 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2881);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2882(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 648 -567 648 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2881);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2883 = document.createElement("img");
imageObj2883.src=new URL("../bitmaps/5eb0cd678749b1f3469d3b7f.png",import.meta.url).href;
function image2883(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2883);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2884(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 594 -567 594 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2883);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2885 = document.createElement("img");
imageObj2885.src=new URL("../bitmaps/7632a21a59f1088c17d3bb9b.png",import.meta.url).href;
function image2885(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 380 540 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2885);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2886(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -702 L 653 -702 653 756 -373 756 -373 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-702);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2885);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2887 = document.createElement("img");
imageObj2887.src=new URL("../bitmaps/4f503cb3fc9bd35429a5a8a3.png",import.meta.url).href;
function image2887(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 380 540 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2887);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2888(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -702 L 653 -702 653 756 -373 756 -373 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-702);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2887);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2889 = document.createElement("img");
imageObj2889.src=new URL("../bitmaps/44ac10665997bac6322796de.png",import.meta.url).href;
function image2889(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2889);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2890(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -742 L 761 -742 761 770 -373 770 -373 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-742);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2889);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2891 = document.createElement("img");
imageObj2891.src=new URL("../bitmaps/70a8ee4bb49689cfc773ed8e.png",import.meta.url).href;
function image2891(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2891);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2892(ctx,ctrans,frame,ratio,time){
	var pathData="M -373 -742 L 761 -742 761 770 -373 770 -373 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-373,-742);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2891);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2893 = document.createElement("img");
imageObj2893.src=new URL("../bitmaps/db9e58dc9dce0444949dd7f1.png",import.meta.url).href;
function image2893(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 300 560 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2893);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2894(ctx,ctrans,frame,ratio,time){
	var pathData="M -313 -742 L 497 -742 497 770 -313 770 -313 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-313,-742);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2893);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2895 = document.createElement("img");
imageObj2895.src=new URL("../bitmaps/cb3d92f7503992d6192d7286.png",import.meta.url).href;
function image2895(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 300 560 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2895);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2896(ctx,ctrans,frame,ratio,time){
	var pathData="M -313 -742 L 497 -742 497 770 -313 770 -313 -742";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-313,-742);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2895);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2897 = document.createElement("img");
imageObj2897.src=new URL("../bitmaps/a2a017c46a1076fd86a29f23.png",import.meta.url).href;
function image2897(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 540 540 540 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.037037037037037,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2897);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2898(ctx,ctrans,frame,ratio,time){
	var pathData="M -702 -702 L 756 -702 756 756 -702 756 -702 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-702,-702);
	ctx.transform(1.037037037037037,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2897);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2899 = document.createElement("img");
imageObj2899.src=new URL("../bitmaps/2842dbe40cabadbb66b6522b.png",import.meta.url).href;
function image2899(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 500 540 500 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.04,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2899);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2900(ctx,ctrans,frame,ratio,time){
	var pathData="M -702 -702 L 648 -702 648 756 -702 756 -702 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-702,-702);
	ctx.transform(1.04,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2899);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2901 = document.createElement("img");
imageObj2901.src=new URL("../bitmaps/0df824b39e1fd92c66d7d7b3.png",import.meta.url).href;
function image2901(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 380 540 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2901);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2902(ctx,ctrans,frame,ratio,time){
	var pathData="M -473 -702 L 553 -702 553 756 -473 756 -473 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-473,-702);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2901);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2903 = document.createElement("img");
imageObj2903.src=new URL("../bitmaps/712584871e7025260166e474.png",import.meta.url).href;
function image2903(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 380 540 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2903);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2904(ctx,ctrans,frame,ratio,time){
	var pathData="M -473 -702 L 553 -702 553 756 -473 756 -473 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-473,-702);
	ctx.transform(1.0526315789473684,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2903);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2905 = document.createElement("img");
imageObj2905.src=new URL("../bitmaps/85946070df43edeced5074d4.png",import.meta.url).href;
function image2905(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2905);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2906(ctx,ctrans,frame,ratio,time){
	var pathData="M -533 -762 L 601 -762 601 750 -533 750 -533 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-533,-762);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2905);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2907 = document.createElement("img");
imageObj2907.src=new URL("../bitmaps/08e59ba62b2e6c3b2b45b44d.png",import.meta.url).href;
function image2907(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 420 560 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2907);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2908(ctx,ctrans,frame,ratio,time){
	var pathData="M -533 -762 L 601 -762 601 750 -533 750 -533 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-533,-762);
	ctx.transform(1.0476190476190477,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2907);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2909 = document.createElement("img");
imageObj2909.src=new URL("../bitmaps/d23f12e5933d3736be9b5988.png",import.meta.url).href;
function image2909(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 300 560 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2909);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2910(ctx,ctrans,frame,ratio,time){
	var pathData="M -425 -762 L 385 -762 385 750 -425 750 -425 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-425,-762);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2909);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2911 = document.createElement("img");
imageObj2911.src=new URL("../bitmaps/9db128b16beb6d39e9769092.png",import.meta.url).href;
function image2911(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 300 560 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2911);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2912(ctx,ctrans,frame,ratio,time){
	var pathData="M -425 -762 L 385 -762 385 750 -425 750 -425 -762";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-425,-762);
	ctx.transform(1.0666666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2911);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2913 = document.createElement("img");
imageObj2913.src=new URL("../bitmaps/0a9265a1e2b22ca9754b0852.png",import.meta.url).href;
function image2913(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 360 620 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2913);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2914(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 546 -957 546 717 -426 717 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2913);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2915 = document.createElement("img");
imageObj2915.src=new URL("../bitmaps/3c8a655c857ca7cc01488748.png",import.meta.url).href;
function image2915(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 360 620 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2915);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2916(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 546 -957 546 717 -426 717 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0555555555555556,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2915);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2917 = document.createElement("img");
imageObj2917.src=new URL("../bitmaps/c52a3f94b605f3d03690b929.png",import.meta.url).href;
function image2917(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 480 620 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2917);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2918(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 870 -957 870 717 -426 717 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2917);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2919 = document.createElement("img");
imageObj2919.src=new URL("../bitmaps/f30db209410ccd63e63f5b58.png",import.meta.url).href;
function image2919(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 440 620 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2919);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2920(ctx,ctrans,frame,ratio,time){
	var pathData="M -426 -957 L 762 -957 762 717 -426 717 -426 -957";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-426,-957);
	ctx.transform(1.0454545454545454,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2919);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2921 = document.createElement("img");
imageObj2921.src=new URL("../bitmaps/55e001794b98e6c7fb59bfb4.png",import.meta.url).href;
function image2921(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 420 480 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2921);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2922(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 648 -567 648 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2921);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2923 = document.createElement("img");
imageObj2923.src=new URL("../bitmaps/cf4748f5e878c8de35d61d53.png",import.meta.url).href;
function image2923(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 420 460 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2923);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2924(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -648 L 567 -648 567 594 -567 594 -567 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-648);
	ctx.transform(1.0476190476190477,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2923);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2925 = document.createElement("img");
imageObj2925.src=new URL("../bitmaps/3d1e2aa310758ecbc643509b.png",import.meta.url).href;
function image2925(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 500 520 500 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.04,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2925);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2926(ctx,ctrans,frame,ratio,time){
	var pathData="M -675 -702 L 675 -702 675 702 -675 702 -675 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-675,-702);
	ctx.transform(1.04,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2925);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2927 = document.createElement("img");
imageObj2927.src=new URL("../bitmaps/fa268419a64539f33c35ed57.png",import.meta.url).href;
function image2927(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 460 520 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2927);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2928(ctx,ctrans,frame,ratio,time){
	var pathData="M -648 -675 L 594 -675 594 729 -648 729 -648 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-648,-675);
	ctx.transform(1.0434782608695652,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2927);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2929 = document.createElement("img");
imageObj2929.src=new URL("../bitmaps/142a014e8f3b9072f172dabc.png",import.meta.url).href;
function image2929(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2929);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2930(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -702 L 540 -702 540 702 -540 702 -540 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-702);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2929);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2931 = document.createElement("img");
imageObj2931.src=new URL("../bitmaps/ec10cc29b5f17ded65825e51.png",import.meta.url).href;
function image2931(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 400 520 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2931);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2932(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -675 L 540 -675 540 729 -540 729 -540 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-675);
	ctx.transform(1.05,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2931);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2933 = document.createElement("img");
imageObj2933.src=new URL("../bitmaps/3961b737132cc5151423ecc9.png",import.meta.url).href;
function image2933(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 360 480 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2933);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2934(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -648 L 486 -648 486 648 -486 648 -486 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-648);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2933);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2935 = document.createElement("img");
imageObj2935.src=new URL("../bitmaps/c09bff6d1167be852b49aec9.png",import.meta.url).href;
function image2935(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 360 460 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2935);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2936(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -641 L 486 -641 486 601 -486 601 -486 -641";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-641);
	ctx.transform(1.0555555555555556,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2935);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2937 = document.createElement("img");
imageObj2937.src=new URL("../bitmaps/b70d92ba9b996bdc97c66e64.png",import.meta.url).href;
function image2937(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 360 480 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2937);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2938(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -648 L 486 -648 486 648 -486 648 -486 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-648);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2937);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2939 = document.createElement("img");
imageObj2939.src=new URL("../bitmaps/6518d2a2dc0575f9257e904e.png",import.meta.url).href;
function image2939(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 360 480 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2939);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2940(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -648 L 486 -648 486 648 -486 648 -486 -648";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-648);
	ctx.transform(1.0555555555555556,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2939);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2941 = document.createElement("img");
imageObj2941.src=new URL("../bitmaps/ce2a641b5faffb7574b95e8c.png",import.meta.url).href;
function image2941(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 400 600 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2941);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2942(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -810 L 540 -810 540 810 -540 810 -540 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-810);
	ctx.transform(1.05,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2941);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2943 = document.createElement("img");
imageObj2943.src=new URL("../bitmaps/5898544ac09426a891baca7a.png",import.meta.url).href;
function image2943(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 400 600 400 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.05,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2943);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2944(ctx,ctrans,frame,ratio,time){
	var pathData="M -540 -810 L 540 -810 540 810 -540 810 -540 -810";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-540,-810);
	ctx.transform(1.05,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2943);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2945 = document.createElement("img");
imageObj2945.src=new URL("../bitmaps/b9be13e078c6bdc09387b150.png",import.meta.url).href;
function image2945(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2945);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2946(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 756 -486 756 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2945);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2947 = document.createElement("img");
imageObj2947.src=new URL("../bitmaps/d3b3dc1118c7505e7197b983.png",import.meta.url).href;
function image2947(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2947);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2948(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 756 -486 756 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2947);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2949 = document.createElement("img");
imageObj2949.src=new URL("../bitmaps/3e0aa7a865e6084ffa0b5f14.png",import.meta.url).href;
function image2949(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2949);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2950(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 756 -486 756 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2949);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2951 = document.createElement("img");
imageObj2951.src=new URL("../bitmaps/22baea299f64f80f608b9664.png",import.meta.url).href;
function image2951(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 360 560 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2951);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2952(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -756 L 486 -756 486 756 -486 756 -486 -756";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-756);
	ctx.transform(1.0555555555555556,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2951);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2953 = document.createElement("img");
imageObj2953.src=new URL("../bitmaps/dfb6839fe1b94522044e8248.png",import.meta.url).href;
function image2953(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 460 540 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2953);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2954(ctx,ctrans,frame,ratio,time){
	var pathData="M 621 -729 L 621 729 -621 729 -621 -729 621 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,621,-729);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2953);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2955 = document.createElement("img");
imageObj2955.src=new URL("../bitmaps/e59964c3af832abfe1a77668.png",import.meta.url).href;
function image2955(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 460 540 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2955);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2956(ctx,ctrans,frame,ratio,time){
	var pathData="M 621 -729 L 621 729 -621 729 -621 -729 621 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,621,-729);
	ctx.transform(1.0434782608695652,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2955);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2957 = document.createElement("img");
imageObj2957.src=new URL("../bitmaps/998b40a07f0d99be3bc096b5.png",import.meta.url).href;
function image2957(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 520 560 520 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0384615384615385,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2957);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2958(ctx,ctrans,frame,ratio,time){
	var pathData="M -702 -789 L 702 -789 702 723 -702 723 -702 -789";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-702,-789);
	ctx.transform(1.0384615384615385,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2957);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2959 = document.createElement("img");
imageObj2959.src=new URL("../bitmaps/9aeead5917ef16c52204008f.png",import.meta.url).href;
function image2959(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 560 560 560 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0357142857142858,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2959);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2960(ctx,ctrans,frame,ratio,time){
	var pathData="M -729 -789 L 783 -789 783 723 -729 723 -729 -789";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-729,-789);
	ctx.transform(1.0357142857142858,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2959);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2961 = document.createElement("img");
imageObj2961.src=new URL("../bitmaps/4fb9c243c35568dbe5366f48.png",import.meta.url).href;
function image2961(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 480 620 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2961);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2962(ctx,ctrans,frame,ratio,time){
	var pathData="M 648 -1049 L 648 625 -648 625 -648 -1049 648 -1049";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,648,-1049);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2961);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2963 = document.createElement("img");
imageObj2963.src=new URL("../bitmaps/3a11fbad47a36f474bbcd353.png",import.meta.url).href;
function image2963(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 620 480 620 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2963);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2964(ctx,ctrans,frame,ratio,time){
	var pathData="M 648 -1049 L 648 625 -648 625 -648 -1049 648 -1049";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,648,-1049);
	ctx.transform(1.0416666666666667,0,0,1.032258064516129,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2963);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2965 = document.createElement("img");
imageObj2965.src=new URL("../bitmaps/0ef7a9156bed5cfff1a752fc.png",import.meta.url).href;
function image2965(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2965);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2966(ctx,ctrans,frame,ratio,time){
	var pathData="M 567 -769 L 567 689 -567 689 -567 -769 567 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,567,-769);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2965);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2967 = document.createElement("img");
imageObj2967.src=new URL("../bitmaps/5e241f852695648a875f53bf.png",import.meta.url).href;
function image2967(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2967);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2968(ctx,ctrans,frame,ratio,time){
	var pathData="M 567 -769 L 567 689 -567 689 -567 -769 567 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,567,-769);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2967);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2969 = document.createElement("img");
imageObj2969.src=new URL("../bitmaps/0f7de35a0e64a8c59f4b3dcd.png",import.meta.url).href;
function image2969(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 480 540 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2969);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2970(ctx,ctrans,frame,ratio,time){
	var pathData="M 648 -729 L 648 729 -648 729 -648 -729 648 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,648,-729);
	ctx.transform(1.0416666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2969);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2971 = document.createElement("img");
imageObj2971.src=new URL("../bitmaps/6ccac671143563ccfe878069.png",import.meta.url).href;
function image2971(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 520 540 520 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0384615384615385,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2971);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2972(ctx,ctrans,frame,ratio,time){
	var pathData="M 702 -729 L 702 729 -702 729 -702 -729 702 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,702,-729);
	ctx.transform(1.0384615384615385,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2971);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2973 = document.createElement("img");
imageObj2973.src=new URL("../bitmaps/5026de07329e8416f905aba0.png",import.meta.url).href;
function image2973(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 340 520 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2973);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2974(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -769 L 459 -769 459 635 -459 635 -459 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-769);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2973);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2975 = document.createElement("img");
imageObj2975.src=new URL("../bitmaps/adad41e1d678c15ff946fefe.png",import.meta.url).href;
function image2975(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2975);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2976(ctx,ctrans,frame,ratio,time){
	var pathData="M -486 -769 L 486 -769 486 635 -486 635 -486 -769";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-486,-769);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2975);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2977 = document.createElement("img");
imageObj2977.src=new URL("../bitmaps/fb41564392c81aba986cd2bf.png",import.meta.url).href;
function image2977(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 340 520 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2977);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2978(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -729 L 459 -729 459 675 -459 675 -459 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-729);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2977);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2979 = document.createElement("img");
imageObj2979.src=new URL("../bitmaps/2def8328e0a349ee1eb99337.png",import.meta.url).href;
function image2979(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2979);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2980(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -729 L 513 -729 513 675 -459 675 -459 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-729);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2979);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2981 = document.createElement("img");
imageObj2981.src=new URL("../bitmaps/0b4d2bd6de2ac7093d790dfc.png",import.meta.url).href;
function image2981(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 300 540 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2981);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2982(ctx,ctrans,frame,ratio,time){
	var pathData="M -405 -729 L 405 -729 405 729 -405 729 -405 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-405,-729);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2981);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2983 = document.createElement("img");
imageObj2983.src=new URL("../bitmaps/d7588eca012b573b3a47853d.png",import.meta.url).href;
function image2983(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 300 540 300 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2983);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2984(ctx,ctrans,frame,ratio,time){
	var pathData="M -405 -729 L 405 -729 405 729 -405 729 -405 -729";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-405,-729);
	ctx.transform(1.0666666666666667,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2983);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2985 = document.createElement("img");
imageObj2985.src=new URL("../bitmaps/0d27ed9af9c8d2f5ecf3c115.png",import.meta.url).href;
function image2985(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 380 640 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2985);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2986(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -1009 L 567 -1009 567 719 -459 719 -459 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-1009);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2985);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2987 = document.createElement("img");
imageObj2987.src=new URL("../bitmaps/58d48744b4310a661ad55efa.png",import.meta.url).href;
function image2987(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 380 640 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2987);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2988(ctx,ctrans,frame,ratio,time){
	var pathData="M -439 -1009 L 587 -1009 587 719 -439 719 -439 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-439,-1009);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2987);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2989 = document.createElement("img");
imageObj2989.src=new URL("../bitmaps/8a49ad1855053aadca92d04e.png",import.meta.url).href;
function image2989(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 360 640 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2989);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2990(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -1009 L 513 -1009 513 719 -459 719 -459 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-1009);
	ctx.transform(1.0555555555555556,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2989);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2991 = document.createElement("img");
imageObj2991.src=new URL("../bitmaps/3f89d5e77656f7339d77504e.png",import.meta.url).href;
function image2991(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 640 380 640 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2991);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2992(ctx,ctrans,frame,ratio,time){
	var pathData="M -439 -1009 L 587 -1009 587 719 -439 719 -439 -1009";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-439,-1009);
	ctx.transform(1.0526315789473684,0,0,1.03125,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2991);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2993 = document.createElement("img");
imageObj2993.src=new URL("../bitmaps/727db69957f417b6a09676a6.png",import.meta.url).href;
function image2993(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 420 600 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2993);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2994(ctx,ctrans,frame,ratio,time){
	var pathData="M 717 -920 L 717 700 -417 700 -417 -920 717 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,717,-920);
	ctx.transform(1.0476190476190477,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2993);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2995 = document.createElement("img");
imageObj2995.src=new URL("../bitmaps/fad0e6450e8faeebddad2643.png",import.meta.url).href;
function image2995(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 460 600 460 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0434782608695652,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2995);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2996(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 818 -920 818 700 -424 700 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0434782608695652,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2995);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2997 = document.createElement("img");
imageObj2997.src=new URL("../bitmaps/9521f7e17942cad465300881.png",import.meta.url).href;
function image2997(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 360 600 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2997);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2998(ctx,ctrans,frame,ratio,time){
	var pathData="M 556 -950 L 556 670 -416 670 -416 -950 556 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,556,-950);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2997);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj2999 = document.createElement("img");
imageObj2999.src=new URL("../bitmaps/11be7f4192cfca4b181211ee.png",import.meta.url).href;
function image2999(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 600 360 600 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2999);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3000(ctx,ctrans,frame,ratio,time){
	var pathData="M 556 -950 L 556 670 -416 670 -416 -950 556 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,556,-950);
	ctx.transform(1.0555555555555556,0,0,1.0333333333333334,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2999);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3001 = document.createElement("img");
imageObj3001.src=new URL("../bitmaps/4c428bdefb649c3b3adf8496.png",import.meta.url).href;
function image3001(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 420 580 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3001);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3002(ctx,ctrans,frame,ratio,time){
	var pathData="M -417 -920 L 717 -920 717 646 -417 646 -417 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-417,-920);
	ctx.transform(1.0476190476190477,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3001);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3003 = document.createElement("img");
imageObj3003.src=new URL("../bitmaps/4c58e57eef5635afa7e19d93.png",import.meta.url).href;
function image3003(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 440 580 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3003);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3004(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 764 -920 764 646 -424 646 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0454545454545454,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3003);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3005 = document.createElement("img");
imageObj3005.src=new URL("../bitmaps/e0e59ad96db81378ecbb80f8.png",import.meta.url).href;
function image3005(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3005);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3006(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 556 -950 556 616 -416 616 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3005);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3007 = document.createElement("img");
imageObj3007.src=new URL("../bitmaps/cd97f5a27ca7ee8fcde554b1.png",import.meta.url).href;
function image3007(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 580 360 580 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3007);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3008(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 556 -950 556 616 -416 616 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0555555555555556,0,0,1.0344827586206897,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3007);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3009 = document.createElement("img");
imageObj3009.src=new URL("../bitmaps/fe4e5b1fed997e63883f014f.png",import.meta.url).href;
function image3009(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 440 560 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3009);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3010(ctx,ctrans,frame,ratio,time){
	var pathData="M -417 -920 L 771 -920 771 592 -417 592 -417 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-417,-920);
	ctx.transform(1.0454545454545454,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3009);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3011 = document.createElement("img");
imageObj3011.src=new URL("../bitmaps/fa455ee4d16286d71719d704.png",import.meta.url).href;
function image3011(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 480 560 480 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0416666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3011);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3012(ctx,ctrans,frame,ratio,time){
	var pathData="M -424 -920 L 872 -920 872 592 -424 592 -424 -920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-424,-920);
	ctx.transform(1.0416666666666667,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3011);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3013 = document.createElement("img");
imageObj3013.src=new URL("../bitmaps/581ca3e3d0afa0208c2a49ff.png",import.meta.url).href;
function image3013(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 380 560 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3013);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3014(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 610 -950 610 562 -416 562 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3013);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3015 = document.createElement("img");
imageObj3015.src=new URL("../bitmaps/2f8adb883bef8d86d4e3bdc3.png",import.meta.url).href;
function image3015(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 380 560 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3015);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3016(ctx,ctrans,frame,ratio,time){
	var pathData="M -416 -950 L 610 -950 610 562 -416 562 -416 -950";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-416,-950);
	ctx.transform(1.0526315789473684,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3015);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3017(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3017,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 843;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape2878",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape2880",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 24:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 25:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 26:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 27:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 28:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 29:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 30:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 31:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 32:
			place("shape2882",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 33:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 34:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 35:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 36:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 37:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 38:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 39:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 40:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 41:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 42:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 43:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 44:
			place("shape2884",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 45:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 46:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 47:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 48:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 49:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 50:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 51:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 52:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 53:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 54:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 55:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 56:
			place("shape2886",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 57:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 58:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 59:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 60:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 61:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 62:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 63:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 64:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 65:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 66:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 67:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 68:
			place("shape2888",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 69:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 70:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 71:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 72:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 73:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 74:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 75:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 76:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 77:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 78:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 79:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 80:
			place("shape2890",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 81:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 82:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 83:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 84:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 85:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 86:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 87:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 88:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 89:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 90:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 91:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 92:
			place("shape2892",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 93:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 94:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 95:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 96:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 97:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 98:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 99:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 100:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 101:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 102:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 103:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 104:
			place("shape2894",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 105:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 106:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 107:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 108:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 109:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 110:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 111:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 112:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 113:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 114:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 115:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 116:
			place("shape2896",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 117:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 118:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 119:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 120:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 121:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 122:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 123:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 124:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 125:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 126:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 127:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 128:
			place("shape2898",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 129:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 130:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 131:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 132:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 133:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 134:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 135:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 136:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 137:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 138:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 139:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 140:
			place("shape2900",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 141:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 142:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 143:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 144:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 145:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 146:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 147:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 148:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 149:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 150:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 151:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 152:
			place("shape2902",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 153:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 154:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 155:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 156:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 157:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 158:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 159:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 160:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 161:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 162:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 163:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 164:
			place("shape2904",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 165:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 166:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 167:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 168:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 169:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 170:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 171:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 172:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 173:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 174:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 175:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 176:
			place("shape2906",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 177:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 178:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 179:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 180:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 181:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 182:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 183:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 184:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 185:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 186:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 187:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 188:
			place("shape2908",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 189:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 190:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 191:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 192:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 193:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 194:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 195:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 196:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 197:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 198:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 199:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 200:
			place("shape2910",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 201:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 202:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 203:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 204:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 205:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 206:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 207:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 208:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 209:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 210:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 211:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 212:
			place("shape2912",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 213:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 214:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 215:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 216:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 217:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 218:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 219:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 220:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 221:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 222:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 223:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 224:
			place("shape2914",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 225:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 226:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 227:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 228:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 229:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 230:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 231:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 232:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 233:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 234:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 235:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 236:
			place("shape2916",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 237:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 238:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 239:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 240:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 241:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 242:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 243:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 244:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 245:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 246:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 247:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 248:
			place("shape2918",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 249:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 250:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 251:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 252:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 253:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 254:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 255:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 256:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 257:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 258:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 259:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 260:
			place("shape2920",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 261:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 262:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 263:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 264:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 265:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 266:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 267:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 268:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 269:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 270:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 271:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 272:
			place("shape2922",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 273:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 274:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 275:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 276:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 277:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 278:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 279:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 280:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 281:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 282:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 283:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 284:
			place("shape2924",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 285:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 286:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 287:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 288:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 289:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 290:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 291:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 292:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 293:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 294:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 295:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 296:
			place("shape2926",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 297:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 298:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 299:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 300:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 301:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 302:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 303:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 304:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 305:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 306:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 307:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 308:
			place("shape2928",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 309:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 310:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 311:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 312:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 313:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 314:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 315:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 316:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 317:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 318:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 319:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 320:
			place("shape2930",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 321:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 322:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 323:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 324:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 325:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 326:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 327:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 328:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 329:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 330:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 331:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 332:
			place("shape2932",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 333:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 334:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 335:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 336:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 337:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 338:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 339:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 340:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 341:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 342:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 343:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 344:
			place("shape2934",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 345:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 346:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 347:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 348:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 349:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 350:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 351:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 352:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 353:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 354:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 355:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 356:
			place("shape2936",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 357:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 358:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 359:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 360:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 361:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 362:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 363:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 364:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 365:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 366:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 367:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 368:
			place("shape2938",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 369:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 370:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 371:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 372:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 373:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 374:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 375:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 376:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 377:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 378:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 379:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 380:
			place("shape2940",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 381:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 382:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 383:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 384:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 385:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 386:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 387:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 388:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 389:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 390:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 391:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 392:
			place("shape2942",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 393:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 394:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 395:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 396:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 397:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 398:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 399:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 400:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 401:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 402:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 403:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 404:
			place("shape2944",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 405:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 406:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 407:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 408:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 409:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 410:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 411:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 412:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 413:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 414:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 415:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 416:
			place("shape2946",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 417:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 418:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 419:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 420:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 421:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 422:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 423:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 424:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 425:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 426:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 427:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 428:
			place("shape2948",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 429:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 430:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 431:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 432:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 433:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 434:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 435:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 436:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 437:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 438:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 439:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 440:
			place("shape2950",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 441:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 442:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 443:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 444:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 445:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 446:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 447:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 448:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 449:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 450:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 451:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 452:
			place("shape2952",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 453:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 454:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 455:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 456:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 457:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 458:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 459:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 460:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 461:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 462:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 463:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 464:
			place("shape2954",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 465:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 466:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 467:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 468:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 469:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 470:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 471:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 472:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 473:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 474:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 475:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 476:
			place("shape2956",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 477:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 478:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 479:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 480:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 481:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 482:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 483:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 484:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 485:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 486:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 487:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 488:
			place("shape2958",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 489:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 490:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 491:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 492:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 493:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 494:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 495:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 496:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 497:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 498:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 499:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 500:
			place("shape2960",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 501:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 502:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 503:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 504:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 505:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 506:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 507:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 508:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 509:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 510:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 511:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 512:
			place("shape2962",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 513:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 514:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 515:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 516:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 517:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 518:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 519:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 520:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 521:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 522:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 523:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 524:
			place("shape2964",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 525:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 526:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 527:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 528:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 529:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 530:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 531:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 532:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 533:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 534:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 535:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 536:
			place("shape2966",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 537:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 538:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 539:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 540:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 541:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 542:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 543:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 544:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 545:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 546:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 547:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 548:
			place("shape2968",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 549:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 550:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 551:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 552:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 553:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 554:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 555:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 556:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 557:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 558:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 559:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 560:
			place("shape2970",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 561:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 562:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 563:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 564:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 565:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 566:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 567:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 568:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 569:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 570:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 571:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 572:
			place("shape2972",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 573:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 574:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 575:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 576:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 577:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 578:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 579:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 580:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 581:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 582:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 583:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 584:
			place("shape2974",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 585:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 586:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 587:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 588:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 589:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 590:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 591:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 592:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 593:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 594:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 595:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 596:
			place("shape2976",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 597:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 598:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 599:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 600:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 601:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 602:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 603:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 604:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 605:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 606:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 607:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 608:
			place("shape2978",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 609:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 610:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 611:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 612:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 613:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 614:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 615:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 616:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 617:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 618:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 619:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 620:
			place("shape2980",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 621:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 622:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 623:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 624:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 625:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 626:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 627:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 628:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 629:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 630:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 631:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 632:
			place("shape2982",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 633:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 634:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 635:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 636:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 637:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 638:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 639:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 640:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 641:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 642:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 643:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 644:
			place("shape2984",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 645:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 646:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 647:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 648:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 649:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 650:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 651:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 652:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 653:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 654:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 655:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 656:
			place("shape2986",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 657:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 658:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 659:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 660:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 661:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 662:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 663:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 664:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 665:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 666:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 667:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 668:
			place("shape2988",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 669:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 670:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 671:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 672:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 673:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 674:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 675:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 676:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 677:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 678:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 679:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 680:
			place("shape2990",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 681:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 682:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 683:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 684:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 685:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 686:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 687:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 688:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 689:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 690:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 691:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 692:
			place("shape2992",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 693:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 694:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 695:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 696:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 697:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 698:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 699:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 700:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 701:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 702:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 703:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 704:
			place("shape2994",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 705:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 706:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 707:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 708:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 709:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 710:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 711:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 712:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 713:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 714:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 715:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 716:
			place("shape2996",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 717:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 718:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 719:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 720:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 721:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 722:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 723:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 724:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 725:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 726:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 727:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 728:
			place("shape2998",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 729:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 730:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 731:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 732:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 733:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 734:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 735:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 736:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 737:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 738:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 739:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 740:
			place("shape3000",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 741:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 742:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 743:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 744:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 745:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 746:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 747:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 748:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 749:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 750:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 751:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 752:
			place("shape3002",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 753:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 754:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 755:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 756:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 757:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 758:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 759:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 760:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 761:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 762:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 763:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 764:
			place("shape3004",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 765:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 766:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 767:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 768:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 769:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 770:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 771:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 772:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 773:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 774:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 775:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 776:
			place("shape3006",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 777:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 778:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 779:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 780:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 781:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 782:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 783:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 784:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 785:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 786:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 787:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 788:
			place("shape3008",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 789:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 790:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 791:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 792:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 793:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 794:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 795:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 796:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 797:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 798:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 799:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 800:
			place("shape3010",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 801:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 802:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 803:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 804:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 805:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 806:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 807:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 808:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 809:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 810:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 811:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 812:
			place("shape3012",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 813:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 814:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 815:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 816:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 817:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 818:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 819:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 820:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 821:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 822:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 823:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 824:
			place("shape3014",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 825:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 826:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 827:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 828:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 829:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 830:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 831:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 832:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 833:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 834:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 835:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 836:
			place("shape3016",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 837:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 838:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 839:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 840:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 841:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 842:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function font982(ctx,ch,textColor){
	defaultFill = textColor;
	switch(ch){
		case " ":
			break;
		case "!":
			var pathData="M 1840 0 L 3910 0 3910 -2050 1840 -2050 1840 0 M 2310 -3640 L 3470 -3640 3990 -11410 3990 -14660 1760 -14660 1760 -11410 2310 -3640";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "\"":
			var pathData="M 4750 -9470 L 5830 -9470 6310 -12260 6310 -14660 4260 -14660 4260 -12260 4750 -9470 M 1440 -9470 L 2540 -9470 2990 -12260 2990 -14660 940 -14660 940 -12260 1440 -9470";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "#":
			var pathData="M 3700 -5500 L 4440 -9130 7590 -9130 6840 -5500 3700 -5500 M 1030 250 L 2530 250 3400 -4010 6540 -4010 5680 250 7180 250 8050 -4010 11130 -4010 11130 -5500 8350 -5500 9100 -9130 11130 -9130 11130 -10620 9400 -10620 10270 -14910 8760 -14910 7890 -10620 4740 -10620 5610 -14910 4110 -14910 3240 -10620 210 -10620 210 -9130 2940 -9130 2200 -5500 210 -5500 210 -4010 1900 -4010 1030 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "$":
			var pathData="M 6160 -1210 L 6160 -6690 Q 7610 -6220 8100 -5620 8580 -5030 8580 -4050 8580 -2900 7900 -2120 7210 -1340 6160 -1210 M 5100 -13650 L 5100 -8670 Q 3870 -9040 3360 -9660 2840 -10280 2840 -11200 2840 -12130 3450 -12810 4050 -13490 5100 -13650 M 5100 2110 L 6160 2110 6160 290 Q 8050 200 9240 -1050 10430 -2300 10430 -4170 10430 -5020 10150 -5750 9860 -6480 9330 -7010 8800 -7540 7960 -7910 7520 -8100 6160 -8440 L 6160 -13630 Q 7040 -13450 7550 -12880 8050 -12320 8210 -11260 L 10070 -11540 Q 9830 -13250 8650 -14230 7730 -15000 6160 -15150 L 6160 -16010 5100 -16010 5100 -15150 Q 3310 -14970 2400 -14170 1040 -12980 1040 -11060 1040 -9980 1510 -9130 1970 -8280 2830 -7800 3990 -7150 5100 -6940 L 5100 -1210 Q 4040 -1320 3280 -2280 2750 -2960 2540 -4410 L 730 -4070 Q 830 -2670 1450 -1700 2060 -730 2910 -290 3750 140 5100 310 L 5100 2110";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "%":
			var pathData="M 13810 -5970 Q 14480 -5970 14930 -5390 15380 -4820 15380 -3400 15380 -1860 14940 -1280 14490 -700 13800 -700 13140 -700 12690 -1280 12240 -1860 12240 -3260 12240 -4810 12690 -5390 13130 -5970 13810 -5970 M 10670 -3440 Q 10670 -1450 11560 -450 12440 540 13770 540 15120 540 16040 -460 16950 -1470 16950 -3330 16950 -5240 16050 -6220 15140 -7210 13760 -7210 12250 -7210 11460 -6110 10670 -5020 10670 -3440 M 4330 540 L 5820 540 13810 -14910 12350 -14910 4330 540 M 4320 -13670 Q 4990 -13670 5440 -13090 5890 -12520 5890 -11100 5890 -9560 5450 -8980 5000 -8400 4320 -8400 3660 -8400 3210 -8970 2760 -9550 2760 -10960 2760 -12510 3210 -13090 3650 -13670 4320 -13670 M 1190 -11140 Q 1190 -9140 2080 -8150 2960 -7160 4290 -7160 5630 -7160 6550 -8160 7460 -9170 7460 -11030 7460 -12940 6560 -13920 5650 -14910 4270 -14910 2770 -14910 1980 -13810 1190 -12710 1190 -11140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "&":
			var pathData="M 8600 -3150 Q 8080 -2350 7220 -1840 6350 -1340 5540 -1340 4240 -1340 3530 -2300 2820 -3260 2820 -4150 2820 -4880 3330 -5620 3840 -6370 5300 -7240 L 8600 -3150 M 6070 -9370 L 5270 -10300 Q 4920 -10720 4750 -11090 4570 -11470 4570 -11810 4570 -12490 5060 -12960 5540 -13430 6270 -13430 6980 -13430 7460 -12950 7930 -12480 7930 -11730 7930 -11100 7590 -10580 7240 -10060 6070 -9370 M 9730 -1730 Q 10890 -360 11980 340 L 13190 -1090 Q 11910 -2000 10900 -3340 11720 -4580 12200 -6500 L 10330 -6900 Q 10080 -5740 9630 -4860 L 7000 -8210 Q 9770 -9690 9770 -11780 9770 -13070 8820 -13990 7860 -14910 6360 -14910 4790 -14910 3760 -13930 2720 -12960 2720 -11640 2720 -10980 3050 -10270 3380 -9560 4370 -8420 2630 -7590 1760 -6490 880 -5400 880 -4040 880 -2510 1950 -1270 3270 250 5520 250 6740 250 7790 -240 8840 -740 9730 -1730";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "'":
			var pathData="M 1360 -9470 L 2470 -9470 2950 -12210 2950 -14660 900 -14660 900 -12210 1360 -9470";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "(":
			var pathData="M 4790 4310 L 6080 4310 Q 3090 -490 3090 -5300 3090 -7190 3520 -9060 3870 -10560 4480 -11940 4870 -12830 6080 -14910 L 4790 -14910 Q 2910 -12400 2010 -9870 1240 -7690 1240 -5310 1240 -2610 2270 -90 3300 2430 4790 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ")":
			var pathData="M 2530 4310 Q 4010 2430 5050 -90 6080 -2610 6080 -5310 6080 -7690 5310 -9870 4410 -12400 2530 -14910 L 1240 -14910 Q 2460 -12810 2850 -11910 3460 -10530 3800 -9030 4230 -7180 4230 -5300 4230 -490 1240 4310 L 2530 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "*":
			var pathData="M 640 -11970 Q 1800 -11660 3090 -11410 2590 -10950 1430 -9520 L 2610 -8670 Q 3170 -9410 3910 -10820 4700 -9460 5280 -8670 L 6480 -9520 Q 5370 -10880 4760 -11410 5980 -11550 7250 -11970 L 6790 -13390 Q 5460 -12950 4430 -12430 4630 -13920 4660 -14910 L 3210 -14910 Q 3220 -14230 3410 -12420 2690 -12830 1100 -13390 L 640 -11970";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "+":
			var pathData="M 5130 -2370 L 6830 -2370 6830 -6390 10820 -6390 10820 -8070 6830 -8070 6830 -12060 5130 -12060 5130 -8070 1140 -8070 1140 -6390 5130 -6390 5130 -2370";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ",":
			var pathData="M 1820 0 L 2840 0 Q 2810 910 2540 1400 2270 1880 1700 2130 L 2200 2900 Q 3070 2520 3470 1830 3870 1130 3870 0 L 3870 -2050 1820 -2050 1820 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "-":
			var pathData="M 650 -4400 L 6180 -4400 6180 -6210 650 -6210 650 -4400";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ".":
			var pathData="M 1860 0 L 3910 0 3910 -2050 1860 -2050 1860 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "/":
			var pathData="M 0 250 L 1450 250 5690 -14910 4250 -14910 0 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "0":
			var pathData="M 2700 -7230 Q 2700 -10840 3630 -12180 4370 -13230 5610 -13230 6870 -13230 7720 -12040 8560 -10850 8560 -7230 8560 -3630 7720 -2430 6870 -1230 5630 -1230 4390 -1230 3550 -2420 2700 -3620 2700 -7230 M 850 -7230 Q 850 -3100 2300 -1270 3510 250 5630 250 7240 250 8300 -610 9350 -1480 9880 -3060 10410 -4650 10410 -7230 10410 -9410 10080 -10690 9750 -11980 9170 -12870 8590 -13770 7700 -14240 6810 -14720 5630 -14720 4030 -14720 2980 -13860 1920 -13000 1390 -11410 850 -9830 850 -7230";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "1":
			var pathData="M 7630 0 L 7630 -14720 6470 -14720 Q 6000 -13770 4870 -12760 3740 -11750 2230 -11040 L 2230 -9300 Q 3070 -9610 4130 -10230 5180 -10850 5830 -11470 L 5830 0 7630 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "2":
			var pathData="M 10310 -1730 L 3120 -1730 Q 3420 -2220 3880 -2700 4340 -3190 5960 -4550 7900 -6190 8740 -7130 9570 -8070 9930 -8920 10290 -9770 10290 -10650 10290 -12380 9060 -13550 7830 -14720 5720 -14720 3630 -14720 2390 -13630 1150 -12550 960 -10480 L 2810 -10290 Q 2820 -11670 3600 -12450 4380 -13230 5680 -13230 6910 -13230 7680 -12490 8440 -11760 8440 -10690 8440 -9670 7600 -8520 6760 -7380 4370 -5420 2830 -4160 2020 -3200 1200 -2240 830 -1250 600 -650 620 0 L 10310 0 10310 -1730";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "3":
			var pathData="M 860 -3870 Q 1040 -2040 2320 -890 3590 260 5520 260 7660 260 9060 -1070 10460 -2410 10460 -4330 10460 -5750 9740 -6690 9020 -7640 7720 -7940 8720 -8400 9230 -9180 9740 -9960 9740 -10910 9740 -11910 9210 -12800 8670 -13690 7660 -14200 6650 -14720 5450 -14720 3710 -14720 2540 -13720 1370 -12730 1040 -10920 L 2840 -10600 Q 3040 -11920 3740 -12580 4440 -13240 5490 -13240 6550 -13240 7220 -12590 7890 -11940 7890 -10950 7890 -9700 6970 -9100 6050 -8500 4900 -8500 4790 -8500 4610 -8520 L 4410 -6940 Q 5170 -7140 5680 -7140 6930 -7140 7740 -6330 8550 -5530 8550 -4290 8550 -2990 7680 -2110 6800 -1230 5530 -1230 4460 -1230 3720 -1900 2970 -2580 2660 -4110 L 860 -3870";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "4":
			var pathData="M 6620 -5160 L 2030 -5160 6620 -11770 6620 -5160 M 6620 0 L 8420 0 8420 -3510 10400 -3510 10400 -5160 8420 -5160 8420 -14660 6950 -14660 260 -5160 260 -3510 6620 -3510 6620 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "5":
			var pathData="M 850 -3840 Q 1030 -1990 2300 -870 3560 250 5560 250 8000 250 9410 -1530 10570 -2980 10570 -4970 10570 -7060 9250 -8390 7930 -9720 6010 -9720 4560 -9720 3240 -8800 L 4030 -12740 9880 -12740 9880 -14460 2590 -14460 1170 -6930 2860 -6710 Q 3260 -7340 3960 -7730 4660 -8130 5530 -8130 6930 -8130 7800 -7240 8660 -6350 8660 -4810 8660 -3190 7760 -2210 6860 -1230 5560 -1230 4480 -1230 3720 -1920 2950 -2620 2740 -4000 L 850 -3840";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "6":
			var pathData="M 2840 -4750 Q 2840 -6170 3690 -7040 4540 -7920 5760 -7920 6990 -7920 7800 -7040 8610 -6170 8610 -4650 8610 -3070 7790 -2150 6970 -1230 5830 -1230 5050 -1230 4340 -1670 3630 -2120 3240 -2970 2840 -3820 2840 -4750 M 10190 -11070 Q 9970 -12780 8870 -13750 7760 -14720 6030 -14720 3710 -14720 2340 -13040 770 -11110 770 -6860 770 -3060 2190 -1400 3610 250 5860 250 7180 250 8220 -380 9260 -1010 9860 -2190 10450 -3380 10450 -4760 10450 -6860 9190 -8180 7920 -9510 6120 -9510 5090 -9510 4150 -9030 3210 -8550 2560 -7560 2580 -9760 3070 -10950 3560 -12140 4410 -12760 5060 -13240 5920 -13240 6990 -13240 7720 -12470 8160 -11990 8400 -10930 L 10190 -11070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "7":
			var pathData="M 970 -12740 L 8150 -12740 Q 6780 -11180 5570 -8900 4350 -6630 3700 -4180 3050 -1730 3020 0 L 4870 0 Q 5020 -2190 5560 -4030 6310 -6640 7690 -9110 9060 -11580 10460 -13070 L 10460 -14470 970 -14470 970 -12740";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "8":
			var pathData="M 2680 -4230 Q 2680 -5490 3520 -6330 4350 -7170 5620 -7170 6920 -7170 7790 -6320 8650 -5470 8650 -4170 8650 -2890 7810 -2060 6970 -1230 5680 -1230 4850 -1230 4130 -1620 3410 -2020 3050 -2740 2680 -3460 2680 -4230 M 3260 -11000 Q 3260 -11920 3940 -12580 4620 -13240 5650 -13240 6670 -13240 7360 -12560 8040 -11890 8040 -10900 8040 -9950 7380 -9290 6710 -8640 5670 -8640 4600 -8640 3930 -9300 3260 -9960 3260 -11000 M 3620 -7950 Q 2280 -7600 1560 -6630 830 -5670 830 -4240 830 -2320 2160 -1030 3490 250 5660 250 7830 250 9160 -1030 10490 -2310 10490 -4190 10490 -5550 9790 -6530 9080 -7510 7730 -7950 8820 -8360 9360 -9110 9890 -9870 9890 -10890 9890 -12490 8720 -13600 7550 -14720 5630 -14720 3720 -14720 2570 -13630 1420 -12540 1420 -10940 1420 -9880 1960 -9120 2500 -8360 3620 -7950";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "9":
			var pathData="M 8490 -9860 Q 8490 -8310 7690 -7430 6880 -6560 5630 -6560 4390 -6560 3550 -7430 2700 -8310 2700 -9710 2700 -11270 3590 -12250 4480 -13230 5680 -13230 6840 -13230 7670 -12320 8490 -11410 8490 -9860 M 1120 -3390 Q 1340 -1660 2430 -700 3520 250 5240 250 6860 250 8070 -620 9270 -1490 9880 -3150 10490 -4820 10490 -7630 10490 -10330 9880 -11750 9260 -13180 8080 -13950 6890 -14720 5460 -14720 3480 -14720 2170 -13360 850 -12000 850 -9770 850 -7610 2110 -6290 3370 -4970 5190 -4970 6280 -4970 7220 -5500 8150 -6040 8690 -6900 8700 -6660 8700 -6540 8700 -5420 8430 -4340 8160 -3260 7760 -2620 7360 -1990 6740 -1610 6110 -1230 5280 -1230 4310 -1230 3690 -1780 3070 -2330 2850 -3550 L 1120 -3390";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ":":
			var pathData="M 1850 0 L 3900 0 3900 -2050 1850 -2050 1850 0 M 1850 -8570 L 3900 -8570 3900 -10620 1850 -10620 1850 -8570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ";":
			var pathData="M 1820 0 L 2840 0 Q 2810 910 2540 1400 2270 1880 1700 2130 L 2200 2900 Q 3070 2520 3470 1830 3870 1130 3870 0 L 3870 -2050 1820 -2050 1820 0 M 1820 -8570 L 3870 -8570 3870 -10620 1820 -10620 1820 -8570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "<":
			var pathData="M 1120 -6410 L 10830 -2260 10830 -4050 3130 -7240 10830 -10400 10830 -12190 1120 -8090 1120 -6410";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "=":
			var pathData="M 10820 -4170 L 10820 -5850 1140 -5850 1140 -4170 10820 -4170 M 10820 -8620 L 10820 -10300 1140 -10300 1140 -8620 10820 -8620";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ">":
			var pathData="M 10830 -6410 L 10830 -8090 1120 -12190 1120 -10400 8810 -7240 1120 -4050 1120 -2260 10830 -6410";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "?":
			var pathData="M 4610 0 L 6660 0 6660 -2050 4610 -2050 4610 0 M 4720 -3610 L 6450 -3610 Q 6470 -4690 6600 -5170 6730 -5650 7000 -6020 7270 -6390 8150 -7170 9460 -8330 9910 -9140 10360 -9950 10360 -10910 10360 -12570 9080 -13740 7800 -14910 5650 -14910 3620 -14910 2390 -13820 1150 -12730 900 -10680 L 2750 -10460 Q 2990 -11990 3760 -12710 4530 -13430 5680 -13430 6870 -13430 7690 -12630 8510 -11840 8510 -10790 8510 -10210 8230 -9720 7950 -9230 7020 -8400 6080 -7580 5720 -7150 5230 -6560 5010 -5980 4710 -5210 4710 -4150 4710 -3970 4720 -3610";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "@":
			var pathData="M 6770 -4340 Q 6770 -5200 7090 -6230 7410 -7260 7940 -7980 8470 -8700 9040 -9020 9600 -9350 10240 -9350 11210 -9350 11890 -8600 12560 -7850 12560 -6490 12560 -5470 12200 -4450 11840 -3440 11280 -2780 10710 -2120 10090 -1780 9470 -1450 8910 -1450 8070 -1450 7420 -2210 6770 -2970 6770 -4340 M 11610 -1630 Q 11670 -1020 11800 -770 12000 -380 12430 -170 12850 40 13540 40 15700 40 17520 -1980 19560 -4230 19560 -7130 19560 -9160 18590 -10890 17450 -12900 15480 -13910 13500 -14930 11020 -14930 7820 -14930 5580 -13490 3330 -12050 2110 -9340 1110 -7130 1110 -4690 1110 -2500 1950 -610 2620 880 3940 2030 5260 3170 7140 3740 9010 4310 11230 4310 13640 4310 15350 3680 17060 3040 18300 1950 19540 860 20050 -190 L 18240 -190 Q 17360 1070 15590 1950 13820 2830 11200 2830 8750 2830 6740 1990 4720 1140 3660 -630 2590 -2400 2590 -4850 2590 -7190 3660 -9230 4720 -11280 6660 -12370 8590 -13470 10930 -13470 12980 -13470 14680 -12600 16370 -11730 17230 -10280 18080 -8830 18080 -7160 18080 -5730 17420 -4380 16750 -3040 15610 -2240 14750 -1630 14220 -1630 13930 -1630 13730 -1820 13520 -2020 13520 -2290 13520 -2440 13820 -3840 L 15260 -10550 13470 -10550 13130 -9000 Q 12560 -9930 11770 -10380 10980 -10840 10110 -10840 8970 -10840 7760 -10040 6550 -9240 5740 -7640 4920 -6050 4920 -4460 4920 -3170 5450 -2090 5970 -1010 6810 -490 7650 30 8540 30 9350 30 10160 -420 10960 -880 11610 -1630";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "A":
			var pathData="M 4200 -6020 L 5810 -10320 Q 6320 -11710 6600 -13120 6940 -11930 7640 -10080 L 9170 -6020 4200 -6020 M -30 0 L 2030 0 3640 -4440 9770 -4440 11480 0 13690 0 7690 -14660 5600 -14660 -30 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "B":
			var pathData="M 3440 -1730 L 3440 -6770 6830 -6770 Q 8230 -6770 8980 -6520 9720 -6280 10140 -5670 10560 -5070 10560 -4250 10560 -3550 10270 -3010 9980 -2480 9530 -2200 9080 -1920 8410 -1800 8030 -1730 7090 -1730 L 3440 -1730 M 3440 -8500 L 3440 -12930 6370 -12930 Q 7950 -12930 8600 -12720 9250 -12520 9600 -11960 9950 -11410 9950 -10680 9950 -9910 9580 -9400 9200 -8890 8460 -8670 7900 -8500 6610 -8500 L 3440 -8500 M 1500 0 L 7090 0 Q 8490 0 9460 -240 10420 -490 11060 -970 11700 -1450 12140 -2330 12570 -3220 12570 -4250 12570 -5530 11860 -6470 11140 -7410 9810 -7800 10840 -8310 11350 -9140 11860 -9970 11860 -10910 11860 -11920 11290 -12840 10710 -13770 9700 -14210 8680 -14660 7000 -14660 L 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "C":
			var pathData="M 12040 -5140 Q 11640 -3290 10510 -2350 9380 -1410 7750 -1410 6410 -1410 5260 -2100 4110 -2790 3570 -4180 3020 -5580 3020 -7450 3020 -8900 3480 -10260 3940 -11630 5080 -12440 6210 -13250 7900 -13250 9370 -13250 10340 -12520 11310 -11790 11820 -10190 L 13730 -10640 Q 13140 -12670 11640 -13790 10140 -14910 7940 -14910 6000 -14910 4390 -14020 2770 -13140 1900 -11430 1020 -9730 1020 -7440 1020 -5340 1800 -3510 2570 -1680 4060 -710 5540 250 7910 250 10200 250 11790 -1000 13370 -2260 13980 -4650 L 12040 -5140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "D":
			var pathData="M 3520 -1730 L 3520 -12930 6600 -12930 Q 8330 -12930 9110 -12630 10190 -12210 10950 -10970 11700 -9740 11700 -7440 11700 -5780 11320 -4610 10930 -3450 10240 -2760 9750 -2270 8930 -2000 8100 -1730 6650 -1730 L 3520 -1730 M 1580 0 L 6870 0 Q 8200 0 9230 -250 10250 -500 10980 -980 11700 -1470 12310 -2310 12920 -3160 13310 -4450 13700 -5740 13700 -7410 13700 -9370 13130 -10890 12550 -12420 11390 -13400 10500 -14160 9240 -14450 8340 -14660 6630 -14660 L 1580 -14660 1580 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "E":
			var pathData="M 1620 0 L 12560 0 12560 -1730 3560 -1730 3560 -6720 11670 -6720 11670 -8440 3560 -8440 3560 -12930 12220 -12930 12220 -14660 1620 -14660 1620 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "F":
			var pathData="M 1680 0 L 3620 0 3620 -6660 10500 -6660 10500 -8390 3620 -8390 3620 -12930 11570 -12930 11570 -14660 1680 -14660 1680 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "G":
			var pathData="M 8440 -5750 L 12750 -5750 12750 -3020 Q 12130 -2470 10930 -1980 9730 -1500 8470 -1500 7020 -1500 5730 -2140 4440 -2780 3770 -4100 3090 -5420 3090 -7380 3090 -8970 3650 -10330 3980 -11120 4580 -11780 5170 -12440 6140 -12840 7110 -13250 8440 -13250 9550 -13250 10460 -12860 11370 -12480 11860 -11840 12350 -11200 12680 -10080 L 14430 -10560 Q 14050 -12040 13320 -12960 12590 -13880 11310 -14390 10020 -14910 8430 -14910 6240 -14910 4560 -14010 2880 -13110 1990 -11250 1090 -9400 1090 -7260 1090 -5100 1990 -3350 2890 -1600 4660 -670 6420 250 8580 250 10180 250 11700 -320 13220 -900 14650 -2040 L 14650 -7480 8440 -7470 8440 -5750";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "H":
			var pathData="M 1640 0 L 3580 0 3580 -6910 11200 -6910 11200 0 13140 0 13140 -14660 11200 -14660 11200 -8640 3580 -8640 3580 -14660 1640 -14660 1640 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "I":
			var pathData="M 1910 0 L 3850 0 3850 -14660 1910 -14660 1910 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "J":
			var pathData="M 590 -4160 Q 550 -1970 1580 -860 2600 250 4530 250 5830 250 6800 -280 7760 -810 8210 -1820 8650 -2830 8650 -4670 L 8650 -14660 6710 -14660 6710 -4560 Q 6710 -3300 6510 -2720 6310 -2150 5780 -1810 5250 -1480 4520 -1480 3530 -1480 2970 -2100 2410 -2720 2340 -4400 L 590 -4160";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "K":
			var pathData="M 1500 0 L 3440 0 3440 -5080 5840 -7420 11060 0 13620 0 7200 -8720 13350 -14660 10720 -14660 3440 -7390 3440 -14660 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "L":
			var pathData="M 1500 0 L 10660 0 10660 -1730 3440 -1730 3440 -14660 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "M":
			var pathData="M 1520 0 L 3390 0 3390 -12480 7630 0 9380 0 13640 -12270 13640 0 15510 0 15510 -14660 12900 -14660 9390 -4460 Q 8860 -2910 8610 -2110 8390 -2830 7910 -4280 L 4440 -14660 1520 -14660 1520 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "N":
			var pathData="M 1560 0 L 3420 0 3420 -11520 11120 0 13110 0 13110 -14660 11250 -14660 11250 -3150 3550 -14660 1560 -14660 1560 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "O":
			var pathData="M 2990 -7110 Q 2990 -10420 4480 -11830 5960 -13250 8020 -13250 9470 -13250 10640 -12510 11800 -11780 12410 -10440 13010 -9110 13010 -7320 13010 -4490 11600 -2950 10180 -1410 7990 -1410 5840 -1410 4420 -2930 2990 -4460 2990 -7110 M 990 -7140 Q 990 -5210 1830 -3480 2670 -1750 4300 -750 5930 250 8000 250 9910 250 11560 -650 13210 -1560 14110 -3320 15010 -5080 15010 -7310 15010 -9510 14160 -11240 13300 -12980 11670 -13950 10040 -14920 8010 -14920 4910 -14920 2950 -12850 990 -10790 990 -7140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "P":
			var pathData="M 3520 -7690 L 3520 -12930 7270 -12930 Q 8590 -12930 9080 -12800 9840 -12590 10310 -11930 10770 -11280 10770 -10360 10770 -9090 9980 -8390 9190 -7690 7310 -7690 L 3520 -7690 M 1580 0 L 3520 0 3520 -5960 7280 -5960 Q 10390 -5960 11580 -7250 12770 -8550 12770 -10420 12770 -11510 12330 -12420 11880 -13330 11150 -13830 10420 -14340 9340 -14520 8570 -14660 7110 -14660 L 1580 -14660 1580 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Q":
			var pathData="M 8420 -4050 L 7950 -2640 Q 8960 -2390 9870 -1800 8950 -1410 7910 -1410 5710 -1410 4300 -2940 2880 -4470 2880 -7330 2880 -10280 4310 -11760 5740 -13250 7910 -13250 9360 -13250 10530 -12510 11690 -11780 12300 -10450 12900 -9120 12900 -7340 12900 -4210 11190 -2650 10100 -3580 8420 -4050 M 12690 -1570 Q 13800 -2640 14350 -4080 14900 -5530 14900 -7340 14900 -9520 14050 -11250 13190 -12990 11560 -13950 9930 -14920 7900 -14920 5890 -14920 4270 -13990 2640 -13060 1760 -11280 880 -9500 880 -7330 880 -5150 1760 -3410 2630 -1670 4250 -710 5870 250 7860 250 9830 250 11460 -660 13030 570 14610 1140 L 15180 -210 Q 14040 -640 12690 -1570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "R":
			var pathData="M 3550 -8190 L 3550 -13040 8190 -13040 Q 9820 -13040 10580 -12370 11330 -11700 11330 -10660 11330 -9950 10940 -9340 10550 -8740 9800 -8460 9050 -8190 7720 -8190 L 3550 -8190 M 1610 0 L 3550 0 3550 -6510 5800 -6510 Q 6550 -6510 6880 -6440 7330 -6330 7770 -6050 8200 -5770 8750 -5070 9300 -4370 10150 -3050 L 12090 0 14530 0 11980 -3990 Q 11220 -5160 10370 -5940 9970 -6300 9200 -6670 11310 -6960 12320 -8030 13330 -9100 13330 -10660 13330 -11870 12720 -12870 12110 -13870 11090 -14260 10070 -14660 8110 -14660 L 1610 -14660 1610 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "S":
			var pathData="M 920 -4710 Q 960 -3240 1730 -2070 2490 -910 3840 -330 5180 250 7170 250 8740 250 10000 -320 11250 -900 11920 -1930 12590 -2970 12590 -4140 12590 -5320 11980 -6220 11370 -7130 10090 -7720 9210 -8120 6850 -8650 4480 -9190 3920 -9700 3350 -10210 3350 -11000 3350 -11910 4160 -12550 4960 -13200 6720 -13200 8410 -13200 9280 -12490 10140 -11780 10290 -10390 L 12150 -10530 Q 12100 -11820 11430 -12840 10760 -13860 9520 -14380 8270 -14910 6640 -14910 5160 -14910 3950 -14410 2740 -13910 2110 -12940 1480 -11980 1480 -10870 1480 -9860 2000 -9040 2510 -8230 3560 -7680 4370 -7250 6390 -6760 8410 -6280 9000 -6050 9920 -5700 10320 -5180 10720 -4670 10720 -3980 10720 -3300 10310 -2720 9890 -2150 9040 -1820 8190 -1490 7080 -1490 5830 -1490 4830 -1920 3830 -2360 3360 -3060 2880 -3770 2750 -4870 L 920 -4710";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "T":
			var pathData="M 5310 0 L 7250 0 7250 -12930 12100 -12930 12100 -14660 480 -14660 480 -12930 5310 -12930 5310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "U":
			var pathData="M 11200 -14660 L 11200 -6200 Q 11200 -3440 10290 -2470 9380 -1500 7240 -1500 5990 -1500 5130 -1990 4260 -2480 3910 -3380 3550 -4290 3550 -6200 L 3550 -14660 1610 -14660 1610 -6190 Q 1610 -3860 2170 -2510 2730 -1170 4040 -460 5350 250 7410 250 9530 250 10840 -560 12140 -1380 12640 -2680 13140 -3980 13140 -6190 L 13140 -14660 11200 -14660";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "V":
			var pathData="M 5770 0 L 7760 0 13500 -14660 11520 -14660 7560 -4010 Q 7110 -2810 6770 -1610 6460 -2730 6000 -4010 L 2190 -14660 90 -14660 5770 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "W":
			var pathData="M 4140 0 L 6120 0 9230 -11170 Q 9430 -11880 9660 -12890 9730 -12570 10120 -11170 L 13210 0 15080 0 19100 -14660 17150 -14660 14850 -5240 Q 14400 -3440 14120 -2050 13770 -4480 12980 -7240 L 10880 -14660 8540 -14660 5750 -4760 Q 5650 -4400 5090 -2050 4830 -3540 4470 -5050 L 2240 -14660 250 -14660 4140 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "X":
			var pathData="M 90 0 L 2420 0 6100 -5110 Q 6310 -5410 6800 -6210 7130 -5680 7440 -5230 L 11130 0 13530 0 7980 -7750 13130 -14660 11020 -14660 8070 -10770 Q 7400 -9900 6910 -9100 6560 -9730 5730 -10900 L 3070 -14660 760 -14660 5760 -7640 90 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Y":
			var pathData="M 5710 0 L 7650 0 7650 -6210 13500 -14660 11240 -14660 8400 -10350 Q 7460 -8910 6800 -7760 6110 -9000 5310 -10240 L 2420 -14660 60 -14660 5710 -6210 5710 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Z":
			var pathData="M 410 0 L 12000 0 12000 -1730 2640 -1730 3530 -2760 11760 -12930 11760 -14660 1260 -14660 1260 -12930 9440 -12930 Q 8720 -12190 7920 -11190 L 410 -1800 410 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "[":
			var pathData="M 1390 4070 L 5360 4070 5360 2580 3190 2580 3190 -13170 5360 -13170 5360 -14660 1390 -14660 1390 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "\\":
			var pathData="M 4250 250 L 5690 250 1450 -14910 0 -14910 4250 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "]":
			var pathData="M 4360 4070 L 4360 -14660 390 -14660 390 -13170 2560 -13170 2560 2580 390 2580 390 4070 4360 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "^":
			var pathData="M 2390 -6900 L 4790 -12870 7260 -6900 9070 -6900 5520 -14910 4070 -14910 540 -6900 2390 -6900";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "_":
			var pathData="M -310 4070 L 11620 4070 11620 2770 -310 2770 -310 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "`":
			var pathData="M 4650 -11940 L 3300 -14740 890 -14740 3200 -11940 4650 -11940";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "a":
			var pathData="M 8130 -5330 L 8130 -4670 Q 8130 -3480 7840 -2870 7460 -2080 6650 -1620 5840 -1170 4800 -1170 3750 -1170 3210 -1650 2660 -2130 2660 -2850 2660 -3320 2910 -3700 3160 -4090 3620 -4290 4080 -4490 5190 -4650 7150 -4930 8130 -5330 M 8280 -1310 Q 8360 -560 8640 0 L 10520 0 Q 10180 -610 10070 -1270 9950 -1940 9950 -4450 L 9950 -6850 Q 9950 -8050 9860 -8510 9700 -9250 9300 -9730 8900 -10220 8050 -10540 7200 -10860 5840 -10860 4470 -10860 3430 -10480 2390 -10110 1840 -9410 1290 -8720 1050 -7590 L 2810 -7350 Q 3100 -8480 3710 -8920 4310 -9370 5580 -9370 6940 -9370 7630 -8760 8140 -8310 8140 -7210 8140 -7110 8130 -6740 7100 -6380 4920 -6120 3850 -5990 3320 -5850 2600 -5650 2030 -5260 1450 -4870 1100 -4220 740 -3580 740 -2800 740 -1470 1680 -610 2620 240 4370 240 5430 240 6360 -110 7280 -460 8280 -1310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "b":
			var pathData="M 2990 -5390 Q 2990 -7330 3850 -8350 4710 -9380 5890 -9380 7060 -9380 7890 -8390 8710 -7400 8710 -5320 8710 -3290 7850 -2260 6990 -1240 5810 -1240 4360 -1240 3510 -2630 2990 -3480 2990 -5390 M 3010 0 L 3010 -1330 Q 4080 240 5960 240 7850 240 9200 -1250 10550 -2740 10550 -5470 10550 -6620 10230 -7630 9910 -8640 9350 -9350 8780 -10070 7910 -10460 7030 -10860 6050 -10860 4280 -10860 3140 -9430 L 3140 -14660 1340 -14660 1340 0 3010 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "c":
			var pathData="M 8280 -3890 Q 8090 -2540 7380 -1890 6670 -1240 5610 -1240 4290 -1240 3470 -2210 2650 -3180 2650 -5320 2650 -7430 3500 -8400 4350 -9380 5710 -9380 6610 -9380 7250 -8840 7880 -8300 8130 -7230 L 9880 -7500 Q 9570 -9110 8470 -9980 7370 -10860 5640 -10860 4270 -10860 3110 -10210 1940 -9570 1370 -8280 800 -6990 800 -5270 800 -2610 2130 -1180 3450 240 5630 240 7370 240 8570 -790 9760 -1830 10050 -3660 L 8280 -3890";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "d":
			var pathData="M 2550 -5300 Q 2550 -7410 3360 -8390 4160 -9370 5360 -9370 6590 -9370 7430 -8350 8270 -7330 8270 -5150 8270 -3170 7450 -2200 6620 -1240 5440 -1240 4270 -1240 3410 -2250 2550 -3260 2550 -5300 M 8240 0 L 9910 0 9910 -14660 8120 -14660 8120 -9400 Q 7650 -10050 6900 -10450 6150 -10860 5190 -10860 3880 -10860 2820 -10170 1760 -9480 1230 -8180 700 -6890 700 -5300 700 -3670 1290 -2410 1870 -1160 2940 -460 4000 240 5270 240 7230 240 8240 -1340 L 8240 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "e":
			var pathData="M 2710 -6330 Q 2800 -7720 3650 -8550 4490 -9380 5730 -9380 7100 -9380 7960 -8340 8520 -7670 8640 -6330 L 2710 -6330 M 8620 -3420 Q 8210 -2280 7510 -1760 6810 -1240 5820 -1240 4490 -1240 3600 -2170 2710 -3100 2610 -4850 L 10530 -4850 Q 10540 -5170 10540 -5330 10540 -7960 9190 -9410 7840 -10860 5710 -10860 3510 -10860 2130 -9380 750 -7900 750 -5220 750 -2630 2120 -1190 3480 240 5810 240 7660 240 8850 -660 10040 -1560 10480 -3190 L 8620 -3420";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "f":
			var pathData="M 1780 0 L 3570 0 3570 -9220 5640 -9220 5640 -10620 3570 -10620 3570 -11600 Q 3570 -12560 3910 -12910 4250 -13260 5070 -13260 5570 -13260 6130 -13160 L 6400 -14730 Q 5480 -14910 4720 -14910 3540 -14910 2890 -14470 2230 -14040 1970 -13340 1780 -12820 1780 -11750 L 1780 -10620 190 -10620 190 -9220 1780 -9220 1780 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "g":
			var pathData="M 2510 -5500 Q 2510 -7420 3350 -8390 4190 -9370 5390 -9370 6610 -9370 7480 -8380 8340 -7390 8340 -5440 8340 -3400 7500 -2440 6660 -1490 5420 -1490 4170 -1490 3340 -2450 2510 -3410 2510 -5500 M 1020 880 Q 980 2600 2150 3460 3320 4310 5220 4310 6820 4310 7920 3710 9010 3110 9520 2080 10020 1040 10020 -1440 L 10020 -10620 8360 -10620 8360 -9340 Q 7140 -10860 5260 -10860 3850 -10860 2810 -10160 1760 -9460 1210 -8170 660 -6890 660 -5370 660 -3160 1860 -1580 3060 0 5250 0 7010 0 8190 -1390 8200 370 8060 920 7820 1820 7140 2320 6460 2820 5210 2820 4050 2820 3380 2320 2880 1950 2770 1140 L 1020 880";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "h":
			var pathData="M 1350 0 L 3150 0 3150 -5810 Q 3150 -7060 3450 -7770 3750 -8480 4460 -8890 5160 -9310 5960 -9310 7030 -9310 7620 -8690 8200 -8080 8200 -6730 L 8200 0 10000 0 10000 -6730 Q 10000 -8290 9630 -9110 9250 -9930 8380 -10390 7510 -10860 6330 -10860 4410 -10860 3150 -9400 L 3150 -14660 1350 -14660 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "i":
			var pathData="M 1360 0 L 3160 0 3160 -10620 1360 -10620 1360 0 M 1360 -12590 L 3160 -12590 3160 -14660 1360 -14660 1360 -12590";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "j":
			var pathData="M -940 4120 Q -260 4310 470 4310 1980 4310 2630 3310 3140 2540 3140 580 L 3140 -10620 1340 -10620 1340 540 Q 1340 2000 1070 2370 800 2730 250 2730 -60 2730 -600 2590 L -940 4120 M 1340 -12570 L 3140 -12570 3140 -14660 1340 -14660 1340 -12570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "k":
			var pathData="M 1360 0 L 3160 0 3160 -4210 4430 -5430 7940 0 10160 0 5690 -6680 9750 -10620 7420 -10620 3160 -6300 3160 -14660 1360 -14660 1360 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "l":
			var pathData="M 1310 0 L 3110 0 3110 -14660 1310 -14660 1310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "m":
			var pathData="M 1350 0 L 3150 0 3150 -5510 Q 3150 -6960 3440 -7730 3730 -8500 4380 -8900 5020 -9300 5780 -9300 6780 -9300 7220 -8700 7660 -8100 7660 -6900 L 7660 0 9460 0 9460 -6170 Q 9460 -7810 10200 -8550 10940 -9300 12060 -9300 12680 -9300 13140 -9010 13600 -8720 13780 -8240 13950 -7770 13950 -6690 L 13950 0 15740 0 15740 -7290 Q 15740 -9110 14890 -9980 14040 -10860 12460 -10860 10440 -10860 9180 -9000 8870 -9880 8120 -10370 7360 -10860 6180 -10860 5120 -10860 4290 -10380 3460 -9910 2960 -9130 L 2960 -10620 1350 -10620 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "n":
			var pathData="M 1350 0 L 3150 0 3150 -5800 Q 3150 -7840 3990 -8570 4820 -9300 5970 -9300 6690 -9300 7230 -8970 7760 -8650 7970 -8100 8180 -7560 8180 -6460 L 8180 0 9980 0 9980 -6530 Q 9980 -7780 9880 -8280 9720 -9050 9320 -9610 8920 -10170 8120 -10510 7310 -10860 6350 -10860 4140 -10860 2970 -9110 L 2970 -10620 1350 -10620 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "o":
			var pathData="M 2530 -5310 Q 2530 -7350 3420 -8360 4310 -9370 5660 -9370 6990 -9370 7890 -8350 8780 -7340 8780 -5370 8780 -3280 7890 -2260 7000 -1240 5660 -1240 4310 -1240 3420 -2250 2530 -3270 2530 -5310 M 680 -5310 Q 680 -2620 2060 -1190 3430 240 5660 240 7050 240 8230 -410 9400 -1060 10020 -2230 10630 -3410 10630 -5460 10630 -7990 9240 -9420 7850 -10860 5660 -10860 3690 -10860 2320 -9680 680 -8260 680 -5310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "p":
			var pathData="M 2980 -5250 Q 2980 -7300 3870 -8370 4750 -9450 5900 -9450 7060 -9450 7900 -8440 8730 -7430 8730 -5400 8730 -3270 7880 -2250 7020 -1240 5820 -1240 4640 -1240 3810 -2220 2980 -3200 2980 -5250 M 1350 4070 L 3150 4070 3150 -1100 Q 3610 -520 4330 -140 5040 240 5940 240 7170 240 8290 -450 9400 -1150 9990 -2450 10570 -3760 10570 -5390 10570 -6910 10040 -8180 9510 -9460 8470 -10160 7430 -10860 6070 -10860 5030 -10860 4300 -10450 3570 -10050 2990 -9240 L 2990 -10620 1350 -10620 1350 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "q":
			var pathData="M 2570 -5340 Q 2570 -7450 3390 -8440 4200 -9440 5370 -9440 6550 -9440 7430 -8370 8300 -7300 8300 -5180 8300 -3190 7470 -2210 6640 -1240 5490 -1240 4290 -1240 3430 -2260 2570 -3290 2570 -5340 M 8120 4070 L 9920 4070 9920 -10620 8300 -10620 8300 -9200 Q 7170 -10860 5200 -10860 3940 -10860 2890 -10200 1830 -9550 1280 -8280 720 -7010 720 -5410 720 -2780 2090 -1270 3450 240 5340 240 6190 240 6950 -150 7700 -540 8120 -1130 L 8120 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "r":
			var pathData="M 1330 0 L 3130 0 3130 -5560 Q 3130 -6700 3430 -7660 3630 -8290 4100 -8640 4570 -9000 5160 -9000 5820 -9000 6480 -8610 L 7100 -10280 Q 6160 -10860 5250 -10860 4620 -10860 4100 -10500 3570 -10140 2950 -9010 L 2950 -10620 1330 -10620 1330 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "s":
			var pathData="M 630 -3170 Q 930 -1480 2020 -620 3100 240 5170 240 6420 240 7410 -190 8400 -630 8930 -1420 9450 -2220 9450 -3120 9450 -4040 9020 -4660 8590 -5280 7840 -5600 7080 -5930 5170 -6440 3850 -6800 3580 -6900 3110 -7090 2890 -7380 2670 -7660 2670 -8010 2670 -8560 3200 -8970 3730 -9380 4970 -9380 6020 -9380 6600 -8920 7170 -8460 7290 -7640 L 9050 -7880 Q 8880 -8910 8430 -9520 7980 -10140 7040 -10500 6090 -10860 4840 -10860 4010 -10860 3290 -10640 2560 -10430 2140 -10120 1580 -9720 1260 -9110 930 -8510 930 -7800 930 -7020 1330 -6370 1720 -5730 2490 -5360 3250 -5000 5230 -4500 6700 -4130 7070 -3890 7600 -3540 7600 -2930 7600 -2250 7000 -1740 6400 -1240 5160 -1240 3930 -1240 3250 -1810 2560 -2380 2410 -3450 L 630 -3170";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "t":
			var pathData="M 5280 -1610 Q 4790 -1540 4490 -1540 4090 -1540 3880 -1670 3660 -1800 3570 -2020 3470 -2240 3470 -3010 L 3470 -9220 5280 -9220 5280 -10620 3470 -10620 3470 -14330 1680 -13250 1680 -10620 360 -10620 360 -9220 1680 -9220 1680 -3110 Q 1680 -1490 1900 -980 2120 -480 2660 -170 3200 140 4180 140 4780 140 5540 -20 L 5280 -1610";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "u":
			var pathData="M 8310 0 L 9920 0 9920 -10620 8120 -10620 8120 -4930 Q 8120 -3570 7830 -2850 7530 -2140 6820 -1720 6110 -1310 5300 -1310 4490 -1310 3940 -1710 3390 -2120 3220 -2830 3110 -3320 3110 -4730 L 3110 -10620 1310 -10620 1310 -4040 Q 1310 -2890 1420 -2360 1580 -1570 1980 -1020 2370 -480 3190 -120 4000 240 4940 240 7070 240 8310 -1560 L 8310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "v":
			var pathData="M 4300 0 L 5980 0 10000 -10620 8150 -10620 5790 -4140 Q 5360 -2960 5120 -2120 4810 -3230 4440 -4260 L 2160 -10620 260 -10620 4300 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "w":
			var pathData="M 3310 0 L 5190 0 7340 -8170 7750 -6360 9440 0 11310 0 14630 -10620 12880 -10620 11060 -4480 10450 -2430 9920 -4460 8330 -10620 6480 -10620 4790 -4400 Q 4280 -2380 4240 -2210 L 3610 -4490 1920 -10620 60 -10620 3310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "x":
			var pathData="M 150 0 L 2330 0 5120 -4190 5700 -3300 7880 0 10090 0 6140 -5620 9810 -10620 7660 -10620 5870 -8110 Q 5500 -7600 5060 -6940 4780 -7420 4320 -8130 L 2690 -10620 440 -10620 4030 -5520 150 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "y":
			var pathData="M 1270 4090 Q 1910 4310 2430 4310 3290 4310 3910 3900 4530 3480 5010 2590 5370 1930 6020 180 L 10060 -10620 8260 -10620 5990 -4430 Q 5560 -3250 5250 -2010 4910 -3300 4480 -4470 L 2270 -10620 330 -10620 4360 20 Q 4250 310 4200 460 3820 1530 3650 1800 3420 2160 3060 2360 2700 2560 2100 2560 1660 2560 1070 2400 L 1270 4090";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "z":
			var pathData="M 400 0 L 9800 0 9800 -1550 4890 -1550 Q 3830 -1550 2620 -1460 L 3730 -2690 9480 -9430 9480 -10620 800 -10620 800 -9160 5130 -9160 Q 6010 -9160 7160 -9220 L 400 -1460 400 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "{":
			var pathData="M 570 -6120 L 570 -4490 Q 1340 -4470 1830 -4070 2310 -3670 2470 -2980 2630 -2290 2640 -490 2650 1310 2780 2100 2900 2890 3320 3410 3740 3920 4380 4150 4820 4310 5800 4310 L 6360 4310 6360 2740 6050 2740 Q 5100 2740 4780 2470 4450 2200 4370 1520 4330 1150 4330 -800 4330 -2950 3840 -3890 3340 -4840 2240 -5300 3170 -5750 3610 -6330 4040 -6910 4220 -7980 4330 -8670 4330 -11290 4330 -12590 4670 -12960 5010 -13340 6050 -13340 L 6360 -13340 6360 -14910 5800 -14910 Q 4940 -14910 4560 -14810 4000 -14650 3640 -14340 3280 -14040 3040 -13530 2790 -13020 2700 -12180 2650 -11650 2640 -9980 2630 -8310 2470 -7620 2310 -6930 1830 -6530 1340 -6140 570 -6120";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "|":
			var pathData="M 1880 4310 L 3450 4310 3450 -14910 1880 -14910 1880 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "}":
			var pathData="M 6260 -6120 Q 5490 -6140 5010 -6540 4520 -6940 4360 -7620 4200 -8310 4190 -10110 4180 -11910 4060 -12700 3930 -13490 3510 -14010 3090 -14530 2450 -14750 2010 -14910 1030 -14910 L 470 -14910 470 -13340 780 -13340 Q 1730 -13340 2060 -13070 2380 -12810 2450 -12140 2500 -11760 2500 -9810 2500 -7660 2970 -6750 3440 -5850 4590 -5300 3710 -4930 3230 -4260 2750 -3600 2590 -2490 2500 -1820 2500 680 2500 1990 2160 2370 1820 2740 780 2740 L 470 2740 470 4310 1030 4310 Q 1890 4310 2270 4200 2830 4040 3190 3740 3550 3430 3800 2930 4040 2420 4130 1570 4180 1040 4190 -630 4200 -2300 4360 -2980 4520 -3670 5010 -4070 5490 -4470 6260 -4490 L 6260 -6120";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "~":
			var pathData="M 870 -5570 Q 1710 -6380 2280 -6650 2840 -6930 3480 -6930 4270 -6930 5460 -6400 6640 -5870 7190 -5730 7730 -5590 8330 -5590 9150 -5590 9810 -5860 10460 -6130 11100 -6730 L 11100 -8850 Q 10560 -8260 9870 -7870 9170 -7480 8520 -7480 8170 -7480 7830 -7570 7480 -7660 6790 -7950 5570 -8470 4910 -8640 4250 -8820 3650 -8820 1930 -8820 870 -7620 L 870 -5570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case " ":
			break;
		case "é":
			var pathData="M 4650 -11940 L 6140 -11940 8340 -14740 5980 -14740 4650 -11940 M 2710 -6330 Q 2800 -7720 3650 -8550 4490 -9380 5730 -9380 7100 -9380 7960 -8340 8520 -7670 8640 -6330 L 2710 -6330 M 8620 -3420 Q 8210 -2280 7510 -1760 6810 -1240 5820 -1240 4490 -1240 3600 -2170 2710 -3100 2610 -4850 L 10530 -4850 Q 10540 -5170 10540 -5330 10540 -7960 9190 -9410 7840 -10860 5710 -10860 3510 -10860 2130 -9380 750 -7900 750 -5220 750 -2630 2120 -1190 3480 240 5810 240 7660 240 8850 -660 10040 -1560 10480 -3190 L 8620 -3420";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "ˆ":
			var pathData="M 3440 -13640 L 4540 -11940 6580 -11940 4330 -14740 2410 -14740 250 -11940 2310 -11940 3440 -13640";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "˜":
			var pathData="M 70 -12190 L 1400 -12190 Q 1390 -12660 1610 -12900 1820 -13140 2160 -13140 2470 -13140 3140 -12780 4170 -12220 4800 -12220 5640 -12220 6190 -12790 6730 -13360 6760 -14500 L 5460 -14500 Q 5390 -13980 5220 -13800 5050 -13630 4730 -13630 4380 -13630 3790 -13930 2720 -14470 2100 -14470 1210 -14470 640 -13850 60 -13230 70 -12190";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "–":
			var pathData="M -40 -4580 L 11350 -4580 11350 -6030 -40 -6030 -40 -4580";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "—":
			var pathData="M 0 -4580 L 20480 -4580 20480 -6030 0 -6030 0 -4580";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‘":
			var pathData="M 3210 -12200 L 2270 -12200 Q 2300 -13070 2560 -13520 2820 -13980 3370 -14210 L 2930 -14910 Q 2020 -14500 1600 -13700 1280 -13100 1280 -11760 L 1280 -10110 3210 -10110 3210 -12200";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "’":
			var pathData="M 1240 -12720 L 2180 -12720 Q 2150 -11890 1890 -11410 1620 -10940 1080 -10720 L 1520 -10010 Q 2430 -10420 2860 -11230 3170 -11820 3170 -13160 L 3170 -14810 1240 -14810 1240 -12720";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‚":
			var pathData="M 1240 0 L 2180 0 Q 2150 830 1890 1310 1620 1780 1080 2000 L 1520 2710 Q 2430 2300 2860 1490 3170 900 3170 -440 L 3170 -2090 1240 -2090 1240 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "“":
			var pathData="M 5860 -12200 L 4920 -12200 Q 4950 -13070 5210 -13520 5470 -13980 6020 -14210 L 5580 -14910 Q 4670 -14500 4250 -13700 3930 -13100 3930 -11760 L 3930 -10110 5860 -10110 5860 -12200 M 2760 -12200 L 1820 -12200 Q 1850 -13070 2110 -13520 2370 -13980 2920 -14210 L 2480 -14910 Q 1570 -14500 1150 -13700 830 -13100 830 -11760 L 830 -10110 2760 -10110 2760 -12200";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "”":
			var pathData="M 3970 -12720 L 4910 -12720 Q 4880 -11890 4620 -11410 4350 -10940 3810 -10720 L 4250 -10010 Q 5160 -10420 5590 -11230 5900 -11820 5900 -13160 L 5900 -14810 3970 -14810 3970 -12720 M 870 -12720 L 1810 -12720 Q 1780 -11890 1520 -11410 1250 -10940 710 -10720 L 1150 -10010 Q 2060 -10420 2490 -11230 2800 -11820 2800 -13160 L 2800 -14810 870 -14810 870 -12720";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "„":
			var pathData="M 3970 0 L 4910 0 Q 4880 830 4620 1310 4350 1780 3810 2000 L 4250 2710 Q 5160 2300 5590 1490 5900 900 5900 -440 L 5900 -2090 3970 -2090 3970 0 M 870 0 L 1810 0 Q 1780 830 1520 1310 1250 1780 710 2000 L 1150 2710 Q 2060 2300 2490 1490 2800 900 2800 -440 L 2800 -2090 870 -2090 870 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "†":
			var pathData="M 4720 3460 L 6520 3460 6520 -8660 10540 -8660 10540 -10260 6520 -10260 6520 -14320 4720 -14320 4720 -10260 730 -10260 730 -8660 4720 -8660 4720 3460";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‡":
			var pathData="M 4750 3460 L 6550 3460 6550 -240 10580 -240 10580 -1850 6550 -1850 6550 -9100 10580 -9100 10580 -10710 6550 -10710 6550 -14460 4750 -14460 4750 -10710 730 -10710 730 -9100 4750 -9100 4750 -1850 730 -1850 730 -240 4750 -240 4750 3460";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "•":
			var pathData="M 1090 -7180 Q 1090 -6130 1840 -5380 2580 -4640 3620 -4640 4670 -4640 5420 -5380 6160 -6130 6160 -7180 6160 -8230 5420 -8970 4670 -9710 3620 -9710 2580 -9710 1840 -8970 1090 -8230 1090 -7180";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "…":
			var pathData="M 16040 0 L 18100 0 18100 -2050 16040 -2050 16040 0 M 9220 0 L 11270 0 11270 -2050 9220 -2050 9220 0 M 2390 0 L 4440 0 4440 -2050 2390 -2050 2390 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‰":
			var pathData="M 15850 -3280 Q 15850 -4840 16300 -5460 16630 -5920 17250 -5920 17850 -5920 18190 -5450 18630 -4830 18630 -3300 18630 -1760 18200 -1150 17880 -700 17290 -700 16640 -700 16250 -1230 15850 -1770 15850 -3280 M 14370 -3360 Q 14370 -1310 15170 -380 15970 540 17250 540 18720 540 19420 -450 20110 -1440 20110 -3400 20110 -5340 19310 -6250 18510 -7160 17230 -7160 15940 -7160 15160 -6250 14370 -5350 14370 -3360 M 9110 -3280 Q 9110 -4840 9560 -5460 9890 -5920 10510 -5920 11100 -5920 11440 -5450 11890 -4830 11890 -3300 11890 -1760 11460 -1150 11140 -700 10550 -700 9900 -700 9510 -1230 9110 -1770 9110 -3280 M 7630 -3360 Q 7630 -1310 8430 -380 9230 540 10510 540 11970 540 12670 -450 13370 -1440 13370 -3400 13370 -5340 12570 -6250 11760 -7160 10480 -7160 9200 -7160 8420 -6250 7630 -5350 7630 -3360 M 1850 -10910 Q 1850 -12460 2300 -13090 2630 -13550 3250 -13550 3850 -13550 4190 -13080 4630 -12450 4630 -10930 4630 -9380 4200 -8780 3880 -8330 3290 -8330 2640 -8330 2250 -8860 1850 -9390 1850 -10910 M 370 -10990 Q 370 -8940 1170 -8010 1970 -7080 3250 -7080 4710 -7080 5410 -8070 6110 -9070 6110 -11030 6110 -12970 5310 -13880 4510 -14790 3230 -14790 1940 -14790 1160 -13880 370 -12980 370 -10990 M 3200 540 L 4520 540 10520 -14910 9210 -14910 3200 540";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‹":
			var pathData="M 2910 -5270 L 5560 -9840 4070 -9840 920 -5270 4070 -720 5560 -720 2910 -5270";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "›":
			var pathData="M 3570 -5300 L 920 -720 2410 -720 5450 -5360 2410 -9840 920 -9840 3570 -5300";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "€":
			var pathData="M 7900 -13250 Q 9450 -13250 10670 -12240 L 11070 -14100 Q 9800 -14910 7940 -14910 6000 -14910 4390 -14030 1780 -12610 1160 -9350 L 0 -9350 -280 -8010 1030 -8010 Q 1020 -7800 1020 -7600 1020 -7110 1050 -6690 L 0 -6690 -280 -5350 1250 -5350 Q 1480 -4270 1800 -3510 3390 250 7910 250 9420 250 10670 -330 L 10670 -2390 Q 9620 -1410 7750 -1410 6410 -1410 5260 -2100 3660 -3060 3240 -5350 L 9190 -5350 9470 -6690 3030 -6690 Q 3020 -6840 3020 -7610 3020 -7800 3030 -8010 L 9740 -8010 10010 -9350 3190 -9350 Q 3290 -10170 3850 -11080 4400 -11960 5080 -12440 6220 -13250 7900 -13250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "™":
			var pathData="M 9820 -6510 L 11070 -6510 11070 -13450 13260 -6510 14490 -6510 16590 -13350 16590 -6510 17830 -6510 17830 -14660 15870 -14660 13880 -8150 11820 -14660 9820 -14660 9820 -6510 M 4890 -6510 L 6250 -6510 6250 -13450 8910 -13450 8910 -14660 2250 -14660 2250 -13450 4890 -13450 4890 -6510";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
	}
}

function font3055(ctx,ch,textColor){
	defaultFill = textColor;
	switch(ch){
		case " ":
			break;
		case "!":
			var pathData="M 1840 0 L 3910 0 3910 -2050 1840 -2050 1840 0 M 2310 -3640 L 3470 -3640 3990 -11410 3990 -14660 1760 -14660 1760 -11410 2310 -3640";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "\"":
			var pathData="M 4750 -9470 L 5830 -9470 6310 -12260 6310 -14660 4260 -14660 4260 -12260 4750 -9470 M 1440 -9470 L 2540 -9470 2990 -12260 2990 -14660 940 -14660 940 -12260 1440 -9470";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "#":
			var pathData="M 3700 -5500 L 4440 -9130 7590 -9130 6840 -5500 3700 -5500 M 1030 250 L 2530 250 3400 -4010 6540 -4010 5680 250 7180 250 8050 -4010 11130 -4010 11130 -5500 8350 -5500 9100 -9130 11130 -9130 11130 -10620 9400 -10620 10270 -14910 8760 -14910 7890 -10620 4740 -10620 5610 -14910 4110 -14910 3240 -10620 210 -10620 210 -9130 2940 -9130 2200 -5500 210 -5500 210 -4010 1900 -4010 1030 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "$":
			var pathData="M 6160 -1210 L 6160 -6690 Q 7610 -6220 8100 -5620 8580 -5030 8580 -4050 8580 -2900 7900 -2120 7210 -1340 6160 -1210 M 5100 -13650 L 5100 -8670 Q 3870 -9040 3360 -9660 2840 -10280 2840 -11200 2840 -12130 3450 -12810 4050 -13490 5100 -13650 M 5100 2110 L 6160 2110 6160 290 Q 8050 200 9240 -1050 10430 -2300 10430 -4170 10430 -5020 10150 -5750 9860 -6480 9330 -7010 8800 -7540 7960 -7910 7520 -8100 6160 -8440 L 6160 -13630 Q 7040 -13450 7550 -12880 8050 -12320 8210 -11260 L 10070 -11540 Q 9830 -13250 8650 -14230 7730 -15000 6160 -15150 L 6160 -16010 5100 -16010 5100 -15150 Q 3310 -14970 2400 -14170 1040 -12980 1040 -11060 1040 -9980 1510 -9130 1970 -8280 2830 -7800 3990 -7150 5100 -6940 L 5100 -1210 Q 4040 -1320 3280 -2280 2750 -2960 2540 -4410 L 730 -4070 Q 830 -2670 1450 -1700 2060 -730 2910 -290 3750 140 5100 310 L 5100 2110";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "%":
			var pathData="M 13810 -5970 Q 14480 -5970 14930 -5390 15380 -4820 15380 -3400 15380 -1860 14940 -1280 14490 -700 13800 -700 13140 -700 12690 -1280 12240 -1860 12240 -3260 12240 -4810 12690 -5390 13130 -5970 13810 -5970 M 10670 -3440 Q 10670 -1450 11560 -450 12440 540 13770 540 15120 540 16040 -460 16950 -1470 16950 -3330 16950 -5240 16050 -6220 15140 -7210 13760 -7210 12250 -7210 11460 -6110 10670 -5020 10670 -3440 M 4330 540 L 5820 540 13810 -14910 12350 -14910 4330 540 M 4320 -13670 Q 4990 -13670 5440 -13090 5890 -12520 5890 -11100 5890 -9560 5450 -8980 5000 -8400 4320 -8400 3660 -8400 3210 -8970 2760 -9550 2760 -10960 2760 -12510 3210 -13090 3650 -13670 4320 -13670 M 1190 -11140 Q 1190 -9140 2080 -8150 2960 -7160 4290 -7160 5630 -7160 6550 -8160 7460 -9170 7460 -11030 7460 -12940 6560 -13920 5650 -14910 4270 -14910 2770 -14910 1980 -13810 1190 -12710 1190 -11140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "&":
			var pathData="M 8600 -3150 Q 8080 -2350 7220 -1840 6350 -1340 5540 -1340 4240 -1340 3530 -2300 2820 -3260 2820 -4150 2820 -4880 3330 -5620 3840 -6370 5300 -7240 L 8600 -3150 M 6070 -9370 L 5270 -10300 Q 4920 -10720 4750 -11090 4570 -11470 4570 -11810 4570 -12490 5060 -12960 5540 -13430 6270 -13430 6980 -13430 7460 -12950 7930 -12480 7930 -11730 7930 -11100 7590 -10580 7240 -10060 6070 -9370 M 9730 -1730 Q 10890 -360 11980 340 L 13190 -1090 Q 11910 -2000 10900 -3340 11720 -4580 12200 -6500 L 10330 -6900 Q 10080 -5740 9630 -4860 L 7000 -8210 Q 9770 -9690 9770 -11780 9770 -13070 8820 -13990 7860 -14910 6360 -14910 4790 -14910 3760 -13930 2720 -12960 2720 -11640 2720 -10980 3050 -10270 3380 -9560 4370 -8420 2630 -7590 1760 -6490 880 -5400 880 -4040 880 -2510 1950 -1270 3270 250 5520 250 6740 250 7790 -240 8840 -740 9730 -1730";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "'":
			var pathData="M 1360 -9470 L 2470 -9470 2950 -12210 2950 -14660 900 -14660 900 -12210 1360 -9470";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "(":
			var pathData="M 4790 4310 L 6080 4310 Q 3090 -490 3090 -5300 3090 -7190 3520 -9060 3870 -10560 4480 -11940 4870 -12830 6080 -14910 L 4790 -14910 Q 2910 -12400 2010 -9870 1240 -7690 1240 -5310 1240 -2610 2270 -90 3300 2430 4790 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ")":
			var pathData="M 2530 4310 Q 4010 2430 5050 -90 6080 -2610 6080 -5310 6080 -7690 5310 -9870 4410 -12400 2530 -14910 L 1240 -14910 Q 2460 -12810 2850 -11910 3460 -10530 3800 -9030 4230 -7180 4230 -5300 4230 -490 1240 4310 L 2530 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "*":
			var pathData="M 640 -11970 Q 1800 -11660 3090 -11410 2590 -10950 1430 -9520 L 2610 -8670 Q 3170 -9410 3910 -10820 4700 -9460 5280 -8670 L 6480 -9520 Q 5370 -10880 4760 -11410 5980 -11550 7250 -11970 L 6790 -13390 Q 5460 -12950 4430 -12430 4630 -13920 4660 -14910 L 3210 -14910 Q 3220 -14230 3410 -12420 2690 -12830 1100 -13390 L 640 -11970";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "+":
			var pathData="M 5130 -2370 L 6830 -2370 6830 -6390 10820 -6390 10820 -8070 6830 -8070 6830 -12060 5130 -12060 5130 -8070 1140 -8070 1140 -6390 5130 -6390 5130 -2370";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ",":
			var pathData="M 1820 0 L 2840 0 Q 2810 910 2540 1400 2270 1880 1700 2130 L 2200 2900 Q 3070 2520 3470 1830 3870 1130 3870 0 L 3870 -2050 1820 -2050 1820 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "-":
			var pathData="M 650 -4400 L 6180 -4400 6180 -6210 650 -6210 650 -4400";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ".":
			var pathData="M 1860 0 L 3910 0 3910 -2050 1860 -2050 1860 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "/":
			var pathData="M 0 250 L 1450 250 5690 -14910 4250 -14910 0 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "0":
			var pathData="M 2700 -7230 Q 2700 -10840 3630 -12180 4370 -13230 5610 -13230 6870 -13230 7720 -12040 8560 -10850 8560 -7230 8560 -3630 7720 -2430 6870 -1230 5630 -1230 4390 -1230 3550 -2420 2700 -3620 2700 -7230 M 850 -7230 Q 850 -3100 2300 -1270 3510 250 5630 250 7240 250 8300 -610 9350 -1480 9880 -3060 10410 -4650 10410 -7230 10410 -9410 10080 -10690 9750 -11980 9170 -12870 8590 -13770 7700 -14240 6810 -14720 5630 -14720 4030 -14720 2980 -13860 1920 -13000 1390 -11410 850 -9830 850 -7230";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "1":
			var pathData="M 7630 0 L 7630 -14720 6470 -14720 Q 6000 -13770 4870 -12760 3740 -11750 2230 -11040 L 2230 -9300 Q 3070 -9610 4130 -10230 5180 -10850 5830 -11470 L 5830 0 7630 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "2":
			var pathData="M 10310 -1730 L 3120 -1730 Q 3420 -2220 3880 -2700 4340 -3190 5960 -4550 7900 -6190 8740 -7130 9570 -8070 9930 -8920 10290 -9770 10290 -10650 10290 -12380 9060 -13550 7830 -14720 5720 -14720 3630 -14720 2390 -13630 1150 -12550 960 -10480 L 2810 -10290 Q 2820 -11670 3600 -12450 4380 -13230 5680 -13230 6910 -13230 7680 -12490 8440 -11760 8440 -10690 8440 -9670 7600 -8520 6760 -7380 4370 -5420 2830 -4160 2020 -3200 1200 -2240 830 -1250 600 -650 620 0 L 10310 0 10310 -1730";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "3":
			var pathData="M 860 -3870 Q 1040 -2040 2320 -890 3590 260 5520 260 7660 260 9060 -1070 10460 -2410 10460 -4330 10460 -5750 9740 -6690 9020 -7640 7720 -7940 8720 -8400 9230 -9180 9740 -9960 9740 -10910 9740 -11910 9210 -12800 8670 -13690 7660 -14200 6650 -14720 5450 -14720 3710 -14720 2540 -13720 1370 -12730 1040 -10920 L 2840 -10600 Q 3040 -11920 3740 -12580 4440 -13240 5490 -13240 6550 -13240 7220 -12590 7890 -11940 7890 -10950 7890 -9700 6970 -9100 6050 -8500 4900 -8500 4790 -8500 4610 -8520 L 4410 -6940 Q 5170 -7140 5680 -7140 6930 -7140 7740 -6330 8550 -5530 8550 -4290 8550 -2990 7680 -2110 6800 -1230 5530 -1230 4460 -1230 3720 -1900 2970 -2580 2660 -4110 L 860 -3870";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "4":
			var pathData="M 6620 -5160 L 2030 -5160 6620 -11770 6620 -5160 M 6620 0 L 8420 0 8420 -3510 10400 -3510 10400 -5160 8420 -5160 8420 -14660 6950 -14660 260 -5160 260 -3510 6620 -3510 6620 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "5":
			var pathData="M 850 -3840 Q 1030 -1990 2300 -870 3560 250 5560 250 8000 250 9410 -1530 10570 -2980 10570 -4970 10570 -7060 9250 -8390 7930 -9720 6010 -9720 4560 -9720 3240 -8800 L 4030 -12740 9880 -12740 9880 -14460 2590 -14460 1170 -6930 2860 -6710 Q 3260 -7340 3960 -7730 4660 -8130 5530 -8130 6930 -8130 7800 -7240 8660 -6350 8660 -4810 8660 -3190 7760 -2210 6860 -1230 5560 -1230 4480 -1230 3720 -1920 2950 -2620 2740 -4000 L 850 -3840";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "6":
			var pathData="M 2840 -4750 Q 2840 -6170 3690 -7040 4540 -7920 5760 -7920 6990 -7920 7800 -7040 8610 -6170 8610 -4650 8610 -3070 7790 -2150 6970 -1230 5830 -1230 5050 -1230 4340 -1670 3630 -2120 3240 -2970 2840 -3820 2840 -4750 M 10190 -11070 Q 9970 -12780 8870 -13750 7760 -14720 6030 -14720 3710 -14720 2340 -13040 770 -11110 770 -6860 770 -3060 2190 -1400 3610 250 5860 250 7180 250 8220 -380 9260 -1010 9860 -2190 10450 -3380 10450 -4760 10450 -6860 9190 -8180 7920 -9510 6120 -9510 5090 -9510 4150 -9030 3210 -8550 2560 -7560 2580 -9760 3070 -10950 3560 -12140 4410 -12760 5060 -13240 5920 -13240 6990 -13240 7720 -12470 8160 -11990 8400 -10930 L 10190 -11070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "7":
			var pathData="M 970 -12740 L 8150 -12740 Q 6780 -11180 5570 -8900 4350 -6630 3700 -4180 3050 -1730 3020 0 L 4870 0 Q 5020 -2190 5560 -4030 6310 -6640 7690 -9110 9060 -11580 10460 -13070 L 10460 -14470 970 -14470 970 -12740";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "8":
			var pathData="M 2680 -4230 Q 2680 -5490 3520 -6330 4350 -7170 5620 -7170 6920 -7170 7790 -6320 8650 -5470 8650 -4170 8650 -2890 7810 -2060 6970 -1230 5680 -1230 4850 -1230 4130 -1620 3410 -2020 3050 -2740 2680 -3460 2680 -4230 M 3260 -11000 Q 3260 -11920 3940 -12580 4620 -13240 5650 -13240 6670 -13240 7360 -12560 8040 -11890 8040 -10900 8040 -9950 7380 -9290 6710 -8640 5670 -8640 4600 -8640 3930 -9300 3260 -9960 3260 -11000 M 3620 -7950 Q 2280 -7600 1560 -6630 830 -5670 830 -4240 830 -2320 2160 -1030 3490 250 5660 250 7830 250 9160 -1030 10490 -2310 10490 -4190 10490 -5550 9790 -6530 9080 -7510 7730 -7950 8820 -8360 9360 -9110 9890 -9870 9890 -10890 9890 -12490 8720 -13600 7550 -14720 5630 -14720 3720 -14720 2570 -13630 1420 -12540 1420 -10940 1420 -9880 1960 -9120 2500 -8360 3620 -7950";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "9":
			var pathData="M 8490 -9860 Q 8490 -8310 7690 -7430 6880 -6560 5630 -6560 4390 -6560 3550 -7430 2700 -8310 2700 -9710 2700 -11270 3590 -12250 4480 -13230 5680 -13230 6840 -13230 7670 -12320 8490 -11410 8490 -9860 M 1120 -3390 Q 1340 -1660 2430 -700 3520 250 5240 250 6860 250 8070 -620 9270 -1490 9880 -3150 10490 -4820 10490 -7630 10490 -10330 9880 -11750 9260 -13180 8080 -13950 6890 -14720 5460 -14720 3480 -14720 2170 -13360 850 -12000 850 -9770 850 -7610 2110 -6290 3370 -4970 5190 -4970 6280 -4970 7220 -5500 8150 -6040 8690 -6900 8700 -6660 8700 -6540 8700 -5420 8430 -4340 8160 -3260 7760 -2620 7360 -1990 6740 -1610 6110 -1230 5280 -1230 4310 -1230 3690 -1780 3070 -2330 2850 -3550 L 1120 -3390";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ":":
			var pathData="M 1850 0 L 3900 0 3900 -2050 1850 -2050 1850 0 M 1850 -8570 L 3900 -8570 3900 -10620 1850 -10620 1850 -8570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ";":
			var pathData="M 1820 0 L 2840 0 Q 2810 910 2540 1400 2270 1880 1700 2130 L 2200 2900 Q 3070 2520 3470 1830 3870 1130 3870 0 L 3870 -2050 1820 -2050 1820 0 M 1820 -8570 L 3870 -8570 3870 -10620 1820 -10620 1820 -8570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "<":
			var pathData="M 1120 -6410 L 10830 -2260 10830 -4050 3130 -7240 10830 -10400 10830 -12190 1120 -8090 1120 -6410";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "=":
			var pathData="M 10820 -4170 L 10820 -5850 1140 -5850 1140 -4170 10820 -4170 M 10820 -8620 L 10820 -10300 1140 -10300 1140 -8620 10820 -8620";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case ">":
			var pathData="M 10830 -6410 L 10830 -8090 1120 -12190 1120 -10400 8810 -7240 1120 -4050 1120 -2260 10830 -6410";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "?":
			var pathData="M 4610 0 L 6660 0 6660 -2050 4610 -2050 4610 0 M 4720 -3610 L 6450 -3610 Q 6470 -4690 6600 -5170 6730 -5650 7000 -6020 7270 -6390 8150 -7170 9460 -8330 9910 -9140 10360 -9950 10360 -10910 10360 -12570 9080 -13740 7800 -14910 5650 -14910 3620 -14910 2390 -13820 1150 -12730 900 -10680 L 2750 -10460 Q 2990 -11990 3760 -12710 4530 -13430 5680 -13430 6870 -13430 7690 -12630 8510 -11840 8510 -10790 8510 -10210 8230 -9720 7950 -9230 7020 -8400 6080 -7580 5720 -7150 5230 -6560 5010 -5980 4710 -5210 4710 -4150 4710 -3970 4720 -3610";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "@":
			var pathData="M 6770 -4340 Q 6770 -5200 7090 -6230 7410 -7260 7940 -7980 8470 -8700 9040 -9020 9600 -9350 10240 -9350 11210 -9350 11890 -8600 12560 -7850 12560 -6490 12560 -5470 12200 -4450 11840 -3440 11280 -2780 10710 -2120 10090 -1780 9470 -1450 8910 -1450 8070 -1450 7420 -2210 6770 -2970 6770 -4340 M 11610 -1630 Q 11670 -1020 11800 -770 12000 -380 12430 -170 12850 40 13540 40 15700 40 17520 -1980 19560 -4230 19560 -7130 19560 -9160 18590 -10890 17450 -12900 15480 -13910 13500 -14930 11020 -14930 7820 -14930 5580 -13490 3330 -12050 2110 -9340 1110 -7130 1110 -4690 1110 -2500 1950 -610 2620 880 3940 2030 5260 3170 7140 3740 9010 4310 11230 4310 13640 4310 15350 3680 17060 3040 18300 1950 19540 860 20050 -190 L 18240 -190 Q 17360 1070 15590 1950 13820 2830 11200 2830 8750 2830 6740 1990 4720 1140 3660 -630 2590 -2400 2590 -4850 2590 -7190 3660 -9230 4720 -11280 6660 -12370 8590 -13470 10930 -13470 12980 -13470 14680 -12600 16370 -11730 17230 -10280 18080 -8830 18080 -7160 18080 -5730 17420 -4380 16750 -3040 15610 -2240 14750 -1630 14220 -1630 13930 -1630 13730 -1820 13520 -2020 13520 -2290 13520 -2440 13820 -3840 L 15260 -10550 13470 -10550 13130 -9000 Q 12560 -9930 11770 -10380 10980 -10840 10110 -10840 8970 -10840 7760 -10040 6550 -9240 5740 -7640 4920 -6050 4920 -4460 4920 -3170 5450 -2090 5970 -1010 6810 -490 7650 30 8540 30 9350 30 10160 -420 10960 -880 11610 -1630";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "A":
			var pathData="M 4200 -6020 L 5810 -10320 Q 6320 -11710 6600 -13120 6940 -11930 7640 -10080 L 9170 -6020 4200 -6020 M -30 0 L 2030 0 3640 -4440 9770 -4440 11480 0 13690 0 7690 -14660 5600 -14660 -30 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "B":
			var pathData="M 3440 -1730 L 3440 -6770 6830 -6770 Q 8230 -6770 8980 -6520 9720 -6280 10140 -5670 10560 -5070 10560 -4250 10560 -3550 10270 -3010 9980 -2480 9530 -2200 9080 -1920 8410 -1800 8030 -1730 7090 -1730 L 3440 -1730 M 3440 -8500 L 3440 -12930 6370 -12930 Q 7950 -12930 8600 -12720 9250 -12520 9600 -11960 9950 -11410 9950 -10680 9950 -9910 9580 -9400 9200 -8890 8460 -8670 7900 -8500 6610 -8500 L 3440 -8500 M 1500 0 L 7090 0 Q 8490 0 9460 -240 10420 -490 11060 -970 11700 -1450 12140 -2330 12570 -3220 12570 -4250 12570 -5530 11860 -6470 11140 -7410 9810 -7800 10840 -8310 11350 -9140 11860 -9970 11860 -10910 11860 -11920 11290 -12840 10710 -13770 9700 -14210 8680 -14660 7000 -14660 L 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "C":
			var pathData="M 12040 -5140 Q 11640 -3290 10510 -2350 9380 -1410 7750 -1410 6410 -1410 5260 -2100 4110 -2790 3570 -4180 3020 -5580 3020 -7450 3020 -8900 3480 -10260 3940 -11630 5080 -12440 6210 -13250 7900 -13250 9370 -13250 10340 -12520 11310 -11790 11820 -10190 L 13730 -10640 Q 13140 -12670 11640 -13790 10140 -14910 7940 -14910 6000 -14910 4390 -14020 2770 -13140 1900 -11430 1020 -9730 1020 -7440 1020 -5340 1800 -3510 2570 -1680 4060 -710 5540 250 7910 250 10200 250 11790 -1000 13370 -2260 13980 -4650 L 12040 -5140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "D":
			var pathData="M 3520 -1730 L 3520 -12930 6600 -12930 Q 8330 -12930 9110 -12630 10190 -12210 10950 -10970 11700 -9740 11700 -7440 11700 -5780 11320 -4610 10930 -3450 10240 -2760 9750 -2270 8930 -2000 8100 -1730 6650 -1730 L 3520 -1730 M 1580 0 L 6870 0 Q 8200 0 9230 -250 10250 -500 10980 -980 11700 -1470 12310 -2310 12920 -3160 13310 -4450 13700 -5740 13700 -7410 13700 -9370 13130 -10890 12550 -12420 11390 -13400 10500 -14160 9240 -14450 8340 -14660 6630 -14660 L 1580 -14660 1580 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "E":
			var pathData="M 1620 0 L 12560 0 12560 -1730 3560 -1730 3560 -6720 11670 -6720 11670 -8440 3560 -8440 3560 -12930 12220 -12930 12220 -14660 1620 -14660 1620 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "F":
			var pathData="M 1680 0 L 3620 0 3620 -6660 10500 -6660 10500 -8390 3620 -8390 3620 -12930 11570 -12930 11570 -14660 1680 -14660 1680 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "G":
			var pathData="M 8440 -5750 L 12750 -5750 12750 -3020 Q 12130 -2470 10930 -1980 9730 -1500 8470 -1500 7020 -1500 5730 -2140 4440 -2780 3770 -4100 3090 -5420 3090 -7380 3090 -8970 3650 -10330 3980 -11120 4580 -11780 5170 -12440 6140 -12840 7110 -13250 8440 -13250 9550 -13250 10460 -12860 11370 -12480 11860 -11840 12350 -11200 12680 -10080 L 14430 -10560 Q 14050 -12040 13320 -12960 12590 -13880 11310 -14390 10020 -14910 8430 -14910 6240 -14910 4560 -14010 2880 -13110 1990 -11250 1090 -9400 1090 -7260 1090 -5100 1990 -3350 2890 -1600 4660 -670 6420 250 8580 250 10180 250 11700 -320 13220 -900 14650 -2040 L 14650 -7480 8440 -7470 8440 -5750";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "H":
			var pathData="M 1640 0 L 3580 0 3580 -6910 11200 -6910 11200 0 13140 0 13140 -14660 11200 -14660 11200 -8640 3580 -8640 3580 -14660 1640 -14660 1640 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "I":
			var pathData="M 1910 0 L 3850 0 3850 -14660 1910 -14660 1910 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "J":
			var pathData="M 590 -4160 Q 550 -1970 1580 -860 2600 250 4530 250 5830 250 6800 -280 7760 -810 8210 -1820 8650 -2830 8650 -4670 L 8650 -14660 6710 -14660 6710 -4560 Q 6710 -3300 6510 -2720 6310 -2150 5780 -1810 5250 -1480 4520 -1480 3530 -1480 2970 -2100 2410 -2720 2340 -4400 L 590 -4160";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "K":
			var pathData="M 1500 0 L 3440 0 3440 -5080 5840 -7420 11060 0 13620 0 7200 -8720 13350 -14660 10720 -14660 3440 -7390 3440 -14660 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "L":
			var pathData="M 1500 0 L 10660 0 10660 -1730 3440 -1730 3440 -14660 1500 -14660 1500 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "M":
			var pathData="M 1520 0 L 3390 0 3390 -12480 7630 0 9380 0 13640 -12270 13640 0 15510 0 15510 -14660 12900 -14660 9390 -4460 Q 8860 -2910 8610 -2110 8390 -2830 7910 -4280 L 4440 -14660 1520 -14660 1520 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "N":
			var pathData="M 1560 0 L 3420 0 3420 -11520 11120 0 13110 0 13110 -14660 11250 -14660 11250 -3150 3550 -14660 1560 -14660 1560 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "O":
			var pathData="M 2990 -7110 Q 2990 -10420 4480 -11830 5960 -13250 8020 -13250 9470 -13250 10640 -12510 11800 -11780 12410 -10440 13010 -9110 13010 -7320 13010 -4490 11600 -2950 10180 -1410 7990 -1410 5840 -1410 4420 -2930 2990 -4460 2990 -7110 M 990 -7140 Q 990 -5210 1830 -3480 2670 -1750 4300 -750 5930 250 8000 250 9910 250 11560 -650 13210 -1560 14110 -3320 15010 -5080 15010 -7310 15010 -9510 14160 -11240 13300 -12980 11670 -13950 10040 -14920 8010 -14920 4910 -14920 2950 -12850 990 -10790 990 -7140";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "P":
			var pathData="M 3520 -7690 L 3520 -12930 7270 -12930 Q 8590 -12930 9080 -12800 9840 -12590 10310 -11930 10770 -11280 10770 -10360 10770 -9090 9980 -8390 9190 -7690 7310 -7690 L 3520 -7690 M 1580 0 L 3520 0 3520 -5960 7280 -5960 Q 10390 -5960 11580 -7250 12770 -8550 12770 -10420 12770 -11510 12330 -12420 11880 -13330 11150 -13830 10420 -14340 9340 -14520 8570 -14660 7110 -14660 L 1580 -14660 1580 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Q":
			var pathData="M 8420 -4050 L 7950 -2640 Q 8960 -2390 9870 -1800 8950 -1410 7910 -1410 5710 -1410 4300 -2940 2880 -4470 2880 -7330 2880 -10280 4310 -11760 5740 -13250 7910 -13250 9360 -13250 10530 -12510 11690 -11780 12300 -10450 12900 -9120 12900 -7340 12900 -4210 11190 -2650 10100 -3580 8420 -4050 M 12690 -1570 Q 13800 -2640 14350 -4080 14900 -5530 14900 -7340 14900 -9520 14050 -11250 13190 -12990 11560 -13950 9930 -14920 7900 -14920 5890 -14920 4270 -13990 2640 -13060 1760 -11280 880 -9500 880 -7330 880 -5150 1760 -3410 2630 -1670 4250 -710 5870 250 7860 250 9830 250 11460 -660 13030 570 14610 1140 L 15180 -210 Q 14040 -640 12690 -1570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "R":
			var pathData="M 3550 -8190 L 3550 -13040 8190 -13040 Q 9820 -13040 10580 -12370 11330 -11700 11330 -10660 11330 -9950 10940 -9340 10550 -8740 9800 -8460 9050 -8190 7720 -8190 L 3550 -8190 M 1610 0 L 3550 0 3550 -6510 5800 -6510 Q 6550 -6510 6880 -6440 7330 -6330 7770 -6050 8200 -5770 8750 -5070 9300 -4370 10150 -3050 L 12090 0 14530 0 11980 -3990 Q 11220 -5160 10370 -5940 9970 -6300 9200 -6670 11310 -6960 12320 -8030 13330 -9100 13330 -10660 13330 -11870 12720 -12870 12110 -13870 11090 -14260 10070 -14660 8110 -14660 L 1610 -14660 1610 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "S":
			var pathData="M 920 -4710 Q 960 -3240 1730 -2070 2490 -910 3840 -330 5180 250 7170 250 8740 250 10000 -320 11250 -900 11920 -1930 12590 -2970 12590 -4140 12590 -5320 11980 -6220 11370 -7130 10090 -7720 9210 -8120 6850 -8650 4480 -9190 3920 -9700 3350 -10210 3350 -11000 3350 -11910 4160 -12550 4960 -13200 6720 -13200 8410 -13200 9280 -12490 10140 -11780 10290 -10390 L 12150 -10530 Q 12100 -11820 11430 -12840 10760 -13860 9520 -14380 8270 -14910 6640 -14910 5160 -14910 3950 -14410 2740 -13910 2110 -12940 1480 -11980 1480 -10870 1480 -9860 2000 -9040 2510 -8230 3560 -7680 4370 -7250 6390 -6760 8410 -6280 9000 -6050 9920 -5700 10320 -5180 10720 -4670 10720 -3980 10720 -3300 10310 -2720 9890 -2150 9040 -1820 8190 -1490 7080 -1490 5830 -1490 4830 -1920 3830 -2360 3360 -3060 2880 -3770 2750 -4870 L 920 -4710";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "T":
			var pathData="M 5310 0 L 7250 0 7250 -12930 12100 -12930 12100 -14660 480 -14660 480 -12930 5310 -12930 5310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "U":
			var pathData="M 11200 -14660 L 11200 -6200 Q 11200 -3440 10290 -2470 9380 -1500 7240 -1500 5990 -1500 5130 -1990 4260 -2480 3910 -3380 3550 -4290 3550 -6200 L 3550 -14660 1610 -14660 1610 -6190 Q 1610 -3860 2170 -2510 2730 -1170 4040 -460 5350 250 7410 250 9530 250 10840 -560 12140 -1380 12640 -2680 13140 -3980 13140 -6190 L 13140 -14660 11200 -14660";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "V":
			var pathData="M 5770 0 L 7760 0 13500 -14660 11520 -14660 7560 -4010 Q 7110 -2810 6770 -1610 6460 -2730 6000 -4010 L 2190 -14660 90 -14660 5770 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "W":
			var pathData="M 4140 0 L 6120 0 9230 -11170 Q 9430 -11880 9660 -12890 9730 -12570 10120 -11170 L 13210 0 15080 0 19100 -14660 17150 -14660 14850 -5240 Q 14400 -3440 14120 -2050 13770 -4480 12980 -7240 L 10880 -14660 8540 -14660 5750 -4760 Q 5650 -4400 5090 -2050 4830 -3540 4470 -5050 L 2240 -14660 250 -14660 4140 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "X":
			var pathData="M 90 0 L 2420 0 6100 -5110 Q 6310 -5410 6800 -6210 7130 -5680 7440 -5230 L 11130 0 13530 0 7980 -7750 13130 -14660 11020 -14660 8070 -10770 Q 7400 -9900 6910 -9100 6560 -9730 5730 -10900 L 3070 -14660 760 -14660 5760 -7640 90 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Y":
			var pathData="M 5710 0 L 7650 0 7650 -6210 13500 -14660 11240 -14660 8400 -10350 Q 7460 -8910 6800 -7760 6110 -9000 5310 -10240 L 2420 -14660 60 -14660 5710 -6210 5710 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "Z":
			var pathData="M 410 0 L 12000 0 12000 -1730 2640 -1730 3530 -2760 11760 -12930 11760 -14660 1260 -14660 1260 -12930 9440 -12930 Q 8720 -12190 7920 -11190 L 410 -1800 410 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "[":
			var pathData="M 1390 4070 L 5360 4070 5360 2580 3190 2580 3190 -13170 5360 -13170 5360 -14660 1390 -14660 1390 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "\\":
			var pathData="M 4250 250 L 5690 250 1450 -14910 0 -14910 4250 250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "]":
			var pathData="M 4360 4070 L 4360 -14660 390 -14660 390 -13170 2560 -13170 2560 2580 390 2580 390 4070 4360 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "^":
			var pathData="M 2390 -6900 L 4790 -12870 7260 -6900 9070 -6900 5520 -14910 4070 -14910 540 -6900 2390 -6900";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "_":
			var pathData="M -310 4070 L 11620 4070 11620 2770 -310 2770 -310 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "`":
			var pathData="M 4650 -11940 L 3300 -14740 890 -14740 3200 -11940 4650 -11940";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "a":
			var pathData="M 8130 -5330 L 8130 -4670 Q 8130 -3480 7840 -2870 7460 -2080 6650 -1620 5840 -1170 4800 -1170 3750 -1170 3210 -1650 2660 -2130 2660 -2850 2660 -3320 2910 -3700 3160 -4090 3620 -4290 4080 -4490 5190 -4650 7150 -4930 8130 -5330 M 8280 -1310 Q 8360 -560 8640 0 L 10520 0 Q 10180 -610 10070 -1270 9950 -1940 9950 -4450 L 9950 -6850 Q 9950 -8050 9860 -8510 9700 -9250 9300 -9730 8900 -10220 8050 -10540 7200 -10860 5840 -10860 4470 -10860 3430 -10480 2390 -10110 1840 -9410 1290 -8720 1050 -7590 L 2810 -7350 Q 3100 -8480 3710 -8920 4310 -9370 5580 -9370 6940 -9370 7630 -8760 8140 -8310 8140 -7210 8140 -7110 8130 -6740 7100 -6380 4920 -6120 3850 -5990 3320 -5850 2600 -5650 2030 -5260 1450 -4870 1100 -4220 740 -3580 740 -2800 740 -1470 1680 -610 2620 240 4370 240 5430 240 6360 -110 7280 -460 8280 -1310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "b":
			var pathData="M 2990 -5390 Q 2990 -7330 3850 -8350 4710 -9380 5890 -9380 7060 -9380 7890 -8390 8710 -7400 8710 -5320 8710 -3290 7850 -2260 6990 -1240 5810 -1240 4360 -1240 3510 -2630 2990 -3480 2990 -5390 M 3010 0 L 3010 -1330 Q 4080 240 5960 240 7850 240 9200 -1250 10550 -2740 10550 -5470 10550 -6620 10230 -7630 9910 -8640 9350 -9350 8780 -10070 7910 -10460 7030 -10860 6050 -10860 4280 -10860 3140 -9430 L 3140 -14660 1340 -14660 1340 0 3010 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "c":
			var pathData="M 8280 -3890 Q 8090 -2540 7380 -1890 6670 -1240 5610 -1240 4290 -1240 3470 -2210 2650 -3180 2650 -5320 2650 -7430 3500 -8400 4350 -9380 5710 -9380 6610 -9380 7250 -8840 7880 -8300 8130 -7230 L 9880 -7500 Q 9570 -9110 8470 -9980 7370 -10860 5640 -10860 4270 -10860 3110 -10210 1940 -9570 1370 -8280 800 -6990 800 -5270 800 -2610 2130 -1180 3450 240 5630 240 7370 240 8570 -790 9760 -1830 10050 -3660 L 8280 -3890";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "d":
			var pathData="M 2550 -5300 Q 2550 -7410 3360 -8390 4160 -9370 5360 -9370 6590 -9370 7430 -8350 8270 -7330 8270 -5150 8270 -3170 7450 -2200 6620 -1240 5440 -1240 4270 -1240 3410 -2250 2550 -3260 2550 -5300 M 8240 0 L 9910 0 9910 -14660 8120 -14660 8120 -9400 Q 7650 -10050 6900 -10450 6150 -10860 5190 -10860 3880 -10860 2820 -10170 1760 -9480 1230 -8180 700 -6890 700 -5300 700 -3670 1290 -2410 1870 -1160 2940 -460 4000 240 5270 240 7230 240 8240 -1340 L 8240 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "e":
			var pathData="M 2710 -6330 Q 2800 -7720 3650 -8550 4490 -9380 5730 -9380 7100 -9380 7960 -8340 8520 -7670 8640 -6330 L 2710 -6330 M 8620 -3420 Q 8210 -2280 7510 -1760 6810 -1240 5820 -1240 4490 -1240 3600 -2170 2710 -3100 2610 -4850 L 10530 -4850 Q 10540 -5170 10540 -5330 10540 -7960 9190 -9410 7840 -10860 5710 -10860 3510 -10860 2130 -9380 750 -7900 750 -5220 750 -2630 2120 -1190 3480 240 5810 240 7660 240 8850 -660 10040 -1560 10480 -3190 L 8620 -3420";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "f":
			var pathData="M 1780 0 L 3570 0 3570 -9220 5640 -9220 5640 -10620 3570 -10620 3570 -11600 Q 3570 -12560 3910 -12910 4250 -13260 5070 -13260 5570 -13260 6130 -13160 L 6400 -14730 Q 5480 -14910 4720 -14910 3540 -14910 2890 -14470 2230 -14040 1970 -13340 1780 -12820 1780 -11750 L 1780 -10620 190 -10620 190 -9220 1780 -9220 1780 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "g":
			var pathData="M 2510 -5500 Q 2510 -7420 3350 -8390 4190 -9370 5390 -9370 6610 -9370 7480 -8380 8340 -7390 8340 -5440 8340 -3400 7500 -2440 6660 -1490 5420 -1490 4170 -1490 3340 -2450 2510 -3410 2510 -5500 M 1020 880 Q 980 2600 2150 3460 3320 4310 5220 4310 6820 4310 7920 3710 9010 3110 9520 2080 10020 1040 10020 -1440 L 10020 -10620 8360 -10620 8360 -9340 Q 7140 -10860 5260 -10860 3850 -10860 2810 -10160 1760 -9460 1210 -8170 660 -6890 660 -5370 660 -3160 1860 -1580 3060 0 5250 0 7010 0 8190 -1390 8200 370 8060 920 7820 1820 7140 2320 6460 2820 5210 2820 4050 2820 3380 2320 2880 1950 2770 1140 L 1020 880";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "h":
			var pathData="M 1350 0 L 3150 0 3150 -5810 Q 3150 -7060 3450 -7770 3750 -8480 4460 -8890 5160 -9310 5960 -9310 7030 -9310 7620 -8690 8200 -8080 8200 -6730 L 8200 0 10000 0 10000 -6730 Q 10000 -8290 9630 -9110 9250 -9930 8380 -10390 7510 -10860 6330 -10860 4410 -10860 3150 -9400 L 3150 -14660 1350 -14660 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "i":
			var pathData="M 1360 0 L 3160 0 3160 -10620 1360 -10620 1360 0 M 1360 -12590 L 3160 -12590 3160 -14660 1360 -14660 1360 -12590";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "j":
			var pathData="M -940 4120 Q -260 4310 470 4310 1980 4310 2630 3310 3140 2540 3140 580 L 3140 -10620 1340 -10620 1340 540 Q 1340 2000 1070 2370 800 2730 250 2730 -60 2730 -600 2590 L -940 4120 M 1340 -12570 L 3140 -12570 3140 -14660 1340 -14660 1340 -12570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "k":
			var pathData="M 1360 0 L 3160 0 3160 -4210 4430 -5430 7940 0 10160 0 5690 -6680 9750 -10620 7420 -10620 3160 -6300 3160 -14660 1360 -14660 1360 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "l":
			var pathData="M 1310 0 L 3110 0 3110 -14660 1310 -14660 1310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "m":
			var pathData="M 1350 0 L 3150 0 3150 -5510 Q 3150 -6960 3440 -7730 3730 -8500 4380 -8900 5020 -9300 5780 -9300 6780 -9300 7220 -8700 7660 -8100 7660 -6900 L 7660 0 9460 0 9460 -6170 Q 9460 -7810 10200 -8550 10940 -9300 12060 -9300 12680 -9300 13140 -9010 13600 -8720 13780 -8240 13950 -7770 13950 -6690 L 13950 0 15740 0 15740 -7290 Q 15740 -9110 14890 -9980 14040 -10860 12460 -10860 10440 -10860 9180 -9000 8870 -9880 8120 -10370 7360 -10860 6180 -10860 5120 -10860 4290 -10380 3460 -9910 2960 -9130 L 2960 -10620 1350 -10620 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "n":
			var pathData="M 1350 0 L 3150 0 3150 -5800 Q 3150 -7840 3990 -8570 4820 -9300 5970 -9300 6690 -9300 7230 -8970 7760 -8650 7970 -8100 8180 -7560 8180 -6460 L 8180 0 9980 0 9980 -6530 Q 9980 -7780 9880 -8280 9720 -9050 9320 -9610 8920 -10170 8120 -10510 7310 -10860 6350 -10860 4140 -10860 2970 -9110 L 2970 -10620 1350 -10620 1350 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "o":
			var pathData="M 2530 -5310 Q 2530 -7350 3420 -8360 4310 -9370 5660 -9370 6990 -9370 7890 -8350 8780 -7340 8780 -5370 8780 -3280 7890 -2260 7000 -1240 5660 -1240 4310 -1240 3420 -2250 2530 -3270 2530 -5310 M 680 -5310 Q 680 -2620 2060 -1190 3430 240 5660 240 7050 240 8230 -410 9400 -1060 10020 -2230 10630 -3410 10630 -5460 10630 -7990 9240 -9420 7850 -10860 5660 -10860 3690 -10860 2320 -9680 680 -8260 680 -5310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "p":
			var pathData="M 2980 -5250 Q 2980 -7300 3870 -8370 4750 -9450 5900 -9450 7060 -9450 7900 -8440 8730 -7430 8730 -5400 8730 -3270 7880 -2250 7020 -1240 5820 -1240 4640 -1240 3810 -2220 2980 -3200 2980 -5250 M 1350 4070 L 3150 4070 3150 -1100 Q 3610 -520 4330 -140 5040 240 5940 240 7170 240 8290 -450 9400 -1150 9990 -2450 10570 -3760 10570 -5390 10570 -6910 10040 -8180 9510 -9460 8470 -10160 7430 -10860 6070 -10860 5030 -10860 4300 -10450 3570 -10050 2990 -9240 L 2990 -10620 1350 -10620 1350 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "q":
			var pathData="M 2570 -5340 Q 2570 -7450 3390 -8440 4200 -9440 5370 -9440 6550 -9440 7430 -8370 8300 -7300 8300 -5180 8300 -3190 7470 -2210 6640 -1240 5490 -1240 4290 -1240 3430 -2260 2570 -3290 2570 -5340 M 8120 4070 L 9920 4070 9920 -10620 8300 -10620 8300 -9200 Q 7170 -10860 5200 -10860 3940 -10860 2890 -10200 1830 -9550 1280 -8280 720 -7010 720 -5410 720 -2780 2090 -1270 3450 240 5340 240 6190 240 6950 -150 7700 -540 8120 -1130 L 8120 4070";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "r":
			var pathData="M 1330 0 L 3130 0 3130 -5560 Q 3130 -6700 3430 -7660 3630 -8290 4100 -8640 4570 -9000 5160 -9000 5820 -9000 6480 -8610 L 7100 -10280 Q 6160 -10860 5250 -10860 4620 -10860 4100 -10500 3570 -10140 2950 -9010 L 2950 -10620 1330 -10620 1330 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "s":
			var pathData="M 630 -3170 Q 930 -1480 2020 -620 3100 240 5170 240 6420 240 7410 -190 8400 -630 8930 -1420 9450 -2220 9450 -3120 9450 -4040 9020 -4660 8590 -5280 7840 -5600 7080 -5930 5170 -6440 3850 -6800 3580 -6900 3110 -7090 2890 -7380 2670 -7660 2670 -8010 2670 -8560 3200 -8970 3730 -9380 4970 -9380 6020 -9380 6600 -8920 7170 -8460 7290 -7640 L 9050 -7880 Q 8880 -8910 8430 -9520 7980 -10140 7040 -10500 6090 -10860 4840 -10860 4010 -10860 3290 -10640 2560 -10430 2140 -10120 1580 -9720 1260 -9110 930 -8510 930 -7800 930 -7020 1330 -6370 1720 -5730 2490 -5360 3250 -5000 5230 -4500 6700 -4130 7070 -3890 7600 -3540 7600 -2930 7600 -2250 7000 -1740 6400 -1240 5160 -1240 3930 -1240 3250 -1810 2560 -2380 2410 -3450 L 630 -3170";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "t":
			var pathData="M 5280 -1610 Q 4790 -1540 4490 -1540 4090 -1540 3880 -1670 3660 -1800 3570 -2020 3470 -2240 3470 -3010 L 3470 -9220 5280 -9220 5280 -10620 3470 -10620 3470 -14330 1680 -13250 1680 -10620 360 -10620 360 -9220 1680 -9220 1680 -3110 Q 1680 -1490 1900 -980 2120 -480 2660 -170 3200 140 4180 140 4780 140 5540 -20 L 5280 -1610";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "u":
			var pathData="M 8310 0 L 9920 0 9920 -10620 8120 -10620 8120 -4930 Q 8120 -3570 7830 -2850 7530 -2140 6820 -1720 6110 -1310 5300 -1310 4490 -1310 3940 -1710 3390 -2120 3220 -2830 3110 -3320 3110 -4730 L 3110 -10620 1310 -10620 1310 -4040 Q 1310 -2890 1420 -2360 1580 -1570 1980 -1020 2370 -480 3190 -120 4000 240 4940 240 7070 240 8310 -1560 L 8310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "v":
			var pathData="M 4300 0 L 5980 0 10000 -10620 8150 -10620 5790 -4140 Q 5360 -2960 5120 -2120 4810 -3230 4440 -4260 L 2160 -10620 260 -10620 4300 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "w":
			var pathData="M 3310 0 L 5190 0 7340 -8170 7750 -6360 9440 0 11310 0 14630 -10620 12880 -10620 11060 -4480 10450 -2430 9920 -4460 8330 -10620 6480 -10620 4790 -4400 Q 4280 -2380 4240 -2210 L 3610 -4490 1920 -10620 60 -10620 3310 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "x":
			var pathData="M 150 0 L 2330 0 5120 -4190 5700 -3300 7880 0 10090 0 6140 -5620 9810 -10620 7660 -10620 5870 -8110 Q 5500 -7600 5060 -6940 4780 -7420 4320 -8130 L 2690 -10620 440 -10620 4030 -5520 150 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "y":
			var pathData="M 1270 4090 Q 1910 4310 2430 4310 3290 4310 3910 3900 4530 3480 5010 2590 5370 1930 6020 180 L 10060 -10620 8260 -10620 5990 -4430 Q 5560 -3250 5250 -2010 4910 -3300 4480 -4470 L 2270 -10620 330 -10620 4360 20 Q 4250 310 4200 460 3820 1530 3650 1800 3420 2160 3060 2360 2700 2560 2100 2560 1660 2560 1070 2400 L 1270 4090";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "z":
			var pathData="M 400 0 L 9800 0 9800 -1550 4890 -1550 Q 3830 -1550 2620 -1460 L 3730 -2690 9480 -9430 9480 -10620 800 -10620 800 -9160 5130 -9160 Q 6010 -9160 7160 -9220 L 400 -1460 400 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "{":
			var pathData="M 570 -6120 L 570 -4490 Q 1340 -4470 1830 -4070 2310 -3670 2470 -2980 2630 -2290 2640 -490 2650 1310 2780 2100 2900 2890 3320 3410 3740 3920 4380 4150 4820 4310 5800 4310 L 6360 4310 6360 2740 6050 2740 Q 5100 2740 4780 2470 4450 2200 4370 1520 4330 1150 4330 -800 4330 -2950 3840 -3890 3340 -4840 2240 -5300 3170 -5750 3610 -6330 4040 -6910 4220 -7980 4330 -8670 4330 -11290 4330 -12590 4670 -12960 5010 -13340 6050 -13340 L 6360 -13340 6360 -14910 5800 -14910 Q 4940 -14910 4560 -14810 4000 -14650 3640 -14340 3280 -14040 3040 -13530 2790 -13020 2700 -12180 2650 -11650 2640 -9980 2630 -8310 2470 -7620 2310 -6930 1830 -6530 1340 -6140 570 -6120";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "|":
			var pathData="M 1880 4310 L 3450 4310 3450 -14910 1880 -14910 1880 4310";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "}":
			var pathData="M 6260 -6120 Q 5490 -6140 5010 -6540 4520 -6940 4360 -7620 4200 -8310 4190 -10110 4180 -11910 4060 -12700 3930 -13490 3510 -14010 3090 -14530 2450 -14750 2010 -14910 1030 -14910 L 470 -14910 470 -13340 780 -13340 Q 1730 -13340 2060 -13070 2380 -12810 2450 -12140 2500 -11760 2500 -9810 2500 -7660 2970 -6750 3440 -5850 4590 -5300 3710 -4930 3230 -4260 2750 -3600 2590 -2490 2500 -1820 2500 680 2500 1990 2160 2370 1820 2740 780 2740 L 470 2740 470 4310 1030 4310 Q 1890 4310 2270 4200 2830 4040 3190 3740 3550 3430 3800 2930 4040 2420 4130 1570 4180 1040 4190 -630 4200 -2300 4360 -2980 4520 -3670 5010 -4070 5490 -4470 6260 -4490 L 6260 -6120";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "~":
			var pathData="M 870 -5570 Q 1710 -6380 2280 -6650 2840 -6930 3480 -6930 4270 -6930 5460 -6400 6640 -5870 7190 -5730 7730 -5590 8330 -5590 9150 -5590 9810 -5860 10460 -6130 11100 -6730 L 11100 -8850 Q 10560 -8260 9870 -7870 9170 -7480 8520 -7480 8170 -7480 7830 -7570 7480 -7660 6790 -7950 5570 -8470 4910 -8640 4250 -8820 3650 -8820 1930 -8820 870 -7620 L 870 -5570";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case " ":
			break;
		case "É":
			var pathData="M 5620 -15560 L 7110 -15560 9310 -18360 6950 -18360 5620 -15560 M 1620 0 L 12560 0 12560 -1730 3560 -1730 3560 -6720 11670 -6720 11670 -8440 3560 -8440 3560 -12930 12220 -12930 12220 -14660 1620 -14660 1620 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "é":
			var pathData="M 4650 -11940 L 6140 -11940 8340 -14740 5980 -14740 4650 -11940 M 2710 -6330 Q 2800 -7720 3650 -8550 4490 -9380 5730 -9380 7100 -9380 7960 -8340 8520 -7670 8640 -6330 L 2710 -6330 M 8620 -3420 Q 8210 -2280 7510 -1760 6810 -1240 5820 -1240 4490 -1240 3600 -2170 2710 -3100 2610 -4850 L 10530 -4850 Q 10540 -5170 10540 -5330 10540 -7960 9190 -9410 7840 -10860 5710 -10860 3510 -10860 2130 -9380 750 -7900 750 -5220 750 -2630 2120 -1190 3480 240 5810 240 7660 240 8850 -660 10040 -1560 10480 -3190 L 8620 -3420";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "ˆ":
			var pathData="M 3440 -13640 L 4540 -11940 6580 -11940 4330 -14740 2410 -14740 250 -11940 2310 -11940 3440 -13640";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "˜":
			var pathData="M 70 -12190 L 1400 -12190 Q 1390 -12660 1610 -12900 1820 -13140 2160 -13140 2470 -13140 3140 -12780 4170 -12220 4800 -12220 5640 -12220 6190 -12790 6730 -13360 6760 -14500 L 5460 -14500 Q 5390 -13980 5220 -13800 5050 -13630 4730 -13630 4380 -13630 3790 -13930 2720 -14470 2100 -14470 1210 -14470 640 -13850 60 -13230 70 -12190";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "–":
			var pathData="M -40 -4580 L 11350 -4580 11350 -6030 -40 -6030 -40 -4580";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "—":
			var pathData="M 0 -4580 L 20480 -4580 20480 -6030 0 -6030 0 -4580";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‘":
			var pathData="M 3210 -12200 L 2270 -12200 Q 2300 -13070 2560 -13520 2820 -13980 3370 -14210 L 2930 -14910 Q 2020 -14500 1600 -13700 1280 -13100 1280 -11760 L 1280 -10110 3210 -10110 3210 -12200";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "’":
			var pathData="M 1240 -12720 L 2180 -12720 Q 2150 -11890 1890 -11410 1620 -10940 1080 -10720 L 1520 -10010 Q 2430 -10420 2860 -11230 3170 -11820 3170 -13160 L 3170 -14810 1240 -14810 1240 -12720";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‚":
			var pathData="M 1240 0 L 2180 0 Q 2150 830 1890 1310 1620 1780 1080 2000 L 1520 2710 Q 2430 2300 2860 1490 3170 900 3170 -440 L 3170 -2090 1240 -2090 1240 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "“":
			var pathData="M 5860 -12200 L 4920 -12200 Q 4950 -13070 5210 -13520 5470 -13980 6020 -14210 L 5580 -14910 Q 4670 -14500 4250 -13700 3930 -13100 3930 -11760 L 3930 -10110 5860 -10110 5860 -12200 M 2760 -12200 L 1820 -12200 Q 1850 -13070 2110 -13520 2370 -13980 2920 -14210 L 2480 -14910 Q 1570 -14500 1150 -13700 830 -13100 830 -11760 L 830 -10110 2760 -10110 2760 -12200";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "”":
			var pathData="M 3970 -12720 L 4910 -12720 Q 4880 -11890 4620 -11410 4350 -10940 3810 -10720 L 4250 -10010 Q 5160 -10420 5590 -11230 5900 -11820 5900 -13160 L 5900 -14810 3970 -14810 3970 -12720 M 870 -12720 L 1810 -12720 Q 1780 -11890 1520 -11410 1250 -10940 710 -10720 L 1150 -10010 Q 2060 -10420 2490 -11230 2800 -11820 2800 -13160 L 2800 -14810 870 -14810 870 -12720";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "„":
			var pathData="M 3970 0 L 4910 0 Q 4880 830 4620 1310 4350 1780 3810 2000 L 4250 2710 Q 5160 2300 5590 1490 5900 900 5900 -440 L 5900 -2090 3970 -2090 3970 0 M 870 0 L 1810 0 Q 1780 830 1520 1310 1250 1780 710 2000 L 1150 2710 Q 2060 2300 2490 1490 2800 900 2800 -440 L 2800 -2090 870 -2090 870 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "†":
			var pathData="M 4720 3460 L 6520 3460 6520 -8660 10540 -8660 10540 -10260 6520 -10260 6520 -14320 4720 -14320 4720 -10260 730 -10260 730 -8660 4720 -8660 4720 3460";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‡":
			var pathData="M 4750 3460 L 6550 3460 6550 -240 10580 -240 10580 -1850 6550 -1850 6550 -9100 10580 -9100 10580 -10710 6550 -10710 6550 -14460 4750 -14460 4750 -10710 730 -10710 730 -9100 4750 -9100 4750 -1850 730 -1850 730 -240 4750 -240 4750 3460";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "•":
			var pathData="M 1090 -7180 Q 1090 -6130 1840 -5380 2580 -4640 3620 -4640 4670 -4640 5420 -5380 6160 -6130 6160 -7180 6160 -8230 5420 -8970 4670 -9710 3620 -9710 2580 -9710 1840 -8970 1090 -8230 1090 -7180";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "…":
			var pathData="M 16040 0 L 18100 0 18100 -2050 16040 -2050 16040 0 M 9220 0 L 11270 0 11270 -2050 9220 -2050 9220 0 M 2390 0 L 4440 0 4440 -2050 2390 -2050 2390 0";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‰":
			var pathData="M 15850 -3280 Q 15850 -4840 16300 -5460 16630 -5920 17250 -5920 17850 -5920 18190 -5450 18630 -4830 18630 -3300 18630 -1760 18200 -1150 17880 -700 17290 -700 16640 -700 16250 -1230 15850 -1770 15850 -3280 M 14370 -3360 Q 14370 -1310 15170 -380 15970 540 17250 540 18720 540 19420 -450 20110 -1440 20110 -3400 20110 -5340 19310 -6250 18510 -7160 17230 -7160 15940 -7160 15160 -6250 14370 -5350 14370 -3360 M 9110 -3280 Q 9110 -4840 9560 -5460 9890 -5920 10510 -5920 11100 -5920 11440 -5450 11890 -4830 11890 -3300 11890 -1760 11460 -1150 11140 -700 10550 -700 9900 -700 9510 -1230 9110 -1770 9110 -3280 M 7630 -3360 Q 7630 -1310 8430 -380 9230 540 10510 540 11970 540 12670 -450 13370 -1440 13370 -3400 13370 -5340 12570 -6250 11760 -7160 10480 -7160 9200 -7160 8420 -6250 7630 -5350 7630 -3360 M 1850 -10910 Q 1850 -12460 2300 -13090 2630 -13550 3250 -13550 3850 -13550 4190 -13080 4630 -12450 4630 -10930 4630 -9380 4200 -8780 3880 -8330 3290 -8330 2640 -8330 2250 -8860 1850 -9390 1850 -10910 M 370 -10990 Q 370 -8940 1170 -8010 1970 -7080 3250 -7080 4710 -7080 5410 -8070 6110 -9070 6110 -11030 6110 -12970 5310 -13880 4510 -14790 3230 -14790 1940 -14790 1160 -13880 370 -12980 370 -10990 M 3200 540 L 4520 540 10520 -14910 9210 -14910 3200 540";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "‹":
			var pathData="M 2910 -5270 L 5560 -9840 4070 -9840 920 -5270 4070 -720 5560 -720 2910 -5270";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "›":
			var pathData="M 3570 -5300 L 920 -720 2410 -720 5450 -5360 2410 -9840 920 -9840 3570 -5300";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "€":
			var pathData="M 7900 -13250 Q 9450 -13250 10670 -12240 L 11070 -14100 Q 9800 -14910 7940 -14910 6000 -14910 4390 -14030 1780 -12610 1160 -9350 L 0 -9350 -280 -8010 1030 -8010 Q 1020 -7800 1020 -7600 1020 -7110 1050 -6690 L 0 -6690 -280 -5350 1250 -5350 Q 1480 -4270 1800 -3510 3390 250 7910 250 9420 250 10670 -330 L 10670 -2390 Q 9620 -1410 7750 -1410 6410 -1410 5260 -2100 3660 -3060 3240 -5350 L 9190 -5350 9470 -6690 3030 -6690 Q 3020 -6840 3020 -7610 3020 -7800 3030 -8010 L 9740 -8010 10010 -9350 3190 -9350 Q 3290 -10170 3850 -11080 4400 -11960 5080 -12440 6220 -13250 7900 -13250";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "™":
			var pathData="M 9820 -6510 L 11070 -6510 11070 -13450 13260 -6510 14490 -6510 16590 -13350 16590 -6510 17830 -6510 17830 -14660 15870 -14660 13880 -8150 11820 -14660 9820 -14660 9820 -6510 M 4890 -6510 L 6250 -6510 6250 -13450 8910 -13450 8910 -14660 2250 -14660 2250 -13450 4890 -13450 4890 -6510";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "♀":
			var pathData="M 7670 -14510 Q 8860 -14510 9990 -13900 11110 -13300 11740 -12170 12370 -11040 12370 -9820 12370 -7870 11000 -6490 9620 -5120 7670 -5120 5730 -5120 4360 -6490 2980 -7870 2980 -9820 2980 -11040 3610 -12170 4240 -13300 5370 -13900 6490 -14510 7670 -14510 M 7960 -4610 Q 10040 -4710 11480 -6220 12910 -7740 12910 -9830 12910 -11190 12220 -12430 11530 -13680 10290 -14370 9040 -15070 7680 -15070 6310 -15070 5070 -14380 3830 -13690 3140 -12440 2440 -11190 2440 -9830 2440 -8430 3170 -7170 3890 -5920 5120 -5260 6340 -4610 7370 -4610 L 7370 -590 2770 -590 2770 0 7370 0 7370 4390 7960 4390 7960 0 12550 0 12550 -590 7960 -590 7960 -4610";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
	}
}

function shape3062(ctx,ctrans,frame,ratio,time){
	var pathData="M -1440 -639 L 1440 -639 1440 640 -1440 640 -1440 -639";
	ctx.fillStyle=tocolor(ctrans.apply([0,153,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite3063(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3063,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3062",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite5724(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5724,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,72.0,333.0);
	var clips = [];
	var frame_cnt = 206;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,773.0,-61.1],ctrans,1,(0+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5707",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,0,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5708",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 1:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,773.0,-61.1],ctrans,1,(1+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5707",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,0,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5708",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 2:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,773.0,-61.1],ctrans,1,(2+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 3:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.9,-56.15],ctrans,1,(3+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 4:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.85,-51.2],ctrans,1,(4+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 5:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.75,-46.25],ctrans,1,(5+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 6:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.65,-41.35],ctrans,1,(6+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 7:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.55,-36.4],ctrans,1,(7+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 8:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.5,-31.45],ctrans,1,(8+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 9:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.4,-26.5],ctrans,1,(9+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 10:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.3,-21.55],ctrans,1,(10+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 11:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.25,-16.6],ctrans,1,(11+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 12:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.15,-11.7],ctrans,1,(12+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 13:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,772.05,-6.75],ctrans,1,(13+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 14:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.95,-1.8],ctrans,1,(14+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 15:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.9,3.15],ctrans,1,(15+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 16:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.8,8.1],ctrans,1,(16+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 17:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.7,13.05],ctrans,1,(17+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 18:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.65,18.0],ctrans,1,(18+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 19:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.55,22.9],ctrans,1,(19+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 20:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.45,27.85],ctrans,1,(20+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 21:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.35,32.8],ctrans,1,(21+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 22:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.3,37.75],ctrans,1,(22+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 23:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.2,42.7],ctrans,1,(23+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 24:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.1,47.65],ctrans,1,(24+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 25:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,771.05,52.55],ctrans,1,(25+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 26:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.95,57.5],ctrans,1,(26+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 27:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.85,62.45],ctrans,1,(27+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 28:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.75,67.4],ctrans,1,(28+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 29:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.7,72.35],ctrans,1,(29+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 30:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.6,77.3],ctrans,1,(30+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 31:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.5,82.2],ctrans,1,(31+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 32:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.45,87.15],ctrans,1,(32+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 33:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.35,92.1],ctrans,1,(33+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 34:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.25,97.05],ctrans,1,(34+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 35:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.15,102.0],ctrans,1,(35+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 36:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.1,106.95],ctrans,1,(36+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 37:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,770.0,111.85],ctrans,1,(37+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 38:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.9,116.8],ctrans,1,(38+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 39:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.85,121.75],ctrans,1,(39+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 40:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.75,126.7],ctrans,1,(40+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 41:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.65,131.65],ctrans,1,(41+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 42:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.55,136.6],ctrans,1,(42+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 43:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.5,141.55],ctrans,1,(43+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 44:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.4,146.45],ctrans,1,(44+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 45:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.3,151.4],ctrans,1,(45+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 46:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.25,156.35],ctrans,1,(46+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 47:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.15,161.3],ctrans,1,(47+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 48:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,769.05,166.25],ctrans,1,(48+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 49:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.95,171.2],ctrans,1,(49+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 50:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.9,176.1],ctrans,1,(50+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 51:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.8,181.05],ctrans,1,(51+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 52:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.7,186.0],ctrans,1,(52+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 53:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.65,190.95],ctrans,1,(53+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 54:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.55,195.9],ctrans,1,(54+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 55:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.45,200.85],ctrans,1,(55+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 56:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.35,205.75],ctrans,1,(56+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 57:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.3,210.7],ctrans,1,(57+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 58:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.2,215.65],ctrans,1,(58+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 59:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.1,220.6],ctrans,1,(59+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 60:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,768.05,225.55],ctrans,1,(60+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 61:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.95,230.5],ctrans,1,(61+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 62:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.85,235.45],ctrans,1,(62+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 63:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.75,240.35],ctrans,1,(63+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 64:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.7,245.3],ctrans,1,(64+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 65:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.6,250.25],ctrans,1,(65+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 66:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.5,255.2],ctrans,1,(66+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 67:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.45,260.15],ctrans,1,(67+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 68:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.35,265.1],ctrans,1,(68+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 69:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.25,270.0],ctrans,1,(69+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 70:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.15,274.95],ctrans,1,(70+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 71:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.1,279.9],ctrans,1,(71+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 72:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2805",canvas,ctx,[0.05,0.0,0.0,0.05,767.0,284.85],ctrans,1,(72+time)%843,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 73:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,767.0,284.85],ctrans,1,(0+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 74:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,760.75,284.9],ctrans,1,(1+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 75:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,754.5,284.95],ctrans,1,(2+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 76:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,748.3,285.0],ctrans,1,(3+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 77:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,742.05,285.05],ctrans,1,(4+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 78:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,735.8,285.1],ctrans,1,(5+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 79:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,729.6,285.15],ctrans,1,(6+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 80:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,723.35,285.2],ctrans,1,(7+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 81:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,717.1,285.25],ctrans,1,(8+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 82:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,710.85,285.3],ctrans,1,(9+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 83:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,704.65,285.4],ctrans,1,(10+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 84:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,698.4,285.45],ctrans,1,(11+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 85:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,692.15,285.5],ctrans,1,(12+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 86:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,685.9,285.55],ctrans,1,(13+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 87:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,679.7,285.6],ctrans,1,(14+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 88:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,673.45,285.65],ctrans,1,(15+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 89:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,667.2,285.7],ctrans,1,(16+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 90:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,661.0,285.75],ctrans,1,(17+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 91:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,654.75,285.8],ctrans,1,(18+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 92:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,648.5,285.85],ctrans,1,(19+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 93:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,642.25,285.9],ctrans,1,(20+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 94:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,636.0,285.95],ctrans,1,(21+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 95:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,629.8,286.0],ctrans,1,(22+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 96:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,623.55,286.05],ctrans,1,(23+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 97:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,617.3,286.1],ctrans,1,(24+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 98:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,611.1,286.15],ctrans,1,(25+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 99:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,604.85,286.2],ctrans,1,(26+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 100:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,598.6,286.25],ctrans,1,(27+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 101:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,592.35,286.35],ctrans,1,(28+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 102:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,586.15,286.4],ctrans,1,(29+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 103:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,579.9,286.45],ctrans,1,(30+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 104:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,573.65,286.5],ctrans,1,(31+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 105:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,567.4,286.55],ctrans,1,(32+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 106:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,561.2,286.6],ctrans,1,(33+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 107:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,554.95,286.65],ctrans,1,(34+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 108:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,548.7,286.7],ctrans,1,(35+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 109:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,542.5,286.75],ctrans,1,(36+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 110:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,536.25,286.8],ctrans,1,(37+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 111:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,530.0,286.85],ctrans,1,(38+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 112:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,523.75,286.9],ctrans,1,(39+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 113:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,517.55,286.95],ctrans,1,(40+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 114:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,511.3,287.0],ctrans,1,(41+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 115:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,505.05,287.05],ctrans,1,(42+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 116:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,498.8,287.1],ctrans,1,(43+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 117:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,492.6,287.15],ctrans,1,(44+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 118:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,486.35,287.2],ctrans,1,(45+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 119:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,480.1,287.25],ctrans,1,(46+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 120:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,473.85,287.35],ctrans,1,(47+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 121:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,467.65,287.4],ctrans,1,(48+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 122:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,461.4,287.45],ctrans,1,(49+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 123:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,455.15,287.5],ctrans,1,(50+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 124:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,448.9,287.55],ctrans,1,(51+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 125:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,442.7,287.6],ctrans,1,(52+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 126:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,436.45,287.65],ctrans,1,(53+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 127:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,430.2,287.7],ctrans,1,(54+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 128:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,424.0,287.75],ctrans,1,(55+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 129:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,417.75,287.8],ctrans,1,(56+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 130:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,411.5,287.85],ctrans,1,(57+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 131:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,405.25,287.9],ctrans,1,(58+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 132:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,399.0,287.95],ctrans,1,(59+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 133:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,392.8,288.0],ctrans,1,(60+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 134:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,386.55,288.05],ctrans,1,(61+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 135:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,380.3,288.1],ctrans,1,(62+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 136:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,374.1,288.15],ctrans,1,(63+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 137:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,367.85,288.2],ctrans,1,(64+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 138:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,361.6,288.25],ctrans,1,(65+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 139:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,355.35,288.3],ctrans,1,(66+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 140:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,349.15,288.4],ctrans,1,(67+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 141:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,342.9,288.45],ctrans,1,(68+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 142:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,336.65,288.5],ctrans,1,(69+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 143:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,330.4,288.55],ctrans,1,(70+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 144:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,324.2,288.6],ctrans,1,(71+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 145:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,317.95,288.65],ctrans,1,(72+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 146:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,311.7,288.7],ctrans,1,(73+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 147:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,305.5,288.75],ctrans,1,(74+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 148:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,299.25,288.8],ctrans,1,(75+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 149:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(76+time)%843,73,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 150:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(0+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 151:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(1+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5709",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5710",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,151,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,151,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 152:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(2+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5711",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,152,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5710",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,151,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,151,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 153:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(3+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,259.35,-118.7],ctrans,1,(0+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 154:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(4+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,259.1,-109.7],ctrans,1,(1+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 155:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(5+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,258.85,-100.7],ctrans,1,(2+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 156:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(6+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,258.6,-91.7],ctrans,1,(3+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 157:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(7+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,258.35,-82.7],ctrans,1,(4+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 158:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(8+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,258.1,-73.7],ctrans,1,(5+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 159:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(9+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,257.85,-64.7],ctrans,1,(6+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 160:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(10+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,257.6,-55.7],ctrans,1,(7+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 161:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(11+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,257.35,-46.7],ctrans,1,(8+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 162:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(12+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,257.1,-37.7],ctrans,1,(9+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 163:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(13+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,256.85,-28.7],ctrans,1,(10+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 164:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(14+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,256.6,-19.7],ctrans,1,(11+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 165:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(15+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,256.35,-10.7],ctrans,1,(12+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 166:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(16+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,256.1,-1.7],ctrans,1,(13+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 167:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(17+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,255.85,7.3],ctrans,1,(0+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 168:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(18+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,255.6,16.3],ctrans,1,(1+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 169:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(19+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,255.35,25.3],ctrans,1,(2+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 170:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(20+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,255.1,34.3],ctrans,1,(3+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 171:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(21+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,254.85,43.3],ctrans,1,(4+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 172:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(22+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,254.6,52.3],ctrans,1,(5+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 173:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(23+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,254.35,61.3],ctrans,1,(6+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 174:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(24+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,254.1,70.3],ctrans,1,(7+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 175:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(25+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.85,79.3],ctrans,1,(8+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 176:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(26+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.6,88.3],ctrans,1,(9+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 177:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(27+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite4635",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,253.35,97.3],ctrans,1,(10+time)%14,153,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 178:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(28+time)%38,150,time);
			place("shape4669",canvas,ctx,[0.05,0.0,0.0,0.05,68.0,45.0],ctrans,1,0,0,time);
			place("sprite5643",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,253.35,97.3],ctrans,1,(0+time)%1,178,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5712",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,153,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5713",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,178,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,178,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 179:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(29+time)%38,150,time);
			place("sprite5643",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,253.35,97.3],ctrans,1,(0+time)%1,178,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5714",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,179,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5713",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,178,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,178,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 180:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(30+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,253.35,97.3],ctrans,1,(0+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 181:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(31+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,83.65],ctrans,1,(1+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 182:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(32+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,69.95],ctrans,1,(2+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 183:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(33+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,56.3],ctrans,1,(3+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 184:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(34+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,42.65],ctrans,1,(4+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 185:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(35+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,28.95],ctrans,1,(5+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 186:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(36+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,15.3],ctrans,1,(6+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 187:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(37+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,1.65],ctrans,1,(7+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 188:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(0+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-12.05],ctrans,1,(8+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 189:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(1+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-25.7],ctrans,1,(9+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 190:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(2+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-39.35],ctrans,1,(10+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 191:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(3+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-53.05],ctrans,1,(11+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 192:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(4+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-66.7],ctrans,1,(12+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 193:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(5+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-80.35],ctrans,1,(13+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 194:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(6+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-94.05],ctrans,1,(0+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 195:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(7+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-107.7],ctrans,1,(1+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 196:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(8+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-121.35],ctrans,1,(2+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 197:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(9+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.05999908447265625,0.0,0.0,0.05999908447265625,253.35,-135.05],ctrans,1,(3+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 198:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(10+time)%38,150,time);
			place("sprite4635",canvas,ctx,[0.059999847412109376,0.0,0.0,0.059999847412109376,253.35,-148.7],ctrans,1,(4+time)%14,180,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 199:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(11+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5715",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,180,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 200:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(12+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5717",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,200,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 201:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(13+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5718",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,201,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 202:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(14+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5719",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,202,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 203:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(15+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5720",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,203,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 204:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(16+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5721",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,204,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5716",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,199,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,199,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 205:
			place("shape5706",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,293.0,288.85],ctrans,1,(17+time)%38,150,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5722",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,205,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5723",canvas,ctx,[0.05,0.0,0.0,0.05,691.95,428.4],ctrans,1,0,205,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,205,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{image4152,shape3279,sprite3280,shape3282,shape3284,image3308,image2380,shape2381,image2382,shape2383,image2384,shape2385,image2386,shape2387,image2388,shape2389,image2390,shape2391,image2392,shape2393,image2394,shape2395,image2396,shape2397,image2398,shape2399,image2400,shape2401,image2402,shape2403,image2404,shape2405,image2406,shape2407,image2408,shape2409,image2410,shape2411,image2412,shape2413,image2414,shape2415,image2416,shape2417,image2418,shape2419,image2420,shape2421,image2422,shape2423,image2424,shape2425,image2426,shape2427,image2428,shape2429,image2430,shape2431,image2432,shape2433,image2434,shape2435,image2436,shape2437,image2438,shape2439,image2440,shape2441,image2442,shape2443,image2444,shape2445,image2446,shape2447,image2448,shape2449,sprite2450,sprite5643,image4632,shape4633,shape4634,sprite4635,image2592,shape2593,image2594,shape2595,image2596,shape2597,image2598,shape2599,image2600,shape2601,image2602,shape2603,image2604,shape2605,image2606,shape2607,image2608,shape2609,image2610,shape2611,image2612,shape2613,image2614,shape2615,image2616,shape2617,image2618,shape2619,image2620,shape2621,shape4669,image2622,shape2623,image2624,shape2625,image2626,shape2627,image2628,shape2629,image2630,shape2631,image2632,image5705,shape2633,shape5706,image2634,shape2635,text5707,image2636,text5708,shape2637,text5709,image2638,text5710,shape2639,text5711,image2640,text5712,shape2641,text5713,image2642,text5714,shape2643,text5715,image2644,text5716,shape2645,text5717,image2646,text5718,shape2647,text5719,image2648,text5720,shape2649,text5721,image2650,text5722,shape2651,text5723,image2652,shape2653,image2654,shape2655,image2656,shape2657,image2658,shape2659,image2660,shape2661,image2665,shape2666,image2667,shape2668,image2669,shape2670,image2671,shape2672,image2673,shape2674,image2675,shape2676,image2677,shape2678,image2679,shape2680,image2681,shape2682,image2683,shape2684,image2685,shape2686,image2687,shape2688,image2689,shape2690,image2691,shape2692,image2693,shape2694,image2695,shape2696,image2697,shape2698,image2699,shape2700,image2701,shape2702,image2703,shape2704,image2705,shape2706,image2707,shape2708,image2709,shape2710,image2711,shape2712,image2713,shape2714,image2715,shape2716,image2717,shape2718,image2719,shape2720,image2721,shape2722,image2723,shape2724,image2725,shape2726,image2727,shape2728,image2729,shape2730,image2731,shape2732,image2733,shape2734,image2735,shape2736,image2737,shape2738,image2739,shape2740,image2741,shape2742,image2743,shape2744,image2745,shape2746,image2747,shape2748,image2749,shape2750,image2751,shape2752,image2753,shape2754,image2755,shape2756,image2757,shape2758,image2759,shape2760,image2761,shape2762,image2763,shape2764,image2765,shape2766,image2767,shape2768,image2769,shape2770,image2771,shape2772,image2773,shape2774,image2775,shape2776,image2777,shape2778,image2779,shape2780,image2781,shape2782,image2783,shape2784,image2785,shape2786,image2787,shape2788,image2789,shape2790,image2791,shape2792,image2793,text3817,shape2794,sprite3818,image2795,shape2796,image2797,shape2798,image2799,shape2800,image2801,shape2802,image2803,shape2804,sprite2805,image2806,shape2807,image2808,shape2809,image2810,shape2811,image2812,shape2813,image2814,shape2815,image2816,shape2817,image2818,shape2819,image2820,shape2821,image2822,shape2823,image2824,shape2825,image2826,shape2827,image2828,shape2829,image2830,shape2831,image2832,shape2833,image2834,shape2835,image2836,shape2837,image2838,shape2839,image2840,shape2841,image2842,shape2843,image2844,shape2845,image2846,shape2847,image2848,shape2849,image2850,shape2851,image2852,shape2853,image2854,shape2855,image2856,shape2857,image2858,shape2859,image2860,shape2861,image2862,shape2863,image2864,shape2865,image2866,shape2867,image2868,shape2869,image2870,shape2871,image2872,shape2873,image2874,shape2875,image2877,shape2878,image2879,shape2880,image2881,shape2882,image2883,shape2884,image2885,shape2886,image2887,shape2888,image2889,shape2890,image2891,shape2892,image2893,shape2894,image2895,shape2896,image2897,shape2898,image2899,shape2900,image2901,shape2902,image2903,shape2904,image2905,shape2906,image2907,shape2908,image2909,shape2910,image2911,shape2912,image2913,shape2914,image2915,shape2916,image2917,shape2918,image2919,shape2920,image2921,shape2922,image2923,shape2924,image2925,shape2926,image2927,shape2928,image2929,shape2930,image2931,shape2932,image2933,shape2934,image2935,shape2936,image2937,shape2938,image2939,shape2940,image2941,shape2942,image2943,shape2944,image2945,shape2946,image2947,shape2948,image2949,shape2950,image2951,shape2952,image2953,shape2954,image2955,shape2956,image2957,shape2958,image2959,shape2960,image2961,shape2962,image2963,shape2964,image2965,shape2966,image2967,shape2968,image2969,shape2970,image2971,shape2972,image2973,shape2974,image2975,shape2976,image2977,shape2978,image2979,shape2980,image2981,shape2982,image2983,shape2984,image2985,shape2986,image2987,shape2988,image2989,shape2990,image2991,shape2992,image2993,shape2994,image2995,shape2996,image2997,shape2998,image2999,shape3000,image3001,shape3002,image3003,shape3004,image3005,shape3006,image3007,shape3008,image3009,shape3010,image3011,shape3012,image3013,shape3014,image3015,shape3016,sprite3017,font982,font3055,shape3062,sprite3063,sprite5724});
await Promise.all([imageObj4152,imageObj3308,imageObj2380,imageObj2382,imageObj2384,imageObj2386,imageObj2388,imageObj2390,imageObj2392,imageObj2394,imageObj2396,imageObj2398,imageObj2400,imageObj2402,imageObj2404,imageObj2406,imageObj2408,imageObj2410,imageObj2412,imageObj2414,imageObj2416,imageObj2418,imageObj2420,imageObj2422,imageObj2424,imageObj2426,imageObj2428,imageObj2430,imageObj2432,imageObj2434,imageObj2436,imageObj2438,imageObj2440,imageObj2442,imageObj2444,imageObj2446,imageObj2448,imageObj4632,imageObj2592,imageObj2594,imageObj2596,imageObj2598,imageObj2600,imageObj2602,imageObj2604,imageObj2606,imageObj2608,imageObj2610,imageObj2612,imageObj2614,imageObj2616,imageObj2618,imageObj2620,imageObj2622,imageObj2624,imageObj2626,imageObj2628,imageObj2630,imageObj2632,imageObj5705,imageObj2634,imageObj2636,imageObj2638,imageObj2640,imageObj2642,imageObj2644,imageObj2646,imageObj2648,imageObj2650,imageObj2652,imageObj2654,imageObj2656,imageObj2658,imageObj2660,imageObj2665,imageObj2667,imageObj2669,imageObj2671,imageObj2673,imageObj2675,imageObj2677,imageObj2679,imageObj2681,imageObj2683,imageObj2685,imageObj2687,imageObj2689,imageObj2691,imageObj2693,imageObj2695,imageObj2697,imageObj2699,imageObj2701,imageObj2703,imageObj2705,imageObj2707,imageObj2709,imageObj2711,imageObj2713,imageObj2715,imageObj2717,imageObj2719,imageObj2721,imageObj2723,imageObj2725,imageObj2727,imageObj2729,imageObj2731,imageObj2733,imageObj2735,imageObj2737,imageObj2739,imageObj2741,imageObj2743,imageObj2745,imageObj2747,imageObj2749,imageObj2751,imageObj2753,imageObj2755,imageObj2757,imageObj2759,imageObj2761,imageObj2763,imageObj2765,imageObj2767,imageObj2769,imageObj2771,imageObj2773,imageObj2775,imageObj2777,imageObj2779,imageObj2781,imageObj2783,imageObj2785,imageObj2787,imageObj2789,imageObj2791,imageObj2793,imageObj2795,imageObj2797,imageObj2799,imageObj2801,imageObj2803,imageObj2806,imageObj2808,imageObj2810,imageObj2812,imageObj2814,imageObj2816,imageObj2818,imageObj2820,imageObj2822,imageObj2824,imageObj2826,imageObj2828,imageObj2830,imageObj2832,imageObj2834,imageObj2836,imageObj2838,imageObj2840,imageObj2842,imageObj2844,imageObj2846,imageObj2848,imageObj2850,imageObj2852,imageObj2854,imageObj2856,imageObj2858,imageObj2860,imageObj2862,imageObj2864,imageObj2866,imageObj2868,imageObj2870,imageObj2872,imageObj2874,imageObj2877,imageObj2879,imageObj2881,imageObj2883,imageObj2885,imageObj2887,imageObj2889,imageObj2891,imageObj2893,imageObj2895,imageObj2897,imageObj2899,imageObj2901,imageObj2903,imageObj2905,imageObj2907,imageObj2909,imageObj2911,imageObj2913,imageObj2915,imageObj2917,imageObj2919,imageObj2921,imageObj2923,imageObj2925,imageObj2927,imageObj2929,imageObj2931,imageObj2933,imageObj2935,imageObj2937,imageObj2939,imageObj2941,imageObj2943,imageObj2945,imageObj2947,imageObj2949,imageObj2951,imageObj2953,imageObj2955,imageObj2957,imageObj2959,imageObj2961,imageObj2963,imageObj2965,imageObj2967,imageObj2969,imageObj2971,imageObj2973,imageObj2975,imageObj2977,imageObj2979,imageObj2981,imageObj2983,imageObj2985,imageObj2987,imageObj2989,imageObj2991,imageObj2993,imageObj2995,imageObj2997,imageObj2999,imageObj3001,imageObj3003,imageObj3005,imageObj3007,imageObj3009,imageObj3011,imageObj3013,imageObj3015].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-72.0,-333.0);}else{ctx.transform(1,0,0,1,-72.0+(clip?.x??0),-333.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite5724(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
