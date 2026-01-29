import cx from "classnames";
import type { Album, AlbumFilter } from "@/models/album";
import Text from "../Text";
import Button from "../Button";
import Skeleton from "../Skeleton";
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";

export default function AlbumFiltered({
  loading,
  className,
  ...props
}: AlbumFilter) {
  const { filters } = usePhotos();
  const { albums, isLoadingAlbum } = useAlbums();
  return (
    <div className={cx("flex items-center gap-3.5 overflow-x-auto")} {...props}>
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!isLoadingAlbum ? (
          <>
            <Button
              size="sm"
              className="cursor-pointer"
              variant={filters.albumId === null ? "primary" : "ghost"}
              onClick={() => filters.setAlbumId(null)}
            >
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                variant={filters.albumId === album.id ? "primary" : "ghost"}
                onClick={() => filters.setAlbumId(null)}
                size="sm"
                className="cursor-pointer"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={`album-loading-${index}`} className="w-28 h-7" />
          ))
        )}
      </div>
    </div>
  );
}
