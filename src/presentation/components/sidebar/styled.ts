import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const StyledAside = styled.aside`
  height: 90.5vh;
`

export const SidebarWrapper = tw(StyledAside)`
  flex 
  w-1/3
  flex-col 
  space-y-2 
  border-r-2 
  border-gray-200 
  bg-white 
`

export const SidebarContent = tw.div`
  mt-4
  p-2
`
