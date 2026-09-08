import {recordOwned} from './profile-features.js';

/** popups_Save_Account waits for the save reply before showing success. The
 * local replacement likewise waits for the disk reply when that service exists. */
export async function persistOriginalProfile(profiles,save){
 if(!profiles?.bank||!save)throw new Error('Select a profile before saving.');
 const diskRequired=profiles.serverAvailable||profiles.status==='conflict';
 await profiles.pending;
 if(profiles.status==='conflict')throw new Error('The disk profiles changed in another window. Export a backup before reloading.');
 save.pokemon.forEach(p=>recordOwned(save,p));
 profiles.save(save);
 await profiles.pending;
 if(profiles.lastError)throw profiles.lastError;
 if(diskRequired&&profiles.status!=='disk')throw new Error(profiles.status==='conflict'?'The disk profiles changed in another window.':'The local disk server could not save the profile.');
 return {destination:diskRequired?'disk':'browser'};
}

export function installOriginalSaveUI(app){
 let session=null;
 app.saveOriginalAccount=(onComplete=()=>app.openMainMenu())=>{
  if(session)return session.ready;
  const current={frame:1,view:null,busy:false,previousBack:app.originalBack};session=current;
  app.originalBack=()=>{};
  const finish=()=>{if(session!==current)return;current.view?.dispose();session=null;app.originalSaveView=null;app.originalBack=current.previousBack;onComplete();};
  const setFrame=frame=>{current.frame=frame;if(current.clip){current.clip.actual.gotoAndStop(frame);current.view?.render();}};
  const submit=async()=>{
   if(current.busy||session!==current)return;current.busy=true;setFrame(1);
   try{await persistOriginalProfile(app.profiles,app.save);if(session===current){setFrame(3);document.querySelector('#save-status').textContent='Saved on this device';}}
   catch(error){if(session===current){current.error=error.message;setFrame(2);document.querySelector('#save-status').textContent='Save failed — export a backup';}}
   finally{current.busy=false;}
  };
  const ready=()=>current.clip?.currentLabel==='end';
  app.openOriginalPopup('<div id="original-save-popup"></div>');document.querySelector('#modal-close').hidden=true;
  current.ready=app.paintOriginalMenu('popup_Save',document.querySelector('#original-save-popup'),{
   yes_butt:()=>{if(ready())submit();},no_butt:()=>{if(ready())finish();}
  },{presentation:'popup',prepare:clip=>{current.clip=clip;clip.actual.gotoAndStop(current.frame);},labels:{yes_butt:'Yes, retry saving',no_butt:'No, continue without saving'},afterRender:({canvas})=>{
   canvas.dataset.saveState=current.frame===1?'saving':current.frame===2?'error':'success';canvas.setAttribute('aria-label',current.frame===1?'Saving game':current.frame===2?'Saving failed. Retry saving?':'Game saved. Click to continue.');
  }}).then(view=>{
   if(session!==current){view.dispose();return view;}current.view=view;app.originalSaveView=view;
   view.canvas.tabIndex=0;view.canvas.setAttribute('role','button');view.canvas.onclick=()=>{if(ready()&&current.frame===3)finish();};view.canvas.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();view.canvas.click();}};
   return view;
  });
  submit();return current.ready;
 };
 app.openLocalBackups=()=>{
  app.openLocalService('<h2>Local profiles and backups</h2><p>Your three profiles are saved on this device. Export a portable JSON backup to keep a separate copy or move it to another device.</p><div class="dialog-actions"><button id="original-export-current">Export current profile</button><button id="original-export-all">Export all profiles</button><button id="original-import-backup">Import backup</button></div><p id="original-backup-status" role="status"></p>',()=>app.openOriginalOptions());
  const status=document.querySelector('#original-backup-status');
  const download=(value,name)=>{const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json'})),link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='Backup exported.';};
  const current=document.querySelector('#original-export-current');current.disabled=!app.hasProfile;current.onclick=()=>download(app.save,'ptd-phaser-profile.json');
  document.querySelector('#original-export-all').onclick=()=>{const bank=structuredClone(app.profiles.bank);if(app.hasProfile&&!app.previewMode)bank.slots[bank.active]=app.save;download(bank,'ptd-local-profiles.json');};
  document.querySelector('#original-import-backup').onclick=()=>document.querySelector('#import-file').click();
 };
}
