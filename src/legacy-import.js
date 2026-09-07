import {normalizePartySlots} from './party-slots.js';
/** Validate legacy local-server JSON and return the Phaser model.js save schema.
 * Never canonicalize move IDs: the old game uses custom PTD move numbers.
 * Return {save,warnings}; pass save through validateSave before persisting.
 */
export function importLegacySave(
  input,
  data,
  { account = null, slot = 1, now = new Date().toISOString() } = {},
) {
  if (typeof input === "string") input = JSON.parse(input);
  if (!Array.isArray(input) || !input.length || input.length > 5000)
    throw new Error(
      "Select a nonempty legacy *_pokemon_slotN.json file (up to 5,000 Pokémon).",
    );
  if (!data?.species || !data?.moves)
    throw new Error("Game data is not loaded.");
  if (typeof account === "string") account = JSON.parse(account);
  const warnings = [];
  const int = (value, fallback, min, max, label) => {
    const n = value == null ? fallback : Number(value);
    if (!Number.isSafeInteger(n) || n < min || n > max)
      throw new Error(`Invalid legacy ${label}.`);
    return n;
  };
  const used = new Set();
  const pokemon = input
    .map((row, i) => {
      if (!row || typeof row !== "object" || Array.isArray(row))
        throw new Error(`Invalid legacy Pokémon entry ${i + 1}.`);
      const speciesId = int(row.species ?? row.num, 0, 1, 10000, "species");
      if (!data.species[speciesId])
        throw new Error(
          `Legacy Pokémon #${speciesId} is not present in this game.`,
        );
      const level = int(row.level, 5, 1, 100, "level");
      const slots = [row.move1, row.move2, row.move3, row.move4].map((id, j) =>
        int(id, 0, 0, 10000, `move ${j + 1}`),
      );
      if (slots.some((id) => id && !data.moves[id]))
        throw new Error(`Legacy entry ${i + 1} contains an unknown move ID.`);
      const moves = [...new Set(slots.filter(Boolean))];
      if (!moves.length) {
        const learnt = data.species[speciesId].learnset.filter(
          (m) => m.level <= level && data.moves[m.moveId],
        );
        moves.push(...[...new Set(learnt.map((m) => m.moveId))].slice(-4));
        if (!moves.length)
          throw new Error(`Legacy Pokémon #${speciesId} has no valid moves.`);
        warnings.push(
          `Entry ${i + 1} had no saved moves; recovered its level learnset.`,
        );
      }
      const selected = int(row.moveSelected, 1, 1, 4, "selected move");
      const targetType = int(row.targetType, 1, 1, 9, "target type");
      const target = ['first','fastest','slowest','weakest','strongest','effective','healthy','candy','no-candy'][targetType-1];
      const legacyId = row.myID ?? row.id ?? i + 1;
      if (
        !["string", "number"].includes(typeof legacyId) ||
        String(legacyId).length > 70
      )
        throw new Error("Invalid legacy Pokémon ID.");
      let uid = `legacy-${String(legacyId)}`;
      if (used.has(uid)) {
        uid += `-${i + 1}`;
        warnings.push(`Duplicate legacy ID ${legacyId} was made unique.`);
      }
      used.add(uid);
      return {
        uid,
        speciesId,
        level,
        experience: int(row.experience, 0, 0, 2147483647, "experience"),
        moves,
        selectedMove: slots[selected - 1] || moves[0],
        shiny: int(row.shiny, 0, 0, 2, "shiny value"),
        target,
        nickname: String(row.nickname ?? row.tag ?? "").slice(0,30),
        myTag: String(row.tag ?? "n").slice(0,30),
        _position: int(row.position, i, 0, 1000000, "position"),
      };
    })
    .sort((a, b) => a._position - b._position);
  for (const p of pokemon) delete p._position;
  const source = account?.slots?.[String(slot)] ?? null;
  if (account && !source)
    throw new Error(`The legacy account does not contain slot ${slot}.`);
  const unlockedRaw = source
    ? int(source.advanced, 0, 0, 9999, "campaign progress")
    : 0;
  const unlocked = Math.min(42, Math.max(1, unlockedRaw+1));
  if (!source)
    warnings.push(
      "Only Pokémon were imported. Trainer, money and campaign start at defaults; provide the matching account JSON to recover them.",
    );
  warnings.push(
    "The first six Pokémon in saved position order form the party; the legacy server stores party selection separately.",
  );
  const dex = {normal:[],shiny:[],shadow:[]};
  for(let i=0;i<151;i++)for(const [form,chars] of Object.entries({normal:'1457',shiny:'2467',shadow:'3567'}))
    if(chars.includes(String(account?.pokedex??'')[i]??'-'))dex[form].push(i+1);
  const avatar = String(source?.avatar??'b_1').split('_');
  return {
    save: {
      version: 2,
      gameVersion: Number(source?.version)===2?2:1,
      inventory: account?.inventory??{},
      achievements: Object.fromEntries(Object.entries(account?.achievements??{}).map(([k,v])=>[k,Number(v)])),
      originalExtraInfo: Object.entries(account?.extraInfo??{}).filter(([,v])=>Number(v)>0).map(([k])=>Number(k)),
      extraInfoValues: account?.extraInfo??{},
      challengeCompleted: source?int(source.challenge,0,0,6,'challenge progress'):0,
      lastLevelVisited: source?Math.min(42,int(source.advanced_a,0,0,9999,'last visited stage')):0,
      haveFlash: source?.classic===true || String(source?.classic)==='true' || Number(source?.classic)===1,
      badges: source?int(source.badges,0,0,8,'badges'):0,
      avatar:{gender:avatar[0]==='g'?'girl':'boy',style:Number(avatar[1])||1},
      dex,
      trainer: String(source?.nickname || "Trainer").slice(0, 30),
      money: source ? int(source.money, 50, 0, 999999999, "money") : 50,
      unlocked,
      completed: Array.from(
        { length: Math.min(42, Math.max(0, unlockedRaw)) },
        (_, i) => i + 1,
      ),
      pokemon,
      party: normalizePartySlots(pokemon.slice(0, 6).map((p) => p.uid)),
      settings: { sound: false, speed: 1 },
      savedAt: now,
    },
    warnings: [...new Set(warnings)],
  };
}
