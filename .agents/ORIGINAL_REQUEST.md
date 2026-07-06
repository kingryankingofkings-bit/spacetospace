# Original User Request

## Initial Request — 2026-07-05T20:00:14Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

Deploy a recursive, multi-agent task force to execute a comprehensive engine, security, rendering, and performance audit and refactor of the noble-pasteur project, strictly utilizing the existing tech stack.

Working directory: ~/noble-pasteur
Integrity mode: demo

## Requirements

### R1. Comprehensive Multi-Agent Delegation
You must deploy subagents (and instruct them to deploy further subagents if necessary) to cover the entirety of the user's requested skill domains: `stack-selection-advisor`, `custom-engine-runtime-architect`, `console-pc-graphics-settings`, `engine-version-upgrade-planner`, `frontend-state-ui-reviewer`, `open-world-streaming-world-partition`, `performance-audit-optimizer`, `security-audit-reviewer`, `task-breakdown-and-agent-handoff`, `web-native-3d-rendering-reviewer`, and `test-suite-builder`.

### R2. Tech Stack Constraint
You must strictly use the existing stack (React Three Fiber, Node, Postgres). Do not introduce any new heavyweight dependencies or frameworks, even for testing.

### R3. Implementation Depth
Do not skip any type of task. Each assigned subagent must operate as an expert in their respective domain, making necessary code changes to optimize, audit, and secure the application.

## Acceptance Criteria

### Execution & Delegation
- [ ] At least one subagent is successfully spawned and assigned to each of the explicitly requested skills/domains.
- [ ] Task breakdown is visibly executed, with independent agents working in parallel.

### Correctness & Stability
- [ ] The backend server (`node index.js`) successfully starts without crashing.
- [ ] The frontend compiles (`npm run build`) without any new TypeScript or Vite build errors.

### Constraints
- [ ] `package.json` contains no new heavyweight framework dependencies (e.g., no Next.js, no Prisma).
