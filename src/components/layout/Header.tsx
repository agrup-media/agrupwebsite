"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@data/theBarber/siteConfig";
import { getPrimaryBookingCta } from "@/lib/theBarber";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const booking = getPrimaryBookingCta();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);
  const mobileMenuItems = [
    { label: "Start", href: "/#start" },
    { label: "Salon", href: "/#salon" },
    { label: "Leistungen & Preise", href: "/#leistungen" },
    { label: "Galerie", href: "/#galerie" },
    { label: "Kontakt", href: "/#kontakt" },
  ];

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updateScrolledState = () => {
      ticking = false;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY <= 12) {
        setIsMobileScrolled(false);
      } else if (scrollDelta > 2) {
        setIsMobileScrolled(true);
      } else if (scrollDelta < -2) {
        setIsMobileScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolledState);
        ticking = true;
      }
    };

    updateScrolledState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        mobileMenuRef.current?.contains(target)
      ) {
        return;
      }

      setIsMobileMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50 border-b border-cream/12 bg-wooddark/95 backdrop-blur shadow-[0_12px_30px_rgba(42,33,27,0.18)]"
      data-mobile-scrolled={isMobileScrolled}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/#start" aria-label="Zur Startseite">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm font-semibold text-cream/74 transition hover:bg-cream/10 hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={booking.href} className="min-h-11 px-4 py-2">
            {booking.label}
          </ButtonLink>
        </div>

        <div className="mobile-header-actions lg:hidden">
          <Link href="/schnitte" className="mobile-header-action">
            Schnitte
          </Link>
          <Link href={booking.href} className="mobile-header-action mobile-header-action--primary">
            Termin anfragen
          </Link>
        </div>

        <div
          ref={mobileMenuRef}
          className="mobile-menu relative lg:hidden"
          data-open={isMobileMenuOpen}
        >
          <button
            type="button"
            className="mobile-menu__button inline-flex min-h-10 cursor-pointer items-center rounded-lg border border-cream/16 bg-cream/10 px-4 text-sm font-semibold text-cream shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            Menü
          </button>
          <div className="mobile-menu__dropdown absolute right-0 top-12">
            <nav
              id="mobile-navigation"
              className="mobile-menu__list"
              aria-label="Mobile Navigation"
            >
              {mobileMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-menu__item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-menu__item-mark" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
