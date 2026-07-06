// A simple Web Worker to offload heavy calculations.
// Vite supports web workers natively using `?worker` suffix.

export class WorkerManager {
  private worker: Worker | null = null;
  private callbacks = new Map<number, Function>();
  private nextMessageId = 0;

  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a web worker from the worker file
      this.worker = new Worker(new URL('./compute.worker.ts', import.meta.url), {
        type: 'module'
      });

      this.worker.onmessage = (e) => {
        const { id, result, error } = e.data;
        const cb = this.callbacks.get(id);
        if (cb) {
          cb(error, result);
          this.callbacks.delete(id);
        }
      };
    }
  }

  // Example: Offload distance computation of many entities
  public async computeDistances(origin: {x: number, y: number, z: number}, targets: Float32Array): Promise<Float32Array> {
    return new Promise((resolve, reject) => {
      if (!this.worker) return resolve(new Float32Array(0));
      
      const id = this.nextMessageId++;
      this.callbacks.set(id, (err: any, res: Float32Array) => {
        if (err) reject(err);
        else resolve(res);
      });
      
      // Transfer the array buffer if we don't need it on the main thread, 
      // but here we just copy it since it's a transient buffer.
      this.worker.postMessage({
        id,
        type: 'COMPUTE_DISTANCES',
        origin,
        targets
      });
    });
  }
}

export const globalWorkerManager = new WorkerManager();
