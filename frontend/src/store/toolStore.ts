import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ModData {
  colorTint: string;
  vfx: string;
  scaleMod: number;
}

export interface SceneNodeData {
  id: string;
  type: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

interface ToolState {
  isEditorMode: boolean;
  setIsEditorMode: (mode: boolean) => void;
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
  sceneNodes: SceneNodeData[];
  setSceneNodes: (nodes: SceneNodeData[]) => void;
  updateSceneNode: (id: string, partial: Partial<SceneNodeData>) => void;
}

export const useToolStore = create<ToolState>()(
  persist(
    (set) => ({
      isEditorMode: false,
      setIsEditorMode: (mode) => set({ isEditorMode: mode }),
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
      })),
      sceneNodes: [],
      setSceneNodes: (nodes) => set({ sceneNodes: nodes }),
      updateSceneNode: (id, partial) => set((state) => ({
        sceneNodes: state.sceneNodes.map(n => n.id === id ? { ...n, ...partial } : n)
      }))
    }),
    {
      name: 'local-mods-storage',
      partialize: (state) => ({ localMods: state.localMods }), // Only persist localMods
    }
  )
);
