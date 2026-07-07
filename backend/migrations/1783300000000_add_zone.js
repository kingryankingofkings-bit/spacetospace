exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumn('world_objects', {
    zone: { type: 'text', default: 'verdant_town' },
  });
  pgm.addColumn('world_terrain', {
    zone: { type: 'text', default: 'verdant_town' },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('world_objects', 'zone');
  pgm.dropColumn('world_terrain', 'zone');
};
