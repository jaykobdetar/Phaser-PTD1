/** Small display-list adapter used by the original move classes.
 * Timelines, labels, frame scripts and geometry come from the supplied SWF.
 * Phaser rendering consumes snapshots; combat never waits for a tween callback.
 */
export function createMoveDisplay(timelines,{onSound=()=>{}}={}) {
  if(!timelines?.symbols||!timelines?.byName)throw new Error('Original move timeline metadata is required.');
  let serial=0;
  const transform=(p,m)=>({x:p.x*m[0]+p.y*m[2]+m[4],y:p.x*m[1]+p.y*m[3]+m[5]});
  const multiply=(a,b)=>[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]];
  const inverse=m=>{const d=m[0]*m[3]-m[1]*m[2];return[m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,(m[2]*m[5]-m[3]*m[4])/d,(m[1]*m[4]-m[0]*m[5])/d];};
  function Sprite(){this.x=0;this.y=0;this.scaleX=1;this.scaleY=1;this.rotation=0;this.alpha=1;this.visible=true;this.parent=null;this.children=[];this.transform={colorTransform:null};this.name='';this._bounds=[0,0,0,0];}
  Sprite.__construct=Sprite;
  Object.assign(Sprite.prototype,{
    addChild(child){if(!child)return child;if(child.parent)child.parent.removeChild(child);this.children.push(child);child.parent=this;return child;},
    addChildAt(child,index){this.addChild(child);this.children.splice(this.children.indexOf(child),1);this.children.splice(index,0,child);return child;},
    removeChild(child){const i=this.children.indexOf(child);if(i>=0){this.children.splice(i,1);child.parent=null;}return child;},
    removeChildAt(i){return this.removeChild(this.children[i]);},
    getChildAt(i){return this.children[i];},
    getChildIndex(child){return this.children.indexOf(child);},
    contains(child){return this.children.includes(child);},
    localMatrix(){const a=this.rotation*Math.PI/180,m=[Math.cos(a)*this.scaleX,Math.sin(a)*this.scaleX,-Math.sin(a)*this.scaleY,Math.cos(a)*this.scaleY,0,0];if(this._matrix){const out=multiply(this._matrix,m);out[4]=this.x;out[5]=this.y;return out;}m[4]=this.x;m[5]=this.y;return m;},
    globalMatrix(){return this.parent?multiply(this.parent.globalMatrix(),this.localMatrix()):this.localMatrix();},
    localToGlobal(p){return transform(p,this.globalMatrix());},
    globalToLocal(p){return transform(p,inverse(this.globalMatrix()));},
    localBounds(){
      const children=this.children.filter(c=>c.visible!==false);if(!children.length)return this._bounds;
      let result=null;for(const child of children){const [x0,y0,x1,y1]=child.localBounds(),m=child.localMatrix(),p=[transform({x:x0,y:y0},m),transform({x:x1,y:y0},m),transform({x:x0,y:y1},m),transform({x:x1,y:y1},m)];const b=[Math.min(...p.map(v=>v.x)),Math.min(...p.map(v=>v.y)),Math.max(...p.map(v=>v.x)),Math.max(...p.map(v=>v.y))];result=result?[Math.min(result[0],b[0]),Math.min(result[1],b[1]),Math.max(result[2],b[2]),Math.max(result[3],b[3])]:b;}return result??this._bounds;
    },
    globalBounds(){const [x0,y0,x1,y1]=this.localBounds(),m=this.globalMatrix(),p=[transform({x:x0,y:y0},m),transform({x:x1,y:y0},m),transform({x:x0,y:y1},m),transform({x:x1,y:y1},m)];return[Math.min(...p.map(v=>v.x)),Math.min(...p.map(v=>v.y)),Math.max(...p.map(v=>v.x)),Math.max(...p.map(v=>v.y))];},
    hitTestObject(other){if(!other?.globalBounds)return false;const a=this.globalBounds(),b=other.globalBounds();return a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];},
    hitTestPoint(x,y){const b=this.globalBounds();return x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3];},
  });
  Object.defineProperties(Sprite.prototype,{numChildren:{get(){return this.children.length;}},width:{get(){const b=this.localBounds();return(b[2]-b[0])*Math.abs(this.scaleX);},set(v){const b=this.localBounds(),w=b[2]-b[0];this.scaleX=w?v/w:1;}},height:{get(){const b=this.localBounds();return(b[3]-b[1])*Math.abs(this.scaleY);},set(v){const b=this.localBounds(),h=b[3]-b[1];this.scaleY=h?v/h:1;}}});
  function MovieClip(nameOrId,{allowShape=false}={}){
    Sprite.call(this);this.displayId=++serial;this.symbolName=typeof nameOrId==='string'?nameOrId:null;
    const id=typeof nameOrId==='number'?nameOrId:timelines.byName[nameOrId];this.symbolId=id??null;this.timeline=timelines.symbols[id];
    if(!this.timeline&&!allowShape)throw new Error(`Missing original timeline: ${nameOrId}`);
    this.totalFrames=this.timeline?.frames??1;this.currentFrame=1;this.playing=true;this._bounds=this.timeline?.bounds??[0,0,0,0];this._timelineChildren=new Map();this._scriptDepth=0;this._born=0;
    this._enterFrame();
  }
  MovieClip.prototype=Object.create(Sprite.prototype);MovieClip.prototype.constructor=MovieClip;
  Object.defineProperty(MovieClip.prototype,'currentLabel',{get(){let found=null,frame=0;for(const [name,index]of Object.entries(this.timeline?.labels??{}))if(index<=this.currentFrame&&index>=frame){found=name;frame=index;}return found;}});
  Object.assign(MovieClip.prototype,{
    setTextFormat(format){this.textFormat={...this.textFormat,...format};},
    frameNumber(value){if(typeof value==='string'){const label=this.timeline?.labels?.[value];if(label!=null)return label;const n=Number(value);if(!Number.isFinite(n))throw new Error(`Missing label ${value} in ${this.symbolName??this.symbolId}`);value=n;}return Math.max(1,Math.min(this.totalFrames,Math.trunc(value)));},
    gotoAndPlay(value){this.playing=true;this.currentFrame=this.frameNumber(value);this._enterFrame();},
    gotoAndStop(value){this.playing=false;this.currentFrame=this.frameNumber(value);this._enterFrame();},
    play(){this.playing=true;},stop(){this.playing=false;},
    nextFrame(){this.playing=false;if(this.currentFrame<this.totalFrames){this.currentFrame++;this._enterFrame();}},
    prevFrame(){this.playing=false;if(this.currentFrame>1){this.currentFrame--;this._enterFrame();}},
    _enterFrame(){
      if(++this._scriptDepth>32)throw new Error(`Recursive frame script: ${this.symbolName}`);
      try {
        const changes=this.timeline?.namedFrames??{};let entries=null,best=-1;
        for(const [f,list]of Object.entries(changes))if(Number(f)<=this.currentFrame&&Number(f)>best){best=Number(f);entries=list;}
        if(entries){
          this._bounds=entries.length?(this.timeline?.bounds??this._bounds):[0,0,0,0];
          const seen=new Set();for(const e of entries){seen.add(e.depth);let child=this._timelineChildren.get(e.depth);
            if(!child||child.symbolId!==e.id){if(child)this.removeChild(child);child=new MovieClip(e.id,{allowShape:true});child._bounds=child.timeline?.bounds??e.bounds??[0,0,0,0];this._timelineChildren.set(e.depth,child);this.addChildAt(child,Math.min(e.depth,this.children.length));}
            child.name=e.name??'';child.sourcePlacement=e;child.visible=e.visible!==false;child._matrix=e.matrix??[1,0,0,1,0,0];child.x=child._matrix[4];child.y=child._matrix[5];child.rotation=0;child.scaleX=child.scaleY=1;if(e.name)this[e.name]=child;
          }
          for(const [depth,child]of this._timelineChildren)if(!seen.has(depth)){if(child.name&&this[child.name]===child)delete this[child.name];this.removeChild(child);this._timelineChildren.delete(depth);}
        }
        for(const action of this.timeline?.actions?.[this.currentFrame]??[]){let target=this;if(action.target){for(const part of action.target.split('.'))target=target?.[part];}if(!target)throw new Error(`Missing timeline action target ${action.target} in ${this.symbolName}`);if(action.op==='stop')target.stop();else if(action.op==='play')target.play();else if(action.op==='gotoAndPlay')target.gotoAndPlay(action.frame);else if(action.op==='gotoAndStop')target.gotoAndStop(action.frame);else throw new Error(`Unimplemented original timeline action: ${action.op}`);}
      }finally{this._scriptDepth--;}
    },
  });
  const soundNames=new Set(['regularHitSound','superEffectiveSound','ineffectiveHitSound']);
  function symbol(name){if(soundNames.has(name))return function(){this.play=()=>{onSound(name);return null;};};return function(){return new MovieClip(name);};}
  function advance(root){const existing=new Set();const visit=node=>{existing.add(node);for(const child of node.children??[])visit(child);};visit(root);for(const node of existing){if(node!==root&&!node.parent)continue;if(node instanceof MovieClip&&node.playing&&node.totalFrames>1){node.currentFrame=node.currentFrame%node.totalFrames+1;node._enterFrame();}}}
  function snapshot(root){return(root.children??[]).filter(c=>c.visible!==false).map(c=>({name:c.name,fighterUid:c.fighter?.uid,primaryPokemon:!!c.parent?.fighter&&c.parent.gfx===c,symbolName:c.symbolName,symbolId:c.symbolId,currentFrame:c.currentFrame,totalFrames:c.totalFrames,sourcePlacement:c.sourcePlacement,matrix:c.localMatrix(),alpha:c.alpha,colorTransform:c.transform?.colorTransform,filters:c.filters,text:c.text,textColor:c.textColor,textFormat:c.textFormat,children:snapshot(c)}));}
  return{Sprite,MovieClip,symbol,advance,snapshot};
}
