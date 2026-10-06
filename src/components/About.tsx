"use client";

import { Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLang();
  return (
    <section id="om-oss" aria-labelledby="om-oss-rubrik" className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <Reveal className="order-last lg:order-first">
          <Placeholder
            label={t.about.photo}
            tag={t.placeholder}
            icon={Users}
            tone="slate"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
        <div>
          <SectionHeading id="om-oss-rubrik" title={t.about.title} />
          <Reveal delay={0.1}>
            {t.about.body.map((p) => (
              <p key={p} className="mt-5 max-w-xl text-lg leading-relaxed text-ink">
                {p}
              </p>
            ))}
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
              {t.about.facts.map((f) => (
                <div key={f.label} className="border-t-2 border-charcoal pt-3">
                  <dt className="text-sm text-slate">{f.label}</dt>
                  <dd className="mt-1 text-base font-bold text-charcoal sm:text-lg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
