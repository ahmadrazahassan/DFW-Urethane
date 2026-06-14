"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // A link is "active" when it points at the current route (ignore in-page hashes).
  const isActive = (href: string) => href === pathname;

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = scrolled || solid; // show solid bar + ink text
  const onLight = active;
  const textColor = onLight ? "text-ink" : "text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4">
      {/* Floating centered bar — transparent over the hero, bar appears on scroll */}
      <div className="relative mx-auto h-16 max-w-[1200px] rounded-[16px] px-5 sm:px-7">
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-[16px] transition-opacity duration-300 ${
            active
              ? "border border-line-light bg-cream/85 opacity-100 shadow-sm backdrop-blur-md"
              : "opacity-0"
          }`}
        />

        <nav className="relative z-10 flex h-full items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className={`font-brand text-lg font-extrabold tracking-[-0.02em] ${textColor}`}
          >
            {nav.brand}
          </Link>

          {/* Center links (desktop) */}
          <ul className={`hidden items-center gap-7 text-sm lg:flex ${textColor}`}>
            {nav.links.map((link, i) => (
              <li key={link.label + i}>
                <Link
                  href={link.href}
                  className={`transition-opacity hover:opacity-70 ${
                    isActive(link.href)
                      ? "underline decoration-clay underline-offset-8"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA (desktop) */}
          <Link
            href={nav.cta.href}
            className={`group/cta hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] lg:inline-flex ${
              onLight
                ? "border border-charcoal bg-charcoal text-cream hover:border-clay hover:bg-clay hover:text-ink"
                : "border border-cream bg-cream text-ink hover:border-clay hover:bg-clay hover:text-ink"
            }`}
          >
            {nav.cta.label}
            <ArrowUpRight className="size-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`lg:hidden ${textColor}`}
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-charcoal text-white lg:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-brand text-lg font-extrabold tracking-[-0.02em]">
              {nav.brand}
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
            {nav.links.map((link, i) => (
              <li key={link.label + i}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-semibold tracking-[-0.02em] hover:text-clay"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-10">
            <Link
              href={nav.cta.href}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-medium text-ink"
            >
              {nav.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
