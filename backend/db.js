const { pool, redisClient, connectServices } = require('./dbConnection');

connectServices().catch(console.error);

async function getUser(id) {
  const cached = await redisClient.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  const invRows = await pool.query('SELECT id as "instanceId", item_id as "itemId", quantity, slot FROM inventory_items WHERE user_id = $1 ORDER BY slot ASC', [id]);
  
  if (rows.length > 0) {
    const row = rows[0];
    let unlockedSkills = [], quests = [], unlockedCompanions = [], unlockedPets = [];
    try { unlockedSkills = JSON.parse(row.unlockedSkills); } catch(e) {}
    try { quests = JSON.parse(row.quests); } catch(e) {}
    try { unlockedCompanions = JSON.parse(row.unlockedCompanions); } catch(e) {}
    try { unlockedPets = JSON.parse(row.unlockedPets); } catch(e) {}

    const user = {
      id: row.id,
      password_hash: row.password_hash,
      x: row.x, y: row.y, z: row.z, color: row.color, health: row.health,
      playerClass: row.playerClass, level: row.level || 1, xp: row.xp || 0,
      skillPoints: row.skillPoints || 0, unlockedSkills, inventory: invRows.rows,
      zone: row.zone || "urban_core", quests,
      unlockedCompanions, activeCompanion: row.activeCompanion || null,
      unlockedPets, activePet: row.activePet || null
    };
    await redisClient.setEx(`user:${id}`, 3600, JSON.stringify(user));
    return user;
  }
  return { id, password_hash: null, x: 0, y: 0, z: 0, color: '#ffffff', health: 100, playerClass: null, level: 1, xp: 0, skillPoints: 0, unlockedSkills: [], inventory: [], zone: "urban_core", quests: [], unlockedCompanions: [], activeCompanion: null, unlockedPets: [], activePet: null };
}

async function saveUser(id, { x, y, z, color, health, playerClass, level, xp, skillPoints, unlockedSkills, zone, quests, inventory, password_hash, unlockedCompanions, activeCompanion, unlockedPets, activePet }) {
  const skillsStr = unlockedSkills ? JSON.stringify(unlockedSkills) : '[]';
  const questsStr = quests ? JSON.stringify(quests) : '[]';
  const companionsStr = unlockedCompanions ? JSON.stringify(unlockedCompanions) : '[]';
  const petsStr = unlockedPets ? JSON.stringify(unlockedPets) : '[]';
  
  await pool.query(
    `INSERT INTO users (id, password_hash, x, y, z, color, health, "playerClass", level, xp, "skillPoints", "unlockedSkills", inventory, zone, quests, "unlockedCompanions", "activeCompanion", "unlockedPets", "activePet") 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, '[]', $13, $14, $15, $16, $17, $18)
     ON CONFLICT (id) DO UPDATE SET 
     password_hash = COALESCE(EXCLUDED.password_hash, users.password_hash),
     x = EXCLUDED.x, y = EXCLUDED.y, z = EXCLUDED.z, color = EXCLUDED.color, health = EXCLUDED.health,
     "playerClass" = EXCLUDED."playerClass", level = EXCLUDED.level, xp = EXCLUDED.xp, 
     "skillPoints" = EXCLUDED."skillPoints", "unlockedSkills" = EXCLUDED."unlockedSkills", 
     zone = EXCLUDED.zone, quests = EXCLUDED.quests,
     "unlockedCompanions" = EXCLUDED."unlockedCompanions", "activeCompanion" = EXCLUDED."activeCompanion",
     "unlockedPets" = EXCLUDED."unlockedPets", "activePet" = EXCLUDED."activePet"`,
    [id, password_hash || null, x, y, z, color || '#ffffff', health ?? 100, playerClass || null, level || 1, xp || 0, skillPoints || 0, skillsStr, zone || "urban_core", questsStr, companionsStr, activeCompanion || null, petsStr, activePet || null]
  );

  const cachePayload = { id, password_hash, x, y, z, color, health, playerClass, level, xp, skillPoints, unlockedSkills, zone, quests, inventory, unlockedCompanions, activeCompanion, unlockedPets, activePet };
  await redisClient.setEx(`user:${id}`, 3600, JSON.stringify(cachePayload));
}

async function saveInventory(id, inventory) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('DELETE FROM inventory_items WHERE user_id = $1', [id]);
    if (inventory && Array.isArray(inventory)) {
      for (const item of inventory) {
        await client.query(
          'INSERT INTO inventory_items (id, user_id, item_id, quantity, slot) VALUES ($1, $2, $3, $4, $5)',
          [item.instanceId, id, item.itemId, item.quantity, item.slot]
        );
      }
    }
    await client.query('COMMIT');
    
    const cached = await redisClient.get(`user:${id}`);
    if (cached) {
      const u = JSON.parse(cached);
      u.inventory = inventory;
      await redisClient.setEx(`user:${id}`, 3600, JSON.stringify(u));
    }
  } catch(e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

async function getObjects() {
  const { rows } = await pool.query('SELECT * FROM world_objects');
  return rows;
}
async function getObject(id) {
  const { rows } = await pool.query('SELECT * FROM world_objects WHERE id = $1', [id]);
  return rows[0];
}
async function saveObject(obj) {
  const type = obj.objectType || obj.type || 'unknown';
  await pool.query(
    'INSERT INTO world_objects (id, type, x, y, z) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO UPDATE SET type = EXCLUDED.type, x = EXCLUDED.x, y = EXCLUDED.y, z = EXCLUDED.z',
    [obj.id, type, obj.x, obj.y, obj.z]
  );
}
async function deleteObject(id) {
  await pool.query('DELETE FROM world_objects WHERE id = $1', [id]);
}
async function getTerrain() {
  const { rows } = await pool.query('SELECT * FROM world_terrain');
  return rows;
}
async function saveTerrain(t) {
  await pool.query(
    'INSERT INTO world_terrain (x, z, height) VALUES ($1, $2, $3) ON CONFLICT (x, z) DO UPDATE SET height = EXCLUDED.height',
    [t.x, t.z, t.height]
  );
}

module.exports = {
  getUser, saveUser, saveInventory,
  getObjects, getObject, saveObject, deleteObject,
  getTerrain, saveTerrain,
  redisClient, pool
};
