const fs = require('fs');
const path = require('path');

class KillSwitch {
  constructor() {
    this.configFile = path.join(__dirname, 'disabled_features.json');
    this.disabledFeatures = new Set();
    this.loadConfig();
  }

  loadConfig() {
    if (fs.existsSync(this.configFile)) {
      try {
        const data = fs.readFileSync(this.configFile, 'utf8');
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          this.disabledFeatures = new Set(parsed);
        }
      } catch (err) {
        console.error('KillSwitch failed to read disabled_features.json', err);
      }
    } else {
      this.saveConfig();
    }
  }

  saveConfig() {
    fs.writeFileSync(this.configFile, JSON.stringify(Array.from(this.disabledFeatures), null, 2));
  }

  isDisabled(featureId) {
    return this.disabledFeatures.has(featureId);
  }

  disableFeature(featureId) {
    if (!this.disabledFeatures.has(featureId)) {
      this.disabledFeatures.add(featureId);
      this.saveConfig();
      console.log(`[KILLSWITCH] Feature automatically disabled: ${featureId}`);
      return true;
    }
    return false;
  }

  enableFeature(featureId) {
    if (this.disabledFeatures.has(featureId)) {
      this.disabledFeatures.delete(featureId);
      this.saveConfig();
      console.log(`[KILLSWITCH] Feature re-enabled: ${featureId}`);
      return true;
    }
    return false;
  }
}

module.exports = new KillSwitch();
