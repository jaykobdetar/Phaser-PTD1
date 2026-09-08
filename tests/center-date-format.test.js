import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';

const program=`
import assert from 'node:assert/strict';
import {CenterUI} from ${JSON.stringify(new URL('../src/center-ui.js',import.meta.url).href)};
const Original=Intl.DateTimeFormat;let constructed=0;
Intl.DateTimeFormat=class extends Original{constructor(...args){super(...args);constructed++;}};
const settings={},state={settings,notifications:[]},service={state,profile:null,bank:{active:0}};
const ui=new CenterUI({data:{},sprites:{},service,root:{innerHTML:''}});
const times=[Date.UTC(2026,0,1,0,5),Date.UTC(2026,2,8,7,30),Date.UTC(2026,10,1,6,30),Date.UTC(2026,6,1,13,5),'invalid'];
for(const format of ['MM.DD.YYYY','DD.MM.YYYY','YYYY.MM.DD'])for(const hour of ['12','24'])for(const value of times){
 settings.dateFormat=format;settings.timeFormat=hour;const d=new Date(value),parts={MM:String(d.getMonth()+1).padStart(2,'0'),DD:String(d.getDate()).padStart(2,'0'),YYYY:String(d.getFullYear())};
 const expected=format.replace(/YYYY|MM|DD/g,k=>parts[k])+' '+d.toLocaleTimeString(undefined,{hour:'2-digit',minute:'2-digit',hour12:hour==='12'});
 assert.equal(ui.date(value),expected);
}
assert.equal(ui.date(0),'');assert.equal(constructed,2);
// Every render refreshes the cache to pick up locale/timezone changes.
globalThis.document={body:{classList:{toggle(){}}},querySelectorAll:()=>[]};globalThis.location={hash:'#/home'};
ui.sidebar=()=>'';ui.navigation=()=>'';ui.page=()=>'';
ui.render();const afterRender=constructed;ui.date(times[0]);assert.equal(constructed,afterRender+1);
`;
for(const [locale,zone] of [['en_US.UTF-8','UTC'],['en_US.UTF-8','America/New_York'],['de_DE.UTF-8','Asia/Kolkata']]){
  test(`Center date formatting preserves active locale, zone and hour cycle (${locale}, ${zone})`,()=>{
    const child=spawnSync(process.execPath,['--input-type=module','-e',program],{env:{...process.env,LANG:locale,LC_ALL:locale,TZ:zone},encoding:'utf8'});
    assert.equal(child.status,0,child.stderr);
  });
}
