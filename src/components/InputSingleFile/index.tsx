import {
  inputSingleFileIconVariants,
  inputSingleFileVariants,
  type InputSingleFileInterface,
} from "@/models/input-single-file";
import Icon from "@/components/Icon";
import Text from "@/components/Text";

// @ts-expect-error: module declaration for SVG React import
import UpdateFileIcon from "@/assets/icons/upload-file.svg?react";
// @ts-expect-error: module declaration for SVG React import
import FileImageIcon from "@/assets/icons/image.svg?react";
import { textVariants } from "@/models/text";

export default function InputSingleFile({
  size,
  error,
}: InputSingleFileInterface) {
  return (
    <div>
      <div className="w-full relative group cursor-pointer">
        <input
          type="file"
          className={`absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer`}
        />
        <div className={inputSingleFileVariants({ size })}>
          <Icon
            className={inputSingleFileIconVariants({ size })}
            svg={UpdateFileIcon}
          />
          <Text variant="label-medium" className="text-placeholder text-center">
            Arraste o arquivo aqui <br /> ou clique para selecionar
          </Text>
        </div>
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          Erro no campo
        </Text>
      )}

      <div className="flex gap-3 items-center border border-solid border-border-primary mt-5 p-3 rounded">
        <Icon svg={FileImageIcon} className="fill-white w-6 h-6" />
        <div className="flex flex-col">
          <div className="truncate max-w-80 ">
            <Text variant="label-medium" className="text-placeholder">
              Nome do arquivo.png
            </Text>
          </div>
          <div className="flex">
            <button
              type="button"
              className={textVariants({
                variant: "label-small",
                className: "text-accent-red cursor-pointer hover:underline",
              })}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
