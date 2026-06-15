import Image from "next/image";
import { siteConfig } from "@data/theBarber/siteConfig";

type LogoProps = {
  compact?: boolean;
  invert?: boolean;
  fill?: boolean;
};

export function Logo({
  compact = false,
  invert = false,
  fill = false,
}: LogoProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center overflow-hidden",
        fill ? "h-full w-full" : compact ? "h-14 w-14" : "h-24 w-24",
        invert ? "drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)]" : "",
      ].join(" ")}
      aria-label={siteConfig.businessName}
    >
      <Image
        src="/images/the-barber-rendsburg/logo-the-barber-clean.png"
        alt=""
        width={1254}
        height={1254}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}
