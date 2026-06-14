import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { createElement } from "react";

export type PageNode =
  | string
  | {
      tag: string;
      attrs?: Record<string, string>;
      children?: readonly PageNode[];
    };

type RenderProps = {
  node: PageNode;
};

const allowedTags = new Set([
  "a",
  "address",
  "article",
  "aside",
  "br",
  "button",
  "circle",
  "div",
  "form",
  "h1",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "path",
  "rect",
  "section",
  "span",
  "strong",
  "svg",
  "textarea",
  "ul"
]);

const voidTags = new Set(["br", "img", "input", "path", "rect", "circle"]);

function parseStyle(style: string): CSSProperties {
  return style.split(";").reduce<CSSProperties>((styles, declaration) => {
    const [rawName, rawValue] = declaration.split(":");
    if (!rawName || !rawValue) return styles;

    const name = rawName.trim().replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
    const value = rawValue.trim();

    return {
      ...styles,
      [name]: value
    };
  }, {});
}

function propsFromAttrs(attrs: Record<string, string> = {}) {
  return Object.entries(attrs).reduce<Record<string, unknown>>((props, [name, value]) => {
    if (name === "class") {
      props.className = value;
      return props;
    }

    if (name === "for") {
      props.htmlFor = value;
      return props;
    }

    if (name === "style") {
      props.style = parseStyle(value);
      return props;
    }

    if (value === "") {
      props[name] = true;
      return props;
    }

    props[name] = value;
    return props;
  }, {});
}

function isInternalPageHref(href: unknown) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

export function PageContentRenderer({ node }: RenderProps): ReactNode {
  if (typeof node === "string") {
    return node;
  }

  if (!allowedTags.has(node.tag)) {
    return null;
  }

  const props = propsFromAttrs(node.attrs);
  const children = node.children?.map((child, index) => <PageContentRenderer key={index} node={child} />);

  if (node.tag === "a" && isInternalPageHref(props.href)) {
    return (
      <Link {...props} href={props.href as string}>
        {children}
      </Link>
    );
  }

  if (voidTags.has(node.tag)) {
    return createElement(node.tag, props);
  }

  return createElement(node.tag, props, children);
}
