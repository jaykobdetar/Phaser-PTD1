import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {newSave,makePokemon,validateSave} from '../src/model.js';
import {normalizePartySlots,addPartyMember,removePartyMember} from '../src/party-slots.js';
import {releasePokemon} from '../src/profile-features.js';
import {LocalProfiles} from '../src/local-services.js';
import {Battle} from '../src/battle.js';
import {ReverseBattle} from '../src/reverse-battle.js';
import {getStage} from '../src/waves-runtime.js';
const data=JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url)));
data.timelines=JSON.parse(fs.readFileSync(new URL('../public/data/story-timelines.json',import.meta.url)));
const storage=()=>{const values=new Map();return{getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};};
test('release, capture insertion and validation retain the six original slot identities',()=>{
 const s=newSave(data,1),a=s.pokemon[0],b=makePokemon(data,4),c=makePokemon(data,7);s.pokemon.push(b,c);s.party=[null,a.uid,null,b.uid,null,c.uid];
 assert(releasePokemon(s,a.uid).ok);assert.deepEqual(s.party,[null,null,null,b.uid,null,c.uid]);
 const d=makePokemon(data,25);s.pokemon.push(d);assert.equal(addPartyMember(s,d.uid),0);assert.equal(addPartyMember(s,d.uid),0);
 assert.equal(removePartyMember(s,b.uid),3);assert.deepEqual(validateSave(s,data).party,[d.uid,null,null,null,null,c.uid]);
 assert.throws(()=>validateSave({...s,party:[d.uid,d.uid]},data));assert.throws(()=>validateSave({...s,party:[false]},data));
});
test('last release produces a valid empty profile and local bank roundtrip preserves gaps',async()=>{
 const backing=storage(),bank=new LocalProfiles(data,backing,null);await bank.initialize();
 const a=newSave(data,64),b=newSave(data,93),auid=a.party[0],buid=b.party[0];a.party=[null,null,auid,null,null,null];b.party=[null,null,null,null,buid,null];
 bank.create(0,a);bank.create(1,b);bank.select(0);assert(bank.trade(1,auid,buid).ok);
 assert.deepEqual(bank.current.party,[null,null,buid,null,null,null]);assert.deepEqual(bank.bank.slots[1].party,[null,null,null,null,auid,null]);
 assert(releasePokemon(bank.current,buid).ok);bank.save(bank.current);assert.equal(bank.current.pokemon.length,0);
 const restored=new LocalProfiles(data,backing,null);await restored.initialize();assert.deepEqual(restored.current.party,Array(6).fill(null));assert.deepEqual(restored.current.pokemon,[]);assert.equal(restored.bank.slots[1].party[4],auid);
});
test('defense and invasion membership skip nulls without moving HUD slots',()=>{
 const s=newSave(data,1),uid=s.party[0];s.party=[null,null,null,null,uid,null];
 const b=new Battle(data,getStage(1),s);assert.deepEqual(b.party.map(p=>p?.uid??null),s.party);assert.equal(b.partyMembers[0],s.pokemon[0]);assert(b.place(uid,1));assert(b.start());for(let i=0;i<150;i++)b.tick();assert.equal(b.state,'running');b.removePartyMember(b.towers[0]);assert.deepEqual(s.party,Array(6).fill(null));b.dispose();
 s.party=normalizePartySlots([null,uid]);const reverse=new ReverseBattle(data,getStage(26),s);assert(reverse.start());assert(reverse.available(uid));assert(reverse.launch(uid));for(let i=0;i<60;i++)reverse.tick();assert.notEqual(reverse.state,'error');assert.equal(reverse.party[0],null);assert.equal(reverse.party[1].uid,uid);reverse.dispose();
});
test('native Selfdestruct vacates its exact slot and keeps adjacent party identities',()=>{
 const s=newSave(data,1),other=s.pokemon[0],p=makePokemon(data,74,30,{moves:[144],selectedMove:144});s.pokemon.push(p);s.party=[null,other.uid,null,p.uid,null,null];
 const b=new Battle(data,getStage(1),s);b.place(p.uid,1);const f=b.towers[0],target=b.fighter(makePokemon(data,19,30),{uid:'target',team:'enemy',canCapture:true,x:f.x+5,y:f.y,original:{var_107:false}});b.enemies.push(target);f.cooldown=0;b.moveRuntime.attack(f,[target]);for(let i=0;i<150;i++){b.moveRuntime.tickFighter(f);b.moveRuntime.tickFighter(target);b.moveRuntime.tickWorld();}
 assert.deepEqual(s.party,[null,other.uid,null,null,null,null]);assert.equal(s.pokemon.length,2);assert.equal(f.placed,false);b.dispose();
});
