const express = require("express");
const http = require("http");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const fs = require("fs");
const db = require("./db");
const authManager = require("./authManager");
const AgonesSDK = require('@google-cloud/agones-sdk');
const { spawnBoss, tickBosses, handleBossDamage, getBoss } = require("./bossController");
const { awardXP } = require("./progressionSystem");
const { ITEM_DB, getItemDef, generateLoot } = require("./lootSystem");
const { executeAbility } = require("./abilities/registry");
const initializeAbilities = require("./abilities/generatedAbilities");
const { applyDamage, handleDeath, StatusEffects } = require("./combatSystem");
const questManager = require("./questManager");
const specialEventsManager = require("./specialEventsManager");
const AiTelemetryMonitor = require("./aiMonitor");
const killSwitch = require("./killSwitch");
const companionData = require("./companionData");
const petData = require("./petData");


let agonesSDK = null;

const aiMonitor = new AiTelemetryMonitor(() => ({
  players: new Map(), npcs: [], spatialGrid: new Map()
}));
aiMonitor.startMonitoring();

const app = express();
app.use(cors());
app.use(express.json());

authManager.setupRoutes(app);

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const MAX_INVENTORY_SLOTS = 24;
const MAX_WEIGHT = 100.0;

const activeTrades = new Map();
const npcData = JSON.parse(fs.readFileSync('./npc_data.json', 'utf8'));

let npcs = npcData.map(n => ({
  ...n,
  state: 'IDLE',
  targetId: null,
  lastBroadcastX: n.x,
  lastBroadcastZ: n.z,
  statusEffects: [],
  nextWanderTime: 0,
  lastAttackTime: 0
}));

const activeCompanions = new Map(); // Key: sessionId, Value: companionObject
const activePets = new Map();       // Key: sessionId, Value: petObject

function getDistance(a, b) {
  const dx = (a.x || 0) - (b.x || 0);
  const dy = (a.y || 0) - (b.y || 0);
  const dz = (a.z || 0) - (b.z || 0);
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

const CELL_SIZE = 50;

function getSpatialKey(zone, x, z) {
  const parsedX = parseFloat(x);
  const parsedZ = parseFloat(z);
  const cX = isNaN(parsedX) ? 0 : Math.floor(parsedX / CELL_SIZE);
  const cZ = isNaN(parsedZ) ? 0 : Math.floor(parsedZ / CELL_SIZE);
  return `${zone}:${cX},${cZ}`;
}

async function updatePlayerSpatial(player) {
  const newCell = getSpatialKey(player.zone, player.x || 0, player.z || 0);
  if (player.cell !== newCell) {
    if (player.cell) {
      await db.redisClient.sRem(`spatial:${player.cell}`, player.sessionId);
      const count = await db.redisClient.sCard(`spatial:${player.cell}`);
      if (count === 0) await db.redisClient.sRem('active_chunks', player.cell);
    }
    await db.redisClient.sAdd(`spatial:${newCell}`, player.sessionId);
    await db.redisClient.sAdd('active_chunks', newCell);
    player.cell = newCell;
    await db.redisClient.hSet('active_players', player.sessionId, JSON.stringify(player));
  }
}

async function removePlayerSpatial(player) {
  if (player && player.cell) {
    await db.redisClient.sRem(`spatial:${player.cell}`, player.sessionId);
    const count = await db.redisClient.sCard(`spatial:${player.cell}`);
    if (count === 0) await db.redisClient.sRem('active_chunks', player.cell);
  }
  if (player && player.sessionId) {
    await db.redisClient.hDel('active_players', player.sessionId);
  }
}

async function getPlayersInInterestArea(zone, x, z) {
  const cx = isNaN(parseFloat(x)) ? 0 : Math.floor(parseFloat(x) / CELL_SIZE);
  const cz = isNaN(parseFloat(z)) ? 0 : Math.floor(parseFloat(z) / CELL_SIZE);
  const sessionIds = new Set();
  
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      const cell = `${zone}:${cx + dx},${cz + dz}`;
      const ids = await db.redisClient.sMembers(`spatial:${cell}`);
      ids.forEach(id => sessionIds.add(id));
    }
  }
  
  const result = [];
  if (sessionIds.size > 0) {
    const playersData = await db.redisClient.hmGet('active_players', Array.from(sessionIds));
    playersData.forEach(p => {
      if (p) result.push(JSON.parse(p));
    });
  }
  return result;
}

// Pub/Sub Broadcast
const pubSubClient = db.redisClient.duplicate();
pubSubClient.connect().then(() => {
  pubSubClient.subscribe('game_broadcast', (message) => {
    const { data, zone, x, z } = JSON.parse(message);
    const msgStr = JSON.stringify(data);
    wss.clients.forEach(client => {
      if (client.readyState === 1) client.send(msgStr);
    });
  });
});

function broadcast(data, excludeWs = null, zone = null, x = null, z = null) {
  db.redisClient.publish('game_broadcast', JSON.stringify({ data, zone, x, z }));
}

function broadcastSpatial(cell, data) {
  db.redisClient.publish('game_broadcast', JSON.stringify({ data, cell }));
}

async function updateAgonesPlayerCount() {
  if (agonesSDK) {
    try {
      const count = await db.redisClient.hLen('active_players');
      await agonesSDK.setLabel('players', count.toString());
    } catch(e) {
      console.error('Error setting Agones label:', e);
    }
  }
}

setInterval(async () => {
  aiMonitor.recordTick();
  
  const activeCells = await db.redisClient.sMembers('active_chunks');
  const sessionIdsToFetch = new Set();
  
  if (activeCells.length > 0) {
    const multi = db.redisClient.multi();
    for (const cell of activeCells) {
      multi.sMembers(`spatial:${cell}`);
    }
    const results = await multi.exec();
    results.forEach(ids => {
      if (ids) ids.forEach(id => sessionIdsToFetch.add(id));
    });
  }

  for (const sessionId of activePets.keys()) sessionIdsToFetch.add(sessionId);
  for (const sessionId of activeCompanions.keys()) sessionIdsToFetch.add(sessionId);

  if (sessionIdsToFetch.size === 0) return;

  const sessionIdsArray = Array.from(sessionIdsToFetch);
  const playersData = await db.redisClient.hmGet('active_players', sessionIdsArray);
  const players = new Map();
  sessionIdsArray.forEach((id, i) => {
    if (playersData[i]) {
      players.set(id, JSON.parse(playersData[i]));
    }
  });
  
  const playersByCell = {};
  for (const player of players.values()) {
    const cell = player.cell || getSpatialKey(player.zone, player.x, player.z);
    if (!playersByCell[cell]) playersByCell[cell] = [];
    playersByCell[cell].push(player);
  }

  const activeZones = new Set([...players.values()].map(p => p.zone));
  const movedNpcsByCell = {};
  const movedCompanionsByCell = {};
  const movedPetsByCell = {};
  const now = Date.now();

  // Pet AI Loop
  for (const [sessionId, pet] of activePets.entries()) {
    const player = players.get(sessionId);
    if (!player) {
      activePets.delete(sessionId);
      continue;
    }

    const distToPlayer = getDistance(pet, player);
    const timeSinceCombat = now - (player.lastCombatTime || 0);
    const inCombat = timeSinceCombat < 5000;

    if (inCombat) {
      pet.state = 'FLEEING';
      // Flee away from player
      if (distToPlayer < 50) {
        const dirX = (pet.x - player.x) / (distToPlayer || 1);
        const dirZ = (pet.z - player.z) / (distToPlayer || 1);
        pet.x += dirX * 30 * 0.1; // Flee speed
        pet.z += dirZ * 30 * 0.1;
      }
    } else {
      pet.state = 'FOLLOWING';
      // Follow closely
      if (distToPlayer > 100) {
        pet.x = player.x;
        pet.y = player.y;
        pet.z = player.z;
      } else if (distToPlayer > 5) {
        const dirX = (player.x - pet.x) / distToPlayer;
        const dirZ = (player.z - pet.z) / distToPlayer;
        pet.x += dirX * 20 * 0.1; 
        pet.z += dirZ * 20 * 0.1;
      }
    }
    pet.zone = player.zone;
    
    const cell = getSpatialKey(pet.zone, pet.x, pet.z);
    if (!movedPetsByCell[cell]) movedPetsByCell[cell] = [];
    movedPetsByCell[cell].push(pet);
  }

  // Companion AI Loop
  for (const [sessionId, companion] of activeCompanions.entries()) {
    const player = players.get(sessionId);
    if (!player) {
      activeCompanions.delete(sessionId);
      continue;
    }
    
    // Companion follows player loosely
    const distToPlayer = getDistance(companion, player);
    if (distToPlayer > 100) {
      // Teleport if too far
      companion.x = player.x;
      companion.y = player.y;
      companion.z = player.z;
    } else if (distToPlayer > 10) {
      // Move towards player
      const dirX = (player.x - companion.x) / distToPlayer;
      const dirZ = (player.z - companion.z) / distToPlayer;
      companion.x += dirX * 15 * 0.1; // 15 speed * dt
      companion.z += dirZ * 15 * 0.1;
    }
    companion.zone = player.zone;
    
    // Combat: attack player's target if in range
    if (companion.targetId && now - (companion.lastAttackTime || 0) > 2000) {
      const targetNpc = npcs.find(n => n.id === companion.targetId);
      if (targetNpc && targetNpc.health > 0 && getDistance(companion, targetNpc) < 20) {
        companion.lastAttackTime = now;
        applyDamage(targetNpc, companion.level * 15, broadcast, companion.id);
        if (targetNpc.health <= 0) {
          companion.targetId = null;
        }
      } else {
        companion.targetId = null; // reset if out of range or dead
      }
    }

    const cell = getSpatialKey(companion.zone, companion.x, companion.z);
    if (!movedCompanionsByCell[cell]) movedCompanionsByCell[cell] = [];
    movedCompanionsByCell[cell].push(companion);
  }

  npcs.forEach(npc => {
    if (!activeZones.has(npc.zone)) return;

    let moved = false;
    let stateChanged = false;
    let isStunned = false;

    if (npc.statusEffects) {
      for (let i = npc.statusEffects.length - 1; i >= 0; i--) {
        const effect = npc.statusEffects[i];
        if (now > effect.endTime) {
          npc.statusEffects.splice(i, 1);
        } else {
          if (effect.type === StatusEffects.STUN) isStunned = true;
          if (effect.type === StatusEffects.DOT && now - (effect.lastTick || 0) > 1000) {
            const targetHp = applyDamage(npc, effect.amount, 0, true, false);
            effect.lastTick = now;
            if (targetHp <= 0) {
               handleDeath(npc, true);
               moved = true;
            }
          }
        }
      }
    }
    
    if (isStunned) return;

    let closestPlayer = null;
    let minDistance = Infinity;
    
    const cx = isNaN(parseFloat(npc.x)) ? 0 : Math.floor(parseFloat(npc.x) / CELL_SIZE);
    const cz = isNaN(parseFloat(npc.z)) ? 0 : Math.floor(parseFloat(npc.z) / CELL_SIZE);
    
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const cell = `${npc.zone}:${cx + dx},${cz + dz}`;
        const cellPlayers = playersByCell[cell];
        if (cellPlayers) {
          for (const player of cellPlayers) {
            const dist = getDistance(npc, player);
            if (dist < minDistance) {
              minDistance = dist;
              closestPlayer = player;
            }
          }
        }
      }
    }

    const prevState = npc.state;

    if (closestPlayer && minDistance < 15) {
      if (minDistance < 2) {
        npc.state = 'ATTACK';
        if (now - (npc.lastAttackTime || 0) > 2000) {
          const hp = applyDamage(closestPlayer, 10, 0, false, false);
          if (hp <= 0) handleDeath(closestPlayer, false);
          
          closestPlayer.lastCombatTime = now;
          db.redisClient.hSet('active_players', closestPlayer.sessionId, JSON.stringify(closestPlayer)).catch(console.error);

          broadcast({ type: "combat_update", targetId: closestPlayer.sessionId, attackerId: npc.id, targetHealth: hp }, null, npc.zone, npc.x, npc.z);
          broadcast({ type: "attack", sessionId: npc.id, targetId: closestPlayer.sessionId }, null, npc.zone, npc.x, npc.z);
          npc.lastAttackTime = now;
        }
      } else {
        npc.state = 'CHASE';
        const dx = closestPlayer.x - npc.x;
        const dz = closestPlayer.z - npc.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        npc.x += (dx / dist) * 0.5;
        npc.z += (dz / dist) * 0.5;
        moved = true;
      }
    } else {
      if (!npc.nextWanderTime || now > npc.nextWanderTime) {
        npc.state = 'WANDER';
        npc.wanderTargetX = npc.x + (Math.random() - 0.5) * 10;
        npc.wanderTargetZ = npc.z + (Math.random() - 0.5) * 10;
        npc.nextWanderTime = now + 3000 + Math.random() * 4000;
      }
      
      if (npc.state === 'WANDER') {
        const dx = npc.wanderTargetX - npc.x;
        const dz = npc.wanderTargetZ - npc.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.5) {
          npc.x += (dx / dist) * 0.2;
          npc.z += (dz / dist) * 0.2;
          moved = true;
        } else {
          npc.state = 'IDLE';
        }
      }
    }

    if (prevState !== npc.state) stateChanged = true;

    const distSinceLastBroadcast = Math.sqrt(Math.pow(npc.x - npc.lastBroadcastX, 2) + Math.pow(npc.z - npc.lastBroadcastZ, 2));
    if (stateChanged || distSinceLastBroadcast > 2.0 || (moved && npc.state === 'WANDER' && distSinceLastBroadcast > 1.0)) {
      const cell = getSpatialKey(npc.zone, npc.x, npc.z);
      if (!movedNpcsByCell[cell]) movedNpcsByCell[cell] = [];
      movedNpcsByCell[cell].push({ 
        id: npc.id, x: Number(npc.x.toFixed(2)), y: Number(npc.y.toFixed(2)), z: Number(npc.z.toFixed(2)), 
        hp: npc.hp, modelFile: npc.modelFile, zone: npc.zone, state: npc.state 
      });
      npc.lastBroadcastX = npc.x;
      npc.lastBroadcastZ = npc.z;
    }
  });

  for (const player of players.values()) {
    if (player.combo > 0 && player.lastAttackTime && (now - player.lastAttackTime > 3000)) {
      player.combo = 0;
      broadcast({ type: "move", sessionId: player.id || player.sessionId, position: { x: player.x, y: player.y, z: player.z, id: player.sessionId || player.id } }, null, player.zone, player.x, player.z);
    }
  }

  for (const cell in movedNpcsByCell) {
    broadcastSpatial(cell, { type: "npc_update", npcs: movedNpcsByCell[cell] });
  }

  for (const cell in movedCompanionsByCell) {
    broadcastSpatial(cell, { type: "companion_update", companions: movedCompanionsByCell[cell] });
  }

  for (const cell in movedPetsByCell) {
    broadcastSpatial(cell, { type: "pet_update", pets: movedPetsByCell[cell] });
  }

  tickBosses(players, broadcast);
}, 100);

wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    try {
      const data = JSON.parse(message);
      
      if (data.type === "trigger_special_event") {
        if (!ws.sessionId) return;
        const result = specialEventsManager.triggerEvent(ws.sessionId, data.sublocation);
        ws.send(JSON.stringify({ type: "special_event_trigger_result", result }));
        return;
      }
      
      if (data.type === "complete_special_event") {
        if (!ws.sessionId) return;
        const result = specialEventsManager.completeEvent(ws.sessionId, data.eventId);
        ws.send(JSON.stringify({ type: "special_event_complete_result", result }));
        return;
      }

      if (data.type === "join") {
        try {
          const decoded = authManager.verifyToken(data.token);
          const sessionId = decoded.username;
          ws.sessionId = sessionId;
          
          const position = await db.getUser(sessionId);
          if (data.color) position.color = data.color;
          if (data.health !== undefined) position.health = data.health;
          if (!position.zone) position.zone = "urban_core";
          position.sessionId = sessionId;
          position.statusEffects = position.statusEffects || [];
          
          await db.redisClient.hSet('active_players', sessionId, JSON.stringify(position));
          await updatePlayerSpatial(position);
          updateAgonesPlayerCount();
          
          ws.send(JSON.stringify({ 
            type: "init", 
            sessionId, 
            players: await getPlayersInInterestArea(position.zone, position.x || 0, position.z || 0),
            objects: await db.getObjects(),
            terrain: await db.getTerrain(),
            npcs: npcs.filter(n => n.zone === position.zone && getDistance(n, position) < CELL_SIZE * 2)
          }));
          
          if (position.activeCompanion) {
            const compDef = companionData.getCompanion(position.activeCompanion);
            if (compDef) {
              activeCompanions.set(sessionId, {
                ...compDef,
                sessionId,
                x: position.x || 0, y: position.y || 0, z: position.z || 0,
                zone: position.zone, targetId: null, lastAttackTime: 0
              });
            }
          }
          
          if (position.activePet) {
            const petDef = petData.getPet(position.activePet);
            if (petDef) {
              activePets.set(sessionId, {
                ...petDef,
                sessionId,
                x: position.x || 0, y: position.y || 0, z: position.z || 0,
                zone: position.zone, state: 'FOLLOWING'
              });
            }
          }
          
          broadcast({ type: "join", sessionId, player: position }, ws, position.zone, position.x || 0, position.z || 0);
          ws.send(JSON.stringify({ type: "quest_update", quests: position.quests || [] }));
        } catch (err) {
          ws.send(JSON.stringify({ type: "error", message: "Unauthorized" }));
          ws.close();
        }
      }
      else if (data.type === "summon_companion") {
        const sessionId = ws.sessionId;
        if (!sessionId) return;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          if (player.unlockedCompanions && player.unlockedCompanions.includes(data.companionId)) {
            player.activeCompanion = data.companionId;
            await db.saveUser(sessionId, player);
            const compDef = companionData.getCompanion(data.companionId);
            if (compDef) {
              activeCompanions.set(sessionId, {
                ...compDef,
                sessionId,
                x: player.x, y: player.y, z: player.z,
                zone: player.zone, targetId: null, lastAttackTime: 0
              });
              broadcastSpatial(player.cell, { type: "companion_summoned", sessionId, companion: activeCompanions.get(sessionId) });
            }
          }
        }
      }
      else if (data.type === "accept_quest") {
        questManager.addQuest(ws.sessionId, data.questId);
      }
      else if (data.type === "fast_travel") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
           const player = JSON.parse(playerStr);
           const oldZone = player.zone;
           const oldX = player.x || 0;
           const oldZ = player.z || 0;
           player.zone = data.zone;
           player.x = 0; player.y = 0; player.z = 0;
           await updatePlayerSpatial(player);
           
           broadcast({ type: "leave", sessionId }, null, oldZone, oldX, oldZ);
           
           if (activeCompanions.has(sessionId)) {
             const comp = activeCompanions.get(sessionId);
             comp.zone = data.zone;
             comp.x = 0; comp.y = 0; comp.z = 0;
           }
           
           if (activePets.has(sessionId)) {
             const pet = activePets.get(sessionId);
             pet.zone = data.zone;
             pet.x = 0; pet.y = 0; pet.z = 0;
           }
           
           ws.send(JSON.stringify({
             type: "init",
             sessionId,
             players: await getPlayersInInterestArea(player.zone, player.x, player.z),
             objects: await db.getObjects(),
             terrain: await db.getTerrain(),
             npcs: npcs.filter(n => n.zone === player.zone && getDistance(n, player) < CELL_SIZE * 2)
           }));
           broadcast({ type: "join", sessionId, player }, ws, player.zone, player.x, player.z);
           questManager.onZoneChange(ws.sessionId, data.zone);
        }
      }
      else if (data.type === "move") {
        const sessionId = ws.sessionId;
        if (!sessionId) return;
        
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          
          const now = Date.now();
          const dt = (now - (player.lastMoveTime || now)) / 1000;
          player.lastMoveTime = now;
          
          const maxSpeed = 50;
          const allowedDist = Math.max(maxSpeed * dt, 5.0);
          const proposedPos = { x: parseFloat(data.x ?? player.x), y: parseFloat(data.y ?? player.y), z: parseFloat(data.z ?? player.z) };
          
          if (isNaN(proposedPos.x) || isNaN(proposedPos.y) || isNaN(proposedPos.z)) return;

          if (getDistance(player, proposedPos) > allowedDist) {
            ws.send(JSON.stringify({ type: "reconcile", position: player }));
            return;
          }

          player.x = proposedPos.x;
          player.y = proposedPos.y;
          player.z = proposedPos.z;
          player.color = data.color ?? player.color;
          // anti-cheat: dropped health spoof
          player.sessionId = sessionId;
          await updatePlayerSpatial(player);
          broadcast({ type: "move", sessionId, position: { x: player.x, y: player.y, z: player.z, id: sessionId } }, ws, player.zone, player.x, player.z);
        }
      }
      else if (data.type === "select_class") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          player.playerClass = data.classId;
          ws.send(JSON.stringify({ type: "class_selected", classId: data.classId }));
          await db.saveUser(sessionId, player);
          await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
          broadcast({ type: "player_updated", sessionId, player }, ws, player.zone, player.x, player.z);
        }
      }
      else if (data.type === "unlock_skill") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          if (player.skillPoints > 0) {
            const skillId = data.skillId;
            if (!player.unlockedSkills.includes(skillId)) {
              player.unlockedSkills.push(skillId);
              player.skillPoints -= 1;
              ws.send(JSON.stringify({ 
                type: "skill_unlocked", 
                skillId,
                skillPoints: player.skillPoints,
                unlockedSkills: player.unlockedSkills
              }));
              await db.saveUser(sessionId, player);
              await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
              broadcast({ type: "player_updated", sessionId, player }, ws, player.zone, player.x, player.z);
            }
          }
        }
      }
      else if (data.type === "place_object") {
        const obj = data.object || data;
        await db.saveObject(obj);
        broadcast(data);
      }
      else if (data.type === "pickup_loot") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (!playerStr || !data.item || !data.item.id) return;
        const player = JSON.parse(playerStr);
        
        const worldObjId = data.item.id;
        const worldObj = await db.getObject(worldObjId);
        
        if (!worldObj) {
           ws.send(JSON.stringify({ type: "error", message: "Item does not exist or already picked up." }));
           return;
        }

        const dist = getDistance(player, worldObj);
        if (dist > 10) {
           ws.send(JSON.stringify({ type: "error", message: "Too far to pick up." }));
           return;
        }

        const itemType = worldObj.type;
        const def = getItemDef(itemType);
        
        if (!player.inventory) player.inventory = [];
        
        let currentWeight = 0;
        player.inventory.forEach(i => {
           currentWeight += (getItemDef(i.itemId).weight * i.quantity);
        });
        
        if (currentWeight + def.weight > MAX_WEIGHT) {
           ws.send(JSON.stringify({ type: "error", message: "Inventory too heavy." }));
           return;
        }

        let added = false;
        if (def.maxStack > 1) {
           const existingSlot = player.inventory.find(i => i.itemId === itemType && i.quantity < def.maxStack);
           if (existingSlot) {
              const space = def.maxStack - existingSlot.quantity;
              if (space >= 1) {
                 existingSlot.quantity += 1;
                 added = true;
              }
           }
        }
        
        if (!added) {
           let emptySlot = -1;
           const occupiedSlots = new Set(player.inventory.map(i => i.slot));
           for (let i = 0; i < MAX_INVENTORY_SLOTS; i++) {
              if (!occupiedSlots.has(i)) {
                 emptySlot = i;
                 break;
              }
           }
           
           if (emptySlot === -1) {
              ws.send(JSON.stringify({ type: "error", message: "Inventory full." }));
              return;
           }
           
           player.inventory.push({
              instanceId: Math.random().toString(36).substring(2, 15),
              itemId: itemType,
              quantity: 1,
              slot: emptySlot
           });
        }
        
        await db.deleteObject(worldObjId);
        await db.saveInventory(sessionId, player.inventory);
        await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
        broadcast({ type: "remove_object", objectId: worldObjId });
        
        ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
      }
      else if (data.type === "drop_item") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (!playerStr) return;
        const player = JSON.parse(playerStr);

        const { instanceId, quantity } = data;
        if (quantity < 1) return; // exploit fix
        
        const index = player.inventory.findIndex(i => i.instanceId === instanceId);
        if (index === -1) {
           ws.send(JSON.stringify({ type: "error", message: "Item not found in inventory." }));
           return;
        }
        
        const item = player.inventory[index];
        const dropQty = Math.min(quantity || 1, item.quantity);
        
        item.quantity -= dropQty;
        if (item.quantity <= 0) {
           player.inventory.splice(index, 1);
        }
        
        await db.saveInventory(sessionId, player.inventory);
        await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
        ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
        
        const MAX_DROPS = 100;
        const actualDrops = Math.min(dropQty, MAX_DROPS);
        for (let i = 0; i < actualDrops; i++) {
           const objId = "drop_" + Math.random().toString(36).substring(2, 15);
           const newObj = {
              id: objId,
              type: item.itemId,
              x: player.x + (Math.random() - 0.5) * 2,
              y: player.y,
              z: player.z + (Math.random() - 0.5) * 2
           };
           await db.saveObject(newObj);
           broadcast({ type: "place_object", object: newObj });
        }
      }
      else if (data.type === "trade_request") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        const targetStr = await db.redisClient.hGet('active_players', data.targetId);
        if (!playerStr || !targetStr) return;
        const player = JSON.parse(playerStr);
        const target = JSON.parse(targetStr);
        
        if (getDistance(player, target) > 10) {
           ws.send(JSON.stringify({ type: "error", message: "Target is too far away." }));
           return;
        }
        
        const tradeId = "trade_" + Math.random().toString(36).substring(2, 15);
        activeTrades.set(tradeId, {
           initiator: sessionId,
           target: data.targetId,
           initItems: [],
           targetItems: [],
           initAccepted: false,
           targetAccepted: false
        });
        
        broadcast({ type: "trade_request", tradeId, initiator: sessionId }, null, player.zone, player.x, player.z);
      }
      else if (data.type === "trade_update") {
         const sessionId = ws.sessionId;
         const trade = activeTrades.get(data.tradeId);
         if (!trade) return;
         
         const cleanItems = (data.items || []).filter(i => i.quantity > 0);
         
         if (trade.initiator === sessionId) {
            trade.initItems = cleanItems;
            trade.initAccepted = false;
            trade.targetAccepted = false;
         } else if (trade.target === sessionId) {
            trade.targetItems = cleanItems;
            trade.initAccepted = false;
            trade.targetAccepted = false;
         }
         
         const msg = JSON.stringify({ type: "trade_updated", tradeId: data.tradeId, trade });
         wss.clients.forEach(client => {
            if (client.sessionId === trade.initiator || client.sessionId === trade.target) {
               client.send(msg);
            }
         });
      }
      else if (data.type === "trade_accept") {
         const sessionId = ws.sessionId;
         const trade = activeTrades.get(data.tradeId);
         if (!trade) return;
         
         if (trade.initiator === sessionId) trade.initAccepted = true;
         if (trade.target === sessionId) trade.targetAccepted = true;
         
         if (trade.initAccepted && trade.targetAccepted) {
            const p1Str = await db.redisClient.hGet('active_players', trade.initiator);
            const p2Str = await db.redisClient.hGet('active_players', trade.target);
            if (!p1Str || !p2Str) return;
            const p1 = JSON.parse(p1Str);
            const p2 = JSON.parse(p2Str);
            
            const validateItems = (player, tradeItems) => {
               for (const ti of tradeItems) {
                  const item = player.inventory.find(i => i.instanceId === ti.instanceId);
                  if (!item || item.quantity < ti.quantity || ti.quantity < 1) return false;
               }
               return true;
            };
            
            if (!validateItems(p1, trade.initItems) || !validateItems(p2, trade.targetItems)) {
               activeTrades.delete(data.tradeId);
               const msg = JSON.stringify({ type: "error", message: "Trade failed: invalid items." });
               wss.clients.forEach(c => {
                 if (c.sessionId === trade.initiator || c.sessionId === trade.target) c.send(msg);
               });
               return;
            }
            
            const processTradeItems = (fromPlayer, toPlayer, tradeItems) => {
               for (const ti of tradeItems) {
                  const index = fromPlayer.inventory.findIndex(i => i.instanceId === ti.instanceId);
                  const item = fromPlayer.inventory[index];
                  
                  item.quantity -= ti.quantity;
                  if (item.quantity <= 0) {
                     fromPlayer.inventory.splice(index, 1);
                  }
                  
                  const def = getItemDef(item.itemId);
                  let added = false;
                  if (def.maxStack > 1) {
                     const existingSlot = toPlayer.inventory.find(i => i.itemId === item.itemId && i.quantity < def.maxStack);
                     if (existingSlot && existingSlot.quantity + ti.quantity <= def.maxStack) {
                        existingSlot.quantity += ti.quantity;
                        added = true;
                     }
                  }
                  if (!added) {
                     let emptySlot = -1;
                     const occupiedSlots = new Set(toPlayer.inventory.map(i => i.slot));
                     for (let s = 0; s < MAX_INVENTORY_SLOTS; s++) {
                        if (!occupiedSlots.has(s)) {
                           emptySlot = s;
                           break;
                        }
                     }
                     if (emptySlot !== -1) {
                        toPlayer.inventory.push({
                           instanceId: Math.random().toString(36).substring(2, 15),
                           itemId: item.itemId,
                           quantity: ti.quantity,
                           slot: emptySlot
                        });
                     }
                  }
               }
            };
            
            processTradeItems(p1, p2, trade.initItems);
            processTradeItems(p2, p1, trade.targetItems);
            
            await db.saveInventory(p1.id, p1.inventory);
            await db.saveInventory(p2.id, p2.inventory);
            
            await db.redisClient.hSet('active_players', p1.id, JSON.stringify(p1));
            await db.redisClient.hSet('active_players', p2.id, JSON.stringify(p2));
            
            activeTrades.delete(data.tradeId);
            
            wss.clients.forEach(c => {
               if (c.sessionId === trade.initiator) c.send(JSON.stringify({ type: "inventory_updated", inventory: p1.inventory }));
               if (c.sessionId === trade.target) c.send(JSON.stringify({ type: "inventory_updated", inventory: p2.inventory }));
            });
         }
      }
      else if (data.type === "use_item") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (!playerStr) return;
        const player = JSON.parse(playerStr);
        
        const { instanceId } = data;
        const index = player.inventory.findIndex(i => i.instanceId === instanceId);
        
        if (index === -1) {
           ws.send(JSON.stringify({ type: "error", message: "Item not found." }));
           return;
        }
        
        const item = player.inventory[index];
        const featureId = 'item_' + item.itemId;

        if (killSwitch.isDisabled(featureId)) {
           ws.send(JSON.stringify({ type: "error", message: "Item temporarily disabled for maintenance." }));
           return;
        }
        
        try {
          if (item.itemId === 'potion_health') {
             player.health = Math.min(100, player.health + 25);
             ws.send(JSON.stringify({ type: "player_updated", health: player.health }));
             
             item.quantity -= 1;
             if (item.quantity <= 0) {
                player.inventory.splice(index, 1);
             }
             await db.saveInventory(sessionId, player.inventory);
             await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
             ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
          } else {
             ws.send(JSON.stringify({ type: "error", message: "Item cannot be used." }));
          }
        } catch (e) {
          killSwitch.disableFeature(featureId);
          ws.send(JSON.stringify({ type: "error", message: "Item encountered a fatal error and has been disabled." }));
        }
      }
      else if (data.type === "terraform") {
        const terrain = data.terrain || data;
        await db.saveTerrain(terrain);
        broadcast(data);
      }
      else if (data.type === "attack") {
        const attackerSessionId = ws.sessionId;
        const attackerStr = await db.redisClient.hGet('active_players', attackerSessionId);
        
        if (attackerStr) {
          const attacker = JSON.parse(attackerStr);
          const ATTACK_COOLDOWN_MS = 300; 
          
          const now = Date.now();
          if (attacker.lastAttackTime && now - attacker.lastAttackTime < ATTACK_COOLDOWN_MS) {
              ws.send(JSON.stringify({ type: "error", message: "Attacking too fast." }));
              return;
          }
          
          attacker.lastAttackTime = now;
          await db.redisClient.hSet('active_players', attackerSessionId, JSON.stringify(attacker));

          if (activeCompanions.has(attackerSessionId)) {
            activeCompanions.get(attackerSessionId).targetId = data.targetId; // Command companion to attack
          }

          const targetId = data.targetId;
          const isNpc = targetId && targetId.startsWith("npc_");
          const isBoss = targetId && targetId.startsWith("boss_");
          
          let target;
          if (isBoss) target = { isBoss: true, id: targetId, hp: 10000 }; 
          else if (isNpc) target = npcs.find(n => n.id === targetId);
          else {
            const tStr = await db.redisClient.hGet('active_players', targetId);
            if (tStr) target = JSON.parse(tStr);
          }

          if (target) {
            let dist = 0;
            if (!isBoss) {
              dist = getDistance(attacker, target);
            }
            
            if (dist < 15 || isBoss) {
              let damage = 10;
              const targetHp = applyDamage(target, damage, attacker.combo, isNpc, isBoss);
              if (!isBoss && targetHp <= 0) {
                 handleDeath(target, isNpc);
                 const xpRes = awardXP(attacker, target.modelFile, false, attacker.combo);
                 if (xpRes.leveledUp) {
                   ws.send(JSON.stringify({ type: "level_up", newLevel: xpRes.newLevel }));
                   broadcast({ type: "player_level_up", sessionId: attackerSessionId, newLevel: xpRes.newLevel }, ws, attacker.zone);
                 }
                 questManager.onEnemyDeath(attackerSessionId, target.modelFile, false);

                 if (isNpc) {
                   const droppedItemId = generateLoot(target.modelFile, false);
                   if (droppedItemId) {
                     const objId = "loot_" + Date.now() + "_" + Math.floor(Math.random()*1000);
                     const obj = { id: objId, type: droppedItemId, x: target.x, y: target.y || 0, z: target.z };
                     db.saveObject(obj).catch(e => console.error(e));
                     broadcast({ type: "spawn_object", object: obj }, null, attacker.zone, target.x, target.z);
                   }
                 }
              } else if (isBoss && targetHp <= 0) {
                 const actualBoss = getBoss(target.id);
                 const bossType = actualBoss ? actualBoss.type : "unknown";
                 const xpRes = awardXP(attacker, bossType, true, attacker.combo);
                 if (xpRes.leveledUp) {
                   ws.send(JSON.stringify({ type: "level_up", newLevel: xpRes.newLevel }));
                   broadcast({ type: "player_level_up", sessionId: attackerSessionId, newLevel: xpRes.newLevel }, ws, attacker.zone);
                 }
                 questManager.onEnemyDeath(attackerSessionId, target.id, true);

                 const droppedItemId = generateLoot(bossType, true);
                 if (droppedItemId) {
                   const objId = "loot_" + Date.now() + "_" + Math.floor(Math.random()*1000);
                   const obj = { id: objId, type: droppedItemId, x: target.x, y: target.y || 0, z: target.z };
                   db.saveObject(obj).catch(e => console.error(e));
                   broadcast({ type: "spawn_object", object: obj }, null, attacker.zone, target.x, target.z);
                 }
              }
              
              attacker.combo = (attacker.combo || 0) + 1;
              await db.redisClient.hSet('active_players', attackerSessionId, JSON.stringify(attacker));
              
              if (!isBoss) {
                if (isNpc) {
                    broadcast({ type: "npc_update", npcs: [target] }, null, target.zone, target.x, target.z);
                } else {
                    await db.redisClient.hSet('active_players', targetId, JSON.stringify(target));
                    broadcast({ type: "move", sessionId: targetId, position: { x: target.x, y: target.y, z: target.z, id: targetId } }, null, target.zone, target.x, target.z);
                }
                broadcast({ type: "combat_update", targetId, attackerId: attackerSessionId, targetHealth: targetHp, attackerCombo: attacker.combo }, null, attacker.zone, attacker.x, attacker.z);
              }
              
              broadcast({ type: "attack", sessionId: attackerSessionId, targetId }, ws, attacker.zone, attacker.x, attacker.z);
            }
          }
        }
      }
      else if (data.type === "spawn_boss") {
        const attackerStr = await db.redisClient.hGet('active_players', ws.sessionId);
        if (attackerStr) {
           const attacker = JSON.parse(attackerStr);
           const boss = spawnBoss(data.bossType, attacker.zone, attacker.x + 10, attacker.z + 10);
           if (boss) {
             broadcast({ type: "boss_spawned", boss }, null, attacker.zone, attacker.x, attacker.z);
           }
        }
      }
      else if (data.type === "use_ability") {
        const sessionId = ws.sessionId;
        const attackerStr = await db.redisClient.hGet('active_players', sessionId);
        if (!attackerStr) return;
        const attacker = JSON.parse(attackerStr);
        
        const now = Date.now();
        const ABILITY_COOLDOWN_MS = 1000; 
        if (attacker.lastAbilityTime && now - attacker.lastAbilityTime < ABILITY_COOLDOWN_MS) {
            ws.send(JSON.stringify({ type: "error", message: "Ability on cooldown." }));
            return;
        }
        attacker.lastAbilityTime = now;
        await db.redisClient.hSet('active_players', sessionId, JSON.stringify(attacker));
        
        const featureId = 'ability_' + data.abilityId;
        if (killSwitch.isDisabled(featureId)) {
           ws.send(JSON.stringify({ type: "error", message: "Ability temporarily disabled for maintenance." }));
           return;
        }

        let target = null;
        if (data.targetId) {
          const isNpc = data.targetId.startsWith("npc_");
          const isBoss = data.targetId.startsWith("boss_");
          if (isBoss) {
            target = { isBoss: true, id: data.targetId, hp: 10000 };
          } else {
            target = isNpc ? npcs.find(n => n.id === data.targetId) : JSON.parse(await db.redisClient.hGet('active_players', data.targetId) || "{}");
          }
        }
        
        try {
          executeAbility(data.abilityId, {
            attacker,
            target,
            x: data.x,
            y: data.y,
            z: data.z
          });
        } catch (e) {
          killSwitch.disableFeature(featureId);
          ws.send(JSON.stringify({ type: "error", message: "Ability encountered a fatal error and has been disabled." }));
        }
      }
      else if (data.type === "collect_pet") {
        const sessionId = ws.sessionId;
        if (!sessionId) return;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          if (!player.unlockedPets) player.unlockedPets = [];
          if (!player.unlockedPets.includes(data.petId)) {
            player.unlockedPets.push(data.petId);
            await db.saveUser(sessionId, player);
            ws.send(JSON.stringify({ type: "pet_unlocked", petId: data.petId }));
          }
        }
      }
      else if (data.type === "summon_pet") {
        const sessionId = ws.sessionId;
        if (!sessionId) return;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          if (player.unlockedPets && player.unlockedPets.includes(data.petId)) {
            player.activePet = data.petId;
            await db.saveUser(sessionId, player);
            const petDef = petData.getPet(data.petId);
            if (petDef) {
              activePets.set(sessionId, {
                ...petDef,
                sessionId,
                x: player.x, y: player.y, z: player.z,
                zone: player.zone, state: 'FOLLOWING'
              });
              broadcastSpatial(player.cell, { type: "pet_summoned", sessionId, pet: activePets.get(sessionId) });
            }
          }
        }
      }
    } catch (err) {
      console.error("Invalid message:", err.message);
    }
  });

  ws.on("close", async () => {
    if (ws.sessionId) {
      activeCompanions.delete(ws.sessionId);
      activePets.delete(ws.sessionId);
      const playerStr = await db.redisClient.hGet('active_players', ws.sessionId);
      if (playerStr) {
        const player = JSON.parse(playerStr);
        await db.saveUser(ws.sessionId, player);
        if (player.inventory) await db.saveInventory(ws.sessionId, player.inventory);
        await removePlayerSpatial(player);
      }
      await updateAgonesPlayerCount();
      broadcast({ type: "leave", sessionId });
    }
  });
});

const port = process.env.PORT || 2567;
server.listen(port, async () => {
  console.log(`[GameServer] Listening on http://localhost:${port}`);
  
  try {
    agonesSDK = new AgonesSDK();
    await agonesSDK.connect();
    await agonesSDK.ready();
    console.log('Agones SDK Connected and Ready');
    setInterval(() => {
      try { agonesSDK.health(); } catch(e) {}
    }, 2000);
  } catch (e) {
    console.log('Agones SDK not available, running locally');
    agonesSDK = null;
  }

  initializeAbilities(db, broadcast, npcs, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
  questManager.init(db, broadcast, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
  specialEventsManager.init(db, broadcast, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
});
