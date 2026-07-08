import os
import re

file_path = 'src/components/WorldRenderer.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    c = f.read()

fps_limiter_code = """
const FPSLimiter = ({ fps = 60 }) => {
  const set = useThree((state) => state.set);
  const invalidate = useThree((state) => state.invalidate);
  
  React.useEffect(() => {
    set({ frameloop: 'demand' });
    
    const interval = 1000 / fps;
    let lastTime = performance.now();
    let animationFrameId;
    
    const loop = (time) => {
      animationFrameId = requestAnimationFrame(loop);
      if (time - lastTime >= interval) {
        lastTime = time - ((time - lastTime) % interval);
        invalidate();
      }
    };
    
    animationFrameId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animationFrameId);
      set({ frameloop: 'always' });
    };
  }, [fps, set, invalidate]);
  return null;
};
"""

if "FPSLimiter" not in c:
    c = c.replace(
        "export const WorldRenderer: React.FC<WorldRendererProps> = React.memo(({ setInteractingNpcId }) => {",
        fps_limiter_code + "\nexport const WorldRenderer: React.FC<WorldRendererProps> = React.memo(({ setInteractingNpcId }) => {"
    )
    
    c = c.replace(
        "<Suspense fallback={null}>",
        "<Suspense fallback={null}>\n          <FPSLimiter fps={60} />"
    )

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Done")
