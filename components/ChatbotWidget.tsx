import { sharedHtml } from "@/lib/site-data";
import { RawHtml } from "./RawHtml";

export function ChatbotWidget() {
  return <RawHtml html={sharedHtml.chatbot} />;
}
