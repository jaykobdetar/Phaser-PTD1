# UI polish — 1.0.1

This update addresses the visual issues reported in the supplied screenshots.

- Pointer hover no longer adds a browser-drawn yellow rectangle or translucent fill over the original menu artwork. Keyboard focus remains visible.
- Occupied party cards now use the source controller's full opacity. The renderer replaces their authored `72/256` alpha instead of multiplying it into the runtime value. Empty slots retain the source half opacity, and parent HUD fades are preserved.
- The Pokémon summary preserves the “Your Money” label and updates only the separate balance field. Both source fields have the same name, which previously caused the label to be overwritten.
- Button gradients retain the original padded endpoint color, avoiding the turquoise strips caused by duplicate terminal color stops in the Canvas export. Interior hard color transitions remain unchanged.

`browser-ui-polish.json` records desktop/mobile checks, source card states, actual bright text/bar pixels, original Pokémon menu interaction, and hover/focus styling. The accompanying `polish-*.png` screenshots show the corrected screens. Source opacity regression tests also cover fainted/invasion cards and parent fades.
