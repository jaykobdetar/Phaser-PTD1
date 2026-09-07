import assert from "node:assert/strict";
import fs from "node:fs";
import { ReverseBattle } from "../src/reverse-battle.js";
import { makePokemon, newSave } from "../src/model.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const levels = JSON.parse(
  fs.readFileSync(new URL("../public/data/levels.json", import.meta.url)),
);
const get = (id) =>
  levels.levels.concat(levels.variants).find((l) => l.id === id);
function game(id) {
  const save = newSave(data, 4);
  const species = [4, 7, 25, 1];
  save.pokemon = species.map((id, i) =>
    makePokemon(data, id, 100, {
      uid: "party-" + i,
      moves: [14],
      selectedMove: 14,
    }),
  );
  save.party = save.pokemon.map((p) => p.uid);
  return new ReverseBattle(data, get(id), save, () => {}, {
    seed: 123,
    rng: () => 0.99,
  });
}
const battle = game(26);
assert.equal(battle.energy, 500);
assert.equal(battle.towers.length, 14);
assert(battle.towers.every((t) => t.fixed && t.placed));
assert.equal(battle.launch("party-0"), false);
assert.equal(battle.start(), true);
assert.equal(battle.launch("party-0", "4"), true);
assert.equal(battle.energy, 480);
assert.equal(battle.launch("party-0", "4"), false);
assert.equal(battle.capture("party-0").ok, false);
for (const t of battle.towers) t.alive = false;
for (let i = 0; i < 2000 && battle.enemies.length; i++) battle.tick();
assert.equal(battle.firstStolenCandy, 4);
assert.equal(battle.state, "running");
assert.equal(battle.stolenCandy, 1);
assert(battle.available("party-0"));
for (const [i, path] of ["p", "2", "3"].entries())
  assert(battle.launch("party-" + i, path));
for (let i = 0; i < 4000 && battle.state === "running"; i++) battle.tick();
assert.equal(battle.state, "won");
assert.equal(battle.stolenCandy, 4);
assert.equal(battle.energy, 1020);
assert.deepEqual(battle.bonuses, {
  hp: 3,
  speed: 1.5,
  defense: 1,
  specialDefense: 1.5,
});
const gauntlet = game("class_1115");
assert.equal(gauntlet.energy, 80);
assert.equal(gauntlet.towers.length, 4);
gauntlet.start();
for (const t of gauntlet.towers) t.alive = false;
gauntlet.launch("party-0");
assert.equal(gauntlet.enemies[0].freeRoam, true);
assert.equal(gauntlet.enemies[0].runAway, false);
for (let i = 0; i < 2000 && gauntlet.state === "running"; i++) gauntlet.tick();
assert.equal(gauntlet.state, "won");
assert.equal(gauntlet.energy, 60);
assert.equal(gauntlet.stolenCandy, 1);
const loss = game(26);
loss.start();
const money = loss.save.money;
loss.energy = 20;
loss.launch("party-0");
const attacker = loss.enemies[0];
attacker.candy = loss.candies[0];
Object.assign(attacker.candy, { state: "carried", carrier: attacker.uid });
loss.defeat(attacker);
assert.equal(loss.candies[0].state, "ground");
assert.equal(loss.save.money, money);
loss.tick();
assert.equal(loss.state, "lost");
console.log(
  "Passed original invasion energy/launch costs, 14 Saffron defenders, return routing, four candy bonuses, attacker reuse, straight-through Route 24 phase, capture disabled, drop on defeat, no money rewards, and energy defeat.",
);
