# PTD 1 technical audit — 1.1.1

This is the historical 1.1.1 audit. Its follow-up opportunities are addressed and measured in the [1.2.0 optimization report](OPTIMIZATIONS.md).

This maintenance release addresses measured runtime costs and reproduced save/UI defects. It preserves the original game rules, 21 Hz simulation, random-number ordering, artwork, controls, progression and save formats. PTD 2/3 development is outside scope.

## Changes

- Removed an unused strong registry that retained every finished native graphic until leaving a battle. A controlled 5,000-effect allocation probe fell from 6.45 MB to 0.28 MB of retained heap after collection.
- Bounded the diagnostic history to the most recent 256 events. Live combat callbacks are unchanged. `diagnosticEventCount` reports the lifetime count; `diagnosticEventLimit` accepts 0 to disable storage or up to 65,536 for deeper debugging. Retired fighters and their detached display trees can now be collected outside this recent window.
- Replaced repeated native-actor membership scans with one Set per render. A 200-actor lookup microbenchmark improved from approximately 6.8 ms to 1.7 ms over 100 evaluations, with identical membership results.
- Stopped autonomous HUD painting while the original presentation hides it, and removed a duplicate HUD refresh for battle events. Source timeline advancement and explicit refreshes remain active; visible rendering cadence is unchanged.
- Indexed PokéCenter listing lookups and ownership checks, and reused locale time formatters within each render. A supported-size 10,000-listing/5,000-offer fixture improved offer HTML generation from 230 ms to 25 ms and ownership checks from 265 ms to 4 ms. Rendering 2,000 notifications fell from 90 ms to 8 ms. All 32 benchmark output hashes matched.
- Made malformed Center hash links fall back to Home. Returning focus to an unchanged account now preserves unsaved inline form text; changed account data, conflicts, date context and giveaway countdowns still redraw.
- Added a save-folder OS lock so independent launcher processes cannot both accept the same disk revision. Atomic replacement and previous-save backups remain in use.
- Fixed disk saves blocked by a full compatibility-mirror cache, refresh with a full cache, repeated backups of an unchanged mirror after an empty-bank import, and stale browser events incorrectly reporting a conflict. Displaced data must be preserved before cache recovery can replace it.
- Removed duplicate whole-bank normalization from legacy game saves, retaining validation, ownership checks and isolated queued snapshots.
- Updated the pinned development dependency Vite from 6.4.1 to 6.4.3. Phaser remains 3.90.0. The patched version addresses the reported development-server advisories; the post-update npm audit reports zero known vulnerabilities. See the [Vite advisory](https://github.com/vitejs/vite/security/advisories/GHSA-fx2h-pf6j-xcff) and bundled dependency-audit result. This is an advisory-database result, not a guarantee against unknown issues.

The timing figures are controlled measurements on one machine, not whole-game FPS claims. Source Canvas filters are particularly expensive in headless software rendering, so browser timing samples record actual elapsed time as well as paint counts.

## Review coverage

The review covered battle/move/display lifecycle, native and Phaser rendering, original HUD/menu scheduling, Center rendering and custody validation, profile imports and browser/disk transactions, launcher request boundaries, dependencies, asset footprint and release packaging. Recovered move classes and Canvas exports were treated as fidelity-sensitive code; broad rewriting and approximate rendering were avoided.

The focused runtime probe compares eight actual source-move scenarios for 600 frames each. Per-frame native display state, health, moves, modifiers, party state and RNG-call count feed deterministic SHA-256 digests. All post-change digests match the pre-change baseline. SHA-256 comparison also confirms that all 3,321 audited asset/data and source-controller files are unchanged from release 1.1.0. The long-battle diagnostic test creates 4,000 retired fighters and verifies that only the recent diagnostic window remains reachable, while all 8,000 live damage/healing callbacks still fire.

The final suite passes 241 Node tests (including the explicit GC probe), three Python server tests and four archive-audit regressions. Eleven browser regression workflows and both real-launcher production workflows pass, including a natural starter-only Oak win, progression/reload and the game/Center disk-save round trip.

Detailed findings and measurement methods are in [runtime audit](technical-audit-runtime.md), [persistence audit](technical-audit-persistence.md) and [Center audit](technical-audit-center.md). `release-validation.json` records test and browser results; the paired recovered-source archive contains portable benchmark and browser helpers. All test profiles were synthetic and all disk-write tests used temporary save folders.

## Remaining opportunities

These are documented follow-ups, not hidden changes in this release:

1. **Canvas rendering and uploads.** Original battle/menu rendering still repeats expensive path parsing, placement matching, text layout and source filters. Large maps use padded full-texture redraws; the largest inspected battle buffer is about 18.4 MB of RGBA pixels. Caching or invalidation should be separately profiled and checked against source pixels, asynchronous image loads, fades, camera movement, capture and drag state. A simulation tick alone is not a sufficient cache key.
2. **Very large Center DOMs.** Collection pagination already limits cards to 24, but some pickers and conversion views can create roughly 80,000 elements for 5,000 Pokémon. Pagination/windowing could reduce layout and memory costs, but would change page behavior. Giveaway detail pages also redraw every 15 seconds; a targeted countdown update is a possible later improvement.
3. **Startup assets.** The bundle retains all recovered assets locally: approximately 244 MB in `public/assets`, plus 9.46 MB of data. Phaser preloads all Pokémon sheets, maps/effects and non-cry audio. Selective loading could improve startup and memory use, but must guarantee that arbitrary encounters, evolution, moves and story transitions never show missing graphics or delay simulation. No assets were removed or recompressed in this audit.
4. **Generated-code maintenance.** Recovered Canvas and translated move/profile code dominate source size. Changes should be made in the matching recovery generator, with regenerated artifacts and parity checks. Formatting or manually simplifying thousands of generated operations is not an evidence-based performance fix.

Validation covers targeted behavior and complete sampled play sessions, not every strategy, move interaction or browser/GPU combination. POSIX process locking was exercised; the Windows standard-library lock branch was inspected but could not be executed on this Linux machine. Share the verified release ZIP: played installations can accumulate private saves and are outside the clean-archive guarantee.
