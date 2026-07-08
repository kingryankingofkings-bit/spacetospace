const fs = require('fs');

let c = fs.readFileSync('src/App.tsx', 'utf8');

if (!c.includes('ActionBar')) {
    c = c.replace("import { Minimap } from './components/ui/Minimap';", "import { Minimap } from './components/ui/Minimap';\nimport { ActionBar } from './components/ui/ActionBar';");
    c = c.replace('<Minimap />', '<Minimap />\n          <ActionBar />');
    fs.writeFileSync('src/App.tsx', c);
}
