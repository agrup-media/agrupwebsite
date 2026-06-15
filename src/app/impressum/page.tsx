import type { Metadata } from "next";
import { getPhoneHref } from "@/lib/theBarber";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <main className="wood-bg pt-24">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-cognac">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-cream">
          Impressum
        </h1>

        <div className="wood-panel mt-6 space-y-8 rounded-2xl border border-cream/14 p-5 leading-7 text-cream/76 shadow-sm">
          <section>
            <h2 className="text-xl font-semibold text-cream">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3 font-semibold text-cream">The Barber</p>
            <p>
              Mazlum Bogatekin
              <br />
              An der Schiffbrücke 2
              <br />
              24768 Rendsburg
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Kontakt</h2>
            <p className="mt-3">
              Telefon:{" "}
              <a className="hover:text-white" href={getPhoneHref()}>
                04331 4599288
              </a>
              <br />
              E-Mail:{" "}
              <a
                className="hover:text-white"
                href="mailto:the.barber12@hotmail.com"
              >
                thebarberrendsburg@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Vertreten durch
            </h2>
            <p className="mt-3">Mazlum Bogatekin</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Verantwortlich für den Inhalt dieser Website
            </h2>
            <p className="mt-3">
              Verantwortlich für die Inhalte dieser Website ist:
            </p>
            <p className="mt-3 font-semibold text-cream">The Barber</p>
            <p>
              Mazlum Bogatekin
              <br />
              An der Schiffbrücke 2
              <br />
              24768 Rendsburg
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Technische Umsetzung und Betreuung
            </h2>
            <p className="mt-3">
              Diese Website wurde erstellt und technisch umgesetzt durch:
            </p>
            <p className="mt-3 font-semibold text-cream">AgRup Media</p>
            <p>
              Tarik Agri & Georg Ruppel GbR
              <br />
              Meldorfweg 14
              <br />
              24768 Rendsburg
              <br />
              E-Mail:{" "}
              <a className="hover:text-white" href="mailto:info@agrupmedia.de">
                info@agrupmedia.de
              </a>
              <br />
              Website:{" "}
              <a
                className="hover:text-white"
                href="https://www.agrupmedia.de"
                target="_blank"
                rel="noreferrer"
              >
                www.agrupmedia.de
              </a>
            </p>
            <p className="mt-3">
              AgRup Media ist ausschließlich für die technische Umsetzung und
              Betreuung der Website zuständig. Für die Inhalte, Angaben, Bilder,
              Texte und rechtlichen Informationen auf dieser Website ist The
              Barber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-3">
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Haftung für Inhalte
            </h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Die Verantwortung für
              die Inhalte dieser Website liegt bei The Barber.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              Haftung für Links
            </h2>
            <p className="mt-3">
              Diese Website enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
              ist stets der jeweilige Anbieter oder Betreiber der verlinkten
              Seiten verantwortlich.
            </p>
            <p className="mt-3">
              Bei Bekanntwerden von Rechtsverletzungen werden entsprechende
              Links umgehend entfernt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">Urheberrecht</h2>
            <p className="mt-3">
              Die auf dieser Website verwendeten Inhalte, Texte, Bilder und
              Gestaltungen unterliegen dem deutschen Urheberrecht. Eine
              Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
              Verwendung außerhalb der Grenzen des Urheberrechts bedarf der
              vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
