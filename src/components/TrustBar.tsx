"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function TrustBar() {
  const { t } = useLang();
  return (
    <section aria-label="KMS i korthet" className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
      <Reveal>
        <ul className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {t.trust.map((item, i) => (
            <li
              key={item.title}
              className={`py-7 pr-4 sm:py-9 ${i % 2 === 1 ? "border-l border-line pl-5 sm:pl-8" : ""} ${
                i > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-8" : ""} ${i === 1 ? "lg:pl-8" : ""}`}
            >
              <p className="display text-[1.35rem] leading-tight sm:text-[2rem]">{item.title}</p>
              <p className="mt-2 text-[0.95rem] leading-snug text-slate">{item.sub}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
