"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Delay before the first word starts (seconds). */
  delay?: number;
};

// Container orchestrates a quick, even cascade across words.
const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.055, delayChildren: delay },
  }),
};

// Each word rises a touch with a soft blur, settling on an expo-out curve.
const word: Variants = {
  hidden: { opacity: 0, y: "0.4em", filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Heading text that reveals word-by-word as it scrolls into view — a refined,
 * lightweight cascade (transform + opacity + a 5px blur only). Falls back to
 * plain text under prefers-reduced-motion.
 */
export function TextReveal({
  children,
  className,
  as = "h2",
  delay = 0,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const words = children.split(" ");

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          // inline-block so transform/blur apply per word; trailing space keeps
          // the natural wrap and spacing intact.
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}
