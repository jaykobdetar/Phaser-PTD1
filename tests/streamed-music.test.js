import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {EventEmitter} from 'node:events';
import {StreamedMusic,preloadBattleAudio} from '../src/streamed-music.js';
const settle=()=>new Promise(resolve=>setImmediate(resolve));
class Events extends EventTarget{
 constructor(){super();this.handlers=new Map();}
 addEventListener(type,fn,capture){super.addEventListener(type,fn,capture);if(!this.handlers.has(type))this.handlers.set(type,new Set());this.handlers.get(type).add(fn);}
 removeEventListener(type,fn,capture){super.removeEventListener(type,fn,capture);this.handlers.get(type)?.delete(fn);}
 get count(){return [...this.handlers.values()].reduce((n,s)=>n+s.size,0);}
}
class AudioStub extends Events{
 constructor(url){super();this.src=url;this.currentTime=0;this.paused=true;this.ended=false;this.attempts=0;}
 play(){this.attempts++;if(this.failure)return Promise.reject(this.failure);if(this.pending)return this.pending;this.paused=false;return Promise.resolve();}
 pause(){this.paused=true;}
 removeAttribute(name){if(name==='src')this.src='';}
 load(){this.loads=(this.loads??0)+1;}
}
const fixture=()=>{const target=new Events(),errors=[],music=new StreamedMusic('assets/audio/battle.mp3',{AudioClass:AudioStub,eventTarget:target,onError:()=>errors.push('failed')});return {target,music,audio:music.audio,errors};};
test('Phaser blur/focus suspends wanted music and preserves explicit pauses and resource cleanup',async()=>{
 const source={events:new EventEmitter(),hasFocus:false,sound:{pauseOnBlur:true,gameLostFocus:false}},target=new Events();
 const make=()=>new StreamedMusic('battle',{AudioClass:AudioStub,eventTarget:target,focusSource:source});
 const music=make();music.play();await settle();music.audio.currentTime=17;
 source.events.emit('blur');assert(music.isPaused);assert(music.wanted);source.events.emit('focus');await settle();assert(music.isPlaying);assert.equal(music.audio.currentTime,17);
 for(const action of ['pause','stop']){source.events.emit('blur');music[action]();source.events.emit('focus');await settle();assert(music.isPaused);music.play();}
 source.sound.gameLostFocus=true;const next=make();next.play();await settle();assert.equal(next.audio.attempts,0);source.events.emit('focus');await settle();assert(next.isPlaying);
 music.destroy();next.destroy();assert.equal(source.events.listenerCount('blur'),0);assert.equal(source.events.listenerCount('focus'),0);assert.equal(target.count,0);
 source.sound.pauseOnBlur=false;const uninterrupted=make();uninterrupted.play();source.events.emit('blur');await settle();assert(uninterrupted.isPlaying);uninterrupted.destroy();
});
test('a play rejection after blur does not attach gesture handlers until focus returns',async()=>{
 const source={events:new EventEmitter(),hasFocus:true},target=new Events(),music=new StreamedMusic('battle',{AudioClass:AudioStub,eventTarget:target,focusSource:source});
 let reject;music.audio.pending=new Promise((_,r)=>reject=r);music.play();source.events.emit('blur');reject({name:'NotAllowedError'});await settle();assert.equal(target.count,0);
 music.audio.pending=null;source.events.emit('focus');await settle();assert(music.isPlaying);music.destroy();
});
test('streamed battle music keeps source volume, looping and pause/resume position',async()=>{
 const {music,audio}=fixture();assert.equal(audio.loop,true);assert.equal(audio.volume,.23);music.play();await settle();assert(music.isPlaying);audio.currentTime=17;music.pause();assert(music.isPaused);music.resume();await settle();assert.equal(audio.currentTime,17);assert(music.isPlaying);music.stop();assert.equal(audio.currentTime,0);assert(music.isPaused);music.destroy();
});
test('autoplay refusal retries on a gesture and removes both retry listeners',async()=>{
 const {music,audio,target}=fixture();audio.failure={name:'NotAllowedError'};music.play();await settle();assert.equal(target.count,2);audio.failure=null;target.dispatchEvent(new Event('pointerdown'));await settle();assert.equal(audio.attempts,2);assert(music.isPlaying);assert.equal(target.count,0);music.destroy();
});
test('a paused or destroyed track cannot re-arm a late rejected play request',async()=>{
 for(const end of ['pause','stop','destroy']){const {music,audio,target}=fixture();let reject;audio.pending=new Promise((_,r)=>reject=r);music.play();music[end]();reject({name:'NotAllowedError'});await settle();assert.equal(target.count,0);target.dispatchEvent(new Event('keydown'));assert.equal(audio.attempts,1);music.destroy();}
});
test('rapid track replacement releases media resources and leaves no gesture handlers',async()=>{
 const target=new Events();let previous;
 for(let i=0;i<100;i++){previous?.destroy();const m=new StreamedMusic('track-'+i,{AudioClass:AudioStub,eventTarget:target});m.audio.failure={name:'NotAllowedError'};m.play();await settle();assert.equal(target.count,2);if(previous){assert.equal(previous.audio.src,'');assert.equal(previous.audio.handlers.get('error').size,0);assert.equal(previous.audio.loads,1);}previous=m;}
 previous.destroy();assert.equal(target.count,0);assert.equal(previous.resume(),false);assert.equal(previous.play(),false);
});
test('media errors report once and aborts never arm an autoplay retry',async()=>{
 const {music,audio,target,errors}=fixture();audio.failure={name:'AbortError'};music.play();await settle();assert.equal(target.count,0);audio.dispatchEvent(new Event('error'));audio.dispatchEvent(new Event('error'));assert.deepEqual(errors,['failed']);music.destroy();audio.dispatchEvent(new Event('error'));assert.equal(errors.length,1);
});
test('every existing combat effect stays eagerly decoded and long music/unused cries do not',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../public/assets/audio-manifest.json',import.meta.url)));
 const keys=Object.keys(manifest).filter(k=>preloadBattleAudio(k,manifest[k]));
 assert.deepEqual(keys.sort(),['faintSound','increase_Stat_Sound','ineffectiveHitSound','levelUpSound','lower_Stat_Sound','regularHitSound','superEffectiveSound'].sort());
 for(const key of ['openingSong','hankBattleMusic','route2Music'])assert(!preloadBattleAudio(key,manifest[key]));
 for(const key of Object.keys(manifest).filter(k=>k.startsWith('cry_')))assert(!preloadBattleAudio(key,manifest[key]));
});
