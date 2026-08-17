import { createContext, useContext, useCallback, useMemo } from "react";
import translations from "../i18n/translations.js";

const LanguageContext = createContext();

function detectLanguage() {
  if (typeof window === "undefined") return "en";
  return window.location.pathname.startsWith("/es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const lang = detectLanguage();

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang],
  );

  const setLang = useCallback((newLang) => {
    const current = window.location.pathname;
    let base;
    if (current.startsWith("/es")) {
      base = current.slice(3) || "/";
    } else if (current.startsWith("/en")) {
      base = current.slice(3) || "/";
    } else {
      base = current;
    }
    const target = newLang === "es" ? `/es${base === "/" ? "" : base}` : base;
    window.location.href = target;
  }, []);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
