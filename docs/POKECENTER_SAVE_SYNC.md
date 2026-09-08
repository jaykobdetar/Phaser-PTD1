# Shared game and PokéCenter saves

The game and `pokecenter.html` share one version-1 bank with three game-profile slots and an optional `center` object. The Python service atomically saves the entire bank, including both sides of a trade and its Center records, using the existing revision comparison, temporary file, and previous-file backup. Browser-only mode commits one localStorage bank record under an origin-wide lock.

## Client API

`new LocalProfiles(data, storage, request, options)` retains the original first three arguments. Supported options are:

- `validateCenter(input, data)` and optional `validateOwnership(bank)`: synchronous validators. Defaults are the Center model's real schema and ownership checks. An absent `center` remains valid for old banks. Custom schema injection is available for tests or other adapters.
- `onExternalChange(detail)` and `onConflict(detail)`: notifications with `{bank, source, revision, error}`. A browser storage event can provide the new bank; a disk CAS conflict may have `bank: null` until refresh. Hooks do not replace a live game's objects. They can also be assigned on the instance after initialization.
- `locks`, `indexedDB`, and `eventTarget`: optional platform adapters for testing. Omit them to use the browser APIs; `null` disables a specific adapter.

`await profiles.initialize()` loads a valid disk bank when present. A different browser bank is preserved exactly under a new `ptd-phaser-profiles-backup-…` key before replacement; `profiles.lastBackup` identifies that key and its reason. A malformed browser bank can likewise be retained while loading a valid disk bank. A divergent current-profile mirror, including a final `beforeunload` draft whose queued bank write did not finish, is separately backed up before replacement. Without a disk bank, the existing browser bank or legacy profile is migrated as before. The old version-1 single-profile key remains untouched.

If the cache is full and cannot hold a displaced bank's backup, initialization can still load the valid disk bank in memory; it leaves the existing browser records in place and reports `cacheError`. Disk transactions continue to use their accepted server revision.

`profiles.validate(input)` validates a bank with that instance's schema hooks. Standalone `validateBank(input, data, options)` uses the real Center schema and ownership checks by default. Neither strips `center`.

For the default Center schema, validation unions the account's regular, shiny, and shadow Pokédex history across all three profiles and Center custody records. LocalProfiles also retains its last accepted account history when saving or importing an older backup. That shared first-generation history is mirrored into each game profile without removing its later-generation records. Custom injected Center schemas remain responsible for their own normalization.

`await profiles.transact(mutator)` runs a synchronous callback on an isolated clone of the current bank. It validates the result and commits only if the bank has not changed since this client loaded it. It resolves to `{result, bank, revision}` after persistence, where `result` is the callback's return value and `bank` is an isolated committed snapshot. `revision` is the numeric disk revision, or `null` in browser-only mode; browser CAS compares the complete stored record internally.

Throwing, returning `{ok: false, reason}`, returning a Promise, or producing invalid state rejects the transaction without changing its bank or persistence. Disk failure or browser quota failure likewise leaves the transaction uncommitted. Once the disk has committed, failure of its browser cache mirror does not turn success into a false retry; `cacheError` records that condition. The API does not automatically replay a failed command.

`save`, `create`, `select`, `trade`, and `write` preserve their legacy immediate in-memory behavior and queue persistence. Await `profiles.pending` before navigation, then inspect `profiles.lastError`. `pending` is a settled drain promise, allowing the original retry UI to attempt another write after a transient failure. A successful commit clears `lastError`. A synchronous legacy write during a queued Center transaction throws `PROFILE_BUSY`, preventing an older same-instance snapshot from erasing the transaction that precedes it.

`await profiles.refresh()` waits for pending operations, explicitly loads authoritative state, preserves a displaced in-memory bank as a backup, and clears a resolved conflict. It returns the current profile. Refresh failure retains the existing profile bank. Reload/recreate live game state after adopting this result; updating the bank alone does not replace battle fighters or the game's mutable `app.save`.

`profiles.dispose()` removes the storage-event listener.

## Conflict behavior

Browser clients compare the current stored bank to the record they last accepted. Disk clients also send the exact server revision they last accepted. Initialization never gives stale browser contents a newer server revision. Another client's change marks a stale instance as conflicted; its old game-save writes fail rather than overwrite Center transfers. A conflict remains until explicit refresh, including across original Save retries.

Use the hooks to pause the game and request an authoritative reload. Save and await persistence before opening the Center. Avoid a second stale `beforeunload` save after that navigation has begun. `original-save.js` checks `lastError` after draining queued writes so browser-storage failures still reach the source error/retry screen.

Web Locks serialize same-origin clients when available. An exclusive IndexedDB transaction provides the fallback mutex; that database stores no profile or account data. The Python revision check protects separate browsers that do not share storage. If a browser provides neither locking API and no disk service, mutations fail instead of pretending to be atomic. A queue also supports in-memory adapters in Node tests.

Legacy whole-bank writes without a `center` field retain the existing Center state and revalidate ownership. The Python endpoint additionally refuses a write that would silently drop an existing Center object. Imports that would duplicate escrowed Pokémon therefore fail validation rather than restore a second copy.

## Verification

`tests/local-transactions.test.js` covers authoritative disk loading and backups, two-client stale writes, concurrent commands, mutation and persistence failure isolation, queued snapshots, validator preservation, notifications/disposal, and disk success despite a cache-mirror failure. Existing profile/save/party tests await the persistence drain where they reopen the bank. The Python server integration test checks malformed writes, retained Center state, and simultaneous CAS contenders.

The conversion workspace's `work/browser-center-save-sync.mjs` runs real two-tab checks with Web Locks and the forced IndexedDB fallback. It uses isolated browser contexts and synthetic profiles, leaving player saves untouched.

`work/browser-game-import-sync.mjs` uses an isolated, intercepted disk API to check import failure isolation, delayed acknowledgments, external-change handling, and game-to-Center navigation. A pending or rejected import keeps the live game save and battle intact; a successful import adopts the committed profile bank before displaying success.

The game's original Daily and Weekly Mystery Gift buttons use the same Center claim transactions and cooldowns as the website. They save the current profile first, then deliver the gift to Center Pick Up while retaining the game's live profile and Pokémon objects. `tests/original-center-gifts.test.js` and `work/browser-original-center-gifts.mjs` cover the source waiting/success/used/error frames, delayed acknowledgments, shared cooldowns, failed-claim retry, and gift-code records.

The optional Center state also retains a cumulative account Dex. The 151-species normal/shiny/shadow history is merged into every profile at validation/commit, while later-generation profile records remain local to that profile. Older backup imports and replacement profile saves preserve existing Center Dex history.
