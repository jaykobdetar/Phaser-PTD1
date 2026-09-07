import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


var imageObj4 = document.createElement("img");
imageObj4.src=new URL("../bitmaps/71bbdb2fe7e2b80699447a83.png",import.meta.url).href;
function image4(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 1760 4180 1760 4180 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0047846889952152,0,0,1.0113636363636365,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5(ctx,ctrans,frame,ratio,time){
	var pathData="M 12540 5280 L 0 5280 0 0 12540 0 12540 5280";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,0,0);
	ctx.transform(1.0047846889952152,0,0,1.0113636363636365,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape6(ctx,ctrans,frame,ratio,time){
	var pathData="M 8269 5692 Q 8139 5760 7956 5760 7773 5760 7642 5692 7513 5625 7513 5530 7513 5434 7642 5367 7773 5300 7956 5300 8139 5300 8269 5367 8399 5434 8399 5530 8399 5625 8269 5692";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,0.29803923]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite7(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(7,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape6",canvas,ctx,[1.0,0.0,0.0,1.0,-7513.0,-5300.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj8 = document.createElement("img");
imageObj8.src=new URL("../bitmaps/2e05f142da37172672f4ec9e.png",import.meta.url).href;
function image8(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj8);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape9(ctx,ctrans,frame,ratio,time){
	var pathData="M 8411 7783 L 8411 9133 7493 9133 7493 7783 8411 7783";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,7493,7783);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj8);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape10(ctx,ctrans,frame,ratio,time){
	var pathData="M 140 -119 Q 195 -70 195 5 195 60 155 111 105 175 20 175 -90 175 -134 86 -155 42 -155 2 -155 -86 -100 -132 -52 -173 20 -169 90 -164 140 -119";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite11(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(11,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape10",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj12 = document.createElement("img");
imageObj12.src=new URL("../bitmaps/378756c2ccfd661daa4909b9.png",import.meta.url).href;
function image12(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 420 420 420 420 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0476190476190477,0,0,1.0476190476190477,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj12);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape13(ctx,ctrans,frame,ratio,time){
	var pathData="M -315 -315 L 315 -315 315 315 -315 315 -315 -315";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(30,0,0,30,-315,-315);
	ctx.transform(1.0476190476190477,0,0,1.0476190476190477,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj12);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite14(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(14,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape13",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape15(ctx,ctrans,frame,ratio,time){
	var pathData="M 500 -500 L 500 500 -500 500 -500 -500 500 -500";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite16(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(16,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape15",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape17(ctx,ctrans,frame,ratio,time){
	var pathData="M 109 -261 L -891 -261 -891 -1261 109 -1261 109 -261 M -6681 -1221 L -6681 -221 -7681 -221 -7681 -1221 -6681 -1221 M -5804 -1241 L -4804 -1241 -4804 -241 -5804 -241 -5804 -1241 M -1808 -1241 L -1808 -241 -2808 -241 -2808 -1241 -1808 -1241 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,153,0,1]));
	ctx.lineWidth=4.8;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite18(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(18,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape17",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite19(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(19,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,28.0,0.0);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite7",canvas,ctx,[0.05,0.0,0.0,0.05,293.2,64.8],ctrans,1,(0+time)%1,0,time);
			place("shape9",canvas,ctx,[0.05,0.0,0.0,0.05,-83.25,-374.55],ctrans,1,0,0,time);
			place("sprite11",canvas,ctx,[0.05,0.0,0.0,0.27674407958984376,-20.25,141.75],ctrans,1,(0+time)%1,0,time);
			place("sprite11",canvas,ctx,[0.049886322021484374,0.0,0.0,0.24697723388671874,610.5,136.75],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,562.5,131.95],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,589.25,126.55],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,567.5,150.95],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,594.0,147.7],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,578.25,116.2],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,574.4,158.05],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,562.5,116.2],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,583.25,166.7],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,554.45,155.95],ctrans,1,(0+time)%1,0,time);
			place("sprite14",canvas,ctx,[0.05,0.0,0.0,0.05,565.4,171.95],ctrans,1,(0+time)%1,0,time);
			place("sprite16",canvas,ctx,[0.05,0.0,0.0,0.05,237.35,229.35],ctrans,1,(0+time)%1,0,time);
			place("sprite16",canvas,ctx,[0.05,0.0,0.0,0.05,387.45,229.35],ctrans,1,(0+time)%1,0,time);
			place("sprite16",canvas,ctx,[0.05,0.0,0.0,0.05,145.5,229.35],ctrans,1,(0+time)%1,0,time);
			place("sprite16",canvas,ctx,[0.05,0.0,0.0,0.05,483.45,229.35],ctrans,1,(0+time)%1,0,time);
			place("sprite18",canvas,ctx,[0.05,0.0,0.0,0.05,502.5,265.85],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{image4,shape5,shape6,sprite7,image8,shape9,shape10,sprite11,image12,shape13,sprite14,shape15,sprite16,shape17,sprite18,sprite19});
await Promise.all([imageObj4,imageObj8,imageObj12].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-28.0,0.0);}else{ctx.transform(1,0,0,1,-28.0+(clip?.x??0),0.0+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite19(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
