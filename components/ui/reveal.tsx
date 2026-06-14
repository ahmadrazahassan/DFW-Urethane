"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Modern scroll reveal: fade + gentle slide-up + soft blur-in when scrolled
 * into view. Tuned for smoothness — a light 6px blur and an expo-out curve so
 * motion settles softly instead of snapping. Animates compositor-friendly
 * properties only (opacity / transform / filter).
 * Renders a plain element (no animation) under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
        // Let opacity lead slightly so content never flashes blurred-but-opaque.
        opacity: { duration: 0.55, ease: "easeOut", delay },
      }}
    >
      {children}
    </MotionTag>
  );
}
