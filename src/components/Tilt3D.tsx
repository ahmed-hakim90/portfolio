"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import classNames from "classnames";
import styles from "./Tilt3D.module.scss";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  /** Max rotate in degrees on each axis */
  maxTilt?: number;
  /** Slight lift on hover */
  lift?: boolean;
};

export function Tilt3D({ children, className, maxTilt = 8, lift = true }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-rx", "0deg");
    el.style.setProperty("--tilt-ry", "0deg");
    el.style.setProperty("--tilt-scale", "1");
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;

    el.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
    el.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
    el.style.setProperty("--tilt-scale", lift ? "1.015" : "1");
  };

  return (
    <div
      ref={ref}
      className={classNames(styles.root, className)}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
