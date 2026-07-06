import { rmSync, existsSync } from 'fs';

const distPath = './dist';

try {
  if (existsSync(distPath)) {
    rmSync(distPath, { recursive: true, force: true });
    console.log('Successfully cleaned dist directory.');
  }
} catch (err) {
  console.warn('Warning: Could not completely clean dist directory due to file locks. Proceeding with build anyway...', err.message);
}
