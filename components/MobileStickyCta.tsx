import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="mobile-sticky-cta" aria-label="Schneller Kontakt">
      <span>Bereit für mehr Anfragen?</span>
      <Link href="/kontakt" className="btn btn-primary">
        Kontakt
      </Link>
    </div>
  );
}
