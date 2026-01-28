import type { AlbumListSelector } from "@/models/album";
import Text from "../Text";
import Divider from "../Divider";
import Skeleton from "../Skeleton";
import InputCheckbox from "../InputCheckbox";

export default function AlbumListSelector({
  albums,
  loading,
  photo,
}: AlbumListSelector) {
  function isChecked(albumId: string) {
    return photo?.albums.some((album) => album.id === albumId);
  }

  function handlePhotoOnAlbums(albumId: string) {
    let albumsIds = [];

    if (isChecked(albumId)) {
      albumsIds = photo.albums
        .filter((album) => album.id !== albumId)
        .map((album) => album.id);
    } else {
      albumsIds = [...photo.albums.map((album) => album.id), albumId];
    }

    console.log(albumsIds);
  }

  return (
    <ul className="flex flex-col gap-4">
      {!loading &&
        albums.length > 0 &&
        albums.map((album, index) => (
          <li key={album.id}>
            <div className="flex items-center justify-between gap-1">
              <Text className="truncate" variant="paragraph-large">
                {album.title}
              </Text>
              <InputCheckbox
                defaultChecked={isChecked(album.id)}
                onClick={() => handlePhotoOnAlbums(album.id)}
              />
            </div>
            {index !== albums.length - 1 && <Divider className="mt-5" />}
          </li>
        ))}

      {Array.from({ length: 5 }).map((_, index) => (
        <li key={`albums-list-${index}`}>
          <Skeleton className="-[2.5rem]" />
        </li>
      ))}
    </ul>
  );
}
