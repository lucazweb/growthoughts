import React from 'react'
import '@testing-library/jest-dom'
import { faker } from '@faker-js/faker'
import { render, fireEvent, screen } from '@testing-library/react'
import { Input } from './input'

const makeSut = (props = {}) => {
  const utils = render(<Input {...props} />)
  const input = screen.getByTestId<HTMLInputElement>('input-component')
  return { input, ...utils }
}

describe('Input component tests', () => {
  test('should have props if set it ', () => {
    const props = { id: 'email', name: 'email', type: 'text' }
    const { input } = makeSut(props)
    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('name', 'email')
  })

  test('should display updated value when onChange envent', () => {
    const { input } = makeSut()
    const email = faker.internet.email()

    fireEvent.change(input, { target: { value: email } })
    expect(input.value).toBe(email)
  })

  test('should display error message if input is invalid ', () => {
    const { getByTestId } = makeSut({ isInvalid: true })
    const errorMessage = getByTestId('input-error-message')
    expect(errorMessage).toBeTruthy()
  })

  test('should display error message correctlly ', () => {
    const errorMessage = 'Insira um e-mail válido'
    const { getByTestId } = makeSut({
      isInvalid: true,
      errorMessage,
    })
    const inputMessage = getByTestId('input-error-message')
    expect(inputMessage).toHaveTextContent(errorMessage)
  })
})
