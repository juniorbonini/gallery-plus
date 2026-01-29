import type { Photo } from "@/models/photo";
import { fetcher } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { createSerializer, useQueryState, parseAsString } from "nuqs";

const toSearchParams = createSerializer({
  albumId: parseAsString,
  q: parseAsString,
});

export function usePhotos() {
  const [albumId, setAlbumId] = useQueryState("albumId");
  const [q, setQ] = useQueryState("q");
  const { data, isLoading } = useQuery<Photo[]>({
    queryKey: ["photos", albumId, q],
    queryFn: () => fetcher(`/photos${toSearchParams({ albumId, q })}`),
  });

  return {
    photos: data || [],
    isLoadingPhoto: isLoading,
    filters: {
      albumId,
      setAlbumId,
      q, 
      setQ,
    },
  };
}
