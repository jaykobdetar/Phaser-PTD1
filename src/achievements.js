import {makePokemon} from './model.js';
import {recordOwned} from './profile-features.js';
export const ACHIEVEMENTS=[
 {id:1,name:'Four shiny encounters',description:'Find the original four shiny encounter groups.',reward:'Shiny Onix'},
 {id:2,name:'Starmie encounter',description:'Complete the Starmie encounter condition in the original wave script.',reward:'Shiny Staryu'},
 {id:3,name:'Cerulean Gym team',description:'Win without deploying a Grass or Electric type.',reward:'Shiny Tentacool'},
 {id:4,name:'Challenge 5 move restriction',description:'Win Challenge 5 without deploying a Pokémon that knows move 36.'},
 {id:5,name:'Challenge 5 candy defense',description:'Win Challenge 5 with more than one candy remaining.'},
 {id:6,name:'Saffron Dojo',description:'Use attackers at level 70 or below and steal candy four first.',reward:'Shiny Hitmonlee or Hitmonchan'},
 {id:7,name:'Pewter Gym',description:'Keep every candy using deployed Pokémon at level 10 or below.'},
 {id:8,name:'Cerulean Gym',description:'Keep every candy using deployed Pokémon at level 30 or below.'},
 {id:9,name:'Vermilion Gym',description:'Keep every candy using deployed Pokémon at level 50 or below.'},
 {id:10,name:'Celadon Gym',description:'Keep every candy using deployed Pokémon at level 60 or below.'},
 {id:11,name:'Fuchsia Gym',description:'Keep every candy using deployed Pokémon at level 64 or below.'},
 {id:12,name:'Saffron Gym',description:'Win using Pokémon at level 80 or below without deploying Poison or Steel types.'},
 {id:13,name:'Cinnabar Gym',description:'Keep every candy using deployed Pokémon at level 90 or below.'},
 {id:14,name:'Viridian Gym',description:'Complete the original Viridian Gym achievement condition.'},
];
export function achievementStatus(save,id){const keys=id===1?[100,101,102,103]:[id],values=keys.map(k=>save.achievements?.[k]??0),limit=[4,5].includes(id)?2:4;return {earned:values.every(v=>v>0),claimed:values.every(v=>v>=limit),claims:Math.max(0,Math.min(...values)-1),limit:limit-1};}
export function claimAchievement(data,save,id){
 if(!ACHIEVEMENTS.some(a=>a.id===id))return {ok:false,reason:'Unknown achievement.'};
 if((save.challengeCompleted??0)<3)return {ok:false,reason:'Complete Challenge 3 first.'};
 const state=achievementStatus(save,id);if(!state.earned||state.claimed)return {ok:false,reason:state.claimed?'Reward already claimed.':'Complete this achievement first.'};
 const speciesId={1:95,2:120,3:72,6:save.originalExtraInfo?.includes(30)?106:107}[id],moves={1:[64,1,14,198],2:[1,14],3:[8],6:speciesId===106?[45]:[361]}[id];let pokemon;
 if(speciesId){pokemon=makePokemon(data,speciesId,1,{shiny:1,moves,selectedMove:moves[0]});pokemon.originalExtra={1:4,2:5,3:3,6:153}[id];save.pokemon.push(pokemon);recordOwned(save,pokemon);}
 save.achievements??={};for(const key of id===1?[100,101,102,103]:[id])save.achievements[key]=(save.achievements[key]??0)+1;
 return {ok:true,pokemon};
}
export function installAchievementUI(app){
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 app.openAchievements=()=>{
  app.openModal(`<h2>Achievements</h2><button id="achievement-dex">Pokédex</button>${app.save.challengeCompleted<3?'<p>Complete Challenge 3 to collect rewards.</p>':''}<div class="achievement-list">${ACHIEVEMENTS.map(a=>{const s=achievementStatus(app.save,a.id);return `<article><h3>${a.id}. ${esc(a.name)} ${s.earned?'✓':''}</h3><p>${a.description}</p><small>${a.reward??'Achievement record'}</small><button data-achievement="${a.id}" ${!s.earned||s.claimed||app.save.challengeCompleted<3?'disabled':''}>${s.claimed?'Claimed':`Claim ${a.reward?'reward':'record'} · ${s.claims} / ${s.limit}`}</button></article>`;}).join('')}</div>`);
  document.querySelector('#achievement-dex').onclick=()=>app.openDex();
  document.querySelectorAll('[data-achievement]').forEach(b=>b.onclick=()=>{const result=claimAchievement(app.data,app.save,Number(b.dataset.achievement));if(result.ok){app.store();app.openAchievements();app.toast(result.pokemon?`${app.data.species[result.pokemon.speciesId].name} sent to storage.`:'Achievement recorded.');}else app.toast(result.reason);});
 };
}
