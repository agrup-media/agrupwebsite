"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const serviceLinks = [
  { href: "/webdesign", label: "Webdesign" },
  { href: "/ki-chatbots", label: "KI-Chatbots" },
  { href: "/terminbuchung", label: "Terminbuchung" },
  { href: "/automatisierung", label: "Automatisierung" },
  { href: "/online-marketing", label: "Online Marketing" },
  { href: "/mediendesign", label: "Mediendesign" }
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function canUseHover() {
    return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function openOnHover() {
    if (!canUseHover()) return;
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  }

  function closeOnHoverEnd() {
    if (!canUseHover()) return;
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
      closeTimer.current = null;
    }, 180);
  }

  return (
    <header className="header">
      <nav className="nav" aria-label="Hauptnavigation">
        <Link href="/" className="brand" aria-label="AgRup Media Startseite">
          <Image
            className="logo-img"
            src="/assets/logo-final-web.png"
            width={1117}
            height={402}
            priority
            alt="AgRup Media Logo"
          />
        </Link>

        <div className="nav-links">
          <Link href="/" onMouseEnter={() => setServicesOpen(false)}>
            Startseite
          </Link>
          <div
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
            data-nav-dropdown
            onMouseLeave={closeOnHoverEnd}
          >
            <Link
              href="/leistungen"
              className="nav-dropdown-link"
              onMouseEnter={openOnHover}
              onFocus={openOnHover}
              onClick={() => setServicesOpen(false)}
            >
              Leistungen
            </Link>
            <button
              className="nav-dropdown-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-label="Leistungen Menü öffnen"
              onMouseEnter={openOnHover}
              onFocus={openOnHover}
              onClick={() => setServicesOpen((open) => !open)}
            >
              ▾
            </button>
            <div className="nav-dropdown-menu" aria-label="Leistungen Untermenü">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projekte" onMouseEnter={() => setServicesOpen(false)}>
            Projekte
          </Link>
          <Link href="/ueber-uns" onMouseEnter={() => setServicesOpen(false)}>
            Über uns
          </Link>
          <Link href="/kontakt" onMouseEnter={() => setServicesOpen(false)}>
            Kontakt
          </Link>
        </div>

        <div className="language-switcher nav-language-switcher">
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

        <Link href="/kontakt" className="btn btn-primary">
          Erstgespräch
        </Link>
      </nav>
    </header>
  );
}
