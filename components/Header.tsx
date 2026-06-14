import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function Header() {
  return <RawHtml html={sharedHtml.header} />;
}
