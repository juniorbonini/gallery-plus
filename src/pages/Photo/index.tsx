import Text from "@/components/Text";
import type { Photo } from "@/models/photo";
import Skeleton from "@/components/Skeleton";
import Container from "@/components/Container";
import PhotoNavigator from "@/components/Photo/photo-navigator";
import ImageFilePreview from "@/components/ImageFilePreview";
import Button from "@/components/Button";
import AlbumListSelector from "@/components/Album/album-list-selector";
import { AlbumCategory } from "@/utils/album";

export default function PagePhoto() {
  const isLoadingPhoto = false;
  const photo = {
    id: "1",
    title: "Olá mundo",
    imageId: "portrait-tower.png",
    albums: AlbumCategory,
  } as Photo;
  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">{photo.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator />
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImageFilePreview
              src={`/images/${photo?.imageId}`}
              imageClassName="h-[21rem]"
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
            photo={photo}
            albums={AlbumCategory}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
