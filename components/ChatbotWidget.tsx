import Image from "next/image";
import Link from "next/link";

export function ChatbotWidget() {
  return (
    <div className="chatbot-widget" data-chatbot>
      <section className="chatbot-panel" id="chatbot-panel" role="dialog" aria-modal="false" aria-labelledby="chatbot-title">
        <div className="chatbot-header">
          <div>
            <div className="chatbot-kicker">AgRup Media</div>
            <div className="chatbot-title" id="chatbot-title">
              Digitaler Assistent
            </div>
          </div>
          <button className="chatbot-close" type="button" aria-label="Chat schließen">
            ×
          </button>
        </div>

        <div className="chatbot-messages" role="log" aria-live="polite" aria-relevant="additions">
          <div className="chatbot-message bot">
            Hallo, ich bin der digitale Assistent von AgRup Media. Ich helfe dir bei Websites, KI-Chatbots,
            Terminbuchung und Mediendesign. Wobei kann ich dich unterstützen?
          </div>
        </div>

        <div className="chatbot-actions" aria-label="Schnellauswahl für den Chat" />

        <p className="chatbot-privacy">
          Bitte gib keine sensiblen Daten ein. Hinweise zur Verarbeitung findest du in unserer{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>

        <form className="chatbot-form" aria-label="Nachricht an den Chatbot senden">
          <input
            className="chatbot-input"
            type="text"
            placeholder="Nachricht schreiben..."
            autoComplete="off"
            aria-label="Nachricht an den Chatbot"
          />
          <button className="chatbot-send" type="submit" aria-label="Nachricht senden">
            ›
          </button>
        </form>
      </section>

      <button
        className="chatbot-toggle"
        type="button"
        aria-label="Chat öffnen"
        aria-expanded="false"
        aria-controls="chatbot-panel"
      >
        <Image
          className="chatbot-icon"
          src="/assets/chat-icon.png"
          width={1024}
          height={1024}
          loading="lazy"
          alt="AgRup Media Chatbot öffnen"
        />
      </button>
    </div>
  );
}
