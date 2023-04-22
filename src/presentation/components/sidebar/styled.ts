import tw from 'tailwind-styled-components'

export const SidebarWrapper = tw.aside`
  hidden 
  md:flex
  w-1/5
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
