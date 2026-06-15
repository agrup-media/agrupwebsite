import { beforeAfterImages, resultImages } from "@data/theBarber/gallery";
import { SalonImage } from "@/components/ui/SalonImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResultsSection() {
  const compactBeforeAfterImages = beforeAfterImages.slice(0, 3);
  const featuredBeforeAfterImages = beforeAfterImages.slice(3);

  return (
    <section className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Schnitte"
          title="Schnitte & Ergebnisse"
          text="Ausgewählte Arbeiten aus dem Salon: Übergänge, Konturen, Bartpflege und gepflegte Herrenhaarschnitte."
          align="center"
        />

        <div className="mt-8 space-y-12">
          <div>
            <div className="wood-panel mx-auto max-w-3xl rounded-2xl border border-cream/14 p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-goldbrown">
                Kategorie
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-cream">
                Ergebnisse
              </h2>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resultImages.map((image) => (
                <SalonImage
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="min-h-[300px]"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="wood-panel mx-auto max-w-3xl rounded-2xl border border-cream/14 p-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-goldbrown">
                Kategorie
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-cream">
                Vor/Nachher
              </h2>
            </div>
            <div className="mt-4 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {compactBeforeAfterImages.map((image) => (
                  <SalonImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="min-h-[420px] lg:min-h-[440px]"
                  />
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredBeforeAfterImages.map((image) => (
                  <SalonImage
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    className="min-h-[520px] lg:min-h-[736px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
