import { SectionHeading } from "@/components/ui/SectionHeading";

export function SalonSection() {
  return (
    <section
      id="salon"
      className="section-reveal wood-bg pb-12 pt-16 md:pb-16 md:pt-24 lg:pt-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Salon"
            title="Ein Salon, in dem man gerne ankommt"
            text="The Barber Rendsburg verbindet klassisches Barber-Handwerk mit einer gepflegten, freundlichen Atmosphäre. Ob kurzer Schnitt, moderner Übergang oder sauber geformter Bart – im Mittelpunkt steht ein Ergebnis, das zu dir passt."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="wood-panel-soft rounded-2xl border border-cream/14 p-4">
              <p className="text-sm font-semibold text-cream">Seit 2021</p>
              <p className="mt-2 text-sm leading-6 text-cream/74">
                Lokal in Rendsburg, direkt an der Schiffbrücke.
              </p>
            </div>
            <div className="wood-panel-soft rounded-2xl border border-cream/14 p-4">
              <p className="text-sm font-semibold text-cream">
                Freundlich & gepflegt
              </p>
              <p className="mt-2 text-sm leading-6 text-cream/74">
                Ein ruhiger Besuch mit klarer Beratung, einem sauberem Ergebnis
                und traditionellem türkischem Tee oder Kaffee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
