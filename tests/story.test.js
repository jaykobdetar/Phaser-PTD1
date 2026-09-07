import assert from "node:assert/strict";
import fs from "node:fs";
import { EndingStory } from "../src/ending-story.js";
import { Battle } from "../src/battle.js";
import { newSave, makePokemon } from "../src/model.js";
const data = JSON.parse(
  fs.readFileSync(new URL("../public/data/game-data.json", import.meta.url)),
);
const level = JSON.parse(
  fs.readFileSync(new URL("../public/data/levels.json", import.meta.url)),
).levels.find((l) => l.id === 36);
const manifest = JSON.parse(
  fs.readFileSync(
    new URL("../public/assets/story36/manifest.json", import.meta.url),
  ),
);
function setup(options = {}) {
  const save = newSave(data, 1);
  save.unlocked = 36;
  const events = [];
  if (options.slowbro) {
    const p = makePokemon(data, 80, 65, {
      shiny: 2,
      experience: 5000,
      target: "last",
    });
    save.pokemon.push(p);
    if (options.party !== false) save.party[save.party.indexOf(null)] = p.uid;
  }
  if (options.replay) save.completed.push(36);
  const b = new Battle(
    data,
    level,
    save,
    (type, e) => events.push({ type, e }),
    { campaignId: 36 },
  );
  const s = new EndingStory(b, manifest);
  s.start();
  return { save, b, s, events };
}
{
  const { save, b, s, events } = setup();
  assert.equal(s.canSkip, false);
  assert.equal(s.skip(), false);
  assert.equal(save.unlocked, 36);
  assert.equal(s.panel.frame, 2);
  for (let i = 0; i < 6; i++) assert(s.next());
  assert.equal(s.panel.frame, 19);
  assert.equal(save.unlocked, 36);
  assert(s.next());
  assert.equal(s.phase, "ending");
  assert.equal(save.unlocked, 37);
  assert(save.completed.includes(36));
  assert.equal(save.lastLevelVisited, 36);
  assert.equal(save.badges ?? 0, 0);
  assert.equal(b.wave.finished, true);
  assert.equal(b.state, "story");
  assert.equal(b.enemies.length, 0);
  assert.equal(b.towers.length, 0);
  assert.equal(b.stats.earned, 0);
  assert.equal(b.frame, 0);
  s.next();
  assert.equal(s.panel.frame, 3);
  s.next();
  assert.equal(s.panel.frame, 6);
  s.next();
  assert.equal(s.panel.frame, 7);
  s.next();
  assert.equal(s.finished, true);
  assert.equal(save.badges, 8);
  assert.equal(b.state, "won");
  assert.equal(s.next(), false);
  assert.equal(events.filter((e) => e.type === "story-progress").length, 1);
  assert.equal(events.filter((e) => e.type === "story-complete").length, 1);
  assert.equal(
    events.some((e) => e.type === "finish"),
    false,
  );
  console.log(
    "first visit: 7 exact intro panels, no initial skip, unlock37 before ending, no combat/rewards, no-Slowbro branch and badge8",
  );
}
for (const accepted of [true, false]) {
  const { save, s } = setup({ slowbro: true, replay: true });
  const p = save.pokemon[1],
    before = structuredClone(p),
    formation = [...save.party];
  assert(s.skip());
  assert.equal(s.phase, "ending");
  s.next();
  s.next();
  assert.equal(s.panel.frame, 4);
  assert.equal(s.next(), false);
  assert(s.chooseTrade(accepted));
  assert.equal(s.panel.frame, 5);
  assert.equal(save.pokemon[1], p);
  assert.deepEqual(save.party, formation);
  if (accepted) {
    assert.equal(p.speciesId, 108);
    assert.equal(p.level, 1);
    assert.equal(p.experience, 0);
    assert.deepEqual(p.moves, [119]);
    assert.equal(p.selectedMove, 119);
    assert.equal(p.uid, before.uid);
    assert.equal(p.shiny, 2);
    assert.equal(p.target, "last");
  } else assert.deepEqual(p, before);
  assert.equal(s.chooseTrade(true), false);
  s.skip();
  assert.equal(save.badges, 8);
  console.log(
    `source trade ${accepted ? "accepted" : "declined"}: exactbranch, identity/appearance/party preserved`,
  );
}
{
  const { save, s } = setup({ slowbro: true, party: false, replay: true });
  s.skip();
  s.next();
  s.next();
  assert.equal(s.panel.frame, 6);
  assert.equal(save.pokemon[1].speciesId, 80);
  console.log("storage Slowbro does not trigger original party-only trade");
}
{
  const { save } = setup({ slowbro: true });
  const before = JSON.stringify(save),
    copy = structuredClone(save);
  const b = new Battle(data, level, copy, () => {}, { campaignId: 36 });
  const s = new EndingStory(b, manifest);
  s.start();
  s.completeIntro();
  s.skip();
  assert.equal(JSON.stringify(save), before);
  console.log("preview clone completion leaves real save unchanged");
}
