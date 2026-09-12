import { getStage } from "./waves-runtime.js";
import { makePokemon } from "./model.js";
import { recordOwned } from "./profile-features.js";

// class_984, class_985 and the ten room popup timelines in the recovered SWF.
// Room flags belong to one visit. Only original extra-info flags 32/33 persist.
export const ROCK_TUNNEL_ROOMS = Object.freeze({
  1: {
    stage: "class_954",
    flag: 0,
    wildWaves: 10,
    exits: { left: "wild", right: 2 },
    wild: {
      41: "class_23",
      74: "class_71",
      95: "class_70",
      100: "class_72",
      66: "class_69",
    },
  },
  2: {
    stage: "class_956",
    flag: 1,
    battle: "trainer",
    exits: { left: 1, up: 3 },
  },
  3: { stage: "class_959", exits: { down: 2, right: 5, up: 4 } },
  4: {
    stage: "class_1118",
    flag: 2,
    battle: "invasion",
    exits: { down: 3, up: 6 },
  },
  5: {
    stage: "class_961",
    flag: 6,
    wildWaves: 20,
    exits: { left: 3, up: 7 },
    wild: {
      41: "class_82",
      74: "class_83",
      95: "class_80",
      100: "class_81",
      66: "class_79",
    },
  },
  6: { stage: "class_964", exits: { down: 4, right: 7, left: "exit", up: 10 } },
  7: {
    stage: "class_963",
    flag: 5,
    wildWaves: 30,
    exits: { left: 6, up: 8, down: 5 },
    wild: {
      41: "class_86",
      74: "class_89",
      95: "class_85",
      100: "class_88",
      66: "class_87",
    },
  },
  8: {
    stage: "class_1121",
    flag: 4,
    battle: "invasion",
    exits: { down: 7, left: 9 },
  },
  9: {
    stage: "class_968",
    flag: 7,
    battle: "secret",
    exits: { left: 10, right: 8 },
  },
  10: {
    stage: "class_966",
    flag: 3,
    battle: "trainer",
    exits: { down: 6, right: 9 },
  },
});

export function tunnelWildSpecies(random = Math.random) {
  const value = random();
  if (!(value >= 0 && value < 1))
    throw new Error("Encounter RNG must return a value in [0, 1).");
  const roll = Math.floor(value * 100);
  return roll <= 50
    ? 41
    : roll <= 76
      ? 74
      : roll <= 84
        ? 95
        : roll <= 92
          ? 100
          : 66;
}

function seededRandom(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function tunnelParty(save) {
  return save.party
    .map((uid) => save.pokemon.find((pokemon) => pokemon.uid === uid))
    .filter(Boolean);
}
export function partyHasFlash(save) {
  return tunnelParty(save).some((pokemon) => pokemon.moves.includes(225));
}

// main.var_616 increments when a Pikachu is caught, and resets when the game
// application restarts. It is not collection size and is not part of a save.
export const rockTunnelSession = { pikachuCaptures: 0 };
export function recordTunnelSessionCapture(
  profile,
  session = rockTunnelSession,
) {
  if (profile?.speciesId === 25) session.pikachuCaptures++;
}
const extraInfo = (save) =>
  new Set((save.originalExtraInfo ?? []).filter(Number.isInteger));
function addExtraInfo(save, id) {
  const flags = extraInfo(save);
  flags.add(id);
  save.originalExtraInfo = [...flags];
}

/** Native replacement for the original navigation cutscenes. No room battle
 * grants campaign completion. Use bindBattle() before initializeStageHooks().
 * view().actions is suitable for a native popup. choose('battle') exposes
 * view().battle = { token, level, options }, ready for Battle/ReverseBattle.
 */
export class RockTunnel {
  constructor(data, save, options = {}) {
    this.data = data;
    this.save = save;
    this.options = options;
    this.random =
      options.rng ??
      seededRandom(options.seed ?? Math.floor(Math.random() * 4294967296));
    this.session = options.session ?? rockTunnelSession;
    this.flags = Array(8).fill(false);
    this.room = null;
    this.status = "idle";
    this.pending = null;
    this.active = null;
    this.serial = 0;
    this.questResult = null;
  }

  enter() {
    this.flags = Array(8).fill(false);
    this.pending = null;
    this.active = null;
    this.questResult = null;
    this.room = null;
    if (!partyHasFlash(this.save)) {
      this.status = "requires-flash";
      return this.view();
    }
    return this.enterRoom(1);
  }

  enterRoom(number) {
    const room = ROCK_TUNNEL_ROOMS[number];
    if (!room) throw new Error("Unknown Rock Tunnel room.");
    this.room = number;
    this.status = "route";
    this.pending = null;
    if (
      number === 1 &&
      extraInfo(this.save).has(32) &&
      !extraInfo(this.save).has(33)
    )
      this.status = "quest";
    else if (number === 5 || number === 7) this.prepareEncounter("wild");
    else if (
      room.battle &&
      !this.flags[room.flag] &&
      (number !== 9 || this.flags.slice(0, 7).every(Boolean))
    )
      this.prepareEncounter(room.battle);
    return this.view();
  }

  prepareEncounter(kind) {
    const room = ROCK_TUNNEL_ROOMS[this.room];
    const speciesId = kind === "wild" ? tunnelWildSpecies(this.random) : null;
    const source = getStage(room.stage);
    if (!source)
      throw new Error(`Missing original tunnel stage ${room.stage}.`);
    this.pending = {
      kind,
      speciesId,
      room: this.room,
      level: {
        ...source,
        mode: kind === "invasion" ? "invasion" : "defense",
        displayName: `Rock Tunnel — Room ${this.room}`,
        waveClass: speciesId ? room.wild[speciesId] : source.waveClass,
        totalWaves: speciesId ? room.wildWaves : source.totalWaves,
        tunnelRoom: this.room,
        deferCampaignCompletion: true,
      },
    };
    this.status = "encounter";
  }

  choose(action) {
    if (!this.view().actions.some((choice) => choice.id === action))
      return { ...this.view(), error: "That choice is unavailable here." };
    if (action === "leave") {
      this.status = "left";
      this.pending = null;
      this.active = null;
      return this.view();
    }
    if (action === "check-quest") {
      this.questResult = this.checkShinyQuest();
      this.status = "quest-result";
      return this.view();
    }
    if (action === "continue") {
      this.status = "route";
      return this.view();
    }
    if (action === "exit") return this.complete();
    if (action === "battle") {
      this.active = {
        ...this.pending,
        token: ++this.serial,
        options: {
          campaignId: 17,
          deferCampaignCompletion: true,
          seed: Math.floor(this.random() * 4294967296),
        },
      };
      this.status = "battle";
      return this.view();
    }
    const destination = ROCK_TUNNEL_ROOMS[this.room].exits[action];
    if (destination === "wild") {
      this.prepareEncounter("wild");
      return this.view();
    }
    if (destination === "exit") {
      this.room = "exit";
      this.status = "exit";
      return this.view();
    }
    return this.enterRoom(destination);
  }

  resolveBattle(token, won) {
    if (this.status !== "battle" || !this.active || this.active.token !== token)
      throw new Error("This tunnel battle result is stale.");
    const room = this.active.room;
    this.active = null;
    this.pending = null;
    if (!won) {
      this.status = "failed";
      return this.view();
    }
    this.flags[ROCK_TUNNEL_ROOMS[room].flag] = true;
    if (room === 9) addExtraInfo(this.save, 32);
    // Rooms 5/7 show their victory route popup, without rolling another fight.
    // Room 1 reconstructs its introductory popup and may show the shiny quest.
    if (room === 1) return this.enterRoom(1);
    this.status = "route";
    return this.view();
  }

  bindBattle(battle, token = this.active?.token) {
    if (
      !this.active ||
      token !== this.active.token ||
      battle.level.className !== this.active.level.className
    )
      throw new Error("Battle does not match the selected tunnel encounter.");
    if (battle.rockTunnel)
      throw new Error("This battle is already attached to a tunnel trip.");
    battle.rockTunnel = { controller: this, token };
    battle.options.deferCampaignCompletion = true;
    // Replacing finish prevents transient writes to completed/unlocked before
    // event handlers persist the save. Calling normal finish then reverting is unsafe.
    battle.finish = (won) => {
      if (battle.state !== "running") return;
      battle.state = won ? "won" : "lost";
      const result = this.resolveBattle(token, won);
      battle.emit("finish", {
        won,
        stats: battle.stats,
        warnings: [...battle.warnings],
        nextStage: null,
        tunnel: true,
        tunnelResult: result,
      });
    };
    return battle;
  }

  complete() {
    if (this.status !== "exit")
      throw new Error(
        "Leave through Rock Tunnel’s exit to complete the stage.",
      );
    if (!this.save.completed.includes(17)) this.save.completed.push(17);
    this.save.unlocked = Math.max(this.save.unlocked, 18);
    this.status = "completed";
    return this.view();
  }

  checkShinyQuest() {
    const info = extraInfo(this.save);
    if (!info.has(32) || info.has(33))
      return { received: false, reason: "unavailable" };
    // Source is_Legal() means tampering detected. The native save validator is
    // the equivalent boundary; callers may supply a stricter integrity callback.
    if (this.options.validProfile && !this.options.validProfile(this.save))
      return { received: false, reason: "invalid-profile" };
    const party = tunnelParty(this.save);
    const eligible = (id) =>
      party.some((p) => p.speciesId === id && p.level >= 42 && p.myTag !== "h");
    if (this.session.pikachuCaptures < 10 || !eligible(25) || !eligible(101))
      return { received: false, reason: "requirements" };
    const profile = makePokemon(this.data, 100, 5, {
      shiny: 1,
      moves: [1],
      selectedMove: 1,
      experience: 0,
    });
    this.save.pokemon.push(profile);
    recordOwned(this.save, profile);
    addExtraInfo(this.save, 33);
    return { received: true, profile };
  }

  view() {
    const room = ROCK_TUNNEL_ROOMS[this.room];
    const result = {
      status: this.status,
      room: this.room,
      title:
        this.room && this.room !== "exit"
          ? `Rock Tunnel — Room ${this.room}`
          : "Rock Tunnel",
      text: "",
      actions: [],
      flags: this.flags.slice(),
      stage: room
        ? getStage(room.stage)
        : getStage(this.room === "exit" ? "class_967" : 17),
    };
    const actions = (ids) => ids.map((id) => ({ id, label: `Go ${id}` }));
    if (this.status === "requires-flash") {
      result.text =
        "A Pokémon in your current party must know Flash to light the tunnel. Learn Cut after Diglett’s Cave, then replay Route 2 and cut the bush at the central spot to obtain Flash. Do not deploy Abra on that visit.";
      result.actions = [{ id: "leave", label: "Return to campaign" }];
    } else if (this.status === "route") {
      result.text =
        this.room === 9 && !this.flags.slice(0, 7).every(Boolean)
          ? "The cave continues in both directions."
          : "Choose a passage.";
      result.actions = actions(Object.keys(room.exits));
    } else if (this.status === "encounter") {
      result.text =
        this.pending.kind === "wild"
          ? `Wild ${this.data.species[this.pending.speciesId].name} appeared! Defend the candy.`
          : this.pending.kind === "invasion"
            ? "A trainer guards the way. Send your Pokémon along the path to steal the candy."
            : this.pending.kind === "secret"
              ? "You found the hidden trainer. Defend the candy against four Onix."
              : "A trainer blocks the passage. Defend the candy to continue.";
      result.actions = [
        {
          id: "battle",
          label:
            this.pending.kind === "invasion"
              ? "Prepare invasion"
              : "Prepare battle",
        },
      ];
      result.encounter = {
        kind: this.pending.kind,
        speciesId: this.pending.speciesId,
      };
    } else if (this.status === "battle") {
      result.battle = {
        token: this.active.token,
        level: this.active.level,
        options: this.active.options,
      };
    } else if (this.status === "quest") {
      result.text =
        "The shiny hunt requires ten Pikachu caught during this game session, plus a Pikachu and an Electrode at level 42 or higher in your current party.";
      result.actions = [{ id: "check-quest", label: "Check shiny hunt" }];
    } else if (this.status === "quest-result") {
      result.text = this.questResult.received
        ? "You received a shiny Voltorb! It has been added to your collection."
        : "You have not met the shiny hunt requirements yet.";
      result.reward = this.questResult;
      result.actions = [{ id: "continue", label: "Continue into the cave" }];
    } else if (this.status === "exit") {
      result.text = "You found the way out of Rock Tunnel.";
      result.actions = [{ id: "exit", label: "Leave Rock Tunnel" }];
    } else if (this.status === "completed") {
      result.text = "Rock Tunnel complete. Lavender Town is now unlocked.";
      result.nextStage = 18;
    } else if (this.status === "failed") {
      result.text =
        "This trip through Rock Tunnel has ended. Enter again to start a new trip.";
      result.actions = [{ id: "leave", label: "Return to campaign" }];
    }
    return result;
  }
}

/** The original TM shop charges 10,000 per teaching, including these HMs.
 * A replacement index is required only when all four move slots are occupied.
 * This helper teaches field use; it does not claim combat effects are supported.
 */
export function fieldMoveEligibility(data, save, pokemon, moveId) {
  if (![224, 225].includes(moveId))
    return { ok: false, reason: "not-field-move" };
  if (!pokemon || !save.pokemon.includes(pokemon))
    return { ok: false, reason: "unknown-pokemon" };
  if (!data.species[pokemon.speciesId].tmMoveIds.includes(moveId))
    return { ok: false, reason: "incompatible" };
  if (pokemon.moves.includes(moveId))
    return { ok: false, reason: "already-known" };
  if (moveId === 224 && save.unlocked < 17)
    return { ok: false, reason: "complete-digletts-cave" };
  if (moveId === 225 && !save.haveFlash)
    return { ok: false, reason: "obtain-flash-on-route-2" };
  if (save.money < 10000)
    return { ok: false, reason: "insufficient-money", cost: 10000 };
  return { ok: true, cost: 10000, needsReplacement: pokemon.moves.length >= 4 };
}
export function teachFieldMove(
  data,
  save,
  pokemon,
  moveId,
  replaceIndex = null,
) {
  const result = fieldMoveEligibility(data, save, pokemon, moveId);
  if (!result.ok) return result;
  if (
    result.needsReplacement &&
    (!Number.isInteger(replaceIndex) ||
      replaceIndex < 0 ||
      replaceIndex >= pokemon.moves.length)
  )
    return { ok: false, reason: "choose-replacement" };
  if (result.needsReplacement) {
    const oldMove = pokemon.moves[replaceIndex];
    pokemon.moves[replaceIndex] = moveId;
    if (pokemon.selectedMove === oldMove)
      pokemon.selectedMove =
        pokemon.moves.find((id) => id !== 224 && id !== 225) ?? moveId;
  } else pokemon.moves.push(moveId);
  save.money -= result.cost;
  return { ok: true, cost: result.cost };
}
export function awardRoute2Flash(battle, won) {
  if (
    !won ||
    battle.level.className !== "level_3" ||
    !battle.stageHooks?.cutOpened ||
    battle.stageHooks.abraUid ||
    battle.save.haveFlash
  )
    return false;
  battle.save.haveFlash = true;
  return true;
}
