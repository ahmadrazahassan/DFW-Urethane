import type { LucideIcon } from "lucide-react";

type Props = {
  children: React.ReactNode;
  icon?: LucideIcon;
  /** Render a small clay dot instead of an icon. */
  dot?: boolean;
  /** "dark" chip on light bg (default) or "light" chip on dark bg. */
  tone?: "dark" | "light";
  className?: string;
};

/** Small rounded chip: tiny icon/dot + label. e.g. "● Our Services", "FAQ". */
export function LabelPill({
  children,
  icon: Icon,
  dot = false,
  tone = "dark",
  className = "",
}: Props) {
  const tones = {
    dark: "bg-charcoal text-white",
    light: "bg-white text-ink border border-line-light",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${tones[tone]} ${className}`}
    >
      {dot && <span className="size-1.5 rounded-full bg-clay" aria-hidden />}
      {Icon && <Icon className="size-3.5 text-clay" aria-hidden />}
      {children}
    </span>
  );
}
