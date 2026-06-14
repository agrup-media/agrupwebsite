import type { Metadata } from "next";
import "./globals.css";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { SiteScripts } from "@/components/SiteScripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://agrupmedia.de"),
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
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
