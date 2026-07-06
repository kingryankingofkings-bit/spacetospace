# Test Suite Builder

## Goal

Implement comprehensive testing with unit, integration, and e2e tests for critical paths.

## Workflow

1. **Set up framework**: Vitest (Vite), Jest (general), Playwright (e2e)
2. **Configure**: Test script in package.json, config file
3. **Write unit tests**: Pure functions, utilities, hooks
4. **Write component tests**: Render, interact, assert (Testing Library)
5. **Write integration tests**: API + frontend together
6. **Write e2e tests**: Critical user journeys (Playwright/Cypress)
7. **Add coverage**: Set minimum threshold (80%)
8. **CI integration**: Run on every PR
