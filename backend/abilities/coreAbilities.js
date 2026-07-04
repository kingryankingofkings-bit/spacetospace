const { register } = require('./registry');

module.exports = function initializeAbilities(db, broadcast, npcs, players) {

  // The Protocol Weaver
  // Level 1: Syntax Strike (Active)
  register('the_protocol_weaver_skill_1', (context) => {
    // Basic attack, handled by normal attack flow, but we could add bonus combo
    const { attacker, target } = context;
    if (attacker) {
      attacker.combo = (attacker.combo || 0) + 1; // Extra combo point
      broadcast({ type: "combat_update", sessionId: attacker.sessionId, combo: attacker.combo }, null, attacker.zone);
    }
  });

  // The Scrap-Tek
  // Level 2: Magnetic Tether (Active)
  register('the_scrap_tek_skill_2', (context) => {
    const { attacker, target } = context;
    if (attacker && target) {
      // Pull target to attacker
      target.x = attacker.x;
      target.z = attacker.z;
      if (target.id.startsWith('npc_')) {
        broadcast({ type: "npc_update", npcs: [target] }, null, target.zone);
      }
    }
  });

  // Level 10: The Junkyard Turret (Active / Cooldown)
  register('the_scrap_tek_skill_10', (context) => {
    const { attacker, x, y, z } = context;
    if (!attacker) return;
    
    // Spawn a temporary turret object
    const turretId = 'turret_' + Math.random().toString(36).substr(2, 9);
    const turret = {
      id: turretId,
      type: 'turret',
      x: x || attacker.x,
      y: y || attacker.y,
      z: z || attacker.z,
      owner: attacker.sessionId
    };
    db.saveObject(turret);
    broadcast({ type: "place_object", object: turret });

    // Despawn after 8 seconds
    setTimeout(() => {
       db.deleteObject(turretId); // Assuming we have deleteObject, if not we just remove it somehow.
       broadcast({ type: "remove_object", objectId: turretId });
    }, 8000);
  });

  // The Kinetic Juggernaut
  // Level 2: The Kinetic Guard
  register('the_kinetic_juggernaut_skill_2', (context) => {
    const { attacker } = context;
    if (attacker) {
      // Toggle guard state
      attacker.isGuarding = !attacker.isGuarding;
      broadcast({ type: "move", sessionId: attacker.sessionId, position: attacker }, null, attacker.zone);
    }
  });

  // The Phantom-Shift
  // Level 2: Stutter-Step
  register('the_phantom_shift_skill_2', (context) => {
    const { attacker, x, z } = context;
    if (attacker && x !== undefined && z !== undefined) {
      // Teleport
      attacker.x = x;
      attacker.z = z;
      broadcast({ type: "move", sessionId: attacker.sessionId, position: attacker }, null, attacker.zone);
    }
  });
};
