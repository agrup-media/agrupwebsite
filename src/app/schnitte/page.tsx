import type { Metadata } from "next";
import { ResultsSection } from "@/components/sections/ResultsSection";

export const metadata: Metadata = {
  title: "Schnitte & Ergebnisse",
  description:
    "Ausgewählte Herrenhaarschnitte, Fades, Bartpflege und Vorher-Nachher-Ergebnisse von The Barber Rendsburg.",
  openGraph: {
    title: "Schnitte & Ergebnisse | The Barber Rendsburg",
    description:
      "Ausgewählte Herrenhaarschnitte, Fades, Bartpflege und Vorher-Nachher-Ergebnisse von The Barber Rendsburg.",
    locale: "de_DE",
    type: "website",
  },
};

export default function CutsPage() {
  return (
    <main className="pt-16">
      <ResultsSection />
    </main>
  );
}
