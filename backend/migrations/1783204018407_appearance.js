exports.up = (pgm) => {
  pgm.addColumns('users', {
    appearance: { type: 'jsonb', default: '{}' }
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('users', ['appearance']);
};
