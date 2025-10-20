"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLang, tr } from "@/utils/i18n";

type Consent = {
  necessary: true;
  analytics: boolean;
};

const COOKIE_NAME = "cookie_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

const readConsent = (): Consent | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((x) => x.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1])) as Consent;
  } catch {
    return null;
  }
};

const writeConsent = (consent: Consent) => {
  const isHttps = typeof location !== "undefined" && location.protocol === "https:";
  const value = encodeURIComponent(JSON.stringify(consent));
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax${isHttps ? "; Secure" : ""}`;
  // Hook for future scripts
  window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: consent }));
};

export default function CookieConsent() {
  const { locale } = useParams<{ locale?: string }>();
  const lang = getLang(locale);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    setVisible(!existing);
  }, []);

  const localePrefix = `/${lang}`;
  const t = useMemo(
    () => ({
      title: tr(lang, {
        en: "We use cookies",
        de: "Wir verwenden Cookies",
        es: "Usamos cookies",
      }),
      desc: tr(lang, {
        en: "We use essential cookies to make this site work, and analytics cookies to improve it.",
        de: "Wir verwenden notwendige Cookies für den Betrieb der Seite und Analyse-Cookies zur Verbesserung.",
        es: "Usamos cookies esenciales para que este sitio funcione y cookies de analítica para mejorarlo.",
      }),
      acceptAll: tr(lang, { en: "Accept all", de: "Alle akzeptieren", es: "Aceptar todo" }),
      onlyNecessary: tr(lang, { en: "Only necessary", de: "Nur notwendige", es: "Solo necesarias" }),
      privacy: tr(lang, { en: "Privacy Policy", de: "Datenschutz", es: "Política de privacidad" }),
    }),
    [lang]
  );

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-[60] mx-auto max-w-5xl rounded-t-xl border border-white/20 bg-black/95 text-white shadow-2xl p-4 sm:p-5 md:p-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="max-w-[55ch]">
          <h2 className="text-base font-semibold mb-1">{t.title}</h2>
          <p className="text-sm text-zinc-300">
            {t.desc}{" "}
            <Link href={`${localePrefix}/privacy-policy`} className="underline underline-offset-2 hover:text-white">
              {t.privacy}
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => {
              writeConsent({ necessary: true, analytics: false });
              setVisible(false);
            }}
            className="px-3 py-2 rounded-md border border-white/30 text-sm hover:bg-white/10 transition-colors"
          >
            {t.onlyNecessary}
          </button>
          <button
            onClick={() => {
              writeConsent({ necessary: true, analytics: true });
              setVisible(false);
            }}
            className="px-3 py-2 rounded-md bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
