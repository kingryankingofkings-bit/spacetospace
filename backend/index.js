const express = require("express");
const http = require("http");
const cors = require("cors");
const { WebSocketServer } = require("ws");
const fs = require("fs");
const path = require("path");
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
const dialogueManager = require("./dialogueManager");
const economyManager = require("./economyManager");
const ecologySystem = require("./ecologySystem");
const AiTelemetryMonitor = require("./aiMonitor");
const killSwitch = require("./killSwitch");
const companionData = require("./companionData");
const petData = require("./petData");
const craftingManager = require("./craftingManager");
const resourceNodeManager = require("./resourceNodeManager");
const { populateZone } = require("./zonePopulator");

let agonesSDK = null;

const localActivePlayers = new Map();
const playerPositionHistory = new Map(); // sessionId -> [{ x, y, z, timestamp }]
const RECORD_HISTORY_MS = 2000; // 2 seconds of history

function recordPlayerPosition(sessionId, x, y, z, timestamp) {
  if (!playerPositionHistory.has(sessionId)) playerPositionHistory.set(sessionId, []);
  const hist = playerPositionHistory.get(sessionId);
  hist.push({ x, y, z, timestamp });
  
  while (hist.length > 0 && timestamp - hist[0].timestamp > RECORD_HISTORY_MS) {
    hist.shift();
  }
}

function getHistoricalPosition(sessionId, targetTime) {
  const hist = playerPositionHistory.get(sessionId);
  if (!hist || hist.length === 0) return null;
  
  let closest = hist[0];
  let minDiff = Math.abs(hist[0].timestamp - targetTime);
  for (let i = 1; i < hist.length; i++) {
    const diff = Math.abs(hist[i].timestamp - targetTime);
    if (diff < minDiff) {
      minDiff = diff;
      closest = hist[i];
    }
  }
  return closest;
}

resourceNodeManager.initializeNodes();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.post('/client-error', (req, res) => {
  console.log('====== CLIENT ERROR ======');
  console.log(req.body);
  console.log('==========================');
  res.sendStatus(200);
});

// Serve frontend static files
const frontendDistPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDistPath));

authManager.setupRoutes(app);

// Catch-all route to serve React's index.html for client-side routing
app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

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

const aiMonitor = new AiTelemetryMonitor(() => ({
  players: localActivePlayers, npcs: npcs, spatialGrid: new Map()
}));
aiMonitor.startMonitoring();

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
    try {
      const { data, zone, x, z } = JSON.parse(message);
      
      // Delta update local active players cache
      if (data.type === "join" && data.player) {
        localActivePlayers.set(data.sessionId, data.player);
      } else if (data.type === "leave" && data.sessionId) {
        localActivePlayers.delete(data.sessionId);
      } else if (data.type === "move" && data.position && data.sessionId) {
        const p = localActivePlayers.get(data.sessionId);
        if (p) {
          p.x = data.position.x;
          p.y = data.position.y;
          p.z = data.position.z;
        }
      } else if (data.type === "player_updated" && data.player) {
        localActivePlayers.set(data.sessionId, data.player);
      }

      const msgStr = JSON.stringify(data);
      wss.clients.forEach(client => {
        if (client.readyState === 1) client.send(msgStr);
      });
    } catch (e) {
      console.error("Broadcast parse error", e);
    }
  });
}).catch(console.error);

function broadcast(data, excludeWs = null, zone = null, x = null, z = null) {
  try {
    db.redisClient.publish('game_broadcast', JSON.stringify({ data, zone, x, z })).catch(e => console.error("Broadcast publish error", e));
  } catch(err) {
    console.error("ReferenceError in broadcast:", err);
  }
}

function broadcastSpatial(cell, data) {
  try {
    db.redisClient.publish('game_broadcast', JSON.stringify({ data, cell })).catch(e => console.error("BroadcastSpatial publish error", e));
  } catch(err) {
    console.error("ReferenceError in broadcastSpatial:", err);
  }
}

let globalWorldTime = 'day';
setInterval(() => {
  globalWorldTime = globalWorldTime === 'day' ? 'night' : 'day';
  broadcast({ type: "world_time_update", time: globalWorldTime });
}, 5 * 60 * 1000); // 5 minutes day, 5 minutes night

setInterval(() => {
  const respawns = ecologySystem.tickRespawn(npcs);
  for (const newNpc of respawns) {
    npcs.push(newNpc);
    broadcast({ type: "npc_spawned", npc: newNpc }, null, newNpc.zone);
  }
}, 60 * 1000); // 1 minute ecology heartbeat

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
  const players = new Map();
  sessionIdsArray.forEach((id) => {
    const p = localActivePlayers.get(id);
    if (p) players.set(id, p);
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
        applyDamage(targetNpc, companion.level * 15, 0, true, false, companion);
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
            const targetHp = applyDamage(npc, effect.amount, 0, true, false, null);
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

      if (npc.state === 'STAGGER') {
        if (now > (npc.staggerEndTime || 0)) {
          npc.state = 'IDLE';
        } else {
          // If NPC is staggering, do nothing else and ensure they get broadcasted this frame if they just got hit
          const cell = getSpatialKey(npc.zone, npc.x, npc.z);
          if (!movedNpcsByCell[cell]) movedNpcsByCell[cell] = [];
          if (!movedNpcsByCell[cell].some(n => n.id === npc.id)) {
             movedNpcsByCell[cell].push({ 
               id: npc.id, x: Number(npc.x.toFixed(2)), y: Number(npc.y.toFixed(2)), z: Number(npc.z.toFixed(2)), 
               hp: npc.hp, modelFile: npc.modelFile, zone: npc.zone, state: npc.state 
             });
          }
          return;
        }
      }
  
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

    if (npc.state === 'TELEGRAPH') {
      if (now >= npc.telegraphEndTime) {
        if (npc.targetPlayer) {
           const target = npc.targetPlayer;
           const dist = getDistance(npc, target);
           if (dist < 3) {
              const hp = applyDamage(target, 10, npc.comboIndex || 0, false, false, npc);
              if (hp <= 0) handleDeath(target, false);
              target.lastCombatTime = now;
              db.redisClient.hSet('active_players', target.sessionId, JSON.stringify(target)).catch(console.error);
              broadcast({ type: "combat_update", targetId: target.sessionId, attackerId: npc.id, targetHealth: hp }, null, npc.zone, npc.x, npc.z);
              broadcast({ type: "attack", sessionId: npc.id, targetId: target.sessionId }, null, npc.zone, npc.x, npc.z);
           }
        }
        npc.state = 'RECOVERY';
        npc.recoveryEndTime = now + 500;
        npc.lastAttackTime = now;
      }
    } else if (npc.state === 'RECOVERY') {
      if (now >= npc.recoveryEndTime) {
        npc.state = 'IDLE';
      }
    } else {
      const aggroRange = globalWorldTime === 'night' ? 45 : 15;
      if (closestPlayer && minDistance < aggroRange) {
        if (minDistance < 2) {
          if (now - (npc.lastAttackTime || 0) > 2000) {
            npc.state = 'TELEGRAPH';
            npc.comboIndex = (npc.comboIndex || 0) % (npc.attackChain ? npc.attackChain.length : 1);
            const attackType = npc.attackChain ? npc.attackChain[npc.comboIndex] : 'light';
            const duration = attackType === 'heavy' ? 1500 : 800;
            npc.comboIndex++;
            npc.telegraphEndTime = now + duration;
            npc.targetPlayer = closestPlayer;
            broadcast({ type: "npc_telegraph", sessionId: npc.id, duration, attackType, targetId: closestPlayer.sessionId }, null, npc.zone, npc.x, npc.z);
          } else {
            npc.state = 'IDLE';
          }
        } else {
          npc.state = 'CHASE';
          const dx = closestPlayer.x - npc.x;
          const dz = closestPlayer.z - npc.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          const speed = globalWorldTime === 'night' ? 1.5 : 0.5;
          npc.x += (dx / dist) * speed;
          npc.z += (dz / dist) * speed;
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
    // 1. Combo Decay
    if (player.combo > 0 && player.lastAttackTime && (now - player.lastAttackTime > 3500)) {
      if (!player.lastComboDecayTime) player.lastComboDecayTime = now;
      if (now - player.lastComboDecayTime >= 500) { 
         player.combo = Math.max(0, player.combo - 1);
         player.lastComboDecayTime = now;
         // Broadcast combo update to client
         broadcast({ type: "combat_update", targetId: player.id || player.sessionId, combo: player.combo }, null, player.zone, player.x, player.z);
      }
    } else {
       player.lastComboDecayTime = null; 
    }

    // 2. Shield Regeneration
    if (player.lastHitTime && (now - player.lastHitTime > 5000)) {
       let maxShield = 0;
       if (player.gear) {
          player.gear.forEach(item => maxShield += (item.shield || 0));
       }
       if (maxShield > 0 && (player.shield === undefined || player.shield < maxShield)) {
          if (!player.lastShieldRegenTime) player.lastShieldRegenTime = now;
          if (now - player.lastShieldRegenTime >= 1000) { 
             player.shield = Math.min(maxShield, (player.shield || 0) + Math.max(1, Math.floor(maxShield * 0.1))); // 10% max shield per sec
             player.lastShieldRegenTime = now;
             broadcast({ type: "combat_update", targetId: player.id || player.sessionId, targetShield: player.shield }, null, player.zone, player.x, player.z);
          }
       }
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
      if (!data || typeof data !== 'object' || Array.isArray(data)) return;
      
      if (data.type !== "join" && !ws.sessionId) {
        ws.send(JSON.stringify({ type: "error", message: "Unauthorized" }));
        return;
      }
      
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
          if (!position.zone) position.zone = "verdant_town";
          position.sessionId = sessionId;
          position.statusEffects = position.statusEffects || [];
          
          await db.redisClient.hSet('active_players', sessionId, JSON.stringify(position));
          await updatePlayerSpatial(position);
          updateAgonesPlayerCount();
          
          let zoneNpcs = npcs.filter(n => n.zone === position.zone);
          if (zoneNpcs.length < 20) {
            const newEntities = populateZone(position.zone, position.x || 0, position.z || 0, zoneNpcs.length, 20);
            if (newEntities.length > 0) {
               npcs.push(...newEntities);
               zoneNpcs = zoneNpcs.concat(newEntities);
               newEntities.forEach(e => {
                  broadcast({ type: "npc_spawned", npc: e }, ws, position.zone, e.x, e.z);
               });
            }
          }
          
          let zoneObjects = await db.getObjectsInZone(position.zone);
          if (zoneObjects.length === 0 && position.zone === 'verdant_town') {
            const { generateTownBuildings } = require('./zonePopulator');
            zoneObjects = generateTownBuildings(position.zone);
            for (const obj of zoneObjects) await db.saveObject(obj);
          }

          ws.send(JSON.stringify({ 
            type: "init", 
            sessionId, 
            players: await getPlayersInInterestArea(position.zone, position.x || 0, position.z || 0),
            objects: zoneObjects,
            terrain: await db.getTerrainInZone(position.zone),
            npcs: zoneNpcs.filter(n => getDistance(n, position) < CELL_SIZE * 2),
            resourceNodes: resourceNodeManager.getActiveNodesInZone(position.zone)
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
           
           let zoneNpcs = npcs.filter(n => n.zone === player.zone);
           if (zoneNpcs.length < 20) {
             const newEntities = populateZone(player.zone, player.x, player.z, zoneNpcs.length, 20);
             if (newEntities.length > 0) {
                npcs.push(...newEntities);
                zoneNpcs = zoneNpcs.concat(newEntities);
                newEntities.forEach(e => {
                   broadcast({ type: "npc_spawned", npc: e }, ws, player.zone, e.x, e.z);
                });
             }
           }
           
            let zoneObjects = await db.getObjectsInZone(player.zone);
            if (zoneObjects.length === 0 && player.zone === 'verdant_town') {
              const { generateTownBuildings } = require('./zonePopulator');
              zoneObjects = generateTownBuildings(player.zone);
              for (const obj of zoneObjects) await db.saveObject(obj);
            }

            ws.send(JSON.stringify({
              type: "init",
              sessionId,
              players: await getPlayersInInterestArea(player.zone, player.x, player.z),
              objects: zoneObjects,
              terrain: await db.getTerrainInZone(player.zone),
              npcs: zoneNpcs.filter(n => getDistance(n, player) < CELL_SIZE * 2)
            }));
           broadcast({ type: "join", sessionId, player }, ws, player.zone, player.x, player.z);
           questManager.onZoneChange(ws.sessionId, data.zone);
        }
      }
      else if (data.type === "move") {
        const sessionId = ws.sessionId;
        if (!sessionId) return;
        
        const player = localActivePlayers.get(sessionId);
        if (player) {
          const now = Date.now();
          const dt = (now - (player.lastMoveTime || now)) / 1000;
          player.lastMoveTime = now;
          
          const maxSpeed = 50;
          const allowedDist = (maxSpeed * dt) + 0.5;
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
          updatePlayerSpatial(player); // fire and forget
          
          recordPlayerPosition(sessionId, player.x, player.y, player.z, now);
          
          broadcast({ type: "move", sessionId, position: { x: player.x, y: player.y, z: player.z, id: sessionId }, seq: data.seq, serverTime: now }, ws, player.zone, player.x, player.z);
          
          // Fire and forget to redis to prevent blocking read-modify-write race conditions
          db.redisClient.hSet('active_players', sessionId, JSON.stringify(player)).catch(err => console.error(err));
        }
      }
      else if (data.type === "finalize_character") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr) {
          const player = JSON.parse(playerStr);
          if (data.appearance) player.appearance = data.appearance;
          if (data.classId) player.playerClass = data.classId;
          
          await db.saveUser(sessionId, player);
          await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
          
          if (data.classId) {
             ws.send(JSON.stringify({ type: "class_selected", classId: data.classId }));
          }
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
      else if (data.type === "interact_npc") {
        const npc = npcs.find(n => n.id === data.npcId);
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (npc && playerStr) {
           let player = JSON.parse(playerStr);
           if (npc.zone !== player.zone || getDistance(player, npc) > 15) {
             ws.send(JSON.stringify({ type: "error", message: "NPC is too far away." }));
             return;
           }
           if (!player.choices) player.choices = {};
           if (!player.factionReputation) player.factionReputation = {};

           if (npc.dialogueTree) {
             const nodeId = data.choiceId || "start";
             
             // Stateful dialogue transition validation:
             if (nodeId !== "start") {
               if (!player.activeDialogue || player.activeDialogue.npcId !== npc.id) {
                 ws.send(JSON.stringify({ type: "error", message: "Invalid dialogue state." }));
                 return;
               }
               const prevNode = npc.dialogueTree[player.activeDialogue.nodeId];
               if (!prevNode) {
                 ws.send(JSON.stringify({ type: "error", message: "Invalid dialogue state." }));
                 return;
               }
               const choice = (prevNode.choices || []).find(c => c.nodeId === nodeId);
               if (!choice) {
                 ws.send(JSON.stringify({ type: "error", message: "Choice not offered." }));
                 return;
               }
               if (choice.reqChoice && !player.choices[choice.reqChoice]) {
                 ws.send(JSON.stringify({ type: "error", message: "Missing required choice." }));
                 return;
               }
               if (choice.reqFaction) {
                 const rep = player.factionReputation[choice.reqFaction.faction] || 0;
                 if (rep < choice.reqFaction.min) {
                   ws.send(JSON.stringify({ type: "error", message: "Insufficient reputation." }));
                   return;
                 }
               }
             }

             const node = npc.dialogueTree[nodeId];
             if (node) {
               player.activeDialogue = { npcId: npc.id, nodeId: nodeId };
               if (node.addChoice) player.choices[node.addChoice] = true;
               if (node.addFactionRep) {
                 const { faction, amount } = node.addFactionRep;
                 player.factionReputation[faction] = (player.factionReputation[faction] || 0) + amount;
               }
               if (node.action === "vendor_open") {
                 const economyManager = require('./economyManager');
                 const vendorInv = economyManager.getVendorInventory(npc.vendorType || "general");
                 ws.send(JSON.stringify({ type: "vendor_inventory", items: vendorInv, npcId: npc.id }));
               }
               if (node.action === "heal") {
                 player.hp = player.maxHp;
                 ws.send(JSON.stringify({ type: "combat_update", targetId: sessionId, targetHealth: player.hp }));
               }
               if (node.action === "accept_quest" && node.questId) {
                 const questManager = require('./questManager');
                 questManager.addQuest(sessionId, node.questId);
               }
               
               const availableChoices = (node.choices || []).filter(c => {
                 if (c.reqChoice && !player.choices[c.reqChoice]) return false;
                 if (c.reqFaction) {
                    const rep = player.factionReputation[c.reqFaction.faction] || 0;
                    if (rep < c.reqFaction.min) return false;
                 }
                 return true;
               });

               await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
               await db.saveUser(sessionId, player);

               ws.send(JSON.stringify({ 
                 type: "npc_dialogue_tree", 
                 npcId: npc.id, 
                 text: node.text, 
                 choices: availableChoices 
               }));
             }
           } else if (npc.dialogue && npc.dialogue.length > 0) {
             // Fallback for simple NPCs
             const dialogueLine = npc.dialogue[Math.floor(Math.random() * npc.dialogue.length)];
             ws.send(JSON.stringify({ type: "npc_dialogue", npcId: npc.id, text: dialogueLine }));
           }
        }
      }
      else if (data.type === "interact_wild_pet") {
        const sessionId = ws.sessionId;
        const playerStr = await db.redisClient.hGet('active_players', sessionId);
        if (playerStr && data.petId) {
           const player = JSON.parse(playerStr);
           if (!player.unlockedPets) player.unlockedPets = [];
           if (petData.PET_DB[data.petId] && !player.unlockedPets.includes(data.petId)) {
              player.unlockedPets.push(data.petId);
              ws.send(JSON.stringify({ type: "pet_unlocked", pet: petData.PET_DB[data.petId] }));
              await db.saveUser(sessionId, player);
              await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
              broadcast({ type: "player_updated", sessionId, player }, ws, player.zone, player.x, player.z);
           }
        }
      }
      else if (data.type === "pickup_loot") {
        const sessionId = ws.sessionId;
        const worldObjId = data.item ? data.item.id : null;
        if (!worldObjId) return;
        
        const client = await db.pool.connect();
        try {
           await client.query('BEGIN');
           await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [sessionId]);
           
           const { rows: objRows } = await client.query('SELECT * FROM world_objects WHERE id = $1 FOR UPDATE', [worldObjId]);
           if (objRows.length === 0) {
              await client.query('ROLLBACK');
              ws.send(JSON.stringify({ type: "error", message: "Item does not exist or already picked up." }));
              return;
           }
           
           const playerStr = await db.redisClient.hGet('active_players', sessionId);
           if (!playerStr) {
              await client.query('ROLLBACK');
              return;
           }
           const player = JSON.parse(playerStr);
           const worldObj = objRows[0];
           
           const dist = getDistance(player, worldObj);
           if (dist > 10) {
              await client.query('ROLLBACK');
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
              await client.query('ROLLBACK');
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
                 await client.query('ROLLBACK');
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
           
           await db.deleteObject(worldObjId, client);
           await db.saveInventory(sessionId, player.inventory, client);
           await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
           await client.query('COMMIT');
           
           broadcast({ type: "remove_object", objectId: worldObjId });
           ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
        } catch (err) {
           await client.query('ROLLBACK');
           console.error("pickup_loot error", err);
        } finally {
           client.release();
        }
      }
      else if (data.type === "drop_item") {
        const sessionId = ws.sessionId;
        const client = await db.pool.connect();
        try {
           await client.query('BEGIN');
           await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [sessionId]);
           
           const playerStr = await db.redisClient.hGet('active_players', sessionId);
           if (!playerStr) { await client.query('ROLLBACK'); return; }
           const player = JSON.parse(playerStr);

           const { instanceId, quantity } = data;
            if (quantity !== undefined && quantity !== null && (!Number.isInteger(quantity) || quantity < 1)) {
               await client.query('ROLLBACK');
               ws.send(JSON.stringify({ type: "error", message: "Invalid quantity." }));
               return;
            }
            const index = player.inventory.findIndex(i => i.instanceId === instanceId);
           if (index === -1) {
              await client.query('ROLLBACK');
              ws.send(JSON.stringify({ type: "error", message: "Item not found in inventory." }));
              return;
           }
           
           const item = player.inventory[index];
           const dropQty = Math.min(quantity || 1, item.quantity);
           
           item.quantity -= dropQty;
           if (item.quantity <= 0) {
              player.inventory.splice(index, 1);
           }
           
           await db.saveInventory(sessionId, player.inventory, client);
           await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
           
           const MAX_DROPS = 100;
           const actualDrops = Math.min(dropQty, MAX_DROPS);
           const objectsToDrop = [];
           for (let i = 0; i < actualDrops; i++) {
              const objId = "drop_" + Math.random().toString(36).substring(2, 15);
              const newObj = {
                 id: objId,
                 type: item.itemId,
                 x: player.x + (Math.random() - 0.5) * 2,
                 y: player.y,
                 z: player.z + (Math.random() - 0.5) * 2
              };
              await db.saveObject(newObj, client);
              objectsToDrop.push(newObj);
           }
           
           await client.query('COMMIT');
           
           ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
           for (const o of objectsToDrop) {
              broadcast({ type: "place_object", object: o });
           }
        } catch (err) {
           await client.query('ROLLBACK');
           console.error("drop_item error", err);
        } finally {
           client.release();
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
            if (trade.processing) return;
            trade.processing = true;
            
            const client = await db.pool.connect();
            try {
               await client.query('BEGIN');
               const sortedIds = [trade.initiator, trade.target].sort();
               await client.query('SELECT id FROM users WHERE id = ANY($1) FOR UPDATE', [sortedIds]);
               
               const p1Str = await db.redisClient.hGet('active_players', trade.initiator);
               const p2Str = await db.redisClient.hGet('active_players', trade.target);
               if (!p1Str || !p2Str) {
                  await client.query('ROLLBACK');
                  return;
               }
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
                  await client.query('ROLLBACK');
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
               
               await db.saveInventory(p1.id, p1.inventory, client);
               await db.saveInventory(p2.id, p2.inventory, client);
               
               await db.redisClient.hSet('active_players', p1.id, JSON.stringify(p1));
               await db.redisClient.hSet('active_players', p2.id, JSON.stringify(p2));
               
               await client.query('COMMIT');
               
               activeTrades.delete(data.tradeId);
               
               wss.clients.forEach(c => {
                  if (c.sessionId === trade.initiator) c.send(JSON.stringify({ type: "inventory_updated", inventory: p1.inventory }));
                  if (c.sessionId === trade.target) c.send(JSON.stringify({ type: "inventory_updated", inventory: p2.inventory }));
               });
            } catch (err) {
               await client.query('ROLLBACK');
               console.error("trade_accept error", err);
            } finally {
               client.release();
            }
         }
      }
      else if (data.type === "craft") {
        const sessionId = ws.sessionId;
        const client = await db.pool.connect();
        try {
           await client.query('BEGIN');
           await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [sessionId]);
           
           const playerStr = await db.redisClient.hGet('active_players', sessionId);
           if (!playerStr) { await client.query('ROLLBACK'); return; }
           const player = JSON.parse(playerStr);
           const { recipeId } = data;
           
           let reqs = [];
           let output = null;
           if (recipeId === 'beast_oil') {
               reqs = [{ type: 'herb_node', count: 2 }, { type: 'data_core_node', count: 1 }];
               output = 'beast_oil';
           } else if (recipeId === 'health_potion') {
               reqs = [{ type: 'herb_node', count: 3 }];
               output = 'health_potion';
           }
           
           if (output) {
              let hasMaterials = true;
              for (const req of reqs) {
                 const count = player.inventory.filter(i => i.itemId === req.type || i.type === req.type).length;
                 if (count < req.count) hasMaterials = false;
              }
              if (hasMaterials) {
                 for (const req of reqs) {
                    for (let i=0; i<req.count; i++) {
                       const idx = player.inventory.findIndex(inv => inv.itemId === req.type || inv.type === req.type);
                       if (idx > -1) player.inventory.splice(idx, 1);
                    }
                 }
                 const itemDef = getItemDef(output) || { name: output, description: "Crafted item" };
                 player.inventory.push({ instanceId: "item_" + Date.now() + Math.random(), itemId: output, ...itemDef });
                 await db.saveInventory(player.id, player.inventory, client);
                 await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
                 await client.query('COMMIT');
                 
                 ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                 ws.send(JSON.stringify({ type: "chat", sender: "System", message: `Crafted ${output}` }));
              } else {
                 await client.query('ROLLBACK');
                 ws.send(JSON.stringify({ type: "error", message: "Insufficient materials." }));
              }
           } else {
              await client.query('ROLLBACK');
           }
        } catch (err) {
           await client.query('ROLLBACK');
           console.error("craft error", err);
        } finally {
           client.release();
        }
      }
      else if (data.type === "use_item") {
        const sessionId = ws.sessionId;
        const client = await db.pool.connect();
        try {
           await client.query('BEGIN');
           await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [sessionId]);
           
           const playerStr = await db.redisClient.hGet('active_players', sessionId);
           if (!playerStr) { await client.query('ROLLBACK'); return; }
           const player = JSON.parse(playerStr);
           
           const { instanceId } = data;
           const index = player.inventory.findIndex(i => i.instanceId === instanceId);
           
           if (index === -1) {
              await client.query('ROLLBACK');
              ws.send(JSON.stringify({ type: "error", message: "Item not found." }));
              return;
           }
           
           const item = player.inventory[index];
           const featureId = 'item_' + item.itemId;

           if (killSwitch.isDisabled(featureId)) {
              await client.query('ROLLBACK');
              ws.send(JSON.stringify({ type: "error", message: "Item temporarily disabled for maintenance." }));
              return;
           }
           
           try {
             if (item.itemId === 'potion_health') {
                player.health = Math.min(100, player.health + 25);
                
                item.quantity -= 1;
                if (item.quantity <= 0) {
                   player.inventory.splice(index, 1);
                }
                await db.saveInventory(sessionId, player.inventory, client);
                await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
                await client.query('COMMIT');
                
                ws.send(JSON.stringify({ type: "player_updated", health: player.health }));
                ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
             } else if (item.itemId.startsWith('dye_')) {
                 if (!player.appearance) player.appearance = {};
                 if (!player.appearance.dyes) player.appearance.dyes = {};
                 
                 // Extract color from dye id (e.g. dye_crimson_red -> crimson_red)
                 const color = item.itemId.replace('dye_', '');
                 // For now apply dye globally to 'armor' slot
                 player.appearance.dyes['armor'] = color;
                 
                 item.quantity -= 1;
                 if (item.quantity <= 0) {
                    player.inventory.splice(index, 1);
                 }
                 await db.saveInventory(sessionId, player.inventory, client);
                 await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
                 await client.query('COMMIT');
                 
                 ws.send(JSON.stringify({ type: "player_updated", appearance: player.appearance }));
                 ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                 ws.send(JSON.stringify({ type: "system_message", text: `Applied ${color} dye!` }));
              } else if (item.itemId.startsWith('skin_')) {
                 if (!player.appearance) player.appearance = {};
                 player.appearance.weaponSkin = item.itemId.replace('skin_', '');
                 
                 item.quantity -= 1;
                 if (item.quantity <= 0) {
                    player.inventory.splice(index, 1);
                 }
                 await db.saveInventory(sessionId, player.inventory, client);
                 await db.redisClient.hSet('active_players', sessionId, JSON.stringify(player));
                 await client.query('COMMIT');
                 
                 ws.send(JSON.stringify({ type: "player_updated", appearance: player.appearance }));
                 ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                 ws.send(JSON.stringify({ type: "system_message", text: `Applied weapon skin!` }));
              } else {
                await client.query('ROLLBACK');
                ws.send(JSON.stringify({ type: "error", message: "Item cannot be used." }));
             }
           } catch (e) {
             await client.query('ROLLBACK');
             killSwitch.disableFeature(featureId);
             ws.send(JSON.stringify({ type: "error", message: "Item encountered a fatal error and has been disabled." }));
           }
        } catch (err) {
           await client.query('ROLLBACK');
           console.error("use_item error", err);
        } finally {
           client.release();
        }
      }
      else if (data.type === "attack") {
        const now = Date.now();
        const ATTACK_COOLDOWN_MS = 300; 
        if (ws.lastAttackTime && now - ws.lastAttackTime < ATTACK_COOLDOWN_MS) {
            ws.send(JSON.stringify({ type: "error", message: "Attacking too fast." }));
            return;
        }
        ws.lastAttackTime = now;

        const attackerSessionId = ws.sessionId;
        const attackerStr = await db.redisClient.hGet('active_players', attackerSessionId);
        
        if (attackerStr) {
          const attacker = JSON.parse(attackerStr);
          
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
            let dist = 999999;
            if (isBoss) {
              dist = 0;
            } else if (target.zone === attacker.zone) {
              // Lag Compensation: rewind target position based on attacker latency (estimated 100ms)
              let targetPosForHitbox = target;
              if (!isNpc && !isBoss) {
                const historicalPos = getHistoricalPosition(targetId, now - 100);
                if (historicalPos) targetPosForHitbox = historicalPos;
              }
              dist = getDistance(attacker, targetPosForHitbox);
            }
            
            if (dist < 15 || isBoss) {
              // Populate gear for attacker
              if (attacker.inventory && Array.isArray(attacker.inventory)) {
                attacker.gear = attacker.inventory
                  .filter(i => i.slot && i.slot !== 'bag')
                  .map(i => getItemDef(i.itemId));
              }

              // Populate gear for target if player
              if (!isNpc && !isBoss && target.inventory && Array.isArray(target.inventory)) {
                target.gear = target.inventory
                  .filter(i => i.slot && i.slot !== 'bag')
                  .map(i => getItemDef(i.itemId));
              }

              let damage = (attacker.level || 1) * 10;
              const targetHp = applyDamage(target, damage, attacker.combo, isNpc, isBoss, attacker);
              if (!isBoss && targetHp <= 0) {
                 handleDeath(target, isNpc);
                 const xpRes = awardXP(attacker, target.level || 1, target.role || 'Fodder', attacker.combo);
                 economyManager.addCurrency(attacker, Math.floor(Math.random() * 5) + 1);
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
                 const xpRes = awardXP(attacker, actualBoss ? actualBoss.level || 40 : 40, 'Boss', attacker.combo);
                 economyManager.addCurrency(attacker, Math.floor(Math.random() * 50) + 10);
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
        
        // Bounding / distance check for abilities
        if (target && !target.isBoss) {
          if (target.zone !== attacker.zone || getDistance(attacker, target) > 30) {
             ws.send(JSON.stringify({ type: "error", message: "Target is too far away." }));
             return;
          }
        }
        if (data.x !== undefined && data.z !== undefined) {
          if (isNaN(parseFloat(data.x)) || isNaN(parseFloat(data.z))) return;
          const dx = parseFloat(data.x) - attacker.x;
          const dz = parseFloat(data.z) - attacker.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist > 30) {
             ws.send(JSON.stringify({ type: "error", message: "Target location is too far away." }));
             return;
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
          // Save modified attacker and target positions/states to Redis
          await db.redisClient.hSet('active_players', sessionId, JSON.stringify(attacker));
          if (target && !data.targetId.startsWith("npc_") && !data.targetId.startsWith("boss_")) {
             await db.redisClient.hSet('active_players', data.targetId, JSON.stringify(target));
          }
        } catch (e) {
          killSwitch.disableFeature(featureId);
          ws.send(JSON.stringify({ type: "error", message: "Ability encountered a fatal error and has been disabled." }));
        }
      }
      else if (data.type === "gather_node") {
          const sessionId = ws.sessionId;
          const playerStr = await db.redisClient.hGet('active_players', sessionId);
          if (playerStr) {
              const player = JSON.parse(playerStr);
              const itemType = resourceNodeManager.gatherNode(data.nodeId, player);
              if (itemType) {
                  const newItem = {
                      id: "item_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
                      type: itemType,
                      itemId: itemType,
                      quantity: 1
                  };
                  if (!player.inventory) player.inventory = [];
                  player.inventory.push(newItem);
                  await db.saveUser(sessionId, player);
                  ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                  ws.send(JSON.stringify({ type: "system_message", text: "Gathered " + itemType }));
              }
          }
      }
      else if (data.type === "craft_recipe") {
          const sessionId = ws.sessionId;
          const playerStr = await db.redisClient.hGet('active_players', sessionId);
          if (playerStr) {
              const player = JSON.parse(playerStr);
              const result = craftingManager.craftRecipe(player, data.recipeId);
              if (result.success) {
                  await db.saveUser(sessionId, player);
                  ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                  ws.send(JSON.stringify({ type: "system_message", text: "Crafted successfully!" }));
              } else {
                  ws.send(JSON.stringify({ type: "error", message: result.message }));
              }
          }
      }
      else if (data.type === "buy_item") {
          const sessionId = ws.sessionId;
          const playerStr = await db.redisClient.hGet('active_players', sessionId);
          if (playerStr) {
              const player = JSON.parse(playerStr);
              const cost = economyManager.getItemPrice(data.itemId);
              if (cost === null || cost === undefined) {
                  ws.send(JSON.stringify({ type: "error", message: "Invalid item." }));
                  return;
              }
              if (economyManager.deductCurrency(player, cost)) {
                  if (!player.inventory) player.inventory = [];
                  player.inventory.push({
                      id: "item_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
                      type: data.itemId,
                      itemId: data.itemId,
                      quantity: 1
                  });
                  await db.saveUser(sessionId, player);
                  ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                  ws.send(JSON.stringify({ type: "currency_updated", currency: player.currency }));
              } else {
                  ws.send(JSON.stringify({ type: "error", message: "Not enough currency." }));
              }
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
      else if (data.type === "chat") {
        if (typeof data.message === "string") {
            const sanitized = data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            broadcast({ type: "chat", sessionId: ws.sessionId, message: sanitized }, ws);
        }
      }
      else if (data.type === "npc_dialogue") {
        const node = dialogueManager.getDialogueNode(data.treeId || "default_merchant", data.nodeId);
        ws.send(JSON.stringify({ type: "dialogue_node", node }));
      }
      else if (data.type === "vendor_buy") {
        const vendorInv = economyManager.getVendorInventory(data.vendorType || "general");
        const itemToBuy = vendorInv.find(i => i.itemId === data.itemId);
        
        if (itemToBuy) {
          const client = await db.pool.connect();
          try {
             await client.query('BEGIN');
             await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [ws.sessionId]);
             const playerStr = await db.redisClient.hGet('active_players', ws.sessionId);
             if (playerStr) {
               const player = JSON.parse(playerStr);
               if (economyManager.canAfford(player, itemToBuy.price)) {
                 economyManager.deductCurrency(player, itemToBuy.price);
                 if (!player.inventory) player.inventory = [];
                 player.inventory.push({ instanceId: `item_${Date.now()}`, itemId: data.itemId, quantity: 1, slot: player.inventory.length });
                 await db.redisClient.hSet('active_players', ws.sessionId, JSON.stringify(player));
                 ws.send(JSON.stringify({ type: "inventory_updated", inventory: player.inventory }));
                 ws.send(JSON.stringify({ type: "currency_updated", currency: player.currency }));
                 await client.query('COMMIT');
               } else {
                 await client.query('ROLLBACK');
                 ws.send(JSON.stringify({ type: "error", message: "Not enough gold." }));
               }
             } else {
               await client.query('ROLLBACK');
             }
          } catch(e) {
             await client.query('ROLLBACK');
          } finally {
             client.release();
          }
        }
      }
    } catch (err) {
      console.error("Invalid message:", err ? err.message : "Unknown error");
    }
  });

  ws.on("close", async () => {
    if (ws.sessionId) {
      activeCompanions.delete(ws.sessionId);
      activePets.delete(ws.sessionId);
      
      const player = localActivePlayers.get(ws.sessionId);
      if (player) {
        await db.saveUser(ws.sessionId, player);
        if (player.inventory) await db.saveInventory(ws.sessionId, player.inventory);
        await removePlayerSpatial(player);
      }
      
      localActivePlayers.delete(ws.sessionId);
      playerPositionHistory.delete(ws.sessionId);
      await db.redisClient.hDel('active_players', ws.sessionId);
      
      await updateAgonesPlayerCount();
      broadcast({ type: "leave", sessionId: ws.sessionId });
    }
  });
});

const port = process.env.PORT || 2567;
server.listen(port, async () => {
  console.log(`[GameServer] Listening on http://localhost:${port}`);
  
  try {
    await db.connectPromise;
  } catch(e) {
    console.error("Failed to initialize database:", e);
  }
  
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

  try {
    const numObjectsRes = await db.pool.query('SELECT COUNT(*) FROM world_objects');
    if (parseInt(numObjectsRes.rows[0].count) === 0) {
      console.log('Seeding initial resource nodes and new objects...');
      const types = ['iron_node', 'herb_node', 'data_core_node', 'trap_spike', 'destructible_barrel', 'banner_faction', 'wildlife_deer', 'puzzle_button'];
      for (let i = 0; i < 80; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const obj = { id: `resource_${Date.now()}_${i}`, type, x: (Math.random() - 0.5) * 50, y: 0, z: (Math.random() - 0.5) * 50 };
        await db.saveObject(obj);
      }
    }
  } catch (e) {
    console.error('Error seeding resources:', e);
  }
  try {
    const { rows: worldObjs } = await db.pool.query('SELECT * FROM world_objects');
    ecologySystem.init(worldObjs);
  } catch(e) {
    console.error('Error initializing ecologySystem:', e);
  }

  initializeAbilities(db, broadcast, npcs, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
  questManager.init(db, broadcast, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
  specialEventsManager.init(db, broadcast, { get: async (id) => JSON.parse(await db.redisClient.hGet('active_players', id)) });
});
