import type { Album } from "@/models/album";
import { fetcher } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useAlbums() {
  const { data, isLoading } = useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn: () => fetcher("/albums"),
  });

  return {
    albums: data || [],
    isLoadingAlbum: isLoading,
  };
}
