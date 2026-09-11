"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function FloatingObjectsScene() {
  const groupRef = useRef<THREE.Group>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  // Minimal particle set — 300 points only (was 600)
  const particles = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth mouse parallax on group
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.25 - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x += (-pointer.y * 0.15 - groupRef.current.rotation.x) * 0.04;
    }

    // Central icosahedron slow rotation
    if (icosaRef.current) {
      icosaRef.current.rotation.y += delta * 0.18;
      icosaRef.current.rotation.x += delta * 0.07;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y += delta * 0.18;
      wireRef.current.rotation.x += delta * 0.07;
    }

    // Orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
      ring1Ref.current.rotation.x = Math.PI / 3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.2;
      ring2Ref.current.rotation.y = Math.PI / 4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ── Lights — minimal, clean ── */}
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 4]} intensity={40} color="#2563EB" decay={2} />
      <pointLight position={[-4, -2, 2]} intensity={15} color="#1D4ED8" decay={2} />
      <directionalLight position={[0, 5, 5]} intensity={1.2} color="#BFDBFE" />

      {/* ── Central Icosahedron: solid + wireframe ── */}
      {/* Solid core */}
      <mesh ref={icosaRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#1236A0"
          roughness={0.15}
          metalness={0.85}
          emissive="#1D4ED8"
          emissiveIntensity={0.25}
        />
      </mesh>
      {/* Wireframe shell */}
      <mesh ref={wireRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.63, 1]} />
        <meshBasicMaterial color="#60A5FA" wireframe transparent opacity={0.18} />
      </mesh>

      {/* ── Thin orbital rings ── */}
      <mesh ref={ring1Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.4, 0.012, 8, 120]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[2.9, 0.008, 8, 140]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.3} />
      </mesh>

      {/* ── Small accent spheres ── */}
      <mesh position={[2.2, 0.8, 0.3]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#F59E0B" emissive="#D97706" emissiveIntensity={1} />
      </mesh>
      <mesh position={[-1.8, -1.2, 0.8]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#60A5FA" emissive="#3B82F6" emissiveIntensity={1} />
      </mesh>

      {/* ── Particles (sphere distribution) ── */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#3B82F6"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function FloatingObjects() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <FloatingObjectsScene />
      </Canvas>
    </div>
  );
}
