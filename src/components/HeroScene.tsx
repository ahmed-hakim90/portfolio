"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";
import styles from "./HeroScene.module.scss";

const BRAND = "#6f94f1";
const BRAND_SOFT = "#8db3ff";
const BRAND_GLOW = "#b2dbff";

type PointerTarget = { x: number; y: number };

function MouseParallaxCamera({ pointer }: { pointer: React.MutableRefObject<PointerTarget> }) {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const targetX = pointer.current.x * 0.55;
    const targetY = pointer.current.y * 0.35;
    camera.position.x += (targetX - camera.position.x) * Math.min(1, delta * 2.4);
    camera.position.y += (targetY - camera.position.y) * Math.min(1, delta * 2.4);
    camera.lookAt(0.35, -0.1, 0);
  });

  return null;
}

function FloatingLattice({
  position,
  scale = 1,
  speed = 0.35,
  solid = false,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  solid?: boolean;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed * 0.35;
    mesh.current.rotation.y += delta * speed * 0.55;
  });

  return (
    <Float speed={1.15} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, solid ? 1 : 0]} />
        <meshStandardMaterial
          color={solid ? BRAND : BRAND_SOFT}
          wireframe={!solid}
          transparent
          opacity={solid ? 0.14 : 0.48}
          roughness={0.3}
          metalness={0.35}
          emissive={BRAND}
          emissiveIntensity={solid ? 0.08 : 0.18}
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
    <group ref={group} rotation={[tilt, 0.25, 0.1]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.012, 10, 100]} />
        <meshBasicMaterial color={BRAND_GLOW} transparent opacity={0.26} />
      </mesh>
    </group>
  );
}

function SceneContent({ pointer }: { pointer: React.MutableRefObject<PointerTarget> }) {
  const shapes = useMemo(
    () =>
      [
        { position: [1.7, 0.35, -1] as [number, number, number], scale: 0.9, speed: 0.38, solid: false },
        { position: [2.55, -0.65, -0.35] as [number, number, number], scale: 0.42, speed: 0.58, solid: false },
        { position: [1.15, -1.05, 0.15] as [number, number, number], scale: 0.3, speed: 0.72, solid: false },
        { position: [2.1, 0.85, -1.4] as [number, number, number], scale: 0.55, speed: 0.28, solid: true },
      ] as const,
    [],
  );

  return (
    <>
      <MouseParallaxCamera pointer={pointer} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 3, 2]} intensity={1.15} color={BRAND_GLOW} />
      <pointLight position={[-2, 1.2, 2]} intensity={0.55} color={BRAND} />
      {shapes.map((shape) => (
        <FloatingLattice key={shape.position.join("-")} {...shape} />
      ))}
      <OrbitRing radius={1.5} speed={0.14} tilt={0.55} />
      <OrbitRing radius={2.0} speed={-0.09} tilt={-0.32} />
      <OrbitRing radius={2.45} speed={0.06} tilt={0.18} />
    </>
  );
}

export function HeroScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<PointerTarget>({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (event: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const rect = el.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.current.x = Math.max(-1, Math.min(1, nx));
      pointer.current.y = Math.max(-1, Math.min(1, -ny));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion]);

  if (reduceMotion) {
    return <div className={styles.fallback} aria-hidden />;
  }

  return (
    <div ref={rootRef} className={styles.root} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        frameloop={active ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent pointer={pointer} />
        </Suspense>
      </Canvas>
    </div>
  );
}
