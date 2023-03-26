import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SignIn } from './signin.page'
import { BrowserRouter } from 'react-router-dom'

const makeSut = () => {
  const page = render(<SignIn />, { wrapper: BrowserRouter })
  const { getByTestId } = page
  return {
    page,
    getByTestId,
  }
}

describe('signin page tests', () => {
  test('should render sign-in page correctlly ', () => {
    const page = makeSut()
    const { getByTestId } = page

    const form = getByTestId('signin-form')
    expect(form).toBeTruthy()
  })

  test('should start with button sigin-in disabled', () => {
    const page = makeSut()
    const { getByTestId } = page
    const button = getByTestId('signin-button')
    expect(button).toBeDisabled()
  })

  test('should render signup button', () => {
    const page = makeSut()
    const { getByTestId } = page
    const button = getByTestId('signup-button')
    expect(button).toBeTruthy()
  })

  // test('should display error in case of invalid e-mail', () => {
  //   expect(true).toBe(false)
  // })

  // test('should allow button click if email and password fields are valid', () => {
  //   const page = makeSut()
  //   const { getByTestId } = page
  //   const button = getByTestId('signin-button')
  //   expect(button).not.toHaveProperty('disabled')
  // })

  // test('should display error if credentials are invalid ', () => {
  //   expect(true).toBe(false)
  // })

  // test('should redirect user if credentials are valid ', () => {
  //   expect(true).toBe(false)
  // })
})
