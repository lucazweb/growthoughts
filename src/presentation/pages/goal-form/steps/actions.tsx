import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { type GoalFormState } from '../goal-form'
import { type Step } from '@/domain/models/goal'
import { Col, Row } from 'react-flexbox-grid'
import { ListMaker } from '@/presentation/components/list-maker/list-maker'

export const Actions = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  const handleDecision = (list: Step[]) => {
    setState({
      ...state,
      goal: {
        ...state.goal,
        decisions: list,
      },
    })
  }

  return (
    <Row>
      <Col md={12}>
        <ListMaker
          list={state.goal.decisions}
          inputPlaceholder="Quer ações táticas precisa tomar?"
          handleUpdate={handleDecision}
        />
      </Col>
    </Row>
  )
}
