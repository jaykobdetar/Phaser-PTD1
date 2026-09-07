# Rock Tunnel

The ten-room controller is integrated through `tunnel-ui.js` and `story-data-tunnel-ui.js`. Original Canvas movie scenes, dialogue, directional controls and sound drive the recovered route graph. Native Phaser battles use the original room geometry, waves and move engine. Room wins return to navigation; only leaving the exit completes campaign stage17 and unlocks18. A lost wild encounter ends the trip, repairing an original null-loss-popup dead end.

Normal shortest route: enter with Flash, right to room2, beat the trainer, up to room3, up to room4, beat the invasion, up to room6, left to the exit, then leave. The eight optional visit flags are not required to complete the campaign stage.

## Cut and Flash acquisition

Original source: `code/popups_TM.as:18-118`, `screen_Poke_Check.as:145`, `level_3.as:35-61`, `class_1005.as:94-105`, `class_984.as:157-189`.

- Teaching either move costs **10,000** and requires the species' exact `tmMoveIds` eligibility. Flash is225, Cut224. Teaching replaces a chosen move when four slots are full. An eligible Pokémon with fewer than four moves appends the move. The helper charges only after a valid replacement is selected.
- Cut becomes available after clearing **Diglett's Cave (stage16)**: original `levelUnlocked >= 16`, equivalent to port `save.unlocked >= 17`.
- Replay **Route2 (stage3)**. Place a Pokémon that knows Cut in **spot3**; the field effect checks all four moves, regardless of its selected combat attack. Existing stage hooks already set `cutOpened`.
- Win without ever deploying Abra on this visit. `class_1005` awards `haveFlash = 1` on the victory dialogue. If Abra was deployed, the source branches to the separate Mr. Mime trade and does not grant Flash in that branch. Use `awardRoute2Flash(battle, event.won)` when acknowledging that victory; it returns true for a newly awarded Flash.
- Flash then appears in the TM teaching list. `fieldMoveEligibility(...)` returns a reason when locked/ineligible/known/unaffordable. `teachFieldMove(data, save, pokemon, id, replaceIndex)` implements the eligibility/cost/slot logic.
- Cut and Flash use their translated source combat implementations as well as their field checks. Flash applies its original global360-frame accuracy-lowering path effect (`class_519`, `class_865`).

Preserve `haveFlash: Boolean(input.haveFlash)` in `validateSave`/import/export; absent means false. Add the same field to `newSave` if desired. No free HM, automatic Flash grant, or altered price is required to make the normal campaign route progress.

## Optional secret and shiny hunt

Room9 starts its hidden trainer only when flags0..6 have all been set on this trip and flag7 is unset. Defeating its four Onix sets flag7 and persistent original extra-info32. It grants neither campaign progression nor a Pokémon immediately.

On a later entry to room1, original flag32 without33 opens the shiny hunt check. Requirements are ten Pikachu **caught in this running game session**, plus current-party Pikachu and Electrode both level42+ and not marked hacked. Source `main.var_616` is incremented by `screen_Level.captured_Poke`, not by collection count. Call `recordTunnelSessionCapture(event.profile)` on each real `capture` event; do not count preview captures. The shared `rockTunnelSession` resets on page reload, exactly like a new Flash application launch. Do not persist that count.

The successful reward is one shiny Voltorb, level5, Tackle only, experience0, added to collection (not party), plus persistent extra-info33. The controller implements it. Persist `originalExtraInfo` (array of integer IDs; this module uses32/33) through save validation, local save and backup import/export. The original anti-tamper cipher cannot be carried into native save objects; the native save validator is used as the integrity boundary, with optional `validProfile(save)` callback for a stronger policy.

## Source map and scope

| Room | Original stage | Source win flag | Encounter | Left | Right | Up | Down |
|---|---|---:|---|---|---|---|---|
| 1 | class_954 | 0 | Optional10-wave wild fight on left | Wild | 2 | — | — |
| 2 | class_956 | 1 | Gyarados40 + Geodude40, once | 1 | — | 3 | — |
| 3 | class_959 | — | Navigation only | — | 5 | 4 | 2 |
| 4 | class_1118 | 2 | Invasion80 energy,20/launch, three defenders, once | — | — | 6 | 3 |
| 5 | class_961 | 6 |20-wave wild fight on every entry | 3 | — | 7 | — |
| 6 | class_964 | — | Navigation only | Exit | 7 | 10 | 4 |
| 7 | class_963 | 5 |30-wave wild fight on every entry | 6 | — | 8 | 5 |
| 8 | class_1121 | 4 | Invasion80 energy,20/launch, three defenders, once | 9 | — | — | 7 |
| 9 | class_968 | 7 | Hidden four-Onix trainer, conditional | 10 | 8 | — | — |
| 10 | class_966 | 3 | Four Onix/Golem pairs, once | — | 9 | — | 6 |
| Exit | class_967 | — | Dialogue only; grants campaign completion | — | — | — | — |

Directions were recovered by pairing the SWF timeline's `goLeft/goRight/goUp/goDown` labels with popup `goTo...` transitions. `branchExits` in generic metadata includes dead copied methods (notably room5's initial popup); use the table/controller, not that unfiltered list. `getStage` correctly resolves all12 tunnel variant classes. Generic default `class_74` waves on room3/6/exit are never started by their normal navigation popups. These must not appear as mandatory fights.

Wild selector weights are exact:51% Zubat,26% Geodude,8% Onix,8% Voltorb,7% Machop. Room1 uses classes23/71/70/72/69; room5 uses82/83/80/81/79; room7 uses86/89/85/88/87. The test executes all15 schedules, totaling2100 spawns, verifies every species and path, and checks there are no unhandled external hooks. Trainer classes74/90/91 also finish without external hooks. All actual tunnel rooms have extracted art, path coordinates and placement spots. Challenge entries949/950/951 have their own recovered geometry and are separate from the tunnel.

See `STORY_PARITY.md` and `COMBAT_PARITY.md` for the current source coverage and test boundaries. Route tests deliberately force selected combat outcomes to test navigation independently of battle balance.
