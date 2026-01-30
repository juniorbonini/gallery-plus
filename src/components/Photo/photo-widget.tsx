import { Link } from "react-router";
import Text from "@/components/Text";
import Badge from "@/components/Badge";
import Skeleton from "@/components/Skeleton";
import type { PhotoWidget } from "@/models/photo";
import ImageFilePreview from "@/components/ImageFilePreview";
import { buttonVariants, textButtonVariants } from "@/models/button";

export default function PhotoWidget({ photo, loading }: PhotoWidget) {
   return (
    <div className="flex flex-col gap-4 ">
      {!loading ? (
        <ImageFilePreview
          src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
          title={photo.title}
          imageClassName="w-[10.875rem] h-[10.875rem] rounded-lg"
        />
      ) : (
        <Skeleton className="w-[10.875rem] h-[10.875rem] rounded-lg" />
      )}

      <div className="flex flex-col gap-2">
        {!loading ? (
          <Text variant="paragraph-large" className="truncate">
            {photo.title}
          </Text>
        ) : (
          <Skeleton className="w-full h-6" />
        )}

        <div className="flex gap-1 min-h-[1.375rem]">
          {!loading ? (
            <>
              {photo.albums.slice(0, 1).map((album) => (
                <Badge variant="ghost" className="truncate" size="xs" key={album.id}>
                  {album.title}
                </Badge>
              ))}
              {photo.albums.length > 1 && (
                <Badge variant="ghost" size="xs">+{photo.albums.length - 1}</Badge>
              )}
            </>
          ) : (
            Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={`album-loading-${index}`}
                className="w-full h-4 rounded-sm"
              />
            ))
          )}
        </div>
      </div>

      {!loading ? (
        <Link
          className={buttonVariants({
            variant: "secondary",
            className: "px-2 py-2",
          })}
          to={`/fotos/${photo.id}`}
        >
          <Text
            className={textButtonVariants({ variant: "secondary", size: "sm" })}
          >
            Detalhes da imagem
          </Text>
        </Link>
      ) : (
        <Skeleton className="w-full h-10" />
      )}
    </div>
  );
}