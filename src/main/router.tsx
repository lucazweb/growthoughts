import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignIn } from '@/presentation/pages'

const router = createBrowserRouter([
  {
    path: '/',
    Component: SignIn,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
