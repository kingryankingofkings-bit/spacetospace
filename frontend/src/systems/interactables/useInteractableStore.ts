import { create } from 'zustand';

export interface InteractableData {
  id: string;
  prompt: string;
  onInteract: () => void;
}

interface InteractableStore {
  activeInteractable: InteractableData | null;
  setActiveInteractable: (data: InteractableData | null) => void;
  interact: () => void;
}

export const useInteractableStore = create<InteractableStore>((set, get) => ({
  activeInteractable: null,
  setActiveInteractable: (data) => set({ activeInteractable: data }),
  interact: () => {
    const { activeInteractable } = get();
    if (activeInteractable) {
      activeInteractable.onInteract();
    }
  },
}));
