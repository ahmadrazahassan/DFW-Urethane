import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/lib/content";

export function Hero() {
  const [thumbA, thumbB, thumbTop] = hero.thumbnails;

  return (
    // Cream frame around the hero (page bg shows through as the margin).
    <section id="top" className="bg-cream p-2 sm:p-3">
      <div className="relative min-h-[calc(100vh-1rem)] w-full overflow-hidden rounded-[28px] sm:min-h-[calc(100vh-1.5rem)]">
        {/* Full-bleed background video (already optimized — full quality) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={hero.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-label={hero.background.alt}
        />
        {/* Warm golden grade to match the reference's sunset tone */}
        <div className="absolute inset-0 bg-[#6b4423] mix-blend-multiply opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-[#e0b074]/20" />

        {/* Content anchored to the bottom of the frame */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            {/* LEFT — charcoal headline card */}
            <div className="liquid-glass-dark relative w-full rounded-[24px] p-6 sm:p-7 lg:max-w-[38rem]">
              <span className="border-beam-silver" aria-hidden />
              {/* Header: headline left, thumbnail right (no overlap) */}
              <div className="flex items-start justify-between gap-5">
                <h1 className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem]">
                  <span className="block">{hero.headlineLines[0]}</span>
                  <span className="block">{hero.headlineLines[1]}</span>
                </h1>
                <div className="relative hidden h-16 w-28 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:block">
                  <Image
                    src={thumbTop.src}
                    alt={thumbTop.alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom row: two thumbnails + Our Projects pill */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex gap-2">
                  {[thumbA, thumbB].map((t) => (
                    <span
                      key={t.src}
                      className="relative h-14 w-20 overflow-hidden rounded-lg border border-white/10"
                    >
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </div>

                <a
                  href={hero.projectsCta.href}
                  className="group ml-auto inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:border-clay hover:bg-clay hover:text-ink"
                >
                  {hero.projectsCta.label}
                  <span className="grid size-8 place-items-center rounded-full bg-white text-ink transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT — stat pills (above) + frosted intro card (iOS glass) */}
            <div className="flex w-full flex-col gap-2.5 lg:max-w-[25rem] lg:items-start">
              <div className="flex gap-2.5">
                {hero.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="liquid-glass relative rounded-[20px] px-5 py-2.5 text-center"
                  >
                    <span
                      className="border-beam-silver"
                      style={{ animationDelay: `${i * -1.3}s` }}
                      aria-hidden
                    />
                    <div className="text-[1.6rem] font-semibold leading-none tracking-[-0.02em] text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[9px] uppercase tracking-wide text-white/80">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="liquid-glass relative w-full rounded-[24px] p-5 text-[13px] leading-[1.55] text-white">
                <span
                  className="border-beam-silver"
                  style={{ animationDelay: "-2s" }}
                  aria-hidden
                />
                {hero.intro}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
