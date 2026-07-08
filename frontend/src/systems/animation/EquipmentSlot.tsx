import React, { useMemo } from 'react';
import { Object3D } from 'three';
import { createPortal } from '@react-three/fiber';

export interface EquipmentSlotProps {
  parentObject: Object3D;
  boneName: string; // e.g., 'RightHand', 'LeftHand', 'Head', 'Spine2'
  children: React.ReactNode;
}

/**
 * EquipmentSlot
 * 
 * Traverses a character's rig to find a specific bone by name (case-insensitive, fuzzy match).
 * Uses React Three Fiber's `createPortal` to render any React nodes (like weapons or armor)
 * directly into the target bone's coordinate space, so they naturally follow the animation.
 */
export const EquipmentSlot: React.FC<EquipmentSlotProps> = ({ parentObject, boneName, children }) => {
  const targetBone = useMemo(() => {
    let found: Object3D | undefined;
    parentObject.traverse((child) => {
      // Prioritize Bone objects, but fallback to any Object3D if rig isn't strictly typed
      if (!found && child.type === 'Bone' && child.name.toLowerCase().includes(boneName.toLowerCase())) {
        found = child;
      }
    });
    // Fallback pass if no explicit 'Bone' found
    if (!found) {
      parentObject.traverse((child) => {
        if (!found && child.name.toLowerCase().includes(boneName.toLowerCase())) {
          found = child;
        }
      });
    }
    return found;
  }, [parentObject, boneName]);

  if (!targetBone) {
    // Silently fail if bone isn't found, so we don't crash when using models without standard rigs
    return null;
  }

  return createPortal(children, targetBone);
};
