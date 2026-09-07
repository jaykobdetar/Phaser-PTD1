import assert from "node:assert/strict";
import fs from "node:fs";
import { Battle } from "../src/battle.js";
import {
  initializeStageHooks,
  handleNpcAttack,
  tickStageHooks,
  handleStageEvent,
} from "../src/stage-hooks.js";
import { makePokemon, newSave } from "../src/model.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const metadata = JSON.parse(
  fs.readFileSync(new URL("../public/data/levels.json", import.meta.url)),
);
function game(id) {
  const save = newSave(data, 4);
  save.pokemon = [
    makePokemon(data, 4, 20, { uid: "user-a" }),
    makePokemon(data, 7, 20, { uid: "user-b" }),
  ];
  save.party = save.pokemon.map((p) => p.uid);
  const battle = new Battle(
    data,
    metadata.levels.find((l) => l.id === id),
    save,
    () => {},
  );
  initializeStageHooks(battle);
  return battle;
}
const route = game(3);
assert.equal(route.towers.length, 2);
assert.deepEqual(
  route.towers.map((t) => t.speciesId),
  [19, 16],
);
assert(route.towers.every((t) => t.npc && t.allied && !t.targetableByEnemies));
route.place("user-a", 1);
const player = route.towers.find((t) => t.uid === "user-a");
const npc = route.towers[0];
npc.x = player.x;
npc.y = player.y;
const enemy = { team: "enemy", x: player.x, y: player.y };
assert.deepEqual(
  route.selectTargets(enemy, [npc, player]).map((t) => t.uid),
  ["user-a"],
);
assert.equal(route.recall(npc.uid), false);
route.party[0].moves.push(224);
route.place("user-a", 3);
assert(route.stageHooks.cutOpened);
const celebiBattle = game(20);
celebiBattle.place("user-a", 1);
const target = celebiBattle.towers.find((t) => t.uid === "user-a");
target.hp = 10;
const celebi = celebiBattle.towers.find((t) => t.speciesId === 251);
celebi.hp = 10;
celebi.cooldown = 0;
handleNpcAttack(celebiBattle, celebi);
assert.equal(
  target.hp,
  Math.min(target.maxHp, 10 + Math.floor(target.maxHp / 2)),
);
assert.equal(celebi.hp, 10);
assert.equal(celebi.cooldown, 360);
const garyBattle = game(30);
garyBattle.place("user-a", 2);
garyBattle.place("user-b", 3);
const a = garyBattle.towers.find((t) => t.uid === "user-a"),
  b = garyBattle.towers.find((t) => t.uid === "user-b"),
  gary = garyBattle.towers.find((t) => t.speciesId === 1001);
a.hp = 20;
b.hp = 1;
gary.cooldown = 0;
handleNpcAttack(garyBattle, gary);
assert.equal(garyBattle.stageHooks.pendingHeals[0].target, a);
assert.equal(a.hp, 20);
for (let i = 0; i < 200; i++) tickStageHooks(garyBattle);
assert.equal(a.hp, a.maxHp);
assert.equal(b.hp, 1);
assert.equal(gary.cooldown, 90);
const gym = game(5);
gym.place("user-a", 1);
gym.wave = { currentWave: 10 };
handleStageEvent(gym, { type: "reset-party-ui" });
assert(gym.stageHooks.dismissedParty.has("user-a"));
assert.equal(gym.place("user-a", 1), false);
assert.deepEqual(gym.save.party, [null, "user-b", null, null, null, null]);
assert.equal(gym.save.pokemon.length,2);
assert.equal(gym.place("user-b", 1), true);
garyBattle.state = "running";
a.alive = false;
b.alive = false;
garyBattle.finish(true);
assert.equal(garyBattle.state, "lost");
console.log(
  "Passed friendly NPC allegiance, enemy target exclusion, fixed slots, Route2 Cut hook, Celebi player-only healing, Gary exact eligible slots and delayed healing, Pewter dismissal, preserved collection, and party-wipe loss despite living Gary.",
);
