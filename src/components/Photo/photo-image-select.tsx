import {
  photoImageSelectVariants,
  type PhotoImageSelect,
} from "@/models/photo";
import React from "react";
import InputCheckbox from "../InputCheckbox";
import ImageFilePreview from "../ImageFilePreview";

export default function PhotoImageSelect({
  className,
  selected,
  onSelectImage,
  ...props
}: PhotoImageSelect) {
  const [isSelected, setIsSelected] = React.useState(selected);

  function handleSelect() {
    const newValue = !isSelected;

    setIsSelected(newValue);
    onSelectImage?.(newValue);
  }

  return (
    <label
      className={photoImageSelectVariants({ select: isSelected, className })}
    >
      <InputCheckbox
        size="sm"
        onChange={handleSelect}
        className="absolute top-1 left-1"
      />
      <ImageFilePreview {...props} />
    </label>
  );
}
