"use client";

import { useLang } from "@/lib/i18n";

export function DemoBanner() {
  const { t } = useLang();
  return (
    <p className="bg-paper px-4 py-1.5 text-center text-xs font-medium text-slate">{t.demo}</p>
  );
}
