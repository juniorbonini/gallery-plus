import type { Photo } from "@/models/photo";
import { fetcher } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function usePhotos() {
  const { data, isLoading } = useQuery<Photo[]>({
    queryKey: ["photos"],
    queryFn: () => fetcher("/photos"),
  });

  return {
    photos: data || [],
    isLoadingPhoto: isLoading,
  };
}
