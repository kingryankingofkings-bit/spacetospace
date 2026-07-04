import manifest from '../cdn_manifest.json';

const CDN_BASE_URL = import.meta.env.VITE_CDN_URL || '';

export function getCdnAssetPath(rootUrl: string, filename: string): { rootUrl: string, sceneFilename: string } {
  const originalPath = rootUrl + filename;
  const hashedPath = (manifest as Record<string, string>)[originalPath] || originalPath;
  const fullUrl = CDN_BASE_URL + hashedPath;
  
  const lastSlash = fullUrl.lastIndexOf('/');
  return {
    rootUrl: fullUrl.substring(0, lastSlash + 1),
    sceneFilename: fullUrl.substring(lastSlash + 1)
  };
}
