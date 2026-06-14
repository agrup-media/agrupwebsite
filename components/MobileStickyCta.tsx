import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function MobileStickyCta() {
  return <RawHtml html={sharedHtml.sticky} />;
}
