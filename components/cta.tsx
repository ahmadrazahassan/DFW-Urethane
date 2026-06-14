import Image from "next/image";
import { cta } from "@/lib/content";
import { ButtonPill } from "@/components/ui/button-pill";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    // Cream backdrop lets the bold rounded top corners read against the section above.
    <section id="contact" className="bg-cream">
      <div className="relative overflow-hidden rounded-t-[64px] py-28 text-white md:rounded-t-[88px] md:py-40">
        {/* TODO: swap placeholder for a real architectural photo */}
        <Image
          src={cta.background.src}
          alt={cta.background.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Warm grade + darken for legibility (consistent with the hero) */}
        <div className="absolute inset-0 bg-[#3a2a1c] opacity-30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-charcoal/72" />
        {/* Subtle highlight along the rounded top edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <Reveal as="div" className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-[1.6] text-white/85">
            {cta.subline}
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonPill href={cta.button.href} variant="white">
              {cta.button.label}
            </ButtonPill>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
