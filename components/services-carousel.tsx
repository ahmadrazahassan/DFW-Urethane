import Image from "next/image";
import { Dot } from "lucide-react";
import { services } from "@/lib/content";
import { ButtonPill } from "@/components/ui/button-pill";
import { Reveal } from "@/components/ui/reveal";

export function ServicesCarousel() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        {/* Header (centered) */}
        <Reveal as="div" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-line-light bg-white px-4 py-1.5 text-xs font-medium text-muted">
            {services.label}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl">
            {services.heading}
          </h2>
        </Reveal>

        {/* Stacked sticky cards — each sticks and the next stacks over it */}
        <div className="mt-16">
          {services.slides.map((slide, i) => (
            <div
              key={slide.title}
              className="sticky mx-auto max-w-4xl pb-12"
              style={{ top: `${96 + i * 26}px` }}
            >
              <article className="rounded-[28px] bg-cream">
                {/* Image card */}
                <div className="relative h-[440px] overflow-hidden rounded-[28px] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] sm:h-[480px]">
                  {/* TODO: swap placeholder for a real DFW project photo */}
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
                  <span className="absolute left-7 top-6 text-lg font-semibold tracking-[-0.02em] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="absolute bottom-6 left-7 right-7 text-2xl font-semibold tracking-[-0.02em] text-white">
                    {slide.title}
                  </h3>
                  {/* Animated border around the card */}
                  <span
                    className="border-beam"
                    style={{ animationDelay: `${i * -0.7}s` }}
                    aria-hidden
                  />
                </div>

                {/* Description + CTA (centered, below card) */}
                <p className="mx-auto mt-6 max-w-md text-center text-sm leading-[1.6] text-muted">
                  {slide.description}
                </p>
                <div className="mt-5 flex justify-center">
                  <ButtonPill href={services.cta.href} variant="dark">
                    {services.cta.label}
                  </ButtonPill>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Compatible roof types strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm text-muted">
          <span className="mr-2 font-medium text-ink">
            Compatible roof types:
          </span>
          {services.compatibleTypes.map((t, i) => (
            <span key={t} className="inline-flex items-center">
              {i > 0 && <Dot className="size-4 text-clay" aria-hidden />}
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
