import Link from "next/link";

const mobileSalesItems = [
  {
    number: "01",
    title: "Klarer erster Eindruck",
    text: "In wenigen Sekunden muss erkennbar sein, was ihr anbietet und warum es relevant ist."
  },
  {
    number: "02",
    title: "Weniger Reibung",
    text: "Kürzere Texte, ruhige Abschnitte und klare Wege zu Kontakt, WhatsApp oder Formular."
  },
  {
    number: "03",
    title: "Mehr passende Anfragen",
    text: "Webdesign, Chatbot und Kontaktwege arbeiten gemeinsam auf das Erstgespräch hin."
  }
];

const whyPoints = [
  "Hochwertiges Design statt Baukasten-Optik",
  "Klare Struktur statt überladene Seiten",
  "Durchdachte Systeme statt isolierter Einzelmaßnahmen",
  "Fokus auf Anfragen, Vertrauen und Kontakt"
];

const processSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    text: "Wir verstehen euer Unternehmen, eure Zielgruppe und das eigentliche Ziel."
  },
  {
    number: "02",
    title: "Konzept",
    text: "Wir planen Aufbau, Inhalte, Designrichtung und notwendige Funktionen."
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Wir bauen Website, Systeme und Kontaktwege sauber und nutzerfreundlich auf."
  },
  {
    number: "04",
    title: "Übergabe",
    text: "Ihr bekommt einen digitalen Auftritt, der seriös wirkt und praktisch nutzbar ist."
  }
];

export function Services() {
  return (
    <>
      <section className="mobile-sales section" aria-labelledby="mobile-sales-title">
        <div className="container">
          <div className="label">Kurz gesagt</div>
          <h2 id="mobile-sales-title" className="section-title">
            Schön reicht nicht. Die Website muss verkaufen.
          </h2>
          <p className="mobile-sales-intro">
            Wir gestalten mobile Auftritte so, dass Besucher schnell verstehen, euch vertrauen und den nächsten Schritt
            machen.
          </p>
          <div className="mobile-sales-list">
            {mobileSalesItems.map((item) => (
              <div className="mobile-sales-item step" key={item.number}>
                <div className="mobile-sales-mark num" aria-hidden="true">
                  {item.number}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why section" aria-labelledby="why-title">
        <div className="container why-grid">
          <div>
            <div className="label">Warum AgRup Media</div>
            <h2 id="why-title" className="section-title">
              Nicht einfach nur eine Website. Ein digitaler Auftritt, der ernst genommen wird.
            </h2>
          </div>
          <div className="points">
            {whyPoints.map((point) => (
              <div className="point" key={point}>
                <span className="check" aria-hidden="true">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div className="container">
          <div className="label">Unser Ablauf</div>
          <h2 id="process-title" className="section-title">
            Von der Idee zum sauberen digitalen Auftritt.
          </h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="step" key={step.number}>
                <div className="num" aria-hidden="true">
                  {step.number}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section" aria-labelledby="cta-title">
        <div className="container cta-box">
          <div className="cta-content">
            <h2 id="cta-title">Bereit für einen professionellen digitalen Auftritt?</h2>
            <p>
              Dann starten wir mit einem klaren Erstgespräch und prüfen, was für euer Unternehmen wirklich Sinn ergibt.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
