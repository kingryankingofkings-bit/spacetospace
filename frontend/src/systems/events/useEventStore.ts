import { create } from 'zustand';

export interface GameEvent {
  id: string;
  message: string;
  type: 'boss' | 'invasion' | 'anomaly' | 'generic';
  timestamp: number;
}

interface EventStore {
  activeEvents: GameEvent[];
  addEvent: (message: string, type?: GameEvent['type']) => void;
  removeEvent: (id: string) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  activeEvents: [],
  addEvent: (message, type = 'generic') => {
    const newEvent: GameEvent = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      type,
      timestamp: Date.now(),
    };
    
    set((state) => ({
      activeEvents: [...state.activeEvents, newEvent]
    }));
    
    // Auto-remove event banner after 8 seconds
    setTimeout(() => {
      set((state) => ({
        activeEvents: state.activeEvents.filter(e => e.id !== newEvent.id)
      }));
    }, 8000);
  },
  removeEvent: (id) => set((state) => ({
    activeEvents: state.activeEvents.filter(e => e.id !== id)
  }))
}));
