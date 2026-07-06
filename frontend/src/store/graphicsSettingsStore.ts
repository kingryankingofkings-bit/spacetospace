import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface GraphicsSettings {
  bloomEnabled: boolean;
  vignetteEnabled: boolean;
  shadowQuality: 'low' | 'medium' | 'high';
  resolutionScale: number;
}

interface GraphicsSettingsState extends GraphicsSettings {
  setBloomEnabled: (enabled: boolean) => void;
  setVignetteEnabled: (enabled: boolean) => void;
  setShadowQuality: (quality: 'low' | 'medium' | 'high') => void;
  setResolutionScale: (scale: number) => void;
}

export const useGraphicsSettingsStore = create<GraphicsSettingsState>()(
  persist(
    (set) => ({
      bloomEnabled: true,
      vignetteEnabled: true,
      shadowQuality: 'high',
      resolutionScale: 2.0,
      setBloomEnabled: (enabled) => set({ bloomEnabled: enabled }),
      setVignetteEnabled: (enabled) => set({ vignetteEnabled: enabled }),
      setShadowQuality: (quality) => set({ shadowQuality: quality }),
      setResolutionScale: (scale) => set({ resolutionScale: scale }),
    }),
    {
      name: 'graphics-settings-storage',
    }
  )
);
