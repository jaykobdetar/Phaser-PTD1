import {LocalVersus,LocalCoop} from './local-multiplayer.js';
const $=s=>document.querySelector(s);
export function installMultiplayerUI(app){
 app.openMultiplayer=()=>{
  app.originalMultiView?.dispose();app.stopOriginalStory?.();app.openOriginalScreen('<div id="original-multiplayer"></div>');
  return app.paintOriginalMenu('gfx_screen_multiplayer',$('#original-multiplayer'),{back_butt:()=>app.openMainMenu(),find_butt:()=>app.loadMultiplayer('versus'),coop_butt:()=>app.loadMultiplayer('coop')},{presentation:'screen',prepare:clip=>{if(clip.phoneWarning)clip.phoneWarning.text='Two players share this device. Use Switch player to hand over controls.';},labels:{back_butt:'Back',find_butt:'Local versus',coop_butt:'Local co-op'}}).then(view=>app.originalMultiView=view);
 };
 app.loadMultiplayer=mode=>{
  app.originalMultiView?.dispose();
  const level=app.variants.find(l=>l.className===(mode==='coop'?'multi_level_2':'multi_level_1_1'));clearTimeout(app.resultTimer);app.battle?.dispose?.();app.tunnel=null;app.story=null;
  if(app.previewMode){app.save=app.primarySave;app.primarySave=null;app.previewMode=false;}
  const Engine=mode==='coop'?LocalCoop:LocalVersus;app.battle=new Engine(app.data,level,app.save,(type,e)=>app.onBattle(type,e));app.stageId=level.id;app.captureMode=false;app.selectedUid=app.activeParty.find(Boolean)?.uid;
  $('#path-select').innerHTML=['p','2','3','4'].filter(key=>Object.hasOwn(level.paths,key)).map((key,i)=>`<option value="${key}">Path ${i+1}</option>`).join('');app.scene?.showLevel();app.scene?.fit();app.renderAll();app.closeModal();app.setOriginalPresentation('battle');
  const battle=app.battle;battle.originalLocalIntros=new Set([0]);const intro=mode==='versus'?'popup_online_intro_1_0':'popup_online_intro_2';app.showOriginalStory(intro,{battle,phase:'intro'}).then(shown=>{if(!shown&&app.battle===battle)app.beginOriginalReadyGo();});
 };
 app.switchLocalPlayer=()=>{const b=app.battle;if(!b.isMultiplayer)return;b.switchPlayer(1-b.localPlayer);app.selectedUid=app.activeParty.find(Boolean)?.uid;app.renderAll();app.scene?.render();if(b.multiplayerMode==='versus'&&!b.originalLocalIntros?.has(b.localPlayer)){b.originalLocalIntros??=new Set();b.originalLocalIntros.add(b.localPlayer);const state=b.state;if(state==='running')b.state='paused';app.showOriginalStory('popup_online_intro_1_1',{battle:b,onComplete:()=>{if(app.battle===b)b.state=state;app.renderAll();app.scene?.updateMusic?.();}});}};
 app.showMultiplayerResult=event=>{
  const battle=app.battle;if(!event.won&&event.mode==='coop')return app.beginOriginalLoss(event).then(shown=>{if(!shown)app.exitOriginalBattle(battle);});
  const popup=event.mode==='coop'?'popup_online_win_2':event.winner===1?'popup_online_win_1_1':'popup_online_win_1_0';
  return app.showOriginalStory(popup,{battle,phase:'win',event}).then(shown=>{if(!shown)app.exitOriginalBattle(battle);});
 };
}
