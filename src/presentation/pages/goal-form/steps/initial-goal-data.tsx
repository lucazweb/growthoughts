/* eslint-disable quotes */
import React, { ChangeEvent, useContext } from 'react'
import { TextArea, Datepicker } from '@/presentation/components'
import { StyledPointWrapper } from '../styled'
import { InputFloatingLabel } from '@/presentation/components/input-floating-label/input-floating-label'
import { FaInfoCircle } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import Context from '@/presentation/contexts/form-context'
import pt from 'date-fns/locale/pt-BR'
import { DynamicTitle, type GoalFormState } from '../goal-form'
import { Row, Col } from 'react-flexbox-grid'

export const InitialGoalData = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target

    setState({
      ...state,
      goal: {
        ...state.goal,
        [name]: {
          ...state.goal[name],
          description: value,
        },
      },
    })
  }

  const renderPoint = (point: string, color: string) => {
    return (
      <StyledPointWrapper data-testid="pointA" background={color}>
        {point}
      </StyledPointWrapper>
    )
  }

  const StageForm = ({
    state,
    stage,
    color = '#ccc',
  }: {
    state: GoalFormState
    stage: 'start' | 'end'
    color: string
  }) => {
    const stateKey = stage === 'start' ? 'startOpen' : 'endOpen'
    const point = {
      start: 'A',
      end: 'B',
    }

    return (
      <Row className="mb-4">
        <Col sm={0} md={2}>
          <div className="hidden md:block">
            {renderPoint(point[stage], color)}
          </div>
        </Col>
        <Col md={10}>
          <Row>
            <Col
              md={12}
              className="flex md:block align-middle gap-4 items-center"
            >
              <div className="block md:hidden">
                {renderPoint(point[stage], color)}
              </div>
              {state.pickerCTRL[stateKey] ? (
                <Datepicker
                  data-testid={`${stage}-date-input`}
                  open={state.pickerCTRL[stateKey]}
                  selected={
                    state.goal[stage].date
                      ? parseISO(state.goal[stage].date)
                      : undefined
                  }
                  onChange={(date: Date) => {
                    setState({
                      ...state,
                      pickerCTRL: {
                        ...state.pickerCTRL,
                        [stateKey]: false,
                      },
                      goal: {
                        ...state.goal,
                        [stage]: {
                          ...state.goal[stage],
                          date: date.toISOString(),
                        },
                      },
                    })
                  }}
                />
              ) : (
                <span
                  data-testid={`${stage}-date-label`}
                  className="cursor-pointer hover:text-blue-600 flex gap-3 align-middle items-center"
                  onClick={() => {
                    setState({
                      ...state,
                      pickerCTRL: {
                        ...state.pickerCTRL,
                        [stateKey]: true,
                      },
                    })
                  }}
                >
                  {state.goal[stage].date
                    ? format(
                        parseISO(state.goal[stage].date),
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
                data-testid={`${stage}-description`}
                name={stage}
                placeholder={`Descreva a situação ${
                  stage === 'start' ? 'atual' : 'desejada'
                }`}
                rows={5}
                value={state.goal[stage].description}
                onChange={handleDescription}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={12}>
              <DynamicTitle
                content={
                  <span>
                    Insira um nome para o seu objetivo de sucessso, e descreva a
                    <strong className="text-red-800"> situação atual</strong>, e
                    <strong className="text-green-700"> desejada</strong> ...
                  </span>
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

          <StageForm state={state} stage="start" color="#fac7c7" />
          <StageForm state={state} stage="end" color="#669966" />
        </Col>
      </Row>
    </>
  )
}
