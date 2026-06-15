"use client";

export type ConsentSettings = {
  analytics: boolean;
  externalMedia: boolean;
};

export const consentStorageKey = "the-barber-consent-v1";
export const consentOpenEvent = "the-barber-consent-open";
export const consentChangedEvent = "the-barber-consent-changed";

export function readConsentSettings(): ConsentSettings | null {
  try {
    const value = window.localStorage.getItem(consentStorageKey);

    if (!value) {
      return null;
    }

    const parsed = JSON.parse(value) as Partial<ConsentSettings>;

    return {
      analytics: Boolean(parsed.analytics),
      externalMedia: Boolean(parsed.externalMedia),
    };
  } catch {
    return null;
  }
}

export function writeConsentSettings(settings: ConsentSettings) {
  window.localStorage.setItem(consentStorageKey, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(consentChangedEvent, { detail: settings }));
}

export function updateConsentSettings(settings: Partial<ConsentSettings>) {
  writeConsentSettings({
    analytics: false,
    externalMedia: false,
    ...readConsentSettings(),
    ...settings,
  });
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(consentOpenEvent));
}
