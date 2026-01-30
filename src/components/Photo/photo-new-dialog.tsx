import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Text from "@/components/Text";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import Skeleton from "@/components/Skeleton";
import { usePhoto } from "@/hooks/use-photo";
import { useAlbums } from "@/hooks/use-albums";
import InputText from "@/components/InputText";
import type { PhotoNewDialog } from "@/models/photo";
import InputSingleFile from "@/components/InputSingleFile";
import ImageFilePreview from "@/components/ImageFilePreview";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import {
  photoNewFormSchema,
  type PhotoNewFormSchema,
} from "@/schemas/Photo/photo.schema";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../Dialog";

export default function PhotoNewDialog({ trigger }: PhotoNewDialog) {
   const [modalOpen, setModalOpen] = React.useState(false);
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });

  const { albums, isLoadingAlbum } = useAlbums();
  const { createPhoto } = usePhoto();
  const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition();

  const file = form.watch("file");
  const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

  const albumsIds = form.watch("albumsIds");

  React.useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form]);

  function handleSubmit(payload: PhotoNewFormSchema) {
    setIsCreatingPhoto(async () => {
      await createPhoto(payload);
      setModalOpen(false);
    });
  }

  function handleToggleAlbum(albumId: string) {
    const albumsIds = form.getValues("albumsIds");
    const albumsSet = new Set(albumsIds || []);

    if (albumsSet.has(albumId)) {
      albumsSet.delete(albumId);
    } else {
      albumsSet.add(albumId);
    }

    form.setValue("albumsIds", Array.from(albumsSet));
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Adicionar foto</DialogHeader>

          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um título"
              maxLength={255}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <Alert>
              Tamanho máximo: 50MB
              <br />
              Você pode selecionar arquivo em PNG, JPG ou JPEG
            </Alert>

            <InputSingleFile
              form={form}
              allowedExtensions={["png", "jpg", "jpeg"]}
              maxFileInMb={50}
              replaceBy={<ImageFilePreview src={fileSrc} className="w-full h-56" />}
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />

            <div className="space-y-3">
              <Text variant="label-small">Selecionar álbuns</Text>

              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbum &&
                  albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      key={album.id}
                      variant={
                        albumsIds?.includes(album.id) ? "primary" : "ghost"
                      }
                      size="sm"
                      className="truncate"
                      onClick={() => handleToggleAlbum(album.id)}
                    >
                      {album.title}
                    </Button>
                  ))}

                {isLoadingAlbum &&
                  Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={`album-loading-${index}`}
                      className="w-20 h-7"
                    />
                  ))}
              </div>
            </div>
          </DialogBody>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" disabled={isCreatingPhoto}>
                Cancelar
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isCreatingPhoto}
              handling={isCreatingPhoto}
            >
              {isCreatingPhoto ? "Adicionando" : "Adicionar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}