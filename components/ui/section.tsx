type Props = {
  children: React.ReactNode;
  id?: string;
  /** Background tone for the section. */
  tone?: "cream" | "white" | "charcoal";
  className?: string;
  /** Remove the default vertical padding (e.g. full-bleed sections). */
  flush?: boolean;
};

/** Shared section wrapper: tone background + centered 1280px container. */
export function Section({
  children,
  id,
  tone = "cream",
  className = "",
  flush = false,
}: Props) {
  const tones = {
    cream: "bg-cream text-ink",
    white: "bg-white text-ink",
    charcoal: "bg-charcoal text-white",
  };
  return (
    <section
      id={id}
      className={`${tones[tone]} ${flush ? "" : "py-24 md:py-32"} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">{children}</div>
    </section>
  );
}
