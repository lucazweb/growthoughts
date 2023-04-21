import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form-context'
import { DynamicTitle, type GoalFormState } from '../goal-form'
import { type Step } from '@/domain/models/goal'
import { Col, Row } from 'react-flexbox-grid'
import { ListMaker } from '@/presentation/components/list-maker/list-maker'

export const Decisions = () => {
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
        <DynamicTitle
          content={
            <span>
              Que <strong>decisões</strong> precisa tomar para realizar o
              objetivo..
            </span>
          }
          goalName={state.goal.name}
          isQuestion
        />
      </Col>
      <Col md={12}>
        <ListMaker
          list={state.goal.decisions}
          inputPlaceholder="Quer decisão precisa tomar?"
          handleUpdate={handleDecision}
          isCheckList
        />
      </Col>
    </Row>
  )
}
