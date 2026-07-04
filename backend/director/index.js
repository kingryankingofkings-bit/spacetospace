const express = require('express');
const cors = require('cors');
const k8s = require('@kubernetes/client-node');

const app = express();
app.use(cors());

let customObjectsApi = null;
try {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();
  customObjectsApi = kc.makeApiClient(k8s.CustomObjectsApi);
} catch (e) {
  console.warn("Could not load K8s config, falling back to local mode");
}

app.get('/matchmake', async (req, res) => {
  try {
    if (!customObjectsApi) {
      return res.json({ address: 'localhost', port: 2567 });
    }

    const response = await customObjectsApi.listNamespacedCustomObject(
      'agones.dev', 'v1', 'default', 'gameservers'
    );
    const gameServers = response.body.items;
    
    // Pack existing servers up to a capacity (e.g., 50)
    let targetServer = null;
    const MAX_PLAYERS = 50;

    for (const gs of gameServers) {
      if (gs.status && gs.status.state === 'Allocated') {
        const playersCount = parseInt(gs.metadata.labels?.players || '0', 10);
        if (playersCount < MAX_PLAYERS) {
          targetServer = gs;
          break;
        }
      }
    }

    if (targetServer) {
      return res.json({
        address: targetServer.status.address,
        port: targetServer.status.ports[0].port
      });
    }

    // Allocate a new server if all active shards are full
    const allocation = {
      apiVersion: 'allocation.agones.dev/v1',
      kind: 'GameServerAllocation',
      metadata: { generateName: 'mmo-allocation-' },
      spec: {
        required: { matchLabels: { 'agones.dev/fleet': 'mmo-game-server-fleet' } }
      }
    };

    const allocResponse = await customObjectsApi.createNamespacedCustomObject(
      'allocation.agones.dev', 'v1', 'default', 'gameserverallocations', allocation
    );

    const allocatedGs = allocResponse.body;
    return res.json({
      address: allocatedGs.status.address,
      port: allocatedGs.status.ports[0].port
    });

  } catch (error) {
    console.error('Matchmaking error:', error);
    res.json({ address: 'localhost', port: 2567 });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Director listening on port ${port}`));
