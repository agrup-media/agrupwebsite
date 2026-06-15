"use client";

import { useEffect, useState } from "react";
import {
  consentChangedEvent,
  readConsentSettings,
  updateConsentSettings,
} from "@/components/consent/consentStorage";

type GoogleMapsEmbedProps = {
  query: string;
};

export function GoogleMapsEmbed({ query }: GoogleMapsEmbedProps) {
  const [canLoadMap, setCanLoadMap] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      setCanLoadMap(Boolean(readConsentSettings()?.externalMedia));
    }, 0);

    const handleConsentChange = () => {
      setCanLoadMap(Boolean(readConsentSettings()?.externalMedia));
    };

    window.addEventListener(consentChangedEvent, handleConsentChange);

    return () => {
      window.removeEventListener(consentChangedEvent, handleConsentChange);
    };
  }, []);

  const acceptMap = () => {
    updateConsentSettings({ externalMedia: true });
    setCanLoadMap(true);
  };

  if (canLoadMap) {
    const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

    return (
      <iframe
        title="Google Maps Standort The Barber Rendsburg"
        src={src}
        className="h-80 w-full border-0 lg:h-[22.5rem]"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,rgba(10,48,38,0.94),rgba(28,22,18,0.92))] p-5 text-center lg:h-[22.5rem]">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase text-goldbrown">
          Externe Medien
        </p>
        <h3 className="mt-2 text-xl font-semibold text-cream">
          Google Maps ist blockiert
        </h3>
        <p className="mt-3 text-sm leading-6 text-cream/72">
          Google Maps wurde aus Datenschutzgründen blockiert. Beim Laden der
          Karte werden Daten an Google übertragen.
        </p>
      </div>
      <button
        type="button"
        className="rounded-lg bg-forest px-4 py-3 text-sm font-semibold text-cream shadow-[0_10px_22px_rgba(0,0,0,0.2)] transition hover:bg-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown"
        onClick={acceptMap}
      >
        Google Maps akzeptieren und Karte laden
      </button>
    </div>
  );
}
