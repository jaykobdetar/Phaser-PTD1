# Original move runtime

All 433 registered moves execute recovered PTD ActionScript behavior through the native JavaScript runtime. There are no damage-only fallbacks and no unavailable known moves. The former 64 / 157 / 212 descriptor counts describe an earlier implementation and have been superseded.

| Recovered source classes | Count |
| --- | ---: |
| Attack classes, including shared bases | 435 |
| Effect classes, including shared bases | 316 |
| Weather and path effect classes | 22 |
| Ability classes and factory | 11 |
| AI classes and base | 3 |
| Selected actor classes | 2 |
| Total source classes | 789 |
| Methods and constructors | 4,500 |
| Graphics roots referenced by this closure | 319 |

`move-source-generated.js` contains static JavaScript compiled from those classes, with source filenames, inheritance and SHA-256 hashes. The build compiler preserves source integer coercion, private member identities, constructor initialization order and class checks. The shipped runtime does not use eval, execute a SWF, or require Flash.

The source implementation owns damage calculation, target eligibility and all nine target priorities, accuracy, critical hits, move phases, projectile movement and collision, secondary effects, statuses, stat changes, fixed damage, healing, copying, transformation, weather, path hazards, abilities and the two explicit boss AI controllers. Original profile defaults are extracted directly, including `var_107=false`: ordinary campaign travelers cannot attack unless their wave enables attacks.

Animation state uses all original timeline labels, frame actions and nested placements. The 319 move graphics roots are exported as native Canvas modules. Rendering reads native state without advancing it. Combat and animation advance at the original 21 frames per second.

## Engine integration

`createMoveRuntime(battle, {timelines, onFaint, onPartyRemoval, onMessage})` adapts the source actors to the Phaser battle. The runtime exposes `actor`, `attack`, `receiveExperience`, `experienceContributors`, `tickBeforeMovement`, `tickAfterMovement`, `collide`, `tickWorld`, `ready`, `resetAttack`, `refreshGraphic`, `candyCollision`, `detach`, `dispose`, and the live display `world`.

Tower order is effects/cooldown/AI/ability, attack, then path collision. Traveler order is effects, host movement/candy/waypoint handling, cooldown/self-move/ability/AI, attack, then path collision. `tickWorld` runs path effects and advances the display once after the actors. Host movement applies the native actor's attack movement modifier. Direction changes update native graphics without resetting animation every tick.

Recall uses `detach(fighter, {abandon:true})`, matching the source's abandoned actor and effects. Redeployment creates a new actor preserving remaining HP. Evolution uses `refreshGraphic`, preserving the active move, ability and effects. Disposal suppresses damage, rewards and party mutations before removing active effects and display state.

## Verification and limits

`tests/move-native.test.js` executes 866 branch scenarios: every move in two actor/status/RNG configurations for 800 ticks. Every registered attack body executes, and the matrix reaches more than 3,000 distinct source methods. Assertions also cover source integer damage, immunity and critical rolls; delayed projectile hits; opposing stat effect cancellation; sleep duration; Substitute and Endure; Rest; copying; Transform restoration; weather replacement; automatic abilities; party removal; teleport; boss phases; timeline geometry; ordinary enemy defaults; recall; and immediate disposal for all 433 moves.

These checks establish executable source coverage and representative behavior, not exhaustive verification of every combination of move, actor, stage, RNG and frame. PTD-specific behavior is retained even where it differs from the main-series games. Examples include Growl's quarter-attack modifier, source Seismic Toss power, Mirror Move's use of the target's first move, and candy-dependent healing. Pathological source recursion, such as Mirror Move copying itself, is not replaced with invented damage.

The JSON support and fidelity indexes describe the current native runtime. `move-behavior-audit.json` is explicitly marked as historical structural source analysis and is retained for provenance.

To rebuild from a decompiled source directory:

```sh
node src/move-compile-source.js /path/to/original/scripts/code
node tests/move-native.test.js
```
