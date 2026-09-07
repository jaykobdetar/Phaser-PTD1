import { createWave } from "./waves-runtime.js";

function trackStagePlacement(battle, tower) {
  if (!tower || tower.npc) return;
  const key = stageId(battle), hooks = battle.stageHooks;
  const limit = { level_5: 10, level_10: 30, level_15: 50, level_20: 60, level_25: 64, level_28: 80, level_33: 90 }[key];
  if (limit && tower.level > limit) hooks.achievementEligible = false;
  const types = tower.typeIds ?? battle.data.species[tower.speciesId].typeIds;
  if (key === 'level_10') {
    if (types.includes(1) || types.includes(11)) hooks.usedGrassOrElectric = true;
    if (tower.speciesId === 61) battle.stageFacts.poliwhirlUid = tower.uid;
  }
  if (key === 'level_14' && tower.speciesId === 21) battle.stageFacts.spearowUid = tower.uid;
  if (key === 'level_28' && (types.includes(2) || types.includes(9))) hooks.achievementEligible = false;
  if (key === 'class_910' && tower.moves.includes(36)) hooks.usedWhirlwind = true;
}

export function stageWinAchievements(battle) {
  const key = stageId(battle), hooks = battle.stageHooks;
  const allCandy = battle.candies.every(candy => candy.state !== 'lost');
  const id = { level_5: 7, level_10: 8, level_15: 9, level_20: 10, level_25: 11, level_33: 13 }[key];
  if (id && hooks.achievementEligible && allCandy) battle.awardAchievement(id);
  else if (key === 'level_10' && !hooks.usedGrassOrElectric) battle.awardAchievement(3);
  if (key === 'level_28' && hooks.achievementEligible) battle.awardAchievement(12);
  if (key === 'level_35' && battle.wave?.state.my_Parent.var_153 !== false) battle.awardAchievement(14);
  if (key === 'class_910') {
    const severalCandy = battle.candies.filter(candy => candy.state !== 'lost').length > 1;
    if (severalCandy) battle.awardAchievement(5, -1, hooks.usedWhirlwind ? 0 : 4);
    else if (!hooks.usedWhirlwind) battle.awardAchievement(4);
  }
  if (key === 'level_32' || key === 'level_33') {
    battle.stageFacts.var_556 = allCandy && !battle.save.originalExtraInfo?.includes(key === 'level_32' ? 29 : 34);
  }
}

/** Fixed NPCs from method_10 are allied npcTowerList members on defense stages.
 * They attack enemyList, but get_Friendly_List() excludes them from enemy targets.
 * Install once on a Battle instance before allowing placements. Invasion has its
 * own opposing NPC defenders and deliberately does not install these hooks.
 */
export function initializeStageHooks(battle, { createNpcs = true } = {}) {
  if (battle.stageHooks) return battle.stageHooks;
  const hooks = (battle.stageHooks = {
    dismissedParty: new Set(),
    pendingHeals: [],
    cutOpened: false,
    abraUid: null,
    pewterDismissed: false,
    initialized: true,
    achievementEligible: true,
    usedGrassOrElectric: false,
    usedWhirlwind: false,
  });
  if (battle.level.mode === "invasion") return hooks;
  const original = Object.fromEntries(
    [
      "emit",
      "attack",
      "selectTargets",
      "place",
      "recall",
      "tick",
      "finish",
    ].map((key) => [key, battle[key].bind(battle)]),
  );
  hooks.original = original;

  battle.emit = (type, details = {}) => {
    if (type === "script") handleStageEvent(battle, details);
    if (type === 'place' && details.tower && !details.tower.npc) {
      const tower = details.tower, uid = tower.uid, spotIndex = tower.spotIndex;
      trackStagePlacement(battle, tower);
      if (stageId(battle) === 'level_3') {
        if (tower.speciesId === 63) hooks.abraUid = uid;
        if (spotIndex === 3 && tower.moves.includes(224) && !hooks.cutOpened) {
          hooks.cutOpened = true;
          if (battle.wave?.state?.my_Parent) battle.wave.state.my_Parent.var_665 = true;
          battle.emit('stage-event', { type: 'cut-bush', symbol: 'cut_bush', spot: 3 });
        }
      }
    }
    original.emit(type, details);
  };
  battle.selectTargets = (source, targets) =>
    original.selectTargets(
      source,
      source.team === "enemy"
        ? targets.filter((target) => !target.npc)
        : targets,
    );
  battle.attack = (source, targets) => {
    if (!battle.moveRuntime && handleNpcAttack(battle, source)) return;
    return original.attack(source, targets);
  };
  battle.place = (uid, spotIndex) => {
    if (hooks.dismissedParty.has(uid)) {
      battle.emit("placement-rejected", {
        message:
          "Brock dismissed this deployed Pokémon for the final round. Choose another party member.",
      });
      return false;
    }
    return original.place(uid, spotIndex);
  };
  battle.recall = (uid) => {
    if (battle.towers.some((tower) => tower.uid === uid && tower.npc))
      return false;
    return original.recall(uid);
  };
  battle.tick = () => {
    if (battle.state !== "running") return original.tick();
    tickStageHooks(battle);
    original.tick();
    if (battle.state === "running" && partyFainted(battle))
      battle.finish(false);
  };
  battle.finish = won => {
    const actualWon = won && !partyFainted(battle);
    if (battle.state === 'running' && actualWon) stageWinAchievements(battle);
    return original.finish(actualWon);
  };

  if (createNpcs) {
    const wave =
      battle.wave ??
      createWave(battle.level.className ?? battle.level.id, {
        seed: battle.options?.seed,
      });
    for (const spec of wave.presetTowers()) {
      const existing = battle.towers.find(
        (t) => t.spotIndex === spec.spot && (t.npc || t.fixed),
      );
      if (existing) {
        decorateNpc(battle, existing);
        continue;
      }
      const spot = battle.level.spots.find(
        (point) => point.index === spec.spot,
      );
      if (!spot) throw new Error(`Missing original NPC slot ${spec.spot}.`);
      const p = spec.profile;
      const moves = [p.move1, p.move2, p.move3, p.move4].filter(
        (id) => battle.data.moves[id],
      );
      const profile = {
        uid: `npc-${stageId(battle)}-${spec.spot}`,
        speciesId: p.num,
        level: p.level,
        experience: p.experience ?? 0,
        shiny: p.shiny ?? 0,
        moves,
        selectedMove: moves[(p.moveSelected || 1) - 1] ?? moves[0] ?? 1,
        target: "first",
      };
      const actor = battle.fighter(profile, {
        uid: profile.uid,
        team: "tower",
        original: p,
        npc: true,
        fixed: true,
        placed: true,
        spotIndex: spec.spot,
        x: spot.x,
        y: spot.y,
        direction: "front",
        stats: {
          hp: p.base_HP,
          attack: p.base_Attack,
          defense: p.base_Defense,
          specialAttack: p.base_Special_Attack,
          specialDefense: p.base_Special_Defense,
          speed: p.speed,
        },
      });
      actor.maxHp = Math.max(
        1,
        Math.floor(
          (Math.floor((2 * p.base_HP * p.level) / 100) + 10 + p.level) *
            (p.var_655 || 1),
        ),
      );
      actor.hp = actor.maxHp;
      decorateNpc(battle, actor);
      battle.towers.push(actor);
      battle.emit("place", { tower: actor });
    }
  }
  for (const tower of battle.towers)
    if (tower.npc || tower.fixed) decorateNpc(battle, tower);
  return hooks;
}

function decorateNpc(battle, actor) {
  actor.npc = true;
  actor.fixed = true;
  actor.allied = true;
  actor.targetableByEnemies = false;
  actor.placed = true;
  if (!actor.npcInitialized) {
    actor.cooldown =
      battle.data.moves[actor.selectedMove]?.initialCooldownFrames ?? 18;
    actor.npcInitialized = true;
  }
}

/** Returns true when an original scripted healing move consumed the attack call. */
export function handleNpcAttack(battle, source) {
  if (source.selectedMove !== 274 && source.selectedMove !== 404) return false;
  if (
    !source.alive ||
    source.cooldown > 0 ||
    source.effects.sleep ||
    source.effects.freeze ||
    source.effects.flinch
  )
    return true;
  if (source.team !== "tower") return false;
  const move = battle.data.moves[source.selectedMove];
  const players = battle.towers.filter(
    (tower) => !tower.npc && tower.alive && tower.placed,
  );
  source.cooldown =
    move?.cooldownFrames ?? (source.selectedMove === 274 ? 360 : 90);
  if (source.selectedMove === 274) {
    // class_172.method_208 returns player towerList only, not npcTowerList.
    for (const target of players)
      battle.applyEffect(
        {
          kind: "heal",
          target: "target",
          amount: Math.floor(target.maxHp / 2),
        },
        source,
        target,
        move,
      );
    battle.emit("stage-event", {
      type: "celebi-heal",
      source,
      targets: players,
    });
    return true;
  }
  // Gary selects the lowest HP percentage in the exact original slot set.
  const target = players
    .filter((tower) => [2, 4, 5].includes(tower.spotIndex))
    .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
  if (!target) return true;
  battle.stageHooks.pendingHeals.push({
    source,
    target,
    move,
    amount: target.maxHp,
    dx: source.x - target.x,
    dy: source.y - target.y,
  });
  battle.emit("stage-event", {
    type: "gary-potion-travel",
    source,
    target,
    speed: 15,
  });
  return true;
}

export function tickStageHooks(battle) {
  const hooks = battle.stageHooks;
  if (!hooks || battle.level.mode === "invasion") return;
  for (const heal of [...hooks.pendingHeals]) {
    if (!heal.target.alive || !heal.source.alive) {
      hooks.pendingHeals.splice(hooks.pendingHeals.indexOf(heal), 1);
      continue;
    }
    if (heal.dx === 0 && heal.dy === 0) {
      battle.applyEffect(
        { kind: "heal", target: "target", amount: heal.amount },
        heal.source,
        heal.target,
        heal.move,
      );
      hooks.pendingHeals.splice(hooks.pendingHeals.indexOf(heal), 1);
      battle.emit("stage-event", {
        type: "gary-potion-arrived",
        source: heal.source,
        target: heal.target,
      });
    } else {
      heal.dx = Math.abs(heal.dx) < 15 ? 0 : heal.dx - Math.sign(heal.dx) * 15;
      heal.dy = Math.abs(heal.dy) < 15 ? 0 : heal.dy - Math.sign(heal.dy) * 15;
    }
  }
  if (battle.wave?.finished) {
    if (["level_28", "class_953"].includes(stageId(battle))) {
      for (const enemy of battle.enemies)
        if (enemy.speciesId === 89) {
          enemy.runAway = true;
          enemy.original.runAway = true;
        }
    }
    if (stageId(battle) === "level_30") {
      for (const enemy of battle.enemies)
        if (enemy.speciesId === 145) enemy.original.var_490 = false;
    }
  }
}

/** Source wave events are surfaced by the runtime before their spawning action. */
export function handleStageEvent(battle, event) {
  const hooks = battle.stageHooks;
  if (!hooks || stageId(battle) !== "level_5") return;
  if (
    event.type === "return-party" ||
    (event.type === "reset-party-ui" && battle.wave?.currentWave === 10)
  )
    dismissPewterParty(battle);
}

export function dismissPewterParty(battle) {
  const hooks = battle.stageHooks;
  if (!hooks || hooks.pewterDismissed) return;
  hooks.pewterDismissed = true;
  const deployed = battle.towers.filter((tower) => !tower.npc && tower.placed);
  for (const tower of deployed) {
    hooks.dismissedParty.add(tower.uid);
    hooks.original.recall(tower.uid);
    battle.removePartyMember(tower);
  }
  // wave43 removes current party slots, while keeping owned Pokémon in storage.
  battle.emit("stage-event", {
    type: "pewter-party-dismissed",
    uids: deployed.map((t) => t.uid),
  });
}

function partyFainted(battle) {
  if (!battle.level.requiresPartySurvival) return false;
  const party = battle.partyMembers;
  return (
    party.every((p) =>
      battle.towers.some((t) => t.uid === p.uid && !t.npc && !t.alive),
    )
  );
}
function stageId(battle) {
  return battle.level.className ?? `level_${battle.level.id}`;
}
