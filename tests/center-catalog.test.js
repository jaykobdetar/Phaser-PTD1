import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  ADOPTION_CATALOG, DAILY_PRIZES, CORNER_REWARDS, SLOT_RULES, CONVERSION_COSTS,
} from '../src/center-catalog.js';

test('adoption catalogs match the 260 source cards inspected on 2026-09-07', () => {
  // Digests were calculated independently from the rendered reference card DOM.
  const reference = {
    battle:[70,'d26c9450'], common:[48,'8b4087a7'], uncommon:[84,'5fd1837f'],
    rare:[12,'d400194b'], legendary:[46,'3f69d1ad'],
  };
  for (const [category,[count,digest]] of Object.entries(reference)) {
    const rows = ADOPTION_CATALOG.filter(row=>row.category===category);
    const canonical = JSON.stringify(rows.map(row=>[
      row.id,row.referenceId,row.speciesId,row.name,row.variant,row.level,row.moves,row.cost,row.currency,
    ]));
    let hash = 2166136261;
    for (const character of canonical) hash = Math.imul(hash ^ character.charCodeAt(0),16777619) >>> 0;
    assert.equal(rows.length,count,category);
    assert.equal(hash.toString(16),digest,category);
  }
  assert.equal(new Set(ADOPTION_CATALOG.map(row=>row.id)).size,260);
});

test('catalog species and named moves resolve to recovered playable game data', () => {
  const data = JSON.parse(fs.readFileSync(new URL('../public/data/game-data.json',import.meta.url),'utf8'));
  const normalize = name => name.toLowerCase().replace(/[^a-z0-9]/g,'');
  const moves = new Set(Object.values(data.moves).map(move=>normalize(move.name)));
  for (const row of [...ADOPTION_CATALOG,...CORNER_REWARDS.filter(row=>row.kind==='pokemon')]) {
    assert.ok(data.species[row.speciesId],`${row.id}: species`);
    for (const move of row.moves) assert.ok(moves.has(normalize(move)),`${row.id}: ${move}`);
  }
});

test('daily tables preserve published odds and conversion currencies remain alternatives', () => {
  assert.deepEqual(Object.values(DAILY_PRIZES).map(tier=>tier.outcomes.reduce((sum,row)=>sum+row.weight,0)),[100000,100000,100000]);
  assert.deepEqual(DAILY_PRIZES.common.outcomes.map(row=>row.percent),[50,49.934,.05,.01,.005,.001]);
  assert.deepEqual(DAILY_PRIZES.uncommon.requirements,{type:'badges',count:3});
  assert.deepEqual(DAILY_PRIZES.rare.requirements,{type:'completed-level',name:'Route 17'});
  assert.deepEqual(CONVERSION_COSTS.shiny.prices,[{currency:'icu',amount:10},{currency:'casino',amount:750000}]);
  assert.deepEqual(CONVERSION_COSTS.shadow.prices,[{currency:'icu',amount:10},{currency:'casino',amount:1500000}]);
  assert.deepEqual(CONVERSION_COSTS.removeHackedTag.profile,[{currency:'icu',amount:10}]);
  assert.deepEqual(CONVERSION_COSTS.shiny.eligibleVariants,['regular']);
  assert.deepEqual(CONVERSION_COSTS.shadow.eligibleVariants,['regular']);
  assert.equal(CORNER_REWARDS.length,14);
  assert.deepEqual(SLOT_RULES.payouts.map(row=>row.amount),[30000,10000,1500,1500,1500,800,0]);
  assert.ok(Object.isFrozen(ADOPTION_CATALOG[0].moves));
});
