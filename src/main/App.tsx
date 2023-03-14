import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <h2>Im a React Component </h2>,
  },
]);

export default function () {
  return <RouterProvider router={router} />;
}
