import React from 'react'
import personSVG from './person.svg'

import {
  DashboardHeader,
  ImageWrapper,
  IntroContent,
  StartButton,
  IntroTitle,
  SubTitle,
} from './styled'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <div data-testid="dashboard-page">
      <DashboardHeader>
        <IntroTitle>Parece que você ainda não tem planos.</IntroTitle>
        <SubTitle>Começe agora!</SubTitle>
      </DashboardHeader>
      <IntroContent>
        <ImageWrapper>
          <img data-testid="intro-image" alt="person" src={personSVG} />
        </ImageWrapper>
        <StartButton data-testid="start-button">Criar um objetivo</StartButton>
      </IntroContent>
    </div>
  )
}
