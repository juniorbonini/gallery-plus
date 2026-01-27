import type React from "react";
import { tv } from "tailwind-variants";

export const imageFilePreviewVariants = tv({
  base: `rounded-lg overflow-hidden`,
});

export const imageFilePreviewImageVariants = tv({
  base: `w-full h-full objects-cover`,
});

export interface ImageFilePreviewInterface extends React.ComponentProps<"img"> {
  imageClassName?: string;
}
