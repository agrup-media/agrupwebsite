"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function WoodBrandTitle() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsHidden(window.scrollY > 0);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      className="wood-brand-title wood-bg min-h-[42vh] md:min-h-screen"
      data-hidden={isHidden}
    >
      <Image
        src="/images/the-barber-rendsburg/wood-brand-title.svg"
        alt="The Barber Rendsburg"
        width={900}
        height={260}
        className="wood-brand-title__image"
      />
    </div>
  );
}
