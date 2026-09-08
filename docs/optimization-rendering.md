# Native battle rendering optimization

Scope: `src/native-battle-view.js`, plus `BattleScene.render` and `BattleScene.update`. Source move classes, simulation steps, RNG, events, input coordinates, Phaser camera behavior, and exported Canvas artwork are unchanged by this work.

## Implemented

- Native canvas redraw/upload reuse compares the inputs consumed by drawing, including nested display transforms, frame numbers, alpha/visibility, text/format, tint/glow, child order, capture and inspection state. It also includes every source clock tick and a revision increment when asynchronously loaded artwork becomes ready. Same-tick interaction changes therefore still render immediately. Camera movement does not change the world-space canvas; Phaser continues moving that image normally.
- The comparison uses two reusable arrays containing scalar values. Removed fighters are not stored in either array, and both arrays shrink to the next display tree size. A failed draw does not commit the comparison state, allowing subsequent calls to retry.
- Render requests raised synchronously during the native simulation tick batch are coalesced into the existing render at the end of `Scene.update`. Sound playback and event callbacks run at their original points. Non-native fallback events retain their existing rendering behavior, and calls outside that synchronous batch remain immediate.
- Tint backing canvases are reused by dimensions with a four-entry least-recently-used cache and a 1 MiB retained-pixel limit. Oversized individual buffers are temporary. Reuse explicitly clears pixels and restores transform, compositing mode, and alpha before drawing, matching the state previously supplied by a resize. Destroying the view releases all tint buffers.

## Verification and measurement

Run browser measurements serially against a frozen pre-change server and the current server:

```sh
PTD_TEST_ORIGIN=http://127.0.0.1:5180 node work/benchmark-native-rendering.mjs before
PTD_TEST_ORIGIN=http://127.0.0.1:5173 node work/benchmark-native-rendering.mjs after
```

The portable harness uses real source Pokémon sheets and exported effects/text. It checks exact RGBA SHA-256 hashes across unchanged draws, same-tick motion/alpha/transforms, source frames, multiple tint values, glow, nested text changes, visibility, inspection/capture, reordered children and delayed artwork. It also records upload counts and elapsed time for unchanged calls, normal 21 Hz source changes sampled at 60 Hz, continuous drag changes, tint dimension assignments and comparison-only work. Its scene fixture exercises the real update/event methods and checks unchanged tick and callback counts.

Browser results are written to `work/optimization-native-rendering-before.json` and `work/optimization-native-rendering-after.json`. All 25 pixel hashes match exactly, with no browser errors. The serial before/after run measured:

| Scenario | Before | After |
| --- | --- | --- |
| 180 unchanged calls | 180 uploads; 117.2 ms | 0 uploads; 4.7 ms |
| 180 calls sampling 21 Hz source ticks at 60 Hz | 180 uploads; 111.4 ms | 63 uploads; 43.4 ms |
| 180 distinct same-tick drag positions | 180 uploads; 109.6 ms | 180 uploads; 99.9 ms |
| Three source ticks and three event callbacks in one update | 4 scene paints | 1 scene paint |
| Reassignments of the first tint buffer's dimensions across the fixture | 1,117 per dimension | 0 per dimension |

The isolated comparison-only cost was 1.5 ms for 180 calls. These are fixture CPU timings, not an overall frame-rate claim: the harness renders real Canvas artwork but counts texture refresh calls through a stub, so the timings exclude actual GPU transfer. Each fixture canvas holds 3,411,200 bytes. Continuous drag retains every necessary repaint. The final fixture used two tint buffers totaling 12,620 retained pixel bytes; its repeatedly used first buffer no longer resizes. All 25 hashes still match after the bounded cache addition.

Node checks completed:

- `node tests/native-rendering.test.js`: 4/4 passing. Checks same-tick invalidation, source-time and async readiness, ordering/removal, comparison-buffer retirement, paint-error retry and tint cache bounds/eviction.
- `node --expose-gc work/benchmark-runtime-audit.mjs after`: all eight 600-frame source-state/RNG/display SHA-256 sequences still match the previously frozen baseline. The retired-graphics fixture retains only its final loop-local root out of 5,000 removed roots.

This deliberately avoids dirty rectangles, cropped textures, changing the simulation clock, or deciding visibility solely from tick numbers. Those changes would need additional coverage for exported filters, world-space shadows, camera movement, and source-owned clip mutations.
