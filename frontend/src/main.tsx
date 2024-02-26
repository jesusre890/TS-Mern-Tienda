import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import axios from "axios";

//axios.defaults.baseURL =
//  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
