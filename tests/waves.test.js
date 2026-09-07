import assert from "node:assert/strict";
import fs from "node:fs";
import {
  createWave,
  getStage,
  listStages,
  checkStageOutcome,
} from "../src/waves-runtime.js";
function simulate(ref, options = {}) {
  let wave,
    spawns = [],
    pending = [],
    events = [];
  wave = createWave(ref, {
    seed: 123,
    ...options,
    onSpawn(profile, scale, path, startPoint) {
      assert(profile.num > 0);
      assert(Number.isInteger(profile.level));
      assert(profile.base_HP > 0);
      assert(Number.isInteger(profile.speed));
      spawns.push({
        frame: wave?.frame ?? 0,
        wave: wave?.currentWave ?? 1,
        profile,
        scale,
        path,
        startPoint,
      });
      pending.push(profile);
    },
    onEvent(e) {
      events.push(e);
    },
  });
  const actors = wave.presetTowers();
  for (const p of actors) {
    assert(p.profile.num > 0);
    assert(p.profile.base_HP > 0);
  }
  for (let t = 0; t < 100000 && !wave.finished; t++) {
    wave.tick();
    if (wave.state.currentSetTime <= 0 && wave.state.currentSetTime2 <= 0) {
      for (const p of pending) wave.defeated(p);
      pending = [];
      wave.enemyCleared();
    }
    if (wave.objectiveMode === "invasion") break;
  }
  return { wave, spawns, actors, events };
}
const first = simulate(1);
assert.equal(first.spawns.length, 15);
assert.deepEqual(
  first.spawns.map((s) => s.frame),
  [120, 300, 318, 498, 516, 534, 714, 732, 750, 768, 948, 966, 984, 1002, 1020],
);
assert.deepEqual(
  first.spawns.map((s) => s.profile),
  simulate(1).spawns.map((s) => s.profile),
);
assert.equal(simulate(4).spawns.length, 67);
assert.equal(simulate(41).spawns.length, 6);
assert.equal(getStage(26).mode, "invasion");
assert.equal(
  checkStageOutcome(26, { candiesCaptured: 4, remainingEnemies: 0, energy: 0 })
    .status,
  "won",
);
assert.equal(
  checkStageOutcome(26, { candiesCaptured: 0, remainingEnemies: 0, energy: 0 })
    .status,
  "lost",
);
assert.equal(
  checkStageOutcome(12, {
    candiesCaptured: 0,
    remainingEnemies: 0,
    wavesFinished: true,
  }).nextStage,
  "class_1115",
);
assert.equal(createWave(17).finished, false);
assert.equal(createWave(36).finished, false);
const story = createWave(36);
story.advanceStory();
assert(story.finished);
assert.equal(simulate(30).wave.finished, true);
const results = [];
for (const stage of listStages()) {
  if (
    stage.mode === "branch" ||
    stage.mode === "story" ||
    String(stage.id).startsWith("multi_")
  )
    continue;
  const run = simulate(stage.id);
  assert(
    run.wave.finished || stage.mode === "invasion",
    stage.className + " stalled unexpectedly",
  );
  results.push({
    stage: stage.className,
    id: stage.id,
    name: stage.displayName,
    mode: stage.mode,
    spawnCount: run.spawns.length,
    presetTowers: run.actors.length,
    finished: run.wave.finished,
    frames: run.wave.frame,
    flags: [...run.wave.flags],
    lastWave: run.wave.currentWave,
  });
}
// All 5 first-room Rock Tunnel encounter selectors execute original wave bodies.
for (const waveClass of [
  "class_23",
  "class_71",
  "class_70",
  "class_72",
  "class_69",
])
  assert(simulate(17, { waveClass }).wave.finished);
// Version choice changes original conditional species pools while a seed remains repeatable.
const red = simulate(4, { seed: 42, version: 1 }).spawns.map(
  (s) => s.profile.num,
);
const blue = simulate(4, { seed: 42, version: 2 }).spawns.map(
  (s) => s.profile.num,
);
assert.notDeepEqual(red, blue);
console.log(
  "Passed exact first-stage schedule, seeded profiles, version-dependent species, all campaign/variant combat waves, invasion/branch/story safeguards, NPC profiles, and stage transitions (" +
    results.length +
    " stages).",
);
