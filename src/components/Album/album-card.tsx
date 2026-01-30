import React from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import ImageFilePreview from "@/components/ImageFilePreview";
import type { AlbumCard } from "@/models/album";

// @ts-expect-error: module declaration for SVG React import
import IllustrationIcon from "@/assets/images/select-checkbox.svg?react";
export default function AlbumCard({
  album,
  firstPhotoSrc,
  loading,
  onOpen,
  onRemove,
  removing,
}: AlbumCard) {
  return (
    <div className="p-4 border border-accent-span rounded-lg flex flex-col justify-between">
      <div className="mb-4">
        <div className="mb-3 items-center justify-center flex">
          {!loading ? (
            firstPhotoSrc ? (
              <ImageFilePreview
                src={firstPhotoSrc}
                imageClassName="h-40 w-full object-cover rounded"
              />
            ) : (
              <IllustrationIcon />
            )
          ) : (
            <div className="h-40 w-full flex items-center justify-center bg-accent-bg rounded">
              <Text>foto 0</Text>
            </div>
          )}
        </div>

        <Text variant="heading-small">{album.title}</Text>
      </div>

      <div className="flex items-center gap-3">
        <Button onClick={() => onOpen && onOpen(album.id)}>Ver</Button>
        <Button
          variant="destructive"
          onClick={() => onRemove && onRemove(album.id)}
          disabled={removing}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
}
