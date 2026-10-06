"use client";

import { useLang } from "@/lib/i18n";
import { Photo } from "./Photo";

/** A full-bleed photograph between chapters, to give the page room to breathe. */
export function ImageBand() {
  const { t } = useLang();
  return (
    <div className="px-0 pt-3 sm:px-3">
      <Photo name="band" alt={t.images.band} sizes="100vw" className="rounded-none sm:rounded-md" />
    </div>
  );
}
