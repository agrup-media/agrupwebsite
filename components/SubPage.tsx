import type { PageData } from "@/lib/site-data";
import { getPageContent } from "@/lib/page-content";
import { PageContentRenderer } from "./PageContentRenderer";

type SubPageProps = {
  page: PageData;
};

export function SubPage({ page }: SubPageProps) {
  const content = getPageContent(page.slug);

  if (!content) {
    return null;
  }

  return <PageContentRenderer node={content} />;
}
