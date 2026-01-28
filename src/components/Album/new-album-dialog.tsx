import type { NewAlbumDialog } from "@/models/album";
import type { Photo } from "@/models/photo";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../Dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import InputText from "../InputText";
import Text from "../Text";
import ImageFilePreview from "../ImageFilePreview";
import Skeleton from "../Skeleton";
import PhotoImageSelect from "@/components/Photo/photo-image-select"

// @ts-expect-error: module declaration for SVG React import
import SelectCheckboxIllustration from "@/assets/icons/upload-file.svg?react";
import Button from "../Button";

export default function NewAlbumDialog({ trigger }: NewAlbumDialog) {
  const isLoadingPhoto = false;
  const photos: Photo[] = [
    {
      id: "1",
      title: "Olá mundo!",
      imageId: "portrait-tower.png",
      albums: [
        { id: "1", title: "Album 1" },
        { id: "2", title: "Album 2" },
        { id: "3", title: "Album 3" },
      ],
    },
    {
      id: "1",
      title: "Olá mundo!",
      imageId: "portrait-tower.png",
      albums: [
        { id: "1", title: "Album 1" },
        { id: "2", title: "Album 2" },
        { id: "3", title: "Album 3" },
      ],
    },
  ];

  function handleTogglePhoto(selected: boolean, photoId: string) {
    console.log(selected, photoId)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Criar album</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um titúlo" />

          <div className="space-y-3">
            <Text as="div" variant="label-small" className="mb-3">
              Fotos cadastradas
            </Text>

            {!isLoadingPhoto && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                 <PhotoImageSelect
                  key={photo.id}
                  src={`/images/${photo.imageId}`}
                  title={photo.title}
                  imageClassName="w-20 h-20"
                  onSelectImage={(selected) => 
                    handleTogglePhoto(selected, photo.id)
                  }
                 />
                ))}
              </div>
            )}

            {isLoadingPhoto && (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-loading-${index}`}
                    className="w-20 h-20 roudned-lg"
                  />
                ))}
              </div>
            )}

            {!isLoadingPhoto && photos.length === 0 && (
              <div className="w-full flex fle-col justify-center items-center gap-3">
                <SelectCheckboxIllustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto disponível para seleção
                </Text>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
