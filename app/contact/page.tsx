import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/content";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LabelPill } from "@/components/ui/label-pill";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact DFW Urethane | Free Commercial Roof Estimate — Arlington, TX",
  description:
    "Get a free estimate for commercial roof restoration, silicone coatings, or spray foam. Serving Texas & Oklahoma. Call (972) 222-8462.",
};

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: business.phone,
    href: business.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: business.email,
    href: `mailto:${business.email}`,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: `${business.address}, ${business.city}, ${business.state} ${business.zip}`,
  },
  { icon: Clock, label: "Hours", value: "Mon–Fri · 8am – 5pm" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar solid />
      <main className="bg-cream pt-28 md:pt-32">
        <section className="mx-auto w-full max-w-[1280px] px-6 py-16 md:py-20">
          {/* Header */}
          <Reveal as="div" className="max-w-2xl">
            <LabelPill dot>Contact</LabelPill>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              Let&apos;s stop leaks for good.
            </h1>
            <p className="mt-5 text-base leading-[1.6] text-muted">
              Tell us about your building and we&apos;ll reply within one
              business day with a free, no-pressure estimate.
            </p>
          </Reveal>

          {/* Split: info + form */}
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            {/* Info cards */}
            <Reveal as="div" className="flex flex-col gap-4">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-[20px] border border-line-light bg-white p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-clay">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-base font-medium text-ink transition-colors hover:text-clay"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="mt-1 text-base font-medium text-ink">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-[20px] border border-line-light bg-white p-6 text-sm leading-[1.6] text-muted">
                Proudly serving the entire DFW metroplex plus commercial projects
                across <span className="font-medium text-ink">Texas</span> and{" "}
                <span className="font-medium text-ink">Oklahoma</span> since 1986.
              </div>
            </Reveal>

            {/* Form */}
            <Reveal as="div" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
