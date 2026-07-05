const fs = require('fs');
let content = fs.readFileSync('frontend/src/components/WorldRenderer.tsx', 'utf8');

const rnFix = `
const ResourceNodeRender: React.FC<{ node: any }> = ({ node }) => {
  const isHerb = node.type === 'herb_node';
  const color = isHerb ? Color3.Green() : new Color3(0.5, 0.5, 0.5);
  return (
    <box 
      name={\`node-\${node.id}\`} 
      position={new Vector3(node.x, node.y || 0.5, node.z)} 
      size={isHerb ? 1 : 2}
    >
      <standardMaterial name={\`mat-\${node.id}\`} diffuseColor={color} />
    </box>
  );
};
`;
content = content.replace(/const ResourceNodeRender[\s\S]*?<\/box>\n  \);\n};/m, rnFix);

content = content.replace('</Scene>', '  {resourceNodes && resourceNodes.map((node: any) => (\n          <ResourceNodeRender key={node.id} node={node} />\n        ))}\n        </Scene>');

fs.writeFileSync('frontend/src/components/WorldRenderer.tsx', content, 'utf8');
console.log('Fixed WorldRenderer TS errors');
