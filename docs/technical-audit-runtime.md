# PTD 1 runtime and rendering audit

Scope: hand-written battle/move adapters, Phaser rendering and their interaction with recovered Canvas artwork. PTD 2/3 clients and game-rule changes are outside this audit. References below are relative to `outputs/phaser-port/`; line numbers describe the inspected revision and may move as the coordinated audit proceeds.

## Implemented, measured changes

### P1: finished graphics were retained for the entire battle

`src/move-native-display.js:7,39,72` previously held a strong `clips` Set containing every constructed MovieClip. Nothing iterated this registry: `advance()` traverses the live display tree. The only external access was `src/move-native.js:233`, clearing it during battle disposal. Consequently removing a completed effect or replacing a timeline child did not make it collectible until leaving the level.

The unused registry and its disposal call were removed. No source frame operation, callback, effect list, actor identity or render traversal changed.

Reproduction: `node --expose-gc work/benchmark-runtime-audit.mjs before` constructed and removed 5,000 actual `gfx_hit` clips from an empty display world, then forced four GC cycles on separate event-loop turns. Baseline retained all 5,000 roots and their children: 10,000 registry entries and a 6,451,008-byte heap increase. After the change, 4,999 roots were collected and the heap increase was 284,672 bytes. One final loop object remained in the probe's lexical scope. These are controlled allocation measurements, not a promise of a fixed saving per real battle.

### P2: repeated actor membership scans were quadratic

`src/scene.js:249–285` previously checked `world.children.some(child => child.fighter?.uid === entity.uid)` for every visible fighter. The native display list was scanned again for each fallback sprite. A Set is now constructed once per render and reused. Validated string UIDs have the same membership semantics; sprite alpha, ordering, animation calls, input proxies and fainting overrides remain unchanged.

Isolated membership benchmark, five samples of 100 complete evaluations, median milliseconds:

| Fighters | Repeated scan | One Set per evaluation | Result |
| --- | ---: | ---: | --- |
| 50 | 0.708 | 0.278 | Same membership array |
| 200 | 6.799 | 1.707 | Same membership array |
| 1,000 | 199.962 | 5.947 | Same membership array |

This measures the lookup operation only, with all fighters present and 20 additional effect nodes. It does not establish an overall FPS multiplier. Ordinary six-tower scenes gain much less than the stress case.

### P2: bounded diagnostic history (fixed after the initial audit)

Before the fix, `src/move-native.js:23,138–139` appended every trace, damage and heal to an unbounded `events` array. Damage/heal entries retained fighter objects until battle disposal. A referenced fighter also kept its detached actor value reachable through `detachedActors` (`WeakMap`), retaining more than the event rows themselves.

Production UI receives events through `emit()` and does not read the array. `tests/boss-native.test.js` and three recovery smoke scripts inspect it, making this a diagnostic API rather than dead storage. Recording now retains the latest 256 entries by default, preserving the ordered Array API. `createMoveRuntime` accepts `diagnosticEventLimit` from 0 (storage disabled) through 65,536; `diagnosticEventCount` reports the lifetime total without retaining the older rows. Live event/error callbacks and source mechanics are unchanged.

`node --expose-gc tests/native-diagnostics.test.js` passes four tests. Its long-battle probe creates and detaches 4,000 fighters, generates 8,000 damage/heal callbacks, and verifies that only the latest 128 fighter/actor graphs remain referenced by the 256-row window. Older graphs are collected. Recording disabled produces identical callbacks and source display snapshots. Existing boss-native (16 tests), native-text (6 tests), and all eight deterministic source/RNG scenarios also pass. The GC-specific assertion skips when Node is not launched with `--expose-gc`; the ordinary bounded-history and callback tests still run.

### P2: redundant hidden HUD and duplicate explicit paints (fixed by the coordinated UI audit)

The HUD's autonomous animation-frame loop now suppresses drawing when the existing CSS hides it for full screens, screen-parent popups, explicitly hidden HUD scenes, or dragging. Its 21 Hz source clock still advances, and explicit render calls still refresh immediately. The visibility conditions mirror `original.css` without introducing layout reads. `main.onBattle` also no longer calls both the `renderParty()` alias and `renderHUD()` for the same event; it retains one HUD render and the existing inspector refresh. Visible HUD cadence and source state updates remain unchanged. Browser pixel/timing comparisons are owned by the coordinated UI audit.

## Confirmed follow-ups

### P2: duplicate Canvas redraws and full texture uploads

Evidence:

- `src/scene.js:239` renders synchronously for most battle events, while `update()` renders again after the fixed 21 Hz simulation loop (`scene.js:330–337`). `Battle.tickRunning()` can emit multiple events in one tick (`battle.js:850–920`).
- The visible HUD still redraws on every animation frame even when no 21 Hz timeline tick occurred. Its hit-button pass also rewrites styles, labels and handlers (`original-hud.js:21–28`). Hidden autonomous paints and the duplicate explicit HUD call have been removed as described above.
- Original menus/story panels have the same display-refresh redraw pattern (`original-story-ui.js:78,100–103`) and recalculate controls each time.
- `src/native-battle-view.js:28–33` clears, draws and refreshes the complete padded Phaser CanvasTexture on every render. The level 1 buffer is 1,147×784, about 3.60 MB of RGBA pixels. Level 27 is 3,166×1,450, about 18.36 MB. These are buffer footprints, not measured physical GPU bus traffic.

Next measurement: instrument actual draw/texture-refresh calls per browser animation frame, separate Canvas CPU time from DOM style work and GPU upload, and compare a still main menu, a regular battle and a large-map battle at each supported speed. The coordinated UI audit owns scheduling work. Any suppression must preserve source ticks and repaint on drag, camera/tween movement, check-screen dimming, capture hiding, asynchronous asset readiness, dynamic text and explicit control updates. A bare `runtime.tick` equality check is insufficient for all these cases.

### P2/P3: recovered Canvas processing repeats immutable work

`public/assets/story/canvas-tools.js:1275` splits authored path strings on every draw. Its runtime `place` adapter (`1375–1377`) allocates/filter/sorts candidate children per placement to match the closest original instance. Dynamic text recomputes paragraph wrapping and glyph advances (`1348–1361`) on every draw, even for unchanged money/labels.

Filters can be more expensive than parsing: `cxform.applyToImage` reads and transforms every pixel (`851–869`), blend operations allocate a canvas as large as the parent (`879–895`), and authored button filters can chain glow, bevel and shadow. For example `modules/symbol-11453.js:433–440` processes a full-size temporary canvas for one button label. These operations are source-derived and cannot be replaced with approximate CSS effects without changing appearance.

Profile before selecting a fix. Potential low-risk candidates are bounded parsed-path caches, text-layout caches keyed by exact field/text/font/size, or per-sprite candidate grouping without changing nearest-placement tie order. Stroke rendering mutates path coordinates, so shared token arrays must not be modified in place. Pixel filter/bitmap caching must include exact transform, color and child-state dependencies. Every helper change must also update `work/build_story_canvas.py` or its helper source and rerun all 584 exports / 2,142 frame cases plus pixel regressions. No generated Canvas code changed in this audit.

### P3: tint canvas backing stores reset on every tinted Pokémon

`src/native-battle-view.js:48` assigns both `width` and `height` on every tinted Pokémon draw, which resets the canvas state/backing store. This is a small isolated candidate if browser profiling shows tint activity matters. Reusing matching dimensions requires explicit `clearRect`, `globalAlpha=1`, and `globalCompositeOperation='source-over'` before the source sprite, then the existing tint operation. Omitting those resets changes successive sprites. No change made without pixel comparison and measurement.

## Preserve these behaviors during later optimization

- `move-native.js:158–160` deliberately enumerates the live effect list. Snapshotting, filtering or reordering it changes when effects appended/removed during a tick run.
- `move-native-display.js:70` snapshots existing display nodes before advancing timelines, preserving newborn-child frame behavior. An allocation-free traversal needs equivalent visitation rules.
- Hit-test bounds recursively include original child geometry (`move-native-display.js:25–31`). Caching them requires invalidation for frame actions, scale, rotation, added effects and reparenting; approximate circles or stale bounds change gameplay.
- `move-native.js:54–56` regenerates live source actor lists. Persistent caching can become stale during same-tick capture, recall, spawn or source callbacks. Do not optimize by changing the source-visible mutation order.
- Source move definitions close over each battle's runtime classes/environment. Sharing constructed classes across battles risks sharing actor state or RNG context. Treat class factory restructuring as a separate measured project.
- Keep the simulation's 21 Hz tick count, speed multiplier, catch-up cap and RNG invocation order. Rendering work should never decide whether a combat tick executes.

## Verification and reproducibility

`work/benchmark-runtime-audit.mjs` writes portable JSON artifacts and compares eight actual source-move scenarios (1, 10, 26, 56, 111, 143, 144, 405), each advanced for 600 frames. Every frame contributes full native display snapshots, HP, selected moves, modifiers, party state and RNG-call count to a SHA-256 digest. All eight post-change digests and RNG counts exactly match the saved pre-change baseline. The `after` mode asserts this comparison and asserts release of at least 99% of the previously retained roots.

Artifacts: `work/technical-audit-runtime-before.json`, `work/technical-audit-runtime-after.json`. Run from the recovery root with Node and `--expose-gc`; no extra packages are required. Timings are machine-dependent and should be compared on the same machine. Source-state digests are deterministic.

The root audit owns full move/lifecycle test execution and final browser screenshot/performance comparison. This report's direct validation establishes object release, lookup equivalence and eight source-state scenarios; it does not substitute for that broader visual regression pass.
