import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@data/theBarber/siteConfig";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { getMapsHref, getPhoneHref } from "@/lib/theBarber";
import { Logo } from "@/components/ui/Logo";

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full shrink-0"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="11" fill="#070707" />
      <circle
        cx="12"
        cy="12"
        r="10.25"
        fill="none"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="0.7"
      />
      <path
        fill="#fff"
        stroke="rgba(0,0,0,0.55)"
        strokeLinejoin="round"
        strokeWidth="0.32"
        d="M13.64 20.5v-7.72h2.6l.39-3h-2.99V7.86c0-.87.24-1.46 1.49-1.46h1.59V3.72c-.28-.04-1.22-.12-2.32-.12-2.3 0-3.88 1.4-3.88 3.99v2.19H7.91v3h2.6v7.72h3.13Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full shrink-0"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="11" fill="#070707" />
      <circle
        cx="12"
        cy="12"
        r="10.25"
        fill="none"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="0.7"
      />
      <rect
        x="6.35"
        y="6.35"
        width="11.3"
        height="11.3"
        rx="3.05"
        fill="none"
        stroke="#fff"
        strokeWidth="1.55"
      />
      <circle
        cx="12"
        cy="12"
        r="2.65"
        fill="none"
        stroke="#fff"
        strokeWidth="1.55"
      />
      <circle cx="15.45" cy="8.55" r="0.85" fill="#fff" />
    </svg>
  );
}

export function Footer() {
  const socialIconClassName =
    "inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black/25 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.3)] ring-1 ring-white/12 transition hover:scale-105 hover:bg-black/35 hover:ring-white/28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";
  const barberLogoClassName =
    "inline-flex h-24 w-24 shrink-0 items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

  return (
    <footer className="wood-bg text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center justify-center gap-4">
            <a
              className={socialIconClassName}
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="The Barber Rendsburg auf Facebook öffnen"
            >
              <FacebookIcon />
            </a>
            <Link
              href="#start"
              className={barberLogoClassName}
              aria-label="Zur Startseite"
            >
              <Logo fill invert />
            </Link>
            <a
              className={socialIconClassName}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="The Barber Rendsburg auf Instagram öffnen"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/86">
            {siteConfig.businessName}
            <br />
            Herrenfriseur · Barbershop · Bartpflege
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream">Adresse</h2>
          <address className="mt-4 not-italic text-sm leading-7 text-cream/86">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
            <br />
            <a className="hover:text-white" href={getMapsHref()}>
              Route planen
            </a>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream">Kontakt</h2>
          <div className="mt-4 grid gap-2 text-sm text-cream/86">
            <a className="hover:text-white" href={getPhoneHref()}>
              {siteConfig.phone}
            </a>
            <a
              className="hover:text-white"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream">Öffnungszeiten</h2>
          <p className="mt-4 text-sm leading-7 text-cream/86">
            Mo–Fr: 09:00–18:30
            <br />
            Sa: 09:00–16:00
            <br />
            So: Geschlossen
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-cream/54 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}</p>
          <p className="flex flex-wrap items-center gap-2">
            <span>powered by</span>
            <a
              href="https://agrupmedia.de"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-cream/18 bg-black/28 py-1.5 pl-2 pr-4 text-cream shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition hover:scale-[1.02] hover:border-goldbrown/60 hover:bg-black/38 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldbrown"
              aria-label="AgRup Media Webseite öffnen"
            >
              <span className="relative h-6 w-6 overflow-hidden rounded-full bg-black">
                <Image
                  src="/images/agrup-media-logo.png"
                  alt=""
                  fill
                  sizes="24px"
                  className="object-contain p-0.5"
                />
              </span>
              <span className="font-semibold text-cream">AgRup Media</span>
            </a>
          </p>
          <nav className="flex gap-4" aria-label="Rechtliches">
            <Link href="/impressum" className="hover:text-cream">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-cream">
              Datenschutz
            </Link>
            <CookieSettingsLink />
          </nav>
        </div>
      </div>
    </footer>
  );
}
