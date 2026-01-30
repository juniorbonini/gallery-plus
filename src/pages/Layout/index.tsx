import { Outlet } from "react-router";

import Content from "@/components/Content";
import MainHeader from "@/components/MainHeader";

export default function LayoutMain() {
  return (
    <div className="mt-6">
      <MainHeader />
     <Content>
       <Outlet />
     </Content>
    </div>
  );
}
