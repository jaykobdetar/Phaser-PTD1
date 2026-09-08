import {makePokemon,newSave,validateSave} from './model.js';
import {recordOwned,releasePokemon} from './profile-features.js';
import * as sourceCatalog from './center-catalog.js';

const SLOTS=[0,1,2],DAY=86400000,MAX_COINS=999999999;
const clone=value=>structuredClone(value);
const fail=message=>{throw new Error(message);};
const integer=(value,min,max,label)=>{const n=Number(value);if(!Number.isSafeInteger(n)||n<min||n>max)fail(`Invalid ${label}.`);return n;};
const text=(value,max=120)=>String(value??'').trim().slice(0,max);
const list=(value,label,max=10000)=>{if(!Array.isArray(value)||value.length>max)fail(`Invalid ${label}.`);return value;};
const owner=value=>integer(value,0,2,'trainer');
const recordId=value=>{if(typeof value!=='string'||!value||value.length>100)fail('Invalid Center record.');return value;};
const nowDate=time=>new Date(time).toISOString().slice(0,10);
const cooldownDay=(value,label)=>{if(value==null||value==='')return '';if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))fail(`Invalid ${label}.`);const time=Date.parse(`${value}T00:00:00.000Z`);if(!Number.isFinite(time)||nowDate(time)!==value)fail(`Invalid ${label}.`);return value;};
// PTD1's recovered species data contains no gender table. Preserve an explicit
// destination choice without inventing species-specific PTD2/PTD3 rules.
const transferGender=value=>{if(!['male','female','genderless'].includes(value))fail('Choose a valid transfer gender.');return value;};
const giveawayWinnerType=value=>{if(!['single','per-pokemon'].includes(value))fail('Choose a giveaway winner type.');return value;};
const hasTag=(state,p)=>state.tags[p.uid]==='hacked'||String(p.myTag??'').toLowerCase()==='h';
const wallet=()=>({credits:0,casino:0,dailyDay:'',spinsDay:'',spins:0,freeDay:'',milestones:[],mysteryDaily:'',mysteryWeekly:'',giftCodes:[]});
const DEX_FORMS=['normal','shiny','shadow'];
const emptyDex=()=>({normal:[],shiny:[],shadow:[]});
function validateCenterDex(input){
 if(input==null)return emptyDex();if(typeof input!=='object'||Array.isArray(input))fail('Invalid account Pokédex.');
 return Object.fromEntries(DEX_FORMS.map(form=>[form,[...new Set(list(input[form]??[],`${form} account Pokédex`,151).map(id=>{if(!Number.isInteger(id)||id<1||id>151)fail('Invalid account Pokédex species.');return id;}))].sort((a,b)=>a-b)]));
}
export function newCenterState(){return {version:1,nextId:1,dex:emptyDex(),wallets:SLOTS.map(wallet),listings:[],offers:[],giveaways:[],inbox:[],notifications:[],history:[],transferVaults:{2:[],3:[]},tags:{},settings:{darkMode:false,announcements:true,oldCards:false,colorMoves:true,colorActions:true,dateFormat:'MM.DD.YYYY',timeFormat:'24'}};}
// Source profile_user reads one unsuffixed account Pokédex. Keep its completion
// history even after the last matching Pokémon leaves a profile or the account.
export function syncCenterDex(bank,priorDex=null){
 if(!bank.center)return null;
 const state=bank.center,existing=validateCenterDex(state.dex),prior=validateCenterDex(priorDex);
 const seen=Object.fromEntries(DEX_FORMS.map(form=>[form,new Set([...existing[form],...prior[form]])]));
 const add=(form,id)=>{if(DEX_FORMS.includes(form)&&Number.isInteger(id)&&id>=1&&id<=151)seen[form].add(id);};
 const addPokemon=p=>add(DEX_FORMS[p.shiny??0],p.speciesId);
 for(const profile of bank.slots??[])if(profile){for(const form of DEX_FORMS)for(const id of profile.dex?.[form]??[])add(form,Number(id));profile.pokemon.forEach(addPokemon);}
 for(const row of [...state.listings,...state.inbox,...Object.values(state.transferVaults).flat()])addPokemon(row.pokemon);
 for(const row of state.giveaways)row.pokemon.forEach(addPokemon);
 state.dex=Object.fromEntries(DEX_FORMS.map(form=>[form,[...seen[form]].sort((a,b)=>a-b)]));
 for(const profile of bank.slots??[])if(profile){profile.dex??=emptyDex();for(const form of DEX_FORMS)profile.dex[form]=[...new Set([...(profile.dex[form]??[]),...state.dex[form]])].sort((a,b)=>a-b);}
 return state.dex;
}
function checkPokemon(p,data){return validateSave({version:2,trainer:'Center',money:0,unlocked:1,pokemon:[p],party:[]},data).pokemon[0];}
function assertCenterSequence(state,roster=[]){
 const check=value=>{const match=/^(?:center-)?pc-(\d+)$/.exec(value??'');if(!match)return;const number=Number(match[1]);if(!Number.isSafeInteger(number)||number>=state.nextId)fail('The Center sequence must follow every existing record and Pokémon ID.');};
 const records=[...state.listings,...state.offers,...state.inbox,...state.giveaways,...state.notifications,...state.history,...Object.values(state.transferVaults).flat()];
 for(const row of records){check(row.id);check(row.targetId);row.listingIds?.forEach(check);for(const p of Array.isArray(row.pokemon)?row.pokemon:row.pokemon?[row.pokemon]:[])check(p.uid);row.winners?.forEach(w=>w.pokemonUids.forEach(check));}
 roster.forEach(p=>check(p.uid));Object.keys(state.tags).forEach(check);
}
function wishlist(value,data){return list(value??[],'wishlist groups',6).map(group=>list(group,'wishlist group',6).map(row=>({speciesId:integer(row.speciesId,1,9999,'Pokémon number'),shiny:integer(row.shiny??-1,-1,2,'form'),minLevel:integer(row.minLevel??1,1,100,'minimum level'),maxLevel:integer(row.maxLevel??100,1,100,'maximum level')}))).map(group=>{if(!group.length||group.some(r=>!data.species[r.speciesId]||r.minLevel>r.maxLevel))fail('Invalid wishlist Pokémon or level range.');return group;});}
export function validateCenterState(input,data){
 if(input==null)return newCenterState();if(input.version!==1)fail('Unsupported PokéCenter save version.');
 const state=newCenterState();state.nextId=integer(input.nextId??1,1,Number.MAX_SAFE_INTEGER,'Center sequence');state.dex=validateCenterDex(input.dex);
 state.wallets=list(input.wallets,'wallets',3).map(w=>({...wallet(),credits:integer(w.credits,0,MAX_COINS,'credits'),casino:integer(w.casino,0,MAX_COINS,'Casino Coins'),dailyDay:cooldownDay(w.dailyDay,'Daily Gift date'),spinsDay:cooldownDay(w.spinsDay,'slot date'),spins:integer(w.spins??0,0,50,'daily spins'),freeDay:cooldownDay(w.freeDay,'free credit date'),milestones:list(w.milestones??[],'milestones',300).map(v=>text(v,40)),mysteryDaily:cooldownDay(w.mysteryDaily,'daily Mystery Gift date'),mysteryWeekly:cooldownDay(w.mysteryWeekly,'weekly Mystery Gift date'),giftCodes:list(w.giftCodes??[],'gift codes',100).map(v=>text(v,60))}));if(state.wallets.length!==3)fail('Three Center wallets are required.');
 const ids=new Set();const common=r=>{const id=recordId(r.id);if(ids.has(id))fail('Duplicated Center record.');ids.add(id);return {id,owner:owner(r.owner),createdAt:integer(r.createdAt,0,8640000000000000,'record date')};};
 state.listings=list(input.listings??[],'listings').map(r=>{if(!['open','accepted','recalled','adopted'].includes(r.status))fail('Invalid trade state.');return {...common(r),pokemon:checkPokemon(r.pokemon,data),price:integer(r.price??0,0,MAX_COINS,'adoption price'),wishlist:wishlist(r.wishlist,data),allowHacked:!!r.allowHacked,status:r.status};});
 state.offers=list(input.offers??[],'offers').map(r=>{if(!['pending','accepted','declined','cancelled'].includes(r.status))fail('Invalid offer state.');const listingIds=list(r.listingIds,'offered trades',6).map(recordId);if(!listingIds.length||new Set(listingIds).size!==listingIds.length)fail('Choose between one and six distinct trades.');return {...common(r),targetId:recordId(r.targetId),listingIds,status:r.status};});
 state.inbox=list(input.inbox??[],'unclaimed Pokémon').map(r=>({...common(r),pokemon:checkPokemon(r.pokemon,data),source:text(r.source,100)}));
 state.giveaways=list(input.giveaways??[],'giveaways').map(r=>{if(!['open','ended','cancelled'].includes(r.status))fail('Invalid giveaway state.');return {...common(r),title:text(r.title,100),pokemon:list(r.pokemon,'giveaway prizes',20).map(p=>checkPokemon(p,data)),winnerType:giveawayWinnerType(r.winnerType??'per-pokemon'),endsAt:integer(r.endsAt,0,8640000000000000,'giveaway date'),participants:[...new Set(list(r.participants??[],'participants',3).map(owner))],status:r.status,winners:list(r.winners??[],'winners',20).map(w=>({owner:owner(w.owner),pokemonUids:list(w.pokemonUids??[],'winner prizes',20).map(recordId)}))};});
 for(const target of [2,3])state.transferVaults[target]=list(input.transferVaults?.[target]??[],'transfer vault').map(r=>({...common(r),pokemon:checkPokemon(r.pokemon,data),gender:transferGender(r.gender)}));
 state.notifications=list(input.notifications??[],'notifications',2000).map(r=>({...common(r),text:text(r.text,300),read:!!r.read,route:text(r.route,100)}));
 state.history=list(input.history??[],'history',2000).map(r=>({...common(r),type:text(r.type,60),text:text(r.text,300)}));
 if(input.tags&&typeof input.tags==='object'&&!Array.isArray(input.tags))for(const [uid,tag]of Object.entries(input.tags)){if(uid.length<=100&&tag==='hacked')state.tags[uid]=tag;}
 const s=input.settings??{};state.settings={darkMode:!!s.darkMode,announcements:s.announcements!==false,oldCards:!!s.oldCards,colorMoves:s.colorMoves!==false,colorActions:s.colorActions!==false,dateFormat:['MM.DD.YYYY','DD.MM.YYYY','YYYY.MM.DD'].includes(s.dateFormat)?s.dateFormat:'MM.DD.YYYY',timeFormat:s.timeFormat==='12'?'12':'24'};
 assertCenterSequence(state);syncCenterDex({center:state,slots:[]});return state;
}
export function assertCenterOwnership(bank){
 assertCenterSequence(bank.center,bank.slots.filter(Boolean).flatMap(s=>s.pokemon));
 const state=bank.center,seen=new Set();const add=p=>{if(seen.has(p.uid))fail('A Pokémon appears in more than one collection. Restore a consistent backup before trading.');seen.add(p.uid);};
 bank.slots.filter(Boolean).forEach(s=>s.pokemon.forEach(add));state.listings.filter(r=>r.status==='open').forEach(r=>add(r.pokemon));state.inbox.forEach(r=>add(r.pokemon));state.giveaways.filter(r=>r.status==='open').forEach(r=>r.pokemon.forEach(add));Object.values(state.transferVaults).flat().forEach(r=>add(r.pokemon));
 // Index the same open rows once; keep the first target and every owner's
 // listing IDs so malformed duplicate IDs retain the previous find/some result.
 const openById=new Map(),openByOwner=new Map();
 for(const row of state.listings)if(row.status==='open'){if(!openById.has(row.id))openById.set(row.id,row);if(!openByOwner.has(row.owner))openByOwner.set(row.owner,new Set());openByOwner.get(row.owner).add(row.id);}
 for(const offer of state.offers)if(offer.status==='pending'){const target=openById.get(offer.targetId);if(!target||target.owner===offer.owner||offer.listingIds.some(id=>!openByOwner.get(offer.owner)?.has(id)))fail('An offer refers to an unavailable trade.');}
}
export function matchesWishlist(groups,pokemon,data,{allowHacked=false,state={tags:{}}}={}){
 if(!allowHacked&&pokemon.some(p=>hasTag(state,p)))return false;
 return groups.some(group=>{if(group.length!==pokemon.length)return false;const match=(i,used)=>i===group.length||pokemon.some((p,j)=>!used.has(j)&&p.speciesId===group[i].speciesId&&(group[i].shiny===-1||p.shiny===group[i].shiny)&&p.level>=group[i].minLevel&&p.level<=group[i].maxLevel&&match(i+1,new Set([...used,j])));return match(0,new Set());});
}
export class CenterService{
 constructor(data,profiles,{clock=()=>Date.now(),rng=Math.random}={}){this.data=data;this.profiles=profiles;this.clock=clock;this.rng=rng;}
 get bank(){return this.profiles.bank;}get profile(){return this.bank.slots[this.active];}get active(){return this.bank.active;}get state(){return this.bank.center??newCenterState();}get wallet(){return this.state.wallets[this.active];}
 get catalog(){return {adoption:sourceCatalog.ADOPTION_CATALOG??[],corner:sourceCatalog.CORNER_REWARDS??[],daily:sourceCatalog.DAILY_PRIZES??{},conversion:sourceCatalog.CONVERSION_COSTS??{},slots:sourceCatalog.SLOT_RULES??{}};}
 async initialize(){if(!this.profiles.bank)await this.profiles.initialize();const draft=clone(this.bank);draft.center??=newCenterState();syncCenterDex(draft);if(JSON.stringify(draft)!==JSON.stringify(this.bank))await this.profiles.transact(bank=>{bank.center??=newCenterState();syncCenterDex(bank);return {ok:true};});return this;}
 async refresh(){await this.profiles.refresh();return this.initialize();}
 async perform(type,payload={}){
  const {result}=await this.profiles.transact(bank=>{
   bank.center=validateCenterState(bank.center,this.data);syncCenterDex(bank);const state=bank.center,slot=bank.active,save=bank.slots[slot],w=state.wallets[slot],time=this.clock(),day=nowDate(time);
   const id=()=>`pc-${state.nextId++}`;
   const entry=(target,fields)=>({id:id(),owner:target,createdAt:time,...fields});
   const requireProfile=()=>{if(!save)fail('Choose or create a local profile first.');};
   const notify=(target,message,route='home')=>{state.notifications.push(entry(target,{text:message,read:false,route}));state.notifications=state.notifications.slice(-2000);};
   const history=message=>{state.history.push(entry(slot,{type,text:message}));state.history=state.history.slice(-2000);};
   const inbox=(target,pokemon,source)=>{state.inbox.push(entry(target,{pokemon:clone(pokemon),source}));notify(target,`${this.data.species[pokemon.speciesId].name} is ready for pickup.`);};
   const take=(uid)=>{requireProfile();const r=releasePokemon(save,uid);if(!r.ok)fail(r.reason);return r.pokemon;};
   const openListing=(record)=>{const r=state.listings.find(r=>r.id===record&&r.status==='open');if(!r)fail('This trade is no longer available.');return r;};
   const ownedListing=record=>{const r=openListing(record);if(r.owner!==slot)fail('Only the owner can change this trade.');return r;};
   const charge=(currency,amount)=>{const balance=currency==='money'?save: w,key=currency==='money'?'money':currency;if(!['money','credits','casino'].includes(currency)||!Number.isSafeInteger(amount)||amount<0)fail('Invalid price.');if(balance[key]<amount)fail(`Not enough ${key==='money'?'PokéDollars':key==='credits'?'Center credits':'Casino Coins'}.`);balance[key]-=amount;};
   const award=(currency,amount,target=slot)=>{const balance=currency==='money'?bank.slots[target]:state.wallets[target],key=currency==='money'?'money':currency;if(!balance||!Number.isSafeInteger(amount)||amount<0||balance[key]+amount>MAX_COINS)fail('This reward would exceed the balance limit.');balance[key]+=amount;};
   const invalidate=closed=>{for(const offer of state.offers)if(offer.status==='pending'&&(closed.includes(offer.targetId)||offer.listingIds.some(v=>closed.includes(v)))){offer.status='cancelled';notify(offer.owner,'An offer was cancelled because an included trade closed.','offers');}};
   const evolve=p=>{p=clone(p);if([64,67,75,93].includes(p.speciesId)){if(p.nickname===this.data.species[p.speciesId].name)p.nickname='';p.speciesId++;}return p;};
   const allowOffer=(target,offered)=>{if(!target.allowHacked&&offered.some(row=>hasTag(state,row.pokemon)))fail('Tagged Pokémon are not allowed in offers for this trade.');};
   const accept=offer=>{const target=openListing(offer.targetId),offered=offer.listingIds.map(openListing);if(offered.some(r=>r.owner!==offer.owner)||target.owner===offer.owner)fail('This offer is no longer valid.');allowOffer(target,offered);offer.status='accepted';for(const r of offered){r.status='accepted';inbox(target.owner,evolve(r.pokemon),'Accepted trade');}target.status='accepted';inbox(offer.owner,evolve(target.pokemon),'Accepted trade');invalidate([target.id,...offered.map(r=>r.id)]);notify(target.owner,'Trade accepted. Your Pokémon are ready for pickup.','home');};
   let result={ok:true};
   if(type==='selectProfile'){bank.active=owner(payload.slot);if(!bank.slots[bank.active])fail('This profile is empty.');}
   else if(type==='createProfile'){const target=owner(payload.slot);if(bank.slots[target])fail('That profile already exists.');const starter=integer(payload.starter,1,7,'starter');if(![1,4,7].includes(starter))fail('Choose Bulbasaur, Charmander or Squirtle.');const profile=newSave(this.data,starter);profile.trainer=text(payload.trainer,30)||'Trainer';profile.gameVersion=Number(payload.gameVersion)===2?2:1;profile.pokemon[0].uid=`center-${id()}`;profile.party[0]=profile.pokemon[0].uid;bank.slots[target]=profile;bank.active=target;}
   else if(type==='settings'){state.settings={...state.settings,...payload};}
   else if(type==='importBank'){const priorDex=state.dex,imported=this.profiles.validate(payload.bank);for(const key of Object.keys(bank))delete bank[key];Object.assign(bank,imported);bank.center=validateCenterState(bank.center,this.data);syncCenterDex(bank,priorDex);assertCenterOwnership(bank);return {ok:true};}
   else {
    requireProfile();
    if(type==='renameProfile'){save.trainer=text(payload.name,30);if(!save.trainer)fail('Enter a trainer name.');}
    else if(type==='avatar'){const style=integer(payload.style,1,19,'avatar'),gender=payload.gender==='girl'&&![9,12,15].includes(style)?'girl':'boy',retaining=save.avatar.style===style&&save.avatar.gender===gender,achievement=style===3?4:style===4?5:null;if(achievement&&!retaining&&(save.achievements?.[achievement]??0)<2)fail(`Complete and claim Achievement ${achievement} to use this avatar.`);save.avatar={gender,style};}
    else if(type==='renamePokemon'){const p=save.pokemon.find(p=>p.uid===payload.uid);if(!p)fail('Pokémon not found.');p.nickname=text(payload.name,30);}
    else if(type==='abandon'){const p=take(payload.uid);delete state.tags[p.uid];history(`Released ${this.data.species[p.speciesId].name}.`);}
    else if(type==='claim'||type==='abandonInbox'){const chosen=list(payload.ids??[],'pickups',5000);if(!chosen.length||new Set(chosen).size!==chosen.length)fail('Choose unclaimed Pokémon.');const rows=chosen.map(v=>state.inbox.find(r=>r.id===v&&r.owner===slot));if(rows.some(r=>!r))fail('One of these Pokémon was already claimed.');if(type==='claim'){const target=owner(payload.slot??slot),destination=bank.slots[target];if(!destination)fail('Create the receiving profile first.');if(destination.pokemon.length+rows.length>5000)fail('The receiving collection is full.');for(const row of rows){destination.pokemon.push(row.pokemon);recordOwned(destination,row.pokemon);}}else for(const row of rows)delete state.tags[row.pokemon.uid];state.inbox=state.inbox.filter(r=>!chosen.includes(r.id));history(type==='claim'?`Picked up ${rows.length} Pokémon.`:`Abandoned ${rows.length} unclaimed Pokémon.`);}
    else if(type==='createListing'){const p=take(payload.uid),row=entry(slot,{pokemon:p,price:integer(payload.price??0,0,MAX_COINS,'adoption price'),wishlist:wishlist(payload.wishlist,this.data),allowHacked:!!payload.allowHacked,status:'open'});state.listings.push(row);result.listing=row;history('Created a trade listing.');}
    else if(type==='editListing'){const row=ownedListing(payload.id);row.price=integer(payload.price??0,0,MAX_COINS,'adoption price');row.wishlist=wishlist(payload.wishlist,this.data);row.allowHacked=!!payload.allowHacked;}
    else if(type==='recallListing'){const row=ownedListing(payload.id);row.status='recalled';invalidate([row.id]);inbox(slot,row.pokemon,'Called-back trade');}
    else if(type==='makeOffer'){const target=openListing(payload.targetId);if(target.owner===slot)fail('Choose another trainer’s trade.');const listingIds=list(payload.listingIds,'offered Pokémon',6).map(recordId);if(!listingIds.length||new Set(listingIds).size!==listingIds.length)fail('Choose one to six different trades.');const offered=listingIds.map(ownedListing);allowOffer(target,offered);if(state.offers.some(r=>r.status==='pending'&&r.owner===slot&&r.targetId===target.id&&r.listingIds.length===listingIds.length&&r.listingIds.every(id=>listingIds.includes(id))))fail('You already made this offer.');const offer=entry(slot,{targetId:target.id,listingIds,status:'pending'});state.offers.push(offer);if(matchesWishlist(target.wishlist,offered.map(r=>r.pokemon),this.data,{allowHacked:target.allowHacked,state})){accept(offer);result.autoAccepted=true;}else notify(target.owner,'A trainer offered Pokémon for your trade.','trades');result.offer=offer;}
    else if(['acceptOffer','declineOffer','cancelOffer'].includes(type)){const offer=state.offers.find(r=>r.id===payload.id&&r.status==='pending');if(!offer)fail('This offer is no longer pending.');const target=openListing(offer.targetId);if(type==='cancelOffer'){if(offer.owner!==slot)fail('Only the offering trainer can withdraw this offer.');offer.status='cancelled';}else{if(target.owner!==slot)fail('Only the trade owner can review this offer.');if(type==='acceptOffer')accept(offer);else{offer.status='declined';notify(offer.owner,'Your trade offer was declined.','offers');}}}
    else if(type==='adoptListing'){const row=openListing(payload.id);if(row.owner===slot||!row.price)fail('This trade cannot be adopted.');charge('credits',row.price);award('credits',row.price,row.owner);row.status='adopted';invalidate([row.id]);inbox(slot,evolve(row.pokemon),'Trainer adoption');notify(row.owner,'Your Pokémon was adopted. Center credits were added.','trades');}
    else if(type==='dailyCredits'){if(w.freeDay>=day)fail('Today’s free reward has already been claimed.');w.freeDay=day;let credits=10;const badges=Math.min(8,save.badges??0);for(let badge=1;badge<=badges;badge++){const key=`badge-${badge}`;if(!w.milestones.includes(key)){w.milestones.push(key);credits+=5;}}award('credits',credits);award('casino',500);result.reward={credits,casino:500};history(`Claimed ${credits} free Center credits and 500 Casino Coins.`);}
    else if(type==='exchangeCoins'){const amount=integer(payload.amount,1,10000000,'coin amount');charge('money',amount);award('casino',amount);history(`Exchanged ${amount} PokéDollars for Casino Coins.`);}
    else if(type==='readNotifications'){const chosen=payload.ids?new Set(list(payload.ids,'notifications',2000)):null;for(const n of state.notifications)if(n.owner===slot&&(!chosen||chosen.has(n.id)))n.read=true;}
    else if(type==='createGiveaway'){const uids=list(payload.uids,'giveaway Pokémon',20);if(!uids.length||new Set(uids).size!==uids.length)fail('Choose distinct giveaway Pokémon.');const endsAt=integer(payload.endsAt,time+DAY,time+30*DAY,'giveaway end time'),title=text(payload.title,100),winnerType=giveawayWinnerType(payload.winnerType??'single');if(!title)fail('Enter a giveaway title.');const row=entry(slot,{title,pokemon:uids.map(take),winnerType,endsAt,participants:[],status:'open',winners:[]});state.giveaways.push(row);result.giveaway=row;}
    else if(['joinGiveaway','leaveGiveaway','cancelGiveaway'].includes(type)){const row=state.giveaways.find(r=>r.id===payload.id&&r.status==='open');if(!row||row.endsAt<=time)fail('This giveaway has ended.');if(type==='cancelGiveaway'){if(row.owner!==slot)fail('Only the host can cancel a giveaway.');if(time>=row.createdAt+DAY)fail('Giveaways can only be cancelled within the first 24 hours.');row.status='cancelled';row.pokemon.forEach(p=>inbox(slot,p,'Cancelled giveaway'));}else{if(row.owner===slot)fail('The host cannot enter their own giveaway.');if(type==='joinGiveaway'){if(row.participants.includes(slot))fail('You already entered this giveaway.');row.participants.push(slot);}else row.participants=row.participants.filter(v=>v!==slot);}}
    else if(type==='settleGiveaways'){for(const row of state.giveaways.filter(r=>r.status==='open'&&r.endsAt<=time)){row.status='ended';const entrants=row.participants.filter(v=>bank.slots[v]);for(let i=entrants.length-1;i>0;i--){const j=Math.floor(this.rng()*(i+1));[entrants[i],entrants[j]]=[entrants[j],entrants[i]];}row.pokemon.forEach((p,i)=>{const winner=entrants.length?entrants[row.winnerType==='single'?0:i%entrants.length]:row.owner;inbox(winner,p,entrants.length?'Giveaway prize':'Unentered giveaway');let entry=row.winners.find(r=>r.owner===winner);if(!entry){entry={owner:winner,pokemonUids:[]};row.winners.push(entry);}entry.pokemonUids.push(p.uid);});}}
    else if(type==='transfer'){const target=integer(payload.target,2,3,'destination'),uids=list(payload.uids,'transferred Pokémon',5000);if(!uids.length||new Set(uids).size!==uids.length)fail('Choose distinct Pokémon to transfer.');const gender=transferGender(payload.gender);for(const uid of uids)state.transferVaults[target].push(entry(slot,{pokemon:take(uid),gender}));history(`Transferred ${uids.length} Pokémon to the local PTD ${target} destination archive.`);}
    else result=this.performCommerce(type,payload,{bank,state,slot,save,w,time,day,id,entry,inbox,history,charge,award});
   }
   bank.center=validateCenterState(bank.center,this.data);syncCenterDex(bank);assertCenterOwnership(bank);return result;
  });return result;
 }
 performCommerce(type,payload,c){
  const {bank,state,slot,save,w,time,day,id,inbox,history,charge,award}=c;
  const currency=value=>value==='icu'?'credits':value==='pokedollars'?'money':value;
  const pick=values=>{if(!values.length)fail('This reward pool is empty.');return values[Math.min(values.length-1,Math.floor(this.rng()*values.length))];};
  const moveId=name=>Object.values(this.data.moves).find(m=>m.name.toLowerCase().replace(/[^a-z0-9]/g,'')===String(name).toLowerCase().replace(/[^a-z0-9]/g,''))?.id;
  const create=(row)=>{
   let speciesId=row.speciesId;
   if(row.kind==='egg'||row.pool==='non-evolved'){
    const evolved=new Set(Object.values(this.data.species).flatMap(s=>s.evolutions.map(e=>e.to)));
    speciesId=pick(Object.values(this.data.species).filter(s=>s.id<=151&&!evolved.has(s.id)).map(s=>s.id));
   }
   const shiny=row.variant==='shadow'?2:row.variant==='shiny'?1:row.shinyChance&&this.rng()<row.shinyChance?1:0;
   const extras={uid:`center-${id()}`,shiny};
   if(row.moves){extras.moves=[...new Set(row.moves.map(moveId))];if(extras.moves.some(v=>!v))fail('The catalog contains an unsupported move.');if(shiny===2)extras.moves=[368,...extras.moves.filter(v=>v!==368)].slice(0,4);extras.selectedMove=extras.moves[0];}
   const p=makePokemon(this.data,speciesId,row.level??1,extras);
   if(shiny===2&&!p.moves.includes(368)){p.moves=[368,...p.moves].slice(0,4);p.selectedMove=368;}
   return p;
  };
  if(type==='adopt'||type==='buyReward'){
   const row=(type==='adopt'?this.catalog.adoption:this.catalog.corner).find(r=>r.id===payload.id);if(!row)fail('Choose a catalog Pokémon.');charge(currency(row.currency),row.cost);const p=create(row);inbox(slot,p,type==='adopt'?'Pokémon Adoption':'Game Corner reward');history(`Received ${this.data.species[p.speciesId].name} from ${type==='adopt'?'adoption':'Game Corner'}.`);return {ok:true,pokemon:p};
  }
  if(type==='dailyGift'){
   const tier=this.catalog.daily[payload.tier];if(!tier)fail('Choose a daily gift tier.');if(w.dailyDay>=day)fail('Today’s Daily Gift has already been opened.');
   if(tier.requirements.type==='badges'&&(save.badges??0)<tier.requirements.count)fail(`Earn ${tier.requirements.count} badges to open this gift.`);
   if(tier.requirements.type==='completed-level'&&!save.completed.includes(30))fail('Complete Route 17 to open the Rare Daily Gift.');
   charge('money',tier.cost);const total=tier.outcomes.reduce((n,r)=>n+r.weight,0);let roll=Math.floor(this.rng()*total),outcome=tier.outcomes.at(-1);for(const row of tier.outcomes){if(roll<row.weight){outcome=row;break;}roll-=row.weight;}award(currency(outcome.currency),outcome.amount);w.dailyDay=day;history(`Opened a ${tier.label} Daily Gift.`);return {ok:true,reward:{currency:currency(outcome.currency),amount:outcome.amount},tier:tier.id};
  }
  if(type==='convert'||type==='convertAll'){
   const bulk=type==='convertAll',form=bulk?'clean':payload.form,method=currency(payload.currency??'credits');
   if(!['shiny','shadow','clean'].includes(form))fail('Unknown conversion.');const p=bulk?null:save.pokemon.find(p=>p.uid===payload.uid);if(!bulk&&!p)fail('Choose a Pokémon in this profile.');
   if(form!=='clean'&&p.shiny!==0)fail('Only regular Pokémon can be converted.');
   if(form==='clean'&&!(bulk?save.pokemon.some(p=>hasTag(state,p)):hasTag(state,p)))fail('No Hacked tag needs removing.');
   const prices=form==='clean'?this.catalog.conversion.removeHackedTag[bulk?'profile':'single']:this.catalog.conversion[form].prices;
   const price=prices.find(r=>currency(r.currency)===method);if(!price)fail('That currency is not available for this conversion.');charge(method,price.amount);
   for(const pokemon of bulk?save.pokemon:[p]){delete state.tags[pokemon.uid];pokemon.myTag='n';if(form!=='clean'){pokemon.shiny=form==='shiny'?1:2;if(form==='shadow'){pokemon.moves=[368,...pokemon.moves.filter(v=>v!==368)].slice(0,4);pokemon.selectedMove=368;}recordOwned(save,pokemon);}}
   history(bulk?'Removed all Hacked tags.':`Completed ${form} conversion.`);return {ok:true,pokemon:p};
  }
  if(type==='spin'){
   const rules=this.catalog.slots,machine=integer(payload.machine,1,rules.machineCount,'slot machine');if(w.spinsDay!==day){if(w.spinsDay>day)fail('The daily clock has not advanced.');w.spinsDay=day;w.spins=0;}if(w.spins>=rules.maxSpinsPerDay)fail('You have used all 50 spins for today.');charge('casino',rules.spinCost);
   // The reference publishes prizes but not its reel distribution. Local reels
   // sample the seven visible symbols uniformly, using the same payout lines.
   const grid=Array.from({length:3},()=>Array.from({length:3},()=>pick(rules.payouts).symbol));
   const lines=[[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]],wins=[];
   for(const line of lines){const symbols=line.map(([y,x])=>grid[y][x]);if(symbols.every(v=>v===symbols[0])){const prize=rules.payouts.find(r=>r.symbol===symbols[0]);if(prize.amount)wins.push({line,symbol:prize.symbol,amount:prize.amount});}}
   const amount=wins.reduce((n,r)=>n+r.amount,0);award('casino',amount);w.spins++;history(`Slot machine ${machine}: ${amount} Casino Coins won.`);return {ok:true,machine,grid,wins,amount,remaining:rules.maxSpinsPerDay-w.spins};
  }
  if(type==='mysteryGift'){
   const kind=payload.kind;if(!['daily','weekly'].includes(kind))fail('Choose Daily or Weekly Mystery Gift.');const date=new Date(time),offset=(date.getUTCDay()+6)%7,week=nowDate(time-offset*DAY),key=kind==='daily'?'mysteryDaily':'mysteryWeekly',stamp=kind==='daily'?day:week;if(w[key]>=stamp)fail(`This ${kind} Mystery Gift was already claimed.`);
   const pool=Object.values(this.data.species).filter(s=>s.id<=151);const p=create({speciesId:pick(pool).id,level:1,variant:kind==='daily'?'shiny':'shadow'});inbox(slot,p,`${kind} Mystery Gift`);w[key]=stamp;return {ok:true,pokemon:p};
  }
  if(type==='giftCode'){
   const code=text(payload.code,60).toLowerCase(),codes={ptdooo:{speciesId:1010,variant:'regular'},ptdicu:{speciesId:1010,variant:'regular'},'ptd-local':{speciesId:25,variant:'regular'}};const row=codes[code];if(!row)fail('Unknown local gift code.');if(w.giftCodes.includes(code))fail('This gift code has already been claimed.');const p=create({...row,level:1});inbox(slot,p,'Mystery Gift code');w.giftCodes.push(code);return {ok:true,pokemon:p};
  }
  fail(`Unknown Center action: ${type}`);
 }
}
