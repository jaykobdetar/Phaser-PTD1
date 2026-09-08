// Source popups_Items identifies stones 1–5, class_949 awards item 6 for
// Challenge 2, and class_1021 awards item 8 with the Super Rod win scene.
// The recovered game never assigns a Silph Scope or Ice Stone inventory ID.
// Do not infer either from a gap in IDs or from story/progression flags.
const rows = Object.freeze([
  {id:1,name:'Moon Stone',icon:'moonstone',kind:'evolution'},
  {id:2,name:'Leaf Stone',icon:'leafstone',kind:'evolution'},
  {id:3,name:'Thunder Stone',icon:'thunderstone',kind:'evolution'},
  {id:4,name:'Water Stone',icon:'waterstone',kind:'evolution'},
  {id:5,name:'Fire Stone',icon:'firestone',kind:'evolution'},
  {id:null,name:'Ice Stone',icon:'icestone',kind:'evolution'},
  {id:6,name:'Old Rod',icon:'oldRod',kind:'key-item'},
  {id:null,name:'Silph Scope',icon:'silphScope',kind:'key-item'},
  {id:8,name:'Super Rod',icon:'superRod',kind:'key-item'},
].map(Object.freeze));
const countOf = value => Number.isSafeInteger(value)&&value>0?value:0;

/** Read the selected profile's recorded inventory without changing the save.
 * A null count means this game build has no verified ownership mapping; it does
 * not mean that an unrelated numeric inventory ID has been discarded.
 */
export function centerInventory(profile) {
  const inventory=profile?.inventory??{},knownIds=new Set(rows.map(row=>row.id));
  const items=rows.map(row=>{
    const ownershipKnown=row.id!==null,count=ownershipKnown?countOf(inventory[row.id]):null;
    return {...row,key:row.icon,count,owned:count>0,ownershipKnown,
      description:!ownershipKnown?'Unavailable in this PTD 1 build.':row.kind==='evolution'?'Use from a Pokémon’s Items menu in PTD 1.':row.id===6?'Awarded by Challenge 2.':'Awarded on Route 15.'};
  });
  // Preserve visibility of imported inventory extensions without guessing what
  // they are. Future verified mappings can name them without changing saves.
  for(const id of Object.keys(inventory).filter(key=>/^[1-9]\d*$/.test(key)).map(Number).sort((a,b)=>a-b)) {
    const count=countOf(inventory[id]);
    if(!knownIds.has(id)&&count)items.push({key:`item-${id}`,id,name:`Item ${id}`,icon:null,kind:'unknown',count,owned:true,ownershipKnown:true,description:'Imported item; its use is not defined in this PTD 1 build.'});
  }
  return items;
}
