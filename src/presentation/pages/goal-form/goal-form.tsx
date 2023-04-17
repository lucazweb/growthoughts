/* eslint-disable quotes */
import React, { useState, useRef } from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import { Row, Col, Grid } from 'react-flexbox-grid'
import { type Step, Stepper } from '@/presentation/components/steps/steps'
import { type Goal } from '@/domain/models/goal'
import { useOnClickOutside } from '@/presentation/hooks'
import Context from '@/presentation/contexts/form-context'

import stepData, { INITIAL_STEPS } from './steps'

export const GoalForm: React.FunctionComponent = () => {
  const [state, setState] = useState<GoalFormState>({
    pickerCTRL: {
      startOpen: false,
      endOpen: false,
    },
    steps: INITIAL_STEPS,
    goal: {
      start: {
        date: undefined,
      },
      end: {
        date: undefined,
      },
      decisions: [],
      successMetrics: [],
    },
  })

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

  return (
    <Grid>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={12}>
              <Stepper
                steps={state.steps}
                onClick={(step) => {
                  setState({
                    ...state,
                    steps: state.steps.map((s) => ({
                      ...s,
                      isCurrent: s.order === step.order,
                    })),
                  })
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={7}>
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
            <Col md={5}>
              <Context.Provider
                value={{
                  state,
                  setState,
                }}
              >
                <form>
                  <div
                    style={{ height: '70vh' }}
                    className="flex flex-col justify-between"
                  >
                    {current.form}
                    <div className="flex w-full pl-14">
                      <div className="flex w-full">
                        <button
                          disabled
                          data-testid="next-step-button"
                          className="bg-green-600 border disabled:bg-gray-300 disabled:cursor-not-allowed border-gray-200 transition-colors hover:bg-green-700 align-middle text-white py-2 px-4 rounded inline-flex h-12 items-center w-full gap-2"
                        >
                          <FaChevronCircleRight />
                          <span>Avançar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </Context.Provider>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

interface GoalAdapter extends Partial<Omit<Goal, 'start' | 'end'>> {
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
