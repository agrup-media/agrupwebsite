"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  function canUseHover() {
    return typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function openOnHover() {
    if (canUseHover()) setServicesOpen(true);
  }

  function closeOnHoverEnd() {
    if (canUseHover()) setServicesOpen(false);
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
          <Link href="/">Startseite</Link>
          <div
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
            data-nav-dropdown
            onMouseEnter={openOnHover}
            onMouseLeave={closeOnHoverEnd}
          >
            <Link href="/leistungen" className="nav-dropdown-link" onClick={() => setServicesOpen(false)}>
              Leistungen
            </Link>
            <button
              className="nav-dropdown-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-label="Leistungen Menü öffnen"
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
          <Link href="/projekte">Projekte</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link href="/kontakt">Kontakt</Link>
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
