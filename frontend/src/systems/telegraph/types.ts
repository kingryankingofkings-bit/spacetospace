export type TelegraphShape = 'circle' | 'cone' | 'line';

export interface BaseTelegraph {
  id: string;
  position: [number, number, number];
  rotation?: [number, number, number]; // Euler angles [x, y, z]
  duration: number; // Duration in seconds
  startTime: number; // Timestamp in milliseconds (e.g. Date.now())
  color?: string; // Optional hex color or string
  damage?: number; // Optional damage amount to apply on completion
  onComplete?: (telegraph: Telegraph) => void; // Custom callback when filled
}

export interface CircleTelegraph extends BaseTelegraph {
  shape: 'circle';
  radius: number;
}

export interface ConeTelegraph extends BaseTelegraph {
  shape: 'cone';
  radius: number;
  angle: number; // Angle in radians
}

export interface LineTelegraph extends BaseTelegraph {
  shape: 'line';
  width: number;
  length: number;
}

export type Telegraph = CircleTelegraph | ConeTelegraph | LineTelegraph;
