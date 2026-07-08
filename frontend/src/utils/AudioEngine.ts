import * as THREE from 'three';

class AudioEngineSystem {
  public listener: THREE.AudioListener | null = null;
  private bgmAudio: THREE.Audio | null = null;
  
  // Pooling for dynamic audio sources
  private positionalPool: THREE.PositionalAudio[] = [];
  private poolSize = 32;
  
  // Raycaster for Acoustic Occlusion
  private raycaster = new THREE.Raycaster();
  
  // Doppler tracking
  private lastListenerPos = new THREE.Vector3();
  private listenerVelocity = new THREE.Vector3();

  init(camera: THREE.Camera) {
    if (this.listener) return;
    this.listener = new THREE.AudioListener();
    camera.add(this.listener);
    this.bgmAudio = new THREE.Audio(this.listener);
    
    // Initialize pool
    for (let i = 0; i < this.poolSize; i++) {
      const pAudio = new THREE.PositionalAudio(this.listener);
      pAudio.setRefDistance(5);
      pAudio.setMaxDistance(100);
      pAudio.setRolloffFactor(1);
      
      // Setup lowpass filter for occlusion
      const filter = pAudio.context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 22050; // Open filter by default
      pAudio.setFilter(filter);
      
      this.positionalPool.push(pAudio);
    }
  }

  public getPositionalAudio(): THREE.PositionalAudio | null {
    return this.getAvailableAudio();
  }

  private getAvailableAudio(): THREE.PositionalAudio | null {
    for (const audio of this.positionalPool) {
      if (!audio.isPlaying) return audio;
    }
    return null;
  }

  updateDopplerAndOcclusion(scene: THREE.Scene, delta: number) {
    if (!this.listener) return;

    // Calculate Listener Velocity
    const currentListenerPos = new THREE.Vector3();
    this.listener.getWorldPosition(currentListenerPos);
    
    if (delta > 0) {
      this.listenerVelocity.subVectors(currentListenerPos, this.lastListenerPos).divideScalar(delta);
    }
    this.lastListenerPos.copy(currentListenerPos);

    // Speed of sound in game units per second (approx)
    const speedOfSound = 343;

    // Update active positional audio sources
    for (const pAudio of this.positionalPool) {
      if (pAudio.isPlaying) {
        const sourcePos = new THREE.Vector3();
        pAudio.getWorldPosition(sourcePos);
        
        // 1. Ray-Cast Acoustic Occlusion
        const dir = new THREE.Vector3().subVectors(sourcePos, currentListenerPos);
        const distance = dir.length();
        dir.normalize();
        
        this.raycaster.set(currentListenerPos, dir);
        this.raycaster.far = distance;
        
        // Check for geometry in the way
        const intersects = this.raycaster.intersectObjects(scene.children, true);
        const isOccluded = intersects.some(hit => hit.object.type === 'Mesh' && !hit.object.userData?.isTrigger);
        
        const filter = pAudio.getFilter() as BiquadFilterNode;
        if (isOccluded) {
          // Muffle the sound (lowpass)
          filter.frequency.setTargetAtTime(1000, pAudio.context.currentTime, 0.1);
          pAudio.setVolume(0.3); // Attenuate volume
        } else {
          // Clear line of sight
          filter.frequency.setTargetAtTime(22050, pAudio.context.currentTime, 0.1);
          pAudio.setVolume(1.0);
        }

        // 2. Doppler Shift Calculation
        // Assuming source is stationary for this simple example (vSource = 0)
        // If source was moving, we'd calculate its velocity similar to listener
        const vListener = dir.dot(this.listenerVelocity);
        const vSource = 0; 
        
        // Prevent division-by-zero
        const denominator = speedOfSound + vSource;
        const safeDenominator = Math.max(0.001, denominator);
        
        let dopplerFactor = (speedOfSound + vListener) / safeDenominator;
        dopplerFactor = Math.max(0.1, Math.min(dopplerFactor, 3.0)); // Clamp extreme shifts
        
        if (pAudio.playbackRate !== dopplerFactor) {
            pAudio.setPlaybackRate(dopplerFactor);
        }
      }
    }
  }

  playBGM(zone: string) {
    if (!this.bgmAudio) return;
    if (this.bgmAudio.isPlaying) this.bgmAudio.stop();
    console.log(`[AudioEngine] Playing BGM for zone: ${zone}`);
  }

  playHitSound(position: [number, number, number]) {
    if (!this.listener) return;
    
    const pAudio = this.getAvailableAudio();
    if (!pAudio) return; // Pool exhausted
    
    const ctx = this.listener.context;
    if (ctx.state === 'suspended') ctx.resume();

    // Reset properties
    pAudio.position.set(position[0], position[1], position[2]);
    pAudio.setPlaybackRate(1);
    
    const filter = pAudio.getFilter() as BiquadFilterNode;
    filter.frequency.value = 22050; // Open

    // Generate synth hit sound
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    pAudio.setNodeSource(gainNode as unknown as AudioBufferSourceNode); // Hack for synthetic node

    osc.start();
    pAudio.play();
    osc.stop(ctx.currentTime + 0.1);
    
    setTimeout(() => {
      if (pAudio.isPlaying) pAudio.stop();
      pAudio.disconnect(); // Clear custom node source
    }, 150);
  }

  setListenerVelocity(velocity: THREE.Vector3) {
    this.listenerVelocity.copy(velocity);
  }

  dispose() {
    if (this.bgmAudio && this.bgmAudio.isPlaying) {
      this.bgmAudio.stop();
    }
    this.positionalPool.forEach(audio => {
      if (audio.isPlaying) audio.stop();
      audio.disconnect();
    });
    this.positionalPool = [];
    
    if (this.listener && this.listener.context) {
      const ctx = this.listener.context;
      if (ctx.state !== 'closed') {
        ctx.close();
      }
    }
    console.log("[AudioEngine] Disposed successfully");
  }
}

export const AudioEngine = new AudioEngineSystem();

export const playBGM = (zone: string) => {
  AudioEngine.playBGM(zone);
};

export const playHitSound = (position: [number, number, number]) => {
  AudioEngine.playHitSound(position);
};

export const playFootstep = (position: [number, number, number], surface: string = 'dirt') => {
  if (!AudioEngine.listener) return;
  const ctx = AudioEngine.listener.context;
  const pAudio = AudioEngine.getPositionalAudio();
  if (!pAudio) return;
  pAudio.position.set(position[0], position[1], position[2]);
  
  // Create footstep thud
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  // Surface differentiation
  if (surface === 'stone') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
  } else {
    // Dirt/grass
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.1);
  }

  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  
  osc.connect(gain);
  
  const bufferSource = ctx.createBufferSource();
  const emptyBuffer = ctx.createBuffer(1, 1, ctx.sampleRate);
  bufferSource.buffer = emptyBuffer;
  bufferSource.connect(pAudio.context.destination); 
  
  const pGain = pAudio.getOutput();
  gain.connect(pGain);
  
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.1);
  
  setTimeout(() => {
    if (pAudio.isPlaying) pAudio.stop();
    pAudio.disconnect();
  }, 150);
};

export const playSwingSound = (position: [number, number, number]) => {
  if (!AudioEngine.listener) return;
  const ctx = AudioEngine.listener.context;
  const pAudio = AudioEngine.getPositionalAudio();
  if (!pAudio) return;
  pAudio.position.set(position[0], position[1], position[2]);
  
  // Create sword swoosh
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'square';
  osc.frequency.setValueAtTime(400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

  // Bandpass filter for wind-like sound
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1000;
  filter.Q.value = 1;
  
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.1);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
  
  osc.connect(filter);
  filter.connect(gain);
  
  const pGain = pAudio.getOutput();
  gain.connect(pGain);
  
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.25);
  
  setTimeout(() => {
    if (pAudio.isPlaying) pAudio.stop();
    pAudio.disconnect();
  }, 300);
};
