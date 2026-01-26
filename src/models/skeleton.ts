import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  base: "animate-pulse bg-background-secondary pointer-events-none",
  variants: {
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },

  defaultVariants: {
    rounded: "lg",
  },
});

export interface SkeletonInterface
  extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {}
