import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { DynamicTitle, type GoalFormState } from '../goal-form'
import { type Metric } from '@/domain/models/goal'
import { Col, Row } from 'react-flexbox-grid'
import { ListDateMaker } from '@/presentation/components/list-date-maker/list-date-maker'

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
          list={state.goal.successMetrics}
          inputPlaceholder="Nome da métrica"
          handleUpdate={handleMetrics}
          isCheckList
        />
      </Col>
    </Row>
  )
}
