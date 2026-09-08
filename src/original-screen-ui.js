import {installOriginalOptions} from './original-options.js';
import {installOriginalSaveUI} from './original-save.js';
/** The supplied SWF has a black 800×480 stage. main.change_Screen replaces its
 * current screen; screen_Level.add_Popup adds a transparent child above it. */
export function installOriginalScreenUI(app){
 if(app.setOriginalPresentation)return;
 installOriginalSaveUI(app);installOriginalOptions(app);
 const modal=document.querySelector('#modal'),content=document.querySelector('#modal-content');
 let mode='battle',parentMode='battle',hideHud=false,background=null,resizeObserver=null;
 const frame=()=>document.querySelector('#flash-frame');
 const snapshot=()=>{
  const host=frame();if(!host)return;
  if(!background){background=document.createElement('canvas');background.id='original-parent-screen';background.width=800;background.height=480;host.append(background);}
  const ctx=background.getContext('2d');ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#000';ctx.fillRect(0,0,800,480);
  const box=content.getBoundingClientRect(),scale=box.width/800||1;
  for(const canvas of content.querySelectorAll('canvas')){
   const b=canvas.getBoundingClientRect();if(!b.width||!b.height)continue;
   ctx.drawImage(canvas,(b.left-box.left)/scale,(b.top-box.top)/scale,b.width/scale,b.height/scale);
  }
  background.hidden=false;
 };
 const resize=()=>{
  const host=frame();if(!host)return;
  const b=host.getBoundingClientRect();modal.style.setProperty('--original-stage-left',b.left+'px');modal.style.setProperty('--original-stage-top',b.top+'px');modal.style.setProperty('--original-stage-width',b.width+'px');modal.style.setProperty('--original-stage-height',b.height+'px');modal.style.setProperty('--original-stage-scale',String(b.width/800));
  if(!resizeObserver){resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);}
 };
 app.setOriginalPresentation=(kind,{hideHud:nextHideHud}={})=>{
  if(!['screen','popup','battle'].includes(kind))throw new Error('Unknown original presentation '+kind);
  if(kind==='popup'&&mode!=='popup'){parentMode=mode;if(mode==='screen')snapshot();}
  if(kind==='screen'&&background)background.hidden=true;
  if(kind==='battle'){parentMode='battle';if(background)background.hidden=true;}
  hideHud=nextHideHud??(kind==='popup'&&mode==='popup'?hideHud:false);mode=kind;app.originalPresentation=kind;
  const host=frame();if(host){host.dataset.originalPresentation=mode;host.dataset.originalParent=parentMode;host.classList.toggle('original-hide-hud',hideHud);}
  modal.classList.add('original-stage-modal');modal.dataset.originalPresentation=mode;
  resize();return content;
 };
 app.restoreOriginalPresentation=()=>app.setOriginalPresentation(parentMode==='screen'?'screen':'battle');
 app.openOriginalScreen=html=>{app.setOriginalPresentation('screen');app.openModal(html);modal.classList.add('original-stage-modal');return content;};
 app.openOriginalPopup=(html,options={})=>{app.setOriginalPresentation('popup',options);app.openModal(html);modal.classList.add('original-stage-modal');return content;};
 app.leaveOriginalScreen=()=>app.setOriginalPresentation('battle');
 app.presentOriginalScreen=(symbol,container,handlers={},options={})=>{app.setOriginalPresentation('screen');return app.paintOriginalMenu(symbol,container,handlers,{...options,presentation:'screen'});};
 app.presentOriginalPopup=(symbol,container,handlers={},options={})=>{app.setOriginalPresentation('popup',options);return app.paintOriginalMenu(symbol,container,handlers,{...options,presentation:'popup'});};
 app.setOriginalStageGraphics=({mapAlpha=1,hudAlpha=1,mapVisible=true,hudVisible=true}={})=>{const host=frame();if(!host)return;host.style.setProperty('--original-map-alpha',String(mapVisible?mapAlpha:0));host.style.setProperty('--original-hud-alpha',String(hudVisible?hudAlpha:0));host.classList.toggle('original-hide-hud',!hudVisible);};
 app.syncOriginalStage=resize;
 window.addEventListener('resize',resize);window.addEventListener('scroll',resize,{passive:true});
 modal.addEventListener('cancel',event=>{if(modal.classList.contains('original-stage-modal')&&content.querySelector('canvas'))event.preventDefault();});
 modal.addEventListener('close',()=>{if(!modal.open&&mode==='popup')app.restoreOriginalPresentation();});
 app.setOriginalPresentation('battle');
}

/** class_972 / class_977: battle settings and exit confirmation are source
 * popups over the map. They never route the HUD Menu button to screen_Menu. */
export function installOriginalBattleMenu(app){
 let session=null;
 app.openBattleMenu=()=>{
  const battle=app.battle;if(!battle||session)return;
  const state=battle.state;session={battle,state,view:null};if(state==='running')battle.state='paused';app.scene?.music?.pause?.();
  const close=()=>{const old=session;if(!old)return;old.view?.dispose();session=null;app.closeModal();app.setOriginalPresentation('battle');if(app.battle===battle&&state==='running')battle.state='running';app.scene?.updateMusic?.();app.renderAll?.();};
  const exit=()=>{
   const old=session;if(!old)return;old.view?.dispose();session=null;app.store?.();app.closeModal();app.setOriginalPresentation('battle');app.scene?.music?.stop?.();
   if(app.exitOriginalBattle){app.exitOriginalBattle(battle);return;}
   battle.dispose?.();battle.state='ready';
   if(battle.isChallenge){app.openChallenges();return;}
   if(battle.isMultiplayer){app.openMainMenu();return;}
   const id=battle.level.progressionId??battle.level.id;const chapter=[5,11,15,20,25,30,36,42].findIndex(end=>id<=end)+1;app.openOriginalChapter(chapter||8,app.previewMode);
  };
  const paint=async(symbol,handlers,prepare,labels)=>{
   session?.view?.dispose();app.openOriginalPopup('<div id="original-battle-popup"></div>',{hideHud:true});document.querySelector('#modal-close').hidden=true;
   const view=await app.paintOriginalMenu(symbol,document.querySelector('#original-battle-popup'),handlers,{prepare,labels,presentation:'popup'});if(!session){view.dispose();return;}session.view=view;
  };
  const settings=()=>{
   const saved=app.applyOriginalSettings();
   const value=key=>key==='damageText'?saved.damageText!==false:typeof saved[key]==='boolean'?saved[key]:saved.sound;
   const prepare=clip=>{for(const key of ['damage','music','sound']){const enabled=value(key==='damage'?'damageText':key);clip[key+'_on'].gotoAndStop(enabled?'checked':'unchecked');clip[key+'_off'].gotoAndStop(enabled?'unchecked':'checked');}};
   const handlers={back_butt:close,exit_butt:()=>paint('popup_Exit_Level',{butt_yes:exit,butt_no:close},null,{butt_yes:'Yes, exit level',butt_no:'No, return to battle'})};
   const labels={back_butt:'Back to battle',exit_butt:'Exit level'};
   for(const key of ['damage','music','sound'])for(const enabled of [true,false]){const name=key+'_'+(enabled?'on':'off')+'_butt';labels[name]=`${key==='damage'?'Damage text':key[0].toUpperCase()+key.slice(1)} ${enabled?'on':'off'}`;handlers[name]=({clip})=>{app.persistOriginalSettings(key==='damage'?'damageText':key,enabled);prepare(clip);};}
   return paint('popup_Menu_gfx',handlers,prepare,labels);
  };
  return settings();
 };
}

/** screen_Main and screen_Settings use replacement screens on the black stage. */
export function installOriginalTitleUI(app){
 let view=null,screenMusic=null,screenSequence=0;
 app.stopOriginalScreenMusic=()=>{screenMusic?.pause();screenMusic=null;};
 const playOpening=(restart=false)=>{
  if(!(app.save?.settings?.music??app.save?.settings?.sound))return;
  if(screenMusic&&!screenMusic.paused&&!restart)return;const asset=app.assets.audio.openingSong;if(!asset)return;screenMusic?.pause();
  app.scene?.music?.stop?.();screenMusic=new Audio('assets/'+asset.file);screenMusic.loop=true;screenMusic.volume=.6;screenMusic.play().catch(()=>{});
 };
 const resumeOpening=()=>{if(screenMusic?.paused&&(app.save?.settings?.music??app.save?.settings?.sound))screenMusic.play().catch(()=>{});};
 document.addEventListener('pointerdown',resumeOpening,{capture:true});document.addEventListener('keydown',resumeOpening,{capture:true});
 const paint=async(symbol,handlers,options={})=>{
  const sequence=++screenSequence;view?.dispose();view=null;app.stopOriginalStory?.();app.openOriginalScreen('<div id="original-title-screen"></div>');
  const result=await app.paintOriginalMenu(symbol,document.querySelector('#original-title-screen'),handlers,{...options,presentation:'screen'});
  if(sequence!==screenSequence)result.dispose();else view=result;return result;
 };
 app.openTitle=()=>{
  app.applyOriginalSettings();playOpening(true);const start=()=>app.openProfiles();const options=()=>app.openOriginalOptions();
  return paint('gfx_screen_main',{btn_start:start,start_butt:start,btn_options:options,options_butt:options,
   btn_feedback:()=>window.open('https://discord.gg/kbcjXYKW7V','_blank','noopener,noreferrer'),
   blog_butt:()=>window.open('https://ptd.ooo/','_blank','noopener,noreferrer'),fwg_link:()=>window.open('https://ptd.ooo/','_blank','noopener,noreferrer'),
   mysteryCode:()=>app.openGifts()
  },{labels:{btn_start:'Start',start_butt:'Start',btn_options:'Options',options_butt:'Options',btn_feedback:'Feedback',blog_butt:'Pokémon Tower Defense website',fwg_link:'Pokémon Tower Defense website',mysteryCode:'Mystery Gift'}});
 };
 app.openOriginalOptions=()=>{
  const settings=app.applyOriginalSettings();
  const prepare=clip=>{for(const key of ['music','sound']){const on=settings[key]??settings.sound;clip[key+'_on'].gotoAndStop(on?'checked':'unchecked');clip[key+'_off'].gotoAndStop(on?'unchecked':'checked');}};
  const handlers={back_butt:()=>{app.store?.();app.openTitle();}},labels={back_butt:'Back'};
  for(const key of ['music','sound'])for(const on of [true,false]){const name=key+'_'+(on?'on':'off')+'_butt';labels[name]=`${key==='music'?'Music':'Sound'} ${on?'on':'off'}`;handlers[name]=({clip})=>{app.persistOriginalSettings(key,on);prepare(clip);if(key==='music'){if(on)playOpening();else app.stopOriginalScreenMusic();}};}
  return paint('gfx_screen_options',handlers,{prepare,labels}).then(result=>{
   const label=document.createElement('label');label.className='original-server-label';label.textContent='Local storage:';const input=document.createElement('button');input.type='button';input.className='original-server-field';input.setAttribute('aria-label','Local profiles, backups and import');input.textContent='Local profiles · Backups and import';input.onclick=()=>app.openLocalBackups();result.panel.append(label,input);
  });
 };
 app.openOriginalWiki=()=>app.saveOriginalAccount(()=>paint('gfx_screen_wiki_link',{back_butt:()=>app.openMainMenu(),find_butt:()=>window.open('https://ptd.miraheze.org/wiki/Main_Page','_blank','noopener,noreferrer')},{labels:{back_butt:'Back',find_butt:'Open PTD 1 Wiki'}}));
 app.openOriginalPokeCenter=()=>app.saveOriginalAccount(()=>paint('gfx_screen_inventory',{back_butt:()=>app.openMainMenu(),select_butt:()=>app.navigateToPokeCenter()},{labels:{back_butt:'Back',select_butt:'Open local PokéCenter'}}));
 app.openSettings=()=>app.openOriginalOptions();
}
