import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp } from '@/presentation/pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
