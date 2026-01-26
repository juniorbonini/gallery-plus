import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const containerVariants = tv({
  base: "mx-auto",
  variants: {
    size: {
      md: "max-w-[62rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ContainerInterface
  extends React.ComponentProps<"div">, VariantProps<typeof containerVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}
