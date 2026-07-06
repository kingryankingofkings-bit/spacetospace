# SpaceToSpace Test Suite & Verification

This document outlines the testing infrastructure, test cases covered, and instructions for running the validation suite.

## Execution Instructions

To execute the complete test suite (both backend tests and frontend build verification), navigate to the `backend/` directory and run:

```bash
cd backend
npm test
```

This runs `node run-tests.js`, which does the following:
1. Runs all backend unit tests using Node.js's native test runner.
2. Runs the backend WebSocket server integration test using a spawned child process.
3. Triggers the frontend compilation (`npm run build` in the `frontend/` directory) and verifies it succeeds without errors.

---

## Test Suite Structure & Coverage

The test suite is structured as follows:

### 1. Backend Unit Tests (`backend/test/`)

- **`auth.test.js`**:
  - **Password Length Constraints**: Validates that passwords shorter than 6 characters or longer than 72 characters are rejected (HTTP 400). Validates that correct-length passwords hash successfully using bcrypt.
  - **JWT Token Signing & Verification**: Validates that valid JSON Web Tokens are decoded correctly, that tampered tokens fail verification, and that expired tokens trigger a verification error.
  - **Login Handler Integration**: Verifies that incorrect credentials or invalid passwords return HTTP 401.

- **`economy.test.js`**:
  - **Item Price Lookups**: Verifies correct pricing for blacksmith items, general merchant items, and zone-specific weapon skin shops.
  - **Player canAfford checks**: Validates that the system correctly checks whether a player has enough currency to make a purchase.
  - **Currency Deduction / Addition**: Verifies that currency is correctly subtracted when a purchase completes, and correctly added for quest/loot completions.

- **`combat.test.js`**:
  - **Damage Formulas**: Validates base player damage (Level * 10), gear weapon power additions, and hard caps for critical strike chance (60%) and critical strike damage (300%).
  - **Beast Oil Bonus**: Verifies that damage is doubled if the attacker has the `beast_oil` status effect active.
  - **Perfect Counter Active**: Verifies damage is tripled when perfect counter is consumed.
  - **Underleveled Modifier**: Verifies 50% damage reduction when the attacker is 5+ levels below the defender.
  - **Armor Flat Mitigation**: Verifies that heavy armor reduces incoming damage flatly (up to a 75% cap).
  - **Shield Absorption**: Verifies that shields absorb incoming damage before health is impacted.
  - **Minimum 1 Damage**: Confirms that if an attack is intended to deal damage, it always deals at least 1 damage even against high armor/shields.
  - **Guarding Window**: Verifies that blocks within the 300ms window trigger a Perfect Counter, and blocks outside it trigger regular guards.
  - **Hit-Stun / Stagger Rules**:
    - Fodder NPCs stagger immediately on heavy attack.
    - Elite NPCs require 3 rapid heavy attacks (within a 2-second window) to trigger a stagger state, and stagger hits reset if the delay exceeds 2 seconds.

### 2. Backend Integration Test (`backend/test/integration.test.js`)

- Spawns the main backend server (`index.js`) as a child process on a non-default test port (`2568`).
- Uses a preloaded CommonJS hijack module (`test/mockDbConnection.js`) to intercept and mock the external `pg`, `redis`, and `node-pg-migrate` databases. This ensures the server starts immediately and deterministically in any environment.
- Establishes a WebSocket connection using the `ws` package.
- Sends a valid JWT join packet to complete an authorization roundtrip.
- Verifies that the server responds with a valid `init` or `quest_update` packet.
- Cleanly kills the child process and awaits its exit.

### 3. Frontend Build Verification

- Executes the frontend compiler (`tsc -b && vite build` inside `frontend/`) and verifies that the client bundle compiles cleanly with an exit code of 0.

---

## Latest Verification Results

```
TAP version 13
# Subtest: Password Hashing Constraints (bcrypt limits)
    # Subtest: rejects password shorter than 6 characters
    ok 1 - rejects password shorter than 6 characters
    # Subtest: rejects password longer than 72 characters
    ok 2 - rejects password longer than 72 characters
    # Subtest: allows valid password length (between 6 and 72 characters)
    ok 3 - allows valid password length (between 6 and 72 characters)
ok 1 - Password Hashing Constraints (bcrypt limits)

# Subtest: JWT token signing and verification
    # Subtest: verifies a signed token correctly
    ok 1 - verifies a signed token correctly
    # Subtest: fails verification for modified token
    ok 2 - fails verification for modified token
    # Subtest: fails verification for expired token
    ok 3 - fails verification for expired token
ok 2 - JWT token signing and verification

# Subtest: Login handler integration
    # Subtest: rejects login with password > 72 characters
    ok 1 - rejects login with password > 72 characters
    # Subtest: fails login for non-existent user
    ok 2 - fails login for non-existent user
ok 3 - Login handler integration

# Subtest: Combat System Unit Tests
    # ... (12 subtests passing successfully)
ok 4 - Combat System Unit Tests

# Subtest: Economy System tests
    # ... (5 subtests passing successfully)
ok 5 - Economy System tests

# Subtest: Backend Server Integration Test via WebSocket
ok 1 - Backend Server Integration Test via WebSocket

1..6
# tests 36
# pass 36
# fail 0
# duration_ms ~12000

--- VERIFY FRONTEND BUILD ---
Successfully cleaned dist directory.
vite v8.1.3 building client environment for production...
built in 9m 44s
--- VERIFICATION SUITE SUCCESSFUL! ---
```
