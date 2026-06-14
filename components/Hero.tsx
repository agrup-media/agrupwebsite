import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function Hero() {
  return <RawHtml html={sharedHtml.hero} />;
}
