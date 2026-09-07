import {StoryClip,StoryRuntime} from './story-runtime.js';
import {concat} from './story-data-clip.js';
import {createOriginalRenderer} from './original-story-ui.js';
import {xpRequired,levelCost,evolvePokemon} from './model.js';
import {recordOwned} from './profile-features.js';

const TARGETS=[['first','First'],['fastest','Fastest'],['slowest','Slowest'],['weakest','Weakest'],['strongest','Strongest'],['effective','Most effective'],['healthy','Not weakened'],['candy','Has candy'],['no-candy','No candy']];
const child=(root,path)=>path?path.split('.').reduce((c,key)=>c?.[key],root):root;
const blockedMultiplayer=new Set(['multi_level_1_0','multi_level_1_1','multi_level_2']);

/** Source check_Poke exists only for a deployed player actor. The three online
 * stage controllers deliberately override it with an empty method. */
export function battlePokemonEligibility(battle,target){
 if(!battle||battle.disposed)return {ok:false,reason:'No active battle.'};
 if(blockedMultiplayer.has(battle.level.className)||battle.isMultiplayer)return {ok:false,reason:'The original multiplayer controller disables this popup.'};
 const id=typeof target==='string'?target:target?.fighter?.uid??target?.uid;
 const fighters=[...(battle.towers??[]),...(battle.enemies??[])];
 const fighter=fighters.find(f=>f===target||f.uid===id||f.partyUid===id);
 if(!fighter||!fighter.alive||fighter.recalled||fighter.npc)return {ok:false,reason:'The original popup requires a deployed player Pokémon.'};
 const reverse=battle.level.mode==='invasion';
 if(reverse?!fighter.playerControlled:!fighter.placed||fighter.team!=='tower')return {ok:false,reason:'This is not a deployed player Pokémon.'};
 const uid=fighter.partyUid??fighter.uid;
 const profile=(battle.party??[]).find(p=>p?.uid===uid)??(battle.save?.pokemon??[]).find(p=>p?.uid===uid);
 if(!profile)return {ok:false,reason:'The actor has no player party profile.'};
 if(!battle.moveRuntime)return {ok:false,reason:'Original move runtime is required.'};
 return {ok:true,fighter,profile,reverse};
}

export function battleControlBounds(clip){
 if(!clip)return null;let m=[1,0,0,1,0,0];const chain=[];
 for(let c=clip;c?.parent;c=c.parent){if(!c.visible||c.alpha<=0)return null;chain.unshift(c);}
 for(const c of chain){const r=c.rotation*Math.PI/180;m=concat(m,[Math.cos(r)*c.scaleX,Math.sin(r)*c.scaleX,-Math.sin(r)*c.scaleY,Math.cos(r)*c.scaleY,c.x,c.y]);}
 const b=clip.sourceBounds??clip.meta.bounds??[0,0,0,0],points=[[b[0],b[1]],[b[2],b[1]],[b[2],b[3]],[b[0],b[3]]].map(([x,y])=>[m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);
 const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);return {x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)};
}

/** State/controller layer. No DOM and no approximation of the move runtime.
 * Check/Check2 are adapted directly; evolution and learning execute the already
 * translated original popup controllers and their exact timeline actions. */
export function createBattlePokemonCheck(data,battle,target,{campaignSave=battle.save,onChange=()=>{},onClose=()=>{},onCommit=()=>{},onSound=()=>{},onAudio=()=>{},onPhase=()=>{}}={}){
 const eligibility=battlePokemonEligibility(battle,target);if(!eligibility.ok)return eligibility;
 const {fighter,profile,reverse}=eligibility,actor=battle.moveRuntime.actor(fighter),source=actor.myProfile;
 const currency=battle.save,previousState=battle.state,clock={frame:0};let phase='check',closed=false,story=null,pending=null,clip=new StoryClip(data.timelines,'gfx_screen_poke_check',{clock});
 if(previousState==='running')battle.state='paused';source.saveInfo??={};
 const notify=()=>onChange(model);
 const commit=()=>{if(battle.isChallenge&&campaignSave!==currency)campaignSave.money=currency.money;onCommit(profile,model);};
 const selected=()=>source.transformed?source.tmoveSelected:source.moveSelected;
 const moves=()=>Array.from({length:4},(_,i)=>source[(source.transformed?'tmove':'move')+(i+1)]??0);
 const trainable=()=>profile.level<100&&profile.experience>=xpRequired(profile.level)&&currency.money>=levelCost(profile.level);
 function fill(){
  clip.block_current.visible=false; // The source hides this off-stage block.
  clip.yourMoney.text=String(currency.money);clip.upgrade_butt.upgradeCost.text=String(levelCost(profile.level));clip.upgrade_butt.alpha=trainable()?1:.4;
  const list=moves();for(let i=0;i<4;i++)clip.attacks['attack_'+(i+1)].gotoAndStop(list[i]||'empty');
  clip.attacks.hl.gotoAndStop(selected()||1);clip.attacks.attack_description.gotoAndStop(list[(selected()||1)-1]||'empty');
  // Check2 does not initialize or handle the source targeting widget.
  if(!reverse)clip.targeting.hl.gotoAndStop(source.targetType||1);
 }
 function finish(){if(closed)return;closed=true;if(battle.state==='paused'&&previousState==='running'&&!battle.disposed)battle.state='running';onClose(model);}
 function setPhase(value){phase=value;onPhase(value,model);}
 function chooseMove(slot){
  if(closed||phase!=='check'||slot<1||slot>4||!moves()[slot-1]||selected()===slot)return false;
  if(actor.check_Effects(battle.moveRuntime.classes.class_797))return false;
  if(source.transformed)source.tmoveSelected=slot;
  else {source.moveSelected=slot;profile.selectedMove=moves()[slot-1];source.saveInfo.needMoveSelected=true;}
  battle.resetAttack(fighter);fill();commit();notify();return true;
 }
 function chooseTarget(value){
  if(closed||phase!=='check'||reverse||!Number.isInteger(value)||value<1||value>9)return false;
  profile.target=TARGETS[value-1][0];fighter.target=profile.target;source.targetType=value;source.saveInfo.needTarget=true;clip.targeting.hl.gotoAndStop(value);commit();notify();return true;
 }
 function openStory(name,args,nextPhase){
  pending=null;
  story=new StoryRuntime(data,{timelines:data.timelines,save:currency,level:battle.level,battle,onAction:event=>onAudio(event,model)});
  const stage=story.stage;
  Object.assign(stage,{show_UI(){},hide_UI(){},hit_Play(){},reset_Poke(){},pause_Level_Music(){onAudio({type:'battle-audio-pause'},model);},resume_Level_Music(){onAudio({type:'battle-audio-resume'},model);},
   check_Learn_Move(){pending={kind:'learn'};},show_Replace_Move(_actor,id){pending={kind:'replace',id};}});
  const façade={myProfile:story.profile(profile),reset_Attack(){battle.syncPokemon(profile);battle.resetAttack(fighter);commit();},evolve(){if(evolvePokemon(profile,data)){if(currency.pokemon.includes(profile))recordOwned(currency,profile);battle.syncPokemon(profile);commit();}}};
  story.open(name,args(stage,façade));clip=story.root;setPhase(nextPhase);notify();
 }
 function learn(){
  // finder_Poke_Moves.get_Move_Level stops at the FIRST exact-level entry,
  // including when that entry is already known.
  const id=data.species[profile.speciesId].learnset.find(e=>e.level===profile.level)?.moveId;
  if(!id||profile.moves.includes(id)){finish();return;}
  onSound('levelUpSound');
  const name=data.moves[id].name;
  if(profile.moves.length<4){profile.moves.push(id);battle.syncPokemon(profile);commit();openStory('class_979',(s,p)=>[s,p,name],'learned');}
  else openStory('class_970',(s,p)=>[s,p,name,id],'trying');
 }
 function afterStory(){
  if(!story?.closed)return;commit();const next=pending;pending=null;
  if(next?.kind==='learn')learn();
  else if(next?.kind==='replace')openStory('class_975',(s,p)=>[s,p,next.id],'replace');
  else finish();
 }
 function train(){
  if(closed||phase!=='check'||reverse||!trainable())return false;
  currency.money-=levelCost(profile.level);profile.level++;profile.experience=0;
  source.saveInfo.needLevel=true;source.saveInfo.needExp=true;
  battle.syncPokemon(profile);commit();onSound('levelUpSound');
  // do_Check_Level_Up_List removes focus first, then evolves before learning.
  setPhase('advancing');
  if(data.species[profile.speciesId].evolutions.some(e=>e.level&&e.level<=profile.level))openStory('popups_Check_Evolve',(s,p)=>[s,p],'evolve');
  else learn();
  return true;
 }
 function controls(){
  if(closed)return [];
  const control=(path,label,disabled=false)=>({path,name:path.split('.').at(-1),clip:child(clip,path),label,disabled});
  if(phase==='check')return [control('done_butt','Done'),...moves().map((id,i)=>control('attacks.attack_'+(i+1),id?data.moves[id].name:'Empty move',!id)),
   ...(!reverse?[...TARGETS.map(([,label],i)=>control('targeting.t'+(i+1),'Target: '+label)),control('upgrade_butt','Level up',!trainable())]:[])];
  if(phase==='replace')return [control('actual.done_butt','Done'),...profile.moves.map((id,i)=>control('actual.change_Move_screen.attack_'+(i+1),'Replace '+data.moves[id].name))];
  return (story?.controls??[]).map(c=>({...c,path:c.name,label:c.name==='stop_evolving_butt'?'Stop evolving':c.name==='stop_learning_butt'?'Stop learning':c.name==='learn_butt'?'Learn move':c.name}));
 }
 function click(path=null){
  if(closed)return false;
  if(phase==='check'){
   if(path==='done_butt'||path==='outside'){finish();return true;}
   if(path==='upgrade_butt')return train();
   if(/^attacks\.attack_[1-4]$/.test(path??''))return chooseMove(Number(path.at(-1)));
   if(/^targeting\.t[1-9]$/.test(path??''))return chooseTarget(Number(path.at(-1)));
   return false;
  }
  const entry=controls().find(c=>c.path===path||c.name===path),target=entry?.clip??clip;
  const result=story.click(target);afterStory();notify();return result;
 }
 const model={ok:true,battle,fighter,profile,sourceProfile:source,reverse,sourceClass:reverse?'popups_Poke_Check2':'popups_Poke_Check',get clip(){return clip;},get phase(){return phase;},get closed(){return closed;},get controls(){return controls();},get story(){return story;},chooseMove,chooseTarget,train,click,close:finish,
  tick(frames=1){if(closed)return;if(story){story.tick(frames);afterStory();}else for(let i=0;i<frames;i++){clock.frame++;clip.tick();}notify();},
  dispose(){if(closed)return;closed=true;story&&(story.closed=true);if(battle.state==='paused'&&previousState==='running'&&!battle.disposed)battle.state='running';},
 };
 fill();return model;
}

/** Browser adapter. The presentation helper owns black-stage/parent snapshots;
 * the scene owns original map centering, range, tower fading and HUD visibility. */
export function installOriginalBattleUI(app){
 let active=null;
 Object.defineProperty(app,'isBattlePokemonOpen',{configurable:true,get:()=>!!active&&!active.model.closed});
 app.closeBattlePokemon=()=>active?.model.close();
 app.disposeBattlePokemon=()=>{if(!active)return;const session=active;active=null;session.model.dispose();session.dispose();app.scene?.leavePokemonCheck?.();};
 app.openBattlePokemon=target=>{
  const permitted=battlePokemonEligibility(app.battle,target);if(!permitted.ok)return permitted;
  app.disposeBattlePokemon();
  const battle=app.battle,audio=new Set();let session=null;
  const stopAudio=()=>{for(const sound of audio)sound.pause();audio.clear();};
  const model=createBattlePokemonCheck(app.data,battle,target,{campaignSave:app.save,
   onCommit(){app.store();app.renderAll();},onSound:name=>app.scene?.soundEffect?.(name),
   onPhase(phase){if(phase!=='check')app.scene?.leavePokemonCheck?.();},
   onAudio(event){if(event.type==='audio-stop')stopAudio();else if(event.type==='battle-audio-pause')app.scene?.music?.pause?.();else if(event.type==='battle-audio-resume')app.scene?.music?.resume?.();else if(event.type==='audio-play'&&app.save.settings?.sound){const asset=app.assets.audio[event.name];if(asset){const sound=new Audio('assets/'+asset.file);sound.loop=event.loops>1;sound.volume=.6;audio.add(sound);sound.play().catch(()=>{});}}},
   onClose(){if(active!==session)return;active=null;session.dispose();app.scene?.leavePokemonCheck?.();app.closeModal();app.setOriginalPresentation?.('battle');app.renderAll();},
  });
  app.scene?.enterPokemonCheck?.(model.fighter);
  const html='<div class="original-battle-popup" style="position:relative;width:100%;aspect-ratio:5/3;background:transparent;overflow:hidden"><canvas width="800" height="480" style="display:block;width:100%;height:100%;background:transparent"></canvas></div>';
  if(app.openOriginalPopup)app.openOriginalPopup(html,{hideHud:true});else {app.setOriginalPresentation?.('popup',{hideHud:true});app.openModal(html);}
  const panel=document.querySelector('.original-battle-popup'),canvas=panel.querySelector('canvas'),buttons=new Map(),renderers=new Map();let renderer=null,symbol=null,disposed=false,raf=0;
  session={model,panel,canvas,dispose(){disposed=true;cancelAnimationFrame(raf);stopAudio();}};active=session;app.battlePokemonCheck=model;
  const render=()=>{
   const root=model.clip;if(symbol!==root.symbolName){symbol=root.symbolName;renderer=null;const wanted=symbol;if(!renderers.has(wanted))renderers.set(wanted,createOriginalRenderer(canvas,wanted));renderers.get(wanted).then(value=>{if(!disposed&&wanted===symbol)renderer=value;}).catch(error=>{if(!disposed){app.toast(error.message);model.close();}});}
   renderer?.render(root);const wanted=new Set();
   for(const c of model.controls){const b=battleControlBounds(c.clip);if(!b||b.width<=0||b.height<=0)continue;wanted.add(c.path);let el=buttons.get(c.path);
    if(!el){el=document.createElement('button');el.type='button';el.dataset.originalControl=c.path;Object.assign(el.style,{position:'absolute',border:'0',background:'transparent',boxShadow:'none',padding:'0',minWidth:'0',minHeight:'0',color:'transparent'});el.onclick=event=>{event.stopPropagation();model.click(c.path);render();};buttons.set(c.path,el);panel.append(el);}
    el.setAttribute('aria-label',c.label);el.disabled=!!c.disabled;Object.assign(el.style,{left:b.x/8+'%',top:b.y/4.8+'%',width:b.width/8+'%',height:b.height/4.8+'%'});
   }
   for(const [key,el]of buttons)if(!wanted.has(key)){el.remove();buttons.delete(key);}
  };
  canvas.onclick=event=>{const rect=canvas.getBoundingClientRect(),x=Math.max(0,Math.min(799,Math.floor((event.clientX-rect.left)*800/rect.width))),y=Math.max(0,Math.min(479,Math.floor((event.clientY-rect.top)*480/rect.height)));const alpha=canvas.getContext('2d').getImageData(x,y,1,1).data[3];model.click(model.phase==='check'&&alpha===0?'outside':null);render();};
  canvas.tabIndex=0;canvas.setAttribute('aria-label','Original Pokémon battle popup');canvas.onkeydown=event=>{if(event.key==='Escape'){if(model.phase==='check')model.close();}else if(event.key==='Enter'||event.key===' '){event.preventDefault();model.click();render();}};
  const onCancel=event=>{if(active===session){event.preventDefault();if(model.phase==='check')model.close();}},modal=document.querySelector('#modal');document.querySelector('#modal-close').hidden=true;modal.addEventListener('cancel',onCancel);const onClosed=()=>{if(active===session)model.close();};modal.addEventListener('close',onClosed);
  const dispose=session.dispose;session.dispose=()=>{dispose();modal.removeEventListener('cancel',onCancel);modal.removeEventListener('close',onClosed);};
  let last=performance.now(),carry=0;
  const frame=now=>{if(disposed)return;if(app.battle!==battle||!panel.isConnected||!modal.open){app.disposeBattlePokemon();return;}carry+=Math.min(250,now-last);last=now;while(carry>=1000/21&&!model.closed){carry-=1000/21;model.tick();}if(!model.closed){render();raf=requestAnimationFrame(frame);}};
  render();raf=requestAnimationFrame(frame);return model;
 };
}
