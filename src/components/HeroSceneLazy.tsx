"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false },
);

export function HeroSceneLazy() {
  return <HeroScene />;
}
