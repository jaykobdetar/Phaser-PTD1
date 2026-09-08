import {createProfilePopup} from './profile-source.js';
import {StoryClip,concat} from './story-data-clip.js';
import {createOriginalRenderer} from './original-story-ui.js';
import {ITEMS,buyItem,recordOwned} from './profile-features.js';
import {achievementStatus,claimAchievement} from './achievements.js';
import {LOCAL_GIFTS,redeemGift} from './local-services.js';
import {makePokemon,xpRequired,levelCost} from './model.js';
import {CenterService} from './center-model.js';
import {persistOriginalProfile} from './original-save.js';

const $=s=>document.querySelector(s);
const form=p=>(p.shiny===2?'ss':p.shiny===1?'s':'')+p.speciesId;
const at=(root,path)=>typeof path==='string'?path.split('.').reduce((c,key)=>c?.[key],root):undefined;
const setText=(root,path,value)=>{const c=at(root,path);if(c)c.text=String(value);};
const stop=(root,path,frame)=>{const c=at(root,path);if(c)c.gotoAndStop(frame);};

/** Bounds of a live source child, including nested placement and UI animation. */
export function originalControlBounds(clip){
 if(!clip)return null;let matrix=[1,0,0,1,0,0];const chain=[];
 for(let c=clip;c?.parent;c=c.parent){if(!c.visible||c.alpha<=0)return null;chain.unshift(c);}
 for(const c of chain){const r=c.rotation*Math.PI/180;matrix=concat(matrix,[Math.cos(r)*c.scaleX,Math.sin(r)*c.scaleX,-Math.sin(r)*c.scaleY,Math.cos(r)*c.scaleY,c.x,c.y]);}
 const b=clip.sourceBounds??clip.meta.bounds??[0,0,0,0],p=[[b[0],b[1]],[b[2],b[1]],[b[2],b[3]],[b[0],b[3]]].map(([x,y])=>[matrix[0]*x+matrix[2]*y+matrix[4],matrix[1]*x+matrix[3]*y+matrix[5]]);
 return {x:Math.min(...p.map(p=>p[0])),y:Math.min(...p.map(p=>p[1])),width:Math.max(...p.map(p=>p[0]))-Math.min(...p.map(p=>p[0])),height:Math.max(...p.map(p=>p[1]))-Math.min(...p.map(p=>p[1]))};
}

export function partySelectionChapter(id){return Math.max(1,[5,11,15,20,25,30,36,42].findIndex(end=>id<=end)+1);}
/** screen_Party_Select.mouse_Up removes from the old slot before assigning the
 * destination; an occupied destination returns its previous Pokémon to storage. */
export function moveStorageParty(save,uid,index=null){
 if(!save.pokemon.some(p=>p.uid===uid))return false;
 const slots=Array.from({length:6},(_,i)=>save.party[i]??null),previous=slots.indexOf(uid);
 if(index===null&&previous<0){index=slots.indexOf(null);if(index<0)return false;}
 if(previous>=0)slots[previous]=null;
 if(index!==null&&Number.isInteger(index)&&index>=0&&index<6)slots[index]=uid;
 save.party=slots;return true;
}

/** The recovered controller addresses pokeList by the storage grid's numeric
 * index after removing the dragged member from its party slot. */
export function moveStorageGrid(save,uid,index=null){
 const source=save.pokemon.findIndex(p=>p.uid===uid);if(source<0)return false;
 save.party=Array.from({length:6},(_,i)=>save.party[i]===uid?null:save.party[i]??null);
 if(Number.isInteger(index)&&index>=0&&index<save.pokemon.length)[save.pokemon[source],save.pokemon[index]]=[save.pokemon[index],save.pokemon[source]];
 return true;
}

export function sourceMysteryCode(data,save,raw){
 const code=String(raw).replace(' ','').toLowerCase();if(!code)return {frame:null};
 if(code!=='ptdicu')return {frame:'error_recognized'};
 const pokemon=makePokemon(data,1010,1,{moves:[31,422],selectedMove:31,shiny:0});pokemon.originalExtra=210;save.pokemon.push(pokemon);recordOwned(save,pokemon);return {frame:'pokeDone',pokemon};
}
/** The source gift reply grants on the account server, then reports completion.
 * Keep its game objects alive while adopting the committed Center profile/Dex. */
export async function receiveOriginalCenterGift(app,request,options={}){
 const save=app.save,slot=app.profiles.bank.active;
 if(app.previewMode)throw new Error('Return to your saved profile before receiving a Mystery Gift.');
 if(!['daily','weekly','code'].includes(request.kind))throw new Error('Choose a Mystery Gift.');
 await persistOriginalProfile(app.profiles,save);
 const service=new CenterService(app.data,app.profiles,options);await service.initialize();
 const result=await service.perform(request.kind==='code'?'giftCode':'mysteryGift',request.kind==='code'?{code:request.code}:{kind:request.kind});
 if(app.save===save&&app.profiles.bank.active===slot){
  const current=app.profiles.current,pokemon=current.pokemon.map(p=>{const live=save.pokemon.find(existing=>existing.uid===p.uid);return live?Object.assign(live,p):p;});
  Object.assign(save,current,{pokemon});app.renderAll?.();
 }
 return result;
}
export function fillSourceDex(clip,data,save,page){
 const offset=(page-1)*40;clip.butt_left.visible=clip.arrow_left.visible=page>1;clip.butt_right.visible=clip.arrow_right.visible=page<4;
 for(let i=0;i<40;i++){const row=clip['poke_'+(i+1)],id=offset+i+1;row.visible=id<=151;if(!row.visible)continue;const known=['normal','shiny','shadow'].map(key=>save.dex?.[key]?.includes(id)??false);row.poke_name.visible=known.some(Boolean);row.poke_name.text=data.species[id].name;['pokeball','pokeball_shiny','pokeball_shadow'].forEach((key,j)=>row[key].visible=known[j]);}
}

/** Source screen controllers adapted to local profile services. Install last. */
export function installOriginalProfileUI(app){
 const campaign=app.openCampaign?.bind(app);app.openCampaign=(...args)=>!app.save.pokemon.length?app.resumeOriginalStarter():campaign?.(...args);
 const original=Object.fromEntries(['openMart','openBag','manageMoves','openPokemonDetails','openProfiles','openGifts','openAchievements','openCollection','openDex'].map(k=>[k,app[k]?.bind(app)]));
 let active=null,partySelection=null,collectionContext={query:'',page:0,sortKey:null,descending:false};
 const commit=p=>{if(p&&!app.battle?.disposed)app.battle?.syncPokemon(p);app.store();app.renderAll();};
 const busy=()=>['running','paused'].includes(app.battle?.state);
 const activeSave=()=>!partySelection&&!app.battle?.disposed&&(app.battle?.isChallenge||app.battle?.isMultiplayer)?app.battle.save:app.save;
 const styles=document.createElement('style');styles.textContent=`.original-profile-view{background:transparent}.original-profile-view .source-input{position:absolute;border:0;background:transparent;color:#111;font:22px Arial,sans-serif;padding:0;min-width:0}.original-profile-view .source-hit{position:absolute;border:0;background:transparent!important;box-shadow:none;padding:0;min-height:0;min-width:0;color:transparent;cursor:pointer}.original-profile-view .source-hit:focus-visible{outline:3px solid #feec55;background:#ffe85933!important}.original-profile-view .source-hit:disabled{cursor:default}.original-profile-view .source-canvas{display:block;width:100%;aspect-ratio:5/3}`;document.head.append(styles);

 async function show(symbol,{frame=1,prepare=()=>{},controls=()=>[],extraSymbols=[],composite=null,sourceClip=null,advance=null,onCanvas=null,onDispose=null,dragFactory=null,dropOutside=null}={}){
  active?.dispose();app.stopOriginalStory?.();const html='<div class="original-story-loading">Loading original graphics…</div>';if(/^popup_(?:item|tm|relearn|Profile_Delete|Release_Poke|Choose_Name)$/.test(symbol))app.openOriginalPopup?.(html)??app.openModal(html);else app.openOriginalScreen?.(html)??app.openModal(html);$('#modal').classList.add('original-story-modal');$('#modal-close').hidden=true;
  const container=$('#modal-content'),view=document.createElement('div'),panel=document.createElement('div'),canvas=document.createElement('canvas');
  view.className='original-profile-view';panel.className='original-canvas-panel';canvas.width=800;canvas.height=480;canvas.className='source-canvas';panel.append(canvas);view.append(panel);container.replaceChildren(view);
  const clock=sourceClip?.clock??{frame:0},clip=sourceClip??new StoryClip(app.data.timelines,symbol,{clock});if(!sourceClip)clip.gotoAndStop(frame);prepare(clip);canvas.onclick=()=>onCanvas?.();
  const buttons=new Map(),session={clip,view,controls:()=>controls(clip),disposed:false,raf:0,dispose(){this.disposed=true;cancelAnimationFrame(this.raf);onDispose?.();}};active=session;app.originalProfileView=session;
  
  try{
   const renderer=await createOriginalRenderer(canvas,symbol),extraRenderers=new Map(await Promise.all(extraSymbols.map(async name=>[name,await createOriginalRenderer(canvas,name)])));if(session.disposed||!view.isConnected)return;
   const position=(element,b)=>Object.assign(element.style,{left:b.x/8+'%',top:b.y/4.8+'%',width:b.width/8+'%',height:b.height/4.8+'%'});
   const render=()=>{
    renderer.render(clip);composite?.(clip,extraRenderers);if(session.dragClip)extraRenderers.get('butt_poke')?.render(session.dragClip,{clear:false});const entries=controls(clip),wanted=new Set();
    for(const entry of entries){const target=entry.clip??at(clip,entry.path),bounds=entry.bounds??originalControlBounds(target);if(!bounds||bounds.width<=0||bounds.height<=0||target?.visible===false)continue;
     const key=entry.path??entry.key;wanted.add(key);let el=buttons.get(key);
     if(!el){el=document.createElement(entry.input?'input':'button');el.className=entry.input?'source-input':'source-hit';el.dataset.originalControl=key;el.setAttribute('aria-label',entry.label??key);if(entry.input){el.value=entry.value??'';el.maxLength=100;el.oninput=()=>entry.onInput?.(el.value);}else el.type='button';buttons.set(key,el);panel.append(el);}
     position(el,bounds);if(entry.input){const field=app.data.timelines.textFields?.[target?.meta.id];if(field){const height=field.bounds[3]-field.bounds[1];el.style.fontSize=(field.fontHeight/20)*bounds.height/height+'px';el.style.color=`rgba(${field.color.join(',')})`;el.style.textAlign=['left','right','center','justify'][field.align]??'left';}}el.disabled=!!entry.disabled;el.onclick=event=>{if(session.suppressClick){session.suppressClick=false;event.preventDefault();return;}entry.action?.(clip,event);};el.onkeydown=event=>{if(entry.input&&event.key==='Enter')entry.action?.(clip,event);};
     el.style.touchAction=entry.dragUid?'none':'';el.onpointerdown=entry.dragUid&&dragFactory?event=>{if(event.button!==0)return;event.preventDefault();const point=coordinates(event);session.pressed={entry,x:point.x,y:point.y,offset:event.pointerType==='touch'?70:0};panel.setPointerCapture?.(event.pointerId);}:null;el.draggable=!!entry.dragUid&&!dragFactory;el.ondragstart=event=>event.dataTransfer.setData('text/plain',entry.dragUid);el.ondragover=entry.drop?event=>event.preventDefault():null;el.ondrop=entry.drop?event=>{event.preventDefault();entry.drop(event.dataTransfer.getData('text/plain'));}:null;
    }
    for(const [key,el]of buttons)if(!wanted.has(key)){el.remove();buttons.delete(key);}
   };
   const coordinates=event=>{const rect=canvas.getBoundingClientRect();return {x:(event.clientX-rect.left)*800/rect.width,y:(event.clientY-rect.top)*480/rect.height};};
   panel.onpointermove=event=>{const down=session.pressed;if(!down)return;const p=coordinates(event);if(!session.dragClip&&(Math.abs(p.x-down.x)>40||Math.abs(p.y-down.y)>40))session.dragClip=dragFactory(down.entry.dragUid,clock);if(session.dragClip){session.dragClip.x=p.x;session.dragClip.y=p.y-down.offset;render();}};
   panel.onpointerup=event=>{const down=session.pressed;if(!down)return;session.pressed=null;session.suppressClick=true;event.preventDefault();if(!session.dragClip){down.entry.action?.(clip,event);return;}const p=session.dragClip;session.dragClip=null;const entries=controls(clip);let destination=null,fallback=null;for(const entry of entries){if(!entry.drop)continue;const b=entry.bounds??originalControlBounds(entry.clip??at(clip,entry.path));if(b&&p.x>=b.x&&p.x<=b.x+b.width&&p.y>=b.y&&p.y<=b.y+b.height){if(entry.key==='storage-drop')fallback=entry;else{destination=entry;break;}}}destination??=fallback;if(destination)destination.drop(down.entry.dragUid,p);else dropOutside?.(down.entry.dragUid,p);render();};
   panel.onpointercancel=()=>{session.pressed=null;session.dragClip=null;render();};
   session.render=render;let last=performance.now(),carry=0;
   const tick=now=>{if(session.disposed||!view.isConnected||!$('#modal').open)return;carry+=Math.min(250,now-last);last=now;while(carry>=1000/21){carry-=1000/21;if(advance)advance();else{clock.frame++;clip.tick();}}render();session.raf=requestAnimationFrame(tick);};render();session.raf=requestAnimationFrame(tick);return session;
  }catch(error){if(view.isConnected){app.toast(error.message);view.textContent=error.message;const back=document.createElement('button');back.textContent='Back';back.onclick=()=>app.openMainMenu();view.append(back);}throw error;}
 }
 const screen=(symbol,options)=>show(symbol,options).catch(()=>{});
 const button=(path,action,label,disabled=false)=>({path,action,label,disabled});
 const portrait=(clip,p)=>{if(!clip)return;const names=['','grass','poison','water','fire','','flying','bug','ghost','steel','rock','electric','ice','fighting','ground','dragon','dark','psychic',''],type=app.data.moves[p.selectedMove]?.typeId;let frame=form(p);if(p.speciesId===493&&names[type])frame=p.shiny?frame+names[type]:names[type];clip.gotoAndStop(frame);if(p.shiny===2){const child=clip.getChildAt(0);if(child?.meta.labels.front)child.gotoAndStop('front');if(child?.actual?.meta.labels.front)child.actual.gotoAndStop('front');}};
 const moveState=(clip,p)=>{for(let i=1;i<=4;i++)stop(clip,`change_move.attack_${i}`,p.moves[i-1]??'empty');stop(clip,'change_move.hl',Math.max(1,p.moves.indexOf(p.selectedMove)+1));stop(clip,'change_move.attack_description',p.selectedMove??p.moves[0]);if(clip.poke_selected)portrait(clip.poke_selected,p);};
 function block(clip,p){if(!p){clip.gotoAndStop('empty');if(clip.upgrade_bg)clip.upgrade_bg.visible=false;if(clip.tapIn)clip.tapIn.visible=false;return;}clip.gotoAndStop(1);portrait(clip.poke_actual,p);setText(clip,'poke_Level','Lvl'+p.level);if(clip.upgrade_bg){clip.upgrade_bg.visible=p.level<100&&p.experience>=xpRequired(p.level);if(app.save.money<levelCost(p.level))clip.upgrade_bg.gotoAndStop(1);}if(clip.tapIn)clip.tapIn.visible=false;}

 // screen_PokeMart: item selection -> confirmation -> buy/no_money -> Back.
 app.openMart=()=>screen('gfx_screen_pokemart',{
  prepare:c=>{for(let i=1;i<=5;i++)stop(c,'item_'+i,i);setText(c,'your_money','You have: $'+app.save.money);},
  controls:c=>[
   ...ITEMS.map(item=>button(`item_${item.id}_butt`,()=>c.gotoAndStop('item_'+item.id),item.name)),
   button('buy_butt',()=>{const id=Number(c.currentLabel?.split('_')[1]);const r=buyItem(app.save,id);c.gotoAndStop(r.ok?'buy':'no_money');if(r.ok)commit();setText(c,'your_money','You have: $'+app.save.money);},'Buy this item'),
   button('back_butt',()=>{if(c.currentLabel==='main')app.openMainMenu();else{c.gotoAndStop('main');for(let i=1;i<=5;i++)stop(c,'item_'+i,i);setText(c,'your_money','You have: $'+app.save.money);}},'Back')],
  
 });

 const profileBack=()=>app.openCollection(collectionContext.query,collectionContext.page,collectionContext.sortKey,collectionContext.descending);
 const popupAudio=new Set();
 function nativePopup(save,p,name,moveId=0){
  active?.dispose();active=null;
  const sound=event=>{if(event.type==='audio-stop'){for(const a of popupAudio)a.pause();popupAudio.clear();}else if(event.type==='audio-play'&&app.save.settings?.sound){const asset=app.assets?.audio[event.name];if(asset){const a=new Audio('assets/'+asset.file);a.loop=event.loops>1;a.volume=.6;popupAudio.add(a);a.play().catch(()=>{});}}};
  const popup=createProfilePopup(app.data,save,p,name,{moveId,onCommit:()=>commit(p),onAudio:sound,onClose:()=>app.openPokemonDetails(p.uid),onBack:profileBack,onLearn:id=>profileLearn(save,p,id),onOpen:(next,id)=>nativePopup(save,p,next,id)});
  return screen(popup.clip.symbolName,{sourceClip:popup.clip,advance:()=>popup.tick(),onCanvas:()=>popup.click(),onDispose:()=>{popup.dispose();for(const a of popupAudio)a.pause();popupAudio.clear();},controls:()=>popup.controls.map(c=>({...c,action:()=>popup.click(c.path),label:c.label??c.name.replaceAll('_',' ')}))});
 }
 function profileLearn(save,p,id=0){
  if(!id){id=app.data.species[p.speciesId].learnset.find(e=>e.level===p.level)?.moveId;if(p.moves.includes(id))id=0;}
  if(!id)return app.openPokemonDetails(p.uid);
  app.scene?.soundEffect?.('levelUpSound');
  if(p.moves.length<4){p.moves.push(id);commit(p);return nativePopup(save,p,'popups_Learned_New_Move',id);}
  return nativePopup(save,p,'popups_Trying_New_Move',id);
 }
 app.openBag=(uid=app.selectedUid)=>{const current=activeSave(),save=current.pokemon.some(p=>p.uid===uid)?current:app.save,p=save.pokemon.find(p=>p.uid===uid);if(!p)return profileBack();return nativePopup(save,p,'popups_Items');};

 app.openPokemonDetails=uid=>{
  const current=activeSave(),save=current.pokemon.some(p=>p.uid===uid)?current:app.save,p=save.pokemon.find(p=>p.uid===uid);if(!p)return;app.selectedUid=uid;const s=app.data.species[p.speciesId];
  const canTrain=()=>p.level<100&&p.experience>=xpRequired(p.level)&&save.money>=levelCost(p.level);
  // Both source fields are named money_you; 11652 is the "Your Money" label.
  return screen('gfx_screen_poke_check_big',{prepare:c=>{portrait(c.poke_selected,p);setText(c,'poke_name',s.name);setText(c,'poke_level','Lvl '+p.level);for(const child of c.childrenByDepth.values())if(child.meta.id===11653)child.text=String(save.money);for(const [i,name]of ['poke_type_one','poke_type_two'].entries()){c[name].visible=!!s.typeIds[i];if(s.typeIds[i])c[name].gotoAndStop(s.typeIds[i]);}c.expBar.actual.scaleX=Math.min(1,p.experience/xpRequired(p.level));setText(c,'upgrade_butt.upgradeCost',levelCost(p.level));c.upgrade_butt.alpha=canTrain()?1:.4;c.relearn_butt.alpha=save.money>=1000?1:.2;c.tm_butt.alpha=save.money>=10000?1:.2;c.item_butt.alpha=Object.values(save.inventory??{}).some(v=>v>0)?1:.2;moveState(c,p);},
   controls:c=>[
    button('back_butt',()=>app.openCollection(collectionContext.query,collectionContext.page,collectionContext.sortKey,collectionContext.descending),'Storage'),button('item_butt',()=>app.openBag(uid),'Items',!Object.values(save.inventory??{}).some(v=>v>0)),button('tm_butt',()=>app.manageMoves('tm',0,uid),'TMs',save.money<10000),button('relearn_butt',()=>app.manageMoves('relearn',0,uid),'Relearn moves',save.money<1000),
    button('upgrade_butt',()=>{if(!canTrain())return;save.money-=levelCost(p.level);p.level++;p.experience=0;commit(p);app.scene?.soundEffect?.('levelUpSound');if(app.data.species[p.speciesId].evolutions.some(e=>e.level&&e.level<=p.level))nativePopup(save,p,'popups_Evolve');else profileLearn(save,p);},'Level up',!canTrain()),
    button('release_butt',()=>nativePopup(save,p,'popups_Release_Poke'),'Release Pokémon',save!==app.save),
    ...p.moves.map((id,i)=>button(`change_move.attack_${i+1}`,()=>{p.selectedMove=id;commit(p);moveState(c,p);},'Use '+app.data.moves[id].name)),
   ],
  });
 };

 app.manageMoves=(kind='relearn',page=0,uid=app.selectedUid)=>{const save=activeSave(),p=save.pokemon.find(p=>p.uid===uid);if(!p)return;return nativePopup(save,p,kind==='tm'?'popups_TM':'popups_Relearn');};

 const dimProfileBackdrop=()=>{if(active?.clip.symbolName==='gfx_screen_profile'){active.clip.alpha=.4;active.render?.();}};
 app.openOriginalProfileName=(slot,replace=false)=>{dimProfileBackdrop();let name='Satoshi';const clip=new StoryClip(app.data.timelines,'popup_Choose_Name');return screen('popup_Choose_Name',{sourceClip:clip,prepare:c=>{c.actual.your_Name.text='';},controls:c=>[{path:'actual.your_Name',label:'Trainer name',input:true,value:name,onInput:value=>name=value,action:()=>{if(c.currentLabel==='end')app.createOriginalProfile(slot,name,replace);}},button('actual.ok_butt',()=>app.createOriginalProfile(slot,name,replace),'OK',c.currentLabel!=='end'),button('actual.cancel_butt',()=>app.openProfiles(),'Cancel',c.currentLabel!=='end')]});};
 app.openProfiles=()=>{clearSelection();app.leaveProfilePreview?.();app.stopOriginalScreenMusic?.();app.scene?.music?.stop?.();app.store();return screen('gfx_screen_profile',{
  prepare:c=>{app.profiles.bank.slots.forEach((save,i)=>{const row=c['profile_'+(i+1)];row.gotoAndStop(save?2:1);if(save){setText(row,'profile_name',save.trainer);setText(row,'caught','Pokemon: '+save.pokemon.length);stop(row,'profile_bg',save.gameVersion??1);stop(row,'yourAvatar',`${save.avatar?.gender??'boy'}_${save.avatar?.style??1}`);for(let b=1;b<=8;b++)if(row.badges?.['badge'+b])row.badges['badge'+b].visible=b<=(save.badges??0);}});},
  controls:()=>[button('back_butt',()=>app.openTitle(),'Back'),button('log_off_butt',()=>app.openTitle(),'Log off'),...app.profiles.bank.slots.flatMap((save,i)=>{
   const choose=()=>{if(!save)return app.openNewProfile(i);app.battle?.dispose?.();app.previewMode=false;app.primarySave=null;app.save=app.profiles.select(i);app.hasProfile=true;app.selectedUid=app.save.party[0];if(!app.save.pokemon.length){app.resumeOriginalStarter();return;}app.loadLevel(Math.min(app.save.unlocked,42),false,{skipIntro:true});app.openMainMenu();};
   return [...(save?[button(`profile_${i+1}`,choose,'Select profile '+(i+1))]:[]),button(`profile_${i+1}.continue_butt`,choose,'Continue profile '+(i+1)),button(`profile_${i+1}.new_game_butt`,()=>{if(save){dimProfileBackdrop();const clip=new StoryClip(app.data.timelines,'popup_Profile_Delete');screen('popup_Profile_Delete',{sourceClip:clip,controls:c=>[button('actual.yes_butt',()=>app.openNewProfile(i,true),'Start a new adventure in this slot',c.currentLabel!=='end'),button('actual.no_butt',()=>app.openProfiles(),'Keep this profile',c.currentLabel!=='end')]});}else app.openNewProfile(i);},'New game in profile '+(i+1))];})],
  
 });};

 // Chapter selection creates screen_Party_Select(whichLevel); the stage is
 // constructed only by its Start control. Back preserves the source chapter.
 app.chooseChallengeParty=id=>{if(![4,5].includes(id))return;app.cancelOriginalDrag?.();app.disposeBattlePokemon?.();app.stopOriginalStory?.();app.battle?.dispose?.();app.leaveProfilePreview?.();partySelection={id,challengeId:id,preview:false,tutorial:false};app.pendingPartyLevel=partySelection;collectionContext={query:'',page:0,sortKey:null,descending:false};return app.openCollection();};
 app.chooseLevelParty=(id,preview=false)=>{
  const level=app.levels.find(l=>l.id===id);if(!level)return {ok:false,reason:'Unknown stage.'};
  app.cancelOriginalDrag?.();app.disposeBattlePokemon?.();app.stopOriginalStory?.();app.battle?.dispose?.();
  if(!preview)app.leaveProfilePreview?.();else if(!app.previewMode){app.primarySave=app.save;app.save=structuredClone(app.save);app.previewMode=true;}
  partySelection={id,preview,tutorial:id===1&&(app.save.unlocked??1)<2};app.pendingPartyLevel=partySelection;
  collectionContext={query:'',page:0,sortKey:null,descending:false};return app.openCollection();
 };
 const clearSelection=()=>{partySelection=null;app.pendingPartyLevel=null;};
 const startSelected=()=>{if(!app.save.party.some(Boolean))return false;const pending=partySelection;clearSelection();active?.dispose();app.closeModal();app.setOriginalPresentation?.('battle');if(pending?.challengeId)app.loadChallenge(pending.challengeId);else if(pending)app.loadLevel(pending.id,pending.preview);return true;};
 const backSelected=()=>{const pending=partySelection;clearSelection();if(pending?.challengeId)app.openChallenges();else if(pending)app.openOriginalChapter(partySelectionChapter(pending.id),pending.preview);else app.openMainMenu();};
 app.openCollection=(query='',page=0,sortKey=null,descending=false)=>{
  const list=app.save.pokemon.filter(p=>!app.save.party.includes(p.uid)&&(p.nickname||app.data.species[p.speciesId].name).toLowerCase().includes(String(query).toLowerCase()));
  if(sortKey)list.sort((a,b)=>(sortKey==='name'?app.data.species[a.speciesId].name.localeCompare(app.data.species[b.speciesId].name):sortKey==='level'?a.level-b.level:a.speciesId-b.speciesId)*(descending?-1:1));
  const pages=Math.max(1,Math.ceil(list.length/21));page=Math.max(0,Math.min(pages-1,page));collectionContext={query,page,sortKey,descending};const shown=list.slice(page*21,page*21+21),refresh=()=>app.openCollection(query,page,sortKey,descending);
  const dropStorage=(uid,index=null)=>{if(!partySelection&&busy())return;if(!moveStorageGrid(app.save,uid,index))return;commit();refresh();};
  const dropStorageAt=(uid,point)=>{if(!point)return dropStorage(uid);const party=app.save.party.filter(id=>id!==uid),count=app.save.pokemon.filter(p=>!party.includes(p.uid)).length,start=count<=21?0:page*21,b=app.data.timelines.symbols[app.data.timelines.byName.butt_poke].bounds,background=active?.clip.bg_your_pokemon;let index=null;for(let i=start;i<Math.min(count,start+21);i++){const local=i-start,x=(background?.x??0)+114+(local%7)*87,y=(background?.y??219.9)+40+Math.floor(local/7)*80;if(point.x>=x+b[0]&&point.x<=x+b[2]&&point.y>=y+b[1]&&point.y<=y+b[3]){index=i;break;}}dropStorage(uid,index);};
  const partyChange=(uid,index=null)=>{if(!app.save.pokemon.some(p=>p.uid===uid))return;if(!partySelection&&busy())return;moveStorageParty(app.save,uid,index);commit();refresh();};
  let sortOpen=null;const sortChoices={num:['num_asc','num_desc'],name:['name_az','name_za'],level:['level_asc','level_desc']};
  const toggleSort=(c,k)=>{sortOpen=sortOpen===k?null:k;for(const [key,choices]of Object.entries(sortChoices))for(const choice of choices)for(const suffix of ['img','btn'])c[choice+'_'+suffix].visible=key===sortOpen;};
  const sortCollection=(k,reverse)=>{app.save.pokemon.sort((a,b)=>(k==='name'?app.data.species[a.speciesId].name.localeCompare(app.data.species[b.speciesId].name):k==='level'?a.level-b.level:a.speciesId-b.speciesId)*(reverse?-1:1));commit();app.openCollection(query,page);};
  let tutorial=partySelection?.tutorial?new StoryClip(app.data.timelines,'popup_How_To_Select_Party'):null;
  const tutorialDone=()=>{tutorial=null;if(partySelection)partySelection.tutorial=false;if(active){active.clip.alpha=1;active.render?.();}};
  return screen('gfx_screen_party_select_v2',{dragFactory:(uid,clock)=>{const p=app.save.pokemon.find(p=>p.uid===uid),tile=new StoryClip(app.data.timelines,'butt_poke',{clock});block(tile,p);return tile;},dropOutside:dropStorageAt,extraSymbols:['butt_poke','popup_How_To_Select_Party'],composite:(c,renderers)=>{for(const tile of c.bg_your_pokemon.childrenByDepth.values())if(tile.name.startsWith('storage_'))renderers.get('butt_poke').render({...tile,x:c.bg_your_pokemon.x+tile.x,y:c.bg_your_pokemon.y+tile.y,alpha:c.alpha*tile.alpha},{clear:false});if(tutorial)renderers.get('popup_How_To_Select_Party').render(tutorial,{clear:false});},prepare:c=>{c.alpha=tutorial?.5:1;c.start_butt.alpha=app.save.party.some(Boolean)?1:.3;for(const key of ['num_asc','num_desc','name_az','name_za','level_asc','level_desc'])for(const suffix of ['img','btn'])if(c[key+'_'+suffix])c[key+'_'+suffix].visible=false;for(let i=1;i<=6;i++)block(c['block_'+i],app.save.pokemon.find(p=>p.uid===app.save.party[i-1]));c.arrow_left.visible=page>0;c.arrow_right.visible=page+1<pages;c.bg_your_pokemon.stop();shown.forEach((p,i)=>{const tile=new StoryClip(app.data.timelines,'butt_poke',{clock:c.clock});tile.name='storage_'+i;tile.x=114+(i%7)*87;tile.y=40+Math.floor(i/7)*80;c.bg_your_pokemon.addChild(tile);block(tile,p);});},
   controls:c=>tutorial?[{key:'party-tutorial-close',clip:tutorial.butt_close,action:tutorialDone,label:'Close party tutorial'}]:[button('back_butt',backSelected,'Back'),button('start_butt',startSelected,partySelection?'Start selected stage':'Return to battle',!app.save.party.some(Boolean)),button('butt_left',()=>app.openCollection(query,page-1,sortKey,descending),'Previous storage page',page===0),button('butt_right',()=>app.openCollection(query,page+1,sortKey,descending),'Next storage page',page+1>=pages),...['num','name','level'].map(k=>button(k+'_btn',()=>toggleSort(c,k),'Sort by '+k)),...Object.entries(sortChoices).flatMap(([k,choices])=>choices.map((choice,i)=>button(choice+'_btn',()=>sortCollection(k,!!i),choice.replaceAll('_',' ')))),
    ...Array.from({length:6},(_,i)=>{const p=app.save.pokemon.find(p=>p.uid===app.save.party[i]);return {...button('block_'+(i+1),()=>p&&app.openPokemonDetails(p.uid),p?`${app.data.species[p.speciesId].name}, party slot ${i+1}`:'Empty party slot '+(i+1)),dragUid:p?.uid,drop:uid=>partyChange(uid,i)};}),
    ...shown.map((p,i)=>({...button('bg_your_pokemon.storage_'+i,()=>app.openPokemonDetails(p.uid),`${app.data.species[p.speciesId].name}, level ${p.level}`),dragUid:p.uid,drop:(uid,point)=>point?dropStorageAt(uid,point):dropStorage(uid,page*21+i)})),
    {key:'storage-drop',bounds:{x:72,y:225,width:650,height:255},drop:dropStorageAt,label:'Drop Pokémon in storage'},
   ].sort((a,b)=>(a.key==='storage-drop'?-1:0)-(b.key==='storage-drop'?-1:0)),
  });
 };

 let achievementPage=1;
 app.openDex=(page=1)=>{page=Math.max(1,Math.min(4,Number(page)||1));if((app.save.challengeCompleted??0)<3)return app.openAchievements();return screen('gfx_screen_pokedex',{frame:'my_collection',prepare:c=>fillSourceDex(c,app.data,app.save,page),controls:()=>[button('butt_left',()=>app.openDex(page-1),'Previous collection page',page<=1),button('butt_right',()=>app.openDex(page+1),'Next collection page',page>=4),button('back_butt',()=>app.openMainMenu(),'Back'),button('back_butt_dex',()=>app.openAchievements(achievementPage),'Achievements')]});};
 app.openAchievements=(page=0)=>{if(page)achievementPage=page;return screen('gfx_screen_pokedex',{
  frame:(app.save.challengeCompleted??0)<3?'must_beat':page?(page===1?'my_achievements':'my_achievements_'+page):1,
  prepare:c=>{if(!page||(app.save.challengeCompleted??0)<3)return;const state=achievementStatus(app.save,page);for(let i=1;i<=(page===1?4:1);i++)stop(c,'check_'+i,(app.save.achievements?.[page===1?99+i:page]??0)>0?1:2);stop(c,'reward_'+page+'_butt',state.claimed?3:state.earned?1:2);},
  controls:c=>[button('back_butt',()=>app.openMainMenu(),'Back'),button('back_butt_dex',()=>app.openAchievements(achievementPage),'Back to achievements'),button('collection_butt',()=>app.openDex(),'Pokédex collection'),button('achievement_butt',()=>app.openAchievements(1),'Achievements'),button('left_arrow_butt',()=>app.openAchievements(Math.max(1,page-1)),'Previous achievement'),button('right_arrow_butt',()=>app.openAchievements(page>=14?1:page+1),'Next achievement'),button('reward_'+page+'_butt',()=>{const r=claimAchievement(app.data,app.save,page);c.gotoAndStop(r.ok?'reward_'+page:'reward_no');if(r.ok)commit();},'Claim achievement reward')],
  
 });};

 app.openGifts=()=>{
  let code='',requesting=false;return screen('gfx_screen_mystery_gift',{prepare:c=>{c.myCode.text='';},controls:c=>[
   {path:'myCode',label:'Gift code',input:true,value:'',onInput:value=>code=value,action:()=>redeem(c)},button('enter_butt',()=>redeem(c),'Receive gift'),button('back_butt',()=>app.openMainMenu(),'Back'),button('find_butt',()=>serviceGift(c,true),'Weekly gift'),button('find_daily_butt',()=>serviceGift(c,false),'Daily gift')].map(entry=>({...entry,disabled:requesting||entry.disabled})),
  });
  function redeem(c){if(requesting)return;const normalized=String(code).replace(' ','').toLowerCase();if(['ptdicu','ptdooo'].includes(normalized))return centerGift(c,{kind:'code',code:normalized});let result=sourceMysteryCode(app.data,app.save,code);if(result.frame==='error_recognized'&&LOCAL_GIFTS.some(g=>g.code===String(code).trim().toUpperCase())){const local=redeemGift(app.data,app.save,code,makePokemon);result={frame:local.ok?'pokeDone':'error_used',pokemon:local.pokemon};}if(result.frame)c.gotoAndStop(result.frame);if(result.pokemon)commit();}
  function serviceGift(c,weekly){return centerGift(c,{kind:weekly?'weekly':'daily'});}
  async function centerGift(c,request){
   if(requesting)return;requesting=true;const previousBack=app.originalBack,blockBack=()=>{};app.originalBack=blockBack;c.gotoAndStop('wait');
   try{
    const result=await receiveOriginalCenterGift(app,request);
    if(active?.clip===c&&!active.disposed){c.gotoAndStop(request.kind==='code'?'pokeDone':request.kind+'Done');app.toast(`${app.data.species[result.pokemon.speciesId].name} is ready on the PokéCenter Pick Up page.`);}
   }catch(error){if(active?.clip===c&&!active.disposed&&!app.profileConflict){c.gotoAndStop(/already (?:been )?claimed/.test(error.message)?'error_used':'error_database');app.toast(error.message);}}
   finally{requesting=false;if(app.originalBack===blockBack)app.originalBack=previousBack;}
  }
 };
 app.stopOriginalProfileUI=()=>{active?.dispose();active=null;};
 return {show,original};
}
