import type React from "react";

export interface Album {
  id: string;
  title: string;
}

export interface AlbumFilter extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}
