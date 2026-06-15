import type { Metadata } from "next";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import { GoogleAnalytics } from "@/components/consent/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Barber Rendsburg – Herrenfriseur & Barbershop",
    template: "%s | The Barber Rendsburg",
  },
  description:
    "Herrenhaarschnitt, Fade, Bartpflege und Konturen bei The Barber Rendsburg – seit 2021 an der Schiffbrücke 2.",
  keywords: [
    "The Barber Rendsburg",
    "Herrenfriseur Rendsburg",
    "Barbershop Rendsburg",
    "Bartpflege Rendsburg",
    "Fade Rendsburg",
    "Konturen Rendsburg",
  ],
  openGraph: {
    title: "The Barber Rendsburg – Herrenfriseur & Barbershop",
    description:
      "Herrenhaarschnitt, Fade, Bartpflege und Konturen bei The Barber Rendsburg – seit 2021 an der Schiffbrücke 2.",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/assets/favicon.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        {children}
        <Footer />
        <ConsentBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
