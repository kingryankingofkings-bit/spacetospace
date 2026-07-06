const test = require('node:test');
const assert = require('node:assert');
const { spawn } = require('child_process');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const path = require('path');

test('Backend Server Integration Test via WebSocket', () => {
  return new Promise((resolve, reject) => {
    const port = '2568';
    const child = spawn('node', ['-r', './test/mockDbConnection.js', 'index.js'], {
      env: { ...process.env, PORT: port },
      cwd: path.resolve(__dirname, '..')
    });

    let serverStarted = false;
    let ws;
    let resolved = false;

    const cleanup = () => {
      if (ws) {
        try { ws.close(); } catch(e) {}
      }
      child.kill('SIGTERM');
    };

    child.stdout.on('data', (data) => {
      const str = data.toString();
      if (str.includes('Listening') && str.includes(port)) {
        if (!serverStarted) {
          serverStarted = true;
          connectWs();
        }
      }
    });

    child.stderr.on('data', (data) => {
      // Print child stderr to assist in debugging if needed
      console.error('Child Stderr:', data.toString());
    });

    child.on('error', (err) => {
      if (!resolved) {
        resolved = true;
        cleanup();
        reject(err);
      }
    });

    child.on('exit', (code) => {
      if (!resolved && !serverStarted) {
        resolved = true;
        reject(new Error(`Server exited prematurely with code ${code}`));
      }
    });

    function connectWs() {
      const JWT_SECRET = process.env.JWT_SECRET || 'YOUR_SECRET_KEY';
      const token = jwt.sign({ username: 'integration_tester' }, JWT_SECRET, { expiresIn: '15m' });

      ws = new WebSocket(`ws://localhost:${port}`);

      ws.on('open', () => {
        ws.send(JSON.stringify({ type: 'join', token }));
      });

      ws.on('message', (message) => {
        try {
          const data = JSON.parse(message);
          if (data.type === 'init' || data.type === 'quest_update') {
            if (!resolved) {
              resolved = true;
              cleanup();
              // Await child process exit before resolving
              child.on('exit', () => {
                resolve();
              });
            }
          } else if (data.type === 'error') {
            if (!resolved) {
              resolved = true;
              cleanup();
              reject(new Error(`Server returned error message: ${data.message}`));
            }
          }
        } catch (e) {
          if (!resolved) {
            resolved = true;
            cleanup();
            reject(e);
          }
        }
      });

      ws.on('error', (err) => {
        if (!resolved) {
          resolved = true;
          cleanup();
          reject(err);
        }
      });
    }

    // Safety timeout
    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        cleanup();
        reject(new Error('Integration test timed out'));
      }
    }, 10000);
  });
});
