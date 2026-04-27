import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const InteractiveCubes = ({ hovered, onHover }) => {
  const meshRef = useRef();
  const count = 2000;
  
  const particles = useMemo(() => {
    const temp = [];
    const colorOptions = ["#000000", "#333333", "#666666", "#999999"];
    
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400),
        rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4),
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        scale: Math.random() * 5 + 2,
        baseColor: colorOptions[Math.floor(Math.random() * colorOptions.length)]
      });
    }
    return temp;
  }, [count]);

  const tempObject = new THREE.Object3D();
  const tempColor = new THREE.Color();

  useFrame(() => {
    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);
      particle.rotation.x += particle.rotationSpeed;
      particle.rotation.y += particle.rotationSpeed;

      if (Math.abs(particle.position.x) > 400) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 400) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 400) particle.velocity.z *= -1;

      tempObject.position.copy(particle.position);
      tempObject.rotation.copy(particle.rotation);
      tempObject.scale.setScalar(particle.scale);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      if (hovered === i) {
        tempColor.set("#ff4444");
      } else {
        tempColor.set(particle.baseColor);
      }
      meshRef.current.setColorAt(i, tempColor);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, count]}
      onPointerMove={(e) => {
        e.stopPropagation();
        onHover(e.instanceId); // Report ID back to App.jsx
      }}
      onPointerOut={() => onHover(null)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial specular="#ffffff" shininess={30} />
    </instancedMesh>
  );
};

export default InteractiveCubes;