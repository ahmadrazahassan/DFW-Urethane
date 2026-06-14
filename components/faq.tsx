"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { LabelPill } from "@/components/ui/label-pill";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" tone="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro + portrait */}
        <div className="flex flex-col">
          <Reveal as="div">
            <LabelPill dot>{faq.label}</LabelPill>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              {faq.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-[1.6] text-muted">
              {faq.description}
            </p>
          </Reveal>
          <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] sm:block">
            <Image
              src={faq.portrait.src}
              alt={faq.portrait.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Border beam — animated corners around the image card */}
            <span className="border-beam" aria-hidden />
          </div>
        </div>

        {/* Right: accordion */}
        <div className="divide-y divide-line-light border-y border-line-light">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-ink transition-colors group-hover:text-clay">
                      {item.q}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-clay bg-clay text-ink"
                          : "border-line-light text-ink group-hover:border-clay group-hover:bg-clay group-hover:text-ink"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-sm leading-[1.6] text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
