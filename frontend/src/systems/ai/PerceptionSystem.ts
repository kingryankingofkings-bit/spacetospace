import * as THREE from 'three';
import { Blackboard } from './Blackboard';

export class PerceptionSystem {
  static updatePerception(
    blackboard: Blackboard,
    myPos: THREE.Vector3,
    myForward: THREE.Vector3,
    targets: { id: string, pos: THREE.Vector3 }[],
    visionRange: number = 20,
    visionAngleDegrees: number = 90
  ) {
    let closestTargetId: string | null = null;
    let closestDist = Infinity;
    const visionCos = Math.cos(THREE.MathUtils.degToRad(visionAngleDegrees / 2));

    const dirToTarget = new THREE.Vector3();

    for (const t of targets) {
      dirToTarget.subVectors(t.pos, myPos);
      const dist = dirToTarget.length();

      if (dist <= visionRange) {
        dirToTarget.normalize();
        const dot = myForward.dot(dirToTarget);
        if (dot >= visionCos) {
          // Within vision cone
          if (dist < closestDist) {
            closestDist = dist;
            closestTargetId = t.id;
          }
        }
      }
    }

    if (closestTargetId) {
      blackboard.set('targetId', closestTargetId);
      blackboard.set('targetDistance', closestDist);
      blackboard.set('canSeeTarget', true);
    } else {
      blackboard.set('canSeeTarget', false);
    }
  }
}
