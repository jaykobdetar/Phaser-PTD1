# Recovered Pokémon Tower Defense assets

All files were recovered from the user-supplied Flash game. No replacement art was downloaded or generated.

## Pokémon

`pokemon-manifest.json` describes 536 appearance symbols (180 normal, 178 shiny, 178 shadow), including every Kanto species, later-generation specials, Arceus forms, trainer symbols 1000/1001, and MissingNo 1010. Sheets are native-resolution transparent PNG, eight equal horizontal frames. Order is front 0–1, left 2–3, back 4–5, right 6–7. Selected original source frames: 1, 9, 18, 26, 34, 42, 50, 58. The source timeline ran at 21 fps and changed poses every eight frames, so a Phaser frame rate of 2.625 reproduces the walking cadence. Every source sprite had 65 frames; the remaining source frames duplicate these eight poses.

Use `frameWidth` and `frameHeight` to load Phaser sprite sheets. `origin` retains the original Flash registration point relative to a PNG cell; setting it on Phaser sprites preserves placement relative to extracted game coordinates. Native source sprite dimensions vary by species, so scale consistently when matching original game size. Avoid smoothing pixel art (`pixelArt: true`, nearest texture filtering).

Shiny keys use `poke_s_###`; shadow keys use `poke_ss_###`. Every appearance has its own native sprite dimensions and registration point, supplied by the same manifest. Shiny sparkles and shadow aura/tint are rendered from the original symbols.

## Maps

`map-manifest.json` covers 51 original `gfx_level_*` background symbols, three challenge levels, eight chapter menus and the base selection/start menu symbols. Map art contains original scenery/NPCs from frame 1. The extraction removed direct waypoint instances matching `w[p0-9]_*`, deploy spots `spot_*`, highlight helper `hl_spot` and candy instances `candy_*` before rasterizing. Their gameplay coordinates are preserved separately by the mechanics extraction in `work/data/levels.json` and `work/data/level-art-placements.json`.

For a point `(x,y)` in original map-local coordinates, its PNG coordinate is `(x - sourceBounds.xMin, y - sourceBounds.yMin)`. Equivalently place the map image at `(sourceBounds.xMin, sourceBounds.yMin)` with origin `(0,0)` and keep entities at their original coordinates. Apply the same map scale/translation to art and entities. Some backgrounds extend well beyond the original viewport; use the original game camera rather than fitting every full map to a fixed viewport if exact presentation is required.

`gfx_level_1.png` is 627×264 with local origin 0,0. Later maps may have negative bounds. PNG integer dimensions may truncate fractional SWF bounds by less than one pixel.

## Audio and UI

`audio-manifest.json` describes 67 embedded MP3 files, exported without transcoding, including original location/battle music, combat/level-up sound effects, and Pokémon cries available in this SWF. Duration was verified with ffprobe. Audio playback must begin after user interaction in browsers.

`ui/title-screen-original.png` is the finished legacy title screen from nested symbol 11452, frame 312. Its old version text and controls are flattened into the image. `ui/rare-candy.png` is a 31×31 candy icon. `ui/pokeball-1.png` and `pokeball-2.png` are the closed/open ball frames, retaining their common 98×151 frame bounds. Closed ball visible pixels occupy y 26–123.

`effects-manifest.json` includes original hit, scratch, Water Gun, Ember and seed hit animations at source 21 fps, plus the two-frame blue/red range graphic. Range source bounds are x −140..140, y −134.35..134.4; this is a base horizontal radius of 140 local units. Effects retain source frames, including blank end frames where present.

## Reproduction

Run `python3 work/extract_assets.py --export` from the recovered project root to rerender and assemble every included asset. This requires Java, the installed JPEXS jar, Pillow and ffprobe. Without `--export`, the script rebuilds delivery sheets/manifests from raw exports. It writes `work/assets/qa-report.json` and variant visual comparisons. `work/AssetPrepare.java` supplies exact original/cleaned bounds and removes only named helper placements in a separate temporary SWF.

## Provenance and QA

`provenance.json` records the source SHA-256 and extraction method. Original source SWF was not modified. `work/AssetPrepare.java` used installed JPEXS classes to create a separate clean-map SWF and read exact sprite bounds. Raw exports, CSV bounds, rendering logs, title timeline investigation and contact sheets remain in `work/assets` for reproducibility and inspection. All 180 normal Pokémon sheets and all 51 normal map backgrounds were inspected in contact sheets; variant samples were inspected in a side-by-side comparison. All 611 PNGs passed PNG structural verification. Backgrounds and Pokémon were exported at native resolution.

Sprite extraction does not execute ActionScript. Cutscene timelines, dynamic movement, battle effects and secondary sprite animations still need implementation in Phaser; this asset set itself is not a gameplay port.
