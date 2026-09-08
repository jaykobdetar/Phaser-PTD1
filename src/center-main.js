import './center.css';
import {LocalProfiles} from './local-services.js';
import {CenterService} from './center-model.js';
import {CenterUI} from './center-ui.js';

async function json(path){const r=await fetch(path);if(!r.ok)throw Error('Could not load '+path);return r.json();}
async function start(){
 const [data,sprites,icons]=await Promise.all([json('data/game-data.json'),json('assets/pokemon-manifest.json'),json('assets/center/icon-map.json')]);
 const profiles=new LocalProfiles(data,localStorage);await profiles.initialize();
 const service=new CenterService(data,profiles);await service.refresh();
 const ui=new CenterUI({data,sprites,icons,service,root:document.querySelector('#center-app'),dialog:document.querySelector('#center-dialog')});
 profiles.onConflict=detail=>ui.showConflict(detail);ui.start();if(import.meta.env.DEV)window.__CENTER={data,sprites,profiles,service,ui};
}
start().catch(error=>{const root=document.querySelector('#center-app');root.replaceChildren();const box=document.createElement('div');box.className='center-loading';const title=document.createElement('h1');title.textContent='The PokéCenter could not open';const detail=document.createElement('p');detail.textContent=error.message;const back=document.createElement('a');back.href='./';back.textContent='Return to Pokémon Tower Defense';box.append(title,detail,back);root.append(box);});
