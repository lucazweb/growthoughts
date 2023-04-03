import tw from 'tailwind-styled-components'

export const LayoutWrapper = tw.div`
  flex 
  min-h-screen 
  flex-row 
  bg-gray-100 
  text-gray-800"
`
export const MainWrapper = tw.div`
  main 
  -ml-48 
  flex 
  flex-grow 
  flex-col 
  p-4 
  transition-all 
  duration-150 
  ease-in 
  md:ml-0
`
export const Content = tw.div`
  flex 
  h-full 
  justify-center 
  bg-white 
  text-center 
  text-5xl 
  font-bold 
  shadow-md
`
