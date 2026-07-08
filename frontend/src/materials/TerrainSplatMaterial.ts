import * as THREE from 'three';

export interface SplatMaterialParams {
  grassColor?: THREE.Color;
  dirtColor?: THREE.Color;
  rockColor?: THREE.Color;
  sandColor?: THREE.Color;
}

export const createTerrainSplatMaterial = (params?: SplatMaterialParams) => {
  const material = new THREE.MeshStandardMaterial({
    roughness: 0.9,
    metalness: 0.1,
  });

  const uniforms = {
    uGrassColor: { value: params?.grassColor || new THREE.Color('#2d5a27') },
    uDirtColor: { value: params?.dirtColor || new THREE.Color('#5c4033') },
    uRockColor: { value: params?.rockColor || new THREE.Color('#4a4a4a') },
    uSandColor: { value: params?.sandColor || new THREE.Color('#c2b280') },
    uTime: { value: 0 }
  };

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uGrassColor = uniforms.uGrassColor;
    shader.uniforms.uDirtColor = uniforms.uDirtColor;
    shader.uniforms.uRockColor = uniforms.uRockColor;
    shader.uniforms.uSandColor = uniforms.uSandColor;
    shader.uniforms.uTime = uniforms.uTime;

    // Pass varying position to fragment shader
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `
      #include <common>
      varying vec3 vWorldPosition;
      `
    );

    shader.vertexShader = shader.vertexShader.replace(
      '#include <worldpos_vertex>',
      `
      #include <worldpos_vertex>
      vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
      `
    );

    // Fragment Shader
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `
      #include <common>
      varying vec3 vWorldPosition;
      
      uniform vec3 uGrassColor;
      uniform vec3 uDirtColor;
      uniform vec3 uRockColor;
      uniform vec3 uSandColor;
      
      // Simple 3D Noise for procedural splatting
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      
      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i);
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }
      `
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `
      #include <color_fragment>
      
      // Calculate slopes and height
      // Right now we don't have normals varying in heightmap because the plane is flat,
      // but if displaced, we could use standard normals.
      
      // We will generate fake heights using noise for the color splatting
      float heightNoise = snoise(vWorldPosition * 0.01) * 10.0;
      float detailNoise = snoise(vWorldPosition * 0.1);
      
      float h = vWorldPosition.y + heightNoise;
      
      vec3 finalColor = uGrassColor;
      
      // Sand near water (y <= 1)
      float sandBlend = smoothstep(1.5, 0.0, h);
      finalColor = mix(finalColor, uSandColor, sandBlend);
      
      // Rock at high altitudes or steep slopes
      // Since it's flat we'll fake slope using detail noise
      float rockBlend = smoothstep(5.0, 15.0, h + detailNoise * 5.0);
      finalColor = mix(finalColor, uRockColor, rockBlend);
      
      // Dirt in patches
      float dirtPatch = smoothstep(0.3, 0.8, snoise(vWorldPosition * 0.05 + vec3(100.0)));
      finalColor = mix(finalColor, uDirtColor, dirtPatch * (1.0 - sandBlend) * (1.0 - rockBlend));

      diffuseColor.rgb = finalColor;
      `
    );
  };

  return material;
};
