import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const iconVariants = tv({
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
  },
  defaultVariants: {
    animate: false,
  },
});

export interface IconInterface
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}
