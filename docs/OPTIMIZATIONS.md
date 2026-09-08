# PTD 1 optimization release — 1.2.0

This release reduces repeated rendering, startup audio decoding and large PokéCenter page construction. It preserves the 21 Hz game simulation, random-number ordering, source move rules, original artwork, inventory/custody rules and save formats. The PokéCenter gains pagination for large lists and pickers. No PTD 2/3 client development is included.

The results below are controlled before/after measurements against version 1.1.1. Timings describe the named fixture on one machine; they are not whole-game FPS claims or total browser-memory measurements.

## Battle canvas and texture uploads

The native renderer reuses its canvas when its drawing inputs have not changed. Its comparison includes every source tick, nested frames and transforms, alpha/visibility, text and formatting, tint/glow, child order, capture/inspection state and asynchronously loaded artwork. A same-tick drag, fade or text change still repaints immediately. Phaser continues applying camera transforms to the world-space image.

Render requests inside a synchronous native simulation tick batch share the existing final scene paint. Tick order, sounds and event callbacks remain synchronous and unchanged. Calls outside that batch remain immediate. The comparison uses reusable scalar arrays that shrink after display-tree removal and do not retain retired fighter objects.

| Native fixture | Version 1.1.1 | Version 1.2.0 |
| --- | ---: | ---: |
| 180 unchanged calls | 180 uploads; 117.2 ms | 0 uploads; 4.7 ms |
| 180 calls sampling 21 Hz source changes at 60 Hz | 180 uploads; 111.4 ms | 63 uploads; 43.4 ms |
| 180 distinct same-tick drag positions | 180 uploads; 109.6 ms | 180 uploads; 99.9 ms |
| Three ticks and three event callbacks in one update | 4 scene paints | 1 scene paint |

All **25 exact RGBA pixel hashes** match. Cases cover movement, alpha, transforms, source frames, tint, glow, nested text, visibility, capture/inspection, reordered children and delayed artwork. Comparison-only work took 1.5 ms for 180 calls. The fixture draws real Canvas artwork and counts texture refreshes through a stub; these timings exclude actual GPU transfer. Its canvas contains 3,411,200 RGBA bytes.

Tint buffers are reused by dimensions with a four-entry least-recently-used cache and a **1 MiB retained-pixel limit**. Larger individual buffers remain temporary. Every use clears pixels and resets transform, alpha and compositing state; tinted images or colors are not cached. The fixture retained two buffers totaling 12,620 pixel bytes and reduced repeated dimension assignments on its first buffer from 1,117 per dimension to zero. Destroying the view releases all buffers.

Four focused tests cover same-tick invalidation, asynchronous readiness, order/removal, comparison-buffer retirement, paint-error retry and tint-cache eviction/bounds. All eight deterministic 600-frame source-move fixtures still match their prior display-state, gameplay-state and RNG SHA-256 sequences.

## Exact Canvas helper reuse

Recovered paths, fonts, gradients and filter algorithms retain their original operations. Three maintained helper sections avoid repeated preparation:

- A shared path-token cache preserves the original string tokens. Stroke draws copy tokens before the original in-place coordinate transformation. Its LRU is capped at **2,048 entries and 2 MiB of estimated retained storage**.
- Each synchronous sprite render groups children by symbol ID once. Matching retains the original child order, used-child exclusion, exact distance comparator, tie behavior and hidden-child consumption. The index is rebuilt for every sprite render.
- A shared text-layout cache retains wrapping and glyph positions keyed by field, content and effective font height. Color, alpha, source color transforms and placement remain live. Its LRU is capped at **512 layouts and 1 MiB of estimated retained storage**.

Oversized cache entries bypass retention. The path/text budgets are accounting estimates, not exact JavaScript heap limits. These caches retain no fighter objects, Canvas contexts or pixel buffers. Source metadata stays immutable during gameplay; maintenance tools replacing font or field metrics can call `clearCanvasCaches()`.

The browser comparison covers **584 exported roots and 2,174 source-frame/text cases**. Every unscaled 800×480 RGBA SHA-256 hash matches the previous release, including gradients. Repeated warm renders also match: **zero pixel differences, zero unstable results and zero browser errors**. Five focused helper tests additionally compare all **3,049 source text fields**, transformed fill/stroke/morph traces, placement ordering, eviction and generated-source synchronization.

| Repeated helper-only workload | Prior median | Current median |
| --- | ---: | ---: |
| Path preparation/drawing operations | 58.99 ms | 18.26 ms |
| Dynamic text layout/drawing operations | 160.13 ms | 27.91 ms |
| Exact placement matching/drawing operations | 3,392.47 ms | 2,955.94 ms |

These medians come from seven alternating-order rounds with no-op drawing targets, isolating helper work. They exclude Canvas rasterization and GPU costs. The complete browser sweep showed only small timing differences; exact pixel parity gates these changes. Original glow, blur, shadow, bevel, convolution, color-transform and blend calculations remain in use.

The maintained helper sources are in `tools/canvas/`. From the project directory:

```sh
node tools/sync-canvas-helpers.mjs --check
node tests/canvas-tools.test.js
node tools/benchmark-canvas.mjs REPORT.json
```

The full recovery generator reads those same project helper sources, so a standalone checkout can maintain and verify the generated runtime without editing exported operations manually.

## Startup audio memory

Battle music streams through HTMLAudio instead of eagerly decoding every long track into Phaser's WebAudio cache. The same local recordings, looping and battle volume are used. Seven short combat effects remain decoded before the first simulation tick, preserving immediate overlapping hit and level-up sounds. All graphics remain eagerly available for arbitrary encounters, transformations and story transitions.

| Fresh startup measurement | Version 1.1.1 | Version 1.2.0 |
| --- | ---: | ---: |
| Decoded WebAudio buffers | 34 | 7 |
| Actual retained PCM bytes | 444,469,412 | 1,996,156 |
| Graphic textures | 609 | 609 |
| Time to Phaser ready in the measured run | 4,205 ms | 3,196 ms |

PCM figures sum the actual AudioBuffer channel lengths; they do not measure total browser memory or HTMLAudio's internal buffers. Startup timing includes title work and varies by device and cache state. No audio or graphics assets were removed or recompressed.

Eight focused lifecycle tests cover volume/looping, pause/resume position, stop/rewind, autoplay gesture retry, delayed promise rejection, media-error reporting, repeated track teardown and Phaser blur/focus handling. Battle music honors Phaser's existing pause-on-blur setting: losing focus pauses a wanted track, and regaining focus resumes it unless the player has explicitly paused or stopped it. A track chosen while blurred waits for focus. The tests also check listener cleanup and retired tracks.

Four Chromium checks use the actual local media files: a user gesture starts the looping track at the original battle volume; pause/resume preserves its position; changing stages releases the previous media resource and plays the next track; and actual game sound setup follows Phaser blur/focus signals while preserving position and explicit pauses. These checks report no browser errors.

## Large PokéCenter collections

Variable-length card lists and imported inventory render **24 records per page**; tables and notifications render **50 rows per page**. Navigation has a bounded number of buttons, matching counts and access to first, last and nearby pages. Filters and profile/route changes reset cursors, and shorter result sets clamp an old last-page position. Small lists retain their existing layout. Fixed catalogs, the 151-entry Pokédex and maximum-20 giveaway prizes retain their layout.

Large Pokémon/offer pickers display **24 choices per page**. Selections persist across pages and searches, while outer title/price fields remain mounted. Submission uses the full selection, including off-page records, and applies existing total limits. Bulk pickup and notification actions still target the complete eligible set. Modal cleanup releases unused picker data.

The existing 15-second giveaway check now updates only cancellation text and availability when no settlement is required. Focus and form drafts remain in place. Cancellation expiry hides and disables the same control; due settlement retains its existing transaction and dialog/conflict guards.

The following Node fixtures use 5,000 synthetic records and report median HTML-generation time. Element counts describe the generated first-page markup; timings exclude DOM parsing, layout and paint.

| View | Prior time / elements | Current time / elements |
| --- | ---: | ---: |
| Conversion | 38.39 ms / 85,048 | 0.44 ms / 463 |
| Pickup | 55.28 ms / 90,011 | 0.32 ms / 450 |
| Latest trades | 45.77 ms / 97,512 | 0.31 ms / 487 |
| Trade offers | 16.49 ms / 50,010 | 1.05 ms / 517 |
| Pokémon picker | 31.26 ms / 85,001 | 0.53 ms / 422 |

Four complete page-sequence hashes match the previous unpaginated order for conversion, pickup, trades and destination archives: **5,000 records each**. Focused tests cover reachability, clamping, cross-page selection, total limits, empty searches with retained single selection, cancellation timing and settlement guards.

The separate Chromium fixture measures HTML generation, DOM insertion and forced layout in one serial page. Each row below is one before/after render, using the same synthetic data; timings are not medians or pure paint measurements.

| Browser view | Prior script and layout | Current script and layout |
| --- | ---: | ---: |
| Conversion | 787.8 ms | 6.6 ms |
| Pickup | 729.2 ms | 4.8 ms |
| Latest trades | 792.6 ms | 4.9 ms |
| Trade offers | 451.3 ms | 4.9 ms |
| Pokémon picker | 712.3 ms | 5.1 ms |

Across all **24 measurements of twelve views and pickers**, the current views stay below 1,500 DOM elements, with at most 24 Pokémon cards or 50 table rows. Notifications use their existing 2,000-record storage limit in the fixture. Eight browser interaction checks pass: last-page reachability and filter resets, multi-page giveaway selections and title retention, an off-page single trade choice through an empty search, offer selection across pages, immediate modal reopening, countdown/focus and settlement behavior, and mobile layout without horizontal overflow. The run reports no browser errors or remote requests.

## Evidence and scope

The release's `docs/` directory contains the raw results: `optimization-native-rendering-*.json`, `canvas-optimization-report.json`, `canvas-cpu-benchmark.json`, `optimization-startup-*.json`, `optimization-center-node.json`, `optimization-center-browser.json` and `browser-streamed-music.json`. The paired recovered-source archive also contains the portable browser benchmark helpers. All browser measurements run serially, using synthetic accounts and isolated or mocked save services.

Full-texture dimensions, source filtering, the simulation clock and original graphics loading remain unchanged. This validation covers exact sampled source frames, targeted interactions and deterministic battle fixtures; it does not claim exhaustive coverage of every move combination or browser/GPU implementation. Final release-wide test and production smoke results belong in `release-validation.json`.
