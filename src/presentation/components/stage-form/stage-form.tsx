import React, { ChangeEvent } from "react"
import { Col, Row } from "react-flexbox-grid"
import { StyledPointWrapper } from "./styled"
import { GoalFormState } from "@/presentation/pages"
import { Datepicker } from "../datepicker/datepicker"
import { format, parseISO } from "date-fns"
import { FaInfoCircle } from "react-icons/fa"
import { TextArea } from "../textarea/textarea"
import pt from "date-fns/locale/pt-BR"

export const StageForm = ({
  state,
  stage,
  color = "#ccc",
  setState,
  includeDateIntervals,
}: {
  state: GoalFormState
  stage: "start" | "end"
  includeDateIntervals?: {
    start: Date
    end: Date
  }[]
  color: string
  setState: React.Dispatch<React.SetStateAction<GoalFormState>>
}) => {
  const stateKey = stage === "start" ? "startOpen" : "endOpen"
  const point = {
    start: "A",
    end: "B",
  }

  const renderPoint = (point: string, color: string) => {
    return (
      <StyledPointWrapper data-testid="pointA" background={color}>
        {point}
      </StyledPointWrapper>
    )
  }

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
                includeDateIntervals={includeDateIntervals}
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
                  : "Selecione a data"}
                <FaInfoCircle color="#999" />
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <TextArea
              className="disabled:bg-gray-500 disabled:cursor-not-allowed"
              data-testid={`${stage}-description`}
              name={stage}
              disabled={!state.goal[stage].date}
              placeholder={`Descreva a situação ${
                stage === "start" ? "atual" : "desejada"
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
