# Pokémon Tower Defense — Phaser 3

A native offline conversion of the supplied `Ptd1-V3.6.0.swf`. Phaser 3 and JavaScript run the game with the recovered artwork, music, animation, game rules and original 800 × 480 interface. Flash and Ruffle are not required.

## Play

The production game is included in `dist/`. Python 3 is the only launcher requirement; Node/npm are needed only for development.

```sh
./start-game.sh
```

Or run `python3 start-game.py` and open **http://127.0.0.1:8073/**. Keep the terminal open while playing. The game loads local assets over HTTP, so opening `dist/index.html` directly does not work.

Choose a profile and follow Professor Oak’s original introduction to select your starter and Red/Blue version. Choose a chapter stage, drag your starter from storage into a party position, and press Start. The original introduction and Ready Go animation start the battle automatically.

## Included

- All 42 campaign entries and additional phases, Rock Tunnel’s route puzzle, Safari Zone, and six challenges.
- All 433 recovered move classes and their dependent effects, source abilities and boss AI, running at the original 21 ticks per second.
- Original animated title, profile, chapter, party, Pokémon, shop, Pokédex and achievement screens; original battle HUD, popups, story choices, introductions and endings.
- Six fixed party slots, storage, nine targeting modes, training, move learning, TMs, relearning, held items, level/stone/trade evolution and release.
- Three local profiles, browser and disk saves, portable JSON backups, and import of the supplied local server’s JSON saves.
- Local trading, offline mystery gifts, and shared-screen two-player versus/co-op, as requested.

## Original controls

- Drag an undeployed Pokémon from its HUD portrait onto a highlighted placement spot. Drag a Pokémon already on the map to move it; releasing outside a valid spot recalls it. Occupied spots allow a swap.
- Click a deployed Pokémon’s HUD portrait to open its original Pokémon menu. Choose moves, targeting, training and evolution there.
- Drag the Poké Ball onto a weakened wild Pokémon to catch it. Shiny Pokémon can be caught immediately; some enemies cannot be caught. A successful catch stays paused until the original capture popup is acknowledged.
- Drag a potion onto a deployed Pokémon to heal it.
- Use the original HUD buttons for pause, speed, zoom, paths and Menu. **1–4** choose game speed; **0, 9, 8, 7** choose zoom. **Space, P or Escape** pause/resume when no popup is open.
- Drag the map to pan. **WASD / arrow keys** pan while the battle is running.
- In invasion stages, select a path and a party Pokémon to launch it when enough energy is available.
- Menu → Back resumes the battle. Menu → Exit opens the original confirmation and returns to the appropriate chapter or mode screen.

Safari uses Joey’s Bait/Rock moves and restores your normal party on leaving. Rock Tunnel requires Flash; Cut/Flash teaching follows the recovered quest and TM rules.

## Local services and saves

The main-menu Save button shows the original saving, success and retry popup. The Python launcher also writes `saves/profiles.json` beside the game and retains `profiles.previous.json`. Writes are atomic, and a revision check prevents another window from silently replacing a newer disk save. Static hosting supports browser-only saving.

For portable backups, go to **Title → Options → Local profiles · Backups and import**. Export the current profile or all three profiles, or import a JSON backup. Version-1 port saves migrate to version 2 and retain the previous browser storage entry. See [legacy save migration](docs/LEGACY_SAVE_MIGRATION.md) for old local-server accounts. The supplied SWF and original server saves are left unchanged.

PokéCenter provides local profile-to-profile trading. Mystery Gift retains the original code entry and response screens, with a local offer catalogue, daily/weekly offers and the source `ptdicu` gift. Multiplayer keeps the original teams, maps and objectives with **Switch player** for local handover. These services do not require the retired servers. Original website links open only when clicked.

## Sharing the game

Share the provided, verified release ZIP or a fresh extraction of it. A working or played installation may acquire private `saves/`, exported or imported profile JSON files, dependencies, caches, and other local files; the release audit does not cover those later additions. Keep your saves and backups in your own installation. Browser saves stay in the browser and are not part of the project files.

The launcher locates the game relative to its own folder, so recipients can extract it anywhere and run `python3 start-game.py`. They do not need your username, original download folder, or development tools to play the bundled build.

See [sharing and privacy checks](docs/SHARING.md) for the audited scope and repeatable archive check.

## Develop and verify

Tested with Node 22.16.0. Phaser 3.90.0 and Vite 6.4.1 are pinned.

```sh
npm ci
npm run dev
npm test
python3 tests/local-server.test.py
npm run build
```

Development runs at http://127.0.0.1:5173/. The production bundle omits the development inspection global and loads game assets locally.

See [conversion coverage](docs/MIGRATION_STATUS.md), [validation](docs/VALIDATION.md), and [original profile behavior](docs/ORIGINAL_PROFILE_PARITY.md). The checks cover recovered source behavior and selected complete play sessions; they do not exhaust every possible battle strategy or interaction.

Original game by **Sam & Dan Games**. Pokémon artwork, characters and audio retain their existing rights.
