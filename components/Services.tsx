import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function Services() {
  return <RawHtml html={sharedHtml.homeRest} />;
}
