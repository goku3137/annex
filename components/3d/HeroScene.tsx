"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useState } from "react";
import FloatingObjects from "./FloatingObjects";

function SceneLoader() {
  return (
    <mesh>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  const [degraded, setDegraded] = useState(false);

  return (
    <Canvas
      dpr={degraded ? 1 : [1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: 4, // ACESFilmicToneMapping
        toneMappingExposure: 1.2,
      }}
      camera={{ position: [0, 0, 6.5], fov: 48, near: 0.1, far: 100 }}
      style={{ background: "transparent" }}
    >
      <PerformanceMonitor
        onDecline={() => setDegraded(true)}
        onIncline={() => setDegraded(false)}
      />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Suspense fallback={<SceneLoader />}>
        <FloatingObjects />
      </Suspense>
    </Canvas>
  );
}
