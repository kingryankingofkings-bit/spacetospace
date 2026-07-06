## 2026-07-05T20:54:05Z
You are the Test Suite & Verification Implementer (Generation 1). Your working directory is C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m6_test_gen1.
Please review:
- C:\Users\Kingr\.gemini\config\skills\test-suite-builder\SKILL.md
- C:\Users\Kingr\.gemini\config\skills\task-breakdown-and-agent-handoff\SKILL.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Write backend unit tests in backend/test/ (e.g., auth.test.js, combat.test.js, economy.test.js) utilizing Node.js's native test runner (node:test and node:assert). Verify:
   - Password hashing constraints (bcrypt limits) and JWT token signing/verification in authManager.js.
   - Item price lookups and currency deductions in economyManager.js.
   - Combat systems formulas, counters, and hit-stun rules in combatSystem.js.
2. Write a backend integration test (e.g., backend/test/integration.test.js) that spawns the backend server (index.js) as a child process on a non-default test port, verifies the server starts up and listens, makes a test WebSocket connection (using the existing 'ws' package) to verify communication, and cleanly terminates the process.
3. Write a test runner script (e.g., backend/run-tests.js) that executes the unit/integration tests and verifies the frontend builds cleanly (by running 'npm run build' inside the frontend directory and checking the exit code).
4. Wire 'npm test' in backend/package.json to execute node/run-tests.js.
5. Create a TEST_READY.md file at the project root outlining how to run the test suite and summarizing test cases/results.
6. Verify that all tests pass.
7. Write a handoff report to C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m6_test_gen1\handoff.md and notify parent (8ba1cb12-37cc-4533-a6c7-5a00b1102e75).
