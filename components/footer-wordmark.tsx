"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/** Giant footer wordmark that rises + fades in as you scroll to the bottom. */
export function FooterWordmark({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const className =
    "font-brand select-none whitespace-nowrap text-center text-[clamp(3rem,16vw,13rem)] font-extrabold leading-none tracking-[-0.04em] text-white/10";

  if (reduce) {
    return (
      <div ref={ref} className="overflow-hidden">
        <div className={className}>{text}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y, opacity }} className={className}>
        {text}
      </motion.div>
    </div>
  );
}
