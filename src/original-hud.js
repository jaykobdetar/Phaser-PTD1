import {StoryClip} from './story-data-clip.js';
import {createOriginalRenderer} from './original-story-ui.js';
import {originalControlBounds} from './original-profile-ui.js';
import {xpRequired,levelCost} from './model.js';
const frame=(clip,value)=>clip?.gotoAndStop(value);
const types=['','grass','poison','water','fire','','flying','bug','ghost','steel','rock','electric','ice','fighting','ground','dragon','dark','psychic'];
export const potionWhich=save=>save.unlocked-1<21?1:save.unlocked-1<36?2:3;
// The six gfx_ui_Level placements start at alpha72/256 in the SWF. The
// screen_Level reset_Poke/method_132 assignments replace that authored alpha.
export function setOriginalPartyBlockState(block,profile,fighter,{reverse=false}={}){
 frame(block,profile?1:4);block.authoredAlpha=72/256;block.alpha=profile?1:.5;
 if(profile)frame(block.bg,fighter&&!fighter.alive?3:fighter?.placed||reverse&&fighter?2:1);
}


/** gfx_ui_Level and poke_Block: the source HUD, with invisible accessible hits. */
export function installOriginalHUD(app){
 const host=document.querySelector('#flash-hud'),canvas=document.createElement('canvas');canvas.width=800;canvas.height=480;host.append(canvas);
 const clock={frame:0},clip=new StoryClip(app.data.timelines,'gfx_ui_Level',{clock});clip.stop();
 const buttons=new Map();let renderer=null,last=performance.now(),carry=0;
 function hit(name,target,label,action,{uid,disabled=false,visible=true}={}){
  let button=buttons.get(name);if(!button){button=document.createElement('button');button.type='button';button.className='source-hud-hit';button.dataset.hudControl=name;host.append(button);buttons.set(name,button);}
  const b=originalControlBounds(target);button.hidden=!visible||!b;if(!b)return;
  Object.assign(button.style,{left:b.x/8+'%',top:b.y/4.8+'%',width:b.width/8+'%',height:b.height/4.8+'%'});
  button.setAttribute('aria-label',label);button.disabled=disabled;if(uid)button.dataset.party=uid;else delete button.dataset.party;
  button.onpointerdown=event=>{if(event.button!==0)return;event.preventDefault();action(event);};
  // Keyboard activation mirrors a pointer press at the center of the source hit.
  button.onclick=event=>{if(event.detail===0){const r=button.getBoundingClientRect();action({button:0,clientX:r.x+r.width/2,clientY:r.y+r.height/2,pointerType:'mouse',preventDefault(){}});}};
 }
 function render(){
  const b=app.battle;if(!b)return;
  const running=b.state==='running'&&!app.isModalOpen;
  clip.totalMoney.text=String(b.isChallenge?b.save.money:app.save.money);
  clip.waveInfo.text=b.level.mode==='invasion'&&!b.canPlace?`Energy: ${b.energy}`:`Wave ${Math.min(b.currentWave,b.totalWaves)} of ${b.totalWaves}`;
  clip.paused.visible=b.state==='paused';
  frame(clip.speed_hl,app.save.settings.speed);frame(clip.zoom_hl,[1,.75,.5,.25].indexOf(app.scene?.cameras.main.zoom??1)+1||1);
  const reverse=b.level.mode==='invasion'&&!b.canPlace,multi=b.isMultiplayer;
  clip.pokeball.visible=!reverse&&!multi;clip.potion.visible=!reverse&&!multi;clip.ui_speed.visible=!multi;clip.speed_hl.visible=!multi;
  frame(clip.potion,potionWhich(b.save));clip.potion.howMuch.text='x'+b.potions;
  for(let i=1;i<=6;i++){
   const block=clip['block_'+i],p=app.activeParty[i-1];
   const t=p?(reverse?b.enemies.find(t=>t.partyUid===p.uid&&t.alive):b.towers.find(t=>t.uid===p.uid)):null;
   setOriginalPartyBlockState(block,p,t,{reverse});
   if(p){
    let form=(p.shiny===2?'ss':p.shiny===1?'s':'')+p.speciesId;
    const type=types[app.data.moves[p.selectedMove]?.typeId];if(p.speciesId===493&&type)form=p.shiny?form+type:type;
    frame(block.poke,form);if(p.shiny===2){const front=block.poke.getChildAt(0);if(front?.meta.labels.front)frame(front,'front');if(front?.actual?.meta.labels.front)frame(front.actual,'front');}
    block.lvl.text='Lvl '+p.level;block.expBar.actual.scaleX=p.level>=100?1:Math.min(1,p.experience/xpRequired(p.level));
    const hp=t?Math.max(0,t.hp/t.maxHp):1;frame(block.hpBar.actual,hp<=.2?2:1);block.hpBar.actual.scaleX=hp;
    block.pokeUp.visible=p.level<100&&p.experience>=xpRequired(p.level);if(block.pokeUp.visible&&(b.isChallenge?b.save:app.save).money>=levelCost(p.level))block.pokeUp.play();else frame(block.pokeUp,1);
   }
   hit('party_'+i,block,p?`${p.nickname||app.data.species[p.speciesId].name}, level ${p.level}`:'Empty party slot',e=>app.partyPointerDown(e,p.uid),{uid:p?.uid,disabled:!p||!running});
  }
  hit('menu',clip.exit_butt,'Menu',()=>app.openBattleMenu(),{disabled:!running});
  hit('pokeball',clip.pokeball,'Drag a Poké Ball to catch a weakened Pokémon',e=>app.beginOriginalItemDrag('ball',e),{disabled:!running,visible:!reverse&&!multi});
  hit('potion',clip.potion.hs,'Drag a potion onto an injured Pokémon',e=>app.beginOriginalItemDrag('potion',e),{disabled:!running||b.potions<=0,visible:!reverse&&!multi});
  const paths=['p','2','3','4'].filter(key=>key in b.level.paths),count=reverse?paths.length:1;
  clip.ui_path.visible=count>1;clip.path_hl.visible=count>1;
  const selected=document.querySelector('#path-select').value||paths[0];frame(clip.path_hl,Math.max(1,paths.indexOf(selected)+1));
  for(let i=1;i<=4;i++){
   clip['speed_'+i].visible=!multi;clip['path_'+i].visible=i<=count&&count>1;if(clip.ui_path['path_'+i])clip.ui_path['path_'+i].visible=i<=count;
   hit('speed_'+i,clip['speed_'+i],`${i} times speed`,()=>{app.save.settings.speed=i;app.store();render();},{disabled:!running||reverse,visible:!multi});
   hit('zoom_'+i,clip['zoom_'+i],`Zoom ${[100,75,50,25][i-1]} percent`,()=>app.scene.zoomTo([1,.75,.5,.25][i-1]),{disabled:!running});
   hit('path_'+i,clip['path_'+i],`Path ${i}`,()=>{document.querySelector('#path-select').value=paths[i-1];render();},{disabled:!running,visible:i<=count&&count>1});
  }
  // Local play replaces the unavailable second client. Keep the handover inside
  // the game frame and absent from every single-player screen.
  let handover=buttons.get('local-player');if(!handover){handover=document.createElement('button');handover.className='local-handover';buttons.set('local-player',handover);host.append(handover);handover.onclick=()=>app.switchLocalPlayer();}
  handover.hidden=!multi;handover.textContent=`Player ${(b.localPlayer??0)+1} · Switch player`;
  renderer?.render(clip);
 }
 app.originalHUD={clip,canvas,render};createOriginalRenderer(canvas,'gfx_ui_Level').then(value=>{renderer=value;render();}).catch(error=>app.toast(error.message));
 function tick(now){carry+=Math.min(250,now-last);last=now;while(carry>=1000/21){carry-=1000/21;clock.frame++;clip.tick();}render();requestAnimationFrame(tick);}requestAnimationFrame(tick);
}
