import {sourceDefinitions,SOURCE_MOVE_CLASSES,SOURCE_SYMBOLS,SOURCE_MANIFEST,SOURCE_PROFILE_DEFAULTS} from './move-source-generated.js';
import {createMoveDisplay} from './move-native-display.js';
import {normalizePartySlots,removePartyMember} from './party-slots.js';

export {SOURCE_MOVE_CLASSES,SOURCE_MANIFEST};
const statusClass={class_200:'poison',class_201:'burn',class_202:'paralysis',class_203:'confusion',class_791:'sleep',class_793:'flinch',class_796:'freeze'};
const modifierClass={class_802:['attack-down','attack'],class_805:['attack-up','attack'],class_807:['defense-down','defense'],class_808:['defense-up','defense'],class_800:['special-attack-down','specialAttack'],class_801:['special-attack-up','specialAttack'],class_810:['special-defense-down','specialDefense'],class_803:['special-defense-up','specialDefense'],class_809:['speed-down','speed'],class_806:['speed-up','speed'],class_852:['speed-up','speed'],class_804:['accuracy-down','accuracy'],class_798:['accuracy-up','accuracy'],class_792:['evasion-down','evasion'],class_795:['evasion-up','evasion'],class_828:['critical-up','criticalChance'],class_829:['critical-down','criticalChance']};
const statMap={base_HP:'hp',base_Attack:'attack',base_Defense:'defense',base_Special_Attack:'specialAttack',base_Special_Defense:'specialDefense'};
const modMap={mod_Attack:'attack',mod_Defense:'defense',mod_Special_Attack:'specialAttack',mod_Special_Defense:'specialDefense',mod_Speed:'speed',mod_Accuracy:'accuracy',mod_Evasion:'evasion'};
const int=value=>Number(value)|0;
const uint=value=>Number(value)>>>0;

/** Native execution of the supplied game's move/effect classes.
 * battle owns movement, persistent collection, wave scheduling and victory.
 * This adapter owns original attack instances, effects, abilities and move AI.
 * Pass recovered story-timelines.json as options.timelines.
 */
export function createMoveRuntime(battle,options={}) {
  const data=battle.data,rng=battle.rng??Math.random,actors=new Map(),detachedActors=new WeakMap(),events=[],candyClips=new Map(),spotClips=new Map(),potionClips=new Map();let disposed=false;
  // Diagnostics keep only a recent window, so old damage records cannot retain
  // every retired fighter and its detached display tree for an entire battle.
  // Zero disables storage; callbacks and the lifetime count are unaffected.
  const diagnosticEventLimit=options.diagnosticEventLimit??256;
  if(!Number.isInteger(diagnosticEventLimit)||diagnosticEventLimit<0||diagnosticEventLimit>65536)throw new RangeError('diagnosticEventLimit must be an integer from 0 to 65536.');
  let diagnosticEventCount=0;
  const recordDiagnostic=event=>{diagnosticEventCount++;if(!diagnosticEventLimit)return;events.push(event);if(events.length>diagnosticEventLimit)events.splice(0,events.length-diagnosticEventLimit);};
  const emit=(...args)=>{if(!disposed)battle.emit?.(...args);};
  const display=createMoveDisplay(options.timelines??data.timelines,{onSound:name=>emit('native-sound',{name})});
  const world=new display.Sprite(),pathEffects=[];let currentSource=null,currentMove=null,tick=0;
  const C={Sprite:display.Sprite},S={},E={int,uint,Number,String,Boolean,Array,Object,NaN,Infinity,undefined,Math:Object.assign(Object.create(Math),{random:rng}),superBase(){},as(value,Type){return value==null?null:value instanceof Type?value:null;},trace(...args){recordDiagnostic({kind:'trace',args});},sortOn(array,key,flags){return array.sort((a,b)=>((flags&16)?Number(a[key])-Number(b[key]):String(a[key]).localeCompare(String(b[key])))*((flags&2)?-1:1));},class_1:{get var_359(){return battle.save?.settings?.damageText===false?0:1;},var_194:1}};
  E.Point=function(x=0,y=0){this.x=x;this.y=y;};
  E.Color=function(){this.setTint=(color,amount)=>{this.color=color;this.amount=amount;};};
  E.GlowFilter=function(color=16711680,alpha=1,blurX=6,blurY=6,strength=2,quality=1,inner=false,knockout=false){Object.assign(this,{kind:'glow',color,alpha,blurX,blurY,strength,quality,inner,knockout});};
  E.finder_Exp={get_Exp_To_Level:level=>int(Math.pow(int(level),3))};
  E.SoundTransform=function(volume){this.volume=volume;};E.TextFormat=function(){this.size=0;};
  E.sound_manager=function(id){const name=id===0?'lower_Stat_Sound':id===1?'increase_Stat_Sound':null;if(name)emit('native-sound',{name,volume:.5});};
  for(const symbol of SOURCE_SYMBOLS)S[symbol]=display.symbol(symbol);
  const defs=sourceDefinitions(C,E,S);
  function allocate(object,name){
    const chain=[];for(let d=defs[name];d;d=defs[d.parent])chain.unshift(d);
    for(const d of chain)for(const f of d.fields)if(!f.static&&!Object.hasOwn(object,f.name)){
      let value=f.init.call(object);const cast=f.type==='int'?int:f.type==='uint'?uint:null;
      if(cast){value=cast(value);Object.defineProperty(object,f.name,{configurable:true,enumerable:true,get:()=>value,set:v=>{value=cast(v);}});}else object[f.name]=value;
    }
  }
  function makeClass(name){
    if(C[name])return C[name];const def=defs[name];if(!def)throw new Error(`Unknown behavior superclass ${name}`);
    const Parent=def.parent?makeClass(def.parent):null;
    const Klass=function(...args){if(!new.target){if(args[0]==null)return null;if(!(args[0] instanceof Klass))throw new TypeError(`Original cast to ${name} failed`);return args[0];}allocate(this,name);def.construct.apply(this,args);};
    Object.defineProperty(Klass,'name',{value:name});Klass.sourceClass=name;Klass.__construct=function(...args){options.onInvoke?.(name,name);return def.construct.apply(this,args);};Klass.__allocate=object=>allocate(object,name);
    Klass.prototype=Object.create(Parent?.prototype??Object.prototype);Klass.prototype.constructor=Klass;
    Object.defineProperty(Klass.prototype,'sourceClass',{value:name});C[name]=Klass;
    for(const method of def.methods)(method.static?Klass:Klass.prototype)[method.name]=function(...args){options.onInvoke?.(name,method.name);return method.run.apply(this,args);};
    return Klass;
  }
  for(const name of Object.keys(defs))makeClass(name);
  for(const [name,def]of Object.entries(defs))for(const f of def.fields)if(f.static)C[name][f.name]=f.init.call(C[name]);
  const Tower=C.poke_Tower;
  const Level=function(value){return value;};Level.prototype=display.Sprite.prototype;E.screen_Level=Level;
  const nativeLevel=world;
  const liveFighters=()=>[...(battle.towers??[]),...(battle.enemies??[])].filter(f=>f.alive&& (f.team!=='tower'||f.placed));
  const nativeList=list=>list.filter(f=>f.alive&&(f.team!=='tower'||f.placed)).map(actor);
  Object.defineProperties(nativeLevel,{enemyList:{get:()=>nativeList(battle.enemies??[])},towerList:{get:()=>nativeList((battle.towers??[]).filter(f=>battle.level.mode==='invasion'||!f.npc))},npcTowerList:{get:()=>nativeList((battle.towers??[]).filter(f=>battle.level.mode!=='invasion'&&f.npc))},candyList:{get:()=> (battle.candies??[]).map(c=>({get var_265(){return c.state==='lost';},get x(){return c.x;},get y(){return c.y;},source:c}))},spotList:{get:()=> (battle.level.spots??[]).map(spot)}});
  Object.assign(nativeLevel,{
    get_Friendly_List(){return this.towerList;},get_Total_Candy(){return battle.level.candyCount??battle.candies?.length??0;},
    check_Path_Effects(Type){return pathEffects.find(e=>e instanceof Type)??null;},
    add_path_effect(effect){if(effect){if(['class_854','class_855','class_856','class_857'].some(name=>effect instanceof C[name]))for(const old of [...pathEffects])if(['class_854','class_855','class_856','class_857'].some(name=>old instanceof C[name]))old.remove_Me();pathEffects.push(effect);world.addChild(effect);effect._attacker=currentSource;effect._move=currentMove;}},
    remove_path_effect(effect){const index=pathEffects.indexOf(effect);if(index>=0)pathEffects.splice(index,1);world.removeChild(effect);},
    return_Poke(a){if(!disposed)battle.recall?.(a.fighter.uid);},isFainted(a){return !a.fighter.alive;},
    reset_Poke(){emit('refresh',{});},
    send_Msg(message){return messageAdapter(null,message);},
  });
  const nativeParty=normalizePartySlots(battle.save?.party).map(uid=>uid===null?null:({id:uid,uid}));
  E.main={playerProfile:{partyList:new Proxy(nativeParty,{set(list,key,value){const previous=list[key];list[key]=value;if(!disposed&&value===null&&previous?.fighter){const f=previous.fighter;f.nativeRemovedFromParty=true;if(options.onPartyRemoval)options.onPartyRemoval(f);else if(battle.removePartyMember)battle.removePartyMember(f);else if(battle.save?.party)removePartyMember(battle.save,f.uid);emit('party-change',{fighter:f,native:true});}return true;}})}};
  E.finder_Attacks={get_Attack(id,a){const name=SOURCE_MOVE_CLASSES[id];if(!name)throw new Error(`Unknown original move ${id}`);return new C[name](a);}};
  E.finder_Graphic={get_Graphic_By_Num(profile){const id=profile.transformed?profile.tnum:profile.num,shiny=profile.transformed?profile.tshiny:profile.shiny;let name=`poke_${shiny===2?'ss_':shiny?'s_':''}${String(id).padStart(3,'0')}`;if(id===493){const m=E.finder_Attacks.get_Attack(profile['move'+profile.moveSelected],null),type=m.get_Move_Type();if(type!==5&&C.poke.arceusTypes[type])name+='_'+C.poke.arceusTypes[type];}return new display.MovieClip(name);}};
  E.finder_Poke_Info={get_Poke_Info(profile,transformed=false){const species=data.species[transformed?profile.tnum:profile.num];if(!species)throw new Error(`Unknown original species ${profile.num}`);for(const [old,key]of Object.entries(statMap))profile[old]=species.stats[key];profile.types=[...species.typeIds];profile.speed=species.stats.speed;profile.name=species.name;profile.reward=species.reward;profile.base_Experience=species.baseExperience;return profile;},calculate_HP:p=>int(2*p.base_HP*p.level/100)+10+p.level};
  function property(object,key,get,set){Object.defineProperty(object,key,{get,set,enumerable:true,configurable:true});}
  function profileFor(f){
    const p={...SOURCE_PROFILE_DEFAULTS,...(f.original??{}),fighter:f,numMoves:f.original?.numMoves??f.moves?.length??0,currentLife:f.hp,id:!f.npc&&(f.team==='tower'||f.playerControlled)?(f.partyUid??f.profile?.uid??f.uid):-1};
    property(p,'num',()=>f.speciesId,v=>{f.speciesId=int(v);});property(p,'shiny',()=>f.shiny??0,v=>{f.shiny=int(v);});property(p,'level',()=>f.level,v=>{f.level=int(v);});
    property(p,'experience',()=>f.profile?.experience??f.experience??0,v=>{if(f.profile)f.profile.experience=int(v);else f.experience=int(v);});
    property(p,'name',()=>f.nativeName??data.species[f.speciesId].name,v=>{f.nativeName=v;});
    for(const [old,key]of Object.entries(statMap))property(p,old,()=>f.stats?.[key]??data.species[f.speciesId].stats[key],v=>{(f.stats??={})[key]=int(v);});
    property(p,'speed',()=>f.nativeBaseSpeed??f.stats?.speed??f.original?.speed??data.species[f.speciesId].stats.speed,v=>{f.nativeBaseSpeed=int(v);f.speed=int(v)/10;});
    for(const [old,key]of Object.entries(modMap))property(p,old,()=>f.modifiers[key]??1,v=>{f.modifiers[key]=Number(v);});
    const baseCritical=f.criticalChance??f.original?.crit_Chance??6;property(p,'crit_Chance',()=>baseCritical*(f.modifiers.criticalChance??1),v=>{f.modifiers.criticalChance=baseCritical?Number(v)/baseCritical:1;});
    property(p,'types',()=>f.typeIds??data.species[f.speciesId].typeIds,v=>{f.typeIds=[...v];});
    property(p,'targetType',()=>({first:1,last:1,fastest:2,slowest:3,weakest:4,strongest:5,effective:6,healthy:7,candy:8,'no-candy':9}[f.target]??f.targetType??f.original?.targetType??1),v=>{f.targetType=int(v);});
    property(p,'reward',()=>f.nativeReward??f.original?.reward??data.species[f.speciesId].reward,v=>{f.nativeReward=int(v);if(f.original)f.original.reward=int(v);});
    property(p,'canCapture',()=>f.canCapture??f.original?.canCapture??SOURCE_PROFILE_DEFAULTS.canCapture,v=>{f.canCapture=!!v;});
    for(const key of ['dropCandy','freeRoam','runAway','exploded'])property(p,key,()=>f[key]??f.original?.[key]??SOURCE_PROFILE_DEFAULTS[key],v=>{f[key]=!!v;if(f.original)f.original[key]=!!v;if(key==='dropCandy'&&v&&f.candy)actors.get(f)?.method_91();});
    property(p,'moveSelected',()=>Math.max(1,(f.moves??[]).indexOf(f.selectedMove)+1),v=>{f.selectedMove=f.moves?.[int(v)-1]??f.selectedMove;});
    for(let i=1;i<=4;i++)property(p,'move'+i,()=>f.moves?.[i-1]??0,v=>{f.moves??=[];f.moves[i-1]=int(v);});
    p.is_Type=id=>p.types.includes(id);p.remove_From_Party=()=>{battle.recall?.(f.uid);};
    return p;
  }
  const spotCache=new Map();
  function spot(s){if(!s)return null;if(spotCache.has(s))return spotCache.get(s);const p=new display.Sprite();p.x=s.x;p.y=s.y;p.name=s.name??`spot_${s.index}`;p.gfx={x:s.x,y:s.y,name:p.name};property(p,'full',()=>p._reserved===true||battle.towers.some(f=>f.spotIndex===s.index&&f.placed),v=>{p._reserved=!!v;});property(p,'myPoke',()=>{const f=battle.towers.find(f=>f.spotIndex===s.index&&f.placed);return f?actor(f):null;},v=>{if(v){v.fighter.spotIndex=s.index;v.fighter.placed=true;v.x=s.x;v.y=s.y;}});p.source=s;spotCache.set(s,p);return p;}
  function messageAdapter(a,message){
    if(disposed)return null;
    const args=Array.isArray(message)?message:[message],name=args[0];
    if(name==='sponsor')return '';if(name==='expIncrease')return 1;
    if(name==='get_Candy_List')return nativeLevel.candyList;
    if(name==='add_path_effect'){nativeLevel.add_path_effect(args[1]);return true;}
    const result=options.onMessage?.(a?.fighter,name,args.slice(1));if(result!==undefined)return result;
    throw new Error(`Original move message needs an engine adapter: ${name}`);
  }
  function actor(f){
    if(disposed)throw new Error('Move runtime has been disposed.');
    if(!f)return null;if(f.fighter)return f;if(actors.has(f))return actors.get(f);
    // Source effects may recall/faint an actor midway through a battle tick.
    // Remaining callbacks still refer to that same offstage instance. Looking
    // it up must not create another sprite; redeployment uses a new fighter.
    if(detachedActors.has(f))return detachedActors.get(f);
    const a=Object.create(f.team==='tower'?Tower.prototype:C.poke.prototype);(f.team==='tower'?Tower:C.poke).__allocate(a);display.Sprite.call(a);a.fighter=f;actors.set(f,a);world.addChild(a);f.modifiers??={};f.effects??={};f.typeIds??=[...data.species[f.speciesId].typeIds];
    for(const [key,field,cast]of [['x','x',Number],['y','y',Number],['life','hp',int],['totalLife','maxHp',int],['alive','alive',Boolean],['currentCoolDown','cooldown',int],['dir','direction',String],['turnedAround','turnedAround',Boolean],['disabled','disabled',Boolean]])property(a,key,()=>f[field]??(cast===Boolean?false:cast===String?'front':0),v=>{f[field]=cast(v);});
    property(a,'currentPoint',()=>f.point??0,v=>{f.point=int(v);});property(a,'walkList',()=>f.path??[],v=>{f.path=v;});
    property(a,'myCandy',()=>f.candy?{source:f.candy,get x(){return f.candy?.x;},get y(){return f.candy?.y;},method_26(){battle.dropCandy?.(f);}}:null,v=>{f.candy=v?.source??null;});
    property(a,'currentSpot',()=>spot(battle.level.spots?.find(s=>s.index===f.spotIndex)),v=>{const old=a.currentSpot;if(old)old._reserved=false;f.spotIndex=v?.source?.index??null;if(v)v._reserved=false;});
    property(a,'weakened',()=>!!f.weakened||(a.myProfile?.canCapture&&f.hp/f.maxHp<=.2),v=>{f.weakened=!!v;});
    a.myProfile=profileFor(f);a.my_Parent=nativeLevel;a.sponsor='';a.expIncrease=1;a.effect_List=[];a.hit_Me_List=[];
    if(!f.npc&&(f.team==='tower'||f.playerControlled)){const uid=f.partyUid??f.uid,index=(battle.save?.party??[]).indexOf(uid);if(index>=0)nativeParty[index]=a.myProfile;else if(!battle.save)nativeParty.push(a.myProfile);}
    a.gfx=E.finder_Graphic.get_Graphic_By_Num(a.myProfile);a.addChild(a.gfx);a.myAbility=C.ability_Utility.get_Ability(a,f.speciesId);
    // poke.method_301 runs in the constructor, before screen_Level.add_Enemy
    // applies its graphic scale and method_185 sets capture/shiny states.
    a.lifeBar=new display.MovieClip('gfx_life_bar');a.addChild(a.lifeBar);
    a.lifeBar.scaleX=f.hp/f.maxHp;a.lifeBar.y=-a.gfx.height/2-10;a.lifeBar.x=-a.lifeBar.width/2;
    if(f.hp/f.maxHp<=.2){a.lifeBar.gotoAndStop(3);a.weakened=true;}
    if(f.team!=='tower'){if(!a.myProfile.canCapture)a.lifeBar.gotoAndStop(4);else if(a.myProfile.shiny){a.lifeBar.gotoAndStop(3);a.weakened=true;}}
    a.gfx.scaleX=a.gfx.scaleY=f.scale??1;
    a.send_Msg=message=>messageAdapter(a,message);
    a.turnAround=(onlyOnce=false)=>{if(onlyOnce&&a.turnedAround)return;battle.turnAround?.(f);};
    a.method_71=()=>{}; // Battle reads currentPoint/path/direction directly.
    a.method_119=point=>{a.currentPoint=point;a.target=a.walkList[point]??null;};
    if(f.team!=='tower')a.set_Direction=direction=>{a.dir=direction;a.gfx.gotoAndPlay(direction);a._lastDirection=direction;a.set_Speed();};
    a.method_42=(direction='cw')=>{const dirs=direction==='cw'?['left','back','right','front']:['left','front','right','back'];a.set_Direction(dirs[(dirs.indexOf(a.dir)+1)%4]);};
    a.method_91=()=>{if(f.candy){const c=f.candy;c.state='ground';c.carrier=null;c.x=f.x;c.y=f.y;f.candy=null;}};
    a.I_Fainted=()=>{if(disposed||a._fainting)return;a._fainting=true;a.method_91();if(options.onFaint)options.onFaint(f,currentSource?.fighter);else if(f.team==='enemy'&&battle.defeat)battle.defeat(f);else{f.alive=false;f.placed=false;emit('faint',{target:f});}a.end_All_Effects();};
    a.init=()=>{a.end_All_Effects();a.removeChild(a.gfx);a.gfx=E.finder_Graphic.get_Graphic_By_Num(a.myProfile);a.gfx.scaleX=a.gfx.scaleY=f.scale??1;a.addChild(a.gfx);a.myAbility=C.ability_Utility.get_Ability(a,a.myProfile.transformed?a.myProfile.tnum:a.myProfile.num);};
    const originalAdd=C.poke.prototype.add_Effect,originalRemove=C.poke.prototype.remove_Effect,originalDamage=C.poke.prototype.take_Damage,originalHeal=C.poke.prototype.take_Healing,originalHit=C.poke.prototype.new_Hit_Me;
    a.add_Effect=effect=>{if(disposed||!effect)return;effect._attacker??=currentSource;effect._move??=currentMove;originalAdd.call(a,effect);syncEffects(a);};
    a.remove_Effect=effect=>{originalRemove.call(a,effect);effect._removed=true;syncEffects(a);};
    a.new_Hit_Me=source=>{originalHit.call(a,source);if(source?.myProfile.id!==-1&&!source?.fighter?.npc)f.attackers?.add(source.fighter.partyUid??source.fighter.uid);};
    a.take_Damage=(amount,effect,multiplier=0,sound=true)=>{if(disposed||a._fainting)return;const before=a.life;originalDamage.call(a,amount,effect,multiplier,sound);recordDiagnostic({kind:'damage',source:currentSource?.fighter,target:f,amount:before-a.life,multiplier,sourceClass:currentMove?.sourceClass});emit('damage',{source:currentSource?.fighter,target:f,amount:before-a.life,multiplier,native:true});};
    a.take_Healing=amount=>{if(disposed)return;const before=a.life;originalHeal.call(a,amount);recordDiagnostic({kind:'heal',target:f,amount:a.life-before});emit('heal',{target:f,amount:a.life-before,native:true});};
    const initial=f.cooldown;a.myAttack=E.finder_Attacks.get_Attack(f.selectedMove??f.moves?.[0]??1,a);if(initial!=null)f.cooldown=initial;a._moveId=f.selectedMove;a.set_Speed();a.gfx.gotoAndPlay(a.dir);a._lastDirection=a.dir;
    const ai=f.original?.myAI?.sourceClass??(f.original?.num===150&&[337,197,196,115].every((id,i)=>f.moves?.[i]===id)?'class_92':null);if(ai&&C[ai])a.myProfile.myAI=new C[ai]();
    return a;
  }
  function syncEffects(a){
    const effects=a.fighter.effects;for(const [key,e]of Object.entries(effects))if(e.native)delete effects[key];
    for(const e of a.effect_List){const name=e.sourceClass,key=statusClass[name]??modifierClass[name]?.[0]??name;effects[key]={native:true,sourceClass:name,status:statusClass[name]??null,stat:modifierClass[name]?.[1],durationFrames:e.var_614??e.duration??null};}
    a.fighter.status=Object.keys(effects).find(k=>effects[k].native&&statusClass[effects[k].sourceClass])??null;
    a.fighter.moveState={phase:a.myAttack?.var_237??null,sourceClass:a.myAttack?.sourceClass};
  }
  function withSource(source,move,fn){const oldSource=currentSource,oldMove=currentMove;currentSource=source;currentMove=move;try{return fn();}finally{currentSource=oldSource;currentMove=oldMove;}}
  function ensureAttack(a){if(a._moveId!==a.fighter.selectedMove){a.myAttack=E.finder_Attacks.get_Attack(a.fighter.selectedMove,a);a._moveId=a.fighter.selectedMove;}}
  function experienceContributors(f){const a=actors.get(f)??detachedActors.get(f);return a?.hit_Me_List.length?a.hit_Me_List.map(source=>source.fighter):null;}
  function receiveExperience(f,amount){if(disposed)return 0;const a=actors.get(f)??detachedActors.get(f)??actor(f),before=a.myProfile.experience;if(f.team==='tower'&&!f.placed&&!f.dragging)world.removeChild(a);a.receive_Experience(amount);return a.myProfile.experience-before;}
  function attack(f,targets){if(disposed)return;const a=actor(f);ensureAttack(a);if(!a.alive)return;let candidates=(targets??(f.team==='tower'?battle.enemies:battle.towers)).filter(t=>t.alive&&(t.team!=='tower'||t.placed)&&(f.team!=='enemy'||battle.level.mode==='invasion'||!t.npc));if(f.target==='last')candidates=[...candidates].reverse();withSource(a,a.myAttack,()=>a.checkEnemy(candidates.map(actor)));a._moveId=f.selectedMove;syncEffects(a);}
  function tickBeforeMovement(f){
    if(disposed)return;
    const a=actor(f);ensureAttack(a);if(a.dir!==a._lastDirection){a.gfx.gotoAndPlay(a.dir);a._lastDirection=a.dir;}if(f.team==='tower')a.method_87();
    // The original enumerates the live Vector: removals may shift the next
    // effect past this tick, while newly appended effects can run this tick.
    for(let i=0;i<a.effect_List.length;i++){const effect=a.effect_List[i];withSource(effect._attacker,effect._move,()=>effect.run());if(!a.alive&&f.team!=='tower')break;}
    if(f.team==='tower'&&a.alive){a.myProfile.myAI?.run(a);a.myAbility?.on_Run();a._moveId=f.selectedMove;}
    syncEffects(a);
  }
  function tickAfterMovement(f){if(disposed)return;const a=actor(f);if(a.dir!==a._lastDirection){a.gfx.gotoAndPlay(a.dir);a._lastDirection=a.dir;}if(f.team!=='tower'&&a.alive){a.method_87();withSource(a,a.myAttack,()=>a.method_401());a.myAbility?.on_Run();a.myProfile.myAI?.run(a);a._moveId=f.selectedMove;}syncEffects(a);}
  function tickFighter(f){tickBeforeMovement(f);tickAfterMovement(f);}
  function collide(f){if(disposed)return;const a=actor(f);if(!a.alive)return;for(const effect of pathEffects){if((f.team!=='tower'||effect.var_234)&&(f.team==='tower'||!effect.var_497)&&effect.isCollision(a.gfx))withSource(effect._attacker,effect._move,()=>effect.onCollision(a));}}
  function candyClip(candy){
    let clip=candyClips.get(candy);
    if(!clip){const metadata=options.timelines??data.timelines,bg=metadata.symbols[battle.level.backgroundSymbolId];const name=battle.level.candies?.[candy.id]?.name??`candy_${Number(candy.id)+1}`;const placement=Object.values(bg?.namedFrames??{}).flat().find(entry=>entry.name===name);if(!placement)throw new Error(`Missing original candy placement ${name} for ${battle.level.backgroundSymbolId}`);clip=new display.MovieClip(placement.id,{allowShape:true});clip._bounds=clip.timeline?.bounds??placement.bounds;clip._matrix=[...placement.matrix];candyClips.set(candy,clip);}
    clip.x=candy.x;clip.y=candy.y;return clip;
  }
  function candyCollision(f,candy){if(disposed)return false;return candyClip(candy).hitTestObject(actor(f).gfx);}
  // screen_Level uses the whole enemy (including its life bar/effects) for
  // Pokéball hitTestPoint, and only tower.gfx for potion hitTestObject.
  // Input coordinates are in map space. HUD potion size is converted to map
  // space by scale=1/mapZoom; its center remains under the HUD drag point.
  function captureHit(f,{x,y}){
    if(disposed)return false;
    const bounds=actor(f).globalBounds();
    // Source method_367 reparents carried candy at the actor origin. Phaser
    // draws candy separately, but its bounds still belong to this hit area.
    if(f.candy){const clip=candyClip(f.candy);clip.x=f.x;clip.y=f.y;const c=clip.globalBounds();bounds[0]=Math.min(bounds[0],c[0]);bounds[1]=Math.min(bounds[1],c[1]);bounds[2]=Math.max(bounds[2],c[2]);bounds[3]=Math.max(bounds[3],c[3]);}
    return x>=bounds[0]&&x<=bounds[2]&&y>=bounds[1]&&y<=bounds[3];
  }
  function potionCollision(f,{x,y,scale=1,which=1}){
    if(disposed)return false;
    which=which===2?2:which===3?3:1;
    let clip=potionClips.get(which);
    if(!clip){clip=new display.MovieClip('gfx_potion_drag'+(which===1?'':'_'+which));potionClips.set(which,clip);}
    clip.x=x;clip.y=y;clip.scaleX=clip.scaleY=scale;
    return actor(f).gfx.hitTestObject(clip);
  }
  function spotCollision(f,source){
    if(disposed)return false;
    let clip=spotClips.get(source);
    if(!clip){
      const metadata=options.timelines??data.timelines,bg=metadata.symbols[battle.level.backgroundSymbolId];
      const name=source.name??`spot_${source.index}`,placement=Object.values(bg?.namedFrames??{}).flat().find(entry=>entry.name===name);
      if(!placement)throw new Error(`Missing original spot placement ${name} for ${battle.level.backgroundSymbolId}`);
      clip=new display.MovieClip(placement.id,{allowShape:true});clip._bounds=clip.timeline?.bounds??placement.bounds;clip._matrix=[...placement.matrix];clip.x=source.x;clip.y=source.y;spotClips.set(source,clip);
    }
    return clip.hitTestObject(actor(f).gfx);
  }
  function prepareTowerDrag(f){
    if(disposed)return;
    const a=actor(f),p=a.myProfile;
    world.addChild(a);
    for(const field of Object.keys(modMap))p[field]=1;
    p.var_655=1;p.crit_Chance=6;p.transformed=false;
    a.gfx.gotoAndStop('front');if(p.shiny===2)a.gfx.actual?.gotoAndStop('front');
    if([143,144,145,146,150,243,244,245,382,383,386].includes(p.num)){
      a._dragScale=[a.gfx.scaleX,a.gfx.scaleY];const dimension=Math.max(a.gfx.width,a.gfx.height);
      if(dimension>0)a.gfx.scaleX=a.gfx.scaleY=70/dimension;
    }
    a.yourRange??=new display.MovieClip('gfx_range_normal');
    if(!a.yourRange.parent)a.addChildAt(a.yourRange,0);
    a.yourRange.visible=true;a.yourRange.gotoAndStop(2);
    return a;
  }
  function finishTowerDrag(f){
    if(disposed)return;
    const a=actor(f);a.gfx.gotoAndPlay('front');if(a.myProfile.shiny===2)a.gfx.actual?.gotoAndPlay('front');
    if(a._dragScale){[a.gfx.scaleX,a.gfx.scaleY]=a._dragScale;delete a._dragScale;}
    if(a.yourRange)a.yourRange.visible=false;
  }
  // poke_Tower.evolve replaces the graphic in place. Its ability, move and
  // active effects remain attached until the original lifecycle replaces them.
  function refreshGraphic(f){if(disposed)return;const a=actor(f),index=a.getChildIndex(a.gfx);a.removeChild(a.gfx);a.gfx=E.finder_Graphic.get_Graphic_By_Num(a.myProfile);a.gfx.scaleX=a.gfx.scaleY=f.scale??1;a.addChildAt(a.gfx,index);a.gfx.gotoAndPlay(a.dir);a._lastDirection=a.dir;return a.gfx;}
  function tickWorld(){if(disposed)return;tick++;for(let i=0;i<pathEffects.length;i++){
    const effect=pathEffects[i];withSource(effect._attacker,effect._move,()=>effect.run());
  }display.advance(world);for(const clip of candyClips.values())display.advance(clip);}
  function detach(f,{abandon=false}={}){const a=actors.get(f);if(!a)return;if(!abandon)a.end_All_Effects();world.removeChild(a);detachedActors.set(f,a);actors.delete(f);}
  function dispose(){if(disposed)return;disposed=true;const cleanupErrors=[];for(const a of actors.values()){a.fighter.alive=false;a._fainting=true;}for(const a of actors.values()){for(const effect of [...a.effect_List])if(a.effect_List.includes(effect)){try{effect.remove_Me();}catch(error){cleanupErrors.push(error.message);}}a.effect_List.length=0;for(const [key,e]of Object.entries(a.fighter.effects))if(e.native)delete a.fighter.effects[key];a.fighter.status=null;a.children.length=0;a.parent=null;}for(const effect of [...pathEffects]){try{effect.remove_Me();}catch(error){cleanupErrors.push(error.message);}}world.children.length=0;pathEffects.length=0;nativeParty.length=0;actors.clear();candyClips.clear();spotClips.clear();potionClips.clear();events.length=0;return cleanupErrors;}
  return{actor,attach:actor,experienceContributors,receiveExperience,attack,tickFighter,tickBeforeMovement,tickAfterMovement,collide,tickWorld,candyCollision,captureHit,potionCollision,spotCollision,prepareTowerDrag,finishTowerDrag,refreshGraphic,detach,dispose,classes:C,world,pathEffects,display,events,diagnosticEventLimit,get diagnosticEventCount(){return diagnosticEventCount;},get disposed(){return disposed;},get tick(){return tick;},snapshot:()=>display.snapshot(world),resetAttack(f){const a=actor(f);a.reset_Attack();a._moveId=f.selectedMove;syncEffects(a);},ready(f){if(disposed)return false;const a=actor(f);return a.alive&&!a.disabled&&!a.currentCoolDown&&a.method_76();}};
}
