import {ChallengeBattle,ChallengeInvasion} from './challenge-battle.js';
const $=s=>document.querySelector(s);
export function installChallengeUI(app){
 app.openChallenges=()=>{
  if(app.openOriginalChallenges)return app.openOriginalChallenges();
  app.openModal(`<h2>Challenge Mode</h2><p>Six challenges with their original teams, maps and waves.</p><div class="service-grid">${app.variants.filter(l=>l.challengeId).sort((a,b)=>a.challengeId-b.challengeId).map(l=>`<button data-challenge="${l.challengeId}" ${app.save.challengeCompleted<l.challengeId-1?'disabled':''}><b>Challenge ${l.challengeId} ${app.save.challengeCompleted>=l.challengeId?'✓':''}</b><small>${l.temporaryParty?'Special challenge team':'Use your party'}</small></button>`).join('')}</div><div class="dialog-actions"><button id="challenge-party">Choose party</button><button id="challenge-back">Main menu</button></div>`);
  document.querySelectorAll('[data-challenge]').forEach(b=>b.onclick=()=>[4,5].includes(Number(b.dataset.challenge))&&app.chooseChallengeParty?app.chooseChallengeParty(Number(b.dataset.challenge)):app.loadChallenge(Number(b.dataset.challenge)));
  $('#challenge-party').onclick=()=>app.openCollection();$('#challenge-back').onclick=()=>app.openMainMenu();
 };
 app.loadChallenge=id=>{
  const level=app.variants.find(l=>l.challengeId===id);if(!level||app.save.challengeCompleted<id-1)return;
  clearTimeout(app.resultTimer);app.battle?.dispose?.();app.tunnel=null;app.story=null;
  if(app.previewMode){app.save=app.primarySave;app.primarySave=null;app.previewMode=false;}
  const Engine=level.mode==='invasion'?ChallengeInvasion:ChallengeBattle;
  app.battle=new Engine(app.data,level,app.save,(type,e)=>app.onBattle(type,e));app.stageId=level.id;app.selectedUid=app.battle.party.find(Boolean)?.uid;app.captureMode=false;
  $('#path-select').innerHTML=['p','2','3','4'].filter(key=>Object.hasOwn(level.paths,key)).map((key,i)=>`<option value="${key}">Path ${i+1}</option>`).join('');
  app.scene?.showLevel();app.renderAll();app.closeModal();app.setOriginalPresentation('battle');const battle=app.battle;app.beginOriginalIntro?.().then(shown=>{if(!shown&&app.battle===battle)app.beginOriginalReadyGo?.();});
 };
 app.showChallengeResult=event=>{
  app.openModal(`<h2>${event.won?'Challenge complete!':'Try again'}</h2><p>Challenge ${event.challengeId}${event.reward?` · Received ${event.reward.name}!`:''}</p><p>${event.stats.defeated} Pokémon defeated.</p><div class="dialog-actions"><button id="challenge-retry">Try again</button><button id="challenge-select">Challenge Mode</button></div>`);
  $('#challenge-retry').onclick=()=>app.loadChallenge(event.challengeId);$('#challenge-select').onclick=()=>app.openChallenges();
 };
}
