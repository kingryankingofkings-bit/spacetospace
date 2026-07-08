import React, { useState, useEffect, useRef } from 'react';
import { Group } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';
import { useInteractableStore } from './useInteractableStore';

export interface InteractableProps {
  id: string;
  /** The text displayed on the prompt */
  prompt?: string;
  /** Callback fired when the user triggers the interact key */
  onInteract: () => void;
  /** Interaction detection method */
  mode?: 'raycast' | 'proximity';
  /** Max distance for interaction when using proximity mode (units) */
  distance?: number;
  /** Whether to outline the object when active */
  showOutline?: boolean;
  /** Optional custom position offset for the floating HTML prompt */
  promptOffset?: [number, number, number];
  children: React.ReactNode;
}

export const Interactable: React.FC<InteractableProps> = ({
  id,
  prompt = 'Interact',
  onInteract,
  mode = 'raycast',
  distance = 3,
  showOutline = true,
  promptOffset = [0, 1.5, 0],
  children
}) => {
  const ref = useRef<Group>(null);
  const { setActiveInteractable, activeInteractable } = useInteractableStore();
  const [isHovered, setIsHovered] = useState(false);
  const camera = useThree((state) => state.camera);
  
  const isActive = activeInteractable?.id === id;

  // Proximity detection
  useFrame(() => {
    if (mode === 'proximity' && ref.current) {
      // Calculate distance from camera (representing the player) to this object
      const dist = camera.position.distanceTo(ref.current.position);
      if (dist < distance && !isHovered) {
        setIsHovered(true);
      } else if (dist >= distance && isHovered) {
        setIsHovered(false);
      }
    }
  });

  // Sync hovered state with global interactable store
  useEffect(() => {
    if (isHovered) {
      setActiveInteractable({ id, prompt, onInteract });
    } else if (isActive) {
      setActiveInteractable(null);
    }
    
    // Cleanup on unmount
    return () => {
      const current = useInteractableStore.getState().activeInteractable;
      if (current?.id === id) {
        useInteractableStore.getState().setActiveInteractable(null);
      }
    };
  }, [isHovered, id, prompt, onInteract, isActive, setActiveInteractable]);

  return (
    <group 
      ref={ref}
      onPointerOver={(e) => {
        if (mode === 'raycast') {
          e.stopPropagation();
          setIsHovered(true);
        }
      }}
      onPointerOut={(e) => {
        if (mode === 'raycast') {
          setIsHovered(false);
        }
      }}
      onClick={(e) => {
        if (mode === 'raycast') {
          e.stopPropagation();
          onInteract();
        }
      }}
    >
      {/* Wraps children in Select for postprocessing outline when active */}
      <Select enabled={showOutline && isActive}>
        {children}
      </Select>
      
      {/* 3D floating interaction prompt */}
      {isActive && (
        <Html position={promptOffset} center transform sprite zIndexRange={[100, 0]}>
          <div 
            style={{
              background: 'rgba(15, 23, 42, 0.85)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontFamily: 'system-ui, sans-serif',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
              userSelect: 'none'
            }}
          >
            <span style={{ fontWeight: 'bold', color: '#fbbf24', marginRight: '6px' }}>[F]</span> 
            {prompt}
          </div>
        </Html>
      )}
    </group>
  );
};
