# Security Audit Report — M2 Milestone

This report documents the security audit findings for the backend and frontend components of the application. The audit was conducted focusing on authentication, session management, CORS configuration, SQL injection, input validation, and cryptographic safety.

---

## Executive Summary

The application has a robust database abstraction layer utilizing parameterized queries throughout, which successfully prevents SQL Injection attacks. Cryptographic mechanisms like `bcrypt` and `jsonwebtoken` (JWT) are configured with reasonable token expiry windows.

However, several critical vulnerabilities were identified in the WebSocket handler and application logic, including:
1. **Critical Client-Side Trust (Price Spoofing)**: Clients can spoof transaction prices and item definitions in the `buy_item` handler, leading to infinite gold and item duplication.
2. **Critical Server Crash Risk**: A ReferenceError on client disconnection due to an undeclared variable (`sessionId`) could crash the Node.js server.
3. **High Unauthenticated Command execution**: Most WebSocket message types do not verify if `ws.sessionId` is set before executing database and state changes.
4. **High Input Verification Gaps (Teleportation/Repositioning Hacks)**: Movement coordinate validations can be bypassed via ability execution contexts.
5. **High Dialogue state bypassing**: Dialogue trees trust client-provided choice nodes instead of verifying valid transitions.
6. **Medium Math/Float Logic exploits**: Item dropping and trade quantity filters fail to restrict values to integers, causing item duplication.
7. **Medium Bcrypt CPU Exhaustion**: Lack of a maximum password length constraint allows hash calculations on arbitrarily large inputs.

---

## Detailed Findings

### 1. Authentication & Session Management

#### [Critical] Server Crash via Uncaught ReferenceError on Disconnect
* **File**: `backend/index.js`
* **Line**: 1632
* **Verbatim Code**:
  ```javascript
  ws.on("close", async () => {
    if (ws.sessionId) {
      ...
      broadcast({ type: "leave", sessionId });
    }
  });
  ```
* **Impact**: The variable `sessionId` is not declared in the lexical scope of the `close` handler (only `ws.sessionId` is defined). When a client disconnects, the server attempts to broadcast with the undeclared `sessionId` variable, throwing a `ReferenceError`. Since this runs in an asynchronous event callback, it causes an uncaught exception that can crash the entire Node.js server.

#### [High] Authentication Bypass on State-Changing WebSocket Messages
* **File**: `backend/index.js`
* **Line**: 547-1618 (`wss.on("connection")`)
* **Description**: The WebSocket server accepts connections and registers message listeners immediately. While the `"join"` message verifies the JWT token and sets `ws.sessionId`, the vast majority of other message handlers (such as `accept_quest`, `fast_travel`, `set_appearance`, `select_class`, `unlock_skill`, `interact_npc`, `interact_wild_pet`, `drop_item`, `trade_request`, `trade_update`, `trade_accept`, `craft`, `use_item`, `attack`, `spawn_boss`, `use_ability`, `gather_node`, `craft_recipe`, `buy_item`, `chat`, `npc_dialogue`, `vendor_buy`) do not check if `ws.sessionId` is defined.
* **Impact**: An unauthenticated WebSocket connection can send messages directly and execute database logic. For example, in `fast_travel`, an unauthenticated client will cause the server to fetch data from Redis with key `undefined`, causing state corruption or reading/writing to an `"undefined"` session ID.

#### [Medium] Bcrypt CPU Exhaustion / Denial of Service
* **File**: `backend/authManager.js`
* **Lines**: 12-63 (`register`, `login`)
* **Description**: The endpoints `/api/auth/register` and `/api/auth/login` enforce a minimum password length of 6 characters but enforce no maximum limit. 
* **Impact**: `bcrypt` is a CPU-intensive hashing algorithm. A malicious user can send extremely long passwords (e.g., several megabytes) during registration or login. The server will attempt to hash these large inputs, consuming massive CPU cycles and blocking the Node.js event loop, resulting in a Denial of Service (DoS) for all users.
* **Note**: Bcrypt also silently truncates passwords longer than 72 bytes.

#### [Medium] Hardcoded Fallback Secrets
* **File**: `backend/authManager.js`
* **Lines**: 5-6
* **Verbatim Code**:
  ```javascript
  const JWT_SECRET = process.env.JWT_SECRET || 'YOUR_SECRET_KEY';
  const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'YOUR_REFRESH_SECRET_KEY';
  ```
* **Impact**: If environment variables are omitted or misconfigured in production, the server falls back to public, hardcoded secret strings. This allows attackers to forge valid JWT access and refresh tokens, bypassing authentication entirely.

#### [Low] Local Storage Token Storage
* **File**: `frontend/src/components/Login.tsx`
* **Lines**: 28-30
* **Impact**: The application stores JWT tokens directly in `localStorage` (`localStorage.setItem('auth_token', data.token)`). Because `localStorage` is accessible via JavaScript, a Cross-Site Scripting (XSS) vulnerability anywhere in the frontend application would allow attackers to steal session tokens. Implementing HttpOnly cookies is recommended.

#### [Low] Absence of Rate Limiting
* **Description**: There is no rate limiting implemented on `/api/auth/register`, `/api/auth/login`, `/api/auth/refresh`, or WebSocket handlers.
* **Impact**: Attackers can execute automated brute-force attacks against user passwords or flood the server with account registrations and chat spam.

---

### 2. CORS Configuration

#### [Low] Wildcard CORS Header Configuration
* **File**: `backend/index.js`
* **Line**: 36
* **Verbatim Code**:
  ```javascript
  app.use(cors());
  ```
* **Impact**: The default invocation of the `cors` middleware sets `Access-Control-Allow-Origin: *` (wildcard). This permits any external site to read responses from the Express API endpoints. In production, this should be restricted to a specific whitelist of trusted origins.

---

### 3. Input & WebSocket Message Handlers

#### [Critical] Client-Side Trust in Transactions (Price Spoofing)
* **File**: `backend/index.js`
* **Lines**: 1513-1534 (`else if (data.type === "buy_item")`)
* **Verbatim Code**:
  ```javascript
  const cost = data.price;
  if (economyManager.deductCurrency(player, cost)) {
      if (!player.inventory) player.inventory = [];
      player.inventory.push({
          id: "item_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
          type: data.itemId,
          itemId: data.itemId,
          quantity: 1
      });
  ```
* **Impact**: The `buy_item` handler accepts the `itemId` and the `price` directly from the client payload. If a client transmits a negative price (e.g., `-1000000`), the `deductCurrency` function evaluates `player.currency >= cost` (which is true for negative costs) and performs `player.currency -= -1000000` (adding 1,000,000 to the player's currency). This enables players to buy any item for free and generate infinite currency.
* **Remediation**: The server must resolve prices from its internal config (`VENDOR_INVENTORIES`) rather than trusting the client payload.

#### [High] Bypass of Movement Constraints via Ability Teleportation
* **File**: `backend/abilities/coreAbilities.js`
* **Lines**: 68-76 (`the_phantom_shift_skill_2`)
* **Verbatim Code**:
  ```javascript
  register('the_phantom_shift_skill_2', (context) => {
    const { attacker, x, z } = context;
    if (attacker && x !== undefined && z !== undefined) {
      attacker.x = x;
      attacker.z = z;
  ```
* **Impact**: The normal movement logic in `backend/index.js` checks player speed and reconciles positions. However, when using the `use_ability` action, the client specifies coordinate parameters (`data.x`, `data.z`) directly. The ability `the_phantom_shift_skill_2` applies these coordinates without checking range constraints, allowing players to teleport anywhere in the game zone instantly.
* **Related Issue (Player Repositioning/Griefing)**: The ability `the_scrap_tek_skill_2` moves the target's coordinates to the attacker's coordinates (`target.x = attacker.x`). A player could target another player and force-teleport them across the map, enabling griefing.

#### [High] Dialogue Choice Bypassing / Faction Rep Spoofing
* **File**: `backend/index.js`
* **Lines**: 766-816 (`else if (data.type === "interact_npc")`)
* **Description**: When interacting with an NPC, the client sends `choiceId`. The server reads `nodeId = data.choiceId || "start"` and executes the actions associated with that dialogue tree node (`node.addFactionRep`, `node.addChoice`, etc.).
* **Impact**: The server does not verify that the player is actually on a dialogue node that offers this choice. A client can bypass dialogue requirements entirely by transmitting `choiceId` parameters targeting final nodes, auto-completing quests, gaining unauthorized faction reputation, or triggering vendor actions.

#### [Medium] Floating Point/Negative Value Exploit in Dropping and Trading
* **File**: `backend/index.js`
* **Lines**: 948-964 (`drop_item`) and 1028-1038 (`trade_update`)
* **Description**:
  In `drop_item`:
  ```javascript
  const { instanceId, quantity } = data;
  if (quantity < 1) { await client.query('ROLLBACK'); return; }
  ...
  const dropQty = Math.min(quantity || 1, item.quantity);
  item.quantity -= dropQty;
  ...
  const actualDrops = Math.min(dropQty, MAX_DROPS);
  for (let i = 0; i < actualDrops; i++) { ... }
  ```
* **Impact**: The server validates that `quantity >= 1` (via `quantity < 1` return), but does not check if the quantity is a whole integer. If a client sends a floating-point quantity like `1.5`, the loop `i < actualDrops` runs twice (since `0 < 1.5` and `1 < 1.5`), spawning 2 items, but only `1.5` is deducted from the player's inventory. Similarly, for `0.5` (if it bypassed the `quantity < 1` check), it could create similar discrepancies. In `trade_update`, quantities are filtered by `quantity > 0` but not validated as integers, permitting exploits during trade updates.

---

### 4. SQL Injection risks in db.js and Database connection logic

#### [No Risk] Parameterized Query Verification
* **Audit Result**: Verified. All queries executed in `backend/db.js`, `backend/dbConnection.js`, `backend/authManager.js`, and `backend/index.js` strictly use parameterized queries (using placeholders like `$1`, `$2`, etc.) and array-bound inputs.
* **Examples audited**:
  - `db.js:9`: `pool.query('SELECT * FROM users WHERE id = $1', [id])`
  - `db.js:54`: Multi-column upsert query utilizing array mapping.
  - `index.js:847`: `client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [sessionId])`
* **Conclusion**: The codebase is secure against SQL Injection.

---

### 5. Cryptographic Verification Safety

#### [Adequate] Hashing Verification
* **Algorithm**: `bcrypt`
* **Salt rounds**: 10
* **Verification function**: `bcrypt.compare`
* **Assessment**: The hashing configuration is cryptographically sound, and use of `compare` is safe. Salt rounds could be bumped to 12 for heightened security.

#### [Adequate] JWT Token Lifetime & Storage
* **Access token lifespan**: 15 minutes
* **Refresh token lifespan**: 7 days
* **Refresh token rotation**: On token refresh, a new refresh token is issued, and the old token is replaced in Redis, preventing concurrent sessions using stale tokens.

---

### 6. Additional Findings & Logic Bugs

#### [Medium] Target Level Corruption via Ability XP Scaling
* **File**: `backend/abilities/generatedAbilities.js`
* **Lines**: Line 30 and other skill handler definitions.
* **Verbatim Code**:
  ```javascript
  const xpRes = awardXP(attacker, target.modelFile, false, attacker.combo);
  ```
* **Impact**: The `awardXP` function expects `enemyLevel` (a number) as its second parameter. However, the auto-generated ability handlers pass `target.modelFile` (a string, e.g., `"scavenger_drone"`) as the second argument, and `false` as the third. Inside `awardXP`, the string is passed to `scalingManager.getEnemyBaseStats` which tries to run `Math.max(1, level || 1)`. Since `level` is a string, this returns `NaN`. The resulting stats yield `NaN` for `xpReward`, which poisons the player's XP value (`player.xp += NaN`). The player's XP becomes permanently corrupted to `NaN`, blocking all future level-ups.

#### [Low] Disabled TLS Hostname Verification in Redis
* **File**: `backend/dbConnection.js`
* **Line**: 23
* **Verbatim Code**:
  ```javascript
  redisOptions.socket = {
    tls: true,
    rejectUnauthorized: false
  };
  ```
* **Impact**: The setting `rejectUnauthorized: false` disables TLS certificate verification. If the Redis client connects to a remote Redis instance (e.g. Upstash) over the internet, it is vulnerable to Man-in-the-Middle (MitM) intercept attacks.
