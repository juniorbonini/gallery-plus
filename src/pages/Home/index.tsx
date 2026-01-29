import AlbumFiltered from "@/components/Album";
import Container from "@/components/Container";
import List from "@/components/List";
<<<<<<< HEAD
import { useAlbums } from "@/hooks/use-album";
import type { Album } from "@/models/album";

export default function Home() {
  const { isLoadingAlbums } = useAlbums();

  //Apenas para dados mockados...
  const albums: Album[] = [
    { id: "1", title: "Natureza" },
    { id: "2", title: "Viagem" },
    { id: "3", title: "Fotografia" },
    { id: "4", title: "Arquitetura" },
  ];
  return (
    <Container>
      <AlbumFiltered albums={albums} loading={isLoadingAlbums} />
=======
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";

export default function Home() {
  const {albums, isLoadingAlbum} = useAlbums();
  const { photos, isLoadingPhoto } = usePhotos();
  return (
    <Container>
      <Album
        albums={albums}
        loading={isLoadingAlbum}
      />
>>>>>>> b582362 (fix: corrige envio de imagem para API)
      <List
        photos={photos}
        loading={isLoadingPhoto}
      />
    </Container>
  );
}
