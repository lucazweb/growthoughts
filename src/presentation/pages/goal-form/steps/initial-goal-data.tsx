/* eslint-disable quotes */
import React, { useContext } from 'react'
import { Col, Row, TextArea, Datepicker } from '@/presentation/components'
import { StyledPointWrapper } from '../styled'
import { InputFloatingLabel } from '@/presentation/components/input-floating-label/input-floating-label'
import { FaChevronCircleRight, FaInfoCircle } from 'react-icons/fa'
import { format } from 'date-fns'
import Context from '@/presentation/contexts/form-context'
import pt from 'date-fns/locale/pt-BR'
import { type GoalFormState } from '../goal-form'

export const InitialGoalData = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  return (
    <>
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
                  {state.pickerCTRL.startOpen ? (
                    <Datepicker
                      open={state.pickerCTRL.startOpen}
                      selected={state.goal.startDate}
                      onChange={(date: Date) => {
                        setState({
                          ...state,
                          pickerCTRL: {
                            ...state.pickerCTRL,
                            startOpen: false,
                          },
                          goal: {
                            ...state.goal,
                            startDate: date,
                          },
                        })
                      }}
                    />
                  ) : (
                    <span
                      data-testid="start-date-label"
                      className="cursor-pointer hover:text-blue-600"
                      onClick={() => {
                        setState({
                          ...state,
                          pickerCTRL: {
                            ...state.pickerCTRL,
                            startOpen: true,
                          },
                        })
                      }}
                    >
                      {state.goal.startDate
                        ? format(
                            state.goal.startDate,
                            "dd 'de' MMMM 'de' yyyy",
                            {
                              locale: pt,
                            }
                          )
                        : 'Selecione a data'}
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
                  {state.pickerCTRL.endOpen ? (
                    <Datepicker
                      open={state.pickerCTRL.endOpen}
                      selected={state.goal.endDate}
                      onChange={(date: Date) => {
                        setState({
                          ...state,
                          pickerCTRL: {
                            ...state.pickerCTRL,
                            endOpen: false,
                          },
                          goal: {
                            ...state.goal,
                            endDate: date,
                          },
                        })
                      }}
                    />
                  ) : (
                    <span
                      data-testid="end-date-label"
                      className="cursor-pointer hover:text-blue-600"
                      onClick={() => {
                        setState({
                          ...state,
                          pickerCTRL: {
                            ...state.pickerCTRL,
                            endOpen: true,
                          },
                        })
                      }}
                    >
                      {state.goal.endDate
                        ? format(state.goal.endDate, "dd 'de' MMMM 'de' yyyy", {
                            locale: pt,
                          })
                        : "'Selecione a data'"}
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
    </>
  )
}
