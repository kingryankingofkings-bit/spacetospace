import React, { useEffect, useRef } from 'react';
import { useAnimations } from '@react-three/drei';
import { AnimationClip, Group } from 'three';

export interface AnimationControllerProps {
  animations: AnimationClip[];
  currentState: string;
  fadeDuration?: number;
  children: React.ReactNode;
}

export function AnimationController({
  animations,
  currentState,
  fadeDuration = 0.2,
  children
}: AnimationControllerProps) {
  const groupRef = useRef<Group>(null);
  const { actions } = useAnimations(animations, groupRef);
  const previousStateRef = useRef<string | null>(null);

  useEffect(() => {
    const currentAction = actions[currentState];
    const previousState = previousStateRef.current;

    if (!currentAction) {
      console.warn(`AnimationController: State "${currentState}" not found in animations.`);
      return;
    }

    // Play and fade in the current animation
    currentAction.reset().fadeIn(fadeDuration).play();

    // Crossfade: fade out the previous animation if it exists and is different
    if (previousState && previousState !== currentState) {
      const prevAction = actions[previousState];
      if (prevAction) {
        prevAction.fadeOut(fadeDuration);
      }
    }

    previousStateRef.current = currentState;
  }, [currentState, actions, fadeDuration]);

  return <group ref={groupRef}>{children}</group>;
}
