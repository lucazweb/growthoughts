import React from 'react'
import '@testing-library/jest-dom'
import { faker } from '@faker-js/faker'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TextArea } from './textarea'

const makeSut = (props = {}) => {
  const utils = render(<TextArea data-testid="textarea-component" {...props} />)
  const textarea = screen.getByTestId<HTMLInputElement>('textarea-component')
  return { textarea, ...utils }
}

describe('Textarea component tests', () => {
  test('should have props if set it ', () => {
    const props = { id: 'email', name: 'email', rows: 4, cols: 40 }
    const { textarea } = makeSut(props)
    expect(textarea).toBeTruthy()
    expect(textarea).toHaveAttribute('id', 'email')
    expect(textarea).toHaveAttribute('name', 'email')
    expect(textarea).toHaveAttribute('rows', '4')
    expect(textarea).toHaveAttribute('cols', '40')
  })

  test('should display updated value when onChange envent', () => {
    const { textarea } = makeSut()
    const text = faker.lorem.paragraph()

    fireEvent.change(textarea, { target: { value: text } })
    expect(textarea.value).toBe(text)
  })

  test('should display error message if textarea is invalid ', () => {
    const { getByTestId } = makeSut({
      errorMessage: 'Insira um conteúdo válido',
    })
    const errorMessage = getByTestId('textarea-error-message')
    expect(errorMessage).toBeTruthy()
  })

  test('should display error message correctlly ', () => {
    const errorMessage = 'Insira um conteúdo válido'
    const { getByTestId } = makeSut({
      errorMessage,
    })
    const textareaMessage = getByTestId('textarea-error-message')
    expect(textareaMessage).toHaveTextContent(errorMessage)
  })
})
