const Module = require('module');

const mockRedis = {
  connect: async () => {},
  duplicate: () => mockRedis,
  subscribe: async () => {},
  get: async () => null,
  set: async () => {},
  setEx: async () => {},
  hSet: async () => {},
  hGet: async () => null,
  hDel: async () => {},
  sAdd: async () => {},
  sRem: async () => {},
  sCard: async () => 0,
  sMembers: async () => [],
  hmGet: async () => [],
  hLen: async () => 0,
  publish: async () => {},
  on: () => {}
};

const mockPool = {
  query: async (queryText) => {
    if (queryText.includes('COUNT(*)')) {
      return { rows: [{ count: '10' }] };
    }
    return { rows: [] };
  },
  on: () => {}
};

const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  if (id === 'pg') {
    return { Pool: function() { return mockPool; } };
  }
  if (id === 'redis') {
    return { createClient: () => mockRedis };
  }
  if (id === 'node-pg-migrate') {
    return {
      runner: async () => {},
      default: async () => {}
    };
  }
  return originalRequire.apply(this, arguments);
};
