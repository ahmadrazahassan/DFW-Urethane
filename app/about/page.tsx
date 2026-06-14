import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business, whyChoose } from "@/lib/content";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LabelPill } from "@/components/ui/label-pill";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

export const metadata: Metadata = {
  title: "About DFW Urethane | Local Commercial Roofers Since 1986 — Arlington, TX",
  description:
    "DFW Urethane is a local, family-run commercial roofing team — not storm chasers. 40 years restoring roofs across Texas & Oklahoma with silicone and spray-foam systems.",
};

const stats = [
  { to: 40, suffix: "+", decimals: 0, label: "Years in business" },
  { to: 20, suffix: "yr", decimals: 0, label: "Max GE warranty" },
  { to: 4.8, suffix: "★", decimals: 1, label: "Google rating" },
  { to: 18, suffix: "", decimals: 0, label: "Five-star reviews" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar solid />
      <main className="bg-cream pt-28 md:pt-32">
        {/* Header */}
        <section className="mx-auto w-full max-w-[1280px] px-6 py-16 md:py-20">
          <Reveal as="div" className="max-w-3xl">
            <LabelPill dot>About</LabelPill>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              Local roofers, not storm chasers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-muted">
              For 40 years, DFW Urethane has restored and protected commercial
              roofs across North Texas — with local crews, manufacturer-backed
              systems, and a simple promise: do it right, and stand behind it.
            </p>
          </Reveal>
        </section>

        {/* Stats band (counting animation) */}
        <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 md:pb-20">
          <Reveal as="div" className="rounded-[32px] bg-charcoal px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-5xl font-semibold tracking-[-0.02em] text-white sm:text-6xl">
                    <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="mt-3 text-sm text-muted-dark">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Story: image + text */}
        <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal as="div" className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src={whyChoose.feature.image.src}
                alt={whyChoose.feature.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal as="div" delay={0.1} className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
                Built on warranties, not weather events.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-[1.7] text-muted">
                <p>
                  We&apos;re a local business with local employees who live and
                  work in the DFW area. When storms roll through, we&apos;re
                  still here the next year — and the one after that.
                </p>
                <p>
                  Our specialty is restoration: silicone coatings and spray-foam
                  systems that stop leaks and cut energy costs without a costly
                  tear-off, backed by warranties up to 20 years from GE.
                </p>
                <p>
                  From {business.founded} to today, that approach has protected
                  landmark buildings and everyday warehouses alike across Texas
                  and Oklahoma.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 md:pb-28">
          <Reveal as="div">
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
              {whyChoose.heading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.reasons.map((r, i) => (
              <Reveal
                key={r.title}
                as="div"
                delay={i * 0.06}
                className="rounded-[20px] border border-line-light bg-white p-7"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted">{r.body}</p>
              </Reveal>
            ))}
            {/* CTA cell */}
            <Reveal
              as="div"
              delay={whyChoose.reasons.length * 0.06}
              className="flex flex-col justify-between rounded-[20px] bg-charcoal p-7 text-white"
            >
              <span className="grid size-10 place-items-center rounded-full bg-clay text-ink">
                <ArrowUpRight className="size-5" />
              </span>
              <div className="mt-8">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  Get a free estimate
                </h3>
                <Link
                  href="/contact"
                  className="mt-2 inline-block text-sm text-muted-dark underline decoration-clay underline-offset-4 transition-colors hover:text-white"
                >
                  Talk to our team →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
