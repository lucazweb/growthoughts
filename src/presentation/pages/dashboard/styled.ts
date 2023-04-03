import tw from 'tailwind-styled-components'

export const DashboardHeader = tw.div`
  p-2
  flex
  flex-col
  gap-2
  mt-8
`

export const IntroContent = tw.div`
  flex
  flex-col
  items-center
  w-full
  justify-center
`
export const IntroTitle = tw.h1`
  text-3xl
  font-normal
  text-gray-800
  mb-4
`

export const SubTitle = tw.h3`
  font-normal
  text-gray-800
`

export const ImageWrapper = tw.div`
  flex
  justify-center
  w-full
  m-12  
`

export const StartButton = tw.button`
  border
  border-gray-200
  hover:bg-yellow-400
  hover:animate-pulse
  align-middle
  text-gray-800
  transition-colors
  ease-in
  text-3xl
  font-normal
  py-2
  px-4
  justify-center
  rounded-2xl
  inline-flex
  h-20
  items-center
  w-full
  gap-2
  bg-yellow-500
`
