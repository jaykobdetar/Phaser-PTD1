import {ROCK_TUNNEL_ROOMS} from './rock-tunnel.js';
/** Original room controllers draw and animate navigation; RockTunnel retains visit/battle bookkeeping. */
export function installOriginalTunnelUI(app){
 app.showOriginalTunnelView=view=>{
  if(!app.tunnel||!app.showOriginalStory||!['route','encounter','quest','exit'].includes(view.status))return false;
  const tunnel=app.tunnel,battle=app.battle,room=ROCK_TUNNEL_ROOMS[view.room];
  const controller=view.status==='route'&&[5,7].includes(view.room)?view.stage.winPopup:view.stage.introPopup;
  if(!controller)return false;
  const species=tunnel.pending?.speciesId;const sourceRoll={41:.1,74:.6,95:.8,100:.88,66:.99}[species];
  app.showOriginalStory(controller,{battle,phase:'tunnel',stageFlags:{var_68:tunnel.flags},rng:sourceRoll===undefined?tunnel.random:()=>sourceRoll,
   onComplete(result){
    if(app.tunnel!==tunnel)return;
    if(result.type==='change-stage'){
     const next=Object.entries(ROCK_TUNNEL_ROOMS).find(([,room])=>room.stage===result.destination)?.[0];
     if(next)tunnel.enterRoom(Number(next));
     else if(result.destination==='class_967'){tunnel.room='exit';tunnel.status='exit';}
     else {app.openCampaign();return;}
    }else if(result.type==='start-battle'){
     const chosen=result.runtime.controller.var_87,waveClass=result.args?.[2]?.sourceClass;
     if(!tunnel.pending)tunnel.prepareEncounter(chosen?'wild':room?.battle??'wild');
     if(chosen&&room?.wild?.[chosen]){tunnel.pending.speciesId=chosen;tunnel.pending.level.waveClass=room.wild[chosen];}
     if(waveClass)tunnel.pending.level.waveClass=waveClass;
     tunnel.choose('battle');
    }else if(result.type==='end-level'&&view.status==='exit')tunnel.choose('exit');
    else if(view.status==='quest')tunnel.enterRoom(1);
    app.store();app.showTunnel();
   }
  });return true;
 };
}
