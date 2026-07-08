import manifest from '../cdn_manifest.json';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// @ts-ignore
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// @ts-ignore
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import * as THREE from 'three';

const CDN_BASE_URL = import.meta.env.VITE_CDN_URL || '';

export enum AssetPriority {
  CRITICAL = 0, // Player model, immediate surroundings
  HIGH = 1,     // Nearby enemies, interactables
  MEDIUM = 2,   // Distant structures
  LOW = 3       // Distant foliage, background elements
}

interface QueuedAsset {
  url: string;
  priority: AssetPriority;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}

class AssetCache {
  private cache = new Map<string, any>();
  private maxItems = 100; // Increased capacity for a full world
  
  get(url: string) {
    if (!this.cache.has(url)) return null;
    const item = this.cache.get(url);
    this.cache.delete(url);
    this.cache.set(url, item);
    return item;
  }
  
  set(url: string, item: any) {
    if (this.cache.size >= this.maxItems) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }
    this.cache.set(url, item);
  }
}

export const globalAssetCache = new AssetCache();

class AssetManager {
  private gltfLoader: GLTFLoader;
  private dracoLoader: DRACOLoader;
  private ktx2Loader: KTX2Loader;
  
  private queue: QueuedAsset[] = [];
  private activeLoads = 0;
  private maxConcurrentLoads = 4; // Throttle network requests

  constructor() {
    this.gltfLoader = new GLTFLoader();
    
    // Set up compression loaders for web-native optimization (Task 1.1)
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
    
    // WebGLRenderer is needed for KTX2Loader but we can initialize it later when the Canvas is ready
    this.ktx2Loader = new KTX2Loader();
    this.ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/basis/');
    this.gltfLoader.setKTX2Loader(this.ktx2Loader);
  }

  // Allow injecting renderer for KTX2 from the Canvas
  public initKTX2(renderer: THREE.WebGLRenderer) {
    this.ktx2Loader.detectSupport(renderer);
  }

  public enqueueAsset(fullUrl: string, priority: AssetPriority = AssetPriority.MEDIUM): Promise<any> {
    // 1. Check Cache
    const cached = globalAssetCache.get(fullUrl);
    if (cached) return Promise.resolve(cached);

    // 2. Check if already in queue
    const existing = this.queue.find(q => q.url === fullUrl);
    if (existing) {
        // Upgrade priority if needed
        if (priority < existing.priority) {
            existing.priority = priority;
            this.queue.sort((a, b) => a.priority - b.priority);
        }
        // We could return the existing promise, but since it's already queued, it's easier to just queue another promise resolution
    }

    return new Promise((resolve, reject) => {
      this.queue.push({ url: fullUrl, priority, resolve, reject });
      this.queue.sort((a, b) => a.priority - b.priority); // Lower number = higher priority
      this.processQueue();
    });
  }

  private processQueue() {
    if (this.queue.length === 0 || this.activeLoads >= this.maxConcurrentLoads) {
      return;
    }

    const task = this.queue.shift();
    if (!task) return;

    this.activeLoads++;
    
    // Load
    this.gltfLoader.load(
      task.url,
      (gltf: any) => {
        globalAssetCache.set(task.url, gltf);
        this.activeLoads--;
        task.resolve(gltf);
        this.processQueue();
      },
      undefined, // onProgress
      (error: any) => {
        console.error(`AssetManager failed to load: ${task.url}`, error);
        this.activeLoads--;
        task.reject(error);
        this.processQueue();
      }
    );
  }
}

export const globalAssetManager = new AssetManager();

export function getCdnAssetPath(rootUrl: string, filename: string): { rootUrl: string, sceneFilename: string } {
  const originalPath = rootUrl + filename;
  let hashedPath = (manifest as Record<string, string>)[originalPath];
  
  if (!hashedPath) {
    hashedPath = (manifest as Record<string, string>)["/models/sector_characters_glb_pack_v4/spark.glb"] || "/models/sector_characters_glb_pack_v4/spark.glb";
  }

  const fullUrl = CDN_BASE_URL + hashedPath;
  const lastSlash = fullUrl.lastIndexOf('/');
  
  return {
    rootUrl: fullUrl.substring(0, lastSlash + 1),
    sceneFilename: fullUrl.substring(lastSlash + 1)
  };
}

export async function preloadAsset(fullUrl: string, priority: AssetPriority = AssetPriority.MEDIUM) {
  return globalAssetManager.enqueueAsset(fullUrl, priority);
}
