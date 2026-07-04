const fs = require('fs');
const path = require('path');

class AiTelemetryMonitor {
  constructor(getStateFn) {
    this.getStateFn = getStateFn;
    this.logDir = path.join(__dirname, 'logs');
    this.logFile = path.join(this.logDir, 'ai_monitor.log');
    
    // Tracking variables
    this.lastTickTime = Date.now();
    this.tickDriftAccumulator = 0;
    this.tickSamples = 0;

    // Ensure logs directory exists
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level, category, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      category,
      message,
      data
    };
    const logLine = `[${timestamp}] [${level}] [${category}] ${message} | ${JSON.stringify(data)}\n`;
    fs.appendFileSync(this.logFile, logLine, 'utf8');
    
    if (level === 'CRITICAL' || level === 'ERROR') {
      console.error(logLine.trim());
    }
  }

  recordTick() {
    const now = Date.now();
    const expectedDelta = 100; // 10Hz tick
    const actualDelta = now - this.lastTickTime;
    this.lastTickTime = now;

    // If we took significantly longer than the expected 100ms, record drift
    if (actualDelta > expectedDelta + 20) {
      this.tickDriftAccumulator += (actualDelta - expectedDelta);
    }
    this.tickSamples++;
  }

  startMonitoring() {
    this.log('INFO', 'SYSTEM', 'AI Telemetry Monitor Initialized and actively scanning.');

    // Trap fatal errors
    process.on('uncaughtException', (err) => {
      this.log('CRITICAL', 'CRASH', 'Uncaught Exception thrown!', { name: err.name, message: err.message, stack: err.stack });
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log('CRITICAL', 'CRASH', 'Unhandled Promise Rejection!', { reason: reason ? reason.toString() : 'Unknown' });
    });

    // Run deep analysis every 30 seconds
    setInterval(() => {
      this.analyzeSystemHealth();
    }, 30000);
  }

  analyzeSystemHealth() {
    const state = this.getStateFn();
    const memory = process.memoryUsage();
    
    // 1. Analyze Memory
    const heapUsedMB = Math.round(memory.heapUsed / 1024 / 1024);
    if (heapUsedMB > 512) {
      this.log('WARNING', 'PERFORMANCE', 'High Memory Usage Detected', { heapUsedMB, limitMB: 512 });
    }

    // 2. Analyze Tick Drift (Server CPU strain)
    if (this.tickSamples > 0) {
      const avgDrift = this.tickDriftAccumulator / this.tickSamples;
      if (avgDrift > 15) { // Average drift is > 15ms per tick
        this.log('WARNING', 'PERFORMANCE', 'Server Tick Rate is dropping due to CPU strain.', { avgDriftMs: avgDrift.toFixed(2), totalTicks: this.tickSamples });
      }
      // Reset for next period
      this.tickDriftAccumulator = 0;
      this.tickSamples = 0;
    }

    // 3. Analyze Spatial Grid Crowding (Anomaly Detection)
    let maxDensityCell = null;
    let maxDensityCount = 0;
    
    // The spatial grid contains Sets of sessionIds
    if (state.spatialGrid) {
      for (const [cell, sessions] of state.spatialGrid.entries()) {
        const count = sessions.size;
        if (count > maxDensityCount) {
          maxDensityCount = count;
          maxDensityCell = cell;
        }
      }
    }

    // Also count NPCs in cells
    const npcDensity = {};
    if (state.npcs) {
      state.npcs.forEach(npc => {
        const cx = Math.floor(npc.x / 50);
        const cz = Math.floor(npc.z / 50);
        const cell = `${npc.zone}:${cx},${cz}`;
        npcDensity[cell] = (npcDensity[cell] || 0) + 1;
      });
      
      for (const [cell, count] of Object.entries(npcDensity)) {
        if (count > 30) {
          this.log('ANOMALY', 'SPATIAL', 'High NPC Crowding Detected', { cell, count, threshold: 30 });
        }
      }
    }

    if (maxDensityCount > 20) {
      this.log('ANOMALY', 'SPATIAL', 'High Player Crowding Detected', { cell: maxDensityCell, count: maxDensityCount, threshold: 20 });
    }

    // General Heartbeat
    this.log('INFO', 'HEARTBEAT', 'System Health Check Complete', { 
      playersOnline: state.players ? state.players.size : 0,
      activeNpcs: state.npcs ? state.npcs.length : 0,
      heapUsedMB
    });
  }
}

module.exports = AiTelemetryMonitor;
