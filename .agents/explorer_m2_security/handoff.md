# Handoff Report — Security Audit Exploration

## 1. Observation

Direct observations made in the repository:
- **Wildcard CORS Configuration**:
  - Path: `backend/index.js` (line 36)
  - Code: `app.use(cors());`
- **Undeclared Variable in close handler**:
  - Path: `backend/index.js` (line 1632)
  - Code: `broadcast({ type: "leave", sessionId });` where `sessionId` is not declared in the surrounding closure scope.
- **Authentication checks missing**:
  - Path: `backend/index.js` (lines 646, 649, 720, 731, 743, 766, 824, 937, 998, 1023, 1047, 1157, 1214, 1308, 1422, 1432, 1477, 1498, 1513, 1571, 1577, 1581)
  - Details: WebSocket message callbacks do not verify if `ws.sessionId` is populated before modifying player states or querying Redis.
- **Client-Side price and item trust**:
  - Path: `backend/index.js` (lines 1513-1534)
  - Code: `const cost = data.price; if (economyManager.deductCurrency(player, cost)) { ... player.inventory.push({ itemId: data.itemId, ... }) }`
- **Dialogue Choice Manipulation**:
  - Path: `backend/index.js` (lines 766-778)
  - Code: `const nodeId = data.choiceId || "start"; const node = npc.dialogueTree[nodeId];` without verifying that the player was offered this dialogue node.
- **Teleportation via use_ability**:
  - Path: `backend/abilities/coreAbilities.js` (lines 68-76)
  - Code: `attacker.x = x; attacker.z = z;` directly copying user-controlled ability coordinates from `data.x` and `data.z`.
- **Decimal quantity dropping**:
  - Path: `backend/index.js` (lines 948-960)
  - Code: `const dropQty = Math.min(quantity || 1, item.quantity); item.quantity -= dropQty;` without integer validation of `quantity`.
- **Hardcoded secrets**:
  - Path: `backend/authManager.js` (lines 5-6)
  - Code: `const JWT_SECRET = process.env.JWT_SECRET || 'YOUR_SECRET_KEY';`
- **Bcrypt DoS**:
  - Path: `backend/authManager.js` (lines 12-63)
  - Details: Lacks checks on the maximum length of the `password` body parameter.
- **Upstash Redis TLS rejectUnauthorized**:
  - Path: `backend/dbConnection.js` (line 23)
  - Code: `rejectUnauthorized: false`
- **SQL Parameterized queries**:
  - Path: `backend/db.js` (lines 9, 10, 54, 78, 81, 108, 114, 121, 128)
  - Details: All query operations use `$1`, `$2` parameterized formats.
- **XP NaN Bug in Generated Abilities**:
  - Path: `backend/abilities/generatedAbilities.js` (lines 30, 99, and multiple registrations)
  - Code: `const xpRes = awardXP(attacker, target.modelFile, false, attacker.combo);` which attempts to pass a string (`target.modelFile`) as the level (number) parameter.

---

## 2. Logic Chain

1. **CORS Vulnerability**: Since `app.use(cors())` is invoked without parameters, it sets `Access-Control-Allow-Origin: *`. This allows any third-party domain to read REST responses from client-side requests, violating proper origin containment.
2. **Server Crash**: During a WebSocket disconnect, the `close` handler triggers `broadcast({ type: "leave", sessionId });`. Because `sessionId` is not declared in the block or its parents (it is only set as `ws.sessionId` during login/join), Node.js throws a `ReferenceError` which is uncaught, leading to an immediate process exit or server crash.
3. **Authentication Bypass**: In `wss.on("connection")`, incoming WS payloads are processed via message listeners. The majority of handlers fetch the player state from Redis using `ws.sessionId`. If the client bypasses the `"join"` message (the only handler validating the JWT), `ws.sessionId` is undefined. The database then reads/writes using `"undefined"` as a key, or throws TypeErrors, enabling unauthenticated access and potential state corruption.
4. **Transaction price spoofing**: The `buy_item` WS message extracts `data.price` and `data.itemId` directly from the client. Since the server immediately calls `deductCurrency` using `data.price` and grants `data.itemId` without checking an authoritative list of prices, a client can send `price: -100000` to gain infinite gold or `price: 0` to acquire any item.
5. **Teleportation exploit**: Ability coordinates (`data.x`, `data.z`) are trusted from the WS payload. The `the_phantom_shift_skill_2` handler copies these coordinates directly into `attacker.x` and `attacker.z`. Since the handler does not validate distance boundaries, it allows players to teleport to any coordinates.
6. **Dialogue state spoofing**: Dialogue transitions are client-driven via `choiceId`. The server maps this to `dialogueTree[choiceId]` and processes rewards/quests immediately without comparing it to `availableChoices`, allowing users to skip requirements.
7. **Item duplication via floats**: Dropping items extracts a `quantity` from the client and subtracts it from inventory. Spawning loops run up to `dropQty`. If `quantity` is a float (e.g. `0.5` or `1.5`), the loop runs `Math.ceil(dropQty)` times to spawn objects, while only subtracting the float value from the inventory, resulting in inventory duplication.
8. **Bcrypt DoS**: Bcrypt uses complex rounds of hashing. Failing to check password limits allows massive strings to be hashed, occupying CPU cores and causing thread pool starvation, yielding Denial of Service.
9. **SQL injection check**: All SQL queries use array parameter arguments (e.g., `pool.query(..., [...])`) and do not perform string concatenation of input, confirming that the database is robust against SQL Injection.
10. **Target Level Corruption**: `generatedAbilities.js` passes `target.modelFile` (e.g., `"scavenger_drone"`) to `awardXP` as the `enemyLevel` parameter. `awardXP` passes this to `Math.max(1, level)` in `scalingManager.js`. Since `Math.max(1, "scavenger_drone")` is `NaN`, the player's XP is incremented by `NaN`, corrupting their state permanently.

---

## 3. Caveats

- **External Dependency Vulnerabilities**: We did not run `npm audit` because we are running under a strict `CODE_ONLY` network restriction (no external HTTP network connections allowed). Some dependencies might have minor CVEs.
- **Frontend Code Scope**: The React client-side files (`Login.tsx`, `App.tsx`, `multiplayerStore.ts`) were analyzed for common state bugs, token management, and XSS risks, but client-side React rendering has not been fully verified for custom DOM injections beyond React's built-in escaping.
- **Redis Security**: Redis is assumed to run on the local host or internally. The use of `rejectUnauthorized: false` in `dbConnection.js` suggests development setups, but must be checked in production configurations to prevent MitM.

---

## 4. Conclusion

The application has zero SQL Injection vulnerabilities but is plagued by critical logical security flaws. 
- The server is highly fragile due to an undeclared variable (`sessionId`) in the WebSocket `close` handler, causing crashes on disconnect.
- The game economy is highly vulnerable because clients control item pricing and item names during purchases, and can duplicate items via float drop quantities.
- Players can teleport instantly across the map or force-teleport other players using specific skills.
- The player progression system will corrupt a user's XP to `NaN` if they defeat an enemy using an active ability.

---

## 5. Verification Method

- **SQL Parameterization**: Inspect `backend/db.js` and `backend/authManager.js` to verify all inputs are wrapped in query parameter arrays.
- **Server crash validation**: Simulate a WebSocket connection, join, and close the socket. Observe the server console for `ReferenceError: sessionId is not declared` and the subsequent crash.
- **Price spoofing**: Connect to the WebSocket server and send:
  ```json
  {"type": "buy_item", "itemId": "skin_neon_katana", "price": -99999}
  ```
  Inspect currency update message returning positive currency.
- **XP corruption**: Trigger an active skill (e.g., `'the_protocol_weaver_skill_1'`) in-game against an NPC and verify that `player.xp` is serialized as `null` or corrupted to `NaN` in Redis.
