"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";
import styles from "./HeroScene.module.scss";

function FloatingLattice({
  position,
  scale = 1,
  speed = 0.35,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed * 0.35;
    mesh.current.rotation.y += delta * speed * 0.55;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#7eb8ff"
          wireframe
          transparent
          opacity={0.42}
          roughness={0.35}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({
  radius,
  speed,
  tilt,
}: {
  radius: number;
  speed: number;
  tilt: number;
}) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * speed;
  });

  return (
    <group ref={group} rotation={[tilt, 0.2, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.015, 12, 96]} />
        <meshBasicMaterial color="#9ec5ff" transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

function SceneContent() {
  const shapes = useMemo(
    () =>
      [
        { position: [1.8, 0.4, -1] as [number, number, number], scale: 0.85, speed: 0.4 },
        { position: [2.6, -0.7, -0.4] as [number, number, number], scale: 0.45, speed: 0.55 },
        { position: [1.2, -1.1, 0.2] as [number, number, number], scale: 0.32, speed: 0.7 },
      ] as const,
    [],
  );

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 3, 2]} intensity={1.1} />
      <pointLight position={[-2, 1, 2]} intensity={0.45} color="#a8c8ff" />
      {shapes.map((shape) => (
        <FloatingLattice key={shape.position.join("-")} {...shape} />
      ))}
      <OrbitRing radius={1.55} speed={0.12} tilt={0.55} />
      <OrbitRing radius={2.05} speed={-0.08} tilt={-0.35} />
    </>
  );
}

export function HeroScene() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return <div className={styles.fallback} aria-hidden />;
  }

  return (
    <div className={styles.root} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
