import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Checkbox } from './checkbox'
import { faker } from '@faker-js/faker'

const makeSut = (props = {}) => {
  return render(<Checkbox {...props} />)
}

describe('Checkbox component tests', () => {
  test('should render checkbox unchecked if no checked prop ', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId('checkbox-component')).toBeTruthy()
    expect(getByTestId('checkbox-component')).not.toHaveAttribute('checked')
  })

  test('should render checkbox checked if checked prop ', () => {
    const { getByTestId } = makeSut({ isChecked: true })
    expect(getByTestId('checkbox-component')).toHaveAttribute('checked')
  })

  test('should render correctlly label prop ', () => {
    const label = faker.company.name()
    const { getByTestId } = makeSut({ label })
    expect(getByTestId('checkbox-label')).toBeTruthy()
    expect(getByTestId('checkbox-label')).toHaveTextContent(label)
  })
})
