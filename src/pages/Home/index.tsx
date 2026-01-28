import Album from "@/components/Album";
import Container from "@/components/Container";
import List from "@/components/List";

export default function Home() {
  return (
    <Container>
      <Album
        albums={[
          { id: "1", title: "Album 1" },
          { id: "2", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ]}
      />
      <List
        photos={[
          {
            id: "1",
            title: "Olá munsdo",
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
