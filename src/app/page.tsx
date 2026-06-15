import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { SalonSection } from "@/components/sections/SalonSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WoodBrandTitle } from "@/components/ui/WoodBrandTitle";
import { createLocalBusinessJsonLd, serializeJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createLocalBusinessJsonLd()),
        }}
      />
      <HeroSection />
      <div className="wood-background-section" data-wood-background-section>
        <WoodBrandTitle />
        <SalonSection />
        <ServicesSection />
        <GallerySection />
        <AppointmentSection />
        <ContactSection />
        <ReviewsSection />
      </div>
    </main>
  );
}
