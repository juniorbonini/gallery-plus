import type { PhotoResponse } from "@/models/photo";
import { fetcher } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function usePhoto(id?: string) {
  const { data, isLoading } = useQuery<PhotoResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });

  return {
    photo: data,
    isLoadingPhoto: isLoading,
    previousPhotoId: data?.previousPhotoId,
    nextPhoto: data?.nextPhotoId,
  };
}
