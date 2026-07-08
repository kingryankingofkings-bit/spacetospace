import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useMultiplayerStore } from '../../store/multiplayerStore';
import { playerBuffer, playerIndices, STRIDE } from '../../store/transientStore';

interface ResourceNode {
  id: string;
  type: string;
  position: [number, number, number];
  itemReward: string;
}

// Mock nodes for demonstration (can be replaced with multiplayerStore data later)
const mockNodes: ResourceNode[] = [
  { id: 'node_1', type: 'Iron Vein', position: [5, 0.5, 5], itemReward: 'Iron Ore' },
  { id: 'node_2', type: 'Oak Tree', position: [-5, 1, -5], itemReward: 'Oak Wood' },
];

export const ResourceSystem: React.FC = () => {
  const [nodes] = useState<ResourceNode[]>(mockNodes);
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});
  const [closestNode, setClosestNode] = useState<ResourceNode | null>(null);
  
  // Gathering state
  const [gatheringId, setGatheringId] = useState<string | null>(null);
  const [gatherProgress, setGatherProgress] = useState<number>(0);
  
  const { sessionId } = useMultiplayerStore();
  const gatheringRef = useRef<{ id: string | null; timer: number }>({ id: null, timer: 0 });

  useFrame((state, delta) => {
    const now = Date.now();
    
    // 1. Process cooldowns (respawns)
    let cooldownsChanged = false;
    const newCooldowns = { ...cooldowns };
    for (const [id, time] of Object.entries(newCooldowns)) {
      if (now > time) {
        delete newCooldowns[id];
        cooldownsChanged = true;
      }
    }
    if (cooldownsChanged) setCooldowns(newCooldowns);

    // 2. Player Proximity Check
    if (sessionId) {
      const idx = playerIndices.get(sessionId);
      if (idx !== undefined) {
        const pIdx = idx * STRIDE;
        const px = playerBuffer[pIdx];
        const py = playerBuffer[pIdx + 1];
        const pz = playerBuffer[pIdx + 2];
        const playerPos = new THREE.Vector3(px, py, pz);

        let foundClose: ResourceNode | null = null;
        let minDistance = 3.0;

        for (const node of nodes) {
          if (newCooldowns[node.id]) continue; // Skip despawned

          const nodePos = new THREE.Vector3(...node.position);
          const dist = playerPos.distanceTo(nodePos);
          if (dist < minDistance) {
            minDistance = dist;
            foundClose = node;
          }
        }

        if (closestNode?.id !== foundClose?.id) {
          setClosestNode(foundClose);
        }
      }
    }

    // 3. Gathering Progress Tick
    if (gatheringRef.current.id) {
       gatheringRef.current.timer += delta;
       setGatherProgress(Math.min(gatheringRef.current.timer / 2.0, 1.0)); // 2 sec to gather
       
       if (gatheringRef.current.timer >= 2.0) {
           const id = gatheringRef.current.id;
           gatheringRef.current.id = null;
           setGatheringId(null);
           
           const node = nodes.find(n => n.id === id);
           if (node) {
               // Add item to inventory
               useMultiplayerStore.setState(state => ({
                   inventory: [...state.inventory, { id: `item_${Date.now()}`, name: node.itemReward, count: 1 }]
               }));
               // Trigger cooldown (despawn for 10s)
               setCooldowns(prev => ({ ...prev, [id]: Date.now() + 10000 }));
           }
       }
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent starting if already gathering or chat is focused etc.
      if (e.code === 'KeyF' && closestNode && !gatheringRef.current.id) {
        gatheringRef.current = { id: closestNode.id, timer: 0 };
        setGatheringId(closestNode.id);
        setGatherProgress(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closestNode]);

  return (
    <>
      {nodes.map(node => {
        if (cooldowns[node.id]) return null; // Node is despawned

        const isClosest = closestNode?.id === node.id;
        const isGathering = gatheringId === node.id;

        return (
          <group key={node.id} position={node.position}>
            {/* Minimalist meshes for fallback rendering */}
            {node.type === 'Iron Vein' ? (
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.5, 1, 1.5]} />
                <meshStandardMaterial color="#555555" />
              </mesh>
            ) : (
              <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 2]} />
                <meshStandardMaterial color="#8b5a2b" />
              </mesh>
            )}

            {isClosest && !isGathering && (
              <Html center position={[0, 2, 0]}>
                <div style={{
                  background: 'rgba(0,0,0,0.8)', color: '#fff', padding: '6px 12px',
                  borderRadius: '6px', fontSize: '14px', pointerEvents: 'none',
                  whiteSpace: 'nowrap', border: '1px solid #444', fontFamily: 'sans-serif'
                }}>
                  Press <b>F</b> to gather {node.type}
                </div>
              </Html>
            )}

            {isGathering && (
              <Html center position={[0, 2.5, 0]}>
                <div style={{
                  width: '100px', height: '8px', background: '#222', 
                  borderRadius: '4px', overflow: 'hidden', border: '1px solid #444'
                }}>
                  <div style={{ 
                    width: `${gatherProgress * 100}%`, height: '100%', background: '#4CAF50' 
                  }} />
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
};
