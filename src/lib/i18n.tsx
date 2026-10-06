"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dict, type Lang } from "./content";

type Ctx = { lang: Lang; t: (typeof dict)[Lang]; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "kms-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sv");

  // Pick up ?lang=fi links or a remembered choice after hydration.
  useEffect(() => {
    let initial: Lang | null = null;
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "fi" || param === "sv") initial = param;
    if (!initial) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "fi" || stored === "sv") initial = stored;
      } catch {}
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from browser-only sources after hydration
    if (initial) setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dict[lang].meta.title;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return <LangContext.Provider value={{ lang, t: dict[lang], setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
