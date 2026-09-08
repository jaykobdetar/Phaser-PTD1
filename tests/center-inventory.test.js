import test from 'node:test';
import assert from 'node:assert/strict';
import {centerInventory} from '../src/center-inventory.js';

test('Center inventory names source stones and rods using only recorded item counts',()=>{
  const profile={inventory:{1:2,2:3,3:4,4:5,5:6,6:1,8:1}},before=structuredClone(profile),rows=centerInventory(profile);
  assert.deepEqual(rows.filter(row=>row.ownershipKnown).map(row=>[row.id,row.name,row.count]),[
    [1,'Moon Stone',2],[2,'Leaf Stone',3],[3,'Thunder Stone',4],[4,'Water Stone',5],[5,'Fire Stone',6],[6,'Old Rod',1],[8,'Super Rod',1],
  ]);
  assert.equal(rows.find(row=>row.id===6).icon,'oldRod');
  assert.equal(rows.find(row=>row.id===8).icon,'superRod');
  assert.deepEqual(profile,before);
});

test('Center inventory never infers ownership from quests, completed stages or unused numeric IDs',()=>{
  const profile={inventory:{7:3,9:4},challengeCompleted:6,unlocked:42,completed:Array.from({length:42},(_,i)=>i+1),extraInfoValues:{6:1,7:1,8:1,9:1},originalExtraInfo:[6,7,8,9]},rows=centerInventory(profile);
  for(const name of ['Ice Stone','Silph Scope']){
    const row=rows.find(row=>row.name===name);assert.equal(row.id,null);assert.equal(row.count,null);assert.equal(row.owned,false);assert.equal(row.ownershipKnown,false);
  }
  for(const id of [6,8]){const row=rows.find(row=>row.id===id);assert.equal(row.count,0);assert.equal(row.owned,false);}
  assert.deepEqual(rows.filter(row=>row.kind==='unknown').map(row=>[row.id,row.name,row.count]),[[7,'Item 7',3],[9,'Item 9',4]]);
});

test('Center inventory includes all reference entries for empty profiles and ignores invalid counts',()=>{
  assert.equal(centerInventory(null).length,9);
  const rows=centerInventory({inventory:{1:-1,2:0,3:'4',4:NaN,5:Infinity,6:1.5,8:0,9:-2}});
  assert.equal(rows.length,9);assert(rows.every(row=>!row.owned));
});
