import { hasSourceEffect } from './abilities.js';

// These are all explicit profile.myAI assignments in this SWF: class92 on
// Mewtwo in level26/wave61, class93 on Zapdos in wave26/wave_online_2.
export function initializeBossAI(fighter) {
  const original = fighter.original;
  if (!original?.myAI) return null;
  const explicit = original.myAI.sourceClass;
  const sourceClass = explicit ?? (original.num === 150 && original.move1 === 337 && original.move2 === 197 && original.move3 === 196 && original.move4 === 115 ? 'class_92' : null);
  if (!['class_92', 'class_93'].includes(sourceClass)) return null;
  fighter.bossAI = { sourceClass };
  return fighter.bossAI;
}
export function tickBossAI(battle, fighter) {
  const ai = fighter.bossAI ?? initializeBossAI(fighter);
  if (!ai || !fighter.alive) return;
  let slot = 0;
  if (ai.sourceClass === 'class_92') {
    slot = fighter.hp / fighter.maxHp <= .3 ? 4
      : !hasSourceEffect(fighter, 'class_803', 'specialDefense-up-4', 'specialDefense-up', 'amnesia') ? 1
      : !hasSourceEffect(fighter, 'class_808', 'defense-up-4', 'defense-up', 'barrier') ? 2 : 3;
  } else if (fighter.moveState?.phase === 'end') {
    slot = fighter.original.moveSelected === 2 ? 1 : 2;
  }
  const selected = fighter.original[`move${slot}`];
  if (!slot || !selected || fighter.selectedMove === selected) return;
  fighter.original.moveSelected = slot;
  battle.resetAttack(fighter, selected);
  battle.emit('boss-phase', { fighter, sourceClass: ai.sourceClass, slot, moveId: selected });
}
