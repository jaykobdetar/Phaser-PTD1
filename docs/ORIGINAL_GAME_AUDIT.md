# Original recovery audit (historical)

This is the initial source-extraction record. Its observations about unfinished features describe the early port and are superseded by `MIGRATION_STATUS.md`, `COMBAT_PARITY.md`, `MOVE_PARITY.md` and `STORY_PARITY.md`. Tables and recovery trace counts are retained as provenance.

## Scope and deliverables

- Original inner SWF: `work/recovered/16_ptdBin.bin`, 21 fps; decompiled AS3 under `work/game-source/scripts`.
- `work/extract_levels.py` parses LZMA-compressed SWF tags, named placements and ActionScript level metadata. `work/extend_levels.py` adds exact embedded-font names, all variants, modes, transitions, and fixed actors.
- `work/data/levels.json`: 42 numbered campaign entry points plus 32 screen subclasses (campaign variants, challenge and multiplayer). Coordinates are original level-local pixels; use asset manifest bounds for PNG origin offsets.
- `work/data/level-art-placements.json`: 51 background symbols and 1,302 named waypoint/spot/candy markers, with original SWF matrices and character IDs.
- `work/extract_waves.py`, `work/build_wave_runtime.py`, `work/data/waves-runtime.mjs`: 71 original wave classes / 367 translated methods; seeded fresh-per-play random encounters, exact integer coercion, profile stat multipliers, original timers and defeat gates.
- `work/data/reverse-battle.js`: native invasion rules extending the project Battle engine; exact fixed actor factories, energy costs, route modes, candy theft and Saffron Dojo upgrades.
- `work/data/stage-labels.tsv`: exact names recovered from SWF TextTags, not inferred from filenames.

## Runtime integration

`createWave(levelIdOrClassName,{seed,version,onSpawn,onWave,onEvent,context,waveClass})` returns a wave object. `onSpawn(profile,scale,path,startPoint)` uses original AS3 fields. Call `tick()` once per original logical frame; call `enemyCleared()` when the enemy set is empty and `defeated(originalProfile)` on each knockout. `getProfile(a,b,c)` executes the original encounter selector. `presetTowers()` recovers fixed NPC profiles. `partyOverride()` returns Safari Joey. `advanceStory()` explicitly completes the story-only ending.

`getStage(reference)`, `listStages()`, and `checkStageOutcome(reference,facts)` expose objective metadata. Standard `wave.finished && enemies.empty` must not be used to award campaign completion for branch rooms, invasion stages, or chained battles. Invasion win is every candy stolen; invasion loss is energy exactly zero and no attackers left. Stage 36 has no combat and starts unfinished until story acknowledgement.

Use `ReverseBattle` when `level.mode === "invasion"`. It provides `launch(uid,path)`, `available(uid)`, `energy`, `launchCost`, `stolenCandy`, standard fighter arrays and renderer events. Fixed enemy defenders remain in `.towers` with `fixed:true`; player walkers remain in `.enemies` with `playerControlled:true` and `partyUid`. Source attacker flags are in metadata. Lost attackers grant no money, can be sent again, and drop carried candy.

## Campaign entry points

| # | Exact display name | Source wave | Spawns in seeded smoke run | Objective / required additional behavior |
|---|---|---|---:|---|
| 1 | Oak's Lab | class_64 | 15 | Standard candy defense. |
| 2 | Route 1 | class_63 | 19 | Standard candy defense. |
| 3 | Route 2 | class_33 | 29 | Fixed Rattata/Pidgey NPCs; Cut move224 at spot3 opens bush; Abra quest state. |
| 4 | Viridian Forest 1 | class_30 | 67 | Standard candy defense. |
| 5 | Pewter Gym | class_43 | 29 | Brock removes currently deployed party before final two Onix; adapter emits return-party. |
| 6 | Route 3 | class_25 | 150 | Standard candy defense. |
| 7 | Viridian Forest 2 | class_53 | 150 | Standard candy defense. |
| 8 | Mt. Moon 1 | class_47 | 34 | Standard candy defense. |
| 9 | Mt. Moon 2 | class_24 | 210 | Standard candy defense. |
| 10 | Cerulean Gym 1 | class_50 | 128 | Party composition and level achievements; optional Poliwhirl quest. |
| 11 | Cerulean Gym 2 | class_57 | 1 | Standard candy defense. |
| 12 | Route 24 | class_48 | 4 | Ten-phase Route 24 chain, alternating defense/invasion; see transition graph. |
| 13 | Route 5 | class_44 | 315 | Standard candy defense. |
| 14 | Vermillion City | class_28 | 15 | Fixed Poliwhirl/Charmeleon NPCs; encounter/quest branches. |
| 15 | Vermillion Gym | class_31 | 137 | entered_Battle includes achievement, party-composition or quest conditions. |
| 16 | Diglett's Cave | class_38 | 125 | Standard candy defense. |
| 17 | Rock Tunnel | none | — | Rock Tunnel maze, eight room flags, Flash move225 prerequisite, random encounter choices. |
| 18 | Lavender Town | class_37 | 24 | Standard candy defense. |
| 19 | Route 8 | class_36 | 270 | Standard candy defense. |
| 20 | Celadon Gym | class_59 | 36 | Three fixed NPC towers; level/party achievements. |
| 21 | Rocket Hideout | class_32 | 94 | Standard candy defense. |
| 22 | Poke Tower 1 | class_55 | 150 | Standard candy defense. |
| 23 | Poke Tower 2 | class_42 | 19 | Contains fixed NPC towers from recovered profile factories. |
| 24 | Route 12 | class_46 | 270 | Standard candy defense. |
| 25 | Saffron City | class_61 | 19 | entered_Battle includes achievement, party-composition or quest conditions. |
| 26 | Saffron Dojo | class_65 | 0 | Reverse invasion, 14 fixed defenders, energy500, cost20. Candy1 HP×3/+100; candy2 speed×1.5/+200; candy3 SpDef×1.5/+300. |
| 27 | Route 15 | class_41 | 360 | Contains fixed NPC towers from recovered profile factories. |
| 28 | Fuchsia Gym | class_54 | 36 | When final wave finishes, Muk runAway=true; special composition achievement. |
| 29 | Safari Zone | class_39 | 419 | Temporarily replace party with Joey #1000 level35, moves398/397; restore on exit; no joining current party on capture. |
| 30 | Route 17 | class_26 | 1 | Gary fixed at slot1; any enemy knockout ends wave; Zapdos AI class93 and var_490 candy restriction. |
| 31 | Route 19 | class_58 | 360 | Standard candy defense. |
| 32 | Cinnabar Island | class_49 | 209 | Standard candy defense. |
| 33 | Cinnabar Gym | class_29 | 62 | Lose if whole party faints; level restriction achievement. |
| 34 | Pallet Town | class_52 | 360 | Standard candy defense. |
| 35 | Viridian City | class_40 | 14 | Standard candy defense. |
| 36 | Viridian Ending | none | — | Story-only Viridian Ending. Explicit transition, no generated waves. |
| 37 | Power Plant | class_62 | 180 | Optional Zapdos encounter depends on six level100 Electric Pokémon and quest state. |
| 38 | Seafoam Island | class_34 | 209 | Declared30 waves, original actual script ends21; optional Articuno encounter depends on party/quest flags. |
| 39 | Victory Road | class_56 | 209 | Declared30 waves, original actual script ends21; optional Moltres encounter depends on party/quest flags. |
| 40 | Elite 4 | class_35 | 21 | Elite4 four-stage chain: level_40 → class_953 → class_955 → class_958. |
| 41 | Champion | class_60 | 6 | Six trainer Pokémon, each next spawn waits for defeat; party-wipe defeat. |
| 42 | Unknown Dungeon | class_51 | 279 | Random encounter pool selected on entry; preserves high-level profile multipliers. |

Counts are a reproducible smoke-run observation (seed123, version1, empty party/quest state), not hardcoded schedules. Some scripts select random pools, branch on party composition or wait for defeat. Exact source control flow remains in the runtime.

## Additional stage graph

```text
level_12 -> class_1115
level_17 branches -> class_954
level_40 -> class_953
class_1115 -> class_957
class_1116 -> class_960
class_1117 -> class_962
class_1118 branches -> class_964, class_959
class_1119 -> class_965
class_1121 branches -> class_963, class_968
class_953 -> class_955
class_954 branches -> class_956
class_955 -> class_958
class_956 branches -> class_954, class_959
class_957 -> class_1116
class_959 branches -> class_961, class_1118, class_956
class_960 -> class_1117
class_961 branches -> class_956, class_959, class_963
class_962 -> class_1119
class_963 branches -> class_964, class_961, class_1121
class_964 branches -> class_963, class_967, class_1118, class_966
class_965 -> class_1120
class_966 branches -> class_964, class_968
class_968 branches -> class_966, class_1121
```

Rock Tunnel room1 (`class_954`) rolls floor(random()*100): 0..50 Zubat/class_23, 51..76 Geodude/class_71, 77..84 Onix/class_70, 85..92 Voltorb/class_72, 93..99 Machop/class_69. Those five original wave classes execute successfully. Room routes and encounter choices are separate from any one wave victory.

## Core mechanics recovered

- Marker names define behavior: `wp_N_direction_reverse` is path p; `w2_`, `w3_`, `w4_` select alternate paths. N is the waypoint index. `spot_N` and `candy_N` are original interactive placements; marker graphics are hidden by source initialization.
- A regular enemy walks inward, takes the first overlapping available candy, turns around and carries it to its entrance. Candy is permanently lost only when the carrier exits. Killing or capturing a carrier drops candy at its current position. Dropped candy can be stolen again. A `freeRoam` enemy instead exits at the final waypoint; `runAway:false` enemies otherwise patrol repeatedly. `dropCandy` forces a drop; `var_490` prevents collection.
- HP: floor(2 * base_HP * level / 100) + 10 + level, then profile.var_655 multiplier. var_655 is HP, not range.
- Movement speed is profile.speed * mod_Speed / 10 original pixels per logical 21fps tick. Wave adjustments act on integer speed and truncate. Original fastest UI setting runs logic four times per frame.
- Base damage comes from class_194, truncating after each arithmetic assignment. Effective attacking/defending stat = floor(2*baseStat*level/100)+5, with modifiers clamped .25..4. Damage begins floor(2*level/5)+2, multiplies effectiveAttack*power/effectiveDefense, divides50, adds2, applies STAB and both target types. STAB1.5, default crit6% doubles. There is no standard Pokémon .85..1 random factor in this source routine.
- Capture is available at <=20% HP (or shiny already marked weakened), only when canCapture is true. Boss profiles explicitly turn capture off. Enemy/player attack scripts and status effects contain substantial custom behavior beyond the generic damage formula.
- Original range artwork is an ellipse with horizontal radius140 / vertical about134.4. Generic rectangular/radial targeting and uniform23px candy pickup are approximations to the original Flash hitTestObject geometry.

## Verification and material limitations

`node work/test_wave_runtime.mjs` passes exact 15-spawn Oak Lab frame sequence, seeded replay determinism, version-dependent pools, all 66 combat/invasion stage definitions in scope, five Rock Tunnel encounter selectors, fixed NPC factory profiles, stage transitions, and safeguards against false branch/story/invasion victory. The checks exercise schedules/profile creation; they do not prove combat outcomes or all optional quest branches.

`node work/test_reverse_battle.mjs` passes exact energy/cost, all14 Saffron defenders, candy return routes and four-candy win, +600 total energy bonuses, attacker reuse, Route24 straight-through invasion, disabled captures, drop-on-defeat, no rewards for lost player attackers, and energy exhaustion. Routing/energy tests disable defender damage to isolate objective correctness. Special Mewtwo AI and full move interactions still depend on the main engine.

The decompiled classes have obfuscated names, but arithmetic/control flow and SWF placements are intact. Remaining obstacles are not missing assets or missing numbered waves: they are Flash timeline cutscenes/quest decisions, party mutations, scripted boss AI, local engine effect coverage, and network/profile features. The runtime explicitly reports external hooks and supplies original source names. Unknown imported AI classes are placeholders with warnings; they must not be described as fully ported AI. MovieClip timeline operations emit presentation events. `context.playerProfile` defaults to no quest completions and empty fight/party lists, so conditional bonus encounters require real source-shaped context.

Do not describe the entire Flash game as feature-complete merely because all42 menu entries load. The 42 entries include branching rooms, invasion chains, story-only ending, Safari controls, and four Elite4 phases. Multiplayer/account services and full original save migration are outside these recovered local mechanics.
