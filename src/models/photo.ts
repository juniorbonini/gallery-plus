import React from "react";
import type { Album } from "./album";
import { tv } from "tailwind-variants";
import type ImageFilePreview from "@/components/ImageFilePreview";

export const photoImageSelectVariants = tv({
  base: "cursor-pointer relative rounded-lg",
  variants: {
    select: {
      true: "outline-2 outline-accent-brand",
    },
  },
});

export interface PhotoImageSelectable extends React.ComponentProps<
  typeof ImageFilePreview
> {
  selected?: boolean;
  onSelectImage?: (selected: boolean) => void;
}

export interface Photo {
  id: string;
  title?: string;
  imageId: string;
  albums: Album[];
}

export interface PhotoWidget {
  photo: Photo;
  loading?: boolean;
}

export interface PhotosNavigator extends React.ComponentProps<"div"> {
  previousPhotoId?: string;
  nextPhotoId?: string;
  loading?: boolean;
}

export interface PhotoNewDialog {
  trigger: React.ReactNode;
}

export interface PhotoResponse extends Photo {
  previousPhotoId?: string;
  nextPhotoId?: string;
}
