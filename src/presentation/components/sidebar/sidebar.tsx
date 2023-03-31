import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { UserCard } from '@/presentation/components/user-card/user-card'
import { SidebarContent, SidebarWrapper } from './styled'

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <UserCard
        user={{
          image: 'https://randomuser.me/api/portraits/women/54.jpg',
          name: 'Katia Lemos',
          role: 'UI Designer',
        }}
      />
      <SidebarContent>
        <button className="bg-white border border-gray-200 hover:bg-gray-100 align-middle text-gray-600 font-bold py-2 px-4 rounded inline-flex h-12 items-center w-full gap-2">
          <FaPlus />
          <span>Adicionar nova meta</span>
        </button>
      </SidebarContent>
    </SidebarWrapper>
  )
}
