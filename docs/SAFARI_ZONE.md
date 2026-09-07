# Safari Zone

Stage29 uses `SafariBattle` with the original temporary Joey profile: species1000, level35, moves Bait398 and Rock397. Joey is never written into the player's saved collection or party. Captures enter the saved collection without replacing the player's original party. Leaving or restarting disposes the temporary battle.

The active combat path executes the translated source move classes, including Bait and Rock projectiles, status effects and ability checks. Bait applies its source flinch/slow effect without HP damage; Rock uses its original physical damage and chance of accelerating the target. The source wave script has60 waves and419 encounters, level25 and zero XP.

The original intro and win movie controllers run through `StoryRuntime`; the intro raises the badge count to at least6 at the source transition. Rendering uses recovered native Canvas movie assets and the shared original move display list.

The Safari regression suite checks the full encounter schedule, real Bait/Rock impacts, successful captures, temporary-party isolation and stage30 progression. Its full-wave completion case recalls Joey so encounters can leave; this checks wave termination rather than capture success for every encounter. See `COMBAT_PARITY.md` and `STORY_PARITY.md` for current cross-cutting behavior.
