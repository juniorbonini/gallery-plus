import MainHeader from "@/components/MainHeader";
import Text from "@/components/Text";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <>
      <Text variant="heading-large">Layout main</Text>
      <hr />
      <MainHeader />
      <Outlet />
    </>
  );
}
