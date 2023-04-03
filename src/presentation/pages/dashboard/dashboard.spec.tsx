import React from 'react'
import { render, screen } from '@testing-library/react'
import { Dashboard } from './dashboard'

const makeSut = () => {
  render(<Dashboard />)
}

describe('Dashboard', () => {
  test('should render dashboard intro if user not have goals', () => {
    makeSut()
    const intro = {
      text: 'Parece que você ainda não tem planos.',
      callToAction: 'Começe agora!',
    }
    expect(screen.getByText(intro.text)).toBeTruthy()
    expect(screen.getByText(intro.callToAction)).toBeTruthy()
    expect(screen.getByTestId('intro-image')).toBeTruthy()
    expect(screen.getByTestId('start-button')).toBeTruthy()
  })
})
