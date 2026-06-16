import type { PageData } from "@/lib/site-data";
import { ProjectShowcase } from "./ProjectShowcase";

type ProjectsProps = {
  page: PageData;
};

export function Projects({ page }: ProjectsProps) {
  void page;

  return <ProjectShowcase />;
}
