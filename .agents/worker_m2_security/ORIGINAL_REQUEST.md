## 2026-07-05T20:22:18Z
You are the Backend Security Implementer. Your working directory is C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m2_security.
Please review the security findings in C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\explorer_m2_security\analysis.md and C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\explorer_m2_security\handoff.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Tasks:
1. Fix the server crash risk in backend/index.js (line 1632) close handler by properly declaring 'sessionId' or using 'ws.sessionId'.
2. Add check in backend/index.js WebSocket handlers to verify ws.sessionId is defined before processing authenticated operations (join, buy, move, dialogue, ability, etc.).
3. Fix transaction price spoofing in buy_item handler by verifying item prices server-side using an authoritative map or database check.
4. Enforce strict integer check on quantity dropped in backend/index.js drop item logic, rejecting float values.
5. Limit incoming password length in backend/authManager.js to prevent bcrypt CPU Denial of Service.
6. Fix the XP NaN bug in backend/abilities/generatedAbilities.js where target.modelFile string is passed to awardXP instead of a numeric level.
7. Bounding checks: Validate player positions and movement distance in backend message handlers.
8. Verify that the backend server starts successfully without crashing (e.g. run "node index.js" or verify compilation).
9. Write a handoff report to C:\Users\Kingr\Documents\antigravity\noble-pasteur\.agents\worker_m2_security\handoff.md and notify parent (8ba1cb12-37cc-4533-a6c7-5a00b1102e75).
