import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Services } from "@/components/Services";
import { homePage } from "@/lib/site-data";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  alternates: {
    canonical: homePage.canonical
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "AgRup Media",
    title: homePage.openGraphTitle,
    description: homePage.openGraphDescription,
    url: homePage.canonical,
    images: ["/assets/logo-final-web.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: homePage.openGraphTitle,
    description: homePage.openGraphDescription,
    images: ["/assets/logo-final-web.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Home() {
  return (
    <>
      <PageJsonLd jsonLd={homePage.jsonLd} />
      <main id="home">
        <Hero />
        <Services />
      </main>
    </>
  );
}
