/**
 * Independent regression suite against the actual Phaser port model/battle modules.
 * Run from the project directory: node --test tests/battle.test.js
 * Fixtures use recovered JSON and authored wave scripts for campaign smoke tests.
 * The last movement tests isolate original SWF semantics documented in poke.as.
 */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { Battle } from "../src/battle.js";
import {
  newSave,
  makePokemon,
  trainPokemon,
  evolvePokemon,
  validateSave,
  xpRequired,
  levelCost,
  hitPoints,
} from "../src/model.js";

const data = JSON.parse(
  readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const levels = JSON.parse(
  readFileSync(new URL("../public/data/levels.json", import.meta.url)),
).levels;
const stage = (id) => structuredClone(levels.find((level) => level.id === id));
function fixture(id = 1, starter = 1) {
  const save = newSave(data, starter),
    events = [];
  const battle = new Battle(
    data,
    stage(id),
    save,
    (type, event) => events.push({ type, ...event }),
    { seed: 123, rng: () => 0.5 },
  );
  return { save, battle, events };
}
function advance(battle, predicate, maxTicks = 10000) {
  let count = 0;
  while (!predicate() && battle.state === "running" && count++ < maxTicks)
    battle.tick();
  assert.notEqual(
    battle.state,
    "error",
    "Wave adapter emitted a runtime error",
  );
  assert.ok(
    predicate(),
    `Condition not reached in ${maxTicks} ticks (state=${battle.state}, frame=${battle.frame}, enemies=${battle.enemies.length})`,
  );
}
function originalProfile(speciesId = 19, extras = {}) {
  const s = data.species[speciesId];
  return {
    num: speciesId,
    level: 3,
    shiny: 0,
    move1: 1,
    move2: 0,
    move3: 0,
    move4: 0,
    moveSelected: 1,
    speed: 50,
    base_HP: s.stats.hp,
    base_Attack: s.stats.attack,
    base_Defense: s.stats.defense,
    base_Special_Attack: s.stats.specialAttack,
    base_Special_Defense: s.stats.specialDefense,
    base_Experience: s.baseExperience,
    reward: s.reward,
    currentLife: -1,
    canCapture: true,
    freeRoam: false,
    runAway: true,
    ...extras,
  };
}
function movementFixture({
  candies = [{ x: 100, y: 0 }],
  path = [
    { x: 0, y: 0 },
    { x: 100, y: 0 },
  ],
  original = {},
} = {}) {
  const save = newSave(data, 1),
    level = {
      ...stage(1),
      candyCount: candies.length,
      candies,
      paths: { p: path },
      spots: [],
    };
  const battle = new Battle(data, level, save, () => {}, { rng: () => 0.5 });
  // Isolate movement from spawning; use real Battle.tick, sprite stats and candy records.
  battle.state = "running";
  battle.wave = {
    tick() {},
    enemyCleared() {},
    defeated() {},
    finished: false,
  };
  battle.spawn(originalProfile(19, original));
  return { battle, save, enemy: battle.enemies[0] };
}

test("all three starters can win the original Oak's Lab waves at each deployment spot", () => {
  for (const starter of [1, 4, 7])
    for (const spot of [1, 2, 3, 4]) {
      const { battle, save, events } = fixture(1, starter);
      assert.ok(battle.place(save.party[0], spot));
      assert.ok(battle.start());
      advance(battle, () => battle.state === "won");
      assert.ok(battle.remainingCandy > 0);
      assert.ok(battle.stats.defeated > 0);
      assert.equal(save.unlocked, 2);
      assert.deepEqual(save.completed, [1]);
      assert.ok(events.some((e) => e.type === "finish" && e.won));
      assert.equal(events.filter((e) => e.type === "error").length, 0);
    }
});

test("start requires a deployment; occupied spots reject another party member; recall permits reuse", () => {
  const { battle, save } = fixture();
  assert.equal(battle.start(), false);
  const extra = makePokemon(data, 7);
  save.pokemon.push(extra);
  save.party[save.party.indexOf(null)] = extra.uid;
  assert.ok(battle.place(save.party[0], 1));
  assert.equal(battle.place(extra.uid, 1), false);
  assert.ok(battle.recall(save.party[0]));
  assert.ok(battle.place(extra.uid, 1));
  assert.ok(battle.start());
});

test("weak capture removes a real wave enemy, adds a usable party member, and validates as a save", () => {
  const { battle, save } = fixture();
  battle.place(save.party[0], 1);
  battle.start();
  advance(battle, () => battle.enemies.some((e) => battle.canCapture(e)), 1500);
  const enemy = battle.enemies.find((e) => battle.canCapture(e));
  assert.ok(enemy.hp / enemy.maxHp <= 0.2);
  const result = battle.capture(enemy.uid);
  assert.equal(result.ok, true);
  assert.equal(battle.stats.captured, 1);
  assert.equal(save.pokemon.length, 2);
  assert.ok(save.party.includes(result.profile.uid));
  assert.ok(!battle.enemies.includes(enemy));
  assert.equal(enemy.alive, false);
  assert.ok(battle.place(result.profile.uid, 2));
  assert.equal(validateSave(save, data).pokemon.length, 2);
  assert.equal(
    battle.capture(enemy.uid).ok,
    false,
    "The same defeated/captured enemy cannot be captured twice",
  );
});

test("healthy ordinary enemies cannot be captured, shiny enemies can, and full parties send captures to collection", () => {
  const { battle, save } = movementFixture({ original: { shiny: 0 } });
  const enemy = battle.enemies[0];
  assert.equal(battle.capture(enemy.uid).ok, false);
  assert.equal(save.pokemon.length, 1);
  for (let i = 0; i < 5; i++) {
    const p = makePokemon(data, 1);
    save.pokemon.push(p);
    save.party[save.party.indexOf(null)] = p.uid;
  }
  enemy.shiny = 1;
  const caught = battle.capture(enemy.uid);
  assert.equal(caught.ok, true);
  assert.equal(caught.profile.shiny, 1);
  assert.equal(save.party.length, 6);
  assert.equal(save.pokemon.length, 7);
  assert.ok(!save.party.includes(caught.profile.uid));
});

test("catching a candy carrier drops its candy where caught and another enemy can retrieve it", () => {
  const { battle, enemy, save } = movementFixture();
  advance(battle, () => Boolean(enemy.candy), 60);
  assert.equal(battle.candies[0].state, "carried");
  const at = { x: enemy.x, y: enemy.y };
  enemy.hp = 1;
  assert.equal(battle.capture(enemy.uid).ok, true);
  assert.equal(battle.candies[0].state, "ground");
  assert.equal(battle.candies[0].carrier, null);
  assert.deepEqual({ x: battle.candies[0].x, y: battle.candies[0].y }, at);
  assert.equal(battle.remainingCandy, 1);
  assert.equal(save.party.length, 6);
  assert.equal(save.party.filter(Boolean).length, 2);
  battle.spawn(originalProfile());
  advance(battle, () => battle.candies[0].state === "carried", 60);
  advance(battle, () => battle.state === "lost", 100);
  assert.equal(battle.remainingCandy, 0);
});

test("Route 1 is lost naturally if every deployed tower is recalled", () => {
  const { battle, save } = fixture(2);
  battle.place(save.party[0], 1);
  battle.start();
  battle.recall(save.party[0]);
  advance(battle, () => battle.state === "lost", 5000);
  assert.equal(battle.remainingCandy, 0);
  assert.equal(save.unlocked, 1);
  assert.deepEqual(save.completed, []);
});

test("pause freezes authored waves, HP, cooldowns, positions and frame count, then resumes", () => {
  const { battle, save } = fixture();
  battle.place(save.party[0], 1);
  battle.start();
  advance(battle, () => battle.enemies.length > 0);
  battle.togglePause();
  assert.equal(battle.state, "paused");
  const snapshot = () =>
    JSON.stringify({
      frame: battle.frame,
      waveFrame: battle.wave.frame,
      enemies: battle.enemies.map((e) => ({
        x: e.x,
        y: e.y,
        hp: e.hp,
        cooldown: e.cooldown,
      })),
      towers: battle.towers.map((t) => ({ hp: t.hp, cooldown: t.cooldown })),
    });
  const before = snapshot();
  for (let i = 0; i < 300; i++) battle.tick();
  assert.equal(snapshot(), before);
  battle.togglePause();
  battle.tick();
  assert.equal(battle.state, "running");
  assert.notEqual(snapshot(), before);
});

test("earned XP upgrades a starter, deducts exact money, heals the synchronized fighter and gates another upgrade", () => {
  const { battle, save } = fixture();
  const p = save.pokemon[0];
  battle.place(p.uid, 1);
  battle.start();
  advance(battle, () => p.experience >= xpRequired(p.level));
  const tower = battle.towers[0];
  tower.hp = 1;
  const priorMoney = save.money,
    oldLevel = p.level,
    cost = levelCost(oldLevel);
  assert.equal(trainPokemon(save, p, data), true);
  assert.equal(p.level, oldLevel + 1);
  assert.equal(p.experience, 0);
  assert.equal(save.money, priorMoney - cost);
  battle.syncPokemon(p);
  assert.equal(tower.hp, hitPoints(data.species[p.speciesId], p.level));
  assert.equal(tower.level, p.level);
  assert.equal(trainPokemon(save, p, data), false);
  const e = makePokemon(data, 1, 16);
  assert.equal(evolvePokemon(e, data), true);
  assert.equal(e.speciesId, 2);
});

test("uncapturable enemies remain uncapturable even at 1 HP or shiny", () => {
  const { battle, enemy } = movementFixture({
    original: { canCapture: false, shiny: 1 },
  });
  enemy.hp = 1;
  assert.equal(Boolean(battle.canCapture(enemy)), false);
  assert.equal(battle.capture(enemy.uid).ok, false);
});

// Source regression: method_367 uses candy.gfx.hitTestObject(this.gfx), not center distance.
// A returning Rattata and 31x31 candy overlap at a 27px vertical offset.
test("REGRESSION: candy collisions account for visible sprite bounds beyond a 23px center radius", () => {
  const { battle, enemy } = movementFixture({ candies: [{ x: 80, y: 27 }] });
  for (let i = 0; i < 30 && enemy.alive && !enemy.candy; i++) battle.tick();
  assert.ok(
    enemy.candy,
    "Overlapping candy and Rattata bounding boxes should result in pickup",
  );
});

// Source method_367 does not limit collision checks to outward-bound enemies.
test("REGRESSION: a returning enemy can pick up newly dropped candy", () => {
  const { battle, enemy } = movementFixture({ candies: [{ x: 200, y: 0 }] });
  enemy.x = 70;
  enemy.y = 0;
  battle.turnAround(enemy);
  Object.assign(battle.candies[0], { x: 50, y: 0 });
  for (let i = 0; i < 6 && !enemy.candy; i++) battle.tick();
  assert.ok(
    enemy.candy,
    "Returning enemies must still collide with loose candy",
  );
});

// Source method_233 discards candy at the entrance, even when runAway=false;
// the enemy then walks outward again instead of holding the candy forever.
test("REGRESSION: non-running enemies surrender carried candy at entrance and reset outward travel", () => {
  const { battle, enemy } = movementFixture({ original: { runAway: false } });
  advance(battle, () => Boolean(enemy.candy), 60);
  for (let i = 0; i < 80 && battle.remainingCandy > 0; i++) battle.tick();
  assert.equal(
    battle.remainingCandy,
    0,
    "A runAway=false enemy must still steal its candy at the entrance",
  );
});

// Source method_367 keeps a freeRoam enemy moving outward after pickup;
// method_233 marks candy stolen and removes that enemy at the far exit.
test("REGRESSION: free-roam enemies keep moving toward the far exit after candy pickup", () => {
  const { battle, enemy } = movementFixture({
    candies: [{ x: 50, y: 0 }],
    original: { freeRoam: true },
  });
  advance(battle, () => Boolean(enemy.candy), 30);
  assert.equal(
    enemy.outward,
    true,
    "freeRoam carriers should not reverse direction",
  );
  advance(battle, () => battle.state === "lost", 40);
  assert.equal(battle.remainingCandy, 0);
  assert.equal(enemy.alive, false);
});

// Base screen_Level.check_For_End_Of_Game (AS3 lines734–749) ends defense
// only when candy is stolen or waves finish; survival is an explicit stage rule.
test("REGRESSION: ordinary defense stages do not impose an undeclared party-survival loss rule", () => {
  const { battle, save } = fixture(1);
  assert.equal(battle.level.requiresPartySurvival, false);
  battle.place(save.party[0], 1);
  battle.start();
  battle.towers[0].hp = 0;
  battle.towers[0].alive = false;
  battle.tick();
  assert.equal(
    battle.state,
    "running",
    "Candy remains and this stage has no party-survival objective",
  );
});
