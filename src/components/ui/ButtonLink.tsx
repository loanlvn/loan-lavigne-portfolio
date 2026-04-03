import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary";
    size?: "sm" | "md";
  }
>;

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition duration-300",
        "focus:outline-none focus:ring-2 focus:ring-white/30",
        size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm sm:text-base",
        variant === "primary" &&
          "bg-white text-black hover:-translate-y-0.5 hover:bg-white/90",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}