import cx from "classnames";
import type { Album, AlbumFilter } from "@/models/album";
import Text from "../Text";
import Button from "../Button";
import Skeleton from "../Skeleton";
<<<<<<< HEAD

export default function AlbumFiltered({
  albums,
=======
import { useAlbums } from "@/hooks/use-albums";

export default function AlbumFiltered({
>>>>>>> b582362 (fix: corrige envio de imagem para API)
  loading,
  className,
  ...props
}: AlbumFilter) {
<<<<<<< HEAD
  //Apenas para dados mockados...
  const album: Album[] = [
    {id: "1", title: "Natureza"},
    {id: "2", title: "Fotografia"},
    {id: "3", title: "Viagem"}
  ]
=======
  const { albums, isLoadingAlbum } = useAlbums();
>>>>>>> b582362 (fix: corrige envio de imagem para API)
  return (
    <div className={cx("flex items-center gap-3.5 overflow-x-auto")} {...props}>
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!isLoadingAlbum ? (
          <>
            <Button size="sm">Todos</Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                variant="ghost"
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
