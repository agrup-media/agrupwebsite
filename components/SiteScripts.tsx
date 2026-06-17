import Script from "next/script";

export function SiteScripts() {
  return (
    <>
      <Script src="/assets/consent.js" strategy="afterInteractive" />
      <Script src="/assets/translation-data.js?v=4" strategy="afterInteractive" />
      <Script src="/assets/language-chatbot.js?v=15" strategy="afterInteractive" />
      <Script src="/site-interactions.js?v=14" strategy="afterInteractive" />
    </>
  );
}
