import React from "react";
import { useParams } from "react-router";

import Container from "@/components/Container";
import Text from "@/components/Text";
import Skeleton from "@/components/Skeleton";
import ImageFilePreview from "@/components/ImageFilePreview";
import ButtonIcon from "@/components/ButtonIcon";
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";

// @ts-expect-error: module declaration for SVG React import
import ArrowLeftIcon from "@/assets/icons/chevron-left.svg?react";
// @ts-expect-error: module declaration for SVG React import
import ArrowRightIcon from "@/assets/icons/chevron-right.svg?react";

// @ts-expect-error: module declaration for SVG React import
import IllustrationIcon from "@/assets/images/select-checkbox.svg?react"

export default function AlbumPageDetails() {
  const { id } = useParams();
  const { albums, isLoadingAlbum } = useAlbums();
  const { photos, isLoadingPhoto } = usePhotos();

  const album = React.useMemo(() => albums.find((album) => album.id === id), [
    albums,
    id,
  ]);

  const photosOnAlbum = React.useMemo(() => {
    if (!photos || !id) return [];
    return photos.filter((photo) => photo.albums.some((album) => album.id === id));
  }, [photos, id]);

  const [index, setIndex] = React.useState(0);
  const [startX, setStartX] = React.useState<number | null>(null);
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    setIndex(0);
  }, [id]);

  function handlePrev() {
    setIndex((index) => Math.max(0, index - 1));
  }

  function handleNext() {
    setIndex((index) => Math.min(photosOnAlbum.length - 1, index + 1));
  }

  function onPointerDown(e: React.PointerEvent) {
    setStartX(e.clientX);
    setDragging(true);
    (e.target as Element).setPointerCapture(e.pointerId);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!dragging || startX === null) return;
    const delta = e.clientX - startX;
    const threshold = 50;
    if (delta < -threshold) {
      handleNext();
    } else if (delta > threshold) {
      handlePrev();
    }
    setDragging(false);
    setStartX(null);
  }

  if (!isLoadingAlbum && !album) {
    return (
      <Container>
        <Text as="h3">Álbum não encontrado</Text>
      </Container>
    );
  }

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingAlbum ? (
          <Text as="h2" variant="heading-large">
            {album?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <div className="flex items-center gap-4">
          <Text variant="paragraph-large">{photosOnAlbum.length} fotos</Text>
        </div>
      </header>

      <main>
        {photosOnAlbum.length === 0 && !isLoadingPhoto ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <div className="w-24 h-24 flex items-center justify-center bg-accent-bg rounded-full">
             <IllustrationIcon />
            </div>
            <Text variant="paragraph-large">Ainda sem fotos neste álbum</Text>
          </div>
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <ButtonIcon
                icon={ArrowLeftIcon}
                onClick={handlePrev}
                disabled={index === 0}
              />
              <Text variant="paragraph-large">{index + 1} / {photosOnAlbum.length}</Text>
              <ButtonIcon
                icon={ArrowRightIcon}
                onClick={handleNext}
                disabled={index === photosOnAlbum.length - 1}
              />
            </div>

            <div
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              className="overflow-hidden rounded-lg"
              style={{ touchAction: "pan-y" }}
            >
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {photosOnAlbum.map((photo) => (
                  <div key={photo.id} style={{ minWidth: "100%" }}>
                    {!isLoadingPhoto ? (
                      <ImageFilePreview
                        src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                        imageClassName="h-[60vh] w-full object-contain"
                      />
                    ) : (
                      <Skeleton className="h-[60vh] w-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </Container>
  );
}
