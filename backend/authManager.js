const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');

const JWT_SECRET = process.env.JWT_SECRET || 'YOUR_SECRET_KEY';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'YOUR_REFRESH_SECRET_KEY';

const authManager = {
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  
  register: async (req, res) => {
    try {
      await db.connectPromise;
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }
      if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long" });
      }
      if (password.length > 72) {
        return res.status(400).json({ error: "Password must be at most 72 characters long" });
      }
      const existing = await db.getUser(username);
      if (existing && existing.password_hash) {
        return res.status(400).json({ error: "Username already taken" });
      }
      
      const hash = await bcrypt.hash(password, 10);
      await db.saveUser(username, { password_hash: hash });
      res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (e) {
      console.error("Registration error:", e);
      res.status(500).json({ error: "Internal server error during registration" });
    }
  },

  login: async (req, res) => {
    try {
      await db.connectPromise;
      const { username, password } = req.body;
      if (!username || !password) {
         return res.status(400).json({ error: "Username and password are required" });
      }
      if (password.length > 72) {
         return res.status(400).json({ error: "Password must be at most 72 characters long" });
      }
      
      const user = await db.getUser(username);
      if (!user || !user.password_hash) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '15m' }); // short-lived access token
      const refreshToken = jwt.sign({ username }, JWT_REFRESH_SECRET, { expiresIn: '7d' }); // long-lived refresh token
      
      // Store the refresh token in Redis to track valid sessions
      await db.redisClient.set(`refresh_token:${username}`, refreshToken, { EX: 7 * 24 * 60 * 60 });
      
      res.json({ success: true, token, refreshToken, username });
    } catch (e) {
      console.error("Login error:", e);
      res.status(500).json({ error: "Internal server error during login" });
    }
  },
  
  refresh: async (req, res) => {
    try {
      await db.connectPromise;
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return res.status(400).json({ error: "Refresh token is required" });
      }
      
      let decoded;
      try {
        decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
      } catch (err) {
        return res.status(401).json({ error: "Invalid or expired refresh token" });
      }
      
      const { username } = decoded;
      const storedToken = await db.redisClient.get(`refresh_token:${username}`);
      
      if (storedToken !== refreshToken) {
        return res.status(401).json({ error: "Refresh token revoked or invalid" });
      }
      
      const newToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: '15m' });
      const newRefreshToken = jwt.sign({ username }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
      await db.redisClient.set(`refresh_token:${username}`, newRefreshToken, { EX: 7 * 24 * 60 * 60 });
      
      res.json({ success: true, token: newToken, refreshToken: newRefreshToken });
    } catch (e) {
      console.error("Refresh error:", e);
      res.status(500).json({ error: "Internal server error during refresh" });
    }
  },

  verifyToken: (token) => {
    return jwt.verify(token, JWT_SECRET);
  },
  
  setupRoutes: (app) => {
    app.post('/api/auth/register', authManager.register);
    app.post('/api/auth/login', authManager.login);
    app.post('/api/auth/refresh', authManager.refresh);
  }
};

module.exports = authManager;
