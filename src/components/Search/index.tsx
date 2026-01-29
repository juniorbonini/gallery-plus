import React from "react";
import InputText from "../InputText";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "@/assets/icons/search.svg?react";
import { debounce } from "@/utils/utils";
import { usePhotos } from "@/hooks/use-photos";

export default function Search() {
  const [inputValue, setValue] = React.useState("");
  const {filters} = usePhotos();

  const debouncedValue = React.useCallback(
    debounce((value: string) => filters.setQ( value), 1000),
    [filters.setQ],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setValue(value);
    debouncedValue(value);
    console.log(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
