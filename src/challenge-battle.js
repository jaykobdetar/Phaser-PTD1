import {Battle} from './battle.js';
import {ReverseBattle} from './reverse-battle.js';
import {makePokemon} from './model.js';
import {recordOwned} from './profile-features.js';
import {initializeStageHooks} from './stage-hooks.js';
import {normalizePartySlots} from './party-slots.js';
export function challengeSave(data,level,save) {
  if(!level.temporaryParty)return save;
  const temporary=structuredClone(save);
  temporary.pokemon=level.forcedParty.map((p,i)=>makePokemon(data,p.speciesId,p.level,{...p,uid:`challenge-${level.challengeId}-${i}`,temporary:true}));
  temporary.party=normalizePartySlots(temporary.pokemon.map(p=>p.uid));
  // Original challenges replace partyList, but keep global money/achievement
  // counters. Earnings and training costs survive leaving before a result.
  for(const key of ['money','achievements']) Object.defineProperty(temporary,key,{
    enumerable:true,configurable:true,get:()=>save[key],set:value=>{save[key]=value;},
  });
  return temporary;
}
export function awardChallenge(data,save,id) {
  const first=(save.challengeCompleted??0)<id;save.challengeCompleted=Math.max(save.challengeCompleted??0,id);
  if(!first)return null;
  if(id===2){save.inventory??={};save.inventory[6]=(save.inventory[6]??0)+1;return {itemId:6,name:'Old Rod'};}
  if(id!==1&&id!==6)return null;
  const claim=`challenge-${id}`;save.giftsClaimed??=[];if(save.giftsClaimed.includes(claim))return null;
  const speciesId=id===1?74:81,moves=id===1?[1,25]:[1];
  const p=makePokemon(data,speciesId,1,{shiny:1,moves,selectedMove:1});save.pokemon.push(p);recordOwned(save,p);save.giftsClaimed.push(claim);return {pokemon:p,name:data.species[speciesId].name};
}
const ChallengeRules=Base=>class extends Base {
  constructor(data,level,save,emit,options={}) {
    super(data,level,challengeSave(data,level,save),emit,options);this.campaignSave=save;this.isChallenge=true;this.challengeId=level.challengeId;
    initializeStageHooks(this);
    if(this.challengeId===2)this.potions=0;
  }
  start(options={}){
    // Challenge 3 starts without a party: catch the first shiny Geodude.
    return super.start({...options,allowEmpty:this.challengeId===3||options.allowEmpty});
  }
  capture(uid){
    const result=super.capture(uid);
    if(result.ok&&this.level.temporaryParty) result.profile.temporary=true;
    return result;
  }
  finish(won){
    if(this.state!=='running')return;
    this.state=won?'won':'lost';
    const reward=won?awardChallenge(this.data,this.campaignSave,this.challengeId):null;
    this.emit('finish',{won,stats:this.stats,warnings:[...this.warnings],nextStage:null,challengeId:this.challengeId,reward,stageFacts:this.stageFacts});
  }
};
export const ChallengeBattle=ChallengeRules(Battle);
export const ChallengeInvasion=ChallengeRules(ReverseBattle);
