const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../../frontend/public/models');
const outputFile = path.join(__dirname, '../../frontend/src/utils/AssetRegistry.ts');

function findGlbFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findGlbFiles(filePath, fileList);
    } else if (filePath.endsWith('.glb')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function generateRegistry() {
  console.log('Scanning for .glb models...');
  const allGlbPaths = findGlbFiles(modelsDir);
  console.log(`Found ${allGlbPaths.length} models.`);

  const registry = {};

  for (const fullPath of allGlbPaths) {
    const relativePath = path.relative(path.join(__dirname, '../../frontend/public'), fullPath);
    const urlPath = '/' + relativePath.replace(/\\/g, '/');
    
    const filename = path.basename(urlPath);
    const rootUrl = urlPath.substring(0, urlPath.length - filename.length);
    const key = path.parse(filename).name;

    registry[key] = { rootUrl, sceneFilename: filename };
  }

  let tsContent = `// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY\n`;
  tsContent += `import { getCdnAssetPath } from './AssetManager';\n\n`;
  
  const keys = Object.keys(registry);
  tsContent += `export type AssetType = \n`;
  if (keys.length === 0) {
    tsContent += `  | string;\n\n`;
  } else {
    keys.forEach(k => {
      tsContent += `  | '${k}'\n`;
    });
    tsContent += `  ;\n\n`;
  }

  tsContent += `export const ASSET_REGISTRY: Record<string, { rootUrl: string, sceneFilename: string }> = {\n`;
  
  for (const [key, value] of Object.entries(registry)) {
    tsContent += `  '${key}': getCdnAssetPath('${value.rootUrl}', '${value.sceneFilename}'),\n`;
  }
  
  tsContent += `};\n\n`;
  
  tsContent += `export function getAssetByType(type: string) {\n`;
  tsContent += `  if (type in ASSET_REGISTRY) {\n`;
  tsContent += `    return ASSET_REGISTRY[type as string];\n`;
  tsContent += `  }\n`;
  tsContent += `  return getCdnAssetPath('/models/browser_game_3d_asset_pack_v1/glb_assets/', 'wooden_crate.glb');\n`;
  tsContent += `}\n`;

  fs.writeFileSync(outputFile, tsContent);
  console.log(`AssetRegistry.ts generated successfully with ${keys.length} entries.`);
}

generateRegistry();
