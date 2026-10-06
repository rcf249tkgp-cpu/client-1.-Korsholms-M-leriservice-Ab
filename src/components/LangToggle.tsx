"use client";

import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/content";

const options: Lang[] = ["sv", "fi"];

export function LangToggle({ onDark = false }: { onDark?: boolean }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.langLabel} className="flex items-center text-sm font-semibold">
      {options.map((o, i) => (
        <span key={o} className="flex items-center">
          {i > 0 && <span aria-hidden className={`h-3.5 w-px ${onDark ? "bg-white/30" : "bg-charcoal/20"}`} />}
          <button
            type="button"
            onClick={() => setLang(o)}
            aria-pressed={lang === o}
            lang={o}
            className={`h-11 min-w-10 cursor-pointer px-2 uppercase transition-colors ${
              lang === o
                ? onDark
                  ? "text-white"
                  : "text-charcoal"
                : onDark
                  ? "text-white/45 hover:text-white"
                  : "text-slate/70 hover:text-charcoal"
            }`}
          >
            <span className={lang === o ? "border-b border-current pb-0.5" : ""}>{o}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
