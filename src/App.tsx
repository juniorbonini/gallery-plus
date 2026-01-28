import { BrowserRouter, Routes, Route } from "react-router";

import Home from "@/pages/Home";
import LayoutMain from "@/pages/Layout";
import PagePhoto from "@/pages/Photo";
import PageComponents from "@/pages/Components/page-components";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/components" element={<PageComponents />} />
          <Route path="/fotos/:id" element={<PagePhoto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
