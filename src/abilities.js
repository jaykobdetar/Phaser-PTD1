// Complete mapping in code/ability_Utility.as. Unlisted species deliberately
// receive the original no-op base ability, not a modern Pokémon ability.
export const ABILITY_SPECIES = Object.freeze({
  overgrow: [1, 2, 3], blaze: [4, 5, 6], torrent: [7, 8, 9],
  'keen-eye': [16, 17, 18, 21, 22, 83, 107],
  guts: [19, 20, 66, 67, 68], compoundeyes: [12, 48],
  'shed-skin': [11, 14, 23, 24, 147, 148],
  'sand-veil': [27, 28, 50, 51], 'inner-focus': [41, 42, 149],
});
const ABILITY_BY_SPECIES = Object.fromEntries(Object.entries(ABILITY_SPECIES).flatMap(([ability, species]) => species.map(id => [id, ability])));
export const ABILITY_NAMES = Object.freeze({ overgrow: 'Overgrow', blaze: 'Blaze', torrent: 'Torrent', 'keen-eye': 'Keen Eye', guts: 'Guts', compoundeyes: 'Compoundeyes', 'shed-skin': 'Shed Skin', 'sand-veil': 'Sand Veil', 'inner-focus': 'Inner Focus' });
export function abilityFor(fighter) { return ABILITY_BY_SPECIES[fighter.transformedSpeciesId ?? fighter.speciesId] ?? null; }
export function hasSourceEffect(fighter, sourceClass, ...keys) {
  return Object.entries(fighter.effects ?? {}).some(([key, effect]) => key === sourceClass || keys.includes(key) || effect.sourceClass === sourceClass);
}
function announce(battle, fighter, key = abilityFor(fighter)) {
  battle.emit('ability', { fighter, ability: key, name: ABILITY_NAMES[key] });
}
export function abilityAccuracy(fighter, baseAccuracy) {
  // _loc11_ is an int in poke.checkEnemy / poke_Tower.checkEnemy.
  return Math.trunc(baseAccuracy * (abilityFor(fighter) === 'compoundeyes' ? 1.3 : 1));
}
export function abilityDamage(fighter, amount, move) {
  const type = { overgrow: 1, blaze: 4, torrent: 3 }[abilityFor(fighter)];
  return type && move.typeId === type && fighter.hp <= Math.trunc(fighter.maxHp / 3) ? Math.trunc(amount * 1.5) : amount;
}
export function abilityAllowsEffect(battle, source, target, effect) {
  if (source === target) return true;
  const ability = abilityFor(target);
  if ((ability === 'keen-eye' && effect.kind === 'modifier' && effect.stat === 'accuracy' && effect.multiplier < 1)
    || (ability === 'inner-focus' && effect.kind === 'status' && effect.status === 'flinch')) {
    announce(battle, target, ability); return false;
  }
  return true;
}
function increase(battle, fighter, stat, multiplier, key, opposite, sourceClass) {
  if (fighter.effects[opposite]) { battle.removeEffect(fighter, opposite); return; }
  if (hasSourceEffect(fighter, sourceClass, key)) return;
  battle.applyEffect({ kind: 'modifier', target: 'target', key, stat, multiplier, durationFrames: 1800, sourceClass }, fighter, fighter, { id: 0, name: ABILITY_NAMES[abilityFor(fighter)] });
}
export function tickAbility(battle, fighter) {
  if (!fighter.alive) return;
  const ability = abilityFor(fighter);
  if (!ability) return;
  if (fighter.abilityState?.ability !== ability) fighter.abilityState = { ability, frame: 0 };
  const state = fighter.abilityState; state.frame++;
  if (ability === 'compoundeyes' && state.frame === 1) announce(battle, fighter);
  if (ability === 'shed-skin' && state.frame % 18 === 0 && Math.floor(battle.rng() * 100) + 1 <= 30) {
    // Source class391 cures only the first present effect in this order.
    const entry = [['burn', 'class_201'], ['freeze', 'class_796'], ['poison', 'class_200'], ['paralysis', 'class_202'], ['sleep', 'class_791']]
      .map(([name, sourceClass]) => Object.entries(fighter.effects).find(([key, effect]) => key === name || key === sourceClass || effect.sourceClass === sourceClass)).find(Boolean);
    if (entry) { announce(battle, fighter); battle.removeEffect(fighter, entry[0]); }
  }
  if (ability === 'guts' && !hasSourceEffect(fighter, 'class_805', 'attack-up') && ['burn', 'paralysis', 'sleep', 'poison'].some(key => fighter.effects[key])) {
    increase(battle, fighter, 'attack', 2, 'attack-up', 'attack-down', 'class_805'); announce(battle, fighter);
  }
}
// class394.on_Sandstorm: true means immunity to the storm's damage. The
// evasion boost cancels a lowering effect before applying its own buff.
export function abilityOnSandstorm(battle, fighter) {
  if (abilityFor(fighter) !== 'sand-veil') return false;
  announce(battle, fighter);
  increase(battle, fighter, 'evasion', 3, 'evasion-up', 'evasion-down', 'class_795');
  return true;
}
