"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 200 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed * delta * 20;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.setScalar(s * 0.1);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
      mesh.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#60A5FA" transparent opacity={0.3} roughness={1} metalness={0} />
    </instancedMesh>
  );
}

function GeometricStructures() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.05;
      
      const targetX = state.pointer.x * 0.2;
      const targetY = state.pointer.y * 0.2;
      
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.5, 0.02, 16, 100]} />
          <meshPhysicalMaterial 
            color="#0F172A" 
            metalness={0.8} 
            roughness={0.2} 
            clearcoat={1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <group rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 2.5,
                Math.sin((i / 8) * Math.PI * 2) * 2.5,
                (Math.random() - 0.5) * 0.5
              ]}
              rotation={[
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                0
              ]}
            >
              <boxGeometry args={[0.8, 0.1, 0.4]} />
              <meshPhysicalMaterial 
                color={i % 2 === 0 ? "#2563EB" : "#1E3A8A"} 
                metalness={0.4} 
                roughness={0.1}
                transmission={0.8}
                thickness={0.5}
                ior={1.5}
              />
            </mesh>
          ))}
        </group>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, -2]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial 
            color="#60A5FA" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.3} 
            roughness={0.2}
            distort={0.3}
            speed={1.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-80" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3B82F6" />
        <directionalLight position={[0, 0, 10]} intensity={0.5} color="#1E3A8A" />
        
        <GeometricStructures />
        <Particles count={300} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
