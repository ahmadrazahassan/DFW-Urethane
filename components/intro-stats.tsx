import Image from "next/image";
import { introStats } from "@/lib/content";
import type { Img } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { TextReveal } from "@/components/ui/text-reveal";
import { ButtonPill } from "@/components/ui/button-pill";
import { StatCard } from "@/components/ui/stat-card";

function BentoCell({ img, className }: { img: Img; className?: string }) {
  return (
    <div
      className={`relative min-h-0 overflow-hidden rounded-[20px] ${className ?? ""}`}
    >
      {/* TODO: swap placeholder for a real DFW project photo */}
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 320px"
        className="object-cover"
      />
    </div>
  );
}

export function IntroStats() {
  const [a, b, c, d] = introStats.bento;

  return (
    <Section id="about" tone="cream">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline (top) + paragraph & CTA (bottom) */}
        <Reveal className="flex flex-col justify-between">
          <TextReveal
            as="h2"
            className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            {introStats.headline}
          </TextReveal>
          <div className="mt-10 lg:mt-0">
            <p className="max-w-md text-base leading-[1.6] text-muted">
              {introStats.body}
            </p>
            <div className="mt-8">
              <ButtonPill href={introStats.cta.href} variant="dark">
                {introStats.cta.label}
              </ButtonPill>
            </div>
          </div>
        </Reveal>

        {/* Right: offset masonry bento (left col tall→short, right col short→tall) */}
        <Reveal
          delay={0.1}
          className="grid h-[440px] grid-cols-2 gap-4 sm:h-[520px] lg:h-[560px]"
        >
          <div className="flex flex-col gap-4">
            <BentoCell img={a} className="grow-[3] basis-0" />
            <BentoCell img={c} className="grow-[2] basis-0" />
          </div>
          <div className="flex flex-col gap-4">
            <BentoCell img={b} className="grow-[2] basis-0" />
            <BentoCell img={d} className="grow-[3] basis-0" />
          </div>
        </Reveal>
      </div>

      {/* Stat cards */}
      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {introStats.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <StatCard value={s.value} label={s.label} sub={s.sub} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
