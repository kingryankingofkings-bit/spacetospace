import { useState, useCallback, useMemo } from 'react';
import { AnimationStateMachine, StateTransitions } from './AnimationStateMachine';

export function useAnimationStateMachine(
  initialState: string,
  transitions?: StateTransitions,
  defaultFadeDuration = 0.2
) {
  const machine = useMemo(
    () => new AnimationStateMachine(initialState, transitions, defaultFadeDuration),
    [] // Transitions are assumed to be static config
  );

  const [state, setState] = useState(machine.state);
  const [fadeDuration, setFadeDuration] = useState(defaultFadeDuration);

  const transitionTo = useCallback((nextState: string) => {
    const duration = machine.transitionTo(nextState);
    setFadeDuration(duration);
    setState(machine.state);
  }, [machine]);

  return { state, transitionTo, fadeDuration };
}
