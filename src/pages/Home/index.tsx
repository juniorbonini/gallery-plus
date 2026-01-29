import AlbumFiltered from "@/components/Album/album-filtered";
import Container from "@/components/Container";
import List from "@/components/List";
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";

export default function Home() {
  const {albums, isLoadingAlbum} = useAlbums();
  const { photos, isLoadingPhoto } = usePhotos();
  return (
    <Container>
      <AlbumFiltered
        albums={albums}
        loading={isLoadingAlbum}
      />
      <List
        photos={photos}
        loading={isLoadingPhoto}
      />
    </Container>
  );
}
