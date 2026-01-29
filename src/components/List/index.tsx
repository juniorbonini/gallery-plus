import type { List } from "@/models/list";
import Text from "@/components/Text";
import Skeleton from "@/components/Skeleton";
import PhotoWidget from "@/components/Photo/photo-details";
import type { Photo } from "@/models/photo";

export default function List({photos, loading }: List) {
  return (
    <div className="space-y-6">
      <Text
        as="div"
        variant="paragraph-large"
        className="flex items-center justify-end gap-4 text-accent-span"
      >
        Total: {""}
        {!loading ? (
          <div>{photos.length}</div>
        ) : (
          <Skeleton className="w-6 h-6" />
        )}
      </Text>

      {!loading && photos.length > 0 && (
        <div className="grid grid-cols-5 gap-8">
          {photos.map((photo) => (
            <PhotoWidget photo={photo} key={photo.id} />
          ))}
        </div>
      )}
      {loading && (
        <div className="grid grid-cols-5 gap-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <PhotoWidget key={`photo-loading-${index}`} photo={{} as Photo} />
          ))}
        </div>
      )}
      {!loading && photos.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
        </div>
      )}
    </div>
  );
}
