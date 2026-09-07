import {Battle} from './battle.js';
import {ReverseBattle} from './reverse-battle.js';
import {makePokemon} from './model.js';
import {initializeStageHooks} from './stage-hooks.js';
const makeTeam=(data,entries,owner,level)=>entries.map(([speciesId,move],i)=>makePokemon(data,speciesId,level,{uid:`local-${owner}-${i}`,moves:[move],selectedMove:move,owner,temporary:true}));
export const VERSUS_DEFENDERS=[[6,317],[135,249],[3,16],[131,93],[18,36],[107,362]];
export const VERSUS_ATTACKERS=[[9,18],[76,25],[136,213],[26,97],[71,26],[106,354]];
export const COOP_TEAM=[[6,317],[135,249],[112,297]];
export class LocalVersus extends ReverseBattle {
 constructor(data,level,save,emit,options={}){
  const temporary=structuredClone(save),defenders=makeTeam(data,VERSUS_DEFENDERS,0,40),attackers=makeTeam(data,VERSUS_ATTACKERS,1,40);
  temporary.pokemon=[...defenders,...attackers];temporary.party=attackers.map(p=>p.uid);
  super(data,{...level,displayName:'Local Versus',mode:'invasion',energy:800,launchCost:20},temporary,emit,options);
  this.isMultiplayer=true;this.multiplayerMode='versus';this.localPlayer=0;this.teams=[defenders,attackers];this.potions=0;
 }
 prepareDefenders(){/* Player one places the original six defenders. */}
 get party(){return this.teams?.[this.localPlayer]??super.party;}
 get canPlace(){return this.localPlayer===0;}
 switchPlayer(player){this.localPlayer=player===1?1:0;this.emit('local-player',{player:this.localPlayer});}
 place(uid,spot){return this.localPlayer===0?Battle.prototype.place.call(this,uid,spot):false;}
 recall(uid){return this.localPlayer===0?Battle.prototype.recall.call(this,uid):false;}
 start({allowEmpty=false}={}){if(!allowEmpty&&!this.towers.some(t=>t.placed&&t.alive))return false;if(this.state!=='ready')return false;this.state='running';this.emit('start',{});return true;}
 launch(uid,path='p'){
  if(this.localPlayer!==1)return false;
  const ok=super.launch(uid,path);if(ok){const p=this.enemies.at(-1);p.original.speed=Math.trunc(p.original.speed*0.5);p.stats.speed=p.original.speed;p.speed=p.original.speed/10;p.original.var_107=p.speciesId===71;}return ok;
 }
 syncPokemon(profile){if(profile.owner===0)Battle.prototype.syncPokemon.call(this,profile);else super.syncPokemon(profile);}
 finish(attackerWon){if(this.state!=='running')return;this.state=attackerWon?'won':'lost';this.emit('finish',{won:true,multiplayer:true,mode:'versus',winner:attackerWon?1:0,stats:this.stats,warnings:[...this.warnings],nextStage:null});}
}
export class LocalCoop extends Battle {
 constructor(data,level,save,emit,options={}){
  const temporary=structuredClone(save),teams=[makeTeam(data,COOP_TEAM,0,90),makeTeam(data,COOP_TEAM,1,90)];temporary.pokemon=teams.flat();temporary.party=temporary.pokemon.map(p=>p.uid);
  super(data,{...level,displayName:'Local Co-op · Zapdos'},temporary,emit,options);this.teams=teams;this.localPlayer=0;this.isMultiplayer=true;this.multiplayerMode='coop';this.potions=0;initializeStageHooks(this);
 }
 get party(){return super.party;}
 get visibleParty(){return this.party.slice(this.localPlayer*3,this.localPlayer*3+3);}
 switchPlayer(player){this.localPlayer=player===1?1:0;this.emit('local-player',{player:this.localPlayer});}
 place(uid,spot){return this.visibleParty.some(p=>p?.uid===uid)?super.place(uid,spot):false;}
 canCapture(){return false;}
 capture(){return {ok:false,message:'Catching is disabled in multiplayer.'};}
 usePotion(){return false;}
 defeat(enemy){if(!enemy.alive)return;super.defeat(enemy);this.wave?.state?.wave_Finished?.();this.finish(true);}
 tick(){super.tick();if(this.state==='running'&&this.partyMembers.every(p=>this.towers.some(t=>t.uid===p.uid&&!t.alive)))this.finish(false);}
 finish(won){if(this.state!=='running')return;this.state=won?'won':'lost';this.emit('finish',{won,multiplayer:true,mode:'coop',stats:this.stats,warnings:[...this.warnings],nextStage:null});}
}
