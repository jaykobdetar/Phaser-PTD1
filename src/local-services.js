import {validateSave, loadSave, persist, SAVE_KEY} from './model.js';
import {tradePokemon, recordOwned} from './profile-features.js';
import {validateCenterState,assertCenterOwnership,syncCenterDex} from './center-model.js';
export const PROFILE_BANK_KEY='ptd-phaser-profiles-v1';
export const PROFILE_BACKUP_PREFIX='ptd-phaser-profiles-backup-';
const localQueues=new WeakMap();
let backupSerial=0;
const clone=value=>structuredClone(value);
export function validateBank(input,data,{validateCenter=validateCenterState,validateOwnership=validateCenter===validateCenterState?assertCenterOwnership:null,priorDex=null}={}) {
  if(input?.version!==1||!Array.isArray(input.slots)||input.slots.length!==3)throw new Error('Invalid local profile bank.');
  const bank={version:1,active:[0,1,2].includes(input.active)?input.active:0,updatedAt:String(input.updatedAt??''),slots:input.slots.map(s=>s?validateSave(s,data):null)};
  if(input.center!==undefined){
    if(!input.center||typeof input.center!=='object'||Array.isArray(input.center)||input.center.version!==1)throw new Error('Invalid PokéCenter data.');
    bank.center=validateCenter(input.center,data);
    if(validateCenter===validateCenterState)syncCenterDex(bank,priorDex);
    validateOwnership?.(bank);
  }
  return bank;
}
export class LocalProfiles {
  constructor(data,storage,request=globalThis.fetch?.bind(globalThis),options={}) {
    this.data=data;this.storage=storage;this.request=request;this.validateCenter=options.validateCenter??validateCenterState;this.validateOwnership=options.validateOwnership??(this.validateCenter===validateCenterState?assertCenterOwnership:null);
    this.onExternalChange=options.onExternalChange??(()=>{});this.onConflict=options.onConflict??(()=>{});
    this.locks=Object.hasOwn(options,'locks')?options.locks:globalThis.navigator?.locks;this.eventTarget=Object.hasOwn(options,'eventTarget')?options.eventTarget:globalThis.window;
    this.indexedDB=Object.hasOwn(options,'indexedDB')?options.indexedDB:globalThis.indexedDB;
    this.serverRevision=0;this.serverAvailable=false;this.pending=Promise.resolve();this.status='browser';
    this.storageBase=storage.getItem(PROFILE_BANK_KEY);this.generation=0;this.transactionCount=0;this.disposed=false;
    this.storageListener=event=>{
      if((event.key===PROFILE_BANK_KEY||event.key===null)&&(!event.storageArea||event.storageArea===this.storage)){
        // A background tab can receive an old event after refresh accepted a
        // newer bank. Compare the actual record, just as the write CAS does.
        const raw=this.storage.getItem(PROFILE_BANK_KEY);
        if(raw!==this.storageBase)this.externalChange(raw,'browser');
      }
    };
  }
  validate(input){return validateBank(input,this.data,{validateCenter:this.validateCenter,validateOwnership:this.validateOwnership,priorDex:this.committedBank?.center?.dex});}
  get current(){return this.bank.slots[this.bank.active];}
  get revision(){return this.serverAvailable?this.serverRevision:null;}
  error(message,code='PROFILE_SAVE_FAILED'){const error=new Error(message);error.code=code;return error;}
  notify(callback,detail){try{callback(detail);}catch{/* UI callbacks cannot change a committed transaction. */}}
  externalChange(raw,source='browser'){
    if(this.disposed||this.status==='conflict')return;
    let bank=null;try{if(raw)bank=this.validate(JSON.parse(raw));}catch{/* Report a conflict even when another writer stored invalid data. */}
    const error=this.error('The profiles changed in another window. Reload before saving.','PROFILE_CONFLICT');
    this.status='conflict';this.lastError=error;
    const detail={bank,source,revision:this.revision,error};
    this.notify(this.onExternalChange,detail);this.notify(this.onConflict,detail);
  }
  assertCurrent(){
    if(this.status==='conflict')throw this.lastError??this.error('The profiles changed in another window.','PROFILE_CONFLICT');
    const raw=this.storage.getItem(PROFILE_BANK_KEY);
    if(raw!==this.storageBase){this.externalChange(raw);throw this.lastError;}
  }
  assertWritable(){
    if(this.transactionCount||this.refreshing)throw this.error('A profile transaction is already in progress.','PROFILE_BUSY');
    this.assertCurrent();
  }
  backup(raw,reason,defer=false){
    if(!raw)return null;
    let key;do{key=PROFILE_BACKUP_PREFIX+Date.now().toString(36)+'-'+backupSerial++;}while(this.storage.getItem(key)!==null);
    try{this.storage.setItem(key,raw);}
    catch(error){if(defer){this.deferredBackups??=[];if(!this.deferredBackups.some(entry=>entry.raw===raw))this.deferredBackups.push({raw,reason});}throw error;}
    this.deferredBackups=this.deferredBackups?.filter(entry=>entry.raw!==raw);this.lastBackup={key,reason};return key;
  }
  preserveProfileDraft(bank){
    // An empty active slot does not replace the compatibility mirror. Its
    // existing contents remain preserved in place, so no copy is necessary.
    if(!bank.slots[bank.active])return;
    const raw=this.storage.getItem(SAVE_KEY);if(!raw)return;
    const comparable=profile=>{const value=clone(profile);if(value)delete value.savedAt;return JSON.stringify(value);};
    let differs=true;try{differs=comparable(validateSave(JSON.parse(raw),this.data))!==comparable(bank.slots[bank.active]);}catch{/* Preserve malformed drafts rather than overwriting them. */}
    if(differs)this.backup(raw,'reload-replaced-profile-draft',true);
  }
  lock(operation){
    if(this.locks?.request)return this.locks.request(PROFILE_BANK_KEY,{mode:'exclusive'},operation);
    if(this.indexedDB)return this.indexedLock(operation);
    // This fallback serializes clients sharing one storage object in this realm.
    // The disk revision still protects independent browsers without Web Locks.
    const previous=localQueues.get(this.storage)??Promise.resolve(),next=previous.then(operation,operation);
    localQueues.set(this.storage,next.catch(()=>{}));return next;
  }
  async indexedLock(operation){
    // A read/write IndexedDB transaction owns this store across tabs. The store
    // contains no profiles: its transaction is only an origin-wide mutex for
    // the single atomic localStorage bank record when Web Locks is unavailable.
    this.mutexDatabase??=new Promise((resolve,reject)=>{
      const request=this.indexedDB.open('ptd-profile-write-lock',1);
      request.onupgradeneeded=()=>request.result.createObjectStore('mutex');
      request.onsuccess=()=>{const db=request.result;db.onversionchange=()=>db.close();resolve(db);};
      request.onerror=()=>reject(request.error);
    });
    const database=await this.mutexDatabase;
    return new Promise((resolve,reject)=>{
      const transaction=database.transaction('mutex','readwrite'),store=transaction.objectStore('mutex');
      let started=false,finished=false,result,failure;
      const keepAlive=()=>{
        const request=store.get(PROFILE_BANK_KEY);
        request.onsuccess=()=>{
          if(!started){started=true;Promise.resolve().then(operation).then(value=>{result=value;finished=true;},error=>{failure=error;finished=true;});}
          if(!finished)keepAlive();
        };
      };
      transaction.oncomplete=()=>failure?reject(failure):finished?resolve(result):reject(this.error('The browser save lock closed before completion.'));
      transaction.onabort=()=>{
        // If the operation has already committed its bank, a mutex cleanup
        // failure cannot truthfully be reported as a rolled-back transaction.
        if(finished&&!failure)resolve(result);else reject(failure??transaction.error??this.error('The browser save lock was interrupted.'));
      };
      keepAlive();
    });
  }
  enqueue(operation){
    const result=this.pending.then(()=>this.lock(operation));
    this.pending=result.catch(error=>{this.lastError=error;});return result;
  }
  async remote(){
    let response;
    try{response=await this.request?.('api/profiles',{signal:AbortSignal.timeout(2000),cache:'no-store'});}catch{return null;}
    if(!response?.ok||!response.headers.get('content-type')?.includes('application/json'))return null;
    const payload=await response.json();
    if(!Number.isSafeInteger(payload.revision)||payload.revision<0)throw this.error('Invalid disk save revision.');
    return {revision:payload.revision,bank:payload.bank===null?null:this.validate(payload.bank)};
  }
  flushDeferredBackups(){
    // A disk save may have succeeded while a displaced browser record could
    // not be backed up. Preserve it before cache recovery replaces that record.
    while(this.deferredBackups?.length){const {raw,reason}=this.deferredBackups[0];this.backup(raw,reason);}
  }
  stageProfileDraft(profile){
    this.assertWritable();
    // Keep the final browser draft synchronous for beforeunload, but never
    // replace a displaced mirror whose durable backup is still pending.
    try{this.flushDeferredBackups();persist(profile,this.storage);return true;}
    catch(error){this.cacheError=error;return false;}
  }
  publish(bank,json){
    this.flushDeferredBackups();
    this.storage.setItem(PROFILE_BANK_KEY,json);this.storageBase=json;this.committedBank=clone(bank);
    // The bank is the single authoritative browser record. The legacy single-
    // profile key is a compatibility mirror, not another transaction boundary.
    try{if(bank.slots[bank.active])this.storage.setItem(SAVE_KEY,JSON.stringify(bank.slots[bank.active]));}catch(error){this.cacheError=error;}
  }
  async initialize() {
    await this.lock(async()=>{
      const raw=this.storage.getItem(PROFILE_BANK_KEY),remote=await this.remote();
      let browser=null,browserError=null,mirror=true;
      try{if(raw)browser=this.validate(JSON.parse(raw));else{const old=loadSave(this.data,this.storage);browser={version:1,active:0,slots:[old,null,null],updatedAt:old?.savedAt??''};}}catch(error){browserError=error;}
      if(remote?.bank){
        const json=JSON.stringify(remote.bank);
        if(raw&&(!browser||JSON.stringify(browser)!==json)){
          try{this.backup(raw,'disk-replaced-browser',true);}catch(error){this.cacheError=error;mirror=false;}
        }
        this.bank=remote.bank;
      }else{
        if(browserError)throw browserError;
        this.bank=browser;
      }
      this.serverAvailable=Boolean(remote);this.serverRevision=remote?.revision??0;this.status=remote?.bank?'disk':'browser';
      try{
        this.preserveProfileDraft(this.bank);if(mirror)this.publish(this.bank,JSON.stringify(this.bank));
      }catch(error){if(!remote?.bank)throw error;this.cacheError=error;mirror=false;}
      // A full/disabled cache cannot prevent loading a valid authoritative disk
      // save. Leave its displaced browser records intact if backup was blocked.
      if(!mirror){this.storageBase=this.storage.getItem(PROFILE_BANK_KEY);this.committedBank=clone(this.bank);}
    });
    this.eventTarget?.addEventListener?.('storage',this.storageListener);
    return this.current;
  }
  async refresh(){
    this.refreshing=true;
    try{
      await this.pending;
      return await this.lock(async()=>{
        const remote=await this.remote();
        if(this.serverAvailable&&!remote)throw this.error('The disk server could not be reached. Existing profiles were retained.');
        const raw=this.storage.getItem(PROFILE_BANK_KEY),bank=remote?.bank??(raw?this.validate(JSON.parse(raw)):null);
        if(!bank)throw this.error('No saved profiles are available.');
        const json=JSON.stringify(bank),draft=this.bank&&JSON.stringify(this.bank);
        let mirror=true;
        if(draft&&draft!==json){
          try{this.backup(draft,'reload-replaced-draft',draft===raw);}
          catch(error){
            // A draft already present in the browser record is retained there.
            // Do not discard an in-memory-only draft if no backup can be made.
            if(!remote?.bank||draft!==raw)throw error;
            this.cacheError=error;mirror=false;
          }
        }
        try{this.preserveProfileDraft(bank);if(mirror)this.publish(bank,json);}
        catch(error){if(!remote?.bank)throw error;this.cacheError=error;mirror=false;}
        if(!mirror){this.storageBase=this.storage.getItem(PROFILE_BANK_KEY);this.committedBank=clone(bank);}
        this.bank=bank;this.serverAvailable=Boolean(remote);this.serverRevision=remote?.revision??0;this.status=remote?.bank?'disk':'browser';this.lastError=null;
        return this.current;
      });
    }finally{this.refreshing=false;}
  }
  async commit(bank){
    this.assertCurrent();
    if(globalThis.window&&!this.serverAvailable&&!this.locks?.request&&!this.indexedDB)throw this.error('This browser cannot coordinate local saves. Start the Python launcher or enable browser storage.','PROFILE_LOCK_UNAVAILABLE');
    const json=JSON.stringify(bank);
    if(this.serverAvailable){
      let response;
      try{response=await this.request('api/profiles',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision:this.serverRevision,bank}),signal:AbortSignal.timeout(10000)});}
      catch{this.status='browser';throw this.error('The local disk server could not save the profiles.');}
      if(response.status===409){this.externalChange(null,'disk');throw this.lastError;}
      if(!response.ok){this.status='browser';throw this.error('The local disk server could not save the profiles.');}
      const result=await response.json();
      if(!Number.isSafeInteger(result.revision)||result.revision<0)throw this.error('Invalid disk save acknowledgment.');
      this.serverRevision=result.revision;this.status='disk';
      // Once the disk has committed, a failed cache mirror must not turn the
      // successful transaction into a retry that applies its mutation twice.
      try{this.publish(bank,json);}catch(error){this.cacheError=error;this.committedBank=clone(bank);}
    }else{this.publish(bank,json);this.status='browser';}
    this.lastError=null;
    return this.revision;
  }
  write() {
    this.assertWritable();
    // Legacy whole-bank imports have no Center field. They cannot silently
    // discard its escrow/history; explicit Center transactions own that state.
    const candidate=this.bank.center===undefined&&this.committedBank?.center!==undefined?{...this.bank,center:this.committedBank.center}:this.bank;
    const bank=this.validate(candidate);bank.updatedAt=new Date().toISOString();
    this.bank=clone(bank);const generation=++this.generation;
    this.enqueue(async()=>{
      try{await this.commit(bank);if(generation===this.generation)this.bank=bank;}
      catch(error){if(error.code!=='PROFILE_CONFLICT'){try{this.backup(JSON.stringify(bank),'uncommitted-save');}catch{/* Retain the in-memory draft if storage is full. */}}throw error;}
    });
    return this.pending;
  }
  save(profile){this.assertWritable();this.bank.slots[this.bank.active]=validateSave(profile,this.data);return this.write();}
  select(slot){this.assertWritable();if(![0,1,2].includes(slot))throw new Error('Invalid profile slot.');this.bank.active=slot;this.write();return this.current;}
  create(slot,profile){this.assertWritable();if(![0,1,2].includes(slot))throw new Error('Invalid profile slot.');if(this.bank.slots[slot])throw new Error('That profile slot is occupied.');this.bank.active=slot;this.bank.slots[slot]=validateSave(profile,this.data);this.write();return this.current;}
  transact(mutator){
    if(typeof mutator!=='function')return Promise.reject(new TypeError('A transaction needs a mutation function.'));
    this.transactionCount++;
    const transaction=this.enqueue(async()=>{
      this.assertCurrent();const draft=clone(this.bank),result=mutator(draft);
      if(result?.then){Promise.resolve(result).catch(()=>{});throw this.error('Profile transaction mutators must be synchronous.','PROFILE_MUTATION_REJECTED');}
      if(result?.ok===false){const error=this.error(result.reason??'The transaction was rejected.','PROFILE_MUTATION_REJECTED');error.result=result;throw error;}
      const bank=this.validate(draft);bank.updatedAt=new Date().toISOString();
      const revision=await this.commit(bank);this.bank=bank;this.generation++;return {result,bank:clone(bank),revision};
    });
    return transaction.finally(()=>{this.transactionCount--;});
  }
  trade(slot,uid,otherUid) {
    this.assertWritable();
    if(slot===this.bank.active||!this.bank.slots[slot])return {ok:false,reason:'Choose another occupied profile.'};
    const bank=structuredClone(this.bank),result=tradePokemon(this.data,bank.slots[bank.active],uid,bank.slots[slot],otherUid);
    if(!result.ok)return result;
    this.bank=this.validate(bank);this.write();return result;
  }
  dispose(){this.disposed=true;this.eventTarget?.removeEventListener?.('storage',this.storageListener);}
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
