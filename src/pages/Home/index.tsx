import AlbumFiltered from "@/components/Album";
import Container from "@/components/Container";
import List from "@/components/List";
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
      <List
        photos={[
          {
            id: "1",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "2",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "3",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "4",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "5",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "6",
            title: "Olá mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
