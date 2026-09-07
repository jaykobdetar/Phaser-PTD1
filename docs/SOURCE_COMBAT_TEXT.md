# Original combat text

Combat XP, misses, damage, and healing use `poke.receive_Experience`, `poke.method_90`, `poke.take_Damage`, and `poke.take_Healing` from the recovered ActionScript. Their `class_197` effects attach the original `do_damageText` symbol (1401) to the combat actor. The nine source frames supply scaling, upward movement, opacity, and removal; the Phaser scene does not create a second notification for native combat.

The source strings, colors, and formats remain distinct:

| Event | Text | Color | Font size |
| --- | --- | --- | --- |
| Normal damage | amount | `#000000` | authored 40px |
| Super effective damage | amount | `#ff3300` | authored 40px |
| Ineffective damage | amount | `#666666` | authored 40px |
| Healing | `+amount` | `#00ffcc` | authored 40px |
| Experience | `+amountxp` | `#0099ff` | source 30px |
| Miss | `MISS` | `#ff9900` | source 30px |

Healing displays the requested amount even when HP is capped. Lethal damage returns through the source faint branch before creating damage text. Disabling damage text through the original battle menu suppresses new text without deleting animations that already exist.

XP retains source contributor identity/order, cumulative level bonuses, shiny integer truncation, and the pre-award experience threshold. Detached contributors receive profile XP without being reattached to the map. Recalling and redeploying a Pokémon preserves the distinction between its source combat instances.

The native display adapter forwards dynamic text, text color, and text format to Canvas. Effective fonts are recovered from the Flash text records: for example, damage text's HTML uses the full Arial font 982, despite its edit tag referencing the sparse default subset 1270. Rendering clips to the original field bounds. Authored SWF color multipliers use 256 as identity; the Canvas export converts them to the helper's 255-based representation to preserve source RGB values and opacity.

`tests/native-text.test.js` verifies strings/colors, live settings, source frame lifetime, faint cleanup, XP arithmetic/order/overflow, detached contributors, native render adaptation, complete XP/MISS font glyphs, and color-transform identity. The development browser check `work/browser-native-text.mjs` renders the actual exported symbol and checks visible glyph pixels and source colors in Chrome.
