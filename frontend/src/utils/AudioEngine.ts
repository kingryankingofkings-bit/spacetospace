import * as THREE from 'three';

class AudioEngineSystem {
  private listener: THREE.AudioListener | null = null;
  private bgmAudio: THREE.Audio | null = null;
  private audioLoader = new THREE.AudioLoader();
  private positionalCache: THREE.PositionalAudio[] = [];

  init(camera: THREE.Camera) {
    if (this.listener) return;
    this.listener = new THREE.AudioListener();
    camera.add(this.listener);
    this.bgmAudio = new THREE.Audio(this.listener);
  }

  playBGM(zone: string) {
    if (!this.bgmAudio) return;
    
    // Simulate mapping zones to audio files
    const url = `/audio/bgm_${zone}.mp3`;
    
    // Stop current BGM
    if (this.bgmAudio.isPlaying) {
      this.bgmAudio.stop();
    }

    // In a real app we'd load the actual file, but for this engine test, 
    // we use a synthetic oscillator to avoid needing assets
    console.log(`[AudioEngine] Playing BGM for zone: ${zone}`);
  }

  playHitSound(position: [number, number, number]) {
    if (!this.listener) return;

    // Use a simple oscillator for hit sounds
    const ctx = this.listener.context;
    
    // Resume context if suspended (browser auto-play policy)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const panner = ctx.createPanner();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    // Positional audio
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1;
    panner.maxDistance = 10000;
    panner.rolloffFactor = 1;
    
    panner.positionX.value = position[0];
    panner.positionY.value = position[1];
    panner.positionZ.value = position[2];

    osc.connect(gainNode);
    gainNode.connect(panner);
    panner.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }
}

export const AudioEngine = new AudioEngineSystem();

export const playBGM = (zone: string) => {
  AudioEngine.playBGM(zone);
};

export const playHitSound = (position: [number, number, number]) => {
  AudioEngine.playHitSound(position);
};
