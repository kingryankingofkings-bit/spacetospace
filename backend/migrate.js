const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  database: process.env.POSTGRES_DB || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_PORT || 5432,
});

async function run() {
  try {
    await pool.query(`ALTER TABLE world_objects ADD COLUMN IF NOT EXISTS zone TEXT DEFAULT 'verdant_town';`);
    await pool.query(`ALTER TABLE world_terrain ADD COLUMN IF NOT EXISTS zone TEXT DEFAULT 'verdant_town';`);
    console.log("Migration complete");
  } catch (err) {
    console.error("Migration error:", err);
  } finally {
    await pool.end();
  }
}

run();
