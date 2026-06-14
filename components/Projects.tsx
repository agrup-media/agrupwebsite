import type { PageData } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

type ProjectsProps = {
  page: PageData;
};

export function Projects({ page }: ProjectsProps) {
  return <RawHtml html={page.mainHtml} />;
}
