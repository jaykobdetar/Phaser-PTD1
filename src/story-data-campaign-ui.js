const $=s=>document.querySelector(s);
const chapters=[[1,5],[6,11],[12,15],[16,20],[21,25],[26,30],[31,36],[37,42]];
const thresholds=[0,5,11,15,20,25,30,36];
/** Original chapter and challenge graphics; native save gates and battle ownership remain with App. */
export function installOriginalCampaignUI(app){
 async function paint(symbol,handlers,prepare,labels){
  app.stopOriginalStory?.();app.originalCampaignView?.dispose();app.openOriginalScreen('<div id="original-campaign"></div>');$('#modal').classList.add('original-story-modal');$('#modal-close').hidden=true;
  const container=$('#original-campaign');const view=await app.paintOriginalMenu(symbol,container,handlers,{prepare,labels,presentation:'screen'});if(!container.isConnected){view.dispose();return;}app.originalCampaignView=view;
  const preview=view.clip.level_preview;if(!preview)return;
  const start={x:preview.x,y:preview.y},r=preview.meta.bounds;let down=null,dragged=false;
  const move=(dx,dy)=>{preview.x=Math.max(Math.min(start.x,780-r[2]),Math.min(start.x,preview.x+dx));preview.y=Math.max(Math.min(start.y,445-r[3]),Math.min(start.y,preview.y+dy));view.render();};
  view.panel.addEventListener('wheel',e=>{e.preventDefault();move(-e.deltaX,-e.deltaY);},{passive:false});
  view.panel.addEventListener('pointerdown',e=>{if(e.button!==0)return;down={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY};dragged=false;});
  view.panel.addEventListener('pointermove',e=>{if(!down)return;if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>8)dragged=true;if(dragged){const scale=800/view.panel.getBoundingClientRect().width;move((e.clientX-down.lastX)*scale,(e.clientY-down.lastY)*scale);down.lastX=e.clientX;down.lastY=e.clientY;}});
  view.panel.addEventListener('pointerup',()=>{down=null;});view.panel.addEventListener('pointercancel',()=>{down=null;});view.panel.addEventListener('click',e=>{if(dragged){e.preventDefault();e.stopImmediatePropagation();dragged=false;}},true);
 }
 const campaignSave=()=>app.previewMode?app.primarySave:app.save;
 const select=(id,preview)=>{app.originalCampaignView?.dispose();app.closeModal();if(app.chooseLevelParty)app.chooseLevelParty(id,preview);else app.loadLevel(id,preview);};
 app.openOriginalCampaign=(preview=false)=>{
  const completed=(campaignSave()?.unlocked??1)-1,handlers={back_butt:()=>app.openMainMenu()},labels={back_butt:'Main menu'};
  for(let n=1;n<=8;n++){if(preview||completed>=thresholds[n-1])handlers['level'+n]=()=>app.openOriginalChapter(n,preview);labels['level'+n]=`Chapter ${n}`;}
  return paint('gfx_screen_level_select',handlers,clip=>{for(let n=1;n<=8;n++)clip.level_preview?.['level'+n]?.gotoAndStop(preview||completed>=thresholds[n-1]?1:2);},labels);
 };
 app.openOriginalChapter=(chapter,preview=false)=>{
  const range=chapters[chapter-1];if(!range)return;const save=campaignSave(),handlers={back_butt:()=>app.openOriginalCampaign(preview)},labels={back_butt:'Chapters'};
  const unlocked=id=>preview||id<=save.unlocked||(save.unlocked>=37&&id<=39);
  for(let id=range[0];id<=range[1];id++){if(unlocked(id))handlers['level'+id]=()=>select(id,preview);labels['level'+id]=app.levels.find(l=>l.id===id)?.displayName??`Stage ${id}`;}
  return paint('gfx_screen_level_select_chapter_'+chapter,handlers,clip=>{for(let id=range[0];id<=range[1];id++)clip.level_preview?.['level'+id]?.gotoAndStop(unlocked(id)?1:2);},labels);
 };
 app.openOriginalChallenges=()=>{
  const completed=app.save.challengeCompleted??0,handlers={back_butt:()=>app.openMainMenu()},labels={back_butt:'Main menu'};
  for(let n=1;n<=6;n++){if(completed>=n-1)handlers['level'+n]=()=>[4,5].includes(n)&&app.chooseChallengeParty?app.chooseChallengeParty(n):app.loadChallenge(n);labels['level'+n]=`Challenge ${n}`;}
  return paint('gfx_screen_challenge_level_select',handlers,clip=>{for(let n=1;n<=6;n++)clip.level_preview?.['level'+n]?.gotoAndStop(completed>=n-1?1:2);},labels);
 };
}
