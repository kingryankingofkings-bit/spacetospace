const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const sceneFilePath = path.join(__dirname, '../frontend/public/data/scene.json');

app.post('/api/save-scene', (req, res) => {
    try {
        const data = req.body;
        // Ensure directory exists
        const dir = path.dirname(sceneFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(sceneFilePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[Editor] Scene saved to ${sceneFilePath}`);
        res.json({ success: true, message: 'Scene saved successfully' });
    } catch (err) {
        console.error('[Editor] Failed to save scene:', err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`[Editor] Server running on http://localhost:${PORT}`);
});
