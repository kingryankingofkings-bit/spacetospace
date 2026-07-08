import { create } from 'zustand';

export type ChatChannel = 'Global' | 'Local' | 'Party' | 'System';

export interface ChatMessage {
  id: string;
  sender: string;
  channel: ChatChannel;
  content: string;
  timestamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  activeChannel: ChatChannel | 'All';
  isOpen: boolean;
  addMessage: (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  setActiveChannel: (channel: ChatChannel | 'All') => void;
  toggleChat: () => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  activeChannel: 'All',
  isOpen: true,
  addMessage: (msg) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...msg,
          id: Math.random().toString(36).substring(2, 9),
          timestamp: Date.now(),
        },
      ].slice(-100), // Keep the last 100 messages to prevent memory leaks
    })),
  setActiveChannel: (channel) => set({ activeChannel: channel }),
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  clearMessages: () => set({ messages: [] }),
}));
