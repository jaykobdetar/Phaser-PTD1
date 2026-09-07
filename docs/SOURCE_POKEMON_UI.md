# Original Pokémon screen behavior

The original source runs at 800×480, 21 FPS. `original-battle-ui.js` renders `gfx_screen_poke_check` over the live map, while `original-profile-ui.js` renders the separate storage/profile screens and source popups. The original screen graphics supply their own fills. No extra modern toolbar is attached.

## Battle check

The deployed party HUD slot opens `popups_Poke_Check`. An undeployed slot starts a drag; a map tower starts a drag. `popups_Poke_Check2` is the reverse-stage variant. The three online stage controllers override their check handlers with empty methods.

The regular check offers the four original attack slots, nine targeting modes, paid level-up and Done. It has no recall or potion control. Encore blocks move changes. A transformed Pokémon changes its temporary move selection. A level-up heals existing capacity without resetting effects or ability, closes map focus, and proceeds through evolution and learning before returning to battle. The reverse check exposes moves and Done only.

Evolution/learning use original controllers `popups_Check_Evolve`, `class_979`, `class_970`, and `class_975`, including the exact timeline mutation frame and repeated replacement swaps. Source move-slot identity is preserved when its selected move is replaced.

Scene integration: `app.openBattlePokemon(fighter)` calls `scene.enterPokemonCheck(fighter)`; closing or advancing calls `scene.leavePokemonCheck()`. The scene owns centering, range, other-tower fading and HUD visibility. `app.disposeBattlePokemon()` abandons the popup on stage disposal without further edits.

## Party selection and profile check

Chapter stages open `screen_Party_Select(whichLevel)` before constructing their battle. Challenges 4/5 use the same selection screen; challenges 1/2/3/6 retain their source forced teams. Start requires an occupied party slot. Back uses the original chapter boundaries. Pokémon details return to the same selected stage and storage page.

Party positions are six fixed nullable slots. A source drag starts after more than 40 stage pixels along either axis, with a 70-pixel touch lift. Dropping onto an occupied party slot returns its previous occupant to storage; the dragged Pokémon’s old slot remains empty. Storage-to-storage drops exchange collection positions. The source first-party tutorial dims its parent to 0.5.

`profile-source-generated.js` mechanically translates eight source controllers: release, evolution, learned move, trying move, replacement, items, TMs and relearning. `profile-source.js` supplies the profile and parent-screen adapters. The compiler is `work/build_profile_controllers.py` in the recovery workspace/archive.

A stone is consumed before evolution begins; cancellation does not refund it. TM/relearn fees are charged before the learning offer; declining the offer does not refund them. Release can remove the last Pokémon and leaves six empty party slots. There is no original Pokémon rename control in `screen_Poke_Check`.

New profiles use `popup_Choose_Name`. The recovered Oak controller places the starter into storage and proceeds to Chapters. It does not automatically fill a party slot or start stage 1. Selecting an empty existing profile, or entering Story Mode with an empty collection, resumes the same starter tutorial while retaining that profile’s progress.

## Verification boundaries

Focused Node tests exercise battle source controls, target modes, Encore, transformed selection, HP/effect preservation, animation mutation events, learning/replacement, disabled multiplayer checks, release and all Eevee stone controls. Profile tests also cover selected-stage/context retention, challenge routing, empty-party gating, exact slot updates and onboarding completion. The browser regression script `work/browser-source-profile-flow.mjs` exercises native screen transitions through DOM controls and records screenshots; its browser result is recorded separately by the main integration run. Passing these checks establishes the covered interactions, not exhaustive equivalence of every possible UI state.
