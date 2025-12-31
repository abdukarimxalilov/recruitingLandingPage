import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  alignment?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
  className,
  tone = "dark",
}: SectionHeadingProps) {
  const eyebrowClasses =
    tone === "light"
      ? "inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white"
      : "inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-gray)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-navy)]";

  const titleClasses =
    tone === "light"
      ? "mt-4 text-3xl font-bold tracking-tight text-white drop-shadow-[0_8px_24px_rgba(3,8,21,0.55)] md:text-4xl"
      : "mt-4 text-3xl font-semibold tracking-tight text-[var(--color-brand-navy)] md:text-4xl";

  const descriptionClasses =
    tone === "light"
      ? "mt-4 text-base font-semibold leading-relaxed text-white/90 drop-shadow-[0_6px_16px_rgba(3,8,21,0.6)] md:text-lg"
      : "mt-4 text-base leading-relaxed text-[var(--color-brand-charcoal)] opacity-80 md:text-lg";

  return (
    <div
      className={clsx(
        "max-w-3xl",
        alignment === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={eyebrowClasses}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={titleClasses}>
        {title}
      </h2>
      {description ? (
        <p className={descriptionClasses}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
