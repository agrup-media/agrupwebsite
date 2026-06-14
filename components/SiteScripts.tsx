import Script from "next/script";

export function SiteScripts() {
  return (
    <>
      <Script src="/assets/consent.js" strategy="afterInteractive" />
      <Script src="/assets/language-chatbot.js" strategy="afterInteractive" />
      <Script src="/site-interactions.js?v=5" strategy="afterInteractive" />
    </>
  );
}
