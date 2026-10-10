"use client";

import { Children, type ReactNode } from "react";
import { FadeIn } from "@/components/animation/fade-in";

/**
 * Gives each direct child its own scroll blur-reveal, slightly staggered.
 */
export function RevealParts({
  children,
  start = 0.04,
}: {
  children: ReactNode;
  start?: number;
}) {
  return Children.toArray(children).map((child, index) => (
    <FadeIn key={index} delay={Math.min(start + index * 0.06, 0.42)}>
      {child}
    </FadeIn>
  ));
}
