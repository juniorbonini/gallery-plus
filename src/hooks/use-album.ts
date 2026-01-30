import { useQueryClient } from "@tanstack/react-query";
import { usePhotos } from "./use-photos";
import type { AlbumNewFormSchema } from "@/schemas/Album/album.schema";
import { api } from "@/utils/api";
import type { Album } from "@/models/album";
import { toast } from "sonner";

export default function useAlbum() {
  const { photos } = usePhotos();
  const queryClient = useQueryClient();

  async function createAlbum(payload: AlbumNewFormSchema) {
    try {
      const { data: album } = await api.post<Album>("/albums", {
        title: payload.title,
      });

      if (payload.photosIds && payload.photosIds.length > 0) {
        await Promise.all(
          payload.photosIds.map((photoId) => {
            const photoAlbumsIds =
              photos
                .find((photo) => photo.id === photoId)
                ?.albums.map((album) => album.id) || [];
            return api.post(`/photos/${photoId}/albums`, {
              albumsIds: [...photoAlbumsIds, album.id],
            });
          }),
        );
      }

      queryClient.invalidateQueries({ queryKey: ["albums"] });
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Album criado com sucesso");
    } catch (error) {
      toast.error("Erro ao criar album");
    }
  }

  async function removeAlbum(albumId: string) {
    try {
      await api.delete(`/albums/${albumId}`);

      queryClient.invalidateQueries({ queryKey: ["albums"] });
      toast.success("Album foi removido com sucesso");
    } catch (error) {
      toast.error("Erro ao remover album");
      throw error;
    }
  }

  return {
    createAlbum,
    removeAlbum,
  };
}
