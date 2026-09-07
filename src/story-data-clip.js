/** Native timeline state for recovered MovieClips (1-based frame numbers). */
export class StoryClip {
  constructor(library, reference, options={}) {
    this.library=library;this.symbolId=typeof reference==='number'?reference:library.byName[reference];
    this.meta=library.symbols[this.symbolId]??{id:this.symbolId,names:[reference],frames:1,labels:{},namedFrames:{}};
    if(library.textFields?.[this.symbolId])this.text=library.textFields[this.symbolId].initialText.replace(/\r\n?/g,'\n').replace(/\n$/,'');
    this.symbolName=this.meta.names?.[0]??String(reference);this.name=options.name??'';this.parent=options.parent??null;
    this.x=0;this.y=0;this.scaleX=1;this.scaleY=1;this.rotation=0;this.alpha=1;this.visible=true;this.mouseEnabled=true;
    this.currentFrame=1;this.playing=true;this.childrenByDepth=new Map();this.listeners=new Map();this.frameKeys=Object.keys(this.meta.namedFrames??{}).map(Number).sort((a,b)=>a-b);
    this.labelEntries=Object.entries(this.meta.labels??{}).sort((a,b)=>a[1]-b[1]);this.clock=options.clock??{frame:0};this.bornAt=this.clock.frame;this.serial=options.serial??'root';this.jumps=0;
    const proxy=new Proxy(this,{get:(t,k,r)=>{if(k in t)return Reflect.get(t,k,r);return [...t.childrenByDepth.values()].find(c=>c.name===k);}});this.proxy=proxy;
    this.reconcile();this.runActions();return proxy;
  }
  get totalFrames(){return this.meta.frames??1;}
  get currentLabel(){let value=null;for(const [label,frame]of this.labelEntries){if(frame>this.currentFrame)break;value=label;}return value;}
  get numChildren(){return this.childrenByDepth.size;}
  get width(){const b=this.meta.bounds??[0,0,0,0];return (b[2]-b[0])*Math.abs(this.scaleX);}
  get height(){const b=this.meta.bounds??[0,0,0,0];return (b[3]-b[1])*Math.abs(this.scaleY);}
  set width(v){const b=this.meta.bounds??[0,0,1,1];this.scaleX=v/(b[2]-b[0]||1);}
  set height(v){const b=this.meta.bounds??[0,0,1,1];this.scaleY=v/(b[3]-b[1]||1);}
  play(){this.playing=true;}
  stop(){this.playing=false;}
  gotoAndPlay(frame){this.goto(frame,true);}
  gotoAndStop(frame){this.goto(frame,false);}
  goto(frame,playing){
    const value=typeof frame==='string'?(this.meta.labels?.[frame]??(/^\d+$/.test(frame)?Number(frame):undefined)):Number(frame);
    if(!Number.isInteger(value)||value<1||value>this.totalFrames)throw new Error(`Unknown frame ${frame} in ${this.symbolName}`);
    if(value===this.currentFrame){this.playing=playing;return;}
    this.currentFrame=value;this.playing=playing;this.reconcile();this.runActions();this.dispatchEvent({type:'frameConstructed'});
  }
  frameChildren(){let key=0;for(const candidate of this.frameKeys){if(candidate>this.currentFrame)break;key=candidate;}return this.meta.namedFrames?.[key]??[];}
  reconcile(){
    const wanted=new Set();for(const entry of this.frameChildren()){
      const key=entry.depth;wanted.add(key);let child=this.childrenByDepth.get(key);
      if(!child||child.symbolId!==entry.id){child=new StoryClip(this.library,entry.id,{name:entry.name,parent:this.proxy,clock:this.clock,serial:`${this.serial}/${key}:${entry.id}`});this.childrenByDepth.set(key,child);}
      child.name=entry.name;if(child.sourceVisible!==entry.visible){child.visible=entry.visible!==false;child.sourceVisible=entry.visible;}child.sourcePlacement=entry;
      const [a,b,c,d,tx,ty]=entry.matrix;child.sourceMatrix=entry.matrix;child.sourceBounds=entry.bounds;
      if(!child.placementSignature||child.placementSignature!==JSON.stringify(entry.matrix)){
        child.x=tx;child.y=ty;child.scaleX=Math.hypot(a,b)*(a<0?-1:1);child.scaleY=Math.hypot(c,d)*(d<0?-1:1);child.rotation=Math.atan2(b,a)*180/Math.PI;child.placementSignature=JSON.stringify(entry.matrix);
      }
    }
    for(const [depth]of this.childrenByDepth)if(!wanted.has(depth))this.childrenByDepth.delete(depth);
  }
  runActions(){
    if(++this.jumps>32)throw new Error(`Recursive frame actions in ${this.symbolName}`);
    try{for(const action of this.meta.actions?.[this.currentFrame]??[]){const target=action.target?this.proxy[action.target]:this;if(!target)throw new Error(`Missing timeline target ${action.target} in ${this.symbolName}`);target[action.op](action.frame);}}
    finally{this.jumps--;}
  }
  tick(){
    if(this.playing){this.currentFrame=this.currentFrame%this.totalFrames+1;this.reconcile();this.runActions();this.dispatchEvent({type:'frameConstructed'});}
    for(const child of [...this.childrenByDepth.values()])if(child.bornAt<this.clock.frame)child.tick();
    this.dispatchEvent({type:'enterFrame'});
  }
  getChildByName(name){return [...this.childrenByDepth.values()].find(c=>c.name===name)??null;}
  getChildAt(index){return [...this.childrenByDepth.values()].sort((a,b)=>(a.sourcePlacement?.depth??0)-(b.sourcePlacement?.depth??0))[index]??null;}
  addChild(child){child.parent=this.proxy;this.childrenByDepth.set(`dynamic-${this.childrenByDepth.size}`,child);return child;}
  removeChild(child){for(const [key,c]of this.childrenByDepth)if(c===child)this.childrenByDepth.delete(key);return child;}
  addEventListener(name,callback){if(!this.listeners.has(name))this.listeners.set(name,new Set());this.listeners.get(name).add(callback);}
  removeEventListener(name,callback){this.listeners.get(name)?.delete(callback);}
  dispatchEvent(event){for(const callback of this.listeners.get(event.type)??[])callback.call(this.proxy,{...event,target:this.proxy});}
  contains(child){return child===this.proxy||[...this.childrenByDepth.values()].some(c=>c===child||c.contains(child));}
  controls(parentMatrix=[1,0,0,1,this.x,this.y]){
    if(!this.visible||this.alpha<=0)return[];const output=[];
    for(const child of this.childrenByDepth.values()){
      if(!child.visible||!child.mouseEnabled)continue;
      const m=(child.sourceMatrix??[1,0,0,1,child.x,child.y]).slice();m[4]=child.x;m[5]=child.y;const sx=Math.hypot(m[0],m[1])*(m[0]<0?-1:1)||1,sy=Math.hypot(m[2],m[3])*(m[3]<0?-1:1)||1;m[0]*=child.scaleX/sx;m[1]*=child.scaleX/sx;m[2]*=child.scaleY/sy;m[3]*=child.scaleY/sy;const matrix=concat(parentMatrix,m);
      if(/(^|_)(butt|button|btn)(_|$)|^level\d+$|^attack_[1-4]$|^mysteryCode$/.test(child.name??'')){const r=child.sourceBounds??child.meta.bounds??[0,0,0,0],p=[[r[0],r[1]],[r[2],r[1]],[r[2],r[3]],[r[0],r[3]]].map(([x,y])=>({x:matrix[0]*x+matrix[2]*y+matrix[4],y:matrix[1]*x+matrix[3]*y+matrix[5]}));const xs=p.map(p=>p.x),ys=p.map(p=>p.y);output.push({name:child.name,clip:child,x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)});}
      else output.push(...child.controls(matrix));
    }return output;
  }
}
export function concat(a,b){return[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]];}
