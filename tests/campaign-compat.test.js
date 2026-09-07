import assert from "node:assert/strict";
import fs from "node:fs";
import { Battle } from "../src/battle.js";
import { newSave, makePokemon, validateSave } from "../src/model.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const levels = JSON.parse(
  fs.readFileSync(new URL("../public/data/levels.json", import.meta.url)),
).levels;
for (const id of [22, 37, 38, 39]) {
  const level = levels.find((l) => l.id === id),
    save = newSave(data, 1),
    errors = [],
    spawns = [];
  save.unlocked = id;
  const typeId = id === 37 ? 11 : id === 38 ? 12 : 4;
  const species =
    id === 22
      ? 1
      : Number(
          Object.keys(data.species).find((key) =>
            data.species[key].typeIds.includes(typeId),
          ),
        );
  save.pokemon = Array.from({ length: 6 }, () =>
    makePokemon(data, species, 100, { shiny: 1 }),
  );
  save.party = save.pokemon.map((p) => p.uid);
  const battle = new Battle(
    data,
    level,
    save,
    (kind, e) => {
      if (kind === "error") errors.push(e.error.message);
      if (kind === "spawn") spawns.push(e.enemy.original.num);
    },
    { campaignId: id, seed: 1, rng: () => 0.99 },
  );
  assert(battle.place(save.party[0], level.spots[0].index));
  assert(battle.start());
  for (let tick = 0; tick < 15000 && battle.state === "running"; tick++) {
    battle.tick();
    for (const enemy of [...battle.enemies]) battle.defeat(enemy);
  }
  assert.deepEqual(errors, [], `level ${id} raised a runtime error`);
  assert.equal(battle.state, "won", `level ${id} did not finish`);
  if (id !== 22)
    assert(
      spawns.includes({ 37: 145, 38: 144, 39: 146 }[id]),
      `level ${id} should honor original six level100 matching-type party check`,
    );
  validateSave(save, data);
  console.log(
    `level ${id}: all waves dispatched, ${spawns.length} spawned, save valid, party condition ${id === 22 ? "n/a" : "matched"}`,
  );
}
