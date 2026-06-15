import { siteConfig } from "@data/theBarber/siteConfig";

export function getPhoneHref() {
  return `tel:+49${siteConfig.phone.replace(/\D/g, "").replace(/^0/, "")}`;
}

export function getAddressLine() {
  return `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;
}

export function getMapsHref() {
  if (siteConfig.googleMapsUrl.trim()) {
    return siteConfig.googleMapsUrl;
  }

  const query = encodeURIComponent(
    `${siteConfig.address.street} ${siteConfig.address.zip} ${siteConfig.address.city} ${siteConfig.address.country}`,
  );

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getPrimaryBookingCta() {
  const bookingUrl = siteConfig.bookingUrl.trim();

  if (bookingUrl) {
    return {
      href: bookingUrl,
      label: "Online Termin buchen",
      helperText: "Buche deinen Termin direkt online.",
      isExternal: true,
    };
  }

  return {
    href: "/#termin",
    label: "Termin anfragen",
    helperText:
      "Ruf uns an oder schreib uns auf Instagram – wir helfen dir gerne bei deinem nächsten Termin.",
    isExternal: false,
  };
}

export function getAppointmentActions() {
  const bookingUrl = siteConfig.bookingUrl.trim();

  if (bookingUrl) {
    return [
      {
        href: bookingUrl,
        label: "Online Termin buchen",
        tone: "primary" as const,
      },
    ];
  }

  return [
    { href: getPhoneHref(), label: "Jetzt anrufen", tone: "primary" as const },
    {
      href: siteConfig.instagramUrl,
      label: "Instagram öffnen",
      tone: "secondary" as const,
    },
  ];
}
