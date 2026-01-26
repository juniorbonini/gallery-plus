import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Text className="text-accent-brand" variant="paragraph-large">
        Gallery Plus
      </Text>
      <Button>
        <Text>Próxima imagem</Text>
      </Button>
    </>
  );
}

export default App;
