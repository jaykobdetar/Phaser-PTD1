import {installOriginalScreenUI,installOriginalBattleMenu,installOriginalTitleUI} from './original-screen-ui.js';
import {installOriginalCampaignUI} from './story-data-campaign-ui.js';
import {installOriginalTunnelUI} from './story-data-tunnel-ui.js';
import {storyWinController,STORY_LOST_GRAPHICS} from './story-data-stage.js';
import {StoryRuntime,StoryClip} from './story-runtime.js';
import {STORY_CONTROLLERS} from './story-data-controllers.js';
const $=s=>document.querySelector(s);
let manifestPromise;
const loadManifest=()=>manifestPromise??=fetch('assets/story/manifest.json').then(r=>{if(!r.ok)throw new Error('Original animation library could not be loaded.');return r.json();});
const label=name=>name.replace(/(^|_)(butt|button|btn)(_|$)/g,' ').replaceAll('_',' ').trim()||'Continue';
const setStyle=()=>{if($('#original-story-style'))return;const s=document.createElement('style');s.id='original-story-style';s.textContent=`.original-canvas-panel{position:relative;width:800px;max-width:100%;aspect-ratio:5/3;overflow:hidden;background:#fff;isolation:isolate}.original-canvas-panel canvas{display:block;width:100%;height:100%;image-rendering:auto;position:relative;z-index:0}.original-canvas-panel .original-hit{position:absolute;background:transparent;border:0;box-shadow:none;padding:0;min-width:0;min-height:0;color:transparent;z-index:2;pointer-events:auto;box-sizing:border-box;margin:0}.original-canvas-panel .original-hit:focus-visible{outline:3px solid #ffe859;outline-offset:0;background:#fff2}.original-story-modal{padding:0!important;border:0!important;width:min(800px,96vw,calc((100vh - 24px) * 5 / 3))!important;max-width:none!important;max-height:none!important;background:transparent!important;overflow:visible!important;border-radius:0!important}.original-story-modal #modal-content{padding:0!important;position:relative;width:100%;overflow:visible}.original-story-modal .original-canvas-panel{width:100%;max-width:none}.original-story-loading{padding:30px;background:#102832;color:white}`;document.head.append(s);};
/** Render exact source vector/timeline commands into a Canvas (also usable as a Phaser CanvasTexture).
 * Controller state belongs to caller; renderer never advances it. */
export async function createOriginalRenderer(canvas,symbolName){const manifest=await loadManifest();const entry=manifest.symbols[symbolName];if(!entry)throw new Error(`Missing original graphics: ${symbolName}`);const module=await import(/* @vite-ignore */new URL(entry.module,document.baseURI).href);return module.createRenderer(canvas);}

export function installOriginalStoryUI(app){
 setStyle();installOriginalScreenUI(app);installOriginalBattleMenu(app);installOriginalTitleUI(app);installOriginalTunnelUI(app);installOriginalCampaignUI(app);const seen=new WeakSet();let active=null;
 app.stopOriginalStory=()=>{if(!active)return;active.disposed=true;if(active.runtime)active.runtime.closed=true;cancelAnimationFrame(active.raf);for(const a of active.audio)a.pause();active=null;app.originalStory=null;app.setOriginalStageGraphics?.();app.scene?.updateMusic?.();$('#modal')?.classList.remove('original-story-modal');};
 const commit=()=>{app.store?.();app.renderAll?.();};
 app.showOriginalStory=async(name,{battle=app.battle,args=null,phase='custom',event=null,onComplete=null,stageFlags={},rng=Math.random}={})=>{
  if(!STORY_CONTROLLERS[name])return false;
  app.stopOriginalStory();const session={battle,phase,disposed:false,audio:new Set(),raf:0,runtime:null};active=session;
  app.scene?.music?.pause?.();(phase==='tutorial'?app.openOriginalScreen:app.openOriginalPopup)('<div class="original-story-loading">Loading original animation…</div>');$('#modal').classList.add('original-story-modal');$('#modal-close').hidden=true;
  try{
   const manifest=await loadManifest();if(active!==session||app.battle!==battle)return false;
   const panel=document.createElement('div');panel.className='original-canvas-panel';panel.style.background='transparent';const canvas=document.createElement('canvas');canvas.width=800;canvas.height=480;panel.append(canvas);$('#modal-content').replaceChildren(panel);
   const renderers=new Map(),hitButtons=new Map();let renderer=null,renderSymbol=null;
   const runtime=new StoryRuntime(app.data,{timelines:app.data.timelines,save:battle?.isMultiplayer?battle.save:battle?.campaignSave??app.save,level:battle?.level,battle,stageFlags:{...(battle?.stageFacts??{}),...stageFlags},rng,
    onAction(action){
     if(action.type==='battle-audio-pause')app.scene?.music?.pause?.();
     if(action.type==='audio-stop'){app.stopOriginalScreenMusic?.();app.scene?.music?.stop?.();for(const a of session.audio)a.pause();session.audio.clear();}
     if(action.type==='audio-play'&&(action.loops>1?(app.save.settings?.music??app.save.settings?.sound):app.save.settings?.sound)){const asset=app.assets.audio[action.name];if(asset){const same=[...session.audio].find(a=>a.dataset.symbol===action.name&&!a.paused);if(!same){const a=new Audio('assets/'+asset.file);a.dataset.symbol=action.name;a.loop=action.loops>1;a.volume=.6;session.audio.add(a);a.play().catch(()=>{});a.onended=()=>session.audio.delete(a);}}}
     if(['save','quest-progress','profile-change','pokemon-reward','item-reward','achievement'].includes(action.type))commit();
    },onComplete(result){session.completion=result;}
   });session.runtime=runtime;app.originalStory=runtime;
   if(app.scene?.loadedBattle===battle){const bg=runtime.stage.gfx_BG;bg.x=app.scene.sourceX??0;bg.y=app.scene.sourceY??0;bg.scaleX=bg.scaleY=app.scene.cameras?.main.zoom??1;}
   const controllerArgs=(typeof args==='function'?args(runtime):args)??[runtime.stage,...(battle?.isChallenge&&phase==='win'?[!event?.reward]:[])];runtime.open(name,controllerArgs);
   const update=()=>{
    const root=runtime.root;const sourceBG=runtime.stage.gfx_BG,sourceUI=runtime.stage.gfx_UI;
    // Keep the live map under source camera changes, including Viridian Forest's
    // intro and the first three endings. Map-parent movies share that transform
    // with surviving towers and candy; a raster replacement would erase them.
    if(app.scene?.loadedBattle===battle){
     const scene=app.scene,camera=scene.cameras.main,zoomChanged=camera.zoom!==sourceBG.scaleX;
     if(zoomChanged)camera.setZoom(sourceBG.scaleX);
     if(zoomChanged||scene.sourceX!==sourceBG.x||scene.sourceY!==sourceBG.y)scene.moveSourceMap(sourceBG.x,sourceBG.y,{clamp:false});
    }
    app.setOriginalStageGraphics?.({mapAlpha:sourceBG.alpha,hudAlpha:sourceUI.alpha,mapVisible:sourceBG.visible,hudVisible:sourceUI.visible});
    if(root){
     const symbol=root.symbolName;
     if(renderSymbol!==symbol){renderSymbol=symbol;renderer=null;if(!renderers.has(symbol))renderers.set(symbol,createOriginalRenderer(canvas,symbol));renderers.get(symbol).then(value=>{if(active===session&&renderSymbol===symbol)renderer=value;}).catch(fail);}
     renderer?.render(runtime.renderRoot);
     const wanted=new Set();for(const c of runtime.controls){if(c.width<=0||c.height<=0)continue;const key=c.name;wanted.add(key);let button=hitButtons.get(key);if(!button){button=document.createElement('button');button.type='button';button.className='original-hit';button.dataset.originalControl=c.name;button.setAttribute('aria-label',label(c.name));hitButtons.set(key,button);panel.append(button);}Object.assign(button.style,{left:c.x/8+'%',top:c.y/4.8+'%',width:c.width/8+'%',height:c.height/4.8+'%'});button.onclick=()=>{try{runtime.click(c.clip);update();}catch(error){fail(error);}};}
     for(const [key,button]of hitButtons)if(!wanted.has(key)){button.remove();hitButtons.delete(key);}

    }
   };
   canvas.onclick=()=>{try{runtime.click(runtime.root);update();}catch(error){fail(error);}};canvas.tabIndex=0;canvas.setAttribute('aria-label','Original story panel. Press Enter to continue when the animation is ready.');canvas.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();canvas.click();}};
   const complete=()=>{const result=session.completion??{type:'popup-closed',runtime};queueMicrotask(()=>{
    if(active===session)app.stopOriginalStory();app.closeModal();app.setOriginalPresentation('battle');commit();
    if(onComplete)return onComplete(result);
    if(result.type==='change-stage'){
     const destination=result.destination;const level=[...app.levels,...app.variants].find(l=>l.className===destination);
     if(level){app.loadLevel(level.id,app.previewMode);return;}
     if(destination==='screen_Chapters'){app.openCampaign();return;}
     if(destination==='screen_ChallengeMode'){app.openChallenges();return;}
    }
    if(phase==='intro'){
     seen.add(battle);battle.originalIntroComplete=true;
     if(battle.level.id===36){const save=battle.campaignSave??battle.save;save.lastLevelVisited=Math.max(save.lastLevelVisited??0,36);save.unlocked=Math.max(save.unlocked,37);if(!save.completed.includes(36))save.completed.push(36);commit();app.showOriginalStory(battle.level.winPopup,{battle,phase:'win',onComplete:()=>{battle.state='won';commit();app.returnOriginalBattleScreen(battle);}});return;}
     app.beginOriginalReadyGo();return;
    }
    if(phase==='win'||result.type==='end-level'){app.returnOriginalBattleScreen(battle);return;}
    app.openCampaign?.();
   });};
   const fail=error=>{if(active!==session||session.disposed)return;app.stopOriginalStory();app.openModal(`<h2>Original animation could not continue</h2><p></p><button id="original-retry">Try again</button>`);$('#modal-content p').textContent=error.message;$('#original-retry').onclick=()=>app.showOriginalStory(name,{battle,args,phase,event,onComplete,stageFlags});};
   let last=performance.now(),carry=0;
   const frame=now=>{if(active!==session||session.disposed||app.battle!==battle||!$('#modal').open)return;try{if(!runtime.root||renderer)carry+=Math.min(250,now-last);last=now;while(carry>=1000/21&&!runtime.closed){carry-=1000/21;runtime.tick();}update();if(runtime.closed){complete();return;}session.raf=requestAnimationFrame(frame);}catch(error){fail(error);}};
   update();session.raf=requestAnimationFrame(frame);return true;
  }catch(error){if(active===session){app.stopOriginalStory();app.toast(error.message);}return false;}
 };
 app.returnOriginalBattleScreen=battle=>{
  if(app.exitOriginalBattle){app.exitOriginalBattle(battle);return;}
  battle?.dispose?.();
  if(battle?.isChallenge){app.openChallenges();return;}
  if(battle?.isMultiplayer){app.openMainMenu();return;}
  const id=battle?.level.progressionId??battle?.level.id??1;const chapter=[5,11,15,20,25,30,36,42].findIndex(end=>id<=end)+1;app.openOriginalChapter(chapter||8,app.previewMode);
 };
 app.beginOriginalReadyGo=()=>{const battle=app.battle;if(!battle||battle.originalReadyGoComplete||battle.state!=='ready')return Promise.resolve(false);return app.showOriginalStory('class_974',{battle,phase:'ready',onComplete:()=>{if(app.battle!==battle)return;battle.originalReadyGoComplete=true;app.stopOriginalScreenMusic?.();battle.start({allowEmpty:true});app.renderAll();app.scene?.updateMusic?.();}});};
 app.beginOriginalIntro=()=>{const b=app.battle;if(!b||seen.has(b)||b.originalIntroComplete)return Promise.resolve(false);return app.showOriginalStory(b.level.introPopup,{battle:b,phase:'intro'});};
 app.beginOriginalWin=event=>{if(!event?.won)return Promise.resolve(false);if(app.tunnel&&app.tunnel.status!=='left'){app.showTunnel();return Promise.resolve(true);}const b=app.battle;const name=storyWinController(b.level);return app.showOriginalStory(name,{battle:b,phase:'win',event});};
 app.beginOriginalLoss=event=>{if(event?.won)return Promise.resolve(false);const b=app.battle,gfx=STORY_LOST_GRAPHICS[b.level.className];if(!gfx)return Promise.resolve(false);return app.showOriginalStory('class_986',{battle:b,phase:'win',event,args:runtime=>[runtime.stage,runtime.clip(gfx)]});};
 app.showOriginalCapture=profile=>{const battle=app.battle;if(['running','paused'].includes(battle.state))battle.state='paused';app.setOriginalPresentation('popup',{hideHud:true});return app.showOriginalStory('class_971',{battle,args:r=>{r.stage.gfx_UI.visible=false;return[r.stage,{myProfile:r.profile(profile)}];},onComplete:()=>{if(app.battle===battle&&battle.state==='paused')battle.state='running';app.setOriginalStageGraphics();app.renderAll();}});};
 app.showOriginalEvolution=(profile,onEvolve)=>{const battle=app.battle,wasRunning=battle.state==='running';if(wasRunning)battle.state='paused';let changed=false;return app.showOriginalStory('popups_Check_Evolve',{battle,args:r=>{r.stage.check_Learn_Move=()=>{};return[r.stage,{myProfile:r.profile(profile),evolve(){if(!changed){changed=true;onEvolve();}}}];},onComplete:()=>{if(app.battle===battle&&wasRunning)battle.state='running';commit();}});};
 app.beginOriginalTutorial=options=>app.showOriginalStory('popups_Tutorial_party',{phase:'tutorial',...options});
 $('#modal').addEventListener('cancel',event=>{if(active)event.preventDefault();});
 app.paintOriginalMenu=async(symbolName,container,handlers={},options={})=>{
  setStyle();if(options.presentation)app.setOriginalPresentation(options.presentation);const canvas=document.createElement('canvas');canvas.width=800;canvas.height=480;const panel=document.createElement('div');panel.className='original-canvas-panel';panel.append(canvas);container.replaceChildren(panel);const clock={frame:0};const clip=new StoryClip(app.data.timelines,symbolName,{clock});if(options.frame)clip.gotoAndStop(options.frame);if(symbolName==='gfx_screen_main'&&clip.titleScreen)clip.titleScreen.gotoAndPlay('done');options.prepare?.(clip);const renderer=await createOriginalRenderer(canvas,symbolName);let disposed=false,raf,last=performance.now(),carry=0,hash='';
  const hitButtons=new Map();
  const render=()=>{renderer.render(clip);const cs=clip.controls(),wanted=new Set();for(const c of cs){const handler=handlers[c.name];if(!handler)continue;const key=c.name;wanted.add(key);let b=hitButtons.get(key);if(!b){b=document.createElement('button');b.type='button';b.className='original-hit';b.dataset.originalControl=c.name;b.setAttribute('aria-label',options.labels?.[c.name]??label(c.name));hitButtons.set(key,b);panel.append(b);}Object.assign(b.style,{left:c.x/8+'%',top:c.y/4.8+'%',width:c.width/8+'%',height:c.height/4.8+'%'});b.onclick=()=>handler({clip,control:c,canvas,panel});}
   for(const [key,b]of hitButtons)if(!wanted.has(key)){b.remove();hitButtons.delete(key);}options.afterRender?.({clip,canvas,panel,controls:cs});};

  const tick=now=>{if(disposed||!panel.isConnected)return;carry+=Math.min(250,now-last);last=now;while(carry>=1000/21){carry-=1000/21;clock.frame++;clip.tick();}render();raf=requestAnimationFrame(tick);};render();raf=requestAnimationFrame(tick);return{clip,canvas,panel,renderer,render,dispose(){disposed=true;cancelAnimationFrame(raf);}};
 };
}
