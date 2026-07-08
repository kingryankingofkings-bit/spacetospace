/**
 * Deterministic pseudo-random number generator based on coordinates and a seed.
 */
export function seededRandom(x: number, z: number, seed = 1): number {
  const sin = Math.sin(x * 12.9898 + z * 78.233 + seed) * 43758.5453;
  return sin - Math.floor(sin);
}

export interface GeneratedPoint {
  x: number;
  z: number;
  rotY: number;
  scale: number;
  randomVal: number;
}

export interface GenerationConfig {
  mapSize: number; // e.g., 2000 for a 2000x2000 grid
  cellSize: number; // The size of each grid cell. Controls maximum density.
  jitterAmount: number; // How much a point can deviate from the cell center (0.0 to 1.0)
  seedOffset: number; // Unique seed for this layer
  exclusionZones?: { x: number, z: number, radius: number }[]; // Areas to avoid spawning
  biomeFilter?: (x: number, z: number) => boolean; // Determines if point belongs in the current biome
}

/**
 * Generates an organic set of points over a massive area using a jittered grid approach.
 * This ensures points are randomly distributed but maintain a minimum distance to avoid heavy clustering.
 */
export function generateOrganicPoints(config: GenerationConfig): GeneratedPoint[] {
  const points: GeneratedPoint[] = [];
  const { mapSize, cellSize, jitterAmount, seedOffset, exclusionZones = [] } = config;

  const halfMap = mapSize / 2;

  for (let x = -halfMap; x <= halfMap; x += cellSize) {
    for (let z = -halfMap; z <= halfMap; z += cellSize) {
      
      // Calculate jitter
      const jx = (seededRandom(x, z, seedOffset + 1) - 0.5) * cellSize * jitterAmount;
      const jz = (seededRandom(x, z, seedOffset + 2) - 0.5) * cellSize * jitterAmount;
      
      const finalX = x + jx;
      const finalZ = z + jz;

      // Check exclusion zones (like the Start Hub)
      let excluded = false;
      for (const zone of exclusionZones) {
        const dx = finalX - zone.x;
        const dz = finalZ - zone.z;
        if (Math.sqrt(dx * dx + dz * dz) < zone.radius) {
          excluded = true;
          break;
        }
      }

      if (!excluded) {
        if (!config.biomeFilter || config.biomeFilter(finalX, finalZ)) {
          points.push({
            x: finalX,
            z: finalZ,
            rotY: seededRandom(finalX, finalZ, seedOffset + 3) * Math.PI * 2,
            scale: 0.8 + seededRandom(finalX, finalZ, seedOffset + 4) * 0.4,
            randomVal: seededRandom(finalX, finalZ, seedOffset + 5)
          });
        }
      }
    }
  }

  return points;
}
