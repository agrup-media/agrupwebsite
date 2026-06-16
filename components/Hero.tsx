import Link from "next/link";

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true" />
      <div className="gold-dots" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-topline">
            <div className="line-gold" aria-hidden="true" />
            <div className="language-switcher hero-language-switcher">
              <button className="language-toggle" type="button" aria-label="Sprache wechseln" aria-expanded="false">
                <span className="flag-dot current-flag">🇩🇪</span>
                <span className="language-arrow">▾</span>
              </button>
              <div className="language-menu" aria-label="Sprachauswahl">
                <button className="language-option" type="button" data-lang="en" aria-label="English">
                  🇬🇧
                </button>
              </div>
            </div>
          </div>

          <h1 id="hero-title">
            Willkommen bei AgRup Media.
            <br />
            Deinem Partner für digitale Lösungen.
          </h1>

          <p className="hero-text">
            <span className="desktop-only">
              Webdesign, KI-Chatbots und digitale Systeme für Unternehmen in Rendsburg, Eckernförde, Kiel und
              Schleswig-Holstein. Klar gestaltet, technisch sauber und auf echte Anfragen ausgerichtet.
            </span>
            <span className="mobile-only">
              Hochwertige Websites, KI-Chatbots und digitale Systeme für Unternehmen in Schleswig-Holstein.
            </span>
          </p>

          <div className="actions">
            <Link href="/kontakt" className="btn btn-primary">
              <span className="desktop-only">Kostenloses Erstgespräch vereinbaren</span>
              <span className="mobile-only">Kostenloses Erstgespräch</span>
            </Link>
            <Link href="/leistungen" className="btn btn-secondary">
              Leistungen ansehen
            </Link>
          </div>

          <div className="mobile-hero-trust" aria-label="AgRup Media Vorteile">
            <span>Regional</span>
            <span>Persönlich</span>
            <span>Auf Anfragen optimiert</span>
          </div>
        </div>
      </div>
    </section>
  );
}
