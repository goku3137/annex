"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingObjects() {
  const icosaRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  // Particle positions
  const particles = useMemo(() => {
    const count = 600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Subtle mouse parallax on the whole group
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (-pointer.y * 0.2 - groupRef.current.rotation.x) * 0.05;
    }

    // Main icosahedron slow spin
    if (icosaRef.current) {
      icosaRef.current.rotation.x += delta * 0.08;
      icosaRef.current.rotation.y += delta * 0.12;
    }

    // Torus knot spinning
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.1;
      torusRef.current.rotation.z += delta * 0.06;
    }

    // Orbiting small sphere
    if (sphere1Ref.current) {
      sphere1Ref.current.position.x = Math.cos(time * 0.6) * 2.8;
      sphere1Ref.current.position.y = Math.sin(time * 0.6) * 1.2;
      sphere1Ref.current.position.z = Math.sin(time * 0.4) * 1;
    }

    // Second orbiting element
    if (sphere2Ref.current) {
      sphere2Ref.current.position.x = Math.cos(time * 0.4 + Math.PI) * 2;
      sphere2Ref.current.position.y = Math.sin(time * 0.8) * 2;
    }

    // Ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.x = time * 0.3;
      ringRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ── Ambient + Key Lighting ── */}
      <ambientLight intensity={0.15} color="#1e40af" />
      <pointLight position={[4, 4, 4]} intensity={60} color="#3b82f6" decay={2} />
      <pointLight position={[-4, -3, 2]} intensity={30} color="#818cf8" decay={2} />
      <pointLight position={[0, 6, -4]} intensity={20} color="#60a5fa" decay={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e0f2fe" />

      {/* ── Main Central Icosahedron (glass-like) ── */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={icosaRef} position={[0.3, 0, 0]} castShadow>
          <icosahedronGeometry args={[1.4, 1]} />
          <MeshDistortMaterial
            color="#3b82f6"
            roughness={0.0}
            metalness={0.9}
            distort={0.15}
            speed={2}
            transparent
            opacity={0.85}
            envMapIntensity={2}
          />
        </mesh>
      </Float>

      {/* ── Wireframe overlay on icosahedron ── */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[0.3, 0, 0]}>
          <icosahedronGeometry args={[1.42, 1]} />
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      {/* ── Torus Knot ── */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.4}>
        <mesh ref={torusRef} position={[3.2, -0.8, -1.5]} scale={0.7}>
          <torusKnotGeometry args={[0.8, 0.22, 128, 16]} />
          <meshStandardMaterial
            color="#818cf8"
            roughness={0.05}
            metalness={0.95}
            emissive="#3730a3"
            emissiveIntensity={0.4}
          />
        </mesh>
      </Float>

      {/* ── Orbiting Sphere 1 (chrome) ── */}
      <mesh ref={sphere1Ref} position={[2.5, 0, 0]} scale={0.22}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#bfdbfe"
          roughness={0}
          metalness={1}
          emissive="#60a5fa"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* ── Orbiting Sphere 2 ── */}
      <mesh ref={sphere2Ref} position={[-2, 1.5, -0.5]} scale={0.15}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#a5b4fc"
          roughness={0.1}
          metalness={0.9}
          emissive="#4f46e5"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* ── Rotating Ring ── */}
      <Float speed={0.8} floatIntensity={0.3}>
        <mesh ref={ringRef} position={[-2.5, 1.2, -1]} scale={0.6}>
          <torusGeometry args={[1, 0.04, 16, 80]} />
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.1}
            metalness={0.8}
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* ── Small floating octahedron ── */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-1.5, -1.8, 0.5]} scale={0.35}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#7dd3fc"
            roughness={0.2}
            metalness={0.8}
            emissive="#0369a1"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* ── Particle field ── */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#60a5fa"
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* ── Sparkles ── */}
      <Sparkles
        count={60}
        scale={10}
        size={0.6}
        speed={0.4}
        color="#93c5fd"
        opacity={0.5}
      />
    </group>
  );
}
