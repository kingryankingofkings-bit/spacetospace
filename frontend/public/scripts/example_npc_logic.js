// This script expects 'position', 'time', 'delta', 'blackboard' to be provided in its context

// Move in a circle
const radius = 5;
const speed = 1.5;

position.x = Math.sin(time * speed) * radius;
position.z = Math.cos(time * speed) * radius;

// Change color randomly if a condition on blackboard is met
if (blackboard && !blackboard.has('colorTimer')) {
  blackboard.set('colorTimer', 0);
}

if (blackboard) {
  let timer = blackboard.get('colorTimer');
  timer += delta;
  if (timer > 2) {
    // Random color
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    blackboard.set('currentColor', [r, g, b]);
    blackboard.set('colorTimer', 0);
  } else {
    blackboard.set('colorTimer', timer);
  }
}
