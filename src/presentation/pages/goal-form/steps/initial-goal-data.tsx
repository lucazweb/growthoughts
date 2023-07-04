/* eslint-disable quotes */
import React, { useContext } from "react"
import { Row, Col } from "react-flexbox-grid"
import { InputFloatingLabel } from "@/presentation/components/input-floating-label/input-floating-label"
import Context from "@/presentation/contexts/form-context"
import { StageForm } from "@/presentation/components/stage-form/stage-form"
import { GoalFormState } from "../goal-form"
import { addDays, addYears, parse, parseISO, subDays } from "date-fns"

export const InitialGoalData = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  return (
    <>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={12}>
              <InputFloatingLabel
                data-testid="input-goal-name"
                label="Nome do objetivo a ser alcançado"
                autoComplete="off"
                isLarge
                value={state.goal.name}
                onChange={(e) => {
                  setState({
                    ...state,
                    goal: {
                      ...state.goal,
                      name: e.target.value,
                    },
                  })
                }}
              />
            </Col>
          </Row>
          <StageForm
            state={state}
            includeDateIntervals={[
              { start: subDays(new Date(), 1), end: addYears(new Date(), 2) },
            ]}
            stage="start"
            color="#fac7c7"
            setState={setState}
          />
          <StageForm
            includeDateIntervals={[
              {
                start: addDays(parseISO(state.goal.start.date), 1),
                end: addYears(parseISO(state.goal.start.date), 2),
              },
            ]}
            state={state}
            stage="end"
            color="#669966"
            setState={setState}
          />
        </Col>
      </Row>
    </>
  )
}
