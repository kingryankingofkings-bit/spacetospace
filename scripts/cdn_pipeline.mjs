import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import zlib from 'zlib';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const gzip = promisify(zlib.gzip);
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../frontend/public');
const CDN_OUTPUT_DIR = path.resolve(__dirname, '../cdn_dist');
const MANIFEST_PATH = path.resolve(__dirname, '../frontend/src/cdn_manifest.json');

async function getFiles(dir) {
  let results = [];
  const list = await readdir(dir);
  for (let file of list) {
    file = path.resolve(dir, file);
    const statObj = await stat(file);
    if (statObj && statObj.isDirectory()) {
      const res = await getFiles(file);
      results = results.concat(res);
    } else {
      results.push(file);
    }
  }
  return results;
}

async function runPipeline() {
  console.log('Starting CDN Asset Pipeline...');
  
  if (!fs.existsSync(CDN_OUTPUT_DIR)) {
    await mkdir(CDN_OUTPUT_DIR, { recursive: true });
  }

  const allFiles = await getFiles(path.join(PUBLIC_DIR, 'models'));
  const glbFiles = allFiles.filter(f => f.endsWith('.glb'));

  const manifest = {};

  for (const file of glbFiles) {
    // Keep POSIX forward-slashes for manifest mapping
    const relativePath = path.relative(PUBLIC_DIR, file).replace(/\\/g, '/');
    const content = await readFile(file);
    
    // Hash
    const hash = crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
    const parsedPath = path.parse(relativePath);
    const hashedFilename = `${parsedPath.name}.${hash}${parsedPath.ext}`;
    const hashedRelativePath = path.posix.join(parsedPath.dir, hashedFilename);
    
    const outputPath = path.join(CDN_OUTPUT_DIR, hashedRelativePath);
    await mkdir(path.dirname(outputPath), { recursive: true });
    
    // Compress and save
    const compressedContent = await gzip(content);
    await writeFile(outputPath + '.gz', compressedContent);
    await writeFile(outputPath, content);
    
    manifest['/' + relativePath] = '/' + hashedRelativePath;
    console.log(`Processed: ${relativePath} -> ${hashedRelativePath}`);
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`Manifest written to ${MANIFEST_PATH}`);

  // Mock Upload to CDN
  console.log('Pushing assets to Global CDN (Simulated AWS CloudFront / S3)...');
  console.log(`Uploaded ${glbFiles.length} assets successfully!`);
}

runPipeline().catch(console.error);
