import type { PageData } from "@/lib/site-data";
import { getPageContent } from "@/lib/page-content";
import { PageContentRenderer } from "./PageContentRenderer";

type ProjectsProps = {
  page: PageData;
};

export function Projects({ page }: ProjectsProps) {
  const content = getPageContent(page.slug);

  if (!content) {
    return null;
  }

  return <PageContentRenderer node={content} />;
}
