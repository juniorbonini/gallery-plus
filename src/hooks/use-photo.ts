import { toast } from "sonner";
import { useNavigate } from "react-router";

import { fetcher, api } from "@/utils/api";
import { usePhotoAlbum } from "./use-photo-albums";
import type { Photo, PhotoResponse } from "@/models/photo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { PhotoNewFormSchema } from "@/schemas/Photo/photo.schema";

export function usePhoto(id?: string) {
  const navigate = useNavigate();
  const { managePhotoOnAlbum } = usePhotoAlbum();
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
        await managePhotoOnAlbum(photo.id, payload.albumsIds);
      }

      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Foto criada com sucesso");
    } catch (error) {
      toast.error("Erro ao criar a foto");
    }
  }

  async function removePhoto(photoId: string) {
    try {
      await api.delete(`/photos/${photoId}`);
      toast.success("Foto removida com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Erro ao remover foto");
    }
  }

  return {
    createPhoto,
    removePhoto,
    photos: data,
    isLoadingPhoto: isLoading,
    nextPhotoId: data?.nextPhotoId,
    previousPhotoId: data?.previousPhotoId,
  };
}
