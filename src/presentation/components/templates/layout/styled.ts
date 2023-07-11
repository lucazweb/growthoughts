import tw from 'tailwind-styled-components'

export const LayoutWrapper = tw.div`
  flex 
  min-h-screen 
  flex-row 
 
`
export const MainWrapper = tw.div`
  main 
  flex 
  flex-grow 
  flex-col 
  transition-all 
  duration-150 
  ease-in
  md:ml-0
  md:p-4 
`
export const Content = tw.div`
  flex 
  h-full
  pl-6
`
