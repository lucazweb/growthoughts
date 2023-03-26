import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SignUp } from './signup.page'
import { BrowserRouter } from 'react-router-dom'

const makeSut = () => {
  const page = render(<SignUp />, { wrapper: BrowserRouter })
  const { getByTestId } = page
  return {
    page,
    getByTestId,
  }
}

describe('signin page tests', () => {
  test('should render sign-up page correctlly ', () => {
    const page = makeSut()
    const { getByTestId } = page

    const form = getByTestId('signup-form')
    expect(form).toBeTruthy()
  })

  test('should start with register button disabled', () => {
    const page = makeSut()
    const { getByTestId } = page
    const button = getByTestId('signup-button')
    expect(button).toBeDisabled()
  })
})
