import type React from "react";
import type { Photo } from "./photo";

export interface Album {
  id: string;
  title: string;
}

export interface AlbumFilter extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export interface AlbumListSelector {
  loading?: boolean;
  albums: Album[];
  photo: Photo;
}

export interface AlbumNewDialog {
  trigger: React.ReactNode;
}

export interface AlbumCard {
  album: Album;
  firstPhotoSrc?: string;
  loading?: boolean;
  onOpen?: (id: string) => void;
  onRemove?: (id: string) => void;
  removing?: boolean;
}