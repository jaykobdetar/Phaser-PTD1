import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Battle} from '../src/battle.js';
import {ChallengeBattle} from '../src/challenge-battle.js';
import {newSave,makePokemon} from '../src/model.js';
import {SOURCE_PROFILE_DEFAULTS} from '../src/move-source-generated.js';
const read=name=>JSON.parse(readFileSync(new URL('../public/data/'+name,import.meta.url)));
const data=read('game-data.json');data.timelines=read('story-timelines.json');const levels=read('levels.json');

function fixture(challenge=false,move=144){
 const campaign=newSave(data,74),campaignParty=[...campaign.party],errors=[];
 const level=challenge?levels.variants.find(l=>l.challengeId===3):levels.levels.find(l=>l.id===1);
 const battle=new (challenge?ChallengeBattle:Battle)(data,level,campaign,(type,event)=>{if(type==='error')errors.push(event.error);},{seed:1,rng:()=>.5});
 let profile,capturedEnemy,capturedActor;
 if(challenge){
  assert(battle.start());for(let i=0;i<500&&!battle.enemies.length;i++)battle.tick();
  const first=battle.enemies.find(e=>battle.canCapture(e));assert(first,'the original Mt. Moon challenge opens with a catchable Geodude');
  capturedEnemy=first;capturedActor=battle.moveRuntime.actor(first);const capture=battle.capture(first.uid);assert(capture.ok);profile=capture.profile;assert.equal(profile.speciesId,74);
 }else profile=campaign.pokemon[0];
 profile.moves=[move];profile.selectedMove=move;
 const reserve=makePokemon(data,25,5,{temporary:challenge});battle.save.pokemon.push(reserve);battle.save.party=[null,profile.uid,null,null,reserve.uid,null];
 const spot=level.spots[0];assert(battle.place(profile.uid,spot.index));if(battle.state==='ready')assert(battle.start());
 const fighter=battle.towers.find(t=>t.uid===profile.uid),actor=battle.moveRuntime.actor(fighter);fighter.cooldown=0;
 // A stationary, durable target isolates the removal lifecycle while the real
 // source wave scheduler and full Battle.tick phases continue running.
 battle.spawn({...SOURCE_PROFILE_DEFAULTS,num:19,level:100,base_HP:1000,base_Attack:1,base_Defense:1000,base_Special_Attack:1,base_Special_Defense:1000,speed:0,move1:14,moveSelected:1,numMoves:1,currentLife:-1,canCapture:false,var_490:true,var_107:false,runAway:false});
 const target=battle.enemies.at(-1);target.x=fighter.x+35;target.y=fighter.y;target.cooldown=99999;
 const source=battle.moveRuntime.actor(target);source.myProfile.speed=0;
 return{battle,campaign,campaignParty,profile,reserve,fighter,actor,target,errors,spot,capturedEnemy,capturedActor};
}
function tick(x,count=1){for(let i=0;i<count;i++){x.battle.tick();assert.equal(x.battle.state,'running',String(x.errors));assert.deepEqual(x.errors,[]);}}
const attached=(battle,uid)=>battle.moveRuntime.world.children.filter(node=>node.fighter?.uid===uid);

for(const challenge of [false,true])for(const move of [144,238])test(`${challenge?'Mt. Moon challenge3':'campaign'} move${move} removes its actor only after the original animation`,()=>{
 const x=fixture(challenge,move),{battle,profile,reserve,fighter,actor}=x,storageCount=battle.save.pokemon.length;
 let effect;for(let i=0;i<60&&!effect;i++){tick(x);effect=actor.effect_List.find(e=>e.sourceClass==='class_735');}
 assert(effect,'the actual attack starts the original Selfdestruct effect');const graphic=effect.gfx,endFrame=graphic.timeline.labels.end;
 while(graphic.currentFrame<endFrame){assert.equal(battle.save.party[1],profile.uid);assert.equal(actor.parent,battle.moveRuntime.world);tick(x);}
 assert.equal(graphic.currentLabel,'end');assert.equal(battle.save.party[1],profile.uid,'the end frame is consumed by class735 on the following effect tick');
 tick(x);
 assert.equal(effect.gfx,null);assert.deepEqual(battle.save.party,[null,null,null,null,reserve.uid,null]);assert.equal(battle.save.pokemon.length,storageCount);assert.ok(battle.save.pokemon.includes(profile),'self-destruction removes the party entry, not the stored Pokémon');
 assert.equal(fighter.placed,false);assert.equal(fighter.spotIndex,null);assert.equal(fighter.alive,true,'source class735 returns the Pokémon rather than forcing its HP to zero');assert.equal(actor.parent,null);
 assert.equal(attached(battle,profile.uid).length,0,'no sprite-bearing actor may remain after the same Battle.tick');assert.equal(battle.moveRuntime.actor(fighter),actor,'trailing source calls must retain the detached actor identity');assert.equal(attached(battle,profile.uid).length,0);
 tick(x,20);assert.equal(attached(battle,profile.uid).length,0);assert.deepEqual(battle.save.party,[null,null,null,null,reserve.uid,null]);
 if(challenge){assert.deepEqual(x.campaign.party,x.campaignParty,'temporary challenge removal must not edit the campaign party');assert.notEqual(actor,x.capturedActor);assert.equal(x.capturedActor.parent,null);assert.equal(battle.moveRuntime.actor(x.capturedEnemy),x.capturedActor,'captured enemy and subsequently deployed party member keep distinct actor identities');assert.equal(attached(battle,x.capturedEnemy.uid).length,0);}battle.dispose();
});

test('fainting during the effect phase cannot reattach an actor during attack or collision phases',()=>{
 const x=fixture(false,1),{battle,fighter,actor}=x;fighter.hp=1;fighter.cooldown=9999;
 const poison=new battle.moveRuntime.classes.class_200(actor,5);poison.var_120=35;actor.add_Effect(poison);const before=[...battle.save.party];
 tick(x);assert.equal(fighter.alive,false);assert.equal(fighter.placed,false);assert.equal(fighter.hp,0);assert.equal(actor.parent,null);assert.deepEqual(battle.save.party,before);
 assert.equal(attached(battle,fighter.uid).length,0);assert.equal(battle.moveRuntime.actor(fighter),actor);assert.equal(battle.moveRuntime.ready(fighter),false);battle.moveRuntime.collide(fighter);assert.equal(attached(battle,fighter.uid).length,0);
 tick(x,3);assert.equal(attached(battle,fighter.uid).length,0);battle.dispose();
});

test('ordinary recall abandons delayed effects while legitimate redeployment creates one fresh actor',()=>{
 const x=fixture(false,1),{battle,fighter,actor,profile}=x;fighter.cooldown=9999;
 const effect=new battle.moveRuntime.classes.class_734(actor,new battle.moveRuntime.display.MovieClip('gfx_hit'),5);actor.add_Effect(effect);const graphic=effect.gfx,frame=graphic.currentFrame,hp=fighter.hp;
 assert(battle.recall(profile.uid));assert.equal(actor.parent,null);assert.equal(battle.moveRuntime.actor(fighter),actor);tick(x,8);assert.equal(graphic.currentFrame,frame);assert.equal(fighter.hp,hp);assert.ok(actor.effect_List.includes(effect),'source return_Poke does not invoke abandoned delayed-effect completion');
 const spot=battle.level.spots.find(s=>s.index!==x.spot.index);assert(battle.place(profile.uid,spot.index));const replacement=battle.towers.find(t=>t.uid===profile.uid),next=battle.moveRuntime.actor(replacement);
 assert.notEqual(replacement,fighter);assert.notEqual(next,actor);assert.equal(replacement.hp,hp);assert.equal(next.parent,battle.moveRuntime.world);assert.equal(attached(battle,profile.uid).length,1);assert.equal(actor.parent,null);assert.equal(battle.moveRuntime.actor(fighter),actor);
 tick(x,3);assert.equal(attached(battle,profile.uid).length,1);assert.equal(actor.parent,null);assert.equal(graphic.currentFrame,frame);battle.dispose();
});
