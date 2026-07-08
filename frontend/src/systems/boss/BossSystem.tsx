import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import * as THREE from 'three';
import { OptimizedModel } from '../../components/WorldRenderer';
import { Blackboard } from '../ai/Blackboard';
import { BTNode, Sequence, Selector, Action, Condition, BTStatus } from '../ai/BehaviorTree';
import { PerceptionSystem } from '../ai/PerceptionSystem';
import { useMultiplayerStore } from '../../store/multiplayerStore';
import { TelegraphIndicator } from '../combat/TelegraphIndicator';

export enum BossPhase {
  IDLE = 'IDLE',
  PHASE_1 = 'PHASE_1',
  PHASE_2 = 'PHASE_2',
  ENRAGE = 'ENRAGE',
  DEFEATED = 'DEFEATED'
}

export interface BossSystemProps {
  arenaCenter?: [number, number, number];
  arenaSize?: [number, number, number]; // width, height, depth
  enrageTimeLimit?: number; // in seconds
  onPhaseChange?: (newPhase: BossPhase) => void;
  onSpawnAdds?: (count: number, phase: BossPhase) => void;
  onEnrage?: () => void;
  onDefeat?: () => void;
}

/**
 * BossSystem
 * A state machine for handling boss encounters.
 * Manages phases, enrage timers, locking the player in the arena, and triggering add spawns.
 */
export function BossSystem({
  arenaCenter = [0, 0, 0],
  arenaSize = [50, 20, 50],
  enrageTimeLimit = 300,
  onPhaseChange,
  onSpawnAdds,
  onEnrage,
  onDefeat
}: BossSystemProps) {
  const [phase, setPhase] = useState<BossPhase>(BossPhase.IDLE);
  const [isArenaLocked, setIsArenaLocked] = useState(false);
  const timeInCombat = useRef(0);
  const bossHealth = useRef(100); // Mocked health (0 to 100)
  const blackboard = useRef(new Blackboard());
  const behaviorTree = useRef<BTNode | null>(null);

  // Initialize Behavior Tree
  useEffect(() => {
    behaviorTree.current = new Selector([
      // Branch 1: Attack if player is in sight and close
      new Sequence([
        new Condition(bb => bb.get('canSeeTarget') === true),
        new Condition(bb => (bb.get<number>('targetDistance') ?? Infinity) < 10),
        new Action((bb, delta) => {
          bb.set('actionState', 'ATTACKING');
          return BTStatus.SUCCESS;
        })
      ]),
      // Branch 2: Chase if player is in sight but far
      new Sequence([
        new Condition(bb => bb.get('canSeeTarget') === true),
        new Action((bb, delta) => {
          bb.set('actionState', 'CHASING');
          return BTStatus.SUCCESS;
        })
      ]),
      // Branch 3: Idle
      new Action((bb, delta) => {
        bb.set('actionState', 'IDLE');
        return BTStatus.SUCCESS;
      })
    ]);
  }, []);

  // Start encounter
  const triggerEncounter = () => {
    if (phase !== BossPhase.IDLE) return;
    setPhase(BossPhase.PHASE_1);
    setIsArenaLocked(true);
    timeInCombat.current = 0;
    onPhaseChange?.(BossPhase.PHASE_1);
    onSpawnAdds?.(3, BossPhase.PHASE_1); // Spawn initial adds
  };

  // State Machine Updates
  useFrame((_, delta) => {
    if (phase === BossPhase.IDLE || phase === BossPhase.DEFEATED) return;

    timeInCombat.current += delta;

    // AI Tick
    if (behaviorTree.current) {
      const state = useMultiplayerStore.getState();
      const local = state.players.find(p => p.id === state.sessionId);
      if (local) {
        PerceptionSystem.updatePerception(
          blackboard.current,
          new THREE.Vector3(...arenaCenter),
          new THREE.Vector3(0, 0, 1), // Assuming forward is Z
          [{ id: local.id, pos: new THREE.Vector3(local.x, local.y, local.z) }],
          30, // Vision range
          180 // Vision angle
        );
      }
      behaviorTree.current.tick(blackboard.current, delta);
    }

    // Enrage Timer Logic
    if (timeInCombat.current >= enrageTimeLimit && phase !== BossPhase.ENRAGE) {
      setPhase(BossPhase.ENRAGE);
      onPhaseChange?.(BossPhase.ENRAGE);
      onEnrage?.();
      onSpawnAdds?.(10, BossPhase.ENRAGE); // Massive adds spawn on enrage
    }

    // Phase transition based on health (In a real system, you'd subscribe to a health/combat store)
    if (phase === BossPhase.PHASE_1 && bossHealth.current <= 50) {
      setPhase(BossPhase.PHASE_2);
      onPhaseChange?.(BossPhase.PHASE_2);
      onSpawnAdds?.(5, BossPhase.PHASE_2);
    }

    // Defeat Logic
    if (bossHealth.current <= 0) {
      setPhase(BossPhase.DEFEATED);
      setIsArenaLocked(false);
      onPhaseChange?.(BossPhase.DEFEATED);
      onDefeat?.();
    }
  });

  // Test method to simulate triggering and damage
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 't') triggerEncounter(); // 't' to start encounter
      if (e.key === 'y') bossHealth.current -= 10; // 'y' to deal damage
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase]);

  return (
    <group position={new THREE.Vector3(...arenaCenter)}>
      {/* Arena Barrier Colliders rendering */}
      {isArenaLocked && <ArenaBarriers size={arenaSize} />}
      
      {/* Telegraph AOE Attack when Boss is attacking */}
      {blackboard.current.get('actionState') === 'ATTACKING' && (
        <TelegraphIndicator position={[0, 0.1, 0]} radius={8} duration={2} color="#ff0000" />
      )}
    </group>
  );
}

/**
 * ArenaBarriers
 * Handles locking the player inside the arena bounds using physics colliders.
 */
function ArenaBarriers({ size }: { size: [number, number, number] }) {
  const [w, h, d] = size;
  const thickness = 2;

  // Use physics from @react-three/cannon to act as walls
  useBox(() => ({ type: 'Static', position: [0, h/2, -d/2], args: [w, h, thickness] })); // North Wall
  useBox(() => ({ type: 'Static', position: [0, h/2, d/2], args: [w, h, thickness] })); // South Wall
  useBox(() => ({ type: 'Static', position: [w/2, h/2, 0], args: [thickness, h, d] })); // East Wall
  useBox(() => ({ type: 'Static', position: [-w/2, h/2, 0], args: [thickness, h, d] })); // West Wall

  return (
    <group>
      {/* Physical constraints */}
      <mesh position={[0, h/2, -d/2]}>
        <boxGeometry args={[w, h, thickness]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.3} visible={false} />
      </mesh>
      <mesh position={[0, h/2, d/2]}>
        <boxGeometry args={[w, h, thickness]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.3} visible={false} />
      </mesh>
      <mesh position={[w/2, h/2, 0]}>
        <boxGeometry args={[thickness, h, d]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.3} visible={false} />
      </mesh>
      <mesh position={[-w/2, h/2, 0]}>
        <boxGeometry args={[thickness, h, d]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.3} visible={false} />
      </mesh>

      {/* Visual Arena Model */}
      <group position={[0, 0, 0]}>
        <OptimizedModel url="/models/11_boss_arena_mechanics_glb_pack_v1/glb_assets/arena_reset_beacon.glb" scaleToDimension={w} />
      </group>
    </group>
  );
}
