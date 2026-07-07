import { create } from 'zustand';
import { updateTransientPlayer, updateTransientNpc, updateTransientBoss } from './transientStore';

export interface Player {
  id: string;
  x: number;
  y: number;
  z: number;
  modelFile?: string;
  zone?: string;
  playerClass?: string;
  level?: number;
  skillPoints?: number;
  unlockedSkills?: string[];
  inventory?: any[];
  quests?: any[];
  appearance?: any;
  previewAppearance?: any;
}

interface MultiplayerState {
  players: Player[];
  worldObjects: any[];
  worldNpcs: any[];
  bosses: any[];
  combo: number;
  health: number;
  playerClass: string | null;
  level: number;
  skillPoints: number;
  unlockedSkills: string[];
  inventory: any[];
  activeQuests: any[];
  currency: number;
  resourceNodes: any[];
  dialogueTrigger: any | null;
  dialogueTree: any | null;
  sessionId: string | null;
  worldTime: 'day' | 'night';
  previewAppearance: any | null;
  
  moveSequenceNumber: number;
  pendingMoves: { x: number, y: number, z: number, seq: number }[];

  sendMove: (x: number, y: number, z: number) => void;
  sendAttack: (targetId: string) => void;
  sendAbility: (abilityId: string, targetId?: string, x?: number, y?: number, z?: number) => void;
  sendFastTravel: (zone: string) => void;
  finalizeCharacter: (appearance: any, classId: string) => void;
  setPreviewAppearance: (appearance: any) => void;
  unlockSkill: (skillId: string) => void;
  sendSpawnBoss: (bossType: string) => void;
  sendPickupLoot: (item: any) => void;
  sendAcceptQuest: (questId: string) => void;
  clearDialogueTrigger: () => void;
  sendDialogueChoice: (npcId: string, choiceId: string) => void;
  clearDialogueTree: () => void;
  sendCraftRecipe: (recipeId: string) => void;
  sendBuyItem: (itemId: string, price: number) => void;
  sendGatherNode: (nodeId: string) => void;
  sendUseItem: (instanceId: string) => void;
}

let sharedWs: WebSocket | null = null;
let authToken: string | null = localStorage.getItem('auth_token');

export const setAuthToken = (token: string, _username: string) => {
  authToken = token;
};

export const useMultiplayerStore = create<MultiplayerState>((set) => {
  return {
    players: [],
    worldObjects: [],
    worldNpcs: [],
    bosses: [],
    combo: 0,
    health: 100,
    playerClass: null,
    level: 1,
    skillPoints: 0,
    unlockedSkills: [],
    inventory: [],
    activeQuests: [],
    currency: 0,
    resourceNodes: [],
    dialogueTrigger: null,
    dialogueTree: null,
    sessionId: null,
    worldTime: 'day',
    previewAppearance: null,
    moveSequenceNumber: 0,
    pendingMoves: [],

    sendMove: (x, y, z) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        const set = useMultiplayerStore.setState;
        const state = useMultiplayerStore.getState();
        const seq = state.moveSequenceNumber + 1;
        set({ moveSequenceNumber: seq, pendingMoves: [...state.pendingMoves, { x, y, z, seq }] });
        
        // Immediate local prediction
        if (state.sessionId) {
          updateTransientPlayer(state.sessionId, x, y, z);
        }
        
        sharedWs.send(JSON.stringify({ type: 'move', x, y, z, seq }));
      }
    },

    sendAttack: (targetId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'attack', targetId }));
      }
    },
    sendAbility: (abilityId, targetId, x, y, z) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'use_ability', abilityId, targetId, x, y, z }));
      }
    },
    sendFastTravel: (zone) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'fast_travel', zone }));
      }
    },
    finalizeCharacter: (appearance: any, classId: string) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'finalize_character', appearance, classId }));
      }
      set({ previewAppearance: null }); // clear preview after saving
    },
    setPreviewAppearance: (appearance) => set({ previewAppearance: appearance }),
    unlockSkill: (skillId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'unlock_skill', skillId }));
      }
    },
    sendSpawnBoss: (bossType) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'spawn_boss', bossType }));
      }
    },
    sendPickupLoot: (item) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'pickup_loot', item }));
      }
    },
    sendAcceptQuest: (questId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: "accept_quest", questId }));
      }
    },
    clearDialogueTrigger: () => set({ dialogueTrigger: null }),
    sendDialogueChoice: (npcId: string, choiceId: string) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: "interact_npc", npcId, choiceId }));
      }
    },
    clearDialogueTree: () => set({ dialogueTree: null }),
    sendCraftRecipe: (recipeId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'craft_recipe', recipeId }));
      }
    },
    sendBuyItem: (itemId, price) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'buy_item', itemId, price }));
      }
    },
    sendGatherNode: (nodeId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'gather_node', nodeId }));
      }
    },
    sendUseItem: (instanceId) => {
      if (sharedWs && sharedWs.readyState === WebSocket.OPEN) {
        sharedWs.send(JSON.stringify({ type: 'use_item', instanceId }));
      }
    }
  };
});

let isInitialized = false;

export const initMultiplayer = () => {
  if (isInitialized || !authToken) return;
  isInitialized = true;

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const defaultWsUrl = window.location.hostname === 'localhost' ? 'ws://localhost:2567' : `${protocol}//${window.location.host}`;
  const wsUrl = import.meta.env.VITE_WS_URL || defaultWsUrl;
  sharedWs = new WebSocket(wsUrl);
  sharedWs.onopen = () => {
    console.log('Connected to server');
    sharedWs?.send(JSON.stringify({ type: 'join', token: authToken, color: '#00ff88' }));
  };
  sharedWs.onclose = () => {
    console.log('Disconnected from server');
    isInitialized = false;
  };

  sharedWs.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const set = useMultiplayerStore.setState;

    if (data.type === 'init') {
      const mappedPlayers = (data.players || []).map((p: any) => ({ id: p.sessionId, ...p }));
      
      let pClass = null, pLevel = 1, pSkillPoints = 0, pUnlocked = [], pInv = [], pCurrency = 0;
      const localPlayer = mappedPlayers.find((p: any) => p.id === data.sessionId);
      if (localPlayer) {
        pClass = localPlayer.playerClass || null;
        pLevel = localPlayer.level || 1;
        pSkillPoints = localPlayer.skillPoints || 0;
        pUnlocked = localPlayer.unlockedSkills || [];
        pInv = localPlayer.inventory || [];
        pCurrency = localPlayer.currency || 0;
      }

      // Init transient store
      mappedPlayers.forEach((p: any) => updateTransientPlayer(p.id, p.x, p.y, p.z));
      (data.npcs || []).forEach((n: any) => updateTransientNpc(n.id, n.x, n.y, n.z));
      (data.bosses || []).forEach((b: any) => updateTransientBoss(b.id, b.x, b.y, b.z));

      set({
        sessionId: data.sessionId,
        players: mappedPlayers,
        playerClass: pClass,
        level: pLevel,
        skillPoints: pSkillPoints,
        unlockedSkills: pUnlocked,
        inventory: pInv,
        currency: pCurrency,
        resourceNodes: data.resourceNodes || [],
        worldObjects: data.worldObjects || data.objects || [],
        worldNpcs: data.npcs || [],
        bosses: data.bosses || [],
        ...(data.combo !== undefined ? { combo: data.combo } : {}),
        ...(data.health !== undefined ? { health: data.health } : {})
      });
    } else if (data.type === 'join') {
      updateTransientPlayer(data.sessionId, data.player.x, data.player.y, data.player.z);
      set((state) => ({ players: [...state.players, { id: data.sessionId, ...data.player }] }));
    } else if (data.type === 'leave') {
      set((state) => ({ players: state.players.filter((p) => p.id !== data.sessionId) }));
    } else if (data.type === 'move') {
      const currentState = useMultiplayerStore.getState();
      if (data.sessionId === currentState.sessionId && data.seq) {
        // CSP Reconciliation
        // Server confirmed a move at sequence `seq`
        const ackSeq = data.seq;
        // @ts-ignore
        useMultiplayerStore.setState((state: any) => {
          return { 
            pendingMoves: state.pendingMoves.filter((m: any) => m.seq > ackSeq) 
          };
        });
        
        // Re-apply remaining unacknowledged moves on top of server state
        let finalX = data.position.x;
        let finalY = data.position.y;
        let finalZ = data.position.z;
        
        const remainingMoves = useMultiplayerStore.getState().pendingMoves;
        for (const m of remainingMoves) {
          finalX = m.x; finalY = m.y; finalZ = m.z;
        }
        
        updateTransientPlayer(data.sessionId, finalX, finalY, finalZ, data.serverTime);
      } else {
        updateTransientPlayer(data.sessionId, data.position.x, data.position.y, data.position.z, data.serverTime);
      }
      // DO NOT trigger React re-renders by mutating `players` array
    } else if (data.type === 'attack') {
      set((state) => ({
        players: state.players.map((p) =>
          p.id === data.sessionId ? { ...p, lastAttackTime: Date.now() } : p
        )
      }));
      window.dispatchEvent(new CustomEvent('remote_attack', { detail: data }));
    } else if (data.type === 'currency_updated') {
      set({ currency: data.currency });
    } else if (data.type === 'spawn_resource_node') {
      set((state) => ({ resourceNodes: [...state.resourceNodes, data.node] }));
    } else if (data.type === 'despawn_resource_node') {
      set((state) => ({ resourceNodes: state.resourceNodes.filter((n: any) => n.id !== data.nodeId) }));
    } else if (data.type === 'player_updated') {
      set((state) => ({
        players: state.players.map((p) =>
          p.id === data.sessionId ? { ...p, ...data.player } : p
        )
      }));
    } else if (data.type === 'class_selected') {
      set({ playerClass: data.classId });
    } else if (data.type === 'skill_unlocked') {
      set({ skillPoints: data.skillPoints, unlockedSkills: data.unlockedSkills });
    } else if (data.type === 'inventory_updated') {
      set({ inventory: data.inventory || [] });
    } else if (data.type === 'world_objects_update') {
      set({ worldObjects: data.worldObjects });
    } else if (data.type === 'object_added') {
      set((state) => ({ worldObjects: [...state.worldObjects, data.object] }));
    } else if (data.type === 'remove_object' || data.type === 'object_removed') {
      set((state) => ({ worldObjects: state.worldObjects.filter((o) => o.id !== data.id) }));
    } else if (data.type === 'npc_update') {
      set((state) => {
        const newNpcs = [...state.worldNpcs];
        (data.npcs || []).forEach((updatedNpc: any) => {
          const idx = newNpcs.findIndex((n) => n.id === updatedNpc.id);
          if (idx !== -1) newNpcs[idx] = { ...newNpcs[idx], ...updatedNpc };
          else newNpcs.push(updatedNpc);
        });
        return { worldNpcs: newNpcs };
      });
    } else if (data.type === 'npc_spawned') {
      set((state) => ({ worldNpcs: [...state.worldNpcs, data.npc] }));
    } else if (data.type === 'npc_despawned') {
      set((state) => ({ worldNpcs: state.worldNpcs.filter(n => n.id !== data.npcId) }));
    } else if (data.type === "boss_update") {
      set({ bosses: data.bosses || [] });
    } else if (data.type === "boss_spawned") {
      set((state) => {
        const exists = state.bosses.find(b => b.id === data.boss.id);
        if (exists) return { bosses: state.bosses };
        return { bosses: [...state.bosses, data.boss] };
      });
    } else if (data.type === "boss_phase_transition") {
      console.log(`Boss Phase Transition: ${data.title}`);
    } else if (data.type === "boss_defeated") {
      set((state) => ({ bosses: state.bosses.filter(b => b.id !== data.bossId) }));
    } else if (data.type === 'combat_update') {
      set(() => ({
        ...(data.combo !== undefined ? { combo: data.combo } : {}),
        ...(data.health !== undefined ? { health: data.health } : {})
      }));
    } else if (data.type === 'quest_update') {
      set({ activeQuests: data.quests || [] });
    } else if (data.type === 'npc_dialogue') {
      set({ dialogueTrigger: { npcName: data.npcId, text: data.text, timestamp: Date.now() } });
    } else if (data.type === 'npc_dialogue_tree') {
      set({ dialogueTree: { npcId: data.npcId, text: data.text, choices: data.choices, timestamp: Date.now() } });
    } else if (data.type === 'world_time_update') {
      set({ worldTime: data.time });
    }
  };
};
