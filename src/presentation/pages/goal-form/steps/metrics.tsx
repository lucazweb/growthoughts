import React, { useContext } from "react"
import { Col, Row } from "react-flexbox-grid"
import Context from "@/presentation/contexts/form-context"
import { DynamicTitle, GoalFormState } from "../goal-form"
import { Metric } from "@/domain/models/goal"
import { ListDateMaker } from "@/presentation/components/list-date-maker/list-date-maker"
import { parseISO } from "date-fns"

export const Metrics = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  const handleMetrics = (list: Metric[]) => {
    setState({
      ...state,
      goal: {
        ...state.goal,
        successMetrics: list,
      },
    })
  }

  return (
    <Row>
      <Col md={12}>
        <DynamicTitle
          content={
            <span>
              Quais <strong>datas</strong> e <strong>conquistas</strong> são
              importantes para medir
            </span>
          }
          goalName={state.goal.name}
          isQuestion
        />
      </Col>
      <Col md={12}>
        <ListDateMaker
          includeDateIntervals={[
            {
              start: parseISO(state.goal.start.date),
              end: parseISO(state.goal.end.date),
            },
          ]}
          list={state.goal.successMetrics}
          inputPlaceholder="Nome da métrica"
          handleUpdate={handleMetrics}
          isCheckList
        />
      </Col>
    </Row>
  )
}
