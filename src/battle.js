import { createWave, WAVE_FPS } from "./waves-runtime.js";
import {
  damage,
  effectiveness,
  followPath,
  hitPoints,
  makePokemon,
  MAX_COLLECTION_SIZE,
  xpRequired,
} from "./model.js";
import { resolveMoveEffects } from "./move-effects.js";
import { abilityAccuracy, abilityAllowsEffect, hasSourceEffect, tickAbility } from './abilities.js';
import { initializeBossAI, tickBossAI } from './boss-ai.js';
import { createMoveRuntime } from './move-native.js';
import { partyProfiles, addPartyMember, removePartyMember } from './party-slots.js';

export { WAVE_FPS };
export const RANGE = 140;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

export class Battle {
  constructor(data, level, save, emit = () => {}, options = {}) {
    this.data = data;
    this.level = level;
    this.save = save;
    this.emit = emit;
    this.state = "ready";
    this.frame = 0;
    this.enemies = [];
    this.towers = [];
    this.potions = 6;
    this.stats = { defeated: 0, captured: 0, earned: 0 };
    this.serial = 0;
    this.options = options;
    this.rng = options.rng ?? Math.random;
    this.candies = Array.from({ length: level.candyCount || 1 }, (_, i) => {
      const p = level.candies[i] ??
        level.candies[0] ??
        Object.values(level.paths)[0]?.at(-1) ?? { x: 0, y: 0 };
      return { id: i, x: p.x, y: p.y, state: "ground", carrier: null };
    });
    this.warnings = new Set();
    this.hadEnemies = false;
    this.stageFacts = {};
    this.stageBaseStats = new Map();
    const hpMultiplier = { level_41: 20, class_953: 10, class_955: 10, class_958: 18 }[level.className ?? `level_${level.id}`];
    if (hpMultiplier) for (const profile of this.partyMembers) {
      const stats = this.data.species[profile.speciesId].stats;
      this.stageBaseStats.set(profile.uid, { ...stats, hp: stats.hp * hpMultiplier });
    }
    const timelines = options.timelines ?? data.timelines;
    this.moveRuntime = timelines ? createMoveRuntime(this, {
      timelines,
      onFaint: fighter => this.nativeFaint(fighter),
      onPartyRemoval: fighter => this.removePartyMember(fighter),
    }) : null;
  }

  get remainingCandy() {
    return this.candies.filter((c) => c.state !== "lost").length;
  }
  get party() {
    return partyProfiles(this.save);
  }
  get partyMembers() {
    return this.party.filter(Boolean);
  }
  get currentWave() {
    return this.wave?.currentWave ?? 0;
  }
  get totalWaves() {
    return this.wave?.totalWaves ?? this.level.totalWaves ?? 0;
  }
  warn(message) {
    if (!this.warnings.has(message)) {
      this.warnings.add(message);
      this.emit("warning", { message });
    }
  }

  handleWaveEvent(event) {
    if (event.type === 'achievement') { this.awardAchievement(event.id, event.variant); return; }
    const implementedAI = /^(?:enemy|npc)-ai\.class_(?:92|93)$/.test(event.name ?? '');
    if (event.type === 'external-hook' && !implementedAI) this.warn(`Original script hook: ${event.name}`);
    this.emit('script', implementedAI ? { ...event, implemented: true } : event);
  }

  awardAchievement(id, variant = -1, otherId = 0) {
    const achievementId = id === 1 ? 100 + variant : id;
    if (!Number.isInteger(achievementId) || achievementId < 2) return false;
    this.save.achievements ??= {};
    const newlyEarned = !this.save.achievements[achievementId];
    if (newlyEarned) this.save.achievements[achievementId] = 1;
    if (otherId && !this.save.achievements[otherId]) this.save.achievements[otherId] = 1;
    if (newlyEarned || otherId) this.emit('script', { type: 'achievement', id, variant, achievementId, otherId, newlyEarned });
    return newlyEarned;
  }

  fighter(profile, fields = {}) {
    const species = this.data.species[profile.speciesId];
    const fighter = {
      ...profile,
      profile,
      maxHp: hitPoints(species, profile.level),
      hp: hitPoints(species, profile.level),
      cooldown:
        this.data.moves[profile.selectedMove]?.initialCooldownFrames ?? 18,
      modifiers: {},
      effects: {},
      status: null,
      attackers: new Set(),
      alive: true,
      direction: "front",
      kind: fields.team,
      ...fields,
    };
    if (fields.original) {
      const original = fields.original;
      for (const [key, source] of Object.entries({ attack: 'mod_Attack', defense: 'mod_Defense', specialAttack: 'mod_Special_Attack', specialDefense: 'mod_Special_Defense', speed: 'mod_Speed', accuracy: 'mod_Accuracy', evasion: 'mod_Evasion' })) {
        if (original[source] != null) fighter.modifiers[key] = original[source];
      }
      fighter.targetType = original.targetType;
      fighter.criticalChance = original.crit_Chance ?? 6;
      if (original.types?.length) fighter.typeIds = [...original.types];
      initializeBossAI(fighter);
    }
    this.applyStageStats(fighter);
    return fighter;
  }

  applyStageStats(fighter) {
    const stats = this.stageBaseStats.get(fighter.profile?.uid ?? fighter.uid);
    if (stats && fighter.team === 'tower' && !fighter.npc) {
      // Source method_36 changes initial party base_HP; later evolution resets
      // profile base stats before a new actor is constructed on redeployment.
      fighter.stats = { ...stats };
      fighter.maxHp = hitPoints({ stats: fighter.stats }, fighter.level);
      fighter.hp = fighter.maxHp;
    }
  }

  resetAttack(fighter, moveId = fighter.selectedMove) {
    fighter.selectedMove = moveId;
    if (this.moveRuntime) { this.moveRuntime.resetAttack(fighter); return; }
    fighter.cooldown = (this.data.moves[moveId]?.initialCooldownFrames ?? 18)
      + (fighter.team === 'tower' ? 0 : Math.floor(this.rng() * 18));
    fighter.moveState = null;
  }

  nativeFaint(fighter) {
    if (!fighter.alive) return;
    if (fighter.team === 'enemy') this.defeat(fighter);
    else {
      const spot = this.moveRuntime?.actor(fighter).currentSpot;
      if (spot) spot.full = false;
      fighter.alive = false;
      fighter.placed = false;
      fighter.spotIndex = null;
      this.moveRuntime?.detach(fighter, { abandon: true });
      this.emit('faint', { tower: fighter, target: fighter });
    }
  }

  tickBeforeMovement(fighter) {
    if (this.moveRuntime) this.moveRuntime.tickBeforeMovement(fighter);
    else this.tickFighter(fighter);
  }

  tickAfterMovement(fighter) {
    if (this.moveRuntime) this.moveRuntime.tickAfterMovement(fighter);
  }

  tickFighter(fighter) {
    if (!fighter.alive) return;
    if (this.moveRuntime) { this.moveRuntime.tickFighter(fighter); return; }
    fighter.cooldown = Math.max(0, fighter.cooldown - 1);
    this.tickEffects(fighter);
    if (fighter.team === 'tower') { tickBossAI(this, fighter); tickAbility(this, fighter); }
    else { tickAbility(this, fighter); tickBossAI(this, fighter); }
  }

  place(uid, spotIndex) {
    if (this.disposed) return false;
    if (["won", "lost", "error"].includes(this.state)) return false;
    const profile = this.partyMembers.find((p) => p.uid === uid),
      spot = this.level.spots.find((s) => s.index === spotIndex);
    if (!profile || !spot || !this.isSpotEligible(profile, spotIndex)) return false;
    if (this.towers.some((t) => t.spotIndex === spotIndex && t.uid !== uid))
      return false;
    let tower = this.towers.find((t) => t.uid === uid);
    if (tower && !tower.alive) return false;
    if (tower?.recalled) {
      const previous = tower;
      tower = this.fighter(profile, { uid, team: 'tower' });
      tower.hp = Math.min(tower.maxHp, previous.hp);
      this.towers[this.towers.indexOf(previous)] = tower;
    }
    if (!tower) {
      tower = this.fighter(profile, { uid, team: "tower" });
      this.towers.push(tower);
    }
    Object.assign(tower, { x: spot.x, y: spot.y, spotIndex, placed: true });
    this.emit("place", { tower });
    return true;
  }

  isSpotEligible(profile, spotIndex) {
    const spot = this.level.spots.find(s => s.index === spotIndex);
    if (!spot || !profile) return false;
    if (this.towers.some(t => t.npc && t.spotIndex === spotIndex)
      || this.level.presetTowers?.some(t => t.spot === spotIndex)) return false;
    const parts = (spot.name ?? `spot_${spot.index}`).split('_');
    if (parts.length === 2) return true;
    const type = { rock: 10, grass: 1, flying: 6, water: 3 }[parts[2]];
    return Boolean(type && (profile.typeIds ?? this.data.species[profile.speciesId]?.typeIds ?? []).includes(type));
  }

  beginTowerDrag(uid) {
    if (this.disposed || this.towerDrag || this.state !== 'running'
      || (this.level.mode === 'invasion' && !this.canPlace)) return false;
    const profile = this.partyMembers.find(p => p.uid === uid);
    if (!profile || this.stageHooks?.dismissedParty.has(uid)) return false;
    let tower = this.towers.find(t => t.uid === uid);
    if (tower?.npc || tower && !tower.alive) return false;
    if (!tower || tower.recalled) {
      const previous = tower;
      tower = this.fighter(profile, { uid, team: 'tower', placed: false, spotIndex: null });
      if (previous) {
        tower.hp = Math.min(tower.maxHp, previous.hp);
        this.towers[this.towers.indexOf(previous)] = tower;
      } else this.towers.push(tower);
    }
    const drag = { uid, tower, originSpotIndex: tower.spotIndex ?? null, wasPlaced: Boolean(tower.placed) };
    this.towerDrag = drag;
    tower.dragging = true;
    if (this.moveRuntime) this.moveRuntime.prepareTowerDrag(tower);
    else { tower.modifiers = {}; tower.criticalChance = 6; tower.direction = 'front'; }
    this.state = 'paused';
    this.emit('state', { state: this.state });
    this.emit('tower-drag-start', drag);
    return drag;
  }

  towerDragSpots(uid = this.towerDrag?.uid) {
    const drag = this.towerDrag;
    if (!drag || drag.uid !== uid) return [];
    const matches = this.level.spots.filter(spot => this.isSpotEligible(drag.tower, spot.index)
      && (this.moveRuntime ? this.moveRuntime.spotCollision(drag.tower, spot)
        : Math.abs(drag.tower.x - spot.x) <= 25 && Math.abs(drag.tower.y - spot.y) <= 25));
    if (this.moveRuntime) {
      const actor = this.moveRuntime.actor(drag.tower);
      actor.gfx.alpha = matches.length === 1 ? 1 : 0.5;
      actor.yourRange.gotoAndStop(matches.length === 1 ? 1 : 2);
    }
    return matches;
  }

  endTowerDrag(uid, spotIndex = null) {
    const drag = this.towerDrag;
    if (!drag || drag.uid !== uid || this.disposed) return false;
    const { tower, originSpotIndex } = drag;
    this.towerDrag = null;
    tower.dragging = false;
    if (tower.alive) this.moveRuntime?.finishTowerDrag(tower);
    const result = { placed: false, swapped: null, recalled: [] };
    const destination = this.level.spots.find(s => s.index === spotIndex);
    if (!tower.alive || !destination || !this.isSpotEligible(tower, spotIndex)) {
      if (tower.alive) this.recall(uid);
      else { tower.placed = false; tower.spotIndex = null; }
      result.recalled.push(uid);
    } else {
      const occupant = this.towers.find(t => t !== tower && t.placed && t.spotIndex === spotIndex);
      const clearSpot = fighter => {
        if (this.moveRuntime) {
          const actor = this.moveRuntime.actor(fighter);
          if (actor.currentSpot) actor.currentSpot.full = false;
          actor.currentSpot = null;
        } else fighter.spotIndex = null;
      };
      const assignSpot = (fighter, spot) => {
        clearSpot(fighter);
        Object.assign(fighter, { x: spot.x, y: spot.y, spotIndex: spot.index, placed: true, recalled: false });
        // put_In_Spot moves a newly placed actor to the end of towerList.
        this.towers.splice(this.towers.indexOf(fighter), 1);
        this.towers.push(fighter);
        if (this.moveRuntime) this.moveRuntime.world.addChild(this.moveRuntime.actor(fighter));
        this.emit('place', { tower: fighter });
      };
      if (occupant) {
        clearSpot(tower);
        const origin = this.level.spots.find(s => s.index === originSpotIndex);
        if (origin && occupant.alive) {
          // The source checks the dragged Pokémon's destination eligibility,
          // then swaps the occupant without a second type check at the origin.
          assignSpot(occupant, origin);
          result.swapped = occupant.uid;
        } else {
          this.recall(occupant.uid);
          result.recalled.push(occupant.uid);
        }
      }
      if (originSpotIndex === spotIndex && drag.wasPlaced) {
        tower.x = destination.x; tower.y = destination.y;
        this.emit('refresh', { tower });
      } else assignSpot(tower, destination);
      result.placed = true;
    }
    if (this.state === 'paused') this.state = 'running';
    this.emit('state', { state: this.state });
    this.emit('tower-drag-end', { ...result, tower });
    return result;
  }

  recall(uid) {
    const tower = this.towers.find((t) => t.uid === uid);
    if (!tower) return false;
    const spot = this.moveRuntime?.actor(tower).currentSpot;
    if (spot) spot.full = false;
    tower.placed = false;
    tower.spotIndex = null;
    tower.recalled = true;
    this.moveRuntime?.detach(tower, { abandon: true });
    this.emit("recall", { tower });
    return true;
  }

  removePartyMember(fighter) {
    const uid = fighter?.partyUid ?? fighter?.profile?.uid ?? fighter?.uid;
    if (!uid || !this.save.party.includes(uid)) return false;
    removePartyMember(this.save, uid);
    if (fighter.team === 'tower') { fighter.placed = false; fighter.spotIndex = null; this.emit('recall', { tower: fighter }); }
    this.emit('party-removed', { fighter, uid, profile: fighter.profile });
    return true;
  }

  usePotion(uid) {
    const tower = this.towers.find(
      (t) => t.uid === uid && !t.npc && t.alive && t.placed,
    );
    if (
      !tower ||
      tower.hp >= tower.maxHp ||
      this.potions <= 0 ||
      this.level.mode === "invasion"
    )
      return false;
    const completedThrough = Math.max(0, this.save.unlocked - 1);
    const amount = completedThrough < 21 ? 20 : completedThrough < 36 ? 50 : tower.maxHp;
    if (this.moveRuntime) this.moveRuntime.actor(tower).take_Healing(amount);
    else tower.hp = Math.min(tower.maxHp, tower.hp + amount);
    this.potions--;
    this.emit("refresh", { tower });
    return true;
  }

  isMoveLocked(fighter) {
    if (!fighter.alive || fighter.recalled) return false;
    // Both original battle move-selection popups reject changes during Encore.
    return this.moveRuntime
      ? Boolean(this.moveRuntime.actor(fighter).check_Effects(this.moveRuntime.classes.class_797))
      : hasSourceEffect(fighter, 'class_797', 'encore');
  }

  syncPokemon(profile) {
    const tower = this.towers.find((t) => t.uid === profile.uid);
    if (!tower) return;
    if (profile.selectedMove !== tower.selectedMove && this.isMoveLocked(tower)) profile.selectedMove = tower.selectedMove;
    const leveled = tower.level !== profile.level;
    const evolved = tower.speciesId !== profile.speciesId;
    const grew = leveled || evolved;
    const changedMove = tower.selectedMove !== profile.selectedMove;
    Object.assign(tower, {
      speciesId: profile.speciesId,
      level: profile.level,
      selectedMove: profile.selectedMove,
      target: profile.target,
      moves: profile.moves,
    });
    if (changedMove) this.resetAttack(tower);
    if (this.moveRuntime && grew) {
      if (evolved) {
        const species = this.data.species[profile.speciesId];
        tower.stats = { ...species.stats };
        tower.typeIds = [...species.typeIds];
        tower.nativeBaseSpeed = species.stats.speed;
        tower.nativeName = species.name;
        if (this.stageBaseStats.has(profile.uid)) this.stageBaseStats.set(profile.uid, { ...species.stats });
        if (!tower.recalled && tower.alive) this.moveRuntime.refreshGraphic(tower);
      }
      // poke_Tower.level_Up heals existing totalLife; evolve only replaces gfx.
      // HP capacity and ability are reconstructed on redeployment.
      if (leveled && tower.alive && !tower.recalled) this.moveRuntime.actor(tower).take_Healing(tower.maxHp);
    } else if (grew) {
      tower.maxHp = hitPoints(this.data.species[profile.speciesId], profile.level);
      tower.hp = tower.maxHp;
      tower.alive = true;
      this.applyStageStats(tower);
    }
    this.emit("refresh", { tower });
  }

  start({ allowEmpty = false } = {}) {
    if (this.state !== "ready") return false;
    if (!allowEmpty && !this.towers.some((t) => t.placed && t.alive)) return false;
    this.state = "running";
    try {
      this.wave = createWave(this.level.id, {
        seed: this.options.seed,
        version: this.save.gameVersion ?? 1,
        waveClass: this.level.waveClass,
        context: {
          var_153: true,
          enemyList: this.enemies,
          towerList: this.towers,
          candyList: this.candies,
          playerProfile: {
            partyList: this.party.map((p) => p ? ({
              num: p.speciesId,
              level: p.level,
              shiny: p.shiny,
              myTag: p.myTag ?? "n",
              uid: p.uid,
              ...Object.fromEntries(p.moves.map((move, i) => ['move' + (i + 1), move])),
              is_Type: (typeId) =>
                this.data.species[p.speciesId].typeIds.includes(typeId),
            }) : null),
            fightList: [],
            currentVersion: this.save.gameVersion ?? 1,
            haveThisExtraInfo: id => this.save.originalExtraInfo?.includes(id) ?? false,
            getItemValue: id => this.save.inventory?.[id] ?? 0,
            getAchievement: id => this.save.achievements?.[id] ?? 0,
            myAvatarGender: this.save.avatar?.gender ?? 'boy',
            myAvatarStyle: this.save.avatar?.style ?? 1,
          },
        },
        onSpawn: (p, scale, path, start) => this.spawn(p, scale, path, start),
        onWave: (wave, total) => this.emit("wave", { wave, total }),
        onEvent: event => this.handleWaveEvent(event),
      });
    } catch (error) {
      this.fail(error);
      return false;
    }
    this.emit("start", {});
    return true;
  }

  togglePause() {
    if (this.state === "running") this.state = "paused";
    else if (this.state === "paused") this.state = "running";
    this.emit("state", {});
  }

  spawn(original, scale = 1, pathName = "p", startPoint = 0) {
    if (this.disposed) return;
    if (!this.data.species[original.num]) {
      this.fail(
        new Error(`Species ${original.num} is absent from the recovered data.`),
      );
      return;
    }
    const path = this.level.paths[pathName];
    if (!path?.length) {
      this.fail(
        new Error(
          `Level ${this.level.id} is missing original path ${pathName}.`,
        ),
      );
      return;
    }
    const start = Math.max(0, Math.min(path.length - 1, startPoint));
    const moves = [
      original.move1,
      original.move2,
      original.move3,
      original.move4,
    ].filter((id) => this.data.moves[id]);
    const profile = {
      speciesId: original.num,
      level: original.level,
      shiny: original.shiny || 0,
      moves,
      selectedMove: moves[(original.moveSelected || 1) - 1] ?? moves[0] ?? 1,
    };
    const enemy = this.fighter(profile, {
      uid: `enemy-${this.serial++}`,
      team: "enemy",
      original,
      x: path[start].x,
      y: path[start].y,
      path,
      originalPath: path,
      point: start + 1,
      outward: true,
      scale,
      speed: original.speed / 10,
      cooldown:
        (this.data.moves[profile.selectedMove]?.initialCooldownFrames ?? 18) +
        Math.floor(this.rng() * 18),
      canCapture: original.canCapture,
      weakened: Boolean(original.canCapture && original.shiny),
      freeRoam: original.freeRoam,
      runAway: original.runAway,
      candy: null,
      direction: path[start].direction ?? "front",
    });
    enemy.stats = {
      hp: original.base_HP,
      attack: original.base_Attack,
      defense: original.base_Defense,
      specialAttack: original.base_Special_Attack,
      specialDefense: original.base_Special_Defense,
      speed: original.speed,
    };
    enemy.maxHp = Math.max(
      1,
      Math.floor(
        (Math.floor((2 * original.base_HP * original.level) / 100) +
          10 +
          original.level) *
          (original.var_655 || 1),
      ),
    );
    enemy.hp =
      original.currentLife >= 0
        ? Math.min(original.currentLife, enemy.maxHp)
        : enemy.maxHp;
    this.enemies.push(enemy);
    this.hadEnemies = true;
    const shinyAchievement = [19, 16, 74, 41].indexOf(original.num);
    if (original.shiny === 1 && shinyAchievement !== -1) this.awardAchievement(1, shinyAchievement);
    this.emit("spawn", { enemy });
  }

  canCapture(enemy) {
    return (
      enemy.alive &&
      enemy.canCapture &&
      (enemy.shiny || enemy.hp / enemy.maxHp <= 0.2)
    );
  }

  capture(uid) {
    if (!["running", "paused"].includes(this.state))
      return {
        ok: false,
        message: "Start the battle before catching Pokémon.",
      };
    if (this.save.pokemon.length >= MAX_COLLECTION_SIZE)
      return { ok: false, message: "Your collection is full (5,000 Pokémon). Release or transfer a Pokémon before catching another." };
    const enemy = this.enemies.find((e) => e.uid === uid);
    if (!enemy || !this.canCapture(enemy))
      return {
        ok: false,
        message: enemy?.canCapture
          ? "Weaken this Pokémon until its HP bar turns red (20%)."
          : "This Pokémon cannot be caught.",
      };
    const profile = makePokemon(this.data, enemy.speciesId, enemy.level, {
      shiny: enemy.shiny,
      moves: enemy.moves.length ? [...enemy.moves] : [1],
      selectedMove: enemy.selectedMove,
    });
    this.save.pokemon.push(profile);
    addPartyMember(this.save, profile.uid);
    this.stats.captured++;
    this.dropCandy(enemy);
    this.remove(enemy);
    this.emit("capture", { enemy, profile });
    return { ok: true, profile };
  }

  remove(enemy) {
    enemy.alive = false;
    this.moveRuntime?.detach(enemy);
    const index = this.enemies.indexOf(enemy);
    if (index >= 0) this.enemies.splice(index, 1);
    this.emit("remove", { enemy });
  }

  dropCandy(enemy) {
    if (!enemy.candy) return;
    Object.assign(enemy.candy, {
      state: "ground",
      x: enemy.x,
      y: enemy.y,
      carrier: null,
    });
    enemy.candy = null;
    this.emit("candy", {});
  }

  defeat(enemy) {
    if (!enemy.alive) return;
    const species = this.data.species[enemy.speciesId];
    const reward = enemy.original.reward ?? species.reward;
    this.save.money += reward;
    this.stats.earned += reward;
    this.stats.defeated++;
    const combatContributors = this.moveRuntime?.experienceContributors(enemy) ?? [...enemy.attackers]
      .map((uid) => this.towers.find((t) => t.uid === uid))
      .filter(Boolean);
    // Recalled/redeployed combat actors can share one saved Pokémon. Award
    // that Pokémon once, through its most recent contributing actor.
    const contributors = [...new Map(combatContributors.map(tower => [tower.profile?.uid ?? tower.partyUid ?? tower.uid, tower])).values()];
    const xp = Math.floor(
      ((enemy.original.base_Experience ?? species.baseExperience) *
        enemy.level) /
        (7 * Math.max(1, contributors.length)),
    );
    for (const tower of contributors) {
      const award = xp * (tower.level <= this.level.bonusLevel ? 2 : 1);
      // The source receiver applies shiny rounding and the existing-XP gate,
      // then attaches its authored +Nxp animation to this same combat actor.
      if (this.moveRuntime) this.moveRuntime.receiveExperience(tower, award);
      else if (tower.profile.experience < xpRequired(tower.level)) {
        tower.profile.experience += Math.floor(award * (tower.profile.shiny ? 1.5 : 1));
      }
    }
    this.dropCandy(enemy);
    try {
      this.wave?.defeated(enemy.original);
      const legend = { 37: [145, 'var_695'], 38: [144, 'var_676'], 39: [146, 'var_651'] }[this.level.progressionId ?? this.level.id];
      if (legend && enemy.speciesId === legend[0]) {
        const eligible = this.wave.state.my_Parent[legend[1]] === true;
        this.stageFacts[legend[1]] = eligible;
        this.stageFacts.legendary = { speciesId: enemy.speciesId, form: this.wave.state.var_523, eligible, sourceFlag: legend[1] };
        this.emit('stage-event', { type: 'legendary-defeated', ...this.stageFacts.legendary });
      }
    } catch (error) {
      this.fail(error);
    }
    this.emit("defeat", { enemy, reward });
    this.remove(enemy);
  }

  selectTargets(source, targets) {
    let available = targets.filter(t => {
      const bounds = this.data.species[t.speciesId]?.spriteBounds ?? { width: 0, height: 0 };
      return t.alive && (t.team !== 'tower' || t.placed)
        && Math.abs(t.x - source.x) <= RANGE + bounds.width * (t.scale ?? 1) / 2
        && Math.abs(t.y - source.y) <= 134.4 + bounds.height * (t.scale ?? 1) / 2;
    });
    const preference = source.target ?? ({ 2: 'fastest', 3: 'slowest', 4: 'weakest', 5: 'strongest', 6: 'effective', 7: 'healthy', 8: 'candy', 9: 'no-candy' }[source.targetType] ?? 'first');
    const speed = fighter => (fighter.stats?.speed ?? this.data.species[fighter.speciesId]?.stats.speed ?? 0) * (fighter.modifiers.speed ?? 1);
    if (preference === 'fastest') available.sort((a, b) => speed(b) - speed(a));
    if (preference === 'slowest') available.sort((a, b) => speed(a) - speed(b));
    if (preference === "weakest")
      available.sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp);
    if (preference === "strongest")
      available.sort((a, b) => b.hp / b.maxHp - a.hp / a.maxHp);
    if (preference === 'effective') {
      const typeId = this.data.moves[source.selectedMove]?.typeId;
      const value = target => effectiveness(this.data, typeId, target.typeIds ?? this.data.species[target.speciesId]?.typeIds ?? []);
      available.sort((a, b) => value(b) - value(a));
    }
    if (preference === 'healthy') available = available.filter(target => !(target.weakened ?? this.canCapture(target)));
    if (preference === 'candy') available.sort((a, b) => Number(Boolean(b.candy)) - Number(Boolean(a.candy)));
    if (preference === 'no-candy') available.sort((a, b) => Number(Boolean(a.candy)) - Number(Boolean(b.candy)));
    if (preference === "last") available.reverse();
    // Preserve source method97's priority effects, including its duplicated
    // entry for lowered evasion (class792) when class790 is absent.
    const priority = [], normal = [];
    for (const target of available) {
      if (hasSourceEffect(target, 'class_794', 'protect') && this.data.moves[source.selectedMove]?.name !== 'Feint') continue;
      if (hasSourceEffect(target, 'class_792', 'evasion-down')) priority.push(target);
      if (hasSourceEffect(target, 'class_790', 'follow-me')) priority.push(target);
      else normal.push(target);
    }
    return priority.concat(normal);
  }

  attack(source, targets) {
    if (this.moveRuntime) {
      this.moveRuntime.attack(source, source.team === 'enemy' && this.level.mode !== 'invasion'
        ? targets.filter(target => !target.npc) : targets);
      return;
    }
    if (
      !source.alive ||
      source.cooldown > 0 ||
      (source.effects.sleep && ![341, 342].includes(source.selectedMove)) ||
      source.effects.freeze ||
      source.effects.flinch
    )
      return;
    const move = this.data.moves[source.selectedMove] ?? this.data.moves[1];
    if (move.power == null || move.cooldownFrames == null) {
      this.warn(`${move.name} requires a move-specific script.`);
      source.cooldown = 42;
      return;
    }
    const available = move.onSelf
      ? [source]
      : this.selectTargets(source, targets);
    if (!available.length) return;
    source.cooldown = move.cooldownFrames;
    for (const target of move.singleTarget
      ? available.slice(0, 1)
      : available) {
      if (
        !move.onSelf && !move.cantMiss &&
        Math.floor(this.rng() * 100) + 1 >
          (abilityAccuracy(source, move.accuracy ?? 100) * (source.modifiers.accuracy ?? 1)) /
            (target.modifiers.evasion ?? 1)
      ) {
        this.emit("miss", { target });
        continue;
      }
      if (target.effects.protect && target !== source) continue;
      const result = resolveMoveEffects({
        data: this.data,
        source,
        target,
        move,
        rng: this.rng,
        calculateDamage: (a, b, m, options) =>
          damage(this.data, a, b, m, this.rng, options),
      });
      if (result.supported) {
        for (const effect of result.effects)
          this.applyEffect(effect, source, target, move);
      } else if (result.allowGenericDamage) {
        this.applyEffect(
          {
            kind: "damage",
            target: "target",
            ...damage(this.data, source, target, move, this.rng),
          },
          source,
          target,
          move,
        );
        this.warn(
          `${move.name}: base damage is supported; special behavior remains unverified.`,
        );
      } else
        this.warn(
          `${move.name}: its special behavior is not implemented yet. Choose another move.`,
        );
    }
  }

  applyEffect(effect, source, target, move) {
    const fighter = effect.target === "source" ? source : target;
    if (!fighter.alive) return;
    if (!abilityAllowsEffect(this, source, fighter, effect)) return;
    if (effect.kind === "damage") {
      if (effect.consumesCharge) for (const [key, value] of Object.entries(source.effects)) if (key === 'charge' || key === 'class_204' || value.sourceClass === 'class_204') this.removeEffect(source, key);
      if (effect.reflectedDamage && source !== fighter && source.alive) this.applyEffect({ kind: 'damage', target: 'target', amount: effect.reflectedDamage, multiplier: 1 }, fighter, source, move);
      fighter.hp = Math.max(0, fighter.hp - effect.amount);
      if (source.team === "tower" && !source.npc && fighter.team === "enemy")
        fighter.attackers.add(source.uid);
      this.emit("hit", { ...effect, source, target: fighter, move });
      if (fighter.hp <= 0) {
        if (fighter.team === "enemy") this.defeat(fighter);
        else {
          fighter.alive = false;
          fighter.placed = false;
          fighter.spotIndex = null;
          this.emit("faint", { tower: fighter });
        }
      }
    } else if (effect.kind === "heal") {
      fighter.hp = Math.min(fighter.maxHp, fighter.hp + effect.amount);
      this.emit("status", { source, target: fighter, move });
    } else if (effect.kind === "modifier" || effect.kind === "status") {
      const key = effect.key ?? effect.status;
      if (fighter.effects[key]) return;
      fighter.effects[key] = {
        ...effect,
        left: effect.durationFrames,
        source,
        move,
        elapsed: 0,
      };
      if (effect.kind === "modifier")
        fighter.modifiers[effect.stat] =
          (fighter.modifiers[effect.stat] ?? 1) * effect.multiplier;
      if (effect.kind === "status") fighter.status = effect.status;
      if (source.team === "tower" && !source.npc && fighter.team === "enemy")
        fighter.attackers.add(source.uid);
      this.emit("status", { source, target: fighter, move });
    } else if (effect.kind === "remove-effect")
      this.removeEffect(fighter, effect.key);
    else if (effect.kind === "cure")
      effect.statuses.forEach((key) => this.removeEffect(fighter, key));
    else if (
      effect.kind === "retreat" &&
      fighter.team === "enemy" &&
      fighter.outward
    ) {
      this.turnAround(fighter);
    }
  }

  removeEffect(fighter, key) {
    const effect = fighter.effects[key];
    if (!effect) return;
    if (effect.kind === "modifier")
      fighter.modifiers[effect.stat] /= effect.multiplier;
    delete fighter.effects[key];
    if (fighter.status === key) fighter.status = null;
  }

  tickEffects(fighter) {
    for (const [key, effect] of Object.entries(fighter.effects)) {
      effect.elapsed++;
      if (
        effect.intervalFrames &&
        effect.elapsed % effect.intervalFrames === 0 &&
        (!effect.tickChance || this.rng() < effect.tickChance)
      ) {
        if (effect.damagePerTick) {
          const amount = Math.min(fighter.hp, effect.damagePerTick);
          this.applyEffect(
            { kind: "damage", target: "target", amount, multiplier: 1 },
            effect.source,
            fighter,
            effect.move,
          );
          if (effect.healSource && effect.source.alive)
            effect.source.hp = Math.min(
              effect.source.maxHp,
              effect.source.hp + amount,
            );
        }
      }
      if (
        effect.checkIntervalFrames &&
        effect.elapsed % effect.checkIntervalFrames === 0 &&
        this.rng() < effect.flinchChance
      ) {
        this.applyEffect(
          {
            kind: "status",
            target: "target",
            status: "flinch",
            durationFrames: effect.flinchDurationFrames,
            speedMultiplier: 0.0001,
          },
          effect.source,
          fighter,
          effect.move,
        );
      }
      if (--effect.left <= 0) this.removeEffect(fighter, key);
    }
  }

  tick() {
    if (this.state !== 'running') return;
    try { this.tickRunning(); } catch (error) { this.fail(error); }
  }

  tickRunning() {
    this.frame++;
    try {
      this.wave.tick();
    } catch (error) {
      this.fail(error);
      return;
    }
    for (const tower of this.towers) if (tower.placed && tower.alive) {
      this.tickBeforeMovement(tower);
      this.attack(tower, this.enemies);
      this.moveRuntime?.collide(tower);
    }
    for (const enemy of [...this.enemies]) {
      if (!enemy.alive) continue;
      this.tickBeforeMovement(enemy);
      if (!enemy.alive) continue;
      const statusSpeed = Object.values(enemy.effects).reduce(
        (v, e) => v * (e.speedMultiplier ?? 1),
        1,
      );
      let completed = followPath(
        enemy,
        enemy.speed * Math.max(0, enemy.modifiers.speed ?? 1) * statusSpeed * (this.moveRuntime?.actor(enemy).modAttackSpeed ?? 1),
        () => this.collectCandy(enemy),
      );
      if (completed && enemy.alive) {
        if (enemy.outward && !enemy.freeRoam) this.turnAround(enemy);
        else {
          if (enemy.candy) {
            enemy.candy.state = "lost";
            enemy.candy.carrier = null;
            enemy.candy = null;
            this.emit("candy", {});
          }
          if (!enemy.freeRoam && enemy.runAway === false) {
            enemy.outward = true;
            enemy.turnedAround = false;
            enemy.path = enemy.originalPath;
            enemy.point = 1;
            enemy.sourcePassedEnd = false;
          } else this.remove(enemy);
        }
      }
      if (enemy.alive) {
        this.tickAfterMovement(enemy);
        if (this.moveRuntime || enemy.original.var_107 || this.data.moves[enemy.selectedMove]?.onSelf) this.attack(enemy, this.towers);
        this.moveRuntime?.collide(enemy);
      }
    }
    this.moveRuntime?.tickWorld();
    if (!this.remainingCandy) return this.finish(false);
    if (
      this.level.requiresPartySurvival &&
      this.towers.length &&
      this.towers.every((t) => !t.alive) &&
      this.partyMembers.every((p) =>
        this.towers.some((t) => t.uid === p.uid && !t.alive),
      )
    )
      return this.finish(false);
    if (this.hadEnemies && this.enemies.length === 0) {
      try {
        this.wave.enemyCleared();
      } catch (error) {
        this.fail(error);
        return;
      }
      if (this.wave.finished) this.finish(true);
    }
    if (this.frame % 10 === 0) this.emit("update", {});
  }

  collectCandy(enemy) {
    if (enemy.candy) { enemy.candy.x = enemy.x; enemy.candy.y = enemy.y; }
    if (enemy.original.var_490) return;
    if (enemy.original.dropCandy && enemy.candy) this.dropCandy(enemy);
    if (enemy.candy || enemy.original.dropCandy) return;
    const bounds = this.data.species[enemy.speciesId].spriteBounds ?? { width: 50, height: 40 };
    const candy = this.candies.find(c => c.state === 'ground' && (this.moveRuntime?.candyCollision
      ? this.moveRuntime.candyCollision(enemy, c)
      : Math.abs(c.x - enemy.x) <= (bounds.width * (enemy.scale ?? 1) + 31.5) / 2
        && Math.abs(c.y - enemy.y) <= (bounds.height * (enemy.scale ?? 1) + 31.5) / 2));
    if (!candy) return;
    Object.assign(candy, { state: 'carried', carrier: enemy.uid });
    enemy.candy = candy;
    if (!enemy.freeRoam && enemy.outward) this.turnAround(enemy);
    this.emit('candy', {});
  }

  turnAround(enemy) {
    const oldPath = enemy.path;
    // Enemy Mirror Move can send a reversal effect at a stationary tower.
    // It has no walking route to reverse; leave its deployment untouched.
    if (!oldPath?.length) return false;
    const route = enemy.originalPath ?? enemy.fullPath ?? oldPath;
    const cardinal = Boolean(oldPath[0]?.direction);
    if (enemy.outward === false && cardinal) {
      // Source turnAround toggles: a second Roar reverses a returning traveler
      // toward the candy again, retaining the complete original route.
      const previous = oldPath[Math.min(oldPath.length - 1, Math.max(0, enemy.point - 1))];
      enemy.path = route;
      enemy.point = Math.max(1, previous.sourceIndex ?? route.length - enemy.point);
      enemy.outward = true;
      enemy.turnedAround = false;
      enemy.sourcePassedEnd = false;
      enemy.direction = route[Math.max(0, enemy.point - 1)].direction;
      return;
    }
    const last = oldPath[Math.min(oldPath.length - 1, enemy.point)];
    const end = enemy.sourcePassedEnd ? oldPath.length - 1 : Math.min(enemy.point, oldPath.length);
    enemy.outward = false;
    enemy.turnedAround = true;
    enemy.path = [
      { x: enemy.x, y: enemy.y, sourceIndex: Math.min(enemy.point, oldPath.length - 1), ...(cardinal ? { direction: last.reverseDirection, reverseDirection: last.direction } : {}) },
      ...oldPath.slice(0, end).map((point, sourceIndex) => ({ ...point, sourceIndex })).reverse().map(point => cardinal ? { ...point, direction: point.reverseDirection, reverseDirection: point.direction } : point),
    ];
    enemy.point = 1;
    enemy.sourcePassedEnd = false;
    enemy.direction = enemy.path[0].direction ?? enemy.direction;
  }

  finish(won) {
    if (this.state !== "running") return;
    this.state = won ? "won" : "lost";
    const campaignId =
      this.options.campaignId ??
      (typeof this.level.id === "number"
        ? this.level.id
        : this.level.progressionId);
    if (won && [26,27,32,33].includes(campaignId) && this.level.className === `level_${campaignId}`)
      this.stageFacts.var_334 = this.save.unlocked <= campaignId;
    if (won && !this.level.nextStageClass && this.level.mode !== "branch") {
      if (!this.save.completed.includes(campaignId))
        this.save.completed.push(campaignId);
      this.save.unlocked = Math.max(
        this.save.unlocked,
        Math.min(42, campaignId + 1),
      );
    }
    this.emit("finish", {
      won,
      stats: this.stats,
      warnings: [...this.warnings],
      nextStage: won ? this.level.nextStageClass : null,
      stageFacts: this.stageFacts,
    });
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.towerDrag = null;
    this.state = 'disposed';
    // End effects only after all actors are inactive: cleanup must never deal
    // residual damage, award XP, or change a completed/abandoned battle.
    for (const fighter of [...this.towers, ...this.enemies]) { fighter.alive = false; fighter.placed = false; }
    if (this.moveRuntime?.dispose) this.moveRuntime.dispose();
    else for (const fighter of [...this.towers, ...this.enemies]) this.moveRuntime?.detach(fighter);
    this.wave?.state?.destroy_Wave?.();
    this.wave = null;
    this.towers.length = 0;
    this.enemies.length = 0;
    this.emit = () => {};
  }

  fail(error) {
    this.state = "error";
    this.emit("error", { error });
  }
}
