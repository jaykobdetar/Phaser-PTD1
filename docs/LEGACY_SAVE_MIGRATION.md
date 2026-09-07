# Import an old local-server save

The port can convert the plain JSON files written by `ptd_server_v2.py`. The converter reads those files and creates a separate JSON backup for the Phaser game. It does not contact the old server or alter its saves.

Use Node.js 18 or newer. Run the following from the Phaser port directory, replacing the example paths with your files:

```sh
node tools/migrate-legacy-save.mjs \
  --pokemon "/path/to/ptd_saves/example_at_mail_com_pokemon_slot1.json" \
  --account "/path/to/ptd_saves/example_at_mail_com_account.json" \
  --slot 1 \
  --output "/path/to/new-phaser-save.json"
```

The output directory must already exist. The converter refuses to overwrite an existing file, including either input. After it succeeds, open the title screen and choose **Options → Local profiles · Backups and import → Import backup**, then select the new JSON backup. This page also lets you export the current profile or all three profiles before importing.

The old server uses one `*_account.json` file and separate `*_pokemon_slot1.json`, `*_pokemon_slot2.json`, and `*_pokemon_slot3.json` files. Match `--slot` to the Pokemon file you select. The filename prefix replaces `@` with `_at_` and periods with underscores. The converter accepts explicit file paths, so you do not need to enter an email address or password.

`--account` is optional. Without it, the converter imports the Pokemon collection with default trainer name, money and campaign progress. With the matching account file it also recovers the selected slot's trainer name, money and unlocked campaign level. Run `node tools/migrate-legacy-save.mjs --help` to view all options.

## What the conversion preserves

- Species, level, experience, normal/shiny/shadow form and custom PTD move IDs.
- The selected move, converting the old 1-based move slot into the port's move ID.
- Pokemon identity, making duplicate IDs unique if necessary.
- Collection position order; the first six Pokemon in that order form the party.
- With the account JSON: trainer name, money, campaign and challenge progress, badges, inventory, achievements, quest flags, game version, avatar and all three Pokédex forms.

All nine original targeting modes and nickname/tag strings are preserved. Legacy party selection is not stored separately in the supplied server’s Pokémon array; the first six by position form the imported party. Original `advanced` counts completed stages, so the port correctly unlocks the following stage. The converter reports any recovered defaults or duplicate identity repairs and leaves the original files unchanged.

PTD uses its own move numbering: Tackle is 1, Growl is 5 and Ember is 10. The converter preserves the saved PTD IDs. It does not convert them through the main-series Pokemon move list. Some comments and examples in the Python server use main-series names for different IDs; the recovered game scripts are the authoritative mapping.

## Errors and recovery

Invalid JSON, unknown species or move IDs, invalid levels, and malformed collections stop conversion before an output is written. If the output filename already exists, choose a new filename. Version-1 Phaser backups also migrate to the current version-2 schema; the old browser storage entry is retained as a migration backup.

This tool accepts local-server JSON saves. Flash SharedObject `.sol` files and the encoded HTTP delta-save strings are not accepted directly.
