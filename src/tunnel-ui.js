import {
  RockTunnel,
  fieldMoveEligibility,
  teachFieldMove,
} from "./rock-tunnel.js";
import { Battle } from "./battle.js";
import { ReverseBattle } from "./reverse-battle.js";
import { initializeStageHooks } from "./stage-hooks.js";

const $ = (selector) => document.querySelector(selector);
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export function installTunnelUI(app) {
  app.beginTunnel = () => {
    app.tunnel = new RockTunnel(app.data, app.save);
    app.tunnel.enter();
    app.showTunnel();
  };
  function showMap(level, encounter) {
    app.battle?.dispose?.();
    app.campaignId = 17;
    app.stageId = level.id;
    app.captureMode = false;
    const Engine = level.mode === "invasion" ? ReverseBattle : Battle;
    app.battle = new Engine(
      app.data,
      level,
      app.save,
      (type, event) => app.onBattle(type, event),
      encounter?.options ?? { campaignId: 17 },
    );
    if (encounter) app.tunnel.bindBattle(app.battle, encounter.token);
    initializeStageHooks(app.battle);
    $("#path-select").innerHTML = ['p','2','3','4'].filter(key=>Object.hasOwn(level.paths,key))
      .map((path, i) => `<option value="${path}">Path ${i + 1}</option>`)
      .join("");
    app.scene?.showLevel();
    app.renderAll();
  }
  app.showTunnel = () => {
    if (!app.tunnel || app.tunnel.status === "left") return app.beginTunnel();
    const view = app.tunnel.view();
    if (view.status === "battle") {
      showMap(view.battle.level, view.battle);
      app.closeModal();
      app.setOriginalPresentation('battle');
      app.beginOriginalReadyGo?.();
      return;
    }
    if (view.stage && app.battle.level.className !== view.stage.className)
      showMap(view.stage);
    if(app.showOriginalTunnelView?.(view))return;
    app.openModal(
      `<span class="eyebrow">ROCK TUNNEL</span><h2>${escape(view.title)}</h2><p>${escape(view.text)}</p><div class="dialog-actions">${view.actions.map((action) => `<button class="primary" data-tunnel-action="${action.id}">${escape(action.label)}</button>`).join("")}${view.status === "completed" ? '<button class="primary" id="tunnel-next">Continue to Lavender Town →</button>' : ""}</div>`,
    );
    document.querySelectorAll("[data-tunnel-action]").forEach(
      (button) =>
        (button.onclick = () => {
          const result = app.tunnel.choose(button.dataset.tunnelAction);
          app.store();
          if (result.status === "left") return app.openCampaign();
          app.showTunnel();
        }),
    );
    $("#tunnel-next")?.addEventListener("click", () => {
      app.loadLevel(18, app.previewMode);
      app.closeModal();
    });
  };
  app.showTunnelResult = (event) => {
    app.openModal(
      `<span class="eyebrow">ROCK TUNNEL</span><h2>${event.won ? "The passage is clear." : "This trip has ended."}</h2><p>${event.won ? "Continue through the cave. The stage is complete when you reach the exit." : "Your collection and earned experience are saved."}</p><button class="primary" id="tunnel-continue">${event.won ? "Continue" : "Return to campaign"}</button>`,
    );
    $("#tunnel-continue").onclick = () =>
      event.won ? app.showTunnel() : app.openCampaign();
  };
  app.openFieldMoves = () => {
    const pokemon = app.selected;
    if (!pokemon || pokemon.temporary) return;
    const reasons = {
      incompatible: "This Pokémon cannot learn it.",
      "already-known": "Already known.",
      "complete-digletts-cave": "Clear Diglett’s Cave first.",
      "obtain-flash-on-route-2": "Obtain Flash by replaying Route 2.",
      "insufficient-money": "You need ₽ 10,000.",
    };
    app.openModal(
      `<span class="eyebrow">FIELD MOVES</span><h2>Cut &amp; Flash</h2><p>Teaching either move costs ₽ 10,000. Cut becomes available after Diglett’s Cave. To obtain Flash, win Route 2 after placing a Pokémon that knows Cut at the central bush, without deploying Abra.</p><p>Flash can light Rock Tunnel when a party member knows it.</p><label>Move to replace <select id="field-replace">${pokemon.moves.map((id, i) => `<option value="${i}">${escape(app.data.moves[id].name)}</option>`).join("")}</select></label><div class="dialog-actions">${[
        224, 225,
      ]
        .map((id) => {
          const result = fieldMoveEligibility(app.data, app.save, pokemon, id);
          return `<button data-field="${id}" ${result.ok ? "" : "disabled"}>${app.data.moves[id].name}<small>${result.ok ? " · ₽ 10,000" : ` · ${reasons[result.reason] ?? result.reason}`}</small></button>`;
        })
        .join("")}</div>`,
    );
    document.querySelectorAll("[data-field]").forEach(
      (button) =>
        (button.onclick = () => {
          const result = teachFieldMove(
            app.data,
            app.save,
            pokemon,
            Number(button.dataset.field),
            Number($("#field-replace").value),
          );
          if (!result.ok)
            return app.toast(reasons[result.reason] ?? result.reason);
          app.battle.syncPokemon(pokemon);
          app.store();
          app.renderAll();
          app.closeModal();
        }),
    );
  };
}
