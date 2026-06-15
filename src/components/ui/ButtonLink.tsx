import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonTone = "primary" | "secondary" | "dark" | "plain";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const toneClassNames: Record<ButtonTone, string> = {
  primary:
    "bg-forest text-cream shadow-[0_12px_24px_rgba(18,60,47,0.14)] hover:bg-brown",
  secondary:
    "border border-cream/22 bg-cream/12 text-cream hover:border-cream/45 hover:bg-cream/18",
  dark: "bg-brown text-cream hover:bg-forest",
  plain: "text-cream hover:bg-cream/10",
};

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classNames = [
    "inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cognac focus-visible:ring-offset-2 focus-visible:ring-offset-wood motion-reduce:transform-none",
    toneClassNames[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  );
}
