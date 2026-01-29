import type { Photo, PhotoResponse } from "@/models/photo";
import type { PhotoNewFormSchema } from "@/schemas/Photo/photo.schema";
import { fetcher, api } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";



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
          file: payload.file,
        },
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        },
      );

      if (payload.albumsIds && payload.albumsIds.length > 0) {
        await api.post(`/photos/${photo.id}/albums`);
      }

      queryClient.invalidateQueries({ queryKey: ["photos"] })
    } catch (error) {
      throw error;
    }
  }

  return {
    photo: data,
    isLoadingPhoto: isLoading,
    previousPhotoId: data?.previousPhotoId,
    nextPhotoId: data?.nextPhotoId,
    createPhoto,
  };
}
