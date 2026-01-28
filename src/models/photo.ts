import React from "react";
import type { Album } from "./album";

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