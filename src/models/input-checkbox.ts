import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const inputCheckboxWrapperVariants = tv({
  base: "inline-flex items-center justify-center relative group",
});

export const inputCheckboxVariants = tv({
  base: `appearance-none peer flex items-center justify-center cursor-pointer transition overflow-hidden`,
  variants: {
    variant: {
      default: `border-1 border-solid border-accent-span hover:border-border-active checked:bg-accent-brand group-hover:checked:border-accent-brand-light group-hover:checked:bg-accent-brand`,
    },
    size: {
      sm: "w-3 h-3 roudned-sm",
      md: "w-5 h-5 rounded-md",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
  },
});

export const inputCheckboxIconVariants = tv({
  base: `absolute top-1/2 -translate-y-1/2 hidden peer-checked:block fill-white cursor-pointer`,
  variants: {
    size: {
      sm: "w-3 h-3 left-px",
      md: "w-4 h-4 left-0.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InputCheckboxInterface
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCheckboxVariants> {}
