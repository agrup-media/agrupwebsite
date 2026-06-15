"use client";

import { useEffect, useState } from "react";
import {
  consentOpenEvent,
  readConsentSettings,
  updateConsentSettings,
  writeConsentSettings,
} from "@/components/consent/consentStorage";

type ConsentView = "summary" | "details";

export function ConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ConsentView>("summary");
  const [analytics, setAnalytics] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      const storedSettings = readConsentSettings();

      if (storedSettings) {
        setAnalytics(storedSettings.analytics);
        setExternalMedia(storedSettings.externalMedia);
      } else {
        setView("summary");
        setIsOpen(true);
      }
    }, 0);

    const handleOpen = () => {
      const currentSettings = readConsentSettings();

      setAnalytics(Boolean(currentSettings?.analytics));
      setExternalMedia(Boolean(currentSettings?.externalMedia));
      setView("details");
      setIsOpen(true);
    };

    window.addEventListener(consentOpenEvent, handleOpen);

    return () => {
      window.removeEventListener(consentOpenEvent, handleOpen);
    };
  }, []);

  const saveAndClose = (allowOptionalServices: boolean) => {
    writeConsentSettings({
      analytics: allowOptionalServices,
      externalMedia: allowOptionalServices,
    });
    setAnalytics(allowOptionalServices);
    setExternalMedia(allowOptionalServices);
    setIsOpen(false);
  };

  const updateAnalytics = (allowAnalytics: boolean) => {
    setAnalytics(allowAnalytics);
    updateConsentSettings({ analytics: allowAnalytics });
  };

  const updateExternalMedia = (allowExternalMedia: boolean) => {
    setExternalMedia(allowExternalMedia);
    updateConsentSettings({ externalMedia: allowExternalMedia });
  };

  const finishDetails = () => {
    writeConsentSettings({ analytics, externalMedia });
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] flex justify-center px-4 pb-4 sm:justify-end sm:px-6 sm:pb-6">
      <section
        className="w-full max-w-[32rem] rounded-2xl border border-goldbrown/35 bg-[rgba(13,22,18,0.94)] p-4 text-cream shadow-[0_22px_55px_rgba(0,0,0,0.36)] backdrop-blur md:p-5"
        aria-label="Cookie-Einstellungen"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-goldbrown">
              Datenschutz
            </p>
            <h2 className="mt-1 text-lg font-semibold text-cream">
              Cookie-Einstellungen
            </h2>
          </div>
          <p className="rounded-full border border-cream/12 px-2.5 py-1 text-[0.68rem] font-semibold uppercase text-cream/62">
            DSGVO
          </p>
        </div>

        {view === "summary" ? (
          <>
            <p className="mt-3 text-sm leading-6 text-cream/76">
              Wir verwenden notwendige Dienste für den Betrieb der Website.
              Google Maps und Google Analytics werden nur nach deiner Zustimmung
              geladen.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                className="rounded-lg bg-forest px-3 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown"
                onClick={() => saveAndClose(true)}
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                className="rounded-lg border border-cream/16 bg-cream/8 px-3 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown"
                onClick={() => saveAndClose(false)}
              >
                Nur notwendige akzeptieren
              </button>
              <button
                type="button"
                className="rounded-lg border border-goldbrown/45 bg-goldbrown/16 px-3 py-2.5 text-sm font-semibold text-cream transition hover:bg-goldbrown/24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown"
                onClick={() => setView("details")}
              >
                Auswahl bearbeiten
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-cream/10 bg-white/[0.04] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-cream">
                    Notwendige Dienste
                  </p>
                  <span className="rounded-full bg-goldbrown/18 px-2.5 py-1 text-xs font-semibold text-goldbrown">
                    immer aktiv
                  </span>
                </div>
              </div>

              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-cream/10 bg-white/[0.04] p-3">
                <span>
                  <span className="block text-sm font-semibold text-cream">
                    Google Analytics
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-cream/62">
                    Hilft uns zu verstehen, wie die Website genutzt wird.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => updateAnalytics(event.target.checked)}
                  className="sr-only"
                />
                <span
                  className={[
                    "relative h-6 w-11 shrink-0 rounded-full border transition",
                    analytics
                      ? "border-goldbrown bg-goldbrown/80"
                      : "border-cream/18 bg-cream/10",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span
                    className={[
                      "absolute top-1 h-4 w-4 rounded-full bg-cream shadow transition",
                      analytics ? "left-6" : "left-1",
                    ].join(" ")}
                  />
                </span>
              </label>

              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-cream/10 bg-white/[0.04] p-3">
                <span>
                  <span className="block text-sm font-semibold text-cream">
                    Externe Medien / Google Maps
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-cream/62">
                    Lädt die Standortkarte erst nach deiner Zustimmung.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={externalMedia}
                  onChange={(event) =>
                    updateExternalMedia(event.target.checked)
                  }
                  className="sr-only"
                />
                <span
                  className={[
                    "relative h-6 w-11 shrink-0 rounded-full border transition",
                    externalMedia
                      ? "border-goldbrown bg-goldbrown/80"
                      : "border-cream/18 bg-cream/10",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <span
                    className={[
                      "absolute top-1 h-4 w-4 rounded-full bg-cream shadow transition",
                      externalMedia ? "left-6" : "left-1",
                    ].join(" ")}
                  />
                </span>
              </label>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-forest px-3 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown sm:w-auto sm:min-w-28"
              onClick={finishDetails}
            >
              Fertig
            </button>
          </>
        )}
      </section>
    </div>
  );
}
