const dbConnection = require('./dbConnection');

const connectPromise = dbConnection.connectServices().catch(console.error);

async function getUser(id) {
  const cached = await dbConnection.redisClient.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const { rows } = await dbConnection.pool.query('SELECT * FROM users WHERE id = $1', [id]);
  const invRows = await dbConnection.pool.query('SELECT id as "instanceId", item_id as "itemId", quantity, slot FROM inventory_items WHERE user_id = $1 ORDER BY slot ASC', [id]);
  
  if (rows.length > 0) {
    const row = rows[0];
    let unlockedSkills = [], quests = [], unlockedCompanions = [], unlockedPets = [];
    try { unlockedSkills = JSON.parse(row.unlockedSkills); } catch(e) {}
    try { quests = JSON.parse(row.quests); } catch(e) {}
    try { unlockedCompanions = JSON.parse(row.unlockedCompanions); } catch(e) {}
    try { unlockedPets = JSON.parse(row.unlockedPets); } catch(e) {}
    let appearance = {};
    try { appearance = typeof row.appearance === 'string' ? JSON.parse(row.appearance) : (row.appearance || {}); } catch(e) {}

    let factionReputation = {};
    let choices = {};
    try { factionReputation = row.factionReputation ? JSON.parse(row.factionReputation) : {}; } catch(e) {}
    try { choices = row.choices ? JSON.parse(row.choices) : {}; } catch(e) {}

    const user = {
      id: row.id,
      password_hash: row.password_hash,
      x: row.x, y: row.y, z: row.z, color: row.color, health: row.health,
      playerClass: row.playerClass, level: row.level || 1, xp: row.xp || 0,
      skillPoints: row.skillPoints || 0, unlockedSkills, inventory: invRows.rows,
      zone: row.zone || "urban_core", quests,
      unlockedCompanions, activeCompanion: row.activeCompanion || null,
      unlockedPets, activePet: row.activePet || null,
      factionReputation, choices, appearance,
      currency: row.currency || 0
    };
    await dbConnection.redisClient.setEx(`user:${id}`, 3600, JSON.stringify(user));
    return user;
  }
  return { id, password_hash: null, x: 0, y: 0, z: 0, color: '#ffffff', health: 100, playerClass: null, level: 1, xp: 0, skillPoints: 0, unlockedSkills: [], inventory: [], zone: "urban_core", quests: [], unlockedCompanions: [], activeCompanion: null, unlockedPets: [], activePet: null, factionReputation: {}, choices: {}, appearance: {}, currency: 0 };
}

async function saveUser(id, { x, y, z, color, health, playerClass, level, xp, skillPoints, unlockedSkills, zone, quests, inventory, password_hash, unlockedCompanions, activeCompanion, unlockedPets, activePet, factionReputation, choices, appearance, currency }) {
  const skillsStr = unlockedSkills ? JSON.stringify(unlockedSkills) : '[]';
  const questsStr = quests ? JSON.stringify(quests) : '[]';
  const companionsStr = unlockedCompanions ? JSON.stringify(unlockedCompanions) : '[]';
  const petsStr = unlockedPets ? JSON.stringify(unlockedPets) : '[]';
  const factionStr = factionReputation ? JSON.stringify(factionReputation) : '{}';
  const choicesStr = choices ? JSON.stringify(choices) : '{}';
  const appearanceStr = appearance ? JSON.stringify(appearance) : '{}';
  
  await dbConnection.pool.query(
    `INSERT INTO users (id, password_hash, x, y, z, color, health, "playerClass", level, xp, "skillPoints", "unlockedSkills", inventory, zone, quests, "unlockedCompanions", "activeCompanion", "unlockedPets", "activePet", "factionReputation", choices, appearance, currency) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, '[]', $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
     ON CONFLICT (id) DO UPDATE SET 
     password_hash = COALESCE(EXCLUDED.password_hash, users.password_hash),
     x = EXCLUDED.x, y = EXCLUDED.y, z = EXCLUDED.z, color = EXCLUDED.color, health = EXCLUDED.health,
     "playerClass" = EXCLUDED."playerClass", level = EXCLUDED.level, xp = EXCLUDED.xp, 
     "skillPoints" = EXCLUDED."skillPoints", "unlockedSkills" = EXCLUDED."unlockedSkills", 
     zone = EXCLUDED.zone, quests = EXCLUDED.quests,
     "unlockedCompanions" = EXCLUDED."unlockedCompanions", "activeCompanion" = EXCLUDED."activeCompanion",
     "unlockedPets" = EXCLUDED."unlockedPets", "activePet" = EXCLUDED."activePet",
     "factionReputation" = EXCLUDED."factionReputation", choices = EXCLUDED.choices, appearance = EXCLUDED.appearance, currency = EXCLUDED.currency`,
    [id, password_hash || null, x, y, z, color || '#ffffff', health ?? 100, playerClass || null, level || 1, xp || 0, skillPoints || 0, skillsStr, zone || "urban_core", questsStr, companionsStr, activeCompanion || null, petsStr, activePet || null, factionStr, choicesStr, appearanceStr, currency || 0]
  );

  const cachePayload = { id, password_hash, x, y, z, color, health, playerClass, level, xp, skillPoints, unlockedSkills, zone, quests, inventory, unlockedCompanions, activeCompanion, unlockedPets, activePet, factionReputation, choices, appearance, currency };
  await dbConnection.redisClient.setEx(`user:${id}`, 3600, JSON.stringify(cachePayload));
}

async function saveInventory(id, inventory, externalClient) {
  const client = externalClient || await dbConnection.pool.connect();
  const shouldManageTx = !externalClient;
  try {
    if (shouldManageTx) await client.query('BEGIN');
    await client.query('DELETE FROM inventory_items WHERE user_id = $1', [id]);
    if (inventory && Array.isArray(inventory)) {
      for (const item of inventory) {
        await client.query(
          'INSERT INTO inventory_items (id, user_id, item_id, quantity, slot) VALUES ($1, $2, $3, $4, $5)',
          [item.instanceId, id, item.itemId, item.quantity, item.slot]
        );
      }
    }
    if (shouldManageTx) await client.query('COMMIT');
    
    const cached = await dbConnection.redisClient.get(`user:${id}`);
    if (cached) {
      const u = JSON.parse(cached);
      u.inventory = inventory;
      await dbConnection.redisClient.setEx(`user:${id}`, 3600, JSON.stringify(u));
    }
  } catch(e) {
    if (shouldManageTx) await client.query('ROLLBACK');
    throw e;
  } finally {
    if (shouldManageTx) client.release();
  }
}

async function getObjectsInZone(zone) {
  const { rows } = await dbConnection.pool.query('SELECT * FROM world_objects WHERE zone = $1', [zone]);
  return rows;
}
async function getObject(id) {
  const { rows } = await dbConnection.pool.query('SELECT * FROM world_objects WHERE id = $1', [id]);
  return rows[0];
}
async function saveObject(obj, externalClient) {
  const client = externalClient || dbConnection.pool;
  const type = obj.objectType || obj.type || 'unknown';
  await client.query(
    'INSERT INTO world_objects (id, type, x, y, z, zone) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO UPDATE SET type = EXCLUDED.type, x = EXCLUDED.x, y = EXCLUDED.y, z = EXCLUDED.z, zone = EXCLUDED.zone',
    [obj.id, type, obj.x, obj.y, obj.z, obj.zone || 'verdant_town']
  );
}
async function deleteObject(id, externalClient) {
  const client = externalClient || dbConnection.pool;
  await client.query('DELETE FROM world_objects WHERE id = $1', [id]);
}
async function getTerrainInZone(zone) {
  const { rows } = await dbConnection.pool.query('SELECT * FROM world_terrain WHERE zone = $1', [zone]);
  return rows;
}
async function saveTerrain(t) {
  await dbConnection.pool.query(
    'INSERT INTO world_terrain (x, z, height, zone) VALUES ($1, $2, $3, $4) ON CONFLICT (x, z) DO UPDATE SET height = EXCLUDED.height, zone = EXCLUDED.zone',
    [t.x, t.z, t.height, t.zone || 'verdant_town']
  );
}

module.exports = {
  getUser, saveUser, saveInventory,
  getObjectsInZone, getObject, saveObject, deleteObject,
  getTerrainInZone, saveTerrain,
  get redisClient() { return dbConnection.redisClient; },
  get pool() { return dbConnection.pool; },
  get connectPromise() { return connectPromise; }
};
