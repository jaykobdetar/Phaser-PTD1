/* PTD original wave scripts, mechanically translated from recovered AS3.
 * Coordinates and cadence use the source game's 21 logical frames per second.
 * External cutscene/quest hooks are surfaced as events, never silently implemented.
 */
export const WAVE_FPS = 21;
function compile(method) { return method.run; }
function seededRandom(seed) {
  let a = seed >>> 0;
  return () => {a += 0x6D2B79F5;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};
}
const profileIntFields = new Set('reward id num experience level move1 move2 move3 move4 numMoves ability moveSelected base_Experience base_HP base_Attack base_Defense base_Special_Attack base_Special_Defense speed shiny tnum tmove1 tmove2 tmove3 tmove4 tnumMoves tmoveSelected tshiny energy currentLife targetType var_175 var_179 var_343 var_469 whichStone myID pos'.split(' '));
function profilePoke() {
  const data = {canCapture:true,runAway:true,freeRoam:false,dropCandy:false,transformed:false,shiny:0,types:[],saveInfo:{},val:{},currentLife:-1,targetType:1,myTag:'n',mod_Attack:1,mod_Defense:1,mod_Special_Attack:1,mod_Special_Defense:1,mod_Speed:1,mod_Accuracy:1,mod_Evasion:1,crit_Chance:6};
  for(const field of profileIntFields) if (!(field in data)) data[field]=0;
  data.is_Type = id => data.types.includes(id);
  return new Proxy(data,{set(target,key,value){target[key]=profileIntFields.has(key)?Math.trunc(value):value;return true;}});
}
function getInfo(profile,transformed=false) {
  const s = SPECIES[transformed?profile.tnum:profile.num];
  if (!s) throw new Error('Unknown original Pokémon ID '+profile.num);
  Object.assign(profile,{name:s.name,reward:s.reward,base_Experience:s.baseExperience,base_HP:s.stats.hp,base_Attack:s.stats.attack,base_Defense:s.stats.defense,base_Special_Attack:s.stats.specialAttack,base_Special_Defense:s.stats.specialDefense,speed:s.stats.speed,types:s.typeIds.slice()});
  if (!profile.nickname || profile.nickname==='bob') profile.nickname=profile.name;
}
function snapshot(profile) {
  return JSON.parse(JSON.stringify(profile,(_,value)=> typeof value==='function'?undefined:value));
}
/**
 * createWave(levelId, {seed,version=1,onSpawn,onWave,onEvent,context,waveClass})
 * onSpawn receives original profile fields, scale, path ('p'/'2'/'3'/'4'), start waypoint.
 * Call tick() once per simulated 1/21 second. Call enemyCleared() whenever no enemies remain.
 * Call defeated(profile) for defeat-dependent scripts. state exposes original variables.
 * flags lists unavailable external actions encountered. finished concerns spawn completion.
 */
export function createWave(levelId, options={}) {
  const level=getStage(levelId);
  if(!level)throw new Error('Unknown level '+levelId);
  const waveClass=options.waveClass ?? level.waveClass;
  const flags=new Set();let frame=0,shinyCount=0;
  const random=seededRandom(options.seed??Math.floor(Math.random()*4294967296));
  const event=(type,details={})=>options.onEvent?.({type,frame,...details});
  const unsupported=(name,args=[])=>{flags.add(name);event('external-hook',{name,args:args.map(x=>typeof x==='object'?'[object]':x)});};
  const clips=new Map();
  function clip(name='clip') {
    if(clips.has(name))return clips.get(name);
    const obj={name,visible:true,x:0,y:0,currentFrame:1,totalFrames:1,scaleX:1,scaleY:1,rotation:0};
    const result=new Proxy(obj,{get(t,key){if(key===Symbol.toPrimitive)return ()=>0;if(key in t)return t[key];if(key==='then')return undefined;if(['gotoAndStop','gotoAndPlay','play','stop','addChild','removeChild','move_Screen'].includes(key))return (...args)=>{event('presentation',{name:name+'.'+key});if(key==='gotoAndStop'&&typeof args[0]==='number')t.currentFrame=args[0];return args[0];};return clip(name+'.'+String(key));}});clips.set(name,result);return result;
  }
  const playerProfile={currentVersion:options.version??1,partyList:[],fightList:[],myAvatarGender:'boy',myAvatarStyle:1,haveThisExtraInfo:()=>false,getItemValue:()=>0,...options.context?.playerProfile};
  let state;
  const parent={gfx_BG:clip('gfx_BG'),gfx_UI:clip('gfx_UI'),enemyList:[],towerList:[],candyList:[],...options.context,
    add_Enemy_Poke(profile,scale=1,path='p',startPoint=0){if(!profile)throw new Error('Original wave returned empty Pokémon profile');options.onSpawn?.(snapshot(profile),scale,String(path),startPoint);event('spawn',{wave:state.currentWave,id:profile.num});},
    update_Wave_Info(number,total){options.onWave?.(number,total);},
    get_Tower_By_Profile(profile){return options.context?.get_Tower_By_Profile?.(profile)??{myProfile:profile};},
    return_Poke(tower){const profile=tower?.myProfile;options.context?.return_Poke?.(tower);const index=playerProfile.fightList.indexOf(profile);if(index>=0)playerProfile.fightList.splice(index,1);event('return-party',{profile:profile?snapshot(profile):null});},
    reset_Poke(){event('reset-party-ui');},
    show_Achievement_Popup(id,variant=-1){event('achievement',{id,variant});},
    end_hack(){throw new Error('Original wave consistency check failed');},
    move_Screen(...args){event('presentation',{name:'move_Screen',args});},
    send_Msg_Public(name){if(name==='sponsor')return 'local';unsupported('send_Msg_Public.'+name);return null;},
    add_Popup(...args){unsupported('add_Popup',args);},
  };
  const parentProxy=new Proxy(parent,{get(t,key){if(key in t)return t[key];if(String(key).startsWith('var_'))return false;return (...args)=>{unsupported('level.'+String(key),args);return null;};}});
  state={turn:0,totalWaves:level.totalWaves,currentWave:1,previousWave:0,finished:false,currentTime:0,currentTime2:0,currentSetTime:-1,currentSetTime2:-1,my_Parent:parentProxy,
    Math:Object.assign(Object.create(Math),{random}),Number,String,Boolean,Array,Object,
    profile_poke:profilePoke,main:{playerProfile},finder_Poke_Info:{get_Poke_Info:getInfo,calculate_HP:p=>Math.trunc(2*p.base_HP*p.level/100)+10+p.level},trace:(...args)=>event('trace',{args}),
    wave_Gone(){},do_Wave(){},do_Wave_2(){},get_Next_Wave(){return null;},defeated_Poke(){},method_437(){},pause_Wave(){},unpause_Wave(){},
    update_Wave(number=1){this.currentWave=number;parent.update_Wave_Info(number,this.totalWaves);},
    start_Wave(){this.baseStartWave();},baseStartWave(){this.update_Wave();this.currentSetTime=120;},
    start_Wave_2(){this.baseStartWave2();},baseStartWave2(){this.currentSetTime2=120;},
    get_Total_Waves(){return level.totalWaves;},
    check_Achievement_2(profile){return profile.num===121;},check_Achievement_1(profile){if(profile.shiny!==1)return -1;return [19,16,74,41].indexOf(profile.num);},
    wave_Finished(){this.finished=true;this.destroy_Wave();},destroy_Wave(){this.currentSetTime=-1;this.currentSetTime2=-1;},
    is_Shiny(){return Math.trunc(random()*1587654+1)===1587653;},
    get_Value(profile){if(Math.trunc(random()*3001)===2999 && ++shinyCount<=5){profile.shiny=random()<0.5?2:1;profile.saveInfo.extra=profile.shiny===2?555:151;}},
    get_Poke_Profile(){return null;},
    create_Poke_Profile(...args){return this.get_Poke_Profile(...args);},
  };
  if(!waveClass){state.finished=false;flags.add(level.mode==='story'?'story-transition-required':'wave-selection-required');event(level.mode==='story'?'story-ready':'selection-required',{levelId});}
  else {
    const definition=WAVES[waveClass];if(!definition)throw new Error('Missing wave '+waveClass);
    for(const field of definition.fields) {
      let value=['int','uint','Number'].includes(field.type)?0:field.type==='Boolean'?false:null;
      if(field.initialize)value=field.initialize.call(state);
      if(['int','uint'].includes(field.type)){let integer=Math.trunc(value);Object.defineProperty(state,field.name,{get(){return integer;},set(v){integer=Math.trunc(v);},enumerable:true});}
      else state[field.name]=value;
    }
    const constructors=definition.constructors;
    for(const name of [...definition.imports,...constructors]) {
      if(name in state || name==='wave')continue;
      state[name]=function(value){if(name.startsWith('level_')||name==='screen_Level')return value;if(name.startsWith('class_')&&WAVES[name]){unsupported('wave-transition.'+name);return {waveClass:name};}if(name.startsWith('class_')){unsupported('enemy-ai.'+name);return {sourceClass:name};}return clip(name);};
    }
    for(const [name,method]of Object.entries(definition.methods))state[name]=compile(method);
    state[waveClass]?.(parentProxy);
    state.totalWaves=state.get_Total_Waves();
    state.start_Wave();
  }
  return {
    levelId,waveClass,state,flags,level,objectiveMode:level.mode,
    get frame(){return frame;},get finished(){return state.finished;},get currentWave(){return state.currentWave;},get totalWaves(){return state.totalWaves;},
    tick(count=1){for(let i=0;i<count;i++){frame++;if(state.currentSetTime>0&&++state.currentTime>=state.currentSetTime){state.currentSetTime=-1;state.currentTime=0;state.do_Wave();}if(state.currentSetTime2>0&&++state.currentTime2>=state.currentSetTime2){state.currentSetTime2=-1;state.currentTime2=0;state.do_Wave_2();}}},
    enemyCleared(){state.wave_Gone();},defeated(profile){if(level.className==='level_30')state.wave_Finished();state.defeated_Poke(profile);},
    advanceStory(){if(level.mode!=='story')throw new Error('This stage is not story-only');state.wave_Finished();event('story-complete',{levelId});},
    presetTowers(){const data=LEVEL_FACTORIES[level.className];if(!data)return [];const context=Object.create(state);for(const [name,m]of Object.entries(data.profileFactories)){for(const name of m.constructors){if(!(name in context))context[name]=function(){unsupported('npc-ai.'+name);return {};};}context[name]=compile(m);}return data.presetTowers.map(spec=>({spot:spec.spot,profile:snapshot(context[spec.factory](...spec.args))}));},
    partyOverride(){if(!level.partyOverride)return null;const p=profilePoke();p.num=level.partyOverride.num;getInfo(p);p.level=level.partyOverride.level;p.numMoves=level.partyOverride.moves.length;level.partyOverride.moves.forEach((m,i)=>p['move'+(i+1)]=m);p.moveSelected=1;return [snapshot(p)];},
    getProfile(a=0,b=0,c=0){return snapshot(state.get_Poke_Profile(a,b,c));},
    nextWaveClass(){return state.get_Next_Wave()?.waveClass??null;},
  };
}

/** Recovered entry-point and variant metadata. */
export function getStage(reference){return LEVELS.find(l=>l.id===Number(reference)||l.id===reference||l.className===reference)??null;}
export function listStages(){return LEVELS;}
/** Prevent a generic wave-cleared test from declaring custom campaign victory. */
export function checkStageOutcome(reference, facts={}) {
 const stage=getStage(reference);if(!stage)throw new Error('Unknown stage '+reference);
 if(stage.mode==='story')return {status:facts.storyAcknowledged?'won':'await-story'};
 if(stage.mode==='branch')return {status:facts.wavesFinished&&facts.remainingEnemies===0?'room-cleared':'await-selection',exits:stage.branchExits};
 if(stage.requiresPartySurvival&&facts.partyAlive===false)return {status:'lost',reason:'party-fainted'};
 if(stage.mode==='invasion'){
  if(facts.candiesCaptured>=stage.candyCount)return stage.nextStageClass?{status:'next-stage',nextStage:stage.nextStageClass}:{status:'won'};
  if(facts.energy===0&&facts.remainingEnemies===0)return {status:'lost',reason:'energy-exhausted'};
  return {status:'running'};
 }
 if(facts.candiesCaptured>=stage.candyCount)return {status:'lost',reason:'all-candy-stolen'};
 if(facts.wavesFinished&&facts.remainingEnemies===0)return stage.nextStageClass?{status:'next-stage',nextStage:stage.nextStageClass}:{status:'won'};
 return {status:'running'};
}

const WAVES = {"class_23":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_23":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 30;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 30;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 30;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_24":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_24":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.turn == 6)
         {
            _loc1_ = this.Math.trunc((this.currentWave - 1) % 5 + 1);
            switch(_loc1_ - 1)
            {
               case 0:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
                  break;
               case 1:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
                  break;
               case 2:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
                  break;
               case 3:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
                  break;
               case 4:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
                  if(this.currentWave == 30)
                  {
                     this.currentWave = 31;
                     this.wave_Finished();
                     return;
                  }
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 90;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 104 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 69)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 4);
               }
               _loc4_.level = param3;
               _loc4_.num = 41;
               _loc4_.move1 = 54;
               _loc4_.move2 = 38;
               _loc4_.numMoves = 2;
               _loc4_.whoMe = "me";
               if(param3 >= 9)
               {
                  _loc4_.move3 = 74;
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 99)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 1;
               _loc4_.move3 = 25;
               _loc4_.whoMe = "vm";
               _loc4_.numMoves = 3;
               if(param3 >= 8)
               {
                  _loc4_.numMoves = 4;
                  _loc4_.move1 = 65;
                  _loc4_.move4 = 64;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.level = 8;
               _loc4_.num = 35;
               _loc4_.move1 = 48;
               _loc4_.move2 = 5;
               _loc4_.move3 = 47;
               _loc4_.move4 = 60;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "xi";
               if(_loc4_.name != "Clefairy")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 101)
            {
               _loc4_.level = 8;
               _loc4_.num = 46;
               _loc4_.move1 = 6;
               _loc4_.move2 = 37;
               _loc4_.move3 = 24;
               _loc4_.numMoves = 3;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "mw";
               if(_loc4_.name != "Paras")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 102)
            {
               _loc4_.level = 12;
               _loc4_.num = 60;
               _loc4_.move1 = 109;
               _loc4_.move2 = 11;
               _loc4_.move3 = 110;
               _loc4_.move4 = 31;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "wj";
               if(_loc4_.name != "Poliwag")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 103)
            {
               _loc4_.level = 12;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 43;
                  _loc4_.move1 = 107;
                  _loc4_.move2 = 76;
                  _loc4_.move3 = 73;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "mx";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 69;
                  _loc4_.move1 = 91;
                  _loc4_.move2 = 16;
                  _loc4_.move3 = 70;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "wp";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Oddish" && _loc4_.name != "Bellsprout")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 104)
            {
               _loc4_.level = 12;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 58;
                  _loc4_.move1 = 19;
                  _loc4_.move2 = 101;
                  _loc4_.move3 = 10;
                  _loc4_.move4 = 43;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "ib";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 37;
                  _loc4_.move1 = 10;
                  _loc4_.move2 = 3;
                  _loc4_.move3 = 101;
                  _loc4_.move4 = 4;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "xv";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Growlithe" && _loc4_.name != "Vulpix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 75;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 25;
            _loc4_.move2 = 65;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            _loc4_.runAway = false;
            if(_loc4_.name != "Graveler")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 47;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 6;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Parasect")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 36;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 62;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Clefable")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 42;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 54;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Golbat")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 65;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Onix")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 2;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_25":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_25":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 21;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 21;
         }
         else if(this.turn == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 21;
         }
         else if(this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 21;
         }
         else if(this.turn == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            if(this.currentWave == 30)
            {
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.turn = 0;
            this.currentSetTime = 90;
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 35)
            {
               _loc4_.num = 21;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(6 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 42;
               _loc4_.move2 = 5;
               _loc4_.move3 = 43;
               _loc4_.whoMe = "ke";
               _loc4_.numMoves = 3;
               if(_loc4_.name != "Spearow")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 65)
            {
               _loc4_.num = 16;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(6 + this.Math.random() * 2);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 1;
               _loc4_.move2 = 2;
               _loc4_.numMoves = 2;
               _loc4_.whoMe = "ew";
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 79)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(6 + this.Math.random() * 2);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 29;
                  _loc4_.move1 = 5;
                  _loc4_.move2 = 6;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "kp";
                  if(_loc4_.level == 7)
                  {
                     _loc4_.move3 = 3;
                     _loc4_.numMoves = 3;
                  }
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 32;
                  _loc4_.move1 = 43;
                  _loc4_.move2 = 42;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "xk";
                  if(_loc4_.level == 7)
                  {
                     _loc4_.move3 = 12;
                     _loc4_.numMoves = 3;
                  }
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 89)
            {
               _loc4_.num = 39;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(3 + this.Math.random() * 5);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 47;
               _loc4_.numMoves = 1;
               if(_loc4_.level >= 5)
               {
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 47;
                  _loc4_.numMoves = 2;
               }
               _loc4_.whoMe = "xp";
               if(_loc4_.name != "Jigglypuff")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 99)
            {
               _loc4_.num = 56;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(7);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 12;
               _loc4_.move2 = 6;
               _loc4_.move3 = 43;
               _loc4_.move4 = 51;
               _loc4_.numMoves = 4;
               _loc4_.whoMe = "iw";
               if(_loc4_.name != "Mankey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(6 + this.Math.random() * 2);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 29;
                  _loc4_.move1 = 5;
                  _loc4_.move2 = 6;
                  _loc4_.numMoves = 2;
                  if(_loc4_.level == 7)
                  {
                     _loc4_.move3 = 3;
                     _loc4_.numMoves = 3;
                  }
                  _loc4_.whoMe = "kp";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 32;
                  _loc4_.move1 = 43;
                  _loc4_.move2 = 42;
                  _loc4_.numMoves = 2;
                  if(_loc4_.level == 7)
                  {
                     _loc4_.move3 = 12;
                     _loc4_.numMoves = 3;
                  }
                  _loc4_.whoMe = "xk";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
         }
         _loc4_.reward = 1;
         _loc4_.freeRoam = true;
         _loc4_.experience = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_HP *= 5;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_26":{fields:[],imports:["class_93","finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke","class_93"],methods:{"class_26":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(144));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 1000;
               this.turn = 0;
               return;
            }
         }
         else
         {
            if(this.currentWave > 1 && this.currentWave < 10)
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 1000;
               if(this.currentWave == 10)
               {
                  this.currentSetTime = 0;
               }
               return;
            }
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke","class_93"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 91;
         _loc4_.runAway = false;
         if(param1 == 144)
         {
            _loc4_.level = 91;
            _loc4_.whoMe = "pje";
            _loc4_.num = 145;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 405;
            _loc4_.move2 = 406;
            _loc4_.numMoves = 2;
            _loc4_.myAI = new this.class_93();
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 100;
            _loc4_.base_Defense *= 6;
            _loc4_.base_Special_Defense *= 6;
            _loc4_.var_490 = true;
            _loc4_.freeRoam = false;
         }
         _loc4_.canCapture = false;
         _loc4_.base_Experience *= 30;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_27":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_27":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 40;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15));
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"2");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"3");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 150;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 7)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 8)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 9)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 10)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"3");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 11)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"4");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 300;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 12)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 13)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 14)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 15)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 16)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 17)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave >= 18 && this.currentWave <= 28)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 60;
            this.turn = 0;
         }
         else if(this.currentWave >= 29 && this.currentWave <= 39)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 60;
            this.turn = 0;
         }
         else if(this.currentWave == 40)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn >= 3)
            {
               this.currentWave = 41;
               this.wave_Finished();
               return;
            }
            this.currentSetTime = 60;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         var _loc5_ = this.Math.trunc(0);
         if(this.currentWave <= 9)
         {
            _loc5_ = this.Math.trunc(0);
         }
         else if(this.currentWave <= 19)
         {
            _loc5_ = this.Math.trunc(3);
         }
         else if(this.currentWave <= 29)
         {
            _loc5_ = this.Math.trunc(6);
         }
         else if(this.currentWave <= 39)
         {
            _loc5_ = this.Math.trunc(9);
         }
         else if(this.currentWave <= 45)
         {
            _loc5_ = this.Math.trunc(12);
         }
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(20 + this.Math.random() * 4);
               param3 += _loc5_;
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 15)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 25;
               _loc4_.move2 = 65;
               _loc4_.move3 = 68;
               _loc4_.move4 = 67;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 30)
            {
               _loc4_.num = 19;
               _loc4_.move1 = 34;
               _loc4_.move2 = 3;
               _loc4_.move3 = 19;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 45)
            {
               _loc4_.num = 16;
               _loc4_.move1 = 15;
               _loc4_.move2 = 36;
               _loc4_.move3 = 2;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 70)
            {
               _loc4_.num = 21;
               _loc4_.move1 = 44;
               _loc4_.move2 = 33;
               _loc4_.move3 = 43;
               _loc4_.move4 = 21;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 85)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 73;
                  _loc4_.move2 = 19;
                  _loc4_.move3 = 71;
                  _loc4_.move4 = 72;
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 8;
                  _loc4_.move3 = 69;
                  _loc4_.move4 = 2;
                  _loc4_.numMoves = 4;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 74;
               _loc4_.move3 = 19;
               _loc4_.move4 = 54;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 26;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 25;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 81;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 100;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 116;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 11;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 72;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 8;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 197;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         else if(param1 == 9)
         {
            _loc4_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 64;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
         }
         _loc4_.canCapture = false;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_28":{fields:[{name:"var_432",type:"Boolean"},{name:"var_434",type:"Boolean"}],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_28":{constructors:[],run:function(param1){

         this.var_432 = this.method_112();
         this.var_434 = this.method_82();
}},"method_82":{constructors:[],run:function(){
if(this.main.playerProfile.getItemValue(8) != 0)
         {
            return true;
         }
         return false;
}},"method_112":{constructors:[],run:function(){
if(this.main.playerProfile.getItemValue(6) != 0)
         {
            return true;
         }
         return false;
}},"get_Total_Waves":{constructors:[],run:function(){
return 15;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10));
         }
         else if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12));
         }
         else if(this.currentWave == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(13));
         }
         else if(this.currentWave == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
         }
         else if(this.currentWave == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(14));
         }
         else if(this.currentWave == 7)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(15));
         }
         else if(this.currentWave == 8)
         {
            if(this.var_434)
            {
               _loc1_ = this.Math.trunc(this.Math.random() * 3 + 16);
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc1_));
            }
            else if(this.var_432)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(16));
            }
            else
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            }
         }
         else if(this.currentWave == 9)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
         }
         else if(this.currentWave == 10)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
         }
         else if(this.currentWave == 11)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
         }
         else if(this.currentWave == 12)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
         }
         else if(this.currentWave == 13)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
         }
         else if(this.currentWave == 14)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
         }
         else if(this.currentWave == 15)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
         }
         if(this.currentWave == 15)
         {
            this.currentWave = this.currentWave + 1;
            this.wave_Finished();
            return;
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 540;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         _loc4_.canCapture = false;
         if(param1 == 1)
         {
            _loc4_.num = 72;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 93;
            _loc4_.move2 = 8;
            _loc4_.numMoves = 2;
            if(_loc4_.name != "Tentacool")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 77;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 10;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Ponyta")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 81;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 22;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Magnemite")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 100;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 41;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Voltorb")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 51;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Machop")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 6)
         {
            _loc4_.num = 9;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 18;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Blastoise")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 7)
         {
            _loc4_.num = 28;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 6;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Sandslash")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 8)
         {
            _loc4_.num = 3;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 153;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Venusaur")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 9)
         {
            _loc4_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 92;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Charizard")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 10)
         {
            _loc4_.num = 40;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 47;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Wigglytuff")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 11)
         {
            _loc4_.num = 57;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Primeape")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 12)
         {
            _loc4_.num = 22;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 42;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Fearow")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 13)
         {
            _loc4_.num = 34;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 88;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Nidoking")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 14)
         {
            _loc4_.num = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 89;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Alakazam")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 15)
         {
            _loc4_.num = 124;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 33;
            _loc4_.move1 = 122;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Jynx")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 16)
         {
            _loc4_.num = 129;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.canCapture = true;
            _loc4_.level = 10;
            _loc4_.move1 = 141;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "ekp";
            if(_loc4_.name != "Magikarp")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 17)
         {
            _loc4_.num = 98;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.canCapture = true;
            _loc4_.level = 20;
            _loc4_.move1 = 269;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "pb";
            if(_loc4_.name != "Krabby")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 18)
         {
            _loc4_.num = 90;
            _loc4_.canCapture = true;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 369;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "pj";
            if(_loc4_.name != "Shellder")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Experience *= 2.5;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 5;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_29":{fields:[{name:"var_436",type:"String",initialize:function(){return ("p")}}],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_29":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            if(this.currentWave == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
            }
            else if(this.currentWave == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(145));
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,this.var_436);
         this.currentSetTime = 30;
         if(this.var_436 == "p")
         {
            this.var_436 = "2";
         }
         else
         {
            this.var_436 = "p";
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(91);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         if(param1 == 145)
         {
            _loc4_.num = 146;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 203;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            _loc4_.targetType = 4;
            _loc4_.var_490 = true;
            _loc4_.base_HP *= 20;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 244;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 203;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            _loc4_.targetType = 5;
            _loc4_.var_490 = true;
            _loc4_.base_HP *= 20;
         }
         else if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            param3 = this.Math.trunc(80 + this.Math.random() * 10);
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 10)
            {
               _loc4_.num = 37;
               _loc4_.move1 = 151;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 32)
            {
               _loc4_.num = 77;
               _loc4_.move1 = 97;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 54)
            {
               _loc4_.num = 78;
               _loc4_.move1 = 97;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 76)
            {
               _loc4_.num = 38;
               _loc4_.move1 = 151;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 22)
            {
               _loc4_.num = 58;
               _loc4_.move1 = 99;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 59;
               _loc4_.move1 = 99;
               _loc4_.var_107 = true;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.canCapture = false;
         _loc4_.speed *= 0.5;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_30":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_30":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = null;
         if(this.currentWave >= 1 && this.currentWave <= 9)
         {
            _loc1_ = "p";
            if(this.currentWave == 1 || this.currentWave == 3 || this.currentWave == 5 || this.currentWave == 7 || this.currentWave == 9)
            {
               _loc1_ = "2";
            }
            if(this.turn >= 0 && this.turn <= 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,_loc1_);
               this.currentSetTime = 18;
            }
            else if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,_loc1_);
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 300;
               return;
            }
         }
         else if(this.currentWave == 10)
         {
            if(this.turn == 0 || this.turn == 2 || this.turn == 4 || this.turn == 6 || this.turn == 8)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
               this.currentSetTime = 18;
            }
            else if(this.turn == 1 || this.turn == 3 || this.turn == 5 || this.turn == 7 || this.turn == 9)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
               this.currentSetTime = 18;
            }
            else if(this.turn >= 10 && this.turn <= 12)
            {
               if(this.turn == 11)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
               }
               else
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
               }
               this.currentSetTime = 18;
            }
            if(this.turn == 12)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 54)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(3 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 10;
                  _loc4_.move1 = 1;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ej";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 13;
                  _loc4_.move1 = 8;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ex";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Weedle" && _loc4_.name != "Caterpie")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 89)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(4 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 11;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 1;
                  _loc4_.move3 = 7;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "ee";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 14;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 8;
                  _loc4_.move3 = 7;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "em";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Metapod" && _loc4_.name != "Kakuna")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 94)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(3 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 10;
                  _loc4_.move1 = 1;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ej";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 13;
                  _loc4_.move1 = 8;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ex";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Weedle" && _loc4_.name != "Caterpie")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 99)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(4 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 11;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 1;
                  _loc4_.move3 = 7;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "ee";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 14;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 8;
                  _loc4_.move3 = 7;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "em";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Metapod" && _loc4_.name != "Kakuna")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 25;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(3 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 5;
               _loc4_.move2 = 22;
               _loc4_.numMoves = 2;
               if(_loc4_.level == 5)
               {
                  _loc4_.move3 = 3;
                  _loc4_.numMoves = 3;
               }
               _loc4_.whoMe = "ki";
               if(_loc4_.name != "Pikachu")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 25;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 12;
            _loc4_.move1 = 1;
            _loc4_.move2 = 3;
            _loc4_.numMoves = 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed *= 2;
            _loc4_.whoMe = "pje";
            if(_loc4_.name != "Pikachu")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.experience = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_HP *= 5;
         _loc4_.speed /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_31":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_31":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 40;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15));
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"2");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"3");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 120;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 150;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 7)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn < 3)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 8)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 9)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 10)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"3");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 180;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 11)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"4");
            if(this.turn < 5)
            {
               this.currentSetTime = 24;
            }
            else
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 300;
               this.turn = 0;
            }
         }
         else if(this.currentWave == 12)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 13)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 14)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 15)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 16)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 17)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave >= 18 && this.currentWave <= 28)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave >= 29 && this.currentWave <= 39)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"4");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
         }
         else if(this.currentWave == 40)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"2");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"3");
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(),1,"4");
            if(this.turn >= 3)
            {
               this.currentWave = 41;
               this.wave_Finished();
               return;
            }
            this.currentSetTime = 60;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         var _loc5_ = this.Math.trunc(0);
         if(this.currentWave <= 9)
         {
            _loc5_ = this.Math.trunc(0);
         }
         else if(this.currentWave <= 19)
         {
            _loc5_ = this.Math.trunc(3);
         }
         else if(this.currentWave <= 29)
         {
            _loc5_ = this.Math.trunc(6);
         }
         else if(this.currentWave <= 39)
         {
            _loc5_ = this.Math.trunc(9);
         }
         else if(this.currentWave <= 45)
         {
            _loc5_ = this.Math.trunc(12);
         }
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(20 + this.Math.random() * 4);
               param3 += _loc5_;
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 15)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 25;
               _loc4_.move2 = 65;
               _loc4_.move3 = 68;
               _loc4_.move4 = 67;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 30)
            {
               _loc4_.num = 19;
               _loc4_.move1 = 34;
               _loc4_.move2 = 3;
               _loc4_.move3 = 19;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ep";
               if(_loc4_.name != "Rattata")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 45)
            {
               _loc4_.num = 16;
               _loc4_.move1 = 15;
               _loc4_.move2 = 36;
               _loc4_.move3 = 2;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ew";
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 70)
            {
               _loc4_.num = 21;
               _loc4_.move1 = 44;
               _loc4_.move2 = 33;
               _loc4_.move3 = 43;
               _loc4_.move4 = 21;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ke";
               if(_loc4_.name != "Spearow")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 85)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 73;
                  _loc4_.move2 = 19;
                  _loc4_.move3 = 71;
                  _loc4_.move4 = 72;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "kx";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 8;
                  _loc4_.move3 = 69;
                  _loc4_.move4 = 2;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "kv";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Ekans" && _loc4_.name != "Sandshrew")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 74;
               _loc4_.move3 = 19;
               _loc4_.move4 = 54;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 26;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Raichu")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 25;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Pikachu")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 81;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Magnemite")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 100;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Voltorb")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Machop")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 6)
         {
            _loc4_.num = 116;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 11;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Horsea")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 7)
         {
            _loc4_.num = 72;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 8;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Tentacool")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 8)
         {
            _loc4_.num = 73;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 197;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Tentacruel")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 9)
         {
            _loc4_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28 + _loc5_;
            _loc4_.move1 = 64;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Golem")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_32":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_32":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 47;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn <= 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(this.currentWave));
         }
         if(this.turn < 1)
         {
            this.currentSetTime = 150;
            this.currentTime = 0;
            this.turn = this.turn + 1;
            return;
         }
         if(this.currentWave == 47)
         {
            this.currentWave = 48;
            this.wave_Finished();
            return;
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 180;
         this.currentTime = 0;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 53;
         if(param1 == 1)
         {
            _loc4_.num = 3;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 157;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 10;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 9;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 18;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 12;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 129;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 15;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 39;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 158;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 20;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 180;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 22;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 78;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 9)
         {
            _loc4_.num = 24;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 72;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 10)
         {
            _loc4_.num = 26;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 97;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 11)
         {
            _loc4_.num = 28;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 12)
         {
            _loc4_.num = 31;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 6;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 13)
         {
            _loc4_.num = 34;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 8;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 14)
         {
            _loc4_.num = 36;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 47;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 15)
         {
            _loc4_.num = 38;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 191;
         }
         else if(param1 == 16)
         {
            _loc4_.num = 40;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 61;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 17)
         {
            _loc4_.num = 42;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 221;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 18)
         {
            _loc4_.num = 45;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 107;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 19)
         {
            _loc4_.num = 47;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 54;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 20)
         {
            _loc4_.num = 49;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 26;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 21)
         {
            _loc4_.num = 51;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 67;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 22)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 143;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 23)
         {
            _loc4_.num = 57;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 53;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 24)
         {
            _loc4_.num = 59;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 79;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 25)
         {
            _loc4_.num = 62;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 11;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 26)
         {
            _loc4_.num = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 89;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 27)
         {
            _loc4_.num = 68;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 229;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 28)
         {
            _loc4_.num = 71;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 91;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 29)
         {
            _loc4_.num = 73;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 201;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 30)
         {
            _loc4_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 82;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 31)
         {
            _loc4_.num = 82;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 299;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 32)
         {
            _loc4_.num = 83;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 273;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 33)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 186;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 34)
         {
            _loc4_.num = 97;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 110;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 35)
         {
            _loc4_.num = 101;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 144;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 36)
         {
            _loc4_.num = 114;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 16;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 37)
         {
            _loc4_.num = 121;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 69;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 38)
         {
            _loc4_.num = 122;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 146;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 39)
         {
            _loc4_.num = 123;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 268;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 40)
         {
            _loc4_.num = 124;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 120;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 41)
         {
            _loc4_.num = 127;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 269;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 42)
         {
            _loc4_.num = 130;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 281;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 43)
         {
            _loc4_.num = 134;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 193;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 44)
         {
            _loc4_.num = 135;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 233;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 45)
         {
            _loc4_.num = 136;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 184;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 46)
         {
            _loc4_.num = 137;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 264;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 47)
         {
            _loc4_.num = 148;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 272;
            _loc4_.numMoves = 1;
         }
         _loc4_.canCapture = false;
         _loc4_.whoMe = "pje";
         _loc4_.shiny = 1;
         _loc4_.var_107 = true;
         _loc4_.reward *= 2;
         _loc4_.speed /= 2;
         _loc4_.base_Experience *= 2;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 1.5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_33":{fields:[{name:"var_49",type:"MovieClip"}],imports:["finder_Poke_Info","main","profile_poke","screen_Level","MovieClip"],constructors:["movie_scene_Level_3_Youngster","profile_poke"],methods:{"class_33":{constructors:["movie_scene_Level_3_Youngster"],run:function(param1){

         this.var_49 = new this.movie_scene_Level_3_Youngster();
         this.my_Parent.gfx_BG.addChild(this.var_49);
}},"get_Total_Waves":{constructors:[],run:function(){
return 4;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15));
               this.currentSetTime = 18;
            }
            else if(this.turn >= 1 && this.turn <= 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,100,5),1.1);
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 2)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,55,5),1.1);
               this.currentSetTime = 18;
            }
            else if(this.turn >= 1 && this.turn <= 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,15,5),1.1);
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 3)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,0,5),1.1);
               this.currentSetTime = 18;
            }
            else if(this.turn >= 1 && this.turn <= 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,0,5),1.1);
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 4)
         {
            if(this.turn >= 0 && this.turn <= 9)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,100));
               this.currentSetTime = 18;
            }
            else if(this.turn == 10)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.2);
               this.currentWave == 5;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 15)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(4 + this.Math.random() * 2);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 10;
                  _loc4_.move1 = 1;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ej";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 13;
                  _loc4_.move1 = 8;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ex";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Caterpie" && _loc4_.name != "Weedle")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 55)
            {
               _loc4_.num = 16;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(3 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               _loc4_.whoMe = "ew";
               if(_loc4_.level == 5)
               {
                  _loc4_.move2 = 2;
                  _loc4_.numMoves = 2;
               }
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else
            {
               _loc4_.num = 19;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(2 + this.Math.random() * 4);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 1;
               _loc4_.move2 = 3;
               _loc4_.numMoves = 2;
               _loc4_.whoMe = "ep";
               if(_loc4_.level >= 4)
               {
                  _loc4_.move3 = 4;
                  _loc4_.numMoves = 3;
               }
               if(_loc4_.name != "Rattata")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.whoMe = "pje";
            _loc4_.num = 19;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 12;
            _loc4_.move1 = 1;
            _loc4_.move2 = 3;
            _loc4_.numMoves = 2;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Rattata")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.experience = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_HP *= 12;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_34":{fields:[{name:"var_389",type:"int",initialize:function(){return (this.Math.random() * 5 + 1)}},{name:"level",type:"level_38"},{name:"var_523",type:"int"}],imports:["finder_Poke_Info","level_38","main","profile_poke"],constructors:["profile_poke"],methods:{"class_34":{constructors:[],run:function(param1){
this.level = param1;
         
}},"defeated_Poke":{constructors:[],run:function(param1){
var _loc2_ = false;
         if(param1.num == 144)
         {
            if(this.var_523 == 0 && !this.main.playerProfile.haveThisExtraInfo(23))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 1 && !this.main.playerProfile.haveThisExtraInfo(24))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 2 && !this.main.playerProfile.haveThisExtraInfo(25))
            {
               _loc2_ = true;
            }
            this.level.var_676 = _loc2_;
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         _loc4_.level = 102;
         _loc4_.runAway = true;
         _loc4_.freeRoam = true;
         this.get_Value(_loc4_);
         if(param1 == 143)
         {
            _loc4_ = this.method_322(_loc4_);
         }
         else if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            _loc4_.level = 80 + this.Math.random() * 4;
            if(this.var_389 == 4)
            {
               if(param2 <= 10)
               {
                  _loc4_ = this.method_47(_loc4_);
               }
               else if(param2 <= 14)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 34)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
               }
               else if(param2 <= 38)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
               }
               else if(param2 <= 40)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_138(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_143(_loc4_);
                  }
               }
               else if(param2 <= 60)
               {
                  _loc4_ = this.method_60(_loc4_);
               }
               else if(param2 <= 80)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_53(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_39(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_48(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_55(_loc4_);
                  }
               }
            }
            else if(this.var_389 == 3)
            {
               if(param2 <= 15)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
               }
               else if(param2 <= 30)
               {
                  _loc4_ = this.method_60(_loc4_);
               }
               else if(param2 <= 34)
               {
                  _loc4_ = this.method_130(_loc4_);
               }
               else if(param2 <= 46)
               {
                  _loc4_ = this.method_53(_loc4_);
               }
               else if(param2 <= 76)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_48(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_39(_loc4_);
                  }
               }
               else if(param2 <= 80)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_164(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_179(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_55(_loc4_);
               }
            }
            else if(this.var_389 == 2)
            {
               if(param2 <= 4)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 28)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
               }
               else if(param2 <= 66)
               {
                  _loc4_ = this.method_60(_loc4_);
               }
               else if(param2 <= 76)
               {
                  _loc4_ = this.method_53(_loc4_);
               }
               else if(param2 <= 96)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_48(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_39(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_55(_loc4_);
               }
            }
            else if(this.var_389 == 5)
            {
               if(param2 <= 2)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 20)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
               }
               else if(param2 <= 22)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_143(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_138(_loc4_);
                  }
               }
               else if(param2 <= 32)
               {
                  _loc4_ = this.method_60(_loc4_);
               }
               else if(param2 <= 62)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_53(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_55(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_48(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_39(_loc4_);
                  }
               }
            }
            else if(this.var_389 == 1)
            {
               if(param2 <= 38)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_32(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_31(_loc4_);
                  }
               }
               else if(param2 <= 63)
               {
                  _loc4_ = this.method_60(_loc4_);
               }
               else if(param2 <= 65)
               {
                  _loc4_ = this.method_130(_loc4_);
               }
               else if(param2 <= 80)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_53(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_55(_loc4_);
                  }
               }
               else if(param2 <= 94)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_48(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_39(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_164(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_179(_loc4_);
                  }
               }
            }
         }
         _loc4_.base_Experience *= 1.7;
         _loc4_.speed *= 0.6;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 30)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            if(this.currentWave == 1 && this.method_335())
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(143));
            }
            else
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"method_335":{constructors:[],run:function(){
var _loc3_ = this.Math.trunc(0);
         var _loc5_ = null;
         var _loc6_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         var _loc2_ = this.Math.trunc(0);
         var _loc4_ = this.my_Parent.send_Msg_Public("sponsor");
         _loc3_ = this.Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_ && (_loc4_ == "hacked" || _loc5_.myTag != "h") && _loc5_.is_Type(12) && _loc5_.level == 100)
            {
               _loc6_++;
               if(_loc5_.shiny == 2)
               {
                  _loc2_++;
               }
               else if(_loc5_.shiny == 1)
               {
                  _loc1_++;
               }
            }
            _loc3_++;
         }
         if(_loc6_ == 6)
         {
            if(_loc1_ == 6)
            {
               this.var_523 = 1;
            }
            else if(_loc2_ == 6)
            {
               this.var_523 = 2;
            }
            else
            {
               this.var_523 = 0;
            }
            return true;
         }
         return false;
}},"method_322":{constructors:[],run:function(param1){
param1.num = 144;
         param1.move1 = 15;
         param1.numMoves = 1;
         param1.whoMe = "pj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         param1.base_HP *= 10;
         param1.canCapture = false;
         param1.runAway = false;
         param1.freeRoam = false;
         param1.shiny = 0;
         return param1;
}},"method_53":{constructors:[],run:function(param1){
param1.num = 90;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "pj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_47":{constructors:[],run:function(param1){
param1.num = 41;
         param1.move1 = 54;
         param1.numMoves = 1;
         param1.whoMe = "me";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_29":{constructors:[],run:function(param1){
param1.num = 42;
         param1.move1 = 54;
         param1.numMoves = 1;
         param1.whoMe = "mk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_39":{constructors:[],run:function(param1){
param1.num = 98;
         param1.move1 = 11;
         param1.numMoves = 1;
         param1.whoMe = "pb";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_179":{constructors:[],run:function(param1){
param1.num = 99;
         param1.move1 = 11;
         param1.numMoves = 1;
         param1.whoMe = "pp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_48":{constructors:[],run:function(param1){
param1.num = 116;
         param1.move1 = 11;
         param1.numMoves = 1;
         param1.whoMe = "eew";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_164":{constructors:[],run:function(param1){
param1.num = 117;
         param1.move1 = 11;
         param1.numMoves = 1;
         param1.whoMe = "eev";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_55":{constructors:[],run:function(param1){
param1.num = 120;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "ekj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_31":{constructors:[],run:function(param1){
param1.num = 54;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "im";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_138":{constructors:[],run:function(param1){
param1.num = 55;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "ii";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_32":{constructors:[],run:function(param1){
param1.num = 79;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "vp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_143":{constructors:[],run:function(param1){
param1.num = 80;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "bj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_60":{constructors:[],run:function(param1){
param1.num = 86;
         param1.move1 = 216;
         param1.numMoves = 1;
         param1.whoMe = "bw";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_130":{constructors:[],run:function(param1){
param1.num = 87;
         param1.move1 = 216;
         param1.numMoves = 1;
         param1.whoMe = "bv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}}}},"class_35":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_35":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 4;
}},"do_Wave":{constructors:[],run:function(){
var _loc2_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            _loc2_ = this.Math.trunc(150);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
            }
         }
         else if(this.currentWave == 2)
         {
            _loc2_ = this.Math.trunc(300);
            _loc1_ = this.Math.trunc(100);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
            }
         }
         else if(this.currentWave == 3)
         {
            _loc2_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 6)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"4");
            }
         }
         else
         {
            if(this.currentWave != 4)
            {
               return;
            }
            _loc2_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"2");
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = _loc2_;
               this.currentWave = 9;
               this.wave_Finished();
               return;
            }
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 300;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(102);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = false;
         if(param1 == 1)
         {
            _loc4_.num = 80;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 428;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 131;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 409;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 87;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 429;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 124;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 430;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 12;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 91;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 430;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 12;
         }
         _loc4_.base_Experience *= 2;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed *= 0.5;
         _loc4_.freeRoam = true;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_36":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_36":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 45;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 45)
            {
               this.currentWave = 46;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(36 + this.Math.random() * 4);
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 380)
            {
               _loc4_.num = 16;
               _loc4_.move1 = 97;
               _loc4_.move2 = 2;
               _loc4_.move3 = 15;
               _loc4_.move4 = 36;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ew";
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 500)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 70;
                  _loc4_.move2 = 43;
                  _loc4_.move3 = 8;
                  _loc4_.move4 = 19;
                  _loc4_.whoMe = "kx";
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 6;
                  _loc4_.move3 = 2;
                  _loc4_.move4 = 8;
                  _loc4_.whoMe = "kv";
                  _loc4_.numMoves = 4;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Ekans" && _loc4_.name != "Sandshrew")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 880)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 56;
                  _loc4_.move1 = 53;
                  _loc4_.move2 = 96;
                  _loc4_.move3 = 72;
                  _loc4_.move4 = 164;
                  _loc4_.whoMe = "iw";
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 52;
                  _loc4_.move1 = 19;
                  _loc4_.move2 = 130;
                  _loc4_.move3 = 72;
                  _loc4_.move4 = 178;
                  _loc4_.whoMe = "ik";
                  _loc4_.numMoves = 4;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Mankey" && _loc4_.name != "Meowth")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 58;
                  _loc4_.move1 = 19;
                  _loc4_.move2 = 101;
                  _loc4_.move3 = 10;
                  _loc4_.move4 = 43;
                  _loc4_.whoMe = "ib";
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 37;
                  _loc4_.move1 = 10;
                  _loc4_.move2 = 3;
                  _loc4_.move3 = 101;
                  _loc4_.move4 = 4;
                  _loc4_.whoMe = "xv";
                  _loc4_.numMoves = 4;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Growlithe" && _loc4_.name != "Vulpix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.level = 20;
               _loc4_.num = 133;
               _loc4_.move1 = 3;
               _loc4_.move2 = 1;
               _loc4_.move3 = 99;
               _loc4_.move4 = 2;
               _loc4_.whoMe = "exx";
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               if(_loc4_.name != "Eevee")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_37":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_37":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 8;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 8)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
            if(this.turn == 2)
            {
               this.currentWave = 9;
               this.wave_Finished();
               return;
            }
         }
         else if(this.currentWave == 7)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
         }
         else if(this.currentWave == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
         }
         else if(this.currentWave == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
         }
         else if(this.currentWave == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
         }
         else if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
         }
         else if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
         }
         if(this.turn == 2)
         {
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 300;
            this.turn = 0;
            return;
         }
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 143;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 83;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 142;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 245;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 31;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 6)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 127;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 7)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 19;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 8)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.move1 = 179;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Attack *= 0.6;
         _loc4_.base_Special_Attack *= 0.6;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_38":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_38":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 25;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.turn == 4)
         {
            _loc1_ = this.Math.trunc(this.Math.random() * 4 + 1);
            if(_loc1_ == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            }
            else if(_loc1_ == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            }
            else if(_loc1_ == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
            }
            else if(_loc1_ == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
            }
            if(this.currentWave == 25)
            {
               this.currentWave = 26;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 180;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 50)
            {
               _loc4_.num = 50;
               _loc4_.move1 = 6;
               _loc4_.move2 = 2;
               _loc4_.move3 = 5;
               _loc4_.move4 = 74;
               _loc4_.numMoves = 4;
               _loc4_.base_HP *= 12;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ij";
               _loc4_.level = 20;
               if(_loc4_.name != "Diglett")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 80)
            {
               _loc4_.num = 21;
               _loc4_.move1 = 44;
               _loc4_.move2 = 43;
               _loc4_.move3 = 5;
               _loc4_.move4 = 21;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ke";
               _loc4_.base_HP *= 3;
               _loc4_.level = 20;
               if(_loc4_.name != "Spearow")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 95)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 73;
                  _loc4_.move2 = 72;
                  _loc4_.move3 = 19;
                  _loc4_.move4 = 8;
                  _loc4_.whoMe = "kx";
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 46;
                  _loc4_.move2 = 25;
                  _loc4_.move3 = 8;
                  _loc4_.move4 = 2;
                  _loc4_.whoMe = "kv";
                  _loc4_.numMoves = 4;
               }
               _loc4_.base_HP *= 3;
               _loc4_.level = 20;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Ekans" && _loc4_.name != "Sandshrew")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 96;
               _loc4_.move1 = 49;
               _loc4_.move2 = 110;
               _loc4_.move3 = 48;
               _loc4_.move4 = 20;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pw";
               _loc4_.base_HP *= 3;
               _loc4_.level = 20;
               if(_loc4_.name != "Drowzee")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 51;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 37;
            _loc4_.move1 = 207;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Dugtrio")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 24;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 37;
            _loc4_.move1 = 98;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Arbok")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 28;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 37;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Sandslash")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 97;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 37;
            _loc4_.move1 = 209;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Hypno")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 12;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_39":{fields:[{name:"var_389",type:"int",initialize:function(){return (this.Math.random() * 4 + 1)}}],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_39":{constructors:[],run:function(param1){

}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 25;
         this.get_Value(_loc4_);
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(this.var_389 == 4)
            {
               if(param2 <= 20)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_75(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_66(_loc4_);
                  }
               }
               else if(param2 <= 30)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
               }
               else if(param2 <= 35)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
               }
               else if(param2 <= 55)
               {
                  _loc4_ = this.method_74(_loc4_);
               }
               else if(param2 <= 59)
               {
                  _loc4_ = this.method_49(_loc4_);
               }
               else if(param2 <= 74)
               {
                  _loc4_ = this.method_330(_loc4_);
               }
               else if(param2 <= 94)
               {
                  _loc4_ = this.method_117(_loc4_);
               }
               else if(param2 <= 96)
               {
                  _loc4_ = this.method_43(_loc4_);
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_156(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_172(_loc4_);
                  }
               }
            }
            else if(this.var_389 == 3)
            {
               if(param2 <= 20)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_75(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_66(_loc4_);
                  }
               }
               else if(param2 <= 30)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
               }
               else if(param2 <= 35)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
               }
               else if(param2 <= 55)
               {
                  _loc4_ = this.method_74(_loc4_);
               }
               else if(param2 <= 70)
               {
                  _loc4_ = this.method_105(_loc4_);
               }
               else if(param2 <= 77)
               {
                  _loc4_ = this.method_49(_loc4_);
               }
               else if(param2 <= 92)
               {
                  _loc4_ = this.method_375(_loc4_);
               }
               else if(param2 <= 96)
               {
                  _loc4_ = this.method_136(_loc4_);
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_156(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_172(_loc4_);
                  }
               }
            }
            else if(this.var_389 == 2)
            {
               if(param2 <= 20)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_75(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_66(_loc4_);
                  }
               }
               else if(param2 <= 35)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
               }
               else if(param2 <= 55)
               {
                  _loc4_ = this.method_74(_loc4_);
               }
               else if(param2 <= 70)
               {
                  _loc4_ = this.method_105(_loc4_);
               }
               else if(param2 <= 74)
               {
                  _loc4_ = this.method_34(_loc4_);
               }
               else if(param2 <= 94)
               {
                  _loc4_ = this.method_117(_loc4_);
               }
               else if(param2 <= 98)
               {
                  _loc4_ = this.method_43(_loc4_);
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_103(_loc4_);
               }
            }
            else if(this.var_389 == 1)
            {
               if(param2 <= 20)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_75(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_66(_loc4_);
                  }
               }
               else if(param2 <= 30)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
               }
               else if(param2 <= 35)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_38(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_37(_loc4_);
                  }
               }
               else if(param2 <= 55)
               {
                  _loc4_ = this.method_74(_loc4_);
               }
               else if(param2 <= 70)
               {
                  _loc4_ = this.method_105(_loc4_);
               }
               else if(param2 <= 74)
               {
                  _loc4_ = this.method_34(_loc4_);
               }
               else if(param2 <= 94)
               {
                  _loc4_ = this.method_117(_loc4_);
               }
               else if(param2 <= 96)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_103(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_136(_loc4_);
                  }
               }
               else if(param2 <= 100)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_43(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_103(_loc4_);
                  }
               }
            }
         }
         else if(param1 == 1)
         {
            if(this.var_389 == 4)
            {
               _loc4_ = this.method_39(_loc4_);
            }
            else if(this.var_389 == 3)
            {
               _loc4_ = this.method_31(_loc4_);
            }
            else if(this.var_389 == 2)
            {
               _loc4_ = this.method_32(_loc4_);
            }
            else if(this.var_389 == 1)
            {
               _loc4_ = this.method_416(_loc4_);
            }
         }
         _loc4_.base_Experience *= 0;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}},"get_Total_Waves":{constructors:[],run:function(){
return 60;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 60)
            {
               this.currentWave = 60;
               this.wave_Finished();
               return;
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"method_66":{constructors:[],run:function(param1){
param1.num = 29;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "kp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_75":{constructors:[],run:function(param1){
param1.num = 32;
         param1.move1 = 42;
         param1.numMoves = 1;
         param1.whoMe = "xk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_38":{constructors:[],run:function(param1){
param1.num = 30;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "xj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_37":{constructors:[],run:function(param1){
param1.num = 33;
         param1.move1 = 42;
         param1.numMoves = 1;
         param1.whoMe = "xx";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_74":{constructors:[],run:function(param1){
param1.num = 102;
         param1.move1 = 391;
         param1.numMoves = 1;
         param1.whoMe = "ejk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_105":{constructors:[],run:function(param1){
param1.num = 46;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "mw";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_49":{constructors:[],run:function(param1){
param1.num = 47;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "mv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_375":{constructors:[],run:function(param1){
param1.num = 84;
         param1.move1 = 42;
         param1.numMoves = 1;
         param1.whoMe = "bm";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_330":{constructors:[],run:function(param1){
param1.num = 48;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "mb";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_34":{constructors:[],run:function(param1){
param1.num = 49;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "mp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_117":{constructors:[],run:function(param1){
param1.num = 111;
         param1.move1 = 80;
         param1.numMoves = 1;
         param1.whoMe = "eee";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_43":{constructors:[],run:function(param1){
param1.num = 113;
         param1.move1 = 48;
         param1.numMoves = 1;
         param1.whoMe = "eex";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_156":{constructors:[],run:function(param1){
param1.num = 123;
         param1.move1 = 4;
         param1.numMoves = 1;
         param1.whoMe = "ekx";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_172":{constructors:[],run:function(param1){
param1.num = 127;
         param1.move1 = 269;
         param1.numMoves = 1;
         param1.whoMe = "ekv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_136":{constructors:[],run:function(param1){
param1.num = 115;
         param1.move1 = 361;
         param1.numMoves = 1;
         param1.whoMe = "eei";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_103":{constructors:[],run:function(param1){
param1.num = 128;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "ekb";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_39":{constructors:[],run:function(param1){
param1.num = 98;
         param1.move1 = 11;
         param1.numMoves = 1;
         param1.whoMe = "pb";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_31":{constructors:[],run:function(param1){
param1.num = 54;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "im";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_32":{constructors:[],run:function(param1){
param1.num = 79;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "vp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_416":{constructors:[],run:function(param1){
param1.num = 147;
         param1.move1 = 70;
         param1.numMoves = 1;
         param1.whoMe = "emv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}}}},"class_40":{fields:[{name:"var_436",type:"String",initialize:function(){return ("p")}},{name:"var_698",type:"Boolean"},{name:"var_694",type:"Boolean"},{name:"var_705",type:"Boolean"},{name:"var_670",type:"Boolean"},{name:"var_692",type:"Boolean"},{name:"var_687",type:"Boolean"},{name:"whichLevel",type:"level_35"},{name:"var_701",type:"int"}],imports:["finder_Poke_Info","level_35","profile_poke"],constructors:["profile_poke"],methods:{"class_40":{constructors:[],run:function(param1){
this.whichLevel = param1;
         
}},"get_Total_Waves":{constructors:[],run:function(){
return 8;
}},"defeated_Poke":{constructors:[],run:function(param1){
var _loc2_ = this.Math.trunc(0);
         if(param1.num == 9)
         {
            this.var_698 = true;
            _loc2_ = this.Math.trunc(1);
         }
         else if(param1.num == 59)
         {
            this.var_670 = true;
            _loc2_ = this.Math.trunc(1);
         }
         else if(param1.num == 103)
         {
            this.var_692 = true;
            _loc2_ = this.Math.trunc(1);
         }
         else if(param1.num == 112)
         {
            this.var_705 = true;
            _loc2_ = this.Math.trunc(1);
         }
         else if(param1.num == 18)
         {
            this.var_687 = true;
            _loc2_ = this.Math.trunc(1);
         }
         else if(param1.num == 65)
         {
            this.var_694 = true;
            _loc2_ = this.Math.trunc(1);
         }
         if(this.currentWave < 8)
         {
            this.var_701 + _loc2_;
            if(this.var_701 > 3)
            {
               this.whichLevel.var_153 = false;
            }
         }
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
         }
         else if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(14));
         }
         else if(this.currentWave == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
         }
         else if(this.currentWave == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(13));
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
         }
         else if(this.currentWave == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12));
         }
         else if(this.currentWave == 7)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10));
         }
         else if(this.currentWave == 8)
         {
            if(!this.var_698)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
            }
            if(!this.var_687)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
            }
            if(!this.var_705)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
            }
            if(!this.var_692)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
            }
            if(!this.var_670)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            }
            if(!this.var_694)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentWave = 9;
            this.wave_Finished();
            return;
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 300;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(101);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = true;
         if(param1 == 1 || param1 == 2)
         {
            _loc4_.num = 383;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
            if(param1 == 1)
            {
               _loc4_.move1 = 205;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 3 || param1 == 9)
         {
            _loc4_.num = 9;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 165;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 3)
            {
               _loc4_.move1 = 112;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 8 || param1 == 14)
         {
            _loc4_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 83;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 8)
            {
               _loc4_.move1 = 77;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 7 || param1 == 13)
         {
            _loc4_.num = 103;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 110;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 7)
            {
               _loc4_.move1 = 389;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 4 || param1 == 10)
         {
            _loc4_.num = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 146;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 4)
            {
               _loc4_.move1 = 89;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 5 || param1 == 11)
         {
            _loc4_.num = 112;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 65;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 5)
            {
               _loc4_.move1 = 82;
               _loc4_.runAway = false;
            }
         }
         else if(param1 == 6 || param1 == 12)
         {
            _loc4_.num = 59;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 97;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
            if(param1 == 6)
            {
               _loc4_.move1 = 92;
               _loc4_.runAway = false;
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed *= 0.5;
         _loc4_.base_HP *= 3;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_41":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_41":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 60;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 60)
            {
               this.currentWave = 60;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(65 + this.Math.random() * 4);
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 15)
            {
               _loc4_.num = 17;
               _loc4_.move1 = 97;
               _loc4_.move2 = 2;
               _loc4_.move3 = 15;
               _loc4_.move4 = 36;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ev";
               if(_loc4_.name != "Pidgeotto")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 20)
            {
               _loc4_.num = 18;
               _loc4_.move1 = 97;
               _loc4_.move2 = 2;
               _loc4_.move3 = 15;
               _loc4_.move4 = 36;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eb";
               if(_loc4_.name != "Pidgeot")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 40)
            {
               _loc4_.num = 48;
               _loc4_.move1 = 1;
               _loc4_.move2 = 49;
               _loc4_.move3 = 227;
               _loc4_.numMoves = 3;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "mb";
               if(_loc4_.name != "Venonat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 75)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 44;
                  _loc4_.move1 = 107;
                  _loc4_.move2 = 76;
                  _loc4_.move3 = 73;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "mm";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 70;
                  _loc4_.move1 = 16;
                  _loc4_.move2 = 91;
                  _loc4_.move3 = 70;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "vj";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Gloom" && _loc4_.name != "Weepinbell")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 80)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 45;
                  _loc4_.move1 = 107;
                  _loc4_.move2 = 76;
                  _loc4_.move3 = 73;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "mi";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 71;
                  _loc4_.move1 = 16;
                  _loc4_.move2 = 91;
                  _loc4_.move3 = 70;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "ve";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Vileplume" && _loc4_.name != "Victreebel")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.level = 40;
               _loc4_.num = 132;
               _loc4_.move1 = 56;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 3;
               _loc4_.whoMe = "exk";
               if(_loc4_.name != "Ditto")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_42":{fields:[{name:"var_554",type:"String"}],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_42":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         var _loc2_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),2);
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 90;
            this.turn = 0;
            return;
         }
         _loc1_ = this.Math.trunc(this.Math.random() * 5);
         if(_loc1_ == 0)
         {
            _loc2_ = this.Math.trunc(4);
         }
         else if(_loc1_ == 1)
         {
            _loc2_ = this.Math.trunc(1);
         }
         else if(_loc1_ == 2)
         {
            _loc2_ = this.Math.trunc(2);
         }
         else if(_loc1_ == 3)
         {
            _loc2_ = this.Math.trunc(5);
         }
         else if(_loc1_ == 4)
         {
            _loc2_ = this.Math.trunc(3);
         }
         _loc1_ = this.Math.trunc(this.Math.random() * 1000 + 1);
         if(_loc1_ == 999)
         {
            _loc2_ = this.Math.trunc(1);
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,_loc2_),1,"2");
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_),1,"2");
         }
         if(this.turn == 1)
         {
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 180;
            this.turn = 0;
            return;
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         _loc4_.level = 50;
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 1)
            {
               _loc4_.level = 40;
               _loc4_.num = 143;
               _loc4_.move1 = 1;
               _loc4_.move2 = 25;
               _loc4_.numMoves = 2;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "emx";
               if(_loc4_.name != "Snorlax")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 92;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 110;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 104;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 43;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 1)
         {
            _loc4_.num = 93;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 81;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 94;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 309;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 105;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 273;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 143;
            _loc4_.level = 63;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 340;
            _loc4_.move2 = 143;
            _loc4_.move3 = 341;
            _loc4_.move3 = 88;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 10;
         }
         _loc4_.var_107 = true;
         _loc4_.reward *= 2;
         _loc4_.speed /= 1.5;
         _loc4_.base_Experience *= 4;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 2.5;
         _loc4_.base_Defense *= 2.5;
         _loc4_.base_Special_Defense *= 2.5;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_43":{fields:[{name:"var_525",type:"MovieClip"}],imports:["finder_Poke_Info","main","poke","profile_poke","screen_Level","MovieClip"],constructors:["movie_scene_Level_5_brock","profile_poke"],methods:{"class_43":{constructors:["movie_scene_Level_5_brock"],run:function(param1){

         this.var_525 = new this.movie_scene_Level_5_brock();
         this.my_Parent.gfx_BG.addChild(this.var_525);
}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = null;
         if(this.currentWave >= 1 && this.currentWave <= 9)
         {
            _loc1_ = "p";
            if(this.currentWave == 1 || this.currentWave == 3 || this.currentWave == 5 || this.currentWave == 7 || this.currentWave == 9)
            {
               _loc1_ = "2";
            }
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,_loc1_);
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,_loc1_);
               this.currentSetTime = 18;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,_loc1_);
               if(this.currentWave == 9)
               {
                  this.currentWave = -1;
                  this.turn = -1;
                  this.currentSetTime = -1;
                  return;
               }
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 300;
               return;
            }
         }
         else if(this.currentWave == 10)
         {
            if(this.turn == 0)
            {
               this.my_Parent.move_Screen(0,0,1);
               this.currentSetTime = 30;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.gfx_BG.addChild(this.var_525);
               this.var_525.gotoAndStop(2);
               this.currentSetTime = 240;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.gfx_UI.visible = true;
               this.var_525.gotoAndStop(3);
               this.my_Parent.shake = true;
               this.currentSetTime = 240;
            }
            else if(this.turn == 3)
            {
               this.var_525.gotoAndPlay(4);
               this.currentSetTime = 30;
            }
            else if(this.turn == 4)
            {
               this.my_Parent.shake = false;
               this.method_278();
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 18;
            }
            else if(this.turn == 5)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"method_278":{constructors:[],run:function(){
var _loc1_ = null;
         var _loc2_ = null;
         var _loc3_ = this.Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.fightList.length)
         {
            _loc1_ = this.main.playerProfile.fightList[_loc3_];
            _loc2_ = this.my_Parent.get_Tower_By_Profile(_loc1_);
            this.my_Parent.return_Poke(_loc2_);
            this.remove_From_Party(_loc1_);
            _loc3_ = this.Math.trunc(--_loc3_ + 1);
         }
         this.my_Parent.reset_Poke();
}},"remove_From_Party":{constructors:[],run:function(param1){
var _loc2_ = null;
         var _loc3_ = this.Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc2_ = this.main.playerProfile.partyList[_loc3_];
            if(param1 == _loc2_)
            {
               this.main.playerProfile.partyList[_loc3_] = null;
               return;
            }
            _loc3_++;
         }
         this.trace("wave_Level_5_Pewter_Gym, this should not happen!");
}},"wave_Gone":{constructors:[],run:function(){
if(this.currentWave == -1)
         {
            this.my_Parent.gfx_UI.visible = false;
            this.currentWave = 10;
            this.update_Wave(this.currentWave);
            this.turn = 0;
            this.currentSetTime = 1;
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 2)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 14;
            _loc4_.move1 = 14;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Onix")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 27;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 11;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Sandshrew")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 12;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Geodude")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.experience = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_HP *= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_44":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_44":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 45;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.turn == 6)
         {
            _loc1_ = this.Math.trunc((this.currentWave - 1) % 5 + 1);
            switch(_loc1_ - 1)
            {
               case 0:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
                  break;
               case 1:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
                  break;
               case 2:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
                  break;
               case 3:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
                  break;
               case 4:
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
                  if(this.currentWave == 45)
                  {
                     this.currentWave = 46;
                     this.wave_Finished();
                     return;
                  }
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 90;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         var _loc5_ = this.Math.trunc(0);
         if(this.currentWave <= 9)
         {
            _loc5_ = this.Math.trunc(0);
         }
         else if(this.currentWave <= 19)
         {
            _loc5_ = this.Math.trunc(3);
         }
         else if(this.currentWave <= 29)
         {
            _loc5_ = this.Math.trunc(6);
         }
         else if(this.currentWave <= 39)
         {
            _loc5_ = this.Math.trunc(9);
         }
         else if(this.currentWave <= 45)
         {
            _loc5_ = this.Math.trunc(12);
         }
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(15 + this.Math.random() * 4);
               param3 += _loc5_;
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 58)
            {
               _loc4_.num = 16;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ew";
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 68)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 43;
                  _loc4_.move1 = 107;
                  _loc4_.move2 = 76;
                  _loc4_.move3 = 73;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "mx";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 69;
                  _loc4_.move1 = 91;
                  _loc4_.move2 = 16;
                  _loc4_.move3 = 70;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "wp";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Oddish" && _loc4_.name != "Bellsprout")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 78)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 58;
                  _loc4_.move1 = 19;
                  _loc4_.move2 = 101;
                  _loc4_.move3 = 10;
                  _loc4_.move4 = 43;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "ib";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 37;
                  _loc4_.move1 = 10;
                  _loc4_.move2 = 3;
                  _loc4_.move3 = 101;
                  _loc4_.move4 = 4;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "xv";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Growlithe" && _loc4_.name != "Vulpix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 88)
            {
               _loc4_.num = 60;
               _loc4_.move1 = 109;
               _loc4_.move2 = 11;
               _loc4_.move3 = 110;
               _loc4_.move4 = 31;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "wj";
               if(_loc4_.name != "Poliwag")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 98)
            {
               _loc4_.num = 39;
               _loc4_.move1 = 25;
               _loc4_.move2 = 47;
               _loc4_.numMoves = 2;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "xp";
               if(_loc4_.name != "Jigglypuff")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 99)
            {
               _loc4_.num = 63;
               _loc4_.move1 = 116;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "wx";
               if(_loc4_.name != "Abra")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 52;
               _loc4_.move1 = 6;
               _loc4_.move2 = 5;
               _loc4_.numMoves = 2;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ik";
               if(_loc4_.name != "Meowth")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 53;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18 + _loc5_;
            _loc4_.move1 = 6;
            _loc4_.move2 = 5;
            _loc4_.numMoves = 2;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Persian")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.level = 18 + _loc5_;
            if(this.main.playerProfile.currentVersion == 1)
            {
               _loc4_.num = 59;
               _loc4_.move1 = 19;
               _loc4_.move2 = 101;
               _loc4_.move3 = 10;
               _loc4_.move4 = 43;
               _loc4_.numMoves = 4;
            }
            else if(this.main.playerProfile.currentVersion == 2)
            {
               _loc4_.num = 38;
               _loc4_.move1 = 10;
               _loc4_.move2 = 3;
               _loc4_.move3 = 101;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
            }
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.canCapture = false;
            if(_loc4_.name != "Arcanine" && _loc4_.name != "Ninetales")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.level = 18 + _loc5_;
            if(this.main.playerProfile.currentVersion == 1)
            {
               _loc4_.num = 45;
               _loc4_.move1 = 107;
               _loc4_.move2 = 76;
               _loc4_.move3 = 73;
               _loc4_.numMoves = 3;
            }
            else if(this.main.playerProfile.currentVersion == 2)
            {
               _loc4_.num = 71;
               _loc4_.move1 = 91;
               _loc4_.move2 = 16;
               _loc4_.move3 = 70;
               _loc4_.numMoves = 3;
            }
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.canCapture = false;
            if(_loc4_.name != "Vileplume" && _loc4_.name != "Victreebel")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 62;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18 + _loc5_;
            _loc4_.move1 = 109;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Poliwrath")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18 + _loc5_;
            _loc4_.move1 = 1;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Pidgeot")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 3;
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_45":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_45":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 9;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
            this.currentSetTime = 150;
            this.update_Wave(++this.currentWave);
            return;
         }
         if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
            this.currentSetTime = 21;
            if(this.turn == 6)
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 60;
               this.turn = 0;
               return;
            }
         }
         else
         {
            if(this.currentWave == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
               this.currentSetTime = 150;
               this.update_Wave(++this.currentWave);
               return;
            }
            if(this.currentWave == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1);
               this.currentSetTime = 21;
               if(this.turn == 6)
               {
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
            }
            else
            {
               if(this.currentWave == 5)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
                  this.currentSetTime = 150;
                  this.update_Wave(++this.currentWave);
                  return;
               }
               if(this.currentWave == 6)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
                  this.currentSetTime = 21;
                  if(this.turn == 6)
                  {
                     this.update_Wave(++this.currentWave);
                     this.currentSetTime = 150;
                     this.turn = 0;
                     return;
                  }
               }
               else
               {
                  if(this.currentWave == 7)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
                     this.currentSetTime = 150;
                     this.update_Wave(++this.currentWave);
                     return;
                  }
                  if(this.currentWave == 8)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1);
                     this.currentSetTime = 21;
                     if(this.turn == 6)
                     {
                        this.update_Wave(++this.currentWave);
                        this.currentSetTime = 150;
                        this.turn = 0;
                        return;
                     }
                  }
                  else if(this.currentWave == 9)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
                     this.currentSetTime = 300;
                     this.currentWave = 10;
                     this.wave_Finished();
                     return;
                  }
               }
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(param2 <= 35)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(26 + this.Math.random() * 5);
               }
               _loc4_.level = param3;
               _loc4_.num = 19;
               _loc4_.move1 = 12;
               _loc4_.move2 = 4;
               _loc4_.move3 = 1;
               _loc4_.move4 = 3;
               _loc4_.numMoves = 4;
               if(param3 >= 10)
               {
                  _loc4_.move3 = 19;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 70)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(26 + this.Math.random() * 5);
               }
               _loc4_.level = param3;
               _loc4_.num = 21;
               _loc4_.move1 = 42;
               _loc4_.move2 = 5;
               _loc4_.move3 = 43;
               _loc4_.numMoves = 3;
               if(param3 >= 9)
               {
                  _loc4_.numMoves = 4;
                  _loc4_.move4 = 21;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 95)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(28 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.num = 56;
               _loc4_.move1 = 12;
               _loc4_.move2 = 46;
               _loc4_.move3 = 43;
               _loc4_.numMoves = 4;
               _loc4_.move4 = 51;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 100)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(24 + this.Math.random() * 7);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 70;
                  _loc4_.move2 = 43;
                  _loc4_.move3 = 8;
                  _loc4_.numMoves = 3;
                  if(param3 == 12)
                  {
                     _loc4_.move4 = 19;
                     _loc4_.move3 = 71;
                     _loc4_.numMoves = 4;
                  }
                  else if(param3 >= 9)
                  {
                     _loc4_.move4 = 19;
                     _loc4_.numMoves = 4;
                  }
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 6;
                  _loc4_.numMoves = 2;
                  if(param3 >= 9)
                  {
                     _loc4_.move3 = 2;
                     _loc4_.move4 = 8;
                     _loc4_.numMoves = 4;
                  }
                  else if(param3 >= 7)
                  {
                     _loc4_.move3 = 2;
                     _loc4_.numMoves = 3;
                  }
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
         }
         else if(param1 == 3)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(param2 <= 69)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(25 + this.Math.random() * 4);
               }
               _loc4_.level = param3;
               _loc4_.num = 41;
               _loc4_.move1 = 54;
               _loc4_.move2 = 38;
               _loc4_.numMoves = 2;
               if(param3 >= 9)
               {
                  _loc4_.move3 = 74;
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 99)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(25 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 1;
               _loc4_.move3 = 25;
               _loc4_.numMoves = 3;
               if(param3 >= 8)
               {
                  _loc4_.numMoves = 4;
                  _loc4_.move1 = 65;
                  _loc4_.move4 = 64;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
            else if(param2 <= 100)
            {
               _loc4_.level = 26;
               _loc4_.num = 35;
               _loc4_.move1 = 48;
               _loc4_.move2 = 5;
               _loc4_.move3 = 47;
               _loc4_.move4 = 60;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 36;
            _loc4_.move1 = 25;
            _loc4_.move2 = 65;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
            _loc4_.base_Defense *= 3;
            _loc4_.base_Special_Defense *= 4;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 36;
            _loc4_.move1 = 65;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 10;
         }
         _loc4_.canCapture = false;
         _loc4_.reward *= 2;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_Experience *= 2;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_HP *= 5;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_46":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_46":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 45;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.turn == 6)
         {
            if(this.currentWave == 45)
            {
               this.currentWave = 46;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         if(this.turn >= 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         }
         else
         {
            _loc1_ = this.Math.trunc(this.Math.random() * 8 + 1);
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc1_));
         }
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(40);
            }
            _loc4_.level = param3;
            this.get_Value(_loc4_);
            if(param2 <= 333)
            {
               _loc4_.num = 118;
               _loc4_.move1 = 42;
               _loc4_.move2 = 3;
               _loc4_.move3 = 109;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               _loc4_.whoMe = "eeb";
               if(_loc4_.name != "Goldeen")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 666)
            {
               _loc4_.num = 72;
               _loc4_.move1 = 8;
               _loc4_.move2 = 38;
               _loc4_.move3 = 201;
               _loc4_.move4 = 73;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               _loc4_.whoMe = "vk";
               if(_loc4_.name != "Tentacool")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 98;
               _loc4_.move1 = 64;
               _loc4_.move2 = 11;
               _loc4_.move3 = 269;
               _loc4_.move4 = 43;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               _loc4_.whoMe = "pb";
               if(_loc4_.name != "Krabby")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 131;
               _loc4_.move1 = 47;
               _loc4_.move2 = 5;
               _loc4_.move3 = 31;
               _loc4_.move4 = 81;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               _loc4_.whoMe = "exe";
               if(_loc4_.name != "Lapras")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 119;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 261;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 73;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 197;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 99;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 64;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 131;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 111;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 1)
         {
            _loc4_.num = 130;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 43;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 62;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 236;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 18;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 2;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 22;
            _loc4_.level = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 5;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_47":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_47":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 9;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
            this.currentSetTime = 150;
            this.update_Wave(++this.currentWave);
            return;
         }
         if(this.currentWave == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
            this.currentSetTime = 21;
            if(this.turn == 6)
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 60;
               this.turn = 0;
               return;
            }
         }
         else
         {
            if(this.currentWave == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
               this.currentSetTime = 150;
               this.update_Wave(++this.currentWave);
               return;
            }
            if(this.currentWave == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1);
               this.currentSetTime = 21;
               if(this.turn == 6)
               {
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
            }
            else
            {
               if(this.currentWave == 5)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
                  this.currentSetTime = 150;
                  this.update_Wave(++this.currentWave);
                  return;
               }
               if(this.currentWave == 6)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
                  this.currentSetTime = 21;
                  if(this.turn == 6)
                  {
                     this.update_Wave(++this.currentWave);
                     this.currentSetTime = 150;
                     this.turn = 0;
                     return;
                  }
               }
               else
               {
                  if(this.currentWave == 7)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
                     this.currentSetTime = 150;
                     this.update_Wave(++this.currentWave);
                     return;
                  }
                  if(this.currentWave == 8)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1);
                     this.currentSetTime = 21;
                     if(this.turn == 6)
                     {
                        this.update_Wave(++this.currentWave);
                        this.currentSetTime = 150;
                        this.turn = 0;
                        return;
                     }
                  }
                  else if(this.currentWave == 9)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1.5);
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5,"2");
                     this.currentSetTime = 300;
                     this.currentWave = 10;
                     this.wave_Finished();
                     return;
                  }
               }
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 35)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(8 + this.Math.random() * 5);
               }
               _loc4_.level = param3;
               _loc4_.num = 19;
               _loc4_.move1 = 12;
               _loc4_.move2 = 4;
               _loc4_.move3 = 1;
               _loc4_.move4 = 3;
               _loc4_.whoMe = "ep";
               _loc4_.numMoves = 4;
               if(param3 >= 10)
               {
                  _loc4_.move3 = 19;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Rattata")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 70)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(8 + this.Math.random() * 5);
               }
               _loc4_.level = param3;
               _loc4_.num = 21;
               _loc4_.move1 = 42;
               _loc4_.move2 = 5;
               _loc4_.move3 = 43;
               _loc4_.whoMe = "ke";
               _loc4_.numMoves = 3;
               if(param3 >= 9)
               {
                  _loc4_.numMoves = 4;
                  _loc4_.move4 = 21;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Spearow")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 95)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(10 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.num = 56;
               _loc4_.move1 = 12;
               _loc4_.move2 = 46;
               _loc4_.move3 = 43;
               _loc4_.numMoves = 4;
               _loc4_.move4 = 51;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "iw";
               if(_loc4_.name != "Mankey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(6 + this.Math.random() * 7);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 23;
                  _loc4_.move1 = 70;
                  _loc4_.move2 = 43;
                  _loc4_.move3 = 8;
                  _loc4_.numMoves = 3;
                  if(param3 == 12)
                  {
                     _loc4_.move4 = 19;
                     _loc4_.move3 = 71;
                     _loc4_.numMoves = 4;
                  }
                  else if(param3 >= 9)
                  {
                     _loc4_.move4 = 19;
                     _loc4_.numMoves = 4;
                  }
                  _loc4_.whoMe = "kx";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 27;
                  _loc4_.move1 = 25;
                  _loc4_.move2 = 6;
                  _loc4_.numMoves = 2;
                  if(param3 >= 9)
                  {
                     _loc4_.move3 = 2;
                     _loc4_.move4 = 8;
                     _loc4_.numMoves = 4;
                  }
                  else if(param3 >= 7)
                  {
                     _loc4_.move3 = 2;
                     _loc4_.numMoves = 3;
                  }
                  _loc4_.whoMe = "kv";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Ekans" && _loc4_.name != "Sandshrew")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 3)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(param2 <= 69)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 4);
               }
               _loc4_.level = param3;
               _loc4_.num = 41;
               _loc4_.move1 = 54;
               _loc4_.move2 = 38;
               _loc4_.whoMe = "me";
               _loc4_.numMoves = 2;
               if(param3 >= 9)
               {
                  _loc4_.move3 = 74;
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 99)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 1;
               _loc4_.move3 = 25;
               _loc4_.whoMe = "vm";
               _loc4_.numMoves = 3;
               if(param3 >= 8)
               {
                  _loc4_.numMoves = 4;
                  _loc4_.move1 = 65;
                  _loc4_.move4 = 64;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.level = 8;
               _loc4_.num = 35;
               _loc4_.move1 = 48;
               _loc4_.move2 = 5;
               _loc4_.move3 = 47;
               _loc4_.move4 = 60;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "xi";
               if(_loc4_.name != "Clefairy")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 25;
            _loc4_.move2 = 65;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
            if(_loc4_.name != "Geodude")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 18;
            _loc4_.move1 = 65;
            _loc4_.move2 = 25;
            _loc4_.move3 = 64;
            _loc4_.move4 = 66;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Geodude")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 2;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_48":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_48":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
            this.currentSetTime = 30;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
            this.currentSetTime = 30;
         }
         else if(this.turn == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentSetTime = 18;
         }
         else if(this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            this.currentSetTime = 60;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 10;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 7;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Caterpie")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 13;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 8;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Weedle")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 14;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 14;
            _loc4_.move2 = 1;
            _loc4_.numMoves = 2;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Kakuna")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 11;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 14;
            _loc4_.move2 = 13;
            _loc4_.numMoves = 2;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Metapod")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_49":{fields:[],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_49":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         if(this.turn == 6)
         {
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            _loc1_ = this.Math.trunc(this.Math.random() * 3 + 1);
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc1_),1,"2");
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(91);
         _loc4_.level = param3;
         if(param1 == 1)
         {
            _loc4_.num = 142;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 19;
            _loc4_.whoMe = "pje";
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 139;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 68;
            _loc4_.whoMe = "pje";
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 141;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 378;
            _loc4_.whoMe = "pje";
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
         }
         else if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            param3 = this.Math.trunc(80 + this.Math.random() * 4);
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 35)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 109;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 1;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "ejp";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 88;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 48;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "bb";
               }
            }
            else if(param2 <= 45)
            {
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 110;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 1;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "eej";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 89;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 48;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "bp";
               }
            }
            else if(param2 <= 51)
            {
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 109;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 1;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "ejp";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 88;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 48;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "bb";
               }
            }
            else if(param2 <= 55)
            {
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 110;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 1;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "eej";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 89;
                  _loc4_.move1 = 208;
                  _loc4_.move2 = 48;
                  _loc4_.numMoves = 2;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "bp";
               }
            }
            else if(param2 <= 70)
            {
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 37;
                  _loc4_.move1 = 10;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "xv";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 58;
                  _loc4_.move1 = 19;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "ib";
               }
            }
            else if(param2 <= 95)
            {
               _loc4_.num = 77;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vv";
            }
            else if(param2 <= 100)
            {
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 126;
                  _loc4_.move1 = 10;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "ekw";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 77;
                  _loc4_.move1 = 1;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "vv";
               }
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.speed *= 0.7;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 7;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_50":{fields:[{name:"var_432",type:"Boolean"},{name:"var_434",type:"Boolean"}],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_50":{constructors:[],run:function(param1){

         this.var_432 = this.method_112();
         this.var_434 = this.method_82();
}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"defeated_Poke":{constructors:[],run:function(param1){
if(this.check_Achievement_2(param1))
         {
            this.my_Parent.show_Achievement_Popup(2);
         }
}},"method_82":{constructors:[],run:function(){
if(this.main.playerProfile.getItemValue(8) != 0)
         {
            return true;
         }
         return false;
}},"method_112":{constructors:[],run:function(){
if(this.main.playerProfile.getItemValue(6) != 0)
         {
            return true;
         }
         return false;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         _loc1_ = this.Math.trunc(6);
         var _loc2_ = this.Math.trunc(this.Math.random() * 3 + 6);
         if(this.currentWave == 1 || this.currentWave == 3 || this.currentWave == 5)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = 60;
            }
            else
            {
               if(this.turn == _loc1_)
               {
                  if(this.var_434)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_));
                  }
                  else if(this.var_432)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
                  }
                  else
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
                  }
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 30;
            }
         }
         else if(this.currentWave == 2 || this.currentWave == 4 || this.currentWave == 6)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.currentSetTime = 60;
            }
            else
            {
               if(this.turn == _loc1_)
               {
                  if(this.var_434)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_),1,"2");
                  }
                  else if(this.var_432)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
                  }
                  else
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
                  }
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
               this.currentSetTime = 30;
            }
         }
         else if(this.currentWave == 7 || this.currentWave == 9 || this.currentWave == 11)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = 60;
            }
            else
            {
               if(this.turn == _loc1_)
               {
                  if(this.var_434)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_));
                  }
                  else if(this.var_432)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
                  }
                  else
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
                  }
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 30;
            }
         }
         else if(this.currentWave == 8 || this.currentWave == 10 || this.currentWave == 12)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"2");
               this.currentSetTime = 60;
            }
            else
            {
               if(this.turn == _loc1_)
               {
                  if(this.var_434)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_),1,"2");
                  }
                  else if(this.var_432)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
                  }
                  else
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
                  }
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
               this.currentSetTime = 30;
            }
         }
         else if(this.currentWave == 13 || this.currentWave == 15 || this.currentWave == 17)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 60;
            }
            else
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 30;
               if(this.turn == _loc1_)
               {
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
            }
         }
         else if(this.currentWave == 14 || this.currentWave == 16 || this.currentWave == 18)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"2");
               this.currentSetTime = 60;
            }
            else
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,"2");
               this.currentSetTime = 30;
               if(this.turn == _loc1_)
               {
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 150;
                  this.turn = 0;
                  return;
               }
            }
         }
         else
         {
            if(this.currentWave == 19)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1.5);
               this.currentSetTime = 300;
               this.turn = 0;
               this.update_Wave(++this.currentWave);
               return;
            }
            if(this.currentWave == 20)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1.5,"2");
               this.currentSetTime = 300;
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 200 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 55)
            {
               _loc4_.level = 12;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 43;
                  _loc4_.move1 = 107;
                  _loc4_.move2 = 76;
                  _loc4_.move3 = 73;
                  _loc4_.whoMe = "mx";
                  _loc4_.numMoves = 3;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 69;
                  _loc4_.move1 = 91;
                  _loc4_.move2 = 16;
                  _loc4_.move3 = 70;
                  _loc4_.whoMe = "wp";
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Oddish" && _loc4_.name != "Bellsprout")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 104)
            {
               _loc4_.level = 7;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 13;
                  _loc4_.move1 = 8;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ex";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 10;
                  _loc4_.move1 = 1;
                  _loc4_.move2 = 7;
                  _loc4_.numMoves = 2;
                  _loc4_.whoMe = "ej";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Weedle" && _loc4_.name != "Caterpie")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 152)
            {
               _loc4_.level = 10;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 14;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 8;
                  _loc4_.move3 = 7;
                  _loc4_.whoMe = "em";
                  _loc4_.numMoves = 3;
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 11;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 1;
                  _loc4_.move3 = 7;
                  _loc4_.whoMe = "ee";
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Kakuna" && _loc4_.name != "Metapod")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 199)
            {
               _loc4_.level = 15;
               _loc4_.num = 16;
               _loc4_.move1 = 1;
               _loc4_.move2 = 2;
               _loc4_.move3 = 15;
               _loc4_.move4 = 4;
               _loc4_.numMoves = 4;
               _loc4_.whoMe = "ew";
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 200)
            {
               _loc4_.level = 10;
               _loc4_.num = 63;
               _loc4_.move1 = 116;
               _loc4_.numMoves = 1;
               _loc4_.whoMe = "wx";
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Abra")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 116;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 97;
            _loc4_.move2 = 12;
            _loc4_.move3 = 112;
            _loc4_.move4 = 31;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 2;
            _loc4_.base_Defense *= 2;
            if(_loc4_.name != "Horsea")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 90;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 83;
            _loc4_.move2 = 1;
            _loc4_.move3 = 38;
            _loc4_.move4 = 43;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
            if(_loc4_.name != "Shellder")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 118;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 109;
            _loc4_.move2 = 42;
            _loc4_.move3 = 93;
            _loc4_.move4 = 3;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 7;
            if(_loc4_.name != "Goldeen")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 120;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 22;
            _loc4_.move1 = 115;
            _loc4_.move2 = 14;
            _loc4_.move3 = 31;
            _loc4_.move4 = 32;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
            _loc4_.base_Special_Defense *= 2;
            if(_loc4_.name != "Staryu")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 121;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 115;
            _loc4_.move2 = 14;
            _loc4_.move3 = 31;
            _loc4_.move4 = 32;
            _loc4_.numMoves = 4;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
            _loc4_.base_Defense *= 2;
            if(_loc4_.name != "Starmie")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 6)
         {
            _loc4_.num = 129;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 141;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "ekp";
            if(_loc4_.name != "Magikarp")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 7)
         {
            _loc4_.num = 98;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 269;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "pb";
            if(_loc4_.name != "Krabby")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 8)
         {
            _loc4_.num = 54;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 20;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.whoMe = "im";
            if(_loc4_.name != "Psyduck")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 2;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_Special_Defense *= 3;
         _loc4_.base_HP *= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_51":{fields:[{name:"var_389",type:"int",initialize:function(){return (this.Math.random() * 3 + 1)}}],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_51":{constructors:[],run:function(param1){

}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 102;
         _loc4_.runAway = true;
         _loc4_.freeRoam = true;
         this.get_Value(_loc4_);
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            _loc4_.level = 86 + this.Math.random() * 4;
            if(this.var_389 == 3)
            {
               if(param2 <= 170)
               {
                  _loc4_ = this.method_65(_loc4_);
               }
               else if(param2 <= 330)
               {
                  _loc4_ = this.method_160(_loc4_);
               }
               else if(param2 <= 470)
               {
                  _loc4_ = this.method_126(_loc4_);
               }
               else if(param2 <= 510)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_139(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_168(_loc4_);
                  }
               }
               else if(param2 <= 630)
               {
                  _loc4_ = this.method_49(_loc4_);
               }
               else if(param2 <= 750)
               {
                  _loc4_ = this.method_145(_loc4_);
               }
               else if(param2 <= 870)
               {
                  _loc4_ = this.method_43(_loc4_);
               }
               else if(param2 <= 990)
               {
                  _loc4_ = this.method_96(_loc4_);
               }
               else if(param2 <= 995)
               {
                  _loc4_ = this.method_403(_loc4_);
               }
               else if(param2 <= 1000)
               {
                  _loc4_ = this.method_196(_loc4_);
               }
            }
            else if(this.var_389 == 2)
            {
               if(param2 <= 160)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 340)
               {
                  _loc4_ = this.method_316(_loc4_);
               }
               else if(param2 <= 500)
               {
                  _loc4_ = this.method_251(_loc4_);
               }
               else if(param2 <= 560)
               {
                  if(this.main.playerProfile.currentVersion == 1)
                  {
                     _loc4_ = this.method_139(_loc4_);
                  }
                  else if(this.main.playerProfile.currentVersion == 2)
                  {
                     _loc4_ = this.method_168(_loc4_);
                  }
               }
               else if(param2 <= 620)
               {
                  _loc4_ = this.method_49(_loc4_);
               }
               else if(param2 <= 680)
               {
                  _loc4_ = this.method_145(_loc4_);
               }
               else if(param2 <= 780)
               {
                  _loc4_ = this.method_34(_loc4_);
               }
               else if(param2 <= 880)
               {
                  _loc4_ = this.method_133(_loc4_);
               }
               else if(param2 <= 940)
               {
                  _loc4_ = this.method_162(_loc4_);
               }
               else if(param2 <= 1000)
               {
                  _loc4_ = this.method_96(_loc4_);
               }
            }
            else if(this.var_389 == 1)
            {
               if(param2 <= 200)
               {
                  _loc4_ = this.method_34(_loc4_);
               }
               else if(param2 <= 400)
               {
                  _loc4_ = this.method_133(_loc4_);
               }
               else if(param2 <= 480)
               {
                  _loc4_ = this.method_162(_loc4_);
               }
               else if(param2 <= 600)
               {
                  _loc4_ = this.method_126(_loc4_);
               }
               else if(param2 <= 720)
               {
                  _loc4_ = this.method_65(_loc4_);
               }
               else if(param2 <= 800)
               {
                  _loc4_ = this.method_160(_loc4_);
               }
               else if(param2 <= 880)
               {
                  _loc4_ = this.method_257(_loc4_);
               }
               else if(param2 <= 920)
               {
                  _loc4_ = this.method_43(_loc4_);
               }
               else if(param2 <= 1000)
               {
                  _loc4_ = this.method_96(_loc4_);
               }
            }
         }
         _loc4_.base_Experience *= 2;
         _loc4_.speed *= 0.6;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}},"get_Total_Waves":{constructors:[],run:function(){
return 40;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 40)
            {
               this.currentWave = 41;
               this.wave_Finished();
               return;
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"method_29":{constructors:[],run:function(param1){
param1.num = 42;
         param1.move1 = 54;
         param1.numMoves = 1;
         param1.whoMe = "mk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_65":{constructors:[],run:function(param1){
param1.num = 105;
         param1.move1 = 312;
         param1.numMoves = 1;
         param1.whoMe = "eji";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_34":{constructors:[],run:function(param1){
param1.num = 49;
         param1.move1 = 134;
         param1.numMoves = 1;
         param1.whoMe = "mp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_43":{constructors:[],run:function(param1){
param1.num = 113;
         param1.move1 = 48;
         param1.numMoves = 1;
         param1.whoMe = "eex";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_49":{constructors:[],run:function(param1){
param1.num = 47;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "mv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_133":{constructors:[],run:function(param1){
param1.num = 85;
         param1.move1 = 42;
         param1.numMoves = 1;
         param1.whoMe = "bi";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_162":{constructors:[],run:function(param1){
param1.num = 64;
         param1.move1 = 20;
         param1.numMoves = 1;
         param1.whoMe = "wm";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_126":{constructors:[],run:function(param1){
param1.num = 101;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "eje";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_160":{constructors:[],run:function(param1){
param1.num = 112;
         param1.move1 = 80;
         param1.numMoves = 1;
         param1.whoMe = "eek";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_257":{constructors:[],run:function(param1){
param1.num = 40;
         param1.move1 = 61;
         param1.numMoves = 1;
         param1.whoMe = "mj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_96":{constructors:[],run:function(param1){
param1.num = 132;
         param1.move1 = 56;
         param1.numMoves = 1;
         param1.whoMe = "exk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_316":{constructors:[],run:function(param1){
param1.num = 97;
         param1.move1 = 48;
         param1.numMoves = 1;
         param1.whoMe = "pv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_251":{constructors:[],run:function(param1){
param1.num = 82;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "bk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_168":{constructors:[],run:function(param1){
param1.num = 28;
         param1.move1 = 6;
         param1.numMoves = 1;
         param1.whoMe = "kb";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_145":{constructors:[],run:function(param1){
param1.num = 26;
         param1.move1 = 22;
         param1.numMoves = 1;
         param1.whoMe = "kw";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_139":{constructors:[],run:function(param1){
param1.num = 24;
         param1.move1 = 8;
         param1.numMoves = 1;
         param1.whoMe = "km";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_403":{constructors:[],run:function(param1){
param1.num = 150;
         param1.move1 = 20;
         param1.numMoves = 1;
         param1.whoMe = "eij";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_196":{constructors:[],run:function(param1){
param1.num = 151;
         param1.move1 = 48;
         param1.numMoves = 1;
         param1.whoMe = "eie";
         param1.shiny = 0;
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}}}},"class_52":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_52":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 60;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 60)
            {
               this.currentWave = 60;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 10 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(85 + this.Math.random() * 4);
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 1)
            {
               _loc4_.num = 72;
               _loc4_.move1 = 8;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vk";
               if(_loc4_.name != "Tentacool")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 2)
            {
               _loc4_.num = 129;
               _loc4_.move1 = 141;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ekp";
               if(_loc4_.name != "Magikarp")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 3)
            {
               _loc4_.num = 60;
               _loc4_.move1 = 109;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "wj";
               if(_loc4_.name != "Poliwag")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 4)
            {
               _loc4_.num = 118;
               _loc4_.move1 = 42;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eeb";
               if(_loc4_.name != "Goldeen")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 5)
            {
               _loc4_.num = 90;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pj";
               if(_loc4_.name != "Shellder")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 6)
            {
               _loc4_.num = 116;
               _loc4_.move1 = 11;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eew";
               if(_loc4_.name != "Horsea")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 7)
            {
               _loc4_.num = 120;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ekj";
               if(_loc4_.name != "Staryu")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 8)
            {
               _loc4_.num = 20;
               _loc4_.move1 = 4;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "kj";
               if(_loc4_.name != "Raticate")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 10)
            {
               _loc4_.num = 114;
               _loc4_.move1 = 16;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eem";
               if(_loc4_.name != "Tangela")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 9)
            {
               _loc4_.num = 18;
               _loc4_.move1 = 75;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eb";
               if(_loc4_.name != "Pidgeot")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 7;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_53":{fields:[{name:"var_111",type:"int"},{name:"var_436",type:"String",initialize:function(){return ("p")}}],imports:["finder_Poke_Info","main","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_53":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.var_111 = this.Math.random() * 1005 + 1;
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,this.var_111),1,this.var_436);
            this.currentSetTime = 21;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,this.var_111),1,this.var_436);
            this.currentSetTime = 21;
         }
         else if(this.turn == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,this.var_111),1,this.var_436);
            this.currentSetTime = 21;
         }
         else if(this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,this.var_111),1,this.var_436);
            this.currentSetTime = 21;
         }
         else if(this.turn == 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,this.var_111),1,this.var_436);
            if(this.currentWave == 30)
            {
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.turn = 0;
            if(this.var_436 == "p")
            {
               this.var_436 = "2";
            }
            else
            {
               this.var_436 = "p";
            }
            this.currentSetTime = 30;
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1005 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 540)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 11;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 7;
                  _loc4_.move3 = 1;
                  _loc4_.whoMe = "ee";
                  _loc4_.numMoves = 3;
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 14;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 7;
                  _loc4_.move3 = 8;
                  _loc4_.whoMe = "em";
                  _loc4_.numMoves = 3;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Metapod" && _loc4_.name != "Kakuna")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 890)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(13 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 12;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 37;
                  _loc4_.move3 = 24;
                  _loc4_.move4 = 20;
                  _loc4_.whoMe = "ek";
                  _loc4_.numMoves = 4;
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 15;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 21;
                  _loc4_.move3 = 7;
                  _loc4_.move4 = 12;
                  _loc4_.whoMe = "ei";
                  _loc4_.numMoves = 4;
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Butterfree" && _loc4_.name != "Beedrill")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 940)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(7 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 11;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 7;
                  _loc4_.move3 = 1;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "ee";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 14;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 7;
                  _loc4_.move3 = 8;
                  _loc4_.numMoves = 3;
                  _loc4_.whoMe = "em";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Metapod" && _loc4_.name != "Kakuna")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 990)
            {
               if(!param3)
               {
                  param3 = this.Math.trunc(13 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 12;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 37;
                  _loc4_.move3 = 24;
                  _loc4_.move4 = 20;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "ek";
               }
               else if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 15;
                  _loc4_.move1 = 14;
                  _loc4_.move2 = 21;
                  _loc4_.move3 = 7;
                  _loc4_.move4 = 12;
                  _loc4_.numMoves = 4;
                  _loc4_.whoMe = "ei";
               }
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(_loc4_.name != "Butterfree" && _loc4_.name != "Beedrill")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 25;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(10 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 5;
               _loc4_.move2 = 22;
               _loc4_.move3 = 3;
               _loc4_.move4 = 23;
               _loc4_.numMoves = 4;
               _loc4_.whoMe = "ki";
               if(_loc4_.name != "Pikachu")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1005)
            {
               _loc4_.num = 46;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               if(!param3)
               {
                  param3 = this.Math.trunc(5 + this.Math.random() * 3);
               }
               _loc4_.level = param3;
               _loc4_.move1 = 6;
               _loc4_.numMoves = 1;
               if(_loc4_.level == 6)
               {
                  _loc4_.move2 = 37;
                  _loc4_.numMoves = 2;
               }
               else if(_loc4_.level == 7)
               {
                  _loc4_.move2 = 37;
                  _loc4_.move3 = 24;
                  _loc4_.numMoves = 3;
               }
               _loc4_.whoMe = "mw";
               if(_loc4_.name != "Paras")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.experience = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_HP *= 5;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_54":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_54":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 9;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3);
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 2)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 3)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 4)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 5)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3);
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 6)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 7)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(11));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 8)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 9)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 75;
         _loc4_.runAway = false;
         if(param1 == 6)
         {
            _loc4_.num = 89;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 208;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 88;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 208;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 109;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 208;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 110;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 208;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 24;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 188;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 7;
         }
         else if(param1 == 9)
         {
            _loc4_.num = 28;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 207;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 7;
         }
         else if(param1 == 11)
         {
            _loc4_.num = 96;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.var_107 = true;
            _loc4_.base_Special_Attack *= 0.3;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
         }
         else if(param1 == 12)
         {
            _loc4_.num = 97;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.var_107 = true;
            _loc4_.base_Special_Attack *= 0.3;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 10)
         {
            _loc4_.num = 64;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.numMoves = 1;
            _loc4_.var_107 = true;
            _loc4_.base_Special_Attack *= 0.3;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 49;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 54;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 48;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 1;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 2;
            _loc4_.base_Defense *= 1;
            _loc4_.base_Special_Defense *= 1;
         }
         else if(param1 == 1)
         {
            _loc4_.level = 81;
            _loc4_.num = 89;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 380;
            _loc4_.numMoves = 1;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 1000;
            _loc4_.base_Defense *= 1000;
            _loc4_.base_Special_Defense *= 1000;
            _loc4_.var_490 = true;
            _loc4_.freeRoam = false;
         }
         _loc4_.whoMe = "pje";
         _loc4_.canCapture = false;
         _loc4_.base_Experience *= 1.5;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_55":{fields:[{name:"var_554",type:"String"}],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_55":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
var _loc1_ = this.Math.trunc(0);
         var _loc2_ = this.Math.trunc(0);
         var _loc3_ = this.Math.trunc(0);
         if(this.turn == 0)
         {
            _loc1_ = this.Math.trunc(this.Math.random() * 5);
            if(_loc1_ == 0)
            {
               _loc2_ = this.Math.trunc(4);
            }
            else if(_loc1_ == 1)
            {
               _loc2_ = this.Math.trunc(1);
            }
            else if(_loc1_ == 2)
            {
               _loc2_ = this.Math.trunc(2);
            }
            else if(_loc1_ == 3)
            {
               _loc2_ = this.Math.trunc(5);
            }
            else if(_loc1_ == 4)
            {
               _loc2_ = this.Math.trunc(3);
            }
            _loc3_ = this.Math.trunc(this.Math.random() * 3);
            this.var_554 = "p";
            if(_loc3_ == 0)
            {
               this.var_554 = "1";
            }
            else if(_loc3_ == 1)
            {
               this.var_554 = "2";
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(_loc2_),1,this.var_554);
         }
         else if(this.turn <= 4)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0),1,this.var_554);
         }
         if(this.turn != 4)
         {
            this.currentSetTime = 21;
            this.turn = this.turn + 1;
            return;
         }
         if(this.currentWave == 30)
         {
            this.currentWave = 31;
            this.wave_Finished();
            return;
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 90;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         _loc4_.level = 53;
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 99)
            {
               _loc4_.level = 40;
               _loc4_.num = 92;
               _loc4_.move1 = 110;
               _loc4_.move2 = 119;
               _loc4_.numMoves = 2;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pk";
               if(_loc4_.name != "Gastly")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.level = 40;
               _loc4_.num = 104;
               _loc4_.move1 = 43;
               _loc4_.move2 = 5;
               _loc4_.move3 = 312;
               _loc4_.move4 = 216;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.base_HP *= 2;
               _loc4_.whoMe = "ejm";
               if(_loc4_.name != "Cubone")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 92;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 110;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 104;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 43;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 1)
         {
            _loc4_.num = 93;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 81;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 94;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 309;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 105;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 273;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
         }
         _loc4_.var_107 = true;
         _loc4_.reward *= 2;
         _loc4_.speed /= 1.5;
         _loc4_.base_Experience *= 2;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 2.5;
         _loc4_.base_Defense *= 2.5;
         _loc4_.base_Special_Defense *= 2.5;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_56":{fields:[{name:"var_389",type:"int",initialize:function(){return (this.Math.random() * 3 + 1)}},{name:"level",type:"level_39"},{name:"var_523",type:"int"}],imports:["finder_Poke_Info","level_39","main","profile_poke"],constructors:["profile_poke"],methods:{"class_56":{constructors:[],run:function(param1){
this.level = param1;
         
}},"defeated_Poke":{constructors:[],run:function(param1){
var _loc2_ = false;
         if(param1.num == 146)
         {
            if(this.var_523 == 0 && !this.main.playerProfile.haveThisExtraInfo(26))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 1 && !this.main.playerProfile.haveThisExtraInfo(27))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 2 && !this.main.playerProfile.haveThisExtraInfo(28))
            {
               _loc2_ = true;
            }
            this.level.var_651 = _loc2_;
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         _loc4_.level = 102;
         _loc4_.runAway = true;
         _loc4_.freeRoam = true;
         this.get_Value(_loc4_);
         if(param1 == 145)
         {
            _loc4_ = this.method_223(_loc4_);
         }
         else if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            _loc4_.level = 80 + this.Math.random() * 4;
            if(this.var_389 == 3)
            {
               if(param2 <= 15)
               {
                  _loc4_ = this.method_47(_loc4_);
               }
               else if(param2 <= 20)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 40)
               {
                  _loc4_ = this.method_84(_loc4_);
               }
               else if(param2 <= 44)
               {
                  _loc4_ = this.method_101(_loc4_);
               }
               else if(param2 <= 64)
               {
                  _loc4_ = this.method_85(_loc4_);
               }
               else if(param2 <= 68)
               {
                  _loc4_ = this.method_109(_loc4_);
               }
               else if(param2 <= 98)
               {
                  _loc4_ = this.method_104(_loc4_);
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_65(_loc4_);
               }
            }
            else if(this.var_389 == 2)
            {
               if(param2 <= 15)
               {
                  _loc4_ = this.method_47(_loc4_);
               }
               else if(param2 <= 20)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 40)
               {
                  _loc4_ = this.method_84(_loc4_);
               }
               else if(param2 <= 45)
               {
                  _loc4_ = this.method_101(_loc4_);
               }
               else if(param2 <= 65)
               {
                  _loc4_ = this.method_85(_loc4_);
               }
               else if(param2 <= 70)
               {
                  _loc4_ = this.method_109(_loc4_);
               }
               else if(param2 <= 95)
               {
                  _loc4_ = this.method_104(_loc4_);
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_65(_loc4_);
               }
            }
            else if(this.var_389 == 1)
            {
               if(param2 <= 15)
               {
                  _loc4_ = this.method_47(_loc4_);
               }
               else if(param2 <= 20)
               {
                  _loc4_ = this.method_29(_loc4_);
               }
               else if(param2 <= 40)
               {
                  _loc4_ = this.method_84(_loc4_);
               }
               else if(param2 <= 45)
               {
                  _loc4_ = this.method_101(_loc4_);
               }
               else if(param2 <= 50)
               {
                  _loc4_ = this.method_85(_loc4_);
               }
               else if(param2 <= 70)
               {
                  _loc4_ = this.method_109(_loc4_);
               }
               else if(param2 <= 90)
               {
                  _loc4_ = this.method_104(_loc4_);
               }
               else if(param2 <= 100)
               {
                  _loc4_ = this.method_34(_loc4_);
               }
            }
         }
         _loc4_.base_Experience *= 1.7;
         _loc4_.speed *= 0.6;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 30)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            if(this.currentWave == 1 && this.method_390())
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(145));
            }
            else
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"method_390":{constructors:[],run:function(){
var _loc3_ = this.Math.trunc(0);
         var _loc5_ = null;
         var _loc6_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         var _loc2_ = this.Math.trunc(0);
         var _loc4_ = this.my_Parent.send_Msg_Public("sponsor");
         _loc3_ = this.Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_ && (_loc4_ == "hacked" || _loc5_.myTag != "h") && _loc5_.is_Type(4) && _loc5_.level == 100)
            {
               _loc6_++;
               if(_loc5_.shiny == 2)
               {
                  _loc2_++;
               }
               else if(_loc5_.shiny == 1)
               {
                  _loc1_++;
               }
            }
            _loc3_++;
         }
         if(_loc6_ == 6)
         {
            if(_loc1_ == 6)
            {
               this.var_523 = 1;
            }
            else if(_loc2_ == 6)
            {
               this.var_523 = 2;
            }
            else
            {
               this.var_523 = 0;
            }
            return true;
         }
         return false;
}},"method_223":{constructors:[],run:function(param1){
param1.num = 146;
         param1.move1 = 10;
         param1.numMoves = 1;
         param1.whoMe = "pj";
         this.finder_Poke_Info.get_Poke_Info(param1);
         param1.base_HP *= 10;
         param1.canCapture = false;
         param1.runAway = false;
         param1.freeRoam = false;
         param1.shiny = 0;
         return param1;
}},"method_34":{constructors:[],run:function(param1){
param1.num = 49;
         param1.move1 = 134;
         param1.numMoves = 1;
         param1.whoMe = "mp";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_47":{constructors:[],run:function(param1){
param1.num = 41;
         param1.move1 = 54;
         param1.numMoves = 1;
         param1.whoMe = "me";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_29":{constructors:[],run:function(param1){
param1.num = 42;
         param1.move1 = 54;
         param1.numMoves = 1;
         param1.whoMe = "mk";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_65":{constructors:[],run:function(param1){
param1.num = 105;
         param1.move1 = 312;
         param1.numMoves = 1;
         param1.whoMe = "eji";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_85":{constructors:[],run:function(param1){
param1.num = 66;
         param1.move1 = 51;
         param1.numMoves = 1;
         param1.whoMe = "ww";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_109":{constructors:[],run:function(param1){
param1.num = 67;
         param1.move1 = 51;
         param1.numMoves = 1;
         param1.whoMe = "wv";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_104":{constructors:[],run:function(param1){
param1.num = 95;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "pi";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_84":{constructors:[],run:function(param1){
param1.num = 74;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "vm";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}},"method_101":{constructors:[],run:function(param1){
param1.num = 75;
         param1.move1 = 1;
         param1.numMoves = 1;
         param1.whoMe = "vi";
         this.finder_Poke_Info.get_Poke_Info(param1);
         return param1;
}}}},"class_57":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_57":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3);
            this.currentWave = 2;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 382;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 174;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 40;
            if(_loc4_.name != "Kyogre")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.reward *= 5;
         _loc4_.freeRoam = false;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.speed /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_58":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_58":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 60;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 60)
            {
               this.currentWave = 60;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            if(!param3)
            {
               param3 = this.Math.trunc(65 + this.Math.random() * 4);
            }
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 15)
            {
               _loc4_.num = 72;
               _loc4_.move1 = 8;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vk";
               if(_loc4_.name != "Tentacool")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 30)
            {
               _loc4_.num = 129;
               _loc4_.move1 = 141;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ekp";
               if(_loc4_.name != "Magikarp")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 45)
            {
               _loc4_.num = 60;
               _loc4_.move1 = 109;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "wj";
               if(_loc4_.name != "Poliwag")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 60)
            {
               _loc4_.num = 118;
               _loc4_.move1 = 42;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eeb";
               if(_loc4_.name != "Goldeen")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 75)
            {
               _loc4_.num = 90;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pj";
               if(_loc4_.name != "Shellder")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 90)
            {
               _loc4_.num = 116;
               _loc4_.move1 = 11;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "eew";
               if(_loc4_.name != "Horsea")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 100)
            {
               _loc4_.num = 120;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ekj";
               if(_loc4_.name != "Staryu")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 7;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_59":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_59":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 16;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
            }
            if(this.turn >= 2)
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 360;
               this.currentTime = 0;
               this.turn = 0;
               return;
            }
            this.currentSetTime = 210;
            this.currentTime = 0;
         }
         else
         {
            if(this.currentWave == 2)
            {
               if(this.turn == 0)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12));
               }
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 360;
               this.currentTime = 0;
               this.turn = 0;
               return;
            }
            if(this.currentWave == 3)
            {
               if(this.turn == 0)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
               }
               else if(this.turn == 1)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               }
               else if(this.turn == 2)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"2");
               }
               if(this.turn >= 2)
               {
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 360;
                  this.currentTime = 0;
                  this.turn = 0;
                  return;
               }
               this.currentSetTime = 210;
               this.currentTime = 0;
            }
            else
            {
               if(this.currentWave == 4)
               {
                  if(this.turn == 0)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"2");
                  }
                  this.update_Wave(++this.currentWave);
                  this.currentSetTime = 360;
                  this.currentTime = 0;
                  this.turn = 0;
                  return;
               }
               if(this.currentWave == 5)
               {
                  if(this.turn == 0)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"3");
                  }
                  else if(this.turn == 1)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"3");
                  }
                  else if(this.turn == 2)
                  {
                     this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"3");
                  }
                  if(this.turn >= 2)
                  {
                     this.update_Wave(++this.currentWave);
                     this.currentSetTime = 360;
                     this.currentTime = 0;
                     this.turn = 0;
                     return;
                  }
                  this.currentSetTime = 210;
                  this.currentTime = 0;
               }
               else
               {
                  if(this.currentWave == 6)
                  {
                     if(this.turn == 0)
                     {
                        this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"3");
                     }
                     this.update_Wave(++this.currentWave);
                     this.currentSetTime = 360;
                     this.currentTime = 0;
                     this.turn = 0;
                     return;
                  }
                  if(this.currentWave == 7)
                  {
                     if(this.turn == 0)
                     {
                        this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"4");
                     }
                     else if(this.turn == 1)
                     {
                        this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"4");
                     }
                     else if(this.turn == 2)
                     {
                        this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"4");
                     }
                     if(this.turn >= 2)
                     {
                        this.update_Wave(++this.currentWave);
                        this.currentSetTime = 360;
                        this.currentTime = 0;
                        this.turn = 0;
                        return;
                     }
                     this.currentSetTime = 210;
                     this.currentTime = 0;
                  }
                  else
                  {
                     if(this.currentWave == 8)
                     {
                        if(this.turn == 0)
                        {
                           this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"4");
                        }
                        this.update_Wave(++this.currentWave);
                        this.currentSetTime = 360;
                        this.currentTime = 0;
                        this.turn = 0;
                        return;
                     }
                     if(this.currentWave == 9)
                     {
                        if(this.turn == 0)
                        {
                           this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10));
                        }
                        else if(this.turn == 1)
                        {
                           this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10),1,"2");
                        }
                        else if(this.turn == 2)
                        {
                           this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10),1,"3");
                        }
                        else if(this.turn == 3)
                        {
                           this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10),1,"4");
                        }
                        if(this.turn >= 3)
                        {
                           this.update_Wave(++this.currentWave);
                           this.currentSetTime = 360;
                           this.currentTime = 0;
                           this.turn = 0;
                           return;
                        }
                        this.currentSetTime = 360;
                        this.currentTime = 0;
                     }
                     else
                     {
                        if(this.currentWave == 10)
                        {
                           if(this.turn == 0)
                           {
                              this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12));
                           }
                           this.update_Wave(++this.currentWave);
                           this.currentSetTime = 360;
                           this.turn = 0;
                           return;
                        }
                        if(this.currentWave == 11)
                        {
                           if(this.turn == 0)
                           {
                              this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
                           }
                           else if(this.turn == 1)
                           {
                              this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"2");
                           }
                           else if(this.turn == 2)
                           {
                              this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"3");
                           }
                           else if(this.turn == 3)
                           {
                              this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"4");
                           }
                           if(this.turn >= 3)
                           {
                              this.update_Wave(++this.currentWave);
                              this.currentSetTime = 360;
                              this.currentTime = 0;
                              this.turn = 0;
                              return;
                           }
                           this.currentSetTime = 360;
                           this.currentTime = 0;
                        }
                        else
                        {
                           if(this.currentWave == 12)
                           {
                              if(this.turn == 0)
                              {
                                 this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"2");
                              }
                              this.update_Wave(++this.currentWave);
                              this.currentSetTime = 360;
                              this.turn = 0;
                              return;
                           }
                           if(this.currentWave == 13)
                           {
                              if(this.turn == 0)
                              {
                                 this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
                              }
                              else if(this.turn == 1)
                              {
                                 this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"2");
                              }
                              else if(this.turn == 2)
                              {
                                 this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"3");
                              }
                              else if(this.turn == 3)
                              {
                                 this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"4");
                              }
                              if(this.turn >= 3)
                              {
                                 this.update_Wave(++this.currentWave);
                                 this.currentSetTime = 360;
                                 this.currentTime = 0;
                                 this.turn = 0;
                                 return;
                              }
                              this.currentSetTime = 360;
                              this.currentTime = 0;
                           }
                           else
                           {
                              if(this.currentWave == 14)
                              {
                                 if(this.turn == 0)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"3");
                                 }
                                 this.update_Wave(++this.currentWave);
                                 this.currentSetTime = 360;
                                 this.turn = 0;
                                 return;
                              }
                              if(this.currentWave == 15)
                              {
                                 if(this.turn == 0)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
                                 }
                                 else if(this.turn == 1)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
                                 }
                                 else if(this.turn == 2)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"3");
                                 }
                                 else if(this.turn == 3)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"4");
                                 }
                                 if(this.turn >= 3)
                                 {
                                    this.update_Wave(++this.currentWave);
                                    this.currentSetTime = 360;
                                    this.currentTime = 0;
                                    this.turn = 0;
                                    return;
                                 }
                                 this.currentSetTime = 360;
                                 this.currentTime = 0;
                              }
                              else if(this.currentWave == 16)
                              {
                                 if(this.turn == 0)
                                 {
                                    this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(12),1,"4");
                                 }
                                 this.currentWave = 18;
                                 this.wave_Finished();
                                 return;
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 45;
         if(param1 == 10)
         {
            _loc4_.num = 102;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Exeggcute")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 69;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 16;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Bellsprout")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 70;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 26;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Weepinbell")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 71;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 132;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Victreebel")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 7)
         {
            _loc4_.num = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 9;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Bulbasaur")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 8)
         {
            _loc4_.num = 2;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 28;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Ivysaur")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 9)
         {
            _loc4_.num = 3;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 153;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Venusaur")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 4)
         {
            _loc4_.num = 43;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 107;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Oddish")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 5)
         {
            _loc4_.num = 44;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 24;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Gloom")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 6)
         {
            _loc4_.num = 45;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 235;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Vileplume")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 11)
         {
            _loc4_.num = 114;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 189;
            _loc4_.numMoves = 1;
            if(_loc4_.name != "Tangela")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 12)
         {
            _loc4_.num = 251;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 240;
            _loc4_.numMoves = 1;
            _loc4_.base_Attack *= 3;
            _loc4_.base_Special_Attack *= 3;
            _loc4_.base_HP *= 2;
            _loc4_.level = 50;
            _loc4_.speed -= 30;
            if(_loc4_.name != "Celebi")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.whoMe = "pje";
         _loc4_.canCapture = false;
         _loc4_.var_107 = true;
         _loc4_.reward *= 2;
         _loc4_.speed /= 2;
         _loc4_.base_Experience *= 1.5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 3;
         _loc4_.base_Special_Attack /= 3;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_60":{fields:[{name:"var_725",type:"int"}],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_60":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 6;
}},"defeated_Poke":{constructors:[],run:function(param1){
if(this.currentWave < 6)
         {
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 100;
            this.turn = 0;
         }
}},"start_Wave":{constructors:[],run:function(){
this.update_Wave();
         this.currentSetTime = 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.currentSetTime = 100;
               this.turn = this.turn + 1;
            }
         }
         else if(this.currentWave == 2)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentSetTime = 100;
               this.turn = this.turn + 1;
            }
         }
         else if(this.currentWave == 3)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
               this.currentSetTime = 100;
               this.turn = this.turn + 1;
            }
         }
         else if(this.currentWave == 4)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = 100;
               this.turn = this.turn + 1;
            }
         }
         else if(this.currentWave == 5)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
               this.turn = this.turn + 1;
            }
         }
         else if(this.currentWave == 6)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentWave = 7;
               this.wave_Finished();
            }
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(105);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = false;
         _loc4_.freeRoam = true;
         if(param1 == 2)
         {
            _loc4_.num = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 16;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 7;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 193;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         else if(param1 == 1)
         {
            _loc4_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 184;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 143;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 114;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 57;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 75;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 15;
         }
         _loc4_.base_Experience *= 2;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed = 0;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 2;
         _loc4_.base_Special_Attack /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_61":{fields:[],imports:["class_92","finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke","class_92"],methods:{"class_61":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 7;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 2)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 3)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 4)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"2");
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"2");
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"2");
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 5)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"2");
               this.currentSetTime = 100;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"2");
               this.currentSetTime = 100;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"2");
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 6)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
               this.currentSetTime = 50;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
               this.currentSetTime = 50;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"2");
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 200;
               this.turn = 0;
               return;
            }
         }
         else if(this.currentWave == 7)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
               this.currentWave = 8;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke","class_92"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         _loc4_.level = 65;
         _loc4_.runAway = false;
         if(param1 == 1)
         {
            _loc4_.num = 63;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 64;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 146;
            _loc4_.numMoves = 1;
            _loc4_.speed /= 2;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 7;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 3;
            _loc4_.base_Attack /= 3;
            _loc4_.base_Special_Attack /= 3;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 196;
            _loc4_.move2 = 115;
            _loc4_.numMoves = 2;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 92;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 311;
            _loc4_.runAway = true;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 93;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 311;
            _loc4_.runAway = true;
            _loc4_.numMoves = 1;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 122;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 253;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 4;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 49;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 54;
            _loc4_.numMoves = 1;
            _loc4_.speed /= 2;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 80;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 337;
            _loc4_.numMoves = 1;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 4;
            _loc4_.base_Defense *= 2;
            _loc4_.base_Special_Defense *= 2;
         }
         else if(param1 == 9)
         {
            _loc4_.num = 150;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 337;
            _loc4_.move2 = 197;
            _loc4_.move3 = 196;
            _loc4_.move4 = 115;
            _loc4_.numMoves = 4;
            _loc4_.myAI = new this.class_92();
            _loc4_.speed /= 2;
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 3;
            _loc4_.base_Attack /= 2;
            _loc4_.base_Special_Attack /= 2;
         }
         _loc4_.whoMe = "pje";
         _loc4_.canCapture = false;
         _loc4_.reward *= 2;
         _loc4_.base_Experience *= 1.5;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_62":{fields:[{name:"var_700",type:"level_37"},{name:"var_523",type:"int"}],imports:["finder_Poke_Info","level_37","main","profile_poke"],constructors:["profile_poke"],methods:{"class_62":{constructors:[],run:function(param1){
this.var_700 = param1;
         
}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"defeated_Poke":{constructors:[],run:function(param1){
var _loc2_ = false;
         if(param1.num == 145)
         {
            if(this.var_523 == 0 && !this.main.playerProfile.haveThisExtraInfo(20))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 1 && !this.main.playerProfile.haveThisExtraInfo(21))
            {
               _loc2_ = true;
            }
            else if(this.var_523 == 2 && !this.main.playerProfile.haveThisExtraInfo(22))
            {
               _loc2_ = true;
            }
            this.var_700.var_695 = _loc2_;
         }
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            if(this.currentWave == 1 && this.method_415())
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(144));
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 75;
            this.turn = 0;
            return;
         }
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
         this.currentSetTime = 30;
         this.turn = this.turn + 1;
}},"method_415":{constructors:[],run:function(){
var _loc3_ = this.Math.trunc(0);
         var _loc5_ = null;
         var _loc6_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         var _loc2_ = this.Math.trunc(0);
         var _loc4_ = this.my_Parent.send_Msg_Public("sponsor");
         _loc3_ = this.Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_ && (_loc4_ == "hacked" || _loc5_.myTag != "h") && _loc5_.is_Type(11) && _loc5_.level == 100)
            {
               _loc6_++;
               if(_loc5_.shiny == 2)
               {
                  _loc2_++;
               }
               else if(_loc5_.shiny == 1)
               {
                  _loc1_++;
               }
            }
            _loc3_++;
         }
         if(_loc6_ == 6)
         {
            if(_loc1_ == 6)
            {
               this.var_523 = 1;
            }
            else if(_loc2_ == 6)
            {
               this.var_523 = 2;
            }
            else
            {
               this.var_523 = 0;
            }
            return true;
         }
         return false;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(102);
         _loc4_.level = param3;
         _loc4_.runAway = true;
         _loc4_.freeRoam = true;
         if(param1 == 144)
         {
            _loc4_.num = 145;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 202;
            _loc4_.whoMe = "pje";
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.freeRoam = false;
         }
         else if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            param3 = this.Math.trunc(80 + this.Math.random() * 4);
            this.get_Value(_loc4_);
            _loc4_.level = param3;
            if(param2 <= 35)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
            }
            else if(param2 <= 60)
            {
               _loc4_.num = 25;
               _loc4_.move1 = 22;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ki";
            }
            else if(param2 <= 85)
            {
               _loc4_.num = 81;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "be";
            }
            else if(param2 <= 95)
            {
               _loc4_.num = 82;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "bk";
            }
            else if(param2 <= 100)
            {
               if(this.main.playerProfile.currentVersion == 2)
               {
                  _loc4_.num = 26;
                  _loc4_.move1 = 22;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "kw";
               }
               else if(this.main.playerProfile.currentVersion == 1)
               {
                  _loc4_.num = 125;
                  _loc4_.move1 = 22;
                  _loc4_.numMoves = 1;
                  this.finder_Poke_Info.get_Poke_Info(_loc4_);
                  _loc4_.whoMe = "eki";
               }
            }
         }
         _loc4_.base_Experience *= 1.7;
         _loc4_.speed *= 0.6;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 4;
         _loc4_.base_Special_Attack /= 4;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_63":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["movie_scene_Level_2_Youngster","profile_poke"],methods:{"class_63":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 6;
}},"do_Wave":{constructors:["movie_scene_Level_2_Youngster"],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1));
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 2)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1));
               this.currentSetTime = 18;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 3)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,100));
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 4)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,100));
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
               return;
            }
         }
         else if(this.currentWave == 5)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,100));
               this.currentSetTime = 18;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1));
               this.currentSetTime = 18;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.currentSetTime = 18;
            }
            else if(this.turn == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
               this.turn = 20;
               this.currentSetTime = -1;
               return;
            }
         }
         else if(this.currentWave == 6)
         {
            if(this.turn == 0)
            {
               this.my_Parent.move_Screen(0,0,1);
               this.currentSetTime = 30;
            }
            else if(this.turn == 1)
            {
               this.my_Parent.gfx_BG.addChild(new this.movie_scene_Level_2_Youngster());
               this.currentSetTime = 240;
            }
            else if(this.turn == 2)
            {
               this.my_Parent.gfx_UI.visible = true;
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentWave = 7;
               this.wave_Finished();
            }
         }
         this.turn = this.turn + 1;
}},"wave_Gone":{constructors:[],run:function(){
if(this.currentWave == 5)
         {
            this.my_Parent.gfx_UI.visible = false;
            this.update_Wave(++this.currentWave);
            this.turn = 0;
            this.currentSetTime = 1;
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 100 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 50)
            {
               _loc4_.num = 16;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.level = 2 + this.Math.random() * 4;
               _loc4_.move1 = 1;
               _loc4_.numMoves = 1;
               if(_loc4_.level == 5)
               {
                  _loc4_.move2 = 2;
                  _loc4_.numMoves = 2;
               }
               _loc4_.whoMe = "ew";
               if(_loc4_.name != "Pidgey")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else
            {
               _loc4_.num = 19;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.level = 2 + this.Math.random() * 3;
               _loc4_.move1 = 1;
               _loc4_.move2 = 3;
               _loc4_.numMoves = 2;
               if(_loc4_.level == 4)
               {
                  _loc4_.move3 = 4;
                  _loc4_.numMoves = 3;
               }
               _loc4_.whoMe = "ep";
               if(_loc4_.name != "Rattata")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 19;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 4;
            _loc4_.move1 = 1;
            _loc4_.move2 = 3;
            _loc4_.move3 = 4;
            _loc4_.numMoves = 3;
            if(_loc4_.name != "Rattata")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 16;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 5;
            _loc4_.move1 = 1;
            _loc4_.move2 = 2;
            _loc4_.numMoves = 2;
            if(_loc4_.name != "Pidgey")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 16;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 15;
            _loc4_.move1 = 1;
            _loc4_.move2 = 2;
            _loc4_.numMoves = 2;
            _loc4_.whoMe = "pje";
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            if(_loc4_.name != "Pidgey")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.speed /= 2;
         _loc4_.base_HP *= 5;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_64":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_64":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 5;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 180;
         }
         else if(this.turn == 1)
         {
            this.update_Wave(2);
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 18;
         }
         else if(this.turn == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 180;
         }
         else if(this.turn == 3 || this.turn == 4)
         {
            if(this.turn == 3)
            {
               this.update_Wave(3);
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 18;
         }
         else if(this.turn == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 180;
         }
         else if(this.turn >= 6 && this.turn <= 8)
         {
            if(this.turn == 6)
            {
               this.update_Wave(4);
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 18;
         }
         else if(this.turn == 9)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 180;
         }
         else if(this.turn >= 10 && this.turn <= 13)
         {
            if(this.turn == 10)
            {
               this.update_Wave(5);
            }
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.currentSetTime = 18;
         }
         else if(this.turn == 14)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile());
            this.wave_Finished();
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         this.get_Value(_loc4_);
         _loc4_.num = 19;
         _loc4_.level = 2 + this.Math.random() * 4;
         _loc4_.move1 = 1;
         _loc4_.move2 = 3;
         _loc4_.whoMe = "ep";
         _loc4_.numMoves = 2;
         if(_loc4_.level == 4)
         {
            _loc4_.move3 = 4;
            _loc4_.numMoves = 3;
         }
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         this.finder_Poke_Info.get_Poke_Info(_loc4_);
         _loc4_.speed /= 2;
         if(_loc4_.name != "Rattata")
         {
            this.my_Parent.end_hack();
            return null;
         }
         return _loc4_;
}}}},"class_65":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_65":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 14;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 10;
            _loc4_.base_HP *= 10;
            _loc4_.base_Defense *= 4;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 65;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 30;
            _loc4_.base_HP *= 2;
         }
         _loc4_.experience = 0;
         _loc4_.reward = 0;
         _loc4_.base_Experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_66":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_66":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave_2":{constructors:[],run:function(){
if(this.currentWave <= 10)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(1));
            this.currentSetTime2 = 30;
         }
}},"start_Wave":{constructors:[],run:function(){
this.baseStartWave();
         this.start_Wave_2();
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave <= 4)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(2),1,"2");
            this.currentSetTime = 9;
            if(this.turn == 5)
            {
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 45;
            }
         }
         else if(this.currentWave == 5)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(3),1,"2");
            this.currentSetTime = 60;
            if(this.turn == 2)
            {
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
            }
         }
         else if(this.currentWave <= 9)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(4),1,"2");
            this.currentSetTime = 9;
            if(this.turn == 5)
            {
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 120;
            }
         }
         else if(this.currentWave == 10)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(5),1,"2");
            this.currentSetTime = 24;
            if(this.turn == 3)
            {
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
            }
         }
         else if(this.currentWave == 11)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(6),1,"2");
            this.currentSetTime = 60;
            if(this.turn == 3)
            {
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 180;
            }
         }
         else if(this.currentWave <= 20)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(7),1,"2");
            this.currentSetTime = 15;
            if(this.turn == 9)
            {
               if(this.currentWave == 20)
               {
                  this.currentWave = 21;
                  this.wave_Finished();
                  return;
               }
               this.update_Wave(++this.currentWave);
               this.turn = 0;
               this.currentSetTime = 90;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 74;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 29;
            _loc4_.move1 = 144;
            _loc4_.move2 = 65;
            _loc4_.move3 = 25;
            _loc4_.numMoves = 3;
            _loc4_.speed = 40;
            _loc4_.shiny = 1;
            _loc4_.freeRoam = true;
            _loc4_.reward = 0;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 41;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 83;
            _loc4_.move2 = 75;
            _loc4_.move3 = 74;
            _loc4_.numMoves = 3;
            _loc4_.base_Experience *= 10;
            _loc4_.canCapture = false;
            _loc4_.reward = 0;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 19;
            _loc4_.move1 = 67;
            _loc4_.numMoves = 3;
            _loc4_.reward = 0;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 15;
            _loc4_.move1 = 1;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.reward = 0;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 4;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 24;
            _loc4_.move1 = 6;
            _loc4_.numMoves = 1;
            _loc4_.shiny = 1;
            _loc4_.reward = 0;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 44;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 20;
            _loc4_.move1 = 163;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_Experience *= 1000;
            _loc4_.reward = 400;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 45;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 163;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.reward = 0;
         }
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_67":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_67":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(1),1,"p");
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(1),1,"2");
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(2),1,"3");
            this.my_Parent.add_Enemy_Poke(this.get_Poke_Profile(2),1,"4");
            this.currentWave = 2;
            this.wave_Finished();
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 14;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 10;
            _loc4_.base_HP *= 10;
            _loc4_.base_Defense *= 4;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 65;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 30;
            _loc4_.base_HP *= 2;
         }
         _loc4_.experience = 0;
         _loc4_.reward = 0;
         _loc4_.base_Experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_68":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_68":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 4;
}},"do_Wave":{constructors:[],run:function(){
var _loc2_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            _loc2_ = this.Math.trunc(25);
            _loc1_ = this.Math.trunc(100);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3);
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn < 6)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 6)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
            }
         }
         else if(this.currentWave == 2)
         {
            _loc2_ = this.Math.trunc(25);
            _loc1_ = this.Math.trunc(100);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3);
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"2");
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn < 6)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               if(this.turn == 1 || this.turn == 3 || this.turn == 5)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"2");
               }
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 6)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
            }
         }
         else if(this.currentWave == 3)
         {
            _loc2_ = this.Math.trunc(25);
            _loc1_ = this.Math.trunc(100);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"2");
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"3");
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn < 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
               if(this.turn == 1 || this.turn == 3)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),1,"2");
               }
               else if(this.turn == 2 || this.turn == 4)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"3");
               }
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8));
            }
         }
         else
         {
            if(this.currentWave != 4)
            {
               return;
            }
            _loc2_ = this.Math.trunc(25);
            _loc1_ = this.Math.trunc(100);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"3");
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"4");
               this.currentSetTime = _loc1_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn < 4)
            {
               if(this.turn == 1)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5),1,"4");
               }
               else if(this.turn == 2)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               }
               else if(this.turn == 3)
               {
                  this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               }
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 4)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),3,"4");
               this.currentWave = 5;
               this.wave_Finished();
               return;
            }
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 300;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(102);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = false;
         _loc4_.freeRoam = true;
         if(param1 == 1)
         {
            _loc4_.num = 89;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 380;
            _loc4_.move2 = 431;
            _loc4_.numMoves = 2;
            _loc4_.base_HP *= 15;
            _loc4_.var_490 = true;
            _loc4_.freeRoam = false;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 49;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 20;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 48;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 26;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 6;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 88;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 348;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 12;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 41;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 54;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 8;
         }
         else if(param1 == 3)
         {
            _loc4_.num = 42;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 38;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 12;
         }
         else if(param1 == 4)
         {
            _loc4_.num = 110;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 415;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 10;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 109;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 334;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 12;
         }
         _loc4_.base_Experience *= 2;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed *= 0.5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 2;
         _loc4_.base_Special_Attack /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_69":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_69":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 30;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 30;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 30;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_70":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_70":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 30;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 30;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 30;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_71":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_71":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 30;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 30;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 30;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_72":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_72":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 30;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 30;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 30;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_73":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_73":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 4;
}},"do_Wave":{constructors:[],run:function(){
var _loc2_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            _loc2_ = this.Math.trunc(300);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
            }
         }
         else if(this.currentWave == 2)
         {
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),2,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
            }
         }
         else if(this.currentWave == 3)
         {
            _loc2_ = this.Math.trunc(300);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
            }
         }
         else
         {
            if(this.currentWave != 4)
            {
               return;
            }
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7),2,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
               this.currentWave = 5;
               this.wave_Finished();
               return;
            }
         }
         this.update_Wave(++this.currentWave);
         this.currentSetTime = 300;
         this.turn = 0;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         var _loc5_ = this.Math.trunc(0);
         _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(102);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = false;
         _loc4_.freeRoam = true;
         if(param1 == 1 || param1 == 2 || param1 == 4 || param1 == 3)
         {
            _loc4_.num = 107;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc5_ = this.Math.trunc(12);
            _loc4_.move1 = 362;
            if(param1 == 2)
            {
               _loc4_.move1 = 317;
            }
            else if(param1 == 4)
            {
               _loc4_.move1 = 316;
            }
            else if(param1 == 3)
            {
               _loc4_.move1 = 122;
            }
            else
            {
               _loc5_ = this.Math.trunc(17);
            }
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= _loc5_;
         }
         else if(param1 == 5)
         {
            _loc4_.num = 106;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 45;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 17;
         }
         else if(param1 == 6)
         {
            _loc4_.num = 68;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 17;
         }
         else if(param1 == 7)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 66;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 22;
         }
         _loc4_.base_Experience *= 2;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed *= 0.5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 2;
         _loc4_.base_Special_Attack /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_74":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_74":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
         this.currentWave = 2;
         this.wave_Finished();
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 130;
            _loc4_.move1 = 83;
            _loc4_.numMoves = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Gyarados")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 74;
            _loc4_.move1 = 64;
            _loc4_.numMoves = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Geodude")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_75":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_75":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentSetTime = 30;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            this.currentSetTime = 30;
         }
         else if(this.turn == 2)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3));
            this.currentSetTime = 60;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 1)
         {
            _loc4_.num = 16;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 26;
            _loc4_.move1 = 36;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 3;
            if(_loc4_.name != "Pidgey")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 43;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 26;
            _loc4_.move1 = 26;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 3;
            if(_loc4_.name != "Oddish")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 3)
         {
            _loc4_.num = 69;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 25;
            _loc4_.move1 = 16;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 3;
            if(_loc4_.name != "Bellsprout")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.whoMe = "pje";
         _loc4_.reward *= 5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_76":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_76":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 4;
}},"do_Wave":{constructors:[],run:function(){
var _loc2_ = this.Math.trunc(0);
         var _loc1_ = this.Math.trunc(0);
         if(this.currentWave == 1)
         {
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(6));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(10),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1,"4");
            }
         }
         else if(this.currentWave == 2)
         {
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"4");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(4),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(8),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(5));
            }
         }
         else if(this.currentWave == 3)
         {
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(7));
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2),1,"4");
            }
         }
         else if(this.currentWave == 4)
         {
            _loc2_ = this.Math.trunc(400);
            _loc1_ = this.Math.trunc(300);
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"4");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 1)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(3),1,"3");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 2)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9),1,"2");
               this.currentSetTime = _loc2_;
               this.turn = this.turn + 1;
               return;
            }
            if(this.turn == 3)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(9));
               this.currentWave = 5;
               this.wave_Finished();
               return;
            }
         }
         if(this.currentWave <= 4)
         {
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 500;
            this.turn = 0;
         }
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         param3 = this.Math.trunc(102);
         _loc4_.level = param3;
         _loc4_.whoMe = "pje";
         _loc4_.runAway = false;
         _loc4_.freeRoam = true;
         var _loc5_ = this.Math.trunc(12);
         if(param1 == 3 || param1 == 4 || param1 == 9)
         {
            _loc4_.num = 149;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 203;
            if(param1 == 4)
            {
               _loc4_.move1 = 202;
            }
            else if(param1 == 9)
            {
               _loc4_.move1 = 349;
            }
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 18;
         }
         else if(param1 == 5 || param1 == 6 || param1 == 7)
         {
            _loc4_.num = 148;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 77;
            _loc5_ = this.Math.trunc(18);
            if(param1 == 6)
            {
               _loc5_ = this.Math.trunc(10);
               _loc4_.move1 = 111;
            }
            else if(param1 == 7)
            {
               _loc5_ = this.Math.trunc(10);
               _loc4_.move1 = 411;
            }
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= _loc5_;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 184;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 18;
         }
         else if(param1 == 1 || param1 == 10)
         {
            _loc4_.num = 130;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 425;
            if(param1 == 10)
            {
               _loc4_.shiny = 1;
            }
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 18;
         }
         else if(param1 == 8)
         {
            _loc4_.num = 142;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 414;
            _loc4_.numMoves = 1;
            _loc4_.base_HP *= 18;
         }
         _loc4_.base_Experience *= 2;
         _loc4_.var_107 = true;
         _loc4_.canCapture = false;
         _loc4_.experience = 0;
         _loc4_.speed *= 0.5;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.base_Attack /= 2;
         _loc4_.base_Special_Attack /= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_77":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_77":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentSetTime = 30;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            this.currentSetTime = 60;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 1)
         {
            _loc4_.num = 27;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 27;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 3;
            if(_loc4_.name != "Sandshrew")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 23;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 27;
            _loc4_.move1 = 43;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 3;
            if(_loc4_.name != "Ekans")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.whoMe = "pje";
         _loc4_.reward *= 5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_78":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_78":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentSetTime = 18;
         }
         else if(this.turn == 1)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
            this.currentSetTime = 60;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 1)
         {
            _loc4_.num = 32;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 27;
            _loc4_.move1 = 42;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 29;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 27;
            _loc4_.move1 = 45;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
         }
         _loc4_.whoMe = "pje";
         _loc4_.reward *= 5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_79":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_79":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 20)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 35;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 35;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 35;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_80":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_80":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 20)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.level = 35;
               _loc4_.whoMe = "me";
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 35;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.level = 35;
               _loc4_.whoMe = "pi";
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_81":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_81":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 20)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 35;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 35;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 35;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_82":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_82":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 20)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 35;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 35;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 35;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_83":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_83":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 20;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 20)
            {
               this.currentWave = 21;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 35;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 35;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 35;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_84":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_84":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 0)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
            this.currentSetTime = 60;
            this.wave_Finished();
            return;
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         if(param1 == 1)
         {
            _loc4_.num = 56;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 28;
            _loc4_.move1 = 52;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.base_HP *= 5;
            if(_loc4_.name != "Mankey")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.whoMe = "pje";
         _loc4_.reward *= 5;
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_85":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_85":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,1000),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 40;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 40;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 40;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_86":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_86":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,700),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 40;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 40;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 40;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_87":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_87":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,998),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 40;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 40;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 40;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_88":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_88":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,999),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 40;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 40;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 40;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_89":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_89":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 30;
}},"do_Wave":{constructors:[],run:function(){
if(this.turn == 6)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0));
            if(this.currentWave == 30)
            {
               this.currentWave = 31;
               this.wave_Finished();
               return;
            }
            this.update_Wave(++this.currentWave);
            this.currentSetTime = 120;
            this.turn = 0;
            return;
         }
         if(this.turn == 1 || this.turn == 3)
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980));
         }
         else
         {
            this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(0,980),1,"2");
         }
         this.currentSetTime = 21;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = null;
         _loc4_ = new this.profile_poke();
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
            if(param2 <= 700)
            {
               _loc4_.num = 41;
               _loc4_.move1 = 75;
               _loc4_.move2 = 19;
               _loc4_.move3 = 74;
               _loc4_.move4 = 38;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "me";
               _loc4_.level = 40;
               if(_loc4_.name != "Zubat")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 980)
            {
               _loc4_.num = 74;
               _loc4_.move1 = 64;
               _loc4_.move2 = 67;
               _loc4_.move3 = 68;
               _loc4_.move4 = 65;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "vm";
               _loc4_.level = 40;
               if(_loc4_.name != "Geodude")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 998)
            {
               _loc4_.num = 66;
               _loc4_.move1 = 12;
               _loc4_.move2 = 227;
               _loc4_.move3 = 226;
               _loc4_.move4 = 52;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ww";
               _loc4_.level = 20;
               if(_loc4_.name != "Machop")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 999)
            {
               _loc4_.num = 100;
               _loc4_.move1 = 232;
               _loc4_.move2 = 68;
               _loc4_.move3 = 231;
               _loc4_.move4 = 72;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "ejj";
               _loc4_.level = 20;
               if(_loc4_.name != "Voltorb")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
            else if(param2 <= 1000)
            {
               _loc4_.num = 95;
               _loc4_.move1 = 14;
               _loc4_.move2 = 40;
               _loc4_.move3 = 199;
               _loc4_.move4 = 66;
               _loc4_.numMoves = 4;
               this.finder_Poke_Info.get_Poke_Info(_loc4_);
               _loc4_.whoMe = "pi";
               _loc4_.level = 40;
               if(_loc4_.name != "Onix")
               {
                  this.my_Parent.end_hack();
                  return null;
               }
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 23;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_90":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_90":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1));
         this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(2));
         if(this.turn == 3)
         {
            this.currentWave = 2;
            this.wave_Finished();
            return;
         }
         this.currentSetTime = 90;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
            this.get_Value(_loc4_);
         }
         else if(param1 == 1)
         {
            _loc4_.num = 95;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Onix")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         else if(param1 == 2)
         {
            _loc4_.num = 76;
            _loc4_.move1 = 25;
            _loc4_.numMoves = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.canCapture = false;
            if(_loc4_.name != "Golem")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 10;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"class_91":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"class_91":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(1),1.5);
         if(this.turn == 3)
         {
            this.currentWave = 2;
            this.wave_Finished();
            return;
         }
         this.currentSetTime = 60;
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 0)
         {
            if(param2 == 0)
            {
               param2 = this.Math.trunc(this.Math.random() * 1000 + 1);
            }
         }
         else if(param1 == 1)
         {
            _loc4_.num = 95;
            _loc4_.move1 = 66;
            _loc4_.numMoves = 1;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 40;
            _loc4_.canCapture = false;
            _loc4_.var_107 = true;
            if(_loc4_.name != "Onix")
            {
               this.my_Parent.end_hack();
               return null;
            }
         }
         _loc4_.freeRoam = true;
         _loc4_.runAway = false;
         _loc4_.experience = 0;
         _loc4_.base_HP *= 26;
         _loc4_.base_Defense *= 2;
         _loc4_.base_Special_Defense *= 2;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"wave_online_1":{fields:[],imports:["finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke"],methods:{"wave_online_1":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 1;
}},"do_Wave":{constructors:[],run:function(){
this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.whoMe = "pje";
         if(param1 == 1)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 14;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 10;
            _loc4_.base_HP *= 10;
            _loc4_.base_Defense *= 4;
         }
         else if(param1 == 2)
         {
            _loc4_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.level = 10;
            _loc4_.move1 = 65;
            _loc4_.numMoves = 1;
            _loc4_.canCapture = false;
            _loc4_.runAway = false;
            _loc4_.speed = 30;
            _loc4_.base_HP *= 2;
         }
         _loc4_.experience = 0;
         _loc4_.reward = 0;
         _loc4_.base_Experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}},"wave_online_2":{fields:[],imports:["class_93","finder_Poke_Info","profile_poke","screen_Level"],constructors:["profile_poke","class_93"],methods:{"wave_online_2":{constructors:[],run:function(param1){

}},"get_Total_Waves":{constructors:[],run:function(){
return 10;
}},"do_Wave":{constructors:[],run:function(){
if(this.currentWave == 1)
         {
            if(this.turn == 0)
            {
               this.my_Parent.add_Enemy_Poke(this.create_Poke_Profile(144));
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 1000;
               this.turn = 0;
               return;
            }
         }
         else
         {
            if(this.currentWave > 1 && this.currentWave < 10)
            {
               this.update_Wave(++this.currentWave);
               this.currentSetTime = 1000;
               if(this.currentWave == 10)
               {
                  this.currentSetTime = 0;
               }
               return;
            }
            if(this.currentWave == 10)
            {
               this.currentWave = 11;
               this.wave_Finished();
               return;
            }
         }
         this.turn = this.turn + 1;
}},"get_Poke_Profile":{constructors:["profile_poke","class_93"],run:function(param1 = 0, param2 = 0, param3 = 0){
var _loc4_ = new this.profile_poke();
         _loc4_.level = 91;
         _loc4_.runAway = false;
         if(param1 == 144)
         {
            _loc4_.level = 91;
            _loc4_.whoMe = "pje";
            _loc4_.num = 145;
            this.finder_Poke_Info.get_Poke_Info(_loc4_);
            _loc4_.move1 = 405;
            _loc4_.move2 = 406;
            _loc4_.numMoves = 2;
            _loc4_.myAI = new this.class_93();
            _loc4_.var_107 = true;
            _loc4_.base_HP *= 100;
            _loc4_.base_Defense *= 6;
            _loc4_.base_Special_Defense *= 6;
            _loc4_.var_490 = true;
            _loc4_.freeRoam = false;
         }
         _loc4_.canCapture = false;
         _loc4_.base_Experience *= 30;
         _loc4_.experience = 0;
         _loc4_.id = 0;
         _loc4_.moveSelected = 1;
         return _loc4_;
}}}}};
const SPECIES={"1":{"id":1,"name":"Bulbasaur","reward":5,"baseExperience":64,"stats":{"hp":45,"attack":49,"defense":49,"specialAttack":65,"specialDefense":65,"speed":45},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":1},{"level":3,"moveId":5},{"level":7,"moveId":9},{"level":9,"moveId":16},{"level":13,"moveId":24},{"level":14,"moveId":26},{"level":15,"moveId":27},{"level":19,"moveId":28},{"level":21,"moveId":76},{"level":25,"moveId":91},{"level":27,"moveId":127},{"level":31,"moveId":149},{"level":33,"moveId":157},{"level":37,"moveId":183}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,180,189,76,55,240,411,224,426,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":2,"level":16,"method":"level"}]},"2":{"id":2,"name":"Ivysaur","reward":10,"baseExperience":142,"stats":{"hp":60,"attack":62,"defense":63,"specialAttack":80,"specialDefense":80,"speed":60},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":5},{"level":0,"moveId":9},{"level":9,"moveId":16},{"level":13,"moveId":24},{"level":14,"moveId":26},{"level":15,"moveId":27},{"level":20,"moveId":28},{"level":23,"moveId":76},{"level":28,"moveId":91},{"level":31,"moveId":127},{"level":36,"moveId":149},{"level":39,"moveId":157},{"level":44,"moveId":240}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,180,189,240,76,55,411,224,426,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":3,"level":32,"method":"level"}]},"3":{"id":3,"name":"Venusaur","reward":30,"baseExperience":236,"stats":{"hp":80,"attack":82,"defense":83,"specialAttack":100,"specialDefense":100,"speed":80},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":5},{"level":0,"moveId":9},{"level":0,"moveId":16},{"level":13,"moveId":24},{"level":14,"moveId":26},{"level":15,"moveId":27},{"level":20,"moveId":28},{"level":23,"moveId":76},{"level":28,"moveId":91},{"level":31,"moveId":127},{"level":32,"moveId":153},{"level":39,"moveId":149},{"level":45,"moveId":157},{"level":53,"moveId":240}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,180,189,194,240,101,76,55,411,344,224,426,225,155,281],"shadowExtraTmMoveId":368,"evolutions":[]},"4":{"id":4,"name":"Charmander","reward":5,"baseExperience":62,"stats":{"hp":39,"attack":52,"defense":43,"specialAttack":60,"specialDefense":50,"speed":65},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":5},{"level":7,"moveId":10},{"level":10,"moveId":17},{"level":16,"moveId":29},{"level":19,"moveId":30},{"level":25,"moveId":92},{"level":28,"moveId":106},{"level":34,"moveId":130},{"level":37,"moveId":184},{"level":43,"moveId":105},{"level":46,"moveId":242}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,29,207,317,203,69,180,184,199,44,154,55,367,224,244,245,411,289,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":5,"level":16,"method":"level"}]},"5":{"id":5,"name":"Charmeleon","reward":10,"baseExperience":142,"stats":{"hp":58,"attack":64,"defense":58,"specialAttack":80,"specialDefense":65,"speed":80},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":5},{"level":0,"moveId":10},{"level":10,"moveId":17},{"level":17,"moveId":29},{"level":21,"moveId":30},{"level":28,"moveId":92},{"level":32,"moveId":106},{"level":39,"moveId":130},{"level":43,"moveId":184},{"level":50,"moveId":105},{"level":54,"moveId":242}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,29,207,317,203,69,180,184,199,44,154,55,367,224,244,245,411,289,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":6,"level":36,"method":"level"}]},"6":{"id":6,"name":"Charizard","reward":30,"baseExperience":240,"stats":{"hp":78,"attack":84,"defense":78,"specialAttack":109,"specialDefense":85,"speed":100},"typeIds":[4,6],"types":["Fire","Flying"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":5},{"level":0,"moveId":10},{"level":0,"moveId":17},{"level":0,"moveId":244},{"level":0,"moveId":245},{"level":0,"moveId":246},{"level":17,"moveId":29},{"level":21,"moveId":30},{"level":28,"moveId":92},{"level":32,"moveId":106},{"level":36,"moveId":75},{"level":41,"moveId":130},{"level":47,"moveId":184},{"level":56,"moveId":105},{"level":62,"moveId":242},{"level":71,"moveId":303},{"level":77,"moveId":330}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,29,207,317,203,69,180,184,194,199,154,101,240,55,367,224,244,245,349,411,44,344,289,155,281,414,426,427],"shadowExtraTmMoveId":368,"evolutions":[]},"7":{"id":7,"name":"Squirtle","reward":5,"baseExperience":63,"stats":{"hp":44,"attack":48,"defense":65,"specialAttack":50,"specialDefense":64,"speed":43},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":1},{"level":4,"moveId":3},{"level":7,"moveId":11},{"level":10,"moveId":18},{"level":13,"moveId":31},{"level":16,"moveId":19},{"level":19,"moveId":32},{"level":22,"moveId":83},{"level":25,"moveId":93},{"level":28,"moveId":133},{"level":31,"moveId":150},{"level":34,"moveId":165},{"level":37,"moveId":111},{"level":40,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,122,40,207,199,154,407,68,367,111,160,289,346,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":8,"level":16,"method":"level"}]},"8":{"id":8,"name":"Wartortle","reward":10,"baseExperience":142,"stats":{"hp":59,"attack":63,"defense":80,"specialAttack":65,"specialDefense":80,"speed":58},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":3},{"level":0,"moveId":11},{"level":10,"moveId":18},{"level":13,"moveId":31},{"level":16,"moveId":19},{"level":20,"moveId":32},{"level":24,"moveId":83},{"level":28,"moveId":93},{"level":32,"moveId":133},{"level":36,"moveId":150},{"level":40,"moveId":165},{"level":44,"moveId":111},{"level":48,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,122,40,207,199,154,407,68,367,111,160,289,346,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":9,"level":36,"method":"level"}]},"9":{"id":9,"name":"Blastoise","reward":20,"baseExperience":239,"stats":{"hp":79,"attack":83,"defense":100,"specialAttack":85,"specialDefense":105,"speed":78},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":3},{"level":0,"moveId":11},{"level":0,"moveId":18},{"level":0,"moveId":247},{"level":13,"moveId":31},{"level":16,"moveId":19},{"level":20,"moveId":32},{"level":24,"moveId":83},{"level":28,"moveId":93},{"level":32,"moveId":133},{"level":39,"moveId":150},{"level":46,"moveId":165},{"level":53,"moveId":111},{"level":60,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,122,40,207,194,199,154,407,68,101,367,111,247,160,289,281,346,409,344,155,193,425,408,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"10":{"id":10,"name":"Caterpie","reward":2,"baseExperience":39,"stats":{"hp":45,"attack":30,"defense":35,"specialAttack":20,"specialDefense":20,"speed":45},"typeIds":[7],"types":["Bug"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":7},{"level":15,"moveId":13}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[{"to":11,"level":7,"method":"level"}]},"11":{"id":11,"name":"Metapod","reward":5,"baseExperience":72,"stats":{"hp":50,"attack":20,"defense":55,"specialAttack":25,"specialDefense":25,"speed":30},"typeIds":[7],"types":["Bug"],"learnset":[{"level":0,"moveId":14}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[{"to":12,"level":10,"method":"level"}]},"12":{"id":12,"name":"Butterfree","reward":10,"baseExperience":173,"stats":{"hp":60,"attack":45,"defense":50,"specialAttack":80,"specialDefense":80,"speed":70},"typeIds":[7,6],"types":["Bug","Flying"],"learnset":[{"level":0,"moveId":20},{"level":12,"moveId":24},{"level":13,"moveId":37},{"level":14,"moveId":26},{"level":16,"moveId":15},{"level":18,"moveId":38},{"level":22,"moveId":36},{"level":24,"moveId":89},{"level":28,"moveId":134},{"level":30,"moveId":145},{"level":34,"moveId":166},{"level":36,"moveId":129},{"level":42,"moveId":218},{"level":46,"moveId":279}],"tmMoveIds":[83,213,143,79,341,415,36,127,40,108,148,116,411,69,189,240,76,111,254,308,344,44,281],"shadowExtraTmMoveId":368,"evolutions":[]},"13":{"id":13,"name":"Weedle","reward":2,"baseExperience":39,"stats":{"hp":40,"attack":35,"defense":30,"specialAttack":20,"specialDefense":20,"speed":50},"typeIds":[7,2],"types":["Bug","Poison"],"learnset":[{"level":0,"moveId":8},{"level":0,"moveId":7},{"level":15,"moveId":13}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[{"to":14,"level":7,"method":"level"}]},"14":{"id":14,"name":"Kakuna","reward":5,"baseExperience":72,"stats":{"hp":45,"attack":25,"defense":50,"specialAttack":25,"specialDefense":25,"speed":35},"typeIds":[7,2],"types":["Bug","Poison"],"learnset":[{"level":0,"moveId":14}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[{"to":15,"level":10,"method":"level"}]},"15":{"id":15,"name":"Beedrill","reward":10,"baseExperience":173,"stats":{"hp":65,"attack":80,"defense":40,"specialAttack":45,"specialDefense":80,"speed":75},"typeIds":[7,2],"types":["Bug","Poison"],"learnset":[{"level":0,"moveId":21},{"level":13,"moveId":12},{"level":16,"moveId":39},{"level":19,"moveId":40},{"level":22,"moveId":33},{"level":25,"moveId":94},{"level":28,"moveId":135},{"level":31,"moveId":97},{"level":34,"moveId":96},{"level":37,"moveId":182},{"level":40,"moveId":167}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,382,69,180,182,240,76,273,44,411,268,344,224,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"16":{"id":16,"name":"Pidgey","reward":2,"baseExperience":50,"stats":{"hp":40,"attack":45,"defense":40,"specialAttack":35,"specialDefense":35,"speed":56},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":1},{"level":5,"moveId":2},{"level":9,"moveId":15},{"level":13,"moveId":4},{"level":17,"moveId":36},{"level":21,"moveId":77},{"level":25,"moveId":95},{"level":29,"moveId":97},{"level":33,"moveId":75},{"level":37,"moveId":158},{"level":41,"moveId":145},{"level":45,"moveId":78},{"level":49,"moveId":246},{"level":53,"moveId":318}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,411,69,44,111,248,427],"shadowExtraTmMoveId":368,"evolutions":[{"to":17,"level":18,"method":"level"}]},"17":{"id":17,"name":"Pidgeotto","reward":10,"baseExperience":113,"stats":{"hp":63,"attack":60,"defense":55,"specialAttack":50,"specialDefense":50,"speed":71},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":2},{"level":0,"moveId":15},{"level":13,"moveId":4},{"level":17,"moveId":36},{"level":22,"moveId":77},{"level":27,"moveId":95},{"level":32,"moveId":97},{"level":37,"moveId":75},{"level":42,"moveId":158},{"level":47,"moveId":145},{"level":52,"moveId":78},{"level":57,"moveId":246},{"level":62,"moveId":318}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,411,69,44,111,248,427],"shadowExtraTmMoveId":368,"evolutions":[{"to":18,"level":36,"method":"level"}]},"18":{"id":18,"name":"Pidgeot","reward":30,"baseExperience":172,"stats":{"hp":83,"attack":80,"defense":75,"specialAttack":70,"specialDefense":70,"speed":91},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":2},{"level":0,"moveId":15},{"level":0,"moveId":4},{"level":17,"moveId":36},{"level":22,"moveId":77},{"level":27,"moveId":95},{"level":32,"moveId":97},{"level":39,"moveId":75},{"level":44,"moveId":158},{"level":50,"moveId":145},{"level":56,"moveId":78},{"level":62,"moveId":246},{"level":68,"moveId":318}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,411,69,44,111,344,248,281,427],"shadowExtraTmMoveId":368,"evolutions":[]},"19":{"id":19,"name":"Rattata","reward":2,"baseExperience":57,"stats":{"hp":30,"attack":56,"defense":35,"specialAttack":25,"specialDefense":35,"speed":72},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":3},{"level":4,"moveId":4},{"level":7,"moveId":12},{"level":10,"moveId":19},{"level":13,"moveId":33},{"level":16,"moveId":34},{"level":19,"moveId":35},{"level":22,"moveId":84},{"level":25,"moveId":96},{"level":28,"moveId":136},{"level":31,"moveId":127},{"level":34,"moveId":167}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,142,202,69,407,23,111,224,248,289,411,308,233,346,207],"shadowExtraTmMoveId":368,"evolutions":[{"to":20,"level":20,"method":"level"}]},"20":{"id":20,"name":"Raticate","reward":10,"baseExperience":116,"stats":{"hp":75,"attack":71,"defense":70,"specialAttack":40,"specialDefense":80,"speed":77},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":3},{"level":0,"moveId":4},{"level":0,"moveId":12},{"level":0,"moveId":180},{"level":10,"moveId":19},{"level":13,"moveId":33},{"level":16,"moveId":34},{"level":19,"moveId":35},{"level":20,"moveId":30},{"level":24,"moveId":84},{"level":29,"moveId":96},{"level":34,"moveId":136},{"level":39,"moveId":127},{"level":44,"moveId":167}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,142,202,69,407,23,180,101,111,224,248,289,411,281,308,344,233,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[]},"21":{"id":21,"name":"Spearow","reward":4,"baseExperience":58,"stats":{"hp":40,"attack":60,"defense":30,"specialAttack":31,"specialDefense":31,"speed":70},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":5},{"level":5,"moveId":43},{"level":9,"moveId":21},{"level":13,"moveId":33},{"level":17,"moveId":44},{"level":21,"moveId":78},{"level":25,"moveId":97},{"level":29,"moveId":96},{"level":33,"moveId":158},{"level":37,"moveId":185}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,411,69,111,248,273,44,427],"shadowExtraTmMoveId":368,"evolutions":[{"to":22,"level":20,"method":"level"}]},"22":{"id":22,"name":"Fearow","reward":10,"baseExperience":162,"stats":{"hp":65,"attack":90,"defense":65,"specialAttack":61,"specialDefense":61,"speed":100},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":5},{"level":0,"moveId":43},{"level":0,"moveId":21},{"level":0,"moveId":248},{"level":13,"moveId":33},{"level":17,"moveId":44},{"level":23,"moveId":78},{"level":29,"moveId":97},{"level":35,"moveId":96},{"level":41,"moveId":158},{"level":47,"moveId":185},{"level":53,"moveId":319}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,411,69,111,248,273,344,44,281,427],"shadowExtraTmMoveId":368,"evolutions":[]},"23":{"id":23,"name":"Ekans","reward":5,"baseExperience":62,"stats":{"hp":35,"attack":60,"defense":44,"specialAttack":40,"specialDefense":54,"speed":55},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":4,"moveId":8},{"level":9,"moveId":19},{"level":12,"moveId":71},{"level":17,"moveId":72},{"level":20,"moveId":73},{"level":25,"moveId":98},{"level":26,"moveId":124},{"level":27,"moveId":126},{"level":28,"moveId":137},{"level":33,"moveId":159},{"level":36,"moveId":172},{"level":41,"moveId":221},{"level":44,"moveId":241},{"level":49,"moveId":288}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,207,182,189,194,199,111,411,289,298,155,310,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":24,"level":22,"method":"level"}]},"24":{"id":24,"name":"Arbok","reward":20,"baseExperience":147,"stats":{"hp":60,"attack":85,"defense":69,"specialAttack":65,"specialDefense":79,"speed":80},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":0,"moveId":92},{"level":0,"moveId":156},{"level":0,"moveId":8},{"level":0,"moveId":19},{"level":0,"moveId":249},{"level":12,"moveId":71},{"level":17,"moveId":72},{"level":20,"moveId":73},{"level":22,"moveId":84},{"level":27,"moveId":98},{"level":28,"moveId":124},{"level":29,"moveId":126},{"level":32,"moveId":137},{"level":39,"moveId":159},{"level":44,"moveId":172},{"level":51,"moveId":221},{"level":53,"moveId":241},{"level":63,"moveId":288}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,207,182,189,194,199,111,411,289,281,298,344,155,310,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"25":{"id":25,"name":"Pikachu","reward":5,"baseExperience":82,"stats":{"hp":35,"attack":55,"defense":30,"specialAttack":50,"specialDefense":40,"speed":90},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":5},{"level":0,"moveId":22},{"level":5,"moveId":3},{"level":8,"moveId":23},{"level":13,"moveId":4},{"level":18,"moveId":41},{"level":21,"moveId":79},{"level":26,"moveId":125},{"level":29,"moveId":142},{"level":34,"moveId":168},{"level":37,"moveId":97},{"level":42,"moveId":219},{"level":45,"moveId":212},{"level":50,"moveId":202}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,178,53,40,142,316,202,207,69,23,154,68,367,111,233,225,289,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":26,"itemId":3,"item":"Thunder Stone","method":"item"}]},"26":{"id":26,"name":"Raichu","reward":20,"baseExperience":122,"stats":{"hp":60,"attack":85,"defense":50,"specialAttack":95,"specialDefense":85,"speed":110},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":22},{"level":0,"moveId":3},{"level":0,"moveId":4},{"level":0,"moveId":142},{"level":11,"moveId":23},{"level":21,"moveId":41},{"level":24,"moveId":79},{"level":29,"moveId":125},{"level":37,"moveId":168},{"level":40,"moveId":97},{"level":45,"moveId":219},{"level":48,"moveId":212},{"level":53,"moveId":202}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,178,53,40,142,316,207,69,23,202,154,68,367,111,233,344,225,289,281,426],"shadowExtraTmMoveId":368,"evolutions":[]},"27":{"id":27,"name":"Sandshrew","reward":5,"baseExperience":93,"stats":{"hp":50,"attack":75,"defense":90,"specialAttack":10,"specialDefense":35,"speed":40},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":6},{"level":3,"moveId":25},{"level":7,"moveId":2},{"level":9,"moveId":8},{"level":13,"moveId":32},{"level":15,"moveId":69},{"level":19,"moveId":46},{"level":21,"moveId":68},{"level":25,"moveId":55},{"level":27,"moveId":128},{"level":31,"moveId":130},{"level":33,"moveId":160},{"level":37,"moveId":186}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,53,40,207,69,180,182,186,194,199,154,68,55,224,245,44,411,367,160,155,289,268,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":28,"level":22,"method":"level"}]},"28":{"id":28,"name":"Sandslash","reward":20,"baseExperience":163,"stats":{"hp":75,"attack":100,"defense":120,"specialAttack":25,"specialDefense":65,"speed":65},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":25},{"level":0,"moveId":2},{"level":9,"moveId":8},{"level":13,"moveId":32},{"level":15,"moveId":69},{"level":19,"moveId":46},{"level":21,"moveId":68},{"level":22,"moveId":85},{"level":28,"moveId":55},{"level":33,"moveId":128},{"level":40,"moveId":130},{"level":45,"moveId":160},{"level":52,"moveId":186}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,53,40,207,69,180,182,186,194,199,44,154,68,55,224,245,367,160,289,411,297,281,344,155,268,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"29":{"id":29,"name":"Nidoran F","reward":6,"baseExperience":59,"stats":{"hp":55,"attack":47,"defense":52,"specialAttack":40,"specialDefense":40,"speed":41},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":5},{"level":0,"moveId":6},{"level":7,"moveId":3},{"level":9,"moveId":45},{"level":13,"moveId":8},{"level":19,"moveId":46},{"level":21,"moveId":19},{"level":25,"moveId":99},{"level":31,"moveId":94},{"level":33,"moveId":161},{"level":37,"moveId":84},{"level":45,"moveId":188}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,204,40,382,142,202,182,111,224,245,44,289,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":30,"level":16,"method":"level"}]},"30":{"id":30,"name":"Nidorina","reward":15,"baseExperience":117,"stats":{"hp":70,"attack":62,"defense":67,"specialAttack":55,"specialDefense":55,"speed":56},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":5},{"level":0,"moveId":6},{"level":7,"moveId":3},{"level":9,"moveId":45},{"level":13,"moveId":8},{"level":20,"moveId":46},{"level":23,"moveId":19},{"level":28,"moveId":99},{"level":35,"moveId":94},{"level":38,"moveId":161},{"level":43,"moveId":84},{"level":58,"moveId":188}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,382,142,202,182,111,224,245,44,289,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":31,"itemId":1,"item":"Moon Stone","method":"item"}]},"31":{"id":31,"name":"Nidoqueen","reward":30,"baseExperience":194,"stats":{"hp":90,"attack":82,"defense":87,"specialAttack":75,"specialDefense":85,"speed":76},"typeIds":[2,14],"types":["Poison","Ground"],"learnset":[{"level":0,"moveId":3},{"level":0,"moveId":6},{"level":0,"moveId":45},{"level":0,"moveId":8},{"level":23,"moveId":88},{"level":24,"moveId":46},{"level":26,"moveId":19},{"level":31,"moveId":99},{"level":38,"moveId":94},{"level":41,"moveId":161},{"level":43,"moveId":206},{"level":46,"moveId":84},{"level":58,"moveId":305},{"level":61,"moveId":188}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,122,382,178,53,40,142,316,202,317,203,367,182,184,186,194,199,154,407,68,101,111,55,224,245,308,349,344,44,289,297,411,281,298,155,346,207,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"32":{"id":32,"name":"Nidoran M","reward":6,"baseExperience":60,"stats":{"hp":46,"attack":57,"defense":40,"specialAttack":40,"specialDefense":40,"speed":50},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":43},{"level":0,"moveId":42},{"level":7,"moveId":12},{"level":9,"moveId":45},{"level":13,"moveId":8},{"level":19,"moveId":21},{"level":21,"moveId":80},{"level":25,"moveId":99},{"level":31,"moveId":94},{"level":33,"moveId":161},{"level":37,"moveId":182},{"level":45,"moveId":275}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,204,40,382,142,202,182,111,224,245,289,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":33,"level":16,"method":"level"}]},"33":{"id":33,"name":"Nidorino","reward":15,"baseExperience":118,"stats":{"hp":61,"attack":72,"defense":57,"specialAttack":55,"specialDefense":55,"speed":65},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":43},{"level":0,"moveId":42},{"level":7,"moveId":12},{"level":9,"moveId":45},{"level":13,"moveId":8},{"level":20,"moveId":21},{"level":23,"moveId":80},{"level":28,"moveId":99},{"level":35,"moveId":94},{"level":38,"moveId":161},{"level":43,"moveId":182},{"level":58,"moveId":275}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,382,142,202,182,111,224,245,289,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":34,"itemId":1,"item":"Moon Stone","method":"item"}]},"34":{"id":34,"name":"Nidoking","reward":30,"baseExperience":195,"stats":{"hp":81,"attack":92,"defense":77,"specialAttack":85,"specialDefense":75,"speed":85},"typeIds":[2,14],"types":["Poison","Ground"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":12},{"level":0,"moveId":45},{"level":0,"moveId":8},{"level":23,"moveId":88},{"level":24,"moveId":21},{"level":26,"moveId":80},{"level":31,"moveId":99},{"level":35,"moveId":171},{"level":38,"moveId":94},{"level":41,"moveId":161},{"level":43,"moveId":206},{"level":46,"moveId":182},{"level":58,"moveId":335},{"level":61,"moveId":275}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,178,53,40,382,142,316,202,317,203,407,182,184,186,194,199,154,101,367,111,55,224,308,245,349,289,411,297,281,298,344,155,346,425,207,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"35":{"id":35,"name":"Clefairy","reward":8,"baseExperience":68,"stats":{"hp":70,"attack":45,"defense":48,"specialAttack":60,"specialDefense":65,"speed":35},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":48},{"level":0,"moveId":5},{"level":4,"moveId":60},{"level":7,"moveId":47},{"level":10,"moveId":61},{"level":13,"moveId":25},{"level":16,"moveId":62},{"level":19,"moveId":63},{"level":22,"moveId":86},{"level":28,"moveId":138},{"level":31,"moveId":113},{"level":40,"moveId":163},{"level":34,"moveId":58},{"level":37,"moveId":187},{"level":43,"moveId":239},{"level":46,"moveId":212},{"level":49,"moveId":292},{"level":52,"moveId":304},{"level":55,"moveId":322}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,53,40,240,142,316,202,148,116,317,203,367,58,23,184,154,68,111,225,251,254,308,332,289,233,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":36,"itemId":1,"item":"Moon Stone","method":"item"}]},"36":{"id":36,"name":"Clefable","reward":20,"baseExperience":126,"stats":{"hp":95,"attack":70,"defense":73,"specialAttack":95,"specialDefense":90,"speed":60},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":61},{"level":0,"moveId":58},{"level":0,"moveId":63},{"level":0,"moveId":47},{"level":7,"moveId":60},{"level":16,"moveId":25},{"level":19,"moveId":62},{"level":25,"moveId":86},{"level":31,"moveId":138},{"level":34,"moveId":113},{"level":40,"moveId":187},{"level":43,"moveId":163},{"level":46,"moveId":239},{"level":49,"moveId":212},{"level":52,"moveId":292},{"level":55,"moveId":304},{"level":58,"moveId":322}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,53,40,240,142,316,202,148,116,317,203,367,58,23,184,154,68,111,225,251,254,308,289,233,332,411,281,344,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[]},"37":{"id":37,"name":"Vulpix","reward":8,"baseExperience":63,"stats":{"hp":38,"attack":41,"defense":40,"specialAttack":50,"specialDefense":65,"speed":65},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":10},{"level":4,"moveId":3},{"level":7,"moveId":101},{"level":11,"moveId":4},{"level":14,"moveId":105},{"level":17,"moveId":81},{"level":21,"moveId":49},{"level":24,"moveId":106},{"level":27,"moveId":129},{"level":31,"moveId":151},{"level":34,"moveId":169},{"level":37,"moveId":184},{"level":44,"moveId":242},{"level":51,"moveId":302},{"level":54,"moveId":203}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,207,203,69,184,289,411,101,310],"shadowExtraTmMoveId":368,"evolutions":[{"to":38,"itemId":5,"item":"Fire Stone","method":"item"}]},"38":{"id":38,"name":"Ninetales","reward":20,"baseExperience":178,"stats":{"hp":73,"attack":67,"defense":75,"specialAttack":81,"specialDefense":100,"speed":109},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":10},{"level":0,"moveId":4},{"level":0,"moveId":81},{"level":0,"moveId":129},{"level":0,"moveId":191},{"level":7,"moveId":3},{"level":10,"moveId":101},{"level":17,"moveId":105},{"level":24,"moveId":49},{"level":27,"moveId":106},{"level":34,"moveId":151},{"level":37,"moveId":169},{"level":40,"moveId":184},{"level":47,"moveId":242},{"level":54,"moveId":302},{"level":57,"moveId":203}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,207,203,69,184,240,101,332,289,411,281,344,310],"shadowExtraTmMoveId":368,"evolutions":[]},"39":{"id":39,"name":"Jigglypuff","reward":8,"baseExperience":76,"stats":{"hp":115,"attack":45,"defense":20,"specialAttack":45,"specialDefense":25,"speed":20},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":47},{"level":5,"moveId":25},{"level":9,"moveId":48},{"level":13,"moveId":49},{"level":17,"moveId":50},{"level":21,"moveId":68},{"level":25,"moveId":61},{"level":29,"moveId":143},{"level":33,"moveId":114},{"level":37,"moveId":160},{"level":41,"moveId":86},{"level":45,"moveId":214},{"level":49,"moveId":291},{"level":53,"moveId":127}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,53,40,240,142,316,202,148,116,317,203,367,23,184,154,68,111,225,251,254,308,233,160,411,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":40,"itemId":1,"item":"Moon Stone","method":"item"}]},"40":{"id":40,"name":"Wigglytuff","reward":20,"baseExperience":109,"stats":{"hp":140,"attack":70,"defense":45,"specialAttack":75,"specialDefense":50,"speed":45},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":47},{"level":0,"moveId":25},{"level":0,"moveId":61},{"level":0,"moveId":49},{"level":12,"moveId":48},{"level":20,"moveId":50},{"level":24,"moveId":68},{"level":32,"moveId":143},{"level":36,"moveId":114},{"level":40,"moveId":160},{"level":44,"moveId":86},{"level":48,"moveId":214},{"level":52,"moveId":291},{"level":56,"moveId":127}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,53,40,240,142,316,202,148,116,317,203,367,23,184,154,68,111,225,251,254,308,233,160,411,281,344,346,207,426],"shadowExtraTmMoveId":368,"evolutions":[]},"41":{"id":41,"name":"Zubat","reward":8,"baseExperience":54,"stats":{"hp":40,"attack":45,"defense":35,"specialAttack":30,"specialDefense":40,"speed":55},"typeIds":[2,6],"types":["Poison","Flying"],"learnset":[{"level":0,"moveId":54},{"level":5,"moveId":38},{"level":9,"moveId":74},{"level":13,"moveId":19},{"level":17,"moveId":75},{"level":21,"moveId":81},{"level":25,"moveId":100},{"level":33,"moveId":162},{"level":37,"moveId":188},{"level":41,"moveId":221},{"level":45,"moveId":246}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,108,382,69,189,411,308,44,111,248,427],"shadowExtraTmMoveId":368,"evolutions":[{"to":42,"level":22,"method":"level"}]},"42":{"id":42,"name":"Golbat","reward":20,"baseExperience":171,"stats":{"hp":75,"attack":80,"defense":70,"specialAttack":65,"specialDefense":75,"speed":90},"typeIds":[2,6],"types":["Poison","Flying"],"learnset":[{"level":0,"moveId":72},{"level":0,"moveId":54},{"level":0,"moveId":38},{"level":0,"moveId":74},{"level":13,"moveId":19},{"level":17,"moveId":75},{"level":21,"moveId":81},{"level":27,"moveId":100},{"level":39,"moveId":162},{"level":45,"moveId":188},{"level":51,"moveId":221},{"level":57,"moveId":246}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,108,382,69,189,411,44,308,111,344,248,281,427],"shadowExtraTmMoveId":368,"evolutions":[]},"43":{"id":43,"name":"Oddish","reward":10,"baseExperience":78,"stats":{"hp":45,"attack":50,"defense":55,"specialAttack":75,"specialDefense":65,"speed":30},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":107},{"level":5,"moveId":76},{"level":9,"moveId":73},{"level":13,"moveId":24},{"level":15,"moveId":37},{"level":17,"moveId":26},{"level":21,"moveId":108},{"level":25,"moveId":113},{"level":33,"moveId":163},{"level":37,"moveId":189},{"level":41,"moveId":153}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,382,180,189,411,240,76,224,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":44,"level":21,"method":"level"}]},"44":{"id":44,"name":"Gloom","reward":25,"baseExperience":132,"stats":{"hp":60,"attack":65,"defense":70,"specialAttack":85,"specialDefense":75,"speed":40},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":107},{"level":0,"moveId":76},{"level":0,"moveId":73},{"level":13,"moveId":24},{"level":15,"moveId":37},{"level":17,"moveId":26},{"level":23,"moveId":108},{"level":29,"moveId":113},{"level":41,"moveId":163},{"level":47,"moveId":189},{"level":53,"moveId":153}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,382,180,189,411,240,76,224,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":45,"itemId":2,"item":"Leaf Stone","method":"item"}]},"45":{"id":45,"name":"Vileplume","reward":45,"baseExperience":184,"stats":{"hp":75,"attack":80,"defense":85,"specialAttack":100,"specialDefense":90,"speed":50},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":108},{"level":0,"moveId":37},{"level":0,"moveId":24},{"level":0,"moveId":235},{"level":20,"moveId":26},{"level":32,"moveId":113},{"level":44,"moveId":163},{"level":50,"moveId":189},{"level":53,"moveId":153},{"level":65,"moveId":240}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,180,189,411,240,76,344,224,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"46":{"id":46,"name":"Paras","reward":8,"baseExperience":70,"stats":{"hp":35,"attack":70,"defense":55,"specialAttack":45,"specialDefense":55,"speed":25},"typeIds":[7,1],"types":["Bug","Grass"],"learnset":[{"level":0,"moveId":6},{"level":6,"moveId":37},{"level":7,"moveId":24},{"level":11,"moveId":54},{"level":17,"moveId":55},{"level":22,"moveId":87},{"level":27,"moveId":130},{"level":33,"moveId":91},{"level":38,"moveId":189},{"level":43,"moveId":235},{"level":49,"moveId":166},{"level":54,"moveId":268}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,207,180,189,411,240,55,76,273,44,268,224,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":47,"level":24,"method":"level"}]},"47":{"id":47,"name":"Parasect","reward":20,"baseExperience":128,"stats":{"hp":60,"attack":95,"defense":80,"specialAttack":60,"specialDefense":80,"speed":30},"typeIds":[7,1],"types":["Bug","Grass"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":37},{"level":0,"moveId":24},{"level":0,"moveId":54},{"level":0,"moveId":250},{"level":17,"moveId":55},{"level":22,"moveId":87},{"level":29,"moveId":130},{"level":37,"moveId":91},{"level":44,"moveId":189},{"level":51,"moveId":235},{"level":59,"moveId":166},{"level":66,"moveId":268}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,207,180,189,411,240,55,76,273,44,268,344,224,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"48":{"id":48,"name":"Venonat","reward":10,"baseExperience":75,"stats":{"hp":60,"attack":55,"defense":50,"specialAttack":40,"specialDefense":55,"speed":45},"typeIds":[7,2],"types":["Bug","Poison"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":49},{"level":0,"moveId":227},{"level":5,"moveId":38},{"level":11,"moveId":20},{"level":13,"moveId":24},{"level":17,"moveId":54},{"level":23,"moveId":37},{"level":25,"moveId":89},{"level":29,"moveId":26},{"level":35,"moveId":265},{"level":37,"moveId":223},{"level":41,"moveId":188},{"level":47,"moveId":148}],"tmMoveIds":[83,213,143,79,341,415,180,27,127,40,108,148,382,69,76,189,411,240,225,281],"shadowExtraTmMoveId":368,"evolutions":[{"to":49,"level":31,"method":"level"}]},"49":{"id":49,"name":"Venomoth","reward":20,"baseExperience":138,"stats":{"hp":70,"attack":65,"defense":60,"specialAttack":90,"specialDefense":75,"speed":90},"typeIds":[7,2],"types":["Bug","Poison"],"learnset":[{"level":0,"moveId":134},{"level":0,"moveId":1},{"level":0,"moveId":49},{"level":0,"moveId":227},{"level":0,"moveId":38},{"level":11,"moveId":20},{"level":13,"moveId":24},{"level":17,"moveId":54},{"level":23,"moveId":37},{"level":25,"moveId":89},{"level":29,"moveId":26},{"level":31,"moveId":15},{"level":37,"moveId":265},{"level":41,"moveId":223},{"level":47,"moveId":188},{"level":55,"moveId":148},{"level":59,"moveId":218},{"level":63,"moveId":279}],"tmMoveIds":[83,213,143,79,341,415,180,36,27,127,40,108,148,382,69,76,189,411,44,240,344,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"50":{"id":50,"name":"Diglett","reward":10,"baseExperience":81,"stats":{"hp":10,"attack":55,"defense":30,"specialAttack":35,"specialDefense":45,"speed":90},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":2},{"level":4,"moveId":5},{"level":7,"moveId":74},{"level":12,"moveId":217},{"level":15,"moveId":67},{"level":18,"moveId":155},{"level":23,"moveId":35},{"level":26,"moveId":159},{"level":29,"moveId":206},{"level":34,"moveId":207},{"level":37,"moveId":130},{"level":40,"moveId":194},{"level":45,"moveId":276}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,382,207,186,194,199,411,224,245,44,155,414],"shadowExtraTmMoveId":368,"evolutions":[{"to":51,"level":26,"method":"level"}]},"51":{"id":51,"name":"Dugtrio","reward":20,"baseExperience":153,"stats":{"hp":35,"attack":100,"defense":60,"specialAttack":50,"specialDefense":70,"speed":110},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":181},{"level":0,"moveId":6},{"level":0,"moveId":2},{"level":0,"moveId":5},{"level":0,"moveId":251},{"level":7,"moveId":74},{"level":12,"moveId":217},{"level":15,"moveId":67},{"level":18,"moveId":155},{"level":23,"moveId":35},{"level":26,"moveId":128},{"level":28,"moveId":159},{"level":33,"moveId":206},{"level":40,"moveId":207},{"level":45,"moveId":130},{"level":50,"moveId":194},{"level":57,"moveId":276}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,382,207,186,194,199,44,411,224,298,245,297,281,344,155,414],"shadowExtraTmMoveId":368,"evolutions":[]},"52":{"id":52,"name":"Meowth","reward":10,"baseExperience":69,"stats":{"hp":40,"attack":35,"defense":35,"specialAttack":50,"specialDefense":40,"speed":90},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":5},{"level":6,"moveId":19},{"level":9,"moveId":175},{"level":14,"moveId":46},{"level":17,"moveId":72},{"level":22,"moveId":176},{"level":25,"moveId":177},{"level":30,"moveId":178},{"level":33,"moveId":130},{"level":38,"moveId":191},{"level":41,"moveId":96},{"level":49,"moveId":181}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,178,40,142,202,207,69,407,44,111,411,224,225,308,245,254,289,310],"shadowExtraTmMoveId":368,"evolutions":[{"to":53,"level":28,"method":"level"}]},"53":{"id":53,"name":"Persian","reward":20,"baseExperience":148,"stats":{"hp":65,"attack":60,"defense":60,"specialAttack":75,"specialDefense":65,"speed":115},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":5},{"level":0,"moveId":19},{"level":0,"moveId":175},{"level":14,"moveId":46},{"level":17,"moveId":72},{"level":22,"moveId":176},{"level":25,"moveId":177},{"level":32,"moveId":179},{"level":37,"moveId":130},{"level":44,"moveId":191},{"level":49,"moveId":96},{"level":61,"moveId":181}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,178,40,142,202,207,69,407,44,101,111,411,224,225,308,245,254,344,289,281,310],"shadowExtraTmMoveId":368,"evolutions":[]},"54":{"id":54,"name":"Psyduck","reward":100,"baseExperience":80,"stats":{"hp":50,"attack":52,"defense":48,"specialAttack":65,"specialDefense":50,"speed":55},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":109},{"level":5,"moveId":3},{"level":9,"moveId":31},{"level":14,"moveId":49},{"level":18,"moveId":20},{"level":22,"moveId":93},{"level":27,"moveId":46},{"level":31,"moveId":72},{"level":35,"moveId":339},{"level":40,"moveId":210},{"level":44,"moveId":223},{"level":48,"moveId":337},{"level":53,"moveId":193},{"level":57,"moveId":377}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,178,53,40,154,367,407,69,346,289,207,111,148,245,332,225,409,44,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":55,"level":33,"method":"level"}]},"55":{"id":55,"name":"Golduck","reward":150,"baseExperience":174,"stats":{"hp":80,"attack":82,"defense":78,"specialAttack":95,"specialDefense":80,"speed":85},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":378},{"level":0,"moveId":6},{"level":0,"moveId":109},{"level":0,"moveId":3},{"level":0,"moveId":31},{"level":14,"moveId":49},{"level":18,"moveId":20},{"level":22,"moveId":93},{"level":27,"moveId":46},{"level":31,"moveId":72},{"level":37,"moveId":339},{"level":44,"moveId":210},{"level":50,"moveId":223},{"level":56,"moveId":337},{"level":63,"moveId":193},{"level":69,"moveId":377}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,178,53,40,154,367,407,69,346,281,289,55,207,111,148,245,332,344,225,409,44,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"56":{"id":56,"name":"Mankey","reward":8,"baseExperience":74,"stats":{"hp":40,"attack":80,"defense":35,"specialAttack":35,"specialDefense":45,"speed":70},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":51},{"level":0,"moveId":43},{"level":0,"moveId":12},{"level":9,"moveId":46},{"level":13,"moveId":52},{"level":17,"moveId":53},{"level":21,"moveId":72},{"level":25,"moveId":96},{"level":33,"moveId":164},{"level":37,"moveId":190},{"level":41,"moveId":171},{"level":45,"moveId":277},{"level":49,"moveId":290},{"level":53,"moveId":320}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,178,53,40,122,142,316,202,317,207,58,69,182,194,199,411,44,154,367,111,155,289,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":57,"level":28,"method":"level"}]},"57":{"id":57,"name":"Primeape","reward":20,"baseExperience":149,"stats":{"hp":65,"attack":105,"defense":60,"specialAttack":60,"specialDefense":70,"speed":95},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":51},{"level":0,"moveId":43},{"level":0,"moveId":12},{"level":9,"moveId":46},{"level":13,"moveId":52},{"level":17,"moveId":53},{"level":21,"moveId":72},{"level":25,"moveId":96},{"level":28,"moveId":40},{"level":35,"moveId":164},{"level":41,"moveId":190},{"level":47,"moveId":171},{"level":53,"moveId":277},{"level":59,"moveId":290},{"level":63,"moveId":320}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,178,53,40,122,142,316,202,317,207,58,69,182,194,199,411,44,154,367,111,289,297,344,155,281,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"58":{"id":58,"name":"Growlithe","reward":8,"baseExperience":91,"stats":{"hp":60,"attack":75,"defense":45,"specialAttack":65,"specialDefense":50,"speed":55},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":19},{"level":0,"moveId":101},{"level":6,"moveId":10},{"level":9,"moveId":43},{"level":14,"moveId":102},{"level":17,"moveId":99},{"level":20,"moveId":103},{"level":25,"moveId":104},{"level":28,"moveId":92},{"level":31,"moveId":106},{"level":34,"moveId":27},{"level":39,"moveId":184},{"level":42,"moveId":97},{"level":45,"moveId":84},{"level":48,"moveId":287},{"level":51,"moveId":303},{"level":56,"moveId":330}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,29,207,203,69,184,411,44,101,289,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":59,"itemId":5,"item":"Fire Stone","method":"item"}]},"59":{"id":59,"name":"Arcanine","reward":25,"baseExperience":213,"stats":{"hp":95,"attack":115,"defense":80,"specialAttack":95,"specialDefense":80,"speed":90},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":19},{"level":0,"moveId":101},{"level":0,"moveId":92},{"level":0,"moveId":102},{"level":0,"moveId":249},{"level":9,"moveId":10},{"level":12,"moveId":43},{"level":20,"moveId":99},{"level":23,"moveId":103},{"level":28,"moveId":104},{"level":34,"moveId":106},{"level":37,"moveId":27},{"level":39,"moveId":192},{"level":42,"moveId":184},{"level":45,"moveId":97},{"level":48,"moveId":84},{"level":51,"moveId":287},{"level":54,"moveId":303},{"level":59,"moveId":330}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,29,116,207,203,69,184,240,101,411,349,344,44,289,281,426],"shadowExtraTmMoveId":368,"evolutions":[]},"60":{"id":60,"name":"Poliwag","reward":10,"baseExperience":60,"stats":{"hp":40,"attack":50,"defense":40,"specialAttack":40,"specialDefense":40,"speed":90},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":109},{"level":5,"moveId":11},{"level":8,"moveId":110},{"level":11,"moveId":31},{"level":15,"moveId":61},{"level":18,"moveId":111},{"level":21,"moveId":114},{"level":25,"moveId":112},{"level":28,"moveId":139},{"level":31,"moveId":152},{"level":35,"moveId":86},{"level":38,"moveId":193},{"level":41,"moveId":159}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,407,40,148,111,346,207,409,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":61,"level":25,"method":"level"}]},"61":{"id":61,"name":"Poliwhirl","reward":20,"baseExperience":131,"stats":{"hp":65,"attack":65,"defense":65,"specialAttack":50,"specialDefense":50,"speed":90},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":109},{"level":0,"moveId":11},{"level":0,"moveId":110},{"level":11,"moveId":31},{"level":15,"moveId":61},{"level":18,"moveId":111},{"level":21,"moveId":114},{"level":27,"moveId":112},{"level":32,"moveId":139},{"level":37,"moveId":152},{"level":43,"moveId":86},{"level":48,"moveId":193},{"level":53,"moveId":159}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,53,407,40,148,58,194,367,111,346,155,207,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":62,"itemId":4,"item":"Water Stone","method":"item"}]},"62":{"id":62,"name":"Poliwrath","reward":40,"baseExperience":185,"stats":{"hp":90,"attack":85,"defense":95,"specialAttack":70,"specialDefense":90,"speed":70},"typeIds":[3,13],"types":["Water","Fighting"],"learnset":[{"level":0,"moveId":112},{"level":0,"moveId":61},{"level":0,"moveId":110},{"level":0,"moveId":230},{"level":14,"moveId":31},{"level":21,"moveId":111},{"level":24,"moveId":114},{"level":32,"moveId":154},{"level":35,"moveId":139},{"level":40,"moveId":152},{"level":43,"moveId":236},{"level":46,"moveId":86},{"level":51,"moveId":193},{"level":53,"moveId":321},{"level":56,"moveId":159}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,53,407,40,148,58,194,199,154,367,111,281,155,346,344,207,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"63":{"id":63,"name":"Abra","reward":20,"baseExperience":75,"stats":{"hp":25,"attack":20,"defense":15,"specialAttack":105,"specialDefense":55,"speed":90},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":116}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,148,116,411,58,316,23,317,154,367,111,233,332,225,251,308,254,289],"shadowExtraTmMoveId":368,"evolutions":[{"to":64,"level":16,"method":"level"}]},"64":{"id":64,"name":"Kadabra","reward":40,"baseExperience":145,"stats":{"hp":40,"attack":35,"defense":30,"specialAttack":120,"specialDefense":70,"speed":105},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":116},{"level":0,"moveId":20},{"level":0,"moveId":252},{"level":18,"moveId":49},{"level":22,"moveId":117},{"level":24,"moveId":118},{"level":28,"moveId":89},{"level":30,"moveId":146},{"level":34,"moveId":170},{"level":36,"moveId":115},{"level":40,"moveId":196},{"level":46,"moveId":148},{"level":48,"moveId":286}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,148,116,207,58,316,23,317,154,367,111,411,233,332,225,251,308,254,289],"shadowExtraTmMoveId":368,"evolutions":[]},"65":{"id":65,"name":"Alakazam","reward":65,"baseExperience":186,"stats":{"hp":55,"attack":50,"defense":45,"specialAttack":135,"specialDefense":85,"speed":120},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":116},{"level":0,"moveId":20},{"level":0,"moveId":252},{"level":18,"moveId":49},{"level":22,"moveId":117},{"level":24,"moveId":118},{"level":28,"moveId":89},{"level":30,"moveId":146},{"level":34,"moveId":170},{"level":36,"moveId":115},{"level":40,"moveId":196},{"level":42,"moveId":220},{"level":46,"moveId":148},{"level":48,"moveId":286}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,148,116,207,58,316,23,317,154,367,111,411,233,225,251,308,344,332,254,289,281],"shadowExtraTmMoveId":368,"evolutions":[]},"66":{"id":66,"name":"Machop","reward":20,"baseExperience":75,"stats":{"hp":70,"attack":80,"defense":50,"specialAttack":35,"specialDefense":35,"speed":35},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":51},{"level":0,"moveId":43},{"level":7,"moveId":12},{"level":10,"moveId":52},{"level":13,"moveId":226},{"level":19,"moveId":227},{"level":22,"moveId":53},{"level":25,"moveId":228},{"level":31,"moveId":229},{"level":34,"moveId":230},{"level":37,"moveId":86},{"level":43,"moveId":190},{"level":46,"moveId":30},{"level":49,"moveId":154}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,207,203,58,316,317,184,411,194,199,154,155,367,111,297,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":67,"level":28,"method":"level"}]},"67":{"id":67,"name":"Machoke","reward":40,"baseExperience":146,"stats":{"hp":80,"attack":100,"defense":70,"specialAttack":50,"specialDefense":60,"speed":45},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":51},{"level":0,"moveId":43},{"level":0,"moveId":12},{"level":0,"moveId":52},{"level":13,"moveId":226},{"level":19,"moveId":227},{"level":22,"moveId":53},{"level":25,"moveId":228},{"level":32,"moveId":229},{"level":36,"moveId":230},{"level":40,"moveId":86},{"level":44,"moveId":190},{"level":51,"moveId":30},{"level":55,"moveId":154}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,207,203,316,317,58,184,411,194,199,154,155,367,111,297,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"68":{"id":68,"name":"Machamp","reward":60,"baseExperience":193,"stats":{"hp":90,"attack":130,"defense":80,"specialAttack":65,"specialDefense":85,"speed":55},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":51},{"level":0,"moveId":43},{"level":0,"moveId":12},{"level":0,"moveId":52},{"level":0,"moveId":253},{"level":13,"moveId":226},{"level":19,"moveId":227},{"level":22,"moveId":53},{"level":25,"moveId":228},{"level":32,"moveId":229},{"level":36,"moveId":230},{"level":40,"moveId":86},{"level":44,"moveId":190},{"level":51,"moveId":30},{"level":55,"moveId":154}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,207,203,316,58,317,184,411,194,199,154,344,155,367,111,297,281,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"69":{"id":69,"name":"Bellsprout","reward":8,"baseExperience":84,"stats":{"hp":50,"attack":75,"defense":35,"specialAttack":70,"specialDefense":30,"speed":40},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":16},{"level":7,"moveId":91},{"level":11,"moveId":70},{"level":13,"moveId":26},{"level":15,"moveId":24},{"level":17,"moveId":37},{"level":23,"moveId":73},{"level":27,"moveId":131},{"level":29,"moveId":76},{"level":35,"moveId":172},{"level":39,"moveId":28},{"level":41,"moveId":125},{"level":47,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,382,180,189,411,240,76,224,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":70,"level":21,"method":"level"}]},"70":{"id":70,"name":"Weepinbell","reward":20,"baseExperience":151,"stats":{"hp":65,"attack":90,"defense":50,"specialAttack":85,"specialDefense":45,"speed":55},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":16},{"level":0,"moveId":91},{"level":0,"moveId":70},{"level":13,"moveId":26},{"level":15,"moveId":24},{"level":17,"moveId":37},{"level":23,"moveId":73},{"level":27,"moveId":131},{"level":29,"moveId":76},{"level":35,"moveId":172},{"level":39,"moveId":28},{"level":41,"moveId":125},{"level":47,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,382,180,189,411,240,76,224,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":71,"itemId":2,"item":"Leaf Stone","method":"item"}]},"71":{"id":71,"name":"Victreebel","reward":40,"baseExperience":191,"stats":{"hp":90,"attack":105,"defense":65,"specialAttack":100,"specialDefense":60,"speed":70},"typeIds":[1,2],"types":["Grass","Poison"],"learnset":[{"level":0,"moveId":98},{"level":0,"moveId":124},{"level":0,"moveId":126},{"level":0,"moveId":16},{"level":0,"moveId":26},{"level":0,"moveId":76},{"level":0,"moveId":28},{"level":18,"moveId":24},{"level":20,"moveId":37},{"level":26,"moveId":73},{"level":27,"moveId":132},{"level":30,"moveId":131},{"level":38,"moveId":172},{"level":44,"moveId":125},{"level":47,"moveId":282},{"level":48,"moveId":285},{"level":50,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,108,382,180,189,411,240,76,344,224,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"72":{"id":72,"name":"Tentacool","reward":20,"baseExperience":105,"stats":{"hp":40,"attack":40,"defense":35,"specialAttack":50,"specialDefense":100,"speed":70},"typeIds":[3,2],"types":["Water","Poison"],"learnset":[{"level":0,"moveId":8},{"level":5,"moveId":38},{"level":8,"moveId":201},{"level":12,"moveId":73},{"level":15,"moveId":94},{"level":19,"moveId":112},{"level":22,"moveId":70},{"level":26,"moveId":137},{"level":29,"moveId":197},{"level":33,"moveId":93},{"level":36,"moveId":182},{"level":40,"moveId":72},{"level":43,"moveId":237},{"level":47,"moveId":193},{"level":50,"moveId":298},{"level":54,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,40,382,108,407,180,182,189,111,409,224,298,346,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":73,"level":30,"method":"level"}]},"73":{"id":73,"name":"Tentacruel","reward":40,"baseExperience":205,"stats":{"hp":80,"attack":70,"defense":65,"specialAttack":80,"specialDefense":120,"speed":100},"typeIds":[3,2],"types":["Water","Poison"],"learnset":[{"level":0,"moveId":8},{"level":0,"moveId":38},{"level":0,"moveId":201},{"level":12,"moveId":73},{"level":15,"moveId":94},{"level":19,"moveId":112},{"level":22,"moveId":70},{"level":26,"moveId":137},{"level":29,"moveId":197},{"level":34,"moveId":93},{"level":38,"moveId":182},{"level":43,"moveId":72},{"level":47,"moveId":237},{"level":52,"moveId":193},{"level":56,"moveId":298},{"level":61,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,40,382,108,407,180,182,189,111,409,224,298,281,346,193,344,425,408],"shadowExtraTmMoveId":368,"evolutions":[]},"74":{"id":74,"name":"Geodude","reward":5,"baseExperience":73,"stats":{"hp":40,"attack":80,"defense":100,"specialAttack":30,"specialDefense":30,"speed":20},"typeIds":[10,14],"types":["Rock","Ground"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":25},{"level":4,"moveId":64},{"level":8,"moveId":65},{"level":11,"moveId":66},{"level":15,"moveId":67},{"level":18,"moveId":68},{"level":22,"moveId":82},{"level":25,"moveId":90},{"level":29,"moveId":144},{"level":32,"moveId":155},{"level":36,"moveId":173},{"level":39,"moveId":194},{"level":43,"moveId":238},{"level":46,"moveId":127},{"level":50,"moveId":297}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,207,203,58,144,317,184,186,194,199,160,154,55,411,367,68,155,101,297,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":75,"level":25,"method":"level"}]},"75":{"id":75,"name":"Graveler","reward":20,"baseExperience":134,"stats":{"hp":55,"attack":95,"defense":115,"specialAttack":45,"specialDefense":45,"speed":35},"typeIds":[10,14],"types":["Rock","Ground"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":25},{"level":0,"moveId":64},{"level":0,"moveId":65},{"level":11,"moveId":66},{"level":15,"moveId":67},{"level":18,"moveId":68},{"level":22,"moveId":82},{"level":27,"moveId":90},{"level":31,"moveId":144},{"level":36,"moveId":155},{"level":42,"moveId":173},{"level":47,"moveId":194},{"level":53,"moveId":238},{"level":58,"moveId":127},{"level":64,"moveId":297}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,207,203,317,58,144,184,186,194,199,160,154,367,55,411,68,101,297,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"76":{"id":76,"name":"Golem","reward":40,"baseExperience":177,"stats":{"hp":80,"attack":120,"defense":130,"specialAttack":55,"specialDefense":65,"speed":45},"typeIds":[10,14],"types":["Rock","Ground"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":25},{"level":0,"moveId":64},{"level":0,"moveId":65},{"level":11,"moveId":66},{"level":15,"moveId":67},{"level":18,"moveId":306},{"level":18,"moveId":68},{"level":22,"moveId":82},{"level":27,"moveId":90},{"level":31,"moveId":144},{"level":36,"moveId":155},{"level":42,"moveId":173},{"level":47,"moveId":194},{"level":53,"moveId":238},{"level":58,"moveId":127},{"level":64,"moveId":297},{"level":69,"moveId":343}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,207,203,317,58,144,184,186,194,199,160,154,367,55,411,68,101,297,344,281,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"77":{"id":77,"name":"Ponyta","reward":20,"baseExperience":152,"stats":{"hp":50,"attack":85,"defense":55,"specialAttack":65,"specialDefense":65,"speed":90},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":5},{"level":4,"moveId":3},{"level":9,"moveId":10},{"level":13,"moveId":103},{"level":17,"moveId":327},{"level":21,"moveId":355},{"level":25,"moveId":105},{"level":29,"moveId":27},{"level":33,"moveId":242},{"level":37,"moveId":97},{"level":41,"moveId":203},{"level":45,"moveId":403},{"level":49,"moveId":330}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,203,69,289,184,411,240,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":78,"level":40,"method":"level"}]},"78":{"id":78,"name":"Rapidash","reward":40,"baseExperience":192,"stats":{"hp":65,"attack":100,"defense":70,"specialAttack":80,"specialDefense":80,"speed":105},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":5},{"level":0,"moveId":182},{"level":0,"moveId":335},{"level":0,"moveId":4},{"level":0,"moveId":10},{"level":13,"moveId":103},{"level":17,"moveId":327},{"level":21,"moveId":355},{"level":25,"moveId":105},{"level":29,"moveId":27},{"level":33,"moveId":242},{"level":37,"moveId":97},{"level":40,"moveId":21},{"level":41,"moveId":203},{"level":45,"moveId":403},{"level":49,"moveId":330}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,203,69,281,289,184,344,411,240,182,426],"shadowExtraTmMoveId":368,"evolutions":[]},"79":{"id":79,"name":"Slowpoke","reward":10,"baseExperience":99,"stats":{"hp":90,"attack":65,"defense":65,"specialAttack":40,"specialDefense":40,"speed":15},"typeIds":[3,17],"types":["Water","Psychic"],"learnset":[{"level":0,"moveId":280},{"level":0,"moveId":340},{"level":0,"moveId":1},{"level":5,"moveId":5},{"level":9,"moveId":31},{"level":14,"moveId":20},{"level":19,"moveId":49},{"level":23,"moveId":216},{"level":28,"moveId":93},{"level":32,"moveId":223},{"level":36,"moveId":385},{"level":41,"moveId":337},{"level":45,"moveId":148},{"level":49,"moveId":111},{"level":54,"moveId":210},{"level":58,"moveId":386}],"tmMoveIds":[83,213,143,79,341,415,114,127,112,31,204,178,40,116,203,251,154,407,69,254,346,289,194,207,184,111,411,148,308,332,155,225,409,23,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":80,"level":37,"method":"level"}]},"80":{"id":80,"name":"Slowbro","reward":20,"baseExperience":164,"stats":{"hp":95,"attack":100,"defense":95,"specialAttack":100,"specialDefense":70,"speed":30},"typeIds":[3,17],"types":["Water","Psychic"],"learnset":[{"level":0,"moveId":280},{"level":0,"moveId":340},{"level":0,"moveId":1},{"level":0,"moveId":5},{"level":9,"moveId":31},{"level":14,"moveId":20},{"level":19,"moveId":49},{"level":23,"moveId":216},{"level":28,"moveId":93},{"level":32,"moveId":223},{"level":36,"moveId":385},{"level":37,"moveId":18},{"level":43,"moveId":337},{"level":49,"moveId":148},{"level":55,"moveId":111},{"level":62,"moveId":210},{"level":68,"moveId":386}],"tmMoveIds":[83,213,143,79,341,415,59,114,127,112,31,122,204,178,53,40,116,203,407,251,154,69,254,346,281,289,194,207,184,55,367,111,411,148,308,332,225,23,155,193,344,409,44,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"81":{"id":81,"name":"Magnemite","reward":20,"baseExperience":89,"stats":{"hp":25,"attack":35,"defense":70,"specialAttack":95,"specialDefense":55,"speed":45},"typeIds":[11,9],"types":["Electric","Steel"],"learnset":[{"level":0,"moveId":299},{"level":0,"moveId":1},{"level":6,"moveId":22},{"level":11,"moveId":38},{"level":14,"moveId":231},{"level":17,"moveId":23},{"level":22,"moveId":232},{"level":27,"moveId":41},{"level":30,"moveId":278},{"level":33,"moveId":300},{"level":38,"moveId":72},{"level":43,"moveId":219},{"level":46,"moveId":301},{"level":49,"moveId":234},{"level":54,"moveId":160},{"level":59,"moveId":336}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,142,202,116,411,69,23,68,111,233,160,247,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":82,"level":30,"method":"level"}]},"82":{"id":82,"name":"Magneton","reward":40,"baseExperience":161,"stats":{"hp":50,"attack":60,"defense":95,"specialAttack":120,"specialDefense":70,"speed":70},"typeIds":[11,9],"types":["Electric","Steel"],"learnset":[{"level":0,"moveId":251},{"level":0,"moveId":299},{"level":0,"moveId":1},{"level":0,"moveId":22},{"level":0,"moveId":38},{"level":14,"moveId":231},{"level":17,"moveId":23},{"level":22,"moveId":232},{"level":27,"moveId":41},{"level":30,"moveId":278},{"level":34,"moveId":300},{"level":40,"moveId":72},{"level":46,"moveId":219},{"level":50,"moveId":301},{"level":54,"moveId":234},{"level":60,"moveId":160},{"level":66,"moveId":336}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,142,202,116,411,69,23,68,111,233,160,247,344,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"83":{"id":83,"name":"Farfetch'd","reward":20,"baseExperience":94,"stats":{"hp":52,"attack":95,"defense":55,"specialAttack":58,"specialDefense":62,"speed":55},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":182},{"level":0,"moveId":42},{"level":0,"moveId":2},{"level":0,"moveId":43},{"level":0,"moveId":55},{"level":7,"moveId":21},{"level":9,"moveId":131},{"level":13,"moveId":44},{"level":19,"moveId":130},{"level":21,"moveId":100},{"level":25,"moveId":180},{"level":31,"moveId":97},{"level":33,"moveId":181},{"level":37,"moveId":162},{"level":43,"moveId":168},{"level":45,"moveId":273},{"level":49,"moveId":246},{"level":55,"moveId":323}],"tmMoveIds":[83,213,143,79,341,415,180,36,114,27,127,40,69,182,248,273,411,44,224,289,427],"shadowExtraTmMoveId":368,"evolutions":[]},"84":{"id":84,"name":"Doduo","reward":10,"baseExperience":96,"stats":{"hp":35,"attack":85,"defense":45,"specialAttack":35,"specialDefense":35,"speed":75},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":5},{"level":5,"moveId":4},{"level":10,"moveId":40},{"level":14,"moveId":21},{"level":19,"moveId":33},{"level":23,"moveId":383},{"level":28,"moveId":384},{"level":32,"moveId":293},{"level":37,"moveId":97},{"level":41,"moveId":185},{"level":46,"moveId":167},{"level":50,"moveId":171}],"tmMoveIds":[83,213,143,79,341,415,36,114,27,127,40,251,411,69,248,44,427],"shadowExtraTmMoveId":368,"evolutions":[{"to":85,"level":31,"method":"level"}]},"85":{"id":85,"name":"Dodrio","reward":20,"baseExperience":158,"stats":{"hp":60,"attack":110,"defense":70,"specialAttack":60,"specialDefense":60,"speed":100},"typeIds":[5,6],"types":["Normal","Flying"],"learnset":[{"level":0,"moveId":248},{"level":0,"moveId":42},{"level":0,"moveId":5},{"level":0,"moveId":4},{"level":0,"moveId":40},{"level":14,"moveId":21},{"level":19,"moveId":33},{"level":23,"moveId":383},{"level":28,"moveId":384},{"level":34,"moveId":251},{"level":41,"moveId":97},{"level":47,"moveId":185},{"level":54,"moveId":167},{"level":60,"moveId":171}],"tmMoveIds":[83,213,143,79,341,415,36,114,27,127,40,251,411,69,281,344,248,44,427],"shadowExtraTmMoveId":368,"evolutions":[]},"86":{"id":86,"name":"Seel","reward":10,"baseExperience":100,"stats":{"hp":65,"attack":45,"defense":55,"specialAttack":45,"specialDefense":70,"speed":45},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":216},{"level":3,"moveId":5},{"level":7,"moveId":109},{"level":11,"moveId":407},{"level":13,"moveId":60},{"level":17,"moveId":345},{"level":21,"moveId":143},{"level":23,"moveId":261},{"level":27,"moveId":260},{"level":31,"moveId":378},{"level":33,"moveId":328},{"level":37,"moveId":27},{"level":41,"moveId":408},{"level":43,"moveId":133},{"level":47,"moveId":346},{"level":51,"moveId":129},{"level":53,"moveId":409}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,407,178,40,346,111,409,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":87,"level":34,"method":"level"}]},"87":{"id":87,"name":"Dewgong","reward":20,"baseExperience":176,"stats":{"hp":90,"attack":70,"defense":80,"specialAttack":70,"specialDefense":95,"speed":70},"typeIds":[3,12],"types":["Water","Ice"],"learnset":[{"level":0,"moveId":216},{"level":0,"moveId":5},{"level":0,"moveId":265},{"level":0,"moveId":407},{"level":13,"moveId":60},{"level":17,"moveId":345},{"level":21,"moveId":143},{"level":23,"moveId":261},{"level":27,"moveId":260},{"level":31,"moveId":378},{"level":33,"moveId":328},{"level":34,"moveId":347},{"level":39,"moveId":27},{"level":45,"moveId":408},{"level":49,"moveId":133},{"level":55,"moveId":346},{"level":61,"moveId":129},{"level":65,"moveId":409}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,407,178,40,346,281,111,193,344,409,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"88":{"id":88,"name":"Grimer","reward":20,"baseExperience":90,"stats":{"hp":80,"attack":80,"defense":50,"specialAttack":40,"specialDefense":50,"speed":25},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":208},{"level":0,"moveId":48},{"level":4,"moveId":14},{"level":7,"moveId":217},{"level":12,"moveId":49},{"level":17,"moveId":63},{"level":20,"moveId":381},{"level":23,"moveId":159},{"level":33,"moveId":72},{"level":36,"moveId":382},{"level":39,"moveId":348},{"level":44,"moveId":298},{"level":49,"moveId":288},{"level":52,"moveId":387}],"tmMoveIds":[83,213,143,79,341,415,114,40,108,142,316,202,382,144,122,203,317,154,189,411,207,298,184,308,111,199,182,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":89,"level":38,"method":"level"}]},"89":{"id":89,"name":"Muk","reward":40,"baseExperience":157,"stats":{"hp":105,"attack":105,"defense":75,"specialAttack":65,"specialDefense":100,"speed":50},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":208},{"level":0,"moveId":48},{"level":0,"moveId":14},{"level":0,"moveId":217},{"level":12,"moveId":49},{"level":17,"moveId":63},{"level":20,"moveId":381},{"level":23,"moveId":159},{"level":33,"moveId":72},{"level":36,"moveId":382},{"level":42,"moveId":348},{"level":50,"moveId":298},{"level":58,"moveId":288},{"level":64,"moveId":387}],"tmMoveIds":[83,213,143,79,341,415,114,40,108,142,316,202,382,144,122,203,317,154,189,411,281,207,298,184,308,367,111,344,199,310,182,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"90":{"id":90,"name":"Shellder","reward":16,"baseExperience":97,"stats":{"hp":30,"attack":65,"defense":100,"specialAttack":45,"specialDefense":25,"speed":40},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":1},{"level":4,"moveId":18},{"level":8,"moveId":38},{"level":13,"moveId":369},{"level":16,"moveId":83},{"level":20,"moveId":43},{"level":25,"moveId":370},{"level":28,"moveId":345},{"level":32,"moveId":371},{"level":37,"moveId":260},{"level":40,"moveId":372},{"level":44,"moveId":328},{"level":49,"moveId":165},{"level":52,"moveId":346},{"level":56,"moveId":373},{"level":61,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,407,40,116,144,69,346,111,409,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":91,"itemId":4,"item":"Water Stone","method":"item"}]},"91":{"id":91,"name":"Cloyster","reward":150,"baseExperience":203,"stats":{"hp":50,"attack":95,"defense":180,"specialAttack":85,"specialDefense":45,"speed":70},"typeIds":[3,12],"types":["Water","Ice"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":94},{"level":0,"moveId":260},{"level":0,"moveId":18},{"level":0,"moveId":38},{"level":0,"moveId":83},{"level":13,"moveId":374},{"level":16,"moveId":369},{"level":23,"moveId":43},{"level":28,"moveId":375},{"level":29,"moveId":370},{"level":31,"moveId":345},{"level":35,"moveId":371},{"level":43,"moveId":372},{"level":47,"moveId":328},{"level":52,"moveId":376},{"level":53,"moveId":165},{"level":55,"moveId":346},{"level":59,"moveId":373},{"level":64,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,407,40,116,144,251,69,346,281,344,111,182,409,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[]},"92":{"id":92,"name":"Gastly","reward":30,"baseExperience":95,"stats":{"hp":30,"attack":35,"defense":30,"specialAttack":100,"specialDefense":35,"speed":80},"typeIds":[8,2],"types":["Ghost","Poison"],"learnset":[{"level":0,"moveId":110},{"level":0,"moveId":119},{"level":12,"moveId":280},{"level":15,"moveId":307},{"level":19,"moveId":81},{"level":22,"moveId":35},{"level":26,"moveId":169},{"level":29,"moveId":308},{"level":33,"moveId":309},{"level":36,"moveId":310},{"level":40,"moveId":311},{"level":43,"moveId":237},{"level":47,"moveId":254}],"tmMoveIds":[83,213,143,79,341,415,40,108,142,202,382,144,189,254,111,308,411,148,310],"shadowExtraTmMoveId":368,"evolutions":[{"to":93,"level":25,"method":"level"}]},"93":{"id":93,"name":"Haunter","reward":50,"baseExperience":126,"stats":{"hp":45,"attack":50,"defense":45,"specialAttack":115,"specialDefense":55,"speed":95},"typeIds":[8,2],"types":["Ghost","Poison"],"learnset":[{"level":0,"moveId":110},{"level":0,"moveId":119},{"level":12,"moveId":280},{"level":15,"moveId":307},{"level":19,"moveId":81},{"level":22,"moveId":35},{"level":25,"moveId":315},{"level":28,"moveId":169},{"level":33,"moveId":308},{"level":39,"moveId":309},{"level":44,"moveId":310},{"level":50,"moveId":311},{"level":55,"moveId":237},{"level":61,"moveId":254}],"tmMoveIds":[83,213,143,79,341,415,40,108,142,202,382,144,189,254,111,411,148,245,308,182,310],"shadowExtraTmMoveId":368,"evolutions":[]},"94":{"id":94,"name":"Gengar","reward":70,"baseExperience":190,"stats":{"hp":60,"attack":65,"defense":60,"specialAttack":130,"specialDefense":75,"speed":110},"typeIds":[8,2],"types":["Ghost","Poison"],"learnset":[{"level":0,"moveId":110},{"level":0,"moveId":119},{"level":12,"moveId":280},{"level":15,"moveId":307},{"level":19,"moveId":81},{"level":22,"moveId":35},{"level":25,"moveId":315},{"level":28,"moveId":169},{"level":33,"moveId":308},{"level":39,"moveId":309},{"level":44,"moveId":310},{"level":50,"moveId":311},{"level":55,"moveId":237},{"level":61,"moveId":254}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,122,40,382,108,142,316,202,317,58,144,154,189,254,281,367,111,411,148,245,308,344,182,310,426],"shadowExtraTmMoveId":368,"evolutions":[]},"95":{"id":95,"name":"Onix","reward":10,"baseExperience":108,"stats":{"hp":35,"attack":45,"defense":160,"specialAttack":30,"specialDefense":45,"speed":70},"typeIds":[10,14],"types":["Rock","Ground"],"learnset":[{"level":0,"moveId":64},{"level":0,"moveId":1},{"level":0,"moveId":14},{"level":0,"moveId":198},{"level":6,"moveId":72},{"level":9,"moveId":66},{"level":14,"moveId":40},{"level":17,"moveId":199},{"level":22,"moveId":90},{"level":30,"moveId":65},{"level":33,"moveId":125},{"level":38,"moveId":173},{"level":41,"moveId":222},{"level":46,"moveId":280},{"level":49,"moveId":289},{"level":54,"moveId":128},{"level":57,"moveId":127},{"level":62,"moveId":297}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,194,207,144,186,199,247,411,349,160,289,297,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"96":{"id":96,"name":"Drowzee","reward":10,"baseExperience":102,"stats":{"hp":60,"attack":48,"defense":45,"specialAttack":43,"specialDefense":90,"speed":42},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":110},{"level":0,"moveId":48},{"level":5,"moveId":49},{"level":9,"moveId":20},{"level":13,"moveId":216},{"level":17,"moveId":208},{"level":21,"moveId":209},{"level":25,"moveId":89},{"level":33,"moveId":210},{"level":37,"moveId":211},{"level":41,"moveId":223},{"level":45,"moveId":164},{"level":49,"moveId":148},{"level":53,"moveId":191},{"level":57,"moveId":332},{"level":61,"moveId":286}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,317,40,148,116,411,58,316,23,308,154,332,367,111,225,251,254],"shadowExtraTmMoveId":368,"evolutions":[{"to":97,"level":26,"method":"level"}]},"97":{"id":97,"name":"Hypno","reward":20,"baseExperience":165,"stats":{"hp":85,"attack":73,"defense":70,"specialAttack":73,"specialDefense":115,"speed":67},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":110},{"level":0,"moveId":48},{"level":0,"moveId":49},{"level":0,"moveId":20},{"level":0,"moveId":254},{"level":13,"moveId":216},{"level":17,"moveId":208},{"level":21,"moveId":209},{"level":25,"moveId":89},{"level":33,"moveId":210},{"level":37,"moveId":211},{"level":41,"moveId":223},{"level":45,"moveId":164},{"level":49,"moveId":148},{"level":53,"moveId":191},{"level":57,"moveId":332},{"level":61,"moveId":286}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,148,116,411,58,316,23,317,308,154,332,367,111,225,251,344,254,281],"shadowExtraTmMoveId":368,"evolutions":[]},"98":{"id":98,"name":"Krabby","reward":20,"baseExperience":115,"stats":{"hp":30,"attack":105,"defense":90,"specialAttack":25,"specialDefense":25,"speed":50},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":64},{"level":0,"moveId":11},{"level":5,"moveId":269},{"level":9,"moveId":43},{"level":11,"moveId":14},{"level":15,"moveId":112},{"level":19,"moveId":139},{"level":21,"moveId":326},{"level":25,"moveId":327},{"level":29,"moveId":83},{"level":31,"moveId":284},{"level":35,"moveId":125},{"level":39,"moveId":328},{"level":41,"moveId":329},{"level":45,"moveId":147}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,407,40,111,199,180,273,224,55,346,207,409,268,408,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":99,"level":28,"method":"level"}]},"99":{"id":99,"name":"Kingler","reward":40,"baseExperience":206,"stats":{"hp":55,"attack":130,"defense":115,"specialAttack":50,"specialDefense":50,"speed":75},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":253},{"level":0,"moveId":64},{"level":0,"moveId":11},{"level":0,"moveId":269},{"level":0,"moveId":43},{"level":11,"moveId":14},{"level":15,"moveId":112},{"level":19,"moveId":139},{"level":21,"moveId":326},{"level":25,"moveId":327},{"level":32,"moveId":83},{"level":37,"moveId":284},{"level":44,"moveId":125},{"level":51,"moveId":328},{"level":56,"moveId":329},{"level":63,"moveId":147}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,407,40,281,111,199,180,273,224,55,346,207,409,268,193,344,408,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"100":{"id":100,"name":"Voltorb","reward":20,"baseExperience":103,"stats":{"hp":40,"attack":30,"defense":50,"specialAttack":55,"specialDefense":55,"speed":100},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":257},{"level":5,"moveId":1},{"level":8,"moveId":231},{"level":12,"moveId":232},{"level":15,"moveId":68},{"level":19,"moveId":72},{"level":22,"moveId":233},{"level":26,"moveId":212},{"level":29,"moveId":41},{"level":33,"moveId":144},{"level":36,"moveId":69},{"level":40,"moveId":234},{"level":43,"moveId":160},{"level":47,"moveId":238},{"level":50,"moveId":294}],"tmMoveIds":[83,213,143,79,341,415,27,40,142,202,116,233,144,69,23,160,68,111,225],"shadowExtraTmMoveId":368,"evolutions":[{"to":101,"level":30,"method":"level"}]},"101":{"id":101,"name":"Electrode","reward":40,"baseExperience":150,"stats":{"hp":60,"attack":50,"defense":70,"specialAttack":80,"specialDefense":80,"speed":150},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":231},{"level":0,"moveId":232},{"level":0,"moveId":257},{"level":15,"moveId":68},{"level":19,"moveId":72},{"level":22,"moveId":233},{"level":26,"moveId":212},{"level":29,"moveId":41},{"level":35,"moveId":144},{"level":40,"moveId":69},{"level":46,"moveId":234},{"level":51,"moveId":160},{"level":57,"moveId":238},{"level":62,"moveId":294}],"tmMoveIds":[83,213,143,79,341,415,27,40,142,202,116,233,144,69,23,160,68,111,344,225,281],"shadowExtraTmMoveId":368,"evolutions":[]},"102":{"id":102,"name":"Exeggcute","reward":10,"baseExperience":98,"stats":{"hp":60,"attack":40,"defense":80,"specialAttack":60,"specialDefense":45,"speed":40},"typeIds":[1,17],"types":["Grass","Psychic"],"learnset":[{"level":0,"moveId":391},{"level":0,"moveId":383},{"level":0,"moveId":110},{"level":7,"moveId":146},{"level":11,"moveId":9},{"level":17,"moveId":390},{"level":19,"moveId":37},{"level":21,"moveId":24},{"level":23,"moveId":26},{"level":27,"moveId":20},{"level":33,"moveId":149},{"level":43,"moveId":240},{"level":47,"moveId":148}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,116,144,382,68,189,254,240,411,148,225,180,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":103,"itemId":2,"item":"Leaf Stone","method":"item"}]},"103":{"id":103,"name":"Exeggutor","reward":20,"baseExperience":212,"stats":{"hp":95,"attack":105,"defense":85,"specialAttack":125,"specialDefense":75,"speed":45},"typeIds":[1,17],"types":["Grass","Psychic"],"learnset":[{"level":0,"moveId":391},{"level":0,"moveId":383},{"level":0,"moveId":110},{"level":0,"moveId":183},{"level":0,"moveId":327},{"level":10,"moveId":146},{"level":14,"moveId":9},{"level":17,"moveId":332},{"level":20,"moveId":390},{"level":22,"moveId":37},{"level":24,"moveId":24},{"level":26,"moveId":26},{"level":27,"moveId":389},{"level":36,"moveId":149},{"level":37,"moveId":388},{"level":46,"moveId":240},{"level":47,"moveId":282},{"level":50,"moveId":148}],"tmMoveIds":[83,213,143,79,341,415,27,127,40,108,116,144,382,68,189,254,281,240,332,411,344,148,225,180,426],"shadowExtraTmMoveId":368,"evolutions":[]},"104":{"id":104,"name":"Cubone","reward":30,"baseExperience":87,"stats":{"hp":50,"attack":50,"defense":95,"specialAttack":40,"specialDefense":50,"speed":35},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":5},{"level":3,"moveId":3},{"level":7,"moveId":312},{"level":11,"moveId":216},{"level":13,"moveId":43},{"level":17,"moveId":12},{"level":21,"moveId":313},{"level":23,"moveId":40},{"level":27,"moveId":273},{"level":31,"moveId":171},{"level":37,"moveId":314},{"level":41,"moveId":167},{"level":43,"moveId":127},{"level":47,"moveId":287}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,40,203,316,317,154,407,289,194,184,367,411,186,199,180,44,273,346,155,207,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":105,"level":28,"method":"level"}]},"105":{"id":105,"name":"Marowak","reward":50,"baseExperience":124,"stats":{"hp":60,"attack":80,"defense":110,"specialAttack":50,"specialDefense":80,"speed":45},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":5},{"level":0,"moveId":3},{"level":0,"moveId":312},{"level":0,"moveId":216},{"level":13,"moveId":43},{"level":17,"moveId":12},{"level":21,"moveId":313},{"level":23,"moveId":40},{"level":27,"moveId":273},{"level":33,"moveId":171},{"level":43,"moveId":314},{"level":49,"moveId":167},{"level":53,"moveId":127},{"level":59,"moveId":287}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,40,203,316,317,154,407,281,289,194,184,367,411,186,199,297,180,44,273,346,155,344,207,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"106":{"id":106,"name":"Hitmonlee","reward":75,"baseExperience":139,"stats":{"hp":50,"attack":120,"defense":53,"specialAttack":35,"specialDefense":110,"speed":87},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":228},{"level":0,"moveId":45},{"level":5,"moveId":209},{"level":9,"moveId":356},{"level":13,"moveId":358},{"level":17,"moveId":270},{"level":21,"moveId":12},{"level":25,"moveId":168},{"level":29,"moveId":357},{"level":33,"moveId":236},{"level":37,"moveId":227},{"level":41,"moveId":253},{"level":45,"moveId":359},{"level":49,"moveId":354},{"level":53,"moveId":360},{"level":57,"moveId":290},{"level":61,"moveId":104}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,58,154,69,194,367,111,411,186,199,297,182,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"107":{"id":107,"name":"Hitmonchan","reward":75,"baseExperience":140,"stats":{"hp":50,"attack":105,"defense":79,"specialAttack":35,"specialDefense":110,"speed":76},"typeIds":[13],"types":["Fighting"],"learnset":[{"level":0,"moveId":228},{"level":0,"moveId":361},{"level":6,"moveId":97},{"level":11,"moveId":33},{"level":16,"moveId":362},{"level":17,"moveId":363},{"level":21,"moveId":168},{"level":26,"moveId":266},{"level":31,"moveId":256},{"level":33,"moveId":236},{"level":36,"moveId":316},{"level":37,"moveId":122},{"level":38,"moveId":317},{"level":41,"moveId":364},{"level":46,"moveId":59},{"level":51,"moveId":365},{"level":56,"moveId":367},{"level":61,"moveId":366},{"level":66,"moveId":290}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,58,316,317,154,69,194,367,111,411,199,297,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"108":{"id":108,"name":"Lickitung","reward":75,"baseExperience":127,"stats":{"hp":90,"attack":55,"defense":75,"specialAttack":60,"specialDefense":75,"speed":30},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":119},{"level":5,"moveId":38},{"level":9,"moveId":25},{"level":13,"moveId":131},{"level":17,"moveId":70},{"level":21,"moveId":327},{"level":25,"moveId":49},{"level":29,"moveId":125},{"level":33,"moveId":68},{"level":37,"moveId":88},{"level":41,"moveId":350},{"level":45,"moveId":393},{"level":49,"moveId":72},{"level":53,"moveId":399},{"level":57,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,53,40,142,316,202,317,203,154,407,68,254,346,281,289,194,207,184,367,111,411,240,308,186,199,344,155,180,224,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"109":{"id":109,"name":"Koffing","reward":20,"baseExperience":114,"stats":{"hp":40,"attack":65,"defense":95,"specialAttack":60,"specialDefense":45,"speed":35},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":208},{"level":0,"moveId":1},{"level":6,"moveId":334},{"level":10,"moveId":17},{"level":15,"moveId":96},{"level":19,"moveId":410},{"level":24,"moveId":144},{"level":28,"moveId":381},{"level":33,"moveId":221},{"level":37,"moveId":160},{"level":42,"moveId":238},{"level":46,"moveId":382},{"level":51,"moveId":311},{"level":55,"moveId":387}],"tmMoveIds":[83,213,143,79,341,415,40,142,202,144,203,68,184,382,111,411,308,225,160,310],"shadowExtraTmMoveId":368,"evolutions":[{"to":110,"level":35,"method":"level"}]},"110":{"id":110,"name":"Weezing","reward":40,"baseExperience":173,"stats":{"hp":65,"attack":90,"defense":120,"specialAttack":85,"specialDefense":70,"speed":60},"typeIds":[2],"types":["Poison"],"learnset":[{"level":0,"moveId":208},{"level":0,"moveId":1},{"level":0,"moveId":334},{"level":0,"moveId":17},{"level":15,"moveId":96},{"level":19,"moveId":410},{"level":24,"moveId":144},{"level":28,"moveId":381},{"level":33,"moveId":221},{"level":39,"moveId":293},{"level":40,"moveId":160},{"level":46,"moveId":238},{"level":52,"moveId":382},{"level":59,"moveId":311},{"level":65,"moveId":387}],"tmMoveIds":[83,213,143,79,341,415,40,142,202,144,203,68,281,184,382,111,411,308,344,225,160,310],"shadowExtraTmMoveId":368,"evolutions":[]},"111":{"id":111,"name":"Rhyhorn","reward":20,"baseExperience":135,"stats":{"hp":80,"attack":85,"defense":95,"specialAttack":30,"specialDefense":30,"speed":25},"typeIds":[14,10],"types":["Ground","Rock"],"learnset":[{"level":0,"moveId":80},{"level":0,"moveId":3},{"level":8,"moveId":327},{"level":12,"moveId":21},{"level":19,"moveId":30},{"level":23,"moveId":82},{"level":30,"moveId":155},{"level":34,"moveId":88},{"level":41,"moveId":27},{"level":45,"moveId":319},{"level":52,"moveId":297},{"level":56,"moveId":194},{"level":63,"moveId":275},{"level":67,"moveId":335}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,142,202,203,407,68,101,346,289,194,207,184,111,411,186,349,199,297,180,182,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[{"to":112,"level":42,"method":"level"}]},"112":{"id":112,"name":"Rhydon","reward":40,"baseExperience":204,"stats":{"hp":105,"attack":130,"defense":120,"specialAttack":45,"specialDefense":45,"speed":40},"typeIds":[14,10],"types":["Ground","Rock"],"learnset":[{"level":0,"moveId":80},{"level":0,"moveId":3},{"level":0,"moveId":327},{"level":0,"moveId":21},{"level":19,"moveId":30},{"level":23,"moveId":82},{"level":30,"moveId":155},{"level":34,"moveId":88},{"level":41,"moveId":27},{"level":42,"moveId":394},{"level":47,"moveId":319},{"level":56,"moveId":297},{"level":62,"moveId":194},{"level":71,"moveId":275},{"level":77,"moveId":335}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,178,53,407,40,142,316,202,317,203,154,68,101,346,281,289,194,207,184,55,367,111,411,186,349,199,245,297,180,182,344,155,224,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"113":{"id":113,"name":"Chansey","reward":100,"baseExperience":395,"stats":{"hp":250,"attack":5,"defense":5,"specialAttack":35,"specialDefense":105,"speed":50},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":25},{"level":0,"moveId":48},{"level":0,"moveId":5},{"level":5,"moveId":3},{"level":9,"moveId":393},{"level":12,"moveId":61},{"level":16,"moveId":392},{"level":23,"moveId":63},{"level":27,"moveId":27},{"level":31,"moveId":47},{"level":38,"moveId":386},{"level":42,"moveId":389},{"level":46,"moveId":212},{"level":50,"moveId":292},{"level":54,"moveId":127}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,407,40,142,202,116,58,203,251,154,68,346,281,289,194,184,367,111,411,233,240,148,186,308,199,409,225,344,155,23,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"114":{"id":114,"name":"Tangela","reward":20,"baseExperience":166,"stats":{"hp":65,"attack":55,"defense":115,"specialAttack":100,"specialDefense":40,"speed":60},"typeIds":[1],"types":["Grass"],"learnset":[{"level":0,"moveId":401},{"level":0,"moveId":201},{"level":5,"moveId":26},{"level":8,"moveId":107},{"level":12,"moveId":91},{"level":15,"moveId":24},{"level":19,"moveId":16},{"level":22,"moveId":198},{"level":26,"moveId":108},{"level":29,"moveId":37},{"level":33,"moveId":131},{"level":36,"moveId":296},{"level":43,"moveId":125},{"level":47,"moveId":400},{"level":50,"moveId":283},{"level":54,"moveId":399}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,382,108,76,189,281,240,411,225,180,344,224],"shadowExtraTmMoveId":368,"evolutions":[]},"115":{"id":115,"name":"Kangaskhan","reward":50,"baseExperience":175,"stats":{"hp":105,"attack":95,"defense":80,"specialAttack":40,"specialDefense":80,"speed":90},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":361},{"level":0,"moveId":43},{"level":7,"moveId":175},{"level":10,"moveId":3},{"level":13,"moveId":19},{"level":19,"moveId":293},{"level":22,"moveId":40},{"level":25,"moveId":59},{"level":31,"moveId":88},{"level":34,"moveId":395},{"level":37,"moveId":84},{"level":43,"moveId":354},{"level":46,"moveId":325},{"level":49,"moveId":35},{"level":55,"moveId":104}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,122,204,53,407,40,142,316,202,203,317,154,101,346,281,289,194,207,184,55,367,111,411,240,186,199,308,245,409,44,344,155,224,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"116":{"id":116,"name":"Horsea","reward":16,"baseExperience":83,"stats":{"hp":30,"attack":40,"defense":70,"specialAttack":70,"specialDefense":25,"speed":60},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":11},{"level":4,"moveId":17},{"level":8,"moveId":43},{"level":11,"moveId":31},{"level":14,"moveId":12},{"level":18,"moveId":112},{"level":23,"moveId":97},{"level":26,"moveId":77},{"level":30,"moveId":328},{"level":35,"moveId":193},{"level":38,"moveId":243},{"level":42,"moveId":349}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,40,407,69,346,111,247,349,409,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":117,"level":32,"method":"level"}]},"117":{"id":117,"name":"Seadra","reward":32,"baseExperience":155,"stats":{"hp":55,"attack":65,"defense":95,"specialAttack":95,"specialDefense":45,"speed":85},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":11},{"level":0,"moveId":17},{"level":0,"moveId":43},{"level":0,"moveId":31},{"level":14,"moveId":12},{"level":18,"moveId":112},{"level":23,"moveId":97},{"level":26,"moveId":77},{"level":30,"moveId":328},{"level":40,"moveId":193},{"level":48,"moveId":243},{"level":57,"moveId":349}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,40,407,69,346,281,111,247,409,193,344,349,425,408],"shadowExtraTmMoveId":368,"evolutions":[]},"118":{"id":118,"name":"Goldeen","reward":20,"baseExperience":111,"stats":{"hp":45,"attack":67,"defense":60,"specialAttack":35,"specialDefense":50,"speed":63},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":3},{"level":0,"moveId":109},{"level":7,"moveId":38},{"level":11,"moveId":80},{"level":17,"moveId":93},{"level":21,"moveId":147},{"level":27,"moveId":261},{"level":31,"moveId":21},{"level":37,"moveId":338},{"level":41,"moveId":275},{"level":47,"moveId":97},{"level":51,"moveId":339},{"level":57,"moveId":335}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,407,40,69,111,182,409,346,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":119,"level":33,"method":"level"}]},"119":{"id":119,"name":"Seaking","reward":40,"baseExperience":170,"stats":{"hp":80,"attack":92,"defense":65,"specialAttack":65,"specialDefense":80,"speed":68},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":182},{"level":0,"moveId":42},{"level":0,"moveId":3},{"level":0,"moveId":109},{"level":0,"moveId":38},{"level":11,"moveId":80},{"level":17,"moveId":93},{"level":21,"moveId":147},{"level":27,"moveId":261},{"level":31,"moveId":21},{"level":40,"moveId":338},{"level":47,"moveId":275},{"level":56,"moveId":97},{"level":63,"moveId":339},{"level":72,"moveId":335}],"tmMoveIds":[83,213,143,79,341,415,27,127,112,31,204,407,40,69,281,111,182,409,346,344,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[]},"120":{"id":120,"name":"Staryu","reward":20,"baseExperience":106,"stats":{"hp":30,"attack":45,"defense":55,"specialAttack":70,"specialDefense":55,"speed":85},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":1},{"level":0,"moveId":14},{"level":6,"moveId":31},{"level":10,"moveId":32},{"level":15,"moveId":115},{"level":19,"moveId":200},{"level":24,"moveId":69},{"level":28,"moveId":112},{"level":33,"moveId":63},{"level":37,"moveId":160},{"level":42,"moveId":212},{"level":46,"moveId":57},{"level":51,"moveId":179},{"level":55,"moveId":138},{"level":60,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,127,112,31,204,40,142,202,148,69,407,23,111,225,247,251,160,346,409,193,425,408],"shadowExtraTmMoveId":368,"evolutions":[{"to":121,"itemId":4,"item":"Water Stone","method":"item"}]},"121":{"id":121,"name":"Starmie","reward":40,"baseExperience":207,"stats":{"hp":60,"attack":75,"defense":85,"specialAttack":100,"specialDefense":85,"speed":115},"typeIds":[3,17],"types":["Water","Psychic"],"learnset":[{"level":0,"moveId":31},{"level":0,"moveId":32},{"level":0,"moveId":115},{"level":0,"moveId":69},{"level":21,"moveId":200},{"level":28,"moveId":81},{"level":31,"moveId":112},{"level":36,"moveId":63},{"level":40,"moveId":160},{"level":45,"moveId":212},{"level":49,"moveId":57},{"level":54,"moveId":179},{"level":59,"moveId":138},{"level":63,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,127,112,31,204,40,142,202,148,69,407,23,111,225,247,251,254,160,281,332,346,409,193,344,425,408],"shadowExtraTmMoveId":368,"evolutions":[]},"122":{"id":122,"name":"Mr. Mime","reward":60,"baseExperience":136,"stats":{"hp":50,"attack":65,"defense":65,"specialAttack":90,"specialDefense":90,"speed":100},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":197},{"level":0,"moveId":20},{"level":0,"moveId":253},{"level":0,"moveId":255},{"level":0,"moveId":256},{"level":0,"moveId":258},{"level":0,"moveId":259},{"level":4,"moveId":215},{"level":8,"moveId":209},{"level":11,"moveId":60},{"level":15,"moveId":61},{"level":18,"moveId":214},{"level":22,"moveId":212},{"level":23,"moveId":146},{"level":25,"moveId":89},{"level":29,"moveId":213},{"level":39,"moveId":148},{"level":46,"moveId":262},{"level":50,"moveId":129}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,122,40,240,142,316,202,317,148,116,411,58,23,154,332,367,111,233,308,225,344,254,281],"shadowExtraTmMoveId":368,"evolutions":[]},"123":{"id":123,"name":"Scyther","reward":20,"baseExperience":187,"stats":{"hp":70,"attack":110,"defense":80,"specialAttack":55,"specialDefense":80,"speed":105},"typeIds":[7,6],"types":["Bug","Flying"],"learnset":[{"level":0,"moveId":266},{"level":0,"moveId":4},{"level":0,"moveId":43},{"level":5,"moveId":12},{"level":9,"moveId":33},{"level":13,"moveId":273},{"level":17,"moveId":97},{"level":21,"moveId":75},{"level":25,"moveId":55},{"level":29,"moveId":130},{"level":33,"moveId":267},{"level":37,"moveId":79},{"level":41,"moveId":268},{"level":45,"moveId":181},{"level":49,"moveId":293},{"level":53,"moveId":246},{"level":57,"moveId":180},{"level":61,"moveId":168}],"tmMoveIds":[83,213,143,79,341,415,180,27,127,40,411,69,111,273,44,268,55,344,224,281],"shadowExtraTmMoveId":368,"evolutions":[]},"124":{"id":124,"name":"Jynx","reward":60,"baseExperience":137,"stats":{"hp":65,"attack":50,"defense":35,"specialAttack":115,"specialDefense":95,"speed":95},"typeIds":[12,17],"types":["Ice","Psychic"],"learnset":[{"level":0,"moveId":48},{"level":0,"moveId":119},{"level":0,"moveId":120},{"level":0,"moveId":121},{"level":15,"moveId":61},{"level":18,"moveId":122},{"level":21,"moveId":123},{"level":28,"moveId":140},{"level":33,"moveId":86},{"level":39,"moveId":195},{"level":44,"moveId":114},{"level":49,"moveId":283},{"level":55,"moveId":324},{"level":60,"moveId":204}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,407,53,40,148,116,58,154,76,367,111,332,225,254,308,344,409,281,346],"shadowExtraTmMoveId":368,"evolutions":[]},"125":{"id":125,"name":"Electabuzz","reward":100,"baseExperience":156,"stats":{"hp":65,"attack":83,"defense":57,"specialAttack":95,"specialDefense":85,"speed":105},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":4},{"level":0,"moveId":43},{"level":0,"moveId":22},{"level":11,"moveId":51},{"level":16,"moveId":69},{"level":21,"moveId":416},{"level":26,"moveId":212},{"level":32,"moveId":41},{"level":38,"moveId":316},{"level":44,"moveId":219},{"level":50,"moveId":142},{"level":56,"moveId":72},{"level":62,"moveId":202}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,142,202,116,58,154,122,69,316,317,281,289,367,111,148,225,23,233,344,426],"shadowExtraTmMoveId":368,"evolutions":[]},"126":{"id":126,"name":"Magmar","reward":100,"baseExperience":167,"stats":{"hp":65,"attack":95,"defense":57,"specialAttack":100,"specialDefense":85,"speed":93},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":334},{"level":0,"moveId":43},{"level":0,"moveId":10},{"level":11,"moveId":17},{"level":16,"moveId":176},{"level":21,"moveId":105},{"level":26,"moveId":81},{"level":32,"moveId":106},{"level":38,"moveId":317},{"level":44,"moveId":351},{"level":50,"moveId":184},{"level":56,"moveId":411},{"level":62,"moveId":203}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,53,40,116,58,203,154,281,367,411,289,184,344,148,426],"shadowExtraTmMoveId":368,"evolutions":[]},"127":{"id":127,"name":"Pinsir","reward":20,"baseExperience":200,"stats":{"hp":65,"attack":125,"defense":100,"specialAttack":55,"specialDefense":70,"speed":85},"typeIds":[7],"types":["Bug"],"learnset":[{"level":0,"moveId":269},{"level":0,"moveId":12},{"level":4,"moveId":198},{"level":8,"moveId":53},{"level":13,"moveId":14},{"level":18,"moveId":228},{"level":21,"moveId":270},{"level":25,"moveId":229},{"level":30,"moveId":268},{"level":35,"moveId":171},{"level":38,"moveId":180},{"level":42,"moveId":230},{"level":47,"moveId":284},{"level":52,"moveId":305}],"tmMoveIds":[83,213,143,79,341,415,180,114,27,127,53,40,194,207,367,111,411,199,273,224,55,268,297,281,344,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"128":{"id":128,"name":"Tauros","reward":20,"baseExperience":211,"stats":{"hp":75,"attack":110,"defense":105,"specialAttack":30,"specialDefense":70,"speed":100},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":1},{"level":3,"moveId":3},{"level":5,"moveId":40},{"level":8,"moveId":80},{"level":11,"moveId":30},{"level":15,"moveId":33},{"level":19,"moveId":143},{"level":24,"moveId":169},{"level":29,"moveId":396},{"level":35,"moveId":223},{"level":41,"moveId":27},{"level":48,"moveId":164},{"level":55,"moveId":171},{"level":63,"moveId":344}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,204,40,142,202,203,407,346,281,289,194,184,111,411,240,186,344,155,199,297,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"129":{"id":129,"name":"Magikarp","reward":1,"baseExperience":20,"stats":{"hp":20,"attack":10,"defense":55,"specialAttack":15,"specialDefense":20,"speed":80},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":141},{"level":15,"moveId":1},{"level":30,"moveId":147}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[{"to":130,"level":20,"method":"level"}]},"130":{"id":130,"name":"Gyarados","reward":40,"baseExperience":214,"stats":{"hp":95,"attack":125,"defense":79,"specialAttack":60,"specialDefense":100,"speed":81},"typeIds":[3,6],"types":["Water","Flying"],"learnset":[{"level":0,"moveId":171},{"level":20,"moveId":19},{"level":23,"moveId":29},{"level":26,"moveId":43},{"level":29,"moveId":77},{"level":32,"moveId":156},{"level":35,"moveId":133},{"level":38,"moveId":111},{"level":41,"moveId":193},{"level":44,"moveId":243},{"level":47,"moveId":281}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,29,142,202,203,184,407,186,194,101,111,297,281,349,346,409,344,155,193,310,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"131":{"id":131,"name":"Lapras","reward":40,"baseExperience":219,"stats":{"hp":130,"attack":85,"defense":80,"specialAttack":85,"specialDefense":95,"speed":60},"typeIds":[3,12],"types":["Water","Ice"],"learnset":[{"level":0,"moveId":47},{"level":0,"moveId":5},{"level":7,"moveId":81},{"level":10,"moveId":345},{"level":14,"moveId":93},{"level":18,"moveId":114},{"level":22,"moveId":111},{"level":27,"moveId":324},{"level":32,"moveId":346},{"level":37,"moveId":328},{"level":43,"moveId":129},{"level":49,"moveId":193},{"level":55,"moveId":347}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,29,142,202,101,407,346,281,289,111,240,148,344,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"132":{"id":132,"name":"Ditto","reward":100,"baseExperience":61,"stats":{"hp":48,"attack":48,"defense":48,"specialAttack":48,"specialDefense":48,"speed":48},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":56}],"tmMoveIds":[],"shadowExtraTmMoveId":null,"evolutions":[]},"133":{"id":133,"name":"Eevee","reward":10,"baseExperience":92,"stats":{"hp":55,"attack":55,"defense":50,"specialAttack":45,"specialDefense":65,"speed":55},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":3},{"level":0,"moveId":1},{"level":0,"moveId":99},{"level":8,"moveId":2},{"level":15,"moveId":5},{"level":22,"moveId":4},{"level":29,"moveId":19},{"level":36,"moveId":262},{"level":43,"moveId":27},{"level":50,"moveId":295},{"level":57,"moveId":333}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,207,69,111,308,411,289],"shadowExtraTmMoveId":368,"evolutions":[{"to":135,"itemId":3,"item":"Thunder Stone","method":"item"},{"to":134,"itemId":4,"item":"Water Stone","method":"item"},{"to":136,"itemId":5,"item":"Fire Stone","method":"item"}]},"134":{"id":134,"name":"Vaporeon","reward":20,"baseExperience":196,"stats":{"hp":130,"attack":65,"defense":60,"specialAttack":110,"specialDefense":95,"speed":65},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":3},{"level":0,"moveId":1},{"level":0,"moveId":99},{"level":8,"moveId":2},{"level":15,"moveId":31},{"level":22,"moveId":4},{"level":29,"moveId":19},{"level":36,"moveId":260},{"level":43,"moveId":261},{"level":50,"moveId":295},{"level":57,"moveId":221},{"level":64,"moveId":348},{"level":71,"moveId":193},{"level":78,"moveId":379}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,69,407,101,111,411,289,281,346,308,344,207,409,193,425,408,426],"shadowExtraTmMoveId":368,"evolutions":[]},"135":{"id":135,"name":"Jolteon","reward":20,"baseExperience":197,"stats":{"hp":65,"attack":65,"defense":60,"specialAttack":110,"specialDefense":95,"speed":130},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":3},{"level":0,"moveId":1},{"level":0,"moveId":99},{"level":8,"moveId":2},{"level":15,"moveId":22},{"level":22,"moveId":4},{"level":29,"moveId":45},{"level":36,"moveId":135},{"level":43,"moveId":249},{"level":50,"moveId":295},{"level":57,"moveId":23},{"level":64,"moveId":97},{"level":71,"moveId":202},{"level":78,"moveId":219}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,142,202,207,69,23,101,111,411,233,225,308,344,289,281,426],"shadowExtraTmMoveId":368,"evolutions":[]},"136":{"id":136,"name":"Flareon","reward":20,"baseExperience":198,"stats":{"hp":65,"attack":130,"defense":60,"specialAttack":95,"specialDefense":110,"speed":65},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":3},{"level":0,"moveId":1},{"level":0,"moveId":99},{"level":8,"moveId":2},{"level":15,"moveId":10},{"level":22,"moveId":4},{"level":29,"moveId":19},{"level":36,"moveId":105},{"level":43,"moveId":92},{"level":50,"moveId":295},{"level":57,"moveId":334},{"level":64,"moveId":30},{"level":71,"moveId":203},{"level":78,"moveId":351}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,40,207,203,69,101,111,411,184,344,289,308,281,426],"shadowExtraTmMoveId":368,"evolutions":[]},"137":{"id":137,"name":"Porygon","reward":20,"baseExperience":130,"stats":{"hp":65,"attack":60,"defense":70,"specialAttack":85,"specialDefense":75,"speed":40},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":264},{"level":0,"moveId":1},{"level":0,"moveId":263},{"level":0,"moveId":423},{"level":7,"moveId":89},{"level":12,"moveId":97},{"level":18,"moveId":115},{"level":23,"moveId":234},{"level":29,"moveId":265},{"level":40,"moveId":219},{"level":45,"moveId":278},{"level":51,"moveId":251},{"level":56,"moveId":331},{"level":62,"moveId":336}],"tmMoveIds":[83,213,143,79,341,415,27,127,204,40,142,202,148,116,69,407,23,251,111,411,254,240,44,233,308,332,225,289,344,281,346],"shadowExtraTmMoveId":368,"evolutions":[]},"138":{"id":138,"name":"Omanyte","reward":50,"baseExperience":99,"stats":{"hp":35,"attack":40,"defense":100,"specialAttack":90,"specialDefense":55,"speed":35},"typeIds":[10,3],"types":["Rock","Water"],"learnset":[{"level":0,"moveId":201},{"level":0,"moveId":18},{"level":7,"moveId":19},{"level":10,"moveId":31},{"level":16,"moveId":68},{"level":19,"moveId":43},{"level":25,"moveId":139},{"level":28,"moveId":328},{"level":34,"moveId":83},{"level":37,"moveId":296},{"level":43,"moveId":400},{"level":46,"moveId":82},{"level":52,"moveId":373},{"level":55,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,68,407,346,111,186,199,160,409,408,193,425,414],"shadowExtraTmMoveId":368,"evolutions":[{"to":139,"level":40,"method":"level"}]},"139":{"id":139,"name":"Omastar","reward":100,"baseExperience":199,"stats":{"hp":70,"attack":60,"defense":125,"specialAttack":115,"specialDefense":70,"speed":55},"typeIds":[10,3],"types":["Rock","Water"],"learnset":[{"level":0,"moveId":201},{"level":0,"moveId":18},{"level":0,"moveId":19},{"level":10,"moveId":31},{"level":16,"moveId":68},{"level":19,"moveId":43},{"level":25,"moveId":139},{"level":28,"moveId":328},{"level":34,"moveId":83},{"level":37,"moveId":296},{"level":40,"moveId":374},{"level":48,"moveId":400},{"level":56,"moveId":82},{"level":67,"moveId":373},{"level":75,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,53,40,68,407,346,281,111,186,199,297,160,409,408,193,344,425,414],"shadowExtraTmMoveId":368,"evolutions":[]},"140":{"id":140,"name":"Kabuto","reward":50,"baseExperience":99,"stats":{"hp":30,"attack":80,"defense":90,"specialAttack":55,"specialDefense":45,"speed":55},"typeIds":[10,3],"types":["Rock","Water"],"learnset":[{"level":0,"moveId":6},{"level":0,"moveId":14},{"level":6,"moveId":107},{"level":11,"moveId":43},{"level":16,"moveId":139},{"level":21,"moveId":2},{"level":26,"moveId":354},{"level":31,"moveId":378},{"level":36,"moveId":108},{"level":41,"moveId":299},{"level":46,"moveId":296},{"level":51,"moveId":283}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,53,40,68,407,189,346,207,111,186,199,180,409,44,425,414],"shadowExtraTmMoveId":368,"evolutions":[{"to":141,"level":40,"method":"level"}]},"141":{"id":141,"name":"Kabutops","reward":100,"baseExperience":199,"stats":{"hp":60,"attack":115,"defense":105,"specialAttack":65,"specialDefense":70,"speed":80},"typeIds":[10,3],"types":["Rock","Water"],"learnset":[{"level":0,"moveId":168},{"level":0,"moveId":6},{"level":0,"moveId":14},{"level":0,"moveId":107},{"level":0,"moveId":43},{"level":16,"moveId":139},{"level":21,"moveId":2},{"level":26,"moveId":354},{"level":31,"moveId":378},{"level":36,"moveId":108},{"level":40,"moveId":130},{"level":45,"moveId":299},{"level":54,"moveId":296},{"level":63,"moveId":283},{"level":72,"moveId":181}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,53,40,68,407,189,346,281,207,111,186,55,199,297,180,409,44,268,344,224,408,425,414],"shadowExtraTmMoveId":368,"evolutions":[]},"142":{"id":142,"name":"Aerodactyl","reward":200,"baseExperience":202,"stats":{"hp":80,"attack":105,"defense":65,"specialAttack":60,"specialDefense":75,"speed":130},"typeIds":[10,6],"types":["Rock","Flying"],"learnset":[{"level":0,"moveId":156},{"level":0,"moveId":92},{"level":0,"moveId":249},{"level":0,"moveId":75},{"level":0,"moveId":38},{"level":0,"moveId":19},{"level":0,"moveId":30},{"level":9,"moveId":101},{"level":17,"moveId":97},{"level":25,"moveId":296},{"level":33,"moveId":84},{"level":41,"moveId":27},{"level":49,"moveId":412},{"level":57,"moveId":413},{"level":65,"moveId":281},{"level":73,"moveId":414},{"level":81,"moveId":344}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,29,203,69,101,281,289,194,184,111,411,186,349,199,297,244,344,155,44,414,426,427],"shadowExtraTmMoveId":368,"evolutions":[]},"143":{"id":143,"name":"Snorlax","reward":20,"baseExperience":154,"stats":{"hp":160,"attack":110,"defense":65,"specialAttack":65,"specialDefense":110,"speed":30},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":1},{"level":4,"moveId":25},{"level":9,"moveId":337},{"level":12,"moveId":119},{"level":17,"moveId":152},{"level":20,"moveId":340},{"level":25,"moveId":88},{"level":28,"moveId":143},{"level":29,"moveId":341},{"level":33,"moveId":342},{"level":36,"moveId":114},{"level":44,"moveId":68},{"level":49,"moveId":84},{"level":52,"moveId":343},{"level":57,"moveId":344}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,122,31,204,178,53,40,142,316,202,58,144,317,203,154,407,68,281,194,184,367,111,411,240,308,148,186,344,155,199,346,425,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"144":{"id":144,"name":"Articuno","reward":200,"baseExperience":215,"stats":{"hp":90,"attack":85,"defense":85,"specialAttack":125,"specialDefense":100,"speed":95},"typeIds":[12,6],"types":["Ice","Flying"],"learnset":[{"level":0,"moveId":15},{"level":0,"moveId":121},{"level":15,"moveId":345},{"level":22,"moveId":236},{"level":29,"moveId":296},{"level":36,"moveId":97},{"level":43,"moveId":346},{"level":50,"moveId":146},{"level":57,"moveId":158},{"level":64,"moveId":145},{"level":71,"moveId":204},{"level":78,"moveId":347},{"level":85,"moveId":409}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,112,31,204,40,407,69,101,346,281,111,186,248,409,411,44,344,427],"shadowExtraTmMoveId":368,"evolutions":[]},"145":{"id":145,"name":"Zapdos","reward":200,"baseExperience":216,"stats":{"hp":90,"attack":125,"defense":90,"specialAttack":85,"specialDefense":90,"speed":100},"typeIds":[11,6],"types":["Electric","Flying"],"learnset":[{"level":0,"moveId":42},{"level":0,"moveId":22},{"level":8,"moveId":23},{"level":15,"moveId":365},{"level":22,"moveId":248},{"level":29,"moveId":296},{"level":36,"moveId":257},{"level":43,"moveId":97},{"level":50,"moveId":219},{"level":57,"moveId":158},{"level":64,"moveId":212},{"level":71,"moveId":185},{"level":78,"moveId":202},{"level":85,"moveId":111}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,142,202,69,101,281,111,186,225,23,248,411,44,233,344,427],"shadowExtraTmMoveId":368,"evolutions":[]},"146":{"id":146,"name":"Moltres","reward":200,"baseExperience":216,"stats":{"hp":90,"attack":85,"defense":90,"specialAttack":100,"specialDefense":125,"speed":90},"typeIds":[4,6],"types":["Fire","Flying"],"learnset":[{"level":0,"moveId":75},{"level":0,"moveId":10},{"level":8,"moveId":105},{"level":15,"moveId":97},{"level":22,"moveId":354},{"level":29,"moveId":296},{"level":36,"moveId":184},{"level":43,"moveId":129},{"level":50,"moveId":246},{"level":57,"moveId":158},{"level":64,"moveId":303},{"level":71,"moveId":240},{"level":78,"moveId":422},{"level":85,"moveId":411}],"tmMoveIds":[83,213,143,79,341,415,36,27,127,40,203,69,101,281,184,111,240,186,248,411,44,344,427],"shadowExtraTmMoveId":368,"evolutions":[]},"147":{"id":147,"name":"Dratini","reward":5,"baseExperience":67,"stats":{"hp":41,"attack":64,"defense":45,"specialAttack":50,"specialDefense":50,"speed":50},"typeIds":[15],"types":["Dragon"],"learnset":[{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":5,"moveId":23},{"level":11,"moveId":77},{"level":15,"moveId":29},{"level":21,"moveId":125},{"level":25,"moveId":97},{"level":31,"moveId":271},{"level":35,"moveId":133},{"level":41,"moveId":272},{"level":45,"moveId":129},{"level":51,"moveId":243},{"level":55,"moveId":325},{"level":61,"moveId":281}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,29,142,202,203,407,69,23,111,411,184,289,349,409,281,425,346],"shadowExtraTmMoveId":368,"evolutions":[{"to":148,"level":30,"method":"level"}]},"148":{"id":148,"name":"Dragonair","reward":10,"baseExperience":144,"stats":{"hp":61,"attack":84,"defense":65,"specialAttack":70,"specialDefense":70,"speed":70},"typeIds":[15],"types":["Dragon"],"learnset":[{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":0,"moveId":23},{"level":0,"moveId":77},{"level":15,"moveId":29},{"level":21,"moveId":125},{"level":25,"moveId":97},{"level":33,"moveId":271},{"level":39,"moveId":133},{"level":47,"moveId":272},{"level":53,"moveId":129},{"level":61,"moveId":243},{"level":67,"moveId":325},{"level":75,"moveId":281}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,31,204,40,29,142,202,203,407,69,23,111,411,184,289,349,409,281,425,346],"shadowExtraTmMoveId":368,"evolutions":[{"to":149,"level":55,"method":"level"}]},"149":{"id":149,"name":"Dragonite","reward":20,"baseExperience":218,"stats":{"hp":91,"attack":134,"defense":95,"specialAttack":100,"specialDefense":100,"speed":80},"typeIds":[15,6],"types":["Dragon","Flying"],"learnset":[{"level":0,"moveId":317},{"level":0,"moveId":316},{"level":0,"moveId":158},{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":0,"moveId":23},{"level":0,"moveId":77},{"level":15,"moveId":29},{"level":21,"moveId":125},{"level":25,"moveId":97},{"level":33,"moveId":271},{"level":39,"moveId":133},{"level":47,"moveId":272},{"level":53,"moveId":129},{"level":55,"moveId":75},{"level":61,"moveId":243},{"level":67,"moveId":325},{"level":75,"moveId":281},{"level":81,"moveId":318}],"tmMoveIds":[83,213,143,79,341,415,114,27,127,112,122,31,204,40,29,142,316,202,203,317,154,407,69,101,281,289,194,184,367,111,411,186,199,23,55,409,44,349,344,155,224,346,244,425,408,426,427],"shadowExtraTmMoveId":368,"evolutions":[]},"150":{"id":150,"name":"Mewtwo","reward":100,"baseExperience":220,"stats":{"hp":106,"attack":110,"defense":90,"specialAttack":154,"specialDefense":90,"speed":130},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":20},{"level":0,"moveId":49},{"level":0,"moveId":197},{"level":8,"moveId":69},{"level":15,"moveId":286},{"level":22,"moveId":210},{"level":29,"moveId":117},{"level":43,"moveId":196},{"level":50,"moveId":337},{"level":57,"moveId":259},{"level":58,"moveId":258},{"level":64,"moveId":148},{"level":71,"moveId":350},{"level":79,"moveId":115},{"level":86,"moveId":129},{"level":93,"moveId":417},{"level":100,"moveId":424}],"tmMoveIds":[83,213,143,79,341,415,59,114,27,127,112,31,204,53,40,142,202,116,58,144,203,251,154,407,122,69,316,317,254,346,281,289,194,207,184,367,111,240,148,186,199,225,297,23,182,332,409,411,308,44,233,344,155,414,426],"shadowExtraTmMoveId":368,"evolutions":[]},"151":{"id":151,"name":"Mew","reward":5000,"baseExperience":64,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":48},{"level":0,"moveId":57},{"level":0,"moveId":56},{"level":10,"moveId":59},{"level":20,"moveId":58},{"level":30,"moveId":148},{"level":40,"moveId":197},{"level":50,"moveId":296},{"level":60,"moveId":337},{"level":70,"moveId":350},{"level":80,"moveId":262},{"level":90,"moveId":191},{"level":100,"moveId":417}],"tmMoveIds":[83,213,143,79,341,415,59,36,114,27,127,112,31,204,178,53,40,108,29,142,202,116,58,144,203,251,154,68,76,407,189,122,69,316,317,55,254,101,346,281,289,194,207,184,382,367,111,240,148,186,199,349,245,225,297,23,160,180,310,182,248,247,244,332,409,411,308,298,44,273,233,344,155,414,268,425,426,427,224,408,193],"shadowExtraTmMoveId":368,"evolutions":[]},"243":{"id":243,"name":"Raikou","reward":200,"baseExperience":216,"stats":{"hp":90,"attack":85,"defense":75,"specialAttack":115,"specialDefense":100,"speed":115},"typeIds":[11],"types":["Electric"],"learnset":[{"level":0,"moveId":19},{"level":0,"moveId":43},{"level":8,"moveId":22},{"level":15,"moveId":101},{"level":22,"moveId":4},{"level":29,"moveId":232},{"level":36,"moveId":146},{"level":43,"moveId":84},{"level":50,"moveId":249},{"level":57,"moveId":219},{"level":64,"moveId":302},{"level":71,"moveId":111},{"level":78,"moveId":220},{"level":85,"moveId":202}],"tmMoveIds":[83,213,143,79,341,415,142,202,69,101,281,289,111,207,186,225,23,233,308,344,224,155,411,426],"shadowExtraTmMoveId":368,"evolutions":[]},"244":{"id":244,"name":"Entei","reward":200,"baseExperience":217,"stats":{"hp":115,"attack":115,"defense":85,"specialAttack":90,"specialDefense":75,"speed":100},"typeIds":[4],"types":["Fire"],"learnset":[{"level":0,"moveId":19},{"level":0,"moveId":43},{"level":8,"moveId":10},{"level":15,"moveId":101},{"level":22,"moveId":105},{"level":29,"moveId":327},{"level":36,"moveId":184},{"level":43,"moveId":164},{"level":50,"moveId":92},{"level":57,"moveId":351},{"level":64,"moveId":302},{"level":71,"moveId":203},{"level":78,"moveId":220},{"level":85,"moveId":402}],"tmMoveIds":[83,213,143,79,341,415,203,69,101,281,289,207,184,111,240,186,225,297,308,344,224,155,411,426],"shadowExtraTmMoveId":368,"evolutions":[]},"245":{"id":245,"name":"Suicune","reward":200,"baseExperience":215,"stats":{"hp":100,"attack":75,"defense":115,"specialAttack":90,"specialDefense":115,"speed":85},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":19},{"level":0,"moveId":43},{"level":8,"moveId":112},{"level":15,"moveId":111},{"level":22,"moveId":15},{"level":29,"moveId":260},{"level":43,"moveId":294},{"level":50,"moveId":156},{"level":57,"moveId":145},{"level":64,"moveId":302},{"level":71,"moveId":193},{"level":78,"moveId":220},{"level":85,"moveId":204}],"tmMoveIds":[83,213,143,79,341,415,204,69,101,346,281,289,407,207,111,186,409,224,193,308,344,408,425,155,411],"shadowExtraTmMoveId":368,"evolutions":[]},"251":{"id":251,"name":"Celebi","reward":100,"baseExperience":64,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[1,17],"types":["Grass","Psychic"],"learnset":[{"level":0,"moveId":9},{"level":0,"moveId":20},{"level":0,"moveId":115},{"level":10,"moveId":129},{"level":20,"moveId":296},{"level":30,"moveId":286},{"level":40,"moveId":262},{"level":50,"moveId":324}],"tmMoveIds":[83,213,143,79,341,415,280,210,411,76,281,111,189,354,148,308,217,164,342,186,69,25,309,365,254,225],"shadowExtraTmMoveId":368,"evolutions":[]},"382":{"id":382,"name":"Kyogre","reward":100,"baseExperience":218,"stats":{"hp":100,"attack":100,"defense":90,"specialAttack":150,"specialDefense":140,"speed":90},"typeIds":[3],"types":["Water"],"learnset":[{"level":0,"moveId":93},{"level":5,"moveId":30},{"level":15,"moveId":114},{"level":20,"moveId":379},{"level":30,"moveId":261},{"level":35,"moveId":346},{"level":45,"moveId":296},{"level":50,"moveId":425},{"level":60,"moveId":220},{"level":65,"moveId":133},{"level":75,"moveId":347},{"level":80,"moveId":127},{"level":90,"moveId":193}],"tmMoveIds":[83,213,143,79,341,415,93,220,101,409,346,204,281,111,129,142,202,194,270,416,199,425,426,338,408],"shadowExtraTmMoveId":368,"evolutions":[]},"383":{"id":383,"name":"Groudon","reward":10000,"baseExperience":218,"stats":{"hp":100,"attack":150,"defense":140,"specialAttack":100,"specialDefense":90,"speed":90},"typeIds":[14],"types":["Ground"],"learnset":[{"level":0,"moveId":139},{"level":5,"moveId":30},{"level":15,"moveId":351},{"level":20,"moveId":394},{"level":30,"moveId":143},{"level":35,"moveId":194},{"level":45,"moveId":296},{"level":50,"moveId":402},{"level":60,"moveId":367},{"level":65,"moveId":206},{"level":75,"moveId":276},{"level":80,"moveId":240},{"level":90,"moveId":203}],"tmMoveIds":[83,213,143,79,341,415,244,101,411,281,129,240,289,142,202,194,207,270,416,184,186,203,199,44,418,224,426],"shadowExtraTmMoveId":368,"evolutions":[]},"385":{"id":385,"name":"Jirachi","reward":100,"baseExperience":64,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[9,17],"types":["Steel","Psychic"],"learnset":[{"level":0,"moveId":60},{"level":0,"moveId":20},{"level":5,"moveId":143},{"level":10,"moveId":256},{"level":15,"moveId":99},{"level":20,"moveId":148},{"level":25,"moveId":393},{"level":30,"moveId":143},{"level":35,"moveId":127},{"level":40,"moveId":286},{"level":45,"moveId":138},{"level":50,"moveId":289}],"tmMoveIds":[83,213,143,79,341,415,93,220,411,281,212,111,129,142,202,148,308,146,416,186,44,225],"shadowExtraTmMoveId":368,"evolutions":[]},"386":{"id":386,"name":"Deoxys","reward":10000,"baseExperience":218,"stats":{"hp":50,"attack":150,"defense":50,"specialAttack":150,"specialDefense":50,"speed":150},"typeIds":[17],"types":["Psychic"],"learnset":[{"level":0,"moveId":70},{"level":0,"moveId":43},{"level":5,"moveId":307},{"level":10,"moveId":116},{"level":15,"moveId":177},{"level":20,"moveId":33},{"level":25,"moveId":148},{"level":30,"moveId":305},{"level":35,"moveId":138},{"level":40,"moveId":336},{"level":45,"moveId":148},{"level":50,"moveId":281}],"tmMoveIds":[83,213,143,79,341,415,367,93,220,411,177,346,281,212,111,129,240,142,202,148,308,270,146,416,199,44,224,426,225],"shadowExtraTmMoveId":368,"evolutions":[]},"493":{"id":493,"name":"Arceus","reward":10000,"baseExperience":540,"stats":{"hp":120,"attack":120,"defense":120,"specialAttack":120,"specialDefense":120,"speed":120},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":53},{"level":0,"moveId":138},{"level":0,"moveId":277},{"level":10,"moveId":187},{"level":20,"moveId":206},{"level":30,"moveId":291},{"level":40,"moveId":192},{"level":50,"moveId":393},{"level":60,"moveId":286},{"level":70,"moveId":115},{"level":80,"moveId":281},{"level":90,"moveId":324},{"level":100,"moveId":295}],"tmMoveIds":[83,213,143,79,341,415,244,93,220,101,409,390,411,346,204,281,212,111,189,129,240,289,142,202,194,148,308,270,146,416,184,382,186,203,199,44,418,328,233,354,349,151,134,245,169,344,225,297,195,23,180,173,210,310,414,268,342,182,309,164,247,224,427,425,426,372,338],"shadowExtraTmMoveId":368,"evolutions":[]},"494":{"id":494,"name":"Victini","reward":100,"baseExperience":270,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[17,4],"types":["Psychic","Fire"],"learnset":[{"level":0,"moveId":352},{"level":0,"moveId":353},{"level":0,"moveId":12},{"level":0,"moveId":20},{"level":0,"moveId":4},{"level":9,"moveId":354},{"level":17,"moveId":216},{"level":25,"moveId":355},{"level":33,"moveId":104},{"level":41,"moveId":106},{"level":49,"moveId":223},{"level":57,"moveId":242},{"level":65,"moveId":127},{"level":73,"moveId":330},{"level":81,"moveId":320},{"level":89,"moveId":239},{"level":97,"moveId":418},{"level":98,"moveId":419},{"level":99,"moveId":420},{"level":100,"moveId":421}],"tmMoveIds":[83,213,143,79,341,415,142,202,203,281,184,240,148,225,233,332,344,308,23,411],"shadowExtraTmMoveId":368,"evolutions":[]},"1000":{"id":1000,"name":"Joey","reward":100,"baseExperience":270,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[5],"types":["Normal"],"learnset":[],"tmMoveIds":[83,213,143,79,341,415],"shadowExtraTmMoveId":368,"evolutions":[]},"1001":{"id":1001,"name":"Gary","reward":100,"baseExperience":270,"stats":{"hp":100,"attack":100,"defense":100,"specialAttack":100,"specialDefense":100,"speed":100},"typeIds":[5],"types":["Normal"],"learnset":[],"tmMoveIds":[83,213,143,79,341,415],"shadowExtraTmMoveId":368,"evolutions":[]},"1010":{"id":1010,"name":"MissingNo.","reward":5,"baseExperience":270,"stats":{"hp":33,"attack":136,"defense":0,"specialAttack":6,"specialDefense":0,"speed":29},"typeIds":[5],"types":["Normal"],"learnset":[{"level":0,"moveId":31},{"level":0,"moveId":422}],"tmMoveIds":[83,213,143,79,341,415,59,36,114,27,127,112,31,204,178,53,40,108,29,142,202,116,58,144,203,251,154,68,76,407,189,122,69,316,317,55,254,101,346,281,289,194,207,184,382,367,111,240,148,186,199,349,245,225,297,23,160,180,310,182,248,247,244,332,409,411,308,298,44,273,233,344,155,414,268,425,426,427,224,408,193],"shadowExtraTmMoveId":368,"evolutions":[]}};
const LEVELS=[{"id":1,"className":"level_1","progressionId":1,"background":"gfx_level_1","backgroundSymbolId":19,"waveClass":"class_64","totalWaves":5,"bonusLevel":4,"candyCount":10,"music":"battleWildMusic","paths":{"p":[{"x":-20.25,"y":141.75,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":610.5,"y":136.75,"name":"wp_1_right_left","index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":237.35,"y":229.35,"name":"spot_1","index":1},{"x":387.45,"y":229.35,"name":"spot_2","index":2},{"x":145.5,"y":229.35,"name":"spot_3","index":3},{"x":483.45,"y":229.35,"name":"spot_4","index":4}],"candies":[{"x":562.5,"y":131.95,"name":"candy_1","index":1},{"x":589.25,"y":126.55,"name":"candy_2","index":2},{"x":567.5,"y":150.95,"name":"candy_3","index":3},{"x":594.0,"y":147.7,"name":"candy_4","index":4},{"x":578.25,"y":116.2,"name":"candy_5","index":5},{"x":574.4,"y":158.05,"name":"candy_6","index":6},{"x":562.5,"y":116.2,"name":"candy_7","index":7},{"x":583.25,"y":166.7,"name":"candy_8","index":8},{"x":554.45,"y":155.95,"name":"candy_9","index":9},{"x":565.4,"y":171.95,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[["x","+=","100"],["y","+=","10"]],"baseClass":"screen_Level","displayName":"Oak's Lab","mode":"defense","levelSource":"game-source/scripts/code/level_1.as","nextStageClass":null,"introPopup":"class_978","winPopup":"class_976","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":2,"className":"level_2","progressionId":2,"background":"gfx_level_2","backgroundSymbolId":277,"waveClass":"class_63","totalWaves":6,"bonusLevel":6,"candyCount":5,"music":"battleWildMusic","paths":{"p":[{"x":257.8,"y":-24.5,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":256.8,"y":499.45,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":542.8,"y":513.25,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":540.8,"y":871.75,"name":"wp_3_front_back","index":3,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":398.4,"y":107.0,"name":"spot_1","index":1},{"x":127.5,"y":269.45,"name":"spot_2","index":2},{"x":385.95,"y":304.4,"name":"spot_3","index":3},{"x":387.45,"y":388.4,"name":"spot_4","index":4},{"x":129.5,"y":468.95,"name":"spot_5","index":5},{"x":130.5,"y":528.4,"name":"spot_6","index":6},{"x":253.55,"y":634.9,"name":"spot_7","index":7},{"x":326.5,"y":634.9,"name":"spot_8","index":8},{"x":584.05,"y":385.75,"name":"spot_9","index":9},{"x":675.45,"y":540.4,"name":"spot_10","index":10},{"x":674.7,"y":602.9,"name":"spot_11","index":11},{"x":424.45,"y":754.9,"name":"spot_12","index":12}],"candies":[{"x":528.1,"y":828.85,"name":"candy_1","index":1},{"x":554.85,"y":823.45,"name":"candy_2","index":2},{"x":533.1,"y":847.85,"name":"candy_3","index":3},{"x":559.6,"y":844.6,"name":"candy_4","index":4},{"x":545.45,"y":849.4,"name":"candy_5","index":5}],"specialLevelHooks":["update_Wave_Info"],"waveHooks":["get_Total_Waves","do_Wave","wave_Gone","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 1","mode":"defense","levelSource":"game-source/scripts/code/level_2.as","nextStageClass":null,"introPopup":"class_1065","winPopup":"class_1066","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":3,"className":"level_3","progressionId":3,"background":"gfx_level_3","backgroundSymbolId":549,"waveClass":"class_33","totalWaves":4,"bonusLevel":7,"candyCount":7,"music":"battleWildMusic","paths":{"p":[{"x":-21.3,"y":190.35,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":628.3,"y":202.55,"name":"wp_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":632.85,"y":340.2,"name":"wp_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":1103.35,"y":341.75,"name":"wp_3_right_left","index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":535.05,"y":299.7,"name":"spot_1","index":1},{"x":304.6,"y":103.2,"name":"spot_2","index":2},{"x":730.1,"y":105.7,"name":"spot_3","index":3},{"x":743.1,"y":241.5,"name":"spot_4","index":4},{"x":487.05,"y":103.2,"name":"spot_5","index":5},{"x":1036.25,"y":246.7,"name":"spot_6","index":6},{"x":1038.75,"y":442.05,"name":"spot_7","index":7},{"x":838.55,"y":442.05,"name":"spot_8","index":8}],"candies":[{"x":1027.6,"y":343.7,"name":"candy_1","index":1},{"x":1019.35,"y":356.6,"name":"candy_2","index":2},{"x":1042.45,"y":356.6,"name":"candy_3","index":3},{"x":1073.95,"y":356.6,"name":"candy_4","index":4},{"x":1059.8,"y":361.4,"name":"candy_5","index":5},{"x":1058.2,"y":340.85,"name":"candy_6","index":6},{"x":1042.4,"y":351.95,"name":"candy_7","index":7}],"specialLevelHooks":["start_Level","entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 2","mode":"defense","levelSource":"game-source/scripts/code/level_3.as","nextStageClass":null,"introPopup":"class_1006","winPopup":"class_1005","branchExits":[],"presetTowers":[{"factory":"method_219","args":[],"spot":2},{"factory":"method_400","args":[],"spot":5}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Cut move 224 at spot 3 opens cut_bush; stores Abra presence for special reward.","Contains fixed NPC towers from recovered profile factories.","entered_Battle includes achievement, party-composition or quest conditions."]},{"id":4,"className":"level_4","progressionId":4,"background":"gfx_level_4","backgroundSymbolId":686,"waveClass":"class_30","totalWaves":10,"bonusLevel":9,"candyCount":5,"music":"battleWildMusic","paths":{"p":[{"x":230.2,"y":-15.1,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":228.8,"y":299.4,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":607.85,"y":301.65,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"}],"2":[{"x":951.6,"y":-19.15,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":949.2,"y":299.4,"name":"w2_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":548.75,"y":299.4,"name":"w2_2_left_right","index":2,"direction":"left","reverseDirection":"right"}],"3":[{"x":230.2,"y":-15.1,"name":"w3_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":228.8,"y":299.4,"name":"w3_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":949.2,"y":299.4,"name":"w3_2_back_left","index":2,"direction":"back","reverseDirection":"left"},{"x":951.6,"y":-19.15,"name":"w3_3_back_front","index":3,"direction":"back","reverseDirection":"front"}],"4":[{"x":951.6,"y":-19.15,"name":"w4_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":949.2,"y":299.4,"name":"w4_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":228.8,"y":299.4,"name":"w4_2_back_right","index":2,"direction":"back","reverseDirection":"right"},{"x":230.2,"y":-15.1,"name":"w4_3_back_front","index":3,"direction":"back","reverseDirection":"front"}]},"spots":[{"x":128.35,"y":199.35,"name":"spot_1","index":1},{"x":127.35,"y":271.35,"name":"spot_2","index":2},{"x":126.5,"y":341.25,"name":"spot_3","index":3},{"x":336.5,"y":131.9,"name":"spot_4","index":4},{"x":334.45,"y":205.05,"name":"spot_5","index":5},{"x":842.5,"y":205.05,"name":"spot_6","index":6},{"x":1056.65,"y":122.3,"name":"spot_7","index":7},{"x":1056.65,"y":190.0,"name":"spot_8","index":8},{"x":1056.65,"y":260.0,"name":"spot_9","index":9},{"x":963.45,"y":415.4,"name":"spot_10","index":10},{"x":885.45,"y":415.4,"name":"spot_11","index":11},{"x":128.35,"y":127.9,"name":"spot_12","index":12}],"candies":[{"x":578.35,"y":298.25,"name":"candy_1","index":1},{"x":593.1,"y":302.5,"name":"candy_2","index":2},{"x":582.35,"y":317.25,"name":"candy_3","index":3},{"x":573.25,"y":283.7,"name":"candy_4","index":4},{"x":573.25,"y":315.2,"name":"candy_5","index":5}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Viridian Forest 1","mode":"defense","levelSource":"game-source/scripts/code/level_4.as","nextStageClass":null,"introPopup":"class_999","winPopup":"class_1000","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":5,"className":"level_5","progressionId":5,"background":"gfx_level_5","backgroundSymbolId":825,"waveClass":"class_43","totalWaves":10,"bonusLevel":11,"candyCount":6,"music":"battleGymMusic","paths":{"p":[{"x":383.85,"y":-19.1,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":386.25,"y":232.35,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":792.4,"y":232.35,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"}],"2":[{"x":383.85,"y":-19.1,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":386.25,"y":232.35,"name":"w2_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":7.25,"y":230.35,"name":"w2_2_left_right","index":2,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":47.5,"y":144.0,"name":"spot_1","index":1},{"x":47.5,"y":321.0,"name":"spot_2","index":2},{"x":173.35,"y":144.0,"name":"spot_3","index":3},{"x":278.5,"y":144.0,"name":"spot_4","index":4},{"x":173.35,"y":321.0,"name":"spot_5","index":5},{"x":278.5,"y":321.0,"name":"spot_6","index":6},{"x":389.95,"y":321.0,"name":"spot_7","index":7},{"x":497.5,"y":144.0,"name":"spot_8","index":8},{"x":758.5,"y":144.0,"name":"spot_9","index":9},{"x":497.5,"y":321.0,"name":"spot_10","index":10},{"x":758.5,"y":321.0,"name":"spot_11","index":11},{"x":630.7,"y":321.0,"name":"spot_12","index":12},{"x":630.7,"y":144.0,"name":"spot_13","index":13}],"candies":[{"x":772.0,"y":217.5,"name":"candy_1","index":1},{"x":758.5,"y":240.0,"name":"candy_2","index":2},{"x":778.0,"y":244.5,"name":"candy_3","index":3},{"x":22.05,"y":207.0,"name":"candy_4","index":4},{"x":45.05,"y":225.0,"name":"candy_5","index":5},{"x":22.05,"y":243.0,"name":"candy_6","index":6}],"specialLevelHooks":["entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","wave_Gone","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Pewter Gym","mode":"defense","levelSource":"game-source/scripts/code/level_5.as","nextStageClass":null,"introPopup":"class_1025","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."]},{"id":6,"className":"level_6","progressionId":6,"background":"gfx_level_6","backgroundSymbolId":829,"waveClass":"class_25","totalWaves":30,"bonusLevel":9,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":230.2,"y":-15.1,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":228.8,"y":299.4,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":861.95,"y":301.65,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":127.35,"y":199.35,"name":"spot_1","index":1},{"x":127.35,"y":271.35,"name":"spot_2","index":2},{"x":127.35,"y":342.25,"name":"spot_3","index":3},{"x":336.5,"y":131.9,"name":"spot_4","index":4},{"x":336.5,"y":205.05,"name":"spot_5","index":5},{"x":127.35,"y":128.9,"name":"spot_6","index":6},{"x":427.1,"y":207.5,"name":"spot_7","index":7},{"x":516.0,"y":207.5,"name":"spot_8","index":8},{"x":205.05,"y":415.4,"name":"spot_9","index":9},{"x":292.05,"y":415.4,"name":"spot_10","index":10},{"x":376.0,"y":415.4,"name":"spot_11","index":11}],"candies":[{"x":578.35,"y":486.25,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 3","mode":"defense","levelSource":"game-source/scripts/code/level_6.as","nextStageClass":null,"introPopup":"class_989","winPopup":"class_990","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":7,"className":"level_7","progressionId":7,"background":"gfx_level_7","backgroundSymbolId":833,"waveClass":"class_53","totalWaves":30,"bonusLevel":12,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":195.2,"y":-15.1,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":187.0,"y":634.0,"name":"wp_1_front_back","index":1,"direction":"front","reverseDirection":"back"}],"2":[{"x":657.65,"y":-19.15,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":645.5,"y":634.0,"name":"w2_1_front_back","index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":71.35,"y":199.35,"name":"spot_1","index":1},{"x":71.35,"y":271.35,"name":"spot_2","index":2},{"x":71.35,"y":342.25,"name":"spot_3","index":3},{"x":297.5,"y":130.9,"name":"spot_4","index":4},{"x":297.5,"y":205.05,"name":"spot_5","index":5},{"x":759.1,"y":353.0,"name":"spot_6","index":6},{"x":759.1,"y":136.95,"name":"spot_7","index":7},{"x":759.1,"y":206.65,"name":"spot_8","index":8},{"x":759.1,"y":275.65,"name":"spot_9","index":9},{"x":517.55,"y":132.55,"name":"spot_10","index":10},{"x":517.55,"y":205.05,"name":"spot_11","index":11},{"x":71.35,"y":128.9,"name":"spot_12","index":12}],"candies":[{"x":420.4,"y":495.75,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Viridian Forest 2","mode":"defense","levelSource":"game-source/scripts/code/level_7.as","nextStageClass":null,"introPopup":"class_1046","winPopup":"class_1047","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":8,"className":"level_8","progressionId":8,"background":"gfx_level_8","backgroundSymbolId":865,"waveClass":"class_47","totalWaves":9,"bonusLevel":14,"candyCount":3,"music":"battleWildMusic","paths":{"2":[{"x":551.55,"y":776.4,"name":"w2_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":561.15,"y":141.05,"name":"w2_1_left_front","index":1,"direction":"left","reverseDirection":"front"},{"x":-53.05,"y":137.2,"name":"w2_2_left_right","index":2,"direction":"left","reverseDirection":"right"}],"p":[{"x":265.05,"y":776.4,"name":"wp_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":270.45,"y":149.2,"name":"wp_1_right_front","index":1,"direction":"right","reverseDirection":"front"},{"x":487.8,"y":151.25,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"},{"x":-53.05,"y":145.25,"name":"wp_3_left_right","index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":167.35,"y":550.5,"name":"spot_1","index":1},{"x":167.35,"y":472.0,"name":"spot_2","index":2},{"x":167.35,"y":390.25,"name":"spot_3","index":3},{"x":664.55,"y":390.25,"name":"spot_4","index":4},{"x":664.55,"y":472.0,"name":"spot_5","index":5},{"x":664.55,"y":550.5,"name":"spot_6","index":6},{"x":412.7,"y":465.4,"name":"spot_7","index":7},{"x":412.7,"y":579.75,"name":"spot_8_rock","index":8}],"candies":[{"x":361.95,"y":126.5,"name":"candy_1","index":1},{"x":409.3,"y":144.45,"name":"candy_2","index":2},{"x":453.2,"y":129.35,"name":"candy_3","index":3}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Mt. Moon 1","mode":"defense","levelSource":"game-source/scripts/code/level_8.as","nextStageClass":null,"introPopup":"class_1033","winPopup":"class_1032","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":9,"className":"level_9","progressionId":9,"background":"gfx_level_9","backgroundSymbolId":880,"waveClass":"class_24","totalWaves":30,"bonusLevel":17,"candyCount":16,"music":"battleWildMusic","paths":{"p":[{"x":411.95,"y":-10.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":413.75,"y":1177.85,"name":"wp_1_front_back","index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":279.05,"y":850.5,"name":"spot_1","index":1},{"x":276.05,"y":505.0,"name":"spot_2","index":2},{"x":267.35,"y":229.5,"name":"spot_3","index":3},{"x":554.15,"y":231.0,"name":"spot_4","index":4},{"x":547.15,"y":587.5,"name":"spot_5","index":5},{"x":276.05,"y":589.5,"name":"spot_6","index":6},{"x":547.15,"y":504.55,"name":"spot_7","index":7},{"x":547.15,"y":850.5,"name":"spot_8","index":8},{"x":279.05,"y":1024.0,"name":"spot_9","index":9},{"x":547.15,"y":932.4,"name":"spot_10","index":10},{"x":547.15,"y":1023.35,"name":"spot_11","index":11},{"x":279.05,"y":933.4,"name":"spot_12","index":12}],"candies":[{"x":352.1,"y":312.0,"name":"candy_1","index":1},{"x":374.1,"y":293.05,"name":"candy_2","index":2},{"x":413.1,"y":299.0,"name":"candy_3","index":3},{"x":368.1,"y":324.05,"name":"candy_4","index":4},{"x":397.1,"y":334.0,"name":"candy_5","index":5},{"x":427.1,"y":324.05,"name":"candy_6","index":6},{"x":405.1,"y":309.05,"name":"candy_7","index":7},{"x":417.1,"y":1106.85,"name":"candy_8","index":8},{"x":386.7,"y":1116.85,"name":"candy_9","index":9},{"x":419.1,"y":1133.0,"name":"candy_10","index":10},{"x":380.1,"y":1137.85,"name":"candy_11","index":11},{"x":419.1,"y":688.0,"name":"candy_12","index":12},{"x":371.1,"y":696.95,"name":"candy_13","index":13},{"x":392.95,"y":651.95,"name":"candy_14","index":14},{"x":410.1,"y":733.0,"name":"candy_15","index":15},{"x":420.1,"y":649.95,"name":"candy_16","index":16}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Mt. Moon 2","mode":"defense","levelSource":"game-source/scripts/code/level_9.as","nextStageClass":null,"introPopup":"class_988","winPopup":"class_987","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":10,"className":"level_10","progressionId":10,"background":"gfx_level_10","backgroundSymbolId":42,"waveClass":"class_50","totalWaves":20,"bonusLevel":20,"candyCount":10,"music":"battleGymMusic","paths":{"2":[{"x":555.4,"y":-34.65,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":541.3,"y":410.15,"name":"w2_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":420.35,"y":410.15,"name":"w2_2_front_right","index":2,"direction":"front","reverseDirection":"right"},{"x":417.15,"y":632.75,"name":"w2_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"p":[{"x":307.35,"y":-41.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":297.25,"y":410.15,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":420.35,"y":410.15,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":417.15,"y":632.75,"name":"wp_3_front_back","index":3,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":662.45,"y":232.4,"name":"spot_1","index":1},{"x":174.5,"y":388.35,"name":"spot_2","index":2},{"x":174.5,"y":228.95,"name":"spot_3","index":3},{"x":662.45,"y":392.8,"name":"spot_4","index":4},{"x":428.5,"y":329.25,"name":"spot_5","index":5}],"candies":[{"x":400.95,"y":528.55,"name":"candy_1","index":1},{"x":422.05,"y":528.55,"name":"candy_2","index":2},{"x":401.25,"y":548.95,"name":"candy_3","index":3},{"x":432.75,"y":543.65,"name":"candy_4","index":4},{"x":410.1,"y":563.5,"name":"candy_5","index":5},{"x":438.95,"y":526.15,"name":"candy_6","index":6},{"x":454.7,"y":541.9,"name":"candy_7","index":7},{"x":422.05,"y":558.6,"name":"candy_8","index":8},{"x":454.7,"y":557.65,"name":"candy_9","index":9},{"x":434.25,"y":577.2,"name":"candy_10","index":10}],"specialLevelHooks":["entered_Battle"],"waveHooks":["get_Total_Waves","defeated_Poke","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Cerulean Gym 1","mode":"defense","levelSource":"game-source/scripts/code/level_10.as","nextStageClass":null,"introPopup":"class_1039","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."]},{"id":11,"className":"level_11","progressionId":11,"background":"gfx_level_11","backgroundSymbolId":46,"waveClass":"class_57","totalWaves":1,"bonusLevel":22,"candyCount":10,"music":"battleGymMusic","paths":{"p":[{"x":436.3,"y":-41.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":421.65,"y":497.8,"name":"wp_1_front_back","index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":662.45,"y":116.4,"name":"spot_1","index":1},{"x":662.45,"y":275.8,"name":"spot_2","index":2}],"candies":[{"x":407.95,"y":411.55,"name":"candy_1","index":1},{"x":429.05,"y":411.55,"name":"candy_2","index":2},{"x":408.25,"y":431.95,"name":"candy_3","index":3},{"x":439.75,"y":426.65,"name":"candy_4","index":4},{"x":417.1,"y":446.5,"name":"candy_5","index":5},{"x":445.95,"y":409.15,"name":"candy_6","index":6},{"x":461.7,"y":424.9,"name":"candy_7","index":7},{"x":429.05,"y":441.6,"name":"candy_8","index":8},{"x":461.7,"y":440.65,"name":"candy_9","index":9},{"x":441.25,"y":460.2,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Cerulean Gym 2","mode":"defense","levelSource":"game-source/scripts/code/level_11.as","nextStageClass":null,"introPopup":"class_1054","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":12,"className":"level_12","progressionId":12,"background":"gfx_level_12","backgroundSymbolId":51,"waveClass":"class_48","totalWaves":1,"bonusLevel":24,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":358.3,"y":-15.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":356.6,"y":863.1,"name":"wp_1_front_back","index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":434.55,"y":255.35,"name":"spot_1","index":1},{"x":433.95,"y":369.2,"name":"spot_2","index":2},{"x":432.95,"y":485.05,"name":"spot_3","index":3},{"x":433.95,"y":597.9,"name":"spot_4","index":4}],"candies":[{"x":361.95,"y":744.5,"name":"candy_1","index":1}],"specialLevelHooks":["i_Win"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 24","mode":"defense","levelSource":"game-source/scripts/code/level_12.as","nextStageClass":"class_1115","introPopup":"class_1035","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_1115 before campaign completion."]},{"id":13,"className":"level_13","progressionId":13,"background":"gfx_level_13","backgroundSymbolId":65,"waveClass":"class_44","totalWaves":45,"bonusLevel":27,"candyCount":10,"music":"battleWildMusic","paths":{"p":[{"x":369.3,"y":-7.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":376.6,"y":977.55,"name":"wp_1_front_back","index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":484.45,"y":232.35,"name":"spot_1","index":1},{"x":484.45,"y":307.45,"name":"spot_2","index":2},{"x":484.45,"y":387.55,"name":"spot_3","index":3},{"x":484.45,"y":463.65,"name":"spot_4","index":4},{"x":484.45,"y":542.75,"name":"spot_5","index":5},{"x":484.45,"y":621.85,"name":"spot_6","index":6}],"candies":[{"x":394.95,"y":837.45,"name":"candy_1","index":1},{"x":369.45,"y":837.45,"name":"candy_2","index":2},{"x":379.2,"y":821.7,"name":"candy_3","index":3},{"x":385.2,"y":837.45,"name":"candy_4","index":4},{"x":363.45,"y":821.7,"name":"candy_5","index":5},{"x":394.95,"y":821.7,"name":"candy_6","index":6},{"x":379.2,"y":805.95,"name":"candy_7","index":7},{"x":363.45,"y":821.7,"name":"candy_8","index":8},{"x":379.2,"y":821.7,"name":"candy_9","index":9},{"x":363.45,"y":805.95,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 5","mode":"defense","levelSource":"game-source/scripts/code/level_13.as","nextStageClass":null,"introPopup":"class_1026","winPopup":"class_1027","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":14,"className":"level_14","progressionId":14,"background":"gfx_level_14","backgroundSymbolId":76,"waveClass":"class_28","totalWaves":15,"bonusLevel":30,"candyCount":5,"music":"battleWildMusic","paths":{"p":[{"x":-24.6,"y":255.15,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":738.3,"y":258.5,"name":"wp_1_right_left","index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":291.45,"y":172.4,"name":"spot_1","index":1},{"x":379.45,"y":172.4,"name":"spot_2","index":2},{"x":468.45,"y":172.4,"name":"spot_3","index":3}],"candies":[{"x":723.95,"y":271.5,"name":"candy_1","index":1},{"x":698.45,"y":271.5,"name":"candy_2","index":2},{"x":708.2,"y":255.75,"name":"candy_3","index":3},{"x":714.2,"y":271.5,"name":"candy_4","index":4},{"x":692.45,"y":255.75,"name":"candy_5","index":5}],"specialLevelHooks":["entered_Battle","start_Level"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Vermillion City","mode":"defense","levelSource":"game-source/scripts/code/level_14.as","nextStageClass":null,"introPopup":"class_996","winPopup":"class_995","branchExits":[],"presetTowers":[{"factory":"method_22","args":[61],"spot":2},{"factory":"method_22","args":[5],"spot":1}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories.","entered_Battle includes achievement, party-composition or quest conditions."]},{"id":15,"className":"level_15","progressionId":15,"background":"gfx_level_15","backgroundSymbolId":106,"waveClass":"class_31","totalWaves":40,"bonusLevel":35,"candyCount":5,"music":"battleGymMusic","paths":{"4":[{"x":712.55,"y":962.9,"name":"w4_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":704.05,"y":449.1,"name":"w4_1_left_front","index":1,"direction":"left","reverseDirection":"front"},{"x":164.0,"y":431.9,"name":"w4_2_front_right","index":2,"direction":"front","reverseDirection":"right"},{"x":164.0,"y":911.9,"name":"w4_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"3":[{"x":162.45,"y":962.9,"name":"w3_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":166.8,"y":458.05,"name":"w3_1_right_front","index":1,"direction":"right","reverseDirection":"front"},{"x":700.8,"y":450.25,"name":"w3_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":712.0,"y":911.9,"name":"w3_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"2":[{"x":720.3,"y":-47.65,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":713.3,"y":437.55,"name":"w2_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":181.15,"y":443.95,"name":"w2_2_back_right","index":2,"direction":"back","reverseDirection":"right"},{"x":188.0,"y":-0.1,"name":"w2_3_back_front","index":3,"direction":"back","reverseDirection":"front"}],"p":[{"x":185.15,"y":-27.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":185.25,"y":451.75,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":715.25,"y":443.95,"name":"wp_2_back_left","index":2,"direction":"back","reverseDirection":"left"},{"x":716.0,"y":-0.1,"name":"wp_3_back_front","index":3,"direction":"back","reverseDirection":"front"}]},"spots":[{"x":71.0,"y":216.0,"name":"spot_1","index":1},{"x":71.0,"y":288.0,"name":"spot_2","index":2},{"x":71.0,"y":360.0,"name":"spot_3","index":3},{"x":264.0,"y":217.0,"name":"spot_4","index":4},{"x":264.0,"y":288.0,"name":"spot_5","index":5},{"x":264.0,"y":361.0,"name":"spot_6","index":6},{"x":789.0,"y":177.95,"name":"spot_7","index":7},{"x":790.0,"y":249.95,"name":"spot_8","index":8},{"x":790.0,"y":385.0,"name":"spot_9","index":9},{"x":624.0,"y":216.0,"name":"spot_10","index":10},{"x":624.0,"y":288.0,"name":"spot_11","index":11},{"x":623.0,"y":360.0,"name":"spot_12","index":12},{"x":72.0,"y":555.0,"name":"spot_13","index":13},{"x":72.0,"y":627.0,"name":"spot_14","index":14},{"x":71.0,"y":698.0,"name":"spot_15","index":15},{"x":264.0,"y":552.0,"name":"spot_16","index":16},{"x":264.0,"y":624.0,"name":"spot_17","index":17},{"x":264.0,"y":695.0,"name":"spot_18","index":18},{"x":626.0,"y":553.0,"name":"spot_19","index":19},{"x":625.0,"y":625.0,"name":"spot_20","index":20},{"x":625.0,"y":696.0,"name":"spot_21","index":21},{"x":793.0,"y":553.0,"name":"spot_22","index":22},{"x":793.0,"y":625.0,"name":"spot_23","index":23},{"x":793.0,"y":697.0,"name":"spot_24","index":24}],"candies":[{"x":457.75,"y":443.25,"name":"candy_1","index":1},{"x":457.75,"y":459.0,"name":"candy_2","index":2},{"x":426.25,"y":459.0,"name":"candy_3","index":3},{"x":442.0,"y":443.25,"name":"candy_4","index":4},{"x":442.0,"y":459.0,"name":"candy_5","index":5}],"specialLevelHooks":["entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Vermillion Gym","mode":"defense","levelSource":"game-source/scripts/code/level_15.as","nextStageClass":null,"introPopup":"class_1002","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."]},{"id":16,"className":"level_16","progressionId":16,"background":"gfx_level_16","backgroundSymbolId":200,"waveClass":"class_38","totalWaves":25,"bonusLevel":30,"candyCount":10,"music":"battleWildMusic","paths":{"p":[{"x":185.4,"y":-123.8,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":197.05,"y":193.55,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":616.7,"y":193.85,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":601.65,"y":892.65,"name":"wp_3_right_back","index":3,"direction":"right","reverseDirection":"back"},{"x":1583.15,"y":880.35,"name":"wp_4_right_left","index":4,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":127.35,"y":300.05,"name":"spot_1","index":1},{"x":283.45,"y":298.95,"name":"spot_2","index":2},{"x":468.0,"y":298.95,"name":"spot_3","index":3},{"x":608.05,"y":106.0,"name":"spot_4","index":4},{"x":761.5,"y":298.95,"name":"spot_5","index":5},{"x":494.75,"y":480.0,"name":"spot_6","index":6},{"x":749.8,"y":647.45,"name":"spot_7","index":7},{"x":494.75,"y":789.8,"name":"spot_8","index":8},{"x":584.15,"y":1012.25,"name":"spot_9","index":9},{"x":884.2,"y":1012.25,"name":"spot_10","index":10},{"x":1180.25,"y":776.2,"name":"spot_11","index":11},{"x":1180.25,"y":1012.25,"name":"spot_12","index":12}],"candies":[{"x":185.7,"y":-46.6,"name":"candy_1","index":1},{"x":185.7,"y":-46.6,"name":"candy_2","index":2},{"x":185.7,"y":-46.6,"name":"candy_3","index":3},{"x":185.7,"y":-46.6,"name":"candy_4","index":4},{"x":185.7,"y":-46.6,"name":"candy_5","index":5},{"x":185.7,"y":-46.6,"name":"candy_6","index":6},{"x":185.7,"y":-46.6,"name":"candy_7","index":7},{"x":185.7,"y":-46.6,"name":"candy_8","index":8},{"x":185.7,"y":-46.6,"name":"candy_9","index":9},{"x":185.7,"y":-46.6,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Diglett's Cave","mode":"defense","levelSource":"game-source/scripts/code/level_16.as","nextStageClass":null,"introPopup":"class_1015","winPopup":"class_1014","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":17,"className":"level_17","progressionId":17,"background":"gfx_level_17","backgroundSymbolId":220,"waveClass":null,"totalWaves":0,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":383.85,"y":-29.1,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":386.25,"y":284.35,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":792.4,"y":284.35,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"}],"2":[{"x":383.85,"y":-29.1,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":386.25,"y":284.35,"name":"w2_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":7.25,"y":282.35,"name":"w2_2_left_right","index":2,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":47.5,"y":196.0,"name":"spot_1","index":1},{"x":47.5,"y":373.0,"name":"spot_2","index":2},{"x":173.35,"y":196.0,"name":"spot_3","index":3},{"x":758.5,"y":196.0,"name":"spot_4","index":4},{"x":173.35,"y":373.0,"name":"spot_5","index":5},{"x":630.7,"y":373.0,"name":"spot_6","index":6},{"x":758.5,"y":373.0,"name":"spot_7","index":7},{"x":630.7,"y":196.0,"name":"spot_8","index":8}],"candies":[{"x":392.0,"y":497.45,"name":"candy_1","index":1}],"specialLevelHooks":["unlock_Next_Level"],"waveHooks":[],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"branch","levelSource":"game-source/scripts/code/level_17.as","nextStageClass":null,"introPopup":"class_984","winPopup":"_loc1_","branchExits":["class_954"],"presetTowers":[],"objective":"Choose a route or encounter from the story; clearing one room does not complete the stage.","requiresPartySurvival":false,"specialRules":["Intro requires a party move 225 (Flash); eight room-visited flags track maze progress."]},{"id":18,"className":"level_18","progressionId":18,"background":"gfx_level_18","backgroundSymbolId":234,"waveClass":"class_37","totalWaves":8,"bonusLevel":37,"candyCount":5,"music":"battleWildMusic","paths":{"p":[{"x":-21.3,"y":236.35,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":826.4,"y":226.25,"name":"wp_1_right_left","index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":407.25,"y":345.45,"name":"spot_1","index":1},{"x":304.6,"y":119.2,"name":"spot_2","index":2},{"x":510.0,"y":119.2,"name":"spot_3","index":3},{"x":509.9,"y":345.45,"name":"spot_4","index":4},{"x":407.3,"y":119.2,"name":"spot_5","index":5},{"x":304.6,"y":345.45,"name":"spot_6","index":6}],"candies":[{"x":734.7,"y":233.3,"name":"candy_1","index":1},{"x":734.7,"y":217.55,"name":"candy_2","index":2},{"x":750.45,"y":217.55,"name":"candy_3","index":3},{"x":781.95,"y":233.3,"name":"candy_4","index":4},{"x":766.2,"y":233.3,"name":"candy_5","index":5}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Lavender Town","mode":"defense","levelSource":"game-source/scripts/code/level_18.as","nextStageClass":null,"introPopup":"class_1013","winPopup":"class_1012","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":19,"className":"level_19","progressionId":19,"background":"gfx_level_19","backgroundSymbolId":257,"waveClass":"class_36","totalWaves":45,"bonusLevel":40,"candyCount":3,"music":"battleWildMusic","paths":{"p":[{"x":1648.65,"y":832.5,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":1280.5,"y":828.5,"name":"wp_1_back_right","index":1,"direction":"back","reverseDirection":"right"},{"x":1280.5,"y":262.2,"name":"wp_2_left_front","index":2,"direction":"left","reverseDirection":"front"},{"x":224.35,"y":262.2,"name":"wp_3_front_right","index":3,"direction":"front","reverseDirection":"right"},{"x":216.0,"y":828.5,"name":"wp_4_left_back","index":4,"direction":"left","reverseDirection":"back"},{"x":-62.1,"y":836.3,"name":"wp_5_left_right","index":5,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":304.4,"y":154.5,"name":"spot_1","index":1},{"x":576.6,"y":154.5,"name":"spot_2","index":2},{"x":913.0,"y":154.5,"name":"spot_3","index":3},{"x":1279.15,"y":154.5,"name":"spot_4","index":4},{"x":1390.3,"y":406.55,"name":"spot_5","index":5},{"x":1389.3,"y":736.6,"name":"spot_6","index":6},{"x":1177.4,"y":560.95,"name":"spot_7","index":7},{"x":1062.4,"y":356.55,"name":"spot_8","index":8},{"x":728.45,"y":356.55,"name":"spot_9","index":9},{"x":326.45,"y":356.55,"name":"spot_10","index":10},{"x":123.45,"y":549.9,"name":"spot_11","index":11},{"x":326.45,"y":745.9,"name":"spot_12","index":12}],"candies":[{"x":750.45,"y":553.7,"name":"candy_1","index":1},{"x":593.95,"y":710.25,"name":"candy_2","index":2},{"x":986.45,"y":844.5,"name":"candy_3","index":3}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 8","mode":"defense","levelSource":"game-source/scripts/code/level_19.as","nextStageClass":null,"introPopup":"class_1010","winPopup":"class_1011","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":20,"className":"level_20","progressionId":20,"background":"gfx_level_20","backgroundSymbolId":377,"waveClass":"class_59","totalWaves":16,"bonusLevel":43,"candyCount":10,"music":"battleGymMusic","paths":{"4":[{"x":1430.65,"y":-38.9,"name":"w4_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":1434.2,"y":269.35,"name":"w4_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":945.25,"y":280.05,"name":"w4_2_front_right","index":2,"direction":"front","reverseDirection":"right"},{"x":945.25,"y":911.35,"name":"w4_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"3":[{"x":1756.75,"y":921.75,"name":"w3_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":1757.7,"y":608.95,"name":"w3_1_left_front","index":1,"direction":"left","reverseDirection":"front"},{"x":945.25,"y":613.1,"name":"w3_2_front_right","index":2,"direction":"front","reverseDirection":"right"},{"x":945.25,"y":911.35,"name":"w3_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"2":[{"x":142.15,"y":921.75,"name":"w2_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":155.5,"y":454.2,"name":"w2_1_right_front","index":1,"direction":"right","reverseDirection":"front"},{"x":945.25,"y":460.05,"name":"w2_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":945.25,"y":911.35,"name":"w2_3_front_back","index":3,"direction":"front","reverseDirection":"back"}],"p":[{"x":463.2,"y":-27.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":461.4,"y":453.9,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":945.25,"y":460.05,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":945.25,"y":911.35,"name":"wp_3_front_back","index":3,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":234.35,"y":654.25,"name":"spot_1","index":1},{"x":371.5,"y":522.0,"name":"spot_2","index":2},{"x":364.0,"y":266.0,"name":"spot_3","index":3},{"x":563.15,"y":218.3,"name":"spot_4","index":4},{"x":1532.95,"y":257.9,"name":"spot_5","index":5},{"x":1672.45,"y":690.0,"name":"spot_6","index":6},{"x":1316.0,"y":369.05,"name":"spot_7","index":7},{"x":1455.3,"y":528.0,"name":"spot_8","index":8},{"x":1259.95,"y":686.0,"name":"spot_9","index":9},{"x":658.15,"y":542.0,"name":"spot_10","index":10},{"x":868.65,"y":379.05,"name":"spot_11_grass","index":11},{"x":1037.25,"y":506.1,"name":"spot_12_grass","index":12},{"x":557.6,"y":393.05,"name":"spot_13_grass","index":13},{"x":1834.5,"y":754.25,"name":"spot_14_grass","index":14},{"x":866.2,"y":542.0,"name":"spot_15_grass","index":15},{"x":233.05,"y":520.4,"name":"spot_16_grass","index":16},{"x":366.5,"y":395.95,"name":"spot_17","index":17},{"x":863.45,"y":624.05,"name":"spot_18","index":18},{"x":1038.7,"y":590.3,"name":"spot_19","index":19}],"candies":[{"x":936.95,"y":744.0,"name":"candy_1","index":1},{"x":945.75,"y":767.05,"name":"candy_2","index":2},{"x":930.0,"y":767.05,"name":"candy_3","index":3},{"x":952.7,"y":744.0,"name":"candy_4","index":4},{"x":968.45,"y":759.75,"name":"candy_5","index":5},{"x":914.25,"y":751.3,"name":"candy_6","index":6},{"x":952.7,"y":775.5,"name":"candy_7","index":7},{"x":936.95,"y":791.25,"name":"candy_8","index":8},{"x":945.75,"y":735.75,"name":"candy_9","index":9},{"x":968.45,"y":744.0,"name":"candy_10","index":10}],"specialLevelHooks":["start_Level","entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Celadon Gym","mode":"defense","levelSource":"game-source/scripts/code/level_20.as","nextStageClass":null,"introPopup":"class_1058","winPopup":null,"branchExits":[],"presetTowers":[{"factory":"method_399","args":[],"spot":17},{"factory":"method_267","args":[],"spot":18},{"factory":"method_398","args":[],"spot":19}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories.","entered_Battle includes achievement, party-composition or quest conditions."]},{"id":21,"className":"level_21","progressionId":21,"background":"gfx_level_21","backgroundSymbolId":455,"waveClass":"class_32","totalWaves":47,"bonusLevel":47,"candyCount":10,"music":"kiraJusticeMusic","paths":{"p":[{"x":577.35,"y":125.85,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":400.75,"y":134.4,"name":"wp_1_front_right","index":1,"direction":"front","reverseDirection":"right"},{"x":385.1,"y":892.35,"name":"wp_2_front_back","index":2,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":246.35,"y":209.3,"name":"spot_1","index":1},{"x":246.35,"y":307.05,"name":"spot_2","index":2},{"x":246.35,"y":403.95,"name":"spot_3","index":3},{"x":534.15,"y":353.95,"name":"spot_4","index":4},{"x":534.15,"y":446.9,"name":"spot_5","index":5},{"x":246.35,"y":496.9,"name":"spot_6","index":6}],"candies":[{"x":386.0,"y":815.95,"name":"candy_1","index":1},{"x":394.8,"y":839.0,"name":"candy_2","index":2},{"x":379.05,"y":839.0,"name":"candy_3","index":3},{"x":401.75,"y":815.95,"name":"candy_4","index":4},{"x":417.5,"y":831.7,"name":"candy_5","index":5},{"x":363.3,"y":823.25,"name":"candy_6","index":6},{"x":401.75,"y":847.45,"name":"candy_7","index":7},{"x":386.0,"y":863.2,"name":"candy_8","index":8},{"x":394.8,"y":807.7,"name":"candy_9","index":9},{"x":417.5,"y":815.95,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Rocket Hideout","mode":"defense","levelSource":"game-source/scripts/code/level_21.as","nextStageClass":null,"introPopup":"class_1003","winPopup":"class_1004","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":22,"className":"level_22","progressionId":22,"background":"gfx_level_22","backgroundSymbolId":463,"waveClass":"class_55","totalWaves":30,"bonusLevel":50,"candyCount":15,"music":"pokeTowerMusic","paths":{"2":[{"x":819.35,"y":464.85,"name":"w2_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":-16.7,"y":483.85,"name":"w2_1_left_right","index":1,"direction":"left","reverseDirection":"right"}],"p":[{"x":819.35,"y":464.85,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":558.95,"y":470.7,"name":"wp_1_front_right","index":1,"direction":"front","reverseDirection":"right"},{"x":556.1,"y":780.35,"name":"wp_2_left_back","index":2,"direction":"left","reverseDirection":"back"},{"x":238.25,"y":774.35,"name":"wp_3_back_right","index":3,"direction":"back","reverseDirection":"right"},{"x":238.25,"y":483.85,"name":"wp_4_left_front","index":4,"direction":"left","reverseDirection":"front"},{"x":-16.7,"y":483.85,"name":"wp_5_left_right","index":5,"direction":"left","reverseDirection":"right"}],"1":[{"x":819.35,"y":464.85,"name":"w1_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":717.95,"y":470.7,"name":"w1_1_back_right","index":1,"direction":"back","reverseDirection":"right"},{"x":715.1,"y":218.4,"name":"w1_2_left_front","index":2,"direction":"left","reverseDirection":"front"},{"x":267.25,"y":209.95,"name":"w1_3_front_right","index":3,"direction":"front","reverseDirection":"right"},{"x":260.25,"y":483.85,"name":"w1_4_left_back","index":4,"direction":"left","reverseDirection":"back"},{"x":-16.7,"y":483.85,"name":"w1_5_left_right","index":5,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":679.55,"y":257.05,"name":"spot_1","index":1},{"x":594.3,"y":184.9,"name":"spot_2","index":2},{"x":481.35,"y":142.0,"name":"spot_3","index":3},{"x":493.15,"y":251.0,"name":"spot_4","index":4},{"x":597.0,"y":342.9,"name":"spot_5","index":5},{"x":381.45,"y":225.1,"name":"spot_6","index":6},{"x":597.0,"y":470.75,"name":"spot_7","index":7},{"x":552.95,"y":592.9,"name":"spot_8","index":8},{"x":455.95,"y":517.95,"name":"spot_9","index":9},{"x":431.45,"y":637.9,"name":"spot_10","index":10},{"x":523.95,"y":736.9,"name":"spot_11","index":11},{"x":385.95,"y":763.9,"name":"spot_12","index":12},{"x":245.55,"y":754.9,"name":"spot_13","index":13},{"x":295.55,"y":633.9,"name":"spot_14","index":14},{"x":414.7,"y":405.95,"name":"spot_15","index":15},{"x":329.1,"y":309.95,"name":"spot_16","index":16},{"x":337.95,"y":523.9,"name":"spot_17","index":17},{"x":219.95,"y":257.05,"name":"spot_18","index":18},{"x":281.95,"y":425.95,"name":"spot_19","index":19},{"x":157.95,"y":691.9,"name":"spot_20","index":20},{"x":505.95,"y":368.95,"name":"spot_21","index":21},{"x":248.95,"y":559.9,"name":"spot_22","index":22}],"candies":[{"x":43.05,"y":480.0,"name":"candy_1","index":1},{"x":51.85,"y":503.05,"name":"candy_2","index":2},{"x":36.1,"y":503.05,"name":"candy_3","index":3},{"x":58.8,"y":483.0,"name":"candy_4","index":4},{"x":74.55,"y":495.75,"name":"candy_5","index":5},{"x":20.35,"y":503.05,"name":"candy_6","index":6},{"x":58.8,"y":511.5,"name":"candy_7","index":7},{"x":67.6,"y":508.25,"name":"candy_8","index":8},{"x":51.85,"y":487.75,"name":"candy_9","index":9},{"x":80.55,"y":491.75,"name":"candy_10","index":10},{"x":36.1,"y":487.75,"name":"candy_11","index":11},{"x":63.9,"y":498.9,"name":"candy_12","index":12},{"x":51.85,"y":503.5,"name":"candy_13","index":13},{"x":64.8,"y":491.75,"name":"candy_14","index":14},{"x":36.1,"y":495.75,"name":"candy_15","index":15}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Poke Tower 1","mode":"defense","levelSource":"game-source/scripts/code/level_22.as","nextStageClass":null,"introPopup":"class_1050","winPopup":"class_1051","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":23,"className":"level_23","progressionId":23,"background":"gfx_level_23","backgroundSymbolId":472,"waveClass":"class_42","totalWaves":10,"bonusLevel":57,"candyCount":1,"music":"battleWildMusic","paths":{"2":[{"x":-16.7,"y":494.85,"name":"w2_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":486.25,"y":498.4,"name":"w2_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":486.25,"y":712.15,"name":"w2_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":648.2,"y":715.35,"name":"w2_3_back_left","index":3,"direction":"back","reverseDirection":"left"},{"x":647.9,"y":123.4,"name":"w2_4_front_front","index":4,"direction":"front","reverseDirection":"front"},{"x":647.9,"y":492.7,"name":"w2_5_right_back","index":5,"direction":"right","reverseDirection":"back"},{"x":1596.3,"y":492.85,"name":"w2_6_right_left","index":6,"direction":"right","reverseDirection":"left"}],"p":[{"x":1596.3,"y":492.85,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":647.9,"y":492.7,"name":"wp_1_back_right","index":1,"direction":"back","reverseDirection":"right"},{"x":647.9,"y":123.4,"name":"wp_2_front_front","index":2,"direction":"front","reverseDirection":"front"},{"x":648.2,"y":715.35,"name":"wp_3_left_back","index":3,"direction":"left","reverseDirection":"back"},{"x":486.25,"y":712.15,"name":"wp_4_back_right","index":4,"direction":"back","reverseDirection":"right"},{"x":486.25,"y":498.4,"name":"wp_5_left_front","index":5,"direction":"left","reverseDirection":"front"},{"x":-16.7,"y":494.85,"name":"wp_6_left_right","index":6,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":985.95,"y":405.0,"name":"spot_1","index":1},{"x":1178.35,"y":594.95,"name":"spot_2","index":2},{"x":843.3,"y":593.6,"name":"spot_3","index":3},{"x":360.95,"y":405.0,"name":"spot_4","index":4},{"x":839.95,"y":405.0,"name":"spot_5","index":5},{"x":552.6,"y":594.95,"name":"spot_6","index":6},{"x":747.0,"y":691.95,"name":"spot_7","index":7},{"x":408.95,"y":736.9,"name":"spot_8","index":8},{"x":360.95,"y":592.9,"name":"spot_9","index":9},{"x":1180.35,"y":405.0,"name":"spot_10","index":10},{"x":985.95,"y":594.95,"name":"spot_11","index":11},{"x":552.6,"y":449.95,"name":"spot_12","index":12}],"candies":[{"x":690.95,"y":139.05,"name":"candy_1","index":1}],"specialLevelHooks":["start_Level"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Poke Tower 2","mode":"defense","levelSource":"game-source/scripts/code/level_23.as","nextStageClass":null,"introPopup":"class_1022","winPopup":"class_1023","branchExits":[],"presetTowers":[{"factory":"method_334","args":[],"spot":4}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]},{"id":24,"className":"level_24","progressionId":24,"background":"gfx_level_24","backgroundSymbolId":480,"waveClass":"class_46","totalWaves":45,"bonusLevel":60,"candyCount":1,"music":"route4Music","paths":{"p":[{"x":912.15,"y":172.8,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":441.95,"y":188.9,"name":"wp_1_front_right","index":1,"direction":"front","reverseDirection":"right"},{"x":441.95,"y":287.4,"name":"wp_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":590.2,"y":283.8,"name":"wp_3_front_left","index":3,"direction":"front","reverseDirection":"left"},{"x":590.2,"y":416.85,"name":"wp_4_right_back","index":4,"direction":"right","reverseDirection":"back"},{"x":758.35,"y":418.85,"name":"wp_5_front_left","index":5,"direction":"front","reverseDirection":"left"},{"x":758.35,"y":660.85,"name":"wp_6_left_back","index":6,"direction":"left","reverseDirection":"back"},{"x":627.9,"y":662.05,"name":"wp_7_front_right","index":7,"direction":"front","reverseDirection":"right"},{"x":619.9,"y":1108.15,"name":"wp_8_front_back","index":8,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":336.45,"y":208.8,"name":"spot_1","index":1},{"x":336.45,"y":292.85,"name":"spot_2","index":2},{"x":405.2,"y":360.95,"name":"spot_3","index":3},{"x":474.95,"y":357.95,"name":"spot_4","index":4},{"x":474.95,"y":432.0,"name":"spot_5","index":5},{"x":578.6,"y":512.6,"name":"spot_6","index":6},{"x":667.85,"y":513.6,"name":"spot_7","index":7},{"x":708.0,"y":327.75,"name":"spot_8_flying","index":8},{"x":850.4,"y":470.9,"name":"spot_9_flying","index":9},{"x":850.4,"y":568.75,"name":"spot_10_flying","index":10}],"candies":[{"x":28.0,"y":41.95,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 12","mode":"defense","levelSource":"game-source/scripts/code/level_24.as","nextStageClass":null,"introPopup":"class_1031","winPopup":"class_1030","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":25,"className":"level_25","progressionId":25,"background":"gfx_level_25","backgroundSymbolId":491,"waveClass":"class_61","totalWaves":7,"bonusLevel":63,"candyCount":1,"music":"ash_song","paths":{"2":[{"x":-18.7,"y":574.15,"name":"w2_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":992.85,"y":560.35,"name":"w2_1_back_left","index":1,"direction":"back","reverseDirection":"left"},{"x":991.9,"y":231.9,"name":"w2_2_left_front","index":2,"direction":"left","reverseDirection":"front"},{"x":-25.9,"y":233.8,"name":"w2_3_left_right","index":3,"direction":"left","reverseDirection":"right"}],"p":[{"x":-25.9,"y":233.8,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":991.9,"y":231.9,"name":"wp_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":992.85,"y":560.35,"name":"wp_2_left_back","index":2,"direction":"left","reverseDirection":"back"},{"x":-18.7,"y":574.15,"name":"wp_3_left_right","index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":268.45,"y":155.8,"name":"spot_1","index":1},{"x":477.4,"y":169.2,"name":"spot_2","index":2},{"x":645.2,"y":169.2,"name":"spot_3","index":3},{"x":475.95,"y":360.95,"name":"spot_4","index":4},{"x":454.9,"y":502.0,"name":"spot_5","index":5},{"x":916.55,"y":623.6,"name":"spot_6","index":6},{"x":1073.35,"y":292.85,"name":"spot_7","index":7},{"x":833.0,"y":169.2,"name":"spot_8","index":8},{"x":1073.35,"y":169.2,"name":"spot_9","index":9},{"x":1073.4,"y":624.6,"name":"spot_10","index":10},{"x":285.95,"y":685.75,"name":"spot_11","index":11},{"x":388.9,"y":685.75,"name":"spot_12","index":12}],"candies":[{"x":475.95,"y":235.1,"name":"candy_1","index":1}],"specialLevelHooks":["entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Saffron City","mode":"defense","levelSource":"game-source/scripts/code/level_25.as","nextStageClass":null,"introPopup":"class_1062","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."]},{"id":26,"className":"level_26","progressionId":26,"background":"gfx_level_26","backgroundSymbolId":514,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":4,"music":"battleGymMusic","paths":{"4":[{"x":1545.85,"y":-30.7,"name":"w4_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":1540.95,"y":832.75,"name":"w4_2_front_back","index":2,"direction":"front","reverseDirection":"back"}],"3":[{"x":1099.6,"y":-30.7,"name":"w3_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":1094.7,"y":832.75,"name":"w3_2_front_back","index":2,"direction":"front","reverseDirection":"back"}],"2":[{"x":631.6,"y":-26.7,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":626.7,"y":836.75,"name":"w2_2_front_back","index":2,"direction":"front","reverseDirection":"back"}],"p":[{"x":200.2,"y":-27.65,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":195.3,"y":835.8,"name":"wp_2_front_back","index":2,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":62.3,"y":327.9,"name":"spot_1","index":1},{"x":62.3,"y":523.0,"name":"spot_2","index":2},{"x":62.3,"y":696.05,"name":"spot_3","index":3},{"x":498.15,"y":327.9,"name":"spot_4","index":4},{"x":498.15,"y":523.0,"name":"spot_5","index":5},{"x":498.15,"y":696.05,"name":"spot_6","index":6},{"x":977.7,"y":327.9,"name":"spot_7","index":7},{"x":977.7,"y":523.0,"name":"spot_8","index":8},{"x":977.7,"y":696.05,"name":"spot_9","index":9},{"x":1420.3,"y":327.9,"name":"spot_10","index":10},{"x":1420.3,"y":523.0,"name":"spot_11","index":11},{"x":1420.3,"y":696.05,"name":"spot_12","index":12},{"x":1671.35,"y":327.9,"name":"spot_13","index":13},{"x":1674.35,"y":526.0,"name":"spot_14","index":14},{"x":1674.35,"y":699.05,"name":"spot_15","index":15},{"x":1215.2,"y":327.9,"name":"spot_16","index":16},{"x":1215.2,"y":523.0,"name":"spot_17","index":17},{"x":1215.2,"y":696.05,"name":"spot_18","index":18}],"candies":[{"x":200.75,"y":782.8,"name":"candy_1","index":1},{"x":633.65,"y":782.8,"name":"candy_2","index":2},{"x":1096.0,"y":775.05,"name":"candy_3","index":3},{"x":1546.85,"y":782.8,"name":"candy_4","index":4}],"specialLevelHooks":["set_Party","start_Level","add_Bonuses","reset_Attacker","get_Back_Screen","check_Mouse_Down_Zoom","unlock_Next_Level"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"class_949","displayName":"Saffron Dojo","mode":"invasion","levelSource":"game-source/scripts/code/level_26.as","nextStageClass":null,"introPopup":"class_1070","winPopup":null,"branchExits":[],"presetTowers":[{"factory":"method_22","args":[19],"spot":2},{"factory":"method_22","args":[5],"spot":3},{"factory":"method_22","args":[101],"spot":4},{"factory":"method_22","args":[26],"spot":5},{"factory":"method_22","args":[135],"spot":6},{"factory":"method_22","args":[106],"spot":7},{"factory":"method_22","args":[68],"spot":8},{"factory":"method_22","args":[107],"spot":9},{"factory":"method_22","args":[57],"spot":17},{"factory":"method_22","args":[64],"spot":11},{"factory":"method_22","args":[80],"spot":12},{"factory":"method_22","args":[150],"spot":10},{"factory":"method_22","args":[65],"spot":13},{"factory":"method_22","args":[97],"spot":14}],"energy":500,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["14 fixed defenders; send player Pok\u00e9mon along selected path for 20 energy.","On returned attacker: candy_1 stolen grants energy+100 and var_655=3; candy_2 grants energy+200 and mod_Speed=1.5; candy_3 grants energy+300 and mod_Special_Defense=1.5.","Achievement requires all attackers level<=70 and candy_4 stolen first.","Contains fixed NPC towers from recovered profile factories."]},{"id":27,"className":"level_27","progressionId":27,"background":"gfx_level_27","backgroundSymbolId":522,"waveClass":"class_41","totalWaves":60,"bonusLevel":70,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":476.65,"y":656.05,"name":"wp_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":476.15,"y":266.85,"name":"wp_1_right_front","index":1,"direction":"right","reverseDirection":"front"},{"x":2360.2,"y":262.55,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":2353.6,"y":652.05,"name":"wp_3_front_back","index":3,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":336.2,"y":208.8,"name":"spot_1","index":1},{"x":336.2,"y":292.85,"name":"spot_2","index":2},{"x":336.2,"y":390.95,"name":"spot_3","index":3},{"x":336.2,"y":471.0,"name":"spot_4","index":4},{"x":336.2,"y":554.0,"name":"spot_5","index":5},{"x":493.6,"y":158.8,"name":"spot_6","index":6},{"x":641.85,"y":158.8,"name":"spot_7","index":7},{"x":795.0,"y":158.8,"name":"spot_8","index":8},{"x":961.3,"y":158.8,"name":"spot_9","index":9},{"x":1120.35,"y":158.8,"name":"spot_10","index":10},{"x":1272.0,"y":158.8,"name":"spot_11","index":11},{"x":1423.25,"y":158.8,"name":"spot_12","index":12},{"x":1575.4,"y":158.8,"name":"spot_13","index":13},{"x":1742.7,"y":154.8,"name":"spot_14","index":14},{"x":1895.75,"y":154.8,"name":"spot_15","index":15},{"x":2039.85,"y":155.8,"name":"spot_16","index":16},{"x":2191.5,"y":155.8,"name":"spot_17","index":17},{"x":2341.75,"y":156.4,"name":"spot_18","index":18},{"x":2492.9,"y":156.4,"name":"spot_19","index":19},{"x":2495.9,"y":274.9,"name":"spot_20","index":20},{"x":2495.9,"y":391.05,"name":"spot_21","index":21},{"x":2492.9,"y":483.1,"name":"spot_22","index":22},{"x":2494.9,"y":564.1,"name":"spot_23","index":23}],"candies":[{"x":25.0,"y":37.95,"name":"candy_1","index":1}],"specialLevelHooks":["start_Level"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 15","mode":"defense","levelSource":"game-source/scripts/code/level_27.as","nextStageClass":null,"introPopup":"class_1020","winPopup":"class_1021","branchExits":[],"presetTowers":[{"factory":"method_219","args":[],"spot":7},{"factory":"method_297","args":[],"spot":9},{"factory":"method_351","args":[],"spot":11}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]},{"id":28,"className":"level_28","progressionId":28,"background":"gfx_level_28","backgroundSymbolId":530,"waveClass":"class_54","totalWaves":9,"bonusLevel":75,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"x":88.05,"y":259.85,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":781.25,"y":256.95,"name":"wp_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":784.0,"y":647.55,"name":"wp_2_left_back","index":2,"direction":"left","reverseDirection":"back"},{"x":101.45,"y":647.55,"name":"wp_3_left_right","index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":402.45,"y":164.85,"name":"spot_1","index":1},{"x":550.5,"y":164.85,"name":"spot_2","index":2},{"x":883.35,"y":303.7,"name":"spot_3","index":3},{"x":883.35,"y":164.85,"name":"spot_4","index":4},{"x":693.0,"y":164.85,"name":"spot_5","index":5},{"x":883.35,"y":449.05,"name":"spot_6","index":6},{"x":883.35,"y":594.1,"name":"spot_7","index":7},{"x":835.35,"y":735.15,"name":"spot_8","index":8},{"x":692.65,"y":735.15,"name":"spot_9","index":9},{"x":547.65,"y":735.15,"name":"spot_10","index":10},{"x":404.45,"y":735.15,"name":"spot_11","index":11},{"x":258.55,"y":735.15,"name":"spot_12","index":12}],"candies":[{"x":547.15,"y":645.6,"name":"candy_1","index":1}],"specialLevelHooks":["check_For_End_Of_Game","entered_Battle"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Fuchsia Gym","mode":"defense","levelSource":"game-source/scripts/code/level_28.as","nextStageClass":null,"introPopup":"class_1049","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["After final spawn, set enemy Muk num 89 runAway=true.","entered_Battle includes achievement, party-composition or quest conditions."]},{"id":29,"className":"level_29","progressionId":29,"background":"gfx_level_29","backgroundSymbolId":536,"waveClass":"class_39","totalWaves":60,"bonusLevel":75,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":-62.1,"y":836.3,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":216.0,"y":828.5,"name":"wp_1_back_left","index":1,"direction":"back","reverseDirection":"left"},{"x":224.35,"y":262.2,"name":"wp_2_right_front","index":2,"direction":"right","reverseDirection":"front"},{"x":1280.5,"y":262.2,"name":"wp_3_front_left","index":3,"direction":"front","reverseDirection":"left"},{"x":1280.5,"y":828.5,"name":"wp_4_right_back","index":4,"direction":"right","reverseDirection":"back"},{"x":1648.65,"y":832.5,"name":"wp_5_right_left","index":5,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":304.4,"y":154.5,"name":"spot_1","index":1},{"x":576.6,"y":154.5,"name":"spot_2","index":2},{"x":913.0,"y":154.5,"name":"spot_3","index":3},{"x":1279.15,"y":154.5,"name":"spot_4","index":4},{"x":1391.3,"y":407.55,"name":"spot_5","index":5},{"x":1390.3,"y":736.6,"name":"spot_6","index":6},{"x":1177.4,"y":562.95,"name":"spot_7","index":7},{"x":1063.4,"y":357.55,"name":"spot_8","index":8},{"x":729.45,"y":357.55,"name":"spot_9","index":9},{"x":326.45,"y":357.55,"name":"spot_10","index":10},{"x":123.45,"y":549.9,"name":"spot_11","index":11},{"x":326.45,"y":745.9,"name":"spot_12","index":12}],"candies":[{"x":166.95,"y":150.4,"name":"candy_1","index":1}],"specialLevelHooks":["add_To_Party","end_Level"],"waveHooks":["get_Poke_Profile","get_Total_Waves","do_Wave"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Safari Zone","mode":"safari","levelSource":"game-source/scripts/code/level_29.as","nextStageClass":null,"introPopup":"class_1017","winPopup":"class_1016","branchExits":[],"presetTowers":[],"objective":"Complete the Safari encounter using the temporary Joey party and Safari moves.","requiresPartySurvival":false,"specialRules":["Save party on entry, temporarily replace with Joey, restore on exit; captured Pok\u00e9mon do not join current party."],"partyOverride":{"num":1000,"level":35,"moves":[398,397]}},{"id":30,"className":"level_30","progressionId":30,"background":"gfx_level_30","backgroundSymbolId":556,"waveClass":"class_26","totalWaves":10,"bonusLevel":85,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"x":-0.75,"y":457.9,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":639.25,"y":447.0,"name":"wp_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":654.0,"y":753.45,"name":"wp_2_left_back","index":2,"direction":"left","reverseDirection":"back"},{"x":146.8,"y":763.55,"name":"wp_3_left_right","index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":210.8,"y":117.85,"name":"spot_1","index":1},{"x":293.1,"y":197.85,"name":"spot_2","index":2},{"x":153.35,"y":362.65,"name":"spot_3","index":3},{"x":210.8,"y":197.85,"name":"spot_4","index":4},{"x":128.5,"y":197.85,"name":"spot_5","index":5},{"x":307.35,"y":362.65,"name":"spot_6","index":6},{"x":461.35,"y":362.65,"name":"spot_7","index":7},{"x":615.35,"y":362.65,"name":"spot_8","index":8},{"x":615.35,"y":854.15,"name":"spot_9","index":9},{"x":461.35,"y":854.15,"name":"spot_10","index":10},{"x":307.35,"y":854.15,"name":"spot_11","index":11},{"x":153.35,"y":854.15,"name":"spot_12","index":12},{"x":762.35,"y":854.15,"name":"spot_13","index":13},{"x":762.35,"y":695.55,"name":"spot_14","index":14},{"x":762.35,"y":536.95,"name":"spot_15","index":15}],"candies":[{"x":196.15,"y":763.6,"name":"candy_1","index":1}],"specialLevelHooks":["start_Level","defeated_Poke","remove_From_Party","check_For_End_Of_Game"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 17","mode":"defense","levelSource":"game-source/scripts/code/level_30.as","nextStageClass":null,"introPopup":"class_992","winPopup":"class_991","branchExits":[],"presetTowers":[{"factory":"method_320","args":[],"spot":1}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":true,"specialRules":["Any enemy defeat finishes the wave.","Zapdos has var_490=true and cannot take candy until the wave finishes.","Preset Gary at spot 1 heals specific friendly slots with move 404.","Contains fixed NPC towers from recovered profile factories."]},{"id":31,"className":"level_31","progressionId":31,"background":"gfx_level_31","backgroundSymbolId":581,"waveClass":"class_58","totalWaves":60,"bonusLevel":90,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"x":912.15,"y":136.8,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":273.95,"y":142.0,"name":"wp_1_front_right","index":1,"direction":"front","reverseDirection":"right"},{"x":277.9,"y":419.15,"name":"wp_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":912.15,"y":427.1,"name":"wp_3_right_left","index":3,"direction":"right","reverseDirection":"left"},{"x":619.9,"y":1108.15,"name":"wp_8_front_back","index":8,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":580.65,"y":54.0,"name":"spot_1","index":1},{"x":387.6,"y":57.8,"name":"spot_2","index":2},{"x":589.65,"y":233.8,"name":"spot_3","index":3},{"x":396.6,"y":325.05,"name":"spot_4","index":4},{"x":176.95,"y":414.05,"name":"spot_5","index":5},{"x":705.0,"y":329.8,"name":"spot_6","index":6},{"x":699.0,"y":54.0,"name":"spot_7_water","index":7},{"x":400.6,"y":233.05,"name":"spot_8_water","index":8},{"x":176.95,"y":339.05,"name":"spot_9_water","index":9},{"x":546.65,"y":339.05,"name":"spot_10_water","index":10}],"candies":[{"x":28.0,"y":37.95,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Route 19","mode":"defense","levelSource":"game-source/scripts/code/level_31.as","nextStageClass":null,"introPopup":"class_1055","winPopup":"class_1056","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":32,"className":"level_32","progressionId":32,"background":"gfx_level_32","backgroundSymbolId":643,"waveClass":"class_49","totalWaves":30,"bonusLevel":92,"candyCount":8,"music":"battleWildMusic","paths":{"p":[{"x":281.95,"y":177.5,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":284.0,"y":310.15,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":1438.3,"y":313.05,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"},{"x":619.9,"y":1108.15,"name":"wp_8_front_back","index":8,"direction":"front","reverseDirection":"back"}],"2":[{"x":281.95,"y":513.9,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":284.0,"y":690.55,"name":"w2_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":1476.3,"y":693.45,"name":"w2_2_right_left","index":2,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":287.9,"y":769.15,"name":"spot_1","index":1},{"x":523.65,"y":770.15,"name":"spot_2","index":2},{"x":839.75,"y":770.15,"name":"spot_3","index":3},{"x":1182.8,"y":770.15,"name":"spot_4","index":4},{"x":1231.25,"y":414.05,"name":"spot_5","index":5},{"x":1228.8,"y":195.0,"name":"spot_6","index":6},{"x":979.05,"y":195.0,"name":"spot_7","index":7},{"x":756.45,"y":195.0,"name":"spot_8","index":8},{"x":577.65,"y":195.85,"name":"spot_9","index":9},{"x":1012.75,"y":419.2,"name":"spot_10","index":10}],"candies":[{"x":1372.95,"y":295.95,"name":"candy_1","index":1},{"x":1386.4,"y":304.45,"name":"candy_2","index":2},{"x":1372.95,"y":311.7,"name":"candy_3","index":3},{"x":1388.7,"y":327.45,"name":"candy_4","index":4},{"x":1372.95,"y":327.45,"name":"candy_5","index":5},{"x":1407.4,"y":690.4,"name":"candy_6","index":6},{"x":1423.15,"y":690.4,"name":"candy_7","index":7},{"x":1412.4,"y":707.4,"name":"candy_8","index":8}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Cinnabar Island","mode":"defense","levelSource":"game-source/scripts/code/level_32.as","nextStageClass":null,"introPopup":"class_1036","winPopup":"class_1037","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":33,"className":"level_33","progressionId":33,"background":"gfx_level_33","backgroundSymbolId":647,"waveClass":"class_29","totalWaves":10,"bonusLevel":93,"candyCount":8,"music":"battleGymMusic","paths":{"p":[{"x":281.95,"y":177.5,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":284.0,"y":310.15,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":1438.3,"y":313.05,"name":"wp_2_right_left","index":2,"direction":"right","reverseDirection":"left"}],"2":[{"x":281.95,"y":513.9,"name":"w2_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":284.0,"y":690.55,"name":"w2_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":1476.3,"y":693.45,"name":"w2_2_right_left","index":2,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":287.9,"y":769.15,"name":"spot_1","index":1},{"x":523.65,"y":770.15,"name":"spot_2","index":2},{"x":839.75,"y":770.15,"name":"spot_3","index":3},{"x":1182.8,"y":770.15,"name":"spot_4","index":4},{"x":1231.25,"y":414.05,"name":"spot_5","index":5},{"x":1228.8,"y":195.0,"name":"spot_6","index":6},{"x":979.05,"y":195.0,"name":"spot_7","index":7},{"x":756.45,"y":195.0,"name":"spot_8","index":8},{"x":577.65,"y":195.85,"name":"spot_9","index":9},{"x":1012.75,"y":419.2,"name":"spot_10","index":10}],"candies":[{"x":1372.95,"y":295.95,"name":"candy_1","index":1},{"x":1386.4,"y":304.45,"name":"candy_2","index":2},{"x":1372.95,"y":311.7,"name":"candy_3","index":3},{"x":1388.7,"y":327.45,"name":"candy_4","index":4},{"x":1372.95,"y":327.45,"name":"candy_5","index":5},{"x":1407.4,"y":690.4,"name":"candy_6","index":6},{"x":1423.15,"y":690.4,"name":"candy_7","index":7},{"x":1412.4,"y":707.4,"name":"candy_8","index":8}],"specialLevelHooks":["entered_Battle","remove_From_Party"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Cinnabar Gym","mode":"defense","levelSource":"game-source/scripts/code/level_33.as","nextStageClass":null,"introPopup":"class_997","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":true,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."]},{"id":34,"className":"level_34","progressionId":34,"background":"gfx_level_34","backgroundSymbolId":652,"waveClass":"class_52","totalWaves":60,"bonusLevel":95,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"x":552.65,"y":974.15,"name":"wp_0_back_front","index":0,"direction":"back","reverseDirection":"front"},{"x":557.95,"y":752.05,"name":"wp_1_left_front","index":1,"direction":"left","reverseDirection":"front"},{"x":144.9,"y":758.1,"name":"wp_2_back_right","index":2,"direction":"back","reverseDirection":"right"},{"x":128.2,"y":150.8,"name":"wp_3_right_front","index":3,"direction":"right","reverseDirection":"front"},{"x":607.9,"y":142.0,"name":"wp_4_back_left","index":4,"direction":"back","reverseDirection":"left"},{"x":612.0,"y":-32.15,"name":"wp_5_front_back","index":5,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":639.65,"y":723.9,"name":"spot_1","index":1},{"x":257.6,"y":846.0,"name":"spot_2","index":2},{"x":242.7,"y":618.75,"name":"spot_3","index":3},{"x":242.7,"y":421.05,"name":"spot_4","index":4},{"x":242.7,"y":491.55,"name":"spot_5","index":5},{"x":202.05,"y":228.8,"name":"spot_6","index":6},{"x":372.05,"y":846.9,"name":"spot_7_water","index":7},{"x":506.0,"y":212.05,"name":"spot_8","index":8},{"x":630.9,"y":215.05,"name":"spot_9","index":9},{"x":710.65,"y":122.3,"name":"spot_10","index":10}],"candies":[{"x":437.35,"y":538.3,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Pallet Town","mode":"defense","levelSource":"game-source/scripts/code/level_34.as","nextStageClass":null,"introPopup":"class_1045","winPopup":"class_1044","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":35,"className":"level_35","progressionId":35,"background":"gfx_level_35","backgroundSymbolId":657,"waveClass":"class_40","totalWaves":8,"bonusLevel":95,"candyCount":10,"music":"battleGymMusic","paths":{"p":[{"x":504.9,"y":-13.75,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":500.15,"y":201.8,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":981.5,"y":203.85,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":985.8,"y":552.35,"name":"wp_3_left_back","index":3,"direction":"left","reverseDirection":"back"},{"x":64.55,"y":548.75,"name":"wp_4_back_right","index":4,"direction":"back","reverseDirection":"right"},{"x":64.55,"y":-19.15,"name":"wp_5_back_front","index":5,"direction":"back","reverseDirection":"front"}]},"spots":[{"x":498.9,"y":298.95,"name":"spot_1","index":1},{"x":579.0,"y":298.95,"name":"spot_2","index":2},{"x":656.65,"y":298.95,"name":"spot_3","index":3},{"x":904.65,"y":374.05,"name":"spot_4","index":4},{"x":775.0,"y":455.0,"name":"spot_5","index":5},{"x":694.0,"y":455.0,"name":"spot_6","index":6},{"x":614.05,"y":455.0,"name":"spot_7","index":7},{"x":487.0,"y":634.95,"name":"spot_8","index":8},{"x":398.9,"y":634.95,"name":"spot_9","index":9},{"x":316.65,"y":634.95,"name":"spot_10","index":10},{"x":164.5,"y":374.05,"name":"spot_11","index":11},{"x":164.5,"y":199.95,"name":"spot_12","index":12},{"x":164.5,"y":280.95,"name":"spot_13","index":13},{"x":164.5,"y":116.95,"name":"spot_14","index":14}],"candies":[{"x":64.4,"y":69.35,"name":"candy_1","index":1},{"x":74.5,"y":52.95,"name":"candy_2","index":2},{"x":49.3,"y":76.2,"name":"candy_3","index":3},{"x":76.5,"y":79.95,"name":"candy_4","index":4},{"x":65.05,"y":91.95,"name":"candy_5","index":5},{"x":74.5,"y":91.95,"name":"candy_6","index":6},{"x":49.3,"y":91.95,"name":"candy_7","index":7},{"x":51.5,"y":63.95,"name":"candy_8","index":8},{"x":69.5,"y":72.95,"name":"candy_9","index":9},{"x":76.5,"y":64.2,"name":"candy_10","index":10}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","defeated_Poke","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Viridian City","mode":"defense","levelSource":"game-source/scripts/code/level_35.as","nextStageClass":null,"introPopup":"class_1019","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":36,"className":"level_36","progressionId":36,"background":"gfx_level_35","backgroundSymbolId":657,"waveClass":null,"totalWaves":0,"bonusLevel":95,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"x":504.9,"y":-13.75,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":500.15,"y":201.8,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":981.5,"y":203.85,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":985.8,"y":552.35,"name":"wp_3_left_back","index":3,"direction":"left","reverseDirection":"back"},{"x":64.55,"y":548.75,"name":"wp_4_back_right","index":4,"direction":"back","reverseDirection":"right"},{"x":64.55,"y":-19.15,"name":"wp_5_back_front","index":5,"direction":"back","reverseDirection":"front"}]},"spots":[{"x":498.9,"y":298.95,"name":"spot_1","index":1},{"x":579.0,"y":298.95,"name":"spot_2","index":2},{"x":656.65,"y":298.95,"name":"spot_3","index":3},{"x":904.65,"y":374.05,"name":"spot_4","index":4},{"x":775.0,"y":455.0,"name":"spot_5","index":5},{"x":694.0,"y":455.0,"name":"spot_6","index":6},{"x":614.05,"y":455.0,"name":"spot_7","index":7},{"x":487.0,"y":634.95,"name":"spot_8","index":8},{"x":398.9,"y":634.95,"name":"spot_9","index":9},{"x":316.65,"y":634.95,"name":"spot_10","index":10},{"x":164.5,"y":374.05,"name":"spot_11","index":11},{"x":164.5,"y":199.95,"name":"spot_12","index":12},{"x":164.5,"y":280.95,"name":"spot_13","index":13},{"x":164.5,"y":116.95,"name":"spot_14","index":14}],"candies":[{"x":64.4,"y":69.35,"name":"candy_1","index":1},{"x":74.5,"y":52.95,"name":"candy_2","index":2},{"x":49.3,"y":76.2,"name":"candy_3","index":3},{"x":76.5,"y":79.95,"name":"candy_4","index":4},{"x":65.05,"y":91.95,"name":"candy_5","index":5},{"x":74.5,"y":91.95,"name":"candy_6","index":6},{"x":49.3,"y":91.95,"name":"candy_7","index":7},{"x":51.5,"y":63.95,"name":"candy_8","index":8},{"x":69.5,"y":72.95,"name":"candy_9","index":9},{"x":76.5,"y":64.2,"name":"candy_10","index":10}],"specialLevelHooks":["start_Level"],"waveHooks":[],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Viridian Ending","mode":"story","levelSource":"game-source/scripts/code/level_36.as","nextStageClass":null,"introPopup":"class_1040","winPopup":"class_1041","branchExits":[],"presetTowers":[],"objective":"Advance the ending story; this stage has no combat.","requiresPartySurvival":false,"specialRules":[]},{"id":37,"className":"level_37","progressionId":37,"background":"gfx_level_37","backgroundSymbolId":662,"waveClass":"class_62","totalWaves":30,"bonusLevel":98,"candyCount":1,"music":"mansionMusic","paths":{"p":[{"x":997.85,"y":421.85,"name":"wp_0_left_right","index":0,"direction":"left","reverseDirection":"right"},{"x":680.05,"y":416.35,"name":"wp_1_back_right","index":1,"direction":"back","reverseDirection":"right"},{"x":687.0,"y":202.5,"name":"wp_2_left_front","index":2,"direction":"left","reverseDirection":"front"},{"x":341.05,"y":202.95,"name":"wp_3_front_right","index":3,"direction":"front","reverseDirection":"right"},{"x":334.95,"y":421.85,"name":"wp_4_left_back","index":4,"direction":"left","reverseDirection":"back"},{"x":109.05,"y":426.75,"name":"wp_5_front_right","index":5,"direction":"front","reverseDirection":"right"},{"x":102.3,"y":656.6,"name":"wp_6_right_back","index":6,"direction":"right","reverseDirection":"back"},{"x":306.7,"y":656.65,"name":"wp_7_front_left","index":7,"direction":"front","reverseDirection":"left"},{"x":306.7,"y":797.1,"name":"wp_8_front_back","index":8,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":237.4,"y":183.25,"name":"spot_1","index":1},{"x":44.9,"y":547.0,"name":"spot_2","index":2},{"x":579.0,"y":134.9,"name":"spot_3","index":3},{"x":766.6,"y":308.05,"name":"spot_4","index":4},{"x":431.95,"y":324.05,"name":"spot_5","index":5},{"x":241.9,"y":324.05,"name":"spot_6","index":6}],"candies":[{"x":28.4,"y":27.35,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Total_Waves","defeated_Poke","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Power Plant","mode":"defense","levelSource":"game-source/scripts/code/level_37.as","nextStageClass":null,"introPopup":"class_1064","winPopup":"class_1063","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":38,"className":"level_38","progressionId":38,"background":"gfx_level_38","backgroundSymbolId":667,"waveClass":"class_34","totalWaves":30,"bonusLevel":98,"candyCount":1,"music":"viridianForestSong","paths":{"p":[{"x":421.0,"y":-25.05,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":425.85,"y":469.4,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":909.95,"y":462.85,"name":"wp_2_back_left","index":2,"direction":"back","reverseDirection":"left"},{"x":912.6,"y":-37.6,"name":"wp_3_back_front","index":3,"direction":"back","reverseDirection":"front"}]},"spots":[{"x":534.35,"y":209.25,"name":"spot_1","index":1},{"x":700.0,"y":369.05,"name":"spot_2","index":2},{"x":700.0,"y":543.85,"name":"spot_3","index":3},{"x":1015.6,"y":143.05,"name":"spot_4","index":4},{"x":808.95,"y":143.05,"name":"spot_5","index":5},{"x":327.85,"y":209.25,"name":"spot_6","index":6}],"candies":[{"x":28.4,"y":27.35,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["defeated_Poke","get_Poke_Profile","get_Total_Waves","do_Wave"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Seafoam Island","mode":"defense","levelSource":"game-source/scripts/code/level_38.as","nextStageClass":null,"introPopup":"class_1007","winPopup":"class_1008","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":39,"className":"level_39","progressionId":39,"background":"gfx_level_39","backgroundSymbolId":672,"waveClass":"class_56","totalWaves":30,"bonusLevel":98,"candyCount":1,"music":"ash_song","paths":{"p":[{"x":767.1,"y":-25.05,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":759.9,"y":159.35,"name":"wp_1_left_back","index":1,"direction":"left","reverseDirection":"back"},{"x":164.4,"y":173.15,"name":"wp_2_front_right","index":2,"direction":"front","reverseDirection":"right"},{"x":165.75,"y":432.85,"name":"wp_3_right_back","index":3,"direction":"right","reverseDirection":"back"},{"x":475.1,"y":437.0,"name":"wp_4_front_left","index":4,"direction":"front","reverseDirection":"left"},{"x":475.1,"y":705.1,"name":"wp_5_front_back","index":5,"direction":"front","reverseDirection":"back"}]},"spots":[{"x":83.8,"y":374.95,"name":"spot_1","index":1},{"x":571.95,"y":519.1,"name":"spot_2","index":2},{"x":335.9,"y":374.95,"name":"spot_3","index":3},{"x":353.45,"y":75.0,"name":"spot_4","index":4},{"x":564.9,"y":75.0,"name":"spot_5","index":5},{"x":83.8,"y":293.3,"name":"spot_6","index":6}],"candies":[{"x":28.4,"y":27.35,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["defeated_Poke","get_Poke_Profile","get_Total_Waves","do_Wave"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Victory Road","mode":"defense","levelSource":"game-source/scripts/code/level_39.as","nextStageClass":null,"introPopup":"class_1052","winPopup":"class_1053","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":40,"className":"level_40","progressionId":39,"background":"gfx_level_40","backgroundSymbolId":778,"waveClass":"class_35","totalWaves":4,"bonusLevel":100,"candyCount":6,"music":"battleGymMusic","paths":{"4":[{"x":-32.1,"y":1054.15,"name":"w4_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":1464.2,"y":1047.5,"name":"w4_1_back_left","index":1,"direction":"back","reverseDirection":"left"},{"x":1468.25,"y":642.05,"name":"w4_2_right_front","index":2,"direction":"right","reverseDirection":"front"},{"x":1616.65,"y":642.05,"name":"w4_3_right_left","index":3,"direction":"right","reverseDirection":"left"}],"3":[{"x":-32.1,"y":794.15,"name":"w3_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":1464.2,"y":787.5,"name":"w3_1_back_left","index":1,"direction":"back","reverseDirection":"left"},{"x":1468.25,"y":642.05,"name":"w3_2_right_front","index":2,"direction":"right","reverseDirection":"front"},{"x":1616.65,"y":642.05,"name":"w3_3_right_left","index":3,"direction":"right","reverseDirection":"left"}],"2":[{"x":-32.1,"y":518.15,"name":"w2_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":1466.2,"y":511.5,"name":"w2_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":1468.25,"y":642.05,"name":"w2_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":1616.65,"y":642.05,"name":"w2_3_right_left","index":3,"direction":"right","reverseDirection":"left"}],"p":[{"x":-32.1,"y":254.15,"name":"wp_0_right_left","index":0,"direction":"right","reverseDirection":"left"},{"x":1468.2,"y":247.5,"name":"wp_1_front_left","index":1,"direction":"front","reverseDirection":"left"},{"x":1468.25,"y":642.05,"name":"wp_2_right_back","index":2,"direction":"right","reverseDirection":"back"},{"x":1616.65,"y":642.05,"name":"wp_3_right_left","index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"x":214.0,"y":183.0,"name":"spot_1","index":1},{"x":341.05,"y":183.0,"name":"spot_2","index":2},{"x":468.1,"y":183.0,"name":"spot_3","index":3},{"x":595.15,"y":183.0,"name":"spot_4","index":4},{"x":722.2,"y":183.0,"name":"spot_5","index":5},{"x":849.25,"y":183.0,"name":"spot_6","index":6},{"x":976.3,"y":183.0,"name":"spot_7","index":7},{"x":1103.35,"y":183.0,"name":"spot_8","index":8},{"x":1230.4,"y":183.0,"name":"spot_9","index":9},{"x":213.75,"y":327.45,"name":"spot_10","index":10},{"x":594.9,"y":327.45,"name":"spot_11","index":11},{"x":1103.1,"y":327.45,"name":"spot_12","index":12},{"x":1230.15,"y":327.45,"name":"spot_13","index":13},{"x":976.05,"y":327.45,"name":"spot_14","index":14},{"x":849.0,"y":327.45,"name":"spot_15","index":15},{"x":721.95,"y":327.45,"name":"spot_16","index":16},{"x":467.85,"y":327.45,"name":"spot_17","index":17},{"x":340.8,"y":327.45,"name":"spot_18","index":18},{"x":213.55,"y":446.9,"name":"spot_19","index":19},{"x":340.6,"y":446.9,"name":"spot_20","index":20},{"x":467.65,"y":446.9,"name":"spot_21","index":21},{"x":594.7,"y":446.9,"name":"spot_22","index":22},{"x":721.75,"y":446.9,"name":"spot_23","index":23},{"x":848.8,"y":446.9,"name":"spot_24","index":24},{"x":975.85,"y":446.9,"name":"spot_25","index":25},{"x":1102.9,"y":446.9,"name":"spot_26","index":26},{"x":1229.95,"y":446.9,"name":"spot_27","index":27},{"x":213.3,"y":591.35,"name":"spot_28","index":28},{"x":340.35,"y":591.35,"name":"spot_29","index":29},{"x":467.4,"y":591.35,"name":"spot_30","index":30},{"x":594.45,"y":591.35,"name":"spot_31","index":31},{"x":721.5,"y":591.35,"name":"spot_32","index":32},{"x":848.55,"y":591.35,"name":"spot_33","index":33},{"x":975.6,"y":591.35,"name":"spot_34","index":34},{"x":1102.65,"y":591.35,"name":"spot_35","index":35},{"x":1229.7,"y":591.35,"name":"spot_36","index":36},{"x":213.3,"y":716.65,"name":"spot_37","index":37},{"x":340.35,"y":716.65,"name":"spot_38","index":38},{"x":467.4,"y":716.65,"name":"spot_39","index":39},{"x":594.45,"y":716.65,"name":"spot_40","index":40},{"x":721.5,"y":716.65,"name":"spot_41","index":41},{"x":848.55,"y":716.65,"name":"spot_42","index":42},{"x":975.6,"y":716.65,"name":"spot_43","index":43},{"x":1102.65,"y":716.65,"name":"spot_44","index":44},{"x":1229.7,"y":716.65,"name":"spot_45","index":45},{"x":213.05,"y":861.1,"name":"spot_46","index":46},{"x":340.1,"y":861.1,"name":"spot_47","index":47},{"x":467.15,"y":861.1,"name":"spot_48","index":48},{"x":594.2,"y":861.1,"name":"spot_49","index":49},{"x":721.25,"y":861.1,"name":"spot_50","index":50},{"x":848.3,"y":861.1,"name":"spot_51","index":51},{"x":975.35,"y":861.1,"name":"spot_52","index":52},{"x":1102.4,"y":861.1,"name":"spot_53","index":53},{"x":1229.45,"y":861.1,"name":"spot_54","index":54},{"x":212.85,"y":980.55,"name":"spot_55","index":55},{"x":339.9,"y":980.55,"name":"spot_56","index":56},{"x":466.95,"y":980.55,"name":"spot_57","index":57},{"x":594.0,"y":980.55,"name":"spot_58","index":58},{"x":721.05,"y":980.55,"name":"spot_59","index":59},{"x":848.1,"y":980.55,"name":"spot_60","index":60},{"x":975.15,"y":980.55,"name":"spot_61","index":61},{"x":1102.2,"y":980.55,"name":"spot_62","index":62},{"x":1229.25,"y":980.55,"name":"spot_63","index":63},{"x":212.6,"y":1125.0,"name":"spot_64","index":64},{"x":339.65,"y":1125.0,"name":"spot_65","index":65},{"x":466.7,"y":1125.0,"name":"spot_66","index":66},{"x":593.75,"y":1125.0,"name":"spot_67","index":67},{"x":720.8,"y":1125.0,"name":"spot_68","index":68},{"x":847.85,"y":1125.0,"name":"spot_69","index":69},{"x":974.9,"y":1125.0,"name":"spot_70","index":70},{"x":1101.95,"y":1125.0,"name":"spot_71","index":71},{"x":1229.0,"y":1125.0,"name":"spot_72","index":72}],"candies":[{"x":1467.5,"y":623.15,"name":"candy_1","index":1},{"x":1480.95,"y":631.65,"name":"candy_2","index":2},{"x":1467.5,"y":638.9,"name":"candy_3","index":3},{"x":1483.25,"y":654.65,"name":"candy_4","index":4},{"x":1467.5,"y":654.65,"name":"candy_5","index":5},{"x":1480.95,"y":631.65,"name":"candy_6","index":6}],"specialLevelHooks":["i_Win"],"waveHooks":["get_Total_Waves","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Elite 4","mode":"defense","levelSource":"game-source/scripts/code/level_40.as","nextStageClass":"class_953","introPopup":"class_1009","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_953 before campaign completion."]},{"id":41,"className":"level_41","progressionId":41,"background":"gfx_level_44","backgroundSymbolId":806,"waveClass":"class_60","totalWaves":6,"bonusLevel":100,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"x":417.15,"y":208.5,"name":"wp_0_front_front","index":0,"direction":"front","reverseDirection":"front"},{"x":413.65,"y":356.95,"name":"wp_1_back_back","index":1,"direction":"back","reverseDirection":"back"}]},"spots":[{"x":416.3,"y":321.95,"name":"spot_1","index":1}],"candies":[{"x":173.15,"y":63.1,"name":"candy_1","index":1}],"specialLevelHooks":["remove_From_Party"],"waveHooks":["get_Total_Waves","defeated_Poke","start_Wave","do_Wave","get_Poke_Profile"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Champion","mode":"defense","levelSource":"game-source/scripts/code/level_41.as","nextStageClass":null,"introPopup":"class_1060","winPopup":"class_1059","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":true,"specialRules":[]},{"id":42,"className":"level_42","progressionId":42,"background":"gfx_level_45","backgroundSymbolId":811,"waveClass":"class_51","totalWaves":40,"bonusLevel":100,"candyCount":1,"music":"ash_song","paths":{"p":[{"x":142.1,"y":-43.05,"name":"wp_0_front_back","index":0,"direction":"front","reverseDirection":"back"},{"x":138.75,"y":32.9,"name":"wp_1_right_back","index":1,"direction":"right","reverseDirection":"back"},{"x":618.4,"y":40.15,"name":"wp_2_front_left","index":2,"direction":"front","reverseDirection":"left"},{"x":615.75,"y":514.85,"name":"wp_3_left_back","index":3,"direction":"left","reverseDirection":"back"},{"x":-33.7,"y":522.55,"name":"wp_4_left_right","index":4,"direction":"left","reverseDirection":"right"}]},"spots":[{"x":398.9,"y":608.9,"name":"spot_1","index":1},{"x":708.95,"y":456.9,"name":"spot_2","index":2},{"x":536.9,"y":243.3,"name":"spot_3","index":3},{"x":716.0,"y":168.4,"name":"spot_4","index":4},{"x":214.9,"y":608.9,"name":"spot_5","index":5},{"x":653.8,"y":597.25,"name":"spot_6","index":6}],"candies":[{"x":260.35,"y":276.05,"name":"candy_1","index":1}],"specialLevelHooks":[],"waveHooks":["get_Poke_Profile","get_Total_Waves","do_Wave"],"backgroundOffsets":[],"baseClass":"screen_Level","displayName":"Unknown Dungeon","mode":"defense","levelSource":"game-source/scripts/code/level_42.as","nextStageClass":null,"introPopup":"class_1042","winPopup":"class_1043","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_1115","className":"class_1115","progressionId":12,"background":"gfx_level_12","backgroundSymbolId":51,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2},{"name":"spot_3","x":432.95,"y":485.05,"index":3},{"name":"spot_4","x":433.95,"y":597.9,"index":4}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["set_Party","start_Level","i_Win","get_Level_Music","get_Level_Num","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Route 24","mode":"invasion","levelSource":"game-source/scripts/code/class_1115.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":"class_957","introPopup":"class_1078","winPopup":"class_1068","branchExits":[],"presetTowers":[{"factory":"method_22","args":[10],"spot":1},{"factory":"method_22","args":[13],"spot":2},{"factory":"method_22","args":[14],"spot":3},{"factory":"method_22","args":[11],"spot":4}],"energy":80,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_957 before campaign completion.","Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1116","className":"class_1116","progressionId":12,"background":"gfx_level_12_3","backgroundSymbolId":54,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2},{"name":"spot_3","x":432.95,"y":486.05,"index":3}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["set_Party","start_Level","i_Win","get_Level_Music","get_Level_Num","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Route 24","mode":"invasion","levelSource":"game-source/scripts/code/class_1116.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":"class_960","introPopup":"class_1084","winPopup":"class_1068","branchExits":[],"presetTowers":[{"factory":"method_22","args":[69],"spot":1},{"factory":"method_22","args":[43],"spot":2},{"factory":"method_22","args":[16],"spot":3}],"energy":60,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_960 before campaign completion.","Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1117","className":"class_1117","progressionId":12,"background":"gfx_level_12_4","backgroundSymbolId":57,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["set_Party","start_Level","i_Win","get_Level_Music","get_Level_Num","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Route 24","mode":"invasion","levelSource":"game-source/scripts/code/class_1117.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":"class_962","introPopup":"class_1087","winPopup":"class_1068","branchExits":[],"presetTowers":[{"factory":"method_22","args":[23],"spot":1},{"factory":"method_22","args":[27],"spot":2}],"energy":40,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_962 before campaign completion.","Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1118","className":"class_1118","progressionId":17,"background":"gfx_level_17_4","backgroundSymbolId":224,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["set_Party","start_Level","get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Rock Tunnel","mode":"invasion","levelSource":"game-source/scripts/code/class_1118.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":null,"introPopup":"class_1091","winPopup":null,"branchExits":["class_964","class_959"],"presetTowers":[{"factory":"method_22","args":[12],"spot":1},{"factory":"method_22","args":[18],"spot":2},{"factory":"method_22","args":[67],"spot":3}],"energy":80,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1119","className":"class_1119","progressionId":12,"background":"gfx_level_12_4","backgroundSymbolId":57,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["set_Party","start_Level","i_Win","get_Level_Music","get_Level_Num","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Route 24","mode":"invasion","levelSource":"game-source/scripts/code/class_1119.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":"class_965","introPopup":"class_1092","winPopup":"class_1068","branchExits":[],"presetTowers":[{"factory":"method_22","args":[32],"spot":1},{"factory":"method_22","args":[29],"spot":2}],"energy":40,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_965 before campaign completion.","Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1120","className":"class_1120","progressionId":12,"background":"gfx_level_12_6","backgroundSymbolId":60,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":254.35,"index":1}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["set_Party","start_Level","get_Level_Music","get_Level_Num","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen","unlock_Next_Level"],"baseClass":"class_949","displayName":"Route 24","mode":"invasion","levelSource":"game-source/scripts/code/class_1120.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":null,"introPopup":"class_1098","winPopup":"class_1097","branchExits":[],"presetTowers":[{"factory":"method_22","args":[56],"spot":1}],"energy":20,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]},{"id":"class_1121","className":"class_1121","progressionId":17,"background":"gfx_level_17_4","backgroundSymbolId":224,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["set_Party","start_Level","get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"class_949","displayName":"Rock Tunnel","mode":"invasion","levelSource":"game-source/scripts/code/class_1121.as","attackerRunAway":false,"attackerFreeRoam":true,"nextStageClass":null,"introPopup":"class_1101","winPopup":null,"branchExits":["class_963","class_968"],"presetTowers":[{"factory":"method_22","args":[76],"spot":1},{"factory":"method_22","args":[95],"spot":2},{"factory":"method_22","args":[66],"spot":3}],"energy":80,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]},{"id":"class_910","className":"class_910","progressionId":5,"background":"gfx_level_15","backgroundSymbolId":106,"waveClass":"class_27","totalWaves":40,"bonusLevel":4,"candyCount":5,"music":"battleGymMusic","paths":{"4":[{"name":"w4_0_back_front","x":712.55,"y":962.9,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w4_1_left_front","x":704.05,"y":449.1,"index":1,"direction":"left","reverseDirection":"front"},{"name":"w4_2_front_right","x":164.0,"y":431.9,"index":2,"direction":"front","reverseDirection":"right"},{"name":"w4_3_front_back","x":164.0,"y":911.9,"index":3,"direction":"front","reverseDirection":"back"}],"3":[{"name":"w3_0_back_front","x":162.45,"y":962.9,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w3_1_right_front","x":166.8,"y":458.05,"index":1,"direction":"right","reverseDirection":"front"},{"name":"w3_2_front_left","x":700.8,"y":450.25,"index":2,"direction":"front","reverseDirection":"left"},{"name":"w3_3_front_back","x":712.0,"y":911.9,"index":3,"direction":"front","reverseDirection":"back"}],"2":[{"name":"w2_0_front_back","x":720.3,"y":-47.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"w2_1_left_back","x":713.3,"y":437.55,"index":1,"direction":"left","reverseDirection":"back"},{"name":"w2_2_back_right","x":181.15,"y":443.95,"index":2,"direction":"back","reverseDirection":"right"},{"name":"w2_3_back_front","x":188.0,"y":-0.1,"index":3,"direction":"back","reverseDirection":"front"}],"p":[{"name":"wp_0_front_back","x":185.15,"y":-27.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_right_back","x":185.25,"y":451.75,"index":1,"direction":"right","reverseDirection":"back"},{"name":"wp_2_back_left","x":715.25,"y":443.95,"index":2,"direction":"back","reverseDirection":"left"},{"name":"wp_3_back_front","x":716.0,"y":-0.1,"index":3,"direction":"back","reverseDirection":"front"}]},"spots":[{"name":"spot_1","x":71.0,"y":216.0,"index":1},{"name":"spot_2","x":71.0,"y":288.0,"index":2},{"name":"spot_3","x":71.0,"y":360.0,"index":3},{"name":"spot_4","x":264.0,"y":217.0,"index":4},{"name":"spot_5","x":264.0,"y":288.0,"index":5},{"name":"spot_6","x":264.0,"y":361.0,"index":6},{"name":"spot_7","x":789.0,"y":177.95,"index":7},{"name":"spot_8","x":790.0,"y":249.95,"index":8},{"name":"spot_9","x":790.0,"y":385.0,"index":9},{"name":"spot_10","x":624.0,"y":216.0,"index":10},{"name":"spot_11","x":624.0,"y":288.0,"index":11},{"name":"spot_12","x":623.0,"y":360.0,"index":12},{"name":"spot_13","x":72.0,"y":555.0,"index":13},{"name":"spot_14","x":72.0,"y":627.0,"index":14},{"name":"spot_15","x":71.0,"y":698.0,"index":15},{"name":"spot_16","x":264.0,"y":552.0,"index":16},{"name":"spot_17","x":264.0,"y":624.0,"index":17},{"name":"spot_18","x":264.0,"y":695.0,"index":18},{"name":"spot_19","x":626.0,"y":553.0,"index":19},{"name":"spot_20","x":625.0,"y":625.0,"index":20},{"name":"spot_21","x":625.0,"y":696.0,"index":21},{"name":"spot_22","x":793.0,"y":553.0,"index":22},{"name":"spot_23","x":793.0,"y":625.0,"index":23},{"name":"spot_24","x":793.0,"y":697.0,"index":24}],"candies":[{"name":"candy_1","x":457.75,"y":443.25,"index":1},{"name":"candy_2","x":457.75,"y":459.0,"index":2},{"name":"candy_3","x":426.25,"y":459.0,"index":3},{"name":"candy_4","x":442.0,"y":443.25,"index":4},{"name":"candy_5","x":442.0,"y":459.0,"index":5}],"specialLevelHooks":["get_Level_Music","get_Level_Num","get_Level_BG","unlock_Next_Level","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen","entered_Battle"],"baseClass":"screen_Level","displayName":"Challenge 5","mode":"defense","levelSource":"game-source/scripts/code/class_910.as","nextStageClass":null,"introPopup":"class_994","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["entered_Battle includes achievement, party-composition or quest conditions."],"challengeId":5,"temporaryParty":false,"forcedParty":[]},{"id":"class_928","className":"class_928","progressionId":4,"background":"gfx_level_8","backgroundSymbolId":865,"waveClass":"class_45","totalWaves":9,"bonusLevel":4,"candyCount":3,"music":"battleWildMusic","paths":{"2":[{"name":"w2_0_back_front","x":551.55,"y":776.4,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w2_1_left_front","x":561.15,"y":141.05,"index":1,"direction":"left","reverseDirection":"front"},{"name":"w2_2_left_right","x":-53.05,"y":137.2,"index":2,"direction":"left","reverseDirection":"right"}],"p":[{"name":"wp_0_back_front","x":265.05,"y":776.4,"index":0,"direction":"back","reverseDirection":"front"},{"name":"wp_1_right_front","x":270.45,"y":149.2,"index":1,"direction":"right","reverseDirection":"front"},{"name":"wp_2_right_left","x":487.8,"y":151.25,"index":2,"direction":"right","reverseDirection":"left"},{"name":"wp_3_left_right","x":-53.05,"y":145.25,"index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":167.35,"y":550.5,"index":1},{"name":"spot_2","x":167.35,"y":472.0,"index":2},{"name":"spot_3","x":167.35,"y":390.25,"index":3},{"name":"spot_4","x":664.55,"y":390.25,"index":4},{"name":"spot_5","x":664.55,"y":472.0,"index":5},{"name":"spot_6","x":664.55,"y":550.5,"index":6},{"name":"spot_7","x":412.7,"y":465.4,"index":7},{"name":"spot_8_rock","x":412.7,"y":579.75,"index":8}],"candies":[{"name":"candy_1","x":361.95,"y":126.5,"index":1},{"name":"candy_2","x":409.3,"y":144.45,"index":2},{"name":"candy_3","x":453.2,"y":129.35,"index":3}],"specialLevelHooks":["get_Level_Num","get_Level_BG","unlock_Next_Level","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"screen_Level","displayName":"Challenge 4","mode":"defense","levelSource":"game-source/scripts/code/class_928.as","nextStageClass":null,"introPopup":"class_1028","winPopup":"class_1029","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[],"challengeId":4,"temporaryParty":false,"forcedParty":[]},{"id":"class_949","className":"class_949","progressionId":2,"background":"gfx_challenge_level_2","backgroundSymbolId":10974,"waveClass":"class_65","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"name":"wp_0_right_left","x":-21.3,"y":190.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_front_left","x":628.3,"y":202.55,"index":1,"direction":"front","reverseDirection":"left"},{"name":"wp_2_right_back","x":632.85,"y":340.2,"index":2,"direction":"right","reverseDirection":"back"},{"name":"wp_3_right_left","x":1103.35,"y":341.75,"index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":535.05,"y":299.7,"index":1},{"name":"spot_2","x":304.6,"y":103.2,"index":2},{"name":"spot_3","x":730.1,"y":105.7,"index":3},{"name":"spot_4","x":743.1,"y":241.5,"index":4},{"name":"spot_5","x":485.05,"y":103.2,"index":5},{"name":"spot_6","x":1036.25,"y":246.7,"index":6},{"name":"spot_7","x":1038.75,"y":442.05,"index":7},{"name":"spot_8","x":838.55,"y":442.05,"index":8}],"candies":[{"name":"candy_1","x":1035.25,"y":345.05,"index":1}],"specialLevelHooks":["update_Wave_Info","start_Level","check_For_End_Of_Game","get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen","mouse_Down","check_Mouse_Down_Pokeball","check_Mouse_Down_Potion","check_Mouse_Down_Speed","remove_Enemy"],"baseClass":"screen_Level","displayName":"Challenge 2","mode":"invasion","levelSource":"game-source/scripts/code/class_949.as","nextStageClass":null,"introPopup":"class_1067","winPopup":"class_1068","branchExits":[],"presetTowers":[{"factory":"method_334","args":[],"spot":5},{"factory":"method_243","args":[],"spot":1}],"energy":120,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":[],"challengeId":2,"temporaryParty":true,"forcedParty":[{"speciesId":39,"level":9,"moves":[47,25,48],"selectedMove":47},{"speciesId":35,"level":9,"moves":[48,25,62,63],"selectedMove":48},{"speciesId":74,"level":9,"moves":[1,25,64,66],"selectedMove":1},{"speciesId":16,"level":9,"moves":[1,2],"selectedMove":1},{"speciesId":25,"level":9,"moves":[5,22],"selectedMove":5},{"speciesId":4,"level":9,"moves":[6,10],"selectedMove":6}]},{"id":"class_950","className":"class_950","progressionId":3,"background":"gfx_challenge_level_3","backgroundSymbolId":10991,"waveClass":"class_66","totalWaves":20,"bonusLevel":4,"candyCount":10,"music":"hankBattleMusic","paths":{"2":[{"name":"w2_0_left_right","x":1120.1,"y":310.3,"index":0,"direction":"left","reverseDirection":"right"},{"name":"w2_1_left_right","x":433.7,"y":306.15,"index":1,"direction":"left","reverseDirection":"right"}],"p":[{"name":"wp_0_front_back","x":169.75,"y":-10.15,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":169.75,"y":772.85,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":538.35,"y":395.1,"index":1},{"name":"spot_2","x":656.3,"y":215.35,"index":2},{"name":"spot_3","x":538.35,"y":214.5,"index":3},{"name":"spot_4","x":656.3,"y":393.1,"index":4},{"name":"spot_5","x":781.2,"y":215.35,"index":5},{"name":"spot_6","x":781.85,"y":395.1,"index":6}],"candies":[{"name":"candy_1","x":473.4,"y":304.75,"index":1},{"name":"candy_2","x":470.4,"y":286.25,"index":2},{"name":"candy_3","x":470.4,"y":327.5,"index":3},{"name":"candy_4","x":446.4,"y":303.15,"index":4},{"name":"candy_5","x":486.15,"y":311.75,"index":5},{"name":"candy_6","x":457.65,"y":320.85,"index":6},{"name":"candy_7","x":462.15,"y":303.5,"index":7},{"name":"candy_8","x":477.9,"y":319.6,"index":8},{"name":"candy_9","x":473.4,"y":304.75,"index":9},{"name":"candy_10","x":457.65,"y":320.85,"index":10}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen","captured_Poke"],"baseClass":"screen_Level","displayName":"Challenge 3","mode":"defense","levelSource":"game-source/scripts/code/class_950.as","nextStageClass":null,"introPopup":"class_1071","winPopup":"class_1072","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[],"challengeId":3,"temporaryParty":true,"forcedParty":[]},{"id":"class_951","className":"class_951","progressionId":1,"background":"gfx_challenge_level_1","backgroundSymbolId":10950,"waveClass":"class_67","totalWaves":1,"bonusLevel":4,"candyCount":1,"music":"battleGymMusic","paths":{"p":[{"name":"wp_0_front_back","x":501.9,"y":-19.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_back_back","x":504.85,"y":720.0,"index":1,"direction":"back","reverseDirection":"back"},{"name":"wp_2_left_front","x":512.5,"y":296.35,"index":2,"direction":"left","reverseDirection":"front"},{"name":"wp_3_right_right","x":18.65,"y":291.8,"index":3,"direction":"right","reverseDirection":"right"},{"name":"wp_4_left_left","x":988.9,"y":293.8,"index":4,"direction":"left","reverseDirection":"left"}],"2":[{"name":"w2_0_back_front","x":497.85,"y":789.0,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w2_1_front_front","x":501.9,"y":39.9,"index":1,"direction":"front","reverseDirection":"front"},{"name":"w2_2_right_back","x":512.5,"y":296.35,"index":2,"direction":"right","reverseDirection":"back"},{"name":"w2_3_left_left","x":988.9,"y":293.8,"index":3,"direction":"left","reverseDirection":"left"},{"name":"w2_4_right_right","x":18.65,"y":291.8,"index":4,"direction":"right","reverseDirection":"right"}],"3":[{"name":"w3_0_right_left","x":-32.35,"y":291.8,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w3_1_left_left","x":988.9,"y":293.8,"index":1,"direction":"left","reverseDirection":"left"},{"name":"w3_2_front_right","x":512.5,"y":296.35,"index":2,"direction":"front","reverseDirection":"right"},{"name":"w3_3_back_back","x":501.9,"y":730.0,"index":3,"direction":"back","reverseDirection":"back"},{"name":"w3_4_front_front","x":501.9,"y":39.9,"index":4,"direction":"front","reverseDirection":"front"}],"4":[{"name":"w4_0_left_right","x":1036.9,"y":293.8,"index":0,"direction":"left","reverseDirection":"right"},{"name":"w4_1_right_right","x":22.65,"y":296.35,"index":1,"direction":"right","reverseDirection":"right"},{"name":"w4_2_back_left","x":512.5,"y":296.35,"index":2,"direction":"back","reverseDirection":"left"},{"name":"w4_3_front_front","x":501.9,"y":39.9,"index":3,"direction":"front","reverseDirection":"front"},{"name":"w4_4_back_back","x":501.9,"y":730.0,"index":4,"direction":"back","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":376.55,"y":95.0,"index":1},{"name":"spot_2","x":376.55,"y":169.0,"index":2},{"name":"spot_3","x":637.5,"y":167.0,"index":3},{"name":"spot_4","x":637.5,"y":95.0,"index":4},{"name":"spot_5","x":173.35,"y":230.95,"index":5},{"name":"spot_6","x":278.5,"y":230.95,"index":6},{"name":"spot_7","x":173.35,"y":400.0,"index":7},{"name":"spot_8","x":278.5,"y":402.05,"index":8},{"name":"spot_9","x":376.55,"y":475.05,"index":9},{"name":"spot_10","x":376.55,"y":573.05,"index":10},{"name":"spot_11","x":630.7,"y":567.05,"index":11},{"name":"spot_12","x":630.7,"y":474.05,"index":12},{"name":"spot_13","x":841.0,"y":230.95,"index":13},{"name":"spot_14","x":724.7,"y":230.95,"index":14},{"name":"spot_15","x":724.7,"y":400.0,"index":15},{"name":"spot_16","x":838.5,"y":400.0,"index":16}],"candies":[{"name":"candy_1","x":516.35,"y":305.45,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"screen_Level","displayName":"Challenge 1","mode":"defense","levelSource":"game-source/scripts/code/class_951.as","nextStageClass":null,"introPopup":"class_1074","winPopup":"class_1073","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[],"challengeId":1,"temporaryParty":true,"forcedParty":[{"speciesId":19,"level":6,"moves":[3,4],"selectedMove":3},{"speciesId":11,"level":6,"moves":[14,7],"selectedMove":14},{"speciesId":16,"level":6,"moves":[1,2],"selectedMove":1},{"speciesId":14,"level":6,"moves":[14,7],"selectedMove":14},{"speciesId":4,"level":6,"moves":[6,10],"selectedMove":6}]},{"id":"class_952","className":"class_952","progressionId":6,"background":"gfx_level_20","backgroundSymbolId":377,"waveClass":"class_59","totalWaves":16,"bonusLevel":4,"candyCount":10,"music":"battleGymMusic","paths":{"4":[{"name":"w4_0_front_back","x":1430.65,"y":-38.9,"index":0,"direction":"front","reverseDirection":"back"},{"name":"w4_1_left_back","x":1434.2,"y":269.35,"index":1,"direction":"left","reverseDirection":"back"},{"name":"w4_2_front_right","x":945.25,"y":280.05,"index":2,"direction":"front","reverseDirection":"right"},{"name":"w4_3_front_back","x":945.25,"y":911.35,"index":3,"direction":"front","reverseDirection":"back"}],"3":[{"name":"w3_0_back_front","x":1756.75,"y":921.75,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w3_1_left_front","x":1757.7,"y":608.95,"index":1,"direction":"left","reverseDirection":"front"},{"name":"w3_2_front_right","x":945.25,"y":613.1,"index":2,"direction":"front","reverseDirection":"right"},{"name":"w3_3_front_back","x":945.25,"y":911.35,"index":3,"direction":"front","reverseDirection":"back"}],"2":[{"name":"w2_0_back_front","x":142.15,"y":921.75,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w2_1_right_front","x":155.5,"y":454.2,"index":1,"direction":"right","reverseDirection":"front"},{"name":"w2_2_front_left","x":945.25,"y":460.05,"index":2,"direction":"front","reverseDirection":"left"},{"name":"w2_3_front_back","x":945.25,"y":911.35,"index":3,"direction":"front","reverseDirection":"back"}],"p":[{"name":"wp_0_front_back","x":463.2,"y":-27.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_right_back","x":461.4,"y":453.9,"index":1,"direction":"right","reverseDirection":"back"},{"name":"wp_2_front_left","x":945.25,"y":460.05,"index":2,"direction":"front","reverseDirection":"left"},{"name":"wp_3_front_back","x":945.25,"y":911.35,"index":3,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":234.35,"y":654.25,"index":1},{"name":"spot_2","x":371.5,"y":522.0,"index":2},{"name":"spot_3","x":364.0,"y":266.0,"index":3},{"name":"spot_4","x":563.15,"y":218.3,"index":4},{"name":"spot_5","x":1532.95,"y":257.9,"index":5},{"name":"spot_6","x":1672.45,"y":690.0,"index":6},{"name":"spot_7","x":1316.0,"y":369.05,"index":7},{"name":"spot_8","x":1455.3,"y":528.0,"index":8},{"name":"spot_9","x":1259.95,"y":686.0,"index":9},{"name":"spot_10","x":658.15,"y":542.0,"index":10},{"name":"spot_11_grass","x":868.65,"y":379.05,"index":11},{"name":"spot_12_grass","x":1037.25,"y":506.1,"index":12},{"name":"spot_13_grass","x":557.6,"y":393.05,"index":13},{"name":"spot_14_grass","x":1834.5,"y":754.25,"index":14},{"name":"spot_15_grass","x":866.2,"y":542.0,"index":15},{"name":"spot_16_grass","x":233.05,"y":520.4,"index":16},{"name":"spot_17","x":366.5,"y":395.95,"index":17},{"name":"spot_18","x":863.45,"y":624.05,"index":18},{"name":"spot_19","x":1038.7,"y":590.3,"index":19}],"candies":[{"name":"candy_1","x":936.95,"y":744.0,"index":1},{"name":"candy_2","x":945.75,"y":767.05,"index":2},{"name":"candy_3","x":930.0,"y":767.05,"index":3},{"name":"candy_4","x":952.7,"y":744.0,"index":4},{"name":"candy_5","x":968.45,"y":759.75,"index":5},{"name":"candy_6","x":914.25,"y":751.3,"index":6},{"name":"candy_7","x":952.7,"y":775.5,"index":7},{"name":"candy_8","x":936.95,"y":791.25,"index":8},{"name":"candy_9","x":945.75,"y":735.75,"index":9},{"name":"candy_10","x":968.45,"y":744.0,"index":10}],"specialLevelHooks":["start_Level","get_Level_Music","get_Level_Num","unlock_Next_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen"],"baseClass":"screen_Level","displayName":"Challenge 6","mode":"defense","levelSource":"game-source/scripts/code/class_952.as","nextStageClass":null,"introPopup":"class_1076","winPopup":"class_1075","branchExits":[],"presetTowers":[{"factory":"method_399","args":[],"spot":17},{"factory":"method_267","args":[],"spot":18}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."],"challengeId":6,"temporaryParty":true,"forcedParty":[{"speciesId":6,"level":47,"moves":[203,184],"selectedMove":203},{"speciesId":122,"level":47,"moves":[148,253],"selectedMove":148},{"speciesId":3,"level":47,"moves":[157,94,26],"selectedMove":157},{"speciesId":22,"level":47,"moves":[185,158,43],"selectedMove":185},{"speciesId":114,"level":47,"moves":[283,108,91],"selectedMove":283},{"speciesId":45,"level":47,"moves":[24,73,163],"selectedMove":24}]},{"id":"class_953","className":"class_953","progressionId":39,"background":"gfx_level_41","backgroundSymbolId":785,"waveClass":"class_68","totalWaves":4,"bonusLevel":100,"candyCount":6,"music":"battleGymMusic","paths":{"4":[{"name":"w4_0_right_left","x":-32.1,"y":1054.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w4_1_back_left","x":1464.2,"y":1047.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w4_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w4_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"3":[{"name":"w3_0_right_left","x":-32.1,"y":794.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w3_1_back_left","x":1464.2,"y":787.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w3_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w3_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_right_left","x":-32.1,"y":518.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w2_1_front_left","x":1466.2,"y":511.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"w2_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"w2_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"p":[{"name":"wp_0_right_left","x":-32.1,"y":254.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_front_left","x":1468.2,"y":247.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"wp_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"wp_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":214.0,"y":183.0,"index":1},{"name":"spot_2","x":341.05,"y":183.0,"index":2},{"name":"spot_3","x":468.1,"y":183.0,"index":3},{"name":"spot_4","x":595.15,"y":183.0,"index":4},{"name":"spot_5","x":722.2,"y":183.0,"index":5},{"name":"spot_6","x":849.25,"y":183.0,"index":6},{"name":"spot_7","x":976.3,"y":183.0,"index":7},{"name":"spot_8","x":1103.35,"y":183.0,"index":8},{"name":"spot_9","x":1230.4,"y":183.0,"index":9},{"name":"spot_10","x":213.75,"y":327.45,"index":10},{"name":"spot_11","x":594.9,"y":327.45,"index":11},{"name":"spot_12","x":1103.1,"y":327.45,"index":12},{"name":"spot_13","x":1230.15,"y":327.45,"index":13},{"name":"spot_14","x":976.05,"y":327.45,"index":14},{"name":"spot_15","x":849.0,"y":327.45,"index":15},{"name":"spot_16","x":721.95,"y":327.45,"index":16},{"name":"spot_17","x":467.85,"y":327.45,"index":17},{"name":"spot_18","x":340.8,"y":327.45,"index":18},{"name":"spot_19","x":213.55,"y":446.9,"index":19},{"name":"spot_20","x":340.6,"y":446.9,"index":20},{"name":"spot_21","x":467.65,"y":446.9,"index":21},{"name":"spot_22","x":594.7,"y":446.9,"index":22},{"name":"spot_23","x":721.75,"y":446.9,"index":23},{"name":"spot_24","x":848.8,"y":446.9,"index":24},{"name":"spot_25","x":975.85,"y":446.9,"index":25},{"name":"spot_26","x":1102.9,"y":446.9,"index":26},{"name":"spot_27","x":1229.95,"y":446.9,"index":27},{"name":"spot_28","x":213.3,"y":591.35,"index":28},{"name":"spot_29","x":340.35,"y":591.35,"index":29},{"name":"spot_30","x":467.4,"y":591.35,"index":30},{"name":"spot_31","x":594.45,"y":591.35,"index":31},{"name":"spot_32","x":721.5,"y":591.35,"index":32},{"name":"spot_33","x":848.55,"y":591.35,"index":33},{"name":"spot_34","x":975.6,"y":591.35,"index":34},{"name":"spot_35","x":1102.65,"y":591.35,"index":35},{"name":"spot_36","x":1229.7,"y":591.35,"index":36},{"name":"spot_37","x":213.3,"y":716.65,"index":37},{"name":"spot_38","x":340.35,"y":716.65,"index":38},{"name":"spot_39","x":467.4,"y":716.65,"index":39},{"name":"spot_40","x":594.45,"y":716.65,"index":40},{"name":"spot_41","x":721.5,"y":716.65,"index":41},{"name":"spot_42","x":848.55,"y":716.65,"index":42},{"name":"spot_43","x":975.6,"y":716.65,"index":43},{"name":"spot_44","x":1102.65,"y":716.65,"index":44},{"name":"spot_45","x":1229.7,"y":716.65,"index":45},{"name":"spot_46","x":213.05,"y":861.1,"index":46},{"name":"spot_47","x":340.1,"y":861.1,"index":47},{"name":"spot_48","x":467.15,"y":861.1,"index":48},{"name":"spot_49","x":594.2,"y":861.1,"index":49},{"name":"spot_50","x":721.25,"y":861.1,"index":50},{"name":"spot_51","x":848.3,"y":861.1,"index":51},{"name":"spot_52","x":975.35,"y":861.1,"index":52},{"name":"spot_53","x":1102.4,"y":861.1,"index":53},{"name":"spot_54","x":1229.45,"y":861.1,"index":54},{"name":"spot_55","x":212.85,"y":980.55,"index":55},{"name":"spot_56","x":339.9,"y":980.55,"index":56},{"name":"spot_57","x":466.95,"y":980.55,"index":57},{"name":"spot_58","x":594.0,"y":980.55,"index":58},{"name":"spot_59","x":721.05,"y":980.55,"index":59},{"name":"spot_60","x":848.1,"y":980.55,"index":60},{"name":"spot_61","x":975.15,"y":980.55,"index":61},{"name":"spot_62","x":1102.2,"y":980.55,"index":62},{"name":"spot_63","x":1229.25,"y":980.55,"index":63},{"name":"spot_64","x":212.6,"y":1125.0,"index":64},{"name":"spot_65","x":339.65,"y":1125.0,"index":65},{"name":"spot_66","x":466.7,"y":1125.0,"index":66},{"name":"spot_67","x":593.75,"y":1125.0,"index":67},{"name":"spot_68","x":720.8,"y":1125.0,"index":68},{"name":"spot_69","x":847.85,"y":1125.0,"index":69},{"name":"spot_70","x":974.9,"y":1125.0,"index":70},{"name":"spot_71","x":1101.95,"y":1125.0,"index":71},{"name":"spot_72","x":1229.0,"y":1125.0,"index":72}],"candies":[{"name":"candy_1","x":1467.5,"y":623.15,"index":1},{"name":"candy_2","x":1480.95,"y":631.65,"index":2},{"name":"candy_3","x":1467.5,"y":638.9,"index":3},{"name":"candy_4","x":1483.25,"y":654.65,"index":4},{"name":"candy_5","x":1467.5,"y":654.65,"index":5},{"name":"candy_6","x":1480.95,"y":631.65,"index":6}],"specialLevelHooks":["check_For_End_Of_Game","get_Level_Music","get_Level_Num","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Victory Road","mode":"defense","levelSource":"game-source/scripts/code/class_953.as","nextStageClass":"class_955","introPopup":"class_1077","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_955 before campaign completion.","After final spawn, set enemy Muk num 89 runAway=true."]},{"id":"class_954","className":"class_954","progressionId":17,"background":"gfx_level_17","backgroundSymbolId":220,"waveClass":null,"totalWaves":0,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_right_back","x":386.25,"y":284.35,"index":1,"direction":"right","reverseDirection":"back"},{"name":"wp_2_right_left","x":792.4,"y":284.35,"index":2,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"w2_1_left_back","x":386.25,"y":284.35,"index":1,"direction":"left","reverseDirection":"back"},{"name":"w2_2_left_right","x":7.25,"y":282.35,"index":2,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":47.5,"y":196.0,"index":1},{"name":"spot_2","x":47.5,"y":373.0,"index":2},{"name":"spot_3","x":173.35,"y":196.0,"index":3},{"name":"spot_4","x":758.5,"y":196.0,"index":4},{"name":"spot_5","x":173.35,"y":373.0,"index":5},{"name":"spot_6","x":630.7,"y":373.0,"index":6},{"name":"spot_7","x":758.5,"y":373.0,"index":7},{"name":"spot_8","x":630.7,"y":196.0,"index":8}],"candies":[{"name":"candy_1","x":392.0,"y":497.45,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"branch","levelSource":"game-source/scripts/code/class_954.as","nextStageClass":null,"introPopup":"class_985","winPopup":null,"branchExits":["class_956"],"presetTowers":[],"objective":"Choose a route or encounter from the story; clearing one room does not complete the stage.","requiresPartySurvival":false,"specialRules":[],"encounterChoices":[{"maxRoll":50,"waveClass":"class_23","species":41},{"maxRoll":76,"waveClass":"class_71","species":74},{"maxRoll":84,"waveClass":"class_70","species":95},{"maxRoll":92,"waveClass":"class_72","species":100},{"maxRoll":99,"waveClass":"class_69","species":66}],"encounterRoll":"floor(random()*100), inclusive thresholds"},{"id":"class_955","className":"class_955","progressionId":39,"background":"gfx_level_42","backgroundSymbolId":792,"waveClass":"class_73","totalWaves":4,"bonusLevel":100,"candyCount":6,"music":"battleGymMusic","paths":{"4":[{"name":"w4_0_right_left","x":-32.1,"y":1054.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w4_1_back_left","x":1464.2,"y":1047.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w4_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w4_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"3":[{"name":"w3_0_right_left","x":-32.1,"y":794.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w3_1_back_left","x":1464.2,"y":787.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w3_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w3_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_right_left","x":-32.1,"y":518.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w2_1_front_left","x":1466.2,"y":511.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"w2_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"w2_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"p":[{"name":"wp_0_right_left","x":-32.1,"y":254.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_front_left","x":1468.2,"y":247.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"wp_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"wp_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":214.0,"y":183.0,"index":1},{"name":"spot_2","x":341.05,"y":183.0,"index":2},{"name":"spot_3","x":468.1,"y":183.0,"index":3},{"name":"spot_4","x":595.15,"y":183.0,"index":4},{"name":"spot_5","x":722.2,"y":183.0,"index":5},{"name":"spot_6","x":849.25,"y":183.0,"index":6},{"name":"spot_7","x":976.3,"y":183.0,"index":7},{"name":"spot_8","x":1103.35,"y":183.0,"index":8},{"name":"spot_9","x":1230.4,"y":183.0,"index":9},{"name":"spot_10","x":213.75,"y":327.45,"index":10},{"name":"spot_11","x":594.9,"y":327.45,"index":11},{"name":"spot_12","x":1103.1,"y":327.45,"index":12},{"name":"spot_13","x":1230.15,"y":327.45,"index":13},{"name":"spot_14","x":976.05,"y":327.45,"index":14},{"name":"spot_15","x":849.0,"y":327.45,"index":15},{"name":"spot_16","x":721.95,"y":327.45,"index":16},{"name":"spot_17","x":467.85,"y":327.45,"index":17},{"name":"spot_18","x":340.8,"y":327.45,"index":18},{"name":"spot_19","x":213.55,"y":446.9,"index":19},{"name":"spot_20","x":340.6,"y":446.9,"index":20},{"name":"spot_21","x":467.65,"y":446.9,"index":21},{"name":"spot_22","x":594.7,"y":446.9,"index":22},{"name":"spot_23","x":721.75,"y":446.9,"index":23},{"name":"spot_24","x":848.8,"y":446.9,"index":24},{"name":"spot_25","x":975.85,"y":446.9,"index":25},{"name":"spot_26","x":1102.9,"y":446.9,"index":26},{"name":"spot_27","x":1229.95,"y":446.9,"index":27},{"name":"spot_28","x":213.3,"y":591.35,"index":28},{"name":"spot_29","x":340.35,"y":591.35,"index":29},{"name":"spot_30","x":467.4,"y":591.35,"index":30},{"name":"spot_31","x":594.45,"y":591.35,"index":31},{"name":"spot_32","x":721.5,"y":591.35,"index":32},{"name":"spot_33","x":848.55,"y":591.35,"index":33},{"name":"spot_34","x":975.6,"y":591.35,"index":34},{"name":"spot_35","x":1102.65,"y":591.35,"index":35},{"name":"spot_36","x":1229.7,"y":591.35,"index":36},{"name":"spot_37","x":213.3,"y":716.65,"index":37},{"name":"spot_38","x":340.35,"y":716.65,"index":38},{"name":"spot_39","x":467.4,"y":716.65,"index":39},{"name":"spot_40","x":594.45,"y":716.65,"index":40},{"name":"spot_41","x":721.5,"y":716.65,"index":41},{"name":"spot_42","x":848.55,"y":716.65,"index":42},{"name":"spot_43","x":975.6,"y":716.65,"index":43},{"name":"spot_44","x":1102.65,"y":716.65,"index":44},{"name":"spot_45","x":1229.7,"y":716.65,"index":45},{"name":"spot_46","x":213.05,"y":861.1,"index":46},{"name":"spot_47","x":340.1,"y":861.1,"index":47},{"name":"spot_48","x":467.15,"y":861.1,"index":48},{"name":"spot_49","x":594.2,"y":861.1,"index":49},{"name":"spot_50","x":721.25,"y":861.1,"index":50},{"name":"spot_51","x":848.3,"y":861.1,"index":51},{"name":"spot_52","x":975.35,"y":861.1,"index":52},{"name":"spot_53","x":1102.4,"y":861.1,"index":53},{"name":"spot_54","x":1229.45,"y":861.1,"index":54},{"name":"spot_55","x":212.85,"y":980.55,"index":55},{"name":"spot_56","x":339.9,"y":980.55,"index":56},{"name":"spot_57","x":466.95,"y":980.55,"index":57},{"name":"spot_58","x":594.0,"y":980.55,"index":58},{"name":"spot_59","x":721.05,"y":980.55,"index":59},{"name":"spot_60","x":848.1,"y":980.55,"index":60},{"name":"spot_61","x":975.15,"y":980.55,"index":61},{"name":"spot_62","x":1102.2,"y":980.55,"index":62},{"name":"spot_63","x":1229.25,"y":980.55,"index":63},{"name":"spot_64","x":212.6,"y":1125.0,"index":64},{"name":"spot_65","x":339.65,"y":1125.0,"index":65},{"name":"spot_66","x":466.7,"y":1125.0,"index":66},{"name":"spot_67","x":593.75,"y":1125.0,"index":67},{"name":"spot_68","x":720.8,"y":1125.0,"index":68},{"name":"spot_69","x":847.85,"y":1125.0,"index":69},{"name":"spot_70","x":974.9,"y":1125.0,"index":70},{"name":"spot_71","x":1101.95,"y":1125.0,"index":71},{"name":"spot_72","x":1229.0,"y":1125.0,"index":72}],"candies":[{"name":"candy_1","x":1467.5,"y":623.15,"index":1},{"name":"candy_2","x":1480.95,"y":631.65,"index":2},{"name":"candy_3","x":1467.5,"y":638.9,"index":3},{"name":"candy_4","x":1483.25,"y":654.65,"index":4},{"name":"candy_5","x":1467.5,"y":654.65,"index":5},{"name":"candy_6","x":1480.95,"y":631.65,"index":6}],"specialLevelHooks":["get_Level_Music","get_Level_Num","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Victory Road","mode":"defense","levelSource":"game-source/scripts/code/class_955.as","nextStageClass":"class_958","introPopup":"class_1079","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_958 before campaign completion."]},{"id":"class_956","className":"class_956","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_74","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_956.as","nextStageClass":null,"introPopup":"class_1080","winPopup":null,"branchExits":["class_954","class_959"],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_957","className":"class_957","progressionId":12,"background":"gfx_level_12_3","backgroundSymbolId":54,"waveClass":"class_75","totalWaves":1,"bonusLevel":24,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2},{"name":"spot_3","x":432.95,"y":486.05,"index":3}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["get_Level_Num","poke_Bonus_Level","get_Level_Music","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Route 24","mode":"defense","levelSource":"game-source/scripts/code/class_957.as","nextStageClass":"class_1116","introPopup":"class_1081","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_1116 before campaign completion."]},{"id":"class_958","className":"class_958","progressionId":40,"background":"gfx_level_43","backgroundSymbolId":799,"waveClass":"class_76","totalWaves":4,"bonusLevel":100,"candyCount":6,"music":"battleGymMusic","paths":{"4":[{"name":"w4_0_right_left","x":-32.1,"y":1054.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w4_1_back_left","x":1464.2,"y":1047.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w4_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w4_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"3":[{"name":"w3_0_right_left","x":-32.1,"y":794.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w3_1_back_left","x":1464.2,"y":787.5,"index":1,"direction":"back","reverseDirection":"left"},{"name":"w3_2_right_front","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"front"},{"name":"w3_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_right_left","x":-32.1,"y":518.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w2_1_front_left","x":1466.2,"y":511.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"w2_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"w2_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}],"p":[{"name":"wp_0_right_left","x":-32.1,"y":254.15,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_front_left","x":1468.2,"y":247.5,"index":1,"direction":"front","reverseDirection":"left"},{"name":"wp_2_right_back","x":1468.25,"y":642.05,"index":2,"direction":"right","reverseDirection":"back"},{"name":"wp_3_right_left","x":1616.65,"y":642.05,"index":3,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":214.0,"y":183.0,"index":1},{"name":"spot_2","x":341.05,"y":183.0,"index":2},{"name":"spot_3","x":468.1,"y":183.0,"index":3},{"name":"spot_4","x":595.15,"y":183.0,"index":4},{"name":"spot_5","x":722.2,"y":183.0,"index":5},{"name":"spot_6","x":849.25,"y":183.0,"index":6},{"name":"spot_7","x":976.3,"y":183.0,"index":7},{"name":"spot_8","x":1103.35,"y":183.0,"index":8},{"name":"spot_9","x":1230.4,"y":183.0,"index":9},{"name":"spot_10","x":213.75,"y":327.45,"index":10},{"name":"spot_11","x":594.9,"y":327.45,"index":11},{"name":"spot_12","x":1103.1,"y":327.45,"index":12},{"name":"spot_13","x":1230.15,"y":327.45,"index":13},{"name":"spot_14","x":976.05,"y":327.45,"index":14},{"name":"spot_15","x":849.0,"y":327.45,"index":15},{"name":"spot_16","x":721.95,"y":327.45,"index":16},{"name":"spot_17","x":467.85,"y":327.45,"index":17},{"name":"spot_18","x":340.8,"y":327.45,"index":18},{"name":"spot_19","x":213.55,"y":446.9,"index":19},{"name":"spot_20","x":340.6,"y":446.9,"index":20},{"name":"spot_21","x":467.65,"y":446.9,"index":21},{"name":"spot_22","x":594.7,"y":446.9,"index":22},{"name":"spot_23","x":721.75,"y":446.9,"index":23},{"name":"spot_24","x":848.8,"y":446.9,"index":24},{"name":"spot_25","x":975.85,"y":446.9,"index":25},{"name":"spot_26","x":1102.9,"y":446.9,"index":26},{"name":"spot_27","x":1229.95,"y":446.9,"index":27},{"name":"spot_28","x":213.3,"y":591.35,"index":28},{"name":"spot_29","x":340.35,"y":591.35,"index":29},{"name":"spot_30","x":467.4,"y":591.35,"index":30},{"name":"spot_31","x":594.45,"y":591.35,"index":31},{"name":"spot_32","x":721.5,"y":591.35,"index":32},{"name":"spot_33","x":848.55,"y":591.35,"index":33},{"name":"spot_34","x":975.6,"y":591.35,"index":34},{"name":"spot_35","x":1102.65,"y":591.35,"index":35},{"name":"spot_36","x":1229.7,"y":591.35,"index":36},{"name":"spot_37","x":213.3,"y":716.65,"index":37},{"name":"spot_38","x":340.35,"y":716.65,"index":38},{"name":"spot_39","x":467.4,"y":716.65,"index":39},{"name":"spot_40","x":594.45,"y":716.65,"index":40},{"name":"spot_41","x":721.5,"y":716.65,"index":41},{"name":"spot_42","x":848.55,"y":716.65,"index":42},{"name":"spot_43","x":975.6,"y":716.65,"index":43},{"name":"spot_44","x":1102.65,"y":716.65,"index":44},{"name":"spot_45","x":1229.7,"y":716.65,"index":45},{"name":"spot_46","x":213.05,"y":861.1,"index":46},{"name":"spot_47","x":340.1,"y":861.1,"index":47},{"name":"spot_48","x":467.15,"y":861.1,"index":48},{"name":"spot_49","x":594.2,"y":861.1,"index":49},{"name":"spot_50","x":721.25,"y":861.1,"index":50},{"name":"spot_51","x":848.3,"y":861.1,"index":51},{"name":"spot_52","x":975.35,"y":861.1,"index":52},{"name":"spot_53","x":1102.4,"y":861.1,"index":53},{"name":"spot_54","x":1229.45,"y":861.1,"index":54},{"name":"spot_55","x":212.85,"y":980.55,"index":55},{"name":"spot_56","x":339.9,"y":980.55,"index":56},{"name":"spot_57","x":466.95,"y":980.55,"index":57},{"name":"spot_58","x":594.0,"y":980.55,"index":58},{"name":"spot_59","x":721.05,"y":980.55,"index":59},{"name":"spot_60","x":848.1,"y":980.55,"index":60},{"name":"spot_61","x":975.15,"y":980.55,"index":61},{"name":"spot_62","x":1102.2,"y":980.55,"index":62},{"name":"spot_63","x":1229.25,"y":980.55,"index":63},{"name":"spot_64","x":212.6,"y":1125.0,"index":64},{"name":"spot_65","x":339.65,"y":1125.0,"index":65},{"name":"spot_66","x":466.7,"y":1125.0,"index":66},{"name":"spot_67","x":593.75,"y":1125.0,"index":67},{"name":"spot_68","x":720.8,"y":1125.0,"index":68},{"name":"spot_69","x":847.85,"y":1125.0,"index":69},{"name":"spot_70","x":974.9,"y":1125.0,"index":70},{"name":"spot_71","x":1101.95,"y":1125.0,"index":71},{"name":"spot_72","x":1229.0,"y":1125.0,"index":72}],"candies":[{"name":"candy_1","x":1467.5,"y":623.15,"index":1},{"name":"candy_2","x":1480.95,"y":631.65,"index":2},{"name":"candy_3","x":1467.5,"y":638.9,"index":3},{"name":"candy_4","x":1483.25,"y":654.65,"index":4},{"name":"candy_5","x":1467.5,"y":654.65,"index":5},{"name":"candy_6","x":1480.95,"y":631.65,"index":6}],"specialLevelHooks":["get_Level_Music","get_Level_Num","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Elite 4","mode":"defense","levelSource":"game-source/scripts/code/class_958.as","nextStageClass":null,"introPopup":"class_1082","winPopup":"class_1083","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_959","className":"class_959","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_74","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_959.as","nextStageClass":null,"introPopup":"class_1085","winPopup":null,"branchExits":["class_961","class_1118","class_956"],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_960","className":"class_960","progressionId":12,"background":"gfx_level_12_4","backgroundSymbolId":57,"waveClass":"class_77","totalWaves":1,"bonusLevel":24,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["get_Level_Num","poke_Bonus_Level","get_Level_Music","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Route 24","mode":"defense","levelSource":"game-source/scripts/code/class_960.as","nextStageClass":"class_1117","introPopup":"class_1086","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_1117 before campaign completion."]},{"id":"class_961","className":"class_961","progressionId":17,"background":"gfx_level_17","backgroundSymbolId":220,"waveClass":null,"totalWaves":0,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_right_back","x":386.25,"y":284.35,"index":1,"direction":"right","reverseDirection":"back"},{"name":"wp_2_right_left","x":792.4,"y":284.35,"index":2,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"w2_1_left_back","x":386.25,"y":284.35,"index":1,"direction":"left","reverseDirection":"back"},{"name":"w2_2_left_right","x":7.25,"y":282.35,"index":2,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":47.5,"y":196.0,"index":1},{"name":"spot_2","x":47.5,"y":373.0,"index":2},{"name":"spot_3","x":173.35,"y":196.0,"index":3},{"name":"spot_4","x":758.5,"y":196.0,"index":4},{"name":"spot_5","x":173.35,"y":373.0,"index":5},{"name":"spot_6","x":630.7,"y":373.0,"index":6},{"name":"spot_7","x":758.5,"y":373.0,"index":7},{"name":"spot_8","x":630.7,"y":196.0,"index":8}],"candies":[{"name":"candy_1","x":392.0,"y":497.45,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"branch","levelSource":"game-source/scripts/code/class_961.as","nextStageClass":null,"introPopup":"class_1088","winPopup":"class_1089","branchExits":["class_956","class_959","class_963"],"presetTowers":[],"objective":"Choose a route or encounter from the story; clearing one room does not complete the stage.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_962","className":"class_962","progressionId":12,"background":"gfx_level_12_4","backgroundSymbolId":57,"waveClass":"class_78","totalWaves":1,"bonusLevel":24,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":255.35,"index":1},{"name":"spot_2","x":433.95,"y":369.2,"index":2}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["get_Level_Num","poke_Bonus_Level","get_Level_Music","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Route 24","mode":"defense","levelSource":"game-source/scripts/code/class_962.as","nextStageClass":"class_1119","introPopup":"class_1090","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_1119 before campaign completion."]},{"id":"class_963","className":"class_963","progressionId":17,"background":"gfx_level_17","backgroundSymbolId":220,"waveClass":null,"totalWaves":0,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_right_back","x":386.25,"y":284.35,"index":1,"direction":"right","reverseDirection":"back"},{"name":"wp_2_right_left","x":792.4,"y":284.35,"index":2,"direction":"right","reverseDirection":"left"}],"2":[{"name":"w2_0_front_back","x":383.85,"y":-29.1,"index":0,"direction":"front","reverseDirection":"back"},{"name":"w2_1_left_back","x":386.25,"y":284.35,"index":1,"direction":"left","reverseDirection":"back"},{"name":"w2_2_left_right","x":7.25,"y":282.35,"index":2,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":47.5,"y":196.0,"index":1},{"name":"spot_2","x":47.5,"y":373.0,"index":2},{"name":"spot_3","x":173.35,"y":196.0,"index":3},{"name":"spot_4","x":758.5,"y":196.0,"index":4},{"name":"spot_5","x":173.35,"y":373.0,"index":5},{"name":"spot_6","x":630.7,"y":373.0,"index":6},{"name":"spot_7","x":758.5,"y":373.0,"index":7},{"name":"spot_8","x":630.7,"y":196.0,"index":8}],"candies":[{"name":"candy_1","x":392.0,"y":497.45,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"branch","levelSource":"game-source/scripts/code/class_963.as","nextStageClass":null,"introPopup":"class_1093","winPopup":"class_1094","branchExits":["class_964","class_961","class_1121"],"presetTowers":[],"objective":"Choose a route or encounter from the story; clearing one room does not complete the stage.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_964","className":"class_964","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_74","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_964.as","nextStageClass":null,"introPopup":"class_1095","winPopup":null,"branchExits":["class_963","class_967","class_1118","class_966"],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_965","className":"class_965","progressionId":12,"background":"gfx_level_12_6","backgroundSymbolId":60,"waveClass":"class_84","totalWaves":1,"bonusLevel":24,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_front_back","x":358.3,"y":-15.65,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":356.6,"y":863.1,"index":1,"direction":"front","reverseDirection":"back"}]},"spots":[{"name":"spot_1","x":434.55,"y":254.35,"index":1}],"candies":[{"name":"candy_1","x":361.95,"y":744.5,"index":1}],"specialLevelHooks":["get_Level_Num","poke_Bonus_Level","get_Level_Music","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","i_Win"],"baseClass":"screen_Level","displayName":"Route 24","mode":"defense","levelSource":"game-source/scripts/code/class_965.as","nextStageClass":"class_1120","introPopup":"class_1096","winPopup":"class_1034","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Stage victory transitions to class_1120 before campaign completion."]},{"id":"class_966","className":"class_966","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_90","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_966.as","nextStageClass":null,"introPopup":"class_1099","winPopup":null,"branchExits":["class_964","class_968"],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_967","className":"class_967","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_74","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_967.as","nextStageClass":null,"introPopup":"class_1100","winPopup":null,"branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"class_968","className":"class_968","progressionId":17,"background":"gfx_level_17_2","backgroundSymbolId":223,"waveClass":"class_91","totalWaves":1,"bonusLevel":34,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-18.75,"y":282.35,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_right_left","x":851.2,"y":284.35,"index":1,"direction":"right","reverseDirection":"left"}]},"spots":[{"name":"spot_1","x":311.45,"y":196.0,"index":1},{"name":"spot_2","x":502.7,"y":196.0,"index":2},{"name":"spot_3","x":412.3,"y":196.0,"index":3}],"candies":[{"name":"candy_1","x":733.9,"y":285.95,"index":1}],"specialLevelHooks":["get_Level_Music","get_Level_Num","unlock_Next_Level","poke_Bonus_Level","get_Level_BG","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup"],"baseClass":"screen_Level","displayName":"Rock Tunnel","mode":"defense","levelSource":"game-source/scripts/code/class_968.as","nextStageClass":null,"introPopup":"class_1103","winPopup":"class_1102","branchExits":["class_966","class_1121"],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"multi_level_1_0","className":"multi_level_1_0","progressionId":1,"background":"gfx_level_online_1","backgroundSymbolId":989,"waveClass":"wave_online_1","totalWaves":1,"bonusLevel":4,"candyCount":3,"music":"battleWildMusic","paths":{"4":[{"name":"w4_0_right_left","x":-93.4,"y":606.25,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w4_1_right_left","x":1845.15,"y":605.05,"index":1,"direction":"right","reverseDirection":"left"}],"p":[{"name":"wp_0_front_back","x":916.9,"y":-65.2,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":907.4,"y":1351.6,"index":1,"direction":"front","reverseDirection":"back"}],"3":[{"name":"w3_0_back_front","x":907.4,"y":1350.45,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w3_1_back_front","x":915.5,"y":-60.1,"index":1,"direction":"back","reverseDirection":"front"}],"2":[{"name":"w2_0_left_right","x":1843.1,"y":606.25,"index":0,"direction":"left","reverseDirection":"right"},{"name":"w2_1_left_right","x":-42.3,"y":610.05,"index":1,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":1040.6,"y":185.8,"index":1},{"name":"spot_2","x":791.55,"y":381.7,"index":2},{"name":"spot_3","x":1042.6,"y":380.7,"index":3},{"name":"spot_4","x":794.55,"y":185.8,"index":4},{"name":"spot_5","x":791.55,"y":1087.0,"index":5},{"name":"spot_6","x":791.55,"y":885.5,"index":6},{"name":"spot_7","x":1042.6,"y":1087.0,"index":7},{"name":"spot_8","x":1042.6,"y":885.5,"index":8},{"name":"spot_9","x":262.0,"y":483.8,"index":9},{"name":"spot_10","x":543.45,"y":483.8,"index":10},{"name":"spot_11","x":262.0,"y":730.9,"index":11},{"name":"spot_12","x":543.45,"y":730.9,"index":12},{"name":"spot_13","x":1282.7,"y":483.8,"index":13},{"name":"spot_14","x":1282.7,"y":730.9,"index":14},{"name":"spot_15","x":1563.15,"y":483.8,"index":15},{"name":"spot_16","x":1563.15,"y":730.9,"index":16},{"name":"spot_17","x":1428.7,"y":495.4,"index":17},{"name":"spot_18","x":1435.3,"y":730.9,"index":18},{"name":"spot_19","x":1042.6,"y":284.0,"index":19},{"name":"spot_20","x":791.2,"y":287.0,"index":20},{"name":"spot_21","x":1042.6,"y":988.75,"index":21},{"name":"spot_22","x":791.2,"y":984.7,"index":22},{"name":"spot_23","x":404.45,"y":504.0,"index":23},{"name":"spot_24","x":371.1,"y":730.9,"index":24}],"candies":[{"name":"candy_1","x":904.8,"y":610.8,"index":1},{"name":"candy_2","x":901.8,"y":618.95,"index":2},{"name":"candy_3","x":917.55,"y":618.95,"index":3}],"specialLevelHooks":["check_For_End_Of_Game","get_Level_BG","update_Wave_Info","unlock_Next_Level","return_Poke","hit_Play","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Back_Screen","put_In_Spot","check_Poke","check_Mouse_Down_Pokeball","check_Mouse_Down_Potion","check_Mouse_Down_Speed","mouse_Down","mouse_Up","method_10","create_Drag_Poke"],"baseClass":"screen_Level","displayName":"Oak's Lab","mode":"defense","levelSource":"game-source/scripts/code/multi_level_1_0.as","nextStageClass":null,"introPopup":"popup_online_intro_1_0","winPopup":"popup_online_win_1_0","branchExits":[],"presetTowers":[],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":[]},{"id":"multi_level_1_1","className":"multi_level_1_1","progressionId":1,"background":"gfx_level_online_1","backgroundSymbolId":989,"waveClass":null,"totalWaves":0,"bonusLevel":4,"candyCount":3,"music":"battleWildMusic","paths":{"4":[{"name":"w4_0_right_left","x":-93.4,"y":606.25,"index":0,"direction":"right","reverseDirection":"left"},{"name":"w4_1_right_left","x":1845.15,"y":605.05,"index":1,"direction":"right","reverseDirection":"left"}],"p":[{"name":"wp_0_front_back","x":916.9,"y":-65.2,"index":0,"direction":"front","reverseDirection":"back"},{"name":"wp_1_front_back","x":907.4,"y":1351.6,"index":1,"direction":"front","reverseDirection":"back"}],"3":[{"name":"w3_0_back_front","x":907.4,"y":1350.45,"index":0,"direction":"back","reverseDirection":"front"},{"name":"w3_1_back_front","x":915.5,"y":-60.1,"index":1,"direction":"back","reverseDirection":"front"}],"2":[{"name":"w2_0_left_right","x":1843.1,"y":606.25,"index":0,"direction":"left","reverseDirection":"right"},{"name":"w2_1_left_right","x":-42.3,"y":610.05,"index":1,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":1040.6,"y":185.8,"index":1},{"name":"spot_2","x":791.55,"y":381.7,"index":2},{"name":"spot_3","x":1042.6,"y":380.7,"index":3},{"name":"spot_4","x":794.55,"y":185.8,"index":4},{"name":"spot_5","x":791.55,"y":1087.0,"index":5},{"name":"spot_6","x":791.55,"y":885.5,"index":6},{"name":"spot_7","x":1042.6,"y":1087.0,"index":7},{"name":"spot_8","x":1042.6,"y":885.5,"index":8},{"name":"spot_9","x":262.0,"y":483.8,"index":9},{"name":"spot_10","x":543.45,"y":483.8,"index":10},{"name":"spot_11","x":262.0,"y":730.9,"index":11},{"name":"spot_12","x":543.45,"y":730.9,"index":12},{"name":"spot_13","x":1282.7,"y":483.8,"index":13},{"name":"spot_14","x":1282.7,"y":730.9,"index":14},{"name":"spot_15","x":1563.15,"y":483.8,"index":15},{"name":"spot_16","x":1563.15,"y":730.9,"index":16},{"name":"spot_17","x":1428.7,"y":495.4,"index":17},{"name":"spot_18","x":1435.3,"y":730.9,"index":18},{"name":"spot_19","x":1042.6,"y":284.0,"index":19},{"name":"spot_20","x":791.2,"y":287.0,"index":20},{"name":"spot_21","x":1042.6,"y":988.75,"index":21},{"name":"spot_22","x":791.2,"y":984.7,"index":22},{"name":"spot_23","x":404.45,"y":504.0,"index":23},{"name":"spot_24","x":371.1,"y":730.9,"index":24}],"candies":[{"name":"candy_1","x":904.8,"y":610.8,"index":1},{"name":"candy_2","x":901.8,"y":618.95,"index":2},{"name":"candy_3","x":917.55,"y":618.95,"index":3}],"specialLevelHooks":["number_Of_Paths","get_Total_Candy","get_Level_BG","get_Intro_Popup","get_Win_Popup","check_For_End_Of_Game","check_Mouse_Down_Path","method_287","method_253","set_Party","start_Level","method_366","get_Level_Num","unlock_Next_Level","get_Back_Screen"],"baseClass":"class_949","displayName":"Oak's Lab","mode":"invasion","levelSource":"game-source/scripts/code/multi_level_1_1.as","nextStageClass":null,"introPopup":"popup_online_intro_1_1","winPopup":"popup_online_win_1_1","branchExits":[],"presetTowers":[],"energy":800,"launchCost":20,"objective":"Steal all candies; lose if energy reaches zero with no attackers remaining.","requiresPartySurvival":false,"specialRules":[]},{"id":"multi_level_2","className":"multi_level_2","progressionId":1,"background":"gfx_level_online_2","backgroundSymbolId":1067,"waveClass":"wave_online_2","totalWaves":10,"bonusLevel":4,"candyCount":1,"music":"battleWildMusic","paths":{"p":[{"name":"wp_0_right_left","x":-0.75,"y":457.9,"index":0,"direction":"right","reverseDirection":"left"},{"name":"wp_1_front_left","x":639.25,"y":447.0,"index":1,"direction":"front","reverseDirection":"left"},{"name":"wp_2_left_back","x":654.0,"y":753.45,"index":2,"direction":"left","reverseDirection":"back"},{"name":"wp_3_left_right","x":146.8,"y":763.55,"index":3,"direction":"left","reverseDirection":"right"}]},"spots":[{"name":"spot_1","x":210.8,"y":117.85,"index":1},{"name":"spot_2","x":293.1,"y":197.85,"index":2},{"name":"spot_3","x":153.35,"y":362.65,"index":3},{"name":"spot_4","x":210.8,"y":197.85,"index":4},{"name":"spot_5","x":128.5,"y":197.85,"index":5},{"name":"spot_6","x":307.35,"y":362.65,"index":6},{"name":"spot_7","x":461.35,"y":362.65,"index":7},{"name":"spot_8","x":615.35,"y":362.65,"index":8},{"name":"spot_9","x":615.35,"y":854.15,"index":9},{"name":"spot_10","x":461.35,"y":854.15,"index":10},{"name":"spot_11","x":307.35,"y":854.15,"index":11},{"name":"spot_12","x":153.35,"y":854.15,"index":12},{"name":"spot_13","x":762.35,"y":854.15,"index":13},{"name":"spot_14","x":762.35,"y":695.55,"index":14},{"name":"spot_15","x":762.35,"y":536.95,"index":15}],"candies":[{"name":"candy_1","x":196.15,"y":763.6,"index":1}],"specialLevelHooks":["start_Level","defeated_Poke","check_For_End_Of_Game","return_Poke","hit_Play","get_Intro_Popup","get_Total_Candy","get_Level_Wave","get_Lost_Popup","get_Win_Popup","get_Level_BG","update_Wave_Info","unlock_Next_Level","put_In_Spot","get_Friendly_List","get_Back_Screen","check_Poke","check_Mouse_Down_Pokeball","check_Mouse_Down_Potion","check_Mouse_Down_Speed","mouse_Down","mouse_Up","method_10","create_Drag_Poke"],"baseClass":"screen_Level","displayName":"Oak's Lab","mode":"defense","levelSource":"game-source/scripts/code/multi_level_2.as","nextStageClass":null,"introPopup":"popup_online_intro_2","winPopup":"popup_online_win_2","branchExits":[],"presetTowers":[{"factory":"method_344","args":[],"spot":1}],"objective":"Keep at least one candy until all spawned enemies are gone.","requiresPartySurvival":false,"specialRules":["Contains fixed NPC towers from recovered profile factories."]}];
const LEVEL_FACTORIES={"class_1115":{presetTowers:[{"factory":"method_22","args":[10],"spot":1},{"factory":"method_22","args":[13],"spot":2},{"factory":"method_22","args":[14],"spot":3},{"factory":"method_22","args":[11],"spot":4}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 10)
         {
            _loc2_.num = 10;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 7;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 13)
         {
            _loc2_.num = 13;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 8;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 11)
         {
            _loc2_.num = 11;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move2 = 14;
            _loc2_.move1 = 1;
            _loc2_.numMoves = 2;
         }
         else if(param1 == 14)
         {
            _loc2_.num = 14;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move2 = 14;
            _loc2_.move1 = 13;
            _loc2_.numMoves = 2;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1116":{presetTowers:[{"factory":"method_22","args":[69],"spot":1},{"factory":"method_22","args":[43],"spot":2},{"factory":"method_22","args":[16],"spot":3}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 69)
         {
            _loc2_.num = 69;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 26;
            _loc2_.move1 = 16;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 43)
         {
            _loc2_.num = 43;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 26;
            _loc2_.move1 = 26;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 16)
         {
            _loc2_.num = 16;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 26;
            _loc2_.move1 = 36;
            _loc2_.numMoves = 1;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1117":{presetTowers:[{"factory":"method_22","args":[23],"spot":1},{"factory":"method_22","args":[27],"spot":2}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 23)
         {
            _loc2_.num = 23;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 27;
            _loc2_.move1 = 71;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 27)
         {
            _loc2_.num = 27;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 27;
            _loc2_.move1 = 69;
            _loc2_.numMoves = 1;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1118":{presetTowers:[{"factory":"method_22","args":[12],"spot":1},{"factory":"method_22","args":[18],"spot":2},{"factory":"method_22","args":[67],"spot":3}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 12)
         {
            _loc2_.num = 12;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 7;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 18)
         {
            _loc2_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 36;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 67)
         {
            _loc2_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 52;
            _loc2_.move2 = 1;
            _loc2_.numMoves = 2;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1119":{presetTowers:[{"factory":"method_22","args":[32],"spot":1},{"factory":"method_22","args":[29],"spot":2}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 32)
         {
            _loc2_.num = 32;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 28;
            _loc2_.move1 = 42;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 29)
         {
            _loc2_.num = 29;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 28;
            _loc2_.move1 = 45;
            _loc2_.numMoves = 1;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1120":{presetTowers:[{"factory":"method_22","args":[56],"spot":1}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 56)
         {
            _loc2_.num = 56;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 29;
            _loc2_.move1 = 52;
            _loc2_.numMoves = 1;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_1121":{presetTowers:[{"factory":"method_22","args":[76],"spot":1},{"factory":"method_22","args":[95],"spot":2},{"factory":"method_22","args":[66],"spot":3}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 76)
         {
            _loc2_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 67;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 95)
         {
            _loc2_.num = 95;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 25;
            _loc2_.move1 = 66;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 66)
         {
            _loc2_.num = 66;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 52;
            _loc2_.move2 = 1;
            _loc2_.numMoves = 2;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"class_910":{presetTowers:[],profileFactories:{}},"class_928":{presetTowers:[],profileFactories:{}},"class_949":{presetTowers:[{"factory":"method_334","args":[],"spot":5},{"factory":"method_243","args":[],"spot":1}],profileFactories:{"method_334":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 25;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 12;
         _loc1_.move1 = 22;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_426":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 10;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 4;
         _loc1_.move1 = 7;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_243":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 74;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 9;
         _loc1_.move1 = 205;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"add_Bonuses":{constructors:[],run:function(param1){
return param1;
}}}},"class_950":{presetTowers:[],profileFactories:{}},"class_951":{presetTowers:[],profileFactories:{}},"class_952":{presetTowers:[{"factory":"method_399","args":[],"spot":17},{"factory":"method_267","args":[],"spot":18}],profileFactories:{"method_399":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 17;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 15;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_267":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 5;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 92;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_398":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 251;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 274;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"class_953":{presetTowers:[],profileFactories:{}},"class_954":{presetTowers:[],profileFactories:{}},"class_955":{presetTowers:[],profileFactories:{}},"class_956":{presetTowers:[],profileFactories:{}},"class_957":{presetTowers:[],profileFactories:{}},"class_958":{presetTowers:[],profileFactories:{}},"class_959":{presetTowers:[],profileFactories:{}},"class_960":{presetTowers:[],profileFactories:{}},"class_961":{presetTowers:[],profileFactories:{}},"class_962":{presetTowers:[],profileFactories:{}},"class_963":{presetTowers:[],profileFactories:{}},"class_964":{presetTowers:[],profileFactories:{}},"class_965":{presetTowers:[],profileFactories:{}},"class_966":{presetTowers:[],profileFactories:{}},"class_967":{presetTowers:[],profileFactories:{}},"class_968":{presetTowers:[],profileFactories:{}},"level_1":{presetTowers:[],profileFactories:{}},"level_10":{presetTowers:[],profileFactories:{}},"level_11":{presetTowers:[],profileFactories:{}},"level_12":{presetTowers:[],profileFactories:{}},"level_13":{presetTowers:[],profileFactories:{}},"level_14":{presetTowers:[{"factory":"method_22","args":[61],"spot":2},{"factory":"method_22","args":[5],"spot":1}],profileFactories:{"method_22":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 61)
         {
            _loc2_.num = 61;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 30;
            _loc2_.move1 = 110;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc2_.num = 5;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 30;
            _loc2_.move1 = 30;
            _loc2_.numMoves = 1;
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"level_15":{presetTowers:[],profileFactories:{}},"level_16":{presetTowers:[],profileFactories:{}},"level_17":{presetTowers:[],profileFactories:{}},"level_18":{presetTowers:[],profileFactories:{}},"level_19":{presetTowers:[],profileFactories:{}},"level_2":{presetTowers:[],profileFactories:{}},"level_20":{presetTowers:[{"factory":"method_399","args":[],"spot":17},{"factory":"method_267","args":[],"spot":18},{"factory":"method_398","args":[],"spot":19}],profileFactories:{"method_399":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 17;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 15;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_267":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 5;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 92;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_398":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 251;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 40;
         _loc1_.move1 = 274;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"level_21":{presetTowers:[],profileFactories:{}},"level_22":{presetTowers:[],profileFactories:{}},"level_23":{presetTowers:[{"factory":"method_334","args":[],"spot":4}],profileFactories:{"method_334":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 25;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 62;
         _loc1_.move1 = 23;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"level_24":{presetTowers:[],profileFactories:{}},"level_25":{presetTowers:[],profileFactories:{}},"level_26":{presetTowers:[{"factory":"method_22","args":[19],"spot":2},{"factory":"method_22","args":[5],"spot":3},{"factory":"method_22","args":[101],"spot":4},{"factory":"method_22","args":[26],"spot":5},{"factory":"method_22","args":[135],"spot":6},{"factory":"method_22","args":[106],"spot":7},{"factory":"method_22","args":[68],"spot":8},{"factory":"method_22","args":[107],"spot":9},{"factory":"method_22","args":[57],"spot":17},{"factory":"method_22","args":[64],"spot":11},{"factory":"method_22","args":[80],"spot":12},{"factory":"method_22","args":[150],"spot":10},{"factory":"method_22","args":[65],"spot":13},{"factory":"method_22","args":[97],"spot":14}],profileFactories:{"add_Bonuses":{constructors:[],run:function(param1){
param1.mod_Speed = this.var_667;
         param1.var_655 = this.var_649;
         param1.mod_Defense = this.var_713;
         param1.mod_Special_Defense = this.var_663;
         if(param1.level > 70)
         {
            this.var_153 = false;
         }
         return param1;
}},"method_22":{constructors:["profile_poke","class_92"],run:function(param1){
var _loc2_ = new this.profile_poke();
         if(param1 == 19)
         {
            _loc2_.num = 19;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 60;
            _loc2_.move1 = 34;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc2_.num = 5;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 60;
            _loc2_.move1 = 105;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 26)
         {
            _loc2_.num = 26;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 65;
            _loc2_.move1 = 233;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 101)
         {
            _loc2_.num = 101;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 65;
            _loc2_.move1 = 23;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 135)
         {
            _loc2_.num = 135;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 65;
            _loc2_.move1 = 281;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 107)
         {
            _loc2_.num = 107;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 364;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 106)
         {
            _loc2_.num = 106;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 356;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 57)
         {
            _loc2_.num = 57;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 290;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 68)
         {
            _loc2_.num = 68;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 229;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 80)
         {
            _loc2_.num = 80;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 340;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 64)
         {
            _loc2_.num = 64;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 148;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 65)
         {
            _loc2_.num = 65;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 20;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 97)
         {
            _loc2_.num = 97;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 332;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 150)
         {
            _loc2_.num = 150;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 68;
            _loc2_.move1 = 337;
            _loc2_.move2 = 197;
            _loc2_.move3 = 196;
            _loc2_.move4 = 115;
            _loc2_.numMoves = 4;
            _loc2_.myAI = new this.class_92();
         }
         _loc2_.experience = 0;
         _loc2_.id = -1;
         _loc2_.moveSelected = 1;
         return _loc2_;
}}}},"level_27":{presetTowers:[{"factory":"method_219","args":[],"spot":7},{"factory":"method_297","args":[],"spot":9},{"factory":"method_351","args":[],"spot":11}],profileFactories:{"method_219":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 19;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 65;
         _loc1_.move1 = 19;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_297":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 45;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 65;
         _loc1_.move1 = 108;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_351":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 52;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 65;
         _loc1_.move1 = 46;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"level_28":{presetTowers:[],profileFactories:{}},"level_29":{presetTowers:[],profileFactories:{}},"level_3":{presetTowers:[{"factory":"method_219","args":[],"spot":2},{"factory":"method_400","args":[],"spot":5}],profileFactories:{"method_219":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 19;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 4;
         _loc1_.move1 = 1;
         _loc1_.move2 = 3;
         _loc1_.move3 = 4;
         _loc1_.numMoves = 3;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"method_400":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 16;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 5;
         _loc1_.move1 = 1;
         _loc1_.move2 = 2;
         _loc1_.numMoves = 2;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"level_30":{presetTowers:[{"factory":"method_320","args":[],"spot":1}],profileFactories:{"method_320":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 1001;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 100;
         _loc1_.move1 = 404;
         _loc1_.numMoves = 1;
         _loc1_.experience = 0;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}}}},"level_31":{presetTowers:[],profileFactories:{}},"level_32":{presetTowers:[],profileFactories:{}},"level_33":{presetTowers:[],profileFactories:{}},"level_34":{presetTowers:[],profileFactories:{}},"level_35":{presetTowers:[],profileFactories:{}},"level_36":{presetTowers:[],profileFactories:{}},"level_37":{presetTowers:[],profileFactories:{}},"level_38":{presetTowers:[],profileFactories:{}},"level_39":{presetTowers:[],profileFactories:{}},"level_4":{presetTowers:[],profileFactories:{}},"level_40":{presetTowers:[],profileFactories:{}},"level_41":{presetTowers:[],profileFactories:{}},"level_42":{presetTowers:[],profileFactories:{}},"level_5":{presetTowers:[],profileFactories:{}},"level_6":{presetTowers:[],profileFactories:{}},"level_7":{presetTowers:[],profileFactories:{}},"level_8":{presetTowers:[],profileFactories:{}},"level_9":{presetTowers:[],profileFactories:{}},"multi_level_1_0":{presetTowers:[],profileFactories:{"check_Path_Effects":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         _loc2_.id = param1;
         _loc2_.moveSelected = 1;
         _loc2_.reward = 0;
         if(param1 == 1)
         {
            _loc2_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 317;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 2)
         {
            _loc2_.num = 135;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 249;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 3)
         {
            _loc2_.num = 3;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 16;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 4)
         {
            _loc2_.num = 131;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 93;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc2_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 36;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 6)
         {
            _loc2_.num = 107;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 362;
            _loc2_.numMoves = 1;
         }
         return _loc2_;
}},"method_292":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         _loc2_.id = param1;
         _loc2_.moveSelected = 1;
         _loc2_.reward = 0;
         _loc2_.level = 40;
         _loc2_.numMoves = 1;
         if(param1 == 1)
         {
            _loc2_.num = 9;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 18;
         }
         else if(param1 == 2)
         {
            _loc2_.num = 76;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 25;
         }
         else if(param1 == 3)
         {
            _loc2_.num = 136;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 213;
         }
         else if(param1 == 4)
         {
            _loc2_.num = 26;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 97;
         }
         else if(param1 == 5)
         {
            _loc2_.num = 71;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 26;
            _loc2_.var_107 = true;
         }
         else if(param1 == 6)
         {
            _loc2_.num = 106;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.move1 = 354;
         }
         _loc2_.speed *= 0.5;
         return _loc2_;
}}}},"multi_level_1_1":{presetTowers:[],profileFactories:{"check_Path_Effects":{constructors:["profile_poke"],run:function(param1){
var _loc2_ = new this.profile_poke();
         _loc2_.id = param1;
         _loc2_.moveSelected = 1;
         _loc2_.reward = 0;
         if(param1 == 1)
         {
            _loc2_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 317;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 2)
         {
            _loc2_.num = 135;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 249;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 3)
         {
            _loc2_.num = 3;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 16;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 4)
         {
            _loc2_.num = 131;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 93;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 5)
         {
            _loc2_.num = 18;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 36;
            _loc2_.numMoves = 1;
         }
         else if(param1 == 6)
         {
            _loc2_.num = 107;
            this.finder_Poke_Info.get_Poke_Info(_loc2_);
            _loc2_.level = 40;
            _loc2_.move1 = 362;
            _loc2_.numMoves = 1;
         }
         return _loc2_;
}}}},"multi_level_2":{presetTowers:[{"factory":"method_344","args":[],"spot":1}],profileFactories:{"method_344":{constructors:["profile_poke"],run:function(){
var _loc1_ = new this.profile_poke();
         _loc1_.num = 1001;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 100;
         _loc1_.move1 = 404;
         _loc1_.numMoves = 1;
         _loc1_.canCapture = false;
         _loc1_.id = -1;
         _loc1_.moveSelected = 1;
         return _loc1_;
}},"check_Path_Effects":{constructors:["profile_poke"],run:function(param1, param2 = true){
var _loc3_ = new this.profile_poke();
         _loc3_.id = param1;
         _loc3_.moveSelected = 1;
         _loc3_.reward = 0;
         if(param1 == 1)
         {
            _loc3_.num = 6;
            this.finder_Poke_Info.get_Poke_Info(_loc3_);
            _loc3_.level = 90;
            _loc3_.move1 = 317;
            _loc3_.numMoves = 1;
         }
         else if(param1 == 2)
         {
            _loc3_.num = 135;
            this.finder_Poke_Info.get_Poke_Info(_loc3_);
            _loc3_.level = 90;
            _loc3_.move1 = 249;
            _loc3_.numMoves = 1;
         }
         else if(param1 == 3)
         {
            _loc3_.num = 112;
            this.finder_Poke_Info.get_Poke_Info(_loc3_);
            _loc3_.level = 90;
            _loc3_.move1 = 297;
            _loc3_.numMoves = 1;
         }
         return _loc3_;
}}}}};
