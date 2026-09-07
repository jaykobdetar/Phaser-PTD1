# Validation record

The supplied client runs through native JavaScript, Phaser 3 and recovered Canvas artwork. The packaged `release-validation.json` records the final test counts and browser reports.

## Automated checks

The final run passes **163 Node tests** and **one Python server integration test**. Run `npm test` and `python3 tests/local-server.test.py` from the project directory.

- All 433 registered source moves run in two configurations for 800 ticks each: 866 scenarios, plus immediate disposal for every move. Every attack body executes. Targeted assertions cover damage, delayed projectiles, copying, statuses, abilities, weather, teleport, recall and source display geometry.
- All 12 combinations of starter and Oak's Lab placement win naturally with the native engine. Boss tests cover Gary healing eligibility, Mewtwo/Zapdos, Elite Four/Champion HP boosts, training/evolution state and party removal.
- Wave schedules, stage transitions, invasion objectives, nine targeting modes, quest facts, achievements, challenge teams/rewards and local versus/co-op isolation have regression coverage.
- Safari's 60-wave/419-encounter visit, Bait/Rock, captures and party restoration are checked. Rock Tunnel checks its ten-room graph, 15 wild schedules with 2,100 spawns, required battles, optional quests, Flash/Cut prerequisites and exit progression.
- All 2,124 recovered timelines initialize. All 136 mapped intro/win entries reach original transitions through their controls without Skip; all 66 defeat entries retain their source close action.
- Source interaction checks cover six fixed party slots, occupied-spot swaps, recall, capture/potion collision shapes, life bars, native floating text, XP contributor order and recalled actor identity.
- Actor lifecycle checks cover Selfdestruct and Explosion in campaign and Mt. Moon challenge battles, effect-phase fainting, and recall/redeployment without duplicate sprites or resumed abandoned effects.
- Profile tests cover original item/TM/relearn/evolution sequences, empty collections, achievement/gift responses, version-1 migration, legacy server imports, three profiles, local trades, global options and source Save success/retry behavior.
- Python tests verify atomic disk replacement, revision conflicts, previous-file backup, empty-collection persistence and local-origin checks.

A separate engine sweep ran 39 direct campaign entries and 26 battle variants for 4,000 ticks without native adapter exceptions. That checks integration stability, not a winning strategy for each stage.

The UI polish update also passes three Python gradient-conversion regressions, checking padded endpoints, preserved interior hard transitions, and repeatable conversion.

## Browser and visual checks

Chrome draws **584 Canvas root exports at 2,142 first, final, label and frame-action positions** without rendering exceptions. Text tests render the original damage, effective damage, healing, XP and MISS clips and verify glyph pixels and exact source colors.

Targeted source-interface browser reports cover:

- The black 800 × 480 stage, full-screen menus replacing the map, original popup layering, independent options, and resized mobile alignment.
- HUD dragging, Pokémon check menus, nine targeting controls, source key bindings, moving/recalling, potions, catching, level-up, source path order and camera bounds.
- All opening victory movies over the live map at reduced zoom, Viridian Forest's original camera position, and transformed PixelDissolve rendering.
- Source new-game flow, starter selection, party tutorial, automatic Ready Go, a natural Oak victory and original return to Chapters.
- Four native Pokédex pages, caught forms, unknown entries, original achievement/gift response frames, fixed party-slot gestures, and 0.4-alpha profile-name popup layering.
- Source Save pending/success/error/retry, options persisted before profile creation, portable backup export/import, and menu transition save acknowledgments.
- Selfdestruct and Explosion complete their original animation and damage, remove their actor and Canvas sprite pixels, and preserve the challenge collection and campaign party.

Development fixtures isolate test profiles, and some checks accelerate the original clock or select battle outcomes to inspect transitions. These are identified separately from the production play check.

## Production play check

The production test runs the Python launcher and uses actual DOM/pointer/keyboard controls, without a development inspection global. A starter-only Oak's Lab battle wins naturally at 4× speed. It verifies XP, the source chapter return, stage 2 unlock, Route 1 entry, reload persistence, stage 3 remaining locked, the preserved version-1 browser key and the disk profile revision. All game requests in this check are local. See `production-validation.json` and `battle-preview.png`.

## Scope

The checks establish recovered source coverage, targeted behavioral regressions and selected complete play sessions. They do not exhaust every possible strategy, effect combination, random outcome or story-history permutation. Trading, gifts and shared-screen multiplayer are the requested offline replacements for unavailable services. See `MIGRATION_STATUS.md`, `MOVE_PARITY.md`, `COMBAT_PARITY.md`, `SOURCE_COMBAT_TEXT.md`, `ORIGINAL_PROFILE_PARITY.md` and `STORY_PARITY.md` for implementation details.
