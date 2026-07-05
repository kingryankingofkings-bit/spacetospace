exports.up = (pgm) => {
  pgm.sql(`
    ALTER TABLE users ADD COLUMN IF NOT EXISTS "factionReputation" TEXT;
    ALTER TABLE users ADD COLUMN IF NOT EXISTS choices TEXT;
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    ALTER TABLE users DROP COLUMN IF EXISTS "factionReputation";
    ALTER TABLE users DROP COLUMN IF EXISTS choices;
  `);
};
