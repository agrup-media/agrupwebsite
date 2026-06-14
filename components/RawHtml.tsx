import parse from "html-react-parser";

type RawHtmlProps = {
  html: string;
};

export function RawHtml({ html }: RawHtmlProps) {
  return <>{parse(html)}</>;
}
