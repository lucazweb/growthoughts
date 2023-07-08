import React, { useState, useRef } from "react"
import { FaChevronCircleRight } from "react-icons/fa"
import { Row, Col, Grid } from "react-flexbox-grid"
import { Step, Stepper } from "@/presentation/components/steps/steps"
import { Goal } from "@/domain/models/goal"
import { useOnClickOutside } from "@/presentation/hooks"
import Context from "@/presentation/contexts/form-context"

import stepData, { INITIAL_STEPS } from "./steps"
import { Card } from "@/presentation/components"

const INITIAL_FORM_STATE = {
  pickerCTRL: {
    startOpen: false,
    endOpen: false,
  },
  steps: INITIAL_STEPS,
  goal: {
    name: "",
    start: {
      date: undefined,
      description: "Estado inicial",
    },
    end: {
      date: undefined,
      description: "Estado final",
    },
    decisions: [],
    actions: [],
    successMetrics: [],
  },
}

export const GoalForm: React.FunctionComponent = () => {
  const [state, setState] = useState<GoalFormState>(INITIAL_FORM_STATE)

  const ref = useRef()

  useOnClickOutside(ref, () => {
    setState({
      ...state,
      pickerCTRL: {
        startOpen: false,
        endOpen: false,
      },
    })
  })

  const current = stepData[state.steps.find((s) => s.isCurrent).order]
  const isButtonDisabled =
    !state.goal.name ||
    !state.goal.start.date ||
    !state.goal.start.description ||
    !state.goal.end.date ||
    !state.goal.end.description

  const handleStep = (step: Step) => {
    setState({
      ...state,
      steps: state.steps.map((s) => ({
        ...s,
        isCurrent: s.order === step.order,
      })),
    })
  }

  const isLastStep = (steps: Step[], step: Step) => {
    return (
      steps.lastIndexOf(step) === steps.indexOf(steps[state.steps.length - 1])
    )
  }

  const currentStep = state.steps.find((s) => s.isCurrent)

  return (
    <Grid>
      <Row>
        <Col md={12}>
          <Row className="hidden md:flex">
            <Col md={12}>
              <Stepper steps={state.steps} onClick={handleStep} />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="hidden md:block">
              <div className="mx-auto w-2/3 mb-3 mt-3">
                <h1 className="text-2xl mb-12">
                  <em>{current.title}</em>
                </h1>
                <img
                  data-testid="initial-form-image"
                  alt="montain of success"
                  src={current.image}
                />
                <h2 className="text-2xl mt-10">{current.hint}</h2>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <Context.Provider
                value={{
                  state,
                  setState,
                }}
              >
                <Card>
                  <form autoComplete="off">
                    <div className="flex flex-col justify-between pl-4 pr-4">
                      {current.form}
                      <Row className="mt-6">
                        <Col md={12}>
                          <button
                            onClick={() => {
                              if (!isLastStep(state.steps, currentStep)) {
                                handleStep(
                                  state.steps.find(
                                    (s) => s.order === currentStep.order + 1
                                  )
                                )
                              }
                            }}
                            type="button"
                            disabled={isButtonDisabled}
                            data-testid="next-step-button"
                            className="bg-green-600 border disabled:bg-gray-300 disabled:cursor-not-allowed border-gray-200 transition-colors hover:bg-green-700 align-middle text-white py-2 px-4 rounded inline-flex h-12 items-center w-full gap-2"
                          >
                            {!isLastStep(state.steps, currentStep) ? (
                              <>
                                <FaChevronCircleRight /> <span>Avançar</span>
                              </>
                            ) : (
                              <span>Concluir</span>
                            )}
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </form>
                </Card>
              </Context.Provider>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

export const DynamicTitle = (props: {
  content: JSX.Element
  goalName: string
  isQuestion?: boolean
}) => {
  return (
    <h3
      style={{ fontSize: "1.4em", lineHeight: "1.6em" }}
      className="mb-4 pt-2 pb-4"
    >
      {props.content} <br />
      <strong className=" text-gray-800   ml-2 mr-2 italic bg-yellow-100">
        {props.goalName}
      </strong>
      {!!props.isQuestion && "?"}
    </h3>
  )
}

interface GoalAdapter extends Partial<Omit<Goal, "start" | "end">> {
  start?: {
    date?: string
    description?: string
  }
  end?: {
    date?: string
    description?: string
  }
}

export type GoalFormState = {
  pickerCTRL: {
    startOpen: boolean
    endOpen: boolean
  }
  steps: Step[]
  goal: GoalAdapter
}
