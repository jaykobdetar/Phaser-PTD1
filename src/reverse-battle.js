import { Battle } from "./battle.js";
import { createWave } from "./waves-runtime.js";
import { followPath } from "./model.js";

/** Original PTD class_949 invasion rules, including Saffron Dojo bonuses.
 * Fixed defenders stay in .towers; the player's travelling Pokémon are .enemies
 * with playerControlled=true and partyUid pointing to the saved Pokémon.
 */
export class ReverseBattle extends Battle {
  constructor(data, level, save, emit = () => {}, options = {}) {
    super(data, level, save, emit, options);
    this.energy = level.energy ?? 120;
    this.launchCost = level.launchCost ?? 20;
    this.bonuses = { hp: 1, speed: 1, defense: 1, specialDefense: 1 };
    this.awardedCandy = new Set();
    this.firstStolenCandy = null;
    this.achievementEligible = true;
    this.initialEvents = [];
    const callback = this.emit;
    this.emit = (type, details) => this.initialEvents.push([type, details]);
    try {
      this.prepareDefenders();
    } catch (error) {
      this.fail(error);
    }
    this.emit = callback;
  }

  get currentWave() {
    return 0;
  }
  get totalWaves() {
    return 0;
  }
  get stolenCandy() {
    return this.candies.filter((candy) => candy.state === "lost").length;
  }
  available(uid) {
    return (
      this.partyMembers.some((p) => p.uid === uid) &&
      !this.enemies.some((p) => p.partyUid === uid && p.alive)
    );
  }

  prepareDefenders() {
    this.wave = createWave(this.level.className ?? this.level.id, {
      seed: this.options.seed,
      version: this.options.version ?? this.save.gameVersion ?? 1,
      onEvent: event => this.handleWaveEvent(event),
    });
    for (const {
      spot: spotIndex,
      profile: original,
    } of this.wave.presetTowers()) {
      const spot = this.level.spots.find((point) => point.index === spotIndex);
      if (!spot)
        throw new Error(
          `Original defender slot ${spotIndex} is absent from ${this.level.className}.`,
        );
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
        target: "first",
      };
      const tower = this.fighter(profile, {
        uid: `defender-${this.serial++}`,
        team: "tower",
        original,
        fixed: true,
        npc: true,
        placed: true,
        spotIndex,
        x: spot.x,
        y: spot.y,
        direction: "front",
        cooldown:
          this.data.moves[profile.selectedMove]?.initialCooldownFrames ?? 18,
      });
      tower.stats = originalStats(original);
      tower.maxHp = Math.max(
        1,
        Math.floor(
          (Math.floor((2 * original.base_HP * original.level) / 100) +
            10 +
            original.level) *
            (original.var_655 || 1),
        ),
      );
      tower.hp = tower.maxHp;
      this.towers.push(tower);
      this.emit("place", { tower });
    }
  }

  start() {
    if (this.state !== "ready") return false;
    this.state = "running";
    for (const [type, details] of this.initialEvents) this.emit(type, details);
    this.initialEvents.length = 0;
    this.emit("energy", { energy: this.energy, launchCost: this.launchCost });
    this.emit("start", {});
    return true;
  }

  // Invasion uses party launch buttons, never movable defending towers.
  place() {
    return false;
  }
  recall() {
    return false;
  }
  canCapture() {
    return false;
  }
  capture() {
    return {
      ok: false,
      message: "Catching Pokémon is unavailable in the original invasion mode.",
    };
  }

  launch(uid, pathName = "p") {
    const reject = (message) => {
      this.emit("launch-rejected", { message });
      return false;
    };
    if (this.state !== "running")
      return reject("Start or resume the invasion before sending a Pokémon.");
    const profile = this.partyMembers.find((p) => p.uid === uid);
    if (!profile) return reject("Choose a Pokémon from the current party.");
    if (!this.available(uid))
      return reject("That Pokémon is already on the route.");
    if (this.energy < this.launchCost)
      return reject(`Sending a Pokémon costs ${this.launchCost} energy.`);
    const path = this.level.paths[pathName];
    if (!path?.length)
      return reject("Choose one of this stage’s original paths.");
    const species = this.data.species[profile.speciesId];
    if (!species)
      return reject("This Pokémon is absent from the recovered game data.");
    const straightThrough =
      this.level.attackerFreeRoam ??
      /^class_11(?:1[5-9]|20|21)$/.test(this.level.className ?? "") ??
      false;
    const original = {
      num: profile.speciesId,
      level: profile.level,
      shiny: profile.shiny || 0,
      ...Object.fromEntries(
        profile.moves.map((move, i) => [`move${i + 1}`, move]),
      ),
      moveSelected: Math.max(
        1,
        profile.moves.indexOf(profile.selectedMove) + 1,
      ),
      numMoves: profile.moves.length,
      base_HP: species.stats.hp,
      base_Attack: species.stats.attack,
      base_Defense: species.stats.defense,
      base_Special_Attack: species.stats.specialAttack,
      base_Special_Defense: species.stats.specialDefense,
      speed: species.stats.speed,
      canCapture: false,
      freeRoam: straightThrough,
      runAway: this.level.attackerRunAway ?? !straightThrough,
      var_107: false,
      var_655: this.bonuses.hp,
      mod_Speed: this.bonuses.speed,
      mod_Defense: this.bonuses.defense,
      mod_Special_Defense: this.bonuses.specialDefense,
      reward: 0,
      base_Experience: 0,
    };
    const attacker = this.fighter(profile, {
      uid: `attacker-${this.serial++}`,
      partyUid: uid,
      playerControlled: true,
      team: "enemy",
      original,
      x: path[0].x,
      y: path[0].y,
      path: [...path],
      fullPath: [...path],
      pathName,
      point: 1,
      outward: true,
      speed: original.speed / 10,
      freeRoam: original.freeRoam,
      runAway: original.runAway,
      canCapture: false,
      candy: null,
      scale: 1,
      direction: path[0].direction ?? "front",
      cooldown:
        (this.data.moves[profile.selectedMove]?.initialCooldownFrames ?? 18) +
        Math.floor(this.rng() * 18),
    });
    attacker.stats = originalStats(original);
    attacker.modifiers = {
      speed: this.bonuses.speed,
      defense: this.bonuses.defense,
      specialDefense: this.bonuses.specialDefense,
    };
    attacker.maxHp = Math.max(1, Math.floor(attacker.maxHp * this.bonuses.hp));
    attacker.hp = attacker.maxHp;
    this.energy -= this.launchCost;
    if (profile.level > 70) this.achievementEligible = false;
    this.enemies.push(attacker);
    this.hadEnemies = true;
    this.emit("spawn", { enemy: attacker });
    this.emit("launch", { enemy: attacker, profile, path: pathName });
    this.emit("energy", { energy: this.energy, launchCost: this.launchCost });
    return true;
  }

  syncPokemon(profile) {
    const attacker = this.enemies.find((p) => p.partyUid === profile.uid);
    if (!attacker) return;
    if (profile.selectedMove !== attacker.selectedMove && this.isMoveLocked(attacker)) profile.selectedMove = attacker.selectedMove;
    attacker.moves = profile.moves;
    attacker.selectedMove = profile.selectedMove;
    attacker.target = profile.target;
    this.emit("refresh", { tower: attacker, enemy: attacker });
  }

  defeat(attacker) {
    if (!attacker.alive) return;
    this.stats.defeated++;
    this.dropCandy(attacker);
    this.emit("defeat", { enemy: attacker, reward: 0 });
    this.remove(attacker);
  }

  remove(attacker) {
    super.remove(attacker);
    // class_949.reset_Attacker releases the party member for another launch.
    // Saffron bonuses are checked on every returned/defeated attacker.
    this.awardDojoBonuses();
    this.emit("attacker-returned", { partyUid: attacker.partyUid });
  }

  awardDojoBonuses() {
    if (this.level.className !== "level_26" && this.level.id !== 26) return;
    for (const candy of this.candies) {
      if (candy.state !== "lost" || this.awardedCandy.has(candy.id)) continue;
      this.awardedCandy.add(candy.id);
      this.firstStolenCandy ??= candy.id + 1;
      const number = candy.id + 1;
      if (number === 1) {
        this.bonuses.hp = 3;
        this.energy += 100;
      }
      if (number === 2) {
        this.bonuses.speed = 1.5;
        this.energy += 200;
      }
      if (number === 3) {
        this.bonuses.specialDefense = 1.5;
        this.energy += 300;
      }
      this.emit("invasion-bonus", {
        candy: number,
        bonuses: { ...this.bonuses },
        energy: this.energy,
      });
    }
    this.emit("energy", { energy: this.energy, launchCost: this.launchCost });
  }

  escape(attacker) {
    if (attacker.candy) {
      attacker.candy.state = "lost";
      attacker.candy.carrier = null;
      attacker.candy = null;
      this.emit("candy", {});
    }
    this.remove(attacker);
  }

  forward(attacker) {
    attacker.path = [...attacker.fullPath];
    attacker.point = 1;
    attacker.outward = true;
    attacker.turnedAround = false;
    attacker.sourcePassedEnd = false;
  }

  tickRunning() {
    this.frame++;
    for (const defender of this.towers) {
      if (defender.alive && defender.placed) {
        this.tickBeforeMovement(defender);
        this.attack(defender, this.enemies);
        this.moveRuntime?.collide(defender);
      }
    }
    for (const attacker of [...this.enemies]) {
      if (!attacker.alive) continue;
      this.tickBeforeMovement(attacker);
      if (!attacker.alive) continue;
      const statusSpeed = Object.values(attacker.effects).reduce(
        (value, effect) => value * (effect.speedMultiplier ?? 1),
        1,
      );
      let completed = followPath(
        attacker,
        attacker.speed *
          Math.max(0, attacker.modifiers.speed ?? 1) *
          statusSpeed * (this.moveRuntime?.actor(attacker).modAttackSpeed ?? 1),
        () => this.collectCandy(attacker),
      );
      if (completed && attacker.alive) {
        if (attacker.outward) {
          if (attacker.freeRoam) this.escape(attacker);
          else this.turnAround(attacker);
        } else if (attacker.freeRoam) this.forward(attacker);
        else if (attacker.runAway) this.escape(attacker);
        else {
          if (attacker.candy) {
            attacker.candy.state = "lost";
            attacker.candy.carrier = null;
            attacker.candy = null;
            this.awardDojoBonuses();
            this.emit("candy", {});
          }
          this.forward(attacker);
        }
      }
      if (attacker.alive) {
        this.tickAfterMovement(attacker);
        if (this.moveRuntime || this.data.moves[attacker.selectedMove]?.onSelf || attacker.original.var_107) this.attack(attacker, this.towers);
        this.moveRuntime?.collide(attacker);
      }
    }
    this.moveRuntime?.tickWorld();
    if (this.stolenCandy >= this.candies.length) {
      if (
        (this.level.id === 26 || this.level.className === "level_26") &&
        this.achievementEligible &&
        this.firstStolenCandy === 4
      )
        this.awardAchievement(6);
      this.finish(true);
      return;
    }
    if (this.energy === 0 && this.enemies.length === 0) {
      this.finish(false);
      return;
    }
    if (this.frame % 10 === 0) this.emit("update", {});
  }
}

function originalStats(profile) {
  return {
    hp: profile.base_HP,
    attack: profile.base_Attack,
    defense: profile.base_Defense,
    specialAttack: profile.base_Special_Attack,
    specialDefense: profile.base_Special_Defense,
    speed: profile.speed,
  };
}
