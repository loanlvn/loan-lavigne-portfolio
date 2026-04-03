import type { PropsWithChildren } from "react";

export function Tag({ children }: PropsWithChildren) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}