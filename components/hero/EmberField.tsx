"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

const EMBER = "#c8914c";

function useGlowTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, "rgba(255, 214, 153, 0.85)");
    gradient.addColorStop(0.4, "rgba(200, 145, 76, 0.32)");
    gradient.addColorStop(1, "rgba(200, 145, 76, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function LightShaft({
  position,
  rotationSpeed,
  scale,
  opacity
}: {
  position: [number, number, number];
  rotationSpeed: number;
  scale: [number, number, number];
  opacity: number;
}) {
  const texture = useGlowTexture();
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z += rotationSpeed * delta;
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={opacity}
      />
    </mesh>
  );
}

export function EmberField({ density = 1 }: { density?: number }) {
  const sparkleCount = Math.round(220 * density);

  return (
    <group>
      <Sparkles count={sparkleCount} scale={[9, 5, 6]} size={2.4} speed={0.25} opacity={0.55} color={EMBER} noise={1.2} />
      <LightShaft position={[-2.6, 0.4, -2]} rotationSpeed={0.035} scale={[6, 6, 1]} opacity={0.22} />
      <LightShaft position={[2.8, -0.6, -3]} rotationSpeed={-0.022} scale={[7.5, 7.5, 1]} opacity={0.16} />
      <LightShaft position={[0.4, 1.2, -4]} rotationSpeed={0.018} scale={[9, 9, 1]} opacity={0.12} />
    </group>
  );
}
