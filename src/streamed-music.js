/** One streamed battle track; short, overlapping effects remain in WebAudio.
 * Matches the play/pause/resume/stop lifecycle used by the source screen UI.
 */
export class StreamedMusic {
  constructor(url,{volume=.23,AudioClass=globalThis.Audio,eventTarget=globalThis.document,focusSource,onError=()=>{}}={}) {
    this.audio=new AudioClass(url);this.audio.loop=true;this.audio.volume=volume;this.audio.preload='auto';
    this.eventTarget=eventTarget;this.wanted=false;this.destroyed=false;this.generation=0;
    this.focusSource=focusSource;this.focusSuspended=focusSource?.sound?.gameLostFocus===true&&focusSource?.sound?.pauseOnBlur!==false;
    // Use Phaser's own focus signals, as the former WebAudio track did.
    this.blur=()=>{if(this.destroyed||this.focusSource?.sound?.pauseOnBlur===false)return;this.focusSuspended=true;this.generation++;this.unlisten();this.audio.pause();};
    this.focus=()=>{if(!this.focusSuspended||this.destroyed)return;this.focusSuspended=false;if(this.wanted)this.attempt();};
    focusSource?.events.on('blur',this.blur);focusSource?.events.on('focus',this.focus);
    this.retry=()=>{this.unlisten();if(this.wanted&&!this.destroyed)this.attempt();};
    this.error=()=>{if(!this.destroyed&&!this.reported){this.reported=true;onError();}};
    this.audio.addEventListener('error',this.error);
  }
  listen(){if(this.listening)return;this.listening=true;for(const type of ['pointerdown','keydown'])this.eventTarget?.addEventListener(type,this.retry,{capture:true});}
  unlisten(){this.listening=false;for(const type of ['pointerdown','keydown'])this.eventTarget?.removeEventListener(type,this.retry,{capture:true});}
  attempt(){
    if(this.destroyed||!this.wanted||this.focusSuspended)return;
    const generation=this.generation;
    try{Promise.resolve(this.audio.play()).then(()=>{if(generation===this.generation)this.unlisten();},error=>{
      // A later pause/stop must not re-arm a rejected, older play request.
      if(!this.destroyed&&this.wanted&&generation===this.generation&&error?.name==='NotAllowedError')this.listen();
    });}catch(error){if(error?.name==='NotAllowedError'&&this.wanted&&!this.destroyed)this.listen();}
  }
  play(){if(this.destroyed)return false;this.generation++;this.wanted=true;this.unlisten();this.rewind();this.attempt();return true;}
  resume(){if(this.destroyed)return false;this.generation++;this.wanted=true;this.unlisten();this.attempt();return true;}
  pause(){this.generation++;this.wanted=false;this.unlisten();this.audio.pause();return true;}
  rewind(){try{this.audio.currentTime=0;}catch{/* Metadata may not yet be available. */}}
  stop(){this.pause();this.rewind();return true;}
  destroy(){if(this.destroyed)return;this.destroyed=true;this.stop();this.focusSource?.events.off('blur',this.blur);this.focusSource?.events.off('focus',this.focus);this.focusSource=null;this.audio.removeEventListener('error',this.error);this.audio.removeAttribute('src');this.audio.load();}
  get isPlaying(){return !this.destroyed&&!this.audio.paused&&!this.audio.ended;}
  get isPaused(){return !this.destroyed&&this.audio.paused;}
}

// Source story/menu music already streams through HTMLAudio. Decoding those
// tracks a second time in Phaser serves no purpose. Keep short combat effects
// ready before the first tick so hit/level-up sounds never wait for a load.
export const preloadBattleAudio=(key,asset)=>!key.startsWith('cry_')&&asset.duration<=10;
