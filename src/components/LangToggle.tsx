"use client";

import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/content";

const options: Lang[] = ["sv", "fi"];

export function LangToggle() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.langLabel} className="flex rounded-full border border-line p-0.5 text-sm font-bold">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          lang={o}
          className={`h-9 min-w-9 cursor-pointer rounded-full px-2 sm:min-w-10 sm:px-2.5 uppercase transition-colors ${
            lang === o ? "bg-charcoal text-white" : "text-slate hover:text-charcoal"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
