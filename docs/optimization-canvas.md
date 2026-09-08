# Exact Canvas helper optimization

Scope: the recovered Canvas helpers only. Battle simulation, actor lifecycle,
native scene scheduling, assets, authored paths, fonts, gradients and filters
are unchanged by this work. Project paths below are relative to
`outputs/phaser-port/`.

## Implemented

1. **Shared bounded path parsing.** `tools/canvas/cache.js` retains exact string
   tokens from the original space split. Fill and morph-fill draws read immutable
   arrays. Every stroke copies its tokens before the original JPEXS in-place
   coordinate transformation. No numeric coercion, interpolation arithmetic,
   stroke scaling or command order changes. The global LRU is limited to 2,048
   entries and a 2 MiB retained-storage estimate; an oversized entry is used once
   without retention. The cache is shared across all exported renderers and
   retains no graphics, clips, contexts or pixel buffers.
2. **Exact per-sprite placement index.** `tools/canvas/placement.js` groups
   children by symbol ID once per synchronous sprite render. Groups preserve
   the original Map/array iteration order. Each lookup retains the original
   used-child exclusion, stable sort and exact arithmetic comparator, including
   equal-distance tie order. Hidden children still consume their source
   placement. The index is rebuilt on each sprite entry, so next-frame changes,
   replacement children and transformed coordinates are not persistently cached.
3. **Shared bounded dynamic text layout.** `tools/canvas/dynamic-text.js` reuses
   original line wrapping and glyph positions for a field ID, full text and
   effective font height. Immutable source catalog metadata determines font,
   clipping, alignment and advances. The computation preserves the original
   character iteration and floating-point addition order. Text color, color
   transforms, alpha, clipping and placement transforms remain live per draw.
   The global LRU is limited to 512 layouts and a 1 MiB retained-storage estimate.
   Tools intentionally replacing source font/field metrics can call the exported
   `clearCanvasCaches()`; the game never changes the catalog during play.

The cache budgets are conservative accounting estimates, not exact JavaScript
heap limits. Entry count also bounds Map/object overhead. Layout and path misses
for oversized inputs cannot grow retained cache storage beyond these budgets.

## Exact filters deliberately retained

`cxform.applyToImage`, glow, blur, bevel, shadow, convolution and blend algorithms
still execute their original code. They accept mutable Canvas inputs and can
return mutable Canvas outputs. Reusing an output without an immutable pixel
identity could change later frames or callers that modify it. Hashing the full
input pixels on every call adds readback cost and has not been demonstrated to
improve the actual workload. No approximate CSS, shader or replacement filter
was introduced. Scheduling unchanged whole renders is a separate optimization.

## Reproducible project maintenance

The authoritative maintained sections live in `tools/canvas/`, including the
unchanged `finish-root.js` PixelDissolve implementation. The generated runtime
contains clearly marked sections. Run:

```sh
node tools/sync-canvas-helpers.mjs
node tools/sync-canvas-helpers.mjs --check
node tests/canvas-tools.test.js
```

These commands work from a standalone playable/source checkout. No parent
`work/` directory is needed. The full recovery builder
`work/build_story_canvas.py` reads the same project helper files; helper-only
regeneration with `python3 work/build_story_canvas.py 0` reproduced the runtime.
It also asserts that both JPEXS path readers use the stroke-safe token helper.
The old recovery `story-dynamic-text.js`/`story-root-finish.js` snapshots are no
longer builder inputs.

## Semantic and pixel verification

`tests/fixtures/canvas-tools-v1.1.1.js` retains the preceding release helper as
an independent comparison fixture. Five focused tests pass:

- Exact operation traces for transformed fill/stroke paths, all four source
  stroke-scale modes, morph ratios, and fill reuse after several strokes.
- Exact placement traces for duplicate/equidistant symbols, hidden placement
  consumption, nested sprites, live alpha and next-render source mutations.
- All 3,049 catalog text fields compared with changed content, wrapping,
  Unicode, explicit color, source color transforms, size, alpha and placement;
  authored unchanged-text fallback also matches.
- Both caches evict within their entry and accounting budgets, oversized
  entries bypass retention, and distinct renderer instances share the cache.
- Project helper sources match the committed generated runtime.

The parent ran `tools/benchmark-canvas-browser.mjs` against a frozen 1.1.1
checkout and the changed checkout, one browser page at a time in batches of 24
roots. It checks SHA-256 of the exact 800×480 unscaled Canvas RGBA buffer after
every source stop/action/end frame and changed dynamic text/recolor cases.
All **584 roots / 2,174 cases** match, including authored gradients. Every case
also matches its own second warm render: **zero pixel differences, zero unstable
warm results, zero browser errors**. Full digests are in
`work/canvas-optimization-report.json`.

The browser batches recorded 437,963 path cache hits against 7,071 misses. Peak
per-batch retained path accounting was 1,238,120 bytes (maximum 2,048 entries).
Dynamic layout peaked at 47,004 accounted bytes / 16 entries. Separate Node
tests deliberately exceed both caches' limits and cover all catalog fields.

## Measurements

`node tools/benchmark-canvas.mjs REPORT.json` runs seven alternating-order warm
rounds with no-op Canvas operations, isolating helper CPU work. Fixtures use 32
actual recovered `do_damageText` glyph paths (12,298 total source characters),
original wrapping metadata, and the real 245-child `gfx_level_online_1` layout.

| Repeated helper workload | Prior median | Changed median | Reduction |
| --- | ---: | ---: | ---: |
| Path parsing/drawing operations | 58.99 ms | 18.26 ms | 69.0% |
| Dynamic text layout/drawing operations | 160.13 ms | 27.91 ms | 82.6% |
| Exact placement matching/drawing operations | 3,392.47 ms | 2,955.94 ms | 12.9% |

Raw samples are in `work/canvas-cpu-benchmark.json`. These are controlled helper
workloads, not game FPS improvements. The first full browser sweep's summed
draw times were about 6,945 ms before / 6,880 ms after, and warm draws 5,505 ms /
5,458 ms. Those single-sweep differences are small and not an overall speed
claim; exact filters and Canvas rasterization still dominate many exported
screens. Browser pixel parity, rather than a noisy timing threshold, gates the
change.
