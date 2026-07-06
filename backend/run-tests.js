const { spawn } = require('child_process');
const path = require('path');

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(' ')} (in ${options.cwd || process.cwd()})`);
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log('=== Running Backend Tests ===');
    const backendDir = __dirname;
    // Run unit and integration tests using node's native runner
    await runCommand('node', [
      '--test',
      'test/auth.test.js',
      'test/combat.test.js',
      'test/economy.test.js',
      'test/integration.test.js'
    ], { cwd: backendDir });

    console.log('=== Verifying Frontend Build ===');
    const frontendDir = path.resolve(__dirname, '../frontend');
    await runCommand('npm', ['run', 'build'], { cwd: frontendDir });

    console.log('=== All tests passed and frontend built successfully! ===');
    process.exit(0);
  } catch (error) {
    console.error('=== Test / Build Verification Failed! ===');
    console.error(error.message);
    process.exit(1);
  }
}

main();
