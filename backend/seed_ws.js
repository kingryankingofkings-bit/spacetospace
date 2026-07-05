const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:2567');
const types = ['iron_node', 'herb_node', 'data_core_node'];

ws.on('open', () => {
   console.log('Connected to WS');
   for (let i = 0; i < 50; i++) {
       const type = types[Math.floor(Math.random() * types.length)];
       const x = (Math.random() - 0.5) * 500;
       const z = (Math.random() - 0.5) * 500;
       ws.send(JSON.stringify({ type: 'place_object', object: { id: `resource_${Date.now()}_${i}`, type, x, y: 0, z } }));
   }
   console.log('Sent 50 resource nodes');
   setTimeout(() => ws.close(), 1000);
});
