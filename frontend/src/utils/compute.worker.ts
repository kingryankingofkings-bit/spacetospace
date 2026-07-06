self.onmessage = (e: MessageEvent) => {
  const { id, type, origin, targets } = e.data;
  
  if (type === 'COMPUTE_DISTANCES') {
    // targets is a Float32Array where every 6 elements represents an entity
    // x, y, z, targetX, targetY, targetZ
    
    const count = Math.floor(targets.length / 6);
    const results = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const idx = i * 6;
      const dx = targets[idx] - origin.x;
      const dy = targets[idx+1] - origin.y;
      const dz = targets[idx+2] - origin.z;
      
      results[i] = Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    self.postMessage({ id, result: results });
  }
};
