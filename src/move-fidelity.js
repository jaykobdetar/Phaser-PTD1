import {SOURCE_MOVE_CLASSES,SOURCE_MANIFEST} from './move-source-generated.js';

/** Supported IDs resolve to their recovered source classes, including dependent
 * effects and timed display-list state machines. Missing metadata fails loudly;
 * no generic damage fallback is used for an absent native runtime.
 */
export const NATIVE_MOVE_IDS=new Set(Object.keys(SOURCE_MOVE_CLASSES).map(Number));
export const DAMAGE_ONLY_FALLBACK_MOVE_IDS=new Set();

export function nativeMoveFidelity(move){
  const id=Number(move?.id),sourceClass=SOURCE_MOVE_CLASSES[id];
  if(!sourceClass)return{supported:false,mode:'unavailable',approximation:false};
  return{supported:true,mode:'native-source',approximation:false,sourceClass,
    source:SOURCE_MANIFEST.moves[id].source,requiresOriginalRuntime:true,
    scope:'Recovered ActionScript attack/effect logic with original timeline frames, class identities, integer arithmetic, abilities and targeting.'};
}
