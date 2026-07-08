import React, { useMemo, Component, ReactNode } from 'react';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import * as THREE from 'three';

export interface EnvironmentPopulatorProps {
  currentLevel: string;
}

const MODELS = [
  '/models/09_resource_gathering_nodes_glb_pack_v1/glb_assets/rare_flower_patch.glb',
  '/models/09_resource_gathering_nodes_glb_pack_v1/glb_assets/wood_log_bundle.glb',
  '/models/09_resource_gathering_nodes_glb_pack_v1/glb_assets/iron_ore_node.glb',
  '/models/09_resource_gathering_nodes_glb_pack_v1/glb_assets/blue_crystal_node.glb'
];

MODELS.forEach((url) => {
  useGLTF.preload(url);
});

function seededRandom(seed: number) {
  let s = seed;
  return function () {
    const x = Math.sin(s++) * 10000;
    return x - Math.floor(x);
  };
}

interface TransformData {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

class ErrorBoundary extends Component<{ fallback: ReactNode, children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function InstancedGLTF({ url, transforms }: { url: string; transforms: TransformData[] }) {
  const { scene } = useGLTF(url);

  const meshes = useMemo(() => {
    const m: THREE.Mesh[] = [];
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        m.push(child as THREE.Mesh);
      }
    });
    return m;
  }, [scene]);

  return (
    <group>
      {meshes.map((mesh, i) => (
        <Instances 
          key={i} 
          geometry={mesh.geometry} 
          material={mesh.material} 
          castShadow 
          receiveShadow
          limit={transforms.length}
        >
          {transforms.map((t, j) => (
            <Instance 
              key={j} 
              position={t.position} 
              rotation={t.rotation} 
              scale={t.scale} 
            />
          ))}
        </Instances>
      ))}
    </group>
  );
}

export const EnvironmentPopulator: React.FC<EnvironmentPopulatorProps> = ({ currentLevel }) => {
  const seed = useMemo(() => {
    let s = 0;
    for (let i = 0; i < currentLevel.length; i++) {
      s += currentLevel.charCodeAt(i);
    }
    return s;
  }, [currentLevel]);

  const populationData = useMemo(() => {
    const random = seededRandom(seed);
    const data: Record<string, TransformData[]> = {};

    MODELS.forEach((url) => {
      const transforms: TransformData[] = [];
      const count = 50 + Math.floor(random() * 50); // 50 to 100 instances per model

      for (let i = 0; i < count; i++) {
        // Spread items across a 100x100 area
        const x = (random() - 0.5) * 100;
        const z = (random() - 0.5) * 100;
        const y = 0;

        const rotY = random() * Math.PI * 2;
        const scale = 0.8 + random() * 0.6; // Scale between 0.8 and 1.4

        transforms.push({
          position: [x, y, z],
          rotation: [0, rotY, 0],
          scale: scale
        });
      }

      data[url] = transforms;
    });

    return data;
  }, [seed]);

  return (
    <group name="EnvironmentPopulator">
      {MODELS.map((url) => (
        <ErrorBoundary 
          key={url}
          fallback={
            <Instances limit={populationData[url].length} castShadow receiveShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="gray" roughness={0.8} />
              {populationData[url].map((t, j) => (
                <Instance key={j} position={t.position} rotation={t.rotation} scale={t.scale} />
              ))}
            </Instances>
          }
        >
          <React.Suspense fallback={null}>
            <InstancedGLTF url={url} transforms={populationData[url]} />
          </React.Suspense>
        </ErrorBoundary>
      ))}
    </group>
  );
};
