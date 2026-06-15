"use client";

import { useEffect } from "react";
import {
  consentChangedEvent,
  readConsentSettings,
} from "@/components/consent/consentStorage";

const measurementId = "G-DCZ20WMCY9";
const scriptId = "google-analytics-gtag";
const disableKey = `ga-disable-${measurementId}`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [disableKey]?: boolean;
  }
}

function deleteCookie(name: string) {
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const path = "path=/";
  const hostParts = window.location.hostname.split(".");
  const domains = [
    window.location.hostname,
    `.${window.location.hostname}`,
    ...hostParts
      .map((_, index) => hostParts.slice(index).join("."))
      .filter((domain) => domain.includes("."))
      .map((domain) => `.${domain}`),
  ];

  document.cookie = `${name}=; ${expires}; ${path}`;
  domains.forEach((domain) => {
    document.cookie = `${name}=; ${expires}; ${path}; domain=${domain}`;
  });
}

function removeAnalyticsCookies() {
  document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach(deleteCookie);
}

function enableAnalytics() {
  window[disableKey] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

function disableAnalytics() {
  window[disableKey] = true;
  removeAnalyticsCookies();
}

export function GoogleAnalytics() {
  useEffect(() => {
    const applyConsent = () => {
      if (readConsentSettings()?.analytics) {
        enableAnalytics();
      } else {
        disableAnalytics();
      }
    };

    applyConsent();
    window.addEventListener(consentChangedEvent, applyConsent);

    return () => {
      window.removeEventListener(consentChangedEvent, applyConsent);
    };
  }, []);

  return null;
}
