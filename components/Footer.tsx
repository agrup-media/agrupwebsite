import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function Footer() {
  return <RawHtml html={sharedHtml.footer} />;
}
