import React, { useContext, useState } from 'react'
import { InputFloatingLabel } from '@/presentation/components/input-floating-label/input-floating-label'
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa'
import Context from '@/presentation/contexts/form-context'
import { type GoalFormState } from '../goal-form'
import { type Step } from '@/domain/models/goal'
import { Checkbox } from '@/presentation/components/checkbox/checkbox'
import { Col, Row } from 'react-flexbox-grid'

export const Decisions = () => {
  const { state, setState } = useContext<{
    state: GoalFormState
    setState: React.Dispatch<React.SetStateAction<GoalFormState>>
  }>(Context)

  const [decision, setDecision] = useState<Partial<Step>>({ name: '' })

  const handleDecision = () => {
    if (!state.goal.decisions.find((d) => d.name === decision.name)) {
      setState({
        ...state,
        goal: {
          ...state.goal,
          decisions: [
            ...state.goal.decisions,
            { name: decision.name, isComplete: false },
          ],
        },
      })
      setDecision({ name: '' })
    }
    setDecision({ name: '' })
  }

  const handleDeleteDecision = (decision: Step) => {
    const { decisions: arr } = state.goal
    setState({
      ...state,
      goal: {
        ...state.goal,
        decisions: arr.filter((d) => d.name !== decision.name),
      },
    })
  }

  const DecicionsList = ({ data }: { data: Step[] }) => {
    return data.length > 0 ? (
      <ul>
        {state.goal.decisions.map((d, i) => (
          <li key={i} className="flex gap-3">
            <Checkbox label={d.name} disabled />
            <FaTimesCircle
              onClick={() => {
                handleDeleteDecision(d)
              }}
              className="text-gray-400 hover:text-red-500 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    ) : (
      <span>Nada aqui ainda..</span>
    )
  }

  return (
    <Row>
      <Col md={12}>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={11}>
                <InputFloatingLabel
                  data-testid="input-decision-name"
                  label="Que decisões precisa tomar?"
                  autoComplete="off"
                  value={decision.name}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleDecision()
                  }}
                  onChange={(e) => {
                    setDecision({ ...decision, name: e.target.value })
                  }}
                />
              </Col>
              <Col md={1}>
                <button
                  className="disabled:cursor-not-allowed disabled:text-gray-500 text-green-700"
                  onClick={handleDecision}
                  type="button"
                  disabled={!decision.name || decision.name.length < 4}
                >
                  <FaPlusCircle size={32} />
                </button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <DecicionsList data={state.goal.decisions} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
