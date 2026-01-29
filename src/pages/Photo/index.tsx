import Text from "@/components/Text";
import Skeleton from "@/components/Skeleton";
import Container from "@/components/Container";
import PhotoNavigator from "@/components/Photo/photo-navigator";
import ImageFilePreview from "@/components/ImageFilePreview";
import Button from "@/components/Button";
import AlbumListSelector from "@/components/Album/album-list-selector";
<<<<<<< HEAD
import { useAlbums } from "@/hooks/use-album";
import type { Album } from "@/models/album";

export default function PagePhoto() {
  const { isLoadingAlbums } = useAlbums();
  const isLoadingPhoto = false;
=======
import { useAlbums } from "@/hooks/use-albums";
import type { Photo } from "@/models/photo";

export default function PagePhoto() {
  const { albums } = useAlbums();
 const isLoadingPhoto = false;
>>>>>>> b582362 (fix: corrige envio de imagem para API)
  const photo = {
    id: "123",
    title: "Olá mundo!",
    imageId: "portrait-tower.png",
    albums: [
<<<<<<< HEAD
      {id: "1", title: "Natureza"},
      {id: "2", title: "Fotografia"},
      {id: "3", title: "Viagem"},
=======
      { id: "3421", title: "Album 1" },
      { id: "123", title: "Album 2" },
      { id: "456", title: "Album 3" },
>>>>>>> b582362 (fix: corrige envio de imagem para API)
    ],
  } as Photo;

  //Apenas para dados mockados...
  const albums:Album[] = [
    {id: "1", title: "Natureza"},
    {id: "2", title: "Viagem"},
    {id: "3", title: "Fotografia"},
    {id: "4", title: "Arquitetura"},

  ] 
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
              src={`/images/${photo.imageId}`}
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
            albums={albums}
<<<<<<< HEAD
            loading={isLoadingAlbums}
=======
            loading={isLoadingPhoto}
>>>>>>> b582362 (fix: corrige envio de imagem para API)
          />
        </div>
      </div>
    </Container>
  );
}
