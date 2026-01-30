import React from "react";

import Text from "@/components/Text";
import InputCheckbox from "@/components/InputCheckbox";
import type { AlbumListSelector } from "@/models/album";
import { usePhotoAlbum } from "@/hooks/use-photo-albums";
import Divider from "../Divider";

export function AlbumListSelector({
  loading,
  albums,
  photo,
}: AlbumListSelector) {
  const { managePhotoOnAlbum } = usePhotoAlbum();
  const [isUpdatingPhoto, setIsUpdatingPhoto] = React.useTransition();

  function isChecked(albumId: string) {
    return photo?.albums.some((album) => album.id === albumId);
  }

  function handlePhotoOnAlbum(albumId: string) {
    let albumsIds = [];

    if (isChecked(albumId)) {
      albumsIds = photo.albums
        .filter((album) => album.id !== albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...photo.albums.map((album) => album.id), albumId];
    }

    setIsUpdatingPhoto(async () => {
      await managePhotoOnAlbum(photo.id, albumsIds);
    });
  }

  return (
    <ul className="flex flex-col gap-4">
      {!loading &&
        photo &&
        albums.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between gap-1">
              <Text variant="paragraph-large" className="truncate">
                {album.title}
              </Text>
              <InputCheckbox
                defaultChecked={isChecked(album.id)}
                onChange={() => handlePhotoOnAlbum(album.id)}
                disabled={isUpdatingPhoto}
              />
            </div>
            {index !== albums.length - 1 && <Divider className="mt-4" />}
          </li>
        ))}
    </ul>
  );
}
