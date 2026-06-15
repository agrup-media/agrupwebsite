import { siteConfig } from "@data/theBarber/siteConfig";

const dayMap: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteConfig.businessName,
    alternateName: siteConfig.shortName,
    description:
      "Herrenhaarschnitt, Fade, Bartpflege und Konturen bei The Barber Rendsburg – seit 2021 an der Schiffbrücke 2.",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl],
    openingHoursSpecification: siteConfig.openingHours
      .filter((entry) => entry.hours !== "Geschlossen")
      .map((entry) => {
        const [opens, closes] = entry.hours.split("–");

        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[entry.day],
          opens,
          closes,
        };
      }),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
