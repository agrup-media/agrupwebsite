import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageJsonLd } from "@/components/PageJsonLd";
import { Projects } from "@/components/Projects";
import { SubPage } from "@/components/SubPage";
import { getPageBySlug, pages } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return pages
    .filter((page) => page.slug)
    .map((page) => ({
      slug: page.slug
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.canonical
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "AgRup Media",
      title: page.openGraphTitle,
      description: page.openGraphDescription,
      url: page.canonical,
      images: ["/assets/logo-final-web.png"]
    },
    twitter: {
      card: "summary_large_image",
      title: page.openGraphTitle,
      description: page.openGraphDescription,
      images: ["/assets/logo-final-web.png"]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageJsonLd jsonLd={page.jsonLd} />
      {page.slug === "projekte" ? <Projects page={page} /> : <SubPage page={page} />}
    </>
  );
}
