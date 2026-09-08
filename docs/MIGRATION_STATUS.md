# Conversion coverage

The game now runs natively through Phaser 3 and JavaScript. The supplied launcher contained an embedded game SWF; recovery produced 2,803 decompiled ActionScript files. The port uses that game’s own custom move numbers and rules.

| Area | Native implementation |
| --- | --- |
| Data | 164 species/profile entries, 433 moves, Kanto species 1–151, original learnsets/TMs, stats and type chart |
| Combat | Original integer calculations, range/target order, statuses, effect lifetimes, cooldowns, path effects and candy handling |
| Moves | All 433 attack classes plus their dependent classes statically translated; no runtime `eval` or source-code compilation |
| Abilities and AI | The nine actual source ability behavior classes and original Mewtwo/Zapdos AI |
| Campaign | 42 entries, phase transitions, source waves, achievements, quest facts, party boosts and fixed NPCs |
| Special modes | Safari Zone, Rock Tunnel, six challenges and native local multiplayer |
| Story | Recovered frame timelines, labels, stops, original button regions, static source popup controllers, dialogue/reward choices |
| Presentation | Original 800×480 HUD, direct drag/click controls, 536 Pokémon sheets, maps/music and 584 exported native Canvas roots including move effects |
| Collection | Fixed-slot party/storage dragging, training, target settings, move learning, TM/relearn, level/stone/trade evolution, shop, item inventory, Pokédex |
| Profiles | Three slots, version-2 validation, browser/disk persistence, import/export and legacy JSON migration |
| PokéCenter | Standalone local website with 260 catalog adoptions, listings/offers/wishlists, gifts, slots and prizes, conversions, giveaways, inventory, shared Dex, settings and PTD 2/3 transfer archives |

## Recovery method

Wave and move classes were translated to static JavaScript. A native adapter supplies the original display-list state, profile fields and engine callbacks. Combat advances at the source’s 21 FPS. Dynamic effects are drawn from the native display list, and Pokémon frames follow their recovered timeline positions.

JPEXS Canvas2D exports preserve original vector paths, bitmaps, fonts and frame placements. Explicit function registries replace the export’s dynamic dispatch. Story controllers retain the recovered branching and frame behavior; the port supplies local save, battle and screen-transition adapters.

The previous 64-core/157-damage-only/212-unavailable move counts describe the superseded descriptor prototype. The shipped browser game uses the source runtime for all 433 moves. Descriptor helpers remain for narrow regression/reference tests.

## Local substitutes for former servers

The supplied Python server implements save storage but does not supply the former trade, matchmaking, achievement or mystery-gift services. At the user’s request these are local/offline features:

- Three profiles share a local profile bank. A trade updates both sides together; Kadabra, Machoke, Graveler and Haunter evolve on trade under the explicit offline policy.
- Mystery Gift has a visible local code catalogue and per-profile claims. Challenge gifts share their claim IDs with the original challenge battle rewards.
- Achievement eligibility and the client’s known reward species, moves and claim counters are retained. Entries whose client awards only a claim record do not invent an unverified Pokémon reward.
- Versus and co-op retain the source multiplayer maps, fixed teams, moves and objectives, using a shared screen with player switching. Internet matchmaking and the old PlayerIO protocol are not required.
- The loopback Python launcher saves the profile bank to disk with atomic replacement, previous-file backup and revision conflicts. Static hosting retains browser saving.

Source Save uses the original pending, success and retry frames. Device-wide music, sound and damage-text switches persist independently of the selected profile. Portable backup/import is accessible through the local-storage control in the original Options screen.

The standalone Center adds a faithful local counterpart to the current PTD 1 website; see [POKECENTER.md](POKECENTER.md) for its evidence, free economy, reset rules and transfer scope.

These are intentional offline recreations, not a claim to have recovered unavailable server implementations.

## Verification boundary

Source-class execution, broad stage simulation, original timeline/controller traversal, browser flows and production play checks are recorded in `VALIDATION.md`. The conversion implements the recovered client systems; exhaustive equivalence of every battle strategy, random encounter and combination of effects has not been proven. Decompiled source may retain bugs in the supplied version, and those source quirks are documented where encountered.
