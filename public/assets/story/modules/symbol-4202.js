import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


var imageObj3296 = document.createElement("img");
imageObj3296.src=new URL("../bitmaps/ec533ed3d90aa8271683d689.png",import.meta.url).href;
function image3296(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3296);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4195(ctx,ctrans,frame,ratio,time){
	var pathData="M 3217 -11 L 3217 1369 2197 1369 2197 -11 3217 -11";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2197,-11);
	ctx.transform(1.0588235294117647,0,0,1.0434782608695652,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj2622);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12188 49 L 12188 1549 11168 1549 11168 49 12188 49";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-60,0,0,60,12188,49);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3289);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 10918 20 L 10918 1520 9898 1520 9898 20 10918 20";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(-60,0,0,60,10918,20);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3296);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text4196(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,684.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,894.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([135,111,55,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1011.0,380.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1291.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1431.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1665.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1875.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2085.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2202.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2319.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2646.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2880.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2974.0,380.0);
	font982(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3184.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3301.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3418.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3512.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3629.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3709.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3919.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4036.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4246.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4480.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4714.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4854.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4971.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5088.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5322.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5462.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5696.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5813.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6047.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6281.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6585.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"B",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,591.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,919.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1269.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1503.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1737.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1947.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2181.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2298.0,889.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2602.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2836.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3046.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3256.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3373.0,889.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3630.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3864.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4004.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4238.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4542.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4659.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4776.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5010.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5127.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5337.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5431.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5665.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5899.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6039.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6156.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6273.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6507.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6741.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6858.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6975.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7069.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7303.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7397.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7631.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,153,0,1]));
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
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1620.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1737.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1971.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2111.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2462.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2672.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2906.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3140.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3280.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3397.0,1398.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3631.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3865.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4075.0,1398.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4309.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4659.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4893.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5127.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5244.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5361.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5595.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5829.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6039.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6249.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6366.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6483.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6717.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6834.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6951.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7185.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7419.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7513.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7653.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7770.0,1398.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8004.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8238.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8448.0,1398.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8682.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8916.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9150.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9244.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9338.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9548.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9665.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9899.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10133.0,1398.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10250.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10484.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10624.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10858.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10975.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11092.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11326.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11560.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11770.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11887.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12121.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12355.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12472.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12589.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12823.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13057.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13197.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13314.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function shape4197(ctx,ctrans,frame,ratio,time){
	var pathData="M 939 273 Q 778 320 550 320 322 320 161 273 0 226 0 160 0 94 161 47 322 0 550 0 778 0 939 47 1100 94 1100 160 1100 226 939 273";
	ctx.fillStyle=tocolor(ctrans.apply([129,122,84,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 939 273 Q 778 320 550 320 322 320 161 273 0 226 0 160 0 94 161 47 322 0 550 0 778 0 939 47 1100 94 1100 160 1100 226 939 273 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([129,122,84,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite4198(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4198,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4197",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj3558 = document.createElement("img");
imageObj3558.src=new URL("../bitmaps/45da817ab5f5237e870e20cd.png",import.meta.url).href;
function image3558(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3558);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape4199(ctx,ctrans,frame,ratio,time){
	var pathData="M 1680 1680 L 0 1680 0 0 1680 0 1680 1680";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(105,0,0,105,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3558);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite4200(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4200,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4199",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite4201(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4201,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 26;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("sprite4198",canvas,ctx,[0.600006103515625,0.0,0.0,0.75,591.0,51.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-5440.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 1:
			place("sprite4198",canvas,ctx,[0.7750091552734375,0.0,0.0,0.8000030517578125,494.0,43.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-4576.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 2:
			place("sprite4198",canvas,ctx,[0.9499969482421875,0.0,0.0,0.850006103515625,399.0,35.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-3712.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 3:
			place("sprite4198",canvas,ctx,[1.125,0.0,0.0,0.9000091552734375,301.0,27.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-2848.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 4:
			place("sprite4198",canvas,ctx,[1.29998779296875,0.0,0.0,0.9499969482421875,204.0,19.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1984.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 5:
			place("sprite4198",canvas,ctx,[1.475006103515625,0.0,0.0,1.0,110.0,11.0],ctrans,1,(0+time)%1,0,time);
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 6:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 7:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 8:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 9:
			break;
		case 10:
			break;
		case 11:
			break;
		case 12:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,12,time);
			break;
		case 13:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,12,time);
			break;
		case 14:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,12,time);
			break;
		case 15:
			break;
		case 16:
			break;
		case 17:
			break;
		case 18:
			break;
		case 19:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,19,time);
			break;
		case 20:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,19,time);
			break;
		case 21:
			place("sprite4200",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-1120.0],ctrans,1,(0+time)%1,19,time);
			break;
		case 22:
			break;
		case 23:
			break;
		case 24:
			break;
		case 25:
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

function shape3536(ctx,ctrans,frame,ratio,time){
	var pathData="M 100 0 L 1240 0 1240 1440 100 1440 100 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,100,0);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3083);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 960 850 L 927 847 Q 920 847 910 852 L 890 860 888 853 Q 939 829 967 836 L 971 836 972 838 979 841 987 847 Q 998 828 1005 826 1010 831 1019 832 L 1024 840 Q 1077 843 1093 864 1101 876 1101 915 1101 949 1064 976 L 1058 981 Q 1071 984 1079 992 1091 1003 1091 1042 1091 1078 1069 1110 L 1075 1145 Q 1075 1176 1020 1216 L 979 1242 Q 974 1269 945 1291 924 1320 847 1338 L 841 1340 825 1349 Q 746 1392 635 1392 L 520 1390 515 1390 440 1385 377 1376 352 1367 334 1362 Q 249 1337 230 1315 L 232 1310 Q 257 1328 332 1349 L 366 1358 389 1362 590 1375 696 1359 630 1360 581 1360 532 1362 Q 432 1362 353 1339 287 1319 279 1301 L 247 1294 Q 207 1283 207 1258 L 211 1246 Q 185 1229 185 1212 185 1180 207 1158 L 209 1156 Q 158 1130 158 1100 158 1095 169 1087 180 1080 187 1080 L 179 1092 173 1101 Q 173 1114 175 1105 L 220 1092 232 1090 Q 190 1076 190 1060 190 1054 197 1046 165 1024 165 1011 165 1004 171 996 L 170 989 171 985 Q 125 969 125 950 125 937 144 928 158 920 171 920 187 898 223 880 274 855 340 848 326 860 242 896 180 922 180 950 L 184 965 186 966 211 950 Q 254 928 280 938 L 234 962 211 975 261 990 279 993 292 988 297 995 321 997 325 990 329 998 357 1000 362 1000 349 986 295 985 Q 292 993 292 980 L 294 973 300 972 642 970 814 953 818 952 Q 858 936 872 923 854 908 817 902 L 752 890 755 887 828 899 Q 865 906 882 920 L 885 917 856 900 817 880 817 878 878 899 895 908 Q 905 915 905 925 905 956 791 980 L 766 988 712 1003 788 998 Q 848 981 922 937 L 907 915 Q 937 915 937 940 L 937 946 940 940 974 870 975 869 960 853 960 850 M 889 920 L 884 928 892 923 889 920 M 1005 889 L 1000 896 991 928 954 962 977 960 978 961 982 953 986 955 987 964 986 977 1051 945 Q 1056 953 1056 928 L 1041 913 1050 917 1075 926 1076 916 Q 1076 908 1061 898 L 1021 865 1007 887 1018 898 1008 891 1005 889 M 983 915 L 937 960 939 961 976 927 983 915 M 917 977 L 938 973 927 970 937 962 935 961 928 967 917 977 M 952 964 Q 962 966 967 973 946 990 899 1002 L 910 1009 936 997 935 996 939 995 964 981 968 975 968 973 Q 968 966 960 964 L 953 963 952 964 M 942 972 L 948 970 946 969 942 972 M 1013 979 L 1021 979 1024 974 1013 979 M 1026 977 L 1030 974 1044 965 Q 1035 969 1025 974 L 1026 977 M 160 955 Q 160 937 170 922 L 145 950 160 956 160 955 M 365 986 L 388 999 390 1000 607 988 365 986 M 754 1058 L 755 1058 Q 758 1049 831 1016 L 836 1014 821 1016 758 1032 658 1054 695 1060 739 1059 750 1047 754 1058 M 730 1112 Q 793 1098 847 1072 L 843 1069 745 1098 730 1112 M 613 1110 L 676 1096 610 1104 613 1110 M 617 1060 L 490 1070 Q 361 1070 275 1050 278 1065 314 1081 L 340 1080 523 1093 674 1077 Q 634 1074 617 1060 M 675 1116 L 640 1124 660 1122 675 1116 M 610 1185 L 637 1185 618 1184 609 1185 610 1185 M 640 1202 L 634 1223 740 1198 715 1192 591 1202 595 1223 607 1223 625 1223 640 1202 M 697 1150 L 762 1132 677 1150 613 1162 601 1170 611 1171 697 1150 M 756 1174 L 820 1156 847 1141 810 1133 673 1172 770 1161 763 1170 756 1174 M 748 1196 L 811 1172 783 1180 725 1191 748 1196 M 794 1229 L 712 1249 Q 652 1270 610 1263 L 571 1263 547 1269 605 1270 656 1269 655 1268 660 1267 663 1269 689 1267 Q 744 1252 795 1229 L 794 1229 M 572 1108 L 475 1113 585 1113 572 1108 M 602 1113 L 608 1112 604 1105 578 1107 594 1113 602 1113 M 420 1088 L 341 1091 345 1092 350 1094 448 1095 506 1094 420 1088 M 482 1145 L 430 1145 366 1125 316 1106 260 1097 240 1100 190 1115 188 1118 220 1132 218 1130 220 1128 227 1125 264 1135 Q 283 1121 320 1113 L 323 1112 325 1120 300 1132 288 1139 321 1144 345 1127 349 1126 352 1135 343 1146 450 1150 491 1150 482 1145 M 432 1214 L 390 1218 420 1223 438 1223 432 1214 M 475 1185 L 483 1185 549 1175 556 1173 550 1172 504 1178 475 1185 M 482 1223 L 563 1223 577 1215 564 1202 535 1202 513 1202 464 1209 477 1220 482 1223 M 555 1145 L 500 1145 511 1149 555 1145 M 584 1210 L 586 1202 574 1202 584 1210 M 539 1310 L 569 1310 685 1301 684 1298 576 1298 511 1304 514 1305 539 1310 M 533 1338 L 472 1338 562 1347 567 1347 547 1342 533 1338 M 456 1289 L 459 1290 463 1290 456 1289 M 441 1290 L 442 1288 424 1285 410 1285 399 1285 404 1289 410 1290 441 1290 M 447 1342 L 437 1338 414 1338 447 1342 M 407 1308 L 329 1306 388 1320 446 1320 408 1308 407 1308 M 778 1253 L 836 1237 834 1236 828 1235 790 1249 778 1253 M 752 1277 Q 804 1270 850 1252 L 862 1247 865 1246 863 1245 Q 812 1266 751 1277 L 752 1277 M 731 1358 L 691 1372 Q 744 1366 787 1350 L 737 1356 731 1358 M 789 1304 L 825 1294 842 1289 840 1280 840 1277 779 1298 787 1304 789 1304 M 737 1309 L 778 1305 776 1299 737 1309 M 693 1298 L 693 1300 702 1298 693 1298 M 377 1024 L 329 1018 320 1018 Q 318 1021 318 1017 L 278 1011 269 1017 378 1033 411 1033 387 1027 377 1024 M 255 1050 L 256 1045 255 1045 235 1039 234 1039 255 1051 255 1050 M 234 1003 L 246 1008 250 1006 248 1005 231 1002 234 1003 M 241 1083 L 254 1086 269 1084 213 1055 208 1060 241 1083 M 236 1173 L 215 1195 228 1213 223 1201 Q 223 1192 244 1185 L 250 1184 245 1172 240 1170 236 1173 M 248 1210 L 265 1205 278 1205 258 1192 238 1202 248 1210 M 301 1189 L 284 1185 302 1196 301 1189 M 287 1230 L 318 1242 305 1230 307 1225 346 1247 352 1247 354 1247 Q 323 1234 322 1224 L 321 1223 272 1223 287 1230 M 255 1233 L 243 1227 255 1233 269 1241 266 1239 255 1233 M 393 1167 L 332 1164 368 1168 393 1167 M 340 1202 L 372 1200 343 1197 341 1199 340 1202 M 325 1203 L 326 1201 331 1195 320 1193 325 1203 M 378 1285 Q 284 1281 230 1256 L 224 1253 223 1257 Q 223 1273 254 1281 L 340 1290 382 1290 378 1285 M 1044 1081 Q 1066 1061 1066 1045 1071 1030 1060 1017 1050 1006 1028 1002 L 1027 1003 Q 1022 1028 995 1060 L 999 1064 1003 1071 1007 1071 1010 1068 1012 1066 1013 1072 Q 1031 1074 1044 1081 M 1020 1100 L 1011 1091 1008 1098 1008 1105 1008 1108 1013 1104 1020 1100 M 982 999 Q 978 1014 946 1030 L 952 1033 994 999 982 999 M 972 1044 L 975 1046 981 1037 972 1044 M 922 1050 L 924 1046 920 1049 922 1050 M 940 1034 L 934 1052 Q 950 1056 958 1063 L 961 1066 969 1055 958 1043 945 1041 950 1036 944 1031 943 1032 940 1034 M 941 1067 L 932 1064 925 1063 910 1076 940 1086 941 1086 940 1067 941 1067 M 952 1077 L 946 1070 949 1080 952 1077 M 946 1108 L 922 1134 943 1120 950 1104 946 1108 M 931 1090 L 903 1081 889 1088 880 1097 880 1115 870 1140 877 1142 882 1140 885 1137 937 1093 931 1090 M 969 1102 L 991 1085 984 1073 968 1088 968 1100 968 1102 969 1102 M 891 1004 L 881 1006 840 1035 876 1023 876 1021 880 1021 890 1017 902 1012 891 1004 M 859 1065 L 863 1063 872 1058 857 1064 859 1065 M 857 1085 L 818 1103 846 1095 862 1086 860 1084 857 1085 M 902 1060 L 901 1070 914 1060 906 1058 902 1060 M 868 1145 L 865 1145 850 1155 870 1146 868 1145 M 860 1173 L 876 1164 858 1172 860 1173 M 855 1135 Q 869 1121 870 1104 L 823 1128 855 1135 M 846 1233 L 854 1230 848 1226 837 1231 841 1232 846 1233 M 855 1176 L 854 1175 821 1195 Q 837 1186 855 1176 M 908 1203 L 910 1201 918 1196 904 1199 908 1203 M 898 1209 L 890 1204 854 1223 861 1227 898 1209 M 936 1227 L 935 1223 940 1222 941 1225 949 1221 944 1213 921 1231 921 1233 936 1227 M 955 1219 L 968 1213 964 1192 947 1210 955 1219 M 991 1200 Q 1033 1173 1043 1139 1015 1164 972 1180 L 968 1186 976 1205 977 1208 991 1200 M 932 1266 L 909 1276 891 1287 891 1289 932 1267 932 1266 M 876 1239 L 876 1240 877 1239 876 1239 M 874 1295 L 868 1297 867 1298 872 1296 873 1296 874 1295 M 853 1314 L 836 1318 808 1329 843 1321 853 1314 M 877 1311 L 894 1304 880 1308 877 1311";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
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

function sprite3537(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3537,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3536",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function shape3251(ctx,ctrans,frame,ratio,time){
	var pathData="M 4989 -431 L 4989 1129 3969 1129 3969 -431 4989 -431";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3969,-431);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3219);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3219 = document.createElement("img");
imageObj3219.src=new URL("../bitmaps/8d7148cd1d0d757aca0becc5.png",import.meta.url).href;
function image3219(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 520 340 520 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0384615384615385,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3219);
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

var imageObj3289 = document.createElement("img");
imageObj3289.src=new URL("../bitmaps/7ba6e24399de1ecfb9383d8b.png",import.meta.url).href;
function image3289(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 500 340 500 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.04,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3289);
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

function sprite4202(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(4202,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,-14.95,112.8);
	var clips = [];
	var frame_cnt = 34;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,1,time);
			place("text4196",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,1,time);
			break;
		case 2:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(0+time)%26,3,time);
			break;
		case 4:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(1+time)%26,3,time);
			break;
		case 5:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(2+time)%26,3,time);
			break;
		case 6:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(0+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(0+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(3+time)%26,3,time);
			break;
		case 7:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(1+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(2+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(4+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(3+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(4+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(2+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(4+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(1+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(3+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(4+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(2+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(3+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(4+time)%26,3,time);
			break;
		case 8:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(2+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(3+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(5+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(4+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(5+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(3+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(5+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(2+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(4+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(5+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(3+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(4+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(5+time)%26,3,time);
			break;
		case 9:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(3+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(4+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(6+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(5+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(6+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(4+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(6+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(3+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(5+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(6+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(4+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(5+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(6+time)%26,3,time);
			break;
		case 10:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(4+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(5+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(7+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(6+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(7+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(5+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(7+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(4+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(6+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(7+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(5+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(6+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(7+time)%26,3,time);
			break;
		case 11:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(5+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(6+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(8+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(7+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(8+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(6+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(8+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(5+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(7+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(8+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(6+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(7+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(8+time)%26,3,time);
			break;
		case 12:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(6+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(7+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(9+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(8+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(9+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(7+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(9+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(6+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(8+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(9+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(7+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(8+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(9+time)%26,3,time);
			break;
		case 13:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(7+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(8+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(10+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(9+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(10+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(8+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(10+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(7+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(9+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(10+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(8+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(9+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(10+time)%26,3,time);
			break;
		case 14:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(8+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(9+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(11+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(10+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(11+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(9+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(11+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(8+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(10+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(11+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(9+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(10+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(11+time)%26,3,time);
			break;
		case 15:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(9+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(10+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(12+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(11+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(12+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(10+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(12+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(9+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(11+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(12+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(10+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(11+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(12+time)%26,3,time);
			break;
		case 16:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(10+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(11+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(13+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(12+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(13+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(11+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(13+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(10+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(12+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(13+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(11+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(12+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(13+time)%26,3,time);
			break;
		case 17:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(11+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(12+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(14+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(13+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(14+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(12+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(14+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(11+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(13+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(14+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(12+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(13+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(14+time)%26,3,time);
			break;
		case 18:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(12+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(13+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(15+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(14+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(15+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(13+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(15+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(12+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(14+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(15+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(13+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(14+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(15+time)%26,3,time);
			break;
		case 19:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(13+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(14+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(16+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(15+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(16+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(14+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(16+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(13+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(15+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(16+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(14+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(15+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(16+time)%26,3,time);
			break;
		case 20:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(14+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(15+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(17+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(16+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(17+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(15+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(17+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(14+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(16+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(17+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(15+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(16+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(17+time)%26,3,time);
			break;
		case 21:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(15+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(16+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(18+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(17+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(18+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(16+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(18+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(15+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(17+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(18+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(16+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(17+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(18+time)%26,3,time);
			break;
		case 22:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(16+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(17+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(19+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(18+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(19+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(17+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(19+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(16+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(18+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(19+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(17+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(18+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(19+time)%26,3,time);
			break;
		case 23:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(17+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(18+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(20+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(19+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(20+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(18+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(20+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(17+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(19+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(20+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(18+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(19+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(20+time)%26,3,time);
			break;
		case 24:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(18+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(19+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(21+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(20+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(21+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(19+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(21+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(18+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(20+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(21+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(19+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(20+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(21+time)%26,3,time);
			break;
		case 25:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(19+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(20+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(22+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(21+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(22+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(20+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(22+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(19+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(21+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(22+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(20+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(21+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(22+time)%26,3,time);
			break;
		case 26:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(20+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(21+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(23+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(22+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(23+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(21+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(23+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(20+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(22+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(23+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(21+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(22+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(23+time)%26,3,time);
			break;
		case 27:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(21+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(22+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(24+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(23+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(24+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(22+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(24+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(21+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(23+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(24+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(22+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(23+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(24+time)%26,3,time);
			break;
		case 28:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(22+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(23+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(25+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(24+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(25+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(23+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(25+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(22+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(24+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(25+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(23+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(24+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(25+time)%26,3,time);
			break;
		case 29:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(23+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(24+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(25+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(24+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(23+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(25+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(0+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(24+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(25+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(0+time)%26,3,time);
			break;
		case 30:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(24+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(25+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(25+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(24+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(1+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(25+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(0+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(1+time)%26,3,time);
			break;
		case 31:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(25+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(25+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(2+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(0+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(1+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(2+time)%26,3,time);
			break;
		case 32:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,230.45,193.2],ctrans,1,(0+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,361.45,202.45],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,457.95,203.0],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,266.45,317.2],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,133.45,340.45],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,582.7,159.2],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,634.4,305.2],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,14.95,328.45],ctrans,1,(0+time)%26,6,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,66.95,175.75],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,182.45,245.75],ctrans,1,(3+time)%26,3,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,534.85,263.7],ctrans,1,(1+time)%26,5,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,429.05,328.45],ctrans,1,(2+time)%26,4,time);
			place("sprite4201",canvas,ctx,[0.05,0.0,0.0,0.05,705.1,185.75],ctrans,1,(3+time)%26,3,time);
			break;
		case 33:
			place("shape4195",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3537",canvas,ctx,[0.05,0.0,0.0,0.05,621.45,5.45],ctrans,1,(0+time)%1,0,time);
			place("shape3251",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{image3296,shape4195,text4196,shape4197,sprite4198,image3558,shape4199,sprite4200,sprite4201,image3083,shape3279,font3055,shape3536,sprite3280,sprite3537,shape3251,image3219,font982,image3289,image2622,sprite4202});
await Promise.all([imageObj3296,imageObj3558,imageObj3083,imageObj3219,imageObj3289,imageObj2622].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,14.95,-112.8);}else{ctx.transform(1,0,0,1,14.95+(clip?.x??0),-112.8+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite4202(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
