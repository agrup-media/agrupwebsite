import Image from "next/image";
import { heroImages, mobileHeroImages } from "@data/theBarber/gallery";

export function HeroSection() {
  const heroAnimationClasses = [
    "animate-hero-image-a",
    "animate-hero-image-b",
    "animate-hero-image-c",
  ];
  const mobileHeroAnimationClasses = [
    "animate-mobile-hero-image-a",
    "animate-mobile-hero-image-b",
  ];

  return (
    <section
      id="start"
      className="relative min-h-screen overflow-hidden bg-forest pt-20 text-cream"
    >
      <h1 className="sr-only">
        The Barber Rendsburg - Herrenfriseur und Barbershop
      </h1>
      <div className="absolute inset-0" aria-hidden="true">
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={[
              "hero-image hidden object-cover md:block",
              heroAnimationClasses[index] ?? "animate-hero-image-a",
            ].join(" ")}
          />
        ))}
        {mobileHeroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={[
              "hero-image object-cover md:hidden",
              mobileHeroAnimationClasses[index] ?? "animate-mobile-hero-image-a",
            ].join(" ")}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,25,20,0.08)_0%,rgba(7,25,20,0.02)_55%,rgba(7,25,20,0.18)_100%)]" />
      </div>
      <a className="hero-scroll-indicator" href="#salon" aria-label="Nach unten scrollen">
        <span className="hero-scroll-indicator__label">Scrollen</span>
        <span className="hero-scroll-indicator__arrow" aria-hidden="true" />
      </a>
    </section>
  );
}
