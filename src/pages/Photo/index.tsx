import React from "react";
import { useParams } from "react-router";

import Text from "@/components/Text";
import Button from "@/components/Button";
import type { Photo } from "@/models/photo";
import { usePhoto } from "@/hooks/use-photo";
import Skeleton from "@/components/Skeleton";
import Container from "@/components/Container";
import { useAlbums } from "@/hooks/use-albums";
import ImageFilePreview from "@/components/ImageFilePreview";
import PhotoNavigator from "@/components/Photo/photos-navigator";
import { AlbumListSelector } from "@/components/Album/albums-list-selector";

export default function PagePhoto() {
  const { id } = useParams();
  const { albums } = useAlbums();
  const { photos, isLoadingPhoto, previousPhotoId, nextPhotoId, removePhoto } =
    usePhoto(id);
  const [isDelitingPhoto, setIsDelitingPhoto] = React.useTransition();

  if (!isLoadingPhoto && !photos) {
    return <div>Nenhuma foto encontrada</div>;
  }

  function handleRemovePhoto() {
    setIsDelitingPhoto(async () => {
      await removePhoto(photos!.id);
    });
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photos?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotoNavigator
          previousPhotoId={previousPhotoId}
          nextPhotoId={nextPhotoId}
          loading={isLoadingPhoto}
        />
      </header>
      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImageFilePreview
              src={`${import.meta.env.VITE_IMAGES_URL}/${photos?.imageId}`}
              imageClassName="h-[21rem]"
              title={photos?.title}
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button
              disabled={isDelitingPhoto}
              variant="destructive"
              onClick={() => handleRemovePhoto()}
            >
              {isDelitingPhoto ? "Excluindo" : "Excluir"}
            </Button>
          ) : (
            <Skeleton className=" w-20 h-10" />
          )}
        </div>
        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>
          <AlbumListSelector
            photo={photos as Photo}
            albums={albums}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  );
}
