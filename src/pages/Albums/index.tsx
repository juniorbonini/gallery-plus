import React from "react";
import { useNavigate } from "react-router";

import Text from "@/components/Text";
import useAlbum from "@/hooks/use-album";
import Skeleton from "@/components/Skeleton";
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";
import Container from "@/components/Container";
import AlbumCard from "@/components/Album/album-card";

export default function AlbumsPage() {
  const navigate = useNavigate();
  const { albums, isLoadingAlbum } = useAlbums();
  const { photos, isLoadingPhoto } = usePhotos();
  const { removeAlbum } = useAlbum();
  const [isDeleting, startDeleting] = React.useTransition();

  function handleOpen(id?: string) {
    if (!id) return;
    navigate(`/albums/${id}`);
  }

  function handleRemove(id: string) {
    startDeleting(async () => {
      await removeAlbum(id);
     
    });
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingAlbum ? (
          <Text as="h2" variant="heading-large">
            Álbuns
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
      </header>

      <div className="space-y-4">
        {!isLoadingAlbum && albums.length === 0 && (
          <Text as="div" variant="heading-medium" className="text-center">Nenhum album encontrado</Text>
        )}

        {isLoadingAlbum && (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-4 border rounded">
                <Skeleton className="h-6 w-32 mb-3" />
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        )}

        {!isLoadingAlbum && albums.length > 0 && (
          <div className="grid grid-cols-3 gap-9">
            {albums.map((album) => {
              const firstPhoto =
                photos?.find((photo) => photo.albums.some((al) => al.id === album.id)) ||
                undefined;
              const firstPhotoSrc = firstPhoto
                ? `${import.meta.env.VITE_IMAGES_URL}/${firstPhoto.imageId}`
                : undefined;

              return (
                <AlbumCard
                  key={album.id}
                  album={album}
                  firstPhotoSrc={firstPhotoSrc}
                  loading={isLoadingPhoto}
                  onOpen={(id) => handleOpen(id)}
                  onRemove={(id) => handleRemove(id)}
                  removing={isDeleting as unknown as boolean}
                />
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
