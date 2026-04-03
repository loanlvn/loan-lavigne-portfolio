import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-white/50 uppercase">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-white/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}