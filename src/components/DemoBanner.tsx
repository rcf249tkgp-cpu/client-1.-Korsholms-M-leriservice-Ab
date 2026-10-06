"use client";

import { useLang } from "@/lib/i18n";

export function DemoBanner() {
  const { t } = useLang();
  return <p className="bg-charcoal px-4 py-1.5 text-center text-xs text-white/70">{t.demo}</p>;
}
