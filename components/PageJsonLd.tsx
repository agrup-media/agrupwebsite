type PageJsonLdProps = {
  jsonLd: string;
};

export function PageJsonLd({ jsonLd }: PageJsonLdProps) {
  if (!jsonLd) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
