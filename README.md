# Pokémon Tower Defense — Phaser 3
<img width="835" height="450" alt="image" src="https://github.com/user-attachments/assets/176d9f7f-a10c-499b-ac97-ca1541a43a84" />

<img width="835" height="450" alt="image" src="https://github.com/user-attachments/assets/0afdf42a-a650-4b7a-a3e6-cb926cd97881" />

<img width="835" height="450" alt="image" src="https://github.com/user-attachments/assets/3faabb0c-ca22-47b3-a51c-ddecdf0b54b9" />

A native offline conversion of the supplied `Ptd1-V3.6.0.swf`. Phaser 3 and JavaScript run the game with the recovered artwork, music, animation, game rules and original 800 × 480 interface. Flash and Ruffle are not required.

## Play

The release ZIP includes the production game in `dist/` and needs only Python 3 to launch. A source checkout from this repository needs Node.js 22 and npm to build it first:

```sh
npm ci
npm run build
```

Then start the local game server:

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
- A local PokéCenter website with adoption, trade listings and offers, wishlists, giveaways, gifts, Game Corner, conversions, inventory, account-wide Pokédex and profile settings.
- Offline mystery gifts and shared-screen two-player versus/co-op.

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

The main-menu Save button shows the original saving, success and retry popup. The Python launcher also writes `saves/profiles.json` beside the game and retains `profiles.previous.json`. Writes are atomic, and a revision check and save-folder lock prevent another window or launcher process from silently replacing a newer disk save. Static hosting supports browser-only saving.

For portable backups, go to **Title → Options → Local profiles · Backups and import**. Export the current profile or all three profiles, or import a JSON backup. Version-1 port saves migrate to version 2 and retain the previous browser storage entry. See [legacy save migration](docs/LEGACY_SAVE_MIGRATION.md) for old local-server accounts. The supplied SWF and original server saves are left unchanged.

Choose **PokéCenter** on the game menu, finish the original save popup, then select **Open local PokéCenter**. You can also open **http://127.0.0.1:8073/pokecenter.html**. The website and game share the same three profiles and saved Pokémon. See the [PokéCenter guide](docs/POKECENTER.md) for its pages, local economy and transfers.

PokéCenter provides local profile-to-profile trading with listings, up to six offered Pokémon, and automatic wishlist matching. Mystery Gift retains the original code entry and response screens. Its Daily/Weekly buttons share the Center’s shiny/shadow gifts and cooldowns; rewards arrive on Center Pick Up. The source `ptdicu` code and current `ptdooo` code grant MissingNo, alongside the existing offline code catalogue. Multiplayer keeps the original teams, maps and objectives with **Switch player** for local handover. These services do not require the retired servers. Original website links open only when clicked.

See the [1.2.0 optimization report](docs/OPTIMIZATIONS.md) for measured startup, rendering and large-inventory improvements, and [validation](docs/VALIDATION.md) for the checks and their coverage. GitHub Actions runs the tests and production build on Linux and Windows.
