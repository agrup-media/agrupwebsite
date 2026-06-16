import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { SiteScripts } from "@/components/SiteScripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://agrupmedia.de"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AgRup Media"
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body>
        <div className="site">
          <Header />
          {children}
          <Footer />
        </div>
        <MobileStickyCta />
        <ChatbotWidget />
        <SiteScripts />
      </body>
    </html>
  );
}
