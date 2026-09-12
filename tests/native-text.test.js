import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createMoveRuntime,SOURCE_MANIFEST} from '../src/move-native.js';
import {NativeBattleView} from '../src/native-battle-view.js';
import {Battle} from '../src/battle.js';
import {makePokemon,newSave} from '../src/model.js';
import {createCanvasTools} from '../public/assets/story/canvas-tools.js';
import {SOURCE_TEXT} from '../public/assets/story/text-data.js';
const json=path=>JSON.parse(readFileSync(new URL(path,import.meta.url)));
const data=json('../public/data/game-data.json'),timelines=json('../public/data/story-timelines.json');
function fixture({shiny=0,level=5,experience=0}={}){
 const profile=makePokemon(data,1,level,{shiny,experience});
 const fighter={profile,speciesId:1,level,shiny,team:'tower',x:100,y:100,uid:profile.uid,hp:90,maxHp:100,moves:[1],selectedMove:1,cooldown:0,alive:true,placed:true,modifiers:{},effects:{},direction:'front'};
 const emitted=[],save={pokemon:[profile],party:[profile.uid],settings:{}},battle={data,save,towers:[fighter],enemies:[],level:{spots:[],paths:{}},emit:(type,value)=>emitted.push({type,...value})};
 const runtime=createMoveRuntime(battle,{timelines}),actor=runtime.actor(fighter);
 const texts=()=>actor.effect_List.filter(effect=>effect.gfx?.symbolName==='do_damageText');
 return{fighter,profile,save,battle,runtime,actor,texts,emitted};
}

test('damage, healing, and misses create the original text clip and exact source colors/strings',()=>{
 const x=fixture();
 for(const [multiplier,color]of [[1,0],[2,16724736],[.5,6710886]]){
  x.actor.take_Damage(7,null,multiplier,false);
  const effect=x.texts().at(-1);assert.equal(effect.sourceClass,'class_197');assert.equal(effect.gfx.actual.actual.text,7);assert.equal(effect.gfx.actual.actual.textColor,color);assert.equal(effect.gfx.actual.actual.textFormat,undefined);
 }
 x.actor.take_Healing(50);assert.equal(x.fighter.hp,100);assert.equal(x.texts().at(-1).gfx.actual.actual.text,'+50','source shows requested healing, even when health is capped');assert.equal(x.texts().at(-1).gfx.actual.actual.textColor,65484);
 x.actor.method_90();const miss=x.texts().at(-1).gfx.actual.actual;assert.equal(miss.text,'MISS');assert.equal(miss.textColor,16750848);assert.equal(miss.textFormat.size,30);
 assert.equal(x.emitted.filter(e=>e.type==='damage').length,3);assert.ok(x.emitted.filter(e=>['damage','heal'].includes(e.type)).every(e=>e.native));
 x.actor.take_Damage(1000,null,1,false);assert.equal(x.fighter.alive,false);assert.equal(x.texts().length,0,'source faint branch returns before creating damage text and removes active effects');
});

test('source text advances once per combat frame, is removed at end, and respects live settings',()=>{
 const x=fixture();x.actor.take_Damage(3,null,1,false);const effect=x.texts()[0],clip=effect.gfx;
 assert.equal(clip.currentFrame,1);assert.equal(clip.playing,false);assert.equal(clip.parent,x.actor);
 x.save.settings.damageText=false;x.actor.method_90();x.actor.take_Healing(1);assert.equal(x.texts().length,1,'turning off does not delete the existing animation or create new text');
 for(let frame=2;frame<=9;frame++){x.runtime.tickBeforeMovement(x.fighter);x.runtime.tickWorld();assert.equal(clip.currentFrame,frame);assert.equal(clip.parent,x.actor);}
 x.runtime.tickBeforeMovement(x.fighter);assert.equal(clip.parent,null);assert.equal(effect.gfx,null);assert.equal(x.texts().length,0);
 x.save.settings.damageText=true;x.actor.method_90();assert.equal(x.texts().length,1);x.runtime.dispose();assert.equal(x.texts().length,0);
});

test('native XP receiver preserves shiny truncation, overflow, and the pre-award threshold',()=>{
 assert.ok(SOURCE_MANIFEST.actorMethods.includes('receive_Experience'));
 const x=fixture({shiny:1,experience:124});assert.equal(x.runtime.receiveExperience(x.fighter,5),7);assert.equal(x.profile.experience,131);const field=x.texts()[0].gfx.actual.actual;assert.equal(field.text,'+7xp');assert.equal(field.textColor,39423);assert.equal(field.textFormat.size,30);
 assert.equal(x.runtime.receiveExperience(x.fighter,500),0);assert.equal(x.texts().length,1);
 const y=fixture({level:100});assert.equal(y.runtime.receiveExperience(y.fighter,5),5,'source receiver has an XP threshold, not a separate level-100 gate');
 y.save.settings.damageText=false;assert.equal(y.runtime.receiveExperience(y.fighter,5),5);assert.equal(y.texts().length,1);
});

test('battle defeat uses the original receiver in contributor order with independent level bonuses',()=>{
 const level={id:1,mode:'defense',spots:[],paths:{p:[{x:0,y:0}]},candies:[{x:0,y:0}],candyCount:1,bonusLevel:4};
 const save=newSave(data,1);save.pokemon=[makePokemon(data,1,4),makePokemon(data,4,4,{shiny:1}),makePokemon(data,7,5)];save.party=save.pokemon.map(p=>p.uid);
 const battle=new Battle(data,level,save,()=>{},{timelines});battle.towers=save.pokemon.map(profile=>battle.fighter(profile,{uid:profile.uid,team:'tower',placed:true}));
 const enemy=battle.fighter({speciesId:19,level:3},{uid:'xp-enemy',team:'enemy',original:{base_Experience:105,reward:0},candy:null});enemy.attackers=new Set(save.party);battle.enemies.push(enemy);
 battle.defeat(enemy);assert.deepEqual(save.pokemon.map(p=>p.experience),[30,45,15]);assert.deepEqual(battle.towers.map(t=>battle.moveRuntime.actor(t).effect_List.find(e=>e.gfx?.symbolName==='do_damageText').gfx.actual.actual.text),['+30xp','+45xp','+15xp']);
});

test('recalled contributors receive XP offstage and keep source identity after redeployment',()=>{
 const x=fixture(),enemy={...x.fighter,uid:'enemy',team:'enemy',profile:{},speciesId:19};x.battle.enemies.push(enemy);const target=x.runtime.actor(enemy);target.new_Hit_Me(x.actor);
 x.fighter.placed=false;x.runtime.detach(x.fighter,{abandon:true});assert.equal(x.actor.parent,null);assert.equal(x.runtime.receiveExperience(x.fighter,5),5);assert.equal(x.actor.parent,null,'XP must not put a recalled tower back on the map');assert.equal(x.actor.effect_List[0].gfx.actual.actual.text,'+5xp');
 const replacement={...x.fighter,placed:true,modifiers:{},effects:{}};const newActor=x.runtime.actor(replacement);target.new_Hit_Me(newActor);assert.deepEqual(x.runtime.experienceContributors(enemy),[x.fighter,replacement],'two source combat instances retain their original contribution order');assert.equal(x.runtime.world.children.filter(c=>c.fighter?.uid===x.fighter.uid).length,1);
});

test('native rendering forwards text formats and draws all original XP/MISS glyphs in the source font',()=>{
 const x=fixture();x.actor.method_90();const nativeClip=x.texts()[0].gfx,view={app:{battle:{moveRuntime:x.runtime}},adapter:NativeBattleView.prototype.adapter};const clip=view.adapter(nativeClip,true);
 const field=clip.childrenByDepth.get(1).childrenByDepth.get(1);assert.equal(field.text,'MISS');assert.equal(field.textColor,16750848);assert.deepEqual(field.textFormat,{size:30});
 assert.equal(SOURCE_TEXT.fields[1399].renderFontId,982);assert.ok([...'+1234567890xpMISS'].every(ch=>ch in SOURCE_TEXT.fonts[982].advances));
 const drawn=[],transforms=[],ctx={save(){},restore(){},transform(...m){transforms.push(m);},beginPath(){},rect(){},clip(){}};
 const registry={font982(_ctx,ch,color){drawn.push({ch,color});}},tools=createCanvasTools({},registry,{},{});
 const parent=clip.childrenByDepth.get(1);tools.setRoot(parent);tools.enterSprite(parent.symbolId,0);tools.place('text1399',{},ctx,[.05,0,0,.05,0,0],new tools.cxform(0,0,0,0,255,255,255,255),1,0,0,0);tools.leaveSprite();
 assert.deepEqual(new tools.cxform(0,0,0,0,255,255,255,255).merge(new tools.sourceCxform(0,0,0,0,256,256,256,256)).apply([0,255,204,1]),[0,255,204,1],'source 256 identity must not brighten dynamic text by 256/255');
 assert.equal(drawn.map(v=>v.ch).join(''),'MISS');assert.equal(drawn[0].color,'rgba(255,153,0,1)');assert.equal(transforms[1][0],600/(1024*20),'30px source TextFormat overrides the authored 40px field');
});

test('repeated deployment contributes one XP share per owned Pokemon',()=>{
 const level={id:1,mode:'defense',spots:[],paths:{p:[{x:0,y:0}]},candies:[{x:0,y:0}],candyCount:1,bonusLevel:4};
 const save=newSave(data,1);save.pokemon[0].level=4;
 const battle=new Battle(data,level,save,()=>{},{timelines});
 const enemy=battle.fighter({speciesId:19,level:3},{uid:'xp-enemy',team:'enemy',original:{base_Experience:105,reward:0},candy:null});battle.enemies.push(enemy);
 const target=battle.moveRuntime.actor(enemy),profile=save.pokemon[0];
 for(let i=0;i<40;i++){
   const fighter=battle.fighter(profile,{uid:profile.uid,team:'tower',placed:true});battle.towers.push(fighter);
   target.new_Hit_Me(battle.moveRuntime.actor(fighter));
 }
 battle.defeat(enemy);
 assert.equal(profile.experience,90,'one 45XP share with one level bonus, regardless of redeployments');
 battle.dispose();
});
