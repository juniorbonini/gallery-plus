import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans, text-accent-paragraph",
  variants: {
    variant: {
      "heading-large": "text-2xl leading-[130%] font-bold",
      "heading-medium": "text-xl leading-[130%] font-bold",
      "heading-small": "text-base leading-[130%] front-bold",
      "paragraph-large": "text-base leading-[150%] font-medium",
      "paragraph-medium": "text-sm leading-[150%] font-medium",
      "paragrapg-small": "text-xs leading-[150%] font-medium",
      "label-medium": "text-base leading-[150%] font-semibold",
      "label-small": "text-xs leading-[150%] font-semibold",
    },
  },
  defaultVariants: {
    variant: "paragraph-medium",
  },
});

export interface TextInterface extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
