/** Pure helpers recovered from PTD1 AS3. Special move/ability/effect hooks are separate. */
const trunc = Math.trunc;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

export function maximumHP(species, level) {
  return trunc(2 * species.stats.hp * level / 100) + 10 + level;
}

export function experienceToNextLevel(currentLevel) {
  return trunc(currentLevel ** 3);
}

export function battleStat(base, level, modifier = 1) {
  return trunc((trunc(base * 2 * level / 100) + 5) * clamp(modifier, 0.25, 4));
}

/** Original integer arithmetic, up to the later ability/weather/status hooks.
 * Attacker/defender: {species:normalizedSpecies, level, modifiers?:{attack,...}}.
 * Pass critical explicitly for deterministic combat/testing.
 */
export function originalBaseDamage(attacker, defender, move, typeChart, {critical = false, power = move.power, typeId = move.typeId} = {}) {
  if (power == null || typeId == null) throw new Error('Resolve dynamic move fields before calculating damage.');
  if (move.category === 'Status') return 0;
  const physical = move.physical ?? move.category === 'Physical';
  const atkKey = physical ? 'attack' : 'specialAttack';
  const defKey = physical ? 'defense' : 'specialDefense';
  const atk = battleStat(attacker.species.stats[atkKey], attacker.level, attacker.modifiers?.[atkKey] ?? 1);
  const def = battleStat(defender.species.stats[defKey], defender.level, defender.modifiers?.[defKey] ?? 1);
  let damage = trunc(2 * attacker.level / 5);
  damage += 2;
  damage = trunc(damage * atk * power / def);
  damage = trunc(damage / 50);
  damage += 2;
  damage = trunc(damage * (attacker.species.typeIds.includes(typeId) ? 1.5 : 1));
  let effectiveness = 1;
  for (const defendingType of defender.species.typeIds) effectiveness *= typeChart[typeId]?.[defendingType] ?? 1;
  damage = trunc(damage * effectiveness);
  if (critical) damage *= 2;
  return damage;
}

/** The source tracks experience within the current level, then discards surplus. */
export function originalLevelUp(pokemon) {
  if (pokemon.level >= 100 || pokemon.experience < experienceToNextLevel(pokemon.level)) return false;
  pokemon.level++;
  pokemon.experience = 0;
  return true;
}

/** Normalize a parsed legacy *_pokemon_slotN.json without converting custom PTD move IDs. */
export function normalizeLegacyPokemon(rows, gameData) {
  if (!Array.isArray(rows)) throw new Error('Legacy Pokemon save must be a JSON array.');
  const warnings = [];
  const pokemon = rows.map((row, index) => {
    if (!row || typeof row !== 'object') throw new Error(`Invalid Pokemon at entry ${index + 1}.`);
    const speciesId = Number(row.species ?? row.num);
    if (!Number.isInteger(speciesId) || !gameData.species[speciesId]) throw new Error(`Unknown Pokemon species at entry ${index + 1}: ${speciesId}`);
    const originalMoves = [row.move1,row.move2,row.move3,row.move4].map(n => Number(n) || 0);
    const moveSlots = originalMoves.map(id => {
      if (id && !gameData.moves[id]) { warnings.push(`Pokemon ${index + 1}: unknown move ${id} retained as empty slot.`); return 0; }
      return id;
    });
    const selectedMoveSlot = clamp(trunc(Number(row.moveSelected) || 1) - 1, 0, 3);
    return {
      id: String(row.myID ?? row.id ?? `legacy-${index + 1}`),
      speciesId,
      nickname: String(row.tag || gameData.species[speciesId].name),
      level: clamp(trunc(Number(row.level) || 5), 1, 100),
      experience: Math.max(0, trunc(Number(row.experience) || 0)),
      moveSlots,
      selectedMoveSlot,
      selectedMoveId: moveSlots[selectedMoveSlot] || moveSlots.find(Boolean) || 0,
      targetType: clamp(trunc(Number(row.targetType) || 1), 1, 9),
      position: Math.max(0, trunc(Number(row.position) || 0)),
      shiny: clamp(trunc(Number(row.shiny) || 0), 0, 2),
    };
  });
  return {pokemon, warnings};
}

/** Normalize one account slot; account files and Pokemon arrays are separate in the original server. */
export function normalizeLegacyAccount(account, slot = 1) {
  const source = account?.slots?.[String(slot)];
  if (!source) throw new Error(`Legacy account has no slot ${slot}.`);
  return {
    nickname: String(source.nickname || 'Satoshi'),
    money: Math.max(0, trunc(Number(source.money) || 0)),
    badges: Math.max(0, trunc(Number(source.badges) || 0)),
    version: trunc(Number(source.version) || 0),
    progress: Object.fromEntries(['advanced','advanced_a','classic','challenge'].map(key => [key, Math.max(0, trunc(Number(source[key]) || 0))])),
    pokedex: String(account.pokedex || ''),
    inventory: {...account.inventory},
    achievements: {...account.achievements},
    extraInfo: {...account.extraInfo},
  };
}
