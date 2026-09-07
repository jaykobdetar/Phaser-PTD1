# Original stage36: Viridian Ending

Stage36 uses `StoryRuntime` and `original-story-ui.js` to execute the recovered intro and win controllers and their complete original Canvas timelines. It is a story-only stage with no battle, enemies, XP or cash reward. The older `ending-story.js` panel controller is retained as a reference and regression fixture.

The source sequence is exact:

1. `class_1040` displays `movie_scene_intro_36`. `butt_next` advances the source timeline to its next stopped panel. `butt_close` or an allowed `butt_skip` removes the intro.
2. Removing the intro calls `level_36.start_Level()`. That implementation calls `set_Level_Attempted()` and immediately `i_Win()`, which advances original `levelUnlocked` to36. This corresponds to port `completed:[...,36]` and `unlocked:37`. It then displays `class_1041`, before returning to stage selection.
3. `class_1041` displays `movie_scene_Level_36_Win`. At `start_trade` (frame3), Next scans party order for the first Slowbro (#80). With no party Slowbro, it jumps to `end_trade` (frame6). With one, it advances to frame4's Yes/No decision.
4. Yes mutates that existing profile to Lickitung (#108), Lv1, XP0, only move119, selectedMove119. Identity, party position, appearance and target remain intact. No leaves the profile unchanged. Both continue to frame5, exactly as the source calls `gfx.play()` for either answer.
5. Ending close or skip grants badge8, marks the story done and returns to stage selection. The level was already unlocked before this ending popup.

The source hides introductory Skip only when both `lastLevelVisited<36` and source `levelUnlocked<36`. The controller maps that to port progress/attempt information. First visits therefore show all seven original intro stop panels. Ending Skip is available because the completed-stage value was already advanced by `i_Win()`.

## Runtime integration

`loadLevel(36)` starts the original intro. The movie controller uses the saved avatar, source font glyphs, timeline audio and native transparent hit regions. Closing the intro commits stage completion, opens the original ending and resolves its party-only Slowbro trade. Closing the ending grants badge8 and returns to the campaign. Preview uses an isolated save.

The original scene transitions are animated. Earlier still-panel exports remain recovery references; the active UI loads `assets/story/manifest.json`. `tests/story-runtime.test.js` checks the original controllers, source branch outcomes and reward timing. See `STORY_PARITY.md` for the broader audit.
