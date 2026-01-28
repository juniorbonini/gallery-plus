import Container from "@/components/Container";
import PhotoWidget from "@/components/Photo";
import type { Photo } from "@/models/photo";

export default function Home() {
  return (
     <Container>
   <div className="flex grid-cols-4 gap-9">

      <PhotoWidget
      photo={{
        id: "1",
        title: "Olá mundo",
        imageId: "portrait-tower.png",
        albums: [
          { id: "1", title: "Album 1" },
          { id: "2", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ],
      }}
    />
      <PhotoWidget
      photo={{
        id: "2",
        title: "Olá mundo",
        imageId: "portrait-tower.png",
        albums: [
          { id: "1", title: "Album 1" },
          { id: "2", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ],
      }}
    />
      <PhotoWidget
      photo={{
        id: "3",
        title: "Olá mundo",
        imageId: "portrait-tower.png",
        albums: [
          { id: "1", title: "Album 1" },
          { id: "2", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ],
      }}
    />
      <PhotoWidget
      photo={{
        id: "4",
        title: "Olá mundo",
        imageId: "portrait-tower.png",
        albums: [
          { id: "1", title: "Album 1" },
          { id: "22", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ],
      }}
    />
      <PhotoWidget
      photo={{} as Photo}
      loading
    />
   </div>

    </Container>
  );
}
