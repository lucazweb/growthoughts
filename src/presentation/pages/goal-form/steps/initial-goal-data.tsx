/* eslint-disable quotes */
import React, { useContext } from "react"
import { InputFloatingLabel } from "@/presentation/components/input-floating-label/input-floating-label"
import Context from "@/presentation/contexts/form-context"
import { DynamicTitle, GoalFormState } from "../goal-form"
import { Row, Col } from "react-flexbox-grid"
import { StageForm } from "@/presentation/components/stage-form/stage-form"

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
              <DynamicTitle
                content={
                  !state.goal.name && (
                    <span>
                      Insira um nome para o seu objetivo de sucessso, e descreva
                      a<strong className="text-red-800"> situação atual</strong>
                      , e<strong className="text-green-700"> desejada</strong>{" "}
                      ...
                    </span>
                  )
                }
                goalName={state.goal.name}
              />
              <InputFloatingLabel
                data-testid="input-goal-name"
                label="Nome do objetivo a ser alcançado"
                autoComplete="off"
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
            stage="start"
            color="#fac7c7"
            setState={setState}
          />
          <StageForm
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
