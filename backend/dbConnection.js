const { Pool } = require('pg');
const { createClient } = require('redis');
const pgMigrate = require('node-pg-migrate');
const migrate = pgMigrate.runner || pgMigrate.default || pgMigrate;
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/world',
});

let redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
if (redisUrl.includes('upstash') && redisUrl.startsWith('redis://')) {
  redisUrl = redisUrl.replace('redis://', 'rediss://');
}
const redisOptions = { url: redisUrl };
if (redisUrl.startsWith('rediss://')) {
  redisOptions.socket = { tls: true, rejectUnauthorized: false };
}

let redisClient = createClient(redisOptions);
redisClient.on('error', () => { /* Suppress error in case of fallback */ });
pool.on('error', () => { /* Suppress error */ });

// Mocks
const inMemoryStore = new Map();
let useMock = false;

const mockRedisClient = {
  get: async (k) => inMemoryStore.get(k) || null,
  setEx: async (k, t, v) => inMemoryStore.set(k, v),
  set: async (k, v, o) => inMemoryStore.set(k, v),
  hGet: async (h, k) => { const obj = inMemoryStore.get(h) || {}; return obj[k] || null; },
  hSet: async (h, k, v) => { const obj = inMemoryStore.get(h) || {}; obj[k] = v; inMemoryStore.set(h, obj); },
  hDel: async (h, k) => { const obj = inMemoryStore.get(h) || {}; delete obj[k]; inMemoryStore.set(h, obj); },
  hmGet: async (h, ks) => { const obj = inMemoryStore.get(h) || {}; return ks.map(k => obj[k] || null); },
  hLen: async (h) => { const obj = inMemoryStore.get(h) || {}; return Object.keys(obj).length; },
  sAdd: async (s, v) => { const set = inMemoryStore.get(s) || new Set(); set.add(v); inMemoryStore.set(s, set); },
  sRem: async (s, v) => { const set = inMemoryStore.get(s); if(set) { set.delete(v); } },
  sCard: async (s) => { const set = inMemoryStore.get(s); return set ? set.size : 0; },
  sMembers: async (s) => { const set = inMemoryStore.get(s); return set ? Array.from(set) : []; },
  multi: function() {
    let calls = [];
    return {
      sMembers: function(s) { calls.push(s); return this; },
      exec: async function() { return calls.map(s => { const set = inMemoryStore.get(s); return set ? Array.from(set) : []; }); }
    }
  },
  duplicate: function() { return this; },
  connect: async () => {},
  subscribe: async (channel, callback) => {},
  publish: async (channel, message) => { }
};

const mockPool = {
  query: async (text, params) => {
    return { rows: [] };
  },
  connect: async () => ({
    query: async () => ({ rows: [] }),
    release: () => {}
  })
};

async function connectServices() {
  try {
    const connectTask = async () => {
      await redisClient.connect();
      await migrate({
        databaseUrl: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/world',
        dir: path.join(__dirname, 'migrations'),
        direction: 'up',
        migrationsTable: 'pgmigrations',
        log: (msg) => console.log('Migration:', msg),
      });
    };
    
    await Promise.race([
      connectTask(),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout connecting to DB")), 2000))
    ]);
    console.log("Connected to Postgres and Redis successfully.");
  } catch (err) {
    console.warn("Failed to connect to Postgres or Redis. Falling back to in-memory MOCK DB.");
    try { await redisClient.disconnect(); } catch(e) {}
    useMock = true;
    module.exports.redisClient = mockRedisClient;
    module.exports.pool = mockPool;
  }
}

module.exports = {
  pool,
  redisClient,
  connectServices
};
