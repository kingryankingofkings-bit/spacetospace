import manifest from '../cdn_manifest.json';

const CDN_BASE_URL = import.meta.env.VITE_CDN_URL || '';

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
