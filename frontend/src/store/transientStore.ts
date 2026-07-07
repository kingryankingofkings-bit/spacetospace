// Transient Store for High-Frequency Network Updates (ECS architecture)
// Bypasses React state to avoid massive re-renders on every network tick
// Upgraded to Data-Oriented Design (DOD) using Float32Arrays for cache locality
// Supports Snapshot Interpolation for Client-Server Multiplayer

const MAX_ENTITIES = 4096;
// Stride: current(xyz 0,1,2), snapshot0(xyz,t 3,4,5,6), snapshot1(xyz,t 7,8,9,10)
const STRIDE = 11;

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

const pushSnapshot = (buffer: Float32Array, idx: number, x: number, y: number, z: number, timestamp: number) => {
  // Move snapshot1 to snapshot0
  buffer[idx+3] = buffer[idx+7];
  buffer[idx+4] = buffer[idx+8];
  buffer[idx+5] = buffer[idx+9];
  buffer[idx+6] = buffer[idx+10];
  
  // Set snapshot1 to new data
  buffer[idx+7] = x;
  buffer[idx+8] = y;
  buffer[idx+9] = z;
  buffer[idx+10] = timestamp;
};

const initEntity = (buffer: Float32Array, idx: number, x: number, y: number, z: number) => {
  const t = performance.now();
  buffer[idx] = x; buffer[idx+1] = y; buffer[idx+2] = z; // current
  buffer[idx+3] = x; buffer[idx+4] = y; buffer[idx+5] = z; buffer[idx+6] = t; // s0
  buffer[idx+7] = x; buffer[idx+8] = y; buffer[idx+9] = z; buffer[idx+10] = t; // s1
};

export const initTransientPlayer = (id: string, x: number, y: number, z: number) => {
  if (!playerIndices.has(id)) {
    playerIndices.set(id, nextPlayerIndex++);
  }
  const idx = playerIndices.get(id)! * STRIDE;
  initEntity(playerBuffer, idx, x, y, z);
};

export const updateTransientPlayer = (id: string, x: number, y: number, z: number, serverTime: number = performance.now()) => {
  if (!playerIndices.has(id)) {
    playerIndices.set(id, nextPlayerIndex++);
    const idx = playerIndices.get(id)! * STRIDE;
    initEntity(playerBuffer, idx, x, y, z);
  } else {
    const idx = playerIndices.get(id)! * STRIDE;
    pushSnapshot(playerBuffer, idx, x, y, z, serverTime);
  }
};

export const updateTransientNpc = (id: string, x: number, y: number, z: number, serverTime: number = performance.now()) => {
  if (!npcIndices.has(id)) {
    npcIndices.set(id, nextNpcIndex++);
    const idx = npcIndices.get(id)! * STRIDE;
    initEntity(npcBuffer, idx, x, y, z);
  } else {
    const idx = npcIndices.get(id)! * STRIDE;
    pushSnapshot(npcBuffer, idx, x, y, z, serverTime);
  }
};

export const updateTransientBoss = (id: string, x: number, y: number, z: number, serverTime: number = performance.now()) => {
  if (!bossIndices.has(id)) {
    bossIndices.set(id, nextBossIndex++);
    const idx = bossIndices.get(id)! * STRIDE;
    initEntity(bossBuffer, idx, x, y, z);
  } else {
    const idx = bossIndices.get(id)! * STRIDE;
    pushSnapshot(bossBuffer, idx, x, y, z, serverTime);
  }
};

// Interpolation Function called in the render loop
export const interpolateEntities = (renderTime: number) => {
  const buffers = [
    { buf: playerBuffer, count: nextPlayerIndex },
    { buf: npcBuffer, count: nextNpcIndex },
    { buf: bossBuffer, count: nextBossIndex }
  ];

  for (const { buf, count } of buffers) {
    for (let i = 0; i < count; i++) {
      const idx = i * STRIDE;
      const t0 = buf[idx+6];
      const t1 = buf[idx+10];
      
      // If we only have 1 valid snapshot or time hasn't progressed
      if (t0 >= t1) {
        buf[idx] = buf[idx+7];
        buf[idx+1] = buf[idx+8];
        buf[idx+2] = buf[idx+9];
        continue;
      }
      
      // Calculate interpolation factor
      // renderTime is slightly behind current time (e.g., now - 100ms interpolation delay)
      let alpha = (renderTime - t0) / (t1 - t0);
      alpha = Math.max(0, Math.min(1, alpha)); // clamp 0-1
      
      // Lerp XYZ
      buf[idx] = buf[idx+3] + (buf[idx+7] - buf[idx+3]) * alpha;
      buf[idx+1] = buf[idx+4] + (buf[idx+8] - buf[idx+4]) * alpha;
      buf[idx+2] = buf[idx+5] + (buf[idx+9] - buf[idx+5]) * alpha;
    }
  }
};
