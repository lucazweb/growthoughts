import React from "react"
import { useSelector } from "react-redux"
import personSVG from "./person.svg"
import { RootState } from "@/infra/redux"
import { Row, Col } from "react-flexbox-grid"
import {
  DashboardHeader,
  ImageWrapper,
  IntroContent,
  StartButton,
  IntroTitle,
  SubTitle,
} from "./styled"
import { CardProgress, Title } from "@/presentation/components"
import { parseISO } from "date-fns"

const Placeholder = () => (
  <>
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
  </>
)

export const Dashboard: React.FunctionComponent = () => {
  const goals = useSelector(({ goalSlice }: RootState) => goalSlice.list)

  return (
    <Row start="md" data-testid="dashboard-page">
      <Col md={12}>
        {!goals.length ? (
          <Placeholder />
        ) : (
          <Row start="md">
            <Col md={12}>
              <Title> Suas metas</Title>
              <div className="flex w-full gap-6">
                {goals.map((goal) => (
                  <CardProgress
                    title={goal.name}
                    endDate={parseISO(goal.end.date)}
                    percentage={0}
                  />
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  )
}
