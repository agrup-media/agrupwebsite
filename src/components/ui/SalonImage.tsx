import Image from "next/image";
import { publicAssetExists } from "@/lib/assets";

type SalonImageProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function SalonImage({
  src,
  alt,
  title,
  priority = false,
  className = "",
  imageClassName = "",
}: SalonImageProps) {
  const hasImage = publicAssetExists(src);

  return (
    <figure
      className={[
        "group relative overflow-hidden rounded-2xl border border-cream/14 bg-wooddark shadow-[0_18px_42px_rgba(42,33,27,0.16)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className={[
            "object-cover transition duration-700 ease-out group-hover:scale-[1.025]",
            imageClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ) : (
        <div
          className="wood-panel absolute inset-0 flex flex-col justify-end p-5 md:p-7"
          role="img"
          aria-label={`${title}: Bild folgt`}
        >
          <div className="absolute left-6 top-6 h-16 w-28 rounded-lg border border-cream/12 bg-forest/20" />
          <div className="absolute right-7 top-12 h-32 w-20 rounded-t-full border border-cream/12 bg-forest/25" />
          <div className="absolute bottom-24 left-7 right-7 h-px bg-cream/16" />
          <figcaption className="content-panel relative max-w-sm rounded-xl p-4">
            <p className="text-sm font-semibold text-cream/72">Bild folgt</p>
            <p className="mt-2 text-lg font-semibold text-cream">{title}</p>
            <p className="mt-2 text-sm leading-6 text-cream/68">
              Der Bildplatz ist vorbereitet. Sobald das echte Salonbild im
              Projekt liegt, wird es hier automatisch angezeigt.
            </p>
          </figcaption>
        </div>
      )}
    </figure>
  );
}
