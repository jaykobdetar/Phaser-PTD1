import {installOriginalBattleUI} from './original-battle-ui.js';
import {installOriginalHUD} from './original-hud.js';
import {installOriginalInput} from './original-input.js';
import {installOriginalProfileUI} from "./original-profile-ui.js";
import {installOriginalOnboardingUI} from "./original-onboarding-ui.js";
import {installOriginalStoryUI} from "./original-story-ui.js";
import {installAchievementUI} from "./achievements.js";
import {installMultiplayerUI} from "./multiplayer-ui.js";
import {installChallengeUI} from "./challenge-ui.js";
import {installProfileUI} from "./profile-ui.js";
import {LocalProfiles,validateBank,PROFILE_BANK_KEY} from "./local-services.js";
import {recordOwned,TARGET_MODES} from "./profile-features.js";
import "./style.css";
import "./original.css";
import { Battle } from "./battle.js";
import { installStoryUI } from "./story-ui.js";
import { installTunnelUI } from "./tunnel-ui.js";
import { awardRoute2Flash, recordTunnelSessionCapture } from "./rock-tunnel.js";
import { SafariBattle } from "./safari-battle.js";
import { ReverseBattle } from "./reverse-battle.js";
import { initializeStageHooks } from "./stage-hooks.js";
import { createGame, spriteKey } from "./scene.js";
import {
  newSave,
  makePokemon,
  loadSave,
  persist,
  validateSave,
  trainPokemon,
  evolvePokemon,
  xpRequired,
  levelCost,
  SAVE_KEY,
} from "./model.js";
import { importLegacySave } from "./legacy-import.js";
import { moveFidelity } from "./move-effects.js";

const $ = (selector) => document.querySelector(selector);
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const chapter = (id) => (id <= 30 ? Math.ceil(id / 5) : id <= 36 ? 7 : 8);
const fetchJSON = async (path) => {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Missing game file: ${path}`);
  return response.json();
};

class App {
  async init() {
    const [data, levels, pokemon, maps, audio, effects, timelines] = await Promise.all(
      [
        "data/game-data.json",
        "data/levels.json",
        "assets/pokemon-manifest.json",
        "assets/map-manifest.json",
        "assets/audio-manifest.json",
        "assets/effects-manifest.json",
        "data/story-timelines.json",
      ].map(fetchJSON),
    );
    data.timelines=timelines;
    this.data = data;
    this.levels = levels.levels;
    this.variants = levels.variants ?? [];
    this.assets = { pokemon, maps, audio, effects };
    installTunnelUI(this);
    installStoryUI(this);
    installProfileUI(this);
    installChallengeUI(this);
    installMultiplayerUI(this);
    installAchievementUI(this);
    installOriginalStoryUI(this);
    installOriginalOnboardingUI(this);
    installOriginalProfileUI(this);
    installOriginalBattleUI(this);
    installOriginalInput(this);
    this.hasProfile = false;
    this.previewMode = false;
    try {
      this.profiles = new LocalProfiles(data,localStorage);
      this.save = await this.profiles.initialize();
      this.hasProfile = Boolean(this.save);
    } catch (error) {
      this.loadError = error.message;
    }
    if (!this.profiles?.bank) { this.profiles = new LocalProfiles(data,localStorage); this.profiles.bank={version:1,active:0,slots:[null,null,null],updatedAt:""}; }
    if (!this.save) this.save = newSave(data, 1);
    this.applyOriginalSettings?.();
    this.selectedUid = this.save.party[0];
    this.captureMode = false;
    this.stageId = Math.min(this.save.unlocked, 42);
    this.stageId = this.levels.find((l) => l.id === this.stageId)?.id ?? 1;
    const firstLevel = this.levels.find((l) => l.id === this.stageId);
    const Engine =
      firstLevel.mode === "safari"
        ? SafariBattle
        : firstLevel.mode === "invasion"
          ? ReverseBattle
          : Battle;
    this.campaignId = firstLevel.id;
    this.battle = new Engine(
      data,
      firstLevel,
      this.save,
      (type, e) => this.onBattle(type, e),
      { campaignId: this.campaignId },
    );
    this.selectedUid = this.battle.party.find(Boolean)?.uid;
    this.setupOriginalLayout();
    initializeStageHooks(this.battle);
    this.bind();
    this.renderAll();
    this.game = createGame(this);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && this.battle.state === "running") {
        this.battle.togglePause();
        this.renderHUD();
      }
    });
    window.addEventListener("beforeunload", () => {
      if (this.hasProfile && !this.previewMode) this.store();
    });
    if (import.meta.env.DEV) window.__PTD = this;
  }
  get isModalOpen() {
    return $("#modal").open;
  }
  get activeParty() {
    return (
      this.battle?.visibleParty ?? this.battle?.party ??
      this.save.party.map((uid) => this.save.pokemon.find((p) => p.uid === uid))
    );
  }
  get selected() {
    return (
      this.activeParty.find((p) => p?.uid === this.selectedUid) ??
      this.save.pokemon.find((p) => p.uid === this.selectedUid)
    );
  }
  sceneReady(scene) {
    this.scene = scene;
    scene.showLevel();
    this.openTitle();
  }
  setupOriginalLayout() {
    document.body.classList.add("original-theme");
    installOriginalHUD(this);
  }
  openTitle() {
    this.openOriginalScreen(
      '<div class="original-title"><img src="assets/hud/title-stage-800x480.png" alt="Pokémon Tower Defense title screen"><button id="title-start" aria-label="Start game"></button><button id="title-options" aria-label="Options"></button><button id="title-feedback" aria-label="Port information"></button></div>',
    );
    $("#modal").classList.add("title-modal");
    $("#modal-close").hidden = true;
    $("#title-start").onclick = () => {
      if (this.hasProfile) {
        this.closeModal();
        this.openMainMenu();
      } else this.openNewProfile(this.profiles.bank.active);
    };
    $("#title-options").onclick = () => this.openSettings();
    $("#title-feedback").onclick = () => this.openAbout();
  }
  sprite(pokemon, size = 48) {
    const key = spriteKey(pokemon, this.assets.pokemon),
      p = this.assets.pokemon[key];
    if (!p) return "";
    const scale = Math.min(size / p.frameWidth, size / p.frameHeight, 2.5),
      w = p.frameWidth * scale,
      h = p.frameHeight * scale;
    return `<span class="sprite-image" aria-hidden="true"><span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:${w}px;height:${h}px;background-image:url('assets/${p.file}');background-size:${w * 8}px ${h}px;background-repeat:no-repeat"></span></span>`;
  }
  bind() {
    $("#modal-close").onclick = () => this.closeModal();
    $("#modal").addEventListener("cancel", event => {
      event.preventDefault();
      this.originalBack?.();
    });
    $("#import-file").onchange = async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        if (file.size > 10000000)
          throw new Error("Save files must be smaller than 10 MB.");
        const raw = JSON.parse(await file.text());
        let candidate,
          warnings = [];
        if (Array.isArray(raw)) {
          const result = importLegacySave(raw, this.data);
          candidate = validateSave(result.save, this.data);
          warnings = result.warnings;
        } else if(raw.version===1&&Array.isArray(raw.slots)) {
          const bank=validateBank(raw,this.data);
          this.openLocalService(`<h2>Import all three profiles?</h2><p>This replaces the local profile bank. Export your existing profiles first to keep them.</p><div class="dialog-actions"><button id="bank-cancel">Cancel</button><button id="bank-confirm">Import profiles</button></div>`,()=>this.openLocalBackups());
          $("#bank-cancel").onclick=()=>this.openLocalBackups();
          $("#bank-confirm").onclick=()=>{this.previewMode=false;this.primarySave=null;this.profiles.bank=bank;this.profiles.write();this.save=this.profiles.current;this.hasProfile=Boolean(this.save);if(this.save){this.selectedUid=this.save.party[0];this.loadLevel(Math.min(this.save.unlocked,42),false,{skipIntro:true});this.openLocalBackups();}else {this.save=newSave(this.data,1);this.loadLevel(1,false,{skipIntro:true});this.openLocalBackups();}};
          return;
        } else candidate = validateSave(raw, this.data);
        this.openLocalService(
          `<span class="eyebrow">IMPORT SAVE</span><h2>${candidate.pokemon.length} Pokémon recovered</h2><p>Level ${candidate.unlocked} unlocked · ₽ ${candidate.money.toLocaleString()}. This will replace the current Phaser save on this device.</p>${warnings.length ? `<p class="notice">${warnings.map(escape).join("<br>")}</p>` : ""}<div class="dialog-actions"><button id="backup-first">Export current save</button><button class="primary" id="confirm-import">Use this save</button></div>`,()=>this.openLocalBackups(),
        );
        $("#backup-first").onclick = () => this.exportSave();
        $("#confirm-import").onclick = () => {
          this.save = candidate;
          this.hasProfile = true;
          this.selectedUid = candidate.party[0];
          this.previewMode = false;
          this.primarySave = null;
          this.store();
          this.loadLevel(Math.min(candidate.unlocked,42),false,{skipIntro:true});
          this.openLocalBackups();
          this.toast("Save imported.");
        };
      } catch (error) {
        this.toast(error.message);
      } finally {
        event.target.value = "";
      }
    };
  }
  store() {
    if (!this.hasProfile || this.previewMode) return;
    try {
      this.save.pokemon.forEach(p=>recordOwned(this.save,p));
      persist(this.save);
      this.profiles?.save(this.save);
      $("#save-status").textContent = "Saved on this device";
    } catch {
      $("#save-status").textContent = "Save failed — export a backup";
    }
  }
  exportSave() {
    if (!this.hasProfile) {
      this.toast("Choose your first Pokémon to create a save.");
      return;
    }
    this.store();
    const blob = new Blob([JSON.stringify(this.save, null, 2)], {
        type: "application/json",
      }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = `ptd-phaser-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    this.toast("Save backup exported.");
  }
  openModal(html) {
    $("#modal").classList.remove("title-modal", "story-modal", "original-story-modal");
    $("#modal-content").innerHTML = html;
    $("#modal-close").hidden = false;
    if (!this.isModalOpen) $("#modal").showModal();
  }
  openLocalService(html, back=()=>this.openMainMenu()) {
    this.openOriginalScreen(`<section class="original-local-service">${html}<div class="dialog-actions"><button id="local-service-back">Back</button></div></section>`);
    $("#modal-close").hidden=true;$("#local-service-back").onclick=back;
  }
  closeModal() {
    if (this.hasProfile) { $("#modal").close(); this.leaveOriginalScreen?.(); }
    else this.openTitle();
  }
  toast(message) {
    clearTimeout(this.toastTimer);
    $("#toast").textContent = message;
    $("#toast").classList.add("visible");
    this.toastTimer = setTimeout(
      () => $("#toast").classList.remove("visible"),
      4200,
    );
  }
  openStarter() {
    this.openModal(
      `<span class="eyebrow">PROFESSOR OAK'S LAB</span><h2>Your adventure starts here.</h2><p>Choose your first Pokémon. Defend the candy, catch wild Pokémon, and build your team.</p><div class="starter-grid">${[
        1, 4, 7,
      ]
        .map((id) => {
          const p = this.data.species[id];
          return `<button class="starter" data-starter="${id}">${this.sprite({ speciesId: id }, 86)}<strong>${p.name}</strong><span class="type-badge">${p.types[0]}</span><small>LEVEL 5</small></button>`;
        })
        .join(
          "",
        )}</div><p class="muted">Progress stays on this device. Use Save to export a backup.</p>${this.loadError ? `<p class="notice">Your previous save could not be loaded: ${escape(this.loadError)}. It has not been overwritten.</p>` : ""}`,
    );
    document.querySelectorAll("[data-starter]").forEach(
      (button) =>
        (button.onclick = () => {
          this.save = newSave(this.data, Number(button.dataset.starter));
          this.hasProfile = true;
          this.selectedUid = this.save.party[0];
          this.store();
          this.loadLevel(1);
          this.closeModal();
        }),
    );
  }
  loadLevel(id, preview = false, options = {}) {
    this.applyOriginalSettings?.();
    this.stopOriginalStory?.();
    this.cancelOriginalDrag?.();
    this.closeBattlePokemon?.();
    const level =
      typeof id === "number"
        ? this.levels.find((l) => l.id === id)
        : this.variants.find((l) => l.className === id);
    if (!level) {
      this.toast("This stage has not been recovered.");
      return;
    }
    const campaignSave = this.previewMode ? this.primarySave : this.save;
    if (
      !preview &&
      typeof level.id === "number" &&
      level.id > campaignSave.unlocked && !(campaignSave.unlocked>=37 && level.id<=39)
    ) {
      this.toast("Complete the previous stage to unlock this battle.");
      return;
    }
    clearTimeout(this.resultTimer);
    this.battle?.dispose?.();
    this.tunnel = null;
    this.story = null;
    if (preview && !this.previewMode) {
      this.primarySave = this.save;
      this.save = structuredClone(this.save);
    } else if (!preview && this.previewMode) {
      this.save = this.primarySave;
      this.primarySave = null;
      this.selectedUid = this.save.party[0];
    }
    this.previewMode = preview;
    this.stageId = level.id;
    this.captureMode = false;
    if (typeof level.id === "number") this.campaignId = level.id;
    const Engine =
      level.mode === "safari"
        ? SafariBattle
        : level.mode === "invasion"
          ? ReverseBattle
          : Battle;
    this.battle = new Engine(
      this.data,
      level,
      this.save,
      (type, e) => this.onBattle(type, e),
      { campaignId: this.campaignId },
    );
    initializeStageHooks(this.battle);
    if (!this.battle.party.some((p) => p?.uid === this.selectedUid))
      this.selectedUid = this.battle.party.find(Boolean)?.uid;
    $("#path-select").innerHTML = ['p','2','3','4'].filter(key=>key in level.paths)
      .map((path, i) => `<option value="${path}">Path ${i + 1}</option>`)
      .join("");
    this.scene?.showLevel();
    this.renderAll();
    const current = this.battle;
    if(!options.skipIntro)setTimeout(()=>{
      if(this.battle!==current)return;
      if(level.id===17){this.showOriginalStory(level.introPopup,{battle:current,phase:'intro',onComplete:result=>{if(result.type==='change-stage')this.beginTunnel();else this.openCampaign();}});}
      else this.beginOriginalIntro?.().then(shown=>{if(!shown&&this.battle===current)this.beginOriginalReadyGo?.();});
    },0);
  }

  selectPokemon(uid) {
    this.selectedUid = uid;
    this.captureMode = false;
    this.renderAll();
    this.scene?.render();
  }
  place(index) {
    if (this.battle.level.mode === "invasion" && !this.battle.canPlace) {
      this.toast(
        "Use Send Pokémon to launch your selected Pokémon along a route.",
      );
      return;
    }
    if (this.captureMode) {
      this.toggleCapture();
    }
    if (!this.selectedUid) {
      this.toast("Select a Pokémon from your party first.");
      return;
    }
    if (this.battle.place(this.selectedUid, index)) {
      this.renderAll();
      this.scene?.render();
    } else this.toast("That spot is occupied, or this Pokémon has fainted.");
  }
  hoverEntity() {}
  restoreHint() {}
  play() {
    if (!this.scene?.ready || this.isModalOpen || this.activeDrag) return;
    if (["running", "paused"].includes(this.battle.state)) this.battle.togglePause();
    this.renderHUD();
  }
  exitOriginalBattle(battle=this.battle) {
    this.cancelOriginalDrag?.();
    battle.dispose?.();
    if(battle.isChallenge) return this.openChallenges();
    if(battle.isMultiplayer) return this.openMultiplayer();
    const id=battle.level.progressionId??this.campaignId;
    const chapter=[5,11,15,20,25,30,36,42].findIndex(end=>id<=end)+1;
    return this.openOriginalChapter(chapter||8,this.previewMode);
  }
  onBattle(type, event) {
    this.scene?.event(type, event);
    if (["update", "wave", "state", "candy", "start", "energy"].includes(type))
      this.renderHUD();
    if (type === "launch-rejected") this.toast(event.message);
    if (
      [
        "capture",
        "party-removed",
        "defeat",
        "faint",
        "place",
        "recall",
        "refresh",
        "launch",
        "attacker-returned",
      ].includes(type)
    ) {
      this.renderParty();
      this.renderInspector();
      this.renderHUD();
    }
    if (type === "capture") {
      if (!this.previewMode && !this.battle.level.temporaryParty) { recordTunnelSessionCapture(event.profile); recordOwned(this.save,event.profile); }
      this.store();
      this.showOriginalCapture?.(event.profile);
    }
    if (type === "error") {
      this.openModal(
        `<span class="eyebrow">BATTLE ERROR</span><h2>This battle could not continue.</h2><p>${escape(event.error.message)}</p><p>Your collection and earned progress are saved. Restart the battle to try again.</p><div class="dialog-actions"><button id="error-back">Campaign</button></div>`,
      );
      $("#error-back").onclick = () => this.openCampaign();
      this.store();
      this.renderHUD();
    }
    if (type === "finish") {
      if (awardRoute2Flash(this.battle, event.won))
        this.toast("Flash unlocked! Teach it from Field moves.");
      this.store();
      const finishedBattle = this.battle;
      this.resultTimer = setTimeout(() => {
        if (this.battle === finishedBattle) {
          if(event.won&&!event.multiplayer&&!event.tunnel)this.beginOriginalWin(event).then(shown=>{if(!shown&&this.battle===finishedBattle)this.returnOriginalBattleScreen(finishedBattle);});
          else if(!event.won&&!event.multiplayer&&!event.tunnel)this.beginOriginalLoss(event).then(shown=>{if(!shown&&this.battle===finishedBattle)this.returnOriginalBattleScreen(finishedBattle);});
          else this.showResult(event);
        }
      }, 0);
    }
  }
  renderHUD() { this.originalHUD?.render(); }
  renderParty() { this.renderHUD(); }
  renderInspector() { this.originalBattlePokemon?.render?.(); }
  renderAll() { this.renderHUD(); }
  manageMoves() {
    const p = this.selected,
      s = this.data.species[p.speciesId];
    const available = [
      ...new Set(
        s.learnset.filter((m) => m.level <= p.level).map((m) => m.moveId),
      ),
    ];
    this.openModal(
      `<span class="eyebrow">MOVE TRAINING</span><h2>${escape(s.name)}'s moves</h2><p>Choose a move to replace. Relearning an older move costs ₽ 1,000. Moves learned at the current level are free.</p><select id="replace-slot" class="search-box" aria-label="Move to replace">${p.moves.map((id, i) => `<option value="${i}">${escape(this.data.moves[id].name)}</option>`).join("")}${p.moves.length < 4 ? `<option value="${p.moves.length}">Empty slot</option>` : ""}</select><div class="move-buttons">${available
        .map((id) => {
          const move = this.data.moves[id],
            supported = moveFidelity(move).supported,
            free = s.learnset.some(
              (m) => m.moveId === id && m.level === p.level,
            );
          return `<button data-learn="${id}" ${p.moves.includes(id) || !supported || (!free && this.save.money < 1000) ? "disabled" : ""}>${escape(move.name)}<small>${!supported ? "Not yet ported" : p.moves.includes(id) ? "Known" : free ? "Free" : "₽ 1,000"}</small></button>`;
        })
        .join(
          "",
        )}</div><div class="dialog-actions"><button id="field-moves">Field moves · Cut &amp; Flash</button></div>`,
    );
    $("#field-moves").onclick = () => this.openFieldMoves();
    document.querySelectorAll("[data-learn]").forEach(
      (b) =>
        (b.onclick = () => {
          const id = Number(b.dataset.learn),
            free = s.learnset.some(
              (m) => m.moveId === id && m.level === p.level,
            );
          if (!free) this.save.money -= 1000;
          p.moves[Number($("#replace-slot").value)] = id;
          p.selectedMove = id;
          this.battle.syncPokemon(p);
          this.renderAll();
          this.store();
          this.closeModal();
          this.toast(`${s.name} learned ${this.data.moves[id].name}.`);
        }),
    );
  }
  openCampaign(preview = false) {
    if (this.openOriginalCampaign) return this.openOriginalCampaign(preview);
    const campaignSave = this.previewMode ? this.primarySave : this.save;
    this.openModal(
      `<span class="eyebrow">KANTO REGION</span><h2>${preview ? "Recovered stage preview" : "Choose your next battle"}</h2><p>${preview ? "Inspect the original maps using a temporary copy of your profile." : "Replay stages to catch Pokémon and train your team."}</p><div class="campaign-grid">${this.levels
        .map((l) => {
          const map = this.assets.maps[l.background],
            locked = !preview && l.id > campaignSave.unlocked && !(campaignSave.unlocked>=37 && l.id<=39);
          return `<button class="stage-card" data-stage="${l.id}" ${locked ? "disabled" : ""}><img src="assets/${map.file}" alt="" loading="lazy"><b>${String(l.id).padStart(2, "0")} ${campaignSave.completed.includes(l.id) ? "✓" : locked ? "· Locked" : ""}</b><span>${escape(l.displayName ?? `Stage ${l.id}`)}${!["defense", "invasion", "safari"].includes(l.mode) ? " *" : ""}</span></button>`;
        })
        .join(
          "",
        )}</div><p class="muted">* Includes story scenes or special stage rules.</p><div class="dialog-actions"><button id="back-to-battle">Back to battle</button></div>`,
    );
    $("#back-to-battle").onclick = () => this.closeModal();
    document.querySelectorAll("[data-stage]").forEach(
      (b) =>
        (b.onclick = () => {
          const id = Number(b.dataset.stage);
          if (["running", "paused"].includes(this.battle.state)) {
            this.openModal(
              `<h2>Leave this battle?</h2><p>Your Pokémon, captures, and experience will be saved. This battle will restart when you return.</p><div class="dialog-actions"><button id="stay">Keep playing</button><button class="primary" id="leave">Leave battle</button></div>`,
            );
            $("#stay").onclick = () => this.closeModal();
            $("#leave").onclick = () => {
              this.store();
              this.loadLevel(id, preview);
              this.closeModal();
            };
          } else {
            this.loadLevel(id, preview);
            this.closeModal();
          }
        }),
    );
  }
  openCollection(query = "") {
    const busy = ["running", "paused"].includes(this.battle.state);
    this.openModal(
      `<span class="eyebrow">POKÉMON STORAGE</span><h2>Your Pokémon <span class="muted">${this.save.pokemon.length}</span></h2><p>${busy ? "The party is fixed during a battle. Captured Pokémon fill empty party slots." : "Click a Pokémon to move it between storage and your party. You can bring up to six."}</p><input id="collection-search" class="search-box" placeholder="Search Pokémon…" aria-label="Search Pokémon"><div class="collection-grid" id="collection-grid"></div><div class="collection-footer" id="collection-footer"></div>`,
    );
    const render = () => {
      const term = $("#collection-search").value.toLowerCase();
      const list = this.save.pokemon.filter((p) =>
        (p.nickname||this.data.species[p.speciesId].name).toLowerCase().includes(term),
      );
      $("#collection-grid").innerHTML =
        list
          .map((p) => {
            const active = this.save.party.includes(p.uid);
            return `<div class="storage-entry"><button class="collection-item ${active ? "in-party" : ""}" data-storage="${escape(p.uid)}" ${busy ? "disabled" : ""}>${this.sprite(p, 50)}<strong>${escape(this.data.species[p.speciesId].name)}${p.shiny ? " ✦" : ""}</strong><small>Lv. ${p.level} · ${active ? "In party" : "In storage"}</small></button><button class="storage-details" data-details="${escape(p.uid)}" ${busy?"disabled":""}>Summary · Moves · Items</button></div>`;
          })
          .join("") || "<p>No matching Pokémon.</p>";
      document.querySelectorAll("[data-details]").forEach(b=>b.onclick=()=>this.openPokemonDetails(b.dataset.details));
      $("#collection-footer").textContent =
        `Party ${this.save.party.filter(Boolean).length} / 6 · Collection ${this.save.pokemon.length}`;
      document.querySelectorAll("[data-storage]").forEach(
        (b) =>
          (b.onclick = () => {
            const uid = b.dataset.storage,
              index = this.save.party.indexOf(uid);
            if (index >= 0) {
              if (this.save.party.filter(Boolean).length === 1) {
                this.toast("Keep at least one Pokémon in your party.");
                return;
              }
              this.battle.recall(uid);
              this.save.party[index] = null;
            } else {
              if (this.save.party.filter(Boolean).length >= 6) {
                this.toast(
                  "Your party is full. Move a Pokémon to storage first.",
                );
                return;
              }
              this.save.party[this.save.party.indexOf(null)] = uid;
            }
            if (!this.save.party.includes(this.selectedUid))
              this.selectedUid = this.save.party[0];
            this.store();
            this.renderAll();
            render();
          }),
      );
    };
    $("#collection-search").value = query;
    $("#collection-search").oninput = render;
    render();
  }
  openSettings() {
    this.openModal(
      `<span class="eyebrow">LOCAL GAME</span><h2>Settings &amp; saves</h2><div class="settings-row"><label for="sound-toggle">Original music &amp; sound effects</label><button id="sound-toggle">${this.save.settings.sound ? "On" : "Off"}</button></div><div class="dialog-actions"><button id="profile-menu">Profiles &amp; local services</button><button id="export-save">Export save</button><button id="import-save">Import save</button><button id="help">How to play</button></div><p class="muted">Import accepts this port's JSON backups and the original local server's *_pokemon_slotN.json files. Legacy Pokémon import preserves species, level, moves, and appearance; use the included migration tool with the matching account JSON to also recover inventory, progress and badges.</p><div class="dialog-actions"><button id="restart-battle">Restart battle</button><button id="new-game" class="danger">New game</button></div>`,
    );
    $("#sound-toggle").onclick = () => {
      this.save.settings.sound = !this.save.settings.sound;
      this.scene?.updateMusic();
      this.store();
      $("#sound-toggle").textContent = this.save.settings.sound ? "On" : "Off";
    };
    $("#profile-menu").onclick=()=>this.openMainMenu();
    $("#export-save").onclick = () => this.exportSave();
    $("#import-save").onclick = () => $("#import-file").click();
    $("#restart-battle").onclick = () => {
      if(this.battle.isChallenge){this.loadChallenge(this.battle.challengeId);return;}
      else if(this.battle.isMultiplayer)this.loadMultiplayer(this.battle.multiplayerMode);
      else this.loadLevel(this.tunnel ? 17 : this.battle.level.id, this.previewMode);
      this.closeModal();
    };
    $("#help").onclick = () => this.openHelp();
    $("#new-game").onclick = () => {
      this.openModal(
        '<h2>Start a new adventure?</h2><p>This replaces the Phaser save on this device. Export a backup to keep your current collection.</p><div class="dialog-actions"><button id="new-backup">Export backup</button><button id="cancel-new">Cancel</button><button class="danger" id="confirm-new">Start new game</button></div>',
      );
      $("#new-backup").onclick = () => this.exportSave();
      $("#cancel-new").onclick = () => this.closeModal();
      $("#confirm-new").onclick = () => {
        this.hasProfile = false;
        this.previewMode = false;
        this.primarySave = null;
        this.openStarter();
      };
    };
  }
  openHelp() {
    this.openOriginalScreen(`<div class="local-help" style="padding:28px;color:white;font:18px Arial;line-height:1.4"><h2>How to play</h2><p>Choose a stage, arrange your party, and press Start. The original introduction and Ready/Go sequence begin the battle.</p><p>Drag a party portrait onto a highlighted spot. Click a deployed party portrait to change moves, targeting, or level up. Drag a Pokémon on the map to move it; release away from valid spots to recall it.</p><p>Drag the Poké Ball onto a weakened enemy to catch it. Drag a potion onto an injured Pokémon to heal it. In invasion stages, choose a path and click a party portrait to send it.</p><p>Space, P, or Escape pause and resume. Keys 1–4 set speed. Keys 0, 9, 8, 7 set zoom to 100%, 75%, 50%, 25%. Drag the map or use arrows/WASD to pan.</p><button id="help-back">Back</button></div>`);
    $("#modal-close").hidden=true;
    $("#help-back").onclick=()=>this.hasProfile?this.openMainMenu():this.openTitle();
  }
  openAbout() {
    this.openModal(
      `<span class="eyebrow">NATIVE PHASER 3 PORT</span><h2>Pokémon Tower Defense</h2><p>Converted from the supplied Flash game into JavaScript and Phaser 3.</p><ul class="report-list"><li>Original maps, 536 Pokémon sprite sheets, HUD, music and animated story scenes.</li><li>All 433 original move classes, status effects, abilities and boss AI executed by the native engine.</li><li>42 campaign stages, six challenges, Safari Zone, Rock Tunnel, shops, TMs, evolution, achievements and saved profiles.</li><li>Trading, mystery gifts and two-player versus/co-op recreated locally.</li></ul><div class="dialog-actions"><button id="browse-recovered">Browse recovered stages</button><button id="about-help">How to play</button></div><p class="muted">Original game by Sam &amp; Dan Games. Pokémon characters and assets retain their original rights. See the included validation record for tested coverage.</p>`,
    );
    $("#browse-recovered").onclick = () => this.openCampaign(true);
    $("#about-help").onclick = () => this.openHelp();
  }
  showResult(event) {
    if(event.multiplayer){this.showMultiplayerResult(event);return;}
    if(event.challengeId){this.showChallengeResult(event);return;}
    if (event.tunnel) {
      this.showTunnelResult(event);
      return;
    }
    this.returnOriginalBattleScreen(this.battle);
  }
}

const app = new App();
app.init().catch((error) => {
  console.error(error);
  $("#loading").textContent =
    `Could not start: ${error.message}. Run this folder with npm run dev.`;
});
