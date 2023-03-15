import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <div className="shadow-md">
        <h2 className="bg-red-900 text-white">I'm a React Component </h2>
      </div>
    ),
  },
]);

export default function () {
  return <RouterProvider router={router} />;
}
