/* eslint-disable quotes */
import React, { useContext } from 'react'
import { TextArea, Datepicker } from '@/presentation/components'
import { StyledPointWrapper } from '../styled'
import { InputFloatingLabel } from '@/presentation/components/input-floating-label/input-floating-label'
import { FaInfoCircle } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import Context from '@/presentation/contexts/form-context'
import pt from 'date-fns/locale/pt-BR'
import { type GoalFormState } from '../goal-form'
import { Row, Col } from 'react-flexbox-grid'

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
              />
            </Col>
          </Row>

          <Row>
            <Col md={2}>
              <StyledPointWrapper
                data-testid="pointA"
                background="rgb(255, 255, 204)"
              >
                A
              </StyledPointWrapper>
            </Col>
            <Col md={10}>
              <Row>
                <Col md={12}>
                  {state.pickerCTRL.startOpen ? (
                    <Datepicker
                      data-testid="start-date-input"
                      open={state.pickerCTRL.startOpen}
                      selected={
                        state.goal.start.date
                          ? parseISO(state.goal.start.date)
                          : undefined
                      }
                      onChange={(date: Date) => {
                        setState({
                          ...state,
                          pickerCTRL: {
                            ...state.pickerCTRL,
                            startOpen: false,
                          },
                          goal: {
                            ...state.goal,
                            start: {
                              ...state.goal.start,
                              date: date.toISOString(),
                            },
                          },
                        })
                      }}
                    />
                  ) : (
                    <span
                      data-testid="start-date-label"
                      className="cursor-pointer hover:text-blue-600 flex gap-3 align-middle"
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
                      {state.goal.start.date
                        ? format(
                            parseISO(state.goal.start.date),
                            "dd 'de' MMMM 'de' yyyy",
                            {
                              locale: pt,
                            }
                          )
                        : 'Selecione a data'}
                      <FaInfoCircle color="#999" />
                    </span>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <TextArea
                    data-testid="start-description"
                    placeholder="Descreva a situação atual"
                    rows={5}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={2}>
              <StyledPointWrapper
                data-testid="pointB"
                background="rgb(140, 198, 63)"
              >
                B
              </StyledPointWrapper>
            </Col>
            <Col md={10}>
              <div className="flex gap-2">
                {state.pickerCTRL.endOpen ? (
                  <Datepicker
                    open={state.pickerCTRL.endOpen}
                    selected={
                      state.goal.end.date
                        ? parseISO(state.goal.end.date)
                        : undefined
                    }
                    onChange={(date: Date) => {
                      setState({
                        ...state,
                        pickerCTRL: {
                          ...state.pickerCTRL,
                          endOpen: false,
                        },
                        goal: {
                          ...state.goal,
                          end: {
                            ...state.goal.end,
                            date: date.toISOString(),
                          },
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
                    {state.goal.end.date
                      ? format(
                          parseISO(state.goal.end.date),
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
                data-testid="end-description"
                placeholder="Descreva a situação final"
                rows={5}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
