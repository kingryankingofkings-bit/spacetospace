exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(255) PRIMARY KEY,
      password_hash TEXT,
      x REAL,
      y REAL,
      z REAL,
      color VARCHAR(50),
      health INTEGER,
      "playerClass" VARCHAR(50),
      level INTEGER,
      xp INTEGER,
      "skillPoints" INTEGER,
      "unlockedSkills" TEXT,
      inventory TEXT,
      zone VARCHAR(255),
      quests TEXT,
      "unlockedCompanions" TEXT,
      "activeCompanion" VARCHAR(255),
      "unlockedPets" TEXT,
      "activePet" VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS world_objects (
      id VARCHAR(255) PRIMARY KEY,
      type VARCHAR(255),
      x REAL,
      y REAL,
      z REAL
    );

    CREATE TABLE IF NOT EXISTS world_terrain (
      x REAL,
      z REAL,
      height REAL,
      PRIMARY KEY (x, z)
    );

    CREATE TABLE IF NOT EXISTS inventory_items (
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
      item_id VARCHAR(255),
      quantity INTEGER,
      slot INTEGER
    );
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE IF EXISTS inventory_items;
    DROP TABLE IF EXISTS world_terrain;
    DROP TABLE IF EXISTS world_objects;
    DROP TABLE IF EXISTS users;
  `);
};
