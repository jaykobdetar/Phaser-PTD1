import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


var imageObj3075 = document.createElement("img");
imageObj3075.src=new URL("../bitmaps/06afbf85a1defe9446ef3b41.png",import.meta.url).href;
function image3075(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3075);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3076(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 621 -459 621 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3075);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3077(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3077,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3076",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape5125(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -750 L 510 -750 510 750 -510 750 -510 -750";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-750);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3745);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5126(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5126,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5125",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3083 = document.createElement("img");
imageObj3083.src=new URL("../bitmaps/c2d5a264076de39561316430.png",import.meta.url).href;
function image3083(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 380 480 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3083);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3595 = document.createElement("img");
imageObj3595.src=new URL("../bitmaps/e2c605fadedae0d7416bb5bb.png",import.meta.url).href;
function image3595(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3595);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3091(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 567 -675 567 621 -459 621 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3083);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3092(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3092,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3091",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
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

function shape4641(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 513 -675 513 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3180);
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

function sprite4642(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4642,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

function shape5686(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -690 L 510 -690 510 690 -510 690 -510 -690";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-690);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2620);
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

function sprite5687(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5687,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5686",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3127 = document.createElement("img");
imageObj3127.src=new URL("../bitmaps/b0023985bd73369eabe3b2b0.png",import.meta.url).href;
function image3127(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3127);
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

function shape3128(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 513 -675 513 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3127);
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

function sprite3129(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3129,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3128",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

function text5694(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font3055(ctx,"V",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,334.0,380.0);
	font3055(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,568.0,380.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,802.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,896.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1130.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1364.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1481.0,380.0);
	font3055(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1785.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1879.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1996.0,380.0);
	font3055(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2206.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2323.0,380.0);
	font3055(ctx,"-",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2463.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2580.0,380.0);
	font3055(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2860.0,380.0);
	font3055(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3094.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3328.0,380.0);
	font3055(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3468.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3585.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3702.0,380.0);
	font3055(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3936.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4170.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4287.0,380.0);
	font3055(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4521.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4755.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4872.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4989.0,380.0);
	font3055(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5083.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5317.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5434.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5668.0,380.0);
	font3055(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5902.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6136.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6230.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6464.0,380.0);
	font3055(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6674.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6791.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6908.0,380.0);
	font3055(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7235.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7469.0,380.0);
	font3055(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7609.0,380.0);
	font3055(ctx,"y",textColor);
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

function text5695(ctx,ctrans,frame,ratio,time){
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

function text5696(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1222.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1549.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1783.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2017.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2321.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2438.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2648.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2882.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3116.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3233.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3443.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3677.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3911.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4005.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4239.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4356.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4590.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4824.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5035.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5152.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5269.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5386.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5666.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5900.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6134.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6391.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6625.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6859.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6953.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7047.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7257.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7374.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7748.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7982.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8099.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8216.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8450.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8684.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8801.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9011.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9128.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9268.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9502.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9736.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9970.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10204.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10414.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10531.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10648.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10882.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10999.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11116.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11350.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11560.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11677.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11911.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12145.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12285.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12519.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12636.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12753.0,380.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13033.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13267.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13384.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13501.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13711.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13945.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,381.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,475.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,569.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,686.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,920.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1622.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1739.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1973.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2090.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2207.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2441.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2745.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2862.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2979.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3213.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3307.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3541.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3775.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3985.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4102.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4219.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4453.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4570.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4804.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5038.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5155.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5389.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5623.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5717.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5951.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6068.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6185.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6419.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6536.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6770.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7004.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7121.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7355.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7589.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7706.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7823.0,889.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8173.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8407.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8711.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8828.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9062.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9202.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9436.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9670.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,1398.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,1398.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1807.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1924.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2041.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2392.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2486.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2720.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2954.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3164.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,1907.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1362.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1596.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1830.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2181.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2298.0,1907.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2695.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2929.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3163.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3280.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3397.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3631.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3771.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4005.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4122.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4332.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4566.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4800.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4917.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5034.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5268.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5362.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5572.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5666.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5900.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6134.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6251.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6485.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6719.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6953.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7187.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7304.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7421.0,1907.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7748.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7982.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8122.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8332.0,1907.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8566.0,1907.0);
	font982(ctx,"!",textColor);
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

function text5697(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,380.0);
	font982(ctx,"D",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1409.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1643.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1877.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1957.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2074.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2191.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2495.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2729.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2869.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3009.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3219.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3336.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3570.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3804.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4038.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4272.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4389.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4506.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4600.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4717.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4834.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4951.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5068.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5185.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5419.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5653.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5770.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5887.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6121.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6331.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6565.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6705.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6915.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7032.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7266.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7360.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7594.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7828.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7945.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8155.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8389.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8623.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8740.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8974.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9208.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9442.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9676.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9793.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9933.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10027.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10261.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10495.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10612.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10729.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10963.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11197.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11337.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11571.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11688.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11805.0,380.0);
	font982(ctx,"F",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12062.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12156.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12296.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12506.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12623.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12740.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12857.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13091.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13325.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13442.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13722.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13956.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,14096.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,14213.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1293.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1410.0,889.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1901.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1995.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2205.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2322.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2790.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3024.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3258.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3492.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3609.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3913.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4007.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4101.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4195.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4312.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4546.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4640.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4734.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4968.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5272.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5389.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5599.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5833.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6067.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6184.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6301.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6535.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6652.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6862.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7096.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7330.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7447.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7587.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7821.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7915.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8032.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8266.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8500.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8804.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9038.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9178.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9295.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9529.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9623.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9740.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9974.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10208.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10418.0,889.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10652.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11002.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11236.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11470.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11587.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11681.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11775.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11985.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12219.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12336.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12453.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12687.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,54.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,288.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,522.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,756.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,990.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1224.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1458.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1598.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1808.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1925.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2159.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2253.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2393.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2627.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2837.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2954.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3071.0,1398.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3351.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3655.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3889.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4006.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4240.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4474.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4614.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4848.0,1398.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4965.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5082.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5433.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5643.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5877.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5994.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6111.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6345.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6579.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7023.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7140.0,1398.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7444.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7538.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7772.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8006.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8240.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8474.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8591.0,1398.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8941.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9175.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9385.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9619.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9713.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9947.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10181.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10391.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10508.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10625.0,1398.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10882.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11116.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11350.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11560.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11677.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11981.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12075.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12169.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12263.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12380.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12497.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12731.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12965.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13175.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,778.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,895.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1129.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1363.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,1907.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1807.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2157.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2391.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2625.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2742.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2976.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3210.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3514.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3631.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3748.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3982.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4099.0,1907.0);
	font982(ctx,"F",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4356.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4450.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4660.0,1907.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4777.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4894.0,1907.0);
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5174.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5408.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5548.0,1907.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5665.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5782.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6016.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6250.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6484.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6601.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6835.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7045.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7279.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7396.0,1907.0);
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7676.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7793.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7933.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8167.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8401.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8635.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8752.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8986.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9103.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9220.0,1907.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9454.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9688.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9898.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10015.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10109.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10319.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10436.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10670.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10904.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11044.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11278.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11395.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11629.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11769.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,2416.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,2416.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,754.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,2416.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1455.0,2416.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1689.0,2416.0);
	font982(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1899.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2016.0,2416.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2296.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2530.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2647.0,2416.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2741.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2975.0,2416.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3209.0,2416.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3326.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3443.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3560.0,2416.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3794.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4028.0,2416.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4238.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4355.0,2416.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4659.0,2416.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4753.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4847.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5058.0,2416.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5292.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5526.0,2416.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5760.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5854.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5971.0,2416.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6181.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6415.0,2416.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6649.0,2416.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6906.0,2416.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7140.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7374.0,2416.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7584.0,2416.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7818.0,2416.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8168.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8402.0,2416.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8636.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8753.0,2416.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8963.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9197.0,2416.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9547.0,2416.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9781.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9875.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10109.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10226.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10460.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10554.0,2416.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10764.0,2416.0);
	font982(ctx,".",textColor);
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

function text5698(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,380.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1409.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1643.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1947.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2368.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2602.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2719.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3023.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3117.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3305.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3422.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3632.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3866.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4100.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4240.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4474.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4708.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4825.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4919.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5153.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5270.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5504.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5621.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5738.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5972.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6206.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6323.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6440.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6674.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6908.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7002.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7236.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7470.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7587.0,380.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7867.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7961.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8195.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8312.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8546.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8780.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9014.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,380.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,614.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,824.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1034.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1151.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1268.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1548.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1782.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2016.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2133.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2367.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2507.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2741.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2975.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3055.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3172.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3289.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3523.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3757.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3851.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4085.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4319.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4436.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4670.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4904.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5114.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5418.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5652.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5886.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6026.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6260.0,889.0);
	font982(ctx,"!",textColor);
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

function text5699(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,380.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1385.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1525.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1759.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1969.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2179.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2296.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2506.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2740.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2974.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3091.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3301.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3535.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3769.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3849.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3966.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4083.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4200.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,380.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,614.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,824.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1034.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1151.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1268.0,889.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1665.0,889.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1992.0,889.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2342.0,889.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2622.0,889.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2926.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3043.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3160.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3277.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3394.0,889.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3698.0,889.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3978.0,889.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4258.0,889.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4492.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4609.0,889.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5006.0,889.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5333.0,889.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5683.0,889.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5963.0,889.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6267.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,0,0,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,614.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,824.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,918.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1152.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,0,0,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1269.0,1398.0);
	font982(ctx,"&",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1549.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,0,0,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1666.0,1398.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1876.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2110.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2460.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2694.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2904.0,1398.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3021.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3138.0,1398.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3488.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3722.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3956.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4260.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4377.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4611.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4728.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4845.0,1398.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5172.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5266.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5500.0,1398.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5710.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5944.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6178.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6412.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6506.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6623.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6740.0,1398.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7044.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7278.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7512.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7629.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7746.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7863.0,1398.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8260.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8494.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8728.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8868.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9102.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9219.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9453.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9593.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9827.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9944.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10248.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10482.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1222.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1456.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1690.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1807.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1924.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2041.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2275.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2392.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2509.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2626.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2743.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2860.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3094.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3211.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3328.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3562.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3679.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3796.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3913.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4030.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4147.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4264.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4381.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4498.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4615.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4732.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4849.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4966.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5083.0,1907.0);
	font982(ctx,".",textColor);
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

function text5700(ctx,ctrans,frame,ratio,time){
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

function text5701(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,380.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,614.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,824.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1034.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1151.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1268.0,380.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1502.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1829.0,380.0);
	font982(ctx,"V",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2109.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2389.0,380.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2623.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2903.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3020.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3417.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3744.0,380.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4094.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4374.0,380.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4678.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4795.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4912.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5029.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5426.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5660.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5894.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6128.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6362.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6596.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6830.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7064.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7298.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7532.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7649.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7766.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7883.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8000.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8117.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8234.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8351.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8655.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8889.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8983.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9100.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9217.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9451.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9568.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9778.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10012.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10222.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10456.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10690.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10924.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11041.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11158.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11275.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11392.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11509.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11589.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11939.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12056.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12290.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12524.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12734.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12944.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13061.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13178.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13295.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,77.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,311.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,615.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,849.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1270.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1364.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1574.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1808.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1925.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2042.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2159.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2463.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2697.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2907.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3024.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3118.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3352.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3469.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3703.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3820.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4054.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4288.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4522.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4639.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4873.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5013.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5247.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5481.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5831.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5948.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6065.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6182.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6299.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,1398.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,1398.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1455.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1689.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1993.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2110.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2344.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2484.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2718.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2952.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3069.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3163.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3373.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3490.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3584.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3818.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3935.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4052.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4286.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4520.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4637.0,1398.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4754.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4988.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5222.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5316.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5550.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5784.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5901.0,1398.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6181.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6275.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6509.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6626.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6860.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7094.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7328.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7445.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7585.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7679.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7913.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8147.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8264.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,380.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,614.0,1907.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,824.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1034.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1151.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1268.0,1907.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1548.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1782.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1992.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2109.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2226.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2343.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2577.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2811.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2928.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3022.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3232.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3349.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3583.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3677.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3911.0,1907.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4121.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4331.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4425.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4659.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4893.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5010.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5127.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5361.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5595.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5712.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5946.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6180.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6297.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6531.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6648.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6952.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7046.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7163.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7397.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7514.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7748.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7842.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8052.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8169.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8379.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8613.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8753.0,1907.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8963.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9197.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9431.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9548.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9758.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9875.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9992.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10109.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10413.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10647.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10764.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11068.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11302.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11536.0,1907.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11616.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11733.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11850.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12084.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,2416.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,2416.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,2416.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,522.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,756.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,873.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,990.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1224.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1341.0,2416.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1691.0,2416.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1925.0,2416.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2135.0,2416.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2369.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2486.0,2416.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2580.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2697.0,2416.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2814.0,2416.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2931.0,2416.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3165.0,2416.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3305.0,2416.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3539.0,2416.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3773.0,2416.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4007.0,2416.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4241.0,2416.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4358.0,2416.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4475.0,2416.0);
	font982(ctx,".",textColor);
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

function text5702(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([224,159,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,287.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,661.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,871.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,988.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1105.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1502.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1736.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1830.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1924.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2041.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2275.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2509.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2743.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2977.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3187.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3397.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3514.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3608.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3725.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3842.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4146.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4240.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4334.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4428.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4545.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4779.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5013.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5130.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5364.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5598.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5715.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5832.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6066.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6183.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6393.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6627.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6861.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6978.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7095.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7492.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7726.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7843.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8147.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8241.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8335.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8429.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8546.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8756.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8896.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9130.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9364.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9481.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9715.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9832.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10066.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10183.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10417.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10511.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10721.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10955.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11095.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11305.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11399.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11633.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11867.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11984.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12288.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12522.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12616.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12710.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12944.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13061.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13271.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13505.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,872.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1293.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1527.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1644.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1878.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1995.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2112.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2346.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2580.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2697.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2814.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3048.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3282.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3376.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3610.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3844.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3961.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4241.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4335.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4569.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4686.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4920.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5154.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5388.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5505.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5622.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5902.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6136.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6370.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6487.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6791.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6885.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6979.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7073.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7190.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7424.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7658.0,889.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7868.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8102.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8219.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8336.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8570.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8687.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8921.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9155.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9272.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9389.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9623.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9717.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9927.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10044.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10278.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10372.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10606.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10840.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11074.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,1398.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,1398.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1784.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1878.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1972.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2206.0,1398.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2416.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2650.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2767.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2861.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3095.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3212.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3422.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3656.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3890.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([224,183,79,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,310.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,544.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,684.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,918.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1035.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1269.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1503.0,1907.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1783.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2017.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2111.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2205.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2439.0,1907.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2649.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2883.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3000.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3094.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3328.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3445.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3795.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4029.0,1907.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4146.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4263.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4567.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4801.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5035.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5152.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5386.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5620.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5714.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5808.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6042.0,1907.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6252.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6486.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6696.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6813.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6907.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7141.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7258.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7468.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7702.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7936.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8053.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8170.0,1907.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8450.0,1907.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8730.0,1907.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8964.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9081.0,1907.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9361.0,1907.0);
	font982(ctx,"V",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9641.0,1907.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9921.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10038.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10155.0,1907.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10412.0,1907.0);
	font982(ctx,"!",textColor);
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

function text5703(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,323.0,362.0);
	font3055(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,590.0,362.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,813.0,362.0);
	font3055(ctx,"d",textColor);
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

var imageObj4698 = document.createElement("img");
imageObj4698.src=new URL("../bitmaps/5b65fc742e990ac7edf944ad.png",import.meta.url).href;
function image4698(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 420 500 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4698);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
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

function shape4699(ctx,ctrans,frame,ratio,time){
	var pathData="M -567 -675 L 567 -675 567 675 -567 675 -567 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-567,-675);
	ctx.transform(1.0476190476190477,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4698);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
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

function sprite4700(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4700,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4699",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

var imageObj2662 = document.createElement("img");
imageObj2662.src=new URL("../bitmaps/df7350e2c26c29950d5d67cc.png",import.meta.url).href;
function image2662(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 440 520 440 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2662);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape2663(ctx,ctrans,frame,ratio,time){
	var pathData="M -594 -702 L 594 -702 594 702 -594 702 -594 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-594,-702);
	ctx.transform(1.0454545454545454,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2662);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite2664(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2664,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 38;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape2593",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape2595",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape2597",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape2599",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,40.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape2601",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,13.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape2603",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,120.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape2605",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,127.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape2607",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,187.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape2609",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,187.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape2611",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,127.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape2613",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape2615",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape2617",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape2619",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape2621",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape2623",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape2625",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-13.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape2627",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape2629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape2631",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape2633",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape2635",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape2637",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape2639",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 24:
			place("shape2641",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 25:
			place("shape2643",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 26:
			place("shape2645",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 27:
			place("shape2647",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,39.0],ctrans,1,0,0,time);
			break;
		case 28:
			place("shape2649",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,39.0],ctrans,1,0,0,time);
			break;
		case 29:
			place("shape2651",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-22.0],ctrans,1,0,0,time);
			break;
		case 30:
			place("shape2653",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,16.0],ctrans,1,0,0,time);
			break;
		case 31:
			place("shape2655",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-22.0],ctrans,1,0,0,time);
			break;
		case 32:
			place("shape2657",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,16.0],ctrans,1,0,0,time);
			break;
		case 33:
			place("shape2659",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-22.0],ctrans,1,0,0,time);
			break;
		case 34:
			place("shape2661",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,16.0],ctrans,1,0,0,time);
			break;
		case 35:
			place("shape2663",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 36:
			place("shape2663",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 37:
			place("shape2663",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4204 = document.createElement("img");
imageObj4204.src=new URL("../bitmaps/32f1c83cb31fd961dd09284e.png",import.meta.url).href;
function image4204(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 360 520 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4204);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3180 = document.createElement("img");
imageObj3180.src=new URL("../bitmaps/85bee8236f7a567e018e13b2.png",import.meta.url).href;
function image3180(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 360 540 360 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0555555555555556,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4205(ctx,ctrans,frame,ratio,time){
	var pathData="M 1020 1560 L -60 1560 -60 0 1020 0 1020 1560";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-60,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4204);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4206(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4206,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4205",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3735 = document.createElement("img");
imageObj3735.src=new URL("../bitmaps/eb660d34fa67f27fb55e1be3.png",import.meta.url).href;
function image3735(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3735);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4767(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -750 L 510 -750 510 750 -510 750 -510 -750";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-750);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3735);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4768(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4768,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4767",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3745 = document.createElement("img");
imageObj3745.src=new URL("../bitmaps/6e4f1ee9d8fabd1dc7faf8b2.png",import.meta.url).href;
function image3745(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3745);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3752(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -750 L 510 -750 510 690 -510 690 -510 -750";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-750);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3245);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3753(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3753,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3752",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3245 = document.createElement("img");
imageObj3245.src=new URL("../bitmaps/ef54d63db582c411fb60aa04.png",import.meta.url).href;
function image3245(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3245);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3758 = document.createElement("img");
imageObj3758.src=new URL("../bitmaps/a386be1e3c1da2e558d0140d.png",import.meta.url).href;
function image3758(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3758);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3759(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -750 L 510 -750 510 690 -510 690 -510 -750";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-750);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3758);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3760(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3760,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3759",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4791 = document.createElement("img");
imageObj4791.src=new URL("../bitmaps/a0511367f617e68741de56fb.png",import.meta.url).href;
function image4791(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 340 520 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4791);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4792(ctx,ctrans,frame,ratio,time){
	var pathData="M 1020 0 L 1020 1560 0 1560 0 0 1020 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-60,0,0,60,1020,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4791);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4793(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4793,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4796 = document.createElement("img");
imageObj4796.src=new URL("../bitmaps/614939f3d8600b76978d2d36.png",import.meta.url).href;
function image4796(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 340 560 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4796);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4797(ctx,ctrans,frame,ratio,time){
	var pathData="M 1020 0 L 1020 1680 0 1680 0 0 1020 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-60,0,0,60,1020,0);
	ctx.transform(1.0588235294117647,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4796);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj4798 = document.createElement("img");
imageObj4798.src=new URL("../bitmaps/6ab29c2f9a041247f1153b8e.png",import.meta.url).href;
function image4798(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 560 340 560 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4798);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4799(ctx,ctrans,frame,ratio,time){
	var pathData="M 1020 0 L 1020 1680 0 1680 0 0 1020 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-60,0,0,60,1020,0);
	ctx.transform(1.0588235294117647,0,0,1.0357142857142858,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4798);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4800(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4800,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 24;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape4797",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape4799",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape4792",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3777 = document.createElement("img");
imageObj3777.src=new URL("../bitmaps/d8453174e8ee28c856a3efa9.png",import.meta.url).href;
function image3777(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 380 480 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3777);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4289(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4289,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4801 = document.createElement("img");
imageObj4801.src=new URL("../bitmaps/97d672664a7bea556cd63764.png",import.meta.url).href;
function image4801(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 340 540 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4801);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3778(ctx,ctrans,frame,ratio,time){
	var pathData="M -510 -720 L 630 -720 630 720 -510 720 -510 -720";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-510,-720);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3777);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4802(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4801);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3779(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3779,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3778",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj4803 = document.createElement("img");
imageObj4803.src=new URL("../bitmaps/7479498be66dd9471fe1a729.png",import.meta.url).href;
function image4803(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 340 540 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4804(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4805(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4805,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 24;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape4802",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape4804",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

function sprite4304(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4304,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
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

function shape4312(ctx,ctrans,frame,ratio,time){
	var pathData="M 1020 1560 L -60 1560 -60 0 1020 0 1020 1560";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-60,0);
	ctx.transform(1.0555555555555556,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3595);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4313(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4313,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4312",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape4314(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 675 -459 675 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3523);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3803 = document.createElement("img");
imageObj3803.src=new URL("../bitmaps/60285555bdaf934576aaacce.png",import.meta.url).href;
function image3803(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4315(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4315,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4314",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape3813(ctx,ctrans,frame,ratio,time){
	var pathData="M 36619 -13000 L 36619 25640 -7301 25640 -7301 -13000 36619 -13000";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-7301,-13000);
	ctx.transform(1.0013661202185793,0,0,1.0015527950310559,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3378);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5351(ctx,ctrans,frame,ratio,time){
	var pathData="M 400 -575 L 400 575 -400 575 -400 -575 400 -575";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-50,0,0,50,400,-575);
	ctx.transform(1.0625,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3949);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5352(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5352,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5351",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

var imageObj4363 = document.createElement("img");
imageObj4363.src=new URL("../bitmaps/95d5bf046deb350c1647ee20.png",import.meta.url).href;
function image4363(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 320 480 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4363);
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

function shape3873(ctx,ctrans,frame,ratio,time){
	var pathData="M -383 -383 L 337 -383 337 427 -383 427 -383 -383";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(45,0,0,45,-383,-383);
	ctx.transform(1.0625,0,0,1.0555555555555556,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3471);
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

function sprite3874(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3874,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3873",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

var imageObj3378 = document.createElement("img");
imageObj3378.src=new URL("../bitmaps/4169b7a4e88ceb62bcd770b9.png",import.meta.url).href;
function image3378(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 12880 14640 12880 14640 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0013661202185793,0,0,1.0015527950310559,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3378);
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

function sprite2876(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(2876,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 38;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape2807",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape2809",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape2811",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape2813",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape2815",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape2817",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape2819",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape2821",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape2823",canvas,ctx,[1.0,0.0,0.0,1.0,5.0,27.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape2825",canvas,ctx,[1.0,0.0,0.0,1.0,-95.0,47.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape2827",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape2829",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape2831",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape2833",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape2835",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape2837",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape2839",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape2841",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape2843",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,27.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape2845",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape2847",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,60.0],ctrans,1,0,0,time);
			break;
		case 24:
			place("shape2849",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,60.0],ctrans,1,0,0,time);
			break;
		case 25:
			place("shape2851",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-40.0],ctrans,1,0,0,time);
			break;
		case 26:
			place("shape2853",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-80.0],ctrans,1,0,0,time);
			break;
		case 27:
			place("shape2855",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-40.0],ctrans,1,0,0,time);
			break;
		case 28:
			place("shape2857",canvas,ctx,[1.0,0.0,0.0,1.0,19.0,-80.0],ctrans,1,0,0,time);
			break;
		case 29:
			place("shape2859",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-80.0],ctrans,1,0,0,time);
			break;
		case 30:
			place("shape2861",canvas,ctx,[1.0,0.0,0.0,1.0,-7.0,-8.0],ctrans,1,0,0,time);
			break;
		case 31:
			place("shape2863",canvas,ctx,[1.0,0.0,0.0,1.0,-7.0,-8.0],ctrans,1,0,0,time);
			break;
		case 32:
			place("shape2865",canvas,ctx,[1.0,0.0,0.0,1.0,40.0,53.0],ctrans,1,0,0,time);
			break;
		case 33:
			place("shape2867",canvas,ctx,[1.0,0.0,0.0,1.0,20.0,23.0],ctrans,1,0,0,time);
			break;
		case 34:
			place("shape2869",canvas,ctx,[1.0,0.0,0.0,1.0,40.0,53.0],ctrans,1,0,0,time);
			break;
		case 35:
			place("shape2871",canvas,ctx,[1.0,0.0,0.0,1.0,20.0,23.0],ctrans,1,0,0,time);
			break;
		case 36:
			place("shape2873",canvas,ctx,[1.0,0.0,0.0,1.0,40.0,53.0],ctrans,1,0,0,time);
			break;
		case 37:
			place("shape2875",canvas,ctx,[1.0,0.0,0.0,1.0,20.0,23.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj5439 = document.createElement("img");
imageObj5439.src=new URL("../bitmaps/954a7d46b11997c5fa85b8e7.png",import.meta.url).href;
function image5439(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 420 540 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5439);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3391 = document.createElement("img");
imageObj3391.src=new URL("../bitmaps/e9fea97d4ced5d67ead2b90f.png",import.meta.url).href;
function image3391(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 340 460 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3391);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5440(ctx,ctrans,frame,ratio,time){
	var pathData="M 687 -909 L 687 549 -447 549 -447 -909 687 -909";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-53.99993896484375,0,0,53.99993896484375,687,-909);
	ctx.transform(1.0476190476190477,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5439);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3392(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 567 -459 567 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3391);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5441(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5441,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5440",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

var imageObj3949 = document.createElement("img");
imageObj3949.src=new URL("../bitmaps/5a257bbd990f017c6fd76e4f.png",import.meta.url).href;
function image3949(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 460 320 460 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3949);
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

function shape5485(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -675 L 432 -675 432 621 -432 621 -432 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-675);
	ctx.transform(1.0625,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4363);
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

function sprite5491(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5491,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5485",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

var imageObj3471 = document.createElement("img");
imageObj3471.src=new URL("../bitmaps/ef022c8164afbd1fc85b8719.png",import.meta.url).href;
function image3471(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 360 320 360 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0555555555555556,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3471);
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

function shape5530(ctx,ctrans,frame,ratio,time){
	var pathData="M -432 -675 L 486 -675 486 621 -432 621 -432 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-432,-675);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3803);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5531(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5531,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5530",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3522 = document.createElement("img");
imageObj3522.src=new URL("../bitmaps/28de2a3d8b62d445b1dd2c00.png",import.meta.url).href;
function image3522(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3522);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3523 = document.createElement("img");
imageObj3523.src=new URL("../bitmaps/09fe391cf6e723dbf53a10e4.png",import.meta.url).href;
function image3523(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3523);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
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

var imageObj3576 = document.createElement("img");
imageObj3576.src=new URL("../bitmaps/79fba228087fe3829616ffc3.png",import.meta.url).href;
function image3576(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 340 540 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3576);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3577(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3576);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3578(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 675 -459 675 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3522);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3579 = document.createElement("img");
imageObj3579.src=new URL("../bitmaps/9c7e72769a616cb35b340398.png",import.meta.url).href;
function image3579(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 540 340 540 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3579);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5628 = document.createElement("img");
imageObj5628.src=new URL("../bitmaps/c8c13e3e1f7f0316d81e4a6a.png",import.meta.url).href;
function image5628(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 340 520 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5628);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3580(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 783 -459 783 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.037037037037037,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3579);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5629(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -702 L 459 -702 459 702 -459 702 -459 -702";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-702);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5628);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3581(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3581,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 24;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape3577",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape3580",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape3578",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite5630(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5630,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5629",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite5704(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5704,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,365.05,650.0);
	var clips = [];
	var frame_cnt = 19;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,207.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(0+time)%38,0,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,0,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5694",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,0,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5695",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 1:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,207.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(1+time)%38,0,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,0,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5694",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,0,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5695",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 2:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,207.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(2+time)%38,0,time);
			place("sprite4289",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,2,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5696",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,2,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5695",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 3:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(3+time)%38,0,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5697",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,337.0],ctrans,1,0,3,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5695",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 4:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(4+time)%38,0,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,395.45,484.95],ctrans,1,(0+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,359.3,532.6],ctrans,1,(0+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,484.3,531.6],ctrans,1,(0+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5698",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,4,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5695",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,0,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 5:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(0+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,395.45,484.95],ctrans,1,(1+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,359.3,532.6],ctrans,1,(1+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,484.3,531.6],ctrans,1,(1+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 6:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(1+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,414.25,460.05],ctrans,1,(2+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,349.45,509.2],ctrans,1,(2+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,469.5,508.3],ctrans,1,(2+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 7:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(2+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,433.05,435.15],ctrans,1,(3+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,339.55,485.8],ctrans,1,(3+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,454.7,485.0],ctrans,1,(3+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 8:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(3+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,451.85,410.25],ctrans,1,(4+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,329.7,462.4],ctrans,1,(4+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,439.95,461.7],ctrans,1,(4+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 9:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(4+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,470.65,385.35],ctrans,1,(5+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,319.8,439.0],ctrans,1,(5+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,425.15,438.4],ctrans,1,(5+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 10:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(5+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,489.45,360.5],ctrans,1,(6+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,309.95,415.65],ctrans,1,(6+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,410.35,415.15],ctrans,1,(6+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 11:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(6+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,508.25,335.6],ctrans,1,(7+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,300.1,392.25],ctrans,1,(7+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,395.55,391.85],ctrans,1,(7+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 12:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(7+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,527.05,310.7],ctrans,1,(8+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,290.2,368.85],ctrans,1,(8+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,380.75,368.55],ctrans,1,(8+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 13:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(8+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,545.85,285.8],ctrans,1,(9+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,280.35,345.45],ctrans,1,(9+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,366.0,345.25],ctrans,1,(9+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 14:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(9+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,564.65,260.9],ctrans,1,(10+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,270.45,322.05],ctrans,1,(10+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,351.2,321.95],ctrans,1,(10+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 15:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(10+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4800",canvas,ctx,[0.05,0.0,0.0,0.05,583.45,236.0],ctrans,1,(11+time)%24,4,time);
			place("sprite4805",canvas,ctx,[0.05,0.0,0.0,0.05,260.6,298.65],ctrans,1,(11+time)%24,4,time);
			place("sprite3581",canvas,ctx,[0.05,0.0,0.0,0.05,336.4,298.65],ctrans,1,(11+time)%24,4,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 16:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[0.05,0.0,0.0,0.05,422.9,229.05],ctrans,1,(0+time)%1,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(11+time)%38,5,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4793",canvas,ctx,[0.05,0.0,0.0,0.05,583.45,236.0],ctrans,1,(0+time)%1,16,time);
			place("sprite4315",canvas,ctx,[0.05,0.0,0.0,0.05,260.6,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite4304",canvas,ctx,[0.05,0.0,0.0,0.05,336.4,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5699",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,5,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5700",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,16,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,16,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 17:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite4642",canvas,ctx,[-0.05,0.0,0.0,0.05,425.6,229.05],ctrans,1,(0+time)%1,17,time);
			place("sprite2876",canvas,ctx,[-0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(0+time)%38,17,time);
			place("sprite3092",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,3,time);
			place("sprite5531",canvas,ctx,[0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,0,time);
			place("sprite4313",canvas,ctx,[0.05,0.0,0.0,0.05,583.45,236.0],ctrans,1,(0+time)%1,17,time);
			place("sprite4315",canvas,ctx,[0.05,0.0,0.0,0.05,260.6,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite4304",canvas,ctx,[0.05,0.0,0.0,0.05,336.4,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5701",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,337.0],ctrans,1,0,17,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5700",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,16,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,16,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 18:
			place("shape3813",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3760",canvas,ctx,[0.05,0.0,0.0,0.05,346.85,184.4],ctrans,1,(0+time)%1,0,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,568.95,173.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5441",canvas,ctx,[0.05,0.0,0.0,0.05,673.95,182.95],ctrans,1,(0+time)%1,0,time);
			place("sprite4206",canvas,ctx,[0.05,0.0,0.0,0.05,383.4,125.9],ctrans,1,(0+time)%1,0,time);
			place("sprite3077",canvas,ctx,[0.05,0.0,0.0,0.05,473.9,159.25],ctrans,1,(0+time)%1,0,time);
			place("sprite3779",canvas,ctx,[0.05,0.0,0.0,0.05,612.1,202.8],ctrans,1,(0+time)%1,0,time);
			place("sprite4700",canvas,ctx,[0.05,0.0,0.0,0.05,281.0,176.65],ctrans,1,(0+time)%1,0,time);
			place("sprite5687",canvas,ctx,[0.05,0.0,0.0,0.05,212.15,175.9],ctrans,1,(0+time)%1,0,time);
			place("sprite4768",canvas,ctx,[0.05,0.0,0.0,0.05,526.95,198.1],ctrans,1,(0+time)%1,0,time);
			place("sprite5630",canvas,ctx,[0.05,0.0,0.0,0.05,475.5,208.4],ctrans,1,(0+time)%1,0,time);
			place("sprite5126",canvas,ctx,[0.05,0.0,0.0,0.05,367.9,210.8],ctrans,1,(0+time)%1,0,time);
			place("sprite5352",canvas,ctx,[0.05,0.0,0.0,0.05,317.35,224.35],ctrans,1,(0+time)%1,0,time);
			place("sprite3874",canvas,ctx,[0.05,0.0,0.0,0.05,414.95,125.55],ctrans,1,(0+time)%1,0,time);
			place("sprite3129",canvas,ctx,[-0.05,0.0,0.0,0.05,425.6,229.05],ctrans,1,(0+time)%1,18,time);
			place("sprite2450",canvas,ctx,[-0.05,0.0,0.0,0.05,428.0,284.9],ctrans,1,(0+time)%38,18,time);
			place("sprite4289",canvas,ctx,[-0.05,0.0,0.0,0.05,255.05,224.05],ctrans,1,(0+time)%1,18,time);
			place("sprite5491",canvas,ctx,[-0.05,0.0,0.0,0.05,187.4,217.25],ctrans,1,(0+time)%1,18,time);
			place("sprite4313",canvas,ctx,[0.05,0.0,0.0,0.05,583.45,236.0],ctrans,1,(0+time)%1,17,time);
			place("sprite4315",canvas,ctx,[0.05,0.0,0.0,0.05,260.6,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite4304",canvas,ctx,[0.05,0.0,0.0,0.05,336.4,298.65],ctrans,1,(0+time)%1,16,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5702",canvas,ctx,[0.05,0.0,0.0,0.05,37.0,340.0],ctrans,1,0,18,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5703",canvas,ctx,[0.05,0.0,0.0,0.05,691.95,428.4],ctrans,1,0,18,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,18,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{image3075,shape3076,sprite3077,shape5125,sprite5126,image3083,image3595,shape3091,sprite3092,image2592,shape2593,shape4641,image2594,sprite4642,shape2595,image2596,shape2597,image2598,shape2599,image2600,shape2601,image2602,shape2603,image2604,shape2605,image2606,shape2607,image2608,shape2609,image2610,shape2611,image2612,shape2613,shape5686,image2614,sprite5687,image3127,shape2615,shape3128,image2616,sprite3129,shape2617,image2618,shape2619,image2620,shape2621,text5694,image2622,text5695,shape2623,text5696,image2624,text5697,shape2625,text5698,image2626,shape2627,text5699,image2628,text5700,shape2629,text5701,image2630,text5702,shape2631,text5703,image2632,shape2633,image2634,shape2635,image2636,shape2637,image2638,shape2639,image2640,shape2641,image2642,shape2643,image2644,shape2645,image2646,shape2647,image2648,shape2649,image4698,image2650,shape4699,shape2651,sprite4700,image2652,shape2653,image2654,shape2655,image2656,shape2657,image2658,shape2659,image2660,shape2661,image2662,shape2663,sprite2664,image4204,image3180,shape4205,sprite4206,image3735,shape4767,sprite4768,image3745,shape3752,sprite3753,image3245,image3758,shape3759,sprite3760,image4791,shape4792,sprite4793,image4796,shape4797,image4798,shape4799,sprite4800,image3777,sprite4289,image4801,shape3778,shape4802,sprite3779,image4803,shape4804,sprite4805,shape3279,sprite3280,sprite4304,shape3282,shape3284,shape4312,sprite4313,shape4314,image3803,sprite4315,shape3813,shape5351,sprite5352,text3817,sprite3818,image2806,shape2807,image2808,shape2809,image2810,shape2811,image2812,shape2813,image2814,shape2815,image2816,shape2817,image2818,shape2819,image2820,shape2821,image2822,shape2823,image2824,shape2825,image2826,shape2827,image4363,image2828,shape2829,image2830,shape2831,image2832,shape2833,image2834,shape2835,image2836,shape2837,image2838,shape2839,image2840,shape2841,image2842,shape2843,image2844,shape2845,image2846,shape2847,image2848,shape3873,shape2849,sprite3874,image2850,shape2851,image2852,shape2853,image2854,shape2855,image2856,shape2857,image2858,shape2859,image2860,shape2861,image2862,shape2863,image2864,shape2865,image3378,image2866,shape2867,image2868,shape2869,image2870,shape2871,image2872,shape2873,image2874,shape2875,sprite2876,image5439,image3391,shape5440,shape3392,sprite5441,image2380,shape2381,image2382,shape2383,image2384,shape2385,image2386,shape2387,image2388,shape2389,image2390,shape2391,image2392,shape2393,image2394,shape2395,image2396,shape2397,image2398,shape2399,image2400,shape2401,image2402,shape2403,image2404,shape2405,image2406,shape2407,image2408,shape2409,image2410,shape2411,image2412,image3949,shape2413,shape5485,image2414,shape2415,image2416,shape2417,image2418,shape2419,sprite5491,image2420,shape2421,image2422,shape2423,image2424,shape2425,image2426,shape2427,image2428,shape2429,image2430,shape2431,image2432,shape2433,image2434,shape2435,image2436,shape2437,image2438,shape2439,image2440,shape2441,image2442,shape2443,image2444,shape2445,image2446,image3471,shape2447,image2448,shape2449,sprite2450,shape5530,sprite5531,image3522,image3523,font982,font3055,shape3062,sprite3063,image3576,shape3577,shape3578,image3579,image5628,shape3580,shape5629,sprite3581,sprite5630,sprite5704});
await Promise.all([imageObj3075,imageObj3083,imageObj3595,imageObj2592,imageObj2594,imageObj2596,imageObj2598,imageObj2600,imageObj2602,imageObj2604,imageObj2606,imageObj2608,imageObj2610,imageObj2612,imageObj2614,imageObj3127,imageObj2616,imageObj2618,imageObj2620,imageObj2622,imageObj2624,imageObj2626,imageObj2628,imageObj2630,imageObj2632,imageObj2634,imageObj2636,imageObj2638,imageObj2640,imageObj2642,imageObj2644,imageObj2646,imageObj2648,imageObj4698,imageObj2650,imageObj2652,imageObj2654,imageObj2656,imageObj2658,imageObj2660,imageObj2662,imageObj4204,imageObj3180,imageObj3735,imageObj3745,imageObj3245,imageObj3758,imageObj4791,imageObj4796,imageObj4798,imageObj3777,imageObj4801,imageObj4803,imageObj3803,imageObj2806,imageObj2808,imageObj2810,imageObj2812,imageObj2814,imageObj2816,imageObj2818,imageObj2820,imageObj2822,imageObj2824,imageObj2826,imageObj4363,imageObj2828,imageObj2830,imageObj2832,imageObj2834,imageObj2836,imageObj2838,imageObj2840,imageObj2842,imageObj2844,imageObj2846,imageObj2848,imageObj2850,imageObj2852,imageObj2854,imageObj2856,imageObj2858,imageObj2860,imageObj2862,imageObj2864,imageObj3378,imageObj2866,imageObj2868,imageObj2870,imageObj2872,imageObj2874,imageObj5439,imageObj3391,imageObj2380,imageObj2382,imageObj2384,imageObj2386,imageObj2388,imageObj2390,imageObj2392,imageObj2394,imageObj2396,imageObj2398,imageObj2400,imageObj2402,imageObj2404,imageObj2406,imageObj2408,imageObj2410,imageObj2412,imageObj3949,imageObj2414,imageObj2416,imageObj2418,imageObj2420,imageObj2422,imageObj2424,imageObj2426,imageObj2428,imageObj2430,imageObj2432,imageObj2434,imageObj2436,imageObj2438,imageObj2440,imageObj2442,imageObj2444,imageObj2446,imageObj3471,imageObj2448,imageObj3522,imageObj3523,imageObj3576,imageObj3579,imageObj5628].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-365.05,-650.0);}else{ctx.transform(1,0,0,1,-365.05+(clip?.x??0),-650.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite5704(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
