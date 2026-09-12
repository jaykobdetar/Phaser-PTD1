import { Battle } from "./battle.js";
import { damage, makePokemon, MAX_COLLECTION_SIZE } from "./model.js";

/** Source level_29. This temporary profile is never added to a save. */
export function createSafariJoey() {
  return {
    uid: "safari-joey",
    speciesId: 1000,
    level: 35,
    experience: 0,
    moves: [398, 397],
    selectedMove: 398,
    shiny: 0,
    target: "first",
    temporary: true,
    nickname: "Joey",
  };
}

export const SAFARI_MOVES = Object.freeze({ bait: 398, rock: 397 });
const recognized = (id) => id === 397 || id === 398;
const existing = (fighter, key) => Boolean(fighter?.effects?.[key]);

/** Resolve the source class_385/class_331 hit behavior, at projectile impact.
 * Rock damage is calculated at launch and supplied as damageResult.
 * Bait deliberately causes no HP damage, despite its class_194 ancestry.
 */
export function safariImpactEffects({
  moveId,
  source,
  target,
  damageResult,
  rng = Math.random,
}) {
  if (!recognized(moveId)) return { supported: false, effects: [] };
  if (!source?.alive || !target?.alive) return { supported: true, effects: [] };
  const effects = [];
  function speed(multiplier, durationFrames, key, oppositeKey) {
    if (existing(target, oppositeKey))
      effects.push({
        kind: "remove-effect",
        target: "target",
        key: oppositeKey,
      });
    else if (!existing(target, key))
      effects.push({
        kind: "modifier",
        target: "target",
        stat: "speed",
        multiplier,
        durationFrames,
        key,
        oppositeKey,
        stack: false,
      });
  }
  if (moveId === 398) {
    if (!existing(target, "flinch"))
      effects.push({
        kind: "status",
        target: "target",
        status: "flinch",
        durationFrames: 36,
        speedMultiplier: 0.0001,
      });
    speed(0.5, 1800, "speed-down", "speed-up");
  } else {
    if (!Number.isFinite(damageResult?.amount))
      throw new Error("Safari Rock requires its original damage calculation.");
    effects.push({ kind: "damage", target: "target", ...damageResult });
    if (Math.floor(rng() * 100) + 1 <= 30)
      speed(2, 72, "speed-up", "speed-down");
  }
  return { supported: true, effects };
}

/** Original projectiles are children of Joey, move 23 px on each axis per tick,
 * follow the previous tick's target offset, and resolve one tick after arrival.
 */
export function createSafariProjectile(source, target, move, damageResult) {
  if (!recognized(move?.id)) throw new Error("Not a Safari action.");
  return {
    source,
    target,
    move,
    damageResult,
    x: 0,
    y: 0,
    targetX: target.x - source.x,
    targetY: target.y - source.y,
    speed: 23,
    arrived: false,
    done: false,
    age: 0,
  };
}

export function tickSafariProjectile(projectile, rng = Math.random) {
  if (projectile.done) return [];
  const { source, target } = projectile;
  if (!source.alive || source.placed === false || !target.alive) {
    projectile.done = true;
    return [];
  }
  projectile.age++;
  if (projectile.arrived) {
    projectile.done = true;
    return safariImpactEffects({
      moveId: projectile.move.id,
      source,
      target,
      damageResult: projectile.damageResult,
      rng,
    }).effects;
  }
  if (Math.abs(projectile.y - projectile.targetY) < projectile.speed)
    projectile.y = projectile.targetY;
  if (Math.abs(projectile.x - projectile.targetX) < projectile.speed)
    projectile.x = projectile.targetX;
  if (
    projectile.x === projectile.targetX &&
    projectile.y === projectile.targetY
  )
    projectile.arrived = true;
  else {
    projectile.x +=
      Math.sign(projectile.targetX - projectile.x) * projectile.speed;
    projectile.y +=
      Math.sign(projectile.targetY - projectile.y) * projectile.speed;
  }
  projectile.targetX = target.x - source.x;
  projectile.targetY = target.y - source.y;
  return [];
}

/** Safari delegates the original 419-encounter/60-wave schedule to Battle's
 * existing class_39 runtime. Only the temporary party and two Safari moves are
 * specialized, so every other unavailable-move gate remains unchanged.
 */
export class SafariBattle extends Battle {
  constructor(data, level, save, emit = () => {}, options = {}) {
    if (
      level?.mode !== "safari" ||
      Number(level.progressionId ?? level.id) !== 29
    )
      throw new Error("SafariBattle is only for source level29 (Safari Zone).");
    super(data, level, save, emit, options);
    this.joey = createSafariJoey();
    this.projectiles = [];
    this.safariClosed = false;
    this.originalParty = [...save.party];
  }

  get party() {
    return this.joey && !this.safariClosed ? [this.joey, null, null, null, null, null] : super.party;
  }

  place(uid, spotIndex) {
    if (this.safariClosed || uid !== this.joey.uid) return false;
    const first = !this.towers.some((t) => t.uid === uid);
    const placed = super.place(uid, spotIndex);
    if (placed && first) {
      const tower = this.towers.find((t) => t.uid === uid);
      const move = this.data.moves[tower.selectedMove];
      tower.cooldown =
        (move.initialCooldownFrames ?? move.cooldownFrames) +
        Math.floor(this.rng() * 18);
    }
    return placed;
  }

  setSafariAction(action) {
    const moveId =
      typeof action === "string" ? SAFARI_MOVES[action] : Number(action);
    if (this.safariClosed || !recognized(moveId)) return false;
    this.joey.selectedMove = moveId;
    const tower = this.towers.find((t) => t.uid === this.joey.uid);
    if (tower) {
      tower.selectedMove = moveId;
      tower.cooldown =
        this.data.moves[moveId].initialCooldownFrames ??
        this.data.moves[moveId].cooldownFrames;
      this.emit("refresh", { tower });
    }
    this.emit("safari-action", { moveId, profile: this.joey });
    return true;
  }

  attack(source, targets) {
    if (source.speciesId !== 1000 || source.uid !== this.joey.uid)
      return super.attack(source, targets);
    if (
      this.safariClosed ||
      !source.alive ||
      source.cooldown > 0 ||
      source.effects.sleep ||
      source.effects.freeze ||
      source.effects.flinch
    )
      return;
    const move = this.data.moves[source.selectedMove];
    if (!recognized(move?.id)) {
      this.warn("Joey can use only the original Safari Bait and Rock actions.");
      return;
    }
    const target = this.selectTargets(source, targets)[0];
    if (!target) return;
    source.cooldown = move.cooldownFrames;
    if (
      !move.cantMiss &&
      Math.floor(this.rng() * 100) + 1 >
        ((move.accuracy ?? 100) * (source.modifiers.accuracy ?? 1)) /
          (target.modifiers.evasion ?? 1)
    ) {
      this.emit("miss", { source, target, move });
      return;
    }
    if (target.effects.protect) return;
    // The original Bait class calculates power0 damage, consuming a critical
    // roll, then discards it. Calling damage here preserves that RNG step.
    const result = damage(this.data, source, target, move, this.rng);
    const projectile = createSafariProjectile(source, target, move, result);
    this.projectiles.push(projectile);
    this.emit("safari-projectile", { projectile, source, target, move });
  }

  tick() {
    if (this.state !== "running" || this.safariClosed) return;
    for (const projectile of this.projectiles) {
      for (const effect of tickSafariProjectile(projectile, this.rng))
        this.applyEffect(
          effect,
          projectile.source,
          projectile.target,
          projectile.move,
        );
    }
    this.projectiles = this.projectiles.filter((p) => !p.done);
    super.tick();
  }

  capture(uid) {
    if (this.safariClosed || !["running", "paused"].includes(this.state))
      return {
        ok: false,
        message: "Start the Safari visit before catching Pokemon.",
      };
    if (this.save.pokemon.length >= MAX_COLLECTION_SIZE)
      return { ok: false, message: "Your collection is full (5,000 Pokémon). Release or transfer a Pokémon before catching another." };
    const enemy = this.enemies.find((e) => e.uid === uid);
    if (!enemy || !this.canCapture(enemy))
      return {
        ok: false,
        message: enemy?.canCapture
          ? "Weaken this Pokemon until its HP bar turns red (20%)."
          : "This Pokemon cannot be caught.",
      };
    const profile = makePokemon(this.data, enemy.speciesId, enemy.level, {
      shiny: enemy.shiny,
      moves: enemy.moves.length ? [...enemy.moves] : [1],
      selectedMove: enemy.selectedMove,
    });
    this.save.pokemon.push(profile);
    // Source level_29.add_To_Party is deliberately empty. Do not call the
    // ordinary Battle.capture path, which can append to the saved party.
    this.stats.captured++;
    this.dropCandy(enemy);
    this.remove(enemy);
    this.emit("capture", { enemy, profile, safari: true });
    return { ok: true, profile };
  }

  dispose() {
    if (this.safariClosed) return;
    this.safariClosed = true;
    this.projectiles.length = 0;
    super.dispose();
    // save.party was never replaced: leaving restores its view without a save
    // mutation or risking persistent Joey entries in backups.
    this.emit("safari-exit", { party: [...this.save.party] });
  }
}
