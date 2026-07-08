export type TransitionConfig = {
  duration?: number;
};

export type StateTransitions = Record<string, Record<string, TransitionConfig>>;

export class AnimationStateMachine {
  private currentState: string;
  private transitions: StateTransitions;
  private defaultFadeDuration: number;

  constructor(
    initialState: string,
    transitions: StateTransitions = {},
    defaultFadeDuration: number = 0.2
  ) {
    this.currentState = initialState;
    this.transitions = transitions;
    this.defaultFadeDuration = defaultFadeDuration;
  }

  public get state(): string {
    return this.currentState;
  }

  public transitionTo(nextState: string): number {
    if (this.currentState === nextState) {
      return 0; // Already in this state
    }

    // Look up custom duration for this specific transition, fallback to default
    const config = this.transitions[this.currentState]?.[nextState];
    const duration = config?.duration ?? this.defaultFadeDuration;

    this.currentState = nextState;
    return duration;
  }
}
