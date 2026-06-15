import { galleryImages } from "@data/theBarber/gallery";
import { siteConfig } from "@data/theBarber/siteConfig";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SalonImage } from "@/components/ui/SalonImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  const pairedImages = galleryImages.slice(-2).reverse();
  const mainImages = galleryImages.slice(0, 4);
  const swappedImage = galleryImages[4];
  const galleryImageTone = "brightness-[1.08] contrast-[1.02] saturate-[1.02]";
  const brighterGalleryImageTone =
    "brightness-[1.16] contrast-[1.02] saturate-[1.02]";

  return (
    <section id="galerie" className="section-reveal wood-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between lg:flex-col lg:items-center lg:justify-start">
          <SectionHeading
            eyebrow="Galerie"
            title="Einblicke in den Salon"
            text="Echte Eindrücke aus dem Laden: Arbeitsplätze, Empfang, Lounge und Details aus dem Salon."
            className="lg:mx-auto lg:text-center"
          />
          <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:items-center md:justify-end lg:w-full lg:max-w-xl lg:justify-normal">
            <ButtonLink
              href="/schnitte"
              tone="primary"
              className="w-full sm:w-auto sm:justify-self-end"
            >
              Schnitte ansehen
            </ButtonLink>
            <ButtonLink
              href={siteConfig.instagramUrl}
              tone="primary"
              className="w-full sm:w-auto sm:justify-self-start"
            >
              Auf Instagram ansehen
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mainImages.map((image, index) => (
            <SalonImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              title={image.title}
              className={[
                "min-h-[280px]",
                index === 0 ? "md:col-span-2 lg:col-span-2" : "",
                index === 1 ? "lg:col-span-2" : "",
                index === 2 ? "lg:col-span-2" : "",
                index === 3 ? "lg:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              imageClassName={
                index === 1 || index === 3
                  ? brighterGalleryImageTone
                  : galleryImageTone
              }
            />
          ))}
          <div className="grid min-h-[280px] grid-cols-2 gap-4 overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2">
            {pairedImages.map((image) => (
              <SalonImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="min-h-[280px] rounded-2xl"
                imageClassName={galleryImageTone}
              />
            ))}
          </div>
          <SalonImage
            src={swappedImage.src}
            alt={swappedImage.alt}
            title={swappedImage.title}
            className="min-h-[280px] md:col-span-2 lg:col-span-2"
            imageClassName={`object-contain ${brighterGalleryImageTone}`}
          />
        </div>
      </div>
    </section>
  );
}
