import Link from "next/link";
import { business, footer, nav } from "@/lib/content";
import { FooterWordmark } from "@/components/footer-wordmark";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  const socials = [
    { href: business.socials.facebook, label: "Facebook" },
    { href: business.socials.youtube, label: "YouTube" },
    { href: business.socials.x, label: "Twitter" },
    { href: business.socials.linkedin, label: "LinkedIn" },
  ];

  return (
    // Rounded top + slight overlap so it curves up over the CTA section above.
    <footer className="relative z-10 -mt-10 overflow-hidden rounded-t-[48px] bg-charcoal text-white">
      <Reveal as="div" className="mx-auto max-w-[1280px] px-6 pt-20">
        {/* Top: address/phone left, get-in-touch/email right */}
        <div className="grid gap-10 pb-12 md:grid-cols-2">
          <address className="not-italic text-sm leading-[1.8] text-muted-dark">
            {business.address}
            <br />
            {business.city}, {business.state} {business.zip}
            <br />
            <a
              href={business.phoneHref}
              className="mt-3 inline-block text-base text-white transition-opacity hover:opacity-70"
            >
              {business.phone}
            </a>
          </address>

          <div className="md:text-right">
            <div className="text-sm text-muted-dark">{footer.getInTouch}</div>
            {/* TODO: confirm the real public email address */}
            <a
              href={`mailto:${business.email}`}
              className="mt-2 inline-block text-lg font-semibold tracking-[-0.02em] transition-opacity hover:opacity-70"
            >
              {business.email}
            </a>
          </div>
        </div>

        {/* Divider row: nav links left, social text links right */}
        <div className="flex flex-col gap-6 border-t border-line-dark py-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-dark">
            {nav.links.map((link, i) => (
              <li key={link.label + i}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-dark">
            {socials.map((s) => (
              <li key={s.label}>
                {/* TODO: replace with the company's real social URLs */}
                <a href={s.href} className="transition-colors hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Giant wordmark with scroll effect */}
        <div className="pt-8">
          <FooterWordmark text={footer.wordmark} />
        </div>

        <div className="border-t border-line-dark py-6 text-center text-xs text-muted-dark">
          {footer.copyright}
        </div>
      </Reveal>
    </footer>
  );
}
