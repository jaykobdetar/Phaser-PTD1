import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


function shape1713(ctx,ctrans,frame,ratio,time){
	var pathData="M -634 -914 L -392 -246 Q -352 -585 -156 -800 -166 508 404 800 -315 769 -396 100 L -401 21 Q -778 -416 -634 -914";
	ctx.fillStyle=tocolor(ctrans.apply([0,204,51,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite1714(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1714,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape1713",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape1715(ctx,ctrans,frame,ratio,time){
	var pathData="M 371 -1148 Q 392 -1153 445 -1182 494 -1207 516 -1211 L 619 -1211 639 -1197 729 -1195 Q 741 -1186 744 -1171 L 745 -1144 Q 745 -1112 703 -987 L 659 -860 Q 666 -860 683 -870 699 -879 710 -879 L 726 -875 729 -849 Q 729 -831 701 -770 L 677 -722 679 -722 Q 772 -729 968 -768 1080 -790 1227 -770 1197 -723 1006 -625 795 -519 753 -481 L 875 -479 1037 -501 1066 -497 1069 -475 Q 1069 -454 860 -319 L 861 -317 Q 863 -314 868 -313 L 1195 -311 Q 1222 -309 1243 -296 1266 -283 1266 -266 1266 -232 1192 -193 1089 -145 1033 -110 L 1234 -106 1298 -91 Q 1337 -77 1337 -59 1337 -44 1232 24 1116 99 1049 99 L 1029 98 1021 111 1021 113 1258 142 Q 1321 159 1321 199 1321 241 1290 241 L 1157 229 Q 1084 216 1045 195 L 1026 198 Q 1037 238 1177 284 1345 339 1385 368 1455 419 1499 467 1550 524 1550 565 1550 618 1282 673 1014 728 955 691 L 996 731 Q 1006 747 1006 770 L 1002 787 982 809 901 805 833 797 886 877 Q 911 910 911 947 911 974 892 999 862 1038 797 1038 740 1038 676 1003 606 966 580 963 L 580 1003 606 1078 Q 619 1113 619 1142 L 617 1169 Q 613 1180 599 1180 568 1180 504 1119 L 430 1047 Q 428 1099 441 1132 453 1167 453 1196 L 449 1243 Q 440 1275 406 1275 384 1275 318 1209 246 1135 232 1129 220 1147 213 1210 206 1268 177 1299 157 1284 116 1217 81 1160 23 1134 L -15 1276 Q -48 1382 -95 1382 -172 1382 -208 1292 -236 1186 -259 1156 L -290 1231 Q -302 1258 -322 1277 L -324 1280 -329 1282 -344 1291 -363 1284 -373 1272 -356 1261 -403 1201 Q -465 1118 -487 1118 -557 1118 -627 1205 L -673 1264 Q -695 1291 -707 1291 -726 1291 -724 1287 L -794 972 -874 1071 Q -943 1156 -975 1156 -1015 1156 -1022 1117 L -1022 1075 Q -1022 1042 -995 962 -963 872 -959 850 L -959 845 Q -969 849 -1076 924 -1172 991 -1196 991 L -1220 987 -1220 944 Q -1212 906 -1162 833 L -1093 726 -1093 715 Q -1157 713 -1254 781 -1352 849 -1373 849 L -1401 845 -1401 809 -1309 643 Q -1243 527 -1243 519 -1243 506 -1247 502 L -1259 494 -1456 483 Q -1471 478 -1471 470 L -1470 457 Q -1470 430 -1362 388 -1222 333 -1180 304 -1246 273 -1419 258 -1549 247 -1549 202 -1549 184 -1361 65 -1256 0 -1191 -31 L -1204 -29 -1210 -30 -1217 -37 -1204 -48 Q -1155 -46 -1138 -58 L -1117 -75 -1099 -78 -1170 -82 Q -1174 -88 -1174 -104 L -1153 -104 Q -1177 -112 -1195 -135 -1217 -163 -1217 -187 L -1184 -191 Q -1152 -191 -1096 -170 L -1020 -147 Q -1062 -187 -1181 -280 -1280 -366 -1280 -423 L -1251 -427 Q -1216 -427 -1125 -372 -1032 -312 -1012 -303 -1042 -363 -1173 -475 -1321 -602 -1367 -664 -1264 -660 -1126 -613 -985 -565 -833 -553 L -910 -735 Q -958 -846 -1003 -916 L -1003 -952 -963 -952 -847 -880 Q -760 -829 -675 -802 -663 -826 -644 -965 -616 -1092 -561 -1092 -547 -1092 -479 -974 -412 -856 -375 -856 L -308 -991 Q -233 -1133 -186 -1163 L -131 -1163 Q -110 -1136 -107 -1084 L -107 -998 Q 15 -1179 190 -1311 390 -1460 390 -1299 L 385 -1236 374 -1152 371 -1148 M 469 -550 Q 441 -535 418 -498 396 -464 363 -449 L 366 -453 Q 435 -620 450 -695 462 -755 462 -905 L 461 -1027 Q 372 -991 342 -905 321 -800 300 -749 L 231 -598 Q 184 -514 122 -449 L 119 -451 Q 170 -563 170 -729 L 169 -806 Q 161 -881 126 -881 84 -881 15 -737 -69 -560 -75 -553 L -75 -617 -59 -729 Q -51 -789 -51 -836 L -52 -901 -71 -905 Q -129 -905 -181 -789 L -235 -640 -240 -692 Q -248 -731 -273 -731 L -289 -726 -296 -722 -298 -647 Q -298 -592 -280 -527 -262 -461 -262 -452 -262 -400 -286 -352 L -310 -426 Q -327 -479 -348 -479 -367 -479 -377 -411 L -377 -408 -423 -484 Q -525 -632 -645 -696 L -645 -631 Q -562 -411 -531 -284 L -570 -344 Q -604 -384 -651 -384 L -683 -380 -685 -340 Q -685 -315 -644 -204 L -598 -80 -637 -109 Q -671 -131 -711 -131 L -740 -122 Q -736 -78 -702 -31 -671 12 -636 19 -673 24 -795 110 -921 199 -921 215 L -920 226 Q -893 240 -783 252 L -671 262 Q -669 259 -669 279 -669 301 -708 325 L -795 370 Q -921 433 -921 495 -921 529 -913 541 L -865 542 Q -852 532 -797 512 L -730 490 -685 490 -685 494 Q -698 522 -742 592 -779 658 -779 696 L -778 730 -730 731 -651 684 -543 624 -543 625 -549 760 Q -541 850 -462 850 -451 850 -390 789 -330 727 -317 727 -295 727 -232 802 L -158 888 -107 888 Q -92 864 -55 775 -47 781 -3 849 33 904 60 904 103 904 120 823 138 742 186 742 224 742 280 788 336 834 366 834 380 834 401 767 425 693 441 680 463 699 482 699 L 502 696 509 692 508 675 501 668 516 668 525 651 Q 514 619 444 557 L 348 467 752 503 1148 534 1227 534 1231 533 Q 1235 530 1235 517 1235 474 986 372 716 270 674 250 L 690 245 782 235 Q 830 228 841 210 L 840 202 824 191 Q 581 164 536 142 563 124 621 91 643 79 643 64 L 639 47 627 42 501 30 529 19 Q 550 12 681 -20 801 -56 801 -83 801 -106 688 -119 576 -131 497 -119 521 -140 554 -157 572 -167 572 -181 L 572 -198 552 -202 Q 540 -202 475 -178 L 375 -149 378 -155 Q 417 -195 452 -314 486 -424 486 -486 L 482 -516 469 -550";
	ctx.fillStyle=tocolor(ctrans.apply([0,181,33,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 469 -550 L 482 -516 486 -486 Q 486 -424 452 -314 417 -195 378 -155 L 375 -149 475 -178 Q 540 -202 552 -202 L 572 -198 572 -181 Q 572 -167 554 -157 521 -140 497 -119 576 -131 688 -119 801 -106 801 -83 801 -56 681 -20 550 12 529 19 L 501 30 627 42 639 47 643 64 Q 643 79 621 91 563 124 536 142 581 164 824 191 L 840 202 841 210 Q 830 228 782 235 L 690 245 674 250 Q 716 270 986 372 1235 474 1235 517 1235 530 1231 533 L 1227 534 1148 534 752 503 348 467 444 557 Q 514 619 525 651 L 516 668 501 668 508 675 509 692 502 696 482 699 Q 463 699 441 680 425 693 401 767 380 834 366 834 336 834 280 788 224 742 186 742 138 742 120 823 103 904 60 904 33 904 -3 849 -47 781 -55 775 -92 864 -107 888 L -158 888 -232 802 Q -295 727 -317 727 -330 727 -390 789 -451 850 -462 850 -541 850 -549 760 L -543 625 -543 624 -651 684 -730 731 -778 730 -779 696 Q -779 658 -742 592 -698 522 -685 494 L -685 490 -730 490 -797 512 Q -852 532 -865 542 L -913 541 Q -921 529 -921 495 -921 433 -795 370 L -708 325 Q -669 301 -669 279 -669 259 -671 262 L -783 252 Q -893 240 -920 226 L -921 215 Q -921 199 -795 110 -673 24 -636 19 -671 12 -702 -31 -736 -78 -740 -122 L -711 -131 Q -671 -131 -637 -109 L -598 -80 -644 -204 Q -685 -315 -685 -340 L -683 -380 -651 -384 Q -604 -384 -570 -344 L -531 -284 Q -562 -411 -645 -631 L -645 -696 Q -525 -632 -423 -484 L -377 -408 -377 -411 Q -367 -479 -348 -479 -327 -479 -310 -426 L -286 -352 Q -262 -400 -262 -452 -262 -461 -280 -527 -298 -592 -298 -647 L -296 -722 -289 -726 -273 -731 Q -248 -731 -240 -692 L -235 -640 -181 -789 Q -129 -905 -71 -905 L -52 -901 -51 -836 Q -51 -789 -59 -729 L -75 -617 -75 -553 Q -69 -560 15 -737 84 -881 126 -881 161 -881 169 -806 L 170 -729 Q 170 -563 119 -451 L 122 -449 Q 184 -514 231 -598 L 300 -749 Q 321 -800 342 -905 372 -991 461 -1027 L 462 -905 Q 462 -755 450 -695 435 -620 366 -453 L 363 -449 Q 396 -464 418 -498 441 -535 469 -550";
	ctx.fillStyle=tocolor(ctrans.apply([0,255,214,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite1716(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1716,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape1715",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite1717(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(1717,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,78.25,115.85);
	var clips = [];
	var frame_cnt = 10;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[-0.024999237060546874,0.0433013916015625,-0.0433013916015625,-0.024999237060546874,60.15,-27.5],ctrans,1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 1:
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[0.048253631591796874,-0.01294097900390625,0.01294097900390625,0.048253631591796874,50.0,-35.25],ctrans.merge(new tools.sourceCxform(31,31,31,0,225,225,225,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 2:
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[-0.043300628662109375,-0.02485809326171875,0.02485809326171875,-0.043300628662109375,39.95,-42.95],ctrans.merge(new tools.sourceCxform(63,63,63,0,192,192,192,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 3:
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[0.01294097900390625,0.048253631591796874,-0.048253631591796874,0.01294097900390625,29.8,-50.8],ctrans.merge(new tools.sourceCxform(94,94,94,0,161,161,161,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 4:
			place("sprite1716",canvas,ctx,[0.017742156982421875,0.0,0.0,0.017742156982421875,2.1,-11.8],ctrans,1,(0+time)%1,4,time);
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[0.024999237060546874,-0.0433013916015625,0.0433013916015625,0.024999237060546874,19.7,-58.5],ctrans.merge(new tools.sourceCxform(125,125,125,0,131,131,131,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 5:
			place("sprite1716",canvas,ctx,[0.02354888916015625,0.0,0.0,0.02354888916015625,2.1,-11.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,192)),1,(0+time)%1,4,time);
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[0.006363677978515625,-0.04957122802734375,0.04957122802734375,0.006363677978515625,3.9,-18.65],ctrans.merge(new tools.sourceCxform(63,63,63,0,192,192,192,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 6:
			place("sprite1716",canvas,ctx,[0.0293548583984375,0.0,0.0,0.0293548583984375,2.1,-11.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,128)),1,(0+time)%1,4,time);
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[-0.01294097900390625,-0.04829559326171875,0.04829559326171875,-0.01294097900390625,-11.9,21.2],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,256)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 7:
			place("sprite1716",canvas,ctx,[0.035161590576171874,0.0,0.0,0.035161590576171874,2.1,-11.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,64)),1,(0+time)%1,4,time);
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[-0.01294097900390625,-0.0482513427734375,0.0482513427734375,-0.01294097900390625,-11.9,32.2],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,128)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 8:
			place("sprite1716",canvas,ctx,[0.040967559814453124,0.0,0.0,0.040967559814453124,2.1,-11.8],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,4,time);
			var oldctx = ctx;
			var fcanvas = createCanvas(canvas.width,canvas.height);			var fctx = fcanvas.getContext("2d");
			enhanceContext(fctx);
			fctx.applyTransforms(ctx._matrix);
			ctx = fctx;
			place("sprite1714",canvas,ctx,[-0.01294097900390625,-0.04829559326171875,0.04829559326171875,-0.01294097900390625,-11.9,43.2],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,0,time);
			fcanvas = Filters.glow(fcanvas,fcanvas.getContext("2d"),17.0,17.0,1.046875,[0,255,0,1.0],false,false,1);
			ctx = oldctx;
			var ms=ctx._matrix;
			ctx.setTransform(1,0,0,1,0,0);
			ctx.drawImage(fcanvas,0,0);
			ctx.applyTransforms(ms);
			break;
		case 9:
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{shape1713,sprite1714,shape1715,sprite1716,sprite1717});
await Promise.all([].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-78.25,-115.85);}else{ctx.transform(1,0,0,1,-78.25+(clip?.x??0),-115.85+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite1717(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
