"use client";

import { useLang } from "@/lib/i18n";
import { PaintBackdrop } from "./PaintBackdrop";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PaintAdvice() {
  const { t } = useLang();
  return (
    <>
      <section id="fargrad" aria-labelledby="fargrad-rubrik" className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-36 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionHeading n="03" name={t.nav.advice} id="fargrad-rubrik" title={t.advice.title} lead={t.advice.lead} />
            <Reveal delay={0.1}>
              <ul className="mt-12 max-w-[34rem] border-t border-charcoal/80">
                {t.advice.points.map((p) => (
                  <li key={p} className="flex gap-4 border-b border-line py-5 text-[1.0625rem] leading-[1.65] text-ink">
                    <span aria-hidden className="mt-[0.7rem] h-px w-4 shrink-0 bg-moss" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:-mt-6">
            <Photo name="advice" alt={t.images.advice} sizes="(min-width: 1024px) 30vw, 100vw" className="w-[80%] ml-auto lg:w-full" />
          </div>
        </div>
      </section>

      {/* The motto, given the page's one big moment. */}
      <section aria-label={t.advice.motto} className="on-dark relative isolate overflow-hidden bg-coal text-white">
        <PaintBackdrop className="absolute inset-0 -z-10 opacity-80" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(23_25_29/0.92)_0%,rgb(23_25_29/0.55)_70%,rgb(23_25_29/0.35)_100%)]" />
        <Reveal className="mx-auto max-w-[90rem] px-5 py-28 sm:px-8 sm:py-44 lg:px-12">
          <blockquote>
            <p className="display max-w-[14ch] text-[clamp(3rem,12vw,9rem)] leading-[0.95] tracking-[-0.04em]">
              {t.advice.motto}
            </p>
            <footer className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <span aria-hidden className="h-px w-10 bg-lime" />
              KMS – {t.companyName}
            </footer>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
