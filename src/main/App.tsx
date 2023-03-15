import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'

const Temp = () => (
  <div className="shadow-md">
    <h2 className="bg-red-900 text-white">I'm a React Component </h2>
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    Component: Temp,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
