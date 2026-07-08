import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ScriptEngine } from './ScriptEngine';
import { Blackboard } from '../ai/Blackboard';

export interface ScriptComponentProps {
  scriptUrl: string;
  position?: [number, number, number];
}

export function ScriptComponent({ scriptUrl, position = [0, 0, 0] }: ScriptComponentProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scriptContent, setScriptContent] = useState<string | null>(null);
  const blackboard = useRef(new Blackboard());

  // Load the script content
  useEffect(() => {
    fetch(scriptUrl)
      .then(res => res.text())
      .then(text => setScriptContent(text))
      .catch(e => console.error('Failed to load script', e));
  }, [scriptUrl]);

  useFrame(({ clock }, delta) => {
    if (!scriptContent || !meshRef.current) return;

    // Provide a context for the script
    const context = {
      position: meshRef.current.position,
      rotation: meshRef.current.rotation,
      scale: meshRef.current.scale,
      time: clock.elapsedTime,
      delta: delta,
      blackboard: blackboard.current,
      THREE: THREE // Expose THREE if needed
    };

    // Execute the script
    ScriptEngine.evaluate(scriptContent, context);

    // Apply color from blackboard if set
    const color = blackboard.current.get<[number, number, number]>('currentColor');
    if (color && meshRef.current.material instanceof THREE.MeshStandardMaterial) {
      meshRef.current.material.color.setRGB(color[0], color[1], color[2]);
    }
  });

  return (
    <mesh ref={meshRef} position={new THREE.Vector3(...position)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
