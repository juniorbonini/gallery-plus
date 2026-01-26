import type Icon from "@/components/Icon";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const inputTextContainerVariants = tv({
  base: "flex flex-col gap-1",
});

export const inputTextWrapperVariants = tv({
  base: "border border-solid border-border-primary focus:border-border-active bg-transparent rounded flex items-center gap-3",
  variants: {
    size: {
      md: "h-10 p-3",
    },
    disabled: {
      true: "ponter-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export const inputTextVariants = tv({
  base: "bg-transparent outline-none placeholder:text-placeholder text-accent-paragraph flex-1",
});

export const inputTextIconVariants = tv({
  base: "fill-placeholder",
  variants: {
    size: {
      md: "w-6 h-6",
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export interface InputTextInterface
  extends
    Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextWrapperVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  error?: React.ReactNode;
}
