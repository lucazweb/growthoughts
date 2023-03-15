import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './card'

describe('Card component render', () => {
  test('should render component correctly ', () => {
    const { getByTestId } = render(
      <Card>
        <h1 data-testid="children-prop">Card Component</h1>
      </Card>
    )

    const component = getByTestId('card-component')
    const children = getByTestId('children-prop')
    expect(component).toBeTruthy()
    expect(children).toBeTruthy()
  })

  test('should have correct tailwind classes ', () => {
    const { getByTestId } = render(<Card />)
    const component = getByTestId('card-component')
    expect(component.classList.contains('box-content')).toBe(true)
    expect(component.classList.contains('rounded-lg')).toBe(true)
    expect(component.classList.contains('h-96')).toBe(true)
    expect(component.classList.contains('w-96')).toBe(true)
    expect(component.classList.contains('border')).toBe(true)
    expect(component.classList.contains('border-gray-200')).toBe(true)
    expect(component.classList.contains('mt-3')).toBe(true)
    expect(component.classList.contains('mb-3')).toBe(true)
    expect(component.classList.contains('border-1')).toBe(true)
    expect(component.classList.contains('shadow-lg')).toBe(true)
    expect(component.classList.contains('hover:shadow-md')).toBe(true)
    expect(component.classList.contains('mx-auto')).toBe(true)
  })
})
