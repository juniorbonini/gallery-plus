import AlbumFiltered from "@/components/Album/albums-filter";
import Container from "@/components/Container";
import List from "@/components/List";
import { useAlbums } from "@/hooks/use-albums";
import { usePhotos } from "@/hooks/use-photos";
import Button from "@/components/Button";
import { Link } from "react-router";

export default function Home() {
  const {albums, isLoadingAlbum} = useAlbums();
  const { photos, isLoadingPhoto } = usePhotos();
  return (
    <Container>
      <AlbumFiltered
        albums={albums}
        loading={isLoadingAlbum}
      />
      <div className="mb-6 mt-6 px-[40%]">
        <Link to="/albums">
          <Button variant="secondary">Ver todos os álbuns</Button>
        </Link>
      </div>
      <List
        photos={photos}
        loading={isLoadingPhoto}
      />
    </Container>
  );
}
