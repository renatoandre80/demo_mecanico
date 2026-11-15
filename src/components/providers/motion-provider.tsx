"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * LazyMotion + `m` reduz o bundle inicial do Framer Motion.
 * `reducedMotion="user"` respeita a preferência de acessibilidade do sistema.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
