import {StoryClip} from './story-data-clip.js';
import {createOriginalRenderer} from './original-story-ui.js';
import {NativeBattleView} from "./native-battle-view.js";
import Phaser from "phaser";
import { RANGE, WAVE_FPS } from "./battle.js";

export function spriteKey(pokemon, manifest) {
  const number = String(pokemon.speciesId).padStart(3, "0");
  const special =
    pokemon.shiny === 1
      ? `poke_s_${number}`
      : pokemon.shiny === 2
        ? `poke_ss_${number}`
        : null;
  return special && manifest[special]
    ? special
    : manifest[`poke_${number}`]
      ? `poke_${number}`
      : "poke_1010";
}

export class BattleScene extends Phaser.Scene {
  constructor(app) {
    super("Battle");
    this.app = app;
    this.visuals = new Map();
    this.accumulator = 0;
  }
  preload() {
    for (const [key, p] of Object.entries(this.app.assets.pokemon)) {
      this.load.spritesheet(key, `assets/${p.file}`, {
        frameWidth: p.frameWidth,
        frameHeight: p.frameHeight,
      });
    }
    for (const [key, map] of Object.entries(this.app.assets.maps))
      this.load.image(key, `assets/${map.file}`);
    for (const [key, effect] of Object.entries(this.app.assets.effects))
      this.load.spritesheet(key, `assets/${effect.file}`, {
        frameWidth: effect.frameWidth,
        frameHeight: effect.frameHeight,
      });
    this.load.image("candy", "assets/ui/rare-candy.png");
    for (const [key, sound] of Object.entries(this.app.assets.audio)) {
      if (!key.startsWith("cry_")) this.load.audio(key, `assets/${sound.file}`);
    }
    this.load.on("progress", (value) => {
      document.querySelector("#loading").textContent =
        `Loading the original artwork… ${Math.floor(value * 100)}%`;
    });
    this.load.on("loaderror", (file) =>
      this.app.toast(
        `Could not load ${file.key}. Check the local assets folder.`,
      ),
    );
  }
  create() {
    document.querySelector("#loading")?.remove();
    for (const [key, p] of Object.entries(this.app.assets.pokemon)) {
      for (const [direction, frames] of Object.entries(p.animations)) {
        this.anims.create({
          key: `${key}-${direction}`,
          frames: frames.map((frame) => ({ key, frame })),
          frameRate: p.frameRate,
          repeat: -1,
        });
      }
    }
    for (const [key, effect] of Object.entries(this.app.assets.effects))
      this.anims.create({
        key: `effect-${key}`,
        frames: this.anims.generateFrameNumbers(key, {
          start: 0,
          end: effect.frameCount - 1,
        }),
        frameRate: effect.frameRate,
        repeat: 0,
      });
    this.cameras.main.setBackgroundColor("#000000");
    this.scale.on("resize", () => this.render());
    this.ready = true;
    this.app.sceneReady(this);
  }
  showLevel() {
    this.app.applyOriginalSettings?.();
    this.tweens.killTweensOf(this);this.pokemonCheckUid=null;this.captureUid=null;
    if(this.highlightKey&&this.textures.exists(this.highlightKey))this.textures.remove(this.highlightKey);this.highlightKey=null;
    this.loadedBattle = this.app.battle;
    this.levelGeneration=(this.levelGeneration??0)+1;
    this.nativeView?.destroy();
    this.nativeView=null;
    this.children.removeAll(true);
    this.visuals.clear();
    this.accumulator = 0;
    const level = this.app.battle.level,
      map = this.app.assets.maps[level.background];
    if (!map) throw new Error(`Missing background ${level.background}`);
    this.mapBounds = map;
    const sourceBounds=this.app.data.timelines.symbols[level.backgroundSymbolId].bounds;
    this.sourceMapWidth=sourceBounds[2]-sourceBounds[0];this.sourceMapHeight=sourceBounds[3]-sourceBounds[1];
    this.add
      .image(map.sourceBounds.xMin, map.sourceBounds.yMin, level.background)
      .setOrigin(0, 0)
      .setDepth(0);
    this.loadSpotHighlights(level,map);
    this.range = this.add.graphics().setDepth(3);
    const rangeData = this.app.assets.effects.gfx_range_normal;
    this.rangeImage = this.add
      .image(0, 0, "gfx_range_normal", 0)
      .setOrigin(rangeData.origin.x, rangeData.origin.y)
      .setDepth(3)
      .setVisible(false);
    this.candySprites = this.app.battle.candies.map((candy) =>
      this.add
        .image(candy.x, candy.y, "candy")
        .setDisplaySize(20, 20)
        .setDepth(4),
    );
    this.bars = this.add.graphics().setDepth(8);
    if(this.app.battle.moveRuntime)this.nativeView=new NativeBattleView(this,map);
    this.originalView();
    this.updateMusic();
    this.render();
  }
  async loadSpotHighlights(level,map) {
    const generation=this.levelGeneration;
    this.highlight?.destroy();this.highlight=null;
    this.highlightData??=fetch('data/story-highlights.json').then(r=>r.json());
    const entry=(await this.highlightData)[level.background];if(!entry||this.levelGeneration!==generation)return;
    const key='source-spots-'+level.background+'-'+generation;if(this.textures.exists(key))this.textures.remove(key);
    const texture=this.textures.createCanvas(key,map.width,map.height),clip=new StoryClip(this.app.data.timelines,entry.symbolId);
    const m=entry.placement.matrix;clip.x=m[4]-map.sourceBounds.xMin;clip.y=m[5]-map.sourceBounds.yMin;clip.scaleX=m[0];clip.scaleY=m[3];clip.stop();
    const renderer=await createOriginalRenderer(texture.canvas,entry.renderer);if(this.levelGeneration!==generation){this.textures.remove(key);return;}renderer.render(clip);texture.refresh();
    this.highlightKey=key;
    this.highlight=this.add.image(map.sourceBounds.xMin,map.sourceBounds.yMin,key).setOrigin(0).setDepth(1).setVisible(!!this.app.activeDrag);
  }
  originalView() {
    this.cameras.main.setOrigin(0,0);
    this.sourceX=this.app.battle.level.id===1?100:0;
    this.sourceY=this.app.battle.level.id===1?10:0;
    this.zoomTo(this.app.battle.isMultiplayer?.5:1);
  }
  stageToWorld(point) { const z=this.cameras.main.zoom;return {x:(point.x-this.sourceX)/z,y:(point.y-this.sourceY)/z}; }
  worldToStage(point) { const z=this.cameras.main.zoom;return {x:point.x*z+this.sourceX,y:point.y*z+this.sourceY}; }
  moveSourceMap(x,y,{clamp=true}={}) {
    if(clamp){const xEnd=800-this.sourceMapWidth,yEnd=480-this.sourceMapHeight;x=Phaser.Math.Clamp(x,Math.min(0,xEnd),Math.max(0,xEnd));y=Phaser.Math.Clamp(y,Math.min(0,yEnd),Math.max(0,yEnd));}
    this.sourceX=x;this.sourceY=y;const z=this.cameras.main.zoom;this.cameras.main.setScroll(-x/z,-y/z);this.render();
  }
  zoomTo(value) { this.cameras.main.setZoom(value);this.moveSourceMap(this.sourceX??0,this.sourceY??0,{clamp:false});this.app.renderHUD(); }
  fit() { this.zoomTo(this.app.battle.isMultiplayer?.5:1); }
  enterPokemonCheck(fighter) {
    if(this.app.battle.level.mode==='invasion'&&!this.app.battle.canPlace)return;
    this.pokemonCheckUid=fighter.uid;this.app.selectedUid=fighter.partyUid??fighter.uid;
    const z=this.cameras.main.zoom,xEnd=800-this.sourceMapWidth,yEnd=480-this.sourceMapHeight;
    const x=Phaser.Math.Clamp(400-fighter.x*z,Math.min(0,xEnd),Math.max(0,xEnd)),y=Phaser.Math.Clamp(200-fighter.y*z,Math.min(0,yEnd),Math.max(0,yEnd));
    this.tweens.add({targets:this,sourceX:x,sourceY:y,duration:200,ease:'Quart.easeOut',onUpdate:()=>this.moveSourceMap(this.sourceX,this.sourceY,{clamp:false})});
    this.render();
  }
  leavePokemonCheck() {this.pokemonCheckUid=null;this.render();}
  updateMusic() {
    this.music?.stop();
    this.music?.destroy();
    this.music = null;
    const key = this.app.battle?.level.music;
    if ((this.app.save?.settings.music ?? this.app.save?.settings.sound) && key && this.cache.audio.exists(key)) {
      this.music = this.sound.add(key, { loop: true, volume: 0.23 });
      this.music.play();
    }
  }
  soundEffect(key) {
    if (this.app.save?.settings.sound && this.cache.audio.exists(key))
      this.sound.play(key, { volume: 0.18 });
  }
  floating(text, target, color = "#f9ecc7") {
    if(this.app.battle?.moveRuntime||this.app.save.settings.damageText===false)return;
    const label = this.add
      .text(target.x, target.y - 25, text, {
        fontFamily: "sans-serif",
        fontSize: "14px",
        fontStyle: "bold",
        color,
        stroke: "#233024",
        strokeThickness: 3,
      })
      .setOrigin(0.5)
      .setDepth(20);
    this.tweens.add({
      targets: label,
      y: label.y - 28,
      alpha: 0,
      duration: 720,
      onComplete: () => label.destroy(),
    });
  }
  event(type, event) {
    if (!this.ready) return;
    if(type==="native-sound"){const key=event.name??event.args?.find(a=>typeof a==="string"&&this.app.assets.audio[a]);if(key)this.soundEffect(key);}
    if(type==="damage"&&event.target)this.floating(event.amount?String(event.amount):"Immune",event.target,event.multiplier>1?"#ffb086":"#f9ecc7");
    if(type==="heal"&&event.target&&event.amount>0)this.floating(`+${event.amount}`,event.target,"#a9ed96");
    if (type === "hit" && !this.app.battle?.moveRuntime) {
      const { source, target, amount, move } = event;
      const effectKey =
        {
          Scratch: "gfx_hit_scratch",
          "Water Gun": "hit_Water_Gun",
          Ember: "hit_ember",
          "Leech Seed": "hit_Seed",
        }[move.name] ?? "gfx_hit";
      const effectData = this.app.assets.effects[effectKey];
      const effect = this.add
        .sprite(target.x, target.y, effectKey)
        .setOrigin(effectData.origin.x, effectData.origin.y)
        .setDepth(9);
      effect.play(`effect-${effectKey}`);
      effect.once("animationcomplete", () => effect.destroy());
      this.floating(
        amount ? `${event.critical ? "✦ " : ""}${amount}` : "Immune",
        target,
        event.multiplier > 1 ? "#ffb086" : "#f9ecc7",
      );
      const sprite = this.visuals.get(target.uid);
      if (sprite) {
        sprite.setAlpha(0.6);
        this.tweens.add({ targets: sprite, alpha: 1, duration: 160 });
      }
    }
    if (type === "miss") this.floating("Miss", event.target, "#cbd3bf");
    if (type === "status")
      this.floating(event.move.name, event.target, "#adcdfa");
    if (type === "capture") {
      this.floating("Caught!", event.enemy, "#dbea8e");
      this.soundEffect("catchSound");
    }
    if (type === "faint") {
      this.floating("Fainted", event.tower, "#f3a693");
      this.soundEffect("faintSound");
    }
    if (type === "defeat") this.soundEffect(this.app.battle?.moveRuntime?"faintSound":"regularHitSound");
    if(!["damage","heal","native-sound"].includes(type))this.render();
  }
  render() {
    const battle = this.app.battle;
    if (!this.ready || !battle || !this.range || this.loadedBattle !== battle)
      return;
    const active = [
      ...battle.towers.filter((t) => t.placed || t.dragging),
      ...battle.enemies,
    ];
    const ids = new Set(active.map((e) => e.uid));
    for (const [uid, visual] of this.visuals)
      if (!ids.has(uid)) {
        visual.destroy();
        this.visuals.delete(uid);
      }
    this.bars.clear();
    this.range.clear();
    this.rangeImage.setVisible(false);
    for (const entity of active) {
      const key = spriteKey(entity, this.app.assets.pokemon),
        p = this.app.assets.pokemon[key];
      let sprite = this.visuals.get(entity.uid);
      if (!sprite) {
        sprite = this.add
          .sprite(entity.x, entity.y, key)
          .setDepth(6);
        this.visuals.set(entity.uid, sprite);
      }
      sprite.setPosition(entity.x, entity.y).setOrigin(p.origin.x, p.origin.y);
      sprite.setScale(entity.scale ?? 1).setDepth(5 + entity.y / 10000);
      if (
        entity.team === "enemy" &&
        battle.state === "running" &&
        entity.status !== "sleep"
      ) {
        sprite.play(`${key}-${entity.direction}`, true);
        sprite.anims.timeScale = 1;
      } else {
        sprite.anims.stop();
        sprite.setTexture(key, p.animations[entity.direction]?.[0] ?? 0);
      }
      sprite.setAlpha(this.nativeView&&battle.moveRuntime.world.children.some(c=>c.fighter?.uid===entity.uid)?0.001:1);
      if (!entity.alive) sprite.setTint(0x7b877b).setAlpha(0.4);
      else sprite.clearTint();
      const y = entity.y - (p.frameHeight * (entity.scale ?? 1)) / 2 - 10;
      const color = entity.playerControlled
        ? 0x98d55f
        : entity.fixed && battle.level.mode === "invasion"
          ? 0xe76455
          : entity.team === "tower"
            ? 0x98d55f
            : !entity.canCapture
              ? 0x82a5e0
              : battle.canCapture(entity)
                ? 0xe76455
                : 0x69c47d;
      if(!this.nativeView)this.bars
        .fillStyle(0x172920, 0.95)
        .fillRoundedRect(entity.x - 21, y - 2, 42, 7, 2);
      if(!this.nativeView)this.bars
        .fillStyle(color)
        .fillRect(
          entity.x - 19,
          y,
          38 * Math.max(0, entity.hp / entity.maxHp),
          3,
        );
      if (entity.uid === this.pokemonCheckUid && !this.app.activeDrag) {
        this.rangeImage.setPosition(entity.x, entity.y).setVisible(true);
      }
    }
    this.nativeView?.render();
    this.highlight?.setVisible(this.app.activeDrag?.kind==='tower');
    battle.candies.forEach((candy, i) =>
      this.candySprites[i]
        .setPosition(candy.x, candy.y)
        .setVisible(candy.state !== "lost")
        .setDepth(candy.state === "carried" ? 7 : 4),
    );
  }
  update(time, delta) {
    if (!this.app.battle || !this.ready) return;
    this.app.tickOriginalInput?.(delta);
    this.anims.globalTimeScale =
      this.app.battle.state === "running" && !this.app.isModalOpen
        ? this.app.save.settings.speed
        : 0;
    if (this.app.battle.state === "running" && !this.app.isModalOpen) {
      this.accumulator += Math.min(delta, 250) * this.app.save.settings.speed;
      while (this.accumulator >= 1000 / WAVE_FPS) {
        this.app.battle.tick();
        this.accumulator -= 1000 / WAVE_FPS;
        if (this.app.battle.state !== "running") break;
      }
      this.render();
    } else this.accumulator = 0;
  }
}

export function createGame(app) {
  const parent = document.querySelector("#game");
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    backgroundColor: "#000000",
    pixelArt: true,
    width: 800,
    height: 480,
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    audio: { disableWebAudio: false },
    scene: new BattleScene(app),
    render: { antialias: false, roundPixels: true },
    input: { activePointers: 2 },
  });
}
