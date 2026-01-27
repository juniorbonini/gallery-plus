import {
  imageFilePreviewImageVariants,
  imageFilePreviewVariants,
  type ImageFilePreviewInterface,
} from "@/models/image-file-preview";

export default function ImageFilePreview({
  src,
  className,
  imageClassName,
  ...props
}: ImageFilePreviewInterface) {
  return (
    <div className={imageFilePreviewVariants({ className })}>
      <img
        className={imageFilePreviewImageVariants({ className: imageClassName })}
        src={src}
        {...props}
      />
    </div>
  );
}
