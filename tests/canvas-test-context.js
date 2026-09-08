export function recordingContext(record=true){
 const ctx={_matrix:[1,0,0,1,0,0],lineWidth:1,trace:[],states:[]};
 const log=(...args)=>{if(record)ctx.trace.push(args);};
 ctx.save=()=>{log('save');ctx.states.push({matrix:ctx._matrix.slice(),lineWidth:ctx.lineWidth});};
 ctx.restore=()=>{log('restore');const state=ctx.states.pop();ctx._matrix=state.matrix;ctx.lineWidth=state.lineWidth;};
 ctx.transform=(...m)=>{log('transform',...m);const a=ctx._matrix;ctx._matrix=[a[0]*m[0]+a[2]*m[1],a[1]*m[0]+a[3]*m[1],a[0]*m[2]+a[2]*m[3],a[1]*m[2]+a[3]*m[3],a[0]*m[4]+a[2]*m[5]+a[4],a[1]*m[4]+a[3]*m[5]+a[5]];};
 ctx.setTransform=(...m)=>{log('setTransform',...m);ctx._matrix=m;};
 ctx.applyTransformToPoint=p=>({x:ctx._matrix[0]*p.x+ctx._matrix[2]*p.y+ctx._matrix[4],y:ctx._matrix[1]*p.x+ctx._matrix[3]*p.y+ctx._matrix[5]});
 for(const name of ['beginPath','closePath','moveTo','lineTo','quadraticCurveTo','rect','clip'])ctx[name]=(...args)=>log(name,...args);
 ctx.stroke=()=>log('stroke',ctx.lineWidth);return ctx;
}
export function renderText(tools,canvas,ctx,id,properties={},ctrans){
 const child={symbolId:Number(id),currentFrame:1,x:0,y:0,...properties};
 const root={symbolId:-1,childrenByDepth:new Map([[1,child]])};
 tools.setRoot(root);tools.enterSprite(-1,0);
 try{tools.place('text'+id,canvas,ctx,[0.05,0,0,0.05,0,0],ctrans??new tools.cxform(0,0,0,0,255,255,255,255),0,0,0,0);}finally{tools.leaveSprite();}
}
