import manifest from '../cdn_manifest.json';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CDN_BASE_URL = import.meta.env.VITE_CDN_URL || '';

// LRU Cache for assets
class AssetCache {
  private cache = new Map<string, any>();
  private maxItems = 50;
  
  get(url: string) {
    if (!this.cache.has(url)) return null;
    const item = this.cache.get(url);
    this.cache.delete(url);
    this.cache.set(url, item); // Move to front
    return item;
  }
  
  set(url: string, item: any) {
    if (this.cache.size >= this.maxItems) {
      // Remove oldest (first item in Map)
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }
    this.cache.set(url, item);
  }
}

export const globalAssetCache = new AssetCache();
const gltfLoader = new GLTFLoader();

export function getCdnAssetPath(rootUrl: string, filename: string): { rootUrl: string, sceneFilename: string } {
  const originalPath = rootUrl + filename;
  let hashedPath = (manifest as Record<string, string>)[originalPath];
  
  if (!hashedPath) {
    console.warn(`Asset ${originalPath} not found in manifest, falling back to spark.glb`);
    hashedPath = (manifest as Record<string, string>)["/models/sector_characters_glb_pack_v4/spark.glb"] || "/models/sector_characters_glb_pack_v4/spark.glb";
  }

  const fullUrl = CDN_BASE_URL + hashedPath;
  const lastSlash = fullUrl.lastIndexOf('/');
  
  return {
    rootUrl: fullUrl.substring(0, lastSlash + 1),
    sceneFilename: fullUrl.substring(lastSlash + 1)
  };
}

export async function preloadAsset(fullUrl: string) {
  if (globalAssetCache.get(fullUrl)) return;
  
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      fullUrl,
      (gltf: any) => {
        globalAssetCache.set(fullUrl, gltf);
        resolve(gltf);
      },
      undefined,
      (error: any) => reject(error)
    );
  });
}
