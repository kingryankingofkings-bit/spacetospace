import { create } from 'zustand';

export type MessageType = 'info' | 'error' | 'success' | 'warning';

export interface SystemMessage {
  id: string;
  text: string;
  type: MessageType;
}

interface MessageStore {
  messages: SystemMessage[];
  addMessage: (text: string, type?: MessageType, duration?: number) => void;
  removeMessage: (id: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (text, type = 'info', duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      messages: [...state.messages, { id, text, type }]
    }));

    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          messages: state.messages.filter((msg) => msg.id !== id)
        }));
      }, duration);
    }
  },
  removeMessage: (id) => {
    set((state) => ({
      messages: state.messages.filter((msg) => msg.id !== id)
    }));
  }
}));
