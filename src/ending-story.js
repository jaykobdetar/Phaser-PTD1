import { createWave } from "./waves-runtime.js";

/** Exact non-combat stage36 progression from level_36, class_1040 and class_1041.
 * The view renders the supplied recovered panels and calls next(), skip(), or
 * chooseTrade(true/false). No dialogue is synthesized and no combat is simulated.
 * The original intro closes BEFORE i_Win unlocks progression; the ending popup
 * then offers its optional trade and grants the eighth badge on close.
 */
export class EndingStory {
  constructor(battle, manifest) {
    if (battle.level.id !== 36 || battle.level.mode !== "story")
      throw new Error("EndingStory is only for original stage36.");
    this.battle = battle;
    this.save = battle.save;
    this.manifest = manifest;
    this.phase = "intro";
    this.index = 0;
    this.finished = false;
    this.tradeUid = null;
    this.wave = createWave(36);
    this.battle.wave = this.wave;
  }
  get panels() {
    return this.manifest[this.phase];
  }
  get panel() {
    return this.panels[this.index];
  }
  get canSkip() {
    return (
      this.phase === "ending" ||
      this.save.unlocked > 36 ||
      this.save.completed.includes(36) ||
      (this.save.lastLevelVisited ?? 0) >= 36
    );
  }
  get awaitingTrade() {
    return this.phase === "ending" && this.panel.frame === 4;
  }
  get snapshot() {
    return {
      phase: this.phase,
      panel: this.panel,
      index: this.index,
      count: this.panels.length,
      canSkip: this.canSkip,
      awaitingTrade: this.awaitingTrade,
      finished: this.finished,
    };
  }
  show() {
    if (this.finished) return false;
    this.battle.emit("story", this.snapshot);
    return true;
  }
  start() {
    if (this.finished) return false;
    this.battle.state = "story";
    return this.show();
  }
  next() {
    if (this.finished || this.awaitingTrade) return false;
    if (this.phase === "intro") {
      if (this.index < this.panels.length - 1) {
        this.index++;
        return this.show();
      }
      return this.completeIntro();
    }
    if (this.panel.frame === 3) {
      // class_1041.method_216 scans the saved party in order, not storage.
      const profile = this.save.party
        .map((uid) => this.save.pokemon.find((p) => p.uid === uid))
        .find((p) => p?.speciesId === 80);
      this.tradeUid = profile?.uid ?? null;
      this.index = this.panels.findIndex((p) => p.frame === (profile ? 4 : 6));
      return this.show();
    }
    if (this.index < this.panels.length - 1) {
      this.index++;
      return this.show();
    }
    return this.closeEnding();
  }
  skip() {
    if (this.finished || !this.canSkip) return false;
    return this.phase === "intro" ? this.completeIntro() : this.closeEnding();
  }
  completeIntro() {
    if (this.phase !== "intro" || this.finished) return false;
    // level_36.start_Level(): set_Level_Attempted(); i_Win().
    this.save.lastLevelVisited = Math.max(this.save.lastLevelVisited ?? 0, 36);
    this.wave.advanceStory();
    if (!this.save.completed.includes(36)) this.save.completed.push(36);
    this.save.unlocked = Math.max(this.save.unlocked, 37);
    this.phase = "ending";
    this.index = 0;
    this.battle.emit("story-progress", {
      level: 36,
      unlocked: this.save.unlocked,
    });
    return this.show();
  }
  chooseTrade(accepted) {
    if (this.finished || !this.awaitingTrade || typeof accepted !== "boolean")
      return false;
    const profile = this.save.pokemon.find((p) => p.uid === this.tradeUid);
    if (accepted) {
      if (
        !profile ||
        profile.speciesId !== 80 ||
        !this.save.party.includes(profile.uid)
      )
        return false;
      // Preserve uid, party position, appearance and target, as the source
      // mutates the existing profile rather than creating/removing a Pokémon.
      Object.assign(profile, {
        speciesId: 108,
        level: 1,
        experience: 0,
        moves: [119],
        selectedMove: 119,
      });
      this.battle.emit("story-trade", { profile, previousSpeciesId: 80 });
    }
    // Both source Yes and No call gfx.play(), proceeding to frame5.
    this.index = this.panels.findIndex((p) => p.frame === 5);
    return this.show();
  }
  closeEnding() {
    if (this.phase !== "ending" || this.finished) return false;
    this.save.badges = Math.max(this.save.badges ?? 0, 8);
    this.finished = true;
    this.battle.state = "won";
    this.battle.emit("story-complete", {
      level: 36,
      unlocked: this.save.unlocked,
      badges: this.save.badges,
    });
    return true;
  }
}
