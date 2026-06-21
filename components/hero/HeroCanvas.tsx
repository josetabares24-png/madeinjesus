"use client";

import { Component, useEffect, useRef, useState } from "react";
import type { MutableRefObject, ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { EmberField } from "./EmberField";

export type Pointer = { x: number; y: number };

function CameraRig({ pointerRef }: { pointerRef: MutableRefObject<Pointer> }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2());
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    const driftX = Math.sin(time.current * 0.18) * 0.18;
    const driftY = Math.cos(time.current * 0.14) * 0.1;

    target.current.x = pointerRef.current.x * 1.1 + driftX;
    target.current.y = -pointerRef.current.y * 0.7 + driftY;

    const ease = Math.min(delta * 2.2, 1);
    camera.position.x += (target.current.x - camera.position.x) * ease;
    camera.position.y += (target.current.y - camera.position.y) * ease;
    camera.lookAt(0, 0, -3);
  });

  return null;
}

function HeroCanvasInner({ pointerRef }: { pointerRef: MutableRefObject<Pointer> }) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    setIsCompact(query.matches);
    const handler = (event: MediaQueryListEvent) => setIsCompact(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      dpr={isCompact ? 1 : [1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <CameraRig pointerRef={pointerRef} />
      <EmberField density={isCompact ? 0.55 : 1} />
      {!isCompact && (
        <EffectComposer>
          <Bloom intensity={0.85} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Hero 3D layer disabled (WebGL unavailable):", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export function HeroCanvas({ pointerRef }: { pointerRef: MutableRefObject<Pointer> }) {
  return (
    <CanvasErrorBoundary>
      <HeroCanvasInner pointerRef={pointerRef} />
    </CanvasErrorBoundary>
  );
}
