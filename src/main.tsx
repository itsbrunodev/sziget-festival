import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "@fontsource-variable/inter";
import "@fontsource/krona-one";

import { Navbar } from "./components/navbar.tsx";
import "./index.css";
import { Index } from "./routes/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div id="app" vaul-drawer-wrapper="">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
