---
name: agentic-auto-fixer
description: Use this skill when the user asks you to "check the AI logs", "hotfix a crash", or investigate an auto-disabled feature in the game server.
---

# Agentic Auto-Fixer Protocol

The project is equipped with an AI Telemetry Monitor and an Auto-Healing Kill Switch. When the server crashes during an ability or item usage, it does NOT go offline. Instead, it logs the exception stack trace to `backend/logs/ai_monitor.log` and automatically appends the feature ID to `backend/disabled_features.json`.

If the user asks you to hotfix a crash, you MUST follow these exact steps:

## 1. Diagnose the Crash
Use the `view_file` tool to read `backend/logs/ai_monitor.log`. 
- Look for `[CRITICAL]` or `[ERROR]` logs.
- Identify the exact feature that crashed (e.g., `item_potion_health` or `ability_fireball`).
- Read the stack trace provided in the log to understand exactly which line in `backend/index.js` or `backend/combatSystem.js` threw the exception.

## 2. Apply the Hotfix
Use your file editing tools (`multi_replace_file_content` or `replace_file_content`) to modify the source code and fix the logical error that caused the crash.

## 3. Re-enable the Feature
Once you are 100% confident you have fixed the code, you must remove the feature from the Kill Switch blacklist so players can use it again.
- Use `view_file` to read `backend/disabled_features.json`.
- Remove the fixed feature ID from the JSON array.
- Use `write_to_file` to overwrite `backend/disabled_features.json` with the updated array.

## 4. Restart the Server (If necessary)
If PM2 is managing the process, your file edits might auto-restart it if watch is enabled, or you can run `pm2 restart game-backend`.
Otherwise, inform the user that the hotfix has been applied and the feature is re-enabled!
