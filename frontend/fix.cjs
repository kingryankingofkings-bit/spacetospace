const fs = require('fs');

function fix_world_renderer() {
    let content = fs.readFileSync('src/components/WorldRenderer.tsx', 'utf8');

    // 1. Duplicate import
    content = content.replace("import { Controls } from '../store/InputManager';\nimport { playFootstep, playSwingSound } from '../utils/AudioEngine';", "import { playFootstep, playSwingSound } from '../utils/AudioEngine';");
    content = content.replace("import { Controls } from '../store/InputManager';\r\nimport { playFootstep, playSwingSound } from '../utils/AudioEngine';", "import { playFootstep, playSwingSound } from '../utils/AudioEngine';");

    // 2. fogExp2 args
    content = content.replace('<fogExp2 attach="fog" color="#8da6b5" density={0.008} />', '<fogExp2 attach="fog" args={["#8da6b5", 0.008]} />');

    // 3. EffectComposer
    content = content.replace('<EffectComposer disableNormalPass multisampling={4}>', '<EffectComposer multisampling={4}>');

    // 4. attackPressed
    content = content.replace('const [attackPressed] = useKeyboardControls<Controls>((state) => [state.attack]);', 'const attackPressed = useKeyboardControls<Controls>((state) => state.attack);');
    
    // 5. interactPressed
    content = content.replace('const [interactPressed] = useKeyboardControls<Controls>((state) => [state.interact]);', 'const interactPressed = useKeyboardControls<Controls>((state) => state.interact);');

    // 6. playerRef
    content = content.replace('const ref = useRef<THREE.Group>(null);\n  const worldNpcs = useMultiplayerStore', 'const playerRef = useRef<THREE.Group>(null);\n  const worldNpcs = useMultiplayerStore');
    content = content.replace('const ref = useRef<THREE.Group>(null);\r\n  const worldNpcs = useMultiplayerStore', 'const playerRef = useRef<THREE.Group>(null);\r\n  const worldNpcs = useMultiplayerStore');
    content = content.replace('if (attackPressed && !isAttacking && ref.current) {', 'if (attackPressed && !isAttacking && playerRef.current) {');
    content = content.replace('ref.current.getWorldPosition(playerPos);', 'playerRef.current.getWorldPosition(playerPos);');
    content = content.replace('.applyQuaternion(ref.current.quaternion);', '.applyQuaternion(playerRef.current.quaternion);');
    content = content.replace('<group ref={ref as any}>\n          {effectiveAppearance', '<group ref={playerRef}>\n          {effectiveAppearance');
    content = content.replace('<group ref={ref as any}>\r\n          {effectiveAppearance', '<group ref={playerRef}>\r\n          {effectiveAppearance');
    content = content.replace('<CameraRig targetRef={ref as any} />', '<CameraRig targetRef={playerRef} />');

    // 7. npcRef
    content = content.replace('const ref = useRef<THREE.Group>(null);\n  const lastFootstep = useRef<number>(0);', 'const npcRef = useRef<THREE.Group>(null);\n  const lastFootstep = useRef<number>(0);');
    content = content.replace('const ref = useRef<THREE.Group>(null);\r\n  const lastFootstep = useRef<number>(0);', 'const npcRef = useRef<THREE.Group>(null);\r\n  const lastFootstep = useRef<number>(0);');
    content = content.replace('<group ref={ref as any} position={[npc.x, npc.y, npc.z]}>', '<group ref={npcRef} position={[npc.x, npc.y, npc.z]}>');

    // 8. showDebug Perf
    content = content.replace('{showDebug && <Perf position="top-left" />}', '{/* Perf omitted */}');

    // 9. Exports for OptimizedModel and AnimatedModel
    content = content.replace('const OptimizedModel: React.FC<{', 'export const OptimizedModel: React.FC<{');
    content = content.replace('const AnimatedModel: React.FC<{', 'export const AnimatedModel: React.FC<{');

    fs.writeFileSync('src/components/WorldRenderer.tsx', content);
}

fix_world_renderer();
console.log('Fixes applied.');
