import { create } from 'zustand';

export interface DialogueNode {
  id: string;
  text: string;
  speaker: string;
  options: {
    text: string;
    nextNodeId?: string; // if undefined, ends conversation
    action?: 'ACCEPT_QUEST' | 'COMPLETE_QUEST';
    questId?: string;
  }[];
}

export interface DialogueTree {
  id: string;
  nodes: Record<string, DialogueNode>;
  startNodeId: string;
}

export interface DialogueState {
  isOpen: boolean;
  currentTree: DialogueTree | null;
  currentNodeId: string | null;

  startDialogue: (tree: DialogueTree) => void;
  selectOption: (nextNodeId?: string, action?: string, questId?: string) => void;
  closeDialogue: () => void;
}

export const useDialogueStore = create<DialogueState>((set, get) => ({
  isOpen: false,
  currentTree: null,
  currentNodeId: null,

  startDialogue: (tree) => set({
    isOpen: true,
    currentTree: tree,
    currentNodeId: tree.startNodeId
  }),

  selectOption: (nextNodeId, action, questId) => {
    // Actions like accepting quests will be handled by components listening or passing to questStore,
    // but we can manage the flow here
    if (!nextNodeId) {
      set({ isOpen: false, currentTree: null, currentNodeId: null });
    } else {
      set({ currentNodeId: nextNodeId });
    }
  },

  closeDialogue: () => set({ isOpen: false, currentTree: null, currentNodeId: null })
}));
