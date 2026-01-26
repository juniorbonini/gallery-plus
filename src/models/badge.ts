import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "inline-flex items-center justify-center rounded",
  variants: {
    variant: {
      none: "",
      ghost:
        "bg-transparent border border-solid border-border-primary text-accent-paragraph",
    },
    size: {
      xs: "py-0.5 px-2",
      sm: "py-1 px-3",
    },
  },

  defaultVariants: {
    variant: "none",
    size: "sm",
  },
});

export const badgeTextVariants = tv({
  base: "text-xs",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
    },
  },
});

export const badgeSkeletonVariants = tv({
  variants: {
    size: {
      xs: "w-12 h-[1.375rem]",
      sm: "w-16 h-[1.875rem]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface BadgeInterface
  extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {
  loading?: boolean;
}
