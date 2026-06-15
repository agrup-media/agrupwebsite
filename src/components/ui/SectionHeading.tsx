type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "content-panel max-w-3xl rounded-2xl p-5 text-cream md:p-6",
        align === "center" ? "mx-auto text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase text-cream/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold leading-tight text-cream md:text-3xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-3 text-pretty text-sm leading-7 text-cream/76 md:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}
