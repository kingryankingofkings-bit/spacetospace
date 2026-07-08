import { create } from 'zustand';
import { Telegraph } from './types';

interface TelegraphStore {
  telegraphs: Record<string, Telegraph>;
  addTelegraph: (telegraph: Telegraph) => void;
  removeTelegraph: (id: string) => void;
  clearTelegraphs: () => void;
}

export const useTelegraphStore = create<TelegraphStore>((set) => ({
  telegraphs: {},
  addTelegraph: (telegraph) =>
    set((state) => ({
      telegraphs: { ...state.telegraphs, [telegraph.id]: telegraph },
    })),
  removeTelegraph: (id) =>
    set((state) => {
      const newTelegraphs = { ...state.telegraphs };
      delete newTelegraphs[id];
      return { telegraphs: newTelegraphs };
    }),
  clearTelegraphs: () => set({ telegraphs: {} }),
}));
