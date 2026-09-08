# Maintained Canvas helpers

These files are the authoritative hand-maintained sections of the recovered
JPEXS Canvas runtime. Edit them, then run `node tools/sync-canvas-helpers.mjs` from
the project directory. `node tools/sync-canvas-helpers.mjs --check` and the normal
test suite verify that the committed runtime matches. No recovery workspace is
needed. The recovery workspace's full export builder reads these same files.

- `cache.js`: shared, bounded LRU caches for immutable path tokens and text layout.
  The byte budgets estimate retained string/token/layout storage; they are not
  browser heap measurements. Strokes copy tokens before transforming them.
- `dynamic-text.js`: original glyph advances, line wrapping, fonts, clipping and
  alignment. Cache keys include field ID, effective height and full text. Source
  text catalog metrics remain immutable during play; tools replacing metrics
  must call the exported `clearCanvasCaches()` helper afterward. Color, alpha
  and placement transforms are evaluated at draw time.
- `placement.js`: per-render child lookup by symbol, preserving source child
  order and the exact stable nearest-placement sort. Source timelines advance
  outside the synchronous renderer; the index is rebuilt on each sprite entry.
- `finish-root.js`: the existing source PixelDissolve implementation.

The filters remain the original exact Canvas algorithms. Their input and output
canvases are mutable, so they are not memoized. Cache diagnostics are available
through `canvasCacheStats()`; caches retain no clips, contexts or pixel buffers.

`tests/fixtures/canvas-tools-v1.1.1.js` retains the preceding exact helper as an
independent reference for path, placement and text operation-trace regressions.
