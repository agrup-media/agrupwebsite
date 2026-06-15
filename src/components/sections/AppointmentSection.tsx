import { getAppointmentActions, getPrimaryBookingCta } from "@/lib/theBarber";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function AppointmentSection() {
  const booking = getPrimaryBookingCta();
  const actions = getAppointmentActions();

  return (
    <section id="termin" className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="wood-panel overflow-hidden rounded-3xl border border-cream/14 p-5 text-cream md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cream/62">
                Termin
              </p>
              <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
                Termin anfragen
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-cream/76 md:text-base">
                {booking.helperText}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {actions.map((action) => (
                <ButtonLink
                  key={action.href}
                  href={action.href}
                  tone={action.tone === "primary" ? "secondary" : "plain"}
                  className={
                    action.tone === "primary"
                      ? "border-cream/20 bg-woodlight text-cream hover:bg-wood"
                      : "border border-cream/18 text-cream hover:bg-cream/10"
                  }
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
