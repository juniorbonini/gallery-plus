import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const alertVariants = tv({
  base: "rounded-md py-3 px-5",
  variants: {
    variant: {
      info: "bg-accent-brand/10",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface AlertInterface
  extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {}
