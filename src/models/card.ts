import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: `rounded transition`,
  variants: {
    variant: {
      default: "border boder-solid border-border-primary bg-transparent",
      primary: "bg-background-primary",
    },
    size: {
      none: "",
      md: "p-3",
      lg: "p-6",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "none",
  },
});

export interface CardInterface
  extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}
