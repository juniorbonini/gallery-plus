import { toast } from "sonner";

import { api } from "@/utils/api";
import { useQueryClient } from "@tanstack/react-query";

export function usePhotoAlbum() {
  const queryClient = useQueryClient();

  async function managePhotoOnAlbum(photoId: string, albumsIds: string[]) {
    try {
      await api.put(`/photos/${photoId}/albums`, {
        albumsIds,
      });

      queryClient.invalidateQueries({ queryKey: ["albums"] });
      queryClient.invalidateQueries({ queryKey: ["photos"] });

      toast.success("Ábuns atualizados");
    } catch (error) {
      toast.error("Erro ao geranciar álbuns da foto");
      throw error;
    }
  }

  return {
    managePhotoOnAlbum,
  };
}
