import { siteConfig } from "@data/theBarber/siteConfig";
import { GoogleMapsEmbed } from "@/components/consent/GoogleMapsEmbed";
import { getPhoneHref } from "@/lib/theBarber";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const mapsQuery = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;

  return (
    <section id="kontakt" className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div className="grid gap-5">
          <SectionHeading
            eyebrow="Kontakt"
            title="Kontakt & Öffnungszeiten"
            text="Alle wichtigen Informationen für deinen Besuch bei The Barber Rendsburg."
          />

          <div className="wood-panel overflow-hidden rounded-2xl border border-cream/14 shadow-sm">
            {siteConfig.openingHours.map((entry, index) => (
              <div
                key={entry.day}
                className={[
                  "grid grid-cols-[1fr_auto] gap-4 px-5 py-3.5 text-sm",
                  index !== siteConfig.openingHours.length - 1
                    ? "border-b border-cream/14"
                    : "",
                ].join(" ")}
              >
                <p className="font-semibold text-cream">{entry.day}</p>
                <p className="text-right text-cream/68">{entry.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="wood-panel overflow-hidden rounded-2xl border border-cream/14 shadow-sm">
            <GoogleMapsEmbed query={mapsQuery} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <ButtonLink href={getPhoneHref()} tone="primary" className="min-h-12 py-3">
              Anrufen
            </ButtonLink>
            <ButtonLink href={siteConfig.instagramUrl} tone="primary" className="min-h-12 py-3">
              Instagram
            </ButtonLink>
            <ButtonLink href={siteConfig.facebookUrl} tone="primary" className="min-h-12 py-3">
              Facebook
            </ButtonLink>
          </div>
        </div>

      </div>
    </section>
  );
}
