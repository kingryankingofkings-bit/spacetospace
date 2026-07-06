import React, { useEffect, useState, useRef } from 'react';
import { useThree } from '@react-three/fiber';

import { Html } from '@react-three/drei';

export const TelemetryDashboard: React.FC = () => {
  const { gl } = useThree();
  const [metrics, setMetrics] = useState({
    fps: 0,
    drawCalls: 0,
    triangles: 0,
    memory: 0
  });

  const framesRef = useRef(0);
  const prevTimeRef = useRef(performance.now());

  useEffect(() => {
    let animationFrameId: number;
    
    const updateMetrics = () => {
      const now = performance.now();
      framesRef.current++;

      if (now - prevTimeRef.current >= 1000) {
        // Calculate FPS
        const fps = Math.round((framesRef.current * 1000) / (now - prevTimeRef.current));
        
        // Memory (Chromium specific)
        let memory = 0;
        if ((performance as any).memory) {
          memory = Math.round((performance as any).memory.usedJSHeapSize / 1048576);
        }

        setMetrics({
          fps,
          drawCalls: gl.info.render.calls,
          triangles: gl.info.render.triangles,
          memory
        });

        framesRef.current = 0;
        prevTimeRef.current = now;
      }
      
      animationFrameId = requestAnimationFrame(updateMetrics);
    };

    animationFrameId = requestAnimationFrame(updateMetrics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gl]);

  return (
    <Html prepend style={{
      position: 'fixed',
      top: 10,
      right: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      color: '#00ffcc',
      fontFamily: 'monospace',
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #00ffcc',
      zIndex: 9999,
      pointerEvents: 'none',
      textShadow: '0 0 5px rgba(0,255,204,0.5)',
      minWidth: '150px'
    }}>
      <div style={{ fontWeight: 'bold', borderBottom: '1px solid #00ffcc', marginBottom: '5px', paddingBottom: '5px' }}>
        ENGINE TELEMETRY
      </div>
      <div>FPS: {metrics.fps}</div>
      <div>Draw Calls: {metrics.drawCalls}</div>
      <div>Triangles: {metrics.triangles}</div>
      {metrics.memory > 0 && <div>Memory: {metrics.memory} MB</div>}
    </Html>
  );
};
