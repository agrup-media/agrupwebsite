import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/webdesign-rendsburg", label: "Webdesign" },
  { href: "/chatbots-rendsburg-eckernfoerde", label: "Chatbots" },
  { href: "/terminbuchungssysteme-rendsburg", label: "Terminbuchung" },
  { href: "/mediendesign-rendsburg", label: "Mediendesign" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/mehr-foundings", label: "Mehr von uns" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" }
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle className="brand-fill" cx="16.4" cy="7.8" r="1" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5v9.1a4.1 4.1 0 1 1-3.4-4" />
      <path d="M14 5c.7 2.8 2.3 4.4 5 4.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 10v8" />
      <path d="M6.5 6v.1" />
      <path d="M11 18v-8" />
      <path d="M11 13.5c0-2.2 1.3-3.7 3.4-3.7 2 0 3.1 1.3 3.1 3.7V18" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.4V6.9c0-.8.4-1.2 1.3-1.2H17V3.2c-.8-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.2v1.2H8v2.8h2.7V21h3.1v-9.8h2.6l.5-2.8h-3Z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.instagram.com/agrup.media?igsh=MjF5MDB5azNqNm1x&utm_source=qr",
    label: "@agrup.media",
    ariaLabel: "AgRup Media auf Instagram",
    icon: <InstagramIcon />
  },
  {
    href: "https://www.tiktok.com/@agrup.media?_r=1&_t=ZG-95wgh0qhF9F",
    label: "@agrup.media",
    ariaLabel: "AgRup Media auf TikTok",
    icon: <TikTokIcon />
  },
  {
    href: "https://www.linkedin.com/company/nordklar-media/?viewAsMember=true",
    label: "@agrup.media",
    ariaLabel: "AgRup Media auf LinkedIn",
    icon: <LinkedInIcon />
  },
  {
    href: "https://www.facebook.com/profile.php?id=61589853180612",
    label: "Facebook",
    ariaLabel: "AgRup Media auf Facebook",
    icon: <FacebookIcon />
  }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link href="/" className="brand" aria-label="AgRup Media Startseite">
          <Image
            className="logo-img"
            src="/assets/logo-final-web.png"
            width={1117}
            height={402}
            loading="lazy"
            alt="AgRup Media Logo"
          />
        </Link>

        <nav className="foot-links footer-link-group" aria-label="Footer Navigation">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a href="#cookie-einstellungen" className="footer-cookie-settings" data-cookie-settings>
            Cookie-Einstellungen
          </a>
        </nav>

        <div className="social-links footer-socials">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <span className="social-mark" aria-hidden="true">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-domain">WWW.AGRUPMEDIA.DE</div>
      </div>
      <div className="footer-copy">© 2026 AgRup Media. Alle Rechte vorbehalten.</div>
    </footer>
  );
}
