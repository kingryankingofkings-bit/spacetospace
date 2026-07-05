import { useEffect, useState, useRef } from 'react';

let sharedWs: WebSocket | null = null;
let subscribers: ((event: MessageEvent) => void)[] = [];

export const useMultiplayer = () => {
  const [players, setPlayers] = useState<any[]>([]);
  const [worldObjects, setWorldObjects] = useState<any[]>([]);
  const [terrainMods, setTerrainMods] = useState<any[]>([]);
  const [worldNpcs, setWorldNpcs] = useState<any[]>([]);
  const [bosses, setBosses] = useState<any[]>([]);
  const [combo, setCombo] = useState<number>(0);
  const [health, setHealth] = useState<number>(100);
  const [playerClass, setPlayerClass] = useState<string | null>(null);
  const [level, setLevel] = useState<number>(1);
  const [skillPoints, setSkillPoints] = useState<number>(0);
  const [unlockedSkills, setUnlockedSkills] = useState<string[]>([]);
  const [inventory, setInventory] = useState<any[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    if (!sharedWs) {
      const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:2567';
      sharedWs = new WebSocket(wsUrl);
      sharedWs.onopen = () => console.log('Connected to server');
      sharedWs.onclose = () => console.log('Disconnected from server');
      sharedWs.onmessage = (e) => {
        subscribers.forEach(sub => sub(e));
      };
    }
    wsRef.current = sharedWs;

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.type === 'init') {
        setSessionId(data.sessionId);
        const mappedPlayers = (data.players || []).map((p: any) => ({ id: p[0], ...p[1] }));
        setPlayers(mappedPlayers);
        
        const localPlayer = mappedPlayers.find((p: any) => p.id === data.sessionId);
        if (localPlayer) {
          setPlayerClass(localPlayer.playerClass || null);
          setLevel(localPlayer.level || 1);
          setSkillPoints(localPlayer.skillPoints || 0);
          setUnlockedSkills(localPlayer.unlockedSkills || []);
          setInventory(localPlayer.inventory || []);
        }

        setWorldObjects(data.worldObjects || data.objects || []);
        setTerrainMods(data.terrainMods || data.terrain || []);
        setWorldNpcs(data.npcs || []);
        setBosses(data.bosses || []);
        if (data.combo !== undefined) setCombo(data.combo);
        if (data.health !== undefined) setHealth(data.health);
      } else if (data.type === 'join') {
        setPlayers((prev) => [...prev, { id: data.sessionId, ...data.player }]);
      } else if (data.type === 'leave') {
        setPlayers((prev) => prev.filter((p) => p.id !== data.sessionId));
      } else if (data.type === 'move') {
        setPlayers((prev) =>
          prev.map((p) =>
            p.id === data.sessionId ? { id: data.sessionId, ...data.position } : p
          )
        );
      } else if (data.type === 'player_updated') {
        setPlayers((prev) =>
          prev.map((p) =>
            p.id === data.sessionId ? { id: data.sessionId, ...data.player } : p
          )
        );
      } else if (data.type === 'class_selected') {
        setPlayerClass(data.classId);
      } else if (data.type === 'skill_unlocked') {
        setSkillPoints(data.skillPoints);
        setUnlockedSkills(data.unlockedSkills);
      } else if (data.type === 'inventory_updated') {
        setInventory(data.inventory || []);
      } else if (data.type === 'world_objects_update') {
        setWorldObjects(data.worldObjects);
      } else if (data.type === 'object_added') {
        setWorldObjects((prev) => [...prev, data.object]);
      } else if (data.type === 'remove_object' || data.type === 'object_removed') {
        setWorldObjects((prev) => prev.filter((o) => o.id !== data.id));
      } else if (data.type === 'terrain_mods_update') {
        setTerrainMods(data.terrainMods);
      } else if (data.type === 'terraform') {
        setTerrainMods((prev) => [...prev, data.terrain]);
      } else if (data.type === 'npc_update') {
        setWorldNpcs(data.npcs || []);
      } else if (data.type === "boss_update") {
        setBosses(data.bosses || []);
      } else if (data.type === "boss_spawned") {
        setBosses(prev => {
          const exists = prev.find(b => b.id === data.boss.id);
          if (exists) return prev;
          return [...prev, data.boss];
        });
      } else if (data.type === "boss_phase_transition") {
        console.log(`Boss Phase Transition: ${data.title}`);
      } else if (data.type === "boss_defeated") {
        setBosses(prev => prev.filter(b => b.id !== data.bossId));
      } else if (data.type === 'combat_update') {
        if (data.combo !== undefined) setCombo(data.combo);
        if (data.health !== undefined) setHealth(data.health);
      } else if (data.type === 'attack') {
        window.dispatchEvent(new CustomEvent('remote_attack', { detail: data }));
      }
    };

    subscribers.push(handleMessage);

    return () => {
      subscribers = subscribers.filter(s => s !== handleMessage);
      if (subscribers.length === 0 && sharedWs) {
        sharedWs.close();
        sharedWs = null;
      }
    };
  }, []);

  const sendMove = (x: number, y: number, z: number) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'move', x, y, z }));
    }
  };

  const sendPlaceObject = (type: string, x: number, y: number, z: number) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'place_object', object: { id: Math.random().toString(36).substr(2,9), type, x, y, z } }));
    }
  };

  const sendTerraform = (x: number, z: number, height: number) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'terraform', terrain: { x, z, height } }));
    }
  };

  const sendAttack = (targetId: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'attack', targetId }));
    }
  };

  const sendAbility = (abilityId: string, targetId?: string, x?: number, y?: number, z?: number) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'use_ability', abilityId, targetId, x, y, z }));
    }
  };

  const sendFastTravel = (zone: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'fast_travel', zone }));
    }
  };
  
  const selectClass = (classId: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'select_class', classId }));
    }
  };

  const unlockSkill = (skillId: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'unlock_skill', skillId }));
    }
  };

  const sendSpawnBoss = (bossType: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'spawn_boss', bossType }));
    }
  };

  const sendPickupLoot = (item: any) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'pickup_loot', item }));
    }
  };

  return { 
    players, sessionId, sendMove, sendPlaceObject, sendTerraform, sendAttack, sendAbility, sendFastTravel, sendSpawnBoss, sendPickupLoot,
    worldObjects, terrainMods, worldNpcs, bosses, combo, health,
    playerClass, level, skillPoints, unlockedSkills, inventory, selectClass, unlockSkill
  };
};
