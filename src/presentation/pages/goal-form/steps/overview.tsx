import React, { useContext } from "react"
import { Col, Row } from "react-flexbox-grid"
import { format, parseISO } from "date-fns"
import Context from "@/presentation/contexts/form-context"
import { Step } from "@/domain/models/goal"
import { Title, TitleBackground } from "@/presentation/components"
import { GoalFormState } from "../goal-form"
import pt from "date-fns/locale/pt-BR"

export const Overview = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  const handleDecision = (list: Step[]) => {
    setState({
      ...state,
      goal: {
        ...state.goal,
        actions: list,
      },
    })
  }

  return (
    <Row>
      <Col md={12}>
        <Row className="mb-4">
          <Col md={12}>
            <Title>{state.goal.name}</Title>
            <TitleBackground>
              Estado inicial,{" "}
              {format(
                parseISO(state.goal.start.date),
                "dd 'de' MMMM 'de' yyyy",
                {
                  locale: pt,
                }
              )}
            </TitleBackground>
            <p className="pl-3">{state.goal.start.description}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <TitleBackground>
              Estado desejado,{" "}
              {format(parseISO(state.goal.end.date), "dd 'de' MMMM 'de' yyyy", {
                locale: pt,
              })}
            </TitleBackground>
            <p className="pl-3">{state.goal.end.description}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <TitleBackground>Decisões</TitleBackground>
            <ul className="list-disc list-inside">
              {state.goal.decisions.map((d) => (
                <li>{d.name}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <TitleBackground>Ações táticas</TitleBackground>
            <ul className="list-disc list-inside">
              {state.goal.actions.map((action) => (
                <li>{action.name}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <TitleBackground>Métricas de sucesso</TitleBackground>
            <ul className="list-disc list-inside">
              {state.goal.successMetrics.map((metric) => (
                <li>
                  {format(parseISO(metric.date), "dd 'de' MMMM 'de' yyyy", {
                    locale: pt,
                  })}
                  {" - "} {metric.name}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
