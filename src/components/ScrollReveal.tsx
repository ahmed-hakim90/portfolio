"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import classNames from "classnames";
import styles from "./ScrollReveal.module.scss";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for stacked items */
  delayMs?: number;
};

export function ScrollReveal({ children, className, delayMs = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={classNames(styles.root, visible && styles.visible, className)}
      style={style}
    >
      {children}
    </div>
  );
}
