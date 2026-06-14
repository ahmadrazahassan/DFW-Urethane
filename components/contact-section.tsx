import { Phone, Mail } from "lucide-react";
import { business } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { LabelPill } from "@/components/ui/label-pill";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="estimate" className="bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: intro + quick contact */}
          <Reveal as="div">
            <LabelPill dot>Free Estimate</LabelPill>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl">
              Request your free estimate
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.6] text-muted">
              Tell us about your building and we&apos;ll reply within one
              business day — no costly tear-off, warranties up to 20 years.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={business.phoneHref}
                className="group inline-flex items-center gap-3 text-ink"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white text-clay ring-1 ring-line-light">
                  <Phone className="size-5" />
                </span>
                <span className="text-base font-medium transition-colors group-hover:text-clay">
                  {business.phone}
                </span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="group inline-flex items-center gap-3 text-ink"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white text-clay ring-1 ring-line-light">
                  <Mail className="size-5" />
                </span>
                <span className="text-base font-medium transition-colors group-hover:text-clay">
                  {business.email}
                </span>
              </a>
            </div>
          </Reveal>

          {/* Right: the form (same as the contact page) */}
          <Reveal as="div" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
