import type { PageData } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

type SubPageProps = {
  page: PageData;
};

export function SubPage({ page }: SubPageProps) {
  return <RawHtml html={page.mainHtml} />;
}
