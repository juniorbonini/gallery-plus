import Text from "@/components/Text";
import type { List } from "@/models/list";
import type { Photo } from "@/models/photo";
import Skeleton from "@/components/Skeleton";
import PhotoWidget from "@/components/Photo/photo-widget";

export default function List({photos, loading }: List) {
   return (
    <div className="space-y-6">
      <Text
        as="div"
        variant="paragraph-large"
        className="flex items-center justify-end gap-1 text-accent-span"
      >
        Total:{" "}
        {!loading ? (
          <div>{photos.length}</div>
        ) : (
          <Skeleton className="w-6 h-6" />
        )}
      </Text>

      {!loading && photos.length > 0 && (
        <div className="grid grid-cols-5 gap-9">
          {photos.map((photo) => (
            <PhotoWidget photo={photo} key={photo.id} />
          ))}
        </div>
      )}
      {loading && (
        <div className="grid grid-cols-5 gap-9">
          {Array.from({ length: 10 }).map((_, index) => (
            <PhotoWidget
              key={`photo-loading-${index}`}
              loading
              photo={{} as Photo}
            />
          ))}
        </div>
      )}
      {!loading && photos.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
        </div>
      )}
    </div>
  );
}