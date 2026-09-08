function finishRoot(clip){
 const dissolve=clip?.pixelDissolve;if(!dissolve||dissolve.progress>=1)return;const r=clip.meta?.bounds;if(!r)return;const cols=dissolve.xSections??30,rows=dissolve.ySections??30,total=cols*rows,w=(r[2]-r[0])/cols,h=(r[3]-r[1])/rows;const ctx=canvas.getContext('2d');ctx.save();ctx.setTransform(...(clip.renderMatrix??[1,0,0,1,clip.x??0,clip.y??0]));for(let index=0;index<total;index++){const rank=(index*317)%total;if(rank/total>=dissolve.progress)ctx.clearRect(r[0]+index%cols*w,r[1]+Math.floor(index/cols)*h,w+1,h+1);}ctx.restore();
}
