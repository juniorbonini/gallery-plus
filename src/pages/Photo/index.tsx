import Text from "@/components/Text";
import Skeleton from "@/components/Skeleton";
import Container from "@/components/Container";
import PhotoNavigator from "@/components/Photo/photo-navigator";
import ImageFilePreview from "@/components/ImageFilePreview";
import Button from "@/components/Button";
import AlbumListSelector from "@/components/Album/album-list-selector";
import { useAlbums } from "@/hooks/use-albums";
import type { Photo } from "@/models/photo";
import { usePhoto } from "@/hooks/use-photo";
import { useParams } from "react-router";

export default function PagePhoto() {
  const { id } = useParams();
  const { albums } = useAlbums();
  const { photo, isLoadingPhoto } = usePhoto(id);

  if(!isLoadingPhoto && !photo) {
    return <div>Nenhuma foto encontrada</div>
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator />
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImageFilePreview
              src={`${import.meta.env.VITE_IMAGES_URL}/${photo?.imageId}`}
              imageClassName="h-[21rem]"
              title={photo?.title}
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className=" w-20 h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>
          <AlbumListSelector
            photo={photo as Photo}
            albums={albums}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
