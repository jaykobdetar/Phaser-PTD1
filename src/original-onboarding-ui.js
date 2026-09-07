import {newSave} from './model.js';
/** The original name popup is painted by the profile UI. Oak's recovered
 * controller owns version/starter selection and sends the starter to storage. */
export function installOriginalOnboardingUI(app){
 const finish=()=>{app.hasProfile=true;app.selectedUid=app.save.party.find(Boolean)??null;app.store();app.openOriginalCampaign();};
 app.resumeOriginalStarter=()=>{
  if(app.save.pokemon.length)return app.openOriginalCampaign();
  app.stopOriginalStory?.();app.battle?.dispose?.();app.loadLevel(1,false,{skipIntro:true});
  return app.beginOriginalTutorial({onComplete:()=>{if(!app.save.pokemon.length)return;app.save.party=Array(6).fill(null);finish();}});
 };
 app.createOriginalProfile=(slot,name,replace=false)=>{
  const save=newSave(app.data,1);save.trainer=String(name).slice(0,30);save.money=0;save.pokemon=[];save.party=Array(6).fill(null);save.dex={normal:[],shiny:[],shadow:[]};
  app.hasProfile=false;app.previewMode=false;app.primarySave=null;app.save=save;app.loadLevel(1,false,{skipIntro:true});
  return app.beginOriginalTutorial({onComplete:()=>{
   if(!save.pokemon.length)return;
   save.party=Array(6).fill(null);
   if(replace){app.profiles.bank.active=slot;app.profiles.save(save);app.save=app.profiles.current;}else app.save=app.profiles.create(slot,save);
   finish();
  }});
 };
 app.openNewProfile=(slot,replace=false)=>app.openOriginalProfileName(slot,replace);
 app.openStarter=()=>app.resumeOriginalStarter();
}
