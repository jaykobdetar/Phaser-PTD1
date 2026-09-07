export const ORIGINAL_OPTIONS_KEY='ptd-phaser-options-v1';
const keys=['music','sound','damageText'];
/** class_1 defaults all three switches on; main.method_377 restores their
 * device-wide SharedObject values independently of account/profile selection. */
export function readOriginalOptions(storage,legacy=null){
 let saved=null;try{saved=JSON.parse(storage?.getItem(ORIGINAL_OPTIONS_KEY)??'null');}catch{/* A malformed settings entry must not block loading profiles. */}
 const fallback=legacy??{};return Object.fromEntries(keys.map(key=>[key,typeof saved?.[key]==='boolean'?saved[key]:typeof fallback[key]==='boolean'?fallback[key]:true]));
}
export function writeOriginalOptions(storage,options){const value=Object.fromEntries(keys.map(key=>[key,options[key]!==false]));storage?.setItem(ORIGINAL_OPTIONS_KEY,JSON.stringify(value));return value;}
export function installOriginalOptions(app){
 let globalOptions=null;
 app.applyOriginalSettings=(save=app.save)=>{
  if(!save)return null;
  globalOptions??=readOriginalOptions(app.profiles?.storage??globalThis.localStorage,app.hasProfile?app.save?.settings:null);
  // Challenge and multiplayer fights own temporary save objects, but the source
  // switches live in class_1 and affect those battles immediately as well.
  for(const target of new Set([save,app.save,app.battle?.save].filter(Boolean))){target.settings??={};Object.assign(target.settings,globalOptions);}
  return save.settings;
 };
 app.persistOriginalSettings=(key,value)=>{
  app.applyOriginalSettings();if(!keys.includes(key))throw new Error('Unknown source setting '+key);
  globalOptions[key]=Boolean(value);writeOriginalOptions(app.profiles?.storage??globalThis.localStorage,globalOptions);app.applyOriginalSettings();app.store?.();return app.save.settings;
 };
}
