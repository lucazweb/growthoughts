import styled, { keyframes } from 'styled-components'

const Saturate = keyframes`
  from {
    filter: saturate(0.5);
  }
  to {
    filter: saturate(1.3);
  }
`

interface StyledWrapperProps {
  background: string
}
export const StyledPointWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-weight: bold;
  border: 3px solid #333;
  background: ${({ background }: StyledWrapperProps) =>
    background || '#f3f3f3'};
  // animation: ${Saturate} 2s ease-in-out 0s infinite;
`
