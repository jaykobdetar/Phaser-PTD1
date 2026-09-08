let stack=[],pending=null,rootClip=null;
function setRoot(clip){rootClip=clip;pending=clip;stack=[];}
function enterSprite(id,frame){const clip=pending?.symbolId===id?pending:null;pending=null;stack.push({clip,used:new Set(),placements:null});return clip;}
function leaveSprite(){stack.pop();}
const rawPlace=place;
place=function(obj,canvas,ctx,matrix,ctrans,blendMode,frame,ratio,time){
 const parent=stack.at(-1),id=Number(obj.replace(/^[a-zA-Z]+/,''));let child=null;
 if(parent?.clip){
  // Rendering is synchronous; the source timeline advances between renders.
  // Rebuild per sprite entry, preserving Map/array order and live coordinates.
  // Retain the original stable sort/comparator for exact nearest-placement ties.
  if(!parent.placements){parent.placements=new Map();const children=parent.clip.childrenByDepth?parent.clip.childrenByDepth.values():(parent.clip.children??[]);for(const candidate of children){let group=parent.placements.get(candidate.symbolId);if(!group)parent.placements.set(candidate.symbolId,group=[]);group.push(candidate);}}
  const candidates=(parent.placements.get(id)??[]).filter(c=>!parent.used.has(c));
  const factor=parent.clip===rootClip?1:20;
  candidates.sort((a,b)=>Math.abs(matrix[4]-(a.x??a.matrix?.[4]??0)*factor)+Math.abs(matrix[5]-(a.y??a.matrix?.[5]??0)*factor)-Math.abs(matrix[4]-(b.x??b.matrix?.[4]??0)*factor)-Math.abs(matrix[5]-(b.y??b.matrix?.[5]??0)*factor));child=candidates[0]??null;
  if(child){parent.used.add(child);if(child.visible===false||child.alpha<=0)return;
   const entry=child.sourcePlacement,original=entry?.matrix??child.sourceMatrix;
   if(child.matrix){const unit=parent.clip===rootClip?0.05:1;const m=child.matrix;matrix=[m[0]*unit,m[1]*unit,m[2]*unit,m[3]*unit,m[4]*factor,m[5]*factor];}
   else if(original){matrix=matrix.slice();matrix[4]+=((child.x??child.matrix?.[4]??original[4])-original[4])*factor;matrix[5]+=((child.y??child.matrix?.[5]??original[5])-original[5])*factor;
    const sx=Math.hypot(original[0],original[1])*(original[0]<0?-1:1)||1,sy=Math.hypot(original[2],original[3])*(original[3]<0?-1:1)||1;
    matrix[0]*=(child.scaleX??(child.matrix?Math.hypot(child.matrix[0],child.matrix[1]):sx))/sx;matrix[1]*=(child.scaleX??(child.matrix?Math.hypot(child.matrix[0],child.matrix[1]):sx))/sx;matrix[2]*=(child.scaleY??(child.matrix?Math.hypot(child.matrix[2],child.matrix[3]):sy))/sy;matrix[3]*=(child.scaleY??(child.matrix?Math.hypot(child.matrix[2],child.matrix[3]):sy))/sy;
   }
   // Flash alpha assignments replace the MovieClip's authored multiplier.
   // Callers with an overridden source alpha supply its original placement
   // value; cancel only that factor, retaining every ancestor's fade.
   const alpha=(child.alpha??1)/(child.authoredAlpha??1);
   if(alpha!==1)ctrans=ctrans.merge(new cxform(0,0,0,0,255,255,255,255*alpha));
   frame=child.currentFrame-1;
  }
 }
 if(child&&obj.startsWith('text')&&child.text!==undefined&&dynamicText(ctx,matrix,child,ctrans,id))return;
 pending=child;try{return rawPlace(obj,canvas,ctx,matrix,ctrans,blendMode,frame,ratio,time);}finally{pending=null;}
};
