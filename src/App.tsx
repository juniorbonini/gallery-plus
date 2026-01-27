import cn from "classnames";
import { useForm } from "react-hook-form";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "@/assets/icons/search.svg?react";

// @ts-expect-error: module declaration for SVG React import
import Xicon from "@/assets/icons/x.svg?react";

import Text from "@/components/Text";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import InputCheckbox from "@/components/InputCheckbox";
import InputSingleFile from "./components/InputSingleFile";
import ImageFilePreview from "./components/ImageFilePreview";
import Card from "./components/Card";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./components/Dialog";
import Alert from "./components/Alert";

function App() {
  const form = useForm();
  const file = form.watch("file");
  const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;
  return (
    <div className="p-5">
      <Text className="text-accent-brand" variant="paragraph-large">
        Gallery Plus
      </Text>
      <Button>
        <Text>Próxima imagem</Text>
      </Button>

      <InputText placeholder="Buscar foto" icon={SearchIcon} />

      <div>
        <InputCheckbox />
      </div>
      <div>
        <InputSingleFile
          allowedExtensions={["png", "jpg", "jpeg", "webp"]}
          maxFileInMb={50}
          form={form}
          {...form.register("file")}
          replaceBy={<ImageFilePreview src={fileSource} />}
        />
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Abrir modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="text-accent-paragraph">
              <Text variant="heading-medium">Adicionar foto</Text>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-4">
              <InputText placeholder="Adicione um titúlo" />
              <Alert>
                <Text variant="paragraph-medium" className="text-white">
                  Tamanho máximo: 50MB
                <br />
                Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP ou SVG
                </Text>
              </Alert>
              <InputSingleFile
                allowedExtensions={["png", "jpg", "jpeg", "webp"]}
                maxFileInMb={50}
                form={form}
                replaceBy={<ImageFilePreview src={fileSource} alt="Imagem" />}
                {...form.register("file")}
              />
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancelar</Button>
              </DialogClose>
              <Button>Adicionar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
