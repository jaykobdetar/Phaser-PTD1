# Original story and interface recovery

The playable port renders the supplied game's original vector paths, embedded font glyphs, bitmaps, transformations, color transforms, masks and animated display lists through Canvas2D. Phaser can upload that Canvas to a CanvasTexture. No SWF player, Flash VM, Ruffle, runtime `eval`, or remote game service is used.

## Recovered coverage

- **2,124 MovieClip timelines**, including all named and unnamed nested animation clips, original frame labels, placement change points and registration bounds.
- **4,230 frame-action methods**, parsed from `addFrameScript`; zero unparsed frame actions.
- **584 root graphics exports**: story scenes, tutorial, victories and defeat dialogs, original menus and popups, and the 319 graphical symbols used by source attack/effect classes.
- **142 original popup/tutorial controllers**, statically translated with original conditions, text, button actions and reward mutations retained.
- **3,049 text-field definitions and ten embedded fonts**. Dynamic trainer names and story insertions use recovered glyph outlines and advance widths.
- **2,000 deduplicated original bitmap assets** used by these graphics.

The timeline library preserves the original **21 frames per second** clock. A parent `stop()` freezes its timeline while nested children continue. Frame numbers are one-based, current labels persist until a later label, `gotoAndPlay`/`gotoAndStop` execute source frame actions, and new display children start at their original first frame. Native tween and timer adapters use this clock. PixelDissolve uses the original section count and duration, with a deterministic reveal order because the original random ordering is not saved.

## Original stage and screen layers

Both the supplied outer SWF and embedded game payload define a black (`#000000`) **800 × 480** stage. `OriginalStageMetadata.java` verifies their `SetBackgroundColor` tags and frame rectangles directly. The embedded game runs at 21 FPS; the outer loading wrapper runs at 30 FPS.

The recovered `main.change_Screen` removes the previous screen. Native title, profile, main menu, chapter, party and service screens therefore replace the game area. Battle popups remain above the current map; their source graphics and controller alpha changes provide any dimming. No generic browser backdrop tint or white Canvas fill is added. The dialog and its accessible hit regions track the same stage rectangle when the viewport changes.

The opening three victory movies remain attached to the live map transform, preserving surviving towers, candy, camera tweens and the player’s current zoom. Viridian Forest’s intro transfers its source camera destination to the live map. PixelDissolve uses the same transform as its movie, including at reduced zoom.

The battle HUD Menu uses the source `popup_Menu_gfx` settings panel, followed by `popup_Exit_Level` for Exit. Back resumes the same battle. Source music, sound and damage-text switches are independent. Intro completion plays the original `ready_go` timeline and starts waves when its `end` frame is reached. Win/loss closure follows the source chapter or challenge return path.

The main-menu Save, Back, Wiki and PokéCenter paths use the original `popup_Save` animation and saving/success/retry states. The local adapter awaits the Python server’s acknowledgment when disk saving is active; storage failures and revision conflicts do not display a false success. A static-hosted build saves to browser storage. The source remote account validation is replaced by the approved local profile service.

Music, effects and damage-text choices are stored as device options, matching the original SharedObject scope rather than a single profile. Existing profile preferences migrate; a fresh device starts with the source defaults enabled. The Options server field is the entry to the local storage counterpart, where portable profile exports and imports are available within the stage.

The Canvas conversion preserves the original padded gradient endpoints. Several button fills contain repeated final SWF gradient records; Canvas would otherwise choose a trailing turquoise record and paint an extra stripe. The converter keeps the first terminal color, matching the source raster reference, and preserves interior hard-stop boundaries. Original menu and profile buttons use single-frame MovieClip hit regions over static artwork, so hovering changes the pointer rather than adding a new graphic border.

## Runtime and integration

`src/story-runtime.js` executes the static functions in `story-data-controllers.js`. It adapts the source profile, party, inventory, quest flags, avatar, sounds, tweens, timers and stage callbacks to the native game. Persistent quest flags synchronize both `originalExtraInfo` and `extraInfoValues`. Temporary challenge parties read and mutate the battle's temporary collection; campaign rewards and progression use the campaign profile.

`src/original-story-ui.js` installs original intro, victory, defeat and onboarding playback. It places accessible DOM hit regions over the original Canvas controls using recovered names and coordinates. `paintOriginalMenu()` exposes the same renderer for native menu integrations. Local profile, save, trade and mystery-gift services supply the dynamic behavior of menus that formerly contacted the old server.

`src/story-data-stage.js` resolves achievement-wrapped victory popups that the initial level extractor had misidentified as `null`. Stages 5, 10, 15, 20, 25, 26, 28, 33, 35 and Challenge 5 retain their source victory controllers. Source stages that intentionally return no victory popup keep their direct next-stage behavior.

The original eight-chapter selector, each chapter’s stage map, and the six-challenge selector use recovered artwork and hit regions. Campaign and challenge locks use the current native profile. A chapter selection enters the original party screen; leaving an active battle uses the original HUD Exit confirmation.

Rock Tunnel uses the original animated room controllers, directional controls, trainer/wild encounter dialogue and shiny-hunt branches. `story-data-tunnel-ui.js` links their callbacks to the existing visit flags, encounter selection and battle bookkeeping. Source wave selections and the game-session Pikachu count remain authoritative.

Stage 36 plays the original introduction, then unlocks stage 37 before the ending. Its source trade searches only the party for the first Slowbro and mutates that same Pokémon into a level-one Lickitung with Lick. Declining leaves it unchanged. Closing the ending grants badge eight.

## Validation

`node --test tests/story-runtime.test.js` verifies:

- Every recovered timeline initializes and advances without unresolved frame actions.
- All **136 mapped campaign/variant intro and victory entries** reach an original transition through Next/choice controls without using Skip.
- All **66 mapped defeat entries** retain their original close action.
- Original capture popup content and the evolution callback/Stop Evolving branch.
- First-visit Skip restrictions and attempted-stage recording.
- Stage-36 trade identity, appearance, moves, level, No branch, storage exclusion and badge reward.
- Quest-flag compatibility and separation of temporary challenge parties from campaign saves.
- The opening three victory movies and their buttons retain map-parent tween offsets and reduced zoom, keeping their visible hit regions aligned.
- Ready Go calls `start_Level(false)` on its exact original end label.

Browser validation draws all **584 Canvas root exports at 2,142 first, final, label and frame-action positions**, with zero rendering exceptions. Actual DOM clicks through Campaign → Chapter 1 → Oak and Challenge 1 verify original menus, locked hit targets, original intro controllers and temporary challenge-team ownership. Separate browser checks cover onboarding choices, capture/evolution playback, stage-36 progression and original menu hit regions. This is branch-focused regression coverage, not an assertion that every possible combination of team, quest and battle history was exhaustively enumerated.

## Rebuilding

Additional HUD, drag-item and 48 map-highlight exports provide source display geometry for native interaction. Their original placements are recorded in `public/data/story-highlights.json`.

The paired recovered-source archive includes the original embedded game payload, decompiled ActionScript and these helpers:

- `work/StoryLibraryMetadata.java`, `StoryTextMetadata.java`: exact timeline and text/font metadata.
- `work/extract_story_timing.py`, `add_story_text.py`: original frame actions and native data files.
- `work/build_story_controllers.py`: static, string-preserving source controller translation.
- `work/build_story_canvas.py`, `story_gradient_fix.py`, `story-dynamic-text.js`, `story-root-finish.js`: static Canvas module conversion, explicit function registry, deduplicated bitmaps and original dynamic text.
- `work/story-canvas-roots.json`: selected original symbols, including source effect graphics.
- `work/rebuild_story.py`: orchestrates recovery with Java/JPEXS and Python.

Run `python3 work/rebuild_story.py` from the extracted recovery directory. Place `ffdec.jar` in the recovery directory or set `PTD_FFDEC_JAR` to its location. The helper writes reconstructed assets and generated controller code into `outputs/phaser-port`; the hand-written native adapters remain in the playable project. Large intermediate Canvas HTML exports are regenerated rather than archived.
