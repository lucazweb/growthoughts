import React, { type PropsWithChildren } from "react"
import { FaPlus } from "react-icons/fa"
import { Content, LayoutWrapper, MainWrapper } from "./styled"
import { Sidebar } from "@/presentation/components"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper>
      <Sidebar>
        <button className="bg-white border border-gray-200 hover:bg-gray-100 align-middle text-gray-600 font-bold py-2 px-4 rounded inline-flex h-12 items-center w-full gap-2">
          <FaPlus />
          <span>Adicionar nova meta</span>
        </button>
      </Sidebar>

      <MainWrapper>
        <Content>{children}</Content>
      </MainWrapper>
    </LayoutWrapper>
  )
}
