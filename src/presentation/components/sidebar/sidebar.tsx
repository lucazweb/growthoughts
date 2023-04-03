import React, { type PropsWithChildren } from 'react'

import { UserCard } from '@/presentation/components/user-card/user-card'
import { SidebarContent, SidebarWrapper } from './styled'

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <SidebarWrapper data-testid="sidebar" style={{ height: '90.5vh' }}>
      <UserCard
        user={{
          image: 'https://randomuser.me/api/portraits/women/54.jpg',
          name: 'Katia Lemos',
          role: 'UI Designer',
        }}
      />
      <SidebarContent>{children}</SidebarContent>
    </SidebarWrapper>
  )
}
