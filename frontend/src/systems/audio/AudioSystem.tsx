import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { create } from 'zustand';

// ------------------------------------------------------------------
// 1. Audio State Store (Zustand)
// ------------------------------------------------------------------
interface AudioState {
  masterVolume: number;
  bgmVolume: number;
  sfxVolume: number;
  uiVolume: number;
  setMasterVolume: (v: number) => void;
  setBgmVolume: (v: number) => void;
  setSfxVolume: (v: number) => void;
  setUiVolume: (v: number) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  masterVolume: 1.0,
  bgmVolume: 0.5,
  sfxVolume: 0.8,
  uiVolume: 0.8,
  setMasterVolume: (v) => set({ masterVolume: v }),
  setBgmVolume: (v) => set({ bgmVolume: v }),
  setSfxVolume: (v) => set({ sfxVolume: v }),
  setUiVolume: (v) => set({ uiVolume: v }),
}));

// ------------------------------------------------------------------
// 2. Imperative Audio Manager
// ------------------------------------------------------------------
class AudioManager {
  public listener: THREE.AudioListener | null = null;
  private audioLoader = new THREE.AudioLoader();
  private bufferCache = new Map<string, AudioBuffer>();
  private scene: THREE.Scene | null = null;

  // BGM
  private bgmAudio1: THREE.Audio | null = null;
  private bgmAudio2: THREE.Audio | null = null;
  private activeBgmIndex = 1;
  private currentBgmUrl: string | null = null;
  private fadeInterval: number | null = null;

  // Pools
  private sfxPool: THREE.PositionalAudio[] = [];
  private uiPool: THREE.Audio[] = [];
  private readonly MAX_SFX = 32;
  private readonly MAX_UI = 8;

  /**
   * Initializes the AudioListener and attaches it to the main camera.
   */
  public init(camera: THREE.Camera, scene: THREE.Scene) {
    if (!this.listener) {
      this.listener = new THREE.AudioListener();
      this.bgmAudio1 = new THREE.Audio(this.listener);
      this.bgmAudio2 = new THREE.Audio(this.listener);
    }
    // Attach listener to camera if not already attached
    if (!camera.children.includes(this.listener)) {
      camera.add(this.listener);
    }
    this.scene = scene;
    return this.listener;
  }

  /**
   * Preload an audio file into the buffer cache.
   */
  public async loadSound(url: string): Promise<AudioBuffer> {
    if (this.bufferCache.has(url)) {
      return this.bufferCache.get(url)!;
    }
    return new Promise((resolve, reject) => {
      this.audioLoader.load(
        url,
        (buffer) => {
          this.bufferCache.set(url, buffer);
          resolve(buffer);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }

  /**
   * Plays a background music track, crossfading if one is already playing.
   */
  public async playBGM(url: string, fadeDuration = 2.0) {
    if (!this.listener || !this.bgmAudio1 || !this.bgmAudio2) return;
    if (this.currentBgmUrl === url) return;

    const buffer = await this.loadSound(url);
    this.currentBgmUrl = url;

    const { bgmVolume, masterVolume } = useAudioStore.getState();
    const targetVolume = bgmVolume * masterVolume;

    const activeAudio = this.activeBgmIndex === 1 ? this.bgmAudio1 : this.bgmAudio2;
    const nextAudio = this.activeBgmIndex === 1 ? this.bgmAudio2 : this.bgmAudio1;

    // Set up next audio
    nextAudio.setBuffer(buffer);
    nextAudio.setLoop(true);
    nextAudio.setVolume(0);
    nextAudio.play();

    // Crossfade loop
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    const fadeSteps = 20;
    const stepTime = (fadeDuration * 1000) / fadeSteps;
    let currentStep = 0;

    const activeStartVol = activeAudio.getVolume();

    this.fadeInterval = window.setInterval(() => {
      currentStep++;
      const progress = currentStep / fadeSteps;

      if (activeAudio.isPlaying) {
        activeAudio.setVolume(activeStartVol * (1 - progress));
      }
      nextAudio.setVolume(targetVolume * progress);

      if (currentStep >= fadeSteps) {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        if (activeAudio.isPlaying) activeAudio.stop();
        nextAudio.setVolume(targetVolume); // Ensure exact target volume
      }
    }, stepTime);

    // Swap active index
    this.activeBgmIndex = this.activeBgmIndex === 1 ? 2 : 1;
  }

  /**
   * Plays a UI sound effect (2D non-positional audio).
   */
  public async playUI(url: string) {
    if (!this.listener) return;
    const buffer = await this.loadSound(url);
    const { uiVolume, masterVolume } = useAudioStore.getState();

    let audio = this.uiPool.find((a) => !a.isPlaying);
    if (!audio) {
      if (this.uiPool.length < this.MAX_UI) {
        audio = new THREE.Audio(this.listener);
        this.uiPool.push(audio);
      } else {
        audio = this.uiPool[0]; // Pool full, override oldest
        if (audio.isPlaying) audio.stop();
      }
    }

    audio.setBuffer(buffer);
    audio.setVolume(uiVolume * masterVolume);
    audio.setLoop(false);
    audio.play();
  }

  /**
   * Plays a spatial 3D sound effect at a specific world position.
   */
  public async playSFX(
    url: string,
    position: THREE.Vector3,
    refDistance = 10,
    maxDistance = 100
  ) {
    if (!this.listener || !this.scene) return null;
    const buffer = await this.loadSound(url);
    const { sfxVolume, masterVolume } = useAudioStore.getState();

    let pAudio = this.sfxPool.find((a) => !a.isPlaying);
    if (!pAudio) {
      if (this.sfxPool.length < this.MAX_SFX) {
        pAudio = new THREE.PositionalAudio(this.listener);
        this.scene.add(pAudio); // Attach to scene so position takes effect
        this.sfxPool.push(pAudio);
      } else {
        pAudio = this.sfxPool[0]; // Pool full, override first
        if (pAudio.isPlaying) pAudio.stop();
      }
    }

    pAudio.position.copy(position);
    pAudio.setBuffer(buffer);
    pAudio.setRefDistance(refDistance);
    pAudio.setMaxDistance(maxDistance);
    pAudio.setVolume(sfxVolume * masterVolume);
    pAudio.setLoop(false);
    pAudio.play();

    return pAudio;
  }

  /**
   * Update master volume globally.
   */
  public updateMasterVolume(volume: number) {
    if (this.listener) {
      this.listener.setMasterVolume(volume);
    }
  }

  /**
   * Update active BGM volume dynamically.
   */
  public updateBgmVolume(volume: number, masterVolume: number) {
    const targetVolume = volume * masterVolume;
    const activeAudio = this.activeBgmIndex === 1 ? this.bgmAudio1 : this.bgmAudio2;
    if (activeAudio && activeAudio.isPlaying && !this.fadeInterval) {
      activeAudio.setVolume(targetVolume);
    }
  }
}

// Global Singleton Instance
export const audioEngine = new AudioManager();

// ------------------------------------------------------------------
// 3. R3F AudioSystem Component
// ------------------------------------------------------------------
/**
 * Mount this component inside your <Canvas> to initialize the AudioEngine.
 * Handles binding the AudioListener to the active camera and syncing store volumes.
 */
export const AudioSystem: React.FC = () => {
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  // Initialize engine
  useEffect(() => {
    const listener = audioEngine.init(camera, scene);
    return () => {
      // Cleanup listener if the camera unmounts (rare, but good practice)
      if (camera.children.includes(listener)) {
        camera.remove(listener);
      }
    };
  }, [camera, scene]);

  // Sync volumes from Zustand to AudioManager
  useEffect(() => {
    const unsubscribe = useAudioStore.subscribe((state) => {
      audioEngine.updateMasterVolume(state.masterVolume);
      audioEngine.updateBgmVolume(state.bgmVolume, state.masterVolume);
    });
    
    // Initial sync
    const state = useAudioStore.getState();
    audioEngine.updateMasterVolume(state.masterVolume);
    
    return unsubscribe;
  }, []);

  return null;
};
