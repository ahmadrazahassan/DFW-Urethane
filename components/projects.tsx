import Image from "next/image";
import { projects } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Projects() {
  return (
    <Section id="projects" tone="white">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
          {projects.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.1}
            as="article"
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-media)]">
              {/* TODO: swap placeholder for the real project photo */}
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-muted">
              {item.result}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
