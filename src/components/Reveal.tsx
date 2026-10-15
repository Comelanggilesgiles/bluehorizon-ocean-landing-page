import type { ReactNode } from "react";
import { createElement } from "react";
import { useReveal } from "../hooks/useReveal";
import { cn } from "../utils/cn";

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: cn("reveal", visible && "is-visible", className),
    },
    children,
  );
}
