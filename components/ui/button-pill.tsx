import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "white";
  icon?: "up-right" | "right";
  className?: string;
};

/**
 * Fully-rounded pill button with a trailing icon.
 * - dark:  charcoal bg / white text  → primary CTA on light sections
 * - white: white bg / ink text       → CTA on dark or photo sections
 * Hover: subtle scale + icon translate (pure CSS, no JS).
 */
export function ButtonPill({
  href,
  children,
  variant = "dark",
  icon = "up-right",
  className = "",
}: Props) {
  const Icon = icon === "up-right" ? ArrowUpRight : ArrowRight;
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium " +
    "transition-all duration-200 ease-out hover:scale-[1.02] focus-visible:scale-[1.02]";
  // Hover shifts to the clay brand accent (ink text) for warm, consistent CTAs.
  const variants = {
    dark: "border border-charcoal bg-charcoal text-cream hover:bg-clay hover:text-ink hover:border-clay",
    white:
      "border border-cream bg-cream text-ink hover:bg-clay hover:text-ink hover:border-clay",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <Icon
        className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}
