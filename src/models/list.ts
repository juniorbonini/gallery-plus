import type { Photo } from "./photo";

export interface List {
    photos: Photo[];
    loading?: boolean;
}