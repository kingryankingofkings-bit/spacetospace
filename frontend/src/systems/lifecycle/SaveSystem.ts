import { useMultiplayerStore } from '../../store/multiplayerStore';
import { playerBuffer, playerIndices } from '../../store/transientStore';

const SAVE_KEY = 'player_save_data';
const STRIDE = 11; // Matches the STRIDE used in transientStore.ts for Float32Array

export const SaveSystem = {
  save: () => {
    const state = useMultiplayerStore.getState();
    const sessionId = state.sessionId;
    
    let position = { x: 0, y: 0, z: 0 };
    
    // Retrieve latest high-frequency position from DOD transientStore
    if (sessionId && playerIndices.has(sessionId)) {
      const idx = playerIndices.get(sessionId)! * STRIDE;
      position = {
        x: playerBuffer[idx],
        y: playerBuffer[idx + 1],
        z: playerBuffer[idx + 2]
      };
    }
    
    const saveData = {
      inventory: state.inventory,
      position,
      health: state.health,
      level: state.level,
      currency: state.currency,
      timestamp: Date.now()
    };
    
    localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    console.log('Game saved to localStorage:', saveData);
  },
  
  load: () => {
    const data = localStorage.getItem(SAVE_KEY);
    if (!data) return null;
    
    try {
      const parsed = JSON.parse(data);
      console.log('Loaded game from localStorage:', parsed);
      return parsed;
    } catch (e) {
      console.error('Failed to parse save data', e);
      return null;
    }
  },
  
  startAutoSave: (intervalMs: number = 60000) => {
    return setInterval(() => {
      SaveSystem.save();
    }, intervalMs);
  }
};
