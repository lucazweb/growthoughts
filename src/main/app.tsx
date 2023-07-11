import React from "react"
import { ReduxProvider } from "@/infra/redux/provider"
import Router from "./router"
import "./global.css"

export default function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  )
}
