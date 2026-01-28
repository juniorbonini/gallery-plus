import Alert from "@/components/Alert";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ButtonIcon from "@/components/ButtonIcon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/Dialog";
import Divider from "@/components/Divider";
import ImageFilePreview from "@/components/ImageFilePreview";
import InputCheckbox from "@/components/InputCheckbox";
import InputSingleFile from "@/components/InputSingleFile";
import InputText from "@/components/InputText";

import { useForm } from "react-hook-form";
// @ts-expect-error: module declaration for SVG React import
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg?react";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "@/assets/icons/search.svg?react";
import Text from "@/components/Text";
import React from "react";



export default function PageComponents() {
  const form = useForm();
  const file = form.watch("file");
  const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;
  const [open, setOpen] = React.useState(false);

  return (
    
    <div className="grid gap-7 p-6">
      <div className="flex gap-3">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button disabled>Button</Button>
        <Button handling>Loading</Button>
        <Button icon={ChevronRightIcon}>Próxima Imagem</Button>
        <Button variant="ghost" size="sm">
          Button
        </Button>
        <Button variant="primary" size="sm">
          Button
        </Button>
      </div>


      <div className="flex gap-3">
        <ButtonIcon icon={ChevronLeftIcon} />
        <ButtonIcon icon={ChevronRightIcon} variant="secondary" />
      </div>

      <div className="flex gap-3">
        <Badge>Todos</Badge>
        <Badge>Natureza</Badge>
        <Badge>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
        <Badge loading>Viagem</Badge>
      </div>

      <div>
        <Alert>
          Tamanho máximo: 50MB
          <br />
          Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
        </Alert>
      </div>

      <div>
        <Divider />
      </div>

      <div>
        <InputText placeholder="Buscar foto" icon={SearchIcon} />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div>
        <InputSingleFile
          allowedExtensions={["png", "jpg", "jpeg", "webp"]}
          maxFileInMb={50}
          form={form}
          replaceBy={<ImageFilePreview src={fileSrc} alt="Imagem" />}
          {...form.register("file")}
        />
      </div>

      <div>
        <Dialog
          open={open}
          onOpenChange={(value) => {
            (console.log("Dialog aberto", value), setOpen(value));
          }}
        >
          <DialogTrigger asChild>
            <Button>Abrir Modal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Teste dialog</DialogHeader>
            <DialogBody>
              <Text as="div">Teste conteúdo do dialog</Text>

              <InputSingleFile
                allowedExtensions={["png", "jpg", "jpeg", "webp"]}
                maxFileInMb={50}
                form={form}
                replaceBy={<ImageFilePreview src={fileSrc} alt="Imagem" />}
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
