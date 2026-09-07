import {createCanvasTools} from '../canvas-tools.js';
export async function createRenderer(canvas){
 let defaultFill,defaultStroke;
 const registry={},scalingGrids={},boundRects={};const tools=createCanvasTools(canvas,registry,scalingGrids,boundRects);
 const {place,cxform,enhanceContext,drawPath,drawMorphPath,tocolor,Filters,BlendModes,createCanvas,concatMatrix,useRatio}=tools;
 const ctx=canvas.getContext('2d');if(!ctx._matrix)enhanceContext(ctx);


var imageObj5146 = document.createElement("img");
imageObj5146.src=new URL("../bitmaps/008ecb80859330754ffca9af.png",import.meta.url).href;
function image5146(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 14060 19200 14060 19200 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0010416666666666,0,0,1.0014224751066856,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5146);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5147(ctx,ctrans,frame,ratio,time){
	var pathData="M 28800 -21090 L 28800 21090 -28800 21090 -28800 -21090 28800 -21090";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,-28800,-21090);
	ctx.transform(1.0010416666666666,0,0,1.0014224751066856,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5146);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5148(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font3055(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,380.0);
	font3055(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,380.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1294.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1528.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1645.0,380.0);
	font3055(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1949.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2043.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2160.0,380.0);
	font3055(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2370.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2487.0,380.0);
	font3055(ctx,"-",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2627.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2744.0,380.0);
	font3055(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3024.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3258.0,380.0);
	font3055(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3468.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3585.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3702.0,380.0);
	font3055(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3982.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4216.0,380.0);
	font3055(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4333.0,380.0);
	font3055(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4473.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4707.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,380.0);
	font3055(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5151.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
}

function text5149(ctx,ctrans,frame,ratio,time){
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

function text5150(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1362.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1572.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1806.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1946.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2156.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2390.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2624.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2858.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3068.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3185.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3489.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3723.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3957.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4074.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4284.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4401.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4518.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4752.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4869.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5103.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5337.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5454.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5688.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5805.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6155.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6389.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6599.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6716.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6950.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7090.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7207.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7324.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7604.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7814.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8048.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8188.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8398.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8632.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8866.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9100.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9310.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9427.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9731.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9965.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10199.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10316.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10526.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10643.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10760.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10994.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11111.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11321.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11555.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11789.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12093.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12210.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12327.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12561.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12795.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12889.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13029.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13146.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13356.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13566.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13660.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13754.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13848.0,380.0);
	font982(ctx,"!",textColor);
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
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,274.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,484.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,601.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,835.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,952.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1256.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1490.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1724.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1818.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2052.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2169.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2403.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2637.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2941.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3058.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3362.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3596.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3736.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3830.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4064.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4181.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4485.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4719.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4836.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4930.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5024.0,889.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5234.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5468.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5585.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5679.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5913.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6030.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6147.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6264.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6381.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6461.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6671.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6788.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7022.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7139.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7443.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7677.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7911.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8005.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8239.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8356.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8590.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8824.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9128.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9245.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9549.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9783.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9993.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10110.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10227.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10461.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10578.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10788.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11022.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11256.0,889.0);
	font982(ctx,"!",textColor);
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
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1152.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1620.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1830.0,1398.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1947.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2275.0,1398.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2355.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2565.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2682.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2916.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3033.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3127.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3221.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3338.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3455.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3549.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3783.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3900.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4134.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4368.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4508.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4602.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4812.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4929.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5046.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5280.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5397.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5631.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5865.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5982.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6192.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6286.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6520.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6754.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6848.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7082.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7316.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7433.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7550.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7784.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8018.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8135.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8252.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8462.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8696.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8930.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9164.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9281.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9398.0,1398.0);
	font982(ctx,"*",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9562.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9866.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9960.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10194.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10404.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10521.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10825.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10919.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11153.0,1398.0);
	font982(ctx,"k",textColor);
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
	font982(ctx,"F",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1456.0,1907.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1760.0,1907.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2040.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2157.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2274.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2391.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2508.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2625.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2859.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3093.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3210.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3304.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3538.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3772.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3982.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4099.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4216.0,1907.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4613.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4847.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4964.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5314.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5548.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5782.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6016.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6133.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6227.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6344.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6461.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6578.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6812.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6929.0,1907.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7233.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7467.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7561.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7795.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8029.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8263.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8497.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function text5151(ctx,ctrans,frame,ratio,time){
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

function text5152(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1620.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1854.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2088.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2205.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2322.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2439.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2790.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3000.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3094.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3304.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3398.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3515.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3632.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3749.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3983.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4217.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4334.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4661.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4895.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5245.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5479.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5596.0,380.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5900.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6134.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6274.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6508.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6742.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6882.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6999.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7116.0,380.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7373.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7607.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7841.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7958.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8192.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8426.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8660.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8894.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9034.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9151.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9501.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9735.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9969.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10086.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10203.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10413.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10530.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10764.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10904.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11138.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,889.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1292.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1526.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1643.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1760.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1994.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2228.0,889.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2462.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2696.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2930.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3047.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3164.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3281.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3398.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3632.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3866.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4100.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4334.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4451.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4568.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4685.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4919.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5153.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5363.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5480.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5784.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5878.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5972.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6066.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6183.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6417.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6651.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6768.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7002.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7236.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7470.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7704.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7821.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8055.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8289.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8593.0,889.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8710.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8827.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9131.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9365.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9482.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9716.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9950.0,889.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10160.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10394.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10511.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10628.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10862.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10979.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11119.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11353.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11563.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11773.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12007.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12241.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12358.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12475.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12709.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12943.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13060.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13294.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13504.0,889.0);
	font982(ctx,"m",textColor);
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
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,522.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,756.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,990.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1130.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1247.0,1398.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1364.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1504.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1738.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2088.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2205.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2555.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2649.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2883.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3117.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3234.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3444.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3678.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3912.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4029.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4169.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4403.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4497.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4614.0,1398.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4731.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4825.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4965.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5175.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5292.0,1398.0);
	font982(ctx,".",textColor);
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
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1362.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1596.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1830.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2274.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2368.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2602.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2836.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2953.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3187.0,1907.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3304.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3421.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3538.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3772.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4006.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4123.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4357.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4567.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4917.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5034.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5128.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5362.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5596.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5830.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6064.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6204.0,1907.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6321.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6438.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6555.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6789.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6883.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7093.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7210.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7327.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7421.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7771.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8005.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8122.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8239.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8356.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8660.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8754.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8848.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8942.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9059.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9293.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9527.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9644.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9878.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10112.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10206.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10440.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10534.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10768.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11002.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11119.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11329.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11563.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11797.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function shape5153(ctx,ctrans,frame,ratio,time){
	var pathData="M 13229 2942 L 13929 2942 13929 3642 13229 3642 13229 2942";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,13229,2942);
	ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3308);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14212 1389 L 14212 2089 13512 2089 13512 1389 14212 1389";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,13512,1389);
	ctx.transform(1.0714285714285714,0,0,1.0714285714285714,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3308);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5154 = document.createElement("img");
imageObj5154.src=new URL("../bitmaps/5790dc6e98f58f099bf4a85d.png",import.meta.url).href;
function image5154(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 380 280 380 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5154);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5155(ctx,ctrans,frame,ratio,time){
	var pathData="M -350 -475 L 350 -475 350 475 -350 475 -350 -475";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,-350,-475);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5154);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5156 = document.createElement("img");
imageObj5156.src=new URL("../bitmaps/8b7b1fdc359cbf618c04754f.png",import.meta.url).href;
function image5156(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 380 280 380 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5156);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5157(ctx,ctrans,frame,ratio,time){
	var pathData="M -350 -475 L 350 -475 350 475 -350 475 -350 -475";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,-350,-475);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5156);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5158(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5158,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 12;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5155",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape5155",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape5155",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape5155",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape5155",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape5157",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function text5159(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,889.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1713.0,889.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1993.0,889.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2297.0,889.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2554.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2671.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2788.0,889.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3045.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3162.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3279.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3396.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3513.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3630.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3747.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3864.0,889.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4261.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4378.0,889.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4612.0,889.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4846.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4963.0,889.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5267.0,889.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5547.0,889.0);
	font982(ctx,"P",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5827.0,889.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6084.0,889.0);
	font982(ctx,"U",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6388.0,889.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6692.0,889.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6972.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7089.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7369.0,889.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7696.0,889.0);
	font982(ctx,"U",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8000.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8117.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8234.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8351.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8468.0,889.0);
	font982(ctx,"!",textColor);
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
	font982(ctx,"?",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2275.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2392.0,1398.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2742.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2976.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3210.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3327.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3444.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3794.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4028.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4145.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4379.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4613.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4847.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5175.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5409.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5526.0,1398.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5923.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6157.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6391.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6508.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6625.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6859.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7093.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7210.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7420.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7654.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7888.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8005.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8355.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8589.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8823.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9057.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,217.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,451.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,545.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,755.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,872.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,966.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1176.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1293.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1410.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1644.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1878.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1995.0,1907.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2112.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2206.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2346.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2556.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2673.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2790.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2907.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3001.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3351.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3585.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3702.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3819.0,1907.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3899.0,1907.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4109.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4343.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4460.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4670.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4904.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5138.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5372.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5489.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5699.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5933.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6167.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function text5160(ctx,ctrans,frame,ratio,time){
}

function sprite5161(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5161,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 10;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 1:
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-21.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 2:
			place("sprite5114",canvas,ctx,[0.7942962646484375,0.0,0.0,0.75,-100.0,527.0],ctrans,1,(0+time)%1,2,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-96.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 3:
			place("sprite5114",canvas,ctx,[0.6358489990234375,0.0,0.0,0.5989990234375,-100.0,527.0],ctrans,1,(0+time)%1,2,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-171.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 4:
			place("sprite5114",canvas,ctx,[0.4774017333984375,0.0,0.0,0.447998046875,-100.0,527.0],ctrans,1,(0+time)%1,2,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-246.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 5:
			place("sprite5114",canvas,ctx,[0.6358489990234375,0.0,0.0,0.5989990234375,-100.0,528.0],ctrans,1,(0+time)%1,2,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-186.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 6:
			place("sprite5114",canvas,ctx,[0.7942962646484375,0.0,0.0,0.75,-100.0,527.0],ctrans,1,(0+time)%1,2,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-126.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 7:
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-66.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 8:
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,-6.0],ctrans,1,(0+time)%1,0,time);
			break;
		case 9:
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,54.0],ctrans,1,(0+time)%1,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj5162 = document.createElement("img");
imageObj5162.src=new URL("../bitmaps/ca201187ae334e6df4eb13bb.png",import.meta.url).href;
function image5162(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 380 280 380 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5162);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5163(ctx,ctrans,frame,ratio,time){
	var pathData="M -350 -475 L 350 -475 350 475 -350 475 -350 -475";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,-350,-475);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5162);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5164 = document.createElement("img");
imageObj5164.src=new URL("../bitmaps/3ac72da5260a990c0c7587ed.png",import.meta.url).href;
function image5164(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 380 280 380 280 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5164);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5165(ctx,ctrans,frame,ratio,time){
	var pathData="M -350 -475 L 350 -475 350 475 -350 475 -350 -475";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(50,0,0,50,-350,-475);
	ctx.transform(1.0714285714285714,0,0,1.0526315789473684,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5164);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite5166(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5166,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 12;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5163",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape5163",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape5163",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape5163",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape5163",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape5165",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function text5167(ctx,ctrans,frame,ratio,time){
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

function text5168(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1505.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1622.0,380.0);
	font982(ctx,"j",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1716.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1950.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2160.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2277.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2394.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2604.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2838.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3188.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3422.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3539.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3773.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4007.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4217.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4427.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4544.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4661.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4801.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5035.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5385.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5502.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5619.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5853.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6087.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6204.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6321.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6555.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6672.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6906.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7046.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7280.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7397.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7514.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7841.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8075.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8309.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8426.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8636.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8870.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9104.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9244.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9361.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9478.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9618.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9852.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10202.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10319.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10553.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10787.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11091.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11208.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11325.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11559.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11676.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11910.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12144.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12261.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12495.0,380.0);
	font982(ctx,"x",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12705.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12939.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13149.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13266.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1129.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1363.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1503.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1737.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1854.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1994.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2228.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2438.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2648.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2882.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2976.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3210.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3444.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3561.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3678.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3912.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4146.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4263.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4567.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4801.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4941.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5035.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5269.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5386.0,889.0);
	font982(ctx,"j",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5480.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5714.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5924.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6041.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6158.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6252.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6346.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6556.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6790.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6907.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7117.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7351.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7585.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7702.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7936.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8076.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8310.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8427.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8661.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8895.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9199.0,889.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9316.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9433.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9643.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9877.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10111.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10228.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10462.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10602.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10836.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10953.0,889.0);
	font982(ctx,"q",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11187.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11421.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11515.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11632.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11866.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11983.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12100.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12334.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12568.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12685.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12919.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13153.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13293.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13527.0,889.0);
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
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1222.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1456.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1807.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1947.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2181.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2298.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2508.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2742.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2976.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3093.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3303.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3537.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3747.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3841.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4075.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4309.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4426.0,1398.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4776.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5010.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5314.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5431.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5665.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5805.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6039.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6273.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6390.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6694.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6788.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6882.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6976.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7093.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7303.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7420.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7514.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7608.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7702.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7819.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8053.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8287.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8404.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8638.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8778.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9012.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9246.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9480.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9714.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9831.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9925.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10159.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10276.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10510.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10627.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10837.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11071.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11305.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11445.0,1398.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,1907.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1738.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1972.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2276.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2393.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2627.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2767.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3001.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3235.0,1907.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3469.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3586.0,1907.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3913.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4147.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4264.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4498.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4592.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4942.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5059.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5176.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5293.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5527.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5761.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5878.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5972.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6089.0,1907.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6169.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6379.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6496.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6706.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6940.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7290.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7524.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7758.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7992.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8226.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8436.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8553.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8787.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8881.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9091.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9325.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9442.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9536.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9770.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9887.0,1907.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10097.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10331.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10565.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10682.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10916.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function text5169(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([248,167,31,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,170.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,404.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,848.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1082.0,380.0);
	font982(ctx,"J",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1292.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1619.0,380.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1923.0,380.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2180.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2507.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2624.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2951.0,380.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3301.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3628.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3745.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3862.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3979.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4096.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4213.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4330.0,380.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4727.0,380.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5007.0,380.0);
	font982(ctx,"N",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5311.0,380.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5568.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5685.0,380.0);
	font982(ctx,"T",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5942.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6269.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6386.0,380.0);
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6713.0,380.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7040.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1505.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1622.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1856.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2090.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2324.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2404.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2521.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2638.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2778.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3012.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3362.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3596.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3946.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4180.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4414.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4554.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4671.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4881.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5115.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5349.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5466.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5583.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5817.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6051.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6191.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6425.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6542.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6659.0,889.0);
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
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1479.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1713.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1947.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2181.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2298.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2415.0,1398.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([204,204,204,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,708.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,942.0,1907.0);
	font982(ctx,"W",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1339.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1573.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1783.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1900.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2134.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2274.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2508.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2625.0,1907.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2835.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3069.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3303.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3420.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3654.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3888.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4028.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4262.0,1907.0);
	font982(ctx,"?",textColor);
	ctx.restore();
}

function text5170(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1505.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1585.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1935.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2052.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2286.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2520.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2660.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2894.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3011.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3128.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3362.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3479.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3689.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3923.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4133.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4367.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4484.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4694.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4928.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5162.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5279.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5396.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5536.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5770.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6120.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6237.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6587.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6797.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7007.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7241.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7335.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7452.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7569.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7686.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8036.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8246.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8363.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8597.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8831.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9041.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9158.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9275.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9485.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9719.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9813.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9930.0,380.0);
	font982(ctx,".",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10047.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10164.0,380.0);
	font982(ctx,"U",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10468.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10702.0,380.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10819.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11053.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11193.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11310.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11544.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11778.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12012.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12129.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12363.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12457.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12667.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12784.0,380.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12901.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13018.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13252.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13486.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,77.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,217.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,311.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,731.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,965.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1760.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1877.0,889.0);
	font982(ctx,"M",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2227.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2461.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2765.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2882.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3116.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3256.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3490.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3724.0,889.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3841.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3958.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4192.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4426.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4660.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4777.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5011.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5105.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5199.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5316.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5433.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5550.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5690.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5924.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6274.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6508.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6858.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7092.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7326.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7466.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7583.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7677.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7887.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8004.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8121.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8355.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8589.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8706.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8823.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9173.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9383.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9500.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9617.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9851.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9968.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10202.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10342.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10576.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10693.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10903.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11137.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11231.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11348.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11465.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11675.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11909.0,889.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12119.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12353.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12587.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12704.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13054.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13288.0,889.0);
	font982(ctx,".",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"S",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,591.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,825.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1059.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1433.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,1398.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1784.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2018.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2368.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2485.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2602.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2836.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2953.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3187.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3421.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3515.0,1398.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3749.0,1398.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3866.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3983.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4217.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4451.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4568.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4685.0,1398.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4802.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4896.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5036.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5246.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5363.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5480.0,1398.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5597.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5714.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5948.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6182.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6416.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6650.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6767.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6977.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7211.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7445.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7562.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7679.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7913.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8030.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8334.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8568.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8802.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9012.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9246.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9480.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9597.0,1398.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9877.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10017.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10111.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10321.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10555.0,1398.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10635.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10845.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10962.0,1398.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11196.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11430.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11640.0,1398.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11874.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12224.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12458.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12692.0,1398.0);
	font982(ctx,".",textColor);
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
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1199.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1784.0,1907.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1994.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2228.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2345.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2579.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2813.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2930.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3024.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3258.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3492.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3726.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3843.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4147.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4381.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4615.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4732.0,1907.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4812.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5022.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5139.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5373.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5607.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5701.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5935.0,1907.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6169.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6286.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6520.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6754.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6871.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7105.0,1907.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7339.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7456.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7573.0,1907.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7690.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7807.0,1907.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8111.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8205.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8299.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8393.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8510.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8744.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8978.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9072.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9306.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9423.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9540.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9774.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10008.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function text5171(ctx,ctrans,frame,ratio,time){
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
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1246.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1480.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1574.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1808.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2042.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2136.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2253.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2370.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2674.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2908.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3025.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3329.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3423.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3517.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3611.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3728.0,380.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3962.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4196.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4313.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4547.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4781.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4921.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5038.0,380.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5272.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5506.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5716.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5833.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5950.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6067.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6301.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6418.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6652.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6886.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6980.0,380.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7214.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7331.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7541.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7775.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8009.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,889.0);
	font982(ctx,"O",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1715.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1949.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2183.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2300.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2417.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2651.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2745.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2979.0,889.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3213.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3330.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3540.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3774.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4008.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4125.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4475.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4709.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4919.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5036.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5153.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5363.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5597.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5831.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6135.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6252.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6346.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6556.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6673.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6790.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7024.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7258.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7375.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7492.0,889.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7702.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7936.0,889.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8170.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8310.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8427.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8661.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8895.0,889.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9105.0,889.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9339.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9689.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9923.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10157.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10274.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10508.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10742.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10976.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11056.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11173.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11290.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11500.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11617.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11851.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12085.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12319.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12436.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12670.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12787.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12997.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13231.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13465.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13699.0,889.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13909.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,662.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,756.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,990.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1200.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1317.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1434.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1784.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2018.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2135.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2252.0,1398.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2369.0,1398.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2486.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2603.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2813.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3047.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3281.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3398.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3608.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3842.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4076.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4193.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4543.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4777.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4894.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5104.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5338.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5688.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5782.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6016.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6250.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6367.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6601.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6835.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7069.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7209.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7326.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7536.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7770.0,1398.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8004.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8144.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8261.0,1398.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8495.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8729.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8939.0,1398.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9173.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9523.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9757.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9991.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10108.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10318.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10552.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10646.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10740.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10857.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10974.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11208.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11442.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11792.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,11909.0,1398.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12143.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12377.0,1398.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12587.0,1398.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12797.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,12914.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13031.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13265.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13382.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13499.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13733.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,13967.0,1398.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,14061.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,1907.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,638.0,1907.0);
	font982(ctx,"é",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,872.0,1907.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1106.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1340.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1434.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1528.0,1907.0);
	font982(ctx,".",textColor);
	ctx.restore();
}

function text5172(ctx,ctrans,frame,ratio,time){
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
	font982(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1269.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1503.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1620.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1737.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1831.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1948.0,380.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2065.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2182.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2276.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2510.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2627.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2707.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2917.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3034.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3268.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3502.0,380.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([120,184,72,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,592.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,826.0,889.0);
	font982(ctx,"b",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1060.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1154.0,889.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1271.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1388.0,889.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1668.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1902.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2112.0,889.0);
	font982(ctx,",",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2229.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2346.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2463.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2697.0,889.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2931.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3048.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3128.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3338.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3455.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3572.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3806.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4040.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4157.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4367.0,889.0);
	font982(ctx,"p",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4601.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4695.0,889.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4835.0,889.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4929.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5046.0,889.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5163.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5280.0,889.0);
	font982(ctx,"F",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5537.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5771.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5865.0,889.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5959.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6193.0,889.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6497.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6614.0,889.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6964.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7198.0,889.0);
	font982(ctx,"!",textColor);
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
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1316.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1667.0,1398.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1747.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1957.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2074.0,1398.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2308.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2542.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2659.0,1398.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2869.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3103.0,1398.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3313.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3547.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3664.0,1398.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3781.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4015.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4249.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4366.0,1398.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4670.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4904.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5044.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5138.0,1398.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5372.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
}

function sprite5173(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5173,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5147",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("sprite4289",canvas,ctx,[1.0,0.0,0.0,1.0,25569.0,-5125.0],ctrans,1,(0+time)%1,0,time);
			place("sprite5166",canvas,ctx,[1.0,0.0,0.0,1.0,23009.0,-6043.0],ctrans,1,(0+time)%12,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

var imageObj5174 = document.createElement("img");
imageObj5174.src=new URL("../bitmaps/c1b970196521b8dd35faaaad.png",import.meta.url).href;
function image5174(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5175 = document.createElement("img");
imageObj5175.src=new URL("../bitmaps/dba4136d07b41e319ffb8564.png",import.meta.url).href;
function image5175(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5176 = document.createElement("img");
imageObj5176.src=new URL("../bitmaps/8cb7d246b76671b1dc5c2c37.png",import.meta.url).href;
function image5176(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5177 = document.createElement("img");
imageObj5177.src=new URL("../bitmaps/82b70b3b202db43ea0ee5c53.png",import.meta.url).href;
function image5177(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5178 = document.createElement("img");
imageObj5178.src=new URL("../bitmaps/61fcbb0c8c9420772c24d963.png",import.meta.url).href;
function image5178(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5179 = document.createElement("img");
imageObj5179.src=new URL("../bitmaps/e20508d47146a6da5d9974f9.png",import.meta.url).href;
function image5179(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5180 = document.createElement("img");
imageObj5180.src=new URL("../bitmaps/497f19ce35405ec9e4db9969.png",import.meta.url).href;
function image5180(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5181 = document.createElement("img");
imageObj5181.src=new URL("../bitmaps/2a2a1a03771707e9a4401205.png",import.meta.url).href;
function image5181(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5182 = document.createElement("img");
imageObj5182.src=new URL("../bitmaps/a24a20aa5591ca5a36209537.png",import.meta.url).href;
function image5182(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5183 = document.createElement("img");
imageObj5183.src=new URL("../bitmaps/b0fc699dc2e2930ab71c022c.png",import.meta.url).href;
function image5183(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5184(ctx,ctrans,frame,ratio,time){
	var pathData="M 40609 17684 L 0 17684 0 0 40609 0 40609 17684";
	ctx.fillStyle=tocolor(ctrans.apply([63,224,183,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 38729 5740 L 38729 6700 37769 6700 37769 5740 38729 5740";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,37769,5740);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39689 5780 L 38729 5780 38729 4820 39689 4820 39689 5780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38729,4820);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 29778 11540 L 28818 11540 28818 10580 29778 10580 29778 11540";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,28818,10580);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 29828 9580 L 30788 9580 30788 10540 29828 10540 29828 9580";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,29828,9580);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 29067 12160 L 30027 12160 30027 13120 29067 13120 29067 12160";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,29067,12160);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27476 10902 L 28436 10902 28436 11862 27476 11862 27476 10902";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27476,10902);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26355 12780 L 25395 12780 25395 11820 26355 11820 26355 12780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25395,11820);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27107 12940 L 27107 13900 26147 13900 26147 12940 27107 12940";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26147,12940);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26075 14696 L 27035 14696 27035 15656 26075 15656 26075 14696";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26075,14696);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27936 13328 L 26976 13328 26976 12368 27936 12368 27936 13328";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26976,12368);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27240 11408 L 27240 12368 26280 12368 26280 11408 27240 11408";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26280,11408);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 28536 13682 L 28536 14642 27576 14642 27576 13682 28536 13682";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27576,13682);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 28868 14785 L 29828 14785 29828 15745 28868 15745 28868 14785";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,28868,14785);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 29606 16223 L 30566 16223 30566 17183 29606 17183 29606 16223";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,29606,16223);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34417 17576 L 33457 17576 33457 16616 34417 16616 34417 17576";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33457,16616);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32969 12780 L 33929 12780 33929 13740 32969 13740 32969 12780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32969,12780);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31908 11820 L 32868 11820 32868 12780 31908 12780 31908 11820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31908,11820);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30837 10448 L 31797 10448 31797 11408 30837 11408 30837 10448";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30837,10448);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36809 13440 L 36809 14400 35849 14400 35849 13440 36809 13440";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,35849,13440);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36630 14322 L 37590 14322 37590 15282 36630 15282 36630 14322";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36630,14322);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39689 11540 L 38729 11540 38729 10580 39689 10580 39689 11540";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38729,10580);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36990 10448 L 37950 10448 37950 11408 36990 11408 36990 10448";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36990,10448);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39390 16631 L 40350 16631 40350 17591 39390 17591 39390 16631";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39390,16631);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 40169 15282 L 40169 16242 39209 16242 39209 15282 40169 15282";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39209,15282);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36398 2960 L 37358 2960 37358 3920 36398 3920 36398 2960";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36398,2960);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35538 5300 L 35538 6260 34578 6260 34578 5300 35538 5300";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34578,5300);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33017 2240 L 33977 2240 33977 3200 33017 3200 33017 2240";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33017,2240);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34417 4959 L 33457 4959 33457 3999 34417 3999 34417 4959";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33457,3999);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31308 6459 L 32268 6459 32268 7419 31308 7419 31308 6459";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31308,6459);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26075 3340 L 25115 3340 25115 2380 26075 2380 26075 3340";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25115,2380);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26280 6561 L 25320 6561 25320 5601 26280 5601 26280 6561";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25320,5601);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23995 5080 L 24955 5080 24955 6040 23995 6040 23995 5080";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23995,5080);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24495 6121 L 25455 6121 25455 7081 24495 7081 24495 6121";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24495,6121);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26280 7821 L 25320 7821 25320 6861 26280 6861 26280 7821";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25320,6861);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20274 5550 L 21234 5550 21234 6510 20274 6510 20274 5550";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20274,5550);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22614 7180 L 22614 8140 21654 8140 21654 7180 22614 7180";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,21654,7180);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23294 9802 L 22334 9802 22334 8842 23294 8842 23294 9802";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22334,8842);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15689 3946 L 16649 3946 16649 4906 15689 4906 15689 3946";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,15689,3946);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17393 6922 L 18353 6922 18353 7882 17393 7882 17393 6922";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17393,6922);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17533 2140 L 18493 2140 18493 3100 17533 3100 17533 2140";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17533,2140);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19699 5002 L 18739 5002 18739 4042 19699 4042 19699 5002";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18739,4042);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18173 8031 L 19133 8031 19133 8991 18173 8991 18173 8031";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18173,8031);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18814 9041 L 19774 9041 19774 10001 18814 10001 18814 9041";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18814,9041);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15513 7361 L 15513 8321 14553 8321 14553 7361 15513 7361";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14553,7361);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13183 6040 L 12223 6040 12223 5080 13183 5080 13183 6040";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12223,5080);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13663 3160 L 12703 3160 12703 2200 13663 2200 13663 3160";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12703,2200);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11344 4120 L 12304 4120 12304 5080 11344 5080 11344 4120";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11344,4120);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12052 7741 L 12052 8701 11092 8701 11092 7741 12052 7741";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11092,7741);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11972 9580 L 11012 9580 11012 8620 11972 8620 11972 9580";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11012,8620);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11880 8420 L 12840 8420 12840 9380 11880 9380 11880 8420";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11880,8420);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13172 14900 L 12212 14900 12212 13940 13172 13940 13172 14900";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12212,13940);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 10652 14443 L 11612 14443 11612 15403 10652 15403 10652 14443";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10652,14443);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9929 16820 L 8969 16820 8969 15860 9929 15860 9929 16820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,8969,15860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11612 16616 L 12572 16616 12572 17576 11612 17576 11612 16616";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11612,16616);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13452 12480 L 12492 12480 12492 11520 13452 11520 13452 12480";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12492,11520);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9671 11200 L 9671 12160 8711 12160 8711 11200 9671 11200";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,8711,11200);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 8402 12368 L 9362 12368 9362 13328 8402 13328 8402 12368";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,8402,12368);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9231 12160 L 10191 12160 10191 13120 9231 13120 9231 12160";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,9231,12160);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1189 14502 L 2149 14502 2149 15462 1189 15462 1189 14502";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1189,14502);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1263 13542 L 1263 14502 303 14502 303 13542 1263 13542";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,303,13542);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2880 15263 L 2880 16223 1920 16223 1920 15263 2880 15263";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1920,15263);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3520 17003 L 2560 17003 2560 16043 3520 16043 3520 17003";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2560,16043);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4310 12980 L 4310 13940 3350 13940 3350 12980 4310 12980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3350,12980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5870 9880 L 6830 9880 6830 10840 5870 10840 5870 9880";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5870,9880);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3520 6602 L 4480 6602 4480 7562 3520 7562 3520 6602";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3520,6602);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 640 8321 L 1600 8321 1600 9281 640 9281 640 8321";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,640,8321);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2729 5901 L 2729 6861 1769 6861 1769 5901 2729 5901";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1769,5901);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2149 8081 L 3109 8081 3109 9041 2149 9041 2149 8081";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2149,8081);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7450 9120 L 7450 10080 6490 10080 6490 9120 7450 9120";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6490,9120);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5441 6700 L 6401 6700 6401 7660 5441 7660 5441 6700";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5441,6700);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5441 4340 L 6401 4340 6401 5300 5441 5300 5441 4340";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5441,4340);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2770 4120 L 3730 4120 3730 5080 2770 5080 2770 4120";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2770,4120);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 303 2499 L 1263 2499 1263 3459 303 3459 303 2499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,303,2499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7356 5499 L 8316 5499 8316 6459 7356 6459 7356 5499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,7356,5499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15513 12542 L 16473 12542 16473 13502 15513 13502 15513 12542";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,15513,12542);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14032 9380 L 14992 9380 14992 10340 14032 10340 14032 9380";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14032,9380);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17093 10241 L 16133 10241 16133 9281 17093 9281 17093 10241";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16133,9281);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20434 13982 L 21394 13982 21394 14942 20434 14942 20434 13982";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20434,13982);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20659 13328 L 20659 14288 19699 14288 19699 13328 20659 13328";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19699,13328);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22265 14983 L 22265 15943 21305 15943 21305 14983 22265 14983";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,21305,14983);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22034 10961 L 22034 11921 21074 11921 21074 10961 22034 10961";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,21074,10961);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22154 4641 L 23114 4641 23114 5601 22154 5601 22154 4641";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22154,4641);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27616 6121 L 28576 6121 28576 7081 27616 7081 27616 6121";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27616,6121);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27033 6781 L 27993 6781 27993 7741 27033 7741 27033 6781";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27033,6781);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5175);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33555 10902 L 34515 10902 34515 11862 33555 11862 33555 10902";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33555,10902);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33108 9880 L 34068 9880 34068 10840 33108 10840 33108 9880";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33108,9880);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32268 8660 L 33228 8660 33228 9620 32268 9620 32268 8660";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32268,8660);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32148 7741 L 32148 8701 31188 8701 31188 7741 32148 7741";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31188,7741);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34035 6740 L 34995 6740 34995 7700 34035 7700 34035 6740";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34035,6740);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35914 8920 L 34954 8920 34954 7960 35914 7960 35914 8920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34954,7960);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35542 15744 L 35542 16704 34582 16704 34582 15744 35542 15744";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34582,15744);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34135 14722 L 35095 14722 35095 15682 34135 15682 34135 14722";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34135,14722);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33295 13502 L 34255 13502 34255 14462 33295 14462 33295 13502";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33295,13502);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24819 8902 L 23859 8902 23859 7942 24819 7942 24819 8902";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23859,7942);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23412 6920 L 24372 6920 24372 7880 23412 7880 23412 6920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23412,6920);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22572 5700 L 23532 5700 23532 6660 22572 6660 22572 5700";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22572,5700);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35802 4300 L 36762 4300 36762 5260 35802 5260 35802 4300";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,35802,4300);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35355 3278 L 36315 3278 36315 4238 35355 4238 35355 3278";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,35355,3278);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34515 2058 L 35475 2058 35475 3018 34515 3018 34515 2058";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34515,2058);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2560 5342 L 3520 5342 3520 6302 2560 6302 2560 5342";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2560,5342);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2113 4320 L 3073 4320 3073 5280 2113 5280 2113 4320";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2113,4320);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2233 3100 L 2233 4060 1273 4060 1273 3100 2233 3100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1273,3100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4594 11803 L 4594 12763 3634 12763 3634 11803 4594 11803";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3634,11803);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4147 11741 L 3187 11741 3187 10781 4147 10781 4147 11741";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3187,10781);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3307 10521 L 2347 10521 2347 9561 3307 9561 3307 10521";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2347,9561);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4147 15263 L 4147 16223 3187 16223 3187 15263 4147 15263";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3187,15263);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2740 14241 L 3700 14241 3700 15201 2740 15201 2740 14241";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2740,14241);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2860 13021 L 2860 13981 1900 13981 1900 13021 2860 13021";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1900,13021);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11263 13440 L 12223 13440 12223 14400 11263 14400 11263 13440";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11263,13440);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11776 13378 L 10816 13378 10816 12418 11776 12418 11776 13378";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10816,12418);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 10936 11198 L 10936 12158 9976 12158 9976 11198 10936 11198";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,9976,11198);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13664 9242 L 12704 9242 12704 8282 13664 8282 13664 9242";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12704,8282);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13217 8220 L 12257 8220 12257 7260 13217 7260 13217 8220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12257,7260);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11417 6040 L 12377 6040 12377 7000 11417 7000 11417 6040";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11417,6040);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17640 13328 L 18600 13328 18600 14288 17640 14288 17640 13328";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17640,13328);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18153 13266 L 17193 13266 17193 12306 18153 12306 18153 13266";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17193,12306);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17313 11086 L 17313 12046 16353 12046 16353 11086 17313 11086";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16353,11086);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19887 8920 L 20847 8920 20847 9880 19887 9880 19887 8920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19887,8920);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20400 7898 L 20400 8858 19440 8858 19440 7898 20400 7898";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19440,7898);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19560 7638 L 18600 7638 18600 6678 19560 6678 19560 7638";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18600,6678);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20474 10961 L 20474 11921 19514 11921 19514 10961 20474 10961";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19514,10961);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18353 10241 L 19313 10241 19313 11201 18353 11201 18353 10241";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18353,10241);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21234 5379 L 20274 5379 20274 4419 21234 4419 21234 5379";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20274,4419);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20434 3160 L 20434 4120 19474 4120 19474 3160 20434 3160";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19474,3160);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15152 5499 L 14192 5499 14192 4539 15152 4539 15152 5499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14192,4539);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15689 5780 L 15689 6740 14729 6740 14729 5780 15689 5780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14729,5780);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5174);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 0 860 L 960 860 960 1820 0 1820 0 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,0,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 960 -100 L 960 860 0 860 0 -100 960 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,0,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1920 1820 L 960 1820 960 860 1920 860 1920 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,960,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1920 -100 L 1920 860 960 860 960 -100 1920 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,960,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1920 860 L 2880 860 2880 1820 1920 1820 1920 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1920,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2880 -100 L 2880 860 1920 860 1920 -100 2880 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1920,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3840 1820 L 2880 1820 2880 860 3840 860 3840 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2880,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3840 -100 L 3840 860 2880 860 2880 -100 3840 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2880,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3840 860 L 4800 860 4800 1820 3840 1820 3840 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3840,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4800 -100 L 4800 860 3840 860 3840 -100 4800 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3840,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6720 860 L 7680 860 7680 1820 6720 1820 6720 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6720,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7680 -100 L 7680 860 6720 860 6720 -100 7680 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6720,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11880 1820 L 10920 1820 10920 860 11880 860 11880 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10920,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11880 -100 L 11880 860 10920 860 10920 -100 11880 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10920,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11880 860 L 12840 860 12840 1820 11880 1820 11880 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11880,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12840 -100 L 12840 860 11880 860 11880 -100 12840 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11880,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13800 1820 L 12840 1820 12840 860 13800 860 13800 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12840,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12840 -100 L 13800 -100 13800 860 12840 860 12840 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12840,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14760 1820 L 13800 1820 13800 860 14760 860 14760 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14760 -100 L 14760 860 13800 860 13800 -100 14760 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14760 860 L 15720 860 15720 1820 14760 1820 14760 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14760,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15720 -100 L 15720 860 14760 860 14760 -100 15720 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14760,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19560 860 L 20520 860 20520 1820 19560 1820 19560 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19560,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20520 -100 L 20520 860 19560 860 19560 -100 20520 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,19560,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21480 1820 L 20520 1820 20520 860 21480 860 21480 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20520,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21480 -100 L 21480 860 20520 860 20520 -100 21480 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20520,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21480 860 L 22440 860 22440 1820 21480 1820 21480 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,21480,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22440 -100 L 22440 860 21480 860 21480 -100 22440 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,21480,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23400 1820 L 22440 1820 22440 860 23400 860 23400 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22440,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23400 -100 L 23400 860 22440 860 22440 -100 23400 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22440,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24360 1820 L 23400 1820 23400 860 24360 860 24360 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23400,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24360 -100 L 24360 860 23400 860 23400 -100 24360 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23400,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26280 860 L 27240 860 27240 1820 26280 1820 26280 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26280,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27240 -100 L 27240 860 26280 860 26280 -100 27240 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26280,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5760 1820 L 4800 1820 4800 860 5760 860 5760 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4800,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5760 -100 L 5760 860 4800 860 4800 -100 5760 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4800,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6720 1820 L 5760 1820 5760 860 6720 860 6720 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5760,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6720 -100 L 6720 860 5760 860 5760 -100 6720 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5760,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16680 1820 L 15720 1820 15720 860 16680 860 16680 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,15720,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16680 -100 L 16680 860 15720 860 15720 -100 16680 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,15720,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16680 860 L 17640 860 17640 1820 16680 1820 16680 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16680,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17640 -100 L 17640 860 16680 860 16680 -100 17640 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16680,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18600 1820 L 17640 1820 17640 860 18600 860 18600 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17640,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 18600 -100 L 18600 860 17640 860 17640 -100 18600 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,17640,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19560 1820 L 18600 1820 18600 860 19560 860 19560 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18600,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19560 -100 L 19560 860 18600 860 18600 -100 19560 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18600,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26280 1820 L 25320 1820 25320 860 26280 860 26280 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25320,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26280 -100 L 26280 860 25320 860 25320 -100 26280 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25320,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24360 860 L 25320 860 25320 1820 24360 1820 24360 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24360,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25320 -100 L 25320 860 24360 860 24360 -100 25320 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24360,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31049 1820 L 30089 1820 30089 860 31049 860 31049 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30089,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31049 -100 L 31049 860 30089 860 30089 -100 31049 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30089,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31049 860 L 32009 860 32009 1820 31049 1820 31049 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31049,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32009 -100 L 32009 860 31049 860 31049 -100 32009 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31049,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32969 1820 L 32009 1820 32009 860 32969 860 32969 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32009,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32969 -100 L 32969 860 32009 860 32009 -100 32969 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32009,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32969 860 L 33929 860 33929 1820 32969 1820 32969 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32969,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33929 -100 L 33929 860 32969 860 32969 -100 33929 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32969,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5180);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34889 1820 L 33929 1820 33929 860 34889 860 34889 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33929,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34889 -100 L 34889 860 33929 860 33929 -100 34889 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,33929,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39689 1820 L 38729 1820 38729 860 39689 860 39689 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38729,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 38729 -100 L 39689 -100 39689 860 38729 860 38729 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38729,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 40649 1820 L 39689 1820 39689 860 40649 860 40649 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39689,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5176);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 40649 -100 L 40649 860 39689 860 39689 -100 40649 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39689,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5177);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35849 1820 L 34889 1820 34889 860 35849 860 35849 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34889,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35849 -100 L 35849 860 34889 860 34889 -100 35849 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34889,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35849 860 L 36809 860 36809 1820 35849 1820 35849 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,35849,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36809 -100 L 36809 860 35849 860 35849 -100 36809 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,35849,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 37769 1820 L 36809 1820 36809 860 37769 860 37769 1820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36809,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 37769 -100 L 37769 860 36809 860 36809 -100 37769 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36809,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 37769 860 L 38729 860 38729 1820 37769 1820 37769 860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,37769,860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5178);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 38729 -100 L 38729 860 37769 860 37769 -100 38729 -100";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,37769,-100);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5179);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 8316 14696 L 9276 14696 9276 15656 8316 15656 8316 14696";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,8316,14696);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9929 12780 L 10889 12780 10889 13740 9929 13740 9929 12780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,9929,12780);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6720 17284 L 5760 17284 5760 16324 6720 16324 6720 17284";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5760,16324);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16680 2559 L 17640 2559 17640 3519 16680 3519 16680 2559";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16680,2559);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13663 7960 L 12703 7960 12703 7000 13663 7000 13663 7960";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12703,7000);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 9142 15030 L 9142 15990 8182 15990 8182 15030 9142 15030";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,8182,15030);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11743 2670 L 12703 2670 12703 3630 11743 3630 11743 2670";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11743,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5621 3920 L 5621 4880 4661 4880 4661 3920 5621 3920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4661,3920);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3840 6922 L 4800 6922 4800 7882 3840 7882 3840 6922";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,3840,6922);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 560 11980 L 1520 11980 1520 12940 560 12940 560 11980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,560,11980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15064 10448 L 16024 10448 16024 11408 15064 11408 15064 10448";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,15064,10448);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 10384 12980 L 11344 12980 11344 13940 10384 13940 10384 12980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10384,12980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25146 3519 L 25146 4479 24186 4479 24186 3519 25146 3519";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24186,3519);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25026 3820 L 25026 4780 24066 4780 24066 3820 25026 3820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24066,3820);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24666 3999 L 25626 3999 25626 4959 24666 4959 24666 3999";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24666,3999);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20345 2000 L 21305 2000 21305 2960 20345 2960 20345 2000";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20345,2000);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 29067 12980 L 29067 13940 28107 13940 28107 12980 29067 12980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,28107,12980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25947 7960 L 26907 7960 26907 8920 25947 8920 25947 7960";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25947,7960);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23706 14220 L 24666 14220 24666 15180 23706 15180 23706 14220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23706,14220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 28577 15656 L 28577 16616 27617 16616 27617 15656 28577 15656";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27617,15656);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 36809 2670 L 37769 2670 37769 3630 36809 3630 36809 2670";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36809,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 33829 5499 L 33829 6459 32869 6459 32869 5499 33829 5499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32869,5499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39470 12980 L 38510 12980 38510 12020 39470 12020 39470 12980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38510,12020);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 38910 13243 L 37950 13243 37950 12283 38910 12283 38910 13243";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,37950,12283);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 37590 16820 L 36630 16820 36630 15860 37590 15860 37590 16820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36630,15860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39310 8522 L 38350 8522 38350 7562 39310 7562 39310 8522";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38350,7562);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 37769 9880 L 36809 9880 36809 8920 37769 8920 37769 9880";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,36809,8920);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5181);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11252 1599 L 12212 1599 12212 2559 11252 2559 11252 1599";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11252,1599);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12212 1599 L 11252 1599 11252 639 12212 639 12212 1599";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11252,639);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7431 2559 L 6471 2559 6471 1599 7431 1599 7431 2559";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6471,1599);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7431 1599 L 6471 1599 6471 639 7431 639 7431 1599";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6471,639);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 640 16616 L 1600 16616 1600 17576 640 17576 640 16616";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,640,16616);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1600 15656 L 1600 16616 640 16616 640 15656 1600 15656";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,640,15656);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5360 17576 L 4400 17576 4400 16616 5360 16616 5360 17576";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4400,16616);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5360 15656 L 5360 16616 4400 16616 4400 15656 5360 15656";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4400,15656);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26907 1599 L 26907 2559 25947 2559 25947 1599 26907 1599";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25947,1599);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25947 639 L 26907 639 26907 1599 25947 1599 25947 639";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,25947,639);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30566 1710 L 31526 1710 31526 2670 30566 2670 30566 1710";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30566,1710);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31526 1710 L 30566 1710 30566 750 31526 750 31526 1710";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30566,750);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16960 17465 L 16000 17465 16000 16505 16960 16505 16960 17465";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16000,16505);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16960 15545 L 16960 16505 16000 16505 16000 15545 16960 15545";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16000,15545);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21579 17576 L 20619 17576 20619 16616 21579 16616 21579 17576";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20619,16616);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21579 15656 L 21579 16616 20619 16616 20619 15656 21579 15656";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20619,15656);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31049 2559 L 32009 2559 32009 3519 31049 3519 31049 2559";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31049,2559);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32009 1599 L 32009 2559 31049 2559 31049 1599 32009 1599";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31049,1599);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32708 4360 L 31748 4360 31748 3400 32708 3400 32708 4360";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31748,3400);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32708 3400 L 31748 3400 31748 2440 32708 2440 32708 3400";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31748,2440);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31748 3459 L 31748 4419 30788 4419 30788 3459 31748 3459";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30788,3459);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30788 2499 L 31748 2499 31748 3459 30788 3459 30788 2499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30788,2499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27107 3200 L 27107 4160 26147 4160 26147 3200 27107 3200";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26147,3200);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26147 2240 L 27107 2240 27107 3200 26147 3200 26147 2240";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26147,2240);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23226 2440 L 24186 2440 24186 3400 23226 3400 23226 2440";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23226,2440);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24186 1480 L 24186 2440 23226 2440 23226 1480 24186 1480";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,23226,1480);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21826 3630 L 21826 4590 20866 4590 20866 3630 21826 3630";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20866,3630);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20866 2670 L 21826 2670 21826 3630 20866 3630 20866 2670";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20866,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21826 7220 L 21826 8180 20866 8180 20866 7220 21826 7220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20866,7220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20866 6260 L 21826 6260 21826 7220 20866 7220 20866 6260";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20866,6260);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 23946 9041 L 23946 10001 22986 10001 22986 9041 23946 9041";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22986,9041);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22986 8081 L 23946 8081 23946 9041 22986 9041 22986 8081";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22986,8081);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 24787 10267 L 25747 10267 25747 11227 24787 11227 24787 10267";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24787,10267);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25747 9307 L 25747 10267 24787 10267 24787 9307 25747 9307";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24787,9307);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22106 13825 L 23066 13825 23066 14785 22106 14785 22106 13825";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22106,13825);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 22106 12865 L 23066 12865 23066 13825 22106 13825 22106 12865";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,22106,12865);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30788 9140 L 29828 9140 29828 8180 30788 8180 30788 9140";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,29828,8180);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30788 7220 L 30788 8180 29828 8180 29828 7220 30788 7220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,29828,7220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27240 9140 L 28200 9140 28200 10100 27240 10100 27240 9140";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27240,9140);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 28200 9140 L 27240 9140 27240 8180 28200 8180 28200 9140";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,27240,8180);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34515 8180 L 35475 8180 35475 9140 34515 9140 34515 8180";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34515,8180);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35475 7220 L 35475 8180 34515 8180 34515 7220 35475 7220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34515,7220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32148 9580 L 33108 9580 33108 10540 32148 10540 32148 9580";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32148,9580);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32148 8620 L 33108 8620 33108 9580 32148 9580 32148 8620";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,32148,8620);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 34629 4300 L 35589 4300 35589 5260 34629 5260 34629 4300";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34629,4300);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 35589 3340 L 35589 4300 34629 4300 34629 3340 35589 3340";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,34629,3340);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31388 9580 L 30428 9580 30428 8620 31388 8620 31388 9580";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30428,8620);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31388 7660 L 31388 8620 30428 8620 30428 7660 31388 7660";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30428,7660);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 26760 9620 L 27720 9620 27720 10580 26760 10580 26760 9620";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26760,9620);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 27720 9620 L 26760 9620 26760 8660 27720 8660 27720 9620";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,26760,8660);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 21579 7882 L 21579 8842 20619 8842 20619 7882 21579 7882";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20619,7882);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 20619 6922 L 21579 6922 21579 7882 20619 7882 20619 6922";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,20619,6922);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39070 15656 L 38110 15656 38110 14696 39070 14696 39070 15656";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38110,14696);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39070 14696 L 38110 14696 38110 13736 39070 13736 39070 14696";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38110,13736);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32708 15180 L 32708 16140 31748 16140 31748 15180 32708 15180";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31748,15180);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31748 14220 L 32708 14220 32708 15180 31748 15180 31748 14220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31748,14220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32268 15545 L 32268 16505 31308 16505 31308 15545 32268 15545";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31308,15545);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31308 14585 L 32268 14585 32268 15545 31308 15545 31308 14585";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31308,14585);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31908 12940 L 31908 13900 30948 13900 30948 12940 31908 12940";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30948,12940);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30948 11980 L 31908 11980 31908 12940 30948 12940 30948 11980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30948,11980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 30566 13605 L 31526 13605 31526 14565 30566 14565 30566 13605";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30566,13605);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31526 13605 L 30566 13605 30566 12645 31526 12645 31526 13605";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,30566,12645);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 32228 13740 L 32228 14700 31268 14700 31268 13740 32228 13740";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31268,13740);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 31268 12780 L 32228 12780 32228 13740 31268 13740 31268 12780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,31268,12780);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39209 6220 L 38249 6220 38249 5260 39209 5260 39209 6220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38249,5260);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39209 5260 L 38249 5260 38249 4300 39209 4300 39209 5260";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38249,4300);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39209 2380 L 40169 2380 40169 3340 39209 3340 39209 2380";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39209,2380);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 40169 1420 L 40169 2380 39209 2380 39209 1420 40169 1420";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,39209,1420);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39390 4590 L 38430 4590 38430 3630 39390 3630 39390 4590";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38430,3630);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 39390 3630 L 38430 3630 38430 2670 39390 2670 39390 3630";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,38430,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25627 16800 L 24667 16800 24667 15840 25627 15840 25627 16800";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24667,15840);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 25627 14880 L 25627 15840 24667 15840 24667 14880 25627 14880";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,24667,14880);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16000 5740 L 16960 5740 16960 6700 16000 6700 16000 5740";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16000,5740);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 16000 4780 L 16960 4780 16960 5740 16000 5740 16000 4780";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16000,4780);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17824 5320 L 16864 5320 16864 4360 17824 4360 17824 5320";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16864,4360);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 17824 3400 L 17824 4360 16864 4360 16864 3400 17824 3400";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,16864,3400);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19684 3200 L 18724 3200 18724 2240 19684 2240 19684 3200";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18724,2240);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 19684 2240 L 18724 2240 18724 1280 19684 1280 19684 2240";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,18724,1280);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13944 2499 L 14904 2499 14904 3459 13944 3459 13944 2499";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13944,2499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13944 1539 L 14904 1539 14904 2499 13944 2499 13944 1539";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13944,1539);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13343 2960 L 14303 2960 14303 3920 13343 3920 13343 2960";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13343,2960);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14303 2960 L 13343 2960 13343 2000 14303 2000 14303 2960";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13343,2000);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15064 3200 L 15064 4160 14104 4160 14104 3200 15064 3200";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14104,3200);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14104 2240 L 15064 2240 15064 3200 14104 3200 14104 2240";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14104,2240);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14624 3820 L 14624 4780 13664 4780 13664 3820 14624 3820";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13664,3820);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13664 2860 L 14624 2860 14624 3820 13664 3820 13664 2860";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13664,2860);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13783 5080 L 12823 5080 12823 4120 13783 4120 13783 5080";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12823,4120);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13783 4120 L 12823 4120 12823 3160 13783 3160 13783 4120";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,12823,3160);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11252 5550 L 12212 5550 12212 6510 11252 6510 11252 5550";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11252,5550);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12212 5550 L 11252 5550 11252 4590 12212 4590 12212 5550";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11252,4590);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 11743 6040 L 12703 6040 12703 7000 11743 7000 11743 6040";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11743,6040);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 12703 5080 L 12703 6040 11743 6040 11743 5080 12703 5080";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,11743,5080);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13944 5962 L 14904 5962 14904 6922 13944 6922 13944 5962";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13944,5962);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13944 5002 L 14904 5002 14904 5962 13944 5962 13944 5002";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13944,5002);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14380 13440 L 15340 13440 15340 14400 14380 14400 14380 13440";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14380,13440);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15340 13440 L 14380 13440 14380 12480 15340 12480 15340 13440";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14380,12480);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13800 13940 L 14760 13940 14760 14900 13800 14900 13800 13940";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,13940);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13800 12980 L 14760 12980 14760 13940 13800 13940 13800 12980";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,12980);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 15720 14900 L 15720 15860 14760 15860 14760 14900 15720 14900";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14760,14900);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14760 13940 L 15720 13940 15720 14900 14760 14900 14760 13940";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,14760,13940);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 14760 15671 L 14760 16631 13800 16631 13800 15671 14760 15671";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,15671);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 13800 14711 L 14760 14711 14760 15671 13800 15671 13800 14711";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,13800,14711);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6471 14696 L 7431 14696 7431 15656 6471 15656 6471 14696";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6471,14696);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6471 13736 L 7431 13736 7431 14696 6471 14696 6471 13736";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6471,13736);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 8182 13420 L 7222 13420 7222 12460 8182 12460 8182 13420";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,7222,12460);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 8182 11500 L 8182 12460 7222 12460 7222 11500 8182 11500";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,7222,11500);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7982 3340 L 7982 4300 7022 4300 7022 3340 7982 3340";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,7022,3340);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7022 2380 L 7982 2380 7982 3340 7022 3340 7022 2380";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,7022,2380);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7222 4590 L 6262 4590 6262 3630 7222 3630 7222 4590";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6262,3630);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 7222 3630 L 6262 3630 6262 2670 7222 2670 7222 3630";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,6262,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5302 2670 L 6262 2670 6262 3630 5302 3630 5302 2670";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5302,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6262 1710 L 6262 2670 5302 2670 5302 1710 6262 1710";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5302,1710);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4001 5459 L 4961 5459 4961 6419 4001 6419 4001 5459";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4001,5459);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4961 5459 L 4001 5459 4001 4499 4961 4499 4961 5459";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4001,4499);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6881 7180 L 5921 7180 5921 6220 6881 6220 6881 7180";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5921,6220);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 6881 6220 L 5921 6220 5921 5260 6881 5260 6881 6220";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,5921,5260);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3520 3630 L 2560 3630 2560 2670 3520 2670 3520 3630";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2560,2670);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 3520 2670 L 2560 2670 2560 1710 3520 1710 3520 2670";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,2560,1710);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2223 5840 L 1263 5840 1263 4880 2223 4880 2223 5840";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1263,4880);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2223 3920 L 2223 4880 1263 4880 1263 3920 2223 3920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1263,3920);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 5621 11408 L 5621 12368 4661 12368 4661 11408 5621 11408";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4661,11408);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4661 10448 L 5621 10448 5621 11408 4661 11408 4661 10448";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,4661,10448);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 640 10001 L 1600 10001 1600 10961 640 10961 640 10001";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,640,10001);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1600 9041 L 1600 10001 640 10001 640 9041 1600 9041";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,640,9041);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 2223 7071 L 2223 8031 1263 8031 1263 7071 2223 7071";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1263,7071);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5182);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 1263 6111 L 2223 6111 2223 7071 1263 7071 1263 6111";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,1263,6111);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5183);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj5185 = document.createElement("img");
imageObj5185.src=new URL("../bitmaps/c88d978127cc2ac95d59188c.png",import.meta.url).href;
function image5185(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 360 220 360 220 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0909090909090908,0,0,1.0555555555555556,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5185);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape5186(ctx,ctrans,frame,ratio,time){
	var pathData="M 11312 3920 L 11312 5000 10652 5000 10652 3920 11312 3920";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(60,0,0,60,10652,3920);
	ctx.transform(1.0909090909090908,0,0,1.0555555555555556,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj5185);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function text5187(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font3055(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,77.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,311.0,380.0);
	font3055(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,521.0,380.0);
	font3055(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,615.0,380.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,849.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1083.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1200.0,380.0);
	font3055(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1504.0,380.0);
	font3055(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1738.0,380.0);
	font3055(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1832.0,380.0);
	font3055(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2066.0,380.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2300.0,380.0);
	font3055(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2534.0,380.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2768.0,380.0);
	font3055(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2885.0,380.0);
	font3055(ctx,"G",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3212.0,380.0);
	font3055(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3422.0,380.0);
	font3055(ctx,"m",textColor);
	ctx.restore();
}

function text5188(ctx,ctrans,frame,ratio,time){
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

function text5189(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([191,103,159,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,380.0);
	font982(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,240.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,380.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,474.0,380.0);
	font982(ctx,"k",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,684.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,918.0,380.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1035.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1152.0,380.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1620.0,380.0);
	font982(ctx,"v",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1830.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2064.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2158.0,380.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2368.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2485.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2789.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3023.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3257.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3374.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3608.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3842.0,380.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3982.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4099.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4193.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4403.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4637.0,380.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4717.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4834.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4951.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5045.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5162.0,380.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5396.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5513.0,380.0);
	font982(ctx,"Y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5793.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6027.0,380.0);
	font982(ctx,"u",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6261.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6378.0,380.0);
	font982(ctx,"w",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6682.0,380.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6776.0,380.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6986.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7220.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7337.0,380.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7454.0,380.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7688.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7805.0,380.0);
	font982(ctx,"c",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8015.0,380.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8249.0,380.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8483.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8577.0,380.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8671.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,8905.0,380.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9139.0,380.0);
	font982(ctx,"g",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9373.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9607.0,380.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,9724.0,380.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10074.0,380.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,10308.0,380.0);
	font982(ctx,"?",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,889.0);
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,77.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,194.0,889.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,428.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,662.0,889.0);
	font982(ctx,"p",textColor);
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
	font982(ctx,"I",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1364.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1481.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1715.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1949.0,889.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2183.0,889.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2263.0,889.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2380.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2497.0,889.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2731.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2965.0,889.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3175.0,889.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3409.0,889.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3526.0,889.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3760.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3877.0,889.0);
	font982(ctx,"f",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3994.0,889.0);
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
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1386.0,1398.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1666.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1783.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1900.0,1398.0);
	font982(ctx,"F",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2157.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2391.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2625.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2765.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2882.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3232.0,1398.0);
	font982(ctx,"y",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3442.0,1398.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3559.0,1398.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3863.0,1398.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4097.0,1398.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4331.0,1398.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4471.0,1398.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4821.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5055.0,1398.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5149.0,1398.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5383.0,1398.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5617.0,1398.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5851.0,1398.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([248,103,87,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,-40.0,1907.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,264.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,498.0,1907.0);
	font982(ctx,"a",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,732.0,1907.0);
	font982(ctx,"r",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,872.0,1907.0);
	font982(ctx,"m",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1222.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1456.0,1907.0);
	font982(ctx,"l",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1550.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,1784.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2018.0,1907.0);
	font982(ctx,"n",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2252.0,1907.0);
	font982(ctx,":",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2369.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2486.0,1907.0);
	font982(ctx,"C",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,2790.0,1907.0);
	font982(ctx,"H",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3094.0,1907.0);
	font982(ctx,"A",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3374.0,1907.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3678.0,1907.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,3982.0,1907.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4286.0,1907.0);
	font982(ctx,"R",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4590.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4707.0,1907.0);
	font982(ctx,"(",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,4847.0,1907.0);
	font982(ctx,"L",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5081.0,1907.0);
	font982(ctx,"e",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5315.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5432.0,1907.0);
	font982(ctx,"'",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5512.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5722.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,5839.0,1907.0);
	font982(ctx,"d",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6073.0,1907.0);
	font982(ctx,"o",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6307.0,1907.0);
	font982(ctx," ",textColor);
	ctx.restore();
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6424.0,1907.0);
	font982(ctx,"t",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6541.0,1907.0);
	font982(ctx,"h",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6775.0,1907.0);
	font982(ctx,"i",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,6869.0,1907.0);
	font982(ctx,"s",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7079.0,1907.0);
	font982(ctx,"!",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.0205078125,0.0,0.0,0.0205078125,7196.0,1907.0);
	font982(ctx,")",textColor);
	ctx.restore();
}

function text5190(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([255,255,255,1]));
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,333.0,362.0);
	font3055(ctx,"E",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,600.0,362.0);
	font3055(ctx,"n",textColor);
	ctx.restore();
	ctx.save();
	ctx.transform(0.01953125,0.0,0.0,0.01953125,823.0,362.0);
	font3055(ctx,"d",textColor);
	ctx.restore();
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

var imageObj3328 = document.createElement("img");
imageObj3328.src=new URL("../bitmaps/7ae0331dadf63387ff85fe37.png",import.meta.url).href;
function image3328(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 380 480 380 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3328);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj4359 = document.createElement("img");
imageObj4359.src=new URL("../bitmaps/6e8567cd1c50585e684a3277.png",import.meta.url).href;
function image4359(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4359);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj4360 = document.createElement("img");
imageObj4360.src=new URL("../bitmaps/64494923d84ba83a0be5e1f4.png",import.meta.url).href;
function image4360(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 320 320 320 320 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0625,0,0,1.0625,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj4360);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

var imageObj3389 = document.createElement("img");
imageObj3389.src=new URL("../bitmaps/2203eac77745397738dc97da.png",import.meta.url).href;
function image3389(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3389);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3390(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 621 -459 621 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3389);
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

var imageObj3393 = document.createElement("img");
imageObj3393.src=new URL("../bitmaps/00935d22cfad3674ea00e1a4.png",import.meta.url).href;
function image3393(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 0 L 0 480 340 480 340 0 0 0";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(20,0,0,20,0,0);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3393);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function shape3394(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 459 -675 459 621 -459 621 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0588235294117647,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3393);
	var pat=ctx.createPattern(fimg,"repeat");
	ctx.fillStyle = pat;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
}

function sprite3395(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3395,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 24;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 1:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 2:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 3:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 4:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 5:
			place("shape3390",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 6:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 7:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 8:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 9:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 10:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 11:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 12:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 13:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 14:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 15:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 16:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 17:
			place("shape3394",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 18:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 19:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 20:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 21:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 22:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
		case 23:
			place("shape3392",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
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

function shape3850(ctx,ctrans,frame,ratio,time){
	var pathData="M -459 -675 L 567 -675 567 621 -459 621 -459 -675";
	drawPath(ctx,pathData,false);
	ctx.save();
	ctx.clip();
	ctx.transform(53.99993896484375,0,0,53.99993896484375,-459,-675);
	ctx.transform(1.0526315789473684,0,0,1.0416666666666667,-0.5,-0.5);
	var fimg = ctrans.applyToImage(imageObj3328);
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

function sprite3851(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(3851,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape3850",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
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

function shape5113(ctx,ctrans,frame,ratio,time){
	var pathData="M 0 -100 Q 131 -100 223 -71 316 -41 316 0 316 41 223 70 131 100 0 100 -131 100 -224 70 -316 41 -316 0 -316 -41 -224 -71 -131 -100 0 -100";
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function sprite5114(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5114,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5113",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			break;
	}

}finally{tools.leaveSprite();}
}

function sprite5191(ctx,ctrans,frame,ratio,time){
const timelineClip=tools.enterSprite(5191,frame);if(timelineClip)frame=timelineClip.currentFrame-1;try{

	ctx.save();
	ctx.transform(1,0,0,1,2043.95,1336.05);
	var clips = [];
	var frame_cnt = 109;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5148",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,0,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 1:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5148",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,0,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5149",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,1,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,1,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 2:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,874.1,141.0],ctrans,1,(0+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,850.55,220.85],ctrans,1,(0+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 3:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,865.9,141.1],ctrans,1,(1+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,841.25,220.8],ctrans,1,(1+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 4:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,857.75,141.2],ctrans,1,(2+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,831.9,220.75],ctrans,1,(2+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 5:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,849.55,141.25],ctrans,1,(3+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,822.6,220.7],ctrans,1,(3+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 6:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,841.35,141.35],ctrans,1,(4+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,813.3,220.65],ctrans,1,(4+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 7:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,833.2,141.45],ctrans,1,(5+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,803.95,220.6],ctrans,1,(5+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 8:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,825.0,141.55],ctrans,1,(6+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,794.65,220.55],ctrans,1,(6+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 9:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,816.8,141.65],ctrans,1,(7+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,785.3,220.5],ctrans,1,(7+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 10:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,808.65,141.75],ctrans,1,(8+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,776.0,220.45],ctrans,1,(8+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 11:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,800.45,141.8],ctrans,1,(9+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,766.7,220.4],ctrans,1,(9+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 12:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,792.25,141.9],ctrans,1,(10+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,757.35,220.35],ctrans,1,(10+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 13:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,784.05,142.0],ctrans,1,(11+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,748.05,220.3],ctrans,1,(11+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 14:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,775.9,142.1],ctrans,1,(12+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,738.75,220.25],ctrans,1,(12+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 15:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,767.7,142.2],ctrans,1,(13+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,729.4,220.2],ctrans,1,(13+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 16:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,759.5,142.25],ctrans,1,(14+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,720.1,220.15],ctrans,1,(14+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 17:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,751.35,142.35],ctrans,1,(15+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,710.75,220.1],ctrans,1,(15+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 18:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,743.15,142.45],ctrans,1,(16+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,701.45,220.05],ctrans,1,(16+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 19:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,734.95,142.55],ctrans,1,(17+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,692.15,220.0],ctrans,1,(17+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 20:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,726.8,142.65],ctrans,1,(18+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,682.8,219.95],ctrans,1,(18+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 21:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,718.6,142.75],ctrans,1,(19+time)%843,2,time);
			place("sprite3395",canvas,ctx,[0.05,0.0,0.0,0.05,673.5,219.9],ctrans,1,(19+time)%24,2,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 22:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,710.4,142.8],ctrans,1,(20+time)%843,2,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,22,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 23:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,702.25,142.9],ctrans,1,(21+time)%843,2,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,22,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 24:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite3017",canvas,ctx,[0.05,0.0,0.0,0.05,694.05,143.0],ctrans,1,(22+time)%843,2,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,22,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 25:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(0+time)%38,25,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,22,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 26:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(1+time)%38,25,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,22,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5150",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,2,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5151",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,26,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,26,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 27:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(2+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5152",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,27,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5151",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,26,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,26,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 28:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(3+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,-33.75],ctrans,1,(0+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 29:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(4+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,-24.85],ctrans,1,(1+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 30:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(5+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,-15.9],ctrans,1,(2+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 31:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(6+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,-7.0],ctrans,1,(3+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 32:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(7+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,1.9],ctrans,1,(4+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 33:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(8+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,10.85],ctrans,1,(5+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 34:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(9+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,19.75],ctrans,1,(6+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 35:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(10+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,28.65],ctrans,1,(7+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 36:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(11+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,37.55],ctrans,1,(8+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 37:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(12+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,46.5],ctrans,1,(9+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 38:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(13+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,55.4],ctrans,1,(10+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 39:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(14+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,64.3],ctrans,1,(11+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 40:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2664",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(15+time)%38,25,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,219.9],ctrans,1,(0+time)%1,27,time);
			place("shape5153",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,73.25],ctrans,1,(0+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 41:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(0+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,82.15],ctrans,1,(1+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 42:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(1+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(1+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,91.05],ctrans,1,(2+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 43:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(2+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(2+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,100.0],ctrans,1,(3+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 44:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(3+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(3+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,108.9],ctrans,1,(4+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 45:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(4+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(4+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,117.8],ctrans,1,(5+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 46:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(5+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(5+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,126.7],ctrans,1,(6+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 47:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(6+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(6+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,135.65],ctrans,1,(7+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 48:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(7+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(7+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,144.55],ctrans,1,(8+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 49:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(8+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(8+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,153.45],ctrans,1,(9+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 50:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(9+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(9+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,162.4],ctrans,1,(10+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 51:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(10+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%10,41,time);
			place("sprite5158",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(11+time)%12,28,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 52:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(11+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(1+time)%10,41,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(0+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 53:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(12+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(2+time)%10,41,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(1+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5159",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,28,time);
			place("text5160",canvas,ctx,[0.05,0.0,0.0,0.05,113.65,343.0],ctrans,1,0,28,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 54:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(13+time)%38,41,time);
			place("sprite5161",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(3+time)%10,41,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(2+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5168",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,54,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 55:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(14+time)%38,41,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%1,55,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(3+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5169",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,55,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 56:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(15+time)%38,41,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%1,55,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(4+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5170",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,56,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 57:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(16+time)%38,41,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%1,55,time);
			place("sprite5166",canvas,ctx,[-0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(5+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5171",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,57,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 58:
			place("shape5147",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,0,0,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(17+time)%38,41,time);
			place("sprite4289",canvas,ctx,[0.05,0.0,0.0,0.05,674.5,217.2],ctrans,1,(0+time)%1,55,time);
			place("sprite5166",canvas,ctx,[0.05,0.0,0.0,0.05,546.5,171.3],ctrans,1,(6+time)%12,52,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5167",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,53,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,53,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 59:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-603.95,473.45],ctrans,1,(0+time)%1,59,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,693.05,142.0],ctrans,1,(18+time)%38,41,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 60:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-553.55,453.05],ctrans,1,(0+time)%1,59,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,743.05,122.0],ctrans,1,(19+time)%38,41,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 61:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-503.1,432.65],ctrans,1,(0+time)%1,59,time);
			place("sprite2876",canvas,ctx,[0.05,0.0,0.0,0.05,793.05,101.0],ctrans,1,(20+time)%38,41,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 62:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-452.7,412.25],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 63:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-402.25,391.8],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 64:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-351.85,371.45],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 65:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-301.4,351.0],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 66:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-250.95,330.6],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 67:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-200.55,310.2],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 68:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-150.1,289.8],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 69:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-99.7,269.4],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 70:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,-49.25,249.0],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 71:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1.15,228.6],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 72:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,51.6,208.2],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 73:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,102.0,187.8],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 74:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,152.45,167.35],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 75:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,202.85,146.95],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 76:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,253.3,126.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 77:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,303.7,106.15],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 78:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,354.15,85.75],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 79:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,404.55,65.35],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 80:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,455.0,44.95],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 81:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,505.4,24.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 82:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,555.85,4.1],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 83:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,606.25,-16.3],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 84:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,656.7,-36.7],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 85:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,707.1,-57.1],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 86:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,757.55,-77.5],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 87:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,808.0,-97.9],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 88:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,858.4,-118.3],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 89:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,908.8,-138.7],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 90:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,959.25,-159.1],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 91:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1009.7,-179.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 92:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1060.1,-199.95],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 93:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1110.5,-220.35],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 94:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1160.95,-240.75],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 95:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1211.4,-261.15],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 96:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 97:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 98:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 99:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 100:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 101:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 102:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 103:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 104:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 105:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 106:
			place("sprite5173",canvas,ctx,[0.05,0.0,0.0,0.05,1261.8,-281.55],ctrans,1,(0+time)%1,59,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5172",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,58,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 107:
			place("shape5184",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,419.1,243.1],ctrans,1,(0+time)%38,107,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,499.45,250.4],ctrans,1,(0+time)%1,107,time);
			place("shape5186",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5187",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,107,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,466.1,109.5],ctrans,1,(0+time)%1,107,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5188",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,107,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,107,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
		case 108:
			place("shape5184",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite2450",canvas,ctx,[0.05,0.0,0.0,0.05,419.1,243.1],ctrans,1,(1+time)%38,107,time);
			place("sprite3851",canvas,ctx,[0.05,0.0,0.0,0.05,499.45,250.4],ctrans,1,(0+time)%1,107,time);
			place("shape5186",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("sprite3280",canvas,ctx,[0.05,0.0,0.0,0.05,399.3,397.95],ctrans,1,(0+time)%1,0,time);
			place("text5189",canvas,ctx,[0.05,0.0,0.0,0.05,43.0,343.0],ctrans,1,0,108,time);
			place("sprite3753",canvas,ctx,[0.05,0.0,0.0,0.05,466.1,109.5],ctrans,1,(0+time)%1,107,time);
			place("shape3282",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text5190",canvas,ctx,[0.05,0.0,0.0,0.05,690.95,428.4],ctrans,1,0,108,time);
			place("sprite3063",canvas,ctx,[0.035878753662109374,0.0,0.0,0.04581527709960938,723.65,437.65],ctrans.merge(new tools.sourceCxform(0,0,0,0,256,256,256,0)),1,(0+time)%1,108,time);
			place("sprite3818",canvas,ctx,[0.05,0.0,0.0,0.05,50.3,30.3],ctrans,1,(0+time)%1,0,time);
			break;
	}
	ctx.restore();

}finally{tools.leaveSprite();}
}


Object.assign(registry,{image5146,shape5147,text5148,text5149,text5150,text5151,text5152,shape5153,image5154,shape5155,image5156,shape5157,sprite5158,text5159,text5160,sprite5161,image5162,shape5163,image5164,shape5165,sprite5166,text5167,text5168,text5169,text5170,text5171,text5172,sprite5173,image5174,image5175,image5176,image5177,image5178,image5179,image5180,image5181,image5182,image5183,shape5184,image5185,shape5186,text5187,text5188,text5189,text5190,image3245,sprite4289,shape3279,sprite3280,shape3282,shape3284,image3308,image3328,image4359,image4360,image3389,shape3390,image3391,shape3392,image3393,shape3394,sprite3395,image2380,shape2381,image2382,shape2383,image2384,shape2385,image2386,shape2387,image2388,shape2389,image2390,shape2391,image2392,shape2393,image2394,shape2395,image2396,shape2397,image2398,shape2399,image2400,shape2401,image2402,shape2403,image2404,shape2405,image2406,shape2407,image2408,shape2409,image2410,shape2411,image2412,shape2413,image2414,shape2415,image2416,shape2417,image2418,shape2419,image2420,shape2421,image2422,shape2423,image2424,shape2425,image2426,shape2427,image2428,shape2429,image2430,shape2431,image2432,shape2433,image2434,shape2435,image2436,shape2437,image2438,shape2439,image2440,shape2441,image2442,shape2443,image2444,shape2445,image2446,shape2447,image2448,shape2449,sprite2450,image2592,shape2593,image2594,shape2595,image2596,shape2597,image2598,shape2599,image2600,shape2601,image2602,shape2603,image2604,shape2605,image2606,shape2607,image2608,shape2609,image2610,shape2611,image2612,shape2613,image2614,shape2615,image2616,shape2617,image2618,shape2619,image2620,shape2621,image2622,shape2623,image2624,shape2625,image2626,shape2627,image2628,shape2629,image2630,shape2631,image2632,shape2633,image2634,shape2635,image2636,shape2637,image2638,shape2639,image2640,shape2641,image2642,shape2643,image2644,shape2645,image2646,shape2647,image2648,shape2649,image2650,shape2651,image2652,shape2653,image2654,shape2655,image2656,shape2657,image2658,shape2659,image2660,shape2661,image2662,shape2663,sprite2664,shape3752,sprite3753,text3817,sprite3818,image2806,shape2807,image2808,shape2809,image2810,shape2811,image2812,shape2813,image2814,shape2815,image2816,shape2817,image2818,shape2819,image2820,shape2821,image2822,shape2823,image2824,shape2825,image2826,shape3850,shape2827,sprite3851,image2828,shape2829,image2830,shape2831,image2832,shape2833,image2834,shape2835,image2836,shape2837,image2838,shape2839,image2840,shape2841,image2842,shape2843,image2844,shape2845,image2846,shape2847,image2848,shape2849,image2850,shape2851,image2852,shape2853,image2854,shape2855,image2856,shape2857,image2858,shape2859,image2860,shape2861,image2862,shape2863,image2864,shape2865,image2866,shape2867,image2868,shape2869,image2870,shape2871,image2872,shape2873,image2874,shape2875,sprite2876,image2877,shape2878,image2879,shape2880,image2881,shape2882,image2883,shape2884,image2885,shape2886,image2887,shape2888,image2889,shape2890,image2891,shape2892,image2893,shape2894,image2895,shape2896,image2897,shape2898,image2899,shape2900,image2901,shape2902,image2903,shape2904,image2905,shape2906,image2907,shape2908,image2909,shape2910,image2911,shape2912,image2913,shape2914,image2915,shape2916,image2917,shape2918,image2919,shape2920,image2921,shape2922,image2923,shape2924,image2925,shape2926,image2927,shape2928,image2929,shape2930,image2931,shape2932,image2933,shape2934,image2935,shape2936,image2937,shape2938,image2939,shape2940,image2941,shape2942,image2943,shape2944,image2945,shape2946,image2947,shape2948,image2949,shape2950,image2951,shape2952,image2953,shape2954,image2955,shape2956,image2957,shape2958,image2959,shape2960,image2961,shape2962,image2963,shape2964,image2965,shape2966,image2967,shape2968,image2969,shape2970,image2971,shape2972,image2973,shape2974,image2975,shape2976,image2977,shape2978,image2979,shape2980,image2981,shape2982,image2983,shape2984,image2985,shape2986,image2987,shape2988,image2989,shape2990,image2991,shape2992,image2993,shape2994,image2995,shape2996,image2997,shape2998,image2999,shape3000,image3001,shape3002,image3003,shape3004,image3005,shape3006,image3007,shape3008,image3009,shape3010,image3011,shape3012,image3013,shape3014,image3015,shape3016,sprite3017,font982,font3055,shape3062,sprite3063,shape5113,sprite5114,sprite5191});
await Promise.all([imageObj5146,imageObj5154,imageObj5156,imageObj5162,imageObj5164,imageObj5174,imageObj5175,imageObj5176,imageObj5177,imageObj5178,imageObj5179,imageObj5180,imageObj5181,imageObj5182,imageObj5183,imageObj5185,imageObj3245,imageObj3308,imageObj3328,imageObj4359,imageObj4360,imageObj3389,imageObj3391,imageObj3393,imageObj2380,imageObj2382,imageObj2384,imageObj2386,imageObj2388,imageObj2390,imageObj2392,imageObj2394,imageObj2396,imageObj2398,imageObj2400,imageObj2402,imageObj2404,imageObj2406,imageObj2408,imageObj2410,imageObj2412,imageObj2414,imageObj2416,imageObj2418,imageObj2420,imageObj2422,imageObj2424,imageObj2426,imageObj2428,imageObj2430,imageObj2432,imageObj2434,imageObj2436,imageObj2438,imageObj2440,imageObj2442,imageObj2444,imageObj2446,imageObj2448,imageObj2592,imageObj2594,imageObj2596,imageObj2598,imageObj2600,imageObj2602,imageObj2604,imageObj2606,imageObj2608,imageObj2610,imageObj2612,imageObj2614,imageObj2616,imageObj2618,imageObj2620,imageObj2622,imageObj2624,imageObj2626,imageObj2628,imageObj2630,imageObj2632,imageObj2634,imageObj2636,imageObj2638,imageObj2640,imageObj2642,imageObj2644,imageObj2646,imageObj2648,imageObj2650,imageObj2652,imageObj2654,imageObj2656,imageObj2658,imageObj2660,imageObj2662,imageObj2806,imageObj2808,imageObj2810,imageObj2812,imageObj2814,imageObj2816,imageObj2818,imageObj2820,imageObj2822,imageObj2824,imageObj2826,imageObj2828,imageObj2830,imageObj2832,imageObj2834,imageObj2836,imageObj2838,imageObj2840,imageObj2842,imageObj2844,imageObj2846,imageObj2848,imageObj2850,imageObj2852,imageObj2854,imageObj2856,imageObj2858,imageObj2860,imageObj2862,imageObj2864,imageObj2866,imageObj2868,imageObj2870,imageObj2872,imageObj2874,imageObj2877,imageObj2879,imageObj2881,imageObj2883,imageObj2885,imageObj2887,imageObj2889,imageObj2891,imageObj2893,imageObj2895,imageObj2897,imageObj2899,imageObj2901,imageObj2903,imageObj2905,imageObj2907,imageObj2909,imageObj2911,imageObj2913,imageObj2915,imageObj2917,imageObj2919,imageObj2921,imageObj2923,imageObj2925,imageObj2927,imageObj2929,imageObj2931,imageObj2933,imageObj2935,imageObj2937,imageObj2939,imageObj2941,imageObj2943,imageObj2945,imageObj2947,imageObj2949,imageObj2951,imageObj2953,imageObj2955,imageObj2957,imageObj2959,imageObj2961,imageObj2963,imageObj2965,imageObj2967,imageObj2969,imageObj2971,imageObj2973,imageObj2975,imageObj2977,imageObj2979,imageObj2981,imageObj2983,imageObj2985,imageObj2987,imageObj2989,imageObj2991,imageObj2993,imageObj2995,imageObj2997,imageObj2999,imageObj3001,imageObj3003,imageObj3005,imageObj3007,imageObj3009,imageObj3011,imageObj3013,imageObj3015].map(image=>image.decode()));
return {render(clip,{clear=true}={}){tools.setRoot(clip);ctx.save();ctx.setTransform(1,0,0,1,0,0);if(clear)ctx.clearRect(0,0,canvas.width,canvas.height);if(clip?.renderMatrix){ctx.transform(...clip.renderMatrix);ctx.transform(1,0,0,1,-2043.95,-1336.05);}else{ctx.transform(1,0,0,1,-2043.95+(clip?.x??0),-1336.05+(clip?.y??0));}ctx.globalAlpha=clip?.alpha??1;sprite5191(ctx,new cxform(0,0,0,0,255,255,255,255),(clip?.currentFrame??1)-1,0,clip?.clock?.frame??0);tools.finishRoot(clip);ctx.restore();}};
}
