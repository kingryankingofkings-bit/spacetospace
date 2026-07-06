const test = require('node:test');
const assert = require('node:assert');
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
  query: async () => {
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

const authManager = require('../authManager');
const db = require('../db');

function mockResponse() {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (data) => {
    res.jsonData = data;
    return res;
  };
  return res;
}

test('Password Hashing Constraints (bcrypt limits)', async (t) => {
  await t.test('rejects password shorter than 6 characters', async () => {
    const req = {
      body: { username: 'testuser', password: '123' }
    };
    const res = mockResponse();
    await authManager.register(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.match(res.jsonData.error, /at least 6 characters/);
  });

  await t.test('rejects password longer than 72 characters', async () => {
    const longPassword = 'a'.repeat(73);
    const req = {
      body: { username: 'testuser', password: longPassword }
    };
    const res = mockResponse();
    await authManager.register(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.match(res.jsonData.error, /at most 72 characters/);
  });

  await t.test('allows valid password length (between 6 and 72 characters)', async () => {
    const validPassword = 'a'.repeat(20);
    const req = {
      body: { username: 'testuser_valid', password: validPassword }
    };
    const res = mockResponse();

    // Stub query to say user does not exist
    mockPool.query = async (sql, params) => {
      if (sql.includes('SELECT id')) {
        return { rows: [] };
      }
      return { rows: [] };
    };

    let savedUser = null;
    const originalSaveUser = db.saveUser;
    db.saveUser = async (id, data) => {
      savedUser = { id, data };
    };

    try {
      await authManager.register(req, res);
      assert.strictEqual(res.statusCode, 201);
      assert.strictEqual(res.jsonData.success, true);
      assert.ok(savedUser);
      assert.strictEqual(savedUser.id, 'testuser_valid');
      assert.ok(savedUser.data.password_hash);
      // Verify bcrypt hash structure
      assert.match(savedUser.data.password_hash, /^\$2[ab]\$.*/);
    } finally {
      db.saveUser = originalSaveUser;
    }
  });
});

test('JWT token signing and verification', async (t) => {
  const username = 'jwt_tester';

  await t.test('verifies a signed token correctly', () => {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ username }, authManager.JWT_SECRET, { expiresIn: '15m' });
    
    const decoded = authManager.verifyToken(token);
    assert.strictEqual(decoded.username, username);
  });

  await t.test('fails verification for modified token', () => {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ username }, authManager.JWT_SECRET, { expiresIn: '15m' });
    const tamperedToken = token + 'tamper';
    
    assert.throws(() => {
      authManager.verifyToken(tamperedToken);
    });
  });

  await t.test('fails verification for expired token', () => {
    const jwt = require('jsonwebtoken');
    // Sign token with 0 seconds expiration
    const token = jwt.sign({ username }, authManager.JWT_SECRET, { expiresIn: '0s' });
    
    assert.throws(() => {
      authManager.verifyToken(token);
    });
  });
});

test('Login handler integration', async (t) => {
  await t.test('rejects login with password > 72 characters', async () => {
    const longPassword = 'a'.repeat(73);
    const req = {
      body: { username: 'testuser', password: longPassword }
    };
    const res = mockResponse();
    await authManager.login(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.match(res.jsonData.error, /at most 72 characters/);
  });

  await t.test('fails login for non-existent user', async () => {
    const req = {
      body: { username: 'nonexistent', password: 'validpassword' }
    };
    const res = mockResponse();
    
    mockPool.query = async (sql, params) => {
      return { rows: [] };
    };

    await authManager.login(req, res);
    assert.strictEqual(res.statusCode, 401);
    assert.match(res.jsonData.error, /Invalid credentials/);
  });
});
