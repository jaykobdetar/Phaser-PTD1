import {StoryRuntime} from './story-runtime.js';
import {STORY_CONTROLLERS} from './story-data-controllers.js';
import {PROFILE_CONTROLLERS} from './profile-source-generated.js';
import {evolvePokemon} from './model.js';
import {recordOwned} from './profile-features.js';

/** Executes recovered popups_Level subclasses with profile and screen adapters.
 * Constructor/branch/animation code is static source translation, not evaluated. */
export function createProfilePopup(data,save,profile,name,{moveId=0,onChange=()=>{},onAudio=()=>{},onCommit=()=>{},onClose=()=>{},onBack=()=>{},onLearn=()=>{},onOpen=()=>{}}={}){
 class ProfileRuntime extends StoryRuntime{
  profile(native){if(!native)return null;this.sourceProfiles??=new WeakMap();if(this.sourceProfiles.has(native))return this.sourceProfiles.get(native);const base=super.profile(native),proxy=new Proxy(base,{get(t,k){return k==='whichStone'?native.whichStone??0:t[k];},set(t,k,v){if(k==='whichStone')native.whichStone=Number(v);else t[k]=v;return true;}});this.sourceProfiles.set(native,proxy);return proxy;}
  instantiate(name,args){
   const definition=PROFILE_CONTROLLERS[name];if(!definition)return super.instantiate(name,args);
   const previous=STORY_CONTROLLERS[name],runtime=this;
   STORY_CONTROLLERS[name]={...definition,fields:{__sourceAdapter:function(){
    this.main={playerProfile:runtime.sourcePlayer};
    this.finder_Poke_Moves={get_TMList:p=>{const s=data.species[p.num];return [...(p.shiny===2&&s.shadowExtraTmMoveId?[s.shadowExtraTmMoveId]:[]),...s.tmMoveIds];},relearn_Moves:p=>data.species[p.num].learnset.filter(e=>e.level<=p.level).map(e=>e.moveId),check_If_Pokemon_Has_Move:(id,p)=>[p.move1,p.move2,p.move3,p.move4].includes(id)};
   },...definition.fields}};
   try{return super.instantiate(name,args);}finally{if(previous)STORY_CONTROLLERS[name]=previous;else delete STORY_CONTROLLERS[name];}
  }
 }
 const runtime=new ProfileRuntime(data,{timelines:data.timelines,save,onAction:onAudio}),p=runtime.profile(profile);let next=null,closed=false;
 p.myID=profile.uid;p.evolve=()=>{
  const evolution=data.species[profile.speciesId].evolutions.find(e=>e.itemId===profile.whichStone);
  if(evolution){profile.speciesId=evolution.to;recordOwned(save,profile);}else if(evolvePokemon(profile,data))recordOwned(save,profile);
  runtime.fillProfileInfo(p);onCommit(profile);
 };
 const originalProfiles=new Map(save.pokemon.map(entry=>[entry.uid,entry]));
 const party=new Proxy([],{
  get(t,k){const values=Array.from({length:6},(_,i)=>runtime.profile(originalProfiles.get(save.party[i])));if(/^\d+$/.test(String(k)))return values[Number(k)];if(k==='length')return 6;const value=values[k];return typeof value==='function'?value.bind(values):value;},
  set(t,k,v){if(/^\d+$/.test(String(k)))save.party[Number(k)]=v?.__native?.uid??null;return true;}
 });
 runtime.sourcePlayer=new Proxy(runtime.playerProfile,{get(t,k){if(k==='partyList')return party;if(k==='useItem')return id=>{save.inventory[id]--;onCommit(profile);};return t[k];},set(t,k,v){t[k]=v;return true;}});
 Object.assign(runtime.stage,{set_Profile(){},back_Pressed(){next={type:'back'};},check_New_Move(id=0){next={type:'learn',id};},show_Replace_Move(id){next={type:'open',name:'popups_Replace_Move',id};},add_Popup(value){next={type:'open',name:value.sourceClass,id:value.args?.[2]};runtime.closed=true;}});
 const args=name==='popups_Replace_Move'?[runtime.stage,p,moveId]:[runtime.stage,p];
 // The optional move arguments mirror each original constructor signature.
 runtime.open(name,name==='popups_Learned_New_Move'?[runtime.stage,p,data.moves[moveId].name]:name==='popups_Trying_New_Move'?[runtime.stage,p,data.moves[moveId].name,moveId]:args);
 const finish=()=>{if(!runtime.closed||closed)return;closed=true;onCommit(profile);if(next?.type==='back')onBack();else if(next?.type==='learn')onLearn(next.id);else if(next?.type==='open')onOpen(next.name,next.id);else onClose();};
 const controls=()=>{
  const root=runtime.root,all=runtime.controls,entries=all.map(c=>{let path=c.name;if(all.filter(v=>v.name===c.name).length>1){const parts=[];for(let at=c.clip;at&&at!==root;at=at.parent)parts.unshift(at.name);path=parts.join('.');}return {...c,path};});
  const add=(path,label)=>{let c=path.split('.').reduce((o,k)=>o?.[k],root);if(c?.visible)entries.push({path,name:c.name,clip:c,label});};
  if(name==='popups_TM'||name==='popups_Relearn')for(let i=1;i<=20;i++)add('actual.attack_'+i,data.moves[runtime.controller.moves[i-1+(name==='popups_TM'?(runtime.controller.currentPage-1)*20:0)]]?.name);
  if(name==='popups_Replace_Move')for(let i=1;i<=4;i++)add('actual.change_Move_screen.attack_'+i,'Replace '+data.moves[profile.moves[i-1]]?.name);
  return entries;
 };
 return {runtime,name,profile,get clip(){return runtime.root;},get closed(){return closed;},get controls(){return controls();},click(path){const target=controls().find(c=>c.path===path||c.name===path)?.clip??runtime.root;runtime.click(target);finish();onChange();},tick(){runtime.tick();finish();onChange();},dispose(){closed=true;runtime.closed=true;}};
}
