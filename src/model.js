import { abilityDamage, hasSourceEffect } from './abilities.js';
import { normalizePartySlots } from './party-slots.js';

import { normalizeProfileFeatures, recordOwned, TARGET_MODES } from './profile-features.js';
export const SAVE_KEY = "ptd-phaser-save-v2";
export const SAVE_VERSION = 2;
export const MAX_COLLECTION_SIZE = 5000;
export const LEGACY_SAVE_KEY = "ptd-phaser-save-v1";
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const xpRequired = (level) => level ** 3;
export const levelCost = (level) => (level + 1) * 5;
export const hitPoints = (species, level) =>
  Math.floor((2 * species.stats.hp * level) / 100) + 10 + level;
export const statValue = (base, level) =>
  Math.floor((base * 2 * level) / 100) + 5;

export function effectiveness(data, typeId, targetTypes) {
  return targetTypes.reduce(
    (value, type) => value * (data.typeChart[typeId]?.[type] ?? 1),
    1,
  );
}

// PTD's integer truncation at each assignment is intentional (class_194.method_3).
export function damage(
  data,
  source,
  target,
  move,
  rng = Math.random,
  options = {},
) {
  const a = data.species[source.speciesId],
    b = data.species[target.speciesId];
  const physical = move.physical ?? move.category?.toLowerCase() === "physical";
  const attackStat = physical ? "attack" : "specialAttack";
  const swapped = hasSourceEffect(target, 'class_832', 'wonder-room');
  const defenseStat = physical ? (swapped ? 'specialDefense' : 'defense')
    : (swapped || options.usePhysicalDefense ? 'defense' : 'specialDefense');
  const attack = Math.floor(
    statValue((source.stats ?? a.stats)[attackStat], source.level) *
      clamp(source.modifiers?.[attackStat] ?? 1, 0.25, 4),
  );
  const defenseModifier = options.ignorePositiveDefense
    ? Math.min(1, target.modifiers?.[defenseStat] ?? 1)
    : (target.modifiers?.[defenseStat] ?? 1);
  const defense = Math.max(
    1,
    Math.floor(
      statValue((target.stats ?? b.stats)[defenseStat], target.level) *
        clamp(defenseModifier, 0.25, 4),
    ),
  );
  let amount = Math.floor((2 * source.level) / 5) + 2;
  amount = Math.floor((amount * attack * Math.trunc(move.power * (options.powerMultiplier ?? 1))) / defense);
  amount = Math.floor(amount / 50) + 2;
  const sourceTypes = source.typeIds ?? a.typeIds, targetTypes = target.typeIds ?? b.typeIds;
  amount = Math.floor(amount * (sourceTypes.includes(move.typeId) ? 1.5 : 1));
  const levitating = hasSourceEffect(target, 'class_833', 'magnet-rise');
  const telekinesis = hasSourceEffect(target, 'class_834', 'telekinesis');
  let multiplier = targetTypes.reduce((result, type) => {
    let value = move.typeId === 14 && (levitating || telekinesis) ? 0 : (data.typeChart[move.typeId]?.[type] ?? 1);
    if (value === 0 && telekinesis && move.typeId !== 14) value = 1;
    return result * value;
  }, 1);
  if (multiplier === 0 && ((targetTypes.includes(8) && hasSourceEffect(target, 'class_816', 'identified'))
    || (targetTypes.includes(16) && hasSourceEffect(target, 'class_813', 'miracle-eye'))
    || (targetTypes.includes(6) && hasSourceEffect(target, 'class_823', 'smack-down')))) multiplier = 1;
  amount = Math.floor(amount * multiplier);
  const critical =
    Math.floor(rng() * 100) + 1 <=
    (source.criticalChance ?? source.original?.crit_Chance ?? 6) *
      (source.modifiers?.criticalChance ?? 1) *
      (options.criticalChanceMultiplier ?? 1);
  if (critical) amount *= 2;
  if (physical && hasSourceEffect(target, 'class_821', 'reflect')) amount = Math.trunc(amount / 2);
  if (!physical && hasSourceEffect(target, 'class_812', 'light-screen')) amount = Math.trunc(amount / 2);
  const reflectedDamage = ((!physical && hasSourceEffect(target, 'class_830', 'mirror-coat'))
    || (physical && hasSourceEffect(target, 'class_825', 'counter'))) ? amount * 2 : 0;
  const consumesCharge = move.typeId === 11 && hasSourceEffect(source, 'class_204', 'charge');
  if (consumesCharge) amount *= 2;
  amount = abilityDamage(source, amount, move);
  return { amount, multiplier, critical, ...(reflectedDamage ? { reflectedDamage } : {}), ...(consumesCharge ? { consumesCharge: true } : {}) };
}

let nextId = 1;
export function makePokemon(data, speciesId, level = 5, extras = {}) {
  if (!data.species[speciesId])
    throw new Error(`Unknown Pokémon #${speciesId}`);
  level = clamp(Math.floor(level), 1, 100);
  const learnset = data.species[speciesId].learnset.filter(
    (move) => move.level <= level,
  );
  const moves = [...new Set(learnset.map((move) => move.moveId))].slice(-4);
  if (!moves.length) moves.push(1);
  const firstDamage = moves.find((id) => data.moves[id]?.power > 0);
  return {
    uid: `${Date.now().toString(36)}-${nextId++}`,
    speciesId: Number(speciesId),
    level,
    experience: 0,
    moves,
    selectedMove: firstDamage ?? moves[0],
    shiny: 0,
    target: "first",
    ...extras,
  };
}

export function newSave(data, starter) {
  const pokemon = makePokemon(data, starter, 5);
  return {
    version: SAVE_VERSION,
    trainer: "Trainer",
    money: 50,
    unlocked: 1,
    completed: [],
    ...normalizeProfileFeatures({},data,[pokemon]),
    pokemon: [pokemon],
    party: normalizePartySlots([pokemon.uid]),
    settings: { sound: false, music: false, damageText: true, speed: 1 },
    savedAt: new Date().toISOString(),
  };
}

function integer(value, min, max, label) {
  if (!Number.isInteger(value) || value < min || value > max)
    throw new Error(`Invalid ${label}.`);
  return value;
}

export function validateSave(input, data) {
  if (
    !input ||
    ![1,SAVE_VERSION].includes(input.version) ||
    !Array.isArray(input.pokemon) ||
    !Array.isArray(input.party)
  ) {
    throw new Error(
      "This is not a Phaser port save. Use a JSON backup exported by this game.",
    );
  }
  if (input.pokemon.length > MAX_COLLECTION_SIZE)
    throw new Error("Invalid Pokémon collection.");
  const ids = new Set();
  const pokemon = input.pokemon.map((p) => {
    if (
      !p ||
      !data.species[p.speciesId] ||
      typeof p.uid !== "string" ||
      p.uid.length > 100 ||
      ids.has(p.uid)
    )
      throw new Error("Invalid or duplicated Pokémon.");
    ids.add(p.uid);
    if (
      !Array.isArray(p.moves) ||
      !p.moves.length ||
      p.moves.length > 4 ||
      p.moves.some((id) => !data.moves[id])
    )
      throw new Error("Invalid moves.");
    return {
      uid: p.uid,
      speciesId: Number(p.speciesId),
      level: integer(p.level, 1, 100, "level"),
      experience: integer(p.experience, 0, 2147483647, "experience"),
      moves: [...new Set(p.moves)],
      selectedMove: p.moves.includes(p.selectedMove)
        ? p.selectedMove
        : p.moves[0],
      shiny: integer(p.shiny ?? 0, 0, 2, "shiny value"),
      nickname: typeof p.nickname==='string'?p.nickname.slice(0,30):'',
      myTag: typeof p.myTag==='string'?p.myTag.slice(0,30):'n',
      target: [...TARGET_MODES.map(([key])=>key),'last'].includes(p.target)
        ? p.target
        : "first",
    };
  });
  if (
    input.party.length > 6 ||
    new Set(input.party.filter(id => id != null)).size !== input.party.filter(id => id != null).length ||
    Array.from(input.party).some((id) => id != null && !ids.has(id))
  )
    throw new Error("Invalid party.");
  return {
    version: SAVE_VERSION,
    trainer: String(input.trainer ?? "Trainer").slice(0, 30),
    money: integer(input.money, 0, 999999999, "money"),
    unlocked: integer(input.unlocked, 1, 42, "campaign progress"),
    completed: [
      ...new Set(
        (input.completed ?? []).filter(
          (id) => Number.isInteger(id) && id >= 1 && id <= 42,
        ),
      ),
    ],
    lastLevelVisited: Number.isInteger(input.lastLevelVisited)
      ? clamp(input.lastLevelVisited, 0, 42)
      : 0,
    haveFlash: Boolean(input.haveFlash),
    originalExtraInfo: [
      ...new Set(
        (Array.isArray(input.originalExtraInfo)
          ? input.originalExtraInfo
          : []
        ).filter((n) => Number.isInteger(n) && n >= 0 && n < 1000),
      ),
    ],
    badges: Number.isInteger(input.badges) ? clamp(input.badges, 0, 8) : 0,
    ...normalizeProfileFeatures(input,data,pokemon),
    pokemon,
    party: normalizePartySlots(input.party),
    settings: {
      sound: Boolean(input.settings?.sound),
      music: Boolean(input.settings?.music ?? input.settings?.sound),
      damageText: input.settings?.damageText !== false,
      speed: [1, 2, 3, 4].includes(input.settings?.speed)
        ? input.settings.speed
        : 1,
    },
    savedAt: input.savedAt,
  };
}

export function persist(save, storage = localStorage) {
  save.savedAt = new Date().toISOString();
  storage.setItem(SAVE_KEY, JSON.stringify(save));
}

export function loadSave(data, storage = localStorage) {
  const raw = storage.getItem(SAVE_KEY) ?? storage.getItem(LEGACY_SAVE_KEY);
  return raw ? validateSave(JSON.parse(raw), data) : null;
}

export function trainPokemon(save, pokemon, data) {
  if (
    pokemon.level >= 100 ||
    pokemon.experience < xpRequired(pokemon.level) ||
    save.money < levelCost(pokemon.level)
  )
    return false;
  save.money -= levelCost(pokemon.level);
  pokemon.level++;
  pokemon.experience = 0;
  for (const entry of data.species[pokemon.speciesId].learnset.filter(
    (m) => m.level === pokemon.level,
  )) {
    if (pokemon.moves.length < 4 && !pokemon.moves.includes(entry.moveId))
      pokemon.moves.push(entry.moveId);
  }
  return true;
}

export function evolvePokemon(pokemon, data) {
  const evolution = data.species[pokemon.speciesId].evolutions?.find(
    (e) => e.level && e.level <= pokemon.level,
  );
  if (!evolution || !data.species[evolution.to]) return false;
  if(pokemon.nickname===data.species[pokemon.speciesId].name)pokemon.nickname='';
  pokemon.speciesId = evolution.to;
  return true;
}

// Advance by distance, including across multiple segments: stable at every frame rate.
export function followPath(entity, distance, beforeWaypoint = null) {
  // Named Flash waypoints encode an axis/direction, not a polyline to interpolate.
  // poke.run moves a whole tick, preserves overshoot and advances at most one
  // waypoint. Outward travel evaluates the final marker once more before escape.
  if (entity.path?.[0]?.direction && entity.sourceMovement !== false) {
    const path = entity.path;
    const previous = path[Math.min(path.length - 1, Math.max(0, entity.point - 1))];
    let target = path[Math.min(path.length - 1, entity.point)];
    let direction = previous.direction;
    const amount = Math.max(0, distance);
    if (direction === 'left') entity.x -= amount;
    else if (direction === 'right') entity.x += amount;
    else if (direction === 'front') entity.y += amount;
    else if (direction === 'back') entity.y -= amount;
    entity.direction = direction;
    // poke.run tests candy after moving, before checking the waypoint. Picking
    // up candy can reverse both direction and target during this same tick.
    beforeWaypoint?.();
    target = entity.path[Math.min(entity.path.length - 1, entity.point)];
    direction = entity.direction;
    const reached = direction === 'left' ? entity.x <= target.x
      : direction === 'right' ? entity.x >= target.x
      : direction === 'front' ? entity.y >= target.y : entity.y <= target.y;
    if (!reached) return false;
    entity.point++;
    if (entity.point >= entity.path.length) {
      if (entity.outward === false || entity.point > entity.path.length) {
        entity.sourcePassedEnd = true; return true;
      }
    }
    entity.direction = target.direction;
    return false;
  }
  let remaining = Math.max(0, distance);
  while (entity.point < entity.path.length && remaining > 0) {
    const next = entity.path[entity.point];
    const dx = next.x - entity.x,
      dy = next.y - entity.y,
      length = Math.hypot(dx, dy);
    if (length > 0)
      entity.direction =
        Math.abs(dx) > Math.abs(dy)
          ? dx > 0
            ? "right"
            : "left"
          : dy > 0
            ? "front"
            : "back";
    if (length <= remaining) {
      entity.x = next.x;
      entity.y = next.y;
      entity.point++;
      remaining -= length;
    } else {
      entity.x += (dx / length) * remaining;
      entity.y += (dy / length) * remaining;
      remaining = 0;
    }
  }
  beforeWaypoint?.();
  return entity.point >= entity.path.length;
}
