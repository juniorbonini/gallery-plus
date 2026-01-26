import Button from "@/components/Button";
import InputText from "@/components/InputText";
import Text from "@/components/Text";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "@/assets/icons/search.svg?react";
import InputCheckbox from "@/components/InputCheckbox";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
