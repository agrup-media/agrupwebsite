import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  "Saubere Herrenhaarschnitte",
  "Gepflegte Übergänge",
  "Bartpflege & Konturen",
  "Persönliche Beratung",
  "Zentrale Lage in Rendsburg",
  "Seit 2021 für dich da",
] as const;

export function WhySection() {
  return (
    <section className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <SectionHeading
          eyebrow="Warum The Barber?"
          title="Warum The Barber?"
          text="Natürlich, sachlich und auf das Wesentliche konzentriert: ein guter Schnitt, klare Konturen und ein Ergebnis, das im Alltag funktioniert."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="wood-panel-soft rounded-2xl border border-cream/14 p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-cream/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base font-semibold text-cream">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
