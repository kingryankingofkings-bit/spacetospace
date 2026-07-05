const { Pool } = require('pg');
const { createClient } = require('redis');
const pgMigrate = require('node-pg-migrate');
const migrate = pgMigrate.runner || pgMigrate.default || pgMigrate;
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/world',
});

let redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

// Auto-correct Upstash URLs to use the secure TLS protocol
if (redisUrl.includes('upstash') && redisUrl.startsWith('redis://')) {
  redisUrl = redisUrl.replace('redis://', 'rediss://');
}

const redisOptions = { url: redisUrl };

if (redisUrl.startsWith('rediss://')) {
  redisOptions.socket = {
    tls: true,
    rejectUnauthorized: false
  };
}

const redisClient = createClient(redisOptions);

redisClient.on('error', (err) => console.error('Redis Client Error', err));
pool.on('error', (err) => console.error('Unexpected error on idle client', err));

async function connectServices() {
  await redisClient.connect();
  
  // Run migrations
  await migrate({
    databaseUrl: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/world',
    dir: path.join(__dirname, 'migrations'),
    direction: 'up',
    migrationsTable: 'pgmigrations',
    log: (msg) => console.log('Migration:', msg),
  });
}

module.exports = {
  pool,
  redisClient,
  connectServices
};
