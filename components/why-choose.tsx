import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { whyChoose } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

function ReasonCard({
  title,
  index = 0,
  className = "",
}: {
  title: string;
  index?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[150px] items-center rounded-[20px] border border-line-dark bg-charcoal-2 p-7 ${className}`}
    >
      {/* Border beam — always animating, staggered per card */}
      <span
        className="border-beam"
        style={{ animationDelay: `${index * -0.8}s` }}
        aria-hidden
      />
      <h3 className="relative text-xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-2xl">
        {title}
      </h3>
    </div>
  );
}

export function WhyChoose() {
  const r = whyChoose.reasons;

  return (
    // Framed dark section: cream margin + rounded charcoal panel.
    <section id="why" className="bg-cream p-2 sm:p-3">
      <div className="rounded-[32px] bg-charcoal px-6 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-[1232px]">
          {/* Header: heading left, description right */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <Reveal as="div">
              <h2 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
                {whyChoose.heading}
              </h2>
            </Reveal>
            <Reveal as="div" delay={0.1} className="lg:pt-2">
              <p className="max-w-md text-sm leading-[1.7] text-muted-dark lg:ml-auto">
                {whyChoose.description}
              </p>
            </Reveal>
          </div>

          {/* Bento: feature image (left, full height) + card grid (right) */}
          <Reveal as="div" className="grid gap-4 lg:grid-cols-12">
            {/* Feature image card */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[24px] lg:col-span-5 lg:min-h-full">
              {/* TODO: swap placeholder for a real DFW crew/project photo */}
              <Image
                src={whyChoose.feature.image.src}
                alt={whyChoose.feature.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                  {whyChoose.feature.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-[1.6] text-white/85">
                  {whyChoose.feature.body}
                </p>
              </div>
            </div>

            {/* Right card grid */}
            <div className="grid grid-cols-6 gap-4 lg:col-span-7">
              <ReasonCard title={r[0].title} index={0} className="col-span-6" />

              <ReasonCard
                title={r[1].title}
                index={1}
                className="col-span-6 sm:col-span-4"
              />
              {/* Learn More cell */}
              <a
                href={whyChoose.cta.href}
                className="group relative col-span-6 flex min-h-[150px] flex-col justify-between rounded-[20px] border border-line-dark bg-charcoal-2 p-7 transition-colors hover:border-clay sm:col-span-2"
              >
                <span
                  className="border-beam"
                  style={{ animationDelay: "-2s" }}
                  aria-hidden
                />
                <span className="relative grid size-9 place-items-center rounded-full bg-white text-ink transition-transform group-hover:scale-105">
                  <ArrowUpRight className="size-4" />
                </span>
                <span className="relative text-lg font-semibold tracking-[-0.02em]">
                  {whyChoose.cta.label}
                </span>
              </a>

              <ReasonCard
                title={r[2].title}
                index={2}
                className="col-span-6 sm:col-span-2"
              />
              <ReasonCard
                title={r[3].title}
                index={3}
                className="col-span-6 sm:col-span-2"
              />
              <ReasonCard
                title={r[4].title}
                index={4}
                className="col-span-6 sm:col-span-2"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
