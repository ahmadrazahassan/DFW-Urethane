type Props = {
  value: string;
  label: string;
  sub?: string;
  /** 0-based index: fills index+1 of the 4 dots and offsets the beam. */
  index?: number;
};

/** Outlined stat card with a traveling border-beam + 4-dot progress indicator. */
export function StatCard({ value, label, sub, index = 0 }: Props) {
  const filled = (index % 4) + 1;
  return (
    <div className="relative flex min-h-[180px] flex-col justify-between rounded-[20px] border border-line-light bg-white p-6 sm:p-7">
      {/* Animated border beam (staggered per card) */}
      <span
        className="border-beam"
        style={{ animationDelay: `${index * -1}s` }}
        aria-hidden
      />

      {/* 4-dot progress indicator, top-right */}
      <div className="relative flex justify-end gap-1" aria-hidden>
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`size-1.5 rounded-[2px] ${
              i < filled ? "bg-ink" : "bg-line-light"
            }`}
          />
        ))}
      </div>

      {/* Number + label */}
      <div className="relative">
        <div className="text-5xl font-normal leading-none tracking-[-0.02em] text-ink sm:text-6xl">
          {value}
        </div>
        <div className="mt-3 text-base font-medium text-ink">{label}</div>
        {sub && <div className="mt-0.5 text-sm text-muted">{sub}</div>}
      </div>
    </div>
  );
}
