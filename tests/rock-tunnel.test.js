import assert from "node:assert/strict";
import fs from "node:fs";
const {
  RockTunnel,
  ROCK_TUNNEL_ROOMS,
  tunnelWildSpecies,
  partyHasFlash,
  recordTunnelSessionCapture,
  fieldMoveEligibility,
  teachFieldMove,
  awardRoute2Flash,
} = await import("../src/rock-tunnel.js");
const { Battle } = await import("../src/battle.js");
const { ReverseBattle } = await import("../src/reverse-battle.js");
const { initializeStageHooks } = await import("../src/stage-hooks.js");
const { makePokemon, newSave } = await import("../src/model.js");
const { createWave, getStage } = await import("../src/waves-runtime.js");
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
function save() {
  const value = newSave(data, 25);
  value.unlocked = 17;
  value.money = 50000;
  value.pokemon = [
    makePokemon(data, 25, 42, { uid: "pikachu", moves: [1, 225] }),
    makePokemon(data, 101, 42, { uid: "electrode", moves: [1] }),
  ];
  value.party = value.pokemon.map((p) => p.uid);
  return value;
}
function game(options = {}) {
  return new RockTunnel(data, save(), {
    seed: 123,
    session: { pikachuCaptures: 0 },
    ...options,
  });
}
function win(tunnel) {
  const next = tunnel.choose("battle");
  assert.equal(next.status, "battle");
  const id = next.battle.token;
  const before = JSON.stringify([tunnel.save.completed, tunnel.save.unlocked]);
  const battle = {
    level: next.battle.level,
    options: next.battle.options,
    state: "running",
    stats: {},
    warnings: new Set(),
    emit(type, result) {
      assert.equal(type, "finish");
      assert.equal(result.tunnel, true);
      assert.equal(
        JSON.stringify([tunnel.save.completed, tunnel.save.unlocked]),
        before,
      );
    },
  };
  tunnel.bindBattle(battle, id);
  battle.finish(true);
  battle.finish(true);
  assert.throws(() => tunnel.resolveBattle(id, true), /stale/);
  return tunnel.view();
}

// Original int(Math.random()*100) thresholds; exact 51/26/8/8/7 weights.
const counts = {};
for (let i = 0; i < 100; i++) {
  const id = tunnelWildSpecies(() => (i + 0.1) / 100);
  counts[id] = (counts[id] ?? 0) + 1;
}
assert.deepEqual(counts, { 41: 51, 74: 26, 95: 8, 100: 8, 66: 7 });
assert.throws(() => tunnelWildSpecies(() => 1));
const noFlash = game();
noFlash.save.party = ["electrode"];
assert.equal(partyHasFlash(noFlash.save), false);
assert.equal(noFlash.enter().status, "requires-flash");
assert.equal(noFlash.choose("right").status, "requires-flash");
assert.throws(() => noFlash.complete());

// Shortest exit: room2 trainer then room4 invasion. Rooms3/6/exit never fight.
const normal = game();
normal.enter();
normal.choose("right");
assert.equal(normal.view().status, "encounter");
assert.equal(normal.view().encounter.kind, "trainer");
assert.equal(normal.choose("up").status, "encounter");
win(normal);
normal.choose("up");
assert.equal(normal.room, 3);
assert.equal(normal.status, "route");
normal.choose("up");
assert.equal(normal.view().encounter.kind, "invasion");
win(normal);
normal.choose("up");
assert.equal(normal.room, 6);
assert.equal(normal.status, "route");
normal.choose("left");
assert.equal(normal.status, "exit");
assert.deepEqual(normal.save.completed, []);
assert.equal(normal.save.unlocked, 17);
assert.deepEqual(normal.flags, [
  false,
  true,
  true,
  false,
  false,
  false,
  false,
  false,
]);
normal.choose("exit");
assert.equal(normal.status, "completed");
assert.deepEqual(normal.save.completed, [17]);
assert.equal(normal.save.unlocked, 18);
assert.equal(normal.save.money, 50000);
assert.equal(normal.save.pokemon.length, 2);

// Complete the optional map loop, including forced wild encounters on re-entry.
const full = game();
full.enter();
full.choose("left");
win(full);
assert(full.flags[0]);
full.choose("right");
win(full);
full.choose("up");
full.choose("up");
win(full);
full.choose("up");
full.choose("up");
win(full);
full.choose("right");
assert.equal(full.room, 9);
assert.equal(full.status, "route");
full.choose("right");
win(full);
full.choose("down");
assert.equal(full.room, 7);
win(full);
full.choose("down");
assert.equal(full.room, 5);
win(full);
full.choose("up");
assert.equal(full.room, 7);
assert.equal(full.status, "encounter");
win(full);
full.choose("up");
assert.equal(full.room, 8);
assert.equal(full.status, "route");
full.choose("left");
assert.equal(full.view().encounter.kind, "secret");
win(full);
assert(full.flags.every(Boolean));
assert.deepEqual(full.save.originalExtraInfo, [32]);
assert.equal(full.save.unlocked, 17);
full.choose("left");
full.choose("right");
assert.equal(full.status, "route"); // secret doesn't repeat this visit
full.choose("left");
full.choose("down");
full.choose("left");
full.choose("exit");
assert.equal(full.save.unlocked, 18);

// Session capture count, party membership, level and one-time shiny reward.
full.enter();
assert.equal(full.status, "quest");
full.choose("check-quest");
assert.equal(full.questResult.received, false);
full.choose("continue");
for (let i = 0; i < 10; i++)
  recordTunnelSessionCapture({ speciesId: 25 }, full.session);
recordTunnelSessionCapture({ speciesId: 26 }, full.session);
assert.equal(full.session.pikachuCaptures, 10);
full.enter();
full.choose("check-quest");
assert.equal(full.questResult.received, true);
const reward = full.save.pokemon.at(-1);
assert.equal(reward.speciesId, 100);
assert.equal(reward.level, 5);
assert.equal(reward.shiny, 1);
assert.deepEqual(reward.moves, [1]);
assert.equal(reward.selectedMove, 1);
assert.deepEqual(full.save.party, ["pikachu", "electrode"]);
assert.deepEqual(full.save.originalExtraInfo, [32, 33]);
full.enter();
assert.equal(full.status, "route");
assert(full.flags.every((value) => !value));

// One lost encounter ends the visit; re-enter starts with all eight flags clear.
const lost = game();
lost.enter();
lost.choose("right");
const lostRequest = lost.choose("battle").battle;
lost.resolveBattle(lostRequest.token, false);
assert.equal(lost.status, "failed");
assert.equal(lost.save.unlocked, 17);
lost.enter();
assert(lost.flags.every((value) => !value));

// All fifteen selected wave scripts exist, run to completion, and use real paths.
let schedules = 0,
  spawns = 0;
for (const [number, room] of Object.entries(ROCK_TUNNEL_ROOMS)) {
  const level = getStage(room.stage);
  assert(level.backgroundSymbolId);
  assert(Object.keys(level.paths).length);
  assert(level.spots.length);
  if (!room.wild) continue;
  for (const waveClass of Object.values(room.wild)) {
    const wave = createWave(level.id, {
      seed: 7,
      waveClass,
      onSpawn(profile, scale, route, start) {
        assert(data.species[profile.num]);
        assert(level.paths[route]?.length, `${number}/${waveClass}/${route}`);
        assert(start >= 0 && start < level.paths[route].length);
        spawns++;
      },
    });
    for (let i = 0; i < 100000 && !wave.finished; i++) {
      wave.tick();
      if (wave.state.currentSetTime <= 0 && wave.state.currentSetTime2 <= 0)
        wave.enemyCleared();
    }
    assert(wave.finished, `${number}/${waveClass} did not finish`);
    assert.equal(wave.flags.size, 0);
    schedules++;
  }
}
assert.equal(schedules, 15);

// Actual Battle/ReverseBattle integration and early-save protection. Clear wild
// spawns immediately here: this verifies orchestration, not combat balance.
const live = game();
live.enter();
live.choose("left");
const wildRequest = live.choose("battle").battle;
const actual = new Battle(
  data,
  wildRequest.level,
  live.save,
  () => {},
  wildRequest.options,
);
live.bindBattle(actual, wildRequest.token);
initializeStageHooks(actual);
actual.place("pikachu", actual.level.spots[0].index);
assert(actual.start());
assert.equal(actual.wave.waveClass, wildRequest.level.waveClass);
for (let i = 0; i < 100000 && actual.state === "running"; i++) {
  for (const e of [...actual.enemies]) actual.remove(e);
  actual.tick();
}
assert.equal(actual.state, "won");
assert(live.flags[0]);
assert.equal(live.save.unlocked, 17);
live.choose("right");
win(live);
live.choose("up");
live.choose("up");
const invadeRequest = live.choose("battle").battle;
const invasion = new ReverseBattle(
  data,
  invadeRequest.level,
  live.save,
  () => {},
  invadeRequest.options,
);
live.bindBattle(invasion);
initializeStageHooks(invasion);
assert.equal(invasion.towers.length, 3);
assert.equal(invasion.energy, 80);
assert.equal(invasion.launchCost, 20);
assert(invasion.start());
for (const t of invasion.towers) t.alive = false;
assert(invasion.launch("pikachu"));
assert.equal(invasion.enemies[0].freeRoam, true);
assert.equal(invasion.enemies[0].runAway, false);
for (let i = 0; i < 10000 && invasion.state === "running"; i++) invasion.tick();
assert.equal(invasion.state, "won");
assert(live.flags[2]);
assert.equal(live.save.unlocked, 17);

// Original Cut -> Route2 bush -> Flash purchase chain, including Abra fork.
const tmSave = save();
tmSave.pokemon.push(makePokemon(data, 1, 35, { uid: "bulbasaur", moves: [1] }));
const learner = tmSave.pokemon.at(-1);
tmSave.unlocked = 16;
assert.equal(
  fieldMoveEligibility(data, tmSave, learner, 224).reason,
  "complete-digletts-cave",
);
tmSave.unlocked = 17;
assert(teachFieldMove(data, tmSave, learner, 224).ok);
assert.equal(tmSave.money, 40000);
assert.equal(
  teachFieldMove(data, tmSave, learner, 225).reason,
  "obtain-flash-on-route-2",
);
const route2 = {
  level: getStage(3),
  save: tmSave,
  stageHooks: { cutOpened: true, abraUid: "abra" },
};
assert.equal(awardRoute2Flash(route2, true), false);
route2.stageHooks.abraUid = null;
assert.equal(awardRoute2Flash(route2, false), false);
assert(awardRoute2Flash(route2, true));
assert(teachFieldMove(data, tmSave, learner, 225).ok);
assert.equal(tmSave.money, 30000);
assert(learner.moves.includes(225));
const fullSlots = makePokemon(data, 25, 42, {
  uid: "four-slots",
  moves: [1, 2, 3, 4],
  selectedMove: 4,
});
tmSave.pokemon.push(fullSlots);
const beforeCost = tmSave.money;
assert.equal(
  teachFieldMove(data, tmSave, fullSlots, 225).reason,
  "choose-replacement",
);
assert.equal(tmSave.money, beforeCost);
assert(teachFieldMove(data, tmSave, fullSlots, 225, 3).ok);
assert.equal(fullSlots.selectedMove, 1);
assert.equal(fullSlots.moves.length, 4);
console.log(
  `Rock Tunnel passed: exact ten-room navigation, mandatory trainers/invasions, optional secret loop, all 15 wild schedules (${spawns} spawns), actual Battle/ReverseBattle integration, deferred progression, loss reset, Flash acquisition/TM costs, and one-time shiny quest.`,
);
