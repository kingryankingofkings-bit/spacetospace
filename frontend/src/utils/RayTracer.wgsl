struct BVHNode {
    aabbMin : vec3<f32>,
    leftFirst : f32,
    aabbMax : vec3<f32>,
    triCount : f32,
};

@group(0) @binding(0) var<storage, read> bvhNodes : array<BVHNode>;
@group(0) @binding(1) var<storage, read> vertices : array<f32>;
@group(0) @binding(2) var<storage, read> indices : array<u32>;
@group(0) @binding(3) var outputTex : texture_storage_2d<rgba8unorm, write>;

struct Ray {
    origin: vec3<f32>,
    dir: vec3<f32>,
    invDir: vec3<f32>,
};

fn intersectAABB(ray: Ray, aabbMin: vec3<f32>, aabbMax: vec3<f32>) -> f32 {
    let t0 = (aabbMin - ray.origin) * ray.invDir;
    let t1 = (aabbMax - ray.origin) * ray.invDir;
    
    let tmin = min(t0, t1);
    let tmax = max(t0, t1);
    
    let tnear = max(max(tmin.x, tmin.y), tmin.z);
    let tfar = min(min(tmax.x, tmax.y), tmax.z);
    
    if (tnear > tfar || tfar < 0.0) {
        return 9999999.0; // Miss
    }
    return tnear;
}

fn intersectTriangle(ray: Ray, v0: vec3<f32>, v1: vec3<f32>, v2: vec3<f32>) -> f32 {
    let edge1 = v1 - v0;
    let edge2 = v2 - v0;
    let h = cross(ray.dir, edge2);
    let a = dot(edge1, h);
    
    if (a > -0.0001 && a < 0.0001) {
        return 9999999.0;
    }
    
    let f = 1.0 / a;
    let s = ray.origin - v0;
    let u = f * dot(s, h);
    
    if (u < 0.0 || u > 1.0) {
        return 9999999.0;
    }
    
    let q = cross(s, edge1);
    let v = f * dot(ray.dir, q);
    
    if (v < 0.0 || u + v > 1.0) {
        return 9999999.0;
    }
    
    let t = f * dot(edge2, q);
    if (t > 0.0001) {
        return t;
    }
    
    return 9999999.0;
}

fn traverseBVH(ray: Ray) -> f32 {
    var stack: array<u32, 64>;
    var stackPtr = 0u;
    
    stack[stackPtr] = 0u;
    stackPtr++;
    
    var closestT = 9999999.0;
    
    while (stackPtr > 0u) {
        stackPtr--;
        let nodeIdx = stack[stackPtr];
        let node = bvhNodes[nodeIdx];
        
        let tHit = intersectAABB(ray, node.aabbMin, node.aabbMax);
        if (tHit > closestT) {
            continue;
        }
        
        if (node.triCount > 0.0) {
            // Leaf node
            let start = u32(node.leftFirst);
            let count = u32(node.triCount);
            
            for (var i = 0u; i < count; i++) {
                let triIdx = start + i;
                let i0 = indices[triIdx * 3u];
                let i1 = indices[triIdx * 3u + 1u];
                let i2 = indices[triIdx * 3u + 2u];
                
                let v0 = vec3<f32>(vertices[i0 * 3u], vertices[i0 * 3u + 1u], vertices[i0 * 3u + 2u]);
                let v1 = vec3<f32>(vertices[i1 * 3u], vertices[i1 * 3u + 1u], vertices[i1 * 3u + 2u]);
                let v2 = vec3<f32>(vertices[i2 * 3u], vertices[i2 * 3u + 1u], vertices[i2 * 3u + 2u]);
                
                let t = intersectTriangle(ray, v0, v1, v2);
                if (t < closestT) {
                    closestT = t;
                }
            }
        } else {
            // Internal node
            let leftChild = u32(node.leftFirst);
            let rightChild = leftChild + 1u;
            
            let distL = intersectAABB(ray, bvhNodes[leftChild].aabbMin, bvhNodes[leftChild].aabbMax);
            let distR = intersectAABB(ray, bvhNodes[rightChild].aabbMin, bvhNodes[rightChild].aabbMax);
            
            if (distL < distR) {
                if (distR < closestT) {
                    stack[stackPtr] = rightChild;
                    stackPtr++;
                }
                if (distL < closestT) {
                    stack[stackPtr] = leftChild;
                    stackPtr++;
                }
            } else {
                if (distL < closestT) {
                    stack[stackPtr] = leftChild;
                    stackPtr++;
                }
                if (distR < closestT) {
                    stack[stackPtr] = rightChild;
                    stackPtr++;
                }
            }
        }
    }
    
    return closestT;
}

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let texDim = textureDimensions(outputTex);
    if (GlobalInvocationID.x >= texDim.x || GlobalInvocationID.y >= texDim.y) {
        return;
    }
    
    let uv = vec2<f32>(f32(GlobalInvocationID.x) / f32(texDim.x), f32(GlobalInvocationID.y) / f32(texDim.y));
    
    // Very simple orthogonal ray gen for demonstration
    let rayOrigin = vec3<f32>(uv.x * 100.0 - 50.0, 100.0, uv.y * 100.0 - 50.0);
    let rayDir = vec3<f32>(0.0, -1.0, 0.0);
    
    // Prevent division-by-zero by clamping denominators away from exactly 0.0
    var safeDir = rayDir;
    if (abs(safeDir.x) < 0.000001) { safeDir.x = sign(safeDir.x) * 0.000001; if (safeDir.x == 0.0) { safeDir.x = 0.000001; } }
    if (abs(safeDir.y) < 0.000001) { safeDir.y = sign(safeDir.y) * 0.000001; if (safeDir.y == 0.0) { safeDir.y = 0.000001; } }
    if (abs(safeDir.z) < 0.000001) { safeDir.z = sign(safeDir.z) * 0.000001; if (safeDir.z == 0.0) { safeDir.z = 0.000001; } }
    let invDir = vec3<f32>(1.0 / safeDir.x, 1.0 / safeDir.y, 1.0 / safeDir.z);
    
    let ray = Ray(rayOrigin, rayDir, invDir);
    let hitT = traverseBVH(ray);
    
    var color = vec4<f32>(0.0, 0.0, 0.0, 1.0); // Miss color
    if (hitT < 999999.0) {
        let hitPos = rayOrigin + rayDir * hitT;
        // Simple fake diffuse based on height
        let intensity = hitPos.y / 10.0;
        color = vec4<f32>(intensity, intensity, intensity, 1.0);
    }
    
    textureStore(outputTex, GlobalInvocationID.xy, color);
}
