// Transient Store for High-Frequency Network Updates (ECS architecture)
// Bypasses React state to avoid massive re-renders on every network tick

export const playerPositions = new Map<string, { x: number, y: number, z: number, targetX: number, targetY: number, targetZ: number }>();
export const npcPositions = new Map<string, { x: number, y: number, z: number, targetX: number, targetY: number, targetZ: number }>();
export const bossPositions = new Map<string, { x: number, y: number, z: number, targetX: number, targetY: number, targetZ: number }>();

export const initTransientPlayer = (id: string, x: number, y: number, z: number) => {
  playerPositions.set(id, { x, y, z, targetX: x, targetY: y, targetZ: z });
};

export const updateTransientPlayer = (id: string, x: number, y: number, z: number) => {
  const pos = playerPositions.get(id);
  if (pos) {
    pos.targetX = x;
    pos.targetY = y;
    pos.targetZ = z;
  } else {
    playerPositions.set(id, { x, y, z, targetX: x, targetY: y, targetZ: z });
  }
};

export const updateTransientNpc = (id: string, x: number, y: number, z: number) => {
  const pos = npcPositions.get(id);
  if (pos) {
    pos.targetX = x;
    pos.targetY = y;
    pos.targetZ = z;
  } else {
    npcPositions.set(id, { x, y, z, targetX: x, targetY: y, targetZ: z });
  }
};

export const updateTransientBoss = (id: string, x: number, y: number, z: number) => {
  const pos = bossPositions.get(id);
  if (pos) {
    pos.targetX = x;
    pos.targetY = y;
    pos.targetZ = z;
  } else {
    bossPositions.set(id, { x, y, z, targetX: x, targetY: y, targetZ: z });
  }
};
