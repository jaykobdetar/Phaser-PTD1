# Production game fixes — September 12, 2026

Ported from curated patch SHA-256 `dc6172ead071213e4d9938680f4c4c61baa7e2ec47764d94656b999b74380ae5`, base `2f73d0c8588e52a8c0c53ee1485a289c34e2962b`. All 14 patched files in this repository matched the manifest after applying; no conflicts or behavior adaptations were needed. All nine fixes were absent before application. Online-specific code, authentication, multiplayer, storage services, dependencies and deployment configuration are unchanged.

Historical checkpoint/report names below identify source-checkout evidence; they are not bundled here. The standalone tests in this repository provide portable reproduction commands without bot tooling. Run `node --test tests/capture-capacity.test.js tests/experience-overflow.test.js tests/move-native.test.js tests/native-text.test.js tests/rock-tunnel.test.js tests/story-runtime.test.js tests/story-reward-gates.test.js` from the repository root.

## Fix index

| ID | Problem and impact | Production location | Regression evidence |
| --- | --- | --- | --- |
| QA-001 | Earned shiny Voltorb exists in storage but is absent from the immediate Pokédex | `src/rock-tunnel.js`, `checkShinyQuest` | Immediate shiny ownership assertion in `tests/rock-tunnel.test.js` |
| QA-002 | Story encounter selectors bypass their supplied RNG | `src/story-data-controllers.js`, three random encounter selectors | Injected RNG/global RNG disagreement test in `tests/story-runtime.test.js` |
| QA-003 | Cerulean achievement description omits the original priority rule | `src/achievements.js`, achievement 3 description | Existing achievement rule tests; description-only change |
| QA-004 | Redeployed actors repeatedly receive compounding bonus XP, eventually corrupting saved XP | `src/battle.js`, `defeat` | Independent XP shares, 40 redeployments, large boss reward, save validation |
| QA-005 | First-clear Dojo/fossil/item reward scenes never receive their eligibility flag | `src/battle.js`, `finish` | Six standalone native movie/gate tests and three actual earned first-clear rewards |
| QA-006 | Enemy Mirror Move copies Earthquake and fails a tower-only cast | `src/move-native.js`, native Earthquake adapter | Real enemy Mirror Move → Earthquake test |
| QA-007 | Damage disposes an active projectile effect; its loop accesses the cleared array | `src/move-native.js`, damage/effect execution | Real Stone Edge/Air Slash disposal and nested cleanup tests |
| QA-008 | Enemy Mirror Move copies Whirlwind; a stationary tower has no path to reverse | `src/battle.js`, `turnAround` | Real delayed Whirlwind effect and recorded-checkpoint replay |
| QA-009 | Capture can exceed the 5,000-Pokémon save limit and make the profile fail validation | `src/model.js`, `src/battle.js`, `src/safari-battle.js` | Last-slot and full-capacity tests for both capture paths |

### QA-001: update the Pokédex when the reward is granted

**Before:** with the genuine quest prerequisites supplied to a model fixture, `RockTunnel.choose('check-quest')` added shiny Voltorb and the quest completion flag. Its shiny dex entry appeared only after save validation/reload rebuilt ownership. The original popup path already updated ownership.

**Change:** call the existing `recordOwned(save, pokemon)` operation immediately after adding the reward. The reward prerequisites, species, level, form and quest flags are unchanged. The regression asserts the immediate state before reload.

**Evidence limit:** the original defect was isolated through a quest-prerequisite fixture, not a claimed complete quest playthrough. See historical QA-001.

### QA-002: use the story runtime's RNG

**Before:** `StoryRuntime` supplied its RNG through a Math adapter, but three recovered controller bodies called global `Math.random()`. Setting the supplied draw to 0.1 and the global draw to 0.99 selected Machop instead of the expected Zubat.

**Change:** those three calls use `this.Math.random()`, the existing adapter. The test checks the Zubat result and confirms the global function was not replaced. Ordinary production randomness is still the default; no spawn is forced and no encounter probability changes.

**Porting note:** this file contains translated controllers. If another build regenerates it from an external translator, apply the same qualification there or regeneration can undo the fix. No translator for this file was found among this checkout's tools.

### QA-003: explain the existing achievement priority

**Before:** the independent descriptions suggested a qualifying Cerulean win would award both achievements 3 and 8. The source callback deliberately uses an exclusive `if` / `else if`.

**Change:** achievement 3 explains that the all-candy, level-30 achievement takes priority when both qualify. Both can still be earned on separate qualifying visits. This is a wording correction; it does not award both or alter the recovered rule. The fixture matrix and original ambiguity remain in the historical finding.

### QA-004: award one independent XP share per owned Pokémon

**Before:** recalled/redeployed combat actors retained separate entries in a defeated enemy's contributor list despite pointing to the same saved Pokémon. The common `xp` variable was doubled inside the recipient loop. Bonuses compounded and duplicate actors each received a share. A recorded stage-40 phase produced −1,103,410,264 XP; the normal save validator rejected it.

**Change:** deduplicate contributors by saved Pokémon identity, retaining the most recent contributing actor for the native receiver/XP animation. Divide by the number of distinct contributors. Calculate the level bonus independently for each recipient. Native shiny rounding and the existing XP threshold gate remain in the receiver.

**Tests:** three recipients now get `[30, 45, 15]` instead of cumulative `[30, 90, 60]`; 40 redeployments receive one 90-XP award; six eligible recipients receive equal 125,714-XP boss shares and the save validates. See `tests/native-text.test.js` and `tests/experience-overflow.test.js`.

**Balance and saves:** this removes unintended XP inflation even before overflow occurs. Older assisted/overflow-era run timings and level progression are not valid benchmarks for the fixed game. This patch prevents future corruption; it does not infer or repair the correct XP of an already-corrupted save. Restore such a save from a known valid checkpoint. Archived failure and unchanged checkpoint.

### QA-005: restore original first-clear reward eligibility

**Before:** the Dojo and two Cinnabar reward movies read `stage.var_334`, but this port never set it. Unknown source variables defaulted to false, so wins offered only the end button. The bot was not declining an available reward.

**Recovered rule:** original `level_26.as:349` sets the flag while advancing the first-clear unlock. `level_27.as:26`, `level_32.as:28`, and `level_33.as:30` calculate `playerProfile.levelUnlocked < get_Level_Num()`. The port's source-facing counter is `save.unlocked - 1`. Therefore the equivalent pre-increment predicate is `save.unlocked <= campaignId`.

**Change:** set that flag before unlock advancement on a winning visit to the matching campaign stage 26, 27, 32 or 33. Existing movie controllers perform the actual selection and award. The bot does not set eligibility itself. The Dojo offers Hitmonlee/Hitmonchan; stages 32 and 33 offer the two fossil choices; stage 27 exposes its existing item movie.

**Tests:** first win, repeated win without duplicate rewards, loss without reward, later eligible win, both fossil choices, and stage-27 item 8. The standalone test uses `StoryRuntime` directly and imports no bot module. Its forced finish is explicitly a unit fixture, not completion evidence.

**Actual gameplay evidence:** `patched-progress-3` earned 106 at stage 26/attempt 177/seed 3882592300; 138 at stage 32/attempt 307/seed 3664875161; 140 at stage 33/attempt 508/seed 2308116359. Their `dexGained` fields confirm the rewards.

**Existing-save limitation:** this restores first-clear behavior. It does not retroactively backfill rewards for profiles that already advanced past these stages in the broken port. Automatically deciding which choice such a player should have received would require a separate migration policy. The Aerodactyl all-candy requirement is separate and unchanged.

The recovered ActionScript was read from the user's other local source tree. Its path and the earlier missing-source conclusion are documented in BOT_GAME_FIXES.md. This package does not overwrite or modify that source tree.

### QA-006: execute enemy-copied Earthquake with the correct faction

**Before:** an enemy Fearow copied slot 1 of a Graveler's moves, Earthquake. Its recovered attack body cast the enemy caster to `poke_Tower`, raising `Original cast to poke_Tower failed` in stage 21.

**Change:** preserve the original tower-cast body. For an enemy caster, the adapter damages opposing player towers at full native calculated damage and the other enemies at half damage, with the existing hit/effect operations. It does not masquerade the enemy as a player XP contributor.

**Behavior decision to review when porting:** enemy Earthquake uses the faction-reversed form of the existing tower attack. This is an explicit repair of an unsupported source assumption, not a claim that the crashing body already implemented that enemy behavior. The regression executes the real Mirror Move body and verifies damage without the cast failure. Historical checkpoint: `starter-policy-14/checkpoints/00037.json`, seed 1974644251, frame 2481.

### QA-007: finish damage cleanup, then stop the disposed effect

**Before:** Stone Edge (`class_307`) and Air Slash (`class_248`) apply damage inside projectile-array loops. Damage can synchronously dispose the active effect and null its array. Returning to the loop then reads `.length` of null.

**Change:** track the active effect. After the outermost damage operation and its nested defeat bookkeeping finish, a private sentinel unwinds that disposed effect. The effect runner handles only that sentinel for the removed effect; other exceptions still propagate to normal error reporting.

**Why nesting matters:** an early implementation interrupted nested damage inside defeat cleanup, leaving dead enemies registered and rooms stalled. The final depth counter waits until the whole damage transaction completes. A regression asserts that nested cleanup reaches its final bookkeeping action. The early implementation's `patched-fresh-1` diagnostic is superseded for this behavior.

**Tests and evidence:** real Stone Edge and Air Slash effects are disposed during lethal damage, and the nested-damage case completes. Historical failures: `starter-policy-16`, attempt 61, seed 494992048, frame 346; `starter-policy-17`, attempt 18, seed 1370345969, frame 1552. The expanded suite also exercises all 433 recovered move bodies.

### QA-008: do not reverse a nonexistent walking path

**Before:** in a real Blue auxiliary run, a copied Whirlwind's delayed `class_345.remove_Me` called `Battle.turnAround` on a stationary tower. The method indexed an undefined path and crashed.

**Change:** an entity without a walking path has no route to reverse, so leave its position and deployment intact. Existing path reversal, including reversal of a returning enemy, is unchanged. This is the chosen behavior for an otherwise unsupported stationary target, not an invented retreat or a free defeat.

**Reproduction:** `patched-collection-4/auxiliary-1-1/checkpoints/00243.json`, stage 21, seed 2807888682, frame 2703. The native regression runs Mirror Move → Whirlwind with the real `Battle.turnAround` method and verifies unchanged position/deployment. The recorded checkpoint subsequently ran to an ordinary loss at frame 12842 without an exception (`whirlwind-regression/report.json`).

### QA-009: enforce storage capacity before capture mutates the save

**Before:** the validator and Center pickup operation enforce a 5,000-Pokémon limit, but ordinary battle capture and Safari capture appended without checking it. The fresh `strict-candidate-1` run's Blue auxiliary reached 5,001 owned Pokémon in stage 31, then failed normal save validation and account persistence with `Invalid Pokémon collection.` This is a game acquisition-boundary defect exposed by an inefficient bot training route; both problems are documented separately.

**Change:** export the existing limit as `MAX_COLLECTION_SIZE` in the model and use it in validation and both capture paths. At capacity, capture returns a clear failure message before allocating a new Pokémon, removing the enemy, dropping its candy, adding a party member, or incrementing capture statistics. The last available slot remains usable. The cap is not increased and no owned Pokémon is silently deleted.

**Tests:** `tests/capture-capacity.test.js` tests both `Battle` and `SafariBattle`. Each fills slot 5,000, rejects the next capture, verifies the enemy remains alive/available and the entire save is unchanged, then validates that save. The two focused cases passed.

**Recorded failure:** `strict-candidate-1/auxiliary-1-1/checkpoints/01164.json`, seed 1860322713, stage 31, frame 15393. The battle won but the resulting profile could not be saved. The checkpoint, failing attempt and stack are archived with the other combat/acquisition failures.

**Recovery and scope:** this prevents additional captures beyond the existing limit. It does not silently trim an already-overfull profile. Restore a valid checkpoint, or explicitly release/transfer surplus Pokémon through the normal model/UI before saving. Center pickups already have a capacity guard. Capacity behavior for every separate story/achievement reward path has not been exhaustively audited; that is retained as an open follow-up, not claimed fixed by these capture tests.


## Evidence scope

Source-only historical verification completed 42 campaign levels, 20 additional battles, three navigation phases, six challenges and 151 species with an exact observational replay. These results are not claimed as target-repository playthroughs. Target checks are recorded in `validation.json`. No historical XP repair, first-clear backfill, or overfull-save migration is included. Other story/achievement acquisition limits remain an open follow-up.

## Target validation

281 tests passed, zero failed or skipped. All commands in `validation.json` passed. One additional QA-007 regression verifies independent exceptions propagate after disposal; consequently `tests/move-native.test.js` extends the archived source manifest. The manifest describes the original curated patch, not the additional test.
