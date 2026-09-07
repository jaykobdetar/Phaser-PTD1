import {ITEMS,TARGET_MODES,buyItem,useEvolutionItem,tmEligibility,teachMove,releasePokemon,recordOwned} from './profile-features.js';
import {LOCAL_GIFTS,redeemGift} from './local-services.js';
import {newSave,makePokemon} from './model.js';
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function installProfileUI(app) {
  app.leaveProfilePreview=()=>{if(!app.previewMode)return;const save=app.primarySave;app.previewMode=false;app.primarySave=null;app.save=save;app.selectedUid=save.party[0];app.loadLevel(Math.min(save.unlocked,42),false,{skipIntro:true});};
  app.openMainMenu=()=>{
    app.leaveProfilePreview();app.stopOriginalStory?.();app.originalMainView?.dispose();
    app.openOriginalScreen('<div id="original-main-menu"></div>');
    return app.paintOriginalMenu('gfx_screen_start',$('#original-main-menu'),{
      story_butt:()=>app.openCampaign(),cm_butt:()=>app.openChallenges(),mg_butt:()=>app.openGifts(),pm_butt:()=>app.openMart(),
      pd_butt:()=>app.openAchievements(),multi_butt:()=>app.openMultiplayer(),inv_butt:()=>app.openOriginalPokeCenter(),save_butt:()=>app.saveOriginalAccount(),
      back_butt:()=>app.saveOriginalAccount(()=>app.openProfiles()),wiki_butt:()=>app.openOriginalWiki()
    },{presentation:'screen',labels:{story_butt:'Story Mode',cm_butt:'Challenge Mode',mg_butt:'Mystery Gift',pm_butt:'Poké Mart',pd_butt:'Pokédex',multi_butt:'Multiplayer',inv_butt:'PokéCenter',save_butt:'Save game',back_butt:'Profiles',wiki_butt:'PTD 1 Wiki'}}).then(view=>app.originalMainView=view).catch(error=>app.toast(error.message));
  };
  app.openProfiles=()=>{
    app.leaveProfilePreview();
    app.store();
    app.openModal(`<h2>Select a profile</h2><div class="profile-slots">${app.profiles.bank.slots.map((save,i)=>`<button data-profile="${i}"><b>Profile ${i+1}${i===app.profiles.bank.active?' · Active':''}</b>${save?`<span>${esc(save.trainer)}</span><small>Stage ${save.unlocked} · ${save.pokemon.length} Pokémon · ${save.badges??0} badges</small><div class="profile-team">${save.party.filter(Boolean).map(uid=>app.sprite(save.pokemon.find(p=>p.uid===uid),40)).join('')}</div>`:'<span>New adventure</span>'}</button>`).join('')}</div><p class="muted">Three independent profiles. Trading and local multiplayer use these profiles.</p><div class="dialog-actions"><button id="bank-export">Export all profiles</button><button id="profile-back">Back</button></div>`);
    $('[id=profile-back]').onclick=()=>app.hasProfile?app.openMainMenu():app.openTitle();
    $('#bank-export').onclick=()=>{const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(app.profiles.bank,null,2)],{type:'application/json'}));a.href=url;a.download='ptd-local-profiles.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
    document.querySelectorAll('[data-profile]').forEach(button=>button.onclick=()=>{
      const slot=Number(button.dataset.profile);
      if(app.profiles.bank.slots[slot]) {app.battle?.dispose?.();app.previewMode=false;app.primarySave=null;app.save=app.profiles.select(slot);app.hasProfile=true;app.selectedUid=app.save.party[0];app.loadLevel(Math.min(app.save.unlocked,42),false,{skipIntro:true});app.openMainMenu();}
      else app.openNewProfile(slot);
    });
  };
  app.openNewProfile=slot=>{
    app.openModal(`<h2>New profile ${slot+1}</h2><label>Trainer name<input id="trainer-name" class="search-box" maxlength="30" value="Trainer"></label><div class="dialog-actions"><label>Version <select id="game-version"><option value="1">Red</option><option value="2">Blue</option></select></label><label>Avatar <select id="avatar-gender"><option value="boy">Boy</option><option value="girl">Girl</option></select></label></div><p>Choose your first Pokémon.</p><div class="starter-grid">${[1,4,7].map(id=>`<button data-new-starter="${id}">${app.sprite({speciesId:id},75)}<b>${app.data.species[id].name}</b></button>`).join('')}</div>`);
    document.querySelectorAll('[data-new-starter]').forEach(button=>button.onclick=()=>{
      const save=newSave(app.data,Number(button.dataset.newStarter));save.trainer=$('#trainer-name').value.trim()||'Trainer';save.gameVersion=Number($('#game-version').value);save.avatar.gender=$('#avatar-gender').value;
      app.battle?.dispose?.();app.save=app.profiles.create(slot,save);app.hasProfile=true;app.previewMode=false;app.primarySave=null;app.selectedUid=app.save.party[0];app.loadLevel(1);app.closeModal();
    });
  };
  app.openMart=()=>{
    app.openModal(`<h2>Poké Mart</h2><p>Money: ₽ ${app.save.money.toLocaleString()}</p><div class="service-grid">${ITEMS.map(item=>`<button data-buy-item="${item.id}" ${app.save.money<item.price?'disabled':''}><b>${item.name}</b><small>₽ 10,000 · Owned ${app.save.inventory?.[item.id]??0}</small></button>`).join('')}</div><div class="dialog-actions"><button id="mart-bag">Use an item</button><button id="mart-back">Back</button></div>`);
    document.querySelectorAll('[data-buy-item]').forEach(b=>b.onclick=()=>{const result=buyItem(app.save,Number(b.dataset.buyItem));if(result.ok){app.store();app.renderHUD();app.openMart();}app.toast(result.ok?`${result.item.name} purchased.`:result.reason);});
    $('#mart-bag').onclick=()=>app.openBag();$('#mart-back').onclick=()=>app.openMainMenu();
  };
  app.openBag=(uid=app.selectedUid)=>{
    const p=app.save.pokemon.find(p=>p.uid===uid)??app.save.pokemon[0],s=app.data.species[p.speciesId];
    app.openModal(`<h2>Items</h2><select id="bag-pokemon" class="search-box" aria-label="Pokémon">${app.save.pokemon.map(p=>`<option value="${esc(p.uid)}" ${p.uid===uid?'selected':''}>${esc(p.nickname||app.data.species[p.speciesId].name)} · Lv. ${p.level}</option>`).join('')}</select>${app.sprite(p,80)}<div class="service-grid">${ITEMS.map(item=>`<button data-use-item="${item.id}" ${!(app.save.inventory?.[item.id]>0)||!s.evolutions.some(e=>e.itemId===item.id)?'disabled':''}>${item.name}<small>Owned ${app.save.inventory?.[item.id]??0}${s.evolutions.some(e=>e.itemId===item.id)?' · Compatible':''}</small></button>`).join('')}</div><div class="dialog-actions"><button id="bag-back">Poké Mart</button></div>`);
    $('#bag-pokemon').onchange=e=>app.openBag(e.target.value);$('#bag-back').onclick=()=>app.openMart();
    document.querySelectorAll('[data-use-item]').forEach(b=>b.onclick=()=>{const result=useEvolutionItem(app.data,app.save,p,Number(b.dataset.useItem));if(result.ok){app.battle.syncPokemon(p);app.renderAll();app.store();app.openBag(p.uid);}app.toast(result.ok?`${s.name} evolved into ${app.data.species[p.speciesId].name}!`:result.reason);});
  };
  app.manageMoves=(kind='relearn',page=0,uid=app.selectedUid)=>{
    const save=app.battle.isChallenge||app.battle.isMultiplayer?app.battle.save:app.save;
    const p=save.pokemon.find(p=>p.uid===uid)??app.selected;if(!p)return;
    const s=app.data.species[p.speciesId];
    const moves=[...new Set(kind==='tm'?[...s.tmMoveIds,...(p.shiny===2&&s.shadowExtraTmMoveId?[s.shadowExtraTmMoveId]:[])]:s.learnset.filter(m=>m.level<=p.level).map(m=>m.moveId))];
    const pages=Math.max(1,Math.ceil(moves.length/20));page=Math.max(0,Math.min(pages-1,page));
    app.openModal(`<h2>${esc(p.nickname||s.name)} · ${kind==='tm'?'TMs':'Relearn moves'}</h2><p>Money: ₽ ${save.money.toLocaleString()} · ${kind==='tm'?'TMs cost ₽ 10,000.':'Older moves cost ₽ 1,000; current-level moves are free.'}</p><select id="replace-slot" class="search-box" aria-label="Move to replace">${p.moves.map((id,i)=>`<option value="${i}">Replace ${esc(app.data.moves[id].name)}</option>`).join('')}${p.moves.length<4?`<option value="${p.moves.length}" selected>Empty slot</option>`:''}</select><div class="move-buttons">${moves.slice(page*20,page*20+20).map(id=>{const m=app.data.moves[id],eligible=kind==='tm'?tmEligibility(app.data,save,p,id):{ok:!p.moves.includes(id)&&save.money>=(s.learnset.some(e=>e.moveId===id&&e.level===p.level)?0:1000)};return `<button data-teach="${id}" ${eligible.ok?'':'disabled'} title="${esc(eligible.reason??'')}">${esc(m.name)}<small>${p.moves.includes(id)?'Known':m.type+' · '+(m.power?'Power '+m.power:'Status')}</small></button>`;}).join('')}</div><div class="dialog-actions"><button id="move-prev" ${page?'':'disabled'}>Previous</button><span>${page+1} / ${pages}</span><button id="move-next" ${page+1<pages?'':'disabled'}>Next</button><button id="move-kind">${kind==='tm'?'Relearn':'TMs'}</button><button id="move-field">Cut &amp; Flash</button></div>`);
    $('#move-prev').onclick=()=>app.manageMoves(kind,page-1,uid);$('#move-next').onclick=()=>app.manageMoves(kind,page+1,uid);$('#move-kind').onclick=()=>app.manageMoves(kind==='tm'?'relearn':'tm',0,uid);$('#move-field').onclick=()=>{app.selectedUid=uid;app.openFieldMoves();};
    document.querySelectorAll('[data-teach]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.teach),result=teachMove(app.data,save,p,id,Number($('#replace-slot').value),kind==='tm'?'tm':s.learnset.some(m=>m.moveId===id&&m.level===p.level)?'level':'relearn');if(result.ok){if(app.battle.isChallenge)app.save.money=save.money;app.battle.syncPokemon(p);app.store();app.renderAll();app.manageMoves(kind,page,uid);}app.toast(result.ok?`${s.name} learned ${app.data.moves[id].name}.`:result.reason);});
  };
  app.openPokemonDetails=uid=>{
    const p=app.save.pokemon.find(p=>p.uid===uid);if(!p)return;
    const s=app.data.species[p.speciesId];
    app.openModal(`<h2>${esc(p.nickname||s.name)}</h2>${app.sprite(p,90)}<p>#${p.speciesId} ${s.name} · Lv. ${p.level} · ${s.types.join(' / ')}</p><label>Nickname<input id="poke-nickname" class="search-box" maxlength="30" value="${esc(p.nickname||'')}"></label><label>Target priority<select id="poke-priority" class="search-box">${TARGET_MODES.map(([id,label])=>`<option value="${id}" ${id===p.target?'selected':''}>${label}</option>`).join('')}</select></label><div class="dialog-actions"><button id="poke-save">Save changes</button><button id="poke-moves">Moves</button><button id="poke-items">Items</button><button id="poke-release" class="danger">Release</button><button id="poke-back">Storage</button></div>`);
    $('#poke-save').onclick=()=>{p.nickname=$('#poke-nickname').value.trim();p.target=$('#poke-priority').value;app.battle.syncPokemon(p);app.store();app.renderAll();app.toast('Pokémon updated.');};
    $('#poke-moves').onclick=()=>app.manageMoves('relearn',0,uid);$('#poke-items').onclick=()=>app.openBag(uid);$('#poke-back').onclick=()=>app.openCollection();
    $('#poke-release').onclick=()=>{app.openModal(`<h2>Release ${esc(p.nickname||s.name)}?</h2><p>This Pokémon will leave your collection.</p><div class="dialog-actions"><button id="release-cancel">Keep Pokémon</button><button id="release-confirm" class="danger">Release</button></div>`);$('#release-cancel').onclick=()=>app.openPokemonDetails(uid);$('#release-confirm').onclick=()=>{const result=releasePokemon(app.save,uid);if(result.ok){app.battle.recall(uid);app.selectedUid=app.save.party[0];app.store();app.renderAll();app.openCollection();}else app.toast(result.reason);};};
  };
  app.openDex=(form='normal')=>{
    app.save.pokemon.forEach(p=>recordOwned(app.save,p));const owned=new Set(app.save.dex[form]);
    app.openModal(`<h2>Pokédex · ${owned.size} caught</h2><div class="dialog-actions">${['normal','shiny','shadow'].map(f=>`<button data-dex-form="${f}" class="${f===form?'active':''}">${f[0].toUpperCase()+f.slice(1)}</button>`).join('')}</div><div class="dex-grid">${Array.from({length:151},(_,i)=>i+1).map(id=>`<div class="dex-cell ${owned.has(id)?'owned':''}">${owned.has(id)?app.sprite({speciesId:id,shiny:['normal','shiny','shadow'].indexOf(form)},42):'<span class="dex-unknown">?</span>'}<small>${String(id).padStart(3,'0')} ${owned.has(id)?app.data.species[id].name:'—'}</small></div>`).join('')}</div>`);
    document.querySelectorAll('[data-dex-form]').forEach(b=>b.onclick=()=>app.openDex(b.dataset.dexForm));
  };
  app.openTrades=()=>{
    const show=html=>app.openLocalService(html,()=>app.openOriginalPokeCenter());
    app.leaveProfilePreview();
    app.store();const others=app.profiles.bank.slots.map((s,i)=>({s,i})).filter(({s,i})=>s&&i!==app.profiles.bank.active);
    show(`<h2>Local trading</h2><p>Trade between two profiles on this device. Kadabra, Machoke, Graveler and Haunter evolve when traded.</p>${others.length?`<label>Partner<select id="trade-profile" class="search-box">${others.map(({s,i})=>`<option value="${i}">${esc(s.trainer)} · Profile ${i+1}</option>`).join('')}</select></label><div class="trade-columns"><label>You offer<select id="trade-first" class="search-box">${app.save.pokemon.map(p=>`<option value="${esc(p.uid)}">${esc(p.nickname||app.data.species[p.speciesId].name)} · Lv. ${p.level}</option>`).join('')}</select></label><label>Partner offers<select id="trade-second" class="search-box"></select></label></div><button id="trade-review" class="primary">Review trade</button>`:'<p>Create a second profile to trade.</p><button id="trade-profiles">Profiles</button>'}`);
    $('#trade-profiles')?.addEventListener('click',()=>app.openProfiles());if(!others.length)return;
    const render=()=>{$('#trade-second').innerHTML=app.profiles.bank.slots[Number($('#trade-profile').value)].pokemon.map(p=>`<option value="${esc(p.uid)}">${esc(p.nickname||app.data.species[p.speciesId].name)} · Lv. ${p.level}</option>`).join('');};$('#trade-profile').onchange=render;render();
    $('#trade-review').onclick=()=>{const slot=Number($('#trade-profile').value),first=$('#trade-first').value,second=$('#trade-second').value,a=app.save.pokemon.find(p=>p.uid===first),b=app.profiles.bank.slots[slot].pokemon.find(p=>p.uid===second);if(!a||!b){app.toast('Both profiles need a Pokémon to trade.');return;}show(`<h2>Trade these Pokémon?</h2><div class="trade-columns"><div>${app.sprite(a,90)}${esc(app.data.species[a.speciesId].name)}</div><div>${app.sprite(b,90)}${esc(app.data.species[b.speciesId].name)}</div></div><div class="dialog-actions"><button id="trade-cancel">Cancel</button><button id="trade-confirm" class="primary">Both players agree · Trade</button></div>`);$('#trade-cancel').onclick=()=>app.openTrades();$('#trade-confirm').onclick=()=>{const result=app.profiles.trade(slot,first,second);if(result.ok){app.previewMode=false;app.primarySave=null;app.save=app.profiles.current;app.selectedUid=app.save.party[0];app.loadLevel(Math.min(app.save.unlocked,42),false,{skipIntro:true});app.openTrades();app.toast('Trade complete. Both profiles saved.');}else app.toast(result.reason);};};
  };
  app.openGifts=()=>{
    const show=html=>app.openLocalService(html,()=>app.openGifts());
    show(`<h2>Mystery Gift</h2><p>Enter an offline gift code.</p><input id="gift-code" class="search-box" placeholder="Gift code" maxlength="100" aria-label="Gift code"><button id="gift-redeem" class="primary">Receive gift</button><details><summary>Available offline codes</summary>${LOCAL_GIFTS.map(g=>`<p><b>${g.code}</b> — ${g.label}${g.challenge?` (complete Challenge ${g.challenge})`:''}</p>`).join('')}</details><p class="muted">Each gift is available once per profile. Challenge gifts share the same claim as the battle reward.</p>`);
    $('#gift-redeem').onclick=()=>{const result=redeemGift(app.data,app.save,$('#gift-code').value,makePokemon);if(result.ok){app.store();app.renderAll();show(`<h2>Gift received!</h2>${app.sprite(result.pokemon,100)}<p>${app.data.species[result.pokemon.speciesId].name} was sent to your storage.</p><button id="gift-again">Back</button>`);$('#gift-again').onclick=()=>app.openGifts();}else app.toast(result.reason);};
  };
}
