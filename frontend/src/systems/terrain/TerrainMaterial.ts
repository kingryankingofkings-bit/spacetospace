import * as THREE from 'three';

export class TerrainMaterial extends THREE.MeshStandardMaterial {
  constructor(parameters = {}) {
    super(parameters);
    this.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `#include <common>
         varying float vHeight;
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
         vHeight = transformed.y;
        `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        `#include <common>
         varying float vHeight;
        `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         vec3 grassColor = vec3(0.18, 0.35, 0.15); 
         vec3 dirtColor = vec3(0.35, 0.25, 0.15);
         vec3 rockColor = vec3(0.5, 0.5, 0.5);
         vec3 snowColor = vec3(1.0, 1.0, 1.0);
         
         vec3 terrainColor = grassColor;
         
         if (vHeight > 60.0) {
             terrainColor = mix(rockColor, snowColor, smoothstep(60.0, 80.0, vHeight));
         } else if (vHeight > 20.0) {
             terrainColor = mix(dirtColor, rockColor, smoothstep(20.0, 40.0, vHeight));
         } else if (vHeight > 5.0) {
             terrainColor = mix(grassColor, dirtColor, smoothstep(5.0, 10.0, vHeight));
         }
         
         diffuseColor.rgb = terrainColor;
        `
      );
    };
  }
}
