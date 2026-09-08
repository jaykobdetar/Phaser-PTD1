# PokéCenter remaining optimization pass

Scope: the PTD 1 local PokéCenter UI. The approved pagination changes preserve the existing cards, colors, controls, sorting, domain validation, custody and economy rules. No PTD 2/3 client behavior was added.

## Changes

- Variable-size card lists now render 24 records per page: collection, conversion/tags, pickup, latest/search/own trades, trainer adoptions and local destination archives. Variable-size tables and notification history render 50 rows per page. Imported inventory rows also use a 24-item page. Fixed catalogs, the 151-entry Pokédex and the maximum-20 giveaway prizes retain their existing layout.
- The page navigator keeps a bounded set of page buttons, with first/last pages and nearby pages, plus Previous/Next for long lists. Its status gives the visible range and full matching count. Filters and profile/route changes reset the appropriate cursors; smaller result sets clamp a stale last-page cursor. Small lists show all records with no additional navigation.
- Giveaway/transfer and trade-offer pickers render 24 choices at a time. A picker owns its selection independently of visible form controls, retains it across page and search changes, and submits the complete selected ID set. Limits apply to all selected records, including hidden ones. Only the picker subtree changes, preserving the title, price and other form drafts. Large single-Pokémon trade dropdowns use 24 options per page and retain the selected Pokémon even if a later search has no matches. Small dropdowns keep their original structure.
- Bulk pickup and notification actions derive their complete eligible ID set when clicked, avoiding thousands of IDs in a button attribute. They still invoke the same domain commands. Closing or replacing a modal releases unused picker data; a queued close event does not clear a newly reopened modal.
- The 15-second giveaway tick updates only cancellation countdown text and cancellation availability. It keeps focused controls and open navigation mounted. At the cancellation boundary the existing button becomes hidden and disabled. Existing due-giveaway settlement still runs, defers while a dialog or conflicting operation is active, and redraws after an actual committed settlement. An unchanged focus refresh uses the same targeted countdown update.

## Measured Node results

Synthetic 5,000-record fixtures; notifications use their 2,000-record limit. Warmup plus median of three runs. These timings measure HTML string generation, excluding browser DOM parsing, layout and paint.

| View | Before | After | Before elements | After elements |
| --- | ---: | ---: | ---: | ---: |
| Conversion | 38.39 ms | 0.44 ms | 85,048 | 463 |
| Pickup | 55.28 ms | 0.32 ms | 90,011 | 450 |
| Latest trades | 45.77 ms | 0.31 ms | 97,512 | 487 |
| Trade offers | 16.49 ms | 1.05 ms | 50,010 | 517 |
| Giveaways | 17.07 ms | 0.32 ms | 45,020 | 477 |
| Notifications | 7.02 ms | 0.27 ms | 8,004 | 211 |
| Pokémon picker | 31.26 ms | 0.53 ms | 85,001 | 422 |
| Trade dropdown | 2.79 ms | 0.60 ms | 5,017 | 55 |
| Offer picker | 16.28 ms | 0.31 ms | 40,008 | 405 |

The complete rendered Pokémon ID sequence across every page matches the previous unpaginated sequence for conversion, pickup, trades and transfer archives: 5,000 records each, four matching SHA-256 pairs. First-page HTML intentionally differs because pagination was authorized.

Reproduce with `node work/optimization-center-bench.mjs`. The portable pre-change source snapshot is `work/center-ui-before-pagination.txt`; raw results are in `work/optimization-center-node.json`.

## Measured browser results

The serial Chromium harness passed all eight behavior/resource checks with 24 measurements, no page errors and no remote requests. Each timing below is one synthetic before/after render, including HTML generation, DOM insertion and forced layout. These are illustrative measurements from this machine, not a cross-device performance guarantee.

| View | Before | After | Before DOM elements | After DOM elements |
| --- | ---: | ---: | ---: | ---: |
| Conversion | 787.8 ms | 6.6 ms | 85,048 | 463 |
| Pickup | 729.2 ms | 4.8 ms | 90,011 | 450 |
| Latest trades | 792.6 ms | 4.9 ms | 97,512 | 487 |
| Trade offers | 451.3 ms | 4.9 ms | 50,010 | 517 |
| Giveaways | 432.0 ms | 5.3 ms | 45,020 | 477 |
| Notifications | 71.2 ms | 2.2 ms | 8,004 | 211 |
| Pokémon picker | 712.3 ms | 5.1 ms | 85,001 | 422 |
| Trade dropdown | 117.0 ms | 2.7 ms | 5,017 | 55 |
| Offer picker | 317.1 ms | 4.6 ms | 40,008 | 405 |

All twelve optimized views stayed at or below 517 DOM elements, with at most 24 Pokémon cards or 50 table rows. Chromium's estimated JavaScript heap is retained in the raw report as a rough diagnostic; it does not measure total DOM or process memory. The animation-frame timing in that report includes waiting for frame opportunities and is not a pure paint-duration measurement.

## Verification

Focused UI/date tests pass, together with seven new pagination tests. They cover 5,000-record bounds and reachability, page clamping, cross-page selection, total selection limits, filter resets, small-list behavior, off-page single selection, cancellation clocks, focus-preserving updates and settlement guards. The independent read-only review found no blocker. All three test files also pass when run directly from the standalone project directory. They use only Node built-ins and project-relative source/data paths, with no recovery-workspace dependencies or browser installation requirement.

The serial browser harness is `work/browser-center-optimization.mjs`. It mocks profile API access, uses synthetic fixtures, and runs one browser page with DOM cleanup and garbage collection between measurements. It records forced-layout and animation-frame timings, DOM size and a Chromium heap estimate for twelve before/after cases, then checks real form submission and focus interactions. The completed results are in `work/optimization-center-browser.json`. The main task ran the harness serially; no additional browser was launched by this subtask.

Browser behavior checks confirmed hidden selections are included in giveaway and offer submissions, a selected single trade Pokémon survives a no-match filter, same-turn dialog reopening retains its new picker, cancellation expiry preserves focus and open navigation, due giveaways still settle, and mobile pagination has no horizontal page overflow. The harness inspects complete UI command payloads through an in-memory command sink; existing domain workflow tests separately cover ownership and economy transactions.
