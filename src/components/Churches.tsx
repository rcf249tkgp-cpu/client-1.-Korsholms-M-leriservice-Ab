"use client";

import { useLang } from "@/lib/i18n";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Churches() {
  const { t } = useLang();
  return (
    <section id="kyrkor" aria-labelledby="kyrkor-rubrik" className="on-dark grain bg-charcoal text-white">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-5 lg:pt-4">
          <Photo name="church" alt={t.images.church} sizes="(min-width: 1024px) 38vw, 100vw" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            n="02"
            name={t.nav.churches}
            id="kyrkor-rubrik"
            title={t.churches.title}
            lead={t.churches.lead}
            onDark
          />
          <Reveal delay={0.1}>
            <ul className="mt-14 grid border-t border-white/20 sm:grid-cols-2 sm:gap-x-10">
              {t.churches.names.map((name) => (
                <li key={name} className="border-b border-white/15 py-4">
                  <span className="display text-[2rem] leading-tight sm:text-[2.4rem]">{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
