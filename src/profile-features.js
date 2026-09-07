// Rules recovered from popups_TM, popups_Relearn, popups_Items,
// screen_PokeMart and profile_user. Money and inventory change atomically.
export const ITEMS = Object.freeze([
  { id: 1, name: 'Moon Stone', price: 10000 },
  { id: 2, name: 'Leaf Stone', price: 10000 },
  { id: 3, name: 'Thunder Stone', price: 10000 },
  { id: 4, name: 'Water Stone', price: 10000 },
  { id: 5, name: 'Fire Stone', price: 10000 },
]);
export const TARGET_MODES = Object.freeze([
  ['first','First'],['fastest','Fastest'],['slowest','Slowest'],
  ['weakest','Lowest HP'],['strongest','Highest HP'],
  ['effective','Most effective'],['healthy','Avoid red HP'],
  ['candy','Candy carriers'],['no-candy','Not carrying candy'],
]);
const TM_REQUIREMENTS = {207:5,193:25,310:25,425:36,426:36,427:36,224:16};
const safeCounter = n => Number.isSafeInteger(n)&&n>=0 ? n : 0;
const flags = object => Object.fromEntries(Object.entries(object??{}).filter(([key,value])=>/^\d+$/.test(key)&&Number(key)<10000&&Number.isSafeInteger(value)&&value>=0));

export function normalizeProfileFeatures(input,data,pokemon) {
  const inventory={};
  for(const [id,value] of Object.entries(input.inventory??{})){const count=safeCounter(Number(value));if(/^[1-9]\d*$/.test(id)&&Number(id)<10000&&count)inventory[id]=count;}
  const dex={normal:[],shiny:[],shadow:[]};
  for(const form of Object.keys(dex)) {
    dex[form]=[...new Set((Array.isArray(input.dex?.[form])?input.dex[form]:[]).filter(id=>data.species[id]&&id<1000))];
  }
  for(const p of pokemon){const form=['normal','shiny','shadow'][p.shiny??0];if(p.speciesId<1000&&!dex[form].includes(p.speciesId))dex[form].push(p.speciesId);}
  return { inventory,dex,gameVersion:input.gameVersion===2?2:1,
    extraInfoValues:flags(input.extraInfoValues),achievements:flags(input.achievements),challengeCompleted:Math.min(6,safeCounter(input.challengeCompleted)),
    avatar:{gender:input.avatar?.gender==='girl'?'girl':'boy',style:Math.max(1,Math.min(100,safeCounter(input.avatar?.style)))},
    npcTrade:String(input.npcTrade??'0'),challengeCodeUsed:Boolean(input.challengeCodeUsed),
    giftsClaimed:[...new Set((Array.isArray(input.giftsClaimed)?input.giftsClaimed:[]).filter(s=>typeof s==='string'&&s.length<=100))],
  };
}

export function recordOwned(save,pokemon) {
  if(pokemon.speciesId>=1000)return;
  save.dex??={normal:[],shiny:[],shadow:[]};
  const list=save.dex[['normal','shiny','shadow'][pokemon.shiny??0]]??=[];
  if(!list.includes(pokemon.speciesId))list.push(pokemon.speciesId);
}

export function buyItem(save,itemId) {
  const item=ITEMS.find(item=>item.id===itemId);
  if(!item)return {ok:false,reason:'Unknown item.'};
  if(save.money<item.price)return {ok:false,reason:'You need ₽ 10,000.'};
  save.inventory??={};save.inventory[itemId]=(save.inventory[itemId]??0)+1;save.money-=item.price;
  return {ok:true,item};
}

export function useEvolutionItem(data,save,pokemon,itemId) {
  if(!save.pokemon.includes(pokemon))return {ok:false,reason:'Choose a Pokémon in your collection.'};
  const evolution=data.species[pokemon.speciesId].evolutions.find(e=>e.itemId===itemId);
  if(!evolution)return {ok:false,reason:'This stone cannot evolve that Pokémon.'};
  if(!(save.inventory?.[itemId]>0))return {ok:false,reason:'You do not have that stone.'};
  const previousSpeciesId=pokemon.speciesId;
  save.inventory[itemId]--;if(!save.inventory[itemId])delete save.inventory[itemId];
  if(pokemon.nickname===data.species[pokemon.speciesId].name)pokemon.nickname='';
  pokemon.speciesId=evolution.to;recordOwned(save,pokemon);
  return {ok:true,previousSpeciesId,speciesId:pokemon.speciesId};
}

export function tmEligibility(data,save,pokemon,moveId) {
  if(!pokemon||!save.pokemon.includes(pokemon))return {ok:false,reason:'Choose a Pokémon.'};
  const species=data.species[pokemon.speciesId];
  const tms=[...species.tmMoveIds,...(pokemon.shiny===2&&species.shadowExtraTmMoveId?[species.shadowExtraTmMoveId]:[])];
  if(!tms.includes(moveId))return {ok:false,reason:'This Pokémon cannot learn that TM.'};
  if(pokemon.moves.includes(moveId))return {ok:false,reason:'Already known.'};
  if(moveId===225&&!save.haveFlash)return {ok:false,reason:'Obtain Flash on Route 2 first.'};
  const required=TM_REQUIREMENTS[moveId];
  if(required&&save.unlocked<=required)return {ok:false,reason:`Complete stage ${required} first.`};
  if(save.money<10000)return {ok:false,reason:'You need ₽ 10,000.'};
  return {ok:true,cost:10000};
}

export function teachMove(data,save,pokemon,moveId,replaceIndex,kind='tm') {
  let cost;
  if(kind==='tm'){const result=tmEligibility(data,save,pokemon,moveId);if(!result.ok)return result;cost=result.cost;}
  else {
    if(!save.pokemon.includes(pokemon)||pokemon.moves.includes(moveId))return {ok:false,reason:'Move is already known or Pokémon is unavailable.'};
    const entry=data.species[pokemon.speciesId].learnset.find(m=>m.moveId===moveId&&m.level<=pokemon.level);
    if(!entry)return {ok:false,reason:'This move is not available at the current level.'};
    cost=kind==='level'&&entry.level===pokemon.level?0:1000;
    if(save.money<cost)return {ok:false,reason:`You need ₽ ${cost.toLocaleString()}.`};
  }
  if(pokemon.moves.length>=4&&(!Number.isInteger(replaceIndex)||replaceIndex<0||replaceIndex>=4))return {ok:false,reason:'Choose which move to replace.'};
  const old=pokemon.moves[replaceIndex];
  if(pokemon.moves.length<4)pokemon.moves.push(moveId);else pokemon.moves[replaceIndex]=moveId;
  if(pokemon.selectedMove===old||!pokemon.selectedMove)pokemon.selectedMove=moveId;
  save.money-=cost;return {ok:true,cost};
}

export function releasePokemon(save,uid) {
  const pokemon=save.pokemon.find(p=>p.uid===uid);
  if(!pokemon)return {ok:false,reason:'Pokémon not found.'};
  save.party=Array.from({length:6},(_,i)=>save.party[i]===uid?null:save.party[i]??null);save.pokemon=save.pokemon.filter(p=>p.uid!==uid);
  return {ok:true,pokemon};
}

export function tradePokemon(data,firstSave,firstUid,secondSave,secondUid) {
  if(firstSave===secondSave)return {ok:false,reason:'Choose two different local profiles.'};
  const first=firstSave.pokemon.find(p=>p.uid===firstUid),second=secondSave.pokemon.find(p=>p.uid===secondUid);
  if(!first||!second)return {ok:false,reason:'Both Pokémon must be present before trading.'};
  if(firstSave.pokemon.some(p=>p.uid===secondUid)||secondSave.pokemon.some(p=>p.uid===firstUid))return {ok:false,reason:'These profiles contain duplicate Pokémon identities.'};
  firstSave.pokemon[firstSave.pokemon.indexOf(first)]=second;
  secondSave.pokemon[secondSave.pokemon.indexOf(second)]=first;
  firstSave.party=firstSave.party.map(uid=>uid===firstUid?secondUid:uid);
  secondSave.party=secondSave.party.map(uid=>uid===secondUid?firstUid:uid);
  // Offline trade policy: reproduce the four classic trade evolutions. The SWF
  // delegates this to its former server, whose implementation was not supplied.
  for(const p of [first,second]){
    if([64,67,75,93].includes(p.speciesId)){if(p.nickname===data.species[p.speciesId].name)p.nickname='';p.speciesId++;}
  }
  recordOwned(firstSave,second);recordOwned(secondSave,first);
  return {ok:true,firstReceived:second,secondReceived:first};
}
