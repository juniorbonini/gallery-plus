import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Text from "@/components/Text";
import Button from "@/components/Button";
import useAlbum from "@/hooks/use-album";
import Skeleton from "@/components/Skeleton";
import InputText from "@/components/InputText";
import { usePhotos } from "@/hooks/use-photos";
import type { AlbumNewDialog } from "@/models/album";
import PhotoImageSelect from "@/components/Photo/photo-image-selectable";

// @ts-expect-error: module declaration for SVG React import
import IllustrationIcon from "@/assets/images/select-checkbox.svg?react";
import {
  albumNewFormSchema,
  type AlbumNewFormSchema,
} from "@/schemas/Album/album.schema";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/Dialog";

export default function AlbumNewDialog({ trigger }: AlbumNewDialog) {
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
    form.setValue("photosIds", newValue);
  }

  function handleSubmit(payload: AlbumNewFormSchema) {
    setIsCreatingAlbum(async () => {
      const data: AlbumNewFormSchema = { title: payload.title };
      if (payload.photosIds && payload.photosIds.length > 0) {
        data.photosIds = payload.photosIds;
      }

      await createAlbum(data);
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
        <DialogHeader>Ciar álbum</DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogBody>
            <InputText
              placeholder="Adicione um título"
              maxLength={55}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />
            <div className="space-y-3">
              <Text as="div" variant="label-small" className="mt-3 mb-3">
                Fotos cadastradas
              </Text>
              {!isLoadingPhoto && photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map((photo) => (
                    <PhotoImageSelect
                      key={photo.id}
                      src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
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
                      key={`loading-photo-${index}`}
                      className="w-20 h-20 rounded-lg"
                    />
                  ))}
                </div>
              )}

              {!isLoadingPhoto && photos.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center gap-3">
                  <IllustrationIcon />
                  <Text variant="paragraph-large" className="text-center">
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
            <Button
              type="submit"
              disabled={isCreatingAlbum}
              handling={isCreatingAlbum}
            >
              {isCreatingAlbum ? "Criando" : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
