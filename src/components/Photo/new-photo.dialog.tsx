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
<<<<<<< HEAD
import { useAlbums } from "@/hooks/use-album";
 
export default function NewPhotoDialog({ trigger }: NewPhotoDialog) {
  const form = useForm();
  //Apenas para dados mockados...
  const albums:Album[] = [
    {id: "1", title: "Natureza"},
    {id: "2", title: "Viagem"},
    {id: "3", title: "Fotografia"},
    {id: "4", title: "Arquitetura"}
  ] 

  const { isLoadingAlbums } = useAlbums();

=======
import { useAlbums } from "@/hooks/use-albums";
 
export default function NewPhotoDialog({ trigger }: NewPhotoDialog) {
  const form = useForm();
  const { albums, isLoadingAlbum } = useAlbums();
>>>>>>> b582362 (fix: corrige envio de imagem para API)
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Adicionar foto</DialogHeader>
        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um titúlo" maxLength={255} />

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
          />
          <div className="flex flex-col space-y-3">
            <Text variant="label-small">Selecionar álbums</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbums &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    className="truncate"
                    variant="ghost"
                    size="sm"
                  >
                    {album.title}
                  </Button>
                ))}

              {isLoadingAlbums &&
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
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
            <Button>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
