import { reviews } from "@data/theBarber/reviews";
import { siteConfig } from "@data/theBarber/siteConfig";
import { ReviewSlider } from "@/components/sections/ReviewSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  return (
    <section id="bewertungen" className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Bewertungen"
            title="Das sagen Kunden"
            text="Viele Kunden schätzen die persönliche Beratung, saubere Schnitte und die entspannte Atmosphäre."
          />
          <div className="wood-panel-soft mt-6 rounded-2xl border border-cream/14 p-5 shadow-sm">
            <p className="text-sm font-semibold text-cream/68">
              {siteConfig.rating.label}
            </p>
            <p className="mt-2 text-3xl font-semibold text-cream">
              {siteConfig.rating.value}
              <span className="text-lg text-cream/62">
                {" "}
                von {siteConfig.rating.max} Sternen
              </span>
            </p>
            <p className="mt-3 text-sm leading-6 text-cream/68">
              Ausgewählte echte Kundenstimmen aus Google-Rezensionen.
            </p>
          </div>
        </div>

        <ReviewSlider reviews={reviews} />
      </div>
    </section>
  );
}
