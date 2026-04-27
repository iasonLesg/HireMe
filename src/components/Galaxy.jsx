import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Galaxy = () => {
  const meshRef = useRef();

  const { positions, sizes, shift } = useMemo(() => {
    const pos = [];
    const s = [];
    const sh = [];
    const pushShift = () => {
      sh.push(
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2,
        (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
        Math.random() * 0.9 + 0.1
      );
    };

    for (let i = 0; i < 50000; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
      pos.push(v.x, v.y, v.z);
      s.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    for (let i = 0; i < 100000; i++) {
      let r = 10, R = 40;
      let rand = Math.pow(Math.random(), 1.5);
      let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      const v = new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2);
      pos.push(v.x, v.y, v.z);
      s.push(Math.random() * 1.5 + 0.5);
      pushShift();
    }

    return {
      positions: new Float32Array(pos),
      sizes: new Float32Array(s),
      shift: new Float32Array(sh)
    };
  }, []);

  const uniforms = useMemo(() => ({
    time: { value: 0 }
  }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.5;
    uniforms.time.value = t * Math.PI;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <points ref={meshRef} rotation={[0, 0, 0.2]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-sizes" count={sizes.length} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-shift" count={shift.length / 4} array={shift} itemSize={4} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        depthTest={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
        onBeforeCompile={(shader) => {
          shader.uniforms.time = uniforms.time;
          shader.vertexShader = `
            uniform float time;
            attribute float sizes;
            attribute vec4 shift;
            varying vec3 vColor;
            ${shader.vertexShader}
          `
          .replace(`gl_PointSize = size;`, `gl_PointSize = size * sizes;`)
          .replace(`#include <color_vertex>`, `
  #include <color_vertex>
  float d = length(abs(position) / vec3(40., 10., 40.));
  d = clamp(d, 0., 1.);
  
  // CHANGE THESE VALUES:
  // vec3(0.4) is a medium gray. 
  // vec3(0.7) is a light gray.
  vColor = mix(vec3(0.3, 0.3, 0.3), vec3(0.6, 0.6, 0.6), d);
`)
          .replace(`#include <begin_vertex>`, `
            #include <begin_vertex>
            float t = time;
            float moveT = mod(shift.x + shift.z * t, PI2);
            float moveS = mod(shift.y + shift.z * t, PI2);
            transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
          `);

          shader.fragmentShader = `
            varying vec3 vColor;
            ${shader.fragmentShader}
          `.replace(
            `vec4 diffuseColor = vec4( diffuse, opacity );`,
            `
            float d = length(gl_PointCoord.xy - 0.5);
            if (d > 0.5) discard;
            // Force the color to use our black vColor and a sharp alpha circle
            vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.4, d) );
            `
          );
        }}
      />
    </points>
  );
};

export default Galaxy;