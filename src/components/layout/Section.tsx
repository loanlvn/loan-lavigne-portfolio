import type { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";
import { Container } from "./Container";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}