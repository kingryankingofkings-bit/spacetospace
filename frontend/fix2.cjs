const fs = require('fs');

function fix_world_renderer() {
    let content = fs.readFileSync('src/components/WorldRenderer.tsx', 'utf8');

    // Add AnimatedModel stub if missing
    if (!content.includes('export const AnimatedModel')) {
        const animatedModelStub = `
export const AnimatedModel: React.FC<{ url: string; currentState?: string; scaleToDimension?: number }> = ({ url, scaleToDimension }) => {
  return <OptimizedModel url={url} scaleToDimension={scaleToDimension} />;
};
`;
        // Insert after OptimizedModel export
        content = content.replace('export const OptimizedModel: React.FC<{', animatedModelStub + '\nexport const OptimizedModel: React.FC<{');
    }

    // Fix CameraRig RefObject error
    content = content.replace('targetRef: React.RefObject<THREE.Object3D>', 'targetRef: React.RefObject<any>');

    fs.writeFileSync('src/components/WorldRenderer.tsx', content);
}

fix_world_renderer();
console.log('Fixes applied.');
