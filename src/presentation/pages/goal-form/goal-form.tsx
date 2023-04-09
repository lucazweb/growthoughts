/* eslint-disable quotes */
import React, { useState, useRef } from 'react'
import { type Step, Stepper } from '@/presentation/components/steps/steps'
import { useOnClickOutside } from '@/presentation/hooks'
import Context from '@/presentation/contexts/form-context'

import personSVG from './person.svg'
import { InitialGoalData } from './steps/initial-goal-data'

export type GoalFormState = {
  pickerCTRL: {
    startOpen: boolean
    endOpen: boolean
  }
  goal: {
    startDate?: Date
    endDate?: Date
  }
}

export const GoalForm: React.FunctionComponent = () => {
  const [state, setState] = useState<GoalFormState>({
    pickerCTRL: {
      startOpen: false,
      endOpen: false,
    },
    goal: {
      startDate: undefined,
      endDate: undefined,
    },
  })

  // const [pickerCTRL, setpickerCTRL] = useState({
  //   startOpen: false,
  //   endOpen: false,
  // })
  // const [startDate, setStartDate] = useState<Date | undefined>()
  // const [endDate, setEndDate] = useState<Date | undefined>()
  const [steps, setSteps] = useState<Step[]>([
    {
      order: 1,
      title: 'Informações iniciais',
      isComplete: true,
    },
    {
      order: 2,
      title: 'Decisões',
      isComplete: false,
      isCurrent: true,
    },
    {
      order: 3,
      title: 'Ações táticas',
      isComplete: false,
    },
    {
      order: 4,
      title: 'Métricas',
      isComplete: false,
    },
  ])

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

  return (
    <div>
      <Stepper
        steps={steps}
        onClick={(step, steps) => {
          setSteps(
            steps.map((s) => ({
              ...s,
              isCurrent: s.order === step.order,
            }))
          )
        }}
      />
      <div className="flex">
        <div className="1/3">
          <div className="mx-auto w-2/3 mb-3 mt-3">
            <h1 className="text-2xl mb-12">
              <em>
                "Se não sabe aonde quer chegar, qualquer caminho serve.." mas
                não é o caso!
              </em>
            </h1>
            <img
              data-testid="initial-form-image"
              alt="montain of success"
              src={personSVG}
            />
            <h2 className="text-2xl mt-10">
              Comece detalhando a situação atual e o objetivo a ser alcançado.
            </h2>
          </div>
        </div>
        <div className="w-2/3">
          <Context.Provider
            value={{
              state,
              setState,
            }}
          >
            <InitialGoalData />
          </Context.Provider>
        </div>
      </div>
    </div>
  )
}
