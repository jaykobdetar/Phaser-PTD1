# Local PokéCenter

Open the game's PokéCenter menu, acknowledge the completed save, and choose **Open local PokéCenter**. The standalone page is `pokecenter.html` beside the game. Its **Play Pokémon Tower Defense** link returns to the game. Both pages use the same three profiles, Pokémon, progress, money, inventory and backups.

The website recreates the PTD 1 pages at [ptd.ooo](https://ptd.ooo/) using local assets and saves. The reference was inspected read-only. No real account, player listing, private Pokémon collection, credential or browser session is included. The public logo and icon sheets have source URLs and hashes in `public/assets/center/provenance.json`.

## Pages and actions

- **Home / Pick Up:** select or create profiles; collect individual rewards or all waiting Pokémon into a chosen profile; abandon unwanted rewards.
- **Your Pokémon:** search, filter and sort the collection; give nicknames; release Pokémon; create trades.
- **Trading:** latest and personal listings, trainer adoptions, search, offer review and notifications. A trade holds its Pokémon outside the game roster. Offers contain one to six existing listings. Wishlist groups combine required species, appearance and level ranges; matching offers can be accepted automatically. Accepting an exchange transfers both sides together and applies trade evolution. Recalling a listing cancels affected offers and returns its Pokémon to Pick Up.
- **Adoption:** all 260 inspected static entries, with their species, variants, levels, moves and prices; local trainer listings supply the dynamic adoption page.
- **Daily Gift / Mystery Gift:** the three currency prize tiers retain the published costs, eligibility and exact probability tables. Daily shiny and weekly shadow Pokémon gifts are separate from currency prizes. The game’s original Daily/Weekly Gift buttons share these claims and send their rewards to Center Pick Up. Both `ptdooo` and the supplied client's `ptdicu` code grant regular MissingNo; `ptd-local` is an additional local Pikachu code.
- **Game Corner:** nine selectable machines, 50 coins per spin, 50 spins per day, horizontal/diagonal prizes, and all 14 prize choices, including shiny and shadow eggs.
- **Conversions:** regular to shiny/shadow; single and whole-profile hacked-tag removal; original credit/coin prices and Shadow Rush behavior.
- **Giveaways:** create, browse, enter, leave, cancel within the allowed window, and distribute prizes when due. Prize Pokémon remain held until settlement or cancellation. Local profiles stand in for participating trainers. Giveaways accept up to 20 Pokémon, end in 1–30 days, and can be cancelled by the host during the first 24 hours. One winner can receive all prizes, or prizes can be shared among entrants.
- **Inventory / Pokédex:** shared game items and cumulative account-wide regular, shiny and shadow completion. The inventory preserves known stone/rod IDs and any unknown imported items. Ice Stone and Silph Scope have reference artwork but no verified ownership mapping in the supplied client; they are shown as unavailable rather than relabeling an unrelated imported item.
- **Settings:** profile nickname and avatar; light/dark themes; modern/legacy cards; move and action colors; date/time preferences; full-account export and reviewed import.

## Free local rules

There are no real-money purchases, donation prompts, ads, payment integrations, remote account logins or required external requests. Center Credits replace the reference's purchased currency. Each local profile can claim 10 free credits and 500 Casino Coins per UTC day, with an additional five credits for each newly claimed badge milestone. Casino Coins can also be exchanged one-for-one from that profile's Pokédollars.

The three profiles act as local trainers for exchanges and giveaways. Credit balances, daily limits and gift redemptions are tracked per local trainer. These are intentional local rules; the reference's account backend is unavailable. Daily resets use UTC and weekly mystery gifts reset on Monday UTC.

The reference publishes slot prizes but not reel weights or machine differences. Local machines independently choose each of the seven visible symbols with equal probability and sum matching horizontal/diagonal line prizes. Egg rewards choose uniformly among non-evolved species in the supplied first-generation roster. These probabilities are local implementations, not recovered server code.

For giveaways with one winner per Pokémon, entrants are shuffled once. Each receives at most one prize before the order repeats when prizes outnumber entrants. With no entrants, the host receives the prizes back. Single-winner giveaways send every prize to one randomly selected entrant.

## PTD 2 and PTD 3 transfers

Transfers remove the Pokémon from PTD 1 permanently and retain it in a local destination archive, including its attributes and selected gender. Each destination can be viewed and exported. Export a full account backup before transferring if you want a recovery copy.

PTD 2 and PTD 3 game clients are not included in this PTD 1 conversion. Destination files are local transfer archives; they are not claimed to match an official game's import format. The Center provides no reverse transfer action.

## Saves, sharing and future hosting

The Python launcher saves the entire account atomically. Static serving uses browser storage. If another window changes the account, the game pauses and offers a session backup and reload; an old battle cannot overwrite a completed Center trade. Deliberate game-to-Center navigation waits for persistence. See [shared-save details](POKECENTER_SAVE_SYNC.md).

Export Account includes all three profiles, held Pokémon, trades, gifts, giveaways, destination archives and settings. It contains your play data: keep your backup private. Share the clean release ZIP as described in [SHARING.md](SHARING.md).

The service separates domain transactions from page rendering so a hosted transport can be added later. This release remains local: it does not implement online multi-user authentication, a remote database, trusted server-side randomness or cross-device trading.

Original Pokémon Tower Defense by Sam Otero / Sam & Dan Games. Pokémon characters and artwork retain Nintendo, Game Freak and Creatures attribution. Public Center artwork is credited through its provenance file.
