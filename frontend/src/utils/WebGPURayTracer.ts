// @ts-ignore
declare var GPUBufferUsage: any;
declare var GPUTextureUsage: any;
declare var GPUBuffer: any;

import * as THREE from 'three';
import { BVHBuilder } from './BVHBuilder';
// @ts-ignore
import rayTracerShader from './RayTracer.wgsl?raw';

export class WebGPURayTracer {
  private device: GPUDevice | null = null;
  private computePipeline: GPUComputePipeline | null = null;
  private bindGroup: GPUBindGroup | null = null;
  private bvhBuffer: GPUBuffer | null = null;
  private vertexBuffer: GPUBuffer | null = null;
  private indexBuffer: GPUBuffer | null = null;
  public outputTexture: any = null;
  async init(sceneGeometry: THREE.BufferGeometry, width: number, height: number) {
    if (!navigator.gpu) {
      console.warn("WebGPU not supported on this browser. Falling back to WebGL.");
      return false;
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return false;
    
    this.device = await adapter.requestDevice();

    const bvhBuilder = new BVHBuilder(sceneGeometry);
    const bvhData = bvhBuilder.build();

    const posAttr = sceneGeometry.getAttribute('position');
    const vertexData = posAttr.array as Float32Array;
    
    let indexData: Uint32Array;
    if (sceneGeometry.getIndex()) {
      indexData = sceneGeometry.getIndex()!.array as Uint32Array;
    } else {
      indexData = new Uint32Array(vertexData.length / 3);
      for (let i = 0; i < indexData.length; i++) indexData[i] = i;
    }

    // 1. Create Buffers
    this.bvhBuffer = this.createBuffer(bvhData, GPUBufferUsage.STORAGE);
    this.vertexBuffer = this.createBuffer(vertexData, GPUBufferUsage.STORAGE);
    this.indexBuffer = this.createBuffer(indexData, GPUBufferUsage.STORAGE);

    // 2. Create Output Texture
    this.outputTexture = this.device.createTexture({
      size: [width, height, 1],
      format: 'rgba8unorm',
      usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC
    });

    // 3. Create Compute Pipeline
    const shaderModule = this.device.createShaderModule({
      code: rayTracerShader
    });

    this.computePipeline = this.device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: shaderModule,
        entryPoint: 'main'
      }
    });

    // 4. Create Bind Group
    this.bindGroup = this.device.createBindGroup({
      layout: this.computePipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.bvhBuffer } },
        { binding: 1, resource: { buffer: this.vertexBuffer } },
        { binding: 2, resource: { buffer: this.indexBuffer } },
        { binding: 3, resource: this.outputTexture.createView() }
      ]
    });

    console.log("[WebGPURayTracer] Initialized successfully");
    return true;
  }

  private createBuffer(data: Float32Array | Uint32Array, usage: GPUBufferUsageFlags): GPUBuffer {
    if (!this.device) throw new Error("No device");
    const buffer = this.device.createBuffer({
      size: Math.max(data.byteLength, 4), // Minimum 4 bytes
      usage: usage | GPUBufferUsage.COPY_DST,
      mappedAtCreation: true
    });
    
    if (data instanceof Float32Array) {
      new Float32Array(buffer.getMappedRange()).set(data);
    } else {
      new Uint32Array(buffer.getMappedRange()).set(data);
    }
    
    buffer.unmap();
    return buffer;
  }

  execute(width: number, height: number) {
    if (!this.device || !this.computePipeline || !this.bindGroup) return;

    const commandEncoder = this.device.createCommandEncoder();
    const passEncoder = commandEncoder.beginComputePass();
    
    passEncoder.setPipeline(this.computePipeline);
    passEncoder.setBindGroup(0, this.bindGroup);
    
    // Dispatch workgroups (8x8 local size defined in WGSL)
    passEncoder.dispatchWorkgroups(
      Math.ceil(width / 8),
      Math.ceil(height / 8),
      1
    );
    passEncoder.end();

    this.device.queue.submit([commandEncoder.finish()]);
  }

  dispose() {
    if (this.bvhBuffer) {
      this.bvhBuffer.destroy();
      this.bvhBuffer = null;
    }
    if (this.vertexBuffer) {
      this.vertexBuffer.destroy();
      this.vertexBuffer = null;
    }
    if (this.indexBuffer) {
      this.indexBuffer.destroy();
      this.indexBuffer = null;
    }
    if (this.outputTexture) {
      this.outputTexture.destroy();
      this.outputTexture = null;
    }
    this.bindGroup = null;
    this.computePipeline = null;
    this.device = null;
    console.log("[WebGPURayTracer] Disposed successfully");
  }
}
