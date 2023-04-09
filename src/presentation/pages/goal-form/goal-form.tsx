/* eslint-disable quotes */
import React, { useState, useRef } from 'react'
import { Col, Row, TextArea, Datepicker } from '@/presentation/components'
import { useOnClickOutside } from '@/presentation/hooks'
import { StyledPointWrapper } from './styled'
import { InputFloatingLabel } from '@/presentation/components/input-floating-label/input-floating-label'
import { FaChevronCircleRight, FaInfoCircle } from 'react-icons/fa'
import { format } from 'date-fns'
import personSVG from './person.svg'
import pt from 'date-fns/locale/pt-BR'
import { type Step, Stepper } from '@/presentation/components/steps/steps'

export const GoalForm: React.FunctionComponent = () => {
  const [pickerCTRL, setpickerCTRL] = useState({
    startOpen: false,
    endOpen: false,
  })
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()
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
    setpickerCTRL({
      startOpen: false,
      endOpen: false,
    })
  })

  const datePlaceholder = 'Selecione a data'

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
          <Row>
            <Col>
              <form>
                <Row>
                  <Col>
                    <InputFloatingLabel
                      data-testid="input-goal-name"
                      label="Nome do objetivo a ser alcançado"
                      autoComplete="off"
                    />
                  </Col>
                </Row>

                <div className="flex mb-6">
                  <div className="flex justify-end pr-4">
                    <StyledPointWrapper
                      data-testid="pointA"
                      background="rgb(255, 255, 204)"
                    >
                      A
                    </StyledPointWrapper>
                  </div>
                  <div className="w-full">
                    <div className="flex gap-2">
                      {pickerCTRL.startOpen ? (
                        <Datepicker
                          selected={startDate}
                          onChange={(date: Date) => {
                            setStartDate(date)
                            setpickerCTRL({
                              ...pickerCTRL,
                              startOpen: false,
                            })
                          }}
                        />
                      ) : (
                        <span
                          data-testid="start-date-label"
                          className="cursor-pointer hover:text-blue-600"
                          onClick={() => {
                            setpickerCTRL({
                              ...pickerCTRL,
                              endOpen: true,
                            })
                          }}
                        >
                          {startDate
                            ? format(startDate, "dd 'de' MMMM 'de' yyyy", {
                                locale: pt,
                              })
                            : datePlaceholder}
                        </span>
                      )}
                      <FaInfoCircle color="#999" />
                    </div>
                    <TextArea
                      data-testid="start-description"
                      placeholder="Descreva a situação atual"
                      rows={5}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex justify-end pr-4">
                    <StyledPointWrapper
                      data-testid="pointB"
                      background="rgb(140, 198, 63)"
                    >
                      B
                    </StyledPointWrapper>
                  </div>
                  <Col size={2}>
                    <div className="flex gap-2">
                      {pickerCTRL.endOpen ? (
                        <Datepicker
                          selected={endDate}
                          onChange={(date: Date) => {
                            setEndDate(date)
                            setpickerCTRL({
                              ...pickerCTRL,
                              endOpen: false,
                            })
                          }}
                        />
                      ) : (
                        <span
                          data-testid="end-date-label"
                          className="cursor-pointer hover:text-blue-600"
                          onClick={() => {
                            setpickerCTRL({
                              ...pickerCTRL,
                              endOpen: true,
                            })
                          }}
                        >
                          {endDate
                            ? format(startDate, "dd 'de' MMMM 'de' yyyy", {
                                locale: pt,
                              })
                            : datePlaceholder}
                        </span>
                      )}
                      <FaInfoCircle color="#999" />
                    </div>
                    <TextArea
                      data-testid="end-description"
                      placeholder="Descreva a situação final"
                      rows={5}
                    />
                  </Col>
                </div>
                <div className="flex w-full pl-14">
                  <Col>
                    <button
                      disabled
                      data-testid="next-step-button"
                      className="bg-green-600 border disabled:bg-gray-300 disabled:cursor-not-allowed border-gray-200 transition-colors hover:bg-green-700 align-middle text-white py-2 px-4 rounded inline-flex h-12 items-center w-full gap-2"
                    >
                      <FaChevronCircleRight />
                      <span>Avançar</span>
                    </button>
                  </Col>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
