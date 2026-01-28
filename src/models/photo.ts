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