import cx from "classnames";

import Text from "@/components/Text";
import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import { usePhotos } from "@/hooks/use-photos";
import type { AlbumFilter } from "@/models/album";

export default function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumFilter) {
  const { filters } = usePhotos();
  return (
    <div className={cx(`flex items-center gap-3.5 overflow-x-auto`)} {...props}>
      <Text variant="heading-medium">Álbuns</Text>
      <div className="flex gap-3">
        {!loading ? (
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
                size="sm"
                variant={filters.albumId === album.id ? "primary" : "secondary"}
                onClick={() => filters.setAlbumId(album.id)}
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-28 h-7" key={`album-loading-${index}`} />
          ))
        )}
      </div>
    </div>
  );
}
