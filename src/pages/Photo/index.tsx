import { useParams } from "react-router";

import Text from "@/components/Text";

export default function PagePhoto() {
  const { id } = useParams();
  return (
    <>
      <Text variant="heading-medium">Página detalhe da foto</Text>
      <hr />
      <Text variant="heading-medium">ID da foto: {id}</Text>
    </>
  );
}
