"use client";

import { Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PaintAdvice() {
  const { t } = useLang();
  return (
    <section id="fargrad" aria-labelledby="fargrad-rubrik" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading id="fargrad-rubrik" title={t.advice.title} lead={t.advice.lead} />
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-4">
              {t.advice.points.map((p) => (
                <li key={p} className="flex gap-3 text-lg leading-relaxed text-ink">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-charcoal text-lime">
                    <Check aria-hidden className="size-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="self-end">
          <blockquote className="rounded-3xl bg-lime p-6 sm:p-12">
            <p className="font-xwide text-[clamp(1.6rem,6vw,3.5rem)] leading-[1.02] font-black tracking-[-0.03em] text-charcoal">
              {t.advice.motto}
            </p>
            <footer className="mt-6 text-base font-semibold text-charcoal/80">KMS – {t.companyName}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
