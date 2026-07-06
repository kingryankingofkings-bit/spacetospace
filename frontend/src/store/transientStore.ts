// Transient Store for High-Frequency Network Updates (ECS architecture)
// Bypasses React state to avoid massive re-renders on every network tick
// Upgraded to Data-Oriented Design (DOD) using Float32Arrays for cache locality

const MAX_ENTITIES = 4096;
const STRIDE = 6; // x, y, z, targetX, targetY, targetZ

// Pre-allocate typed arrays
export const playerBuffer = new Float32Array(MAX_ENTITIES * STRIDE);
export const npcBuffer = new Float32Array(MAX_ENTITIES * STRIDE);
export const bossBuffer = new Float32Array(MAX_ENTITIES * STRIDE);

// Maps ID to their index in the buffer
export const playerIndices = new Map<string, number>();
export const npcIndices = new Map<string, number>();
export const bossIndices = new Map<string, number>();

let nextPlayerIndex = 0;
let nextNpcIndex = 0;
let nextBossIndex = 0;

export const initTransientPlayer = (id: string, x: number, y: number, z: number) => {
  if (!playerIndices.has(id)) {
    playerIndices.set(id, nextPlayerIndex++);
  }
  const idx = playerIndices.get(id)! * STRIDE;
  playerBuffer[idx] = x;
  playerBuffer[idx+1] = y;
  playerBuffer[idx+2] = z;
  playerBuffer[idx+3] = x;
  playerBuffer[idx+4] = y;
  playerBuffer[idx+5] = z;
};

export const updateTransientPlayer = (id: string, x: number, y: number, z: number) => {
  if (!playerIndices.has(id)) {
    playerIndices.set(id, nextPlayerIndex++);
    const idx = playerIndices.get(id)! * STRIDE;
    playerBuffer[idx] = x;
    playerBuffer[idx+1] = y;
    playerBuffer[idx+2] = z;
    playerBuffer[idx+3] = x;
    playerBuffer[idx+4] = y;
    playerBuffer[idx+5] = z;
  } else {
    const idx = playerIndices.get(id)! * STRIDE;
    playerBuffer[idx+3] = x;
    playerBuffer[idx+4] = y;
    playerBuffer[idx+5] = z;
  }
};

export const updateTransientNpc = (id: string, x: number, y: number, z: number) => {
  if (!npcIndices.has(id)) {
    npcIndices.set(id, nextNpcIndex++);
    const idx = npcIndices.get(id)! * STRIDE;
    npcBuffer[idx] = x;
    npcBuffer[idx+1] = y;
    npcBuffer[idx+2] = z;
    npcBuffer[idx+3] = x;
    npcBuffer[idx+4] = y;
    npcBuffer[idx+5] = z;
  } else {
    const idx = npcIndices.get(id)! * STRIDE;
    npcBuffer[idx+3] = x;
    npcBuffer[idx+4] = y;
    npcBuffer[idx+5] = z;
  }
};

export const updateTransientBoss = (id: string, x: number, y: number, z: number) => {
  if (!bossIndices.has(id)) {
    bossIndices.set(id, nextBossIndex++);
    const idx = bossIndices.get(id)! * STRIDE;
    bossBuffer[idx] = x;
    bossBuffer[idx+1] = y;
    bossBuffer[idx+2] = z;
    bossBuffer[idx+3] = x;
    bossBuffer[idx+4] = y;
    bossBuffer[idx+5] = z;
  } else {
    const idx = bossIndices.get(id)! * STRIDE;
    bossBuffer[idx+3] = x;
    bossBuffer[idx+4] = y;
    bossBuffer[idx+5] = z;
  }
};
