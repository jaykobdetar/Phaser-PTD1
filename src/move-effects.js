import { DAMAGE_ONLY_FALLBACK_MOVE_IDS } from "./move-fidelity.js";
import { nativeMoveFidelity } from "./move-fidelity.js";
export { DAMAGE_ONLY_FALLBACK_MOVE_IDS };

/** Original PTD effect descriptors. This module never mutates fighters.
 * All durations/intervals are original game ticks; scene converts using SWF FPS.
 * resolveMoveEffects({data,source,target,move,calculateDamage,rng?,weather?})
 * calculateDamage(source,target,move,options?) -> number or {amount,...}.
 * options.ignorePositiveDefense reproduces method_3(...,...,true).
 * The scene must enforce chance, durations, one-per-effect and opposition rules.
 */
export const STATUS_ONLY_MOVE_IDS = new Set([
  2, 3, 5, 7, 12, 14, 17, 18, 23, 25, 26, 30, 36, 37, 38, 43, 47, 49, 56, 57,
  58, 60, 62, 63, 64, 65, 71, 72, 76, 78, 79, 83, 87, 101, 109, 110, 115, 120,
  141, 143, 157, 158, 170, 172, 174, 214, 215, 221, 225, 234, 261, 299, 304,
  311, 324, 339, 340, 342, 350, 392, 423, 428, 429,
]);
const BASE_DAMAGE_MOVES = new Set([
  1, 4, 6, 13, 15, 16, 31, 33, 42, 44, 48, 50, 53, 59, 66, 69, 75, 80,
]);
export const HANDLED_MOVE_IDS = new Set([
  ...BASE_DAMAGE_MOVES,
  2,
  3,
  5,
  7,
  8,
  9,
  10,
  11,
  12,
  14,
  17,
  18,
  19,
  20,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  34,
  35,
  37,
  38,
  43,
  47,
  63,
  65,
  71,
  72,
  79,
  83,
  54,
  107,
  108,
  112,
  115,
  127,
  143,
  189,
  231,
  392,
  423,
]);

export function moveFidelity(move) {
  return nativeMoveFidelity(move);
}

export function resolveMoveEffects({
  data,
  source,
  target,
  move,
  calculateDamage,
  rng = Math.random,
  weather = null,
}) {
  if (!move) return { supported: false, effects: [], reason: "Unknown move." };
  const id = Number(move.id);
  const effects = [];
  const hasType = (fighter, type) =>
    data.species[fighter?.speciesId]?.typeIds.includes(type);
  const has = (fighter, key) =>
    Boolean(fighter?.effects?.[key] || fighter?.status === key);
  const roll = (chance) => Math.floor(rng() * 100) + 1 <= chance;
  const finish = () => ({ supported: true, effects });
  const damage = (power = move.power, options = {}) => {
    if (power == null || !Number.isFinite(power))
      throw new Error(`${move.name} needs an explicit damage power.`);
    const result = calculateDamage(source, target, { ...move, power }, options);
    return typeof result === "number"
      ? { amount: Math.trunc(result) }
      : { ...result, amount: Math.trunc(result.amount) };
  };
  const hit = (power = move.power, options = {}) => {
    const result = damage(power, options);
    effects.push({ kind: "damage", target: "target", ...result });
    return result.amount;
  };
  const mod = (who, stat, multiplier, durationFrames, key, oppositeKey) => {
    const fighter = who === "source" ? source : target;
    if (has(fighter, key)) return;
    if (oppositeKey && has(fighter, oppositeKey))
      effects.push({ kind: "remove-effect", target: who, key: oppositeKey });
    else
      effects.push({
        kind: "modifier",
        target: who,
        stat,
        multiplier,
        durationFrames,
        key,
        oppositeKey,
        stack: false,
      });
  };
  const status = (name, durationFrames, extras = {}, who = "target") => {
    if (!has(who === "source" ? source : target, name))
      effects.push({
        kind: "status",
        target: who,
        status: name,
        durationFrames,
        ...extras,
      });
  };
  const poison = (power = 20, ignorePositiveDefense = false) => {
    if (hasType(target, 2) || hasType(target, 9) || has(target, "poison"))
      return;
    status("poison", 216, {
      intervalFrames: 36,
      damagePerTick: damage(power, { ignorePositiveDefense }).amount,
    });
  };
  const paralysis = () => {
    if (has(target, "paralysis")) return;
    if (has(target, "speed-up"))
      effects.push({
        kind: "remove-effect",
        target: "target",
        key: "speed-up",
      });
    else
      status("paralysis", 180, {
        speedMultiplier: 0.5,
        checkIntervalFrames: 54,
        flinchChance: 0.25,
        flinchDurationFrames: 18,
      });
  };
  const sleep = (durationFrames = 72, who = "target") =>
    status("sleep", durationFrames, { speedMultiplier: 0.0001 }, who);
  const heal = (amount) =>
    effects.push({
      kind: "heal",
      target: "source",
      amount: Math.trunc(amount),
    });

  if ([2, 17].includes(id)) {
    mod("target", "accuracy", 1 / 3, 360, "accuracy-down", "accuracy-up");
    return finish();
  }
  if ([3, 43, 72].includes(id)) {
    mod("target", "defense", 0.5, 360, "defense-down", "defense-up");
    return finish();
  }
  if (id === 5) {
    mod("target", "attack", 0.25, 1800, "attack-down", "attack-up");
    if (target?.kind !== "tower" && target?.team !== "tower" && roll(15))
      effects.push({ kind: "retreat", target: "target", durationFrames: 54 });
    return finish();
  }
  if ([7, 30].includes(id)) {
    mod("target", "speed", 0.5, 180, "speed-down", "speed-up");
    return finish();
  }
  if ([14, 18, 25].includes(id)) {
    mod(
      "source",
      "defense",
      4,
      id === 18 ? 360 : 1800,
      "defense-up",
      "defense-down",
    );
    return finish();
  }
  if (id === 12) {
    mod("source", "criticalChance", 4, 1800, "critical-up", "critical-down");
    return finish();
  }
  if (id === 423) {
    mod("source", "attack", 2, 1800, "attack-up", "attack-down");
    return finish();
  }
  if (id === 65) {
    mod("source", "speed", 2, 54, "speed-up", "speed-down");
    return finish();
  }
  if ([63, 79].includes(id)) {
    mod("source", "evasion", 3, 1800, "evasion-up", "evasion-down");
    return finish();
  }
  if ([26, 47].includes(id)) {
    sleep();
    return finish();
  }
  if ([23, 37, 71].includes(id)) {
    if (id !== 23 || !hasType(target, 14)) paralysis();
    return finish();
  }
  if (id === 24) {
    poison(move.power, true);
    return finish();
  }
  if (id === 38) {
    status("confusion", 90, {
      intervalFrames: 18,
      tickChance: 0.5,
      damagePerTick: damage(20, { ignorePositiveDefense: true }).amount,
    });
    return finish();
  }
  if (id === 9) {
    if (!hasType(target, 1) && !has(target, "leech-seed"))
      status("leech-seed", 216, {
        intervalFrames: 36,
        damagePerTick: damage().amount,
        healSource: true,
      });
    return finish();
  }
  if (id === 29 || id === 231) {
    effects.push({
      kind: "damage",
      target: "target",
      amount: id === 29 ? 40 : 20,
      multiplier: 1,
      critical: false,
      fixed: true,
    });
    return finish();
  }
  if ([115, 392].includes(id)) {
    heal(source.maxHp / 2);
    return finish();
  }
  if (id === 143) {
    effects.push({
      kind: "cure",
      target: "source",
      statuses: ["freeze", "paralysis", "poison", "burn"],
    });
    sleep(36, "source");
    heal(source.maxHp);
    return finish();
  }
  if (id === 83) {
    status("protect", 36, {}, "source");
    return finish();
  }
  if (id === 35 && target?.turnedAround) return finish();
  if ([27, 127].includes(id)) {
    const amount = hit();
    const actual = Math.min(amount, target.hp);
    const fraction = id === 27 ? 0.25 : 0.33;
    const recoil = Math.min(
      Math.trunc(actual * fraction),
      Math.trunc((actual / target.maxHp) * fraction * source.maxHp),
    );
    effects.push({
      kind: "damage",
      target: "source",
      amount: recoil,
      recoil: true,
      multiplier: 1,
      critical: false,
    });
    return finish();
  }
  if ([54, 107, 108, 189].includes(id)) {
    const amount = hit();
    // Leech Life reuses hit damage; the three ranged drains recompute their
    // heal damage in AS3 (including a separate critical roll).
    heal((id === 54 ? amount : damage().amount) / 2);
    return finish();
  }
  if ([8, 10, 11, 19, 20, 22, 28, 34, 35, 112].includes(id)) {
    if (id === 28) {
      hit(move.power, { criticalChanceMultiplier: 2 });
      return finish();
    }
    if (id === 10) {
      const factor = weather === "rain" ? 0.5 : weather === "sun" ? 1.5 : 1;
      const result = damage();
      result.amount = Math.trunc(result.amount * factor);
      effects.push({ kind: "damage", target: "target", ...result });
      if (roll(10) && !hasType(target, 4))
        status("burn", 216, {
          intervalFrames: 36,
          damagePerTick: Math.trunc(
            damage(20, { ignorePositiveDefense: true }).amount * factor,
          ),
        });
      return finish();
    }
    if (id === 11 || id === 112) {
      const result = damage();
      result.amount = Math.trunc(
        result.amount *
          (weather === "rain" ? 1.5 : weather === "sun" ? 0.5 : 1),
      );
      effects.push({ kind: "damage", target: "target", ...result });
      if (roll(10)) mod("target", "speed", 0.5, 180, "speed-down", "speed-up");
      return finish();
    }
    hit();
    if (id === 8 && roll(30)) poison();
    if ((id === 19 && roll(30)) || (id === 34 && roll(10)))
      status("flinch", 18, { speedMultiplier: 0.0001 });
    if (id === 20 && roll(10))
      status("confusion", 90, {
        intervalFrames: 18,
        tickChance: 0.5,
        damagePerTick: damage(20).amount,
      });
    if (id === 22 && roll(10) && !hasType(target, 14)) paralysis();
    return finish();
  }
  if (id === 33) {
    hit(move.power * (target?.turnedAround ? 2 : 1));
    return finish();
  }
  if (BASE_DAMAGE_MOVES.has(id)) {
    hit();
    return finish();
  }
  // An unsupported status/special move never becomes invented default damage.
  return {
    supported: false,
    effects: [],
    reason: `${move.name} requires the original source move runtime and timeline metadata.`,
    allowGenericDamage: false,
    fidelity: moveFidelity(move),
  };
}
