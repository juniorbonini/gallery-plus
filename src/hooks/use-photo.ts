import type { Photo, PhotoResponse } from "@/models/photo";
import type { PhotoNewFormSchema } from "@/schemas/Photo/photo.schema";
import { fetcher, api } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";



export function usePhoto(id?: string) {
  const { data, isLoading } = useQuery<PhotoResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  async function createPhoto(payload: PhotoNewFormSchema) {
    try {
      const { data: photo } = await api.post<Photo>("/photos", {
        title: payload.title,
      });

      await api.post(
        `/photos/${photo.id}/image`,
        {
          file: payload.file[0],
        },
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        },
      );

      if (payload.albumsIds && payload.albumsIds.length > 0) {
        await api.post(`/photos/${photo.id}/albums`, {
          albumsIds: payload.albumsIds,
        });
      }

      queryClient.invalidateQueries({ queryKey: ["photos"] })
      toast.success("Foto criada com sucesso")
    } catch (error) {
      toast.error("Erro ao criar a foto")
    }
  }

  return {
    photos: data,
    isLoadingPhoto: isLoading,
    previousPhotoId: data?.previousPhotoId,
    nextPhotoId: data?.nextPhotoId,
    createPhoto,
  };
}
