"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, RoundedBox } from "@react-three/drei";
import type { Group, Mesh, MeshStandardMaterial } from "three";
import styles from "./HeroScene.module.scss";

const GOLD = "#e7bb39";
const BLUE = "#6f94f1";
type PointerTarget = { x: number; y: number };
const steps = [
  { color: BLUE, position: [-1.15, .82, -.7], rotation: [.03, .12, -.035] },
  { color: GOLD, position: [.65, .5, -.25], rotation: [-.02, -.1, .025] },
  { color: "#f3a94b", position: [-.62, -.38, .05], rotation: [.02, .1, -.025] },
  { color: "#62d6a0", position: [1.02, -.72, .45], rotation: [-.025, -.12, .02] },
] as const;

function MouseParallaxCamera({ pointer }: { pointer: React.MutableRefObject<PointerTarget> }) {
  const { camera } = useThree();
  useFrame((_, delta) => {
    camera.position.x += (pointer.current.x * .28 - camera.position.x) * Math.min(1, delta * 2.2);
    camera.position.y += (pointer.current.y * .18 - camera.position.y) * Math.min(1, delta * 2.2);
    camera.lookAt(.05, -.05, 0);
  });
  return null;
}

function Bar({ position, size, color, opacity = 1 }: { position: [number, number, number]; size: [number, number, number]; color: string; opacity?: number }) {
  return <RoundedBox position={position} args={size} radius={Math.min(size[0], size[1]) * .25} smoothness={2}>
    <meshBasicMaterial color={color} transparent opacity={opacity} />
  </RoundedBox>;
}

function StoryCard({ index, color, position, rotation }: { index: number; color: string; position: readonly [number, number, number]; rotation: readonly [number, number, number] }) {
  const group = useRef<Group>(null);
  const panel = useRef<MeshStandardMaterial>(null);
  const signal = useRef<Mesh>(null);
  useFrame(({ clock }, delta) => {
    if (!group.current || !panel.current || !signal.current) return;
    const distance = Math.abs(((clock.elapsedTime / 1.8 - index + 2) % 4) - 2);
    const focus = Math.max(0, 1 - distance * 2.2);
    const scale = 1 + focus * .075;
    group.current.scale.lerp({ x: scale, y: scale, z: scale }, Math.min(1, delta * 5));
    group.current.position.y = position[1] + Math.sin(clock.elapsedTime * .65 + index) * .025;
    panel.current.emissiveIntensity = .035 + focus * .18;
    signal.current.scale.setScalar(.85 + focus * .5);
  });
  return <group ref={group} position={position} rotation={rotation}>
    <RoundedBox args={[1.42, .78, .09]} radius={.075} smoothness={3}>
      <meshStandardMaterial ref={panel} color="#080a0f" emissive={color} emissiveIntensity={.04} roughness={.32} metalness={.58} />
    </RoundedBox>
    <Bar position={[-.49, .25, .055]} size={[.28, .06, .018]} color={color} />
    <Bar position={[-.14, .25, .055]} size={[.25, .035, .018]} color="#667084" opacity={.62} />
    <Bar position={[0, .045, .055]} size={[1.13, .19, .018]} color="#151a24" />
    <Bar position={[-.37, .045, .066]} size={[.25, .055, .012]} color={color} opacity={.78} />
    <Bar position={[.17, .045, .066]} size={[.66, .035, .012]} color="#4d5668" opacity={.52} />
    <Bar position={[-.18, -.2, .055]} size={[.78, .055, .018]} color="#303849" opacity={.72} />
    <Bar position={[-.36, -.29, .055]} size={[.42, .035, .018]} color="#222938" />
    <mesh ref={signal} position={[.57, .27, .085]}><circleGeometry args={[.045, 24]} /><meshBasicMaterial color={color} toneMapped={false} /></mesh>
  </group>;
}

function Storyboard() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * .18) * .035;
    group.current.rotation.x = Math.cos(clock.elapsedTime * .15) * .018;
  });
  return <group ref={group} position={[.8, .16, 0]} scale={.72} rotation={[-.05, -.08, 0]}>
    <Line points={steps.map(({ position }) => [...position] as [number, number, number])} color="#ffe28a" lineWidth={1.15} transparent opacity={.48} />
    {steps.map((step, index) => <StoryCard key={index} index={index} {...step} />)}
    <mesh position={[.05, -1.05, -.65]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[4.2, 2.9, 8, 6]} /><meshBasicMaterial color={BLUE} wireframe transparent opacity={.035} /></mesh>
  </group>;
}

function SceneContent({ pointer }: { pointer: React.MutableRefObject<PointerTarget> }) {
  return <><MouseParallaxCamera pointer={pointer} /><ambientLight intensity={.72} /><directionalLight position={[3.5, 4, 4]} intensity={1.35} color="#dce8ff" /><pointLight position={[1.8, .4, 2.4]} intensity={1.4} color={GOLD} distance={6} /><pointLight position={[-2, 1.4, 1.5]} intensity={.8} color={BLUE} distance={5} /><Storyboard /></>;
}

export function HeroScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<PointerTarget>({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => { const media = matchMedia("(prefers-reduced-motion: reduce)"); const sync = () => setReduceMotion(media.matches); sync(); media.addEventListener("change", sync); return () => media.removeEventListener("change", sync); }, []);
  useEffect(() => { const el = rootRef.current; if (!el) return; const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: .05 }); observer.observe(el); return () => observer.disconnect(); }, []);
  useEffect(() => {
    if (reduceMotion) return;
    const move = (event: PointerEvent) => { const el = rootRef.current; if (!el || matchMedia("(pointer: coarse)").matches) return; const rect = el.getBoundingClientRect(); pointer.current.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1)); pointer.current.y = Math.max(-1, Math.min(1, -((event.clientY - rect.top) / rect.height * 2 - 1))); };
    addEventListener("pointermove", move, { passive: true }); return () => removeEventListener("pointermove", move);
  }, [reduceMotion]);
  if (reduceMotion) return <div className={styles.fallback} aria-hidden />;
  return <div ref={rootRef} className={styles.root} aria-hidden>
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.4], fov: 39 }} frameloop={active ? "always" : "never"} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} style={{ background: "transparent" }}><Suspense fallback={null}><SceneContent pointer={pointer} /></Suspense></Canvas>
    <div className={styles.legend}><span className={styles.legendTitle}>Operational storyboard</span><div className={styles.steps}><span>01 Scan</span><i /><span>02 Park</span><i /><span>03 Request</span><i /><span>04 Ready</span></div></div>
  </div>;
}
