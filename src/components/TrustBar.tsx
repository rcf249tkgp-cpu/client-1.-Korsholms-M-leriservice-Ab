"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function TrustBar() {
  const { t } = useLang();
  return (
    <section aria-label="KMS i korthet" className="on-dark bg-charcoal text-white">
      <Reveal className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
          {t.trust.map((item) => (
            <li key={item.title} className="border-l-[3px] border-lime pl-4">
              <p className="font-wide text-lg leading-snug font-bold sm:text-xl">{item.title}</p>
              <p className="mt-1 text-sm text-white/70 sm:text-base">{item.sub}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
