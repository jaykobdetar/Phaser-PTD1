import {normalizePartySlots,addPartyMember,removePartyMember,partyProfiles} from './party-slots.js';
import {rockTunnelSession} from './rock-tunnel.js';
import {STORY_AUDIO_SYMBOLS} from './story-data-audio.js';
import {STORY_CONTROLLERS} from './story-data-controllers.js';
import {StoryClip,concat} from './story-data-clip.js';
import {makePokemon} from './model.js';
import {recordOwned} from './profile-features.js';
export {StoryClip};

/** Native execution adapter for the recovered popup controllers. */
export class StoryRuntime {
 constructor(data,{timelines,save,level,battle=null,stageFlags={},rng=Math.random,onAction=()=>{},onChange=()=>{},onComplete=()=>{}}={}){
  this.math=Object.create(Math);this.math.random=rng;this.data=data;this.timelines=timelines;this.save=save;this.level=level;this.battle=battle;this.onAction=onAction;this.onChange=onChange;this.onComplete=onComplete;this.clock={frame:0};this.closed=false;this.tweens=[];this.timers=[];this.partySave=battle?.save??save;this.profileWrappers=new WeakMap();this.pendingActions=[];this.stageFlags=stageFlags;this.extraProfile={latestID:save.pokemon.length};this.playerProfile=this.profileUser();this.stage=this.stageProxy();
 }
 emit(type,details={}){this.onAction({type,...details,runtime:this});}
 clip(name){return new StoryClip(this.timelines,name,{clock:this.clock});}
 get root(){return this.controller?.var_49??this.controller?.gfx??this.controller?.gfx_BG??this.controller?._children?.[0]??null;}
 get renderRoot(){const root=this.root;if(!root)return null;const chain=[];for(let c=root;c;c=c.parent)chain.unshift(c);let matrix=[1,0,0,1,0,0],alpha=1,visible=true;for(const c of chain){const angle=(c.rotation??0)*Math.PI/180,sx=c.scaleX??1,sy=c.scaleY??1;matrix=concat(matrix,[Math.cos(angle)*sx,Math.sin(angle)*sx,-Math.sin(angle)*sy,Math.cos(angle)*sy,c.x??0,c.y??0]);alpha*=c.alpha??1;visible&&=c.visible!==false;}return {...root,x:matrix[4],y:matrix[5],renderMatrix:matrix,alpha,visible};}
 get controls(){const root=this.root,view=this.renderRoot;return root&&view.visible&&view.alpha>0?root.controls(view.renderMatrix):[];}
 show(){if(this.root&&!this.closed)this.onChange({root:this.root,controls:this.controls,controller:this.controllerName,runtime:this});}
 open(name,args=[]){this.closed=false;this.controllerName=name;this.controller=this.instantiate(name,args.length?args:[this.stage]);this.show();return this;}
 tick(frames=1){for(let i=0;i<frames&&!this.closed;i++){this.clock.frame++;this.root?.tick();for(const tween of [...this.tweens])tween.tick();for(const timer of [...this.timers])timer.tick();this.controller?.run?.({type:'enterFrame'});}this.show();}
 click(target){if(this.closed)return false;const button=typeof target==='string'?this.controls.find(b=>b.name===target)?.clip:target;if(!button||!button.visible)return false;this.controller.mouse_Down?.({target:button});if(!this.closed)this.controller.mouse_Up?.({target:button});this.show();return true;}
 instantiate(name,args){
  const definition=STORY_CONTROLLERS[name];if(!definition)throw new Error(`Missing source popup controller ${name}`);
  const runtime=this;function displayCast(value){return value;}Object.defineProperty(displayCast,Symbol.hasInstance,{value:value=>value instanceof StoryClip});const object={_children:[],my_Parent:args[0],var_634:args[0],main:{playerProfile:this.playerProfile},MovieClip:displayCast,Sprite:displayCast,DisplayObject:displayCast,Event:{ENTER_FRAME:'enterFrame'},MouseEvent:{},TweenEvent:{MOTION_FINISH:'motionFinish'},Regular:{easeInOut:(t,b,c,d)=>b+c*(t/d<.5?2*(t/d)**2:1-(-2*t/d+2)**2/2)},class_1:{var_25:1,var_194:1},Math:this.math,Number,String,Boolean,Array,Object};
  const base={
   init(){if(object.get_Graphic){object.gfx=object.get_Graphic();if(object.gfx)object.addChild(object.gfx);}},
   remove_Me(){runtime.closed=true;runtime.emit('popup-closed',{popup:name});},run(){return false;},destroy(){},
  };
  object.__super=Object.fromEntries(Object.entries(base).map(([key,fn])=>[key,fn.bind(object)]));
  object.__baseConstructor=()=>{if(definition.parent==='popup')object.init?.();};
  object.addChild=child=>{object._children.push(child);return child;};object.removeChild=child=>{object._children=object._children.filter(c=>c!==child);return child;};
  object.send_Msg=message=>runtime.message(message);object.send_Msg_Public=object.send_Msg;object.trace=(...values)=>runtime.emit('trace',{values});object.remove_Me=base.remove_Me;object.init=base.init;
  object.method_5=name=>runtime.emit('audio-play',{name:'cry_'+name,loops:1});object.Strong={easeOut:(t,b,c,d)=>b+c*(1-(1-t/d)**5)};object.Regular.easeOut=(t,b,c,d)=>b+c*(1-(1-t/d)**2);object.None={easeNone:(t,b,c,d)=>b+c*t/d};object.TransitionManager={start:(clip,options)=>{clip.pixelDissolve={progress:0,...options};runtime.tween(clip.pixelDissolve,'progress',null,0,1,options.duration,true);}};
  object.SoundMixer={stopAll:()=>runtime.emit('audio-stop')};object.SoundTransform=function(volume=1){this.volume=volume;};object.getDefinitionByName=name=>runtime.factory(name);
  object.finder_Poke_Info={get_Poke_Info:profile=>runtime.fillProfileInfo(profile),calculate_HP:p=>Math.floor(2*p.base_HP*p.level/100)+10+p.level};
  for(const token of new Set([...definition.imports,...definition.constructors]))if(!(token in object))object[token]=runtime.factory(token);
  for(const [key,fn]of Object.entries(definition.methods))object[key]=fn.bind(object);
  for(const [key,fn]of Object.entries(definition.fields))object[key]=fn.call(object);
  if(object[name])object[name](...args);else object.__baseConstructor(...args);
  return object;
 }
 factory(name){
  const runtime=this;
  if(name==='profile_poke')return function(){return runtime.profile(makePokemon(runtime.data,1,1));};
  if(name==='profile_poke_val')return function(){return {reset(){},check_Up:()=>true};};
  if(name==='Timer')return function(delay,repeatCount=0){return runtime.timer(delay,repeatCount);};
  if(name==='Tween')return function(...args){return runtime.tween(...args);};
  if(name==='Point')return function(x=0,y=0){this.x=x;this.y=y;};
  if(STORY_AUDIO_SYMBOLS.has(name)||name==='Sound'||/Music|Sound|Song|_song|_music|^cry_|^oak_lab$/.test(name))return function(){return {play(offset=0,loops=0){runtime.emit('audio-play',{name,offset,loops});return{soundTransform:{},stop(){runtime.emit('audio-stop',{name});}};}};};
  if(this.timelines.byName[name])return function(){return runtime.clip(name);};
  return function(...args){if(!new.target)return args[0];return {sourceClass:name,args};};
 }
 tween(target,property,ease,begin,end,duration,useSeconds=false){
  const runtime=this;const total=Math.max(1,Math.round(duration*(useSeconds?21:1)));let elapsed=0;const listeners=new Map();target[property]=begin;
  const tween={start(){if(!runtime.tweens.includes(tween))runtime.tweens.push(tween);},addEventListener:(key,cb)=>listeners.set(key,cb),removeEventListener:key=>listeners.delete(key),stop:()=>{runtime.tweens=runtime.tweens.filter(t=>t!==tween);},tick(){elapsed++;target[property]=typeof ease==='function'?ease(elapsed,begin,end-begin,total):begin+(end-begin)*elapsed/total;if(elapsed>=total){target[property]=end;tween.stop();listeners.get('motionFinish')?.({type:'motionFinish',target:tween});}}};this.tweens.push(tween);return tween;
 }
 timer(delay,repeatCount){const runtime=this;let elapsed=0,count=0,running=false;const listeners=new Map();const timer={addEventListener:(key,callback)=>listeners.set(key,callback),removeEventListener:key=>listeners.delete(key),start(){running=true;if(!runtime.timers.includes(timer))runtime.timers.push(timer);},stop(){running=false;runtime.timers=runtime.timers.filter(t=>t!==timer);},reset(){timer.stop();elapsed=0;count=0;},tick(){if(!running)return;elapsed+=1000/21;if(elapsed>=delay){elapsed-=delay;count++;listeners.get('timer')?.({type:'timer',target:timer});if(repeatCount&&count>=repeatCount){timer.stop();listeners.get('timerComplete')?.({type:'timerComplete',target:timer});}}}};return timer;}
 message(value){
  if(value==='sponsor')return 'local';if(value==='getPikachuCount')return rockTunnelSession.pikachuCaptures;
  if(Array.isArray(value)){if(value[0]==='change_Screen'){this.closed=true;this.emit('change-stage',{destination:value[1]?.sourceClass,args:value[1]?.args});this.onComplete({type:'change-stage',destination:value[1]?.sourceClass,runtime:this});return true;}this.emit('source-message',{message:value});return null;}
  if(value==='get_Profile')return this.playerProfile;
  this.emit('source-message',{message:value});return null;
 }
 stageProxy(){
  const runtime=this;const fromUid=uid=>this.profile(this.partySave.pokemon.find(p=>p.uid===uid));const facts=this.battle?.stageFacts??{},hooks=this.battle?.stageHooks??{};const target={var_644:fromUid(hooks.abraUid??facts.abraUid),var_665:Boolean(hooks.cutOpened),var_640:fromUid(facts.poliwhirlUid),var_660:fromUid(facts.spearowUid),...this.stageFlags,gfx_BG:this.clip(this.level?.background??'gfx_level_1'),gfx_UI:this.clip('gfx_screen_level_select'),my_Parent:null,
   start_Level(...args){runtime.save.lastLevelVisited=Math.max(runtime.save.lastLevelVisited??0,Number(runtime.level?.progressionId??runtime.level?.id)||0);runtime.closed=true;runtime.emit('start-battle',{args,waveClass:args[2]?.sourceClass});runtime.onComplete({type:'start-battle',args,runtime});},
   end_Level(destination=null){runtime.closed=true;runtime.emit('end-level',{destination});runtime.onComplete({type:'end-level',destination,runtime});},
   pause_Level_Music(){runtime.emit('battle-audio-pause');},resume_Level_Music(){runtime.emit('audio-play',{name:runtime.level?.music,loops:10});},show_UI(){this.gfx_UI.visible=true;},removeChild(){},hide_UI(){this.gfx_UI.visible=false;},hit_Play(){},reset_Poke(){runtime.emit('party-refresh');},remove_Popup(){runtime.closed=true;},
   add_Popup(popup){runtime.open(popup.sourceClass,popup.args);},
   i_Win(){runtime.emit('complete-stage',{levelId:runtime.level?.id});return {sourceClass:runtime.level?.winPopup,args:[runtime.stage]};},
   send_Msg_Public:(message)=>runtime.message(message),show_Achievement_Popup:(id,value=1)=>{runtime.save.achievements??={};runtime.save.achievements[id]=value;runtime.emit('achievement',{id,value});},
  };
  return new Proxy(target,{get(t,k){if(k in t)return t[k];if(runtime.battle&&k in runtime.battle)return runtime.battle[k];if(String(k).startsWith('var_'))return false;return undefined;},set(t,k,v){t[k]=v;runtime.stageFlags[k]=v;return true;}});
 }
 profile(native){
  if(!native)return null;if(this.profileWrappers.has(native))return this.profileWrappers.get(native);
  const runtime=this;const extra={saveInfo:{},val:{reset(){},check_Up:()=>true},whoMe:'',targetType:1,myTag:native.myTag??'n'};const slots=[...native.moves];
  const proxy=new Proxy(extra,{get(t,k){
   if(k==='__native')return native;if(k==='num')return native.speciesId;if(k==='name')return runtime.data.species[native.speciesId]?.name??'';
   if(k==='moveSelected')return Math.max(1,slots.indexOf(native.selectedMove)+1);if(k==='numMoves')return slots.filter(Boolean).length;if(/^move[1-4]$/.test(String(k)))return slots[Number(k.slice(-1))-1]??0;
   if(k==='is_Type')return id=>runtime.data.species[native.speciesId]?.typeIds.includes(id)??false;if(k==='check_Security')return()=>true;
   if(k==='nickname')return native.nickname||runtime.data.species[native.speciesId]?.name;if(k in native)return native[k];return t[k]??0;
  },set(t,k,v){
   if(k==='num')native.speciesId=Number(v);else if(k==='moveSelected')native.selectedMove=slots[Math.max(0,Number(v)-1)]??slots.find(Boolean)??1;
   else if(/^move[1-4]$/.test(String(k))){const selectedSlot=slots.indexOf(native.selectedMove);slots[Number(k.slice(-1))-1]=Number(v);native.moves=slots.filter(id=>runtime.data.moves[id]);native.selectedMove=native.moves.includes(slots[selectedSlot])?slots[selectedSlot]:native.moves[0]??1;}
   else if(k==='numMoves'){}else if(['level','experience','shiny','nickname','myTag','target'].includes(k))native[k]=v;else t[k]=v;return true;
  }});this.profileWrappers.set(native,proxy);this.fillProfileInfo(proxy);return proxy;
 }
 fillProfileInfo(profile){const s=this.data.species[profile.num];if(!s)throw new Error(`Unknown source Pokémon ${profile.num}`);Object.assign(profile,{base_HP:s.stats.hp,base_Attack:s.stats.attack,base_Defense:s.stats.defense,base_Special_Attack:s.stats.specialAttack,base_Special_Defense:s.stats.specialDefense,speed:s.stats.speed,base_Experience:s.baseExperience,reward:s.reward});return profile;}
 profileUser(){
  const runtime=this,save=this.save,extra=this.extraProfile;
  const collections=kind=>new Proxy([],{get(t,key){const partySave=runtime.partySave;const list=kind==='party'?partyProfiles(partySave):save.pokemon;
   if(key==='length')return list.length;if(String(key).match(/^\d+$/))return runtime.profile(list[Number(key)]);if(key===Symbol.iterator)return function*(){for(const p of list)yield runtime.profile(p);};
   if(key==='push')return(...profiles)=>{for(const p of profiles){const native=p.__native??p;const destination=kind==='party'?runtime.partySave:save;if(!destination.pokemon.includes(native)){destination.pokemon.push(native);if(destination===save)recordOwned(save,native);runtime.emit('pokemon-reward',{profile:native});}if(kind==='party')addPartyMember(destination,native.uid);}return kind==='party'?runtime.partySave.party.length:save.pokemon.length;};
   if(key==='splice')return(start,count,...entries)=>{const removed=list.slice(start,start+count).map(p=>runtime.profile(p));if(kind==='party'){runtime.partySave.party=normalizePartySlots(runtime.partySave.party);runtime.partySave.party.splice(start,count,...entries.map(p=>p?.__native?.uid??null));runtime.partySave.party=normalizePartySlots(runtime.partySave.party);}else save.pokemon.splice(start,count,...entries.map(p=>p.__native));return removed;};
   const value=list.map(p=>runtime.profile(p))[key];return typeof value==='function'?value.bind(list.map(p=>runtime.profile(p))):value;
  },set(t,key,value){if(/^\d+$/.test(String(key))&&kind==='party'){runtime.partySave.party=normalizePartySlots(runtime.partySave.party);if(value)runtime.partySave.party[Number(key)]=value.__native.uid;else {const uid=runtime.partySave.party[Number(key)];if(uid)removePartyMember(runtime.partySave,uid);else runtime.partySave.party[Number(key)]=null;}return true;}return true;}});
  const methods={partyList:collections('party'),pokeList:collections('all'),fightList:[],save_Profile:()=>runtime.emit('save'),update_Pokedex:p=>{recordOwned(save,p.__native??p);runtime.emit('profile-change');},
   haveThisExtraInfo:id=>Boolean(save.extraInfoValues?.[id]||save.originalExtraInfo?.includes(id)),getExtraInfo:id=>save.extraInfoValues?.[id]??0,addExtraInfo:(id,value=1)=>{if(save.extraInfoValues?.[id]||save.originalExtraInfo?.includes(id))return false;save.extraInfoValues??={};save.extraInfoValues[id]=value;save.originalExtraInfo??=[];if(!save.originalExtraInfo.includes(id))save.originalExtraInfo.push(id);runtime.emit('quest-progress',{id,value});return true;},
   getItemValue:id=>save.inventory?.[id]??0,addItem:(id,quantity=1)=>{save.inventory??={};save.inventory[id]=(save.inventory[id]??0)+quantity;runtime.emit('item-reward',{id,quantity});},
   is_Legal:()=>false,reset_Fight_List(){methods.fightList.length=0;},reset_Party_List(){runtime.partySave.party=normalizePartySlots([]);},
  };
  const aliases={myName:'trainer',clevelCompleted:'challengeCompleted',nickName:'trainer',nickname:'trainer',clevel1CodeUsed:'npcTrade',haveFlash:'haveFlash',lastLevelVisited:'lastLevelVisited',badges:'badges',money:'money'};
  return new Proxy(methods,{get(t,k){if(k in t)return t[k];if(k==='levelUnlocked')return save.unlocked-1;if(k==='currentVersion')return save.gameVersion??1;if(k==='myAvatarGender')return save.avatar?.gender??'boy';if(k==='myAvatarStyle')return save.avatar?.style??1;if(k in aliases)return save[aliases[k]]??(k==='clevel1CodeUsed'?'':0);return extra[k]??0;},set(t,k,v){if(k==='levelUnlocked')save.unlocked=Math.max(save.unlocked,Number(v)+1);else if(k==='currentVersion')save.gameVersion=Number(v);else if(k==='myAvatarGender'){save.avatar??={gender:'boy',style:1};save.avatar.gender=v;}else if(k==='myAvatarStyle'){save.avatar??={gender:'boy',style:1};save.avatar.style=v;}else if(k in aliases)save[aliases[k]]=v;else extra[k]=v;return true;}});
 }
}
