# PokéCenter technical audit

Audit scope: Center UI, domain model, catalog use, event/timer lifecycle, DOM safety, accessibility and permitted-size collections/history. PTD 2/3 behavior is outside this review. File references below are relative to outputs/phaser-port. Only synthetic fixtures were used.

## Implemented after approval

1. **P2 — repeated listing scans in offer rendering and ownership validation.** src/center-ui.js:62 previously performed a full listing search for each target and offered ID; src/center-model.js:71 did the same for every pending offer. The 10,000-listing/5,000-offer fixture made this cost visible on every offer page and on save validation. The UI now builds one index of the first row per ID. The domain validator builds an index of the first open target and a set of open IDs per owner. Closed rows, missing rows, owner checks and the existing error message are preserved; even the prior first-target/any-owned-row behavior on direct malformed duplicate-ID inputs remains unchanged. No sorting, trading or ownership rules changed.

2. **P2 — repeated locale formatter setup in date-heavy views.** src/center-ui.js:31 called Date.toLocaleTimeString with an options object for every row. Notifications can legally reach 2,000 rows. The UI now reuses an Intl.DateTimeFormat for each hour-cycle setting within a render. src/center-ui.js:45 resets the cache on every actual render so later locale/timezone changes are picked up when the dates are redrawn. Date order, active locale, local timezone, hour cycle, invalid-date fallback and zero-value behavior remain unchanged.

3. **P2 — unchanged focus refresh replaced unsaved draft controls.** src/center-ui.js:24 now compares the complete bank before and after the existing authoritative refresh. It preserves the current controls only when committed data is identical, no prior conflict needs clearing, and UTC day, locale and timezone match the last render. Giveaway detail still redraws its countdown. A changed active profile, custody or any other bank state still redraws. The comparison intentionally uses actual bank data rather than a cached storage revision, so a browser-cache write failure cannot hide a valid disk update. Busy controls, refresh error reporting, conflict recovery and the subsequent due-giveaway settlement retain their existing behavior.

4. **P3 — malformed percent escapes could throw during routing.** src/center-ui.js:22 now catches decoding failures and renders the existing Home route. Valid decoded routes and valid unknown routes retain their previous behavior.

## Measured results

Node v22.16.0; one warmup plus median of three runs for each case. These are JavaScript/string-generation measurements, excluding browser DOM parsing, layout and paint. Fixtures use valid-size limits and deterministic timestamps/content.

| Operation | Records | Before median | After median | Speedup |
| --- | ---: | ---: | ---: | ---: |
| offersTable | 1,000 | 8.10 ms | 2.46 ms | 3.3× |
| offersTable | 10,000 | 229.88 ms | 25.04 ms | 9.2× |
| assertCenterOwnership | 1,000 | 4.47 ms | 0.65 ms | 6.8× |
| assertCenterOwnership | 10,000 | 265.13 ms | 3.70 ms | 71.7× |
| notifications | 1,000 | 56.33 ms | 4.60 ms | 12.2× |
| notifications | 2,000 | 89.84 ms | 8.04 ms | 11.2× |

All **32 before/after output SHA-256 hashes matched**. This includes rendered HTML for every benchmark case and normalized model state for validation cases. Undefined-return ownership checks are additionally covered by focused validity/error tests rather than relying on their trivial return-value hash.

Reproduction: node work/technical-audit-center-bench.mjs technical-audit-center-before.json (before change), then the same command with technical-audit-center-after.json after change. Raw fixture generator and both result files are in work/.

Validation: the Center model, Center UI and date-format test files pass. Added tests cover pending/open/missing/closed/owner/error behavior, first-match rendering and HTML escaping, plus output equivalence under UTC, America/New_York and Asia/Kolkata and English/German locale configurations. Date checks include daylight-saving boundary instants and both hour cycles.

The focused UI tests also cover malformed hashes, unchanged-draft preservation, changed bank/profile, conflict recovery, display-context changes, giveaway redraws, refresh errors and overlapping refresh guards. The existing browser workflow now includes malformed-hash rendering and a real unsaved nickname surviving an unchanged authoritative refresh without being saved. Browser execution is part of the final full browser suite.

## Deferred findings and recommendations

- **P2 — several views still construct a large DOM.** src/center-ui.js:57,60,68,80 and the listing/offer dialogs render complete matching lists. Collection itself correctly limits cards to 24, but Conversion and the giveaway picker each generated approximately 80,000 HTML elements with a 5,000-Pokémon fixture (5.79 MB and 5.23 MB of markup respectively). This is separate from the now-improved lookup cost. Browser layout/paint/memory measurement is needed before choosing an approach. Pagination or windowing would change page behavior, so none was introduced in this scope.

- **P2 — giveaway timer redraws the complete page even after the giveaway has ended.** src/center-ui.js:23 rerenders every 15 seconds whenever the route is giveaway and a dialog is not open. This also replaces open navigation details and the focused control. Due settlement itself already avoids writes when no giveaway is due. Recommend a targeted countdown update or redraw only at a visible-state boundary, with browser focus and screen-reader checks. No cadence change made in this scope.

- **Lifecycle note, not a demonstrated production leak:** CenterUI.start registers anonymous handlers and an interval and has no dispose method (src/center-ui.js:23). The standalone page creates exactly one instance (src/center-main.js:7–12) and currently has no actual in-document unmount/remount path. A full document navigation releases the context; therefore a new lifecycle architecture is not justified solely by this observation. A closed dialog does retain its previous markup until replaced (src/center-ui.js:76–78), which can temporarily retain a large picker. This can be revisited with the large-DOM measurement.

## Safety and healthy paths checked

Profile names, Pokémon nicknames, notification text, listing IDs, giveaway titles and imported item labels are escaped before HTML interpolation. Route links always retain their local hash prefix. Type/icon asset names originate in the bundled manifests, and Center mutations continue through CenterService/LocalProfiles rather than direct UI bank writes. Existing semantic buttons/forms, native dialog labeling, status/error announcements and accessible navigation details remain intact. No reproducible HTML injection path was found in the inspected renderers. The static adoption catalog is bounded at 260 entries; its measured category rendering was about 0.1–2.2 ms median before the changes, so catalog caching is lower priority than the measured history costs.
