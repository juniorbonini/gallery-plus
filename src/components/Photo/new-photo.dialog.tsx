import type { Album } from "@/models/album";
import type { NewPhotoDialog } from "@/models/photo";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../Dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import InputText from "../InputText";
import Alert from "../Alert";
import InputSingleFile from "../InputSingleFile";
import ImageFilePreview from "../ImageFilePreview";
import Text from "../Text";
import Button from "../Button";
import Skeleton from "../Skeleton";
import { useAlbums } from "@/hooks/use-albums";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  photoNewFormSchema,
  type PhotoNewFormSchema,
} from "@/schemas/Photo/photo.schema";
import React from "react";
import { usePhoto } from "@/hooks/use-photo";

export default function NewPhotoDialog({ trigger }: NewPhotoDialog) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { albums, isLoadingAlbum } = useAlbums();
  const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition();
  const { createPhoto } = usePhoto();
  const form = useForm<PhotoNewFormSchema>({
    resolver: zodResolver(photoNewFormSchema),
  });
  const file = form.watch("file");
  const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;
  const albumsIds = form.watch("albumsIds");

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
          <DialogHeader>Adicionar foto</DialogHeader>
          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um titúlo"
              maxLength={255}
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <Alert>
              Tamanho máximo: 50MB
              <br />
              Você pode selecionar arquivos em PNG, JPG, JPEG e WEBP
            </Alert>

            <InputSingleFile
              form={form}
              allowedExtensions={["png", "jpg", "jpeg", "webp"]}
              maxFileInMb={50}
              replaceBy={<ImageFilePreview className="w-full h-56" />}
              error={form.formState.errors.file?.message}
              {...form.register("file")}
            />
            <div className="flex flex-col space-y-3">
              <Text variant="label-small">Selecionar álbums</Text>

              <div className="flex flex-wrap gap-3">
                {!isLoadingAlbum &&
                  albums.length > 0 &&
                  albums.map((album) => (
                    <Button
                      key={album.id}
                      className="truncate"
                      variant={
                        albumsIds?.includes(album.id) ? "primary" : "ghost"
                      }
                      size="sm"
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
            <Button disabled={isCreatingPhoto} handling={isCreatingPhoto} type="submit">
              {isCreatingPhoto ? "Adicionando" : "Adicionar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
