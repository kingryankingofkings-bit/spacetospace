import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ModData {
  colorTint: string;
  vfx: string;
  scaleMod: number;
}

interface ToolState {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedAssetId: string;
  setSelectedAssetId: (assetId: string) => void;
  selectedEntityId: string | null;
  setSelectedEntityId: (id: string | null) => void;
  localMods: Record<string, ModData>;
  setLocalMod: (entityId: string, modData: ModData) => void;
}

export const useToolStore = create<ToolState>()(
  persist(
    (set) => ({
      activeTool: 'select',
      setActiveTool: (tool) => set({ activeTool: tool }),
      brushSize: 5,
      setBrushSize: (size) => set({ brushSize: size }),
      selectedColor: '#ffffff',
      setSelectedColor: (color) => set({ selectedColor: color }),
      selectedAssetId: 'tree',
      setSelectedAssetId: (assetId) => set({ selectedAssetId: assetId }),
      selectedEntityId: null,
      setSelectedEntityId: (id) => set({ selectedEntityId: id }),
      localMods: {},
      setLocalMod: (entityId, modData) => set((state) => ({
        localMods: {
          ...state.localMods,
          [entityId]: modData
        }
      }))
    }),
    {
      name: 'local-mods-storage',
      partialize: (state) => ({ localMods: state.localMods }), // Only persist localMods
    }
  )
);
