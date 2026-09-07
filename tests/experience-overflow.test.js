import fs from "node:fs";
import assert from "node:assert/strict";
import { Battle } from "../src/battle.js";
import { createWave, listStages } from "../src/waves-runtime.js";
import { newSave, makePokemon, validateSave } from "../src/model.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const stages = JSON.parse(
  fs.readFileSync(new URL("../public/data/levels.json", import.meta.url)),
);
const meta = listStages().find((l) => l.waveClass === "class_66");
console.log("stage", meta?.id);
const level = [...stages.levels, ...stages.variants].find(
  (l) => l.className === meta.className,
);
const save = newSave(data, 1);
save.pokemon = Array.from({ length: 6 }, () => makePokemon(data, 1, 4));
save.party = save.pokemon.map((p) => p.uid);
const b = new Battle(data, level, save, () => {}, { campaignId: 17 });
for (let i = 0; i < 6; i++) {
  let p = save.pokemon[i];
  b.towers.push(b.fighter(p, { uid: p.uid, team: "tower", placed: true }));
}
const p = createWave(level.id, { seed: 1 }).getProfile(6);
const enemy = b.fighter(
  { speciesId: p.num, level: p.level },
  { uid: "xp-boss", original: p, team: "enemy", x: 0, y: 0, candy: null },
);
b.enemies.push(enemy);
enemy.attackers = new Set(save.party);
b.defeat(enemy);
assert.equal(save.pokemon[5].experience, 4022848);
assert.doesNotThrow(() => validateSave(save, data));
console.log(
  "Original boss XP over2,000,000 round-trips through the save validator.",
);
