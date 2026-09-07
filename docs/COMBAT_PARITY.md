# Combat conversion and source audit

The application runs the recovered ActionScript attack, effect, ability and boss classes as statically generated JavaScript. Phaser supplies the display and input layer. Combat advances at the original 21 logical ticks per second. `App.init` loads the recovered timeline metadata before constructing a battle; combat animation states and collisions do not depend on browser animation completion callbacks.

`move-source-generated.js` contains the source class manifest, method inventory and original file hashes. `move-native.js` adapts those classes to `Battle` and `ReverseBattle`. The older descriptor-based engine remains available to callers that intentionally construct a Battle without timeline metadata; it is not the application's full combat path.

## Implemented source contracts

| Contract | Source evidence | Port |
|---|---|---|
| Attack instances, cooldowns, accuracy, damage, status and path effects | `attack.as`, `class_194.as`, original attack/effect subclasses | Static source runtime for all 433 move IDs, with AS integer conversions and source class identity |
| Nine target priorities; Protect, Feint, Follow Me and evasion priority | `poke.method_92`, `method_97`, `method_183`; `poke_Tower.checkEnemy` | Native range display geometry and source ordering. Priority 6 is type effectiveness, not distance. |
| Encore move selection | `popups_Poke_Check.change_Move_To`, `popups_Poke_Check2.change_Move_To` | Player selection cannot change the current move while source effect class797 is active; defense and invasion both resume selection when the effect ends. |
| Ability assignment and behavior | `ability_Utility.as`, `class_391`–`class_399` | All nine original behaviors, including the original Guts ×2 and Sand Veil ×3 effects; species without a source ability receive none |
| Tower tick order | `poke_Tower.run` | Cooldown, effects, AI, ability, attack, path collision |
| Traveling Pokémon tick order | `poke.run` | Effects, movement, candy pickup, waypoint, cooldown, self move, ability, AI, opposing-target attack, path collision |
| Normal travelers do not attack towers | `profile_poke.var_107` defaults to false; `poke.checkEnemy` | Only explicitly enabled source profiles attack opposing towers; self moves still run through `method_401` |
| Movement | `poke.method_185`, `method_71`, `method_233`, `method_289` | Cardinal waypoint directions, full-tick overshoot, one waypoint per tick, original endpoint timing and reversible retreat |
| Candy | `poke.method_367`, `method_91` | Actual source candy placement transforms and animated Pokémon bounds, pickup before waypoint advancement, exclusion flags, carry/drop/escape lifecycle and reverse travel |
| Mewtwo AI | `class_92` | Amnesia until class803 exists, Barrier until class808 exists, offense otherwise; Recover at ≤30% HP |
| Zapdos AI | `class_93`, `class_121`, `class_566` | Drill Peck and Thunder complete their native state sequences before switching |
| Fixed allies | `screen_Level.method_10`, `run`, `get_Friendly_List` | Separate NPC list; allies attack enemyList but are excluded from normal hostile targeting and player XP credit. Source path effects can affect them. |
| Recall | `screen_Level.return_Poke`, `create_Drag_Poke`, `profile_poke.reset_Poke_Stats` | Replacing a recalled Pokémon preserves remaining HP while creating fresh attack/effect/stat state |
| Live training/evolution | `poke_Tower.level_Up`, `evolve` | Leveling heals existing HP capacity. Evolution replaces the graphic and base stats while retaining current HP, capacity, ability and effects until redeployment. It cannot revive a fainted actor. |
| Fainting and self-destruction | `poke.I_Fainted`, `class_735` | Clear occupied spots; remove exploded Pokémon from the active party while retaining the collection entry |
| Abandon/restart | Source level disposal and party replacement | Stop old battle ticks and abandon old effects without granting residual damage, rewards or duplicate callbacks |

### Actor removal during a tick

Selfdestruct and Explosion share source effect `class_735`. When its original
animation ends, it returns the Pokémon and clears its party position. Calls
later in the same battle tick still refer to that original, detached actor.
The native adapter retains this identity instead of allocating another actor
and putting its sprite back on the map. Fainting, capture and ordinary recall
use the same rule; a legitimate redeployment creates a new fighter and actor.

`native-actor-lifecycle.test.js` checks both moves through complete battle ticks
in the campaign and Mt. Moon Challenge 3, including an actual challenge capture,
animation completion, collection preservation and temporary-party isolation.
It also checks effect-phase fainting and recall/redeployment with delayed
effects. `browser-selfdestruct-cleanup.json` records both moves completing
damage and clearing their sprite pixels from the native Canvas in Mt. Moon.

## Campaign special-hook ledger

Every `level_1`–`level_42` class was inspected for methods beyond ordinary background, wave and popup selection. Wave-specific species, timing, stat changes and moves execute from the recovered wave scripts. The table records additional level behavior.

| Level | Additional source behavior and implementation |
|---|---|
| 1 | Background offset is presentation; ordinary candy defense and native starter attacks. |
| 2 | `update_Wave_Info` delegates to base; wave story presentation is handled by the story layer. |
| 3 | Friendly Rattata/Pidgey; Cut at spot3; remember deployed Abra for the story trade. |
| 4 | Ordinary defense. |
| 5 | Final-round deployed-party dismissal; ≤10/all-candy achievement7. Collection entries remain owned. |
| 6 | Ordinary defense. |
| 7 | Ordinary defense. |
| 8 | Ordinary defense. |
| 9 | Ordinary defense. |
| 10 | Remember deployed Poliwhirl; ≤30/all-candy achievement8, otherwise no Grass/Electric achievement3. |
| 11 | Ordinary defense using its source boss move. |
| 12 | Win proceeds through the source defense/invasion phase chain before campaign completion. |
| 13 | Ordinary defense. |
| 14 | Friendly Poliwhirl/Charmeleon; remember deployed Spearow as the trade candidate. |
| 15 | ≤50/all-candy achievement9. |
| 16 | Ordinary defense. |
| 17 | Native Rock Tunnel branch controller, field moves, room waves and route completion; see `ROCK_TUNNEL.md`. |
| 18 | Ordinary defense. |
| 19 | Ordinary defense. |
| 20 | Three fixed allies; original Celebi healing move274; ≤60/all-candy achievement10. |
| 21 | Ordinary defense. |
| 22 | Ordinary defense. |
| 23 | Friendly Pikachu using Thunder Wave. |
| 24 | Ordinary defense. |
| 25 | Source Mewtwo profile/AI; ≤64/all-candy achievement11. |
| 26 | Invasion, original fixed defenders, energy and candy rewards; ≤70/fourth-candy-first achievement6. |
| 27 | Friendly Rattata/Vileplume/Meowth. |
| 28 | Muk can leave after wave completion; ≤80/no Poison-or-Steel achievement12. |
| 29 | Separate original Safari rules and temporary party handling; see `SAFARI_ZONE.md`. |
| 30 | Gary's native potion move404; native Zapdos AI; enemy defeat finishes waves; party wipe loses even while Gary survives. |
| 31 | Ordinary defense. |
| 32 | Win gift flag `var_556`: retain every candy and have not received extraInfo29. |
| 33 | Party-wipe loss; ≤90/all-candy achievement13; gift flag requires all candy and no extraInfo34. |
| 34 | Ordinary defense. |
| 35 | Source wave condition for achievement14, including its original non-assigned counter addition. |
| 36 | Story-only transition; no invented enemy wave. |
| 37 | Zapdos gift eligibility copied from the source wave's defeat flag and original saved-form conditions. |
| 38 | Articuno gift eligibility copied from the source wave's defeat flag and original saved-form conditions. |
| 39 | Moltres gift eligibility copied from the source wave's defeat flag and original saved-form conditions. |
| 40 | Four Elite Four phases; subsequent classes953/955 boost party base_HP ×10, class958 ×18; Muk release in class953. |
| 41 | Party base_HP ×20 before the normal HP formula; party-wipe loss. The boost is local to this battle. |
| 42 | Ordinary defense using its original custom move profiles. |

The Elite Four and Champion boosts multiply the **base stat**, then apply `floor(2 × baseHP × level / 100) + level + 10`. They do not multiply final HP and do not modify saved species data. The source applies them to the initial party; evolution resets that profile’s base stats, and the next placement reconstructs its HP from those stats.

## Challenges and local multiplayer

All six challenges use their recovered stage classes and forced-party definitions. Challenge3 captures enter its temporary party and never enter the campaign collection. Source global money and achievement counters remain shared, so earnings or training costs survive leaving early. Challenge rewards are granted once and do not advance campaign progress.

Local versus combines the source teams from `multi_level_1_0`/`multi_level_1_1` on one computer. Attackers use the source integer-truncated half-speed stat and energy budget. Local co-op combines both three-Pokémon teams and Gary against native Zapdos; one defeated team does not lose the battle, while all six player Pokémon defeated does. Multiplayer uses an isolated save and cannot alter the campaign. This is a local replacement for the original PlayerIO transport, not a claim of restored remote matchmaking.

## Verification and limits

The native input engine follows `screen_Level.create_Drag_Poke`, `mouse_Up`,
`spot.method_147`, and `poke_Tower.before_Dragging`/`finished_Dragging`:
typed spots enforce their original type, fixed NPC positions are blocked,
repositioning preserves the actor/HP/effects/ability/cooldown, and the seven
profile modifiers, critical chance, transformation flag and temporary large
graphic scale reset exactly as authored. Dropping onto an occupied position
swaps an existing actor back to its origin without rechecking the displaced
Pokémon's type; dragging a fresh actor there recalls the occupant. Invalid
drops recall the dragged Pokémon. Original Ready/Go can start with no deployed
towers through `start({allowEmpty:true})`.

`profile_user.reset_Party_List` creates six entries, and empty positions stay
`null`. Capture fills the first empty position; source Selfdestruct and Pewter
dismissal clear the matching position; storage, release, profile backups and
trades preserve indices. `Battle.party` returns six profile/null positions;
`partyMembers` returns only occupied profiles. Releasing the final owned
Pokémon leaves a valid empty collection. Temporary Safari and challenge teams
follow the same indexed interface and do not replace the saved campaign team.

Native life bars now attach to the original actor with `poke.method_301`'s
position, width, HP scaling and state frames. `method_185`'s uncatchable/shiny
states and source damage/healing frame changes remain active. Pokéball input
tests whole-actor bounds, including the life bar, active effects and carried
candy; potion input tests only `tower.gfx` against the original 72×72 potion
graphic. Potion geometry is transformed from HUD to map space so zoom does not
change the HUD item's size. Focused party and geometry tests cover these
contracts, including live native Selfdestruct and inverse-zoom potion edges.

Automated tests cover the source ability table and interactions, native Mewtwo/Zapdos decisions, NPC allegiance, faction targeting, faint/recall/disposal, repeated retreat, source HP boosts, achievement and gift flags, challenge captures/rewards/save isolation, invasion relaunch and co-op defeat conditions. The native move runtime separately exercises all 433 moves.

The campaign smoke exercise visits all 39 direct battle entries (excluding Rock Tunnel selection, Safari and the story-only stage), and the variant exercise visits 26 non-story, non-multiplayer variants. These runs check execution and hooks, not whether a fixed test team can win each stage. All twelve original starter × placement combinations win Oak’s Lab at seed13 with no capture or training (7–9 candies retained). This regression also verifies that ordinary travelers never attack towers when the source `var_107` flag is absent.

Source compilation and these tests do not prove that every possible move combination or every rendered frame is identical to Flash. Original timeline geometry and scripts drive native effects, but visual filters and text rendering still depend on the Phaser presentation adapter. Browser production checks, story-controller tests, and the specialized Rock Tunnel/Safari tests complement the combat tests.
