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
