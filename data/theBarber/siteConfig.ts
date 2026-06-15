export const siteConfig = {
  businessName: "The Barber Rendsburg",
  shortName: "The Barber",
  instagramUrl: "https://www.instagram.com/the_barber_rendsburg",
  instagramHandle: "@the_barber_rendsburg",
  facebookUrl:
    "https://www.facebook.com/p/The-Barber-Rendsburg-100064074823533/?locale=de_DE",
  phone: "04331 4599288",
  bookingUrl: "",
  googleMapsUrl: "",
  address: {
    street: "An d. Schiffbrücke 2",
    zip: "24768",
    city: "Rendsburg",
    country: "Deutschland",
  },
  openingHours: [
    { day: "Montag", hours: "09:00–18:30" },
    { day: "Dienstag", hours: "09:00–18:30" },
    { day: "Mittwoch", hours: "09:00–18:30" },
    { day: "Donnerstag", hours: "09:00–18:30" },
    { day: "Freitag", hours: "09:00–18:30" },
    { day: "Samstag", hours: "09:00–16:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  rating: {
    value: "4,7",
    max: "5",
    label: "Google-Bewertung",
  },
} as const;

export const navigationItems = [
  { label: "Start", href: "/#start" },
  { label: "Salon", href: "/#salon" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Schnitte", href: "/schnitte" },
  { label: "Bewertungen", href: "/#bewertungen" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;
