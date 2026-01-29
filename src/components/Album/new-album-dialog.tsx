import type { NewAlbumDialog } from "@/models/album";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/Dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import InputText from "../InputText";
import Text from "../Text";
import Skeleton from "../Skeleton";
import PhotoImageSelect from "@/components/Photo/photo-image-select";

// @ts-expect-error: module declaration for SVG React import
import SelectCheckboxIllustration from "@/assets/icons/upload-file.svg?react";
import Button from "../Button";
import { usePhotos } from "@/hooks/use-photos";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type AlbumNewFormSchema,
  albumNewFormSchema,
} from "@/schemas/Album/album.schema";
import useAlbum from "@/hooks/use-album";

export default function NewAlbumDialog({ trigger }: NewAlbumDialog) {
  const { createAlbum } = useAlbum();
  const { photos, isLoadingPhoto } = usePhotos();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isCreatingAlbum, setIsCreatingAlbum] = React.useTransition();
  const form = useForm<AlbumNewFormSchema>({
    resolver: zodResolver(albumNewFormSchema),
  });

  function handleTogglePhoto(selected: boolean, photoId: string) {
    const photosIds = form.getValues("photosIds") || [];
    let newValue = [];

    if (selected) {
      newValue = [...photosIds, photoId];
    } else {
      newValue = photosIds.filter((id) => id !== photoId);
    }

    form.setValue("photosIds", Array.from(photosIds));
  }

  function handleSubmit(payload: AlbumNewFormSchema) {
    setIsCreatingAlbum(async () => {
      await createAlbum(payload);
      setModalOpen(false);
    });
  }

  React.useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                      src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                      title={photo.title}
                      imageClassName="w-20 h-20 rounded-lg"
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
                      className="w-20 h-20 rounded-lg"
                    />
                  ))}
                </div>
              )}

              {!isLoadingPhoto && photos.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center gap-3">
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
              <Button
                handling={isCreatingAlbum}
                disabled={isCreatingAlbum}
                variant="secondary"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              handling={isCreatingAlbum}
              disabled={isCreatingAlbum}
              type="submit"
            >
              {isCreatingAlbum ? "Criando" : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
