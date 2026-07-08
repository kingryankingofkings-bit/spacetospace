import { Blackboard } from './Blackboard';

export enum BTStatus {
  SUCCESS,
  FAILURE,
  RUNNING,
}

export abstract class BTNode {
  abstract tick(blackboard: Blackboard, delta: number): BTStatus;
}

export class Sequence extends BTNode {
  constructor(private children: BTNode[]) {
    super();
  }

  tick(blackboard: Blackboard, delta: number): BTStatus {
    for (const child of this.Children) { // Oops, let me just fix this in my head. Wait, I wrote this.children.
      const status = child.tick(blackboard, delta);
      if (status !== BTStatus.SUCCESS) {
        return status; // Returns FAILURE or RUNNING
      }
    }
    return BTStatus.SUCCESS;
  }
  
  get Children() { return this.children; }
}

export class Selector extends BTNode {
  constructor(private children: BTNode[]) {
    super();
  }

  tick(blackboard: Blackboard, delta: number): BTStatus {
    for (const child of this.Children) {
      const status = child.tick(blackboard, delta);
      if (status !== BTStatus.FAILURE) {
        return status; // Returns SUCCESS or RUNNING
      }
    }
    return BTStatus.FAILURE;
  }
  
  get Children() { return this.children; }
}

export class Inverter extends BTNode {
  constructor(private child: BTNode) {
    super();
  }

  tick(blackboard: Blackboard, delta: number): BTStatus {
    const status = this.child.tick(blackboard, delta);
    if (status === BTStatus.SUCCESS) return BTStatus.FAILURE;
    if (status === BTStatus.FAILURE) return BTStatus.SUCCESS;
    return BTStatus.RUNNING;
  }
}

export class Condition extends BTNode {
  constructor(private predicate: (blackboard: Blackboard) => boolean) {
    super();
  }

  tick(blackboard: Blackboard, delta: number): BTStatus {
    return this.predicate(blackboard) ? BTStatus.SUCCESS : BTStatus.FAILURE;
  }
}

export class Action extends BTNode {
  constructor(private actionFn: (blackboard: Blackboard, delta: number) => BTStatus) {
    super();
  }

  tick(blackboard: Blackboard, delta: number): BTStatus {
    return this.actionFn(blackboard, delta);
  }
}
