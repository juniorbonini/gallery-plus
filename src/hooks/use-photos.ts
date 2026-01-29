import type { Photo } from "@/models/photo";
import { fetcher } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { createSerializer, useQueryState, parseAsString } from "nuqs";

const toSearchParams = createSerializer({
  albumId: parseAsString,
});

export function usePhotos() {
  const [albumId, setAlbumId] = useQueryState("albumId");
  const { data, isLoading } = useQuery<Photo[]>({
    queryKey: ["photos", albumId],
    queryFn: () => fetcher(`/photos${toSearchParams({ albumId })}`),
  });

  return {
    photos: data || [],
    isLoadingPhoto: isLoading,
    filters: {
      albumId,
      setAlbumId,
    },
  };
}
