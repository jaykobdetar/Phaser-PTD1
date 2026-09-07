import {validateSave, loadSave, persist} from './model.js';
import {tradePokemon, recordOwned} from './profile-features.js';
export const PROFILE_BANK_KEY='ptd-phaser-profiles-v1';
export function validateBank(input,data) {
  if(input?.version!==1||!Array.isArray(input.slots)||input.slots.length!==3)throw new Error('Invalid local profile bank.');
  return {version:1,active:[0,1,2].includes(input.active)?input.active:0,updatedAt:String(input.updatedAt??''),slots:input.slots.map(s=>s?validateSave(s,data):null)};
}
export class LocalProfiles {
  constructor(data,storage,request=globalThis.fetch?.bind(globalThis)) {this.data=data;this.storage=storage;this.request=request;this.serverRevision=0;this.serverAvailable=false;this.pending=Promise.resolve();this.status='browser';}
  async initialize() {
    const raw=this.storage.getItem(PROFILE_BANK_KEY);
    if(raw)this.bank=validateBank(JSON.parse(raw),this.data);
    else {const old=loadSave(this.data,this.storage);this.bank={version:1,active:0,slots:[old,null,null],updatedAt:old?.savedAt??''};}
    try {
      const response=await this.request?.('api/profiles',{signal:AbortSignal.timeout(2000)});
      if(response?.ok&&response.headers.get('content-type')?.includes('application/json')) {
        const payload=await response.json();this.serverRevision=payload.revision;this.serverAvailable=true;
        if(payload.bank&&!this.bank.slots.some(Boolean))this.bank=validateBank(payload.bank,this.data);
        // Existing browser saves are retained; the disk bank has its own previous-file backup.
      }
    }catch{/* Opening the static build still supports every offline feature. */}
    this.storage.setItem(PROFILE_BANK_KEY,JSON.stringify(this.bank));
    return this.current;
  }
  get current(){return this.bank.slots[this.bank.active];}
  write() {
    this.bank.updatedAt=new Date().toISOString();
    const json=JSON.stringify(this.bank);this.storage.setItem(PROFILE_BANK_KEY,json);
    if(this.current)persist(this.current,this.storage);
    if(this.serverAvailable){this.pending=this.pending.then(async()=>{
      try {const response=await this.request('api/profiles',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision:this.serverRevision,bank:JSON.parse(json)})});
        if(response.status===409){this.status='conflict';this.serverAvailable=false;return;}
        if(!response.ok)throw new Error('Disk save failed');
        this.serverRevision=(await response.json()).revision;this.status='disk';
      }catch{this.status='browser';}
    });}
  }
  save(profile){this.bank.slots[this.bank.active]=validateSave(profile,this.data);this.write();}
  select(slot){if(![0,1,2].includes(slot))throw new Error('Invalid profile slot.');this.bank.active=slot;this.write();return this.current;}
  create(slot,profile){if(this.bank.slots[slot])throw new Error('That profile slot is occupied.');this.bank.active=slot;this.bank.slots[slot]=validateSave(profile,this.data);this.write();return this.current;}
  trade(slot,uid,otherUid) {
    if(slot===this.bank.active||!this.bank.slots[slot])return {ok:false,reason:'Choose another occupied profile.'};
    const bank=structuredClone(this.bank),result=tradePokemon(this.data,bank.slots[bank.active],uid,bank.slots[slot],otherUid);
    if(!result.ok)return result;
    // Persist both sides in one bank write, with no interval containing half a trade.
    const verified=validateBank(bank,this.data);this.storage.setItem(PROFILE_BANK_KEY,JSON.stringify(verified));this.bank=verified;this.write();return result;
  }
}

// The supplied archive has no mystery-gift service. These explicit offline codes
// are a local replacement; gifts are marked claimed within the selected profile.
export const LOCAL_GIFTS=Object.freeze([
  {code:'PTD-LOCAL',label:'Welcome gift',speciesId:25,level:5,shiny:0},
  {code:'SHINY-GEODUDE',label:'Challenge 1 gift',speciesId:74,level:1,shiny:1,challenge:1,moves:[1,25]},
  {code:'SHINY-MAGNEMITE',label:'Challenge 6 gift',speciesId:81,level:1,shiny:1,challenge:6,moves:[1]},
]);
export function redeemGift(data,save,code,makePokemon) {
  const gift=LOCAL_GIFTS.find(g=>g.code===String(code).trim().toUpperCase());
  if(!gift)return {ok:false,reason:'Unknown offline gift code.'};
  if((save.challengeCompleted??0)<(gift.challenge??0))return {ok:false,reason:`Complete Challenge ${gift.challenge} first.`};
  const claim=gift.challenge?`challenge-${gift.challenge}`:gift.code;
  if(save.giftsClaimed?.includes(claim))return {ok:false,reason:'This profile has already received that gift.'};
  const p=makePokemon(data,gift.speciesId,gift.level,{shiny:gift.shiny,...(gift.moves?{moves:[...gift.moves],selectedMove:gift.moves[0]}:{})});
  save.pokemon.push(p);recordOwned(save,p);save.giftsClaimed??=[];save.giftsClaimed.push(claim);return {ok:true,pokemon:p};
}
