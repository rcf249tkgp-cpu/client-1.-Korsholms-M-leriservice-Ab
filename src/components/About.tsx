"use client";

import { useLang } from "@/lib/i18n";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLang();
  return (
    <section id="om-oss" aria-labelledby="om-oss-rubrik" className="grain grain-light bg-paper-deep">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="order-last lg:order-first lg:col-span-5">
          <Photo name="about" alt={t.images.about} sizes="(min-width: 1024px) 38vw, 100vw" className="w-[85%] lg:w-full" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <SectionHeading n="05" name={t.nav.about} id="om-oss-rubrik" title={t.about.title} />
          <Reveal delay={0.1}>
            {t.about.body.map((p) => (
              <p key={p} className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.75] text-ink first:mt-8">
                {p}
              </p>
            ))}
            <dl className="mt-12 grid grid-cols-2 border-t border-charcoal/80">
              {t.about.facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`border-b border-stone py-5 ${i % 2 === 1 ? "border-l pl-5 sm:pl-8" : "pr-4"}`}
                >
                  <dt className="text-sm text-slate">{f.label}</dt>
                  <dd className="display mt-2 text-[1.35rem] leading-snug sm:text-[1.6rem]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
