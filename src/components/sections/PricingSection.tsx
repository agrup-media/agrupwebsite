import { pricing } from "@data/theBarber/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingSection() {
  return (
    <section id="preise" className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <SectionHeading
          eyebrow="Preise"
          title="Preise"
          text="Die finale Preisliste wird aktuell ergänzt. Für genaue Preise frag einfach direkt im Salon, telefonisch oder über Instagram an."
        />

        <div className="wood-panel overflow-hidden rounded-2xl border border-cream/14">
          {pricing.map((item, index) => (
            <div
              key={item.service}
              className={[
                  "grid gap-2 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6",
                  index !== pricing.length - 1 ? "border-b border-cream/14" : "",
              ].join(" ")}
            >
              <p className="text-sm font-semibold text-cream md:text-base">
                {item.service}
              </p>
              <p className="justify-self-start rounded-full bg-forest/75 px-3 py-1 text-sm font-semibold text-cream sm:justify-self-end">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
