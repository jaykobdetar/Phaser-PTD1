# Fixed NPC allegiance audit

All fixed `method_10` actors on ordinary defense levels belong to `npcTowerList`, not hostile `enemyList`. `screen_Level.run` lines1230–1243 makes them attack enemyList. Enemy attacks use `get_Friendly_List` (lines1281–1310), which includes the player's towers and online friend towers but excludes NPC towers. They cannot normally be targeted by moving enemy attacks. Source path effects can still affect NPCs, so this is target exclusion rather than unconditional damage immunity.

| Level | Fixed actors | Original selected action | Relationship |
|---|---|---|---|
|3 Route2|Rattata4 at spot2; Pidgey5 at spot5|Both select Tackle1. Rattata also knows Tail Whip3/Quick Attack4; Pidgey knows Sand Attack2, but no switching AI.|Friendly attackers against enemyList.|
|14 Vermillion City|Poliwhirl30 at spot2; Charmeleon30 at spot1|Hypnosis110; Scary Face30.|Friendly crowd control against enemyList.|
|20 Celadon Gym|Pidgeotto40 at spot17; Charmeleon40 at spot18; Celebi40 at spot19|Gust15; Fire Fang92; Celebi Heal274.|Friendly offense; Celebi heals every player tower for half maxHP each360frames. NPCs and online friend list are not included in that special move's towerList target set.|
|23 Poke Tower2|Pikachu62 at spot4|Thunder Wave23.|Friendly paralysis against enemyList.|
|27 Route15|Rattata65 at spot7; Vileplume65 at spot9; Meowth65 at spot11|Bite19; Mega Drain108; Fury Swipes46.|Friendly offense against enemyList.|
|30 Route17|Gary100 at spot1|Gary's Potion404.|Friendly support. Each90frames, select lowest HP ratio among player/friend towers in spots2/4/5. Clone travels each axis at15px/frame; heal full captured maxHP upon arrival. Gary is excluded from hostile targets.|

No fixed NPC in these six stages has custom switching AI. Their first listed move remains selected unless external source UI changes it. No special loss condition based on these NPCs being defeated exists. Stage30's special completion hook is **an enemy** being defeated, not Gary being defeated; its party-wipe loss considers player party, not surviving Gary.

`stage-hooks.js` installs native allegiance and healing behavior against `Battle`. It includes stage3 Cut-at-spot3 detection and a Pewter final-round event adapter. At Pewter's final two Onix, the original script returns all deployed party members and removes them from its active party. The adapter removes their active saved party slots while preserving the stored collection; it emits `pewter-party-dismissed` with affected UIDs so the UI can offer reserves. The player can assign reserves or rebuild the party from the retained collection.

Exact NPC initial cooldown is the move's `get_Initial_CoolDown()`. `poke_Tower.reset_Attack` does not add randomness. Moving Pokémon use initial cooldown plus floor(random()*18) from `poke.reset_Attack`.

Verified by `node work/test_stage_hooks.mjs`: friendly NPC targeting exclusion, no NPC recall, Cut event, Celebi heals players only, Gary eligible slots and delayed full heal, Pewter active-party dismissal, preserved save collection, and player-party loss even if Gary remains alive.

The current production engine uses the translated native move classes for NPC attacks and healing. `tests/boss-native.test.js` includes source Gary spot eligibility and delayed healing regressions. See `COMBAT_PARITY.md` for the final source audit.
