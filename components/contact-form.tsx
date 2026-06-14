"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const roofTypes = [
  "TPO/PVC",
  "EPDM",
  "Metal",
  "Mod-Bit",
  "BUR",
  "SPF",
  "Not sure",
];

const fieldClass =
  "peer w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 pb-2.5 pt-6 text-sm text-white outline-none transition-colors placeholder-transparent focus:border-clay";
const labelClass =
  "pointer-events-none absolute left-4 top-4 text-sm text-muted-dark transition-all peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-clay peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend yet — show a confirmation state. TODO: wire to a real endpoint.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center rounded-[28px] bg-charcoal p-10 text-center text-white">
        <span className="grid size-14 place-items-center rounded-full bg-clay text-ink">
          <Check className="size-7" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-[1.6] text-muted-dark">
          We&apos;ve received your request and will reply within one business
          day with your free estimate.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] bg-charcoal p-7 text-white sm:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" placeholder="Name" required className={fieldClass} />
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
        </div>
        <div className="relative">
          <input
            id="company"
            name="company"
            placeholder="Company"
            className={fieldClass}
          />
          <label htmlFor="company" className={labelClass}>
            Company (optional)
          </label>
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className={fieldClass}
          />
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
        </div>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            className={fieldClass}
          />
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
        </div>
      </div>

      <div className="relative mt-4">
        <select
          id="roof"
          name="roof"
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-colors focus:border-clay [&>option]:text-ink"
        >
          <option value="" disabled>
            Roof type
          </option>
          {roofTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mt-4">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          required
          className={`${fieldClass} resize-none`}
        />
        <label htmlFor="message" className={labelClass}>
          Tell us about your roof
        </label>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:scale-[1.01] hover:border-clay hover:bg-clay hover:text-ink"
      >
        Send message
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
