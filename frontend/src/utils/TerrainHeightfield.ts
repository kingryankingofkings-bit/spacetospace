/**
 * Utility to query terrain height data.
 * Currently returns 0 since the base terrain is flat, 
 * but this is where raycasting against a heightmap or duplicating 
 * procedural noise logic should happen when actual displacement is applied.
 */

export class TerrainHeightfield {
  private static instance: TerrainHeightfield;

  private constructor() {}

  public static getInstance(): TerrainHeightfield {
    if (!TerrainHeightfield.instance) {
      TerrainHeightfield.instance = new TerrainHeightfield();
    }
    return TerrainHeightfield.instance;
  }

  /**
   * Queries the exact height of the terrain at the given (x, z) world coordinates.
   */
  public getHeight(x: number, z: number): number {
    // Placeholder for future heightmap lookup (e.g. read pixels from canvas)
    // or procedural displacement math.
    // E.g.: return SimplexNoise(x * 0.01, z * 0.01) * 10.0;
    
    // For now, terrain is flat at y=0
    return 0;
  }
}

export const getTerrainHeight = (x: number, z: number): number => {
  return TerrainHeightfield.getInstance().getHeight(x, z);
};
