import { BrowserRouter, Routes, Route } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "@/pages/Home";
import LayoutMain from "@/pages/Layout";
import PagePhoto from "@/pages/Photo";
import PageComponents from "@/pages/Components/page-components";
import { Toaster } from "sonner";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NuqsAdapter>
        <Toaster position="bottom-center" />
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<Home />} />
              <Route path="/components" element={<PageComponents />} />
              <Route path="/fotos/:id" element={<PagePhoto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
