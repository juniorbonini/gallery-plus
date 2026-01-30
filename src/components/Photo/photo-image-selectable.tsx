import React from "react";
import InputCheckbox from "@/components/InputCheckbox";
import ImageFilePreview from "@/components/ImageFilePreview";
import {
  photoImageSelectVariants,
  type PhotoImageSelectable,
} from "@/models/photo";

export default function PhotoImageSelect({
  className,
  selected,
  onSelectImage,
  ...props
}: PhotoImageSelectable) {
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
        className="absolute top-1 left-1"
        defaultChecked={isSelected}
        onChange={handleSelect}
      />
      <ImageFilePreview {...props} />
    </label>
  );
}
