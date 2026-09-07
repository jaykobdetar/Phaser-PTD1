import fs from "node:fs";
import assert from "node:assert/strict";
import * as model from "../src/model.js";
import { importLegacySave } from "../src/legacy-import.js";
import * as effects from "../src/move-effects.js";
import { originalBaseDamage } from "./fixtures/original-mechanics.js";

const data = JSON.parse(
  fs.readFileSync(
    new URL("../public/data/game-data.json", import.meta.url),
    "utf8",
  ),
);
const source = {
  speciesId: 4,
  level: 5,
  hp: 18,
  maxHp: 18,
  team: "tower",
  kind: "tower",
  modifiers: {},
  effects: {},
};
const target = {
  speciesId: 1,
  level: 5,
  hp: 19,
  maxHp: 19,
  team: "enemy",
  kind: "enemy",
  modifiers: {},
  effects: {},
};
const cast = (id, overrides = {}) =>
  effects.resolveMoveEffects({
    data,
    source,
    target,
    move: data.moves[id],
    calculateDamage: (a, b, m, o) => model.damage(data, a, b, m, () => 0.99, o),
    rng: () => 0.99,
    ...overrides,
  });
const checks = [];
function check(name, fn) {
  try {
    fn();
    checks.push({ name, passed: true });
  } catch (error) {
    checks.push({ name, passed: false, error: error.message });
  }
}

check(
  "Recovered dataset: all Kanto species and every learnset reference exists",
  () => {
    assert.equal(Object.keys(data.species).length, 164);
    assert.equal(Object.keys(data.moves).length, 433);
    for (let id = 1; id <= 151; id++) assert.ok(data.species[id]);
    for (const p of Object.values(data.species))
      for (const learnt of p.learnset) assert.ok(data.moves[learnt.moveId]);
  },
);
check(
  "New save validates and browser-storage round trip preserves party",
  () => {
    const save = model.newSave(data, 1);
    const map = new Map();
    const storage = {
      setItem: (k, v) => map.set(k, v),
      getItem: (k) => map.get(k),
    };
    model.persist(save, storage);
    const loaded = model.loadSave(data, storage);
    assert.equal(loaded.pokemon[0].speciesId, 1);
    assert.deepEqual(loaded.party, save.party);
  },
);
check(
  "Save validation rejects duplicate IDs, nonexistent party members and invalid move IDs",
  () => {
    const save = model.newSave(data, 1);
    assert.throws(() =>
      model.validateSave(
        { ...save, pokemon: [save.pokemon[0], save.pokemon[0]] },
        data,
      ),
    );
    assert.throws(() =>
      model.validateSave({ ...save, party: ["missing"] }, data),
    );
    assert.throws(() =>
      model.validateSave(
        { ...save, pokemon: [{ ...save.pokemon[0], moves: [999999] }] },
        data,
      ),
    );
  },
);
check(
  "Legacy import retains custom move IDs, selected slot, shiny form and account progress",
  () => {
    const { save } = importLegacySave(
      [
        {
          species: 1,
          level: 5,
          myID: 88,
          move1: 1,
          move2: 5,
          moveSelected: 2,
          shiny: 2,
        },
      ],
      data,
      {
        account: {
          slots: { 1: { nickname: "Ash", money: 123, advanced: 43 } },
        },
      },
    );
    const valid = model.validateSave(save, data);
    assert.equal(valid.pokemon[0].selectedMove, 5);
    assert.equal(valid.pokemon[0].shiny, 2);
    assert.equal(valid.money, 123);
    assert.equal(valid.completed.length, 42);
    assert.throws(() => importLegacySave([{ species: 1, level: -1 }], data));
  },
);
check(
  "Damage follows original integer truncation, STAB, physical category and type immunity",
  () => {
    assert.equal(
      model.damage(data, source, target, data.moves[10], () => 0.99).amount,
      14,
    );
    const ghost = { ...target, speciesId: 92 };
    assert.equal(
      model.damage(data, source, ghost, data.moves[1], () => 0.99).amount,
      0,
    );
    for (const id of [1, 6, 10, 16, 22, 31]) {
      const actual = model.damage(
        data,
        source,
        target,
        data.moves[id],
        () => 0.99,
      ).amount;
      const expected = originalBaseDamage(
        { species: data.species[source.speciesId], level: source.level },
        { species: data.species[target.speciesId], level: target.level },
        data.moves[id],
        data.typeChart,
      );
      assert.equal(actual, expected, `move${id}`);
    }
  },
);
check(
  "Stat modifiers, critical boost and ignore-positive-defense options affect damage",
  () => {
    const boosted = { ...source, modifiers: { criticalChance: 4 } };
    assert.equal(
      model.damage(data, boosted, target, data.moves[1], () => 0.2).critical,
      true,
    );
    const defended = { ...target, modifiers: { specialDefense: 4 } };
    const normal = model.damage(
      data,
      source,
      defended,
      data.moves[10],
      () => 0.99,
    ).amount;
    const ignored = model.damage(
      data,
      source,
      defended,
      data.moves[10],
      () => 0.99,
      { ignorePositiveDefense: true },
    ).amount;
    assert.ok(ignored > normal);
  },
);
check(
  "Training charges original cost, resets XP and level evolution is gated",
  () => {
    const save = model.newSave(data, 1);
    const p = save.pokemon[0];
    p.level = 15;
    p.experience = 15 ** 3;
    save.money = 100;
    assert.equal(model.trainPokemon(save, p, data), true);
    assert.equal(save.money, 20);
    assert.equal(p.experience, 0);
    assert.equal(model.evolvePokemon(p, data), true);
    assert.equal(p.speciesId, 2);
    const pikachu = model.makePokemon(data, 25, 100);
    assert.equal(model.evolvePokemon(pikachu, data), false);
  },
);
check(
  "Movement crosses segments identically at different frame subdivisions",
  () => {
    const p = {
      x: 0,
      y: 0,
      point: 0,
      path: [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 10, y: 10 },
      ],
    };
    const q = structuredClone(p);
    model.followPath(p, 15);
    for (let i = 0; i < 5; i++) model.followPath(q, 3);
    assert.deepEqual(p, q);
    assert.equal(p.x, 10);
    assert.equal(p.y, 5);
  },
);
check(
  "Sleep Powder has zero immediate damage and original72-tick sleep",
  () => {
    const r = cast(26);
    assert.ok(r.supported);
    assert.ok(!r.effects.some((e) => e.kind === "damage"));
    assert.equal(r.effects[0].durationFrames, 72);
    assert.equal(r.effects[0].speedMultiplier, 0.0001);
  },
);
check(
  "Harden and Growl apply source-specific stat multipliers and opposition cancellation",
  () => {
    assert.equal(cast(14).effects[0].multiplier, 4);
    assert.equal(cast(5).effects[0].multiplier, 0.25);
    const r = cast(14, {
      source: { ...source, effects: { "defense-down": {} } },
    });
    assert.equal(r.effects[0].kind, "remove-effect");
    assert.equal(r.effects[0].key, "defense-down");
  },
);
check(
  "Fixed damage, healing, poison immunity and Leech Seed periodic healing",
  () => {
    assert.equal(cast(29).effects[0].amount, 40);
    assert.equal(cast(231).effects[0].amount, 20);
    assert.equal(cast(115).effects[0].amount, 9);
    assert.equal(cast(24).effects.length, 0); // Bulbasaur is Poison-type.
    const r = cast(9, { target: { ...target, speciesId: 19 } });
    assert.equal(r.effects[0].intervalFrames, 36);
    assert.equal(r.effects[0].healSource, true);
  },
);
check(
  "Every declared core handler returns descriptors without mutating fighters",
  () => {
    const before = JSON.stringify({ source, target });
    for (const id of effects.HANDLED_MOVE_IDS)
      assert.equal(cast(id).supported, true, `move${id}`);
    assert.equal(JSON.stringify({ source, target }), before);
  },
);
check(
  "No-formula damage subclasses cannot silently fall back to invented damage",
  () => {
    assert.equal(
      typeof effects.moveFidelity,
      "function",
      "Copy latest move-effects.js and move-fidelity.js",
    );
    const audit = JSON.parse(
      fs.readFileSync(
        new URL("../docs/move-behavior-audit.json", import.meta.url),
        "utf8",
      ),
    );
    for (const { id } of audit.damageSubclassWithoutDirectFormula) {
      const result = cast(id);
      if (!result.supported)
        assert.equal(result.allowGenericDamage, false, `move${id}`);
    }
    assert.equal(
      effects.moveFidelity({ ...data.moves[1], id: 99999, power: null }).mode,
      "unavailable",
    );
  },
);
for (const c of checks)
  console.log(
    `${c.passed ? "PASS" : "FAIL"} ${c.name}${c.error ? " — " + c.error : ""}`,
  );
const failed = checks.filter((c) => !c.passed);
console.log(
  `${checks.length - failed.length}/${checks.length} validation groups passed.`,
);

if (failed.length) process.exitCode = 1;
