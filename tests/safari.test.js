import fs from "node:fs";
import assert from "node:assert/strict";
import {
  SafariBattle,
  createSafariJoey,
  safariImpactEffects,
  createSafariProjectile,
  tickSafariProjectile,
} from "../src/safari-battle.js";
import { getStage } from "../src/waves-runtime.js";
import { newSave } from "../src/model.js";
import { resolveMoveEffects } from "../src/move-effects.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const level = getStage(29);
const source = {
  uid: "safari-joey",
  speciesId: 1000,
  level: 35,
  x: 0,
  y: 0,
  alive: true,
  effects: {},
};
const target = {
  uid: "wild",
  speciesId: 19,
  level: 25,
  x: 46,
  y: 0,
  alive: true,
  effects: {},
  hp: 20,
  maxHp: 50,
};
const checks = [];
function check(name, fn) {
  try {
    fn();
    checks.push({ name, passed: true });
  } catch (error) {
    checks.push({ name, passed: false, error: error.stack });
  }
}
function setup(emit = () => {}) {
  const save = newSave(data, 1);
  save.unlocked = 29;
  return {
    save,
    battle: new SafariBattle(data, level, save, emit, {
      seed: 123,
      rng: () => 0.99,
    }),
  };
}

check("Safari identity and temporary Joey match level29 source", () => {
  assert.equal(level.mode, "safari");
  assert.equal(level.displayName, "Safari Zone");
  assert.deepEqual(createSafariJoey().moves, [398, 397]);
  assert.equal(createSafariJoey().level, 35);
  assert.equal(createSafariJoey().selectedMove, 398);
  assert.throws(() => new SafariBattle(data, getStage(34), newSave(data, 1)));
});
check("Temporary party never enters saved collection or saved party", () => {
  const { save, battle } = setup();
  const before = JSON.stringify(save);
  assert.equal(battle.party.length, 6);
  assert.equal(battle.partyMembers.length, 1);
  assert.equal(battle.party[0].speciesId, 1000);
  assert.equal(JSON.stringify(save), before);
  assert.equal(battle.place(save.party[0], 1), false);
  assert.equal(battle.place(battle.joey.uid, 1), true);
  assert.equal(battle.towers[0].maxHp, 115);
  battle.dispose();
  assert.deepEqual(
    battle.party.map((p) => p?.uid ?? null),
    save.party,
  );
  assert.ok(!save.pokemon.some((p) => p.speciesId === 1000));
});
check(
  "Bait guarantees36-tick flinch and1800-tick half-speed without damage",
  () => {
    const result = safariImpactEffects({
      moveId: 398,
      source,
      target,
      rng: () => 0.99,
    });
    assert.deepEqual(
      result.effects.map((e) => e.kind),
      ["status", "modifier"],
    );
    assert.equal(result.effects[0].durationFrames, 36);
    assert.equal(result.effects[0].speedMultiplier, 0.0001);
    assert.equal(result.effects[1].multiplier, 0.5);
    assert.equal(result.effects[1].durationFrames, 1800);
  },
);
check("Bait and Rock speed opposites cancel without stacking", () => {
  const bait = safariImpactEffects({
    moveId: 398,
    source,
    target: { ...target, effects: { "speed-up": {} } },
  });
  assert.equal(bait.effects[1].kind, "remove-effect");
  assert.equal(bait.effects[1].key, "speed-up");
  const rock = safariImpactEffects({
    moveId: 397,
    source,
    target: { ...target, effects: { "speed-down": {} } },
    damageResult: { amount: 7 },
    rng: () => 0.29,
  });
  assert.equal(rock.effects[1].kind, "remove-effect");
  assert.equal(rock.effects[1].key, "speed-down");
});
check(
  "Rock preserves computed damage and exact30-percent speed-up chance",
  () => {
    const hit = { amount: 7, multiplier: 1, critical: false };
    const yes = safariImpactEffects({
      moveId: 397,
      source,
      target,
      damageResult: hit,
      rng: () => 0.29,
    });
    assert.equal(yes.effects[0].amount, 7);
    assert.equal(yes.effects[1].multiplier, 2);
    assert.equal(yes.effects[1].durationFrames, 72);
    assert.equal(
      safariImpactEffects({
        moveId: 397,
        source,
        target,
        damageResult: hit,
        rng: () => 0.3,
      }).effects.length,
      1,
    );
  },
);
check(
  "Safari projectile moves23 px/axis and resolves a tick after arrival",
  () => {
    const p = createSafariProjectile(source, target, data.moves[397], {
      amount: 7,
    });
    assert.deepEqual(
      tickSafariProjectile(p, () => 0.99),
      [],
    );
    assert.equal(p.x, 23);
    assert.deepEqual(
      tickSafariProjectile(p, () => 0.99),
      [],
    );
    assert.equal(p.x, 46);
    assert.deepEqual(
      tickSafariProjectile(p, () => 0.99),
      [],
    );
    assert.equal(p.arrived, true);
    assert.equal(tickSafariProjectile(p, () => 0.99)[0].amount, 7);
    assert.equal(p.done, true);
  },
);
check("Removed targets cancel projectiles without late effects", () => {
  const p = createSafariProjectile(
    source,
    { ...target, alive: false },
    data.moves[398],
    { amount: 2 },
  );
  assert.deepEqual(tickSafariProjectile(p), []);
  assert.equal(p.done, true);
  const recalled = createSafariProjectile(
    { ...source, placed: false },
    target,
    data.moves[397],
    { amount: 7 },
  );
  assert.deepEqual(tickSafariProjectile(recalled), []);
  assert.equal(recalled.done, true);
});
check(
  "Safari captures enter collection without changing the original party",
  () => {
    const { save, battle } = setup();
    const originalParty = [...save.party];
    battle.place(battle.joey.uid, 1);
    assert.equal(battle.start(), true);
    const original = battle.wave.getProfile(0, 1, 25);
    battle.spawn(original);
    const wild = battle.enemies.at(-1);
    wild.hp = Math.max(1, Math.floor(wild.maxHp * 0.1));
    const result = battle.capture(wild.uid);
    assert.equal(result.ok, true);
    assert.deepEqual(save.party, originalParty);
    assert.equal(save.pokemon.length, 2);
    assert.equal(battle.party[0].speciesId, 1000);
    battle.dispose();
    assert.deepEqual(
      battle.party.map((p) => p?.uid ?? null),
      originalParty,
    );
  },
);
check(
  "Original Rock/Bait actions operate through Battle without global move fallback",
  () => {
    const { battle } = setup();
    battle.place(battle.joey.uid, 1);
    battle.start();
    battle.setSafariAction("bait");
    const original = battle.wave.getProfile(0, 1, 25);
    battle.spawn(original);
    const wild = battle.enemies.at(-1);
    const joey = battle.towers[0];
    wild.x = joey.x + 40;
    wild.y = joey.y;
    joey.cooldown = 0;
    const hp = wild.hp;
    battle.attack(joey, [wild]);
    for (let i = 0; i < 5; i++) battle.tick();
    assert.equal(wild.hp, hp);
    assert.ok(wild.effects.flinch);
    assert.equal(wild.modifiers.speed, 0.5);
    assert.equal(battle.setSafariAction("rock"), true);
    assert.equal(battle.setSafariAction(1), false);
    wild.x = joey.x + 40;
    wild.y = joey.y;
    joey.cooldown = 0;
    battle.attack(joey, [wild]);
    for (let i = 0; i < 5; i++) battle.tick();
    assert.ok(wild.hp < hp);
    const global = resolveMoveEffects({
      data,
      source: joey,
      target: wild,
      move: data.moves[398],
      calculateDamage: () => ({ amount: 2 }),
    });
    assert.equal(global.supported, false);
    assert.equal(global.allowGenericDamage, false);
  },
);
check(
  "Complete original60-wave/419-spawn Safari schedule can finish and unlock level30",
  () => {
    let spawned = 0;
    const { save, battle } = setup((type, { enemy } = {}) => {
      if (type === "spawn") {
        spawned++;
        assert.equal(enemy.original.base_Experience, 0);
        assert.equal(enemy.level, 25);
      }
    });
    const originalParty = [...save.party];
    battle.place(battle.joey.uid, 1);
    battle.start();
    battle.recall(battle.joey.uid);
    for (let frame = 0; frame < 30000 && battle.state === "running"; frame++)
      battle.tick();
    assert.equal(battle.state, "won");
    assert.equal(spawned, 419);
    assert.equal(battle.wave.currentWave, 60);
    assert.equal(save.unlocked, 30);
    assert.ok(save.completed.includes(29));
    assert.deepEqual(save.party, originalParty);
    assert.equal(battle.warnings.size, 0);
  },
);
for (const c of checks)
  console.log(
    `${c.passed ? "PASS" : "FAIL"} ${c.name}${c.error ? "\n" + c.error : ""}`,
  );
const passed = checks.filter((c) => c.passed).length;
console.log(`${passed}/${checks.length} Safari validation groups passed.`);

assert(
  checks.every((c) => c.passed),
  JSON.stringify(checks.filter((c) => !c.passed)),
);
