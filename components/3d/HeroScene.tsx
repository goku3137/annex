"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingObjects from "./FloatingObjects";

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 50 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <FloatingObjects />
      </Suspense>
    </Canvas>
  );
}
