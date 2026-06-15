"use client";

import { openConsentSettings } from "@/components/consent/consentStorage";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="text-left hover:text-cream"
      onClick={openConsentSettings}
    >
      Cookie-Einstellungen
    </button>
  );
}
