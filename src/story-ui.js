import { EndingStory } from "./ending-story.js";

const $ = (selector) => document.querySelector(selector);
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

export function installStoryUI(app) {
  app.beginStory = async () => {
    const battle = app.battle;
    if (app.story?.battle === battle && !app.story.finished)
      return app.story.show();
    try {
      const response = await fetch("assets/story36/manifest.json");
      if (!response.ok)
        throw new Error("The original story panels could not be loaded.");
      const manifest = await response.json();
      if (app.battle !== battle) return;
      app.story = new EndingStory(battle, manifest);
      app.story.start();
    } catch (error) {
      app.toast(error.message);
    }
  };
  $("#modal").addEventListener("cancel", (event) => {
    if (app.story && !app.story.finished) {
      event.preventDefault();
      app.story.skip();
    }
  });
  const onBattle = app.onBattle.bind(app);
  app.onBattle = (type, event) => {
    if (type === "story") {
      const panel = event.panel;
      const file =
        !event.canSkip && panel.firstVisitFile
          ? panel.firstVisitFile
          : panel.file;
      app.openModal(
        `<div class="story-panel"><img src="${escape(file)}" alt="${escape(panel.text.join(" "))}">${panel.buttons
          .filter((button) => button.action !== "skip" || event.canSkip)
          .map(
            (button) =>
              `<button data-story-action="${button.action}" aria-label="${button.action === "yes" ? "Trade Slowbro for Lickitung" : button.action === "no" ? "Decline trade" : button.action === "skip" ? "Skip story" : "Next"}" style="left:${button.x / 8}%;top:${button.y / 4.8}%;width:${button.width / 8}%;height:${button.height / 4.8}%"></button>`,
          )
          .join("")}</div>`,
      );
      $("#modal").classList.add("story-modal");
      $("#modal-close").hidden = true;
      document.querySelectorAll("[data-story-action]").forEach(
        (button) =>
          (button.onclick = () => {
            const action = button.dataset.storyAction;
            if (action === "yes" || action === "no")
              app.story.chooseTrade(action === "yes");
            else if (action === "skip") app.story.skip();
            else app.story.next();
          }),
      );
      return;
    }
    if (type === "story-progress" || type === "story-trade") {
      app.store();
      app.renderAll();
      return;
    }
    if (type === "story-complete") {
      app.store();
      app.renderAll();
      app.closeModal();
      app.openCampaign();
      return;
    }
    onBattle(type, event);
  };
}
