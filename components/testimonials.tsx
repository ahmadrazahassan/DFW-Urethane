"use client";

import Image from "next/image";
import { MessageSquare, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { LabelPill } from "@/components/ui/label-pill";

type Item = (typeof testimonials.items)[number];

function Card({ item }: { item: Item }) {
  return (
    <figure className="flex h-[236px] w-[340px] shrink-0 flex-col justify-between rounded-[20px] border border-line-light bg-white p-7 sm:w-[380px]">
      <div>
        <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-[1.6] text-muted">
          {item.quote}
        </p>
      </div>

      {/* Footer row: avatar + name/role on the left, quote mark on the right */}
      <figcaption className="flex items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-3">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-xl">
            {/* TODO: swap mockup avatar for a real client photo */}
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-ink">
              {item.name}
            </span>
            <span className="block truncate text-xs text-muted">
              {item.role}
            </span>
          </span>
        </span>
        <Quote className="size-7 shrink-0 text-line-light" aria-hidden />
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  // Duplicate the set so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden">
      <div
        data-marquee
        className={`flex w-max gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((item, i) => (
          <Card key={item.title + i} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { items } = testimonials;
  const rowA = items;
  const rowB = [...items].reverse();

  return (
    // Framed section: cream margin + rounded panel.
    <section id="testimonials" className="bg-cream px-3 pt-4 pb-3 sm:px-5 sm:pt-6 sm:pb-5">
      <div className="relative overflow-hidden rounded-[36px] bg-cream pb-20 pt-0">
        {/* Banner background, fading into the cream card area */}
        <div className="absolute inset-x-0 top-0 h-[420px]">
          {/* TODO: swap placeholder banner image */}
          <Image
            src={testimonials.banner.src}
            alt={testimonials.banner.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-cream" />
        </div>

        {/* Header */}
        <div className="relative px-6 pb-4 pt-20 text-center text-white">
          <LabelPill tone="light" icon={MessageSquare}>
            {testimonials.label}
          </LabelPill>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-[1.6] text-white/85">
            {testimonials.subline}
          </p>
        </div>

        {/* Marquees (opposite directions, pause on hover) */}
        <div className="relative mt-16 flex flex-col gap-5">
          <Row items={rowA} />
          <Row items={rowB} reverse />
        </div>
      </div>
    </section>
  );
}
