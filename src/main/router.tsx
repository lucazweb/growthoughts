import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, Dashboard } from '@/presentation/pages'
import { Layout } from '@/presentation/components/templates/layout/layout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
