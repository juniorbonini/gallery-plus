import cx from "classnames";
import type { AlbumFilter } from "@/models/album";
import Text from "../Text";
import Button from "../Button";
import Skeleton from "../Skeleton";
import { AlbumCategory } from "@/utils/album";

export default function Album({
  albums,
  loading,
  className,
  ...props
}: AlbumFilter) {
  const album = AlbumCategory;
  return (
    <div className={cx("flex items-center gap-3.5 overflow-x-auto")} {...props}>
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!loading ? (
          <>
            <Button size="sm" className="cursor-pointer" variant="ghost">
              Todos
            </Button>
            {album.map((album) => (
              <Button
                key={album.id}
                size="sm"
                className="cursor-pointer"
                variant="ghost"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-28 h-7" key={`loading-album-${index}`} />
          ))
        )}
      </div>
    </div>
  );
}
