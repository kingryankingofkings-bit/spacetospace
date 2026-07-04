const registry = {};

// Helper to register ability handlers
function register(abilityId, handler) {
  registry[abilityId] = handler;
}

// Executes an ability if registered
function executeAbility(abilityId, context) {
  if (registry[abilityId]) {
    return registry[abilityId](context);
  } else {
    console.log(`[Abilities] Unhandled ability: ${abilityId}`);
    return false; // Not handled
  }
}

module.exports = {
  register,
  executeAbility,
  registry
};
