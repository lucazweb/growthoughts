import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { type Step, Stepper } from './steps'
import { faker } from '@faker-js/faker'

const makeStepsMock = (stepsLength: number): Step[] => {
  const steps = []
  for (let i = 0; i < stepsLength; i++) {
    steps.push({
      title: faker.random.word(),
      order: i + 1,
      isComplete: !i,
      isCurrent: !i,
    })
  }
  return steps
}

type SutProps = {
  steps: Step[]
  onClick?: (step: Step, steps: Step[]) => void
}

const makeSut = (
  props: SutProps = {
    steps: makeStepsMock(2),
  }
) => {
  return render(<Stepper {...props} />)
}

describe('Stepper', () => {
  test('should render Stepper correctlly', () => {
    const steps = makeStepsMock(3)
    const { getByTestId, getAllByTestId } = makeSut({ steps })
    expect(getAllByTestId('step-item')).toHaveLength(steps.length)
    expect(getAllByTestId('step-item')[1]).toHaveTextContent(steps[1].title)
    expect(getByTestId('check-icon')).toBeTruthy()
  })
  test('should call onClick on step user click', async () => {
    const props = { steps: makeStepsMock(2), onClick: jest.fn() }
    const { getAllByTestId } = makeSut(props)
    const secondStep = getAllByTestId('step-title')[1]

    fireEvent.click(secondStep)
    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalled()
      expect(props.onClick).toHaveBeenCalledTimes(1)
    })
  })

  test('should display check icon if step is complete', () => {
    const steps = makeStepsMock(2)
    const { getByTestId, getAllByTestId } = makeSut({ steps })
    expect(getByTestId('check-icon')).toBeTruthy()
    expect(getAllByTestId('check-icon')).toHaveLength(1)
  })
})
