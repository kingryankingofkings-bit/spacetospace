const fs = require('fs');
let content = fs.readFileSync('frontend/src/components/WorldRenderer.tsx', 'utf8');

content = content.replace('modelFile?: string;\n  zone?: string;', 'modelFile?: string;\n  zone?: string;\n  appearance?: any;');

const rnCode = `
const ResourceNodeRender: React.FC<{ node: any, onClick: () => void }> = ({ node, onClick }) => {
  const isHerb = node.type === 'herb_node';
  const color = isHerb ? Color3.Green() : new Color3(0.5, 0.5, 0.5);
  return (
    <box 
      name={\`node-\${node.id}\`} 
      position={new Vector3(node.x, node.y || 0.5, node.z)} 
      size={isHerb ? 1 : 2}
    >
      <standardMaterial name={\`mat-\${node.id}\`} diffuseColor={color} />
      <box 
        name={\`click-node-\${node.id}\`} 
        position={new Vector3(0,0,0)} 
        size={isHerb ? 2 : 3}
        visibility={0}
        onClick={onClick}
      />
    </box>
  );
};
`;
content = content.replace('export const WorldRenderer: React.FC', rnCode + '\nexport const WorldRenderer: React.FC');

content = content.replace('const worldTime = useMultiplayerStore(state => state.worldTime);', 'const worldTime = useMultiplayerStore(state => state.worldTime);\n  const resourceNodes = useMultiplayerStore(state => state.resourceNodes);');
content = content.replace('const sendAttack = useMultiplayerStore(state => state.sendAttack);', 'const sendAttack = useMultiplayerStore(state => state.sendAttack);\n  const sendGatherNode = useMultiplayerStore(state => state.sendGatherNode);');

content = content.replace('</scene>', '  {resourceNodes && resourceNodes.map((node: any) => (\n          <ResourceNodeRender key={node.id} node={node} onClick={() => sendGatherNode(node.id)} />\n        ))}\n      </scene>');

const remoteDyeCode = `onModelLoaded={(model) => {
          const dyeStr = player.appearance?.dyes?.['armor'] || mod?.colorTint;
          const dyeColor = dyeStr ? (dyeStr === 'crimson_red' ? '#ff0000' : dyeStr) : null;
          if (dyeColor && model.meshes) {
            let tint = new Color3(1,1,1);
            try {
              tint = dyeColor.startsWith('#') ? Color3.FromHexString(dyeColor) : new Color3(1,1,1);
            } catch (e) {}
            model.meshes.forEach(mesh => {
              if (mesh.material) {
                if ((mesh.material as any).albedoColor) (mesh.material as any).albedoColor = tint;
                else if ((mesh.material as any).diffuseColor) (mesh.material as any).diffuseColor = tint;
              }
            });
          }
        }}`;

content = content.replace(/onModelLoaded={\(model\) => {\s*if \(mod\?\.colorTint && model\.meshes\) {[\s\S]*?}}\s*}}/g, remoteDyeCode);

fs.writeFileSync('frontend/src/components/WorldRenderer.tsx', content, 'utf8');
console.log('Successfully patched WorldRenderer.tsx');
