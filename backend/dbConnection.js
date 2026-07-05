const { Pool } = require('pg');
const { createClient } = require('redis');
const migrate = require('node-pg-migrate').default;
const path = require('path');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/world',
});

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

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
