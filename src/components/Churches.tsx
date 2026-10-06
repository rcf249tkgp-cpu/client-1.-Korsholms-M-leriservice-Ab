"use client";

import { Church } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Churches() {
  const { t } = useLang();
  return (
    <section id="kyrkor" aria-labelledby="kyrkor-rubrik" className="on-dark bg-charcoal py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading id="kyrkor-rubrik" title={t.churches.title} lead={t.churches.lead} onDark />
        </div>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <ul className="grid sm:grid-cols-2 sm:gap-x-10">
            {t.churches.names.map((name) => (
              <li key={name} className="flex items-center gap-4 border-b border-white/15 py-4 sm:py-5">
                <Church aria-hidden className="size-6 shrink-0 text-lime" />
                <span className="font-wide text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">{name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
