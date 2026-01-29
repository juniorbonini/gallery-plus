import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "@/pages/Home";
import LayoutMain from "@/pages/Layout";
import PagePhoto from "@/pages/Photo";
import PageComponents from "@/pages/Components/page-components";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="/components" element={<PageComponents />} />
          <Route path="/fotos/:id" element={<PagePhoto />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}
