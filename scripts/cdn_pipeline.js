const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');
const { promisify } = require('util');

const pipeline = promisify(require('stream').pipeline);

const TARGET_DIR = path.join(__dirname, '..', 'scratch', 'glb_pack');
const OUTPUT_DIR = path.join(__dirname, '..', 'scratch', 'cdn_dist');

// Make sure output dir exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function compressFile(sourcePath, destPathBase) {
  // Gzip
  const gzip = zlib.createGzip();
  const source1 = fs.createReadStream(sourcePath);
  const dest1 = fs.createWriteStream(`${destPathBase}.gz`);
  await pipeline(source1, gzip, dest1);

  // Brotli
  const brotli = zlib.createBrotliCompress();
  const source2 = fs.createReadStream(sourcePath);
  const dest2 = fs.createWriteStream(`${destPathBase}.br`);
  await pipeline(source2, brotli, dest2);
}

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex').substring(0, 8); // Short hash
}

async function mockUploadToS3(filePath, key) {
  // In a real scenario, this would use AWS SDK (S3 client) or Cloudflare R2 client
  console.log(`[MOCK S3 UPLOAD] Uploading ${path.basename(filePath)} to s3://cdn-bucket/${key}`);
  return new Promise((resolve) => setTimeout(resolve, 50)); // Mock delay
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}. Creating an empty one for testing.`);
    fs.mkdirSync(dirPath, { recursive: true });
    return;
  }

  const files = fs.readdirSync(dirPath);
  
  if (files.length === 0) {
      console.log(`Directory ${dirPath} is empty. Add some files to test.`);
      return;
  }

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      continue;
    }

    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    
    // 1. Hash file for cache-busting
    const hash = getFileHash(fullPath);
    const newFileName = `${baseName}.${hash}${ext}`;
    const newFilePath = path.join(OUTPUT_DIR, newFileName);

    // Copy original file with hash
    fs.copyFileSync(fullPath, newFilePath);
    console.log(`\nProcessed: ${file} -> ${newFileName}`);

    // 2. Compress .glb and textures (.png, .jpg)
    const compressableExts = ['.glb', '.png', '.jpg', '.jpeg', '.json'];
    if (compressableExts.includes(ext.toLowerCase())) {
        console.log(`Compressing ${newFileName} (gzip/brotli)...`);
        await compressFile(fullPath, newFilePath);
    }

    // 3. Mock upload
    await mockUploadToS3(newFilePath, `models/${newFileName}`);
    if (fs.existsSync(`${newFilePath}.gz`)) {
        await mockUploadToS3(`${newFilePath}.gz`, `models/${newFileName}.gz`);
    }
    if (fs.existsSync(`${newFilePath}.br`)) {
        await mockUploadToS3(`${newFilePath}.br`, `models/${newFileName}.br`);
    }
  }
}

async function main() {
  console.log('Starting CDN Pipeline...');
  await processDirectory(TARGET_DIR);
  console.log('\nCDN Pipeline finished successfully.');
}

main().catch(console.error);
