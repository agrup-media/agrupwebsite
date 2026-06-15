import type { Metadata } from "next";
import { siteConfig } from "@data/theBarber/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutz",
};

const technicalData = [
  "IP-Adresse",
  "Datum und Uhrzeit des Zugriffs",
  "aufgerufene Seite bzw. Datei",
  "Browsertyp und Browserversion",
  "verwendetes Betriebssystem",
  "Referrer-URL, sofern übermittelt",
  "Statuscodes und technische Zugriffsinformationen",
];

const externalLinks = [
  "die Website von AgRup Media",
  `der Instagram-Account von ${siteConfig.shortName}`,
  `der Facebook-Account von ${siteConfig.shortName}`,
  "eine Telefonnummer bzw. Telefonverlinkung",
];

const dataSubjectRights = [
  "Recht auf Auskunft über die verarbeiteten personenbezogenen Daten",
  "Recht auf Berichtigung unrichtiger Daten",
  "Recht auf Löschung personenbezogener Daten",
  "Recht auf Einschränkung der Verarbeitung",
  "Recht auf Datenübertragbarkeit",
  "Recht auf Widerspruch gegen bestimmte Verarbeitungen",
  "Recht auf Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde",
];

export default function DatenschutzPage() {
  return (
    <main className="wood-bg pt-24">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-cognac">
          Rechtliches
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-cream">
          Datenschutzerklärung
        </h1>

        <div className="wood-panel mt-6 space-y-8 rounded-2xl border border-cream/14 p-5 leading-7 text-cream/76 shadow-sm">
          <section>
            <h2 className="text-xl font-semibold text-cream">
              1. Allgemeine Hinweise
            </h2>
            <p className="mt-3">
              Der Schutz personenbezogener Daten ist uns wichtig. Diese
              Datenschutzerklärung informiert darüber, welche personenbezogenen
              Daten beim Besuch dieser Website verarbeitet werden, zu welchen
              Zwecken dies geschieht und welche Rechte betroffene Personen
              haben.
            </p>
            <p className="mt-3">
              Diese Website dient der reinen Information über {siteConfig.shortName}.
              Es gibt auf dieser Website keine Registrierung, kein Kundenkonto,
              kein Kontaktformular, keinen Newsletter und keine direkte
              Möglichkeit, über die Website E-Mails zu versenden. Ebenso werden
              Google Analytics wird nur nach aktiver Einwilligung über den
              Cookie-Banner geladen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              2. Verantwortlicher
            </h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3 font-semibold text-cream">
              {siteConfig.businessName}
            </p>
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              {siteConfig.address.country}
              <br />
              Telefon: {siteConfig.phone}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              3. Technische Betreuung und Hosting der Website
            </h2>
            <p className="mt-3">
              Die technische Erstellung, Betreuung und Verwaltung der Website
              erfolgt durch:
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
              Die Website wird technisch über Dienste von <strong>GitHub</strong>{" "}
              und <strong>Vercel</strong> verwaltet bzw. bereitgestellt. AgRup
              Media betreut die Website technisch im Auftrag von {siteConfig.shortName}.
              Die Website-Dateien werden über GitHub verwaltet und die Website
              wird über Vercel ausgeliefert.
            </p>
            <p className="mt-3">
              Beim Aufruf der Website werden technisch notwendige Daten
              verarbeitet, damit die Website im Browser angezeigt werden kann.
              Dazu können insbesondere folgende Daten gehören:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {technicalData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">
              Diese Daten sind erforderlich, um die Website sicher, stabil und
              funktionsfähig bereitzustellen. Eine Zusammenführung dieser Daten
              mit anderen Datenquellen erfolgt durch {siteConfig.shortName} nicht.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in der sicheren,
              zuverlässigen und technisch fehlerfreien Bereitstellung der
              Website.
            </p>
            <p className="mt-3">
              Da GitHub und Vercel Anbieter mit Sitz bzw. Konzernbezug außerhalb
              der Europäischen Union sein können, kann eine Verarbeitung
              personenbezogener Daten in Drittländern, insbesondere den USA,
              nicht vollständig ausgeschlossen werden. Soweit erforderlich,
              erfolgt die Absicherung solcher Datenübermittlungen über geeignete
              Datenschutzmechanismen, insbesondere Standardvertragsklauseln oder
              vergleichbare Garantien nach der DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              4. Google Analytics
            </h2>
            <p className="mt-3">
              Diese Website nutzt Google Analytics 4, einen Webanalysedienst
              von Google. Anbieter ist Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Google Analytics hilft uns zu verstehen, wie Besucher diese
              Website nutzen, damit wir die Website verbessern können. Dabei
              können Cookies oder ähnliche Technologien eingesetzt und
              Informationen über die Nutzung dieser Website verarbeitet werden.
            </p>
            <p className="mt-3">
              Google Analytics wird auf dieser Website nur nach aktiver
              Einwilligung über den Cookie-Banner geladen. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. a DSGVO. Soweit durch Google Informationen auf
              dem Endgerät gespeichert oder ausgelesen werden, erfolgt dies auf
              Grundlage der Einwilligung gemäß § 25 TDDDG.
            </p>
            <p className="mt-3">
              Die Einwilligung kann jederzeit über die Cookie-Einstellungen
              widerrufen werden.
            </p>
            <p className="mt-3">
              Es kann nicht ausgeschlossen werden, dass Daten an Google LLC in
              die USA übertragen werden. Google ist nach dem EU-U.S. Data
              Privacy Framework zertifiziert.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                <a
                  className="hover:text-white"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Datenschutzerklärung
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white"
                  href="https://support.google.com/analytics/answer/6004245"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Analytics Datenschutzinformationen
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white"
                  href="https://business.safety.google/adsprocessorterms/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Data Processing Terms / Datenverarbeitungsbedingungen
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              5. Consent-Banner und Cookie-Einstellungen
            </h2>
            <p className="mt-3">
              Auf dieser Website wird ein Consent-Banner eingesetzt, um die
              Einwilligung für bestimmte externe Dienste einzuholen und zu
              verwalten.
            </p>
            <p className="mt-3">
              Notwendige Dienste, die für den technischen Betrieb der Website
              erforderlich sind, sind immer aktiv. Google Analytics und externe
              Medien, insbesondere Google Maps, werden erst geladen, wenn Nutzer
              hierfür ihre Einwilligung erteilt haben.
            </p>
            <p className="mt-3">
              Die getroffene Auswahl wird lokal im Browser gespeichert, damit
              die Entscheidung bei späteren Besuchen der Website berücksichtigt
              werden kann. Nutzer können ihre Auswahl jederzeit über den Link
              „Cookie-Einstellungen“ im Footer der Website ändern.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für die Speicherung und Verwaltung der Einwilligung
              ist Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit den gesetzlichen
              Nachweispflichten sowie, soweit erforderlich, § 25 TDDDG. Die
              Einwilligung für Google Analytics und externe Medien erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und kann jederzeit mit
              Wirkung für die Zukunft widerrufen werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              6. Google Maps
            </h2>
            <p className="mt-3">
              Auf dieser Website wird Google Maps verwendet, um den Standort von
              {siteConfig.shortName} auf einer interaktiven Karte darzustellen.
              Anbieter ist Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Die Google-Maps-Karte wird nicht automatisch beim ersten Aufruf
              der Website geladen. Stattdessen wird die Karte erst geladen, wenn
              Nutzer über den Consent-Banner oder über den Kartenbereich
              ausdrücklich der Nutzung von „Externe Medien / Google Maps“
              zustimmen.
            </p>
            <p className="mt-3">
              Erst nach dieser Zustimmung wird eine Verbindung zu Servern von
              Google hergestellt. Dabei können personenbezogene Daten verarbeitet
              werden, insbesondere die IP-Adresse, Browser- und
              Geräteinformationen, Datum und Uhrzeit des Zugriffs, Referrer-URL
              sowie gegebenenfalls Standortdaten.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Maps erfolgt, um Besuchern die Anfahrt und
              Orientierung zum Standort von {siteConfig.shortName} zu erleichtern.
              Rechtsgrundlage für die Einbindung von Google Maps ist die
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Soweit durch Google
              Informationen auf dem Endgerät gespeichert oder ausgelesen werden,
              erfolgt dies auf Grundlage der Einwilligung gemäß § 25 TDDDG.
            </p>
            <p className="mt-3">
              Auf die weitere Verarbeitung der Daten durch Google hat{" "}
              {siteConfig.shortName} keinen Einfluss. Weitere Informationen zur
              Datenverarbeitung durch Google finden sich in der
              Datenschutzerklärung von Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              7. Verlinkungen zu externen Seiten
            </h2>
            <p className="mt-3">
              Auf dieser Website befinden sich Links zu externen Angeboten. Dazu
              gehören insbesondere:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {externalLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">
              Wenn ein externer Link angeklickt wird, verlassen Nutzer diese
              Website. Für die Verarbeitung personenbezogener Daten auf den
              externen Seiten sind die jeweiligen Anbieter verantwortlich.
            </p>
            <p className="mt-3">
              Beim Aufruf von Instagram oder Facebook können durch den Betreiber
              Meta Platforms personenbezogene Daten verarbeitet werden. Dies kann
              insbesondere dann gelten, wenn Nutzer dort eingeloggt sind oder mit
              den Seiten interagieren. Auf die Datenverarbeitung durch Instagram
              oder Facebook hat {siteConfig.shortName} keinen Einfluss.
            </p>
            <p className="mt-3">
              Die Telefonverlinkung dient lediglich dazu, einen Anruf über das
              jeweilige Endgerät zu erleichtern. Beim Anklicken der Telefonnummer
              wird keine Nachricht über diese Website versendet. Ob und welche
              Daten anschließend im Rahmen eines Telefonanrufs verarbeitet
              werden, hängt vom jeweiligen Telefonanbieter und dem verwendeten
              Endgerät ab.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              8. Kontaktaufnahme per Telefon
            </h2>
            <p className="mt-3">
              Wenn Nutzer telefonisch Kontakt mit {siteConfig.shortName} aufnehmen,
              werden die dabei mitgeteilten Daten ausschließlich zur Bearbeitung
              der Anfrage bzw. zur Kommunikation verarbeitet.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b
              DSGVO, sofern die Kontaktaufnahme zur Durchführung
              vorvertraglicher Maßnahmen oder eines Vertrags erfolgt, oder Art. 6
              Abs. 1 lit. f DSGVO auf Grundlage des berechtigten Interesses an
              der Bearbeitung von Anfragen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              9. Sitemap und Auffindbarkeit in Suchmaschinen
            </h2>
            <p className="mt-3">
              Für diese Website kann eine technische Sitemap bereitgestellt und
              bei Suchmaschinen, insbesondere Google, eingereicht werden. Eine
              Sitemap dient dazu, öffentlich erreichbare Seiten der Website für
              Suchmaschinen besser auffindbar zu machen und die Indexierung der
              Website zu unterstützen.
            </p>
            <p className="mt-3">
              Die Sitemap enthält ausschließlich öffentlich zugängliche URLs
              dieser Website. Über die Sitemap werden keine Besucherprofile
              erstellt, keine Tracking-Cookies gesetzt und keine direkten
              personenbezogenen Daten von Website-Besuchern an{" "}
              {siteConfig.shortName} übermittelt.
            </p>
            <p className="mt-3">
              Sofern die Website über Dienste wie Google Search Console
              verwaltet oder eingereicht wird, erfolgt dies zur technischen
              Auffindbarkeit, Indexierung und technischen Überprüfung der Website
              in Suchmaschinen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              10. Speicherdauer
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              für den jeweiligen Zweck erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-3">
              Technische Server- bzw. Zugriffsdaten werden durch die eingesetzten
              technischen Dienstleister nur im Rahmen der technischen
              Bereitstellung, Sicherheit und Fehleranalyse verarbeitet und nach
              Maßgabe der jeweiligen Anbieter gelöscht oder anonymisiert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              11. Rechte betroffener Personen
            </h2>
            <p className="mt-3">
              Betroffene Personen haben nach der DSGVO insbesondere folgende
              Rechte:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {dataSubjectRights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">
              Zur Ausübung dieser Rechte kann der Verantwortliche über die oben
              genannten Kontaktdaten kontaktiert werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              12. Widerspruchsrecht
            </h2>
            <p className="mt-3">
              Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit.
              f DSGVO verarbeitet werden, haben betroffene Personen das Recht,
              aus Gründen, die sich aus ihrer besonderen Situation ergeben,
              jederzeit Widerspruch gegen diese Verarbeitung einzulegen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cream">
              13. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung gilt ab dem Stand:
            </p>
            <p className="mt-3 font-semibold text-cream">Stand: Juni 2026</p>
            <p className="mt-3">
              {siteConfig.shortName} behält sich vor, diese Datenschutzerklärung
              anzupassen, wenn sich technische, rechtliche oder organisatorische
              Änderungen ergeben.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
