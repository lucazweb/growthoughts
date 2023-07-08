import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { GoalForm } from './goal-form'

const makeSut = () => {
  const sut = render(<GoalForm />)
  const { getByTestId } = sut

  return {
    getByTestId,
    sut,
  }
}

describe('Goal Form', () => {
  test('should render form correctlly', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId('initial-form-image')).toBeTruthy()
    expect(getByTestId('input-goal-name')).toBeTruthy()
    expect(getByTestId('pointA')).toBeTruthy()
    expect(getByTestId('start-date-label')).toBeTruthy()
    expect(getByTestId('start-description')).toBeTruthy()
    expect(getByTestId('pointB')).toBeTruthy()
    expect(getByTestId('end-date-label')).toBeTruthy()
    expect(getByTestId('end-description')).toBeTruthy()
    expect(getByTestId('next-step-button')).toBeTruthy()
  })

  // test('should display step 1 of goal form', () => {})
  test('should start with form button disabled', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId('next-step-button')).toBeDisabled()
  })

  // test('should allow button click if all fields are filled', () => {
  //   const { getByTestId } = makeSut()
  //   fireEvent.change(getByTestId('input-goal-name'), {
  //     target: { value: faker.random.word() },
  //   })

  //   fireEvent.click(getByTestId('start-date-label'))
  //   fireEvent.change(getByTestId('start-date-input'), {})
  // })

  // test('should display step 1 of goal form', () => {})

  // test('should render step 2 correctly', () => {

  // })
})
